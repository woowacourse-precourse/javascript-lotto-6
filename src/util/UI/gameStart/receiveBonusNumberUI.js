import { consoleInput } from '../../libararyFeatures/MissionUtilHandler.js';

export default async function receiveBonusNumberUI() {
  try {
    const GUIDANCE_TEXT_BONUS_NUMBER = '\n보너스 번호를 입력해 주세요. \n';
    const bonusNumber = await consoleInput(GUIDANCE_TEXT_BONUS_NUMBER);

    return bonusNumber;
  } catch (error) {
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
