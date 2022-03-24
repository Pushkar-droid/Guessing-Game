let computerguess;
let userguess = [];

const init = () =>{
    computerguess = Math.floor(Math.random()*100);

    document.getElementById("newgamebutton").style.display = "none";
    document.getElementById("gamearea").style.display = "none";
}

const startgame = () => {
    document.getElementById("welcomescreen").style.display = "none";
    document.getElementById("gamearea").style.display = "block";
}

//new game begin to refresh the page

const newgamebegin = () =>{
    window.location.reload();
}

//start new game code

const startnewgame = () => {
    document.getElementById("newgamebutton").style.display = "inline";
    document.getElementById("inputbox").setAttribute("disabled",true)
}

// main logic of our game aap
const compareguess = () =>{
    const usernumber = Number(document.getElementById("inputbox").value);
    // userguess = [...userguess,usernumber];
    userguess.push(usernumber);
    document.getElementById("guesses").innerHTML = userguess;

//check the value is low or high
   if(userguess.length < maxguess)
   { 
        if(usernumber > computerguess){
            document.getElementById("textoutput").innerHTML = "Your guess is high";
            document.getElementById("inputbox").value = "";
        }else if(usernumber < computerguess){
            document.getElementById("textoutput").innerHTML = "Your guess is low";
            document.getElementById("inputbox").value = "";
        }else{
            document.getElementById("textoutput").innerHTML = "It's Correct";
            document.getElementById("inputbox").value = "";
            startnewgame();
            document.getElementById("inputbox").style.display = "none";

        }
    }
    else{
        if(usernumber > computerguess){
            document.getElementById("textoutput").innerHTML = `You loose !! correct number was ${computerguess}`;
            document.getElementById("inputbox").value = "";
            startnewgame();
        }else if(usernumber < computerguess){
            document.getElementById("textoutput").innerHTML = `You loose !! correct number was ${computerguess}`;
            document.getElementById("inputbox").value = "";
            startnewgame();
        }else{
            document.getElementById("textoutput").innerHTML = "It's Correct";
            document.getElementById("inputbox").value = "";
            startnewgame();
            document.getElementById("inputbox").style.display = "none";
        }
    }
    
    document.getElementById("attempts").innerHTML = userguess.length;


};


const easymode = () => {
    maxguess = 10;
    startgame();
}




const hardmode = () => {
    maxguess = 5;
    startgame();
}