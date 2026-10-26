import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./react-dom-BXgx-GBU.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./Button-C2EYyPfz.js";import{t as a}from"./button-BX09zuIK.js";import{n as o,t as s}from"./input-text-field-hlKaI4uV.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{c=`_layer_gc3yd_1`,l=`_backdrop_gc3yd_7`,u=`_drawer_gc3yd_23`,d=`_header_gc3yd_37`,f=`_footer_gc3yd_37`,p=`_eyebrow_gc3yd_55`,m=`_close_gc3yd_76`,h=`_body_gc3yd_98`,g={layer:c,backdrop:l,drawer:u,header:d,footer:f,eyebrow:p,close:m,body:h}})))()}function v(e){return Array.from(e.querySelectorAll(`button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`))}function y({open:e,title:t,eyebrow:n,description:r,children:i,footer:a,onClose:o,closeOnBackdrop:s=!0,closeLabel:c=`닫기`,initialFocusRef:l,width:u=720,className:d}){let f=(0,x.useRef)(null),p=(0,x.useRef)(null),m=(0,x.useRef)(null),h=(0,x.useId)(),_=(0,x.useId)();if((0,x.useEffect)(()=>{if(!e)return;m.current=document.activeElement instanceof HTMLElement?document.activeElement:null,(l?.current??p.current)?.focus();let t=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=t,m.current?.focus()}},[l,e]),!e)return null;function y(e){if(e.key===`Escape`){e.preventDefault(),o();return}if(e.key!==`Tab`||!f.current)return;let t=v(f.current);if(!t.length)return;let n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n.focus())}return(0,b.createPortal)((0,S.jsxs)(`div`,{className:g.layer,children:[(0,S.jsx)(`button`,{className:g.backdrop,type:`button`,"aria-label":`${t} 닫기`,onClick:s?o:void 0,tabIndex:s?0:-1}),(0,S.jsxs)(`aside`,{ref:f,className:[g.drawer,d].filter(Boolean).join(` `),style:{"--drawer-width":typeof u==`number`?`${u}px`:u},role:`dialog`,"aria-modal":`true`,"aria-labelledby":h,"aria-describedby":r?_:void 0,onKeyDown:y,children:[(0,S.jsxs)(`header`,{className:g.header,children:[(0,S.jsxs)(`div`,{children:[n&&(0,S.jsx)(`p`,{className:g.eyebrow,children:n}),(0,S.jsx)(`h2`,{id:h,children:t}),r&&(0,S.jsx)(`p`,{id:_,children:r})]}),(0,S.jsx)(`button`,{ref:p,className:g.close,type:`button`,"aria-label":c,onClick:o,children:`×`})]}),(0,S.jsx)(`div`,{className:g.body,children:i}),a&&(0,S.jsx)(`footer`,{className:g.footer,children:a})]})]}),document.body)}var b,x,S;function C(){return(C=e((()=>{b=n(),x=t(),_(),S=r()})))()}var w,T,E,D,O,k,A;function j(){return(j=e((()=>{a(),s(),C(),w=r(),{useArgs:T}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:E}=__STORYBOOK_MODULE_TEST__,D={title:`공통/Drawer`,component:y,args:{open:!1,title:`거래처 등록`,description:`필수 항목을 입력하고 저장해 주세요.`,closeOnBackdrop:!0,onClose:E()},parameters:{docs:{description:{component:`페이지 맥락을 유지한 채 편집 본문을 여는 우측 drawer입니다. eyebrow는 선택형 헤더 설명이며, children/footer는 slot입니다.`}}},argTypes:{open:{control:`boolean`,description:`필수 controlled 표시 상태입니다. false는 Story 초기값이며 컴포넌트 기본값이 아닙니다.`},eyebrow:{control:`text`,description:`선택형 헤더 상단 설명입니다.`},title:{control:`text`,description:`drawer 제목입니다.`},description:{control:`text`,description:`헤더 보조 설명입니다.`},children:{control:!1,description:`ReactNode 본문 slot입니다. 코드 예제로 전달합니다.`},footer:{control:!1,description:`ReactNode 하단 action slot입니다. 코드 예제로 전달합니다.`},onClose:{control:!1,action:`Drawer 닫기`,description:`닫기 버튼·Escape·허용된 backdrop에서 호출되는 callback입니다.`},closeOnBackdrop:{control:`boolean`,description:`true일 때 backdrop 클릭으로 닫습니다. 기본값은 true입니다.`},closeLabel:{control:`text`,description:`닫기 버튼의 접근 가능한 이름입니다.`},width:{control:`text`,description:`drawer 너비입니다. 숫자는 px로 해석합니다.`},initialFocusRef:{control:!1},className:{control:!1}}},O={render:e=>{let[{open:t},n]=T(),r=()=>{e.onClose?.(),n({open:!1})};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i,{variant:`primary`,onClick:()=>n({open:!0}),children:`Drawer 열기`}),(0,w.jsxs)(y,{...e,open:t,onClose:r,footer:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i,{onClick:r,children:`취소`}),(0,w.jsx)(i,{variant:`primary`,onClick:r,children:`저장`})]}),children:[(0,w.jsx)(o,{name:`name`,label:`거래처명`,required:!0,placeholder:`거래처명을 입력하세요`}),(0,w.jsx)(o,{name:`contact`,label:`담당자`,placeholder:`담당자명을 입력하세요`})]})]})}},k={args:{eyebrow:void 0,open:!0},parameters:{docs:{description:{story:`eyebrow를 생략한 헤더 상태입니다. 선택형 prop이므로 기본 본문 구조를 강제하지 않습니다.`}}},render:e=>{let[{open:t},n]=T(),r=()=>{e.onClose?.(),n({open:!1})};return(0,w.jsx)(y,{...e,open:t,onClose:r,footer:(0,w.jsx)(i,{onClick:r,children:`닫기`}),children:(0,w.jsx)(`p`,{children:`Drawer 본문 slot입니다.`})})}},A=[`Default`,`WithoutEyebrow`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    return <><Button variant="primary" onClick={() => updateArgs({
        open: true
      })}>Drawer 열기</Button><Drawer {...args} open={open} onClose={close} footer={<><Button onClick={close}>취소</Button><Button variant="primary" onClick={close}>저장</Button></>}><TextField name="name" label="거래처명" required placeholder="거래처명을 입력하세요" /><TextField name="contact" label="담당자" placeholder="담당자명을 입력하세요" /></Drawer></>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: undefined,
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'eyebrow를 생략한 헤더 상태입니다. 선택형 prop이므로 기본 본문 구조를 강제하지 않습니다.'
      }
    }
  },
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
    return <Drawer {...args} open={open} onClose={close} footer={<Button onClick={close}>닫기</Button>}><p>Drawer 본문 slot입니다.</p></Drawer>;
  }
}`,...k.parameters?.docs?.source}}}})))()}j();export{O as Default,k as WithoutEyebrow,A as __namedExportsOrder,D as default};