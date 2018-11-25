'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

function registerHandler() {
    socket.on('message')
}

function unregisterHandler() {
    socket.off('message')
}

socket.on('error', function (err) {
    console.log('received socket error:');
    console.log(err)
});

function register(name, cb) {
    socket.emit('register')
}

function join() {
    socket.emit('join')
}

function leave() {
    socket.emit('leave')
}

function message(msg) {
    socket.emit('message', {msg})
}

function getChatrooms(cb) {
    socket.emit('chatrooms')
}

function getAvailableUsers(cb) {
    socket.emit('availableUsers')
}

registerHandler();
join();
message('client 1');