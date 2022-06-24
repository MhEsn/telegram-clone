const initialState = {
  selectedChat: {},
};

function ChatReducer(state = initialState, action) {
  switch (action.type) {
    case 'chat/selectedChat':
      return {
        ...state,
        selectedChat: action.payload,
      };

    default:
      return state;
  }
}

export default ChatReducer;
