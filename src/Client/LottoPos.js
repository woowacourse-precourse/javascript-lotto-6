/* eslint-disable no-return-await */
import DispatcherServlet from '../Server/Spring/MVCpattern/DispatcherServlet.js';
import HttpRequest from './HttpRequest.js';
import RESTFULAPI from '../Util/API.js';
import CONSTANTS from '../Util/Constants.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import { OUTPUT_MESSAGE } from '../Util/Message.js';

class LottoPos {
  #userLotto;

  constructor() {
    this.dispatcherServlet = new DispatcherServlet();
    this.#userLotto = null;
  }

  handlerPurchaseAmount = async () => {
    const purchaseAmount = await InputView.inputPurchaseAmount();
    const responseData = await this.ajax(
      RESTFULAPI.purchaseAmount,
      purchaseAmount,
      this.handlerPurchaseAmount,
    );
    if (responseData) {
      OutputView.outputPurchaseCount(responseData.userLotto.length);
      OutputView.outputUserLotto(responseData.userLotto);
      this.#userLotto = responseData;
    }
  };

  inputWinningNumber = async () => {
    const winningNumber = await InputView.inputWinningNumber();
    await this.ajax(RESTFULAPI.setWinningNumber, winningNumber, this.inputWinningNumber);
  };

  inputBonusNumber = async () => {
    const bonusNumber = await InputView.inputBonusNumber();
    await this.ajax(RESTFULAPI.setBonusNumber, bonusNumber, this.inputBonusNumber);
  };

  compareLottoNumber = async () => {
    const responseData = await this.ajax(RESTFULAPI.compareLottoNumber, this.#userLotto, null);
    OutputView.outputMessage(OUTPUT_MESSAGE.winningAvgTitle);
    OutputView.outputLottoResult(responseData.compareResult);
    OutputView.outputProfit(responseData.profit);
  };

  ajax = async (url, data, callback) => {
    const httpRequest = HttpRequest(url, data);
    const httpResponse = this.dispatcherServlet.requestAPI(httpRequest);
    if (httpResponse.status === CONSTANTS.error) {
      OutputView.outputMessage(httpResponse.responseData);
      return await callback();
    }
    const responseData = httpResponse.responseData.data;
    return responseData;
  };
}

export default LottoPos;
