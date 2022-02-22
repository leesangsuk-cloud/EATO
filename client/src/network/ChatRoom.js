import React,{ useState } from "react";
import './ChatBox.css';
import Nav from "../components/Nav/Nav";

function ChatRoom({
  selectedCard,
  my_user_id,
  messages,
  messageSendHandler,
}) {
  // const { card_id, chat_title } = selectedCard;
  const [writeMessage, setWriteMessage] = useState('');

  const sendMessage = () => {
    if (writeMessage !== '') {
      const messageInfo = {
        message: writeMessage,
        date: new Date(Date.now()).toLocaleDateString(),
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now()
        ).getMinutes()}`,
      };
      document.querySelector('.chat__content__input').value = '';
      messageSendHandler(messageInfo);
      setWriteMessage('');
    }
  };
  const enterKey = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
    <div className='chatbox'>
      <div className='chatroom_title'>
        {selectedCard?.chat_title ? selectedCard?.chat_title : '채팅방'}
      </div>
      {!selectedCard ? (
        <div className='chat__contents'>
          <div className='chat-body'>
              <div className='loader__box__ifnull in__chatbox'>
                채팅창
              </div>
          </div>
        </div>
      ) : (
        <div className='chat__contents'>
          <div className='chat-body'>
              {messages.map((messageInfo, idx) => {
                let { user_id, type, name, message, date, time } = messageInfo;
                date = String(date);
                if (idx === 0) {
                  // 페이지네이션 대비
                  // 첫 요소에 날짜가 없을 때
                  if (user_id === 0) {
                    // 관리자 메세지
                    if (type === 'message') {
                      return (
                        <div>
                          <div className='admin-date'>{`${date.slice(
                            0,
                            4
                          )}년${date.slice(4, 6)}월${date.slice(6, 8)}일`}</div>
                          <div className='admin-message'>{message}</div>
                        </div>
                      );
                    } else if (type === 'date') {
                      return (
                        <div>
                          <div className='admin-date'>{message}</div>
                        </div>
                      );
                    }
                  }

                  if (user_id === my_user_id) {
                    <div>
                      <div className='admin-date'>{`${date.slice(
                        0,
                        4
                      )}년${date.slice(4, 6)}월${date.slice(6, 8)}일`}</div>
                      <div id='user1' className='chatbox__chat__container'>
                        <div id='user1' className='chatbox__chat__message'>
                          {message}
                        </div>
                        <div id='user1' className='chatbox__chat__nameandtime'>
                          <span id='user1' className='chatbox__chat__name'>
                            {name}
                          </span>{' '}
                          <span id='user1' className='chatbox__chat__time'>
                            {time}
                          </span>
                        </div>
                      </div>

                      <div id='user1' className='chatbox__chat__container'>
                        <div id='user1' className='chatbox__chat__message'>
                          {message}
                        </div>
                        <div id='user1' className='chatbox__chat__nameandtime'>
                          <span id='user1' className='chatbox__chat__name'>
                            {name}
                          </span>{' '}
                          <span id='user1' className='chatbox__chat__time'>
                            {time}
                          </span>
                          <span id='user1' className='chatbox__chat__name'>
                            {name}
                          </span>{' '}
                          <span id='user1' className='chatbox__chat__time'>
                            {time}
                          </span>
                        </div>
                      </div>
                    </div>;
                  }

                  return (
                    <div>
                      <div className='admin-date'>{`${date.slice(
                        0,
                        4
                      )}년${date.slice(4, 6)}월${date.slice(6, 8)}일`}</div>
                      <div id='user2' className='chatbox__chat__container'>
                        <div id='user2' className='chatbox__chat__message'>
                          {message}
                        </div>
                        <div id='user2' className='chatbox__chat__nameandtime'>
                          <span id='user2' className='chatbox__chat__name'>
                            {name}
                          </span>{' '}
                          <span id='user2' className='chatbox__chat__time'>
                            {time}
                          </span>
                        </div>
                      </div>

                      <div id='user2' className='chatbox__chat__container'>
                        <div id='user2' className='chatbox__chat__message'>
                          {message}
                        </div>
                        <div id='user2' className='chatbox__chat__nameandtime'>
                          <span id='user2' className='chatbox__chat__name'>
                            {name}
                          </span>{' '}
                          <span id='user2' className='chatbox__chat__time'>
                            {time}
                          </span>
                          <span id='user2' className='chatbox__chat__name'>
                            {name}
                          </span>{' '}
                          <span id='user2' className='chatbox__chat__time'>
                            {time}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (user_id === 0) {
                  if (type === 'message') {
                    return (
                      <div>
                        <div className='admin-message'>{message}</div>
                      </div>
                    );
                  } else if (type === 'date') {
                    return (
                      <div>
                        <div className='admin-date'>{message}</div>
                      </div>
                    );
                  }
                }
                if (user_id === my_user_id) {
                  return (
                    <div id='user1' className='chatbox__chat__container'>
                      <div id='user1' className='chatbox__chat__message'>
                        {message}
                      </div>
                      <div id='user1' className='chatbox__chat__nameandtime'>
                        <span id='user1' className='chatbox__chat__name'>
                          {name}
                        </span>
                        <span id='user1' className='chatbox__chat__time'>
                          {time}
                        </span>
                      </div>
                    </div>
                  );
                }
                return (
                  <div id='user2' className='chatbox__chat__container'>
                    <div id='user2' className='chatbox__chat__message'>
                      {message}
                    </div>
                    <div id='user2' className='chatbox__chat__nameandtime'>
                      <span id='user2' className='chatbox__chat__name'>
                        {name}
                      </span>
                      <span id='user2' className='chatbox__chat__time'>
                        {time}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <div className='chat__send__conatiner'>
        <input
          onKeyPress={(e) => enterKey(e)}
          onChange={(e) => setWriteMessage(e.target.value)}
          className='chat__content__input'
          placeholder='메세지를 입력하세요'
        ></input>
        <button onClick={() => sendMessage()} className='chat__send__button'>
          전송
        </button>
      </div>
    </div>
    </>
  );
}

export default ChatRoom;
