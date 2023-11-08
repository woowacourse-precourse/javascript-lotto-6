import ERROR from '../constants/Error';
import GAME from '../constants/Game';

function checkWinningNumber(winningNumber) {
  const winningNumberList = winningNumber.split(',').map(Number);

  if (winningNumberList.length !== GAME.LOTTO_LENGTH) {
    throw new Error(ERROR.IS_SIX);
  }

  if (winningNumberList.some((el) => isNaN(el))) {
    throw new Error(ERROR.IS_NAN);
  }

  if (
    winningNumberList.some((el) => el > GAME.LOTTO_MAX || el < GAME.LOTTO_MIN)
  ) {
    throw new Error(ERROR.RANGE);
  }

  return winningNumberList;
}

export default checkWinningNumber;
