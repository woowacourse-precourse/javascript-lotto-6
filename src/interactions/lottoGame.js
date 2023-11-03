import { Random } from '@woowacourse/mission-utils';

import lottoPurchase from '../domain/lottoPurchase.js';

import lottoGameConsole from '../cli/lottoGameConsole.js';

import systemErrorHandler from '../error/handlers/systemErrorHandler.js';

const requestLottoNumbers = (purchasedLottoAmount) =>
  lottoPurchase.generateLottoNumbers({
    randomNumberGenerator: Random,
    purchasedLottoAmount,
  });

const requirePurchasedLottoAmount = async () =>
  systemErrorHandler.retryOnErrors(async () => {
    const purchasedLottoAmount = await lottoGameConsole.input.readPurchasedLottoAmount();
    return purchasedLottoAmount;
  });

const processLottoPurchase = async () => {
  const purchasedLottoAmount = await requirePurchasedLottoAmount();
  const lottoNumbers = requestLottoNumbers(purchasedLottoAmount);

  lottoGameConsole.output.printLottoNumbers(lottoNumbers);

  return { purchasedLottoAmount, lottoNumbers };
};

const lottoGame = {
  async run() {
    processLottoPurchase();
  },
};

export default lottoGame;
