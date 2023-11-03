/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Util/Message.js';
// 미션 특성상 서버를 열고 클라이언트와 통신 할 수 없으므로 서버 객체를 생성하는 방법으로 대체
import DispatcherServlet from '../Server/Spring/MVCpattern/DispatcherServlet.js';
import HttpRequest from './HttpRequest.js';
import RESTFULAPI from '../Util/API.js';

class InputView {
  constructor() {
    this.dispatcherServlet = new DispatcherServlet();
  }

  async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);
    const httpRequest = HttpRequest(RESTFULAPI.purchaseAmount, purchaseAmount);
    const httpResponse = this.dispatcherServlet.requestAPI(httpRequest);
    console.log(httpResponse);
  }
}

export default InputView;
