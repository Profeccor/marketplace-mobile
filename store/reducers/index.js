import { SHOW_NOTIF, NOTIF_TEXT, GET_INFO } from "../actions/index";

const initialState = {
  shownotification: false,
  textnotification: "",
  currentinfo:""
  
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIF:
      return { ...state, shownotification: action.payload };
    case NOTIF_TEXT:
      return { ...state, textnotification: action.payload };
    case GET_INFO:
      return {...state,currentinfo:action.payload}
    default:
      return state;
  }
}
