export const buyLottoBuyValueCheck = (money) => {
    if ((Number(money) % 1000)) {
        throw new Error('[ERROR] 1000원 단위로 입력해주세요. (예. 1000, 5000, 10000)');
    }
}

export const isNotNumber = (money) => {
    const numberRegex = /^\d+$/g;
    if (!money.match(numberRegex)) {
        throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
}

export const underThousandValue = (money) => {
    if (Number(money) < 1000) {
        throw new Error('[ERROR] 1000원(1장) 이상 입력해주세요.');
    }
}