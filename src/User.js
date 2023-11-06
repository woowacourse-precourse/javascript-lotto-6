import Generator from './Generator';

class User {
  constructor(purchaseAmout) {
    this.purchaseAmout = purchaseAmout / 1000;
    this.userNumbers = Generator.randomNumbersGenerator(this.purchaseAmout);
  }
}

export default User;
