#!/usr/bin/env node

const process = require('process');
const axios = require('axios');
const url = "http://localhost:5000/";

if (process.argv[2]) {

    const url = `http://localhost:5000/${process.argv[2]}`;

    axios.get(url)
        .then((response) => {
            console.log(response.data)
        })
        .catch(err => console.log(err.response.data))

} else {
    console.log('Pass some key in the command');
}