/**
 * HandlerAdapter 역할
 * HandlerAdapter은 DispatcherServlet의 요청과 더불어 Controller 정보를 가지고 해당 Controller의 Handler 메서드를 호출합니다.
 */
class HandlerAdapter {
  handler(controller, httpRequestBody) {
    return controller.requestMapping(httpRequestBody);
  }
}

export default HandlerAdapter;
