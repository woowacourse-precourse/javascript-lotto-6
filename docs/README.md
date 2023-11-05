# 📘 Docs

## 입/출력 요구사항 🐱‍🐉

### 입력 

- [x] : 구입금액을 입력받는다.
  - [x] : 공백이면 에러를 출력한다.
  - [x] : 문자이면 에러를 출력한다.
  - [x] : 숫자지만 1000으로 나누어 떨어지지 않으면 에러를 출력한다.
```bash
구입금액을 입력해 주세요.
```

- [x] : 당첨번호를 입력받는다.
  - [x] : 공백이면 에러를 출력한다.
  - [x] : 로또번호에 공백이 있으면 에러를 출력한다.
  - [x] : 로또번호에 문자가 있으면 에러를 출력한다.
  - [x] : 로또번호가 6개 아니면 에러를 출력한다.
  - [x] : 로또번호가 1~45숫자가 아니면 에러를 출력한다.
  - [x] : 로또번호가 중복된 값이 있으면 에러를 출력한다.
```bash
당첨 번호를 입력해 주세요.
```

- [x] : 보너스 번호를 입력받는다.
  - [x] : 공백이면 에러를 출력한다.
  - [x] : 문자를 입력하면 에러를 출력한다.
  - [x] : 당첨번호와 중복된 값이면 에러를 출력한다.
  - [x] : 1~45 숫자가 아니면 에러를 출력한다.
```bash
보너스 번호를 입력해 주세요.
```

### 출력

- [x] : 로또를 몇 개 구매했는지 알려주는 메시지를 출력한다.
- [x] : 로또를 구매한 갯수만큼 로또 번호를 출력한다.
  - [x] : 로또 번호는 오름차순으로 정렬 후 출력한다.
- [x] : 당첨통계를 출력한다.
  - [x] : 수익률은 소수점 둘째 자리에서 반올림한다.

## Error Handling 🚀
- [x] : 에러 메시지는 [ERROR]로 시작해야 한다.
- [x] : 에러 메시지 출력 후 해당 부분을 다시 입력 받는다.

## 클래스 설계
### Server(spring)
#### Annotation/@controller (컨트롤러 싱글턴)
@controller는 하나의 인스턴스를 보장받아야 한다.

- [x] : UserController => @Service에서 사용자 객체를 생성하는 createUser를 실행시키는 함수를 구현한다.
- [x] : winningLottoController => 사용자로부터 입력받은 로또 당첨 번호를 처리하는 과정을 서비스 레이어에 위임한다. 그리고 받은 결과를 리턴하는 역할을 한다.
- [x] : BonusController => 사용자로부터 입력받은 보너스 번호를 처리하는 과정을 서비스 레이어에 위임한다. 그리고 받은 결과를 리턴하는 역할을 한다.
- [x] : compareLottoController => 사용자가 입력한 로또번호와 당첨번호를 비교하는 과정을 서비스 레이어에 위임한다. 그리고 받은 결과를 리턴하는 역할을 한다.

#### Annotation/@service (비즈니스 로직)
- [x] : createUser => 사용자의 객체를 생성하는 함수를 구현한다.
  - [x] : 사용자가 입력한 돈을 private field로 은닉화 하여 저장한다.
  - [x] : 사용자가 입력한 돈만큼 로또번호를 생성하여 private field로 은닉화 하여 저장한다.
- [x] : generateLottoNumber => 랜덤로또넘버를 구하는 함수를 구현한다.
- [x] : insertBonusLotto => @Repository에서 DB에 보너스 로또 번호를 저장하는 SQL문을 실행하는 함수를 호출한다.
- [x] : insertWinningLotto => @Repository에서 DB에 로또 당첨 번호를 저장하는 SQL문을 실행하는 함수를 호출한다.
- [x] : compareLotto => 사용자의 로또 번호, 당첨번호를 비교하여 맞춘 갯수, 수익률을 계산하는 비즈니스 로직을 작성한다.

#### Annotation/@Repository (레포지토리 로직)
- [x] : insertSqlBonusLotto => DB에 BonusLotto번호를 저장하는 로직을 작성한다.
- [x] : insertSqlWinningLotto => DB에 당첨번호를 저장하는 로직을 작성한다.
- [x] : selectSqlBonusLotto => DB에 보너스 번호를 가져오는 로직을 작성한다.
- [x] : selectSqlwinningLotto => DB에 당첨 번호를 가져오는 로직을 작성한다.

#### VO
- [x] : Lotto => 로또 넘버를 담당하는 데이터 객체로서 유효성 검사 후 데이터를 생성한다.
- [x] : User => 유저 객체를 담당하는 데이터 객체로서 사용자가 입력한 금액 유효성 검사 후 데이터를 생성한다.
- [x] : Bonus => 보너스 넘버를 담당하는 데이터 객체로서 사용자가 입력한 유혀성 검사 후 데이터를 생성한다.

#### MVCpattern
- [x] : DispatcherServlet => 사용자로부터 HttpRequest받은 데이터로 MVC처리과정을 담당한다.
- [x] : HandlerMapping => 클라이언트 요청에 해당하는 컨트롤러를 찾고 해당 컨트롤러 정보를 다시 DispatcherServlet에게 응답한다.
- [x] : handlerAdapter => HandlerAdapter에게 Handler 메서드 호출 책임을 넘겨받고 컨트롤러의 requestMapping함수를 실행한다. 그리고 결과를 리턴한다.
- [x] : ViewResolver => ViewResolver는 View 정보에 해당하는 View를 찾아서 DispatcherServlet에게 반환합니다.
  - 여기서는 항상 LottoPosView를 반환한다고 가정한다.
- [x] : LottoPosView => Client(LottoPos)에게 반환할 HttpResponse를 생성한다.

#### DB
- [x] : database => 여기서는 DB를 Map자료구조를 사용한다.

#### Object:
- [x] : HttpResponse : Client에 전달할 데이터 구조를 작성한다.
  - [x] : Status : Client에서 요청한 로직이 정상적으로 실행되었는지 알려준다. 
      - [x] : 비정상으로 종료되었을 경우 Error를 저장한다.
      - [x] : 정상으로 종료되었을 경우 success를 저장한다.
  - [x] : responsedata : Client에 응답할 데이터를 저장한다.

### Client
#### LottoPos
- [x] : LottoPos기 로부터 구입금액을 입력받을 수 있어야 한다.
- [x] : LottoPos기 로부터 구입금액만큼 생성한 로또번호를 출력하여 보여줄 수 있어야 한다.
- [x] : LottoPos기 로부터 당첨로또번호를 입력받을 수 있어야 한다.
- [x] : LottoPos기 로부터 보너스로또번호를 입력받을 수 있어야 한다.
- [x] : LottoPos기 로부터 로또결과와 수익률을 출력하여 보여줄 수 있어야 한다.
- [x] : 서버로부터 응답 status가 Error일 경우 재 입력받을 수 있어야 한다.



