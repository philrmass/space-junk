!function(t){var n={};function r(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,n,o){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(o,e,function(n){return t[n]}.bind(null,e));return o},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/",r(r.s=8)}({8:function(t,n,r){"use strict";r.r(n);var o={};r.r(o),r.d(o,"create",(function(){return i})),r.d(o,"clone",(function(){return u})),r.d(o,"copy",(function(){return c})),r.d(o,"fromValues",(function(){return s})),r.d(o,"set",(function(){return f})),r.d(o,"identity",(function(){return h})),r.d(o,"transpose",(function(){return d})),r.d(o,"invert",(function(){return l})),r.d(o,"adjoint",(function(){return m})),r.d(o,"determinant",(function(){return p})),r.d(o,"multiply",(function(){return M})),r.d(o,"translate",(function(){return g})),r.d(o,"scale",(function(){return b})),r.d(o,"rotate",(function(){return v})),r.d(o,"rotateX",(function(){return A})),r.d(o,"rotateY",(function(){return x})),r.d(o,"rotateZ",(function(){return y})),r.d(o,"fromTranslation",(function(){return w})),r.d(o,"fromScaling",(function(){return R})),r.d(o,"fromRotation",(function(){return T})),r.d(o,"fromXRotation",(function(){return _})),r.d(o,"fromYRotation",(function(){return E})),r.d(o,"fromZRotation",(function(){return F})),r.d(o,"fromRotationTranslation",(function(){return N})),r.d(o,"fromQuat2",(function(){return S})),r.d(o,"getTranslation",(function(){return P})),r.d(o,"getScaling",(function(){return U})),r.d(o,"getRotation",(function(){return B})),r.d(o,"fromRotationTranslationScale",(function(){return I})),r.d(o,"fromRotationTranslationScaleOrigin",(function(){return L})),r.d(o,"fromQuat",(function(){return D})),r.d(o,"frustum",(function(){return j})),r.d(o,"perspective",(function(){return k})),r.d(o,"perspectiveFromFieldOfView",(function(){return C})),r.d(o,"ortho",(function(){return q})),r.d(o,"lookAt",(function(){return O})),r.d(o,"targetTo",(function(){return Y})),r.d(o,"str",(function(){return X})),r.d(o,"frob",(function(){return z})),r.d(o,"add",(function(){return V})),r.d(o,"subtract",(function(){return G})),r.d(o,"multiplyScalar",(function(){return H})),r.d(o,"multiplyScalarAndAdd",(function(){return W})),r.d(o,"exactEquals",(function(){return J})),r.d(o,"equals",(function(){return K})),r.d(o,"mul",(function(){return Q})),r.d(o,"sub",(function(){return Z}));var e=1e-6,a="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;Math.PI;function i(){var t=new a(16);return a!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function u(t){var n=new a(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function c(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function s(t,n,r,o,e,i,u,c,s,f,h,d,l,m,p,M){var g=new a(16);return g[0]=t,g[1]=n,g[2]=r,g[3]=o,g[4]=e,g[5]=i,g[6]=u,g[7]=c,g[8]=s,g[9]=f,g[10]=h,g[11]=d,g[12]=l,g[13]=m,g[14]=p,g[15]=M,g}function f(t,n,r,o,e,a,i,u,c,s,f,h,d,l,m,p,M){return t[0]=n,t[1]=r,t[2]=o,t[3]=e,t[4]=a,t[5]=i,t[6]=u,t[7]=c,t[8]=s,t[9]=f,t[10]=h,t[11]=d,t[12]=l,t[13]=m,t[14]=p,t[15]=M,t}function h(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d(t,n){if(t===n){var r=n[1],o=n[2],e=n[3],a=n[6],i=n[7],u=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=o,t[9]=a,t[11]=n[14],t[12]=e,t[13]=i,t[14]=u}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function l(t,n){var r=n[0],o=n[1],e=n[2],a=n[3],i=n[4],u=n[5],c=n[6],s=n[7],f=n[8],h=n[9],d=n[10],l=n[11],m=n[12],p=n[13],M=n[14],g=n[15],b=r*u-o*i,v=r*c-e*i,A=r*s-a*i,x=o*c-e*u,y=o*s-a*u,w=e*s-a*c,R=f*p-h*m,T=f*M-d*m,_=f*g-l*m,E=h*M-d*p,F=h*g-l*p,N=d*g-l*M,S=b*N-v*F+A*E+x*_-y*T+w*R;return S?(S=1/S,t[0]=(u*N-c*F+s*E)*S,t[1]=(e*F-o*N-a*E)*S,t[2]=(p*w-M*y+g*x)*S,t[3]=(d*y-h*w-l*x)*S,t[4]=(c*_-i*N-s*T)*S,t[5]=(r*N-e*_+a*T)*S,t[6]=(M*A-m*w-g*v)*S,t[7]=(f*w-d*A+l*v)*S,t[8]=(i*F-u*_+s*R)*S,t[9]=(o*_-r*F-a*R)*S,t[10]=(m*y-p*A+g*b)*S,t[11]=(h*A-f*y-l*b)*S,t[12]=(u*T-i*E-c*R)*S,t[13]=(r*E-o*T+e*R)*S,t[14]=(p*v-m*x-M*b)*S,t[15]=(f*x-h*v+d*b)*S,t):null}function m(t,n){var r=n[0],o=n[1],e=n[2],a=n[3],i=n[4],u=n[5],c=n[6],s=n[7],f=n[8],h=n[9],d=n[10],l=n[11],m=n[12],p=n[13],M=n[14],g=n[15];return t[0]=u*(d*g-l*M)-h*(c*g-s*M)+p*(c*l-s*d),t[1]=-(o*(d*g-l*M)-h*(e*g-a*M)+p*(e*l-a*d)),t[2]=o*(c*g-s*M)-u*(e*g-a*M)+p*(e*s-a*c),t[3]=-(o*(c*l-s*d)-u*(e*l-a*d)+h*(e*s-a*c)),t[4]=-(i*(d*g-l*M)-f*(c*g-s*M)+m*(c*l-s*d)),t[5]=r*(d*g-l*M)-f*(e*g-a*M)+m*(e*l-a*d),t[6]=-(r*(c*g-s*M)-i*(e*g-a*M)+m*(e*s-a*c)),t[7]=r*(c*l-s*d)-i*(e*l-a*d)+f*(e*s-a*c),t[8]=i*(h*g-l*p)-f*(u*g-s*p)+m*(u*l-s*h),t[9]=-(r*(h*g-l*p)-f*(o*g-a*p)+m*(o*l-a*h)),t[10]=r*(u*g-s*p)-i*(o*g-a*p)+m*(o*s-a*u),t[11]=-(r*(u*l-s*h)-i*(o*l-a*h)+f*(o*s-a*u)),t[12]=-(i*(h*M-d*p)-f*(u*M-c*p)+m*(u*d-c*h)),t[13]=r*(h*M-d*p)-f*(o*M-e*p)+m*(o*d-e*h),t[14]=-(r*(u*M-c*p)-i*(o*M-e*p)+m*(o*c-e*u)),t[15]=r*(u*d-c*h)-i*(o*d-e*h)+f*(o*c-e*u),t}function p(t){var n=t[0],r=t[1],o=t[2],e=t[3],a=t[4],i=t[5],u=t[6],c=t[7],s=t[8],f=t[9],h=t[10],d=t[11],l=t[12],m=t[13],p=t[14],M=t[15];return(n*i-r*a)*(h*M-d*p)-(n*u-o*a)*(f*M-d*m)+(n*c-e*a)*(f*p-h*m)+(r*u-o*i)*(s*M-d*l)-(r*c-e*i)*(s*p-h*l)+(o*c-e*u)*(s*m-f*l)}function M(t,n,r){var o=n[0],e=n[1],a=n[2],i=n[3],u=n[4],c=n[5],s=n[6],f=n[7],h=n[8],d=n[9],l=n[10],m=n[11],p=n[12],M=n[13],g=n[14],b=n[15],v=r[0],A=r[1],x=r[2],y=r[3];return t[0]=v*o+A*u+x*h+y*p,t[1]=v*e+A*c+x*d+y*M,t[2]=v*a+A*s+x*l+y*g,t[3]=v*i+A*f+x*m+y*b,v=r[4],A=r[5],x=r[6],y=r[7],t[4]=v*o+A*u+x*h+y*p,t[5]=v*e+A*c+x*d+y*M,t[6]=v*a+A*s+x*l+y*g,t[7]=v*i+A*f+x*m+y*b,v=r[8],A=r[9],x=r[10],y=r[11],t[8]=v*o+A*u+x*h+y*p,t[9]=v*e+A*c+x*d+y*M,t[10]=v*a+A*s+x*l+y*g,t[11]=v*i+A*f+x*m+y*b,v=r[12],A=r[13],x=r[14],y=r[15],t[12]=v*o+A*u+x*h+y*p,t[13]=v*e+A*c+x*d+y*M,t[14]=v*a+A*s+x*l+y*g,t[15]=v*i+A*f+x*m+y*b,t}function g(t,n,r){var o,e,a,i,u,c,s,f,h,d,l,m,p=r[0],M=r[1],g=r[2];return n===t?(t[12]=n[0]*p+n[4]*M+n[8]*g+n[12],t[13]=n[1]*p+n[5]*M+n[9]*g+n[13],t[14]=n[2]*p+n[6]*M+n[10]*g+n[14],t[15]=n[3]*p+n[7]*M+n[11]*g+n[15]):(o=n[0],e=n[1],a=n[2],i=n[3],u=n[4],c=n[5],s=n[6],f=n[7],h=n[8],d=n[9],l=n[10],m=n[11],t[0]=o,t[1]=e,t[2]=a,t[3]=i,t[4]=u,t[5]=c,t[6]=s,t[7]=f,t[8]=h,t[9]=d,t[10]=l,t[11]=m,t[12]=o*p+u*M+h*g+n[12],t[13]=e*p+c*M+d*g+n[13],t[14]=a*p+s*M+l*g+n[14],t[15]=i*p+f*M+m*g+n[15]),t}function b(t,n,r){var o=r[0],e=r[1],a=r[2];return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=n[3]*o,t[4]=n[4]*e,t[5]=n[5]*e,t[6]=n[6]*e,t[7]=n[7]*e,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function v(t,n,r,o){var a,i,u,c,s,f,h,d,l,m,p,M,g,b,v,A,x,y,w,R,T,_,E,F,N=o[0],S=o[1],P=o[2],U=Math.hypot(N,S,P);return U<e?null:(N*=U=1/U,S*=U,P*=U,a=Math.sin(r),u=1-(i=Math.cos(r)),c=n[0],s=n[1],f=n[2],h=n[3],d=n[4],l=n[5],m=n[6],p=n[7],M=n[8],g=n[9],b=n[10],v=n[11],A=N*N*u+i,x=S*N*u+P*a,y=P*N*u-S*a,w=N*S*u-P*a,R=S*S*u+i,T=P*S*u+N*a,_=N*P*u+S*a,E=S*P*u-N*a,F=P*P*u+i,t[0]=c*A+d*x+M*y,t[1]=s*A+l*x+g*y,t[2]=f*A+m*x+b*y,t[3]=h*A+p*x+v*y,t[4]=c*w+d*R+M*T,t[5]=s*w+l*R+g*T,t[6]=f*w+m*R+b*T,t[7]=h*w+p*R+v*T,t[8]=c*_+d*E+M*F,t[9]=s*_+l*E+g*F,t[10]=f*_+m*E+b*F,t[11]=h*_+p*E+v*F,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function A(t,n,r){var o=Math.sin(r),e=Math.cos(r),a=n[4],i=n[5],u=n[6],c=n[7],s=n[8],f=n[9],h=n[10],d=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=a*e+s*o,t[5]=i*e+f*o,t[6]=u*e+h*o,t[7]=c*e+d*o,t[8]=s*e-a*o,t[9]=f*e-i*o,t[10]=h*e-u*o,t[11]=d*e-c*o,t}function x(t,n,r){var o=Math.sin(r),e=Math.cos(r),a=n[0],i=n[1],u=n[2],c=n[3],s=n[8],f=n[9],h=n[10],d=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=a*e-s*o,t[1]=i*e-f*o,t[2]=u*e-h*o,t[3]=c*e-d*o,t[8]=a*o+s*e,t[9]=i*o+f*e,t[10]=u*o+h*e,t[11]=c*o+d*e,t}function y(t,n,r){var o=Math.sin(r),e=Math.cos(r),a=n[0],i=n[1],u=n[2],c=n[3],s=n[4],f=n[5],h=n[6],d=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=a*e+s*o,t[1]=i*e+f*o,t[2]=u*e+h*o,t[3]=c*e+d*o,t[4]=s*e-a*o,t[5]=f*e-i*o,t[6]=h*e-u*o,t[7]=d*e-c*o,t}function w(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function R(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function T(t,n,r){var o,a,i,u=r[0],c=r[1],s=r[2],f=Math.hypot(u,c,s);return f<e?null:(u*=f=1/f,c*=f,s*=f,o=Math.sin(n),i=1-(a=Math.cos(n)),t[0]=u*u*i+a,t[1]=c*u*i+s*o,t[2]=s*u*i-c*o,t[3]=0,t[4]=u*c*i-s*o,t[5]=c*c*i+a,t[6]=s*c*i+u*o,t[7]=0,t[8]=u*s*i+c*o,t[9]=c*s*i-u*o,t[10]=s*s*i+a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function _(t,n){var r=Math.sin(n),o=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function E(t,n){var r=Math.sin(n),o=Math.cos(n);return t[0]=o,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function F(t,n){var r=Math.sin(n),o=Math.cos(n);return t[0]=o,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function N(t,n,r){var o=n[0],e=n[1],a=n[2],i=n[3],u=o+o,c=e+e,s=a+a,f=o*u,h=o*c,d=o*s,l=e*c,m=e*s,p=a*s,M=i*u,g=i*c,b=i*s;return t[0]=1-(l+p),t[1]=h+b,t[2]=d-g,t[3]=0,t[4]=h-b,t[5]=1-(f+p),t[6]=m+M,t[7]=0,t[8]=d+g,t[9]=m-M,t[10]=1-(f+l),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function S(t,n){var r=new a(3),o=-n[0],e=-n[1],i=-n[2],u=n[3],c=n[4],s=n[5],f=n[6],h=n[7],d=o*o+e*e+i*i+u*u;return d>0?(r[0]=2*(c*u+h*o+s*i-f*e)/d,r[1]=2*(s*u+h*e+f*o-c*i)/d,r[2]=2*(f*u+h*i+c*e-s*o)/d):(r[0]=2*(c*u+h*o+s*i-f*e),r[1]=2*(s*u+h*e+f*o-c*i),r[2]=2*(f*u+h*i+c*e-s*o)),N(t,n,r),t}function P(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function U(t,n){var r=n[0],o=n[1],e=n[2],a=n[4],i=n[5],u=n[6],c=n[8],s=n[9],f=n[10];return t[0]=Math.hypot(r,o,e),t[1]=Math.hypot(a,i,u),t[2]=Math.hypot(c,s,f),t}function B(t,n){var r=new a(3);U(r,n);var o=1/r[0],e=1/r[1],i=1/r[2],u=n[0]*o,c=n[1]*e,s=n[2]*i,f=n[4]*o,h=n[5]*e,d=n[6]*i,l=n[8]*o,m=n[9]*e,p=n[10]*i,M=u+h+p,g=0;return M>0?(g=2*Math.sqrt(M+1),t[3]=.25*g,t[0]=(d-m)/g,t[1]=(l-s)/g,t[2]=(c-f)/g):u>h&&u>p?(g=2*Math.sqrt(1+u-h-p),t[3]=(d-m)/g,t[0]=.25*g,t[1]=(c+f)/g,t[2]=(l+s)/g):h>p?(g=2*Math.sqrt(1+h-u-p),t[3]=(l-s)/g,t[0]=(c+f)/g,t[1]=.25*g,t[2]=(d+m)/g):(g=2*Math.sqrt(1+p-u-h),t[3]=(c-f)/g,t[0]=(l+s)/g,t[1]=(d+m)/g,t[2]=.25*g),t}function I(t,n,r,o){var e=n[0],a=n[1],i=n[2],u=n[3],c=e+e,s=a+a,f=i+i,h=e*c,d=e*s,l=e*f,m=a*s,p=a*f,M=i*f,g=u*c,b=u*s,v=u*f,A=o[0],x=o[1],y=o[2];return t[0]=(1-(m+M))*A,t[1]=(d+v)*A,t[2]=(l-b)*A,t[3]=0,t[4]=(d-v)*x,t[5]=(1-(h+M))*x,t[6]=(p+g)*x,t[7]=0,t[8]=(l+b)*y,t[9]=(p-g)*y,t[10]=(1-(h+m))*y,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function L(t,n,r,o,e){var a=n[0],i=n[1],u=n[2],c=n[3],s=a+a,f=i+i,h=u+u,d=a*s,l=a*f,m=a*h,p=i*f,M=i*h,g=u*h,b=c*s,v=c*f,A=c*h,x=o[0],y=o[1],w=o[2],R=e[0],T=e[1],_=e[2],E=(1-(p+g))*x,F=(l+A)*x,N=(m-v)*x,S=(l-A)*y,P=(1-(d+g))*y,U=(M+b)*y,B=(m+v)*w,I=(M-b)*w,L=(1-(d+p))*w;return t[0]=E,t[1]=F,t[2]=N,t[3]=0,t[4]=S,t[5]=P,t[6]=U,t[7]=0,t[8]=B,t[9]=I,t[10]=L,t[11]=0,t[12]=r[0]+R-(E*R+S*T+B*_),t[13]=r[1]+T-(F*R+P*T+I*_),t[14]=r[2]+_-(N*R+U*T+L*_),t[15]=1,t}function D(t,n){var r=n[0],o=n[1],e=n[2],a=n[3],i=r+r,u=o+o,c=e+e,s=r*i,f=o*i,h=o*u,d=e*i,l=e*u,m=e*c,p=a*i,M=a*u,g=a*c;return t[0]=1-h-m,t[1]=f+g,t[2]=d-M,t[3]=0,t[4]=f-g,t[5]=1-s-m,t[6]=l+p,t[7]=0,t[8]=d+M,t[9]=l-p,t[10]=1-s-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function j(t,n,r,o,e,a,i){var u=1/(r-n),c=1/(e-o),s=1/(a-i);return t[0]=2*a*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*a*c,t[6]=0,t[7]=0,t[8]=(r+n)*u,t[9]=(e+o)*c,t[10]=(i+a)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=i*a*2*s,t[15]=0,t}function k(t,n,r,o,e){var a,i=1/Math.tan(n/2);return t[0]=i/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=e&&e!==1/0?(a=1/(o-e),t[10]=(e+o)*a,t[14]=2*e*o*a):(t[10]=-1,t[14]=-2*o),t}function C(t,n,r,o){var e=Math.tan(n.upDegrees*Math.PI/180),a=Math.tan(n.downDegrees*Math.PI/180),i=Math.tan(n.leftDegrees*Math.PI/180),u=Math.tan(n.rightDegrees*Math.PI/180),c=2/(i+u),s=2/(e+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=-(i-u)*c*.5,t[9]=(e-a)*s*.5,t[10]=o/(r-o),t[11]=-1,t[12]=0,t[13]=0,t[14]=o*r/(r-o),t[15]=0,t}function q(t,n,r,o,e,a,i){var u=1/(n-r),c=1/(o-e),s=1/(a-i);return t[0]=-2*u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*s,t[11]=0,t[12]=(n+r)*u,t[13]=(e+o)*c,t[14]=(i+a)*s,t[15]=1,t}function O(t,n,r,o){var a,i,u,c,s,f,d,l,m,p,M=n[0],g=n[1],b=n[2],v=o[0],A=o[1],x=o[2],y=r[0],w=r[1],R=r[2];return Math.abs(M-y)<e&&Math.abs(g-w)<e&&Math.abs(b-R)<e?h(t):(d=M-y,l=g-w,m=b-R,a=A*(m*=p=1/Math.hypot(d,l,m))-x*(l*=p),i=x*(d*=p)-v*m,u=v*l-A*d,(p=Math.hypot(a,i,u))?(a*=p=1/p,i*=p,u*=p):(a=0,i=0,u=0),c=l*u-m*i,s=m*a-d*u,f=d*i-l*a,(p=Math.hypot(c,s,f))?(c*=p=1/p,s*=p,f*=p):(c=0,s=0,f=0),t[0]=a,t[1]=c,t[2]=d,t[3]=0,t[4]=i,t[5]=s,t[6]=l,t[7]=0,t[8]=u,t[9]=f,t[10]=m,t[11]=0,t[12]=-(a*M+i*g+u*b),t[13]=-(c*M+s*g+f*b),t[14]=-(d*M+l*g+m*b),t[15]=1,t)}function Y(t,n,r,o){var e=n[0],a=n[1],i=n[2],u=o[0],c=o[1],s=o[2],f=e-r[0],h=a-r[1],d=i-r[2],l=f*f+h*h+d*d;l>0&&(f*=l=1/Math.sqrt(l),h*=l,d*=l);var m=c*d-s*h,p=s*f-u*d,M=u*h-c*f;return(l=m*m+p*p+M*M)>0&&(m*=l=1/Math.sqrt(l),p*=l,M*=l),t[0]=m,t[1]=p,t[2]=M,t[3]=0,t[4]=h*M-d*p,t[5]=d*m-f*M,t[6]=f*p-h*m,t[7]=0,t[8]=f,t[9]=h,t[10]=d,t[11]=0,t[12]=e,t[13]=a,t[14]=i,t[15]=1,t}function X(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function z(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function V(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t}function G(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}function H(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t}function W(t,n,r,o){return t[0]=n[0]+r[0]*o,t[1]=n[1]+r[1]*o,t[2]=n[2]+r[2]*o,t[3]=n[3]+r[3]*o,t[4]=n[4]+r[4]*o,t[5]=n[5]+r[5]*o,t[6]=n[6]+r[6]*o,t[7]=n[7]+r[7]*o,t[8]=n[8]+r[8]*o,t[9]=n[9]+r[9]*o,t[10]=n[10]+r[10]*o,t[11]=n[11]+r[11]*o,t[12]=n[12]+r[12]*o,t[13]=n[13]+r[13]*o,t[14]=n[14]+r[14]*o,t[15]=n[15]+r[15]*o,t}function J(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function K(t,n){var r=t[0],o=t[1],a=t[2],i=t[3],u=t[4],c=t[5],s=t[6],f=t[7],h=t[8],d=t[9],l=t[10],m=t[11],p=t[12],M=t[13],g=t[14],b=t[15],v=n[0],A=n[1],x=n[2],y=n[3],w=n[4],R=n[5],T=n[6],_=n[7],E=n[8],F=n[9],N=n[10],S=n[11],P=n[12],U=n[13],B=n[14],I=n[15];return Math.abs(r-v)<=e*Math.max(1,Math.abs(r),Math.abs(v))&&Math.abs(o-A)<=e*Math.max(1,Math.abs(o),Math.abs(A))&&Math.abs(a-x)<=e*Math.max(1,Math.abs(a),Math.abs(x))&&Math.abs(i-y)<=e*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(u-w)<=e*Math.max(1,Math.abs(u),Math.abs(w))&&Math.abs(c-R)<=e*Math.max(1,Math.abs(c),Math.abs(R))&&Math.abs(s-T)<=e*Math.max(1,Math.abs(s),Math.abs(T))&&Math.abs(f-_)<=e*Math.max(1,Math.abs(f),Math.abs(_))&&Math.abs(h-E)<=e*Math.max(1,Math.abs(h),Math.abs(E))&&Math.abs(d-F)<=e*Math.max(1,Math.abs(d),Math.abs(F))&&Math.abs(l-N)<=e*Math.max(1,Math.abs(l),Math.abs(N))&&Math.abs(m-S)<=e*Math.max(1,Math.abs(m),Math.abs(S))&&Math.abs(p-P)<=e*Math.max(1,Math.abs(p),Math.abs(P))&&Math.abs(M-U)<=e*Math.max(1,Math.abs(M),Math.abs(U))&&Math.abs(g-B)<=e*Math.max(1,Math.abs(g),Math.abs(B))&&Math.abs(b-I)<=e*Math.max(1,Math.abs(b),Math.abs(I))}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var Q=M,Z=G;function $({width:t,height:n}){const r=o.create(),e=2/t,a=2/n;o.scale(r,r,[e,a,1]);const i=o.create(),u=-t/2,c=-n/2;return o.translate(r,r,[u,c,0]),{modelview:r,projection:i}}function tt(t,n,r){const{modelview:o,projection:e}=n,a=t.getUniformLocation(r,r.modelviewName),i=t.getUniformLocation(r,r.projectionName);t.uniformMatrix4fv(a,!1,o),t.uniformMatrix4fv(i,!1,e)}function nt(t,n,r){const o=t.getAttribLocation(r,r.positionName),e=t.getAttribLocation(r,r.colorName),a=t.getAttribLocation(r,r.coordName);o>=0&&(t.bindBuffer(t.ARRAY_BUFFER,n.position.buf),t.vertexAttribPointer(o,n.position.size,t.FLOAT,!1,0,0),t.enableVertexAttribArray(o)),e>=0&&(t.bindBuffer(t.ARRAY_BUFFER,n.color.buf),t.vertexAttribPointer(e,n.color.size,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e)),a>=0&&(t.bindBuffer(t.ARRAY_BUFFER,n.coord.buf),t.vertexAttribPointer(a,n.coord.size,t.FLOAT,!1,0,0),t.enableVertexAttribArray(a))}function rt(t,n,r){let o=t[n]+r;return o<0&&(o+=1),o>1&&(o-=1),[...t.slice(0,n),o,...t.slice(n+1)]}function ot(t,n){const{characters:r,background:o}=t,{hasFocus:e,keys:a}=n,{square:i}=r,u=function({characters:t,background:n},{hasFocus:r,keys:o}){const{spaceJunk:e}=t;return o.length>0&&console.log(`KEYS: [${o}]`),r&&(o.length>0&&("ArrowRight"===o[0]?e.x=e.x+5:"ArrowLeft"===o[0]?e.x=e.x-5:"ArrowUp"===o[0]?e.y=e.y+5:"ArrowDown"===o[0]&&(e.y=e.y-5)),e.x>n.width&&(e.x-=n.width),e.y>n.height&&(e.y-=n.height)),e}(t,n);return e&&(i.x=i.x+5,i.y=i.y+5,i.x>o.width&&(i.x-=o.width),i.y>o.height&&(i.y-=o.height)),{square:i,spaceJunk:u}}function et({gl:t,characters:n}){const{square:r,spaceJunk:o}=n;return[r,o].map(t=>function(t){const{x:n,y:r,width:o,height:e}=t;return{position:{size:2,data:[n,r,n+o,r,n,r+e,n+o,r+e]},color:{size:4,data:[1,0,0,0,1,.5,0,.8,1,1,0,.8,.5,1,0,.8]},coord:{size:2,data:[0,0,1,0,0,1,1,1]},texture:t.texture,program:t.program}}(t)).map(n=>function(t,n){const r={};if(n.position){const o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n.position.data),t.STATIC_DRAW);const e=n.position.data.length/n.position.size;r.position={buf:o,count:e}}if(n.color){const o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n.color.data),t.STATIC_DRAW);const e=n.color.data.length/n.color.size;r.color={buf:o,count:e}}if(n.coord){const o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n.coord.data),t.STATIC_DRAW);const e=n.coord.data.length/n.coord.size;r.coord={buf:o,count:e}}return{position:{...n.position,...r.position},color:{...n.color,...r.color},coord:{...n.coord,...r.coord},texture:n.texture,program:n.program}}(t,n))}function at(t,n,r,o,e){const a=t.createShader(t.VERTEX_SHADER),i=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(a,r),t.shaderSource(i,o),!a||!i)return null;const u=t.createProgram();return t.attachShader(u,a),t.attachShader(u,i),{name:n,prog:u,vs:a,fs:i,...e}}function it(t,n){n.compiled||(t.compileShader(n),n.compiled=!0)}const ut={positionName:"pos0",colorName:"col0",modelviewName:"modelview",projectionName:"projection"},ct={positionName:"pos0",coordName:"crd0",modelviewName:"modelview",projectionName:"projection",samplerName:"sampler0"};function st(t){const n=[];return n.push(at(t,"color","\nattribute vec4 pos0;\nattribute vec4 col0;\nuniform mat4 modelview;\nuniform mat4 projection;\nvarying lowp vec4 vfCol0;\n\nvoid main() {\n  gl_Position = projection * modelview * pos0;\n  gl_PointSize = 2.0;\n  vfCol0 = col0;\n}\n","\nvarying lowp vec4 vfCol0;\n\nvoid main() {\n  gl_FragColor = vfCol0;\n}\n",ut)),n.push(at(t,"texture","\nattribute vec4 pos0;\nattribute vec2 crd0;\nuniform mat4 modelview;\nuniform mat4 projection;\nvarying mediump vec2 vfCrd0;\n\nvoid main() {\n  gl_Position = projection * modelview * pos0;\n  vfCrd0 = crd0;\n}\n","\nvarying mediump vec2 vfCrd0;\nuniform sampler2D sampler0;\n\nvoid main() {\n  gl_FragColor = texture2D(sampler0, vfCrd0);\n}\n",ct)),function(t,n){for(const{vs:r,fs:o}of n)it(t,r),it(t,o);for(const{prog:r}of n)t.linkProgram(r);for(const{prog:r,vs:o,fs:e}of n)t.getProgramParameter(r,t.LINK_STATUS)||(console.error("Link error: "+t.getProgramInfoLog(r)),console.error("  vs log: "+t.getShaderInfoLog(o)),console.error("  fs log: "+t.getShaderInfoLog(e)));for(const t of n)t.prog.positionName=t.positionName,t.prog.colorName=t.colorName,t.prog.coordName=t.coordName,t.prog.coordName=t.coordName,t.prog.modelviewName=t.modelviewName,t.prog.projectionName=t.projectionName,t.prog.samplerName=t.samplerName;for(const{vs:r,fs:o}of n)t.deleteShader(r),t.deleteShader(o);return n.map(({name:t,prog:n})=>({[t]:n}))}(t,n).reduce((t,n)=>({...t,...n}),{})}function ft(t){const n=[];return n.push({name:"mario",image:"space-junk/a6bb7e4f81004826eb12478f4f8b0a32.png"}),n.push({name:"faces",image:"space-junk/c7437788ebf027629be33f3a9954a47c.png"}),n.reduce((n,r)=>{const o=function(t,n){const r=t.createTexture();if(n){const o=new Image;o.onload=function(){t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,o),t.generateMipmap(t.TEXTURE_2D)},o.src=n}return r}(t,r.image);return{...n,[r.name]:o}},{})}window.onload=function(){let t=function(){const t=function(){const t=document.getElementById("canvas").getContext("webgl2");return t.canvas.style.position="absolute",t.canvas.style.top="0",t.canvas.style.left="0",t}(),n=ft(t),r=st(t),o={width:window.innerWidth,height:window.innerHeight,color:[0,0,0]},e={square:{x:0,y:200,width:100,height:100,program:"texture",texture:"mario"},spaceJunk:{x:100,y:100,width:50,height:150,program:"texture",texture:"mario"}};return{gl:t,textures:n,programs:r,background:o,characters:e}}();const n=function(){let t=0,n=0,r=[];return window.onkeydown=t=>{r.push(t.key)},o=>{t+=1;const e=document.hasFocus(),a=o-n;n=o;const i=r;return r=[],{frame:t,hasFocus:e,dt:a,keys:i}}}();window.requestAnimationFrame((function r(o){const e=n(o);t=function(t,n){const r=function({gl:t}){return t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight,t}(t),o=t.textures,e=t.programs,a=function({gl:t,background:n}){const r=t.canvas.width,o=t.canvas.height,e=Date.now();let a=n.color;const i=16&e?1:0,u=8&e?1:0,c=4&e?1:0,s=i+u+c+1e-14;return a=rt(a,0,i/s*.001),a=rt(a,1,u/s*.001),a=rt(a,2,c/s*.001),{width:r,height:o,color:a}}(t),i=ot(t,n);return{gl:r,textures:o,programs:e,background:a,characters:i}}(t,e),function(t){const{gl:n,textures:r,programs:o}=t,e=n.createVertexArray();n.bindVertexArray(e),function({gl:t,background:n}){t.clearColor(...n.color,1),t.clear(t.COLOR_BUFFER_BIT)}(t);const a=et(t);for(const e of a){const a=$(t.background),i=r[e.texture],u=o[e.program],c=n.getUniformLocation(u,u.samplerName);n.useProgram(u),tt(n,a,u),nt(n,e,u),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i),n.uniform1i(c,0),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.viewport(0,0,n.canvas.clientWidth,n.canvas.clientHeight),n.drawArrays(n.TRIANGLE_STRIP,0,e.position.count)}}(t),window.requestAnimationFrame(r)}))}}});
//# sourceMappingURL=bundle.js.map