import { BASE_URL } from "@/constants";

export const remove = async ({ url, token }) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
