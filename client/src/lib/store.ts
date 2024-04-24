import { create } from "zustand";
import { IModalStore, IAppTheme, IMessage } from "@/types";

interface modelStore {
  model: IModalStore;
  setModel: (model: IModalStore) => void;
}

interface themeStore {
  theme: IAppTheme;
  setTheme: (theme: IAppTheme) => void;
}

interface chatStore {
  chat: IMessage[];
  setChat: (chat: IMessage) => void;
}

export const useChatStore = create<chatStore>((set) => ({
  /*Initial state of the chat
    can be used to save chat history to local storage and retrieve it
    plus be Used as Context for the llm
  */
  chat: [],
  setChat: (chat) => {
    set((state) => ({ chat: [...state.chat, chat] }));
  },
}));

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
