import makeLotto from "./makeLotto.js";

const collectLotto = (count) => {
  let lottoStorage = [];
  for (let i = 0; i < count; i++) {
    lottoStorage.push(makeLotto());
  }
  return lottoStorage;
};

export default collectLotto;
