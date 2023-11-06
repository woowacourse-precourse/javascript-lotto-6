import { Lotto } from './Lotto';

export class Lottos {
  #lottos;
  constructor(lottonumers) {
    this.#lottos = lottonumers.map((lottonumber) => {
      new Lotto(lottonumber);
    });
  }
}
