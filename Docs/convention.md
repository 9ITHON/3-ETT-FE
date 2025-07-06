### ⭐NOTE를 읽어 봐주세요!

> [!NOTE]
> 아래에 명시한 내용들은 모두 초기 세팅을 진행한 FE 노기훈의 제안입니다.
>
> 컨벤션과 스타일은 함께 잡아가는 것이기 때문에 원하시는 것을 추가하거나 의견 주시면 감사하겠습니다.

<br></br>

# Commit Convention

https://www.conventionalcommits.org/en/v1.0.0/#summary

이곳의 컨벤션을 따를까 합니다.

### 기본 형식

```
<타입>[선택적 범위]: <변경 사항 요약>

[선택적 본문]

[선택적 바닥글]

```

### 타입

```
feat	    새로운 기능 추가
fix	        버그 수정
docs	    문서 수정
style	    코드 포맷, 세미콜론 누락 등 스타일 변경 (기능 변경 없음)
refactor	리팩터링 (기능 변화 없음, 버그 수정 아님)
perf	    성능 향상
test	    테스트 코드 추가/수정
chore	    빌드 설정 수정, 패키지 추가 등 기타 잡일
```

### 예시

```
feat: 회원가입 기능 추가

fix(login): 카카오 로그인 시 오류 해결

docs(readme): 사용법 섹션 추가

refactor(user): 유저 클래스 구조 개선

chore: ESLint 설정 파일 수정

```

<br></br>

# Coding Convention

https://ui.toast.com/fe-guide/ko_CODING-CONVENTION

개인적으로 공부할때, 자주 참고받는 NHN의 FE Guide에서 제공하는 코딩 컨벤션입니다.

eslint처럼 cli를 통해서 강제성을 주입하는 툴도 있겠지만, 어느정도의 자유도를 가진 상태에서 코딩 컨벤션을 지키는 연습을 하는것도 크게 도움이 된다고 생각합니다.

또한 오래동안 Toast UI를 운영해온 NHN의 꼼꼼하고 한글로 된 문서를 통해서 쉽게 코딩 컨벤션을 잡을 수 있다는 장점이있습니다.

위의 가이드에서 제공하는 코딩 컨벤션을 한번 살펴보고 의견주시면 감사하겠습니다!

<br></br>

# Branch Convention

https://conventional-branch.github.io/

해당 링크의 컨벤션이 협업을 위한 브랜치 전략으로 괜찮아 보입니다.

### 기본 포맷

```
<type>/<short-description>
```

### 예시:

```
feat/add-login
fix/crash-on-launch
docs/update-readme
```

### 지원하는 타입 목록

| 타입       | 의미                                    |
| ---------- | --------------------------------------- |
| `feat`     | 새로운 기능 추가                        |
| `fix`      | 버그 수정                               |
| `chore`    | 빌드 설정, 의존성 추가 등 기타 변경     |
| `docs`     | 문서 수정                               |
| `refactor` | 리팩터링 (기능 변화 없음)               |
| `style`    | 포맷, 스타일 변경                       |
| `test`     | 테스트 추가 또는 수정                   |
| `ci`       | CI 설정 변경                            |
| `perf`     | 성능 개선                               |
| `revert`   | 이전 커밋 되돌리기                      |
| `wip`      | 작업 중 (Work in Progress, 임시 브랜치) |

---

### 브랜치 이름 예시

| 작업 내용               | 브랜치 이름                 |
| ----------------------- | --------------------------- |
| 로그인 기능 추가        | `feat/login`                |
| 앱 시작 시 크래시 수정  | `fix/crash-on-startup`      |
| README 업데이트         | `docs/update-readme`        |
| 버튼 컴포넌트 리팩터링  | `refactor/button-component` |
| 새로운 테스트 코드 추가 | `test/add-user-test`        |
| CI 파이프라인 수정      | `ci/update-github-actions`  |

---

## 목적

- 브랜치 리스트를 보았을 때 **의도가 명확하게 드러나도록**
- 코드 리뷰/PR 시 작업 내용을 쉽게 파악
- 커밋, PR, 브랜치가 **일관성 있는 구조**로 관리됨
