import { useEffect, useState } from "react";

interface MessageBoardProps {
    messageList: string[]
}

export default function MessageBoard({messageList}: MessageBoardProps) {
    // const [messages, setMessages] = useState([]);
    // console.log(message)
    // // 新しいメッセージを受信したときの処理
    // useEffect(() => {
    //     setMessages((prevMessages):any => [...prevMessages, message]);
    // },[message])


    return (
            messageList.map(message => (
                <Message key={message} message={message} />
            ))
        
    );
}

    interface MessageProps {
        message: string
    }

    const Message = ({message}: MessageProps) => {
    return (
        <div className="bg-white m-4">
            <div className="relative top-3 border-red-900 border-2 rounded-md w-1/2 ">
                <div className="bg-rose-400">灰原哀</div>
                <div className="break-all bg-white">{message}</div>
            </div>
        </div>
    );
    }