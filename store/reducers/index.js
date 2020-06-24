import { SHOW_NOTIF, NOTIF_TEXT } from "../actions/index";

const initialState = {
  shownotification: false,
  textnotification: "",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIF:
      return { ...state, shownotification: action.payload };
    case NOTIF_TEXT:
      return { ...state, textnotification: action.payload };
    default:
      return state;
  }
}
