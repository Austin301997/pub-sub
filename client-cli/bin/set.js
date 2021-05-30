#!/usr/bin/env node

const process = require('process');
const axios = require('axios');
//const url = "https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs";
const url = "http://localhost:5000/";


if (!process.argv[2]) {
    console.log('Pass some key and value in the command');
} else if (!process.argv[3]) {
    console.log('Pass some key and value in the command');
} else {
    const params = { key: process.argv[2], value: process.argv[3] }
    axios.post(url, params)
        .then((response) => {
            console.log(response.data)
        })
        .catch(err => console.log(err.response.data))

}