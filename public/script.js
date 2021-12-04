const socket = io.connect('http://127.0.0.1:3000');

console.log("hello bro"); 

socket.on("test", (msg)=>{
console.log(msg); 
})