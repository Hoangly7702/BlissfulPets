// Chatbot.jsx
import '../../styles/components/chatbot.css'; // Import CSS file

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

// axios.defaults.withCredentials = true;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [showChatbox, setShowChatbox] = useState(false);
  const messagesRef = useRef(null);

  const toggleChatbox = () => {
    setShowChatbox(!showChatbox);
  };

  const sendMessage = async () => {
    if (userMessage.trim() === '') return;

    // Add user's message to state
    setMessages(prevMessages => [...prevMessages, { text: userMessage, sender: 'user' }]);

    try {
      const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
        message: userMessage
      });

      // Add bot's response to state
      setMessages(prevMessages => [...prevMessages, ...response.data.map(message => ({ text: message.text, sender: 'bot' }))]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    // Clear user's message after sending
    setUserMessage('');
    scrollToBottom();
  };

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      <button className="chatbot-icon" onClick={toggleChatbox}></button>
      <div className="chat-box" style={{ display: showChatbox ? 'block' : 'none' }}>
        <div className="chat-title">
          {/* <div className="logo-messenger">
            <img src="client/images/cat.jpg" alt="Blisfull Pets Logo" className="logo-mess" />
        </div> */}
        <div className='title-logo'>
        BLISSFUL PETS
        </div>
          
        </div>


        <div className="messages" id="messages">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
              {message.sender === 'bot' && (
                <div className="avatar">
                  <img src="https://png.pngtree.com/png-vector/20220525/ourmid/pngtree-concept-of-facial-animal-avatar-chatbot-cat-face-illustration-message-vector-png-image_46653352.jpg" alt="Bot Avatar" />
                </div>
              )}
              <div className="message-text">{message.text}</div>
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            className="input1"
            type="text"
            value={userMessage}
            onChange={e => setUserMessage(e.target.value)}
            onKeyUp={e => {
              if (e.key === 'Enter') sendMessage();
            }}
            placeholder="Type a message..."
          />
          <button className="button1" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
