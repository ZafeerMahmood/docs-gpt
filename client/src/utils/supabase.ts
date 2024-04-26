import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseId = import.meta.env.VITE_SUPABASE_ID;

export const supabaseClient = createClient(supabaseUrl, publicAnonKey);

export const getToken = () => {
  const storageKey = `sb-${supabaseId}-auth-token`;
  const sessionDataString = localStorage.getItem(storageKey);
  const sessionData = JSON.parse(sessionDataString || "null");
  const token = sessionData?.access_token;

  return token;
};
