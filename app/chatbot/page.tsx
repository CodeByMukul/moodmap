"use client"

import { useState } from 'react';

interface ChatMessage {
  sender: 'user' | 'bot';
  message: string;
}

const Chatbot = () => {
  const [messagee, setMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleKeyPress = (e:React.KeyboardEvent) => {
    if (e.key=="Enter") {
      handleSendMessage();
    }
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    const message="the message you will receive after a full stop if from a person who is stress and needs help managing stress, you are a bot from MoodMap which is a stress management website . "+messagee;
    if (!message.trim()) return;
    setMessage('');

    // Add user message to chat history
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { sender: 'user', message },
    ]);
    setLoading(true);

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: message }), // Send message as the prompt
      });

      if (!res.ok) {
        throw new Error('Failed to fetch response from the backend');
      }

      // Try parsing the response as JSON
      const data = await res.json();

      if (data && data.output) {
        //console.log(data.output.split("?<>"))
        // Add bot response to chat history
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { sender: 'bot', message: data.output },
        ]);
      } else {
        throw new Error('Invalid response from backend');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: 'user', message },
        { sender: 'bot', message: 'Error with request' },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md p-4 border border-gray-300 rounded-lg shadow-lg flex flex-col space-y-4">
      <div className="flex-1 overflow-y-auto space-y-3">
        {chatHistory.map((entry, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              entry.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
            }`}
          >
            <p>{entry.message}</p>
          </div>
        ))}
        {loading && (
          <div className="p-3 rounded-lg bg-gray-100 text-left">
            <p>Typing...</p>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={messagee}
          onChange={handleMessageChange}
          placeholder="Type a message"
          onKeyDown={handleKeyPress}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

