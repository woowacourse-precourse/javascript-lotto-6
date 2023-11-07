import * as ErrorMessage from '../view/ErrorMessage';

export function checkNull(input){
        if(input === null 
            || input === undefined 
            || input === ''){
            ErrorMessage.nullErrorMessage();
        }
    }

export function checkNumber(input){
        if(isNaN(Number(input))){
            ErrorMessage.notNumberErrorMessage();
        }
    }

export function checkRange(input){
        if(input < 1 
        || input > 45){
            ErrorMessage.notInRangeMessage()
;        }
    }

export function checkDivision(input){
        if(input % 1000 !== 0){
            ErrorMessage.notDivisionMessage();
        }
    } 

export function checkMoney(input){
        const numberInput = Number(input);
        checkNull(input);
        checkNumber(numberInput);
        checkDivision(numberInput);
    }

export function checkBonus(input,winning){
        const numberInput = Number(input);
        checkNull(input);
        checkNumber(numberInput);
        checkRange(numberInput);
        winning.bonusDuplicate(numberInput);
    }









