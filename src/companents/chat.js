import { useEffect, useState } from "react"
import io from "socket.io-client"
import "../styles/chat.css"
function Chat() {
  const socket = io.connect("http://localhost:5000/")
  const [form, setForm] = useState({ name: "", message: "" })
  const [chat, setChat] = useState([])

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
    console.log(chat)
  }, [socket, chat])

  const changehandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const messageHandler = e => {
    e.preventDefault()
    const { name, message } = form
    socket.emit("message", { name, message })
    setForm({ name, message: "" })
  }

  return (
    <div className='chatCont'>
      <form className='chat' onSubmit={e => messageHandler(e)}>
        <h1>Message</h1>
        <input
          className='name'
          type='name'
          name='name'
          placeholder='Enter name'
          required
          value={form.name}
          onChange={event => changehandler(event)}
        />
        <input
          className='message'
          type='message'
          name='message'
          placeholder='Enter message'
          required
          value={form.message}
          onChange={event => changehandler(event)}
        />
        <button>Send</button>
      </form>
      <div className='chatMess'>
        <h1>Chat-log</h1>
        {chat &&
          chat.map((items, index) => {
            return (
              <div key={index}>
                <h3>
                  {items.name} : {items.message}
                </h3>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Chat
