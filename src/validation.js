const LOTTOPRICE = 1000;
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;


function validationUserMoney(userMoney) {
    if(!+userMoney) {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if((userMoney/LOTTOPRICE) - Math.floor(userMoney/LOTTOPRICE)) {
        throw new Error("[ERROR] 1000원 단위로 입금해주세요.");
    }
}

function qualificationWinnerNumber(winnerNumber) {
    if(winnerNumber < MIN_NUMBER || winnerNumber > MAX_NUMBER) {
        throw new Error("[ERROR] 1~45 내의 숫자를 입력해주세요.");
    }
    if(!+winnerNumber) {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
}

function validationBonusNumber(bonusNumber, winnerNumbers) {
    winnerNumbers.forEach((winnerNumber) => qualificationBonusNumber(bonusNumber, winnerNumber));
    if(bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER) {
        throw new Error("[ERROR] 1~45 내의 숫자를 입력해주세요.");
    }
    if(!+bonusNumber) {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
}

function qualificationBonusNumber(bonusNumber, winnerNumber) {
    if(bonusNumber == winnerNumber) {
        throw new Error("[ERROR] 당첨 번호와 다른 번호를 입력하세요.");
    }
}