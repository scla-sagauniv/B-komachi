"use client"
import Modal from "./components/Button";
import MessageBoard from "./components/Log";
import { useEffect, useRef, useState } from 'react'

export default function Home() {

  const socketRef = useRef<WebSocket>()
  const [isConnected, setIsConnected] = useState(false)
  const [formMessage, setFormMessage] = useState('')
  const [sentMessage, setSentMessage] = useState<string[]>([])

  const sendData = (event: any) => {
    event.preventDefault()
    console.log(event.target[0].value)
    const payload = {
      message: event.target[0].value,
    };
    setFormMessage(payload.message)
    console.log("set:",formMessage)
    socketRef.current?.send(JSON.stringify(payload))
    console.log("send:",JSON.stringify(payload))
  }

  useEffect(() => {
    socketRef.current = new WebSocket('wss://b-komachi-websocket.azurewebsites.net/ws')
    socketRef.current.onopen = function () {
      setIsConnected(true)
      console.log('Connected')
    }

    socketRef.current.onclose = function () {
      console.log('closed')
      setIsConnected(false)
    }

    // server 側から送られてきたデータを受け取る
    socketRef.current.onmessage = function (event) {
      console.log("data", event.data)
      setSentMessage((prevState) => [...prevState, event.data])
      console.log("sentMessage", sentMessage)
    } 

    return () => {
      if (socketRef.current == null) {
        return
      }
      socketRef.current.close()
    }
  },[])

    return (
      <>
        <MessageBoard messageList={sentMessage} />
        <Modal onButtonClick={sendData} />
      </>
    );
  };