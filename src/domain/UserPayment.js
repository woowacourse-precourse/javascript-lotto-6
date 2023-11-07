import { ERROR, PRINT } from "../const/Messages.js";

class UserPayment {
  constructor() {
    this.payment = null;
  }

  getUserPayment() {
    return this.payment;
  }

  setUserPayment(input) {
    const pay = parseInt(input.trim(), 10);
    this.#validate(pay);
    this.payment = pay;
  }

  #validate(pay) {
    if (pay % 1000 !== 0) {
      throw new Error(ERROR.NO_THOUSAND_UNIT);
    }
  }

  numberOfTickets() {
    if (this.payment === null) {
      return 0;
    }
    const ticketCounts = this.payment / 1000;
    const printTicketCounts = `${ticketCounts}${PRINT.HOW_MANY_BUY}`;
    return printTicketCounts;
  }
}

export default UserPayment;
