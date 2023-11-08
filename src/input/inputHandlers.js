import inputValidators from "./inputValidators.js";
import { Console } from "@woowacourse/mission-utils";
import { ERROR, MESSAGES } from "../output/Constants.js";

const inputHandlers = {
  async inputPayment() {
    let paymentStr;
    while (true) {
      try {
        paymentStr = await Console.readLineAsync(`${MESSAGES.PAYMENT_INPUT}`);
        const paymentNum = Number(paymentStr);
        inputValidators.validatePayment(paymentNum);
        return paymentNum;
      } catch (error) {
        Console.print(`${ERROR.INPUT_ERROR}`);
      }
    }
  },
};

export default inputHandlers;
