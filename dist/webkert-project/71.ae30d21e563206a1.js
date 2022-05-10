"use strict";(self.webpackChunkwebkert_project=self.webpackChunkwebkert_project||[]).push([[71],{6185:(le,N,o)=>{o.d(N,{ST:()=>Ne});var l=o(5e3),L=o(4986),M=o(8306),g=o(8996),b=o(9646),d=o(5813),de=o(4482),ue=o(5403);function G(){return(0,de.e)((s,e)=>{let t,r=!1;s.subscribe((0,ue.x)(e,i=>{const a=t;t=i,r&&e.next([a,i]),r=!0}))})}var W=o(8675),m=o(4004),B=o(5026),ce=o(1884),Q=o(9300),T=o(2011),he=o(9808),fe=(o(5881),o(3942)),n=o(5525),V=o(2090),ge=o(4859);function R(s,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new n.WA("invalid-argument",`Invalid options passed to function ${s}(): You cannot specify both "merge" and "mergeFields".`);return e}function Z(){if("undefined"==typeof Uint8Array)throw new n.WA("unimplemented","Uint8Arrays are not available in this environment.")}function Y(){if(!(0,n.Me)())throw new n.WA("unimplemented","Blobs are unavailable in Firestore in this environment.")}class F{constructor(e){this._delegate=e}static fromBase64String(e){return Y(),new F(n.Jj.fromBase64String(e))}static fromUint8Array(e){return Z(),new F(n.Jj.fromUint8Array(e))}toBase64(){return Y(),this._delegate.toBase64()}toUint8Array(){return Z(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}function $(s){return function ye(s,e){if("object"!=typeof s||null===s)return!1;const t=s;for(const r of e)if(r in t&&"function"==typeof t[r])return!0;return!1}(s,["next","error","complete"])}class ve{enableIndexedDbPersistence(e,t){return(0,n.ST)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return(0,n.fH)(e._delegate)}clearIndexedDbPersistence(e){return(0,n.Fc)(e._delegate)}}class X{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof n.l7||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&(0,n.yq)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,r={}){(0,n.at)(this._delegate,e,t,r)}enableNetwork(){return(0,n.Ix)(this._delegate)}disableNetwork(){return(0,n.TF)(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,(0,n.Wi)("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,n.Mx)(this._delegate)}onSnapshotsInSync(e){return(0,n.sc)(this._delegate,e)}get app(){if(!this._appCompat)throw new n.WA("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new C(this,(0,n.hJ)(this._delegate,e))}catch(t){throw u(t,"collection()","Firestore.collection()")}}doc(e){try{return new f(this,(0,n.JU)(this._delegate,e))}catch(t){throw u(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new c(this,(0,n.B$)(this._delegate,e))}catch(t){throw u(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return(0,n.i3)(this._delegate,t=>e(new H(this,t)))}batch(){return(0,n.qY)(this._delegate),new k(new n.PU(this._delegate,e=>(0,n.GL)(this._delegate,e)))}loadBundle(e){return(0,n.Pb)(this._delegate,e)}namedQuery(e){return(0,n.L$)(this._delegate,e).then(t=>t?new c(this,t):null)}}class D extends n.u7{constructor(e){super(),this.firestore=e}convertBytes(e){return new F(new n.Jj(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return f.forKey(t,this.firestore,null)}}class H{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new D(e)}get(e){const t=w(e);return this._delegate.get(t).then(r=>new I(this._firestore,new n.xU(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=w(e);return r?(R("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const a=w(e);return 2===arguments.length?this._delegate.update(a,t):this._delegate.update(a,t,r,...i),this}delete(e){const t=w(e);return this._delegate.delete(t),this}}class k{constructor(e){this._delegate=e}set(e,t,r){const i=w(e);return r?(R("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const a=w(e);return 2===arguments.length?this._delegate.update(a,t):this._delegate.update(a,t,r,...i),this}delete(e){const t=w(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class v{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new n.$q(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new S(this._firestore,r),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=v.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let a=i.get(t);return a||(a=new v(e,new D(e),t),i.set(t,a)),a}}v.INSTANCES=new WeakMap;class f{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new D(e)}static forPath(e,t,r){if(e.length%2!=0)throw new n.WA("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new f(t,new n.my(t._delegate,r,new n.Ky(e)))}static forKey(e,t,r){return new f(t,new n.my(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new C(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new C(this.firestore,(0,n.hJ)(this._delegate,e))}catch(t){throw u(t,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=(0,V.m9)(e))instanceof n.my&&(0,n.Eo)(this._delegate,e)}set(e,t){t=R("DocumentReference.set",t);try{return t?(0,n.pl)(this._delegate,e,t):(0,n.pl)(this._delegate,e)}catch(r){throw u(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return 1===arguments.length?(0,n.r7)(this._delegate,e):(0,n.r7)(this._delegate,e,t,...r)}catch(i){throw u(i,"updateDoc()","DocumentReference.update()")}}delete(){return(0,n.oe)(this._delegate)}onSnapshot(...e){const t=ee(e),r=te(e,i=>new I(this.firestore,new n.xU(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return(0,n.cf)(this._delegate,t,r)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?(0,n.kl)(this._delegate):"server"===(null==e?void 0:e.source)?(0,n.Xk)(this._delegate):(0,n.QT)(this._delegate),t.then(r=>new I(this.firestore,new n.xU(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new f(this.firestore,this._delegate.withConverter(e?v.getInstance(this.firestore,e):null))}}function u(s,e,t){return s.message=s.message.replace(e,t),s}function ee(s){for(const e of s)if("object"==typeof e&&!$(e))return e;return{}}function te(s,e){var t,r;let i;return i=$(s[0])?s[0]:$(s[1])?s[1]:"function"==typeof s[0]?{next:s[0],error:s[1],complete:s[2]}:{next:s[1],error:s[2],complete:s[3]},{next:a=>{i.next&&i.next(e(a))},error:null===(t=i.error)||void 0===t?void 0:t.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class I{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new f(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return(0,n.qK)(this._delegate,e._delegate)}}class S extends I{data(e){const t=this._delegate.data(e);return(0,n.K9)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class c{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new D(e)}where(e,t,r){try{return new c(this.firestore,(0,n.IO)(this._delegate,(0,n.ar)(e,t,r)))}catch(i){throw u(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new c(this.firestore,(0,n.IO)(this._delegate,(0,n.Xo)(e,t)))}catch(r){throw u(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new c(this.firestore,(0,n.IO)(this._delegate,(0,n.b9)(e)))}catch(t){throw u(t,"limit()","Query.limit()")}}limitToLast(e){try{return new c(this.firestore,(0,n.IO)(this._delegate,(0,n.vh)(e)))}catch(t){throw u(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new c(this.firestore,(0,n.IO)(this._delegate,(0,n.e0)(...e)))}catch(t){throw u(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new c(this.firestore,(0,n.IO)(this._delegate,(0,n.TQ)(...e)))}catch(t){throw u(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new c(this.firestore,(0,n.IO)(this._delegate,(0,n.Lx)(...e)))}catch(t){throw u(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new c(this.firestore,(0,n.IO)(this._delegate,(0,n.Wu)(...e)))}catch(t){throw u(t,"endAt()","Query.endAt()")}}isEqual(e){return(0,n.iE)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?(0,n.UQ)(this._delegate):"server"===(null==e?void 0:e.source)?(0,n.zN)(this._delegate):(0,n.PL)(this._delegate),t.then(r=>new q(this.firestore,new n.W(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=ee(e),r=te(e,i=>new q(this.firestore,new n.W(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return(0,n.cf)(this._delegate,t,r)}withConverter(e){return new c(this.firestore,this._delegate.withConverter(e?v.getInstance(this.firestore,e):null))}}class _e{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new S(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class q{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new c(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new S(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new _e(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new S(this._firestore,r))})}isEqual(e){return(0,n.qK)(this._delegate,e._delegate)}}class C extends c{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new f(this.firestore,e):null}doc(e){try{return new f(this.firestore,void 0===e?(0,n.JU)(this._delegate):(0,n.JU)(this._delegate,e))}catch(t){throw u(t,"doc()","CollectionReference.doc()")}}add(e){return(0,n.ET)(this._delegate,e).then(t=>new f(this.firestore,t))}isEqual(e){return(0,n.Eo)(this._delegate,e._delegate)}withConverter(e){return new C(this.firestore,this._delegate.withConverter(e?v.getInstance(this.firestore,e):null))}}function w(s){return(0,n.Cf)(s,n.my)}class j{constructor(...e){this._delegate=new n.Lz(...e)}static documentId(){return new j(n.Xb.keyField().canonicalString())}isEqual(e){return(e=(0,V.m9)(e))instanceof n.Lz&&this._delegate._internalPath.isEqual(e._internalPath)}}class _{constructor(e){this._delegate=e}static serverTimestamp(){const e=(0,n.Bt)();return e._methodName="FieldValue.serverTimestamp",new _(e)}static delete(){const e=(0,n.AK)();return e._methodName="FieldValue.delete",new _(e)}static arrayUnion(...e){const t=(0,n.vr)(...e);return t._methodName="FieldValue.arrayUnion",new _(t)}static arrayRemove(...e){const t=(0,n.Ab)(...e);return t._methodName="FieldValue.arrayRemove",new _(t)}static increment(e){const t=(0,n.nP)(e);return t._methodName="FieldValue.increment",new _(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}const Ce={Firestore:X,GeoPoint:n.F8,Timestamp:n.EK,Blob:F,Transaction:H,WriteBatch:k,DocumentReference:f,DocumentSnapshot:I,Query:c,QueryDocumentSnapshot:S,QuerySnapshot:q,CollectionReference:C,FieldPath:j,FieldValue:_,setLogLevel:function we(s){(0,n.Ub)(s)},CACHE_SIZE_UNLIMITED:n.IX};!function Ie(s){(function Fe(s,e){s.INTERNAL.registerComponent(new ge.wA("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Ce)))})(s,(e,t)=>new X(e,t,new ve)),s.registerVersion("@firebase/firestore-compat","0.1.17")}(fe.Z);var y=o(1205),Se=o(7128);function re(s,e){return function Ee(s,e=L.z){return new M.y(t=>{let r;return null!=e?e.schedule(()=>{r=s.onSnapshot({includeMetadataChanges:!0},t)}):r=s.onSnapshot({includeMetadataChanges:!0},t),()=>{null!=r&&r()}})}(s,e)}function J(s,e){return re(s,e).pipe((0,m.U)(t=>({payload:t,type:"query"})))}function P(s,e){return J(s,e).pipe((0,W.O)(void 0),G(),(0,m.U)(([t,r])=>{const i=r.payload.docChanges(),a=i.map(h=>({type:h.type,payload:h}));return t&&JSON.stringify(t.payload.metadata)!==JSON.stringify(r.payload.metadata)&&r.payload.docs.forEach((h,p)=>{const E=i.find(x=>x.doc.ref.isEqual(h.ref)),U=null==t?void 0:t.payload.docs.find(x=>x.ref.isEqual(h.ref));E&&JSON.stringify(E.doc.metadata)===JSON.stringify(h.metadata)||!E&&U&&JSON.stringify(U.metadata)===JSON.stringify(h.metadata)||a.push({type:"modified",payload:{oldIndex:p,newIndex:p,type:"modified",doc:h}})}),a}))}function se(s,e,t){return P(s,t).pipe((0,B.R)((r,i)=>function Ae(s,e,t){return e.forEach(r=>{t.indexOf(r.type)>-1&&(s=function be(s,e){switch(e.type){case"added":if(!s[e.newIndex]||!s[e.newIndex].doc.ref.isEqual(e.doc.ref))return K(s,e.newIndex,0,e);break;case"modified":if(null==s[e.oldIndex]||s[e.oldIndex].doc.ref.isEqual(e.doc.ref)){if(e.oldIndex!==e.newIndex){const t=s.slice();return t.splice(e.oldIndex,1),t.splice(e.newIndex,0,e),t}return K(s,e.newIndex,1,e)}break;case"removed":if(s[e.oldIndex]&&s[e.oldIndex].doc.ref.isEqual(e.doc.ref))return K(s,e.oldIndex,1)}return s}(s,r))}),s}(r,i.map(a=>a.payload),e),[]),(0,ce.x)(),(0,m.U)(r=>r.map(i=>({type:i.type,payload:i}))))}function K(s,e,t,...r){const i=s.slice();return i.splice(e,t,...r),i}function ne(s){return(!s||0===s.length)&&(s=["added","removed","modified"]),s}o(127);class ie{constructor(e,t,r){this.ref=e,this.query=t,this.afs=r}stateChanges(e){let t=P(this.query,this.afs.schedulers.outsideAngular);return e&&e.length>0&&(t=t.pipe((0,m.U)(r=>r.filter(i=>e.indexOf(i.type)>-1)))),t.pipe((0,W.O)(void 0),G(),(0,Q.h)(([r,i])=>i.length>0||!r),(0,m.U)(([r,i])=>i),d.iC)}auditTrail(e){return this.stateChanges(e).pipe((0,B.R)((t,r)=>[...t,...r],[]))}snapshotChanges(e){const t=ne(e);return se(this.query,t,this.afs.schedulers.outsideAngular).pipe(d.iC)}valueChanges(e={}){return J(this.query,this.afs.schedulers.outsideAngular).pipe((0,m.U)(t=>t.payload.docs.map(r=>e.idField?Object.assign(Object.assign({},r.data()),{[e.idField]:r.id}):r.data())),d.iC)}get(e){return(0,g.D)(this.query.get(e)).pipe(d.iC)}add(e){return this.ref.add(e)}doc(e){return new ae(this.ref.doc(e),this.afs)}}class ae{constructor(e,t){this.ref=e,this.afs=t}set(e,t){return this.ref.set(e,t)}update(e){return this.ref.update(e)}delete(){return this.ref.delete()}collection(e,t){const r=this.ref.collection(e),{ref:i,query:a}=oe(r,t);return new ie(i,a,this.afs)}snapshotChanges(){return function xe(s,e){return re(s,e).pipe((0,W.O)(void 0),G(),(0,m.U)(([t,r])=>r.exists?(null==t?void 0:t.exists)?{payload:r,type:"modified"}:{payload:r,type:"added"}:{payload:r,type:"removed"}))}(this.ref,this.afs.schedulers.outsideAngular).pipe(d.iC)}valueChanges(e={}){return this.snapshotChanges().pipe((0,m.U)(({payload:t})=>e.idField?Object.assign(Object.assign({},t.data()),{[e.idField]:t.id}):t.data()))}get(e){return(0,g.D)(this.ref.get(e)).pipe(d.iC)}}class Te{constructor(e,t){this.query=e,this.afs=t}stateChanges(e){return e&&0!==e.length?P(this.query,this.afs.schedulers.outsideAngular).pipe((0,m.U)(t=>t.filter(r=>e.indexOf(r.type)>-1)),(0,Q.h)(t=>t.length>0),d.iC):P(this.query,this.afs.schedulers.outsideAngular).pipe(d.iC)}auditTrail(e){return this.stateChanges(e).pipe((0,B.R)((t,r)=>[...t,...r],[]))}snapshotChanges(e){const t=ne(e);return se(this.query,t,this.afs.schedulers.outsideAngular).pipe(d.iC)}valueChanges(e={}){return J(this.query,this.afs.schedulers.outsideAngular).pipe((0,m.U)(r=>r.payload.docs.map(i=>e.idField?Object.assign({[e.idField]:i.id},i.data()):i.data())),d.iC)}get(e){return(0,g.D)(this.query.get(e)).pipe(d.iC)}}const De=new l.OlP("angularfire2.enableFirestorePersistence"),Pe=new l.OlP("angularfire2.firestore.persistenceSettings"),Ue=new l.OlP("angularfire2.firestore.settings"),Oe=new l.OlP("angularfire2.firestore.use-emulator");function oe(s,e=(t=>t)){return{query:e(s),ref:s}}let Ne=(()=>{class s{constructor(t,r,i,a,h,p,E,U,x,Le,Me,Ge,We,Be,Re,$e,Qe){this.schedulers=E;const O=(0,T.on)(t,p,r),z=x;Le&&(0,y.nw)(O,p,Me,We,Be,Re,Ge,$e),[this.firestore,this.persistenceEnabled$]=(0,T.cc)(`${O.name}.firestore`,"AngularFirestore",O.name,()=>{const A=p.runOutsideAngular(()=>O.firestore());if(a&&A.settings(a),z&&A.useEmulator(...z),i&&!(0,he.PM)(h)){const qe=()=>{try{return(0,g.D)(A.enablePersistence(U||void 0).then(()=>!0,()=>!1))}catch(je){return"undefined"!=typeof console&&console.warn(je),(0,b.of)(!1)}};return[A,p.runOutsideAngular(qe)]}return[A,(0,b.of)(!1)]},[a,z,i])}collection(t,r){let i;i="string"==typeof t?this.firestore.collection(t):t;const{ref:a,query:h}=oe(i,r),p=this.schedulers.ngZone.run(()=>a);return new ie(p,h,this)}collectionGroup(t,r){const i=r||(h=>h),a=this.firestore.collectionGroup(t);return new Te(i(a),this)}doc(t){let r;r="string"==typeof t?this.firestore.doc(t):t;const i=this.schedulers.ngZone.run(()=>r);return new ae(i,this)}createId(){return this.firestore.collection("_").doc().id}}return s.\u0275fac=function(t){return new(t||s)(l.LFG(T.Dh),l.LFG(T.xv,8),l.LFG(De,8),l.LFG(Ue,8),l.LFG(l.Lbi),l.LFG(l.R0b),l.LFG(d.HU),l.LFG(Pe,8),l.LFG(Oe,8),l.LFG(y.zQ,8),l.LFG(y.Qv,8),l.LFG(y.L6,8),l.LFG(y._Q,8),l.LFG(y.rT,8),l.LFG(y.lh,8),l.LFG(y.f7,8),l.LFG(Se.nm,8))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"any"}),s})()},3071:(le,N,o)=>{o.d(N,{K:()=>M});var l=o(5e3),L=o(6185);let M=(()=>{class g{constructor(d){this.angularFirestore=d,this.collectionName="Users"}createUser(d){return this.angularFirestore.collection(this.collectionName).doc(d.id).set(d)}getUserById(d){return this.angularFirestore.collection(this.collectionName).doc(d).valueChanges()}updateUsername(d){return this.angularFirestore.collection(this.collectionName).doc(d.id).set(d)}}return g.\u0275fac=function(d){return new(d||g)(l.LFG(L.ST))},g.\u0275prov=l.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);