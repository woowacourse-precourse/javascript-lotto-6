import { Random } from '@woowacourse/mission-utils';

import {
  lottoPurchase,
  winningInfoGeneration,
  lottoNumberMatching,
  rateOfReturnCalculation,
} from '../domain/index.js';

import lottoGameConsole from '../cli/lottoGameConsole/lottoGameConsole.module.js';

import systemErrorHandler from '../error/systemErrorHandler/systemErrorHandler.module.js';

const { readWinningLottoNumber, readBonusNumber, readPurchasedLottoAmount } =
  lottoGameConsole.input;

/**
 * @param {object} param - 구매된 로또 정보와 당첨 로또 정보가 있는 매개 변수 객체
 * @param {import('../utils/jsDoc.js').PurchasedLottoInfo} param.purchasedLottoInfo - 구매된 로또 정보(구매 로또 금액, 로또 번호들)
 * @param {import('../utils/jsDoc.js').WinningLottoInfo} param.winningLottoInfo - 당첨 로또 정보(보너스 번호, 당첨 번호)
 */
const processWinningResult = ({
  purchasedLottoInfo: { purchasedLottoAmount, lottoNumbers },
  winningLottoInfo,
}) => {
  const lottoNumberInfo = { lottoNumbers, winningLottoInfo };
  const lottoMatchingResult = lottoNumberMatching.createLottoMatchingResult(lottoNumberInfo);

  const { rankDistributionTable, prize } =
    winningInfoGeneration.createWinningInfo(lottoMatchingResult);

  const rateOfReturn = rateOfReturnCalculation.calculate({ purchasedLottoAmount, prize });

  lottoGameConsole.output.printWinningResult({ rankDistributionTable, rateOfReturn });
};

/**
 * @returns {Promise<import('../utils/jsDoc.js').WinningLottoInfo>} 당첨 로또 정보의 promise 객체
 */
const processInputWinningLottoInfo = async () => {
  const winningLottoNumber = await systemErrorHandler.retryAsyncWithErrorLogging(
    readWinningLottoNumber.bind(lottoGameConsole.input),
  );

  const bonusNumber = await systemErrorHandler.retryAsyncWithErrorLogging(() =>
    readBonusNumber.bind(lottoGameConsole.input)(winningLottoNumber),
  );

  return { winningLottoNumber, bonusNumber };
};

/**
 * @param {number} purchasedLottoAmount - 구매 로또 금액
 * @returns {number[][]} 구매 가격 만큼의 로또 번호들
 */
const processLottoPurchase = (purchasedLottoAmount) => {
  const params = { randomNumberGenerator: Random, purchasedLottoAmount };
  const lottoNumbers = lottoPurchase.buyLottoNumbers(params);

  lottoGameConsole.output.printLottoNumbers(lottoNumbers);

  return lottoNumbers;
};

/**
 * @returns {Promise<number>} 구매 가격 만큼의 로또 번호들
 */
const processInputPurchasedLottoAmount = async () => {
  const purchasedLottoAmount = await systemErrorHandler.retryAsyncWithErrorLogging(
    readPurchasedLottoAmount.bind(lottoGameConsole.input),
  );

  return purchasedLottoAmount;
};

/**
 * @module lottoGame
 * 실제 로또 게임을 진행하기 위한 인터렉션 계층의 모듈 (controller와 비슷한 역할을 수행)
 */
const lottoGame = {
  /**
   * @returns {Promise<void>}
   */
  async run() {
    const purchasedLottoAmount = await processInputPurchasedLottoAmount();

    const lottoNumbers = processLottoPurchase(purchasedLottoAmount);

    const winningLottoInfo = await processInputWinningLottoInfo();
    const purchasedLottoInfo = { lottoNumbers, purchasedLottoAmount };

    processWinningResult({ purchasedLottoInfo, winningLottoInfo });
  },
};

export default lottoGame;
