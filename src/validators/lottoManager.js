import ERROR from "../constants/error.js";
import messageFormatter from "../utils/messageFormatter.js";

/**
 * @param {number} amountToPurchase
 * @param {number} price
 */
const validateNoRemaining = (amountToPurchase, price) => {
  if (amountToPurchase % price) {
    throw new Error(messageFormatter.error.default(ERROR.lotto.noRemaining));
  }
};

export default validateNoRemaining;
