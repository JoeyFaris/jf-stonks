'use client';

import React, { useState, useRef, useEffect } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const chatBoxRef = useRef(null);
  const emojiButtonRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, inputText]);
      setInputText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleEmojiButtonClick = () => {
    setShowEmojis(!showEmojis);
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiButtonRef.current && !emojiButtonRef.current.contains(event.target)) {
        setShowEmojis(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col w-full max-w-4xl p-4 bg-white shadow-md rounded-lg mt-4" style={{ height: '75vh' }}>
      <div ref={chatBoxRef} className="flex-grow flex flex-col space-y-2 mb-4 overflow-y-auto h-full">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">No messages yet</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className="p-2 bg-gray-200 rounded-lg text-black">
              {message}
            </div>
          ))
        )}
      </div>
      <div className="flex relative">
        <input
          type="text"
          className="w-full p-2 border rounded-lg text-black"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
        <div ref={emojiButtonRef} className="relative ml-2">
          <button
            onClick={handleEmojiButtonClick}
            className="p-2 bg-blue-500 text-white rounded-lg flex items-center justify-center"
          >
            😊
          </button>
          {showEmojis && (
            <div className="absolute top-0 right-0 mt-12 bg-white border rounded-lg p-2 shadow-lg z-10">
              <Picker data={data} onEmojiSelect={console.log}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
