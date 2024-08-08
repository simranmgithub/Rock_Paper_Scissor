let user = 0;
let comp = 0;

const msg=document.querySelector("#msg");

const userscore=document.querySelector("#user_score");
const compscore=document.querySelector("#com_score");

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    })
})

const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    const compchoice = gencom();
    console.log("computer choice=", compchoice);
    if (userchoice === compchoice) {
        drawgame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice==="paper")
            {
                userwin=compchoice=== "scissors" ? false : true;
            }
        else{
            userwin=compchoice=== "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

const gencom = () => {
    const option = ["rock", "paper", "scissors"];
    const randex = Math.floor(Math.random() * 3);
    return option[randex];
}

const drawgame=()=>{
    console.log("draw game");
    msg.innerText="message draw play again";
    msg.style.backgroundColor="beige";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin)
        {
            user++;
            userscore.innerText=user;
            console.log("you win the game");
            msg.innerText=`you win your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor="green";
        
        }
    else{
        comp++;
        compscore.innerText=comp;
        console.log("you lose");
        msg.innerText=`you lose computer's ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
}
