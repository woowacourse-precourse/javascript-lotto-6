import { Random } from '@woowacourse/mission-utils';

import lottoPurchase from '../domain/lottoPurchase.js';

import lottoGameConsole from '../cli/lottoGameConsole.js';

import systemErrorHandler from '../error/handlers/systemErrorHandler.js';

const processInputWinningLottoInfo = async () => {
  const { readWinningLottoNumber, readBonusNumber } = lottoGameConsole.input;

  const winningLottoNumber = await systemErrorHandler.retryOnErrors(
    readWinningLottoNumber.bind(lottoGameConsole.input),
  );

  const bonusNumber = await systemErrorHandler.retryOnErrors(() =>
    readBonusNumber(winningLottoNumber),
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
    const { bonusNumber, winningLottoNumber } = await processInputWinningLottoInfo();
  },
};

export default lottoGame;
