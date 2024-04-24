import { create } from "zustand";
import { IModalStore, IAppTheme } from "@/types";

interface modelStore {
  model: IModalStore;
  setModel: (model: IModalStore) => void;
}

interface themeStore {
  theme: IAppTheme;
  setTheme: (theme: IAppTheme) => void;
}

export const useThemeStore = create<themeStore>((set) => ({
  theme: "dark",
  setTheme: (theme) => {
    set({ theme });
  },
}));

export const useModelStore = create<modelStore>((set) => ({
  model: "llava",
  setModel: (model) => {
    set({ model });
  },
}));
