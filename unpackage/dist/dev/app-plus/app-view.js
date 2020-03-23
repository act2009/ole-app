var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'card data-v-199da416'])
Z([3,'data-v-199da416'])
Z([3,'-'])
Z([3,'card-name data-v-199da416'])
Z([a,[[7],[3,'cardTitle']]])
Z(z[1])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'common-dity data-v-0d9d638a'])
Z([[2,'+'],[[2,'+'],[1,'flex-wrap:'],[[7],[3,'wrap']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dataList']])
Z(z[2])
Z([3,'commondity-item data-v-0d9d638a'])
Z([[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'itemW']]],[1,';']])
Z([3,'commondity-img data-v-0d9d638a'])
Z([[6],[[7],[3,'item']],[3,'imgUrl']])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'itemH']]],[1,';']])
Z([3,'commondity-content data-v-0d9d638a'])
Z([3,'commondity-name data-v-0d9d638a'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'-webkit-line-clamp:'],[[7],[3,'lineclamp']]],[1,';']],[1,'font-size:']],[[7],[3,'nameFontsize']]],[1,';']])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'data-v-0d9d638a'])
Z([3,'cprice data-v-0d9d638a'])
Z([[2,'+'],[[2,'+'],[1,'font-size:'],[[7],[3,'priceFontsize']]],[1,';']])
Z([a,[[2,'+'],[1,'¥'],[[6],[[7],[3,'item']],[3,'cprice']]]])
Z([3,'oprice data-v-0d9d638a'])
Z([a,[[2,'+'],[1,'¥'],[[6],[[7],[3,'item']],[3,'oprice']]]])
Z([3,'discount data-v-0d9d638a'])
Z([a,[[2,'+'],[[6],[[7],[3,'item']],[3,'discount']],[1,'折']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'commondity-list'])
Z([3,'__l'])
Z([[7],[3,'dataList']])
Z([3,'8732120c-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'banner data-v-3f5a53d7'])
Z([3,'banner-img data-v-3f5a53d7'])
Z([3,'../../static/img/banner1.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hot'])
Z([3,'__l'])
Z([[7],[3,'hotList']])
Z([3,'a957fa3e-1'])
Z(z[1])
Z(z[2])
Z([3,'220rpx'])
Z([3,'33.3333%'])
Z([3,'a957fa3e-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'icons data-v-8b38fb82'])
Z([3,'icons-item data-v-8b38fb82'])
Z([3,'icons-img data-v-8b38fb82'])
Z([3,'../../static/img/icons1.png'])
Z([3,'icons-name font-color data-v-8b38fb82'])
Z([3,'跑步鞋与体育'])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons2.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons3.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons4.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons5.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons6.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons7.png'])
Z(z[4])
Z(z[5])
Z(z[1])
Z(z[2])
Z([3,'../../static/img/icons8.png'])
Z(z[4])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'data-v-27f0814f'])
Z([1,1000])
Z(z[0])
Z([1,3000])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dataList']])
Z(z[5])
Z(z[1])
Z([3,'swiper-item data-v-27f0814f'])
Z([3,'swiper-img data-v-27f0814f'])
Z([[6],[[7],[3,'item']],[3,'imgUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'recommend bg-color data-v-2113df3e'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dataList']])
Z(z[1])
Z([3,'recommend-item data-v-2113df3e'])
Z([3,'item-big data-v-2113df3e'])
Z([[6],[[7],[3,'item']],[3,'bigUrl']])
Z([3,'item-small data-v-2113df3e'])
Z([3,'i'])
Z([3,'k'])
Z([[6],[[7],[3,'item']],[3,'data']])
Z(z[9])
Z([3,'data-v-2113df3e'])
Z([3,'item-img data-v-2113df3e'])
Z([[6],[[7],[3,'k']],[3,'imgUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shop data-v-6fe0a361'])
Z([3,'shop-item data-v-6fe0a361'])
Z([3,'shop-big data-v-6fe0a361'])
Z(z[2])
Z([3,'../../static/img/shop.jpg'])
Z([3,'scroll-content data-v-6fe0a361'])
Z([3,'true'])
Z([3,'scroll-item data-v-6fe0a361'])
Z([3,'__l'])
Z([3,'data-v-6fe0a361'])
Z([[7],[3,'shopList']])
Z([3,'200rpx'])
Z(z[11])
Z([3,'1'])
Z([3,'26rpx'])
Z(z[14])
Z([3,'a9ded2d0-1'])
Z([3,'no-wrap'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index data-v-6e86439f'])
Z([3,'scroll-content data-v-6e86439f'])
Z([[7],[3,'scrollIntoIndex']])
Z([3,'true'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'topBar']])
Z(z[4])
Z([3,'__e'])
Z([3,'scroll-item data-v-6e86439f'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'+'],[1,'top'],[[7],[3,'index']]])
Z([[4],[[5],[[5],[1,'data-v-6e86439f']],[[2,'?:'],[[2,'==='],[[7],[3,'topBarIndex']],[[7],[3,'index']]],[1,'font-active-color'],[1,'font-color']]]])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z(z[8])
Z([3,'data-v-6e86439f'])
Z([[7],[3,'topBarIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'onChangeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'clientHight']]],[1,'px;']])
Z(z[4])
Z(z[5])
Z([[7],[3,'newTopBar']])
Z(z[4])
Z(z[15])
Z(z[15])
Z(z[3])
Z(z[18])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'data']],[3,'length']],[1,0]])
Z(z[15])
Z([3,'i'])
Z([3,'k'])
Z([[6],[[7],[3,'item']],[3,'data']])
Z(z[29])
Z(z[15])
Z([[2,'==='],[[6],[[7],[3,'k']],[3,'type']],[1,'swiperList']])
Z([3,'__l'])
Z(z[15])
Z([[6],[[7],[3,'k']],[3,'data']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'8dd740cc-1-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'i']]])
Z([[2,'==='],[[6],[[7],[3,'k']],[3,'type']],[1,'recommendList']])
Z(z[35])
Z(z[15])
Z(z[37])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'8dd740cc-2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'i']]])
Z(z[35])
Z([3,'猜你喜欢'])
Z(z[15])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'8dd740cc-3-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'i']]])
Z([[2,'==='],[[6],[[7],[3,'k']],[3,'type']],[1,'commondityList']])
Z(z[35])
Z(z[15])
Z(z[37])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'8dd740cc-4-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'i']]])
Z(z[15])
Z([3,'没有了，没有数据了。'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'分类'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'我的'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'购物车'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/common/Card.wxml','./components/common/Commondity.wxml','./components/common/CommondityList.wxml','./components/index/Banner.wxml','./components/index/Hot.wxml','./components/index/Icons.wxml','./components/index/IndexSwiper.wxml','./components/index/Recommend.wxml','./components/index/Shop.wxml','./pages/index/index.wxml','./pages/list/list.wxml','./pages/my/my.wxml','./pages/shopCart/shopCart.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_oz(z,2,e,s,gg)
_(xC,oD)
_(oB,xC)
var fE=_n('view')
_rz(z,fE,'class',3,e,s,gg)
var cF=_oz(z,4,e,s,gg)
_(fE,cF)
_(oB,fE)
var hG=_n('view')
_rz(z,hG,'class',5,e,s,gg)
var oH=_oz(z,6,e,s,gg)
_(hG,oH)
_(oB,hG)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oJ=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var lK=_v()
_(oJ,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_mz(z,'view',['class',6,'style',1],[],eN,tM,gg)
var oR=_mz(z,'image',['mode',-1,'class',8,'src',1,'style',2],[],eN,tM,gg)
_(xQ,oR)
var fS=_n('view')
_rz(z,fS,'class',11,eN,tM,gg)
var cT=_mz(z,'text',['class',12,'style',1],[],eN,tM,gg)
var hU=_oz(z,14,eN,tM,gg)
_(cT,hU)
_(fS,cT)
var oV=_n('view')
_rz(z,oV,'class',15,eN,tM,gg)
var cW=_mz(z,'text',['class',16,'style',1],[],eN,tM,gg)
var oX=_oz(z,18,eN,tM,gg)
_(cW,oX)
_(oV,cW)
var lY=_n('text')
_rz(z,lY,'class',19,eN,tM,gg)
var aZ=_oz(z,20,eN,tM,gg)
_(lY,aZ)
_(oV,lY)
_(fS,oV)
var t1=_n('text')
_rz(z,t1,'class',21,eN,tM,gg)
var e2=_oz(z,22,eN,tM,gg)
_(t1,e2)
_(fS,t1)
_(xQ,fS)
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,4,aL,e,s,gg,lK,'item','index','index')
_(r,oJ)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
var x5=_mz(z,'commondity',['bind:__l',1,'dataList',1,'vueId',2],[],e,s,gg)
_(o4,x5)
_(r,o4)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var c8=_mz(z,'image',['mode',-1,'class',1,'src',1],[],e,s,gg)
_(f7,c8)
_(r,f7)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var o0=_n('view')
_rz(z,o0,'class',0,e,s,gg)
var cAB=_mz(z,'commondity',['bind:__l',1,'dataList',1,'vueId',2],[],e,s,gg)
_(o0,cAB)
var oBB=_mz(z,'commondity',['bind:__l',4,'dataList',1,'itemH',2,'itemW',3,'vueId',4],[],e,s,gg)
_(o0,oBB)
_(r,o0)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var aDB=_n('view')
_rz(z,aDB,'class',0,e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',1,e,s,gg)
var eFB=_mz(z,'image',['mode',-1,'class',2,'src',1],[],e,s,gg)
_(tEB,eFB)
var bGB=_n('text')
_rz(z,bGB,'class',4,e,s,gg)
var oHB=_oz(z,5,e,s,gg)
_(bGB,oHB)
_(tEB,bGB)
_(aDB,tEB)
var xIB=_n('view')
_rz(z,xIB,'class',6,e,s,gg)
var oJB=_mz(z,'image',['mode',-1,'class',7,'src',1],[],e,s,gg)
_(xIB,oJB)
var fKB=_n('text')
_rz(z,fKB,'class',9,e,s,gg)
var cLB=_oz(z,10,e,s,gg)
_(fKB,cLB)
_(xIB,fKB)
_(aDB,xIB)
var hMB=_n('view')
_rz(z,hMB,'class',11,e,s,gg)
var oNB=_mz(z,'image',['mode',-1,'class',12,'src',1],[],e,s,gg)
_(hMB,oNB)
var cOB=_n('text')
_rz(z,cOB,'class',14,e,s,gg)
var oPB=_oz(z,15,e,s,gg)
_(cOB,oPB)
_(hMB,cOB)
_(aDB,hMB)
var lQB=_n('view')
_rz(z,lQB,'class',16,e,s,gg)
var aRB=_mz(z,'image',['mode',-1,'class',17,'src',1],[],e,s,gg)
_(lQB,aRB)
var tSB=_n('text')
_rz(z,tSB,'class',19,e,s,gg)
var eTB=_oz(z,20,e,s,gg)
_(tSB,eTB)
_(lQB,tSB)
_(aDB,lQB)
var bUB=_n('view')
_rz(z,bUB,'class',21,e,s,gg)
var oVB=_mz(z,'image',['mode',-1,'class',22,'src',1],[],e,s,gg)
_(bUB,oVB)
var xWB=_n('text')
_rz(z,xWB,'class',24,e,s,gg)
var oXB=_oz(z,25,e,s,gg)
_(xWB,oXB)
_(bUB,xWB)
_(aDB,bUB)
var fYB=_n('view')
_rz(z,fYB,'class',26,e,s,gg)
var cZB=_mz(z,'image',['mode',-1,'class',27,'src',1],[],e,s,gg)
_(fYB,cZB)
var h1B=_n('text')
_rz(z,h1B,'class',29,e,s,gg)
var o2B=_oz(z,30,e,s,gg)
_(h1B,o2B)
_(fYB,h1B)
_(aDB,fYB)
var c3B=_n('view')
_rz(z,c3B,'class',31,e,s,gg)
var o4B=_mz(z,'image',['mode',-1,'class',32,'src',1],[],e,s,gg)
_(c3B,o4B)
var l5B=_n('text')
_rz(z,l5B,'class',34,e,s,gg)
var a6B=_oz(z,35,e,s,gg)
_(l5B,a6B)
_(c3B,l5B)
_(aDB,c3B)
var t7B=_n('view')
_rz(z,t7B,'class',36,e,s,gg)
var e8B=_mz(z,'image',['mode',-1,'class',37,'src',1],[],e,s,gg)
_(t7B,e8B)
var b9B=_n('text')
_rz(z,b9B,'class',39,e,s,gg)
var o0B=_oz(z,40,e,s,gg)
_(b9B,o0B)
_(t7B,b9B)
_(aDB,t7B)
_(r,aDB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oBC=_mz(z,'swiper',['autoplay',0,'class',1,'duration',1,'indicatorDots',2,'interval',3],[],e,s,gg)
var fCC=_v()
_(oBC,fCC)
var cDC=function(oFC,hEC,cGC,gg){
var lIC=_n('swiper-item')
_rz(z,lIC,'class',9,oFC,hEC,gg)
var aJC=_n('view')
_rz(z,aJC,'class',10,oFC,hEC,gg)
var tKC=_mz(z,'image',['mode',-1,'class',11,'src',1],[],oFC,hEC,gg)
_(aJC,tKC)
_(lIC,aJC)
_(cGC,lIC)
return cGC
}
fCC.wxXCkey=2
_2z(z,7,cDC,e,s,gg,fCC,'item','index','index')
_(r,oBC)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var bMC=_n('view')
_rz(z,bMC,'class',0,e,s,gg)
var oNC=_v()
_(bMC,oNC)
var xOC=function(fQC,oPC,cRC,gg){
var oTC=_n('view')
_rz(z,oTC,'class',5,fQC,oPC,gg)
var cUC=_mz(z,'image',['mode',-1,'class',6,'src',1],[],fQC,oPC,gg)
_(oTC,cUC)
var oVC=_n('view')
_rz(z,oVC,'class',8,fQC,oPC,gg)
var lWC=_v()
_(oVC,lWC)
var aXC=function(eZC,tYC,b1C,gg){
var x3C=_mz(z,'image',['mode',-1,'class',14,'src',1],[],eZC,tYC,gg)
_(b1C,x3C)
return b1C
}
lWC.wxXCkey=2
_2z(z,11,aXC,fQC,oPC,gg,lWC,'k','i','i')
_(oTC,oVC)
_(cRC,oTC)
return cRC
}
oNC.wxXCkey=2
_2z(z,3,xOC,e,s,gg,oNC,'item','index','index')
_(r,bMC)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var f5C=_n('view')
_rz(z,f5C,'class',0,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',1,e,s,gg)
var h7C=_n('view')
_rz(z,h7C,'class',2,e,s,gg)
var o8C=_mz(z,'image',['mode',-1,'class',3,'src',1],[],e,s,gg)
_(h7C,o8C)
_(c6C,h7C)
var c9C=_mz(z,'scroll-view',['class',5,'scrollX',1],[],e,s,gg)
var o0C=_n('view')
_rz(z,o0C,'class',7,e,s,gg)
var lAD=_mz(z,'commondity',['bind:__l',8,'class',1,'dataList',2,'itemH',3,'itemW',4,'lineclamp',5,'nameFontsize',6,'priceFontsize',7,'vueId',8,'wrap',9],[],e,s,gg)
_(o0C,lAD)
_(c9C,o0C)
_(c6C,c9C)
_(f5C,c6C)
_(r,f5C)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var tCD=_n('view')
_rz(z,tCD,'class',0,e,s,gg)
var eDD=_mz(z,'scroll-view',['class',1,'scrollIntoView',1,'scrollX',2],[],e,s,gg)
var bED=_v()
_(eDD,bED)
var oFD=function(oHD,xGD,fID,gg){
var hKD=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2,'id',3],[],oHD,xGD,gg)
var oLD=_n('text')
_rz(z,oLD,'class',12,oHD,xGD,gg)
var cMD=_oz(z,13,oHD,xGD,gg)
_(oLD,cMD)
_(hKD,oLD)
_(fID,hKD)
return fID
}
bED.wxXCkey=2
_2z(z,6,oFD,e,s,gg,bED,'item','index','index')
_(tCD,eDD)
var oND=_mz(z,'swiper',['bindchange',14,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var lOD=_v()
_(oND,lOD)
var aPD=function(eRD,tQD,bSD,gg){
var xUD=_n('swiper-item')
_rz(z,xUD,'class',23,eRD,tQD,gg)
var oVD=_mz(z,'scroll-view',['class',24,'scrollY',1,'style',2],[],eRD,tQD,gg)
var fWD=_v()
_(oVD,fWD)
if(_oz(z,27,eRD,tQD,gg)){fWD.wxVkey=1
var cXD=_v()
_(fWD,cXD)
var hYD=function(c1D,oZD,o2D,gg){
var a4D=_v()
_(o2D,a4D)
if(_oz(z,34,c1D,oZD,gg)){a4D.wxVkey=1
var b7D=_mz(z,'index-swiper',['bind:__l',35,'class',1,'dataList',2,'vueId',3],[],c1D,oZD,gg)
_(a4D,b7D)
}
var t5D=_v()
_(o2D,t5D)
if(_oz(z,39,c1D,oZD,gg)){t5D.wxVkey=1
var o8D=_mz(z,'recommend',['bind:__l',40,'class',1,'dataList',2,'vueId',3],[],c1D,oZD,gg)
_(t5D,o8D)
var x9D=_mz(z,'card',['bind:__l',44,'cardTitle',1,'class',2,'vueId',3],[],c1D,oZD,gg)
_(t5D,x9D)
}
var e6D=_v()
_(o2D,e6D)
if(_oz(z,48,c1D,oZD,gg)){e6D.wxVkey=1
var o0D=_mz(z,'commondity-list',['bind:__l',49,'class',1,'dataList',2,'vueId',3],[],c1D,oZD,gg)
_(e6D,o0D)
}
a4D.wxXCkey=1
a4D.wxXCkey=3
t5D.wxXCkey=1
t5D.wxXCkey=3
e6D.wxXCkey=1
e6D.wxXCkey=3
return o2D
}
cXD.wxXCkey=4
_2z(z,31,hYD,eRD,tQD,gg,cXD,'k','i','i')
}
else{fWD.wxVkey=2
var fAE=_n('view')
_rz(z,fAE,'class',53,eRD,tQD,gg)
var cBE=_oz(z,54,eRD,tQD,gg)
_(fAE,cBE)
_(fWD,fAE)
}
fWD.wxXCkey=1
fWD.wxXCkey=3
_(xUD,oVD)
_(bSD,xUD)
return bSD
}
lOD.wxXCkey=4
_2z(z,21,aPD,e,s,gg,lOD,'item','index','index')
_(tCD,oND)
_(r,tCD)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oDE=_n('view')
var cEE=_oz(z,0,e,s,gg)
_(oDE,cEE)
_(r,oDE)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var lGE=_n('view')
var aHE=_oz(z,0,e,s,gg)
_(lGE,aHE)
_(r,lGE)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var eJE=_n('view')
var bKE=_oz(z,0,e,s,gg)
_(eJE,bKE)
_(r,eJE)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: uniicons; font-weight: normal; font-style: normal; src: url(data:font/ttf;base64,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ACAAMwAsACAAMgAwADIAMAA7AEYAbwBuAHQAQwByAGUAYQB0AG8AcgAgADEAMgAuADAALgAwAC4AMgA1ADMANQAgADYANAAtAGIAaQB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAACgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAhQAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoAA4A7wEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BfwGAAYEBggGDB3VuaTAwMDAHdW5pMDAwOQdjb250YWN0BnBlcnNvbglwZXJzb25hZGQNY29udGFjdGZpbGxlZAxwZXJzb25maWxsZWQPcGVyc29uYWRkZmlsbGVkBXBob25lBWVtYWlsCmNoYXRidWJibGUJY2hhdGJveGVzC3Bob25lZmlsbGVkC2VtYWlsZmlsbGVkEGNoYXRidWJibGVmaWxsZWQPY2hhdGJveGVzZmlsbGVkBXdlaWJvBndlaXhpbgtwZW5neW91cXVhbgRjaGF0AnFxCHZpZGVvY2FtBmNhbWVyYQNtaWMIbG9jYXRpb24JbWljZmlsbGVkDmxvY2F0aW9uZmlsbGVkBm1pY29mZgVpbWFnZQNtYXAHY29tcG9zZQV0cmFzaAZ1cGxvYWQIZG93bmxvYWQFY2xvc2UEcmVkbwR1bmRvB3JlZnJlc2gEc3Rhcgt3aGl0ZWNpcmNsZQVjbGVhcg1yZWZyZXNoZmlsbGVkCnN0YXJmaWxsZWQKcGx1c2ZpbGxlZAttaW51c2ZpbGxlZAxjaXJjbGVmaWxsZWQOY2hlY2tib3hmaWxsZWQKY2xvc2VlbXB0eQxyZWZyZXNoZW1wdHkGcmVsb2FkCHN0YXJoYWxmDHNwaW5uZXJjeWNsZQZzZWFyY2gJcGx1c2VtcHR5B2ZvcndhcmQEYmFjaw5jaGVja21hcmtlbXB0eQRob21lCG5hdmlnYXRlBGdlYXIKcGFwZXJwbGFuZQRpbmZvBGhlbHAGbG9ja2VkBG1vcmUEZmxhZwpob21lZmlsbGVkCmdlYXJmaWxsZWQKaW5mb2ZpbGxlZApoZWxwZmlsbGVkCm1vcmVmaWxsZWQIc2V0dGluZ3MEbGlzdARiYXJzBGxvb3AJcGFwZXJjbGlwCWV5ZWZpbGxlZAx1cHdhcmRzYXJyb3cOZG93bndhcmRzYXJyb3cObGVmdHdhcmRzYXJyb3cPcmlnaHR3YXJkc2Fycm93C2Fycm93dGhpbnVwDWFycm93dGhpbmRvd24NYXJyb3d0aGlubGVmdA5hcnJvd3RoaW5yaWdodAhwdWxsZG93bgVzb3VuZARzaG9wBHNjYW4KdW5kb2ZpbGxlZApyZWRvZmlsbGVkDGNhbWVyYWZpbGxlZApjYXJ0ZmlsbGVkBGNhcnQIY2hlY2tib3gRc21hbGxjaXJjbGVmaWxsZWQOZXllc2xhc2hmaWxsZWQIZXllc2xhc2gDZXllCmZsYWdmaWxsZWQVaGFuZHRodW1ic2Rvd25fZmlsbGVkDmhhbmR0aHVtYnNkb3duEmhhbmR0aHVtYnN1cGZpbGxlZAtoZWFydGZpbGxlZAxoYW5kdGh1bWJzdXAOYmxhY2toZWFydHN1aXQKY2hhdGZpbGxlZA5tYWlsb3BlbmZpbGxlZAhtYWlsb3Blbgxsb2NrZWRmaWxsZWQJbWFwZmlsbGVkBm1hcHBpbg1tYXBwaW5lbGxpcHNlC3NtYWxsY2lyY2xlEHBhcGVycGxhbmVmaWxsZWQLaW1hZ2VmaWxsZWQMaW1hZ2VzZmlsbGVkBmltYWdlcw5uYXZpZ2F0ZWZpbGxlZA5taWNzbGFzaGZpbGxlZAtzb3VuZGZpbGxlZA5kb3dubG9hZGZpbGxlZA52aWRlb2NhbWZpbGxlZAx1cGxvYWRmaWxsZWQKaGVhZHBob25lcwt0cmFzaGZpbGxlZA1jbG91ZGRvd25sb2FkEWNsb3VkdXBsb2FkZmlsbGVkC2Nsb3VkdXBsb2FkE2Nsb3VkZG93bmxvYWRmaWxsZWQAAAAAAAAB//8AAg\x3d\x3d) format(\x27truetype\x27); }\nwx-view{ font-size:",[0,28],"; line-height:1.8; }\nwx-progress, wx-checkbox-group{ width: 100%; }\nwx-form { width: 100%; }\n.",[1],"uni-flex { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; }\n.",[1],"uni-flex-item { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n.",[1],"uni-row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; }\n.",[1],"uni-column { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"uni-link{ color:#576B95; font-size:",[0,26],"; }\n.",[1],"uni-center{ text-align:center; }\n.",[1],"uni-inline-item{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-align:center; -webkit-align-items:center; align-items:center; }\n.",[1],"uni-inline-item wx-text{ margin-right: ",[0,20],"; }\n.",[1],"uni-inline-item wx-text:last-child{ margin-right: ",[0,0],"; margin-left: ",[0,20],"; }\n.",[1],"uni-page-head{ padding:",[0,35],"; text-align: center; }\n.",[1],"uni-page-head-title { display: inline-block; padding: 0 ",[0,40],"; font-size: ",[0,30],"; height: ",[0,88],"; line-height: ",[0,88],"; color: #BEBEBE; box-sizing: border-box; border-bottom: ",[0,2]," solid #D8D8D8; }\n.",[1],"uni-page-body { width: 100%; -webkit-box-flex: 1; -webkit-flex-grow: 1; flex-grow: 1; overflow-x: hidden; }\n.",[1],"uni-padding-wrap{ width:",[0,690],"; padding:0 ",[0,30],"; }\n.",[1],"uni-word { text-align: center; padding:",[0,200]," ",[0,100],"; }\n.",[1],"uni-title { font-size:",[0,30],"; font-weight:500; padding:",[0,20]," 0; line-height:1.5; }\n.",[1],"uni-text{ font-size:",[0,28],"; }\n.",[1],"uni-title wx-text{ font-size:",[0,24],"; color:#888; }\n.",[1],"uni-text-gray{ color: #ccc; }\n.",[1],"uni-text-small { font-size:",[0,24],"; }\n.",[1],"uni-common-mb{ margin-bottom:",[0,30],"; }\n.",[1],"uni-common-pb{ padding-bottom:",[0,30],"; }\n.",[1],"uni-common-pl{ padding-left:",[0,30],"; }\n.",[1],"uni-common-mt{ margin-top:",[0,30],"; }\n.",[1],"uni-bg-red{ background:#F76260; color:#FFF; }\n.",[1],"uni-bg-green{ background:#09BB07; color:#FFF; }\n.",[1],"uni-bg-blue{ background:#007AFF; color:#FFF; }\n.",[1],"uni-h1 {font-size: ",[0,80],"; font-weight:700;}\n.",[1],"uni-h2 {font-size: ",[0,60],"; font-weight:700;}\n.",[1],"uni-h3 {font-size: ",[0,48],"; font-weight:700;}\n.",[1],"uni-h4 {font-size: ",[0,36],"; font-weight:700;}\n.",[1],"uni-h5 {font-size: ",[0,28],"; color: #8f8f94;}\n.",[1],"uni-h6 {font-size: ",[0,24],"; color: #8f8f94;}\n.",[1],"uni-bold{font-weight:bold;}\n.",[1],"uni-ellipsis {overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}\n.",[1],"uni-btn-v{ padding:",[0,10]," 0; }\n.",[1],"uni-btn-v wx-button{margin:",[0,20]," 0;}\n.",[1],"uni-form-item{ display:-webkit-box; display:-webkit-flex; display:flex; width:100%; padding:",[0,10]," 0; }\n.",[1],"uni-form-item .",[1],"title{ padding:",[0,10]," ",[0,25],"; }\n.",[1],"uni-label { width: ",[0,210],"; word-wrap: break-word; word-break: break-all; text-indent:",[0,20],"; }\n.",[1],"uni-input { height: ",[0,50],"; padding: ",[0,15]," ",[0,25],"; line-height:",[0,50],"; font-size:",[0,28],"; background:#FFF; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\nwx-radio-group, wx-checkbox-group{ width:100%; }\nwx-radio-group wx-label, wx-checkbox-group wx-label{ padding-right:",[0,20],"; }\n.",[1],"uni-form-item .",[1],"with-fun{ display:-webkit-box; display:-webkit-flex; display:flex; -webkit-flex-wrap:nowrap; flex-wrap:nowrap; background:#FFFFFF; }\n.",[1],"uni-form-item .",[1],"with-fun .",[1],"uni-icon{ width:40px; height:",[0,80],"; line-height:",[0,80],"; -webkit-flex-shrink:0; flex-shrink:0; }\n.",[1],"uni-loadmore{ height:",[0,80],"; line-height:",[0,80],"; text-align:center; padding-bottom:",[0,30],"; }\n.",[1],"uni-badge, .",[1],"uni-badge-default { font-family: \x27Helvetica Neue\x27, Helvetica, sans-serif; font-size: 12px; line-height: 1; display: inline-block; padding: 3px 6px; color: #333; border-radius: 100px; background-color: rgba(0, 0, 0, .15); }\n.",[1],"uni-badge.",[1],"uni-badge-inverted { padding: 0 5px 0 0; color: #929292; background-color: transparent }\n.",[1],"uni-badge-primary { color: #fff; background-color: #007aff }\n.",[1],"uni-badge-blue.",[1],"uni-badge-inverted, .",[1],"uni-badge-primary.",[1],"uni-badge-inverted { color: #007aff; background-color: transparent }\n.",[1],"uni-badge-green, .",[1],"uni-badge-success { color: #fff; background-color: #4cd964; }\n.",[1],"uni-badge-green.",[1],"uni-badge-inverted, .",[1],"uni-badge-success.",[1],"uni-badge-inverted { color: #4cd964; background-color: transparent }\n.",[1],"uni-badge-warning, .",[1],"uni-badge-yellow { color: #fff; background-color: #f0ad4e }\n.",[1],"uni-badge-warning.",[1],"uni-badge-inverted, .",[1],"uni-badge-yellow.",[1],"uni-badge-inverted { color: #f0ad4e; background-color: transparent }\n.",[1],"uni-badge-danger, .",[1],"uni-badge-red { color: #fff; background-color: #dd524d }\n.",[1],"uni-badge-danger.",[1],"uni-badge-inverted, .",[1],"uni-badge-red.",[1],"uni-badge-inverted { color: #dd524d; background-color: transparent }\n.",[1],"uni-badge-purple, .",[1],"uni-badge-royal { color: #fff; background-color: #8a6de9 }\n.",[1],"uni-badge-purple.",[1],"uni-badge-inverted, .",[1],"uni-badge-royal.",[1],"uni-badge-inverted { color: #8a6de9; background-color: transparent }\n.",[1],"uni-collapse-content { height: 0; width: 100%; overflow: hidden; }\n.",[1],"uni-collapse-content.",[1],"uni-active { height: auto; }\n.",[1],"uni-card { background: #fff; border-radius: ",[0,8],"; margin:",[0,20]," 0; position: relative; box-shadow: 0 ",[0,2]," ",[0,4]," rgba(0, 0, 0, .3); }\n.",[1],"uni-card-content { font-size: ",[0,30],"; }\n.",[1],"uni-card-content.",[1],"image-view{ width: 100%; margin: 0; }\n.",[1],"uni-card-content-inner { position: relative; padding: ",[0,30],"; }\n.",[1],"uni-card-footer, .",[1],"uni-card-header { position: relative; display: -webkit-box; display: -webkit-flex; display: flex; min-height: ",[0,50],"; padding: ",[0,20]," ",[0,30],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"uni-card-header { font-size: ",[0,36],"; }\n.",[1],"uni-card-footer { color: #6d6d72; }\n.",[1],"uni-card-footer:before, .",[1],"uni-card-header:after { position: absolute; top: 0; right: 0; left: 0; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-card-header:after { top: auto; bottom: 0; }\n.",[1],"uni-card-media { -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; }\n.",[1],"uni-card-media-logo { height: ",[0,84],"; width: ",[0,84],"; margin-right: ",[0,20],"; }\n.",[1],"uni-card-media-body { height: ",[0,84],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: start; -webkit-align-items: flex-start; align-items: flex-start; }\n.",[1],"uni-card-media-text-top { line-height: ",[0,36],"; font-size: ",[0,34],"; }\n.",[1],"uni-card-media-text-bottom { line-height: ",[0,30],"; font-size: ",[0,28],"; color: #8f8f94; }\n.",[1],"uni-card-link { color: #007AFF; }\n.",[1],"uni-list { background-color: #FFFFFF; position: relative; width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"uni-list:after { position: absolute; z-index: 10; right: 0; bottom: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list::before { position: absolute; z-index: 10; right: 0; top: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell { position: relative; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"uni-list-cell-hover { background-color: #eee; }\n.",[1],"uni-list-cell-pd { padding: ",[0,22]," ",[0,30],"; }\n.",[1],"uni-list-cell-left { white-space: nowrap; font-size:",[0,28],"; padding: 0 ",[0,30],"; }\n.",[1],"uni-list-cell-db, .",[1],"uni-list-cell-right { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n.",[1],"uni-list-cell::after { position: absolute; z-index: 3; right: 0; bottom: 0; left: ",[0,30],"; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list .",[1],"uni-list-cell:last-child::after { height: ",[0,0],"; }\n.",[1],"uni-list-cell-last.",[1],"uni-list-cell::after { height: ",[0,0],"; }\n.",[1],"uni-list-cell-divider { position: relative; display: -webkit-box; display: -webkit-flex; display: flex; color: #999; background-color: #f7f7f7; padding:",[0,15]," ",[0,20],"; }\n.",[1],"uni-list-cell-divider::before { position: absolute; right: 0; top: 0; left: 0; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell-divider::after { position: absolute; right: 0; bottom: 0; left: ",[0,0],"; height: 1px; content: \x27\x27; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-list-cell-navigate { font-size:",[0,30],"; padding: ",[0,22]," ",[0,30],"; line-height: ",[0,48],"; position: relative; display: -webkit-box; display: -webkit-flex; display: flex; box-sizing: border-box; width: 100%; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"uni-list-cell-navigate { padding-right: ",[0,36],"; }\n.",[1],"uni-navigate-badge { padding-right: ",[0,50],"; }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-right:after { font-family: uniicons; content: \x27\\E583\x27; position: absolute; right: ",[0,24],"; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom:after { font-family: uniicons; content: \x27\\E581\x27; position: absolute; right: ",[0,24],"; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-list-cell-navigate.",[1],"uni-navigate-bottom.",[1],"uni-active::after { font-family: uniicons; content: \x27\\E580\x27; position: absolute; right: ",[0,24],"; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"uni-collapse.",[1],"uni-list-cell { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"uni-list-cell-navigate.",[1],"uni-active { background: #eee; }\n.",[1],"uni-list.",[1],"uni-collapse { box-sizing: border-box; height: 0; overflow: hidden; }\n.",[1],"uni-collapse .",[1],"uni-list-cell { padding-left: ",[0,20],"; }\n.",[1],"uni-collapse .",[1],"uni-list-cell::after { left: ",[0,52],"; }\n.",[1],"uni-list.",[1],"uni-active { height: auto; }\n.",[1],"uni-triplex-row { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; width: 100%; box-sizing: border-box; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; padding: ",[0,22]," ",[0,30],"; }\n.",[1],"uni-triplex-right, .",[1],"uni-triplex-left { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"uni-triplex-left { width: 84%; }\n.",[1],"uni-triplex-left .",[1],"uni-title{ padding:",[0,8]," 0; }\n.",[1],"uni-triplex-left .",[1],"uni-text, .",[1],"uni-triplex-left .",[1],"uni-text-small{color:#999999;}\n.",[1],"uni-triplex-right { width: 16%; text-align: right; }\n.",[1],"uni-media-list { padding: ",[0,22]," ",[0,30],"; box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; }\n.",[1],"uni-navigate-right.",[1],"uni-media-list { padding-right: ",[0,74],"; }\n.",[1],"uni-pull-right { -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -webkit-flex-direction: row-reverse; flex-direction: row-reverse; }\n.",[1],"uni-pull-right\x3e.",[1],"uni-media-list-logo { margin-right: ",[0,0],"; margin-left: ",[0,20],"; }\n.",[1],"uni-media-list-logo { height: ",[0,84],"; width: ",[0,84],"; margin-right: ",[0,20],"; }\n.",[1],"uni-media-list-logo wx-image { height: 100%; width: 100%; }\n.",[1],"uni-media-list-body { height: ",[0,84],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: start; -webkit-align-items: flex-start; align-items: flex-start; overflow: hidden; }\n.",[1],"uni-media-list-text-top { width: 100%; line-height: ",[0,36],"; font-size: ",[0,30],"; }\n.",[1],"uni-media-list-text-bottom { width: 100%; line-height: ",[0,30],"; font-size: ",[0,26],"; color: #8f8f94; }\n.",[1],"uni-grid-9 { background: #f2f2f2; width: ",[0,750],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; flex-wrap: wrap; border-top: ",[0,2]," solid #eee; }\n.",[1],"uni-grid-9-item { width: ",[0,250],"; height: ",[0,200],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; border-bottom: ",[0,2]," solid; border-right: ",[0,2]," solid; border-color: #eee; box-sizing: border-box; }\n.",[1],"no-border-right { border-right: none; }\n.",[1],"uni-grid-9-image { width: ",[0,100],"; height: ",[0,100],"; }\n.",[1],"uni-grid-9-text { width: ",[0,250],"; line-height: ",[0,4],"; height: ",[0,40],"; text-align: center; font-size: ",[0,30],"; }\n.",[1],"uni-grid-9-item-hover { background: rgba(0, 0, 0, 0.1); }\n.",[1],"uni-uploader { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"uni-uploader-head { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"uni-uploader-info { color: #B2B2B2; }\n.",[1],"uni-uploader-body { margin-top: ",[0,16],"; }\n.",[1],"uni-uploader__files { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"uni-uploader__file { margin: ",[0,10],"; width: ",[0,210],"; height: ",[0,210],"; }\n.",[1],"uni-uploader__img { display: block; width: ",[0,210],"; height: ",[0,210],"; }\n.",[1],"uni-uploader__input-box { position: relative; margin:",[0,10],"; width: ",[0,208],"; height: ",[0,208],"; border: ",[0,2]," solid #D9D9D9; }\n.",[1],"uni-uploader__input-box:before, .",[1],"uni-uploader__input-box:after { content: \x22 \x22; position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #D9D9D9; }\n.",[1],"uni-uploader__input-box:before { width: ",[0,4],"; height: ",[0,79],"; }\n.",[1],"uni-uploader__input-box:after { width: ",[0,79],"; height: ",[0,4],"; }\n.",[1],"uni-uploader__input-box:active { border-color: #999999; }\n.",[1],"uni-uploader__input-box:active:before, .",[1],"uni-uploader__input-box:active:after { background-color: #999999; }\n.",[1],"uni-uploader__input { position: absolute; z-index: 1; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; }\n.",[1],"feedback-title { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: ",[0,20],"; color: #8f8f94; font-size: ",[0,28],"; }\n.",[1],"feedback-star-view.",[1],"feedback-title { -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; margin: 0; }\n.",[1],"feedback-quick { position: relative; padding-right: ",[0,40],"; }\n.",[1],"feedback-quick:after { font-family: uniicons; font-size: ",[0,40],"; content: \x27\\E581\x27; position: absolute; right: 0; top: 50%; color: #bbb; -webkit-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"feedback-body { background: #fff; }\n.",[1],"feedback-textare { height: ",[0,200],"; font-size: ",[0,34],"; line-height: ",[0,50],"; width: 100%; box-sizing: border-box; padding: ",[0,20]," ",[0,30]," 0; }\n.",[1],"feedback-input { font-size: ",[0,34],"; height: ",[0,50],"; min-height: ",[0,50],"; padding: ",[0,15]," ",[0,20],"; line-height: ",[0,50],"; }\n.",[1],"feedback-uploader { padding: ",[0,22]," ",[0,20],"; }\n.",[1],"feedback-star { font-family: uniicons; font-size: ",[0,40],"; margin-left: ",[0,6],"; }\n.",[1],"feedback-star-view { margin-left: ",[0,20],"; }\n.",[1],"feedback-star:after { content: \x27\\E408\x27; }\n.",[1],"feedback-star.",[1],"active { color: #FFB400; }\n.",[1],"feedback-star.",[1],"active:after { content: \x27\\E438\x27; }\n.",[1],"feedback-submit { background: #007AFF; color: #FFFFFF; margin: ",[0,20],"; }\n.",[1],"uni-input-group { position: relative; padding: 0; border: 0; background-color: #fff; }\n.",[1],"uni-input-group:before { position: absolute; top: 0; right: 0; left: 0; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-input-group:after { position: absolute; right: 0; bottom: 0; left: 0; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-input-row { position: relative; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; font-size:",[0,28],"; padding: ",[0,22]," ",[0,30],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"uni-input-group .",[1],"uni-input-row:after { position: absolute; right: 0; bottom: 0; left: ",[0,30],"; height: ",[0,2],"; content: \x27\x27; -webkit-transform: scaleY(.5); transform: scaleY(.5); background-color: #c8c7cc; }\n.",[1],"uni-input-row wx-label { line-height: ",[0,70],"; }\n.",[1],"uni-textarea{ width:100%; background:#FFF; }\n.",[1],"uni-textarea wx-textarea{ width:96%; padding:",[0,18]," 2%; line-height:1.6; font-size:",[0,28],"; height:",[0,150],"; }\n.",[1],"uni-tab-bar { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; }\n.",[1],"uni-tab-bar .",[1],"list { width: ",[0,750],"; height: 100%; }\n.",[1],"uni-swiper-tab { width: 100%; white-space: nowrap; line-height: ",[0,100],"; height: ",[0,100],"; border-bottom: 1px solid #c8c7cc; }\n.",[1],"swiper-tab-list { font-size: ",[0,30],"; width: ",[0,150],"; display: inline-block; text-align: center; color: #555; }\n.",[1],"uni-tab-bar .",[1],"active { color: #007AFF; }\n.",[1],"uni-tab-bar .",[1],"swiper-box { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; width: 100%; height: calc(100% - ",[0,100],"); }\n.",[1],"uni-tab-bar-loading{ padding:",[0,20]," 0; }\n.",[1],"uni-comment{padding:",[0,5]," 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex:1; -webkit-flex-grow:1; flex-grow:1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column;}\n.",[1],"uni-comment-list{-webkit-flex-wrap:nowrap;flex-wrap:nowrap; padding:",[0,10]," 0; margin:",[0,10]," 0; width:100%; display: -webkit-box; display: -webkit-flex; display: flex;}\n.",[1],"uni-comment-face{width:",[0,70],"; height:",[0,70],"; border-radius:100%; margin-right:",[0,20],"; -webkit-flex-shrink:0; flex-shrink:0; overflow:hidden;}\n.",[1],"uni-comment-face wx-image{width:100%; border-radius:100%;}\n.",[1],"uni-comment-body{width:100%;}\n.",[1],"uni-comment-top{line-height:1.5em; -webkit-box-pack:justify; -webkit-justify-content:space-between; justify-content:space-between;}\n.",[1],"uni-comment-top wx-text{color:#0A98D5; font-size:",[0,24],";}\n.",[1],"uni-comment-date{line-height:",[0,38],"; -webkit-box-orient:horizontal; -webkit-box-direction:normal; -webkit-flex-direction:row; flex-direction:row; -webkit-box-pack:justify; -webkit-justify-content:space-between; justify-content:space-between; display:-webkit-box !important; display:-webkit-flex !important; display:flex !important; -webkit-box-flex:1; -webkit-flex-grow:1; flex-grow:1;}\n.",[1],"uni-comment-date wx-view{color:#666666; font-size:",[0,24],"; line-height:",[0,38],";}\n.",[1],"uni-comment-content{line-height:1.6em; font-size:",[0,28],"; padding:",[0,8]," 0;}\n.",[1],"uni-comment-replay-btn{background:#FFF; font-size:",[0,24],"; line-height:",[0,28],"; padding:",[0,5]," ",[0,20],"; border-radius:",[0,30],"; color:#333 !important; margin:0 ",[0,10],";}\n.",[1],"uni-swiper-msg{width:100%; padding:",[0,12]," 0; -webkit-flex-wrap:nowrap; flex-wrap:nowrap; display:-webkit-box; display:-webkit-flex; display:flex;}\n.",[1],"uni-swiper-msg-icon{width:",[0,50],"; margin-right:",[0,20],";}\n.",[1],"uni-swiper-msg-icon wx-image{width:100%; -webkit-flex-shrink:0; flex-shrink:0;}\n.",[1],"uni-swiper-msg wx-swiper{width:100%; height:",[0,50],";}\n.",[1],"uni-swiper-msg wx-swiper-item{line-height:",[0,50],";}\n.",[1],"uni-product-list { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; -webkit-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; }\n.",[1],"uni-product { padding: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"image-view { height: ",[0,330],"; width: ",[0,330],"; margin:",[0,12]," 0; }\n.",[1],"uni-product-image { height: ",[0,330],"; width: ",[0,330],"; }\n.",[1],"uni-product-title { width: ",[0,300],"; word-break: break-all; display: -webkit-box; overflow: hidden; line-height:1.5; text-overflow: ellipsis; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }\n.",[1],"uni-product-price { margin-top:",[0,10],"; font-size: ",[0,28],"; line-height:1.5; position: relative; }\n.",[1],"uni-product-price-original { color: #e80080; }\n.",[1],"uni-product-price-favour { color: #888888; text-decoration: line-through; margin-left: ",[0,10],"; }\n.",[1],"uni-product-tip { position: absolute; right: ",[0,10],"; background-color: #ff3333; color: #ffffff; padding: 0 ",[0,10],"; border-radius: ",[0,5],"; }\n.",[1],"uni-timeline { margin: ",[0,35]," 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; position: relative; }\n.",[1],"uni-timeline-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; position: relative; padding-bottom: ",[0,20],"; box-sizing: border-box; overflow: hidden; }\n.",[1],"uni-timeline-item .",[1],"uni-timeline-item-keynode { width: ",[0,160],"; -webkit-flex-shrink: 0; flex-shrink: 0; box-sizing: border-box; padding-right: ",[0,20],"; text-align: right; line-height: ",[0,65],"; }\n.",[1],"uni-timeline-item .",[1],"uni-timeline-item-divider { -webkit-flex-shrink: 0; flex-shrink: 0; position: relative; width: ",[0,30],"; height: ",[0,30],"; top: ",[0,15],"; border-radius: 50%; background-color: #bbb; }\n.",[1],"uni-timeline-item-divider::before, .",[1],"uni-timeline-item-divider::after { position: absolute; left: ",[0,15],"; width: ",[0,1],"; height: 100vh; content: \x27\x27; background: inherit; }\n.",[1],"uni-timeline-item-divider::before { bottom: 100%; }\n.",[1],"uni-timeline-item-divider::after { top: 100%; }\n.",[1],"uni-timeline-last-item .",[1],"uni-timeline-item-divider:after { display: none; }\n.",[1],"uni-timeline-first-item .",[1],"uni-timeline-item-divider:before { display: none; }\n.",[1],"uni-timeline-item .",[1],"uni-timeline-item-content { padding-left: ",[0,20],"; }\n.",[1],"uni-timeline-last-item .",[1],"bottom-border::after{ display: none; }\n.",[1],"uni-timeline-item-content .",[1],"datetime{ color: #CCCCCC; }\n.",[1],"uni-timeline-last-item .",[1],"uni-timeline-item-divider{ background-color: #1AAD19; }\n.",[1],"uni-icon { font-family: uniicons; font-size: 24px; font-weight: normal; font-style: normal; line-height: 1; display: inline-block; text-decoration: none; -webkit-font-smoothing: antialiased; }\n.",[1],"uni-icon.",[1],"uni-active { color: #007aff; }\n.",[1],"uni-icon-contact:before { content: \x27\\E100\x27; }\n.",[1],"uni-icon-person:before { content: \x27\\E101\x27; }\n.",[1],"uni-icon-personadd:before { content: \x27\\E102\x27; }\n.",[1],"uni-icon-contact-filled:before { content: \x27\\E130\x27; }\n.",[1],"uni-icon-person-filled:before { content: \x27\\E131\x27; }\n.",[1],"uni-icon-personadd-filled:before { content: \x27\\E132\x27; }\n.",[1],"uni-icon-phone:before { content: \x27\\E200\x27; }\n.",[1],"uni-icon-email:before { content: \x27\\E201\x27; }\n.",[1],"uni-icon-chatbubble:before { content: \x27\\E202\x27; }\n.",[1],"uni-icon-chatboxes:before { content: \x27\\E203\x27; }\n.",[1],"uni-icon-phone-filled:before { content: \x27\\E230\x27; }\n.",[1],"uni-icon-email-filled:before { content: \x27\\E231\x27; }\n.",[1],"uni-icon-chatbubble-filled:before { content: \x27\\E232\x27; }\n.",[1],"uni-icon-chatboxes-filled:before { content: \x27\\E233\x27; }\n.",[1],"uni-icon-weibo:before { content: \x27\\E260\x27; }\n.",[1],"uni-icon-weixin:before { content: \x27\\E261\x27; }\n.",[1],"uni-icon-pengyouquan:before { content: \x27\\E262\x27; }\n.",[1],"uni-icon-chat:before { content: \x27\\E263\x27; }\n.",[1],"uni-icon-qq:before { content: \x27\\E264\x27; }\n.",[1],"uni-icon-videocam:before { content: \x27\\E300\x27; }\n.",[1],"uni-icon-camera:before { content: \x27\\E301\x27; }\n.",[1],"uni-icon-mic:before { content: \x27\\E302\x27; }\n.",[1],"uni-icon-location:before { content: \x27\\E303\x27; }\n.",[1],"uni-icon-mic-filled:before, .",[1],"uni-icon-speech:before { content: \x27\\E332\x27; }\n.",[1],"uni-icon-location-filled:before { content: \x27\\E333\x27; }\n.",[1],"uni-icon-micoff:before { content: \x27\\E360\x27; }\n.",[1],"uni-icon-image:before { content: \x27\\E363\x27; }\n.",[1],"uni-icon-map:before { content: \x27\\E364\x27; }\n.",[1],"uni-icon-compose:before { content: \x27\\E400\x27; }\n.",[1],"uni-icon-trash:before { content: \x27\\E401\x27; }\n.",[1],"uni-icon-upload:before { content: \x27\\E402\x27; }\n.",[1],"uni-icon-download:before { content: \x27\\E403\x27; }\n.",[1],"uni-icon-close:before { content: \x27\\E404\x27; }\n.",[1],"uni-icon-redo:before { content: \x27\\E405\x27; }\n.",[1],"uni-icon-undo:before { content: \x27\\E406\x27; }\n.",[1],"uni-icon-refresh:before { content: \x27\\E407\x27; }\n.",[1],"uni-icon-star:before { content: \x27\\E408\x27; }\n.",[1],"uni-icon-plus:before { content: \x27\\E409\x27; }\n.",[1],"uni-icon-minus:before { content: \x27\\E410\x27; }\n.",[1],"uni-icon-circle:before, .",[1],"uni-icon-checkbox:before { content: \x27\\E411\x27; }\n.",[1],"uni-icon-close-filled:before, .",[1],"uni-icon-clear:before { content: \x27\\E434\x27; }\n.",[1],"uni-icon-refresh-filled:before { content: \x27\\E437\x27; }\n.",[1],"uni-icon-star-filled:before { content: \x27\\E438\x27; }\n.",[1],"uni-icon-plus-filled:before { content: \x27\\E439\x27; }\n.",[1],"uni-icon-minus-filled:before { content: \x27\\E440\x27; }\n.",[1],"uni-icon-circle-filled:before { content: \x27\\E441\x27; }\n.",[1],"uni-icon-checkbox-filled:before { content: \x27\\E442\x27; }\n.",[1],"uni-icon-closeempty:before { content: \x27\\E460\x27; }\n.",[1],"uni-icon-refreshempty:before { content: \x27\\E461\x27; }\n.",[1],"uni-icon-reload:before { content: \x27\\E462\x27; }\n.",[1],"uni-icon-starhalf:before { content: \x27\\E463\x27; }\n.",[1],"uni-icon-spinner:before { content: \x27\\E464\x27; }\n.",[1],"uni-icon-spinner-cycle:before { content: \x27\\E465\x27; }\n.",[1],"uni-icon-search:before { content: \x27\\E466\x27; }\n.",[1],"uni-icon-plusempty:before { content: \x27\\E468\x27; }\n.",[1],"uni-icon-forward:before { content: \x27\\E470\x27; }\n.",[1],"uni-icon-back:before, .",[1],"uni-icon-left-nav:before { content: \x27\\E471\x27; }\n.",[1],"uni-icon-checkmarkempty:before { content: \x27\\E472\x27; }\n.",[1],"uni-icon-home:before { content: \x27\\E500\x27; }\n.",[1],"uni-icon-navigate:before { content: \x27\\E501\x27; }\n.",[1],"uni-icon-gear:before { content: \x27\\E502\x27; }\n.",[1],"uni-icon-paperplane:before { content: \x27\\E503\x27; }\n.",[1],"uni-icon-info:before { content: \x27\\E504\x27; }\n.",[1],"uni-icon-help:before { content: \x27\\E505\x27; }\n.",[1],"uni-icon-locked:before { content: \x27\\E506\x27; }\n.",[1],"uni-icon-more:before { content: \x27\\E507\x27; }\n.",[1],"uni-icon-flag:before { content: \x27\\E508\x27; }\n.",[1],"uni-icon-home-filled:before { content: \x27\\E530\x27; }\n.",[1],"uni-icon-gear-filled:before { content: \x27\\E532\x27; }\n.",[1],"uni-icon-info-filled:before { content: \x27\\E534\x27; }\n.",[1],"uni-icon-help-filled:before { content: \x27\\E535\x27; }\n.",[1],"uni-icon-more-filled:before { content: \x27\\E537\x27; }\n.",[1],"uni-icon-settings:before { content: \x27\\E560\x27; }\n.",[1],"uni-icon-list:before { content: \x27\\E562\x27; }\n.",[1],"uni-icon-bars:before { content: \x27\\E563\x27; }\n.",[1],"uni-icon-loop:before { content: \x27\\E565\x27; }\n.",[1],"uni-icon-paperclip:before { content: \x27\\E567\x27; }\n.",[1],"uni-icon-eye:before { content: \x27\\E568\x27; }\n.",[1],"uni-icon-arrowup:before { content: \x27\\E580\x27; }\n.",[1],"uni-icon-arrowdown:before { content: \x27\\E581\x27; }\n.",[1],"uni-icon-arrowleft:before { content: \x27\\E582\x27; }\n.",[1],"uni-icon-arrowright:before { content: \x27\\E583\x27; }\n.",[1],"uni-icon-arrowthinup:before { content: \x27\\E584\x27; }\n.",[1],"uni-icon-arrowthindown:before { content: \x27\\E585\x27; }\n.",[1],"uni-icon-arrowthinleft:before { content: \x27\\E586\x27; }\n.",[1],"uni-icon-arrowthinright:before { content: \x27\\E587\x27; }\n.",[1],"uni-icon-pulldown:before { content: \x27\\E588\x27; }\n.",[1],"uni-icon-scan:before { content: \x22\\E612\x22; }\n.",[1],"uni-divider{ height: ",[0,110],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align:center; -webkit-align-items:center; align-items:center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; position: relative; }\n.",[1],"uni-divider__content{ font-size: ",[0,28],"; color: #999; padding: 0 ",[0,20],"; position: relative; z-index: 101; background: #F4F5F6; }\n.",[1],"uni-divider__line{ background-color: #CCCCCC; height: 1px; width: 100%; position: absolute; z-index: 100; top: 50%; left: 0; -webkit-transform: translateY(50%); transform: translateY(50%); }\n@font-face {font-family: \x22iconfont\x22; src: url(\x27data:application/x-font-woff2;charset\x3dutf-8;base64,d09GMgABAAAAAAT8AAsAAAAACkQAAASuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDVgqHBIVpATYCJAMcCxAABCAFhG0HdRvOCBEVpDmQ/TywbRXrRRnjhnuoD9PgMiyiQ+53BNWy9ezuhU9JERQKXr4nyujAUR4UWSEsKIUUCJU0+v9epz75KyQFCKUSkBUC+k7YKZCkEOAclw1TMxV8mdqdGkDmR9x++2mBFQkToUqyFn0H/nrN0Yf85ZLC83N6Sk3ICbn/OVzafF7Ui+bHKJe9BpXGPe8Ftm9uHkvwjs5O2E9FupoXu4N9O4GubdgDxMm1O09AX8H7AnGXGB8J+i6NEoMLrbwOObVAfICONtVLFIB3/efjDyT0QVJl4Dtdxl2NgQvaNO0Wwv8xhCAMuDwTbmeRsQRQiLdQyysgM7IEpPt5CukUQF8rKd/p2jLta22Tduv/f0pudgk4FvqG4h88QpIVlZqoAZL+GXsdrflOk1XiI02HSoK0DCoZ0tdQKZA2QaWCdAtSo4pudg8xB4gxiBvCriR5dpNCre5z8dmBkYmJ5QZhJJyksTGJ1dEajb9azSmVT1QqqcFyssDEan9BJjZYSXn8Vm5dHJNka+m7qKR+DxdsRNGG3XAWxAHeqmnS13Jgm2VtWJEuowar7vKNvdafy0lJEUXaqAEhylAuPHGgaQT1ZdF+8aJsWG4ZEyfIB7FVMhvLtw3KreNi3sqHZTbhNM9bhTat0SaEsSBYhzWvU5TUhLcMePtd/xbzVkYDGw7BLevexu/fhlK4qa9hoEXW3C/vbUylo8LNwDQd6Gge9jbsHbQ1V4XoUCQe8jIZGCEolkRLqGC5aKO8VjI7K6kVTJWlNNlJe5uQQoEgbDqzIDh/uGDDmSpMYwVBaqYwk8KpqWWyeff9pO7vf7Y9xmWPvrRxj+UNrmRvtc1zUuubap92WLmYeXC5iKN6JJpFVC8ImoUexDxfDtVfOplzr/Z4vDhzoRpuk62/PswiMMH4gNNfMWA6K+YqyHOhVUwcsg3P7XR0KNzrPVejo7h41bPeXQFHfvVTVok6zxXctkfd4e1eePnH4CZzMsr+InMR/7GzjjsVaX9BWc79Mjl8a/CXUhcXxOqXkSedxFM6k9wGZ5417D5tc7rbVp1maBRD0jDDMpblLKcS+aZgmk+YScP/MYPNTwhOZI6VuwyL2eFyBjND5bQaygCwVqJRxOp4FRqhI39KsEQWZhlE1rAJiD0q/8a9/bfr4SZn/luaBPjK7A+GZ60koZxoK5GaewxyUw6VL5+1TXl3lmsEGlebLJTQFRMce44p7JQnW6TOJbQWNiSNLchaO8iCXUKlZwW11j507cH1s3tmkAVIFANgF+zfBARTPyBhbAMQU79IEvsHOqz9gy7T6AKFi8Ulad4RJ3tGI3iD6wuipdpJepkY+Rf0Whp28nXSJ3KOftjsO+CNn7FGLuOIfPdbEQeOqYIT3Q3LkqBhSmhlGUSa3Wp/XNgzLS1VrYnLGDIEugFXLyCySM2ps8XE9/0XyFMlg2Pafhg/IZbF5cHG0joF8iypU7Vty+rsztsSwp13OYxUwAkmVIoIAU34pgRZYinkCDV2VqdxLq1kWb+sWs5z0MWPaiJFjhJV1NFES/eBNCsNntGQLJpqxtIkxV0LqXfxLAfSr3g5ZORJH2oDDnMwtW7WVgsAAA\x3d\x3d\x27) format(\x27woff2\x27); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-sousuo:before { content: \x22\\E86E\x22; }\n.",[1],"icon-xiaoxi:before { content: \x22\\E86F\x22; }\n.",[1],"icon-xialajiantouxiao:before { content: \x22\\E87E\x22; }\n.",[1],"icon-shouqijiantouxiao:before { content: \x22\\E892\x22; }\n.",[1],"icon-gouwuche:before { content: \x22\\E899\x22; }\n.",[1],"icon-shanchu:before { content: \x22\\E8C1\x22; }\n.",[1],"font-color{ color: #636263; }\n.",[1],"font-active-color{ color: #49DBFB; }\n.",[1],"bg-color{ background-color: #42B7FB; }\n::-webkit-scrollbar { display: none; width: 0 !important; height: 0 !important; -webkit-appearance: none; background: transparent; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:1589:1)",{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:1589:1)",{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/common/Card.wxss']=setCssToHead([".",[1],"card.",[1],"data-v-199da416{ display: -webkit-box; display: -webkit-flex; display: flex; padding: ",[0,20]," 0; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; font-weight: bold; }\n.",[1],"card-name.",[1],"data-v-199da416{ padding: 0 ",[0,20],"; font-size: ",[0,32],"; }\n",],undefined,{path:"./components/common/Card.wxss"});    
__wxAppCode__['components/common/Card.wxml']=$gwx('./components/common/Card.wxml');

__wxAppCode__['components/common/Commondity.wxss']=setCssToHead([".",[1],"common-dity.",[1],"data-v-0d9d638a{ display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"commondity-item.",[1],"data-v-0d9d638a{ padding-bottom: ",[0,20],"; }\n.",[1],"commondity-img.",[1],"data-v-0d9d638a{ width: 100%; }\n.",[1],"commondity-content.",[1],"data-v-0d9d638a{ text-align: center; }\n.",[1],"commondity-name.",[1],"data-v-0d9d638a{ overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient:vertical; color: #333333; word-break: break-all; padding:",[0,6]," ",[0,20],"; }\n.",[1],"oprice.",[1],"data-v-0d9d638a{ text-decoration:line-through; color: #999999; font-size: ",[0,24],"; }\n.",[1],"discount.",[1],"data-v-0d9d638a{ border-radius: ",[0,4],"; border: 1px solid #FF3333; padding: ",[0,2]," ",[0,10],"; font-size: ",[0,20],"; color:#FF3333; }\n",],undefined,{path:"./components/common/Commondity.wxss"});    
__wxAppCode__['components/common/Commondity.wxml']=$gwx('./components/common/Commondity.wxml');

__wxAppCode__['components/common/CommondityList.wxss']=undefined;    
__wxAppCode__['components/common/CommondityList.wxml']=$gwx('./components/common/CommondityList.wxml');

__wxAppCode__['components/index/Banner.wxss']=setCssToHead([".",[1],"banner.",[1],"data-v-3f5a53d7{ width: 100%; height: ",[0,300],"; }\n.",[1],"banner-img.",[1],"data-v-3f5a53d7{ width: 100%; height: ",[0,300],"; }\n",],undefined,{path:"./components/index/Banner.wxss"});    
__wxAppCode__['components/index/Banner.wxml']=$gwx('./components/index/Banner.wxml');

__wxAppCode__['components/index/Hot.wxss']=undefined;    
__wxAppCode__['components/index/Hot.wxml']=$gwx('./components/index/Hot.wxml');

__wxAppCode__['components/index/Icons.wxss']=setCssToHead([".",[1],"icons.",[1],"data-v-8b38fb82{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"icons-item.",[1],"data-v-8b38fb82{ width: 25%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; padding-top: ",[0,20],"; }\n.",[1],"icons-img.",[1],"data-v-8b38fb82{ width: ",[0,110],"; height: ",[0,110],"; }\n",],undefined,{path:"./components/index/Icons.wxss"});    
__wxAppCode__['components/index/Icons.wxml']=$gwx('./components/index/Icons.wxml');

__wxAppCode__['components/index/IndexSwiper.wxss']=setCssToHead(["wx-swiper.",[1],"data-v-27f0814f{ width: 100%; height: ",[0,400],"; }\n.",[1],"swiper-img.",[1],"data-v-27f0814f{ width: 100%; height: ",[0,400],"; }\n",],undefined,{path:"./components/index/IndexSwiper.wxss"});    
__wxAppCode__['components/index/IndexSwiper.wxml']=$gwx('./components/index/IndexSwiper.wxml');

__wxAppCode__['components/index/Recommend.wxss']=setCssToHead([".",[1],"recommend.",[1],"data-v-2113df3e{ padding: ",[0,20],"; }\n.",[1],"recommend-item.",[1],"data-v-2113df3e{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; border-radius: ",[0,20],"; border: ",[0,2]," solid #D8D8D8; overflow: hidden; margin: ",[0,20]," 0; }\n.",[1],"item-big.",[1],"data-v-2113df3e{ width: 100%; height: ",[0,300],"; }\n.",[1],"item-small.",[1],"data-v-2113df3e{ width: 100%; height: ",[0,240],"; }\n.",[1],"item-img.",[1],"data-v-2113df3e{ width: 33.33333%; height: ",[0,240],"; }\n",],undefined,{path:"./components/index/Recommend.wxss"});    
__wxAppCode__['components/index/Recommend.wxml']=$gwx('./components/index/Recommend.wxml');

__wxAppCode__['components/index/Shop.wxss']=setCssToHead([".",[1],"shop-big.",[1],"data-v-6fe0a361{ width: 100%; height: ",[0,350],"; }\n.",[1],"scroll-content.",[1],"data-v-6fe0a361{ width: 100%; }\n.",[1],"scroll-item.",[1],"data-v-6fe0a361{ display: inline-block; }\n",],undefined,{path:"./components/index/Shop.wxss"});    
__wxAppCode__['components/index/Shop.wxml']=$gwx('./components/index/Shop.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"demo1.",[1],"data-v-6e86439f{ background-color:#007AFF; }\n.",[1],"custom-nav.",[1],"data-v-6e86439f{ height: ",[0,200],"; width: 100%; line-height: ",[0,200],"; text-align: center; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"scroll-content.",[1],"data-v-6e86439f{ width: 100%; height: ",[0,80],"; white-space: nowrap; }\n.",[1],"scroll-item.",[1],"data-v-6e86439f{ font-size: ",[0,32],"; padding: ",[0,10]," ",[0,30],"; display: inline-block; }\n.",[1],"font-active-color.",[1],"data-v-6e86439f{ padding: ",[0,10]," 0; border-bottom: ",[0,6]," solid #49DBFB; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/list/list.wxss']=undefined;    
__wxAppCode__['pages/list/list.wxml']=$gwx('./pages/list/list.wxml');

__wxAppCode__['pages/my/my.wxss']=undefined;    
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/shopCart/shopCart.wxss']=undefined;    
__wxAppCode__['pages/shopCart/shopCart.wxml']=$gwx('./pages/shopCart/shopCart.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
