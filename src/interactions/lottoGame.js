import { Random } from '@woowacourse/mission-utils';

import lottoPurchase from '../domain/lottoPurchase.js';

import lottoGameConsole from '../cli/lottoGameConsole.js';

import systemErrorHandler from '../error/handlers/systemErrorHandler.js';

const requireWinningLottoNumber = () =>
  systemErrorHandler.retryOnErrors(async () => {
    const winningLottoNumbers = await lottoGameConsole.input.readWinningLottoNumber();
    return winningLottoNumbers;
  });

const requireLottoNumbers = (purchasedLottoAmount) =>
  lottoPurchase.generateLottoNumbers({
    randomNumberGenerator: Random,
    purchasedLottoAmount,
  });

const requirePurchasedLottoAmount = () =>
  systemErrorHandler.retryOnErrors(async () => {
    const purchasedLottoAmount = await lottoGameConsole.input.readPurchasedLottoAmount();
    return purchasedLottoAmount;
  });

const processLottoPurchase = async () => {
  const purchasedLottoAmount = await requirePurchasedLottoAmount();
  const lottoNumbers = requireLottoNumbers(purchasedLottoAmount);

  lottoGameConsole.output.printLottoNumbers(lottoNumbers);

  return { purchasedLottoAmount, lottoNumbers };
};

const lottoGame = {
  async run() {
    await processLottoPurchase();
    const winningLottoNumbers = await requireWinningLottoNumber();
    console.log(winningLottoNumbers);
  },
};

export default lottoGame;
