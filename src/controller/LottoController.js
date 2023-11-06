/* eslint-disable lines-between-class-members */
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import PlayerLottoAmount from '../domain/PlayerLottoAmount';

class LottoController{
  #inputView;
  #outputView;
  #playerLottoAmount

  constructor(){
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#playerLottoAmount = new PlayerLottoAmount();
  }

  async play(){
    this.receivePlayerTotalMoney();
  }
  
  async receivePlayerTotalMoney(){
    const totalMoney = await this.#inputView.receiveTotalMoney();
    this.#playerLottoAmount.validate(totalMoney);
    this.#playerLottoAmount.setVariables(totalMoney);
  }

}

export default LottoController;