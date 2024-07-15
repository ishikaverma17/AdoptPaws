const express = require('express')

const getCredentials = (req, res) => {
    const Credentials = { "username": "ishika@17", "password": "ishu@123" }
    res.status(200).json(Credentials)
}

module.exports = { getCredentials }