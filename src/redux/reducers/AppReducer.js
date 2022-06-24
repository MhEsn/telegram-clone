const initialState = {
  isSidebarCollapsed: false,
  isProfileVisible: false,
};

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case 'app/isSidebarCollapsed':
      return {
        ...state,
        isSidebarCollapsed: action.payload,
      };
    case 'app/isProfileVisible':
      return {
        ...state,
        isProfileVisible: action.payload,
      };

    default:
      return state;
  }
}

export default AppReducer;
