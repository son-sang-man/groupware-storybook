import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t}from"./iframe-Bz-iIV9m.js";import{t as n}from"./react-dom-D_l2gaZK.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./Button-C2EYyPfz.js";import{t as a}from"./button-BX09zuIK.js";import{c as o,o as s}from"./FormFields-DvofSV9t.js";function c(){return(c=e((()=>{o()})))()}var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l=`_layer_gc3yd_1`,u=`_backdrop_gc3yd_7`,d=`_drawer_gc3yd_23`,f=`_header_gc3yd_37`,p=`_footer_gc3yd_37`,m=`_eyebrow_gc3yd_55`,h=`_close_gc3yd_76`,g=`_body_gc3yd_98`,_={layer:l,backdrop:u,drawer:d,header:f,footer:p,eyebrow:m,close:h,body:g}})))()}function y(e){return Array.from(e.querySelectorAll(`button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`))}function b({open:e,title:t,eyebrow:n,description:r,children:i,footer:a,onClose:o,closeOnBackdrop:s=!0,closeLabel:c=`닫기`,initialFocusRef:l,width:u=720,className:d}){let f=(0,S.useRef)(null),p=(0,S.useRef)(null),m=(0,S.useRef)(null),h=(0,S.useId)(),g=(0,S.useId)();if((0,S.useEffect)(()=>{if(!e)return;m.current=document.activeElement instanceof HTMLElement?document.activeElement:null,(l?.current??p.current)?.focus();let t=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=t,m.current?.focus()}},[l,e]),!e)return null;function v(e){if(e.key===`Escape`){e.preventDefault(),o();return}if(e.key!==`Tab`||!f.current)return;let t=y(f.current);if(!t.length)return;let n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n.focus())}return(0,x.createPortal)((0,C.jsxs)(`div`,{className:_.layer,children:[(0,C.jsx)(`button`,{className:_.backdrop,type:`button`,"aria-label":`${t} 닫기`,onClick:s?o:void 0,tabIndex:s?0:-1}),(0,C.jsxs)(`aside`,{ref:f,className:[_.drawer,d].filter(Boolean).join(` `),style:{"--drawer-width":typeof u==`number`?`${u}px`:u},role:`dialog`,"aria-modal":`true`,"aria-labelledby":h,"aria-describedby":r?g:void 0,onKeyDown:v,children:[(0,C.jsxs)(`header`,{className:_.header,children:[(0,C.jsxs)(`div`,{children:[n&&(0,C.jsx)(`p`,{className:_.eyebrow,children:n}),(0,C.jsx)(`h2`,{id:h,children:t}),r&&(0,C.jsx)(`p`,{id:g,children:r})]}),(0,C.jsx)(`button`,{ref:p,className:_.close,type:`button`,"aria-label":c,onClick:o,children:`×`})]}),(0,C.jsx)(`div`,{className:_.body,children:i}),a&&(0,C.jsx)(`footer`,{className:_.footer,children:a})]})]}),document.body)}var x,S,C;function w(){return(w=e((()=>{x=n(),S=t(),v(),C=r()})))()}var T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),c(),w(),T=r(),{useArgs:E}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`공통/Drawer`,component:b,args:{open:!1,title:`거래처 등록`,description:`필수 항목을 입력하고 저장해 주세요.`,closeOnBackdrop:!0,onClose:D()},parameters:{docs:{description:{component:`페이지 맥락을 유지한 채 편집 본문을 여는 우측 drawer입니다. eyebrow는 선택형 헤더 설명이며, children/footer는 slot입니다.`}}},argTypes:{open:{control:`boolean`,description:`drawer 표시 상태입니다. 기본값은 false입니다.`},eyebrow:{control:`text`,description:`선택형 헤더 상단 설명입니다.`},title:{control:`text`,description:`drawer 제목입니다.`},description:{control:`text`,description:`헤더 보조 설명입니다.`},children:{control:!1,description:`ReactNode 본문 slot입니다. 코드 예제로 전달합니다.`},footer:{control:!1,description:`ReactNode 하단 action slot입니다. 코드 예제로 전달합니다.`},onClose:{control:!1,action:`Drawer 닫기`,description:`닫기 버튼·Escape·허용된 backdrop에서 호출되는 callback입니다.`},closeOnBackdrop:{control:`boolean`,description:`true일 때 backdrop 클릭으로 닫습니다. 기본값은 true입니다.`},closeLabel:{control:`text`,description:`닫기 버튼의 접근 가능한 이름입니다.`},width:{control:`text`,description:`drawer 너비입니다. 숫자는 px로 해석합니다.`},initialFocusRef:{control:!1},className:{control:!1}}},k={render:e=>{let[{open:t},n]=E(),r=()=>{e.onClose?.(),n({open:!1})};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(i,{variant:`primary`,onClick:()=>n({open:!0}),children:`Drawer 열기`}),(0,T.jsxs)(b,{...e,open:t,onClose:r,footer:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(i,{onClick:r,children:`취소`}),(0,T.jsx)(i,{variant:`primary`,onClick:r,children:`저장`})]}),children:[(0,T.jsx)(s,{name:`name`,label:`거래처명`,required:!0,placeholder:`거래처명을 입력하세요`}),(0,T.jsx)(s,{name:`contact`,label:`담당자`,placeholder:`담당자명을 입력하세요`})]})]})}},A={args:{eyebrow:void 0,open:!0},parameters:{docs:{description:{story:`eyebrow를 생략한 헤더 상태입니다. 선택형 prop이므로 기본 본문 구조를 강제하지 않습니다.`}}},render:e=>{let[{open:t},n]=E(),r=()=>{e.onClose?.(),n({open:!1})};return(0,T.jsx)(b,{...e,open:t,onClose:r,footer:(0,T.jsx)(i,{onClick:r,children:`닫기`}),children:(0,T.jsx)(`p`,{children:`Drawer 본문 slot입니다.`})})}},j=[`Default`,`WithoutEyebrow`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}})))()}M();export{k as Default,A as WithoutEyebrow,j as __namedExportsOrder,O as default};