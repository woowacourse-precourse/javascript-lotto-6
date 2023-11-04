import makeLottoToString from "../Lotto/makeLottoToString.js";

const collectLotto = (count) => {
  let lottoStorage = [];
  for (let i = 0; i < count; i++) {
    lottoStorage.push(makeLottoToString());
  }
  return lottoStorage;
};

export default collectLotto;
