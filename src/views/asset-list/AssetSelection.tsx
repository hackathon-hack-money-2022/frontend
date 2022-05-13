import { GetAsset } from "../../communication/GetAssets";
import { BaseForm, SimpleSelection } from "../../components/SimpleSelection";

export function AssetSelection(props: Props): JSX.Element {
  return (
    <GetAsset>
      {(items) => (
        <SimpleSelection
          {...props}
          label={'Asset'}
          items={items.map((item) => ({
            name: item.symbol,
            value: item.symbol,
            deactivated: props.nameSelected.includes(item.symbol)
          }))}
        />
      )}
    </GetAsset>
  );
}

interface Props extends BaseForm{
  nameSelected: string[];
}