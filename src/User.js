import Input from './utils/Input.js';
import Message from './utils/Message.js';

class User {
  // eslint-disable-next-line class-methods-use-this
  async buy() {
    const cost = await Input.getCost();
    const count = cost / 1000;

    Message.youBought(count);
  }
}

export default User;
