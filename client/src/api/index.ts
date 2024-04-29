import { get, post, uploadFile, remove } from "./layer";
const api = {
  get,
  post,
  uploadFile,
  delete: remove,
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

export const chatApi = async ({
  message,
  context = [],
}: {
  message: string;
  context: unknown;
}) => {
  try {
    const response = await api.post({
      url: "chat",
      data: { message, context },
    });
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const deleteFileApi = async (file: string) => {
  try {
    const response = await api.delete({
      url: `delete/${file}`,
    });
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const downloadFileApi = async (file: string) => {
  try {
    const response = await api.get({
      url: `download/${file}`,
    });
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getFilesApi = async () => {
  try {
    const response = await api.get({
      url: "files",
    });
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
