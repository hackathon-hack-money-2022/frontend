import { useState } from "react";
import { Control, UseFormHandleSubmit, UseFormWatch } from "react-hook-form";
import { CircularProgress, Grid } from "@mui/material";
import { SimpleButton } from "../../components/SimpleButton";
import { CreateButton } from "./CreateButton";
import { ShowSnackbar } from "../../components/ShowSnackkbar";
import { sendMetamaskTransaction } from "../../utils/sendMetamaskTransaction";
import { Abi, AbiStruct, Uint8 } from "tinyeth";
import { AssetListItem } from "./AssetListItem";
import { createAssetListControllerItems } from "./AssetListControllerItems";
import { TEST_TOKEN_LENGTH } from "../../communication/TestAssetConfig";
import { WeiInputController } from "./WeiInputController";

export function AssetList({ handleSubmit, control, watch, onSubmit }: Props) {
  const [asset, setAssets] = useState<Array<[JSX.Element, JSX.Element]>>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [txHash, setTxHash] = useState<string>("");

  return (
    <form>
      <Grid
        container
        spacing={2}
        key={asset.length}
        style={{ maxWidth: "75%" }}
      >
        {asset.map((item, index) => {
          return (
            <AssetListItem
              inputField={item[0]}
              selectorField={item[1]}
              onDelete={() => {
                const newAsset = [...asset];
                newAsset.splice(index, 1);
                setAssets(newAsset);
              }}
            />
          );
        })}
        <Grid item xs={12}>
          <SimpleButton
            disabled={TEST_TOKEN_LENGTH === selectedValues.length}
            onClick={() => {
              setAssets([
                ...asset,
                createAssetListControllerItems({
                  asset,
                  control,
                  selectedValues,
                  setSelectedValues,
                }),
              ]);
            }}
          >
            Add additional asset
          </SimpleButton>
        </Grid>

        <Grid item xs={12}>
          <WeiInputController control={control} />
        </Grid>

        <Grid item xs={12}>
          {showLoading ? <CircularProgress /> : null}

          <CreateButton
            watch={watch}
            show={!showLoading}
            onCreate={async (values, wei) => {
              setShowLoading(true);

              const getPercentageNumber = (token: string) => {
                const value = Number(values[token]);
                return value ? value : 0;
              };

              sendMetamaskTransaction({
                data: new Abi().simpleFunctionEncoding({
                  functionName: "deposit",
                  arguments: new AbiStruct([
                    new Uint8(getPercentageNumber("SNX")),
                    new Uint8(getPercentageNumber("DAI")),
                  ]),
                }),
                value: wei,
              })
                .then((txHash) => {
                  /**
                   * To many state updates, this should be simplified
                   */
                  setShowError(false);
                  setShowLoading(false);
                  setShowSuccess(true);
                  setTxHash(txHash);

                  setAssets([]);
                  setSelectedValues([]);
                })
                .catch(() => {
                  setShowLoading(false);
                  setShowError(true);
                });
            }}
          />
        </Grid>

        <ShowSnackbar
          isOpen={showSuccess}
          type={"success"}
          message={`Transaction sent! tx: ${txHash}`}
          handleClick={() =>
            window.open(`https://kovan-optimistic.etherscan.io/tx/${txHash}`)
          }
          handleClose={() => setShowSuccess(false)}
        />
        <ShowSnackbar
          isOpen={showError}
          type={"error"}
          message={"Something went wrong :("}
          handleClick={() => undefined}
          handleClose={() => setShowError(false)}
        />
      </Grid>
    </form>
  );
}

interface Props {
  control: Control;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: unknown) => any;
  watch: UseFormWatch<any>;
}
