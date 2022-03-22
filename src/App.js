import {useState} from 'react';
import './App.css';

function App() {
    const [name, setName] = useState("");
    const [chats, setChats] = useState([
        {name:'John Smith',message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' },
        {name:'Jack Norris',message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' },
    ]);
    const [msg,setMsg] = useState('');

    const sendChat = ()=>{
        const c = [...chats];
        c.push({name,message:msg});
        setChats(c);
    }

    return (
        <div className="taust">

            <h1>KHK </h1>
            <div className="kast">
                <div className="chat_container">
                    {chats.map((c)=> (
                        <div className={`container ${c.name===name ? 'me': ''}`}>
                            <p className="sonum">
                                <strong>{c.name}: </strong>
                                <span>{c.message}</span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="sisestus">
                    {<div>
                        <input type="text" placeholder="  User"
                               onBlur={e => setName(e.target.value)}>

                        </input>

                    </div>}

                    <input type="text" onInput={e=>setMsg(e.target.value)} value={msg}
                           placeholder=" Message">

                    </input>

                    <button onClick={e=>sendChat()}>Send</button>

                </div>
            </div>
        </div>
    );
}

export default App;