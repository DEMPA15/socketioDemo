import openSocket from 'socket.io-client';
import * as Actions from './actions'
const  socket = openSocket('http://localhost:8080');

export const sendMessage = (msg)=>{
    socket.emit('Send Message', msg)
}

export const eventDispatcher = (store) => {
    socket.on('Send Message', (msg)=>{
        store.dispatch(Actions.addMessage(msg));
    })
}
