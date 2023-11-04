import App from "../../src/App";
import LottoGame from "../../src/controller/LottoGame"

const getStartSpy = () => {
  const startSpy = jest.spyOn(LottoGame.prototype, 'start');
  return startSpy;
}

describe('로또 게임 컨트롤 클래스 테스트.', () => {
  test('play 메서드가 실행되면 start 메서드가 호출되어야합니다.', async () => {
    // given
    const startSpy = getStartSpy();

    // when
    const app = new App();
    await app.play();

    // then
    expect(startSpy).toHaveBeenCalled();
  });
});
