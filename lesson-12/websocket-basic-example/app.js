import { WebSocketServer } from "ws";

const wsServer = new WebSocketServer({port: 5000});

const socketList = [];

wsServer.on("connection", socket => {
    // console.log("New frontend connected");
    setTimeout(()=> socket.send("Welcome to web-socket server"), 3000);
    // setTimeout(()=> socket.close(1000, "Server return after 15 minutes"), 5000);

    socket.on("close", (code, reason)=> {
        console.log(code);
        console.log(reason.toString());
        const index = socketList.findIndex(item => item === socket);
        socketList.splice(index, 1);
    })

    socketList.forEach(item => item.send(`Now we have ${socketList.length + 1} members`));

    socketList.push(socket);
})