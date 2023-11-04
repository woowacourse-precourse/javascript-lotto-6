import { Random } from '@woowacourse/mission-utils';

import lottoPurchase from '../domain/lottoPurchase.js';
import winningResult from '../domain/confirmWinningInfo/winningResult.js';
import lottoNumberMatching from '../domain/confirmWinningInfo/lottoNumberMatching.js';

import lottoGameConsole from '../cli/lottoGameConsole.js';

import systemErrorHandler from '../error/handlers/systemErrorHandler.js';
import rateOfReturnCalculation from '../domain/confirmWinningInfo/rateOfReturnCalculation.js';

const processWinningResult = ({
  purchasedLottoInfo: { purchasedLottoAmount, lottoNumbers },
  winningLottoInfo,
}) => {
  const lottoNumberInfo = { lottoNumbers, winningLottoInfo };
  const lottoMatchingResult = lottoNumberMatching.createLottoMatchingResult(lottoNumberInfo);
  const { rewardInfo, prize } = winningResult.createWinningResult(lottoMatchingResult);
  const rateOfReturn = rateOfReturnCalculation.calculate({ purchasedLottoAmount, prize });
  console.log(rewardInfo, rateOfReturn);
};

const processInputWinningLottoInfo = async () => {
  const { readWinningLottoNumber, readBonusNumber } = lottoGameConsole.input;

  const winningLottoNumber = await systemErrorHandler.retryOnErrors(
    readWinningLottoNumber.bind(lottoGameConsole.input),
  );

  const bonusNumber = await systemErrorHandler.retryOnErrors(() =>
    readBonusNumber.bind(lottoGameConsole.input)(winningLottoNumber),
  );

  return { winningLottoNumber, bonusNumber };
};

const requireLottoNumbers = (purchasedLottoAmount) =>
  lottoPurchase.generateLottoNumbers({
    randomNumberGenerator: Random,
    purchasedLottoAmount,
  });

const processInputPurchasedLottoAmount = () =>
  systemErrorHandler.retryOnErrors(async () => {
    const purchasedLottoAmount = await lottoGameConsole.input.readPurchasedLottoAmount();
    return purchasedLottoAmount;
  });

const processLottoPurchase = (purchasedLottoAmount) => {
  const lottoNumbers = requireLottoNumbers(purchasedLottoAmount);

  lottoGameConsole.output.printLottoNumbers(lottoNumbers);

  return lottoNumbers;
};

const lottoGame = {
  async run() {
    const purchasedLottoAmount = await processInputPurchasedLottoAmount();
    const lottoNumbers = processLottoPurchase(purchasedLottoAmount);
    const purchasedLottoInfo = { lottoNumbers, purchasedLottoAmount };
    const winningLottoInfo = await processInputWinningLottoInfo();
    processWinningResult({ purchasedLottoInfo, winningLottoInfo });
  },
};

export default lottoGame;
