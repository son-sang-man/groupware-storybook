import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";var n;function r(){return(r=e((()=>{n=`/*\r
 * 경영지원 포털 디자인 토큰 원본\r
 * 제품/preview 런타임에는 아직 연결하지 않는다.\r
 * React/Storybook 반영은 프런트엔드 검토와 별도 구현을 거친다.\r
 */\r
\r
:root {\r
  /* Typography */\r
  --font-family-base: "Pretendard", "Noto Sans KR", "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif;\r
  --font-size-page-title: 27px;\r
  --font-size-section-title: 17px;\r
  --font-size-body: 14px;\r
  --font-size-label: 12px;\r
  --font-size-supporting: 12px;\r
  --font-weight-page-title: 700;\r
  --font-weight-section-title: 650;\r
  --font-weight-body: 400;\r
  --font-weight-label: 500;\r
  --font-weight-supporting: 400;\r
  --line-height-page-title: 1.2;\r
  --line-height-section-title: 1.35;\r
  --line-height-body: 1.55;\r
  --line-height-label: 1.45;\r
  --line-height-supporting: 1.55;\r
  --letter-spacing-page-title: -0.03em;\r
\r
  /* Neutral and brand colors */\r
  --color-text-primary: #172033;\r
  --color-text-secondary: #667085;\r
  --color-text-disabled: #98a2b3;\r
  --color-border-default: #d9dee8;\r
  --color-border-control: #c7cfdd;\r
  --color-border-subtle: #edf0f4;\r
  --color-surface: #ffffff;\r
  --color-surface-subtle: #f9fafb;\r
  --color-canvas: #f4f6f9;\r
  --color-navigation: #151a26;\r
  --color-primary: #3157d5;\r
  --color-primary-hover: #2548bd;\r
  --color-primary-active: #1f3d9a;\r
  --color-primary-soft: #eef2ff;\r
\r
  /* Interactive semantic states; status badges remain non-interactive. */\r
  --color-control-hover-border: #9ca8bf;\r
  --color-control-hover-surface: var(--color-surface-subtle);\r
  --color-control-active-border: var(--color-primary);\r
  --color-control-active-surface: #dde6ff;\r
  --color-control-disabled-border: #e3e7ee;\r
  --color-control-disabled-surface: #f3f5f8;\r
  --color-control-focus-surface: rgba(49, 87, 213, 0.12);\r
  --color-scrollbar-thumb: #c7cfdd;\r
  --color-scrollbar-thumb-hover: #aeb8c8;\r
  --color-danger-hover: #9f1f16;\r
  --color-danger-active: #851a12;\r
\r
  /* Feedback colors */\r
  --color-success-text: #126b49;\r
  --color-success-soft: #eaf7f0;\r
  --color-warning-text: #7b5d1f;\r
  --color-warning-soft: #fff9e9;\r
  --color-danger-text: #b42318;\r
  --color-danger-soft: #fff0ee;\r
  --color-info-text: #244a7a;\r
  --color-info-soft: #edf5ff;\r
\r
  /* Spacing */\r
  --space-1: 4px;\r
  --space-2: 8px;\r
  --space-3: 12px;\r
  --space-4: 16px;\r
  --space-5: 20px;\r
  --space-6: 24px;\r
  --space-8: 32px;\r
  --space-10: 40px;\r
  --space-12: 48px;\r
\r
  /* Borders, radii and shadows */\r
  --border-width-default: 1px;\r
  --radius-control: 7px;\r
  --radius-surface: 10px;\r
  --radius-overlay: 12px;\r
  --radius-pill: 999px;\r
  --shadow-surface: 0 1px 2px rgba(18, 25, 38, 0.03);\r
  --shadow-floating: 0 8px 24px rgba(26, 35, 52, 0.08);\r
  --shadow-overlay: 0 20px 54px rgba(15, 23, 42, 0.24);\r
\r
  /* Controls and focus */\r
  --control-height-medium: 38px;\r
  --focus-ring-width: 2px;\r
  --focus-ring-offset: 2px;\r
  --focus-ring-color: var(--color-primary);\r
\r
  /* PC-only layout policy */\r
  --layout-min-width: 1920px;\r
\r
  /* Current source compatibility aliases */\r
  --ink: var(--color-text-primary);\r
  --muted: var(--color-text-secondary);\r
  --line: var(--color-border-default);\r
  --surface: var(--color-surface);\r
  --canvas: var(--color-canvas);\r
  --nav: var(--color-navigation);\r
  --primary: var(--color-primary);\r
  --primary-hover: var(--color-primary-hover);\r
  --primary-soft: var(--color-primary-soft);\r
  --red: var(--color-danger-text);\r
  --red-soft: var(--color-danger-soft);\r
  --radius: var(--radius-surface);\r
  --shadow: var(--shadow-floating);\r
}\r
`})))()}var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{i=`_scroll_1awdb_1`,a=`_table_1awdb_5`,o=`_caption_1awdb_31`,s=`_swatch_1awdb_38`,c=`_space_1awdb_46`,l=`_surface_1awdb_52`,u=`_samples_1awdb_61`,d={scroll:i,table:a,caption:o,swatch:s,space:c,surface:l,samples:u}})))()}function p(e){return e.startsWith(`--color-`)?`color`:/^--(font-|line-height-|letter-spacing-)/.test(e)?`typography`:e.startsWith(`--space-`)?`spacing`:/^--(border-|radius-|shadow-)/.test(e)?`shape`:/^--(control-|focus-|layout-)/.test(e)?`interaction`:`alias`}function m(e,t){let n=e.slice(2);if(v[n])return v[n];if(n.startsWith(`space-`))return`요소 간격·내부 여백의 공통 단계`;for(let[e,t]of Object.entries({"page-title":`페이지 제목`,"section-title":`섹션 제목`,body:`본문`,label:`메타 라벨`,supporting:`보조 설명`}))if(n.endsWith(e)){if(n.startsWith(`font-size-`))return`${t} 글자 크기`;if(n.startsWith(`font-weight-`))return`${t} 글자 굵기`;if(n.startsWith(`line-height-`))return`${t} 행간 배율`;if(n.startsWith(`letter-spacing-`))return`${t} 자간`}return`기존 코드 호환 이름 → ${t}. 신규 작성은 의미가 드러나는 원본 이름을 우선 사용`}function h({category:e}){return(0,_.jsx)(`div`,{className:d.scroll,children:(0,_.jsxs)(`table`,{className:d.table,children:[(0,_.jsx)(`caption`,{className:d.caption,children:`디자인 원본에 선언된 토큰 이름·값·용도`}),(0,_.jsx)(`thead`,{children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{scope:`col`,children:`Token`}),(0,_.jsx)(`th`,{scope:`col`,children:`정의값`}),(0,_.jsx)(`th`,{scope:`col`,children:`용도`}),(0,_.jsx)(`th`,{scope:`col`,children:`미리보기`})]})}),(0,_.jsx)(`tbody`,{children:y.filter(t=>t.category===e).map(t=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{scope:`row`,children:(0,_.jsx)(`code`,{children:t.name})}),(0,_.jsx)(`td`,{children:(0,_.jsx)(`code`,{children:t.value})}),(0,_.jsx)(`td`,{children:m(t.name,t.value)}),(0,_.jsx)(`td`,{children:e===`color`?(0,_.jsx)(`span`,{className:d.swatch,style:{background:`var(${t.name})`},"aria-label":t.name+` 색상`}):e===`spacing`?(0,_.jsx)(`span`,{className:d.space,style:{width:`var(${t.name})`},"aria-label":t.value+` 간격`}):t.name.startsWith(`--shadow-`)?(0,_.jsx)(`span`,{className:d.surface,style:{boxShadow:`var(${t.name})`},children:`면`}):t.name.startsWith(`--radius-`)?(0,_.jsx)(`span`,{className:d.surface,style:{borderRadius:`var(${t.name})`},children:`면`}):`—`})]},t.name))})]})})}function g(){return(0,_.jsx)(`div`,{className:d.samples,children:[`page-title`,`section-title`,`body`,`label`,`supporting`].map(e=>(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`code`,{children:e}),(0,_.jsx)(`p`,{style:{fontFamily:`var(--font-family-base)`,fontSize:`var(--font-size-${e})`,fontWeight:`var(--font-weight-${e})`,lineHeight:`var(--line-height-${e})`,letterSpacing:e===`page-title`?`var(--letter-spacing-page-title)`:`normal`},children:`가나다 한글 예시 · ABC 0123`})]},e))})}var _,v,y;function b(){return(b=e((()=>{r(),f(),_=t(),v={"color-text-primary":`제목·본문·입력값`,"color-text-secondary":`설명·보조 정보`,"color-text-disabled":`비활성 글자`,"color-border-default":`일반 표면과 구분선`,"color-border-control":`입력 컨트롤 테두리`,"color-border-subtle":`약한 구분선`,"color-surface":`기본 표면`,"color-surface-subtle":`보조 표면`,"color-canvas":`화면 배경`,"color-navigation":`내비게이션 배경`,"color-primary":`대표 행동`,"color-primary-hover":`대표 행동 Hover`,"color-primary-active":`대표 행동 Active`,"color-primary-soft":`대표 색의 연한 배경`,"color-control-hover-border":`컨트롤 Hover 테두리`,"color-control-hover-surface":`컨트롤 Hover 배경`,"color-control-active-border":`컨트롤 Active 테두리`,"color-control-active-surface":`컨트롤 Active 배경`,"color-control-disabled-border":`비활성 테두리`,"color-control-disabled-surface":`비활성 배경`,"color-control-focus-surface":`입력 Focus 강조 배경`,"color-scrollbar-thumb":`스크롤 thumb`,"color-scrollbar-thumb-hover":`스크롤 thumb Hover`,"color-danger-hover":`위험 행동 Hover`,"color-danger-active":`위험 행동 Active`,"color-success-text":`성공 글자`,"color-success-soft":`성공 배경`,"color-warning-text":`주의 글자`,"color-warning-soft":`주의 배경`,"color-danger-text":`오류·위험 글자`,"color-danger-soft":`오류·위험 배경`,"color-info-text":`안내 글자`,"color-info-soft":`안내 배경`,"font-family-base":`기본 글꼴과 로드 실패 시 대체 글꼴 순서`,"border-width-default":`기본 테두리 두께`,"radius-control":`입력·버튼 모서리`,"radius-surface":`패널·카드 모서리`,"radius-overlay":`Overlay 모서리`,"radius-pill":`배지의 둥근 모서리`,"shadow-surface":`일반 표면 그림자`,"shadow-floating":`떠 있는 메뉴 그림자`,"shadow-overlay":`Modal·Confirm 그림자`,"control-height-medium":`중간 크기 컨트롤 기준 높이. 각 컴포넌트의 확정 높이는 해당 가이드를 함께 참조`,"focus-ring-width":`키보드 초점 링 두께`,"focus-ring-offset":`초점 링과 요소 사이 거리`,"focus-ring-color":`초점 링 색상`,"layout-min-width":`업무 화면의 PC 최소 너비 기준. Storybook 문서·개별 컴포넌트 폭을 강제하지 않음`},y=Array.from(n.matchAll(/^\s*(--[\w-]+)\s*:\s*(.+?);/gm),e=>({name:e[1],value:e[2],category:p(e[1])})),h.__docgenInfo={description:``,methods:[],displayName:`TokenTable`,props:{category:{required:!0,tsType:{name:`union`,raw:`'color' | 'typography' | 'spacing' | 'shape' | 'interaction' | 'alias'`,elements:[{name:`literal`,value:`'color'`},{name:`literal`,value:`'typography'`},{name:`literal`,value:`'spacing'`},{name:`literal`,value:`'shape'`},{name:`literal`,value:`'interaction'`},{name:`literal`,value:`'alias'`}]},description:``}}},g.__docgenInfo={description:``,methods:[],displayName:`TypographySamples`}})))()}export{g as n,b as r,h as t};