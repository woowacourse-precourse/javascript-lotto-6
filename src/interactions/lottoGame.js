import { Random } from '@woowacourse/mission-utils';

import lottoPurchase from '../domain/lottoPurchase.js';
import winningInfo from '../domain/confirmWinningInfo/winningInfo.js';
import lottoNumberMatching from '../domain/confirmWinningInfo/lottoNumberMatching.js';
import rateOfReturnCalculation from '../domain/confirmWinningInfo/rateOfReturnCalculation.js';

import lottoGameConsole from '../cli/lottoGameConsole.js';

import systemErrorHandler from '../error/handlers/systemErrorHandler.js';

const { readWinningLottoNumber, readBonusNumber, readPurchasedLottoAmount } =
  lottoGameConsole.input;

const processWinningResult = ({
  purchasedLottoInfo: { purchasedLottoAmount, lottoNumbers },
  winningLottoInfo,
}) => {
  const lottoNumberInfo = { lottoNumbers, winningLottoInfo };
  const lottoMatchingResult = lottoNumberMatching.createLottoMatchingResult(lottoNumberInfo);

  const { rewardInfo, prize } = winningInfo.createWinningInfo(lottoMatchingResult);

  const rateOfReturn = rateOfReturnCalculation.calculate({ purchasedLottoAmount, prize });

  lottoGameConsole.output.printWinningResult({ rewardInfo, rateOfReturn });
};

const processInputWinningLottoInfo = async () => {
  const winningLottoNumber = await systemErrorHandler.retryOnErrors(
    readWinningLottoNumber.bind(lottoGameConsole.input),
  );

  const bonusNumber = await systemErrorHandler.retryOnErrors(() =>
    readBonusNumber.bind(lottoGameConsole.input)(winningLottoNumber),
  );

  return { winningLottoNumber, bonusNumber };
};

const processLottoPurchase = (purchasedLottoAmount) => {
  const params = { randomNumberGenerator: Random, purchasedLottoAmount };
  const lottoNumbers = lottoPurchase.generateLottoNumbers(params);

  lottoGameConsole.output.printLottoNumbers(lottoNumbers);

  return lottoNumbers;
};

const processInputPurchasedLottoAmount = async () => {
  const purchasedLottoAmount = await systemErrorHandler.retryOnErrors(
    readPurchasedLottoAmount.bind(lottoGameConsole.input),
  );

  return purchasedLottoAmount;
};

const lottoGame = {
  async run() {
    const purchasedLottoAmount = await processInputPurchasedLottoAmount();

    const lottoNumbers = processLottoPurchase(purchasedLottoAmount);

    const winningLottoInfo = await processInputWinningLottoInfo();
    const purchasedLottoInfo = { lottoNumbers, purchasedLottoAmount };

    processWinningResult({ purchasedLottoInfo, winningLottoInfo });
  },
};

export default lottoGame;
