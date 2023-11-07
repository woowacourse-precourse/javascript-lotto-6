# Union Architecture

![어니언 아키텍처](<assets/onion architecture.png>)

> 애플리케이션의 기능과 목적에 따라 애플리케이션의 코드를 계층화하는 접근 방식

`어니언 아키텍처`는 **중앙 도메인 모델 주위에 동심원 또는 레이어를 구성하는 것**을 수반하며, **각 레이어는 고유한 작업을 담당하며 최상위 계층에서 최하위 계층으로 내려 가는 방향이 마치 의존하는 방향과 같고, 외부에 어떤 레이어가 있는지 알지 못한다는 특징**을 가지고 있습니다.

또한, **도메인 내 비즈니스 로직을 다른 의존성으로부터 격리**(직접 의존하는 것이 아닌, 인자로 부터 값을 받는 형태)시켜, **도메인 로직의 재사용성과 테스트 용이성을 높이며, 변경에 유연하게 대응**한다는 장점이 있습니다.

<details>
  <summary>각 계층 분석</summary>

- **입/출력 계층 (cli)**
  - 주로, 입력 값을 인터렉션 계층에 넘겨주거나 인터렉션 계층에서 받은 데이터를 화면에 보여주기 위해 사용되는 계층
- **유효성 검사 계층 (validations)**
  - 특정 값에 대해 설정 된 규칙들을 통해 유효성 검증을 진행하는 계층
- **에러 핸들러 및 커스텀 에러 계층 (error)**
  - 커스텀 에러 객체 및 예외 처리를 담당하는 계층
- **인터렉션 계층 (interactions)**
  - 바깥 세상에 영향을 주거나 받는 액션(외부 영향, 호출 시점과 횟수에 영향을 받는 함수)
  - `MVC 패턴`에서 `controller` 영역과 유사하며, 해당 계층에선 실질적 앱의 기능을 구성하기 위해 여러 레이어와 상호작용하는 역할을 수행
- **도메인 계층(domain)**
  - 비즈니스 규칙을 정의하는 계산(외부 영향, 호출 시점과 횟수에 받지 않는 순수 함수)
  - 주로 인터렉션 계층에서 기능을 수행하기 위한 데이터를 처리하기 위해 사용되는 계층
  - 주로, 입력 값을 받아 도메인 계층에서 처리 후 다시 인터렉션 계층으로 반환하는 형태로 사용
- **유틸 계층(utils)**
  - 재 사용을 위한 자바스크립트 유틸 함수
- **JavaScript**
  - 자바스크립트 내 내장된 메서드 및 변수

</details>

이번 미션에선 `어니언 아키텍처`를 통해 **필요한 책임 들을 계층으로 나누어 전체적인 애플리케이션을 구성**했습니다.

또한, 해당 아키텍처를 통해 **도메인 계층이 변경 가능성이 가장 낮은 계층에 의존**함으로써, **재 사용 가능하며 부수 효과가 발생하지 않도록 설계를 진행**했습니다.

## Interaction Layer Flow

### LottoGame

![interaction layer](<assets/LottoGame(Interaction Layer).png>)

## Domain Layer Flow

### LottoPurchase

![Alt text](<assets/LottoPurchase(Domain Layer).png>)

### LottoNumberMatching

![Alt text](<assets/LottoNumberMatching(Domain Layer).png>)

### WinningInfoGeneration

![Alt text](<assets/WinningInfoGeneration(Domain Layer).png>)

### RateOfReturnCalculation

![Alt text](<assets/RateOfReturnCalculation(Domain Layer).png>)
