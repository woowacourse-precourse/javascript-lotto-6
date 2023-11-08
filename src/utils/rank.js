import { RANGE, BONUS, MIN_MATCHING } from "../constant/NUMBER.js";

export const ranking = () => RANGE.SIZE + BONUS.SIZE - MIN_MATCHING + 1;
