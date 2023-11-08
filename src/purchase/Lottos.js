import { MissionUtils } from '@woowacourse/mission-utils';
import SETTINGS from '../constants/Settings.js';
import Utils from '../utils/Utils.js';
import Lotto from './Lotto.js';

export default class Lottos {
  #lottos;

  constructor(amount) {
    this.#lottos = [];
    this.#addLottos(amount);
  }

  #addLottos(amount) {
    for (let counter = 0; counter < amount; counter++) {
      this.#lottos.push(
        new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(
          SETTINGS.minimumLottoRange,
          SETTINGS.maximumLottoRange,
          SETTINGS.lottoLength))
      );
    }
  }

  get() {
    const lottoNumbers = [];
    this.#lottos.forEach((lotto) => {
      lottoNumbers.push(lotto.get());
    });

    return lottoNumbers;
  }

  print() {
    const lottoNumbers = [];
    this.#lottos.forEach((lotto) => {
      lottoNumbers.push(Utils.numberArrayToString(lotto.get()));
    });

    return lottoNumbers;
  }
}