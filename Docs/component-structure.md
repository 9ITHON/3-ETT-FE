## 컴포넌트 디렉토리 구조 제안

```
src/
├── components/
│   ├── common/           # 재사용 가능한 공통 UI 컴포넌트 (Button, Modal 등)
│   │   ├── AppButton.tsx # 추후에는 Button, Text 이렇게 나눠서 관리해도 좋을것 같습니다.
│   │   └── AppText.tsx
│   ├── layout/           # 레이아웃 관련 컴포넌트 (Header, Footer, Screen 등)
│   │   └── Header.tsx
│   ├── feature/          # 특정 기능(도메인) 전용 UI 컴포넌트
│   │   └── TranslateCard.tsx
│   └── index.ts          # 컴포넌트 export 모듈화
```

## 폴더 구분 기준

| 폴더명                   | 설명                                         | 예시                                  |
| ------------------------ | -------------------------------------------- | ------------------------------------- |
| `common`                 | 여러 화면에서 사용하는 범용 UI 컴포넌트      | `AppButton`, `Loading`, `Divider`     |
| `layout`                 | 화면 전체 구조에 영향을 주는 요소            | `Header`, `ScreenWrapper`, `SafeArea` |
| `feature`                | 특정 기능(예: OCR, 번역, 저장)에만 쓰이는 UI | `MaskBlock`, `TranslateCard` 등       |
| `form`, `input` _(옵션)_ | Form 전용 컴포넌트                           | `TextField`, `Checkbox`, `RadioGroup` |
| `modal` _(옵션)_         | 다양한 Modal UI를 모아둔 공간                | `ConfirmModal`, `BottomSheetModal`    |

## 컴포넌트 index.ts로 모듈화

```ts
// src/components/index.ts
export { default as AppButton } from "./common/AppButton";
export { default as Header } from "./layout/Header";
```

그리고 이렇게 사용합니다.

```ts
import { AppButton, Header } from "@/components";
```
