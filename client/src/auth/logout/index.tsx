import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabaseClient } from "@/utils/supabase";
export default function LoggedOutPage() {
  return (
    <div className="max-w-4xl m-auto ">
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
  );
}
