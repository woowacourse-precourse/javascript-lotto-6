import { ERROR_MESSAGE } from "../Constants.js";

export const validatePurchaseAmount = (input) => {
  //   if (input.includes(" ")) {
  //     console.log("1");
  //     throw new Error("메롱");
  //   }

  //   const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  //   if (specialCharacters.test(input)) {
  //     console.log("2");
  //     throw new Error("특수문자 에러");
  //   }

  if (Number(input) % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.NOT_DIVISIBLE_BY_1000);
  }
};

// export const validateLottoNumber = (input) => {
//   // 숫자와 ,제외한 다른 문자가 있을 때 (얼리 리턴)
//   // 중복값이 있을 때
//   const inputArr = input.split(",");
//   if (new Set(inputArr).size !== inputArr.length)
//     throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
//   // 번호가 6개가 아닐때
// };
