/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import HandlerMapping from './HandlerMapping.js';
import HandlerAdapter from './HandlerAdapter.js';
import CONSTANTS from '../../../Util/Constants.js';
import HttpResponse from '../../HttpResponse.js';

class DispatcherServlet {
  #handlerMapping;

  #handlerAdapter;

  constructor() {
    this.#handlerMapping = new HandlerMapping();
    this.#handlerAdapter = new HandlerAdapter();
  }

  requestAPI(httpRequest) {
    try {
      const controller = this.#handlerMapping.getController(httpRequest.url);
      const result = this.#handlerAdapter.handler(controller, httpRequest.body);
      return HttpResponse(CONSTANTS.success, result);
    } catch (errorMessage) {
      return HttpResponse(CONSTANTS.error, errorMessage);
    }
  }
}

export default DispatcherServlet;
