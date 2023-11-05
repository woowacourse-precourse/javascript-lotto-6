/**
 * DispatcherServlet 역할
 * 1. DispatcherServlet은 클라이언트 요청을 처리할 Controller에 대한 검색을 HandlerMapping 인터페이스에게 요청합니다.
 * 2. DispatcherServlet은 Handler 메서드를 직접 호출하지 않고 HandlerAdapter에게 Handler 메서드 호출 책임을 넘깁니다.
 * 3. DispatcherServlet은 반환받은 2개의 데이터 중 View 이름을 가지고 ViewResolver에게 해당 View를 달라고 요청합니다.
 * 4. DispatcherServlet은 ViewResolver에게 받은 View 객체에게 Model 데이터를 넘겨주면서 클라이언트에게 전달할 응답 데이터 생성을 요청합니다.
 */
import HandlerMapping from './HandlerMapping.js';
import HandlerAdapter from './HandlerAdapter.js';
import ViewResolver from './ViewResolver.js';
import CONSTANTS from '../../../Util/Constants.js';

class DispatcherServlet {
  #handlerMapping;

  #handlerAdapter;

  #viewResolver;

  constructor() {
    this.#handlerMapping = new HandlerMapping();
    this.#handlerAdapter = new HandlerAdapter();
    this.#viewResolver = new ViewResolver();
  }

  requestAPI(httpRequest) {
    try {
      const controller = this.#handlerMapping.getController(httpRequest.url);
      const modelAndView = this.#handlerAdapter.handler(controller, httpRequest.body);
      const view = this.#viewResolver.getView();
      const httpResponse = view.generateHttpResponse(CONSTANTS.success, modelAndView.model);
      return httpResponse;
    } catch (errorMessage) {
      const view = this.#viewResolver.getView();
      const httpResponse = view.generateHttpResponse(CONSTANTS.error, errorMessage);
      return httpResponse;
    }
  }
}

export default DispatcherServlet;
