import { Console } from "@woowacourse/mission-utils";
import Model from "../model/Model.js";
import View from "../view/View.js";

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  async initHandler() {
    try {
      const priceInput = await this.view.readLine("구입금액을 입력해 주세요.\n");
      this.view.printLotto(this.model.makeLotto(priceInput));
    } catch (err) {
      this.view.print(err.message);
    }
  }
}

const controller = new Controller();
export default controller;
