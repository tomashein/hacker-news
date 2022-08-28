import { useContext } from 'react';
import { FavesContext, FavesContextType } from '@app/faves';

const useFaves = () => useContext(FavesContext) as FavesContextType;

export default useFaves;
