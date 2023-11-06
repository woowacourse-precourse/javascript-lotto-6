import { getRandomNum } from "./Computer";
import { inputPrice } from "../InputPrice";

export function createNumbers(inputPrice) {
    return Array.from({ length: inputPrice }, () => getRandomNum());
}
