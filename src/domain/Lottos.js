import Lotto from './Lotto';
import { GameResult } from './GameResult';

export class Lottos {
  #lottos = [];
  constructor(lottonumers) {
    lottonumers.map((lottonumber) => {
      this.#lottos.push(new Lotto(lottonumber));
    });
  }

  join_ConvertedString = () => {
    let OutputBuilder = '';
    this.#lottos.map((lotto) => {
      OutputBuilder += ''.concat('[', lotto.convert_toString(), ']', '\n');
    });

    return OutputBuilder;
  };

  getRanking = (winninglotto) => {
    const gameresult = new GameResult();

    this.#lottos.map((lotto) => {
      const rank = winninglotto.CompareByone(lotto);
      gameresult.setResult(rank);
    });
    const totalPrize = gameresult.calPrize();
    const totalResult = gameresult.getResult();
    return [totalPrize, totalResult];
  };
}
