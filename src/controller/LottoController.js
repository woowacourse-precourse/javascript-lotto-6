import LottoService from '../service/LottoService.js';
import { readLottoSeedMoney } from '../view/InputView.js';

export default class LottoController {
  #lottoService;

  async run() {
    const lottoSeedMoney = await readLottoSeedMoney();
    this.#lottoService = new LottoService(lottoSeedMoney);
    this.#test();
  }

  #test() {
    console.log(this.#lottoService.getLottoes());
  }
}
