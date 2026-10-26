import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./Button-C2EYyPfz.js";import{t as i}from"./button-BX09zuIK.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a=`_toast_51hgu_1`,o=`_mark_51hgu_17`,s=`_content_51hgu_30`,c=`_close_51hgu_46`,l=`_info_51hgu_67`,u=`_success_51hgu_75`,d=`_warning_51hgu_83`,f=`_error_51hgu_91`,p={toast:a,mark:o,"mark-in":`_mark-in_51hgu_1`,content:s,close:c,info:l,success:u,warning:d,error:f}})))()}function h({open:e,title:t,description:n,tone:r=`success`,onClose:i,closeLabel:a=`알림 닫기`,durationMs:o,showCloseButton:s=!0}){return(0,g.useEffect)(()=>{if(!e||o===void 0||o<=0)return;let t=window.setTimeout(i,o);return()=>window.clearTimeout(t)},[o,i,e]),e?(0,_.jsxs)(`div`,{className:[p.toast,p[r]].join(` `),role:`status`,"aria-live":`polite`,children:[(0,_.jsx)(`span`,{className:p.mark,"aria-hidden":`true`,children:r===`success`?`✓`:r===`info`?`i`:`!`}),(0,_.jsxs)(`div`,{className:p.content,children:[(0,_.jsx)(`strong`,{children:t}),n&&(0,_.jsx)(`span`,{children:n})]}),s&&(0,_.jsx)(`button`,{className:p.close,type:`button`,"aria-label":a,onClick:i,children:`×`})]}):null}var g,_;function v(){return(v=e((()=>{g=t(),m(),_=n(),h.__docgenInfo={description:``,methods:[],displayName:`Toast`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:``},tone:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'success'`,computed:!1}},closeLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'알림 닫기'`,computed:!1}},durationMs:{required:!1,tsType:{name:`number`},description:``},showCloseButton:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})))()}var y,b,x,S,C,w,T;function E(){return(E=e((()=>{i(),v(),y=n(),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`공통/Toast`,component:h,args:{title:`저장 완료`,description:`화면에 변경 내용을 반영했습니다.`,open:!0,tone:`success`,showCloseButton:!0,onClose:x()},parameters:{docs:{description:{component:`짧은 완료·안내 메시지를 표시합니다. 표시 상태와 자동 닫힘은 소비자가 소유하며, durationMs를 생략하면 자동으로 닫히지 않습니다.`}}},argTypes:{open:{control:`boolean`,description:`Toast 표시 상태입니다.`},title:{control:`text`,description:`주요 메시지입니다.`},description:{control:!1,description:`ReactNode 보조 설명입니다. 코드 예제로 전달합니다.`},tone:{control:`select`,options:[`info`,`success`,`warning`,`error`],description:`상태 색상입니다. 기본값은 success입니다.`},onClose:{control:!1,action:`Toast 닫기`,description:`닫기 버튼 또는 durationMs 만료 시 호출됩니다.`},closeLabel:{control:`text`,description:`닫기 버튼 접근성 이름입니다.`},durationMs:{control:`number`,description:`양수일 때만 자동 닫힘을 활성화합니다. 기본값은 없음입니다.`},showCloseButton:{control:`boolean`,description:`닫기 버튼 표시 여부입니다. 기본값은 true입니다.`}}},C={render:e=>{let[{open:t},n]=b(),i=()=>{e.onClose?.(),n({open:!1})};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r,{onClick:()=>n({open:!0}),children:`Toast 보기`}),(0,y.jsx)(h,{...e,open:t,onClose:i})]})}},w={args:{showCloseButton:!1,open:!0},parameters:{docs:{description:{story:`showCloseButton=false에서는 닫기 button을 렌더하지 않습니다. durationMs와 open 상태는 독립적으로 동작합니다.`}}}},T=[`Default`,`WithoutCloseButton`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [{
      open
    }, updateArgs] = useArgs<typeof args>();
    const close = () => {
      args.onClose?.();
      updateArgs({
        open: false
      });
    };
    return <><Button onClick={() => updateArgs({
        open: true
      })}>Toast 보기</Button><Toast {...args} open={open} onClose={close} /></>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    showCloseButton: false,
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'showCloseButton=false에서는 닫기 button을 렌더하지 않습니다. durationMs와 open 상태는 독립적으로 동작합니다.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{C as Default,w as WithoutCloseButton,T as __namedExportsOrder,S as default};