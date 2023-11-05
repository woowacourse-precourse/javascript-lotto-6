class TicketMachine {
  #purchaseAmount = 0;

  #ticktes;

  constructor({ purchaseAmount, getTickets }) {
    this.#purchaseAmount = purchaseAmount;
    this.getTickets = getTickets;
    this.getNumberOfGame();
  }

  getNumberOfGame() {
    this.purchasedTicktesCount = Number(this.#purchaseAmount) / 1000;
    this.getTickets(this.purchasedTicktesCount);
  }
}

export default TicketMachine;
