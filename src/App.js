import Vendor from './Vendor.js';

class App {
  async play() {
    const vendor = new Vendor();
    await vendor.isssueTickets();
  }
}
const app = new App();
app.play();
export default App;
