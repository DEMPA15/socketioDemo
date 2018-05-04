
export const addMessage = (msg) =>{
    return {
        type: 'ADD_MESSAGE',
        payload: msg,
    }
}