import { comma } from "./comma.js";
import { DECIMAL_POINT, PERCENTAGE } from "../constant/NUMBER.js";

export const earningRate = (sum, price) =>
  +comma(((sum / price) * PERCENTAGE).toFixed(DECIMAL_POINT));
