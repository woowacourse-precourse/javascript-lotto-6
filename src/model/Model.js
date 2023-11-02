import { validatePriceInput } from "../utils/vaildateInput.js";

class Model {
  makeLotto(priceInput) {
    const price = validatePriceInput(priceInput);
  }
}

export default Model;
