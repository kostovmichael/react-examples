webpackJsonp([12],{297:function(e,t,n){(function(l){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=u(o),a=n(9),c=u(a),i=n(10),d=u(i),f=n(12),p=u(f),s=n(11),h=u(s),m=n(121),_=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return l.createElement("div",null,"AnotherChild component")}}]),t}(l.Component);t.default=(0,m.connect)()(_),e.exports=t.default}).call(t,n(3))},298:function(e,t,n){(function(l){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=u(o),a=n(9),c=u(a),i=n(10),d=u(i),f=n(12),p=u(f),s=n(11),h=u(s),m=n(121),_=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return l.createElement("div",null,"child component")}}]),t}(l.Component);t.default=(0,m.connect)(null,null,null,{withRef:!0})(_),e.exports=t.default}).call(t,n(3))},299:function(e,t,n){(function(l){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=u(o),a=n(9),c=u(a),i=n(10),d=u(i),f=n(12),p=u(f),s=n(11),h=u(s),m=n(298),_=u(m),C=n(297),v=u(C),E=function(e){function t(){(0,c.default)(this,t);var e=(0,p.default)(this,(t.__proto__||(0,r.default)(t)).call(this));return e.state={isEqual:!1},e}return(0,h.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){console.log(this.AnotherChildComponent.refs.WrappedComponent),this.setState({isEqual:this.childComponent.getWrappedInstance()===this.childComponent.refs.WrappedComponent})}},{key:"render",value:function(){var e=this;return l.createElement("div",null,"GetWrappedInstance",l.createElement(_.default,{ref:function(t){return e.childComponent=t}}),l.createElement(v.default,{ref:function(t){return e.AnotherChildComponent=t}}),l.createElement("p",null,"this.childComponent.getWrappedInstance() === this.childComponent.refs.WrappedComponent"),l.createElement("p",null,"结果: ",this.state.isEqual.toString()),l.createElement("br",null),l.createElement("p",null,"如果没有使用","{withRef: true}","，调用getWrappedInstance方法会报错:"),l.createElement("p",null,"Uncaught Error: To access the wrapped instance, you need to specify ","{ withRef: true }"," as the fourth argument of the connect() call."),l.createElement("p",null,"this.AnotherChildComponent.refs.WrappedComponent的的值是undefined"))}}]),t}(l.Component);t.default=E,e.exports=t.default}).call(t,n(3))}});