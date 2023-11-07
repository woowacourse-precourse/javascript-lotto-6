import { ERROR_MESSAGE } from "../Constants.js";
import { ValidationError } from "../Error/index.js";

class OutputValidator {
  static lottoBundle(lottoBundle) {
    if (!lottoBundle || !lottoBundle.items) {
      throw new ValidationError(ERROR_MESSAGE.INSTANCE_NOT_INITIALIZED);
    }
  }

  static result(lottoBundle, referenceLotto) {
    if (
      !referenceLotto ||
      !referenceLotto.bonus ||
      !lottoBundle ||
      !lottoBundle.items
    ) {
      throw new ValidationError(ERROR_MESSAGE.INSTANCE_NOT_INITIALIZED);
    }
  }
}

export default OutputValidator;
