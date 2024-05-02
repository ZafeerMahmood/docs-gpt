import { useChatStore } from "@/lib/store";

const useChat = () => {
  const setChat = useChatStore((state) => state.setChat);
  const setLoading = useChatStore((state) => state.setLoading);
  const setError = useChatStore((state) => state.setError);
  const setContext = useChatStore((state) => state.setContext);
  const clearChat = useChatStore((state) => state.clearChat);

  return {
    user: (message: string) => {
      setChat({ message, sender: "user", time: new Date() });
      setLoading(true);
    },
    bot: (message: string) => {
      setChat({ message, sender: "bot", time: new Date() });
      setLoading(false);
    },
    error: (error: string) => {
      setLoading(false);
      setError(error);
    },
    context: (context: []) => {
      setContext(context);
    },
    clear: () => {
      clearChat();
    },
  };
};

export { useChat };
