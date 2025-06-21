

function continueGame (){
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet is ', alphabet);

    const currentAlphabet = document.getElementById('random-alphabet');
    currentAlphabet.innerText=alphabet;


    setBackgroundColor(alphabet);

}





function play (){
   hideElement('home')
   showElement('playground')
   continueGame()
   
}

