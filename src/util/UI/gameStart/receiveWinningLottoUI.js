import { consoleInput } from '../../libararyFeatures/MissionUtilHandler.js';

export default async function receiveWinningLottoUI() {
  try {
    const GUIDANCE_TEXT_WINNING_LOTTO = '당첨 번호를 입력해 주세요. \n';
    const winningLotto = await consoleInput(GUIDANCE_TEXT_WINNING_LOTTO);

    return winningLotto;
  } catch (error) {
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
}
