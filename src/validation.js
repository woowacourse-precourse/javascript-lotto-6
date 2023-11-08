import { LOTTO, ERROR_MSG } from './constant.js';

const validation = {
    checkPurchasePrice(input) {
        if (isNaN(input))
            throw new Error(ERROR_MSG.INPUT_NAN);

        if (input / LOTTO.UNIT !== 0)
            throw new Error(ERROR_MSG.NUM_UNIT);

        return 0;
    },

    checkLottoNum(input) {
        input.forEach((num) => {
            if (num < LOTTO.MIN_RANGE || num > LOTTO.MAX_RANGE)
                throw new Error(ERROR_MSG.NUM_RANGE);
        });
        if (input.length !== LOTTO.LENGTH)
            throw new Error(ERROR_MSG.NUM_LENGTH);

        if (new Set(input).size !== input.length)
            throw new Error(ERROR_MSG.NUM_DUPE);

        return 0;
    },

    checkWinningNum(input) {
        input.forEach((num) => {
            if (isNaN(num))
                throw new Error(ERROR_MSG.INPUT_NAN);

            if (num < LOTTO.MIN_RANGE || num > LOTTO.MAX_RANGE)
                throw new Error(ERROR_MSG.NUM_RANGE);
        });
        if (input.length !== LOTTO.LENGTH)
            throw new Error(ERROR_MSG.NUM_LENGTH);

        if (new Set(input).size !== input.length)
            throw new Error(ERROR_MSG.NUM_DUPE);

        return 0;
    },

    checkBonusNum(winning, bonus) {
        if (isNaN(bonus))
            throw new Error(ERROR_MSG.INPUT_NAN);

        if (bonus < LOTTO.MIN_RANGE || bonus > LOTTO.MAX_RANGE)
            throw new Error(ERROR_MSG.NUM_RANGE);

        const arr = winning.push(bonus);
        if (new Set(arr).size !== arr.length)
            throw new Error(ERROR_MSG.NUM_DUPE);

        return 0;
    },
  };
  
  export default validation;