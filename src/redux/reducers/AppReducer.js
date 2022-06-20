const initialState = {
  isSidebarCollapsed: false,
};

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case 'app/isSidebarCollapsed':
      return {
        ...state,
        isSidebarCollapsed: action.payload,
      };

    default:
      return state;
  }
}

export default AppReducer;
