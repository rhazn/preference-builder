(this["webpackJsonppreference-builder"]=this["webpackJsonppreference-builder"]||[]).push([[6],{31:function(r,t,e){"use strict";e.r(t),e.d(t,"formula_input",(function(){return l}));var a=e(2),i=e(3),o=e(16),l=function(){function r(t){Object(a.a)(this,r),Object(o.f)(this,t),this.validFormulaEntered=Object(o.c)(this,"validFormulaEntered",7),this.initialFormula="",this.prevalidate=function(r){return"fof('formula', axiom, ".concat(r,").")},this.validate=function(){return Promise.resolve({valid:!0})},this.postvalidate=function(r){return r},this.formula="",this.validFormula="",this.error=void 0}return Object(i.a)(r,[{key:"componentWillLoad",value:function(){this.formula=this.initialFormula}},{key:"watchFormulaHandler",value:function(r){var t=this;if(!r)return this.validFormula=r,void(this.error=void 0);var e=this.prevalidate(r);this.validate(e).then((function(r){t.error=r.error,r.valid&&(t.validFormula=t.postvalidate(e))}))}},{key:"watchValidFormulaHandler",value:function(r){this.validFormulaEntered.emit(r)}},{key:"updateFormula",value:function(r){this.formula=r}},{key:"render",value:function(){var r=this;return Object(o.d)(o.a,null,Object(o.d)("form",{class:"form",part:"form",noValidate:!0,autoComplete:"off"},Object(o.d)("label",{htmlFor:"formula-input",part:"label"},"Formula"),Object(o.d)("div",{class:"description",part:"description"},Object(o.d)("slot",{name:"description"},"Formula in TPTP syntax (",Object(o.d)("a",{href:"http://www.tptp.org/",target:"_blank",rel:"noopener noreferrer"},"tptp.org"),")")),Object(o.d)("input",{id:"formula-input",name:"formula-input",type:"text",part:"input",value:this.formula,onInput:function(t){return r.updateFormula(t.target.value)}}),this.error&&Object(o.d)("div",{class:"error",part:"error"},this.error)))}}],[{key:"watchers",get:function(){return{formula:["watchFormulaHandler"],validFormula:["watchValidFormulaHandler"]}}}]),r}();l.style=":host{display:block}.form{display:flex;flex-direction:column}label{font-weight:bold}.error{color:red;padding:0.5rem 0}.description{color:grey;font-size:smaller;padding:0.5rem 0}"}}]);
//# sourceMappingURL=6.796ec9db.chunk.js.map