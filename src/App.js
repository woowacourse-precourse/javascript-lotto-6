import Ticket from "./ticket";

class App {
  async play() {
    const ticket = new Ticket();
    ticket.buy();
  }
}

export default App;
