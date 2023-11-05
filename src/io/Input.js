import { Console } from '@woowacourse/mission-utils';
import { 
    checkPurchaseAmount, 
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