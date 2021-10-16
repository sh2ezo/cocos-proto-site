System.register("chunks:///_virtual/Movement.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,i,r,o,c,s,a,u,p,l,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.defineProperty,r=e.assertThisInitialized,o=e.initializerDefineProperty},function(e){c=e.cclegacy,s=e._decorator,a=e.Node,u=e.random,p=e.Mat4,l=e.Vec3,d=e.Component}],execute:function(){var h,f,m,v,y;c._RF.push({},"abcceoTFotL5IxNo/CT/iWj","Movement",void 0);var T=s.ccclass,M=s.property;e("Movement",(h=T("Movement"),f=M(a),h((y=t((v=function(e){function t(){for(var t,n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return t=e.call.apply(e,[this].concat(c))||this,i(r(t),"speed",20),i(r(t),"currentTime",0),i(r(t),"distance",void 0),o(r(t),"centerNode",y,r(t)),t}n(t,e);var c=t.prototype;return c.start=function(){this.distance=this.node.position.clone().subtract(this.centerNode.position),this.currentTime=60*u()},c.update=function(e){var t=p.IDENTITY.clone().rotate(this.currentTime*this.speed/60*2*Math.PI,l.UNIT_Z);this.node.position=this.distance.clone().transformMat4(t).add(this.centerNode.position),this.currentTime+=e},t}(d)).prototype,"centerNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=v))||m));c._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Movement.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});