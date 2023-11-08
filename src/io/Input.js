import { Console } from '@woowacourse/mission-utils';
import { 
    checkPurchaseAmount,
    checkBonusNumbers,
    checkWinningNumbers,
} from '../utils/Validation';
import { 
    INPUT_MESSAGES, 
    RADIX_TEN,
} from '../utils/Define';

export const inputPurchaseAmountAsync = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGES.PURCHACE_PRICE);
    const amount = parseInt(input, RADIX_TEN);
    checkPurchaseAmount(amount);
    return amount;
};

export const inputWinningNumbersAsync = async () => {
    const numbers = await promptAndValidateNumbersAsync(INPUT_MESSAGES.LOTTO_NUMBER);
    const bonusNumber = await inputBonusNumberAsync(numbers);
    return { winningNumbers: numbers, bonusNumber };
};

const promptAndValidateNumbersAsync = async (message) => {
    const input = await Console.readLineAsync(message);
    const numbers = input.split(',').map(num => parseInt(num.trim(), RADIX_TEN));
    checkWinningNumbers(numbers);
    return numbers;
};

const inputBonusNumberAsync = async (winningNumbers) => {
    const bonusNumber = await promptAndValidateBonusNumberAsync();
    checkBonusNumbers(bonusNumber, winningNumbers);
    return bonusNumber;
};

const promptAndValidateBonusNumberAsync = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGES.BONUS_NUMBER);
    return parseInt(input.trim(), RADIX_TEN);
};