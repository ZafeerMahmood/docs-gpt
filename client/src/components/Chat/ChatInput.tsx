import React, { useState, useEffect } from "react";
import { UploadIcon } from "@icons/upload";
import { useChat } from "@/hooks/useChat";
import { useChatStore } from "@/lib/store";
import { uploadFileApi, chatApi } from "@/api";

function ChatInput() {
  const chatStore = useChatStore((state) => state.chat);
  const chatContext = useChatStore((state) => state.context);
  const loading = useChatStore((state) => state.loading);
  const chatMethods = useChat();
  const [inputValue, setInputValue] = useState("");
  const fileRef = React.useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    const element = document.getElementById("footer");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [chatStore]);

  const handleUserInput = async () => {
    if (!inputValue) return;
    chatMethods.user(inputValue);
    const response = await chatApi({
      message: inputValue,
      context: chatContext,
    });
    if (response.status === 200) {
      const data = await response.json();
      chatMethods.bot(data.message);
    } else {
      chatMethods.bot("LLM Error: Please try again later.");
    }
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleUserInput();
    }
  };

  const handleUpload = async () => {
    if (fileRef.current) {
      const file = fileRef.current.files ? fileRef.current.files[0] : null;
      if (file) {
        const newForm = new FormData();
        newForm.append("file", file);
        chatMethods.user(`${file.name} is being uploaded`);
        try {
          const response = await uploadFileApi(newForm);
          if (response.status === 200) {
            const data = await response.json();
            chatMethods.bot(data.message);
            chatMethods.context(data.context);
          } else {
            chatMethods.bot(
              "Error: Failed to upload file. Please try again later."
            );
          }
        } catch (error) {
          console.error("Error:", error);
          chatMethods.bot(
            "Error: Failed to upload file due to an unexpected error."
          );
        } finally {
          fileRef.current.value = "";
        }
      } else {
        chatMethods.bot("No file selected");
      }
    }
  };

  return (
    <div className="fixed mx-auto bottom-8 w-full p-5 max-w-4xl ">
      {loading && (
        <span className="loading loading-dots loading-lg  mx-auto"></span>
      )}
      <label className="input input-bordered flex items-center gap-2 input-primary">
        <input
          id="chat-input"
          type="text"
          className="grow "
          placeholder="Type a message"
          value={inputValue}
          disabled={loading}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          id="file-upload"
          type="file"
          accept=".pdf"
          disabled={loading}
          onChange={handleUpload}
          style={{ display: "none" }}
          ref={fileRef}
        />
        <button
          id="upload-btn"
          onClick={() => fileRef.current && fileRef.current.click()}
        >
          <kbd className="kbd kbd-md border-accent">
            <UploadIcon />
          </kbd>
        </button>
        <button className="" onClick={handleUserInput}>
          <kbd className="kbd kbd-md border-accent">↵</kbd>
        </button>
      </label>
    </div>
  );
}
export default ChatInput;
