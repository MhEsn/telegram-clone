const initialState = {
  profile: { name: '', lastName: '', bio: '', image: '' },
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'user/profile':
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
}

export default UserReducer;
