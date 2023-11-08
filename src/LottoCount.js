import { LOTTO_PRICE } from "./constant/LottoInfo.js";
import { printCount } from "./Print.js";

function LottoCount(amount) {
  const count = amount / LOTTO_PRICE;
  printCount(count);
  return count;
}
export default LottoCount;
