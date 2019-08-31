//import { Avatar } from "@material-ui/core";

const initialState = {
  open1: false,
  open2: false,
  open3: false,

  sublist1: ["Avatar", "Button", "Chips"],
  
  sublist2: ["Area", "Circular Grid Line", "Heatmap"]
  // test: {test2: ['sfasf', '']},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "click1":
      return { ...state, open1: !state.open1 };

    case "click2":
      return { ...state, open2: !state.open2 };
    case "click3":
      return { ...state, open3: !state.open3 };
    default:
      return state;
  }
}
export default rootReducer;
