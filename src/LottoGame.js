import Player from './Player';

class LottoGame {
  async run() {
    await this.inputPrice();
  }

  async inputPrice() {
    const price = await new Player().readPrice();
  }
}

export default LottoGame;
