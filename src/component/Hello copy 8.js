import { useState } from "react";

const Hello = () => {
    //let name = "Mike";
    const [name, setName] = useState('Mike');

    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        setName(newName);
    }
    return (
    <>
    <h1>state</h1>
    <h2 id="name">{name}</h2>
    <button onClick={changeName}>Change</button>
    </>
    );
};

export default Hello;

