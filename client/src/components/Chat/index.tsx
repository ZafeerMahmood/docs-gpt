import { useChatStore } from "@/lib/store";
import ChatInput from "./ChatInput";
function Chat() {
  const chatStore = useChatStore((state) => state.chat);
  const message = (msg: string) => {
    return (
      <div className="chat-bubble ">
        <div className="chat-bubble">{msg}</div>{" "}
      </div>
    );
  };
  return (
    <div className="w-full h-full">
      <div className="p-10">
        <div className="mb-28">
          {chatStore.map((msg, index) => (
            <div
              key={index}
              className={`chat ${
                msg.sender === "bot" ? "chat-start" : "chat-end"
              }`}
            >
              <div className="chat-header">
                {msg.sender === "bot" ? "Tax GPT" : "You"}
              </div>
              {message(msg.message)}
            </div>
          ))}
        </div>
      </div>
      <ChatInput />
    </div>
  );
}

export default Chat;
