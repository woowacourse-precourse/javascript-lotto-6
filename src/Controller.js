class Controller {
  static getInstance() {
    if (!Controller.instance) {
      Controller.instance = new Controller();
    }
    return Controller.instance;
  }

  constructor() {
    Controller.instance = this;
    Object.freeze(Controller.instance);
  }
}
