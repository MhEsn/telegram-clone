const initialState = {
  selectedChat: {},
  chats: [],
};

function ChatReducer(state = initialState, action) {
  switch (action.type) {
    case 'chat/selectedChat':
      return {
        ...state,
        selectedChat: action.payload,
      };
    case 'chat/setChats':
      return {
        ...state,
        chats: action.payload,
      };
    case 'chat/sendMessage':
      let newMessage = state.selectedChat;
      newMessage.chats.push(action.payload);
      return {
        ...state,
        selectedChat: newMessage,
      };

    default:
      return state;
  }
}

export default ChatReducer;
