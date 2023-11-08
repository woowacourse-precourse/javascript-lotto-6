import OutputView from './views/OutputView';

class Seller {
  getAmount(money) {
    const amount = money % 1000;
    OutputView.printAmount(amount, this.makeLotto);
  }

  makeLotto() {
    this.getMoney(1);
  }
}

export default Seller;
