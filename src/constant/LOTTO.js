const LOTTO = {
  SIZE: 6,
  START_NUMBER: 1,
  END_NUMBER: 45,
};

const ERROR = {
  SIZE: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE: "[ERROR] 로또 번호는 중복되면 안 됩니다",
};

Object.freeze(LOTTO);
Object.freeze(ERROR);

export default { ...LOTTO, ERROR };
