import { create } from 'zustand';

const useFavoriteStore = create((set) => ({
  favorites: [],
  
  addFavorite: (book) => set((state) => {
    const isExist = state.favorites.some((fav) => fav.key === book.key);
    if (!isExist) {
      return { favorites: [...state.favorites, book] };
    }
    return state;
  }),

  removeFavorite: (bookKey) => set((state) => ({
    favorites: state.favorites.filter((book) => book.key !== bookKey),
  })),
}));

export default useFavoriteStore;