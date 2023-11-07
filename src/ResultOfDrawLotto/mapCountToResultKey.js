import LOTTO from "../constants/lotto.js";

const mapCountToResultKey = {
  [LOTTO.length]: LOTTO.rank.firstPlace,
  [LOTTO.length - 1]: Object.freeze({
    [true]: LOTTO.rank.secondPlace,
    [false]: LOTTO.rank.thirdPlace,
  }),
  [LOTTO.length - 2]: LOTTO.rank.fourthPlace,
  [LOTTO.length - 3]: LOTTO.rank.fifthPlace,
};

for (let i = 0; i < LOTTO.length - 3; i += 1) {
  mapCountToResultKey[i] = LOTTO.rank.blank;
}

Object.freeze(mapCountToResultKey);

export default mapCountToResultKey;
