import {
    ERROR,
    LOTTO_NUMBER_COUNT,
    LOTTO_PRICE,
    MAX_LOTTO_NUMBER, 
    MIN_LOTTO_NUMBER,
    ZERO,
} from './Define';

export const checkBonus = (lotto, bonusNumber) => (
    lotto.getNumbers().includes(bonusNumber)
);

export const checkBonusNumbers = (bonusNumber, winningNumbers) => {
    if (isNaN(bonusNumber)) {
        throw new Error(ERROR.INVALID_BONUS_NUMBER_MESSAGE);
    }
    if (!Number.isInteger(bonusNumber)){
        throw new Error(ERROR.INVALID_BONUS_NUMBER_MESSAGE);
    }
    if (winningNumbers.includes(bonusNumber)) {
        throw new Error(ERROR.INVALID_BONUS_NUMBER_MESSAGE);
    }
    if (bonusNumber < MIN_LOTTO_NUMBER || bonusNumber > MAX_LOTTO_NUMBER) {
        throw new Error(ERROR.INVALID_BONUS_NUMBER_MESSAGE);
    }
};

export const checkPurchaseAmount = (amount) => {
    if (isNaN(amount)) {
        throw new Error(ERROR.INVALID_AMOUNT_MESSAGE);
    }
    if (amount === ZERO || amount < ZERO) {
        throw new Error(ERROR.INVALID_AMOUNT_MESSAGE);
    }
    if (amount % LOTTO_PRICE !== ZERO) {
        throw new Error(ERROR.INVALID_AMOUNT_MESSAGE);
    }
    if (!Number.isInteger(amount)) {
        throw new Error(ERROR.INVALID_AMOUNT_MESSAGE);
    }
};

export const checkWinningNumbers = (numbers) => {
    const hasInvalidNumber = numbers.some((number) =>
        isNaN(number) ||
        !Number.isInteger(number) ||
        number < MIN_LOTTO_NUMBER ||
        number > MAX_LOTTO_NUMBER
    );

    if (hasInvalidNumber || numbers.length !== LOTTO_NUMBER_COUNT || new Set(numbers).size !== LOTTO_NUMBER_COUNT) {
        throw new Error(ERROR.INVALID_WINNING_NUMBERS_MESSAGE);
    }
};