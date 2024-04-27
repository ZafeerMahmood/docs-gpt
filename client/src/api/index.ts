import { get, post, uploadFile } from "./layer";
const api = {
  get,
  post,
  uploadFile,
};

export default api;

export const uploadFileApi = async (file: FormData) => {
  try {
    const response = await api.uploadFile({
      url: "upload",
      file,
    });
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const chatApi = async (message: string) => {
  try {
    const response = await api.post({
      url: "chat",
      data: { message },
    });
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
