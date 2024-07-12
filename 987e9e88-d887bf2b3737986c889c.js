"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[2914],{77503:function(e,t,l){l.d(t,{MF:function(){return N},MH:function(){return B},SL:function(){return F},UW:function(){return L},cI:function(){return q},dd:function(){return I},ie:function(){return T}});var o=l(64572),n=l(15785),a=l(35776),r=l(92812),i=l(94184),s=l.n(i),d=l(65480),c=l(47720),u=l(59273),p=l(48325),g=l(27860),v=l(68457),m=l(8),f=l(53971),h=l(90166),y=l(26777);function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function w(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){(0,o.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}const x=/^(localhost:\d{1,5}|(\*\.|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)|\*|(\*\.[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+))$/,Z=/^(?=[A-Za-z0-9\s]{6,}$)[A-Za-z0-9\s]*$/;var O={name:"19cme6k",styles:"margin-left:10px;color:var(--spectrum-global-color-gray-800);&:hover{color:var(--spectrum-global-color-gray-900);}"},D={name:"17fjgey",styles:"width:fit-content;margin-top:10px"},C={name:"1e43w35",styles:"color:rgb(0, 84, 182);&:hover{color:rgb(2, 101, 220);}"},S={name:"1kjtuj9",styles:"color:var(--spectrum-global-color-gray-800);margin:0"},k={name:"oq6u0f",styles:"display:flex;gap:10px"},A={name:"ftyx0c",styles:"display:flex;gap:24px;flex-direction:column;width:100%"},z={name:"1pmf9ly",styles:"border:none;padding:0;font-family:'adobe-clean';background:transparent;margin-left:10px;text-decoration:underline;color:var(--spectrum-global-color-gray-800);cursor:pointer"},P={name:"7hgi8",styles:"color:var(--spectrum-global-color-gray-800)"},j={name:"budh8k",styles:"display:flex;flex-direction:column;gap:16px"};const F=e=>{var t,l;let{formProps:o,credentialType:i,service:m}=e;const{0:b,1:E}=(0,a.useState)(!0),{0:U,1:M}=(0,a.useState)(!1),{0:H,1:V}=(0,a.useState)({}),{0:_,1:$}=(0,a.useState)(""),{0:R,1:G}=(0,a.useState)(!0),{0:J,1:K}=(0,a.useState)(!1),{0:W,1:Y}=(0,a.useState)([]),{0:X,1:Q}=(0,a.useState)({}),{0:ee,1:te}=(0,a.useState)(!1),{0:le,1:oe}=(0,a.useState)(!1),{0:ne,1:ae}=(0,a.useState)(!1),{0:re,1:ie}=(0,a.useState)(!1),{0:se,1:de}=(0,a.useState)(!1),{0:ce,1:ue}=(0,a.useState)({}),{0:pe,1:ge}=(0,a.useState)(!0),{0:ve,1:me}=(0,a.useState)(""),{ims:fe}=(0,a.useContext)(y.ZP),he=null==o?void 0:o[F],ye=null==he||null===(t=he.children)||void 0===t?void 0:t.filter((e=>Object.keys(e.props).some((e=>e.startsWith("contextHelp"))))),be=()=>{const e={},t={label:"Language",selectOptions:[]};null==he||he.children.forEach((l=>{let{type:o,props:a}=l;var r;o===T&&null!=a&&a.children&&(t.required=a.required||!1,(r=t.selectOptions).push.apply(r,(0,n.Z)([].concat(a.children).map((e=>{let{props:{title:t,href:l}}=e;return{title:t,href:l}})))),Q((e=>{var t,l;return w(w({},e),Array.isArray(a.children)?null:{Download:null===(t=a.children)||void 0===t||null===(l=t.props)||void 0===l?void 0:l.title})})));e[o]=w(w({},a),{},{required:o===B||(null==a?void 0:a.required)})})),t.selectOptions.length&&(e[L]=t,1===t.selectOptions.length&&Q((e=>{var l,o;return w(w({},e),{},{Download:null===(l=t.selectOptions[0])||void 0===l?void 0:l.title,zipUrl:null===(o=t.selectOptions[0])||void 0===o?void 0:o.href})}))),Y(e),(async()=>{var e;const t=null===(e=localStorage)||void 0===e?void 0:e.getItem("OrgInfo"),l=await(0,v.Xu)(ue);if(null===t)1===(null==l?void 0:l.length)&&ge(!1);else if(l){const e=JSON.parse(t);ge(1!==e.orgLen),ue(e)}l||(ue({}),G(!1))})()};(0,a.useEffect)((()=>{var e;null!==(e=window.adobeIMS)&&void 0!==e&&e.isSignedInUser()?setTimeout((()=>{E(!1)}),1e3):E(!0)}),[null===(l=window.adobeIMS)||void 0===l?void 0:l.isSignedInUser()]),(0,a.useEffect)((()=>{setTimeout((()=>{de(!1)}),8e3)}),[se]),(0,a.useEffect)((()=>{R&&M(!1)}),[R]),(0,a.useEffect)((()=>{if(!J&&R){const e=w({},X);for(const t in e)e[t]="";Q(e),ie(!1)}}),[J]),(0,a.useEffect)((()=>{be()}),[]),(0,a.useEffect)((()=>{var e;if(ce)if(ce&&0!==(null===(e=Object.keys(ce))||void 0===e?void 0:e.length))G(!0),M(!0),setTimeout((()=>{E(!1),M(!1)}),2e3);else{var t;0===(null===(t=Object.keys(ce))||void 0===t?void 0:t.length)&&(ue(void 0),G(!1))}else ue(void 0),G(!1),E(!0)}),[ce]),(0,a.useEffect)((()=>{if(U){const e=w({},X);for(const t in e)e[t]="";Q(e)}}),[U]),(0,a.useEffect)((()=>{var e,t,l,o;const n=null===(e=Array.from((null==he?void 0:he.children)||[]).filter((e=>{var t;return(null==e||null===(t=e.props)||void 0===t?void 0:t.required)||e.type===B})))||void 0===e?void 0:e.map((e=>e.type)),a=Z.test(X.CredentialName)&&(null===(t=X.CredentialName)||void 0===t?void 0:t.length)>=6,r=n.filter((e=>"AllowedOrigins"===e.name)),i=null===(l=X.AllowedOrigins)||void 0===l?void 0:l.split(",").map((e=>x.test(e.trim()))),s=!r||(null==i?void 0:i.every((e=>!0===e)))&&void 0!==X.AllowedOrigins&&0!==(null===(o=X.AllowedOrigins)||void 0===o?void 0:o.length),d=a&&s&&!0===X.Agree;ae(d)}),[X]),(0,a.useEffect)((()=>{(async()=>{if(fe&&fe.isSignedInUser()){const e=await fe.getProfile();me(null==e?void 0:e.email)}})()}),[fe]);const we=(e,t)=>{const l="Downloads"===t||"Agree"===t?e.target.checked:e.target.value;if(Q((e=>w(w({},e),{},{[t]:l}))),"Download"===t&&X.Downloads){var o;const t=null==W||null===(o=W[L])||void 0===o?void 0:o.selectOptions.find((t=>t.title===e.target.value));t&&Q((e=>w(w({},e),{},{zipUrl:t.href})))}},xe=null==W?void 0:W[N],Ze=null==W?void 0:W[B],Oe=null==W?void 0:W[I],De=null==W?void 0:W[T],Ce=null==W?void 0:W[L];return(0,r.tZ)(a.default.Fragment,null,!le&&R&&!b&&ce&&(0,r.tZ)("div",{className:s()(null==he?void 0:he.className),css:j},(0,r.tZ)("div",{css:(0,r.iv)("display:flex;flex-direction:column;gap:16px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width:",v.xU,") and (max-width:",v.Ey,"){padding:0;width:100%;}","")},(null==he?void 0:he.title)&&(0,r.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--sizeL"},null==he?void 0:he.title),(null==he?void 0:he.paragraph)&&(0,r.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeL"},null==he?void 0:he.paragraph),(0,r.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:P},"You're creating this credential in  ","developer"===(null==ce?void 0:ce.type)?"in your personal developer organization":(0,r.tZ)("span",null,"[",(0,r.tZ)("b",null,null==ce?void 0:ce.name),"] "),".",pe&&(0,r.tZ)("button",{tabIndex:"0",css:z,onClick:()=>te(!0)},"Change organization?"))),(0,r.tZ)("div",{css:(0,r.iv)("display:flex;gap:35px;@media screen and (min-width:",v.xU,") and (max-width:",v.Ey,"){flex-direction:column;padding-left:0;}","")},(0,r.tZ)("div",{css:(0,r.iv)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width:",v.xU,") and (max-width:",v.Ey,"){width:100%;}","")},(0,r.tZ)("div",{css:A},Ze&&(0,r.tZ)(B,{nameProps:Ze,isFormValue:ye,formData:X,handleChange:we}),Oe&&(0,r.tZ)(I,{originsProps:Oe,isFormValue:ye,formData:X,handleChange:we}),De&&Ce&&(0,r.tZ)(T,{downloadsProp:De,type:"Downloads",formData:X,handleChange:we}),X.Downloads&&Ce&&(0,r.tZ)(L,{downloadProp:Ce,formData:X,isFormValue:ye,handleChange:we}),(0,r.tZ)("div",{css:k},(0,r.tZ)("input",{type:"checkbox",checked:X.Agree,onChange:e=>we(e,"Agree")}),(0,r.tZ)("p",{css:S},"By checking this box, you agree to ",(0,r.tZ)("a",{href:"https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Adobe-Developer-Additional-Terms_en-US_20230822.pdf",css:C,target:"_blank",rel:"noreferrer"},"Adobe Developer Terms of Use"),".")),(0,r.tZ)("button",{id:"credentialButton",className:"spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM",css:D,onClick:async()=>{var e,t;const l=null===(e=window.adobeIMS)||void 0===e||null===(t=e.getTokenFromStorage())||void 0===t?void 0:t.token;l||console.log("User not logged in"),E(!0),G(!1);const o={name:X.CredentialName,platform:i,description:"created for get credential",domain:X.AllowedOrigins,services:[{sdkCode:m}]};try{var n,a,r;const e=await fetch(`/console/api/organizations/${null==ce?void 0:ce.id}/integrations/adobeid`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`,"x-api-key":null===(n=window)||void 0===n||null===(a=n.adobeIMS)||void 0===a||null===(r=a.adobeIdData)||void 0===r?void 0:r.client_id},body:JSON.stringify(o)}),t=await e.json();if(200===e.status)V(t),K(!0),ie(!0);else if(null!=t&&t.messages){var s;ie(!0),ae(!1),$(null==t||null===(s=t.messages[0])||void 0===s?void 0:s.message),G(!0)}}catch(d){M(!0)}finally{E(!1)}},disabled:!ne},(0,r.tZ)("span",{className:"spectrum-Button-label"},"Create credential")))),xe?(0,r.tZ)(q,{sideContent:null==xe?void 0:xe.children}):null),(0,r.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:(0,r.iv)("color:var(--spectrum-global-color-gray-800);@media screen and (min-width:",v.xU,") and (max-width:",v.Ey,"){padding-left:0;}","")},"Have existing credentials?",(0,r.tZ)("a",{href:"/console/",target:"_blank",rel:"noreferrer",css:O},"Go to Developer Console"))),re&&(0,r.tZ)(a.default.Fragment,null,se?(0,r.tZ)(f.F,{message:"Organization Changed",variant:"success",disable:8e3,customDisableFunction:ie}):(0,r.tZ)(f.F,{customDisableFunction:ie,message:R&&!J?_:!U&&J&&"Your credentials were created successfully.",variant:U||R&&!J?"error":"success",disable:U||R&&!J?null:8e3})),b&&!J&&!U&&!R&&ce&&(0,r.tZ)(c.g,{credentials:he,isCreateCredential:!0,downloadStatus:X.Downloads}),ee&&(0,r.tZ)(p.G,{setModalOpen:te,redirectToBeta:le,setRedirectBetaProgram:oe,setAlertShow:ie,alertShow:re,organizationChange:se,setOrganization:de,setOrganizationValue:ue}),(!ce||U)&&b&&(0,r.tZ)(c.g,null),U&&!R&&!J&&!ce&&(0,r.tZ)(u.I,{errorMessage:null==o?void 0:o[u.I]}),J&&!R&&(0,r.tZ)(d.Z,{credentialProps:o,response:H,setShowCreateForm:G,setShowCredential:K,organizationName:null==ce?void 0:ce.name,formData:X,orgID:null==ce?void 0:ce.id}),le&&(0,r.tZ)(g.Z,{joinBeta:null==o?void 0:o[g.Z]}),!R&&!ce&&!U&&!b&&(0,r.tZ)(h.K,{developerAccessError:null==o?void 0:o[h.K],title:null==he?void 0:he.title,emailID:ve}))},N=e=>{let{side:t}=e;return t};var E={name:"8sarsy",styles:"position:relative;display:inline-block;width:100%"};const B=e=>{var t,l,o;let{nameProps:n,isFormValue:a,formData:i,handleChange:s}=e;const d=!Z.test(i.CredentialName),c=0!==(null===(t=i.CredentialName)||void 0===t?void 0:t.length)&&d;return(0,r.tZ)(v.Mt,{isFormValue:a,fields:n,formData:i,isRed:c},(0,r.tZ)("div",{css:E},(0,r.tZ)("input",{type:"text",css:(0,r.iv)("padding:7px;border-radius:3px;width:97%;border:1px solid ",c?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";&::placeholder{font-style:italic;color:var(--spectrum-global-color-gray-400);}&:focus{outline:none;border-color:",c?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";}",""),value:i.CredentialName,onChange:e=>s(e,"CredentialName"),placeholder:null==n?void 0:n.placeholder,maxLength:null==n?void 0:n.range}),(0,r.tZ)("span",{css:(0,r.iv)("display :",(null===(l=i.CredentialName)||void 0===l?void 0:l.length)<3&&0!==(null===(o=i.CredentialName)||void 0===o?void 0:o.length)?"block":"none",";","")},(0,r.tZ)(v.zM,null))))},I=e=>{var t,l;let{originsProps:o,isFormValue:n,type:a,formData:i,handleChange:s}=e;const d=null===(t=i.AllowedOrigins)||void 0===t?void 0:t.split(",").map((e=>x.test(e.trim()))),c=null==d?void 0:d.every((e=>!0===e)),u=void 0!==i.AllowedOrigins&&!c&&0!==(null===(l=i.AllowedOrigins)||void 0===l?void 0:l.length);return(0,r.tZ)(v.Mt,{isFormValue:n,fields:o,type:a,formData:i,isRed:u},(0,r.tZ)("textarea",{css:(0,r.iv)("flex:1;padding:7px;height:50px;border-radius:3px;border:1px solid ",u?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";resize:none;width:90%;color:#4b4b4b;font-family:adobe-clean,Helvetica,Arial,sans-serif;&::placeholder{color:var(--spectrum-global-color-gray-600);font-style:italic;}&:focus{outline:none;border-color:",u?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";}&:hover{&::placeholder{color:var(--spectrum-global-color-gray-800);}}",""),value:i.AllowedOrigins,placeholder:null==o?void 0:o.placeholder,onChange:e=>s(e,"AllowedOrigins")}))};var U={name:"i92civ",styles:"cursor:pointer;display:flex;justify-content:center;align-items:center"},M={name:"18ny2tv",styles:"color:var(--spectrum-dialog-confirm-description-text-color, var(--spectrum-global-color-gray-800));margin:0"},H={name:"zatqba",styles:"display:flex;gap:10px;align-items:center"};const T=e=>{let{downloadsProp:t,handleChange:l,formData:o}=e;const{label:n,contextHelpLabelForLink:a,contextHelpLink:i,contextHelpText:s,contextHelp:d,contextHelpHeading:c}=t;return(0,r.tZ)("div",{css:H},(0,r.tZ)("input",{type:"checkbox",onChange:e=>l(e,"Downloads"),checked:o.Downloads}),(0,r.tZ)("p",{css:M}," ",n," "),(0,r.tZ)("div",{css:U},d&&(0,r.tZ)(m.r,{heading:c,text:s,link:i,label:a})))};var V={name:"wd7e5h",styles:"font-style:italic;font-weight:500;font-family:'adobe-clean';padding:7px;border-radius:3px;border:1px solid #D0D0D0!important;width:100%"};const L=e=>{var t,l,o;let{downloadProp:n,formData:i,isFormValue:s,handleChange:d}=e;return(0,r.tZ)(a.default.Fragment,null,(null==n||null===(t=n.selectOptions)||void 0===t?void 0:t.length)>1&&(0,r.tZ)(v.Mt,{isFormValue:s,fields:n},(0,r.tZ)("select",{css:V,id:"selectBox",value:i.Download,onChange:e=>d(e,"Download")},(null==n||null===(l=n.selectOptions)||void 0===l?void 0:l.length)>1&&(0,r.tZ)("option",{value:"",hidden:!0},"Select language for your code pickData"),null==n||null===(o=n.selectOptions)||void 0===o?void 0:o.map(((e,t)=>(0,r.tZ)("option",{key:t,"data-link":e.href,value:e.title},e.title))))))},q=e=>{let{sideContent:t}=e;return(0,r.tZ)(a.default.Fragment,null,(0,r.tZ)("div",{css:(0,r.iv)("width:2px;background-color:#D0D0D0;@media screen and (min-width:",v.xU,") and (max-width:",v.Ey,"){display:none;}","")}),(0,r.tZ)("div",{css:(0,r.iv)("width:50%;@media screen and (min-width:",v.xU,") and (max-width:",v.Ey,"){width:100%;}","")},(0,r.tZ)(N,{side:t})))}}}]);
//# sourceMappingURL=987e9e88-d887bf2b3737986c889c.js.map