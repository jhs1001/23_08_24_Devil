import World from "./World";
import stlyes from "./Hello.module.css";

const Hello = () => {
   return (
   <>
     <h1 style={{
            color:"red",
            borderRight:"12px solid #000",
            marginBottom:"50px",
            opacity: 1
          }}
        >
          Hello
        </h1>
        <div className={stlyes.box}>Hello</div>
     <World />
     <World />
   </>
   );
};

export default Hello;

