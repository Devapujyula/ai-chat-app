import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>AI Chat App</h2>

      <ChatWindow messages={messages} loading={loading} />

      <ChatInput
        setMessages={setMessages}
        messages={messages}
        setLoading={setLoading}
        loading={loading}
      />
    </div>
  );
}

export default App;
