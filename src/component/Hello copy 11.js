import { useState } from "react";

const Hello = (props) => {
    //let name = "Mike";
    const [name, setName] = useState('Mike');
    const [age, setAge] = useState(props.age);

    function changeName() {
        setName(name === "Mike" ? "Jane" : "Mike");
        setAge(age + 1);
    }
    return (
    <>
    <h1>state</h1>
    <h2 id="name">{name}({age}세)</h2>
    <button onClick={changeName}>Change</button>
    </>
    );
};

export default Hello;

