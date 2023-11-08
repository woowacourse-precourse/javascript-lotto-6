import ERROR from '../constants/Error';
import GAME from '../constants/Game';

function checkWinningNumber(winningNumbers) {
    if (winningNumbers.length !== GAME.LOTTO_LENGTH) {
        throw new Error(ERROR.IS_SIX);
    }

    if (winningNumbers.some((el) => isNaN(el))) {
        throw new Error(ERROR.IS_NAN);
    }

    if (winningNumbers.some((el) => el > LOTTO_MAX || el < LOTTO_MIN)) {
        throw new Error(ERROR.RANGE);
    }
}

export default checkWinningNumber;