import { useState } from "react";

const Hello = () => {
    //let name = "Mike";
    const [name, setName] = useState('Mike');

    function changeName() {
        setName(name === "Mike" ? "Jane" : "Mike");
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

