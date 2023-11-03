/* eslint-disable class-methods-use-this */
class HandlerAdapter {
  handler(controller) {
    return controller.requestMapping();
  }
}

export default HandlerAdapter;
