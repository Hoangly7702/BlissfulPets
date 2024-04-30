// Chatbot.jsx
import '../../styles/components/chatbot.css'; // Import CSS file

import React, { useState } from 'react';
import axios from 'axios';

// axios.defaults.withCredentials = true;

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');
    const [showChatbox, setShowChatbox] = useState(false);

    const toggleChatbox = () => {
        setShowChatbox(!showChatbox);
    };

    const sendMessage = async () => {
        if (userMessage.trim() === '') return;
        setMessages([...messages, { text: userMessage, sender: 'user' }]);
        scrollToBottom();
        try {
          const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
            message: userMessage
          });
          setMessages([...messages,...response.data.map(message => ({ text: message.text, sender: 'bot' }))]);
        //   scrollToBottom();
        } catch (error) {
          console.error('Error sending message:', error);
          // Hiển thị thông báo lỗi cho người dùng
        }
        setUserMessage('');
      };

    const scrollToBottom = () => {
        const messagesContainer = document.getElementById('messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    return (
        <div>
            <button className="chatbot-icon" onClick={toggleChatbox}></button>
            <div className="chat-box" style={{ display: showChatbox ? 'block' : 'none' }}>
                <div className="chat-title">
                    {/* <div className="logo-messenger">
            <img src="client/images/cat.jpg" alt="Blisfull Pets Logo" className="logo-mess" />
        </div> */}
                    Blisfull Pets
                </div>


                <div className="messages" id="messages">
                    {messages.map((message, index) => (
                        <div key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
                            {message.text}
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
