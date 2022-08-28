import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import { buildFaves } from '@helpers/faves';
import { News } from '@types';

export const FavesContext = createContext<FavesContextType | null>(null);

const FavesProvider = ({ children }: FavesProviderType) => {
  const [faves, setFavorites] = useState(buildFaves());

  const toggleFave = useCallback(
    (news: News) => () => {
      setFavorites((prev) => {
        const index = prev.findIndex((fav) => fav.objectID === news.objectID);
        if (index > -1) {
          const arr = [...prev];
          arr.splice(index, 1);
          localStorage.removeItem(`news_${news.objectID}`);
          return arr;
        }
        return [...prev, { ...news }].sort((a, b) => {
          const current = new Date(a.created_at);
          const next = new Date(b.created_at);
          localStorage.setItem(`news_${news.objectID}`, JSON.stringify(news));
          return next.getTime() - current.getTime();
        });
      });
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      faves,
      toggleFave
    }),
    [faves, toggleFave]
  );

  return <FavesContext.Provider value={contextValue}>{children}</FavesContext.Provider>;
};

export default FavesProvider;

export type FavesContextType = {
  faves: News[];
  toggleFave: (news: News) => () => void;
};

type FavesProviderType = {
  children: ReactNode;
};
