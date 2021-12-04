const socket = io.connect('http://127.0.0.1:3000');
const socket2 = io();

console.log("hello bro"); 

socket.on("test", (msg)=>{
console.log(msg); 
})

socket2.on("testing", (msg)=>{
    console.log(msg); 
})