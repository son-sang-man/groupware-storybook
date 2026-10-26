import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t}from"./iframe-Bz-iIV9m.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r=`_wrapper_hy03z_1`,i=`_table_hy03z_23`,a=`_start_hy03z_58`,o=`_center_hy03z_62`,s=`_end_hy03z_66`,c=`_state_hy03z_70`,l=`_error_hy03z_76`,u=`_stateContent_hy03z_80`,d=`_stateIcon_hy03z_88`,f=`_stateIconEmpty_hy03z_99`,p=`_stateIconLoading_hy03z_122`,m=`_stateIconError_hy03z_130`,h=`_sortButton_hy03z_157`,g=`_sortIndicator_hy03z_177`,_={wrapper:r,table:i,start:a,center:o,end:s,state:c,error:l,stateContent:u,stateIcon:d,stateIconEmpty:f,stateIconLoading:p,"table-state-spin":`_table-state-spin_hy03z_1`,stateIconError:m,sortButton:h,sortIndicator:g}})))()}function y(e,t){return typeof e==`number`&&typeof t==`number`?e-t:String(e??``).localeCompare(String(t??``),`ko`,{numeric:!0,sensitivity:`base`})}function b({state:e}){let t=e===`empty`?_.stateIconEmpty:e===`loading`?_.stateIconLoading:_.stateIconError;return(0,C.jsx)(`span`,{className:[_.stateIcon,t].join(` `),"aria-hidden":`true`})}function x({records:e,columns:t,getRowKey:n,minWidth:r,className:i,wrapperClassName:a,state:o=e.length?`ready`:`empty`,stateMessage:s,sort:c,defaultSort:l=null,onSortChange:u,...d}){let f=c!==void 0,[p,m]=(0,S.useState)(l),h=f?c:p,g=s??(o===`loading`?`내용을 불러오는 중입니다.`:o===`error`?`목록을 불러오지 못했습니다.`:`등록된 항목이 없습니다.`),v=(0,S.useMemo)(()=>{if(o!==`ready`||!h)return e;let n=t.find(e=>e.key===h.key);return n?.sortable?e.map((e,t)=>({record:e,index:t})).sort((e,t)=>{let r=y(n.sortValue?.(e.record)??e.record[n.key],n.sortValue?.(t.record)??t.record[n.key]);return(h.direction===`asc`?r:-r)||e.index-t.index}).map(({record:e})=>e):e},[h,t,e,o]);function x(e){if(!e.sortable)return;let t=h?.key===e.key&&h.direction===`asc`?`desc`:`asc`,n={key:e.key,direction:t};f||m(n),u?.(n)}return(0,C.jsx)(`div`,{className:[_.wrapper,a].filter(Boolean).join(` `),children:(0,C.jsxs)(`table`,{...d,className:[_.table,i].filter(Boolean).join(` `),style:{...d.style,minWidth:r},"aria-busy":o===`loading`||void 0,children:[(0,C.jsx)(`colgroup`,{children:t.map(e=>(0,C.jsx)(`col`,{style:{width:e.width}},e.key))}),(0,C.jsx)(`thead`,{children:(0,C.jsx)(`tr`,{children:t.map(e=>{let t=!!e.sortable,n=h?.key===e.key?h.direction:void 0;return(0,C.jsx)(`th`,{className:_.center,scope:`col`,"aria-sort":t?n===`asc`?`ascending`:n===`desc`?`descending`:`none`:void 0,children:t?(0,C.jsxs)(`button`,{type:`button`,className:_.sortButton,onClick:()=>x(e),"aria-label":`${String(e.label)} 정렬`,children:[(0,C.jsx)(`span`,{children:e.label}),(0,C.jsx)(`span`,{className:_.sortIndicator,"data-direction":n??`none`,"aria-hidden":`true`})]}):e.label},e.key)})})}),(0,C.jsxs)(`tbody`,{"aria-live":o===`loading`||o===`error`?`polite`:void 0,children:[o===`ready`&&v.map(e=>(0,C.jsx)(`tr`,{children:t.map(t=>(0,C.jsx)(`td`,{className:_[t.align||`start`],children:t.render(e)},t.key))},n(e))),o!==`ready`&&(0,C.jsx)(`tr`,{children:(0,C.jsx)(`td`,{className:[_.state,o===`error`&&_.error].filter(Boolean).join(` `),colSpan:t.length,role:o===`error`?`alert`:`status`,children:(0,C.jsxs)(`span`,{className:_.stateContent,children:[(0,C.jsx)(b,{state:o}),(0,C.jsx)(`span`,{children:g})]})})})]})]})})}var S,C;function w(){return(w=e((()=>{S=t(),v(),C=n(),x.__docgenInfo={description:``,methods:[],displayName:`Table`,props:{records:{required:!0,tsType:{name:`unknown`},description:``},columns:{required:!0,tsType:{name:`unknown`},description:``},minWidth:{required:!1,tsType:{name:`CSSProperties['minWidth']`,raw:`CSSProperties['minWidth']`},description:``},wrapperClassName:{required:!1,tsType:{name:`string`},description:``},state:{required:!1,tsType:{name:`union`,raw:`'ready' | 'loading' | 'empty' | 'error'`,elements:[{name:`literal`,value:`'ready'`},{name:`literal`,value:`'loading'`},{name:`literal`,value:`'empty'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`records.length ? 'ready' : 'empty'`,computed:!1}},stateMessage:{required:!1,tsType:{name:`ReactNode`},description:``},sort:{required:!1,tsType:{name:`union`,raw:`TableSortState | null`,elements:[{name:`TableSortState`},{name:`null`}]},description:``},defaultSort:{required:!1,tsType:{name:`union`,raw:`TableSortState | null`,elements:[{name:`TableSortState`},{name:`null`}]},description:``,defaultValue:{value:`null`,computed:!1}}},composes:[`Omit`]}})))()}var T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{w(),T=n(),{useArgs:E}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:D}=__STORYBOOK_MODULE_TEST__,O=[{id:`ga-on`,name:`가온 시스템`,industry:`IT · 솔루션`,status:`사용`,amount:`12,000,000`},{id:`da-on`,name:`다온 솔루션`,industry:`광고 · 마케팅`,status:`검토중`,amount:`9,500,000`}],k=[{key:`name`,label:`거래처명`,render:e=>(0,T.jsx)(`strong`,{children:e.name})},{key:`industry`,label:`업종`,render:e=>e.industry},{key:`status`,label:`상태`,align:`center`,render:e=>e.status},{key:`amount`,label:`계약금액`,align:`end`,render:e=>e.amount}],A=[{key:`name`,label:`거래처명`,sortable:!0,sortValue:e=>e.name,render:e=>(0,T.jsx)(`strong`,{children:e.name})},{key:`industry`,label:`업종`,render:e=>e.industry},{key:`amount`,label:`계약금액`,align:`end`,sortable:!0,sortValue:e=>Number(e.amount.replaceAll(`,`,``)),render:e=>e.amount}],j={title:`공통/Table`,component:x,args:{records:O,columns:k,getRowKey:e=>e.id,minWidth:640,onSortChange:D()},parameters:{docs:{description:{component:`typed records와 columns로 구성하는 일반 표입니다. 정렬은 opt-in이며, 정렬 설정이 없으면 헤더는 비대화형입니다. 상태 행은 EmptyState 계열 아이콘과 메시지를 함께 표시합니다.`}}},argTypes:{records:{control:!1,description:`표에 표시할 typed record 목록입니다.`},columns:{control:!1,description:`key·label·width·align·render와 선택적 sortable/sortValue를 정의합니다.`},getRowKey:{control:!1,description:`각 행의 안정적인 key를 반환합니다.`},minWidth:{control:`number`,description:`표의 최소 너비입니다.`},wrapperClassName:{control:!1},state:{control:`select`,options:[`ready`,`loading`,`empty`,`error`],description:`미전달 시 records 유무로 ready/empty를 선택합니다.`},stateMessage:{control:`text`,description:`상태 행에 표시할 메시지입니다.`},sort:{control:!1,description:`controlled 정렬 상태입니다. 정렬을 사용하지 않으면 생략합니다.`},defaultSort:{control:`object`,description:`uncontrolled 정렬의 초기 상태입니다.`},onSortChange:{control:!1,action:`정렬 변경`}}},M={},N={args:{records:[],state:`empty`,stateMessage:`등록된 항목이 없습니다.`}},P={args:{records:[],state:`loading`}},F={args:{records:[],state:`error`,stateMessage:`목록을 불러오지 못했습니다.`}},I={args:{columns:A,sort:null},render:e=>{let[{sort:t},n]=E();return(0,T.jsx)(x,{...e,sort:t,onSortChange:t=>{e.onSortChange?.(t),n({sort:t})}})}},L={render:e=>{let t=e=>{window.location.hash=`company/${e}`},n=[{key:`name`,label:`거래처명`,render:e=>(0,T.jsx)(`a`,{href:`#company/${e.id}`,onClick:n=>{n.preventDefault(),t(e.id)},children:e.name})},{key:`status`,label:`상태`,align:`center`,render:e=>e.status}];return(0,T.jsx)(x,{...e,columns:n})},parameters:{docs:{description:{story:`링크 셀은 일반 render 계약으로 표현합니다. 실제 라우팅·서버 이동은 소비자가 소유합니다.`}}}},R=[`Default`,`Empty`,`Loading`,`Error`,`Sortable`,`LinkCells`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    records: [],
    state: 'empty',
    stateMessage: '등록된 항목이 없습니다.'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    records: [],
    state: 'loading'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    records: [],
    state: 'error',
    stateMessage: '목록을 불러오지 못했습니다.'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sortableColumns,
    sort: null
  },
  render: args => {
    const [{
      sort
    }, updateArgs] = useArgs<typeof args>();
    return <Table {...args} sort={sort} onSortChange={next => {
      args.onSortChange?.(next);
      updateArgs({
        sort: next
      });
    }} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const onCompanyOpen = (id: string) => {
      window.location.hash = \`company/\${id}\`;
    };
    const linkColumns: TableColumn<Company>[] = [{
      key: 'name',
      label: '거래처명',
      render: record => <a href={\`#company/\${record.id}\`} onClick={event => {
        event.preventDefault();
        onCompanyOpen(record.id);
      }}>{record.name}</a>
    }, {
      key: 'status',
      label: '상태',
      align: 'center',
      render: record => record.status
    }];
    return <Table {...args} columns={linkColumns} />;
  },
  parameters: {
    docs: {
      description: {
        story: '링크 셀은 일반 render 계약으로 표현합니다. 실제 라우팅·서버 이동은 소비자가 소유합니다.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}}})))()}z();export{M as Default,N as Empty,F as Error,L as LinkCells,P as Loading,I as Sortable,R as __namedExportsOrder,j as default};