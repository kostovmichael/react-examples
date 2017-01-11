webpackJsonp([9],{353:function(e,t,n){(function(l){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(17),r=o(u),c=n(18),a=o(c),i=n(19),d=o(i),p=n(21),f=o(p),s=n(20),m=o(s),h=function(e){function t(){return(0,a.default)(this,t),(0,f.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("child componentDidMount"),setTimeout(function(){console.log("child componentDidMount setTimeout"),e.load()},0)}},{key:"render",value:function(){return console.count("child render"),l.createElement("div",{className:"child"},l.createElement("p",null,"child component"))}}]),t}(l.Component);t.default=h,e.exports=t.default}).call(t,n(1))},529:function(e,t,n){(function(l){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(17),r=o(u),c=n(18),a=o(c),i=n(19),d=o(i),p=n(21),f=o(p),s=n(20),m=o(s);n(832);var h=n(530),_=o(h),E=n(353),M=o(E),v=function(e){function t(){return(0,a.default)(this,t),(0,f.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return l.createElement("div",null,l.createElement("p",null,"问题：父子组件嵌套，在子组件的componentDidMount中如果有错误，会阻止父组件的componentDidMount，但是在报错的js加个setTimeout，则不会影响父组件的componentDidMount方法执行。"),l.createElement(_.default,null,l.createElement(M.default,null)),l.createElement("hr",null),l.createElement("p",null,"结论: 成立"),l.createElement("h3",null,"没有setTimeout的程序流程："),l.createElement("p",null,"parent render"),l.createElement("p",null,"child render"),"\b",l.createElement("p",null,"child componentDidMount"),l.createElement("p",{style:{color:"red"}},"Uncaught TypeError: this.load is not a function"),l.createElement("h3",null,"有setTimeout的程序流程："),l.createElement("p",null,"parent render"),l.createElement("p",null,"child render"),l.createElement("p",null,"child componentDidMount"),l.createElement("p",null,"parent componentDidMount"),l.createElement("p",null,"child componentDidMount setTimeout"),l.createElement("p",{style:{color:"red"}},"Uncaught TypeError: _this2.load is not a function"))}}]),t}(l.Component);t.default=v,e.exports=t.default}).call(t,n(1))},530:function(e,t,n){(function(l,o){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),c=u(r),a=n(18),i=u(a),d=n(19),p=u(d),f=n(21),s=u(f),m=n(20),h=u(m),_=n(353),E=(u(_),function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){console.log("parent componentDidMount");var e=o.findDOMNode(this._p);e.style.color="green"}},{key:"render",value:function(){var e=this;return console.count("parent render"),l.createElement("div",{className:"parent"},l.createElement("p",{ref:function(t){return e._p=t}},"parent component"),"this.props.children")}}]),t}(l.Component));t.default=E,e.exports=t.default}).call(t,n(1),n(28))},832:830});