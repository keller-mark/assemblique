(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"7xP8":function(t,n,e){"use strict";e.d(n,"a",(function(){return $}));var i=e("q1tI"),r=e.n(i),s=e("nOHt"),u=e("vOnD"),a=e("Wgwc"),o=e.n(a),c=r.a.createElement,h=Object(u.a)("h2").withConfig({displayName:"ItemPage__StyledPageTitle",componentId:"sc-1y3tx0y-0"})(['text-align:center;font-family:"Lora",sans-serif;font-weight:400;font-size:32px;']),f=Object(u.a)("button").withConfig({displayName:"ItemPage__StyledPageSubtitle",componentId:"sc-1y3tx0y-1"})(["background-color:transparent;border:0;cursor:pointer;font-size:14px;"]),d=Object(u.a)("span").withConfig({displayName:"ItemPage__StyledPageDate",componentId:"sc-1y3tx0y-2"})(["float:right;display:inline-block;font-size:14px;"]),l=Object(u.a)("div").withConfig({displayName:"ItemPage__StyledContentDiv",componentId:"sc-1y3tx0y-3"})(["width:100%;position:relative;min-height:1px;padding-right:15px;padding-left:15px;img{vertical-align:middle;width:70%;margin-left:15%;height:auto;margin-top:10px;margin-bottom:30px;}"]);function $(t){var n=t.item,e=t.htmlPost,i=t.title,u=Object(s.useRouter)();return c(r.a.Fragment,null,c(h,null,i),c(f,{onClick:function(){u.back()}},"\u2190\xa0Back"),c(d,null,o()(n.date).format("MMM D, YYYY")),c(l,{dangerouslySetInnerHTML:{__html:e}}))}},Wgwc:function(t,n,e){t.exports=function(){"use strict";var t="millisecond",n="second",e="minute",i="hour",r="day",s="week",u="month",a="quarter",o="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,h=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,n,e){var i=String(t);return!i||i.length>=n?t:""+Array(n+1-i.length).join(e)+t},d={s:f,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),i=Math.floor(e/60),r=e%60;return(n<=0?"+":"-")+f(i,2,"0")+":"+f(r,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(e,u),r=n-i<0,s=t.clone().add(e+(r?-1:1),u);return Number(-(e+(n-i)/(r?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:o,w:s,d:r,D:"date",h:i,m:e,s:n,ms:t,Q:a}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$="en",m={};m[$]=l;var g=function(t){return t instanceof v},p=function(t,n,e){var i;if(!t)return $;if("string"==typeof t)m[t]&&(i=t),n&&(m[t]=n,i=t);else{var r=t.name;m[r]=t,i=r}return!e&&i&&($=i),i||!e&&$},y=function(t,n){if(g(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new v(e)},M=d;M.l=p,M.i=g,M.w=function(t,n){return y(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var v=function(){function f(t){this.$L=this.$L||p(t.locale,null,!0),this.parse(t)}var d=f.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(M.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(c);if(i)return e?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return M},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=y(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return y(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<y(t)},d.$g=function(t,n,e){return M.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",o)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",r)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",i)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,a){var c=this,h=!!M.u(a)||a,f=M.p(t),d=function(t,n){var e=M.w(c.$u?Date.UTC(c.$y,n,t):new Date(c.$y,n,t),c);return h?e:e.endOf(r)},l=function(t,n){return M.w(c.toDate()[t].apply(c.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(n)),c)},$=this.$W,m=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(f){case o:return h?d(1,0):d(31,11);case u:return h?d(1,m):d(0,m+1);case s:var y=this.$locale().weekStart||0,v=($<y?$+7:$)-y;return d(h?g-v:g+(6-v),m);case r:case"date":return l(p+"Hours",0);case i:return l(p+"Minutes",1);case e:return l(p+"Seconds",2);case n:return l(p+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,a){var c,h=M.p(s),f="set"+(this.$u?"UTC":""),d=(c={},c[r]=f+"Date",c.date=f+"Date",c[u]=f+"Month",c[o]=f+"FullYear",c[i]=f+"Hours",c[e]=f+"Minutes",c[n]=f+"Seconds",c[t]=f+"Milliseconds",c)[h],l=h===r?this.$D+(a-this.$W):a;if(h===u||h===o){var $=this.clone().set("date",1);$.$d[d](l),$.init(),this.$d=$.set("date",Math.min(this.$D,$.daysInMonth())).toDate()}else d&&this.$d[d](l);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[M.p(t)]()},d.add=function(t,a){var c,h=this;t=Number(t);var f=M.p(a),d=function(n){var e=y(h);return M.w(e.date(e.date()+Math.round(n*t)),h)};if(f===u)return this.set(u,this.$M+t);if(f===o)return this.set(o,this.$y+t);if(f===r)return d(1);if(f===s)return d(7);var l=(c={},c[e]=6e4,c[i]=36e5,c[n]=1e3,c)[f]||1,$=this.$d.getTime()+t*l;return M.w($,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),r=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=r.weekdays,c=r.months,f=function(t,i,r,s){return t&&(t[i]||t(n,e))||r[i].substr(0,s)},d=function(t){return M.s(s%12||12,t,"0")},l=r.meridiem||function(t,n,e){var i=t<12?"AM":"PM";return e?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:f(r.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:f(r.weekdaysMin,this.$W,o,2),ddd:f(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:M.s(s,2,"0"),h:d(1),hh:d(2),a:l(s,u,!0),A:l(s,u,!1),m:String(u),mm:M.s(u,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return e.replace(h,(function(t,n){return n||$[t]||i.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,c,h){var f,d=M.p(c),l=y(t),$=6e4*(l.utcOffset()-this.utcOffset()),m=this-l,g=M.m(this,l);return g=(f={},f[o]=g/12,f[u]=g,f[a]=g/3,f[s]=(m-$)/6048e5,f[r]=(m-$)/864e5,f[i]=m/36e5,f[e]=m/6e4,f[n]=m/1e3,f)[d]||m,h?g:M.a(g)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=p(t,n,!0);return i&&(e.$L=i),e},d.clone=function(){return M.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},f}();return y.prototype=v.prototype,y.extend=function(t,n){return t(n,v,y),y},y.locale=p,y.isDayjs=g,y.unix=function(t){return y(1e3*t)},y.en=m[$],y.Ls=m,y}()},pof0:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/press/[slug]",function(){return e("tHSA")}])},tHSA:function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return o})),e.d(n,"default",(function(){return c}));var i=e("q1tI"),r=e.n(i),s=(e("YFqc"),e("5Yp1")),u=e("7xP8"),a=r.a.createElement,o=!0;function c(t){var n=t.item,e=t.htmlPost,i=t.title;return a(s.a,null,a(u.a,{item:n,htmlPost:e,title:i}))}}},[["pof0",0,2,1,3]]]);