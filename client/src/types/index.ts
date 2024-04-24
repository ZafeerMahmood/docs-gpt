export type IModalStore = "llava" | "gpt4" | "Mistral";

export type IAppTheme = "light" | "dark";

export interface IMessage {
  message: string;
  sender: "bot" | "user";
  time: Date;
}
