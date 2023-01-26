import {InventoryTypes} from './inventory';

export interface AppContextTypes {
  state: {
    inventories: Array<InventoryTypes>;
    inventoryCategory: Array<{label: string; value: string}>;
  };
  onSetState: (key: string, value: string) => void;
  onAddInventories: (inventory: InventoryTypes) => void;
}
