- 구현 기능 목록

1. 로또 구입 금액 입력

- 문구 출력(구입금액을 입력해주세요.)
- price(구입금액)가 숫자인지, 1000원단위인지 유효성검사
- 검사에 통과하지 못하면 [ERROR]를 throw하고 출력함

2. 입력받은 가격에 따라 로또 티켓 생성(buyLottos)
   ㄱ.price(구입금액)을 받고 numOfLottos(로또 티켓 장 수)계산
   ㄴ.numOfLottos(로또 티켓 장 수)만큼 generateNumber(로또 번호 생성)
   generatedNumber() 함수 - 로또 번호 생성에 MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6); 사용 - sort함수를 이용해 오름차순으로 정리 - new Lotto를 통해 객체를 생성하고 push함수를 이용해 lottos 배열을 만듦 - str을 선언후 배열을 string으로 만듦 - MissionUtils.Console.print(str);으로 출력

3. 당첨번호(직접 입력하는 번호) 입력 받음(this.answer)
   ㄱ.answer(당첨번호) 를 MissionUtils.Console.readLineAsync를 이용하여 입력 받음
   -split과 map(Number)를 사용하여 숫자와 컴마를 이용하여 입력

4. 보너스 번호 입력 받음(BonusInput())
   ㄱ. 보너스 번호를 MissionUtils.Console.readLineAsync를 이용하여 입력 받음
   ㄴ. 입력받은 보너스 숫자의 유효성 검사(숫자가 아닐경우 [ERROR]를 throw하고 출력함)

5. 당첨번호(answer)와 생성한 번호(this.#numbers) 비교 (Lotto.js에서 answerCount(answer)함수)

- App.js에서의 answer(당첨번호)와 Lotto.js에서의 this.#numbers를 비교하여 count를 올림(for - of 문과 includes 활용)
- count는 일치하는 번호의 개수를 의미함

6. 보너스 번호(bonus)와 생성한 번호(this.#numbers) 비교 (Lotto.js에서 bonusMatch(bonus)함수)

- App.js에서의 bonus(보너스 번호)와 Lotto.js에서의 this.#numbers를 비교하여 true를 리턴(includes 활용)
- true를 리턴하는경우 calResult함수에서 ticket.bonusMatch(this.bonus)가 true가 되면서
  5개 일치, 보너스 볼 일치 하는 경우의 개수가 카운트 됨

7. 당첨 결과 실행(calResult)

- count개수(당첨번호와 입력받은 번호를 비교하여 같은 숫자의 개수)에 따라 결과 계산

8. 당첨 결과 발표 실행(printResults)

- 앞서 나온 당첨 결과(calResults)에 따라 당첨 결과를 출력
  (MissionUtils.Console.print를 사용)

9. 수익률 결과 발표 실행(calProfitRate)

- 수익률 계산을 한 이후, 소수점 두번째 자리에서 반올림
- MissionUtils.Console.print를 활용하여 출력
