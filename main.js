
let button = document.querySelector("#button");
let restart = document.querySelector("#gues");
let textfield = document.querySelector("#textfield");
let msg = document.querySelector("#msg");
button.addEventListener("click",onSubmit);
restart.addEventListener("click",start);
start();
function start() {
random();
}
function onSubmit(e) {
    e.preventDefault();
    let val = textfield.value;
    let num_to_compare = random();
    if (val==num_to_compare.toString()){
    msg.textContent = "You win!";
    }
    else{
        msg.textContent = "wrong";
     console.log(val);
        console.log(num_to_compare);
    }
    
    }
    //button.addEventListener("click",);
    
    function random() {
        let num = Math.random()*1;
        let finalnum = Math.ceil(num);
        return finalnum;
    }