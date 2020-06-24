export const SHOW_NOTIF = "SHOW_NOTIF"
export const NOTIF_TEXT = "NOTIF_TEXT"
export function showNotif(bool){
    return{
        type: SHOW_NOTIF,
        payload: bool
    }
}
export function notifText(msg){
    return{
        type: NOTIF_TEXT,
        payload: msg
    }
}