import {
  SHOW_NOTIF,
  NOTIF_TEXT,
  GET_INFO,
  CURRENTLAPAK,
  SEARCH,
  USERINFO,
  DETAILPRODUK,
  TOKOINFO,
} from "../actions/index";

const initialState = {
  shownotification: false,
  textnotification: "",
  currentinfo: "",
  userinfo: {},
  currentlapak: {
    Products:[{}]
  },
  searchresult: [],
  detailprodukresult:{
   Order:""
  },
  tokoinfo:{}
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIF:
      return { ...state, shownotification: action.payload };
    case NOTIF_TEXT:
      return { ...state, textnotification: action.payload };
    case GET_INFO:
      return { ...state, currentinfo: action.payload };
    case CURRENTLAPAK:
      return { ...state, currentlapak: action.payload };
    case SEARCH:
      return { ...state, searchresult: action.payload };
    case USERINFO:
      return { ...state, userinfo: action.payload };
    case DETAILPRODUK:
      return { ...state, detailprodukresult: action.payload };
    case TOKOINFO:
      return { ...state, tokoinfo: action.payload };
    default:
      return state;
  }
}
