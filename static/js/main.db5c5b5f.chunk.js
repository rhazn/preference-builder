(this["webpackJsonppreference-builder"]=this["webpackJsonppreference-builder"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},27:function(e,t,n){var r={"./create-signature.entry.js":[29,5],"./formula-input.entry.js":[30,6],"./propositional-world-component.entry.js":[31,7],"./show-signature.entry.js":[32,8],"./world-preference-component.entry.js":[33,9],"./world-selector.entry.js":[34,10]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=27,e.exports=c},28:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),s=n(17),i=n.n(s),a=(n(23),n(5)),o=(n(24),n(18)),l=n(37),j=n(0);var u=function(){var e=Object(r.useState)(new Set(["a"])),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(),i=Object(a.a)(s,2),u=i[0],d=i[1],b=Object(r.useState)(!1),f=Object(a.a)(b,2),x=f[0],O=f[1];return Object(r.useEffect)((function(){d(Object(o.a)(n))}),[n]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:"Preference Builder"}),Object(j.jsxs)("div",{className:"flex-row",children:[Object(j.jsxs)("div",{className:"flex-column",children:[Object(j.jsx)("h2",{children:"Current Signature"}),Object(j.jsx)(l.b,{signature:n})]}),Object(j.jsxs)("div",{className:"flex-column",children:[Object(j.jsx)("h2",{children:"Create new signature"}),Object(j.jsx)(l.a,{onSignatureUpdated:function(e){return c(e.detail)}})]}),Object(j.jsxs)("div",{className:"flex-column",children:[Object(j.jsx)("h2",{children:"Allow empty ranks?"}),Object(j.jsx)("button",{onClick:function(){return O(!x)},children:x?"No":"Yes"})]})]}),Object(j.jsx)("div",{className:"flex-row",children:Object(j.jsxs)("div",{className:"flex-column",children:[Object(j.jsx)("h2",{children:"Preference order"}),Object(j.jsx)(l.c,{preference:u,allowEmptyRows:!x,onPreferenceChanged:function(e){return d(e.detail)}})]})}),Object(j.jsxs)("div",{className:"flex-row",children:[Object(j.jsxs)("div",{className:"flex-column",children:[Object(j.jsx)("h2",{children:"As JSON"}),Object(j.jsx)("textarea",{className:"code text-representation",value:null===u||void 0===u?void 0:u.toJson()})]}),Object(j.jsxs)("div",{className:"flex-column",children:[Object(j.jsx)("h2",{children:"As Binary"}),Object(j.jsx)("textarea",{className:"code text-representation",value:new Uint8Array(u?u.toBinary():new ArrayBuffer(0)).reduce((function(e,t){return e+t.toString(2)}),"")})]})]})]})},d=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),d()}},[[28,2,3]]]);
//# sourceMappingURL=main.db5c5b5f.chunk.js.map