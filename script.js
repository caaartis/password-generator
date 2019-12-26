
//link slider to number
const characterAmountRange=document.getElementById('characterAmountRange');
const characterAmountNumber=document.getElementById('characterAmountNumber');
const includeUppercaseElement=document.getElementById('includeUpperCase');
const includeNumbersElement=document.getElementById('includeNumbers');
const includeSymbolsElement=document.getElementById('includeSymbols')
const UPPERCASE_CHAR_CODES=arrayFromLowToHigh(65,90);
const LOWERCASE_CHAR_CODES=arrayFromLowToHigh(97,122);
const NUMBER_CHAR_CODES=arrayFromLowToHigh(48,57);

// const includeUppercaseElement=document.getElementById('includeUppercase')
const SYMBOL_CHAR_CODES=arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126))

const form=document.getElementById('passwordGeneratorForm');
const passwordDisplay=document.getElementById('passwordDisplay');

form.addEventListener('submit', e=>{
 e.preventDefault();
 //get a password varialble
 const characterAmount=characterAmountNumber.value;
 const includeUppercase=includeUppercaseElement.checked;
 const includeNumbers=includeNumbersElement.checked;
 const includeSymbols=includeSymbolsElement.checked;


 const password=generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols);
 passwordDisplay.innerText=password;
})


//now set up the ADDEventListeners

characterAmountRange.addEventListener('input',syncCharacterAmount);
characterAmountNumber.addEventListener('input',syncCharacterAmount);

function syncCharacterAmount(e){
    const value=e.target.value;
    characterAmountNumber.value=value;
    characterAmountRange.value=value;
}

function arrayFromLowToHigh(low,high){
    const array=[]
    for(let i=low; i<=high;i++){
 array.push(i);
    }

    return array;
}

function generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols){

    String.fromCharCode(65)
    let charCodes=LOWERCASE_CHAR_CODES;
    if(includeUppercase) charCodes=charCodes.concat(UPPERCASE_CHAR_CODES)
    if(includeNumbers) charCodes=charCodes.concat(NUMBER_CHAR_CODES);
    if(includeSymbols) charCodes=charCodes.concat(SYMBOL_CHAR_CODES);
    const passwordCharacters=[]
    for(let i=0; i<characterAmount;i++){
        const characterCode=charCodes[Math.floor(Math.random()*charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('')
}


