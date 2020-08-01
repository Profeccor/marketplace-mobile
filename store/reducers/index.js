import { SHOW_NOTIF, NOTIF_TEXT, GET_INFO, CURRENTLAPAK } from "../actions/index";

const initialState = {
  shownotification: false,
  textnotification: "",
  currentinfo:"",
  currentlapak:{}
  
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIF:
      return { ...state, shownotification: action.payload };
    case NOTIF_TEXT:
      return { ...state, textnotification: action.payload };
    case GET_INFO:
      return {...state,currentinfo:action.payload}
     case CURRENTLAPAK:
       return {...state,currentlapak:action.payload} 
    default:
      return state;
  }
}
