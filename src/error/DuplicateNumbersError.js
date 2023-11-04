import { ErrorMessage } from "../utils/message.js";
import BasicError from "./BasicError.js";

// 로또 번호가 중복된 값을 가지면
class DuplicateNumbersError extends BasicError {
  constructor() {
    super(ErrorMessage.duplicateNumbers());
  }
}

export default DuplicateNumbersError;
