import Chat from "@components/Chat";
import AuthProvider from "@auth/provider";
function App() {
  return (
    <AuthProvider>
      <div className="flex items-start justify-center max-w-4xl mx-auto">
        <Chat />
      </div>
    </AuthProvider>
  );
}

export default App;
