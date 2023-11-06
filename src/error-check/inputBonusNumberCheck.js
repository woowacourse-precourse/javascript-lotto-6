const isSingleDigit = (number) => {
    if (number.length !== 1) {
        throw new Error("[ERROR] 1자리 숫자를 입력해주세요.");
    }
}

const isNotNumber = (number) => {
    if (isNaN(number.toString())) {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
}

const isOnlyNumber = (number) => {
    const numericRegex = /^[0-9]+$/;
    if (!numericRegex.test(number)) {
        throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
}

const isFromOneToFortyFive = (number) => {
    if (Number(number) > 45 || Number(number) < 1) {
        throw new Error('[ERROR] 숫자 1부터 45까지 입력해주세요.');
    }
}

const isIncludedLottoNumbers = (number, lottoNumber) => {
    if (lottoNumber.includes(Number(number))) {
        throw new Error('[ERROR] 입력한 로또 번호와 다른 번호를 입력해주세요.');
    }
}

const inputBonusNumberValidation = (numbers, lottoNumber) => {
    isSingleDigit(numbers);
    isNotNumber(numbers);
    isOnlyNumber(numbers);
    isFromOneToFortyFive(numbers);
    isIncludedLottoNumbers(numbers, lottoNumber);
}

export default inputBonusNumberValidation;