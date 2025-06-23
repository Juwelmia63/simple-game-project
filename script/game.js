

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


    if(pressesKey == finalDorkar){
        

        // console.log('everything ok');
        continueGame();
        // setBackgroundColor(finalDorkar)
        removeBackgroundColor(finalDorkar)
    }
    else{
        console.log('nothing is ok');
    }
  
}

document.addEventListener('keyup', handlekeyup )





function play (){
   hideElement('home')
   showElement('playground')
   continueGame()
   
}

