export type IAppTheme = "black" | "lofi";

export interface IMessage {
  message: string;
  sender: "bot" | "user";
  time: Date;
}
