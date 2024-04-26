import { useEffect } from "react";
import { useUserStore } from "@/lib/store";
import { supabaseClient } from "@/utils/supabase";
import LoggedOutPage from "./logout";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session?.user);
      }
    });
  }, [setUser]);

  return user ? <>{children}</> : <LoggedOutPage />;
}

export default AuthProvider;
