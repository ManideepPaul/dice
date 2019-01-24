	var dicePic = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice4.png", "images/dice6.png"];

	document.querySelector("button").onclick = function(){
	var player1 = Math.floor((Math.random()*dicePic.length)+1);
	var player2 = Math.floor((Math.random()*dicePic.length)+1);
	
	document.querySelector(".img1").src = dicePic[player1-1];
	document.querySelector(".img2").src = dicePic[player2-1];
	
	if(player1 > player2){
    	document.querySelector("h1").textContent = "😍Player 1 Wins!";
    	document.querySelector("body").style.backgroundColor ="orange";
    } else if (player1 === player2){
    	document.querySelector("h1").textContent = "🤐Its A Draw!🤐";
    	document.querySelector("body").style.backgroundColor = "#393E46";
    } else {
    	document.querySelector("h1").textContent = "Player 2 Wins!😘";
    	document.querySelector("body").style.backgroundColor = "yellow";
    }
}

	 
