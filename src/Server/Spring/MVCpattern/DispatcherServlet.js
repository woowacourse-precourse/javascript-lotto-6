/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import HandlerMapping from './HandlerMapping.js';
import HandlerAdapter from './HandlerAdapter.js';

class DispatcherServlet {
  #handlerMapping;

  #handlerAdapter;

  constructor() {
    this.#handlerMapping = new HandlerMapping();
    this.#handlerAdapter = new HandlerAdapter();
  }

  requestAPI(httpRequest) {
    const controller = this.#handlerMapping.getController(httpRequest.url);
    const result = this.#handlerAdapter.handler(controller, httpRequest.body);
  }
}

export default DispatcherServlet;
