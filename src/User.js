import Input from './utils/Input.js';

class User {
  #money = 0;

  async buy() {
    this.#money = await Input.getCost();

    return this.#money;
  }
}

export default User;
