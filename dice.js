var randomNumber1=Math.floor(Math.random()*6)+1;//1-6 No.s
var randomDiceImg="dice"+randomNumber1+".png";//to show random img
 var randomImageSource="images/"+randomDiceImg;//images/dice1 to dice6
var image1= document.querySelectorAll("img")[0];

  image1.setAttribute("src",randomImageSource); 

 var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImg2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImg2;
  document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

  
  if(randomNumber1>randomNumber2)
  {
        document.querySelector("h1").innerHTML="Player 1 wins"
  }
  else if(randomNumber2>randomNumber1)
  {
    document.querySelector("h1").innerHTML="Player 2 wins"
  }
  else{
      document.querySelector("h1").innerHTML="Draw!";
  }