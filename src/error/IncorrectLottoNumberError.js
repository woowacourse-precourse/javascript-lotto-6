import { ErrorMessage } from "../utils/message.js";
import BasicError from "./BasicError.js";

class IncorrectLottoNumberError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectLottoNumber());
  }
}

export default IncorrectLottoNumberError;
