import React, { useState, useEffect } from "react";
import { UploadIcon } from "@icons/upload";
import { useChat } from "@/hooks/useChat";
import { useChatStore } from "@/lib/store";

function ChatInput() {
  const chatStore = useChatStore((state) => state.chat);
  const chatMethods = useChat();
  const [inputValue, setInputValue] = useState("");

  const scrollToBottom = () => {
    const element = document.getElementById("footer");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [chatStore]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!inputValue) return;
      chatMethods.bot(inputValue);
      chatMethods.user(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="fixed mx-auto bottom-8 w-full p-5 max-w-4xl ">
      <label className="input input-bordered flex items-center gap-2 input-primary">
        <input
          type="text"
          className="grow "
          placeholder="Type a message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="" onClick={() => {}}>
          <kbd className="kbd kbd-md border-accent">
            <UploadIcon />
          </kbd>
        </button>
        <button
          className=""
          onClick={() => {
            if (!inputValue) return;
            chatMethods.user(inputValue);
            setInputValue("");
          }}
        >
          <kbd className="kbd kbd-md border-accent">↵</kbd>
        </button>
      </label>
    </div>
  );
}

export default ChatInput;
