import LOTTO from "../constants/lotto.js";

const mapCountToResultKey = {
  [LOTTO.length]: LOTTO.rankKey.firstPlace,
  [LOTTO.length - 1]: Object.freeze({
    [true]: LOTTO.rankKey.secondPlace,
    [false]: LOTTO.rankKey.thirdPlace,
  }),
  [LOTTO.length - 2]: LOTTO.rankKey.fourthPlace,
  [LOTTO.length - 3]: LOTTO.rankKey.fifthPlace,
};

for (let i = 0; i < LOTTO.length - 3; i += 1) {
  mapCountToResultKey[i] = LOTTO.rankKey.blank;
}

Object.freeze(mapCountToResultKey);

export default mapCountToResultKey;
