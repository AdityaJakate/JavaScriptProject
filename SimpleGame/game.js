var gamecount =0;
var resultOne=0;
var resultTwo =0;
var healthPlayerOne = 100;
var healthPlayerTwo = 100;


// let's Start the Game

function startGame(){
    gamecount+=1;
    console.log(gamecount);
document.getElementById("gameNumber").innerHTML=  gamecount;

//Getting Shooting values
let playerOne=Math.floor(Math.random()*6);
let playerTwo = Math.floor(Math.random()*6);

//
document.getElementById("shoot1").innerHTML = playerOne;
document.getElementById("shoot2").innerHTML = playerTwo;

//Health of players

healthPlayerOne =  healthPlayerOne - playerTwo;
healthPlayerTwo =   healthPlayerTwo - playerOne;
document.getElementById("health1").innerHTML = healthPlayerOne;
document.getElementById("health2").innerHTML = healthPlayerTwo;

console.log(" health " + healthPlayerOne , healthPlayerTwo);

//Checking Health of players 
if(healthPlayerOne <1 && healthPlayerTwo< 1){
    document.getElementById("theEnd").innerHTML ="Both player's are dead, In War Death is a Ultimate Winner";
    document.getElementById("startGame").disabled =true;
    document.getElementById("resetGame").disabled =true;
    
}

else if( healthPlayerOne < 1){
document.getElementById("theEnd").innerHTML ="Player One is Dead, Player Two is Ultimate winner";
document.getElementById("startGame").disabled =true;
document.getElementById("resetGame").disabled =true;

}
else if(healthPlayerTwo <1){
    document.getElementById("theEnd").innerHTML ="Player Two is Dead, Player One is Ultimate winner";
    document.getElementById("startGame").disabled =true;
    document.getElementById("resetGame").disabled =true;

}

console.log( "shoot " + playerOne,playerTwo);
// updating shooting values

if(playerOne > playerTwo){
    resultOne+=1;
    document.getElementById("p1").innerHTML = resultOne;
    document.getElementById("p2").innerHTML = resultTwo;}
else if(playerOne < playerTwo){
    resultTwo+=1;
    document.getElementById("p1").innerHTML = resultOne;
    document.getElementById("p2").innerHTML = resultTwo;
   
}
else if(playerOne==playerTwo){
    
    document.getElementById("p1").innerHTML = resultOne;
    document.getElementById("p2").innerHTML = resultTwo;
   


}


console.log( "wins " + resultOne,resultTwo);
//checking Winners


if(resultOne >2){
    document.getElementById("result").innerHTML ="Player One is Winner " ;
}
else if(resultTwo >2){
    document.getElementById("result").innerHTML ="Player Two is winner " ;
}
else if(gamecount==5 && resultOne ==  resultTwo ){
    document.getElementById("result").innerHTML ="It's a Draw";
}
else if(gamecount==5 && resultOne > resultTwo){
    document.getElementById("result").innerHTML ="Player One is Winner " ;

}
else if(gamecount==5 && resultOne < resultTwo ){
    document.getElementById("result").innerHTML ="Player Two is winner " ;
}



if(gamecount>=5 || resultOne >2 || resultTwo >2 ){
    document.getElementById("startGame").disabled =true;
} 

}

// Let's reset the Game


function reset(){
 gamecount =0;
 resultOne=0;
 resultTwo =0;
document.getElementById("gameNumber").innerHTML=  0;
document.getElementById("shoot1").innerHTML = "";
document.getElementById("shoot2").innerHTML = "";
document.getElementById("p1").innerHTML = 0;
document.getElementById("p2").innerHTML = 0;
document.getElementById("result").innerHTML =" ";
document.getElementById("startGame").disabled =false;
}

