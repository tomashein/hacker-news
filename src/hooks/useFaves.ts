import { useContext } from 'react';
import { FavesContext, FavesContextType } from '@context/faves';

const useFaves = () => useContext(FavesContext) as FavesContextType;

export default useFaves;
