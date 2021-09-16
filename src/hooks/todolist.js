/* import React,{useState} from 'react'
export default function App() { 
    const [text, setText] = useState("")
    const handleAdd = ()=>{
        console.log(text)
        setlist([...list,text])
        setText("")
    }
    const [list, setlist] = useState([])
    const handleDel =(index)=>{
        console.log(index)
        var newlist = [...list]
        newlist.splice(index,1)
        setlist(newlist)
    }
    return (
        <div>     
            <input type="text" onChange={(evt)=>{
                // console.log(evt.target.value)
                setText(evt.target.value)
            }} value={text}/>
            <button onClick={handleAdd}>添加</button>
            {
                list.map( (item,index)=>
                    <li key={item}>{item}
                        <button onClick={()=>handleDel(index)}>删除</button>
                    </li>    
                )
            }
        </div>
    )
} */