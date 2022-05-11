import { GetAsset } from "../../communication/GetAssets";
import { BaseForm, SimpleSelection } from "../../components/SimpleSelection";

export function AssetSelection(props: BaseForm): JSX.Element {
  return (
    <GetAsset>
      {(items) => (
        <SimpleSelection
          {...props}
          label={'Asset'}
          items={items.map((item) => ({
            name: item.symbol,
            value: item.symbol,
          }))}
        />
      )}
    </GetAsset>
  );
}
