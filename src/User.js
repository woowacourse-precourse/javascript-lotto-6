import Input from './utils/Input.js';

class User {
  // eslint-disable-next-line class-methods-use-this
  async buy() {
    const cost = await Input.getCost();
    const count = cost / 1000;

    return count;
  }
}

export default User;
