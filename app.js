//TIMERS EXERCISE


//countdown
function countDown(number){
    let x = setInterval(function(){
        if (number <= 0){
            console.log("DONE!");
            clearInterval(number);
        }
        else {
            console.log(number);
        }
        number--;
    }, 1000)
 }
 //DONE! keeps repeating in the console, unsure how to make it stop...


//randomGame
function randomGame(){
    let randomNum = Math.random();
    let eachTime = 0;
    let time = setInterval(function(){
        randomNum = Math.random();
       eachTime++;
       if (randomNum > 0.75){
        clearInterval(time);
        console.log(eachTime + " Is the amount of times it took.");
       }
    }, 1000)
 }
 
 //first-branch test text