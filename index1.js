const randonNum = Math.floor(Math.random() *100 +1)

console.log(randonNum);

window.alert(guessNumeber(randonNum))

function guessNumeber(randonNum){
    let guess = parseInt(window.prompt('please guess a number between 1-100'))
    console.log(guess);

    if(! isNaN){
        while(guess !== randonNum)
        returnMessage = 'Guess again'
    }

    guess = parseInt(window.prompt(`${returnMessage}, please pick a number between 1-100`))

    console.log(returnMessage);
}