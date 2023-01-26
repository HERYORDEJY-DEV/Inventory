export type InventoryTypes = {
  id: number;
  name: string;
  purchasePrice: number;
  type: '' | 'ART' | 'ELECTRONICS' | 'MUSIC_INSTRUMENT' | 'JEWELRY';
  description?: string;
  photo: string;
  index?: number;
};
