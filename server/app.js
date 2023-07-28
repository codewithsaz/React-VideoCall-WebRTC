const { Server } = require("socket.io");

const io = new Server(8000, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Socket Connected", socket.id);
  socket.on("join_room", (data) => {
    console.log("joined room:", data);
    // socket.join(data);
    io.to(socket.id).emit("join_room", data);
  });
});
