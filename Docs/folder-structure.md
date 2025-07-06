> [!NOTE]
> 고민끝에 밑과 같은 폴더 구조를 세팅해봤습니다.
>
> 자세한 파일들은 gpt에게 생성해달라고 해서, 내부의 파일보다는 전체적인 아키텍처 구조에 주목해주시면 감사하겠습니다.
>
> 더 자세한 설명은 폴더 구조 밑에서 설명하겠습니다.

# folder structure

```
/src
├── features/
│   ├── ocr/                  # 이미지 → 텍스트
│   │   ├── useOcr.ts
│   │   └── ocrUtils.ts
│   ├── masking/              # 마스킹 및 복원
│   │   ├── useMasking.ts
│   │   ├── maskText.ts
│   │   ├── unmaskText.ts
│   │   └── maskingRules.ts
│   ├── simplify/             # AI 쉬운말 변환
│   │   ├── useSimplify.ts
│   │   └── simplifyAPI.ts
│   ├── archive/              # 저장 및 기록
│   │   ├── useArchive.ts
│   │   └── archiveAPI.ts
│   └── share/                # 복사, 공유, 저장 share 또는 export 생각중입니다.
│       ├── useCopy.ts
│       ├── useShare.ts
│       └── useSave.ts
├── components/
│   ├── TranslateCard.tsx     # 결과 보여주는 카드
│   ├── BottomActionBar.tsx   # 복사/공유/저장 버튼
│   └── CameraPreview.tsx     # 카메라 UI
├── screens/
│   ├── HomeScreen.tsx
│   ├── ResultScreen.tsx
│   └── HistoryScreen.tsx
├── navigation/
│   ├── RootNavigator.tsx
│   └── types.ts
├── hooks/
│   ├── usePermissions.ts     # 카메라, 갤러리 권한
│   └── useToast.ts           # 토스트 메시지 공통 훅
├── api/
│   └── client.ts             # axios 등 API 인스턴스 설정
├── store/
│   ├── useAuthStore.ts       # 로그인 상태
│   ├── useHistoryStore.ts    # 번역 기록 저장
│   └── useAppStore.ts        # 글로벌 상태 (예: 로딩)
├── constants/
│   ├── colors.ts
│   ├── messages.ts           # 에러/안내 메시지 모음
│   └── routes.ts             # 네비게이션 라우트명
├── utils/
│   ├── formatDate.ts
│   ├── generateId.ts
│   └── validateText.ts
├── assets/
│   ├── images/
│   │   └── logo.png
│   └── fonts/
├── types/
│   ├── text.ts               # 번역, 마스킹 텍스트 타입
│   └── user.ts

```

## features/

먼저 features 폴더 입니다.

저희 프로젝트는 작은 규모의 서비스지만, 내부적인 동작들은 기능 단위로 구성이 되어있습니다.

이미지를 텍스트로 변환하는 ocr, 텍스트를 마스킹하고 마스킹을 해제시키는 masking, 쉬운말로 변환을 도와주는 simplify, 변환된 쉬운말을 저장하는 기능의 archive, 변환 이후의 action인 share(export)

위의 동작들은 하나의 엔티티 위에서 동작하기 때문에 feature라는 단위로 구분지어 폴더를 구성한는것이 좋겠다라는 판단을 해서 기능 단위(책임)을 수행하는 파일들로 구성하면 될것 같습니다.

## components/

보통의 리액트에서도 사용하는 컴포넌트가 해당 파일에 위치합니다.

현재 파일에는 서로 다른 카드나 버튼이 존재하지만, 공동 레이아웃이 추가되게 된다면 shared나 widget과 같은 폴더를 추가로 생성해도 괜찮겠다는 생각이 있습니다.

## screens/

리액트에서의 pages에 해당하는 폴더로 하나의 스크린, 저희 프로젝트에서는 온보딩+로그인, 홈, 아카이브 등 화면이 존재합니다.

현재 파일에는 HomeScreen처럼 접미사에 Screen을 붙였지만, 폴더에서 Screen이라는 기능이 있기 때문에 생략하는 편이 추후에 좋다고 생각합니다.

## navigation/

RN에서의 앱 내 화면 전환 구조를 정의하고 관리하는 역할을 합니다.

feature 내부에 해당하지 않는 이유로는 navigation은 도메인과 무관하게 메타 레벨의 책임을 수행함으로, 독립적인 레이어로 구성하는게 옳다는 판단을 했습니다.

## hooks/

feature에서 정의되지 않는 공통적으로 사용되는 커스텀 훅을 정의하는 역할을 수행합니다.

usePermission, useToast와 같이 전역적(공통)으로 사용될 훅이 존재합니다.

## api/

axios, cache 등과 같은 api와 관련된 설정들이 존재합니다.

## store/

전역으로 관리될 상태를 정의하는 공간으로 볼 수 있습니다.

## constans/

앱 내부에서 상수로 정의하여 사용할 수 있는 값들이 주로 위치합니다.

## utils/

앱 전역에서 사용되며 feature의 특정 도메인에 종속되지 않는 함수나 모듈이 위치합니다.

## assets/

이 폴더가 여기 있는게 맞는지는 고민입니다! expo로 rn프로젝트를 생성하면 assets가 src와 같은 레벨에 존재하는데 이걸 따르는게 맞다는 생각이 있습니다!

## type/

프로젝트에 사용되는 엔티티, 도메인, 디자인 시스템등 다양한 타입을 정의하는 폴더입니다.
