!function(t){var n={};function r(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,n,o){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(o,a,function(n){return t[n]}.bind(null,a));return o},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/",r(r.s=8)}({8:function(t,n,r){"use strict";r.r(n);var o={};r.r(o),r.d(o,"create",(function(){return u})),r.d(o,"clone",(function(){return i})),r.d(o,"copy",(function(){return c})),r.d(o,"fromValues",(function(){return f})),r.d(o,"set",(function(){return s})),r.d(o,"identity",(function(){return h})),r.d(o,"transpose",(function(){return l})),r.d(o,"invert",(function(){return d})),r.d(o,"adjoint",(function(){return M})),r.d(o,"determinant",(function(){return b})),r.d(o,"multiply",(function(){return v})),r.d(o,"translate",(function(){return g})),r.d(o,"scale",(function(){return m})),r.d(o,"rotate",(function(){return p})),r.d(o,"rotateX",(function(){return y})),r.d(o,"rotateY",(function(){return A})),r.d(o,"rotateZ",(function(){return w})),r.d(o,"fromTranslation",(function(){return R})),r.d(o,"fromScaling",(function(){return x})),r.d(o,"fromRotation",(function(){return S})),r.d(o,"fromXRotation",(function(){return F})),r.d(o,"fromYRotation",(function(){return _})),r.d(o,"fromZRotation",(function(){return P})),r.d(o,"fromRotationTranslation",(function(){return T})),r.d(o,"fromQuat2",(function(){return E})),r.d(o,"getTranslation",(function(){return B})),r.d(o,"getScaling",(function(){return I})),r.d(o,"getRotation",(function(){return L})),r.d(o,"fromRotationTranslationScale",(function(){return q})),r.d(o,"fromRotationTranslationScaleOrigin",(function(){return O})),r.d(o,"fromQuat",(function(){return j})),r.d(o,"frustum",(function(){return C})),r.d(o,"perspective",(function(){return D})),r.d(o,"perspectiveFromFieldOfView",(function(){return U})),r.d(o,"ortho",(function(){return k})),r.d(o,"lookAt",(function(){return Y})),r.d(o,"targetTo",(function(){return z})),r.d(o,"str",(function(){return H})),r.d(o,"frob",(function(){return V})),r.d(o,"add",(function(){return N})),r.d(o,"subtract",(function(){return W})),r.d(o,"multiplyScalar",(function(){return X})),r.d(o,"multiplyScalarAndAdd",(function(){return $})),r.d(o,"exactEquals",(function(){return G})),r.d(o,"equals",(function(){return Q})),r.d(o,"mul",(function(){return Z})),r.d(o,"sub",(function(){return K}));var a=1e-6,e="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;Math.PI;function u(){var t=new e(16);return e!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function i(t){var n=new e(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function c(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function f(t,n,r,o,a,u,i,c,f,s,h,l,d,M,b,v){var g=new e(16);return g[0]=t,g[1]=n,g[2]=r,g[3]=o,g[4]=a,g[5]=u,g[6]=i,g[7]=c,g[8]=f,g[9]=s,g[10]=h,g[11]=l,g[12]=d,g[13]=M,g[14]=b,g[15]=v,g}function s(t,n,r,o,a,e,u,i,c,f,s,h,l,d,M,b,v){return t[0]=n,t[1]=r,t[2]=o,t[3]=a,t[4]=e,t[5]=u,t[6]=i,t[7]=c,t[8]=f,t[9]=s,t[10]=h,t[11]=l,t[12]=d,t[13]=M,t[14]=b,t[15]=v,t}function h(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function l(t,n){if(t===n){var r=n[1],o=n[2],a=n[3],e=n[6],u=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=o,t[9]=e,t[11]=n[14],t[12]=a,t[13]=u,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function d(t,n){var r=n[0],o=n[1],a=n[2],e=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],h=n[9],l=n[10],d=n[11],M=n[12],b=n[13],v=n[14],g=n[15],m=r*i-o*u,p=r*c-a*u,y=r*f-e*u,A=o*c-a*i,w=o*f-e*i,R=a*f-e*c,x=s*b-h*M,S=s*v-l*M,F=s*g-d*M,_=h*v-l*b,P=h*g-d*b,T=l*g-d*v,E=m*T-p*P+y*_+A*F-w*S+R*x;return E?(E=1/E,t[0]=(i*T-c*P+f*_)*E,t[1]=(a*P-o*T-e*_)*E,t[2]=(b*R-v*w+g*A)*E,t[3]=(l*w-h*R-d*A)*E,t[4]=(c*F-u*T-f*S)*E,t[5]=(r*T-a*F+e*S)*E,t[6]=(v*y-M*R-g*p)*E,t[7]=(s*R-l*y+d*p)*E,t[8]=(u*P-i*F+f*x)*E,t[9]=(o*F-r*P-e*x)*E,t[10]=(M*w-b*y+g*m)*E,t[11]=(h*y-s*w-d*m)*E,t[12]=(i*S-u*_-c*x)*E,t[13]=(r*_-o*S+a*x)*E,t[14]=(b*p-M*A-v*m)*E,t[15]=(s*A-h*p+l*m)*E,t):null}function M(t,n){var r=n[0],o=n[1],a=n[2],e=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],h=n[9],l=n[10],d=n[11],M=n[12],b=n[13],v=n[14],g=n[15];return t[0]=i*(l*g-d*v)-h*(c*g-f*v)+b*(c*d-f*l),t[1]=-(o*(l*g-d*v)-h*(a*g-e*v)+b*(a*d-e*l)),t[2]=o*(c*g-f*v)-i*(a*g-e*v)+b*(a*f-e*c),t[3]=-(o*(c*d-f*l)-i*(a*d-e*l)+h*(a*f-e*c)),t[4]=-(u*(l*g-d*v)-s*(c*g-f*v)+M*(c*d-f*l)),t[5]=r*(l*g-d*v)-s*(a*g-e*v)+M*(a*d-e*l),t[6]=-(r*(c*g-f*v)-u*(a*g-e*v)+M*(a*f-e*c)),t[7]=r*(c*d-f*l)-u*(a*d-e*l)+s*(a*f-e*c),t[8]=u*(h*g-d*b)-s*(i*g-f*b)+M*(i*d-f*h),t[9]=-(r*(h*g-d*b)-s*(o*g-e*b)+M*(o*d-e*h)),t[10]=r*(i*g-f*b)-u*(o*g-e*b)+M*(o*f-e*i),t[11]=-(r*(i*d-f*h)-u*(o*d-e*h)+s*(o*f-e*i)),t[12]=-(u*(h*v-l*b)-s*(i*v-c*b)+M*(i*l-c*h)),t[13]=r*(h*v-l*b)-s*(o*v-a*b)+M*(o*l-a*h),t[14]=-(r*(i*v-c*b)-u*(o*v-a*b)+M*(o*c-a*i)),t[15]=r*(i*l-c*h)-u*(o*l-a*h)+s*(o*c-a*i),t}function b(t){var n=t[0],r=t[1],o=t[2],a=t[3],e=t[4],u=t[5],i=t[6],c=t[7],f=t[8],s=t[9],h=t[10],l=t[11],d=t[12],M=t[13],b=t[14],v=t[15];return(n*u-r*e)*(h*v-l*b)-(n*i-o*e)*(s*v-l*M)+(n*c-a*e)*(s*b-h*M)+(r*i-o*u)*(f*v-l*d)-(r*c-a*u)*(f*b-h*d)+(o*c-a*i)*(f*M-s*d)}function v(t,n,r){var o=n[0],a=n[1],e=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],l=n[9],d=n[10],M=n[11],b=n[12],v=n[13],g=n[14],m=n[15],p=r[0],y=r[1],A=r[2],w=r[3];return t[0]=p*o+y*i+A*h+w*b,t[1]=p*a+y*c+A*l+w*v,t[2]=p*e+y*f+A*d+w*g,t[3]=p*u+y*s+A*M+w*m,p=r[4],y=r[5],A=r[6],w=r[7],t[4]=p*o+y*i+A*h+w*b,t[5]=p*a+y*c+A*l+w*v,t[6]=p*e+y*f+A*d+w*g,t[7]=p*u+y*s+A*M+w*m,p=r[8],y=r[9],A=r[10],w=r[11],t[8]=p*o+y*i+A*h+w*b,t[9]=p*a+y*c+A*l+w*v,t[10]=p*e+y*f+A*d+w*g,t[11]=p*u+y*s+A*M+w*m,p=r[12],y=r[13],A=r[14],w=r[15],t[12]=p*o+y*i+A*h+w*b,t[13]=p*a+y*c+A*l+w*v,t[14]=p*e+y*f+A*d+w*g,t[15]=p*u+y*s+A*M+w*m,t}function g(t,n,r){var o,a,e,u,i,c,f,s,h,l,d,M,b=r[0],v=r[1],g=r[2];return n===t?(t[12]=n[0]*b+n[4]*v+n[8]*g+n[12],t[13]=n[1]*b+n[5]*v+n[9]*g+n[13],t[14]=n[2]*b+n[6]*v+n[10]*g+n[14],t[15]=n[3]*b+n[7]*v+n[11]*g+n[15]):(o=n[0],a=n[1],e=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],l=n[9],d=n[10],M=n[11],t[0]=o,t[1]=a,t[2]=e,t[3]=u,t[4]=i,t[5]=c,t[6]=f,t[7]=s,t[8]=h,t[9]=l,t[10]=d,t[11]=M,t[12]=o*b+i*v+h*g+n[12],t[13]=a*b+c*v+l*g+n[13],t[14]=e*b+f*v+d*g+n[14],t[15]=u*b+s*v+M*g+n[15]),t}function m(t,n,r){var o=r[0],a=r[1],e=r[2];return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=n[3]*o,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*e,t[9]=n[9]*e,t[10]=n[10]*e,t[11]=n[11]*e,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function p(t,n,r,o){var e,u,i,c,f,s,h,l,d,M,b,v,g,m,p,y,A,w,R,x,S,F,_,P,T=o[0],E=o[1],B=o[2],I=Math.hypot(T,E,B);return I<a?null:(T*=I=1/I,E*=I,B*=I,e=Math.sin(r),i=1-(u=Math.cos(r)),c=n[0],f=n[1],s=n[2],h=n[3],l=n[4],d=n[5],M=n[6],b=n[7],v=n[8],g=n[9],m=n[10],p=n[11],y=T*T*i+u,A=E*T*i+B*e,w=B*T*i-E*e,R=T*E*i-B*e,x=E*E*i+u,S=B*E*i+T*e,F=T*B*i+E*e,_=E*B*i-T*e,P=B*B*i+u,t[0]=c*y+l*A+v*w,t[1]=f*y+d*A+g*w,t[2]=s*y+M*A+m*w,t[3]=h*y+b*A+p*w,t[4]=c*R+l*x+v*S,t[5]=f*R+d*x+g*S,t[6]=s*R+M*x+m*S,t[7]=h*R+b*x+p*S,t[8]=c*F+l*_+v*P,t[9]=f*F+d*_+g*P,t[10]=s*F+M*_+m*P,t[11]=h*F+b*_+p*P,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function y(t,n,r){var o=Math.sin(r),a=Math.cos(r),e=n[4],u=n[5],i=n[6],c=n[7],f=n[8],s=n[9],h=n[10],l=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=e*a+f*o,t[5]=u*a+s*o,t[6]=i*a+h*o,t[7]=c*a+l*o,t[8]=f*a-e*o,t[9]=s*a-u*o,t[10]=h*a-i*o,t[11]=l*a-c*o,t}function A(t,n,r){var o=Math.sin(r),a=Math.cos(r),e=n[0],u=n[1],i=n[2],c=n[3],f=n[8],s=n[9],h=n[10],l=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*a-f*o,t[1]=u*a-s*o,t[2]=i*a-h*o,t[3]=c*a-l*o,t[8]=e*o+f*a,t[9]=u*o+s*a,t[10]=i*o+h*a,t[11]=c*o+l*a,t}function w(t,n,r){var o=Math.sin(r),a=Math.cos(r),e=n[0],u=n[1],i=n[2],c=n[3],f=n[4],s=n[5],h=n[6],l=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*a+f*o,t[1]=u*a+s*o,t[2]=i*a+h*o,t[3]=c*a+l*o,t[4]=f*a-e*o,t[5]=s*a-u*o,t[6]=h*a-i*o,t[7]=l*a-c*o,t}function R(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function x(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function S(t,n,r){var o,e,u,i=r[0],c=r[1],f=r[2],s=Math.hypot(i,c,f);return s<a?null:(i*=s=1/s,c*=s,f*=s,o=Math.sin(n),u=1-(e=Math.cos(n)),t[0]=i*i*u+e,t[1]=c*i*u+f*o,t[2]=f*i*u-c*o,t[3]=0,t[4]=i*c*u-f*o,t[5]=c*c*u+e,t[6]=f*c*u+i*o,t[7]=0,t[8]=i*f*u+c*o,t[9]=c*f*u-i*o,t[10]=f*f*u+e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function F(t,n){var r=Math.sin(n),o=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function _(t,n){var r=Math.sin(n),o=Math.cos(n);return t[0]=o,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function P(t,n){var r=Math.sin(n),o=Math.cos(n);return t[0]=o,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function T(t,n,r){var o=n[0],a=n[1],e=n[2],u=n[3],i=o+o,c=a+a,f=e+e,s=o*i,h=o*c,l=o*f,d=a*c,M=a*f,b=e*f,v=u*i,g=u*c,m=u*f;return t[0]=1-(d+b),t[1]=h+m,t[2]=l-g,t[3]=0,t[4]=h-m,t[5]=1-(s+b),t[6]=M+v,t[7]=0,t[8]=l+g,t[9]=M-v,t[10]=1-(s+d),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function E(t,n){var r=new e(3),o=-n[0],a=-n[1],u=-n[2],i=n[3],c=n[4],f=n[5],s=n[6],h=n[7],l=o*o+a*a+u*u+i*i;return l>0?(r[0]=2*(c*i+h*o+f*u-s*a)/l,r[1]=2*(f*i+h*a+s*o-c*u)/l,r[2]=2*(s*i+h*u+c*a-f*o)/l):(r[0]=2*(c*i+h*o+f*u-s*a),r[1]=2*(f*i+h*a+s*o-c*u),r[2]=2*(s*i+h*u+c*a-f*o)),T(t,n,r),t}function B(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function I(t,n){var r=n[0],o=n[1],a=n[2],e=n[4],u=n[5],i=n[6],c=n[8],f=n[9],s=n[10];return t[0]=Math.hypot(r,o,a),t[1]=Math.hypot(e,u,i),t[2]=Math.hypot(c,f,s),t}function L(t,n){var r=new e(3);I(r,n);var o=1/r[0],a=1/r[1],u=1/r[2],i=n[0]*o,c=n[1]*a,f=n[2]*u,s=n[4]*o,h=n[5]*a,l=n[6]*u,d=n[8]*o,M=n[9]*a,b=n[10]*u,v=i+h+b,g=0;return v>0?(g=2*Math.sqrt(v+1),t[3]=.25*g,t[0]=(l-M)/g,t[1]=(d-f)/g,t[2]=(c-s)/g):i>h&&i>b?(g=2*Math.sqrt(1+i-h-b),t[3]=(l-M)/g,t[0]=.25*g,t[1]=(c+s)/g,t[2]=(d+f)/g):h>b?(g=2*Math.sqrt(1+h-i-b),t[3]=(d-f)/g,t[0]=(c+s)/g,t[1]=.25*g,t[2]=(l+M)/g):(g=2*Math.sqrt(1+b-i-h),t[3]=(c-s)/g,t[0]=(d+f)/g,t[1]=(l+M)/g,t[2]=.25*g),t}function q(t,n,r,o){var a=n[0],e=n[1],u=n[2],i=n[3],c=a+a,f=e+e,s=u+u,h=a*c,l=a*f,d=a*s,M=e*f,b=e*s,v=u*s,g=i*c,m=i*f,p=i*s,y=o[0],A=o[1],w=o[2];return t[0]=(1-(M+v))*y,t[1]=(l+p)*y,t[2]=(d-m)*y,t[3]=0,t[4]=(l-p)*A,t[5]=(1-(h+v))*A,t[6]=(b+g)*A,t[7]=0,t[8]=(d+m)*w,t[9]=(b-g)*w,t[10]=(1-(h+M))*w,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function O(t,n,r,o,a){var e=n[0],u=n[1],i=n[2],c=n[3],f=e+e,s=u+u,h=i+i,l=e*f,d=e*s,M=e*h,b=u*s,v=u*h,g=i*h,m=c*f,p=c*s,y=c*h,A=o[0],w=o[1],R=o[2],x=a[0],S=a[1],F=a[2],_=(1-(b+g))*A,P=(d+y)*A,T=(M-p)*A,E=(d-y)*w,B=(1-(l+g))*w,I=(v+m)*w,L=(M+p)*R,q=(v-m)*R,O=(1-(l+b))*R;return t[0]=_,t[1]=P,t[2]=T,t[3]=0,t[4]=E,t[5]=B,t[6]=I,t[7]=0,t[8]=L,t[9]=q,t[10]=O,t[11]=0,t[12]=r[0]+x-(_*x+E*S+L*F),t[13]=r[1]+S-(P*x+B*S+q*F),t[14]=r[2]+F-(T*x+I*S+O*F),t[15]=1,t}function j(t,n){var r=n[0],o=n[1],a=n[2],e=n[3],u=r+r,i=o+o,c=a+a,f=r*u,s=o*u,h=o*i,l=a*u,d=a*i,M=a*c,b=e*u,v=e*i,g=e*c;return t[0]=1-h-M,t[1]=s+g,t[2]=l-v,t[3]=0,t[4]=s-g,t[5]=1-f-M,t[6]=d+b,t[7]=0,t[8]=l+v,t[9]=d-b,t[10]=1-f-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function C(t,n,r,o,a,e,u){var i=1/(r-n),c=1/(a-o),f=1/(e-u);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*c,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(a+o)*c,t[10]=(u+e)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=u*e*2*f,t[15]=0,t}function D(t,n,r,o,a){var e,u=1/Math.tan(n/2);return t[0]=u/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=a&&a!==1/0?(e=1/(o-a),t[10]=(a+o)*e,t[14]=2*a*o*e):(t[10]=-1,t[14]=-2*o),t}function U(t,n,r,o){var a=Math.tan(n.upDegrees*Math.PI/180),e=Math.tan(n.downDegrees*Math.PI/180),u=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),c=2/(u+i),f=2/(a+e);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-(u-i)*c*.5,t[9]=(a-e)*f*.5,t[10]=o/(r-o),t[11]=-1,t[12]=0,t[13]=0,t[14]=o*r/(r-o),t[15]=0,t}function k(t,n,r,o,a,e,u){var i=1/(n-r),c=1/(o-a),f=1/(e-u);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(n+r)*i,t[13]=(a+o)*c,t[14]=(u+e)*f,t[15]=1,t}function Y(t,n,r,o){var e,u,i,c,f,s,l,d,M,b,v=n[0],g=n[1],m=n[2],p=o[0],y=o[1],A=o[2],w=r[0],R=r[1],x=r[2];return Math.abs(v-w)<a&&Math.abs(g-R)<a&&Math.abs(m-x)<a?h(t):(l=v-w,d=g-R,M=m-x,e=y*(M*=b=1/Math.hypot(l,d,M))-A*(d*=b),u=A*(l*=b)-p*M,i=p*d-y*l,(b=Math.hypot(e,u,i))?(e*=b=1/b,u*=b,i*=b):(e=0,u=0,i=0),c=d*i-M*u,f=M*e-l*i,s=l*u-d*e,(b=Math.hypot(c,f,s))?(c*=b=1/b,f*=b,s*=b):(c=0,f=0,s=0),t[0]=e,t[1]=c,t[2]=l,t[3]=0,t[4]=u,t[5]=f,t[6]=d,t[7]=0,t[8]=i,t[9]=s,t[10]=M,t[11]=0,t[12]=-(e*v+u*g+i*m),t[13]=-(c*v+f*g+s*m),t[14]=-(l*v+d*g+M*m),t[15]=1,t)}function z(t,n,r,o){var a=n[0],e=n[1],u=n[2],i=o[0],c=o[1],f=o[2],s=a-r[0],h=e-r[1],l=u-r[2],d=s*s+h*h+l*l;d>0&&(s*=d=1/Math.sqrt(d),h*=d,l*=d);var M=c*l-f*h,b=f*s-i*l,v=i*h-c*s;return(d=M*M+b*b+v*v)>0&&(M*=d=1/Math.sqrt(d),b*=d,v*=d),t[0]=M,t[1]=b,t[2]=v,t[3]=0,t[4]=h*v-l*b,t[5]=l*M-s*v,t[6]=s*b-h*M,t[7]=0,t[8]=s,t[9]=h,t[10]=l,t[11]=0,t[12]=a,t[13]=e,t[14]=u,t[15]=1,t}function H(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function V(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function N(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t}function W(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}function X(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t}function $(t,n,r,o){return t[0]=n[0]+r[0]*o,t[1]=n[1]+r[1]*o,t[2]=n[2]+r[2]*o,t[3]=n[3]+r[3]*o,t[4]=n[4]+r[4]*o,t[5]=n[5]+r[5]*o,t[6]=n[6]+r[6]*o,t[7]=n[7]+r[7]*o,t[8]=n[8]+r[8]*o,t[9]=n[9]+r[9]*o,t[10]=n[10]+r[10]*o,t[11]=n[11]+r[11]*o,t[12]=n[12]+r[12]*o,t[13]=n[13]+r[13]*o,t[14]=n[14]+r[14]*o,t[15]=n[15]+r[15]*o,t}function G(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function Q(t,n){var r=t[0],o=t[1],e=t[2],u=t[3],i=t[4],c=t[5],f=t[6],s=t[7],h=t[8],l=t[9],d=t[10],M=t[11],b=t[12],v=t[13],g=t[14],m=t[15],p=n[0],y=n[1],A=n[2],w=n[3],R=n[4],x=n[5],S=n[6],F=n[7],_=n[8],P=n[9],T=n[10],E=n[11],B=n[12],I=n[13],L=n[14],q=n[15];return Math.abs(r-p)<=a*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(o-y)<=a*Math.max(1,Math.abs(o),Math.abs(y))&&Math.abs(e-A)<=a*Math.max(1,Math.abs(e),Math.abs(A))&&Math.abs(u-w)<=a*Math.max(1,Math.abs(u),Math.abs(w))&&Math.abs(i-R)<=a*Math.max(1,Math.abs(i),Math.abs(R))&&Math.abs(c-x)<=a*Math.max(1,Math.abs(c),Math.abs(x))&&Math.abs(f-S)<=a*Math.max(1,Math.abs(f),Math.abs(S))&&Math.abs(s-F)<=a*Math.max(1,Math.abs(s),Math.abs(F))&&Math.abs(h-_)<=a*Math.max(1,Math.abs(h),Math.abs(_))&&Math.abs(l-P)<=a*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(d-T)<=a*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(M-E)<=a*Math.max(1,Math.abs(M),Math.abs(E))&&Math.abs(b-B)<=a*Math.max(1,Math.abs(b),Math.abs(B))&&Math.abs(v-I)<=a*Math.max(1,Math.abs(v),Math.abs(I))&&Math.abs(g-L)<=a*Math.max(1,Math.abs(g),Math.abs(L))&&Math.abs(m-q)<=a*Math.max(1,Math.abs(m),Math.abs(q))}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var Z=v,K=W;function J(t,n,r){let o=t[n]+r;return o<0&&(o+=1),o>1&&(o-=1),[...t.slice(0,n),o,...t.slice(n+1)]}function tt({gl:t,characters:n}){const{square:r}=n;return function(t,n){const r={};if(n.position){const o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n.position.data),t.STATIC_DRAW);const a=n.position.data.length/n.position.size;r.position={buf:o,count:a}}if(n.color){const o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n.color.data),t.STATIC_DRAW);const a=n.color.data.length/n.color.size;r.color={buf:o,count:a}}return{position:{...n.position,...r.position},color:{...n.color,...r.color}}}(t,function(t){const{x:n,y:r,width:o,height:a}=t;return{position:{size:2,data:[n,r,n+o,r,n,r+a,n+o,r+a]},color:{size:4,data:[1,0,0,0,1,.5,0,.8,1,1,0,.8,.5,1,0,.8]}}}(r))}function nt(t,n){n.compiled||(t.compileShader(n),n.compiled=!0)}function rt(t){const n=[];return n.push(function(t,n,r,o){const a=t.createShader(t.VERTEX_SHADER),e=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(a,r),t.shaderSource(e,o),!a||!e)return null;const u=t.createProgram();return t.attachShader(u,a),t.attachShader(u,e),{name:n,prog:u,vs:a,fs:e}}(t,"color","\nattribute vec4 pos0;\nattribute vec4 col0;\nuniform mat4 modelview;\nuniform mat4 projection;\nvarying lowp vec4 vfCol0;\n\nvoid main() {\n  gl_Position = projection * modelview * pos0;\n  gl_PointSize = 2.0;\n  vfCol0 = col0;\n}\n","\nvarying lowp vec4 vfCol0;\n\nvoid main() {\n  gl_FragColor = vfCol0;\n}\n")),function(t,n){for(const{vs:r,fs:o}of n)nt(t,r),nt(t,o);for(const{prog:r}of n)t.linkProgram(r);for(const{prog:r,vs:o,fs:a}of n)t.getProgramParameter(r,t.LINK_STATUS)||(console.error(`Link error: ${t.getProgramInfoLog(r)}`),console.error(`  vs log: ${t.getShaderInfoLog(o)}`),console.error(`  fs log: ${t.getShaderInfoLog(a)}`));for(const{vs:r,fs:o}of n)t.deleteShader(r),t.deleteShader(o);return n.map(({name:t,prog:n})=>({[t]:n}))}(t,n).reduce((t,n)=>({...t,...n}),{})}window.onload=function(){let t=function(){const t=function(){const t=document.getElementById("canvas").getContext("webgl2");return t.canvas.style.position="absolute",t.canvas.style.top="0",t.canvas.style.left="0",t}(),n=rt(t),r={width:window.innerWidth,height:window.innerHeight,color:[0,0,0]},o={square:{x:0,y:200,width:100,height:100}};return{gl:t,programs:n,background:r,characters:o}}(),n=0;window.requestAnimationFrame((function r(a){n=a,t=function(t,n){const r=function({gl:t}){return t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight,t}(t),o=t.programs,a=function({gl:t,background:n}){const r=t.canvas.width,o=t.canvas.height,a=Date.now();let e=n.color;const u=16&a?1:0,i=8&a?1:0,c=4&a?1:0,f=u+i+c+1e-14;return e=J(e,0,u/f*.001),e=J(e,1,i/f*.001),e=J(e,2,c/f*.001),{width:r,height:o,color:e}}(t),e=function({characters:t,background:n}){const{square:r}=t;return r.x=r.x+1,r.y=r.y+1,r.x>n.width&&(r.x-=n.width),r.y>n.height&&(r.y-=n.height),{square:r}}(t);return{gl:r,programs:o,background:a,characters:e}}(t),function(t){const{gl:n,programs:{color:r}}=t,a=n.createVertexArray();n.bindVertexArray(a),function({gl:t,background:n}){t.clearColor(...n.color,1),t.clear(t.COLOR_BUFFER_BIT)}(t);const e=tt(t);!function(t,n,r){const o=t.getAttribLocation(r,"pos0"),a=t.getAttribLocation(r,"col0");t.bindBuffer(t.ARRAY_BUFFER,n.position.buf),t.vertexAttribPointer(o,n.position.size,t.FLOAT,!1,0,0),t.enableVertexAttribArray(o),t.bindBuffer(t.ARRAY_BUFFER,n.color.buf),t.vertexAttribPointer(a,n.color.size,t.FLOAT,!1,0,0),t.enableVertexAttribArray(a)}(n,e,r);const u=function({background:t}){const n=o.create(),r=2/t.width,a=2/t.height;o.scale(n,n,[r,a,1]);const e=o.create(),u=-t.width/2,i=-t.height/2;return o.translate(n,n,[u,i,0]),{modelview:n,projection:e}}(t);n.useProgram(r),function(t,n,r){const{modelview:o,projection:a}=n,e=t.getUniformLocation(r,"modelview"),u=t.getUniformLocation(r,"projection");t.uniformMatrix4fv(e,!1,o),t.uniformMatrix4fv(u,!1,a)}(n,u,r),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.viewport(0,0,n.canvas.clientWidth,n.canvas.clientHeight),n.drawArrays(n.TRIANGLE_STRIP,0,e.position.count)}(t),window.requestAnimationFrame(r)}))}}});
//# sourceMappingURL=bundle.js.map