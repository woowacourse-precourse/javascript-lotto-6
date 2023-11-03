import { ErrorMessage } from "../utils/message.js";
import BasicError from "./BasicError.js";

class IncorrectLottoCountError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectLottoCount());
  }
}

export default IncorrectLottoCountError;
