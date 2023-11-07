import Consumer from "./Consumer.js";
import User from "./User.js";

export default class Computer {
  purchaseAmount;

  constructor() {
    this.user = User.createUser();
  }

  static createComputer() {
    return new this();
  }

  async startLottoSimulation() {
    this.purchaseAmount = await this.user.promptPurchaseAmount();
    const consumer = Consumer.createConsumer(this.purchaseAmount);
  }
}
