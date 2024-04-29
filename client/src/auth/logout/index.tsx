import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabaseClient } from "@/utils/supabase";
export default function LoggedOutPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      <div className="max-w-xl w-full p-5">
        <Auth
          supabaseClient={supabaseClient}
          appearance={{
            theme: ThemeSupa,
          }}
          providers={[]}
          theme="dark"
          redirectTo="/"
          showLinks
        />
      </div>
    </div>
  );
}
