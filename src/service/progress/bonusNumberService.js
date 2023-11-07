import receiveBonusNumberUI from '../../util/UI/gameStart/receiveBonusNumberUI.js';
import getBonusNumber from '../getBonusNumber.js';

export default async function bonusNumberService(lotto) {
  try {
    const bonusInput = await receiveBonusNumberUI();
    const bonusNumber = await getBonusNumber(bonusInput, lotto);
    return bonusNumber;
  } catch (error) {
    throw new Error(error.message);
  }
}
