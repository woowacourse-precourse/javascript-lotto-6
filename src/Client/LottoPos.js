/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Util/Message.js';
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
  async handlerPurchaseAmount() {
    const purchaseAmount = await InputView.inputPurchaseAmount();
    const httpRequest = HttpRequest(RESTFULAPI.purchaseAmount, purchaseAmount);
    const httpResponse = this.dispatcherServlet.requestAPI(httpRequest);
    if (httpResponse.status === CONSTANTS.error) {
      Console.print(httpResponse.responseData);
      return await this.handlerPurchaseAmount();
    }
    const responseData = httpResponse.responseData.data;
    OutputView.outputPurchaseCount(responseData.length);
    OutputView.outputUserLotto(responseData);
  }

  async inputWinningNumber() {
    const winningNumber = await Console.readLineAsync(INPUT_MESSAGE.winningNumber);
  }
}

export default LottoPos;
