!function(t){var n={};function r(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,n,o){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(o,a,function(n){return t[n]}.bind(null,a));return o},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/",r(r.s=8)}({8:function(t,n,r){"use strict";r.r(n);var o={};function a(t,n,r){let o=t[n]+r;return o<0&&(o+=1),o>1&&(o-=1),[...t.slice(0,n),o,...t.slice(n+1)]}r.r(o),r.d(o,"create",(function(){return i})),r.d(o,"clone",(function(){return c})),r.d(o,"copy",(function(){return f})),r.d(o,"fromValues",(function(){return s})),r.d(o,"set",(function(){return h})),r.d(o,"identity",(function(){return l})),r.d(o,"transpose",(function(){return d})),r.d(o,"invert",(function(){return M})),r.d(o,"adjoint",(function(){return b})),r.d(o,"determinant",(function(){return g})),r.d(o,"multiply",(function(){return m})),r.d(o,"translate",(function(){return v})),r.d(o,"scale",(function(){return p})),r.d(o,"rotate",(function(){return y})),r.d(o,"rotateX",(function(){return A})),r.d(o,"rotateY",(function(){return w})),r.d(o,"rotateZ",(function(){return R})),r.d(o,"fromTranslation",(function(){return x})),r.d(o,"fromScaling",(function(){return S})),r.d(o,"fromRotation",(function(){return F})),r.d(o,"fromXRotation",(function(){return _})),r.d(o,"fromYRotation",(function(){return P})),r.d(o,"fromZRotation",(function(){return T})),r.d(o,"fromRotationTranslation",(function(){return C})),r.d(o,"fromQuat2",(function(){return E})),r.d(o,"getTranslation",(function(){return B})),r.d(o,"getScaling",(function(){return I})),r.d(o,"getRotation",(function(){return L})),r.d(o,"fromRotationTranslationScale",(function(){return q})),r.d(o,"fromRotationTranslationScaleOrigin",(function(){return O})),r.d(o,"fromQuat",(function(){return j})),r.d(o,"frustum",(function(){return D})),r.d(o,"perspective",(function(){return U})),r.d(o,"perspectiveFromFieldOfView",(function(){return k})),r.d(o,"ortho",(function(){return V})),r.d(o,"lookAt",(function(){return Y})),r.d(o,"targetTo",(function(){return H})),r.d(o,"str",(function(){return N})),r.d(o,"frob",(function(){return W})),r.d(o,"add",(function(){return X})),r.d(o,"subtract",(function(){return $})),r.d(o,"multiplyScalar",(function(){return G})),r.d(o,"multiplyScalarAndAdd",(function(){return K})),r.d(o,"exactEquals",(function(){return Q})),r.d(o,"equals",(function(){return Z})),r.d(o,"mul",(function(){return z})),r.d(o,"sub",(function(){return J}));var e=1e-6,u="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;Math.PI;function i(){var t=new u(16);return u!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function c(t){var n=new u(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function f(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function s(t,n,r,o,a,e,i,c,f,s,h,l,d,M,b,g){var m=new u(16);return m[0]=t,m[1]=n,m[2]=r,m[3]=o,m[4]=a,m[5]=e,m[6]=i,m[7]=c,m[8]=f,m[9]=s,m[10]=h,m[11]=l,m[12]=d,m[13]=M,m[14]=b,m[15]=g,m}function h(t,n,r,o,a,e,u,i,c,f,s,h,l,d,M,b,g){return t[0]=n,t[1]=r,t[2]=o,t[3]=a,t[4]=e,t[5]=u,t[6]=i,t[7]=c,t[8]=f,t[9]=s,t[10]=h,t[11]=l,t[12]=d,t[13]=M,t[14]=b,t[15]=g,t}function l(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d(t,n){if(t===n){var r=n[1],o=n[2],a=n[3],e=n[6],u=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=o,t[9]=e,t[11]=n[14],t[12]=a,t[13]=u,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function M(t,n){var r=n[0],o=n[1],a=n[2],e=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],h=n[9],l=n[10],d=n[11],M=n[12],b=n[13],g=n[14],m=n[15],v=r*i-o*u,p=r*c-a*u,y=r*f-e*u,A=o*c-a*i,w=o*f-e*i,R=a*f-e*c,x=s*b-h*M,S=s*g-l*M,F=s*m-d*M,_=h*g-l*b,P=h*m-d*b,T=l*m-d*g,C=v*T-p*P+y*_+A*F-w*S+R*x;return C?(C=1/C,t[0]=(i*T-c*P+f*_)*C,t[1]=(a*P-o*T-e*_)*C,t[2]=(b*R-g*w+m*A)*C,t[3]=(l*w-h*R-d*A)*C,t[4]=(c*F-u*T-f*S)*C,t[5]=(r*T-a*F+e*S)*C,t[6]=(g*y-M*R-m*p)*C,t[7]=(s*R-l*y+d*p)*C,t[8]=(u*P-i*F+f*x)*C,t[9]=(o*F-r*P-e*x)*C,t[10]=(M*w-b*y+m*v)*C,t[11]=(h*y-s*w-d*v)*C,t[12]=(i*S-u*_-c*x)*C,t[13]=(r*_-o*S+a*x)*C,t[14]=(b*p-M*A-g*v)*C,t[15]=(s*A-h*p+l*v)*C,t):null}function b(t,n){var r=n[0],o=n[1],a=n[2],e=n[3],u=n[4],i=n[5],c=n[6],f=n[7],s=n[8],h=n[9],l=n[10],d=n[11],M=n[12],b=n[13],g=n[14],m=n[15];return t[0]=i*(l*m-d*g)-h*(c*m-f*g)+b*(c*d-f*l),t[1]=-(o*(l*m-d*g)-h*(a*m-e*g)+b*(a*d-e*l)),t[2]=o*(c*m-f*g)-i*(a*m-e*g)+b*(a*f-e*c),t[3]=-(o*(c*d-f*l)-i*(a*d-e*l)+h*(a*f-e*c)),t[4]=-(u*(l*m-d*g)-s*(c*m-f*g)+M*(c*d-f*l)),t[5]=r*(l*m-d*g)-s*(a*m-e*g)+M*(a*d-e*l),t[6]=-(r*(c*m-f*g)-u*(a*m-e*g)+M*(a*f-e*c)),t[7]=r*(c*d-f*l)-u*(a*d-e*l)+s*(a*f-e*c),t[8]=u*(h*m-d*b)-s*(i*m-f*b)+M*(i*d-f*h),t[9]=-(r*(h*m-d*b)-s*(o*m-e*b)+M*(o*d-e*h)),t[10]=r*(i*m-f*b)-u*(o*m-e*b)+M*(o*f-e*i),t[11]=-(r*(i*d-f*h)-u*(o*d-e*h)+s*(o*f-e*i)),t[12]=-(u*(h*g-l*b)-s*(i*g-c*b)+M*(i*l-c*h)),t[13]=r*(h*g-l*b)-s*(o*g-a*b)+M*(o*l-a*h),t[14]=-(r*(i*g-c*b)-u*(o*g-a*b)+M*(o*c-a*i)),t[15]=r*(i*l-c*h)-u*(o*l-a*h)+s*(o*c-a*i),t}function g(t){var n=t[0],r=t[1],o=t[2],a=t[3],e=t[4],u=t[5],i=t[6],c=t[7],f=t[8],s=t[9],h=t[10],l=t[11],d=t[12],M=t[13],b=t[14],g=t[15];return(n*u-r*e)*(h*g-l*b)-(n*i-o*e)*(s*g-l*M)+(n*c-a*e)*(s*b-h*M)+(r*i-o*u)*(f*g-l*d)-(r*c-a*u)*(f*b-h*d)+(o*c-a*i)*(f*M-s*d)}function m(t,n,r){var o=n[0],a=n[1],e=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],l=n[9],d=n[10],M=n[11],b=n[12],g=n[13],m=n[14],v=n[15],p=r[0],y=r[1],A=r[2],w=r[3];return t[0]=p*o+y*i+A*h+w*b,t[1]=p*a+y*c+A*l+w*g,t[2]=p*e+y*f+A*d+w*m,t[3]=p*u+y*s+A*M+w*v,p=r[4],y=r[5],A=r[6],w=r[7],t[4]=p*o+y*i+A*h+w*b,t[5]=p*a+y*c+A*l+w*g,t[6]=p*e+y*f+A*d+w*m,t[7]=p*u+y*s+A*M+w*v,p=r[8],y=r[9],A=r[10],w=r[11],t[8]=p*o+y*i+A*h+w*b,t[9]=p*a+y*c+A*l+w*g,t[10]=p*e+y*f+A*d+w*m,t[11]=p*u+y*s+A*M+w*v,p=r[12],y=r[13],A=r[14],w=r[15],t[12]=p*o+y*i+A*h+w*b,t[13]=p*a+y*c+A*l+w*g,t[14]=p*e+y*f+A*d+w*m,t[15]=p*u+y*s+A*M+w*v,t}function v(t,n,r){var o,a,e,u,i,c,f,s,h,l,d,M,b=r[0],g=r[1],m=r[2];return n===t?(t[12]=n[0]*b+n[4]*g+n[8]*m+n[12],t[13]=n[1]*b+n[5]*g+n[9]*m+n[13],t[14]=n[2]*b+n[6]*g+n[10]*m+n[14],t[15]=n[3]*b+n[7]*g+n[11]*m+n[15]):(o=n[0],a=n[1],e=n[2],u=n[3],i=n[4],c=n[5],f=n[6],s=n[7],h=n[8],l=n[9],d=n[10],M=n[11],t[0]=o,t[1]=a,t[2]=e,t[3]=u,t[4]=i,t[5]=c,t[6]=f,t[7]=s,t[8]=h,t[9]=l,t[10]=d,t[11]=M,t[12]=o*b+i*g+h*m+n[12],t[13]=a*b+c*g+l*m+n[13],t[14]=e*b+f*g+d*m+n[14],t[15]=u*b+s*g+M*m+n[15]),t}function p(t,n,r){var o=r[0],a=r[1],e=r[2];return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=n[3]*o,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*e,t[9]=n[9]*e,t[10]=n[10]*e,t[11]=n[11]*e,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function y(t,n,r,o){var a,u,i,c,f,s,h,l,d,M,b,g,m,v,p,y,A,w,R,x,S,F,_,P,T=o[0],C=o[1],E=o[2],B=Math.hypot(T,C,E);return B<e?null:(T*=B=1/B,C*=B,E*=B,a=Math.sin(r),i=1-(u=Math.cos(r)),c=n[0],f=n[1],s=n[2],h=n[3],l=n[4],d=n[5],M=n[6],b=n[7],g=n[8],m=n[9],v=n[10],p=n[11],y=T*T*i+u,A=C*T*i+E*a,w=E*T*i-C*a,R=T*C*i-E*a,x=C*C*i+u,S=E*C*i+T*a,F=T*E*i+C*a,_=C*E*i-T*a,P=E*E*i+u,t[0]=c*y+l*A+g*w,t[1]=f*y+d*A+m*w,t[2]=s*y+M*A+v*w,t[3]=h*y+b*A+p*w,t[4]=c*R+l*x+g*S,t[5]=f*R+d*x+m*S,t[6]=s*R+M*x+v*S,t[7]=h*R+b*x+p*S,t[8]=c*F+l*_+g*P,t[9]=f*F+d*_+m*P,t[10]=s*F+M*_+v*P,t[11]=h*F+b*_+p*P,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function A(t,n,r){var o=Math.sin(r),a=Math.cos(r),e=n[4],u=n[5],i=n[6],c=n[7],f=n[8],s=n[9],h=n[10],l=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=e*a+f*o,t[5]=u*a+s*o,t[6]=i*a+h*o,t[7]=c*a+l*o,t[8]=f*a-e*o,t[9]=s*a-u*o,t[10]=h*a-i*o,t[11]=l*a-c*o,t}function w(t,n,r){var o=Math.sin(r),a=Math.cos(r),e=n[0],u=n[1],i=n[2],c=n[3],f=n[8],s=n[9],h=n[10],l=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*a-f*o,t[1]=u*a-s*o,t[2]=i*a-h*o,t[3]=c*a-l*o,t[8]=e*o+f*a,t[9]=u*o+s*a,t[10]=i*o+h*a,t[11]=c*o+l*a,t}function R(t,n,r){var o=Math.sin(r),a=Math.cos(r),e=n[0],u=n[1],i=n[2],c=n[3],f=n[4],s=n[5],h=n[6],l=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*a+f*o,t[1]=u*a+s*o,t[2]=i*a+h*o,t[3]=c*a+l*o,t[4]=f*a-e*o,t[5]=s*a-u*o,t[6]=h*a-i*o,t[7]=l*a-c*o,t}function x(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function S(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function F(t,n,r){var o,a,u,i=r[0],c=r[1],f=r[2],s=Math.hypot(i,c,f);return s<e?null:(i*=s=1/s,c*=s,f*=s,o=Math.sin(n),u=1-(a=Math.cos(n)),t[0]=i*i*u+a,t[1]=c*i*u+f*o,t[2]=f*i*u-c*o,t[3]=0,t[4]=i*c*u-f*o,t[5]=c*c*u+a,t[6]=f*c*u+i*o,t[7]=0,t[8]=i*f*u+c*o,t[9]=c*f*u-i*o,t[10]=f*f*u+a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function _(t,n){var r=Math.sin(n),o=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function P(t,n){var r=Math.sin(n),o=Math.cos(n);return t[0]=o,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function T(t,n){var r=Math.sin(n),o=Math.cos(n);return t[0]=o,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function C(t,n,r){var o=n[0],a=n[1],e=n[2],u=n[3],i=o+o,c=a+a,f=e+e,s=o*i,h=o*c,l=o*f,d=a*c,M=a*f,b=e*f,g=u*i,m=u*c,v=u*f;return t[0]=1-(d+b),t[1]=h+v,t[2]=l-m,t[3]=0,t[4]=h-v,t[5]=1-(s+b),t[6]=M+g,t[7]=0,t[8]=l+m,t[9]=M-g,t[10]=1-(s+d),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function E(t,n){var r=new u(3),o=-n[0],a=-n[1],e=-n[2],i=n[3],c=n[4],f=n[5],s=n[6],h=n[7],l=o*o+a*a+e*e+i*i;return l>0?(r[0]=2*(c*i+h*o+f*e-s*a)/l,r[1]=2*(f*i+h*a+s*o-c*e)/l,r[2]=2*(s*i+h*e+c*a-f*o)/l):(r[0]=2*(c*i+h*o+f*e-s*a),r[1]=2*(f*i+h*a+s*o-c*e),r[2]=2*(s*i+h*e+c*a-f*o)),C(t,n,r),t}function B(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function I(t,n){var r=n[0],o=n[1],a=n[2],e=n[4],u=n[5],i=n[6],c=n[8],f=n[9],s=n[10];return t[0]=Math.hypot(r,o,a),t[1]=Math.hypot(e,u,i),t[2]=Math.hypot(c,f,s),t}function L(t,n){var r=new u(3);I(r,n);var o=1/r[0],a=1/r[1],e=1/r[2],i=n[0]*o,c=n[1]*a,f=n[2]*e,s=n[4]*o,h=n[5]*a,l=n[6]*e,d=n[8]*o,M=n[9]*a,b=n[10]*e,g=i+h+b,m=0;return g>0?(m=2*Math.sqrt(g+1),t[3]=.25*m,t[0]=(l-M)/m,t[1]=(d-f)/m,t[2]=(c-s)/m):i>h&&i>b?(m=2*Math.sqrt(1+i-h-b),t[3]=(l-M)/m,t[0]=.25*m,t[1]=(c+s)/m,t[2]=(d+f)/m):h>b?(m=2*Math.sqrt(1+h-i-b),t[3]=(d-f)/m,t[0]=(c+s)/m,t[1]=.25*m,t[2]=(l+M)/m):(m=2*Math.sqrt(1+b-i-h),t[3]=(c-s)/m,t[0]=(d+f)/m,t[1]=(l+M)/m,t[2]=.25*m),t}function q(t,n,r,o){var a=n[0],e=n[1],u=n[2],i=n[3],c=a+a,f=e+e,s=u+u,h=a*c,l=a*f,d=a*s,M=e*f,b=e*s,g=u*s,m=i*c,v=i*f,p=i*s,y=o[0],A=o[1],w=o[2];return t[0]=(1-(M+g))*y,t[1]=(l+p)*y,t[2]=(d-v)*y,t[3]=0,t[4]=(l-p)*A,t[5]=(1-(h+g))*A,t[6]=(b+m)*A,t[7]=0,t[8]=(d+v)*w,t[9]=(b-m)*w,t[10]=(1-(h+M))*w,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function O(t,n,r,o,a){var e=n[0],u=n[1],i=n[2],c=n[3],f=e+e,s=u+u,h=i+i,l=e*f,d=e*s,M=e*h,b=u*s,g=u*h,m=i*h,v=c*f,p=c*s,y=c*h,A=o[0],w=o[1],R=o[2],x=a[0],S=a[1],F=a[2],_=(1-(b+m))*A,P=(d+y)*A,T=(M-p)*A,C=(d-y)*w,E=(1-(l+m))*w,B=(g+v)*w,I=(M+p)*R,L=(g-v)*R,q=(1-(l+b))*R;return t[0]=_,t[1]=P,t[2]=T,t[3]=0,t[4]=C,t[5]=E,t[6]=B,t[7]=0,t[8]=I,t[9]=L,t[10]=q,t[11]=0,t[12]=r[0]+x-(_*x+C*S+I*F),t[13]=r[1]+S-(P*x+E*S+L*F),t[14]=r[2]+F-(T*x+B*S+q*F),t[15]=1,t}function j(t,n){var r=n[0],o=n[1],a=n[2],e=n[3],u=r+r,i=o+o,c=a+a,f=r*u,s=o*u,h=o*i,l=a*u,d=a*i,M=a*c,b=e*u,g=e*i,m=e*c;return t[0]=1-h-M,t[1]=s+m,t[2]=l-g,t[3]=0,t[4]=s-m,t[5]=1-f-M,t[6]=d+b,t[7]=0,t[8]=l+g,t[9]=d-b,t[10]=1-f-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function D(t,n,r,o,a,e,u){var i=1/(r-n),c=1/(a-o),f=1/(e-u);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*c,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(a+o)*c,t[10]=(u+e)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=u*e*2*f,t[15]=0,t}function U(t,n,r,o,a){var e,u=1/Math.tan(n/2);return t[0]=u/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=a&&a!==1/0?(e=1/(o-a),t[10]=(a+o)*e,t[14]=2*a*o*e):(t[10]=-1,t[14]=-2*o),t}function k(t,n,r,o){var a=Math.tan(n.upDegrees*Math.PI/180),e=Math.tan(n.downDegrees*Math.PI/180),u=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),c=2/(u+i),f=2/(a+e);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-(u-i)*c*.5,t[9]=(a-e)*f*.5,t[10]=o/(r-o),t[11]=-1,t[12]=0,t[13]=0,t[14]=o*r/(r-o),t[15]=0,t}function V(t,n,r,o,a,e,u){var i=1/(n-r),c=1/(o-a),f=1/(e-u);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(n+r)*i,t[13]=(a+o)*c,t[14]=(u+e)*f,t[15]=1,t}function Y(t,n,r,o){var a,u,i,c,f,s,h,d,M,b,g=n[0],m=n[1],v=n[2],p=o[0],y=o[1],A=o[2],w=r[0],R=r[1],x=r[2];return Math.abs(g-w)<e&&Math.abs(m-R)<e&&Math.abs(v-x)<e?l(t):(h=g-w,d=m-R,M=v-x,a=y*(M*=b=1/Math.hypot(h,d,M))-A*(d*=b),u=A*(h*=b)-p*M,i=p*d-y*h,(b=Math.hypot(a,u,i))?(a*=b=1/b,u*=b,i*=b):(a=0,u=0,i=0),c=d*i-M*u,f=M*a-h*i,s=h*u-d*a,(b=Math.hypot(c,f,s))?(c*=b=1/b,f*=b,s*=b):(c=0,f=0,s=0),t[0]=a,t[1]=c,t[2]=h,t[3]=0,t[4]=u,t[5]=f,t[6]=d,t[7]=0,t[8]=i,t[9]=s,t[10]=M,t[11]=0,t[12]=-(a*g+u*m+i*v),t[13]=-(c*g+f*m+s*v),t[14]=-(h*g+d*m+M*v),t[15]=1,t)}function H(t,n,r,o){var a=n[0],e=n[1],u=n[2],i=o[0],c=o[1],f=o[2],s=a-r[0],h=e-r[1],l=u-r[2],d=s*s+h*h+l*l;d>0&&(s*=d=1/Math.sqrt(d),h*=d,l*=d);var M=c*l-f*h,b=f*s-i*l,g=i*h-c*s;return(d=M*M+b*b+g*g)>0&&(M*=d=1/Math.sqrt(d),b*=d,g*=d),t[0]=M,t[1]=b,t[2]=g,t[3]=0,t[4]=h*g-l*b,t[5]=l*M-s*g,t[6]=s*b-h*M,t[7]=0,t[8]=s,t[9]=h,t[10]=l,t[11]=0,t[12]=a,t[13]=e,t[14]=u,t[15]=1,t}function N(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function W(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function X(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t}function $(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}function G(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t}function K(t,n,r,o){return t[0]=n[0]+r[0]*o,t[1]=n[1]+r[1]*o,t[2]=n[2]+r[2]*o,t[3]=n[3]+r[3]*o,t[4]=n[4]+r[4]*o,t[5]=n[5]+r[5]*o,t[6]=n[6]+r[6]*o,t[7]=n[7]+r[7]*o,t[8]=n[8]+r[8]*o,t[9]=n[9]+r[9]*o,t[10]=n[10]+r[10]*o,t[11]=n[11]+r[11]*o,t[12]=n[12]+r[12]*o,t[13]=n[13]+r[13]*o,t[14]=n[14]+r[14]*o,t[15]=n[15]+r[15]*o,t}function Q(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function Z(t,n){var r=t[0],o=t[1],a=t[2],u=t[3],i=t[4],c=t[5],f=t[6],s=t[7],h=t[8],l=t[9],d=t[10],M=t[11],b=t[12],g=t[13],m=t[14],v=t[15],p=n[0],y=n[1],A=n[2],w=n[3],R=n[4],x=n[5],S=n[6],F=n[7],_=n[8],P=n[9],T=n[10],C=n[11],E=n[12],B=n[13],I=n[14],L=n[15];return Math.abs(r-p)<=e*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(o-y)<=e*Math.max(1,Math.abs(o),Math.abs(y))&&Math.abs(a-A)<=e*Math.max(1,Math.abs(a),Math.abs(A))&&Math.abs(u-w)<=e*Math.max(1,Math.abs(u),Math.abs(w))&&Math.abs(i-R)<=e*Math.max(1,Math.abs(i),Math.abs(R))&&Math.abs(c-x)<=e*Math.max(1,Math.abs(c),Math.abs(x))&&Math.abs(f-S)<=e*Math.max(1,Math.abs(f),Math.abs(S))&&Math.abs(s-F)<=e*Math.max(1,Math.abs(s),Math.abs(F))&&Math.abs(h-_)<=e*Math.max(1,Math.abs(h),Math.abs(_))&&Math.abs(l-P)<=e*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(d-T)<=e*Math.max(1,Math.abs(d),Math.abs(T))&&Math.abs(M-C)<=e*Math.max(1,Math.abs(M),Math.abs(C))&&Math.abs(b-E)<=e*Math.max(1,Math.abs(b),Math.abs(E))&&Math.abs(g-B)<=e*Math.max(1,Math.abs(g),Math.abs(B))&&Math.abs(m-I)<=e*Math.max(1,Math.abs(m),Math.abs(I))&&Math.abs(v-L)<=e*Math.max(1,Math.abs(v),Math.abs(L))}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var z=m,J=$;function tt(t,n){n.compiled||(t.compileShader(n),n.compiled=!0)}function nt(t){const n=function(t,n,r){const o=t.createShader(t.VERTEX_SHADER),a=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(o,n),t.shaderSource(a,r),!o||!a)return null;const e=t.createProgram();return t.attachShader(e,o),t.attachShader(e,a),{prog:e,vs:o,fs:a}}(t,"\nattribute vec4 pos0;\nattribute vec4 col0;\nuniform mat4 modelView;\nuniform mat4 projection;\nvarying lowp vec4 vfCol0;\n\nvoid main() {\n  gl_Position = projection * modelView * pos0;\n  gl_PointSize = 2.0;\n  vfCol0 = col0;\n}\n","\nvarying lowp vec4 vfCol0;\n\nvoid main() {\n  gl_FragColor = vfCol0;\n}\n"),[r]=function(t,n){for(const{vs:r,fs:o}of n)tt(t,r),tt(t,o);for(const{prog:r}of n)t.linkProgram(r);for(const{prog:r,vs:o,fs:a}of n)t.getProgramParameter(r,t.LINK_STATUS)||(console.error(`Link error: ${t.getProgramInfoLog(r)}`),console.error(`  vs log: ${t.getShaderInfoLog(o)}`),console.error(`  fs log: ${t.getShaderInfoLog(a)}`));for(const{vs:r,fs:o}of n)t.deleteShader(r),t.deleteShader(o);return n.map(({prog:t})=>t)}(t,[n]);return{program:r,square:{x:0,y:200,width:100,height:100}}}function rt({gl:t,characters:n,background:r}){const{program:a,square:e}=n,u={position:t.getAttribLocation(a,"pos0"),color:t.getAttribLocation(a,"col0")},i={projection:t.getUniformLocation(a,"projection"),modelView:t.getUniformLocation(a,"modelView")},c=function(t,n){const{x:r,y:o,width:a,height:e}=n,u=r+a,i=o+e,c=[r,o,u,o,r,i,u,i],f=[1,0,0,0,1,.5,0,.8,1,1,0,.8,.5,1,0,.8],s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,new Float32Array(c),t.STATIC_DRAW);const h=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,h),t.bufferData(t.ARRAY_BUFFER,new Float32Array(f),t.STATIC_DRAW),{positions:s,positionComponents:2,positionCount:c.length/2,colors:h,colorComponents:4,colorCount:f.length/4}}(t,e),f=o.create(),s=o.create(),h=2/r.width,l=2/r.height,d=-r.width/2,M=-r.height/2;o.scale(s,s,[h,l,1]),o.translate(s,s,[d,M,0]),t.bindBuffer(t.ARRAY_BUFFER,c.positions),t.vertexAttribPointer(u.position,c.positionComponents,t.FLOAT,!1,0,0),t.enableVertexAttribArray(u.position),t.bindBuffer(t.ARRAY_BUFFER,c.colors),t.vertexAttribPointer(u.color,c.colorComponents,t.FLOAT,!1,0,0),t.enableVertexAttribArray(u.color),t.useProgram(a),t.uniformMatrix4fv(i.projection,!1,f),t.uniformMatrix4fv(i.modelView,!1,s),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.viewport(0,0,t.canvas.clientWidth,t.canvas.clientHeight),t.drawArrays(t.TRIANGLE_STRIP,0,c.positionCount)}window.onload=function(){console.log("SPACE JUNK");let t=function(){const t=function(){const t=document.getElementById("canvas");return t.style.position="absolute",t.style.top="0",t.style.left="0",t}(),n=t.getContext("webgl2"),r={width:window.innerWidth,height:window.innerHeight,color:[0,0,0]},o=nt(n);return{canvas:t,gl:n,background:r,characters:o}}();window.requestAnimationFrame((function n(r){t=function(t){const n=function({canvas:t}){return t}(t),r=t.gl,o=function({background:t}){const n=window.innerWidth,r=window.innerHeight,o=Date.now();let e=t.color;const u=16&o?1:0,i=8&o?1:0,c=4&o?1:0,f=u+i+c+1e-14;return e=a(e,0,u/f*.001),e=a(e,1,i/f*.001),e=a(e,2,c/f*.001),{width:n,height:r,color:e}}(t),e=function({characters:t,background:n}){const{program:r,square:o}=t;return o.x=o.x+1,o.y=o.y+1,o.x>n.width&&(o.x-=n.width),o.y>n.height&&(o.y-=n.height),{program:r,square:o}}(t);return{canvas:n,gl:r,background:o,characters:e}}(t),function(t){(function({canvas:t,background:n}){t.width=n.width,t.height=n.height})(t),function({gl:t,background:n}){t.clearColor(...n.color,1),t.clear(t.COLOR_BUFFER_BIT)}(t),rt(t)}(t),window.requestAnimationFrame(n)}))}}});
//# sourceMappingURL=bundle.js.map