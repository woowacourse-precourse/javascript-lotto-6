import { ErrorMessage } from "../utils/message.js";

class BasicError extends Error {
  constructor(msg) {
    super(ErrorMessage.basic(msg));
  }
}

export default BasicError;
