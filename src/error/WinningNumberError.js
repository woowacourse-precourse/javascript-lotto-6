import ERROR from '../constants/Error';
import GAME from '../constants/Game';

function checkWinningNumber(winningNumbers){
    if (winningNumbers.length !== GAME.LOTTO_LENGTH){
        throw new Error(ERROR.IS_SIX);
    }

    if (winningNumbers.some((el) => isNaN(el))) {
        throw new Error(ERROR.IS_NAN);
    }
}

export default checkWinningNumber;