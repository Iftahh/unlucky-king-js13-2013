(function(){function Ga(a,x,g,b,c,m,e,h,n,y,q){X=g;Y=b;a&&-1E7<a.z&&(Z=a.z,fa(),d.save(),F(1,0,0,0.3,SX+m-4,SY+2*m-1),d.beginPath(),d.arc(0,0,m,0,$),d.fillStyle="rgba(15,15,15,0.5)",d.fill());Z=c;fa();F(1,0,0,1,SX+m,SY+m);d.lineWidth=1;d.strokeStyle="#111";d.fillStyle=e;d.beginPath();d.arc(0,0,m,0,$);d.fill();d.scale(x?1:-1,1);d.fillStyle="#222";d.fillText(h,-15,1);d.fillText(n,y,q);d.stroke();d.restore()}function Ya(){left=z[37];right=z[39];b.a=left?b.a-0.15:right?b.a+0.15:0.9*b.a;var a=2.5+z[32];
ga(b.a)>a&&(left?b.a=Za(0.95*b.a,-a):right&&(b.a=aa(0.95*b.a,a)));b.x+=b.a;b.d-=0.2;b.z+=b.d;H=n;0<b.d&&(a=Ha(b.x+u,b.y+u,b.z+u,A,Ia))&&(Ja.play(),b.z-=b.d,b.d*=-0.8);-2E3>b.z&&ha();b.floor=ba(b.x+u,b.y+u,b.z+u,A);b.z<=b.floor.z&&(-2>b.d||z[32]?$a.play():-1>b.d&&ab.play(),b.z=b.floor.z,b.d=z[32]?aa(ga(b.d/2),6):aa(ga(b.d/2),ga(b.a)/1.5));if(a=Ha(b.x+u,b.y+u,b.z+u,A,0<b.a?Ka:La))b.x-=b.a,Ja.play(),b.a=10<b.z-b.floor.z?-0.2*b.a:-0.8*b.a;J(b);if(left||right)ia=b.b-K*(0.5-b.a/20);M=b.c-0.7*p}function ha(){b=
{x:IPX,y:IPY,z:IPZ,a:0,V:0,d:0,e:n};J(b);ia=b.b-0.5*K;M=b.c-0.7*p}function bb(a){H=r;Ga(a.floor,0>a.a,a.x,a.y,a.z,N,oa,"\u25d5` \u141f\u25d5 \u30ce","\u2054",-8,9)}function cb(a){a.x+=a.a;a.d-=0.2;a.z+=a.d;J(a);if(a.b+r>=b.b&&a.b<b.b+n&&a.c+r>=b.c&&a.c<b.c+n)180<t-ja&&(v=0),O[v++].play(),v%=O.length,ja=t,ha();else{var x=ba(a.x+P,a.y+P,a.z+P,N);x!=a.floor?(a.x-=a.a,a.a*=-1):a.z<=x.z&&(a.z=x.z,a.d=2);J(a)}}function Ma(a,b){var g={x:a,y:IPY,z:b,e:r,a:-1,d:0,j:r,k:r,o:0,l:Na,h:bb,update:cb};J(g);g.floor=
ba(g.x+P,g.y+P,g.z+P,N);DEBUG&&!g.floor&&alert("Enemy must be above floor");Q.push(g)}function ua(a){a.w.h(0,0,a.j,a.k);Oa(a)}function ca(a){var b=a.j,g=a.k,E=a.t,c=a.K,m=a.J;d.fillStyle=a.s;d.fillRect(0,0,b,g);d.strokeStyle=E;E=0;d.lineWidth=m/5;y0=0;y1=m;for(d.beginPath();y1<=g;){E++;d.moveTo(0,y1);d.lineTo(b,y1);for(x0=E&1?c:c/2;x0<b;)d.moveTo(x0,y0),d.lineTo(x0,y1),x0+=c;y0=y1;y1+=m}d.stroke();Oa(a)}function db(a,b){if(b){if(a.x+a.g>=va)return}else if(a.x+a.g<va)return;wa(a);F(0.5,-0.5,0,1,a.b+
a.g,a.c);return 1}function Na(a,x){if(x){if(a.y<=b.y)return}else{if(a.y>b.y)return;wa(a)}F(1,0,0,1,a.b,a.c);return 1}function eb(a,x){if(x){if(a.z-a.e>=b.z)return}else if(a.z-a.e<b.z)return;wa(a);F(1,0,-0.5,0.5,a.b+0.4+0.5*a.f,a.c-0.5*a.f);return 1}function wa(a){d.globalAlpha=a.b-10<b.b+n&&a.b+10+a.g+a.f/2>b.b&&a.y+a.f<IPY&&a.c-10<b.c+n&&a.c+10+a.e+a.f/2>b.c?0.3:1}function Oa(a){var b=a.o,g=a.j,E=a.k;b&15&&(d.strokeStyle=a.I,d.beginPath(),b&1&&(d.moveTo(0,0),d.lineTo(g,0)),b&2&&(d.moveTo(g,0),d.lineTo(g,
E)),b&4&&(d.moveTo(g,E),d.lineTo(0,E)),b&8&&(d.moveTo(0,E),d.lineTo(0,0)),d.stroke())}function ba(a,b,g,d){var c={z:-1E10};xa(Pa,function(m){m.z>c.z&&g+d>m.z&&a+d>m.x&&a<m.x+m.g&&b+d>m.y&&b<m.y+m.f&&(c=m)});return c}function Ha(a,b,g,d,c){return fb(c,function(c){if(a+d>c.x&&a<c.x+c.g&&b+d>c.y&&b<c.y+c.f&&g+d>c.z&&g<c.z+c.e)return c})}function h(){fa();var a={x:X,y:Y,z:Z,R:B,I:BC,K:BW,J:BH||0.3*BW,b:SX,c:SY,g:W,e:H,f:e};0<W&&0<H&&Q.push(ya(a,{s:gb,t:hb,w:ib,j:W,k:H,o:B,l:Na,h:DR[0]||DR}));0<e&&0<H&&
Q.push(ya(a,{s:jb,t:kb,w:A,j:e,k:H,o:B>>4,l:db,h:DR[1]||DR}));0<W&&0<e&&Q.push(ya(a,{s:lb,t:mb,w:nb,j:W,k:e,o:B>>8,l:eb,h:DR[2]||DR}));Y+e<IPY||Y>IPY||(16<e&&16<H&&(Ka.push({y:Y,z:Z,f:e,e:H,g:0,x:X}),La.push({y:Y,z:Z,f:e,e:H,g:0,x:X+W})),16<e&&16<W&&(Pa.push({x:X,y:Y,g:W,f:e,e:0,z:Z+H}),Ia.push({x:X,y:Y,g:W,f:e,e:0,z:Z})))}function J(a){a.b=a.x+a.y/2;a.c=p-a.y/2-a.e-a.z}function fa(){SX=X+Y/2;SY=p-Y/2-H-Z}function za(a){var b=d.createPattern(ka(3*e,3*e,function(b){b.drawImage(a,0,0,3*e,3*e)}),"repeat");
b.h=function(a,b,c,x){d.fillStyle=this;d.fillRect(a,b,c,x)};return b}function Aa(a,b,g,d,c,e,h,n,u){b=a.createImageData(b,g);g=b.data;for(var y=0;y<g.length;y+=4){var q=g,p=y,ob=d+la()*c,v=e+la()*h,f=n+la()*u;q[p]=ob;q[p+1]=v;q[p+2]=f;q[p+3]=255}a.putImageData(b,0,0)}function ka(a,b,g){var c=C.createElement("canvas");c.width=a;c.height=b;g(c.getContext("2d"),c);c.h=function(a,b,g,c){d.drawImage(this,a,b,g,c)};return c}function c(a,b){X=a;Z=b;Y=IPY;H=10;fa();R.push({x:SX,y:SY,F:0+100*la()<<0})}function pb(){var a,
c;d.save();d.strokeStyle="#aa6";d.shadowBlur=30;d.lineWidth=2;d.shadowColor="#ff2";d.shadowOffsetX=0;for(c=d.shadowOffsetY=0;c<R.length;c++)if(a=R[c],a.x>=b.b&&a.x<b.b+n&&a.y>=b.c&&a.y<b.c+n)180<t-ja&&(v=0),R.splice(c,1),c--,O[v++].play(),v%=O.length,ja=t;else{d.beginPath();L=Ba.length;var g=(a.F+t)%L;F(Ba[g],0,0,1,a.x,a.y);d.fillStyle="#fe4";d.arc(0,0,10,0,$);d.fill();d.fillStyle="#aa6";g>L/2?d.fillText("1",-3,3.5):d.fillText("\u265b",-5,3.5);d.stroke()}d.restore()}function G(a){Ca.m.N(a);var b=
Ca.P();a=new Uint8Array(4*((b+1)/2|0)+44);var b=2*Ca.O(new Uint16Array(a.buffer,44),b),c=new Uint32Array(a.buffer,0,44);c[0]=1179011410;c[1]=b+36;c[2]=1163280727;c[3]=544501094;c[4]=16;c[5]=65537;c[6]=44100;c[7]=88200;c[8]=1048578;c[9]=1635017060;c[10]=b;for(var b=b+44,c=0,d="data:audio/wav;base64,";c<b;c+=3)var e=a[c]<<16|a[c+1]<<8|a[c+2],d=d+("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>18]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>12&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e>>
6&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e&63]);c-=b;a=new Audio;a.src=d.slice(0,d.length-c)+"==".slice(0,c);return a}function Qa(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d];for(k in b)c[k]=b[k];return c}function ya(a,b){var c={};for(k in a)c[k]=a[k];for(k in b)c[k]=b[k];return c}function F(a,b,c,e,h,m){d.setTransform(a,b,c,e,h-Da,m-OffsetY)}function fb(a,b){a||alert("Error");return qb(a.length,function(c){return b(a[c],c)})}function xa(a,b){a||alert("Error");for(var c=
0;c<a.length;c++)b(a[c],c)}function qb(a,b){var c;c=c||1;for(var d=0;d<a;d+=c){var e=b(d);if(e)return e}}function Ra(a,b){var c;c=c||1;for(var d=0;d<a;d+=c)b(d)}function rb(){this.N=function(a){for(var b=0;24>b;b++)this[String.fromCharCode(97+b)]=a[b]||0;0.01>this.i&&(this.i=0.01);a=this.n+this.i+this.p;0.18>a&&(a=0.18/a,this.n*=a,this.i*=a,this.p*=a)}}function Sa(){t++;da=0.9*da+0.1*ia;Da=Ta(da);I=0.9*I+0.1*M;OffsetY=Ta(I);F(1,0,0,1,0,0);d.clearRect(Da,OffsetY,K,p);va=b.b+n;Ya();xa(Q,function(a){a.update&&
a.update(a);a.l(a,!0)&&a.h(a)});d.globalAlpha=1;H=n;Ga(b.floor,0>b.a,b.x,b.y,b.z,A,Ea,"\uff61\u25d5  \u25d5\uff61","\u203f",-5,5);xa(Q,function(a){a.l(a,!1)&&a.h(a)});d.globalAlpha=1;pb();Ua(Sa)}var C=document,S=C.getElementById("c"),K=S.width,p=S.height,Va=S.getContext("2d"),d=Va,Fa=C.getElementById("b"),Wa=Fa.getContext("2d"),la=Math.random,ga=Math.abs,Za=Math.min,aa=Math.max,Ta=Math.round,Ua=requestAnimationFrame,$=2*Math.PI;onresize=function(){var a=(C.height-p)/2+"px",b=(C.width-K)/2+"px";S.style.top=
a;S.style.left=b;Fa.style.top=a;Fa.style.left=b};onresize();var da,I,Da=OffsetY=0;BW=27;BH=0;B=4095;BC="rgba(15,15,15,0.3)";DEBUG=!0;var Ca=new function(){this.m=new rb;var a,b,c,d,e,h,n,p,u,y,q,v;this.reset=function(){var a=this.m;d=100/(a.L*a.L+0.001);e=100/(a.A*a.A+0.001);h=1-0.01*a.e*a.e*a.e;n=1E-6*-a.B*a.B*a.B;a.H||(q=0.5-a.T/2,v=5E-5*-a.U);p=0<a.q?1-0.9*a.q*a.q:1+10*a.q*a.q;u=0;y=1==a.C?0:2E4*(1-a.C)*(1-a.C)+32};this.P=function(){this.reset();var d=this.m;a=1E5*d.n*d.n;b=1E5*d.i*d.i;c=1E5*d.p*
d.p+10;return a+b+c|0};this.O=function(F,z){var f=this.m,A=1!=f.r||f.G,r=0.1*f.G*f.G,C=1+3E-4*f.g,T=0.1*f.r*f.r*f.r,K=1+1E-4*f.F,O=1!=f.r,P=f.x*f.x,Q=f.A,J=f.u||f.v,ca=0.2*f.v*f.v*f.v,G=f.u*f.u*(0>f.u?-1020:1020),S=f.D?(2E4*(1-f.D)*(1-f.D)|0)+32:0,fa=f.f,$=f.S/2,ia=0.01*f.M*f.M,M=f.H,N=a,ja=1/a,ka=1/b,la=1/c,f=5/(1+20*f.Q*f.Q)*(0.01+T);0.8<f&&(f=0.8);for(var f=1-f,R=!1,da=0,pa=0,qa=0,I=0,ma=0,ra,na=0,w,U=0,ea,aa=0,l,ha=0,V,ba=0,ta=Array(1024),sa=Array(32),D=ta.length;D--;)ta[D]=0;for(D=sa.length;D--;)sa[D]=
2*Math.random()-1;for(D=0;D<z;D++){if(R)return D;S&&++ha>=S&&(ha=0,this.reset());y&&++u>=y&&(y=0,d*=p);h+=n;d*=h;d>e&&(d=e,0<Q&&(R=!0));w=d;0<$&&(ba+=ia,w*=1+Math.sin(ba)*$);w|=0;8>w&&(w=8);M||(q+=v,0>q?q=0:0.5<q&&(q=0.5));if(++pa>N)switch(pa=0,++da){case 1:N=b;break;case 2:N=c}switch(da){case 0:qa=pa*ja;break;case 1:qa=1+2*(1-pa*ka)*fa;break;case 2:qa=1-pa*la;break;case 3:qa=0,R=!0}J&&(G+=ca,ea=G|0,0>ea?ea=-ea:1023<ea&&(ea=1023));A&&C&&(r*=C,1E-5>r?r=1E-5:0.1<r&&(r=0.1));V=0;for(var oa=8;oa--;){U++;
if(U>=w&&(U%=w,3==M))for(ra=sa.length;ra--;)sa[ra]=2*Math.random()-1;switch(M){case 0:l=U/w<q?0.5:-0.5;break;case 1:l=1-2*(U/w);break;case 2:l=U/w;l=6.28318531*(0.5<l?l-1:l);l=0>l?1.27323954*l+0.405284735*l*l:1.27323954*l-0.405284735*l*l;l+=0.225*(l*ga(l)-l);break;case 3:l=sa[Math.abs(32*U/w|0)]}A&&(ra=na,T*=K,0>T?T=0:0.1<T&&(T=0.1),O?(ma+=(l-na)*T,ma*=f):(na=l,ma=0),na+=ma,I+=na-ra,l=I*=1-r);J&&(ta[aa%1024]=l,l+=ta[(aa-ea+1024)%1024],aa++);V+=l}V=0.125*V*qa*P;F[D]=1<=V?32767:-1>=V?-32768:32767*V|
0}return z}},Ba=[];for(i=0;128>i;i++)s=ga(Math.sin($*i/128)),0.1<s&&Ba.push(s);var Xa=[0,,0.14,0.445,0.4616,0.6,,,,,,0.587,0.5406,,,,,,1,,,,,0.45],O=[];Ra(5,function(a){O.push(G(Qa(Xa,{5:0.6+0.05*a})))});Ra(4,function(a){O.push(G(Qa(Xa,{5:0.8-0.05*a})))});var v=0,ja=0,R=[],e=20,sb=ka(e,e,function(a){Aa(a,e,e,80,20,180,40,80,40)}),tb=ka(e,e,function(a){Aa(a,e,e,120,20,110,20,40,30)}),ub=ka(e,e,function(a){Aa(a,e,e,140,25,120,25,50,40)}),nb=za(sb),ib=za(tb),A=za(ub),ia=0,M=0,Q=[],Ka=[],La=[],Pa=[],
Ia=[],lb="#e86",mb="#eda",gb="#d74",hb="#dc8",jb="#b52",kb="#ba6",oa=d.createRadialGradient(15,-9,3,15,-9,32);oa.addColorStop(0,"#FFD6CE");oa.addColorStop(1,"#B34C80");var N=22,r=2*N,P=r/4;PY=IPY=50;Y=0;BW=27;BC="rgba(15,15,15,0.3)";DR=ca;e=100;Y=90;e=10;DR=ca;B=4095;X=299;Z=-400;W=20;H=125;h();X=661;Z=-479;H=121;h();X=332;Z=-478;H=58;h();X=1480;Z=-389;H=84;h();Y=0;e=100;DR=ua;X=80;Z=-514;W=614;H=34;h();B=4091;X=449;Z=-482;W=141;H=71;h();DR=ca;B=4095;X=187;Z=-248;W=174;H=16;h();IPX=PX=137;IPZ=PZ=
-424;c(208,-193);c(260,-210);c(315,-190);Y=0;X=217;Z=-412;W=141;H=12;h();c(589,-382);Ma(547,-381);Y=0;X=391;Z=-342;H=28;h();DR=ua;X=770;Z=-543;W=462;H=34;h();DR=ca;X=802;Z=-416;W=111;H=28;h();X=914;Z=-509;W=171;H=219;h();X=627;Z=-326;W=150;H=12;h();c(798,-463);c(850,-480);c(836,-446);c(882,-486);c(819,-480);c(872,-460);c(1123,-320);c(1175,-322);c(1227,-323);c(1175,-350);c(1151,-322);c(1202,-323);c(1176,-374);c(1177,-398);c(1179,-422);c(1168,-446);c(1143,-451);c(1125,-431);DR=ua;Y=0;X=1279;Z=-543;
W=259;H=42;h();c(1313,-335);c(1364,-311);c(994,-205);c(1316,-362);c(1336,-315);c(1386,-328);c(1338,-386);c(1360,-403);c(1379,-431);c(1361,-452);c(1330,-456);c(1304,-437);Ma(1022,-247);Y=0;X=1430;Z=-501;W=141;H=110;h();DR=ca;X=1404;Z=-293;W=111;H=28;h();X=1185;Z=-240;W=168;h();X=1544;Z=-391;W=53;H=65;h();c(1231,-122);c(1232,-147);c(1233,-171);c(1233,-194);c(1278,-97);c(1335,-103);c(1307,-98);c(1297,-144);c(1318,-130);c(1324,-195);c(1339,-171);c(1324,-156);c(1298,-200);c(1273,-187);c(1231,-97);Y=0;
e=10;B=234;X=246;Z=-482;W=50;H=70;h();B=4095;X=476;Z=-411;W=27;h();X=1441;Z=-391;W=20;H=97;h();var z={32:0};C.addEventListener("keydown",function(a){z[a.keyCode]=1});C.addEventListener("keyup",function(a){z[a.keyCode]=0});var Ea=d.createRadialGradient(12,-7,3,12,-7,28);Ea.addColorStop(0,"#8ED6FF");Ea.addColorStop(1,"#004CB3");var A=20,n=2*A,u=n/4,b={};ha();var $a=G([0,,0.1453,,0.225,0.3726,,0.12,0.22,,,,,0.1547,,,,,1,,,,,0.35]),ab=G([0,,0.1,,0.22,0.3726,,0.14,0.2,,,,0.12,0.1547,,,,,1,,,,,0.26]),Ja=
G([0,,0.11,0.16,0.09,0.227,0.04,-0.18,0.34,,,,,0.23,0.12,,,,1,0.2,0.16,0.1,,0.32]);Wa.fillStyle="#222";Wa.fillRect(0,0,K,p);da=ia=b.b-0.5*K;I=M=b.c-0.8*p;var d=Va,va=t=0;Ua(Sa)})();
