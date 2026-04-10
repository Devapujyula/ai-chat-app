import { useEffect, useRef } from "react";

function ChatWindow({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        height: "60vh",
        padding: "10px",
        overflowY: "scroll",
        borderRadius: "10px",
        backgroundColor: "#fafafa",
      }}
    >
      {messages.length === 0 ? (
        <p>No messages yet...</p>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                background: msg.role === "user" ? "#007bff" : "#eee",
                color: msg.role === "user" ? "#fff" : "#000",
                padding: "10px 14px",
                borderRadius: "16px",
                maxWidth: "70%",
                fontSize: "14px",
                lineHeight: "1.4",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))
      )}

      {loading && (
        <p>
          <i>AI is typing...</i>
        </p>
      )}
      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatWindow;
