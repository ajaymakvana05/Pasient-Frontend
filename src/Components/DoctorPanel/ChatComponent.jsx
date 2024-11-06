import React, { useState } from "react";
import { FaPaperclip, FaPaperPlane, FaFilePdf, FaSearch } from "react-icons/fa";
import ImagePlaceholderImage from "../../assets/images/imageplaceholder.svg";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Daisy Benjamin",
      time: "9:00 PM",
      text: "Hi there. How are you?",
      type: "received",
    },
    {
      id: 2,
      sender: "You",
      time: "9:05 AM",
      text: "Hi. I am coming there in a few minutes.",
      type: "sent",
    },
    {
      id: 3,
      sender: "Daisy Benjamin",
      time: "9:07 AM",
      text: "Waiting for your call.",
      type: "received",
    },
    {
      id: 4,
      sender: "Daisy Benjamin",
      time: "9:07 AM",
      image: "/path-to-image",
      type: "image",
    },
    {
      id: 5,
      sender: "You",
      time: "9:10 AM",
      fileName: "PDF Documentation",
      filePath: "/path-to-pdf-file.pdf",
      type: "file",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          text: newMessage,
          type: "sent",
          time: "10:15 AM",
        },
      ]);
      setNewMessage("");
    }
  };

  const handleImageClick = (imageUrl) => {
    // Open the image in a new window for preview
    window.open(imageUrl, "_blank");
  };

  const handlePdfClick = (pdfUrl) => {
    // Open the PDF file in a new window or tab
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="chat-container flex gap-12">
      {/* Sidebar */}
      <div className="sidebar w-1/4 bg-white p-4">
        <h3 className="font-bold text-lg mb-4">Chat</h3>

        {/* Search Bar */}
        <div className="mb-4 relative">
          <input
            type="text"
            className="w-full p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Patient"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
        </div>

        {/* Patient List */}
        <div className="patient-list">
          <div className="patient-item p-2 cursor-pointer bg-white rounded mb-2 hover:bg-gray-100">
            Daisy Benjamin
          </div>
          {/* Add more patient items here */}
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area flex-1 p-4 flex flex-col bg-white">
        <div className="chat-header bg-gray-100 p-2 rounded mb-4">
          <h3 className="font-bold">Daisy Benjamin</h3>
          <span className="text-sm">9:00 PM</span>
        </div>

        <div className="chat-messages flex-1 overflow-y-auto p-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${
                msg.type === "sent" || msg.type === "file"
                  ? "text-right"
                  : "text-left"
              } mb-4`}
            >
              {msg.type === "file" ? (
                <div
                  className="file-message flex items-center justify-end bg-gray-200 p-2 rounded ml-auto w-1/4 cursor-pointer"
                  onClick={() => handlePdfClick(msg.filePath)}
                >
                  <FaFilePdf className="mr-2 text-red" />
                  <span className="text-black">{msg.fileName}</span>
                </div>
              ) : msg.type === "image" ? (
                <img
                  src={ImagePlaceholderImage}
                  alt="Shared"
                  className="w-24 h-24 rounded-md cursor-pointer"
                  onClick={() => handleImageClick(msg.image)}
                />
              ) : (
                <div
                  className={`message-bubble p-2 inline-block rounded-md ${
                    msg.type === "sent"
                      ? "bg-blue text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              )}
              <span className="text-xs text-gray-500 block mt-1">{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="message-input flex items-center p-2 bg-gray-100 rounded mt-4">
          <input
            type="text"
            className="flex-1 p-2 border-2 rounded mr-2"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <FaPaperclip className="mr-2 cursor-pointer" />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue text-white rounded"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
