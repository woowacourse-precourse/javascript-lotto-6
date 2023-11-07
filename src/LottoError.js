const LOTTERROR = {
 regex: {
  number: /^\d+$/,
    lottoNumber: /^\d{1,2}$/,
  },

  errormessage: {
    amount: "구입 금액은 숫자만 가능합니다.",
    unit: "금액은 1000원 단위로 입력 가능합니다.",
    anotherNumber: "로또 번호는 1 ~ 45 사이의 숫자여야 합니다.",
    anotherLength: "로또는 6개의 숫자를 선택해야합니다.",
    duplication: "중복된 로또 번호가 존재합니다.",
  }
};

Object.freeze(LOTTERROR.regex);
Object.freeze(LOTTERROR.errormessage);

export default LOTTERROR;