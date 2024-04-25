import { useChatStore } from "@/lib/store";

const useChat = () => {
  const setChat = useChatStore((state) => state.setChat);
  const use = {
    user: (message: string) => {
      setChat({ message, sender: "user", time: new Date() });
    },
    bot: (message: string) => {
      setChat({ message, sender: "bot", time: new Date() });
    },
  };

  return use;
};

export { useChat };
