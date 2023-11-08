import Errors from "./Errors.js";

const Validations = Object.freeze({
  hasSpace(input) {
    if (/\s+/.test(input)) {
      throw new Error(Errors.INPUT_HAS_SPACE);
    }
  },
});

export default Validations;