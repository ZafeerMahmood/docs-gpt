import { create } from "zustand";
import { IAppTheme, IMessage } from "@/types";
import { User } from "@supabase/supabase-js";

interface themeStore {
  theme: IAppTheme;
  setTheme: (theme: IAppTheme) => void;
}

interface chatStore {
  chat: IMessage[];
  setChat: (chat: IMessage) => void;
}

interface userStore {
  user: User | null | undefined;
  setUser: (user: User | null | undefined) => void;
}

export const useUserStore = create<userStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

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
