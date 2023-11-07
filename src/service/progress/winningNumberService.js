import receiveWinningLottoUI from '../../util/UI/gameStart/receiveWinningLottoUI.js';
import getLottoNumber from '../getLottoNumber.js';

export default async function winnigNumberService() {
  try {
    const winningNumber = await receiveWinningLottoUI();
    const lotto = await getLottoNumber(winningNumber);
    return lotto;
  } catch (error) {
    throw new Error(error.message);
  }
}
