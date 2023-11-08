import { comma } from "./comma.js";

export const earningRate = (sum, price) =>
  +comma(((sum / price) * 100).toFixed(1));
