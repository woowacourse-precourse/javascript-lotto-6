const buyLottoBuyValueCheck = (money) => {
    if ((Number(money) % 1000)) {
        throw new Error('[ERROR] 1000원 단위로 입력해주세요. (예. 1000, 5000, 10000)');
    }
}

const isNotNumber = (number) => {
    if (isNaN(Number(number))) {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
}

const underThousandValue = (money) => {
    if (Number(money) < 1000) {
        throw new Error('[ERROR] 1000원(1장) 이상 입력해주세요.');
    }
}

const userInputAllCheck = (money) => {
    buyLottoBuyValueCheck(money);
    isNotNumber(money);
    underThousandValue(money);
}

export default userInputAllCheck;