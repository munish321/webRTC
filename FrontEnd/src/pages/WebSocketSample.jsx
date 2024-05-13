import React, { useState, useEffect } from 'react';
// import WebSocket from 'websocket';

const WebSocketComponent = () => {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    // Establish WebSocket connection
    const socket = new WebSocket('ws://localhost:3000/ws'); // Replace with your WebSocket server URL

    socket.onopen = () => {
      console.log('WebSocket connection established');
      setWs(socket);
    };

    socket.onmessage = (event) => {
      const newMessage = event.data;
      setReceivedMessages([...receivedMessages, newMessage]);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup function
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []); // Empty dependency array to run only once on component mount

  const sendMessage = () => {
    if (ws && message.trim() !== '') {
      ws.send(message);
      setMessage('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketComponent;
