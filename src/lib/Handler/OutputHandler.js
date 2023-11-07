import OutputView from "../View/OutputView.js";
import OutputValidator from "../Validator/OutputValidator.js";
import { NonPropagatingError, ValidationError } from "../Error/index.js";

class OutputHandler {
  static lottoBundle(lottoBundle) {
    OutputValidator.lottoBundle(lottoBundle);

    OutputView.lottoBundle({
      purchaseHistory: lottoBundle.purchaseHistory,
    });
  }

  static result(lottoBundle, referenceLotto) {
    OutputValidator.result(lottoBundle, referenceLotto);

    const result = referenceLotto.calcResult(lottoBundle.items);
    const { prizeMap, winRate } = result;
    OutputView.result({ prizeMap, winRate });
  }

  static error(error) {
    OutputView.err({ message: error.message });
    if (
      error instanceof ValidationError ||
      error instanceof NonPropagatingError
    ) {
      return;
    }
    throw err;
  }
}

export default OutputHandler;
