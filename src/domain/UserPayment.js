class UserPayment {
  constructor() {
    this.payment = null;
  }

  async userPayment() {
    const input = await Console.readLineAsync();
    this.payment = parseInt(input.trim(), 10);
    return this.payment;
  }
}

export default UserPayment;
