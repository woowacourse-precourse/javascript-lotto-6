import receiveBonusNumberUI from '../util/UI/gameStart/receiveBonusNumberUI.js';
import bonusNumberValidService from './validate/bonusNumberValidService.js';

export default async function getBonusNumber() {
  try {
    const input = await receiveBonusNumberUI();
    await bonusNumberValidService(input);
    const bonusNumber = Number(input);
    return bonusNumber;
  } catch (error) {
    throw new Error(error.message);
  }
}
