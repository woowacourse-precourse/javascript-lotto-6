const LOTTOPRICE = 1000;

function validationUserMoney(userMoney) {
    if(!+userMoney) {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if((userMoney/LOTTOPRICE) - Math.floor(userMoney/LOTTOPRICE)) {
        throw new Error("[ERROR] 1000원 단위로 입금해주세요.");
    }
}

export { validationUserMoney };