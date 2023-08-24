function ShowName() {
    console.log("Mike");
}

function ShowAge(age) {
    console.log(age);
}

// function ShowText(e){
//     console.log(e.target.value);
// }

function showText(txt) {
    console.log(txt);
}

const Hello = () => {
   return (
   <>
   <h1>Hello</h1>
   <button onClick={ShowName}>Show name</button>
   <button onClick={ () => {ShowAge(30)}}>Show age</button>
   <input type="text" onChange={(e) => {console.log(e.target.value)}}/>
   </>
   );
};

export default Hello;

