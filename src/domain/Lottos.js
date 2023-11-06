import { Lotto } from './Lotto';

export class Lottos {
  #lottos = [];
  constructor(lottonumers) {
    lottonumers.map((lottonumber) => {
      this.#lottos.push(new Lotto(lottonumber));
    });
  }

  join_ConvertedString() {
    let OutputBuilder = '';
    this.#lottos.map((lotto) => {
      OutputBuilder += ''.concat('[', lotto.convert_toString(), ']', '\n');
    });

    return OutputBuilder;
  }
}
