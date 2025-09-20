import { create } from "zustand";

export const usePokemonStore = create((set) => ({
  currentPage: 1,
  currentViewType: 'list',
  setCurrentPage: (num) => set({ currentPage: num }),
  setCurrentViewType: (type) => set({currentViewType: type}),
}));
