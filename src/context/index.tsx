import React, {useState} from 'react';
import {InventoryTypes} from '../types/inventory';
import {AppContextTypes} from '../types/context';

export const AppContext = React.createContext<AppContextTypes | null>(null);

interface Props {
  children: React.ReactNode;
}
export default function AppContextProvider({children}: Props) {
  const [state, setState] = useState<AppContextTypes['state']>({
    inventories: data,
    inventoryCategory,
  });

  const onSetState = (key: string, value: unknown) =>
    setState(prevState => ({...prevState, [key]: value}));

  const onAddInventories = (inventory: InventoryTypes) =>
    setState(prevState => ({
      ...prevState,
      inventories: [...prevState.inventories, inventory],
    }));

  return (
    <AppContext.Provider value={{state, onSetState, onAddInventories}}>
      {children}
    </AppContext.Provider>
  );
}

const data: Array<{
  name: string;
  description?: string;
  photo: string;
  id: number;
  purchasePrice: number;
  type: '' | 'ART' | 'ELECTRONICS' | 'MUSIC_INSTRUMENT' | 'JEWELRY';
  index?: number;
}> = [
  {
    id: 1,
    name: 'Cartier ring',
    purchasePrice: 5780,
    type: 'JEWELRY',
    description: 'Gift from my grandfather',
    photo: 'https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg',
  },
  {
    id: 2,
    name: 'Guitar',
    purchasePrice: 850,
    type: 'MUSIC_INSTRUMENT',
    description: '',
    photo: 'https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg',
  },
  {
    id: 3,
    name: 'Necklace',
    purchasePrice: 8250,
    type: 'JEWELRY',
    description: '',
    photo:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
];

const inventoryCategory = [
  {label: 'Art', value: 'ART'},
  {label: 'Electronics', value: 'ELECTRONICS'},
  {label: 'Jewelry', value: 'JEWELRY'},
  {label: 'Musical Instruments', value: 'MUSIC_INSTRUMENT'},
];
