function ShowName() {
    console.log("Mike");
}

function ShowAge(age) {
    console.log(age);
}

const Hello = () => {
   return (
   <>
   <h1>Hello</h1>
   <button onClick={ShowName}>Show name</button>
   <button onClick={ () => {console.log(30);}}>Show age</button>
   </>
   );
};

export default Hello;

