import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t}from"./iframe-Bz-iIV9m.js";import{t as n}from"./react-dom-D_l2gaZK.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./Button-C2EYyPfz.js";import{t as a}from"./button-BX09zuIK.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{o=`_layer_1nf7o_1`,s=`_backdrop_1nf7o_10`,c=`_dialog_1nf7o_27`,l=`_header_1nf7o_40`,u=`_footer_1nf7o_41`,d=`_close_1nf7o_71`,f=`_body_1nf7o_93`,p={layer:o,backdrop:s,dialog:c,header:l,footer:u,close:d,body:f}})))()}function h(e){return Array.from(e.querySelectorAll(`button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`))}function g({open:e,title:t,description:n,children:r,footer:i,onClose:a,closeOnBackdrop:o=!0,closeLabel:s=`닫기`,initialFocusRef:c,className:l}){let u=(0,v.useRef)(null),d=(0,v.useRef)(null),f=(0,v.useRef)(null),m=(0,v.useId)(),g=(0,v.useId)();if((0,v.useEffect)(()=>{if(!e)return;f.current=document.activeElement instanceof HTMLElement?document.activeElement:null,(c?.current??d.current)?.focus();let t=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=t,f.current?.focus()}},[c,e]),!e)return null;function b(e){if(e.key===`Escape`){e.preventDefault(),a();return}if(e.key!==`Tab`||!u.current)return;let t=h(u.current);if(!t.length)return;let n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n.focus())}return(0,_.createPortal)((0,y.jsxs)(`div`,{className:p.layer,children:[(0,y.jsx)(`button`,{className:p.backdrop,type:`button`,"aria-label":`${t} 닫기`,onClick:o?a:void 0,tabIndex:o?0:-1}),(0,y.jsxs)(`div`,{ref:u,className:[p.dialog,l].filter(Boolean).join(` `),role:`dialog`,"aria-modal":`true`,"aria-labelledby":m,"aria-describedby":n?g:void 0,onKeyDown:b,children:[(0,y.jsxs)(`header`,{className:p.header,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h2`,{id:m,children:t}),n&&(0,y.jsx)(`p`,{id:g,children:n})]}),(0,y.jsx)(`button`,{ref:d,className:p.close,type:`button`,"aria-label":s,onClick:a,children:`×`})]}),r&&(0,y.jsx)(`div`,{className:p.body,children:r}),i&&(0,y.jsx)(`footer`,{className:p.footer,children:i})]})]}),document.body)}var _,v,y;function b(){return(b=e((()=>{_=n(),v=t(),m(),y=r()})))()}var x,S,C,w,T,E,D;function O(){return(O=e((()=>{a(),b(),x=r(),{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`공통/Modal`,component:g,args:{open:!1,title:`작성 중인 내용을 버릴까요?`,description:`저장하지 않은 변경 내용은 사라집니다.`,closeOnBackdrop:!0,onClose:C()},parameters:{docs:{description:{component:"현재 맥락 위에서 짧은 확인을 받는 dialog입니다. `children`은 본문, `footer`는 하단 action slot이며, 실제 표시 상태는 open이 소유합니다."}}},argTypes:{open:{control:`boolean`,description:`dialog 표시 상태입니다. 기본값은 false입니다.`},title:{control:`text`,description:`dialog 제목입니다.`},description:{control:`text`,description:`제목 아래 보조 설명입니다.`},children:{control:!1,description:`ReactNode 본문 slot입니다. 코드 예제로 전달합니다.`},footer:{control:!1,description:`ReactNode 하단 action slot입니다. 코드 예제로 전달합니다.`},onClose:{control:!1,action:`Modal 닫기`,description:`닫기 버튼·Escape·허용된 backdrop에서 호출되는 callback입니다.`},closeOnBackdrop:{control:`boolean`,description:`true일 때 backdrop 클릭으로 닫습니다. 기본값은 true입니다.`},closeLabel:{control:`text`,description:`닫기 버튼의 접근 가능한 이름입니다.`},initialFocusRef:{control:!1},className:{control:!1}}},T={render:e=>{let[{open:t},n]=S(),r=()=>{e.onClose?.(),n({open:!1})};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{variant:`secondary`,onClick:()=>n({open:!0}),children:`Modal 열기`}),(0,x.jsx)(g,{...e,open:t,onClose:r,footer:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{onClick:r,children:`계속 작성`}),(0,x.jsx)(i,{variant:`danger`,onClick:r,children:`버리고 이동`})]}),children:(0,x.jsx)(`p`,{children:`Modal은 현재 맥락 위에서 짧은 확인을 받습니다.`})})]})}},E={args:{closeOnBackdrop:!1,open:!0},parameters:{docs:{description:{story:`closeOnBackdrop=false에서는 backdrop 클릭만 닫히지 않고 명시적 닫기·Escape는 유지됩니다.`}}},render:e=>{let[{open:t},n]=S(),r=()=>{e.onClose?.(),n({open:!1})};return(0,x.jsx)(g,{...e,open:t,onClose:r,footer:(0,x.jsx)(i,{onClick:r,children:`닫기`}),children:(0,x.jsx)(`p`,{children:`backdrop은 닫기 동작을 실행하지 않습니다.`})})}},D=[`Default`,`NoBackdropClose`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    return <><Button variant="secondary" onClick={() => updateArgs({
        open: true
      })}>Modal 열기</Button><Modal {...args} open={open} onClose={close} footer={<><Button onClick={close}>계속 작성</Button><Button variant="danger" onClick={close}>버리고 이동</Button></>}><p>Modal은 현재 맥락 위에서 짧은 확인을 받습니다.</p></Modal></>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnBackdrop: false,
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: 'closeOnBackdrop=false에서는 backdrop 클릭만 닫히지 않고 명시적 닫기·Escape는 유지됩니다.'
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
    return <Modal {...args} open={open} onClose={close} footer={<Button onClick={close}>닫기</Button>}><p>backdrop은 닫기 동작을 실행하지 않습니다.</p></Modal>;
  }
}`,...E.parameters?.docs?.source}}}})))()}O();export{T as Default,E as NoBackdropClose,D as __namedExportsOrder,w as default};