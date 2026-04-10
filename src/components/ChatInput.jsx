import { useState } from "react";
import axios from "axios";

function ChatInput({ setMessages, messages, setLoading, loading }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = {
      role: "user",
      content: input,
    };

    const updatedMessages = [...messages, newMessage];

    setMessages(updatedMessages); // update state

    setInput("");

    sendToAI(updatedMessages); //  call API separately
  };

  const sendToAI = async (updatedMessages) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful React expert.",
            },
            ...updatedMessages,
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "AI Chat App",
          },
        },
      );

      const aiMessage = response.data.choices[0].message;

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
          }}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            padding: "10px 16px",
            backgroundColor: loading ? "#999" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>

      {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
    </div>
  );
}

export default ChatInput;
