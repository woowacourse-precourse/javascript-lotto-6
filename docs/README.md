#  ⚙️ 설계
## 🎯 Client, Server구조와 Spring MVC 패턴 설계 배경
3주차까지 프리코스를 진행하면서 MVC패턴이 사용하는 것이 답안지처럼 느껴졌습니다. `MVC패턴이라는 틀 안에서 미션을 수행하는 것이 아니라 MVC패턴이라는 틀을 넘어 이번 미션을 수행`하기로 했습니다.
구조는 크게 `클라이언트`와 `서버`로 나누어서 생각했습니다. 우리는 클라이언트인 로또 포스기를 통해 로또를 구입할 수 있으며, 로또 당첨 번호, 로또 보너스 번호를 입력할 수 있습니다. 그뿐만 아니라 로또 포스기에서 `API`개념을 도입하여 서버로부터 `요청`에 대한 `응답`을 받을 수 있고 응답의 대한 결과로 로또 포스기에 보여질 수 있습니다.

이 때 서버는 `spring MVC 패턴`을 사용합니다. 이전 미션까지는 Model, Controller, View라는 범주 안에서 생각했지만, 이번 미션은 MVC 동작과정을 미션에 녹여내려고 했습니다. 물론 저의 부족함과 미션의 한계로 많은 부분을 저의 입 맛대로 대체하고 건너띄고, 수정했습니다.

## 🎯 패턴 구조 도식화
![image](https://github.com/qjatjs123123/MyStory/assets/74814641/7f1b5f8a-418c-41fe-ab2c-9e4b08091b52)

## 🎯 한계점
```
1. 미션 특성상 express 서버를 열고 클라이언트와 통신 할 수 없으므로 클라이언트(LottoPos)에서 서버 객체를 생성하여 통신하는 방법으로 대체한다.
2. 서버와 API를 통해 통신을 한다고 가정하고 호출 URL은 /src/Util/API.js에 정리한다.
3. 클라이언트와 서버와 통신 결과로 200,404... 가 아닌 error, success로 구분한다.
4. 클라이언트와 서버와의 통신 프로토콜로는 HTTP를 사용하고 HTTP 메시지 구조는 HttpRequest(요청), HttpResponse(응답)으로 직접 정의한다.
5. DB는 자바스크립트에 자료구조 Map으로 대체한다.
6. 실제 SQL문 중 select, insert를 자료구조 map에서 set, get으로 대체한다.
7. Spring에서 어노테이션으로 스프링 빈으로 등록하는 과정은 폴더구조로 대체한다.
8. 본 미션에서 @Controller는 하나의 인스턴스만 가질 수 있도록 싱글턴으로 구현한다.
9. @Repository, @Service는 객체화하지 않고 함수화하여 하나의 인스턴스만 가질수 있도록 대체한다.
10. @Controller는 핵심로직을 @service로 위임하고 @service로 부터 받은 데이터를 가지고 ModelAndView객체를 생성하여 리턴한다.
11. @service는 핵심로직을 수행하고 @controller에게 핵심로직을 수행한 데이터를 반환한다.
12. @Repository는 SQL문 대신 set, get을 통해 DB(여기선 map자료구조)에 데이터를 넣거나 뺀다.
13. spring에서 Controller에서 다양한 ResquestMapping을 가질 수 있지만 본 프로그램에서는 하나의 컨트롤러에 하나의 RequestMapping을 가지도록 한다.
14. spring에서 ViewResolver에서 반환되는 view객체는 많지만 본 프로그램에서는 하나의 view객체 LottoPosView를 반환한다고 가정한다.
```

## 🎯 참고 블로그
- [Spring MVC 동작 방식과 구성요소] (https://kchs94.tistory.com/201)
- [스프링 MVC - 구조이해] (https://catsbi.oopy.io/f52511f3-1455-4a01-b8b7-f10875895d5b)
- [HTTP 통신을 알아보자] (https://www.mobiinside.co.kr/2022/09/08/http/)

# 📌 테스트 설계
## 도메인 단위
```
UI(Console.readLineAsync, Console.print) 로직에 대한 단위 테스트는 제외한다.
```
1. 사용자(User)가 로또포스기(LottoPos)에서 로또(Lotto)를 구입한다.
2. 사용자(User)가 당첨번호(winningLotto)를 입력한다.
3. 사용자(User)가 보너스번호(BonusLotto)를 입력한다.
4. 사용자는 로또서버(Server)에서 반환받은 로또 결과(LottoResult)를 로또포스기(LottoPos)에서 볼 수 있다.

**Domain** => `사용자(User)`, `로또(Lotto)`, `당첨번호(winningLotto)`, `보너스번호(Bonuslotto)`, `로또 결과(LottoResult)` <br>
**UI** => `로또포스기(LottoPos)` (제외한다.)

### 사용자(User) 테스트
- [x] : UserController에서 User객체를 생성한다.
- [x] : User 객체의 구입 금액은 전달받은 금액이여야 한다.
  - [x] : 공백이면 에러를 출력하는지 테스트해야 한다.
  - [x] : 문자이면 에러를 출력하는지 테스트해야 한다.
  - [x] : 1000으로 나누어 떨어지지 않으면 에러를 출력하는지 테스트해야한다.
  - [x] : 구입금액은 로또가격보다 커야 한다.
- [x] : User 객체에서 구입한 로또 갯수는 구입금액 / 로또가격 이여야 한다.
- [x] : User 객체에서 사용자가 구입한 로또의 길이는 구입한 로또 갯수여야 한다.
- [x] : User 객체에서 구입한 로또번호는 1이상 45이하여야 한다.
- [x] : User 객체에서 구입한 로또번호는 유니크해야 한다.
<br>

### 로또(Lotto) 테스트
- [x] : 로또의 길이는 6이아니면 에러가 발생해야 한다.
- [x] : 로또가 모두 숫자가 아니면 에러가 발생해야 한다.
- [x] : 로또번호는 1이상 45이하여야 한다.
- [x] : 로또번호는 유니크해야 한다.



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



