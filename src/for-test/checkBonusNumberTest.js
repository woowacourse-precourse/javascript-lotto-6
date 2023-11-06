export const isSingleDigit = (number) => {
    if (number.length !== 1) {
        throw new Error("[ERROR] 1자리 숫자를 입력해주세요.");
    }
}

export const isNotNumber = (number) => {
    if (isNaN(number.toString())) {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
}

export const isOnlyNumber = (number) => {
    const numberRegex = /^\d+$/g;
    if (!number.match(numberRegex)) {
        throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
}

export const isFromOneToFortyFive = (number) => {
    if (Number(number) > 45 || Number(number) < 1) {
        throw new Error('[ERROR] 숫자 1부터 45까지 입력해주세요.');
    }
}

export const isIncludedLottoNumbers = (number, lottoNumber) => {
    if (lottoNumber.includes(Number(number))) {
        throw new Error('[ERROR] 입력한 로또 번호와 다른 번호를 입력해주세요.');
    }
}