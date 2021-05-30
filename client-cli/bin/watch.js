#!/usr/bin/env node

const io = require("socket.io-client");
const url = "http://localhost:5000/";
const reconnectionDelayMax = 10000;
const query = { "my-key": "my-value" };
const socket = io(url, { reconnectionDelayMax, query });

socket.emit('subscribe');

socket.on('keyupdate', (data) => {
    console.log(data);
})