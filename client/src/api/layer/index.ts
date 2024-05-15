const baseUrl = import.meta.env.VITE_API_URL;

export const get = async ({ url }: { url: string }) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const post = async ({ url, data }: { url: string; data: unknown }) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const remove = async ({ url }: { url: string }) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "DELETE",
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
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "POST",
    headers: {},
    body: file,
  });
  return response;
};
