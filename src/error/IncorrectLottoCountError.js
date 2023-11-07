import { ErrorMessage } from "../utils/message.js";
import BasicError from "./BasicError.js";

// 로또 번호의 개수가 LOTTO.NUMBER_COUNT와 다르면
class IncorrectLottoCountError extends BasicError {
  constructor() {
    super(ErrorMessage.incorrectLottoCount());
  }
}

export default IncorrectLottoCountError;
