import React from 'react';


export default function MyComponent({
    activity,
    name,
    handleClickNap,
    handleClickEat,
    handleClickPlay,
    setName
}) {
    return (
        <div>
            <div>{name}</div>
            <div>{activity}</div>
            <button onClick={()=>{
                handleClickEat()
            }}>Eat</button>
            <button onClick={()=>{
                handleClickNap()
            }}>Nap</button>
            <button onClick={()=>{
                handleClickPlay()
            }}>Play</button>
            <input onChange={(e) => setName(e.target.value)} value=
            {name}></input>
        </div>
    );
}