import { ErrorMessage } from "../utils/message.js";
import BasicError from "./BasicError.js";

// LOTTO.MIN_NUMBER ~ LOTTO.MAX_NUMBER 사이의 숫자가 아니면
class IncorrectLottoNumberError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectLottoNumber());
  }
}

export default IncorrectLottoNumberError;
