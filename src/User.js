import Input from './utils/Input.js';

class User {
  constructor() {
    this.cost = 0;
  }

  async buy() {
    this.cost = await Input.getCost();
  }
}

export default User;
