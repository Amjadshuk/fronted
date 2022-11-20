
const port = 4568;
const host = "localhost"
const mysql = require("mysql");
const express = require("express");
const https = require("https");
const {readFileSync, appendFile, fstat } = require("fs");
const { send } = require("process");
const http = require("http");
const { Socket, connect, createConnection, SocketAddress } = require("net");
const { options } = require("dropzone");
const { isMainThread, Worker } = require("worker_threads");

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

var dbstatus = "";


var server = http.createServer({
    type : "GET"
},(req, res)=>{

res.writeHead(300,{
    "Content-Type" : "text/html"
});

res.end("<a>amjad ddddd salim   "+num+"</a");



}).listen(port,host);





const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Amjad@93659095',
    database : 'amjad'
    
});


connection.connect((err)=>{
    if(err == null){
        console.log("Connection with Db done");
        dbstatus ="Connection with DB done";


        
    }else{
        console.log("...................................");
        console.log("error with db connection: "+err.stack.toString());
        console.log("...................................");
        dbstatus ="error with db connection: "+err.stack.toString();

    }
});





/*
connection.destroy();                   
console.log("DB connection closed"); // closing 
/*




/*
connection.end((error)=>{
    if(error == null){
        console.log("connection ended");
    }else{
        console.log(".................................");
        console.log("ending connection had an error: " error.stack.toString());
        console.log(".................................");
    }
});
*/

