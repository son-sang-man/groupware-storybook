import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";var r,i,a,o;function s(){return(s=e((()=>{r=`_tabs_swbcn_1`,i=`_tabList_swbcn_5`,a=`_panel_swbcn_56`,o={tabs:r,tabList:i,panel:a}})))()}function c(e,t,n){return e===void 0||!Number.isInteger(e)||e<0||e>=t.length||t[e].disabled?n:e}function l({label:e,items:t,defaultTab:n,activeTab:r,defaultTabIndex:i,activeTabIndex:a,onChange:s,className:l}){let f=t.find(e=>!e.disabled)?.id,p=t.findIndex(e=>!e.disabled),m=i!==void 0||a!==void 0,h=n&&t.some(e=>e.id===n&&!e.disabled)?n:f,g=c(i,t,p),[_,v]=(0,u.useState)(h),[y,b]=(0,u.useState)(g),x=r??_,S=c(a,t,y),C=(0,u.useRef)([]);function w(e){let n=t.findIndex(t=>t.id===e);n<0||t[n].disabled||(m?(a===void 0&&b(n),s?.(n)):(r===void 0&&v(e),s?.(e)))}function T(e,n){let r=t.flatMap((e,t)=>e.disabled?[]:[t]),i=r.indexOf(n);if(i<0)return;let a=i;if(e.key===`ArrowRight`)a=(i+1)%r.length;else if(e.key===`ArrowLeft`)a=(i-1+r.length)%r.length;else if(e.key===`Home`)a=0;else if(e.key===`End`)a=r.length-1;else return;e.preventDefault();let o=r[a];w(t[o].id),C.current[o]?.focus()}return(0,d.jsxs)(`div`,{className:[o.tabs,l].filter(Boolean).join(` `),children:[(0,d.jsx)(`div`,{className:o.tabList,role:`tablist`,"aria-label":e,children:t.map((e,t)=>(0,d.jsx)(`button`,{ref:e=>{C.current[t]=e},id:`${e.id}-tab`,type:`button`,role:`tab`,"aria-selected":m?S===t:x===e.id,"aria-controls":`${e.id}-panel`,tabIndex:m?S===t?0:-1:x===e.id?0:-1,disabled:e.disabled,onClick:()=>w(e.id),onKeyDown:e=>T(e,t),children:e.label},e.id))}),t.map((e,t)=>(0,d.jsx)(`div`,{className:o.panel,id:`${e.id}-panel`,role:`tabpanel`,"aria-labelledby":`${e.id}-tab`,hidden:m?S!==t:x!==e.id,children:e.content},e.id))]})}var u,d;function f(){return(f=e((()=>{u=t(),s(),d=n(),l.__docgenInfo={description:``,methods:[],displayName:`Tabs`}})))()}var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{f(),p=n(),{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,h={title:`공통/Tabs`,component:l,args:{label:`거래처 섹션`,items:[{id:`basic`,label:`기본 정보`,content:(0,p.jsx)(`p`,{children:`기본 정보를 확인합니다.`})},{id:`history`,label:`거래이력`,content:(0,p.jsx)(`p`,{children:`거래 이력을 확인합니다.`})},{id:`disabled`,label:`비활성`,content:(0,p.jsx)(`p`,{children:`표시되지 않는 패널입니다.`}),disabled:!0}],defaultTabIndex:0},parameters:{docs:{description:{component:`섹션 탭을 표시합니다. 새 사용법은 0-based index API를 사용하며, 기존 ID 기반 defaultTab/activeTab도 소비자 호환을 위해 유지합니다.`}}},argTypes:{label:{control:`text`,description:`tablist의 접근 가능한 이름입니다.`},items:{control:!1,description:`id·label·content·disabled를 가진 탭 목록입니다. ReactNode content는 코드 예제로 전달합니다.`},defaultTabIndex:{control:`number`,description:`uncontrolled 초기 선택 index입니다. 기본값은 첫 번째 enabled 탭입니다.`},activeTabIndex:{control:`number`,description:`controlled 현재 선택 index입니다.`},defaultTab:{control:!1,description:`기존 ID 기반 uncontrolled 호환 Props입니다.`},activeTab:{control:!1,description:`기존 ID 기반 controlled 호환 Props입니다.`},onChange:{control:!1,action:`탭 변경`},className:{control:!1}}},g={},_={args:{activeTabIndex:1},render:e=>{let[{activeTabIndex:t},n]=m();return(0,p.jsx)(l,{...e,activeTabIndex:t,onChange:t=>{e.onChange?.(t),n({activeTabIndex:t})}})}},v={args:{defaultTabIndex:0}},y={args:{defaultTabIndex:void 0,defaultTab:`history`},parameters:{docs:{description:{story:`기존 defaultTab ID 기반 소비자도 같은 선택·키보드·panel 동작을 유지합니다.`}}}},b=[`Default`,`Controlled`,`DisabledTab`,`LegacyIdCompatibility`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    activeTabIndex: 1
  },
  render: args => {
    const [{
      activeTabIndex
    }, updateArgs] = useArgs<typeof args>();
    const indexArgs = args as TabsIndexProps;
    return <Tabs {...indexArgs} activeTabIndex={activeTabIndex} onChange={index => {
      (args.onChange as ((value: number) => void) | undefined)?.(index);
      updateArgs({
        activeTabIndex: index
      });
    }} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultTabIndex: 0
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultTabIndex: undefined,
    defaultTab: 'history'
  },
  parameters: {
    docs: {
      description: {
        story: '기존 defaultTab ID 기반 소비자도 같은 선택·키보드·panel 동작을 유지합니다.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as Controlled,g as Default,v as DisabledTab,y as LegacyIdCompatibility,b as __namedExportsOrder,h as default};