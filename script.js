let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");

let turn0 = true;

const winPatterns={
    0:[0,1,2],
    1:[3,4,5],
    2:[6,7,8],
    3:[0,3,6],
    4:[1,4,7],
    5:[2,5,8],
    6:[0,4,8],
    7:[2,4,6]
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log("box was clicked");
        if (turn0){
            box.innerText="0";
            turn0= false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();

    });
});
const checkWinner= () => {
     for ( pattern of winPatterns) {
       console.log(pattern)
     }
};