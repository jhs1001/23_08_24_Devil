import { useState } from "react";

const Hello = ({ age }) => {
    //let name = "Mike";
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    function changeName() {
        setName(name === "Mike" ? "Jane" : "Mike");
    }
    return (
    <>
        <h1>state</h1>
        <h2 id="name">{name}({age}세 : {msg})</h2>
        <button onClick={changeName}>Change</button>
    </>
    );
};

export default Hello;

