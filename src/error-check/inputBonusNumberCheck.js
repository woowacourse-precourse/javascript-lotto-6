import { ERROR_MESSAGES } from "../constant/message";

const isSingleDigit = (number) => {
    if (number.length !== 1) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidSingle}`);
    }
}

const isNotNumber = (number) => {
    if (isNaN(number.toString())) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidNumber}`);
    }
}

const isOnlyNumber = (number) => {
    const numericRegex = /^[0-9]+$/;
    if (!numericRegex.test(number)) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidOnlyNumber}`);
    }
}

const isFromOneToFortyFive = (number) => {
    if (Number(number) > 45 || Number(number) < 1) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidBetweenOneAndFortyFive}`);
    }
}

const isIncludedLottoNumbers = (number, lottoNumber) => {
    if (lottoNumber.includes(Number(number))) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidNotIncludedLottoNumbers}`);
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