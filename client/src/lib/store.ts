import { create } from "zustand";
import { IAppTheme, IMessage } from "@/types";
import { User } from "@supabase/supabase-js";

interface themeStore {
  theme: IAppTheme;
  setTheme: (theme: IAppTheme) => void;
}

interface chatStore {
  context: [];
  error: string | null;
  loading: boolean;
  chat: IMessage[];
  setChat: (chat: IMessage) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setContext: (context: []) => void;
  clearChat: () => void;
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
    make it persistent by saving it to session storage
  */
  context: [],
  error: null,
  loading: false,
  chat: [],
  setChat: (chat) => {
    set((state) => ({ chat: [...state.chat, chat] }));
  },
  setLoading: (loading) => {
    set({ loading });
  },
  setError: (error) => {
    set({ error });
  },
  setContext: (context) => {
    set({ context });
  },
  clearChat: () => {
    set({ chat: [] });
  },
}));

export const useThemeStore = create<themeStore>((set) => ({
  theme: "black",
  setTheme: (theme) => {
    set({ theme });
  },
}));
