const randNum = Math.floor(Math.random() * 6)+1;
console.log(randNum);

const dicenum=`dice${randNum}.png`;
console.log(dicenum);

const diceImage=`Images/${dicenum}`;
console.log(diceImage);

const img1=document.querySelector('.img1')

img1.setAttribute("src",diceImage);

const randNum2 = Math.floor(Math.random() * 6)+1;
console.log(randNum2);

const dicenum2=`dice${randNum2}.png`;
console.log(dicenum2);

const diceImage2=`Images/${dicenum2}`;
console.log(diceImage2);

const img2=document.querySelector('.img2')

img2.setAttribute("src",diceImage2);

if(randNum>randNum2){
    document.querySelector('h1').innerHTML="player 1 is won";

}else if(randNum2>randNum){
    document.querySelector('h1').innerHTML="player 2 is won";
}else{
    document.querySelector('h1').innerHTML="tie/draw";
}