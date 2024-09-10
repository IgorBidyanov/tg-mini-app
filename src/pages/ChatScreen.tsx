import React, { useEffect, useState } from 'react';
import '@/styles/Chatscreen.css'
import { IMessages } from '@/types/ChatTypes';

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const ws = new WebSocket('wss://echo.websocket.org');

    ws.onmessage = (event: MessageEvent) => {
      setMessages((prevMessages) => [...prevMessages, { msg: event.data, incoming: true }]);
    };

    ws.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && inputValue) {
      setMessages((prevMessages) => [...prevMessages, { msg: inputValue, incoming: false }]);
      socket.send(inputValue);
      setInputValue('');
    }
  };

  const handleBlur = () => {
    window.scrollTo(0, 0)
  };

  return (
    <section className='chats'>
      <div>
        <h1>Чат</h1>
        
        <ul className='chats__list'>
          {messages.map((msg, index) => (
            <li className={ 'chats__list-item' + (!msg.incoming ? ' chats__list-incoming' : '') } key={index}>{msg.msg}</li>
          ))}
        </ul>
      </div>

      <div className='chats__send'>
        <input
          className='chats__send-input'
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите сообщение"
          onBlur={handleBlur}
        />
        <button className='chats__send-btn' onClick={sendMessage}></button>
      </div>
    </section>
  );
};

export default ChatScreen;