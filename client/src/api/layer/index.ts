const baseUrl = import.meta.env.VITE_API_URL;
import { getToken } from "@utils/supabase";

export const get = async ({ url }: { url: string }) => {
  const token = getToken();
  const response = await fetch(`${baseUrl}/${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const post = async ({ url, data }: { url: string; data: unknown }) => {
  const token = getToken();
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data), // Move this line outside the headers object
  });
  return response;
};

export const uploadFile = async ({
  url,
  file,
}: {
  url: string;
  file: FormData;
}) => {
  const token = getToken();
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: file,
  });
  return response;
};
