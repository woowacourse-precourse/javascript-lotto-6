import GameManage from './mvc/controller/parent/game_manage';

class App {
  async play() {
    const GAME_MANAGE = new GameManage();
    await GAME_MANAGE.gameManage();
  }
}

export default App;
