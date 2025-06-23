

function continueGame (){
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet is ', alphabet);

    const currentAlphabet = document.getElementById('random-alphabet');
    currentAlphabet.innerText=alphabet;


    setBackgroundColor(alphabet);

}


function handlekeyup(event){
    const pressesKey = event.key;
    // console.log('current pressed alpha', pressesKey);


    const dorkarAlphabet = document.getElementById('random-alphabet');
    const dorkar = dorkarAlphabet.innerText;
    const finalDorkar = dorkar.toLowerCase();
    // console.log('dorkar amar alphabet', finalDorkar);


    if(pressesKey === finalDorkar){
        
        const presentScore = document.getElementById('presentScore');
        const scoreText = presentScore.innerText;
        const justScore =  parseInt(scoreText);


        const newScore = justScore +1;

        presentScore.innerText=newScore;
       
        console.log(justScore);
        // console.log('everything ok');
        continueGame();
        // setBackgroundColor(finalDorkar)
        removeBackgroundColor(finalDorkar)
    }
    else{
        console.log('nothing is ok');


        const currentLife = document.getElementById('currentLife');
        const currentLifeText = currentLife.innerText;
        const realLife = parseInt(currentLifeText);

        const newLife = realLife-1;

        currentLife.innerText=newLife;

        if (newLife==0){
            gameOver();
        }

    }
  
}

document.addEventListener('keyup', handlekeyup )





function play (){
   hideElement('home')
   showElement('playground')
   


    


   continueGame()
   
}


function gameOver (){
    hideElement('playground');
    showElement('finalScore')

}


function playAgain (){
    hideElement('finalScore')
    showElement('home')
}
