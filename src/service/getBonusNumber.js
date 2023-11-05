import receiveBonusNumberUI from '../util/UI/gameStart/receiveBonusNumberUI.js';
import bonusNumberValidService from './validate/bonusNumberValidService.js';

export default async function getBonusNumber(winningNumber) {
  try {
    const input = await receiveBonusNumberUI();
    const bonusNumber = Number(input);
    await bonusNumberValidService(bonusNumber, winningNumber);
    return bonusNumber;
  } catch (error) {
    throw new Error(error.message);
  }
}
