import { ErrorMessage } from "./constants/Message";
export const checkIsNum = (money) => {
  if (isNaN(Number(money))) throw newError(ErrorMessage.WRONGTYPE);
  if (money % 1000 !== 0) throw newError(ErrorMessage.WRONGRANGE);
};
