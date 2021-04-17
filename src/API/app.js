const app = require("express")()
const http = require("http").createServer(app)

const io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:5000"],
  },
})

io.on("connection", socket => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message })
  })
})

http.listen(5000, () => console.log("Lisining on port 5000..."))
