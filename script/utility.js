function hideElement (elementId){
    const hideElement = document.getElementById(elementId);
    hideElement.classList.add('hidden');
}
function showElement (elementId){
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
}



function setBackgroundColor (elementId){
    const currentElement = document.getElementById(elementId);
    currentElement.classList.add('bg-orange-700')
    currentElement.classList.add('text-white')
}



function getRandomAlphabet (){
    const alphabetString = 'abcdefghijklmnopqrstuvwzyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);


    const randomNumber = Math.random()*25;
    const Index = Math.round(randomNumber);


    const alphabet = alphabets[Index];
    return alphabet
    
    
}