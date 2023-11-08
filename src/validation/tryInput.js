import { input } from "../util/input.js";
import { print } from "../util/output.js";

export const getInputValue = async (message, validCallback) => {
  while (true) {
    try {
      const inputMessage = await input(message);
      validCallback(inputMessage);
      print("");
      return inputMessage;
    } catch (error) {
      print(error.message);
    }
  }
};
