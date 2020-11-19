(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1227:function(e,t,a){"use strict";a.r(t);var s=a(34),n=a(35),r=a(37),l=a(36),o=a(38),c=a(1),i=a.n(c),m=a(1221),d=a(14),p=a(46),u=a(19),g=a(28),h=a(74),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={loading:!1,email:"",otp:"",otpSent:!1,password:"",cnfPassword:""},a.mobileChange=function(e){a.setState({email:e.target.value})},a.otpChange=function(e){a.setState({otp:e.target.value})},a.passwordChange=function(e){a.setState({password:e.target.value})},a.cnfPasswordChange=function(e){a.setState({cnfPassword:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.state.otpSent?a.state.password===a.state.cnfPassword?fetch(h.i+h.d+"save-new-password?email="+a.state.email+"&emailToken="+a.state.otp+"&chgPassword="+a.state.password+"&cnfPassword="+a.state.cnfPassword,{method:"POST"}).then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({loginError:e.message})}).catch(function(e){a.setState({loginError:"Error while processing"})}):a.setState({loginError:"Entered password & confirm passwords are not same."}):fetch(h.i+h.d+"forgot-password?userName="+a.state.email,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email})}).then(function(e){return e.json()}).then(function(e){201===e.status?(a.setState({otpSent:!0}),a.setState({loginError:e.message})):a.setState({loginError:e.message})}).catch(function(e){a.setState({loginError:"Error while processing"})})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"block-center mt-4 wd-xl"},i.a.createElement("style",null,".card img {height: 34px}"),i.a.createElement("div",{className:"card card-flat"},i.a.createElement("div",{className:"card-header text-center bg-default"},i.a.createElement("a",{href:"#s"},i.a.createElement("img",{className:"block-center rounded",src:"img/logo.png",alt:"Logo"}))),i.a.createElement("div",{className:"card-body"},i.a.createElement("p",{className:"text-center py-2"},"PASSWORD RESET"),i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("p",{className:"text-center d-none"},"Fill with your mail to receive instructions on how to reset your password."),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"text-muted"},"Email"),i.a.createElement("div",{className:"input-group with-focus"},i.a.createElement(d.n,{type:"text",name:"email",className:"border-right-0",placeholder:"Enter email",disabled:this.state.otpSent,onChange:this.mobileChange,"data-validate":'["required", "email"]',value:this.state.email,minLength:"5",maxLength:"100"}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("span",{className:"input-group-text text-muted bg-transparent border-left-0"},i.a.createElement("em",{className:"fa fa-mobile"}))))),this.state.otpSent&&i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"text-muted"},"OTP"),i.a.createElement("div",{className:"input-group with-focus"},i.a.createElement(d.n,{type:"text",name:"otp",className:"border-right-0",placeholder:"Enter OTP",onChange:this.otpChange,"data-validate":'["required", "number"]',value:this.state.otp,minLength:"4",maxLength:"4",pattern:"\\d*",required:!0}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("span",{className:"input-group-text text-muted bg-transparent border-left-0"},i.a.createElement("em",{className:"fa fa-key"}))))),this.state.otpSent&&i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"text-muted"},"New Password"),i.a.createElement("div",{className:"input-group with-focus"},i.a.createElement(d.n,{type:"password",id:"id-password",name:"password",className:"border-right-0",placeholder:"New Password",onChange:this.passwordChange,"data-validate":'["required"]',value:this.state.password,minLength:"5",maxLength:"50",required:!0}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("span",{className:"input-group-text text-muted bg-transparent border-left-0"},i.a.createElement("em",{className:"fa fa-lock"}))),i.a.createElement("span",{className:"invalid-feedback"},"Field is required"))),this.state.otpSent&&i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"text-muted"},"Confirm Password"),i.a.createElement("div",{className:"input-group with-focus"},i.a.createElement(d.n,{type:"password",id:"id-password1",name:"password1",className:"border-right-0",placeholder:"Confirm Password",onChange:this.cnfPasswordChange,"data-validate":'["required"]',value:this.state.cnfPassword,minLength:"5",maxLength:"50",required:!0}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("span",{className:"input-group-text text-muted bg-transparent border-left-0"},i.a.createElement("em",{className:"fa fa-lock"}))),i.a.createElement("span",{className:"invalid-feedback"},"Field is required"))),i.a.createElement("p",null,this.state.loginError),i.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},this.state.otpSent?"Update Password":"Send OTP"))),i.a.createElement("div",{className:"card-footer text-center"},i.a.createElement(m.a,{to:"login",className:"text-muted"},"Back to Login"))),i.a.createElement("div",{className:"p-3 text-center"},i.a.createElement("span",{className:"mr-2"},"\xa9"),i.a.createElement("span",null,"2019"),i.a.createElement("span",{className:"mx-2"},"-"),i.a.createElement("span",null,"SMS Panel")))}}]),t}(c.Component);t.default=Object(p.b)(function(e){return{loginStatus:e.login}},function(e){return{actions:Object(g.b)(u,e)}})(E)}}]);
//# sourceMappingURL=9.96438c01.chunk.js.map