/* eslint-disable class-methods-use-this */
class HandlerAdapter {
  handler(controller, httpRequestBody) {
    return controller.requestMapping(httpRequestBody);
  }
}

export default HandlerAdapter;
