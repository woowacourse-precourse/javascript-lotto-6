import { ERROR_MSG } from "../constants/ErrorMessage.js";

//로또 1장의 가격은 1,000원이다
export const validatePurchaseFormat = (price) => {
  if (price % 1000 !== 0) {
    throw new Error(ERROR_MSG.price);
  }
};

// // results length 검사
// export const validateResultsLength = (numbers) => {
//   if (numbers.length !== 6) {
//     throw new Error(ERROR_MSG.length);
//   }
// };

// export const validateInputResults = (number, array) => {
//  // results 숫자 검사
//   if (isNaN(number)) {
//     throw new Error(ERROR_MSG.input);
//   }

//   // results 숫자 검사
//   if (number < 1 || number > 45) {
//     throw new Error(ERROR_MSG.input);
//   }
//   // resuls 중복 검사
//   if (array.filter((n) => n === number).length > 1) {
//     throw new Error(ERROR_MSG.overlap);
//   }
// };
