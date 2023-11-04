/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
// 미션 특성상 서버를 열고 클라이언트와 통신 할 수 없으므로 서버 객체를 생성하는 방법으로 대체
import DispatcherServlet from '../Server/Spring/MVCpattern/DispatcherServlet.js';
import HttpRequest from './HttpRequest.js';
import RESTFULAPI from '../Util/API.js';
import CONSTANTS from '../Util/Constants.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class LottoPos {
  constructor() {
    this.dispatcherServlet = new DispatcherServlet();
  }

  // eslint-disable-next-line consistent-return
  handlerPurchaseAmount = async () => {
    const purchaseAmount = await InputView.inputPurchaseAmount();
    const responseData = await this.ajax(
      RESTFULAPI.purchaseAmount,
      purchaseAmount,
      this.handlerPurchaseAmount,
    );
    if (responseData) {
      OutputView.outputPurchaseCount(responseData.length);
      OutputView.outputUserLotto(responseData);
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

  ajax = async (url, data, callback) => {
    const httpRequest = HttpRequest(url, data);
    const httpResponse = this.dispatcherServlet.requestAPI(httpRequest);
    if (httpResponse.status === CONSTANTS.error) {
      OutputView.outputError(httpResponse.responseData);
      return await callback();
    }
    const responseData = httpResponse.responseData.data;
    return responseData;
  };
}

export default LottoPos;
