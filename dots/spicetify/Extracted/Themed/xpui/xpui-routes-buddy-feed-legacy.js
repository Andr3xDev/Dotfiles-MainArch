"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6548],{65130:(e,s,i)=>{i.r(s),i.d(s,{default:()=>be});var a=i(30758),r=i(4127),t=i(31417),n=i(60749),l=i(95530),c=i(86677),d=i(97500),u=i.n(d),o=i(87578);const m="CvWRWfWfmS9_2fgM7c3A",x="gtJcoAXGeGQ9ochIvg6h",h="diF001PSbmYyyekikwD9",j="R_Dc8rJShBX3HCHsoSsq",g="dAPXjNmPLJI6x_sXJwAp",f="cRB7yMdTUrWxDud8Uqvi",p="RTHphmJ9fFJyJWFe9Kwt",N="cm9IUdJYVsbGCooedALf",v="SN5MVM1k5tAxwKeA7WDr",y="Bpdhrb_he3jzWLv40DpE",b="rV7v8LWgSCAQH6wodc1N",S="fD6FfGUH4oiEHvaEXITg",I="egK4lu76sYvMmma40Vng",P="RItf9PObrjsfieRog2Jj",R="j1tGXZDi8vflz1A_NWQU",k="Qv8skgTQdi726aBDU7h1",w="oiz3mGNiTftvX5tHHGdT",T="jaX1TSMeWI3kuiSaau2B",_="dk6yb9gfDFu9V6rM1BdS",D="mABzBE2Irar9vYpZdr9u",L="Ipv3_ecgOssTDK4Z4uYg",A="TkNHSTmRSrRuhd5EpRQg",U="ZV8pEC8PUrYmlL0YmteP",B="V9CrlOWUnPzlcVRfUjy7",E="Pvf7VacWGW22R2cyG3RZ";var G=i(86070);const C=({showOnlineIndicator:e})=>(0,G.jsxs)("div",{className:T,children:[(0,G.jsxs)("div",{className:_,children:[(0,G.jsx)(o.v,{size:"medium"}),e?(0,G.jsx)("div",{className:D}):null]}),(0,G.jsxs)("div",{className:L,children:[(0,G.jsx)("div",{className:u()(A,U)}),(0,G.jsx)("div",{className:A}),(0,G.jsx)("div",{className:A})]})]}),Q=()=>(0,G.jsxs)("div",{"data-testid":"buddy-feed-empty-state",className:k,children:[(0,G.jsx)(l.E,{as:"p",className:w,children:t.Ru.get("buddy-feed.let-followers-see-your-listening")}),(0,G.jsx)(C,{showOnlineIndicator:!0}),(0,G.jsx)(C,{showOnlineIndicator:!0}),(0,G.jsx)(C,{}),(0,G.jsx)(l.E,{as:"p",className:w,children:t.Ru.get("buddy-feed.enable-share-listening-activity")}),(0,G.jsx)(n.N_,{to:"/preferences",className:B,children:(0,G.jsx)(c.$,{colorSet:"invertedLight",className:E,children:t.Ru.get("desktop.settings.settings")})})]});var W=i(68832),F=i(22726),H=i(41616),Y=i(65462),Z=i(78516),O=i(7520),M=i(40675),V=i(29454),J=i(54622),z=i(84816),X=i(21082),K=i(16832),$=i(64353),q=i(99701),ee=i(1533);const se=e=>{const{timestamp:s,isNowPlaying:i}=e;return i?(0,G.jsx)(q.Zp,{label:t.Ru.get("time.now"),children:(0,G.jsx)($.A,{"aria-label":t.Ru.get("time.now"),size:"small"})}):(0,G.jsx)("span",{children:(0,ee.Z)(s)})};var ie=i(27012),ae=i(97844),re=i(44672),te=i(28340),ne=i(33329),le=i(7307);const ce=e=>Date.now()-e<9e5,de=(e,s)=>{const i=(0,F.o_h)(e)?.type;switch(i){case F.NQG.PLAYLIST:case F.NQG.PLAYLIST_V2:return(0,G.jsx)(M.W,{uri:e});case F.NQG.EPISODE:case F.NQG.SHOW:return(0,G.jsx)(V.H,{uri:e});case F.NQG.ALBUM:return(0,G.jsx)(Z.h,{uri:e,artistUri:s});case F.NQG.ARTIST:return(0,G.jsx)(O.t,{uri:e});default:return null}},ue=e=>{switch(e){case F.NQG.ALBUM:return le.c.ALBUM;case F.NQG.ARTIST:return le.c.ARTIST;case F.NQG.SHOW:return le.c.SHOW;case F.NQG.EPISODE:return le.c.EPISODE;case F.NQG.PLAYLIST:case F.NQG.PLAYLIST_V2:return le.c.PLAYLIST;default:return}},oe=e=>{const{show:s=!0,spec:i,friend:r}=e,n=(0,a.useMemo)((()=>r.user.imageUrl?[{url:r.user.imageUrl,width:0,height:0}]:[]),[r.user.imageUrl]),c=(0,ne.s)(),d=r.track,o=d.uri,{togglePlay:x,isPlaying:h,isActive:j}=(0,te.P)({uri:o},{featureIdentifier:"buddy_feed",referrerIdentifier:"buddy_feed"}),k=(0,F.o_h)(d.context?.uri),w=k?.type,T=(0,a.useCallback)((()=>{x();const e=i.friendRowFactory().playButtonFactory();j?h?c.logInteraction(e.hitPause({itemToBePaused:o})):c.logInteraction(e.hitResume({itemToBeResumed:o})):c.logInteraction(e.hitPlay({itemToBePlayed:o}))}),[h,o,i,j,x,c]),_=(0,a.useCallback)(((e,s)=>{c.logInteraction(i.friendRowFactory().friendRowLinkFactory({identifier:e}).hitUiNavigate({destination:s}))}),[c,i]),{draggable:D,onDragStart:L}=(0,ie.P)({itemUris:[o],dragLabelText:d.name}),{draggable:A,onDragStart:U}=(0,ie.P)({itemUris:[d.artist?.uri],dragLabelText:d.artist?.name}),{draggable:B,onDragStart:E}=(0,ie.P)({itemUris:[d.context?.uri],dragLabelText:d.context?.name});return s?(0,G.jsxs)("div",{className:u()(m),children:[(0,G.jsx)(Y.h,{menu:de(d.context?.uri,d.artist?.uri),children:(0,G.jsxs)("div",{className:g,children:[(0,G.jsx)(H.e,{label:r.user.name,width:40,userIconSize:"small",images:n,withBadge:ce(r.timestamp)}),(0,G.jsx)(K.x,{className:f,iconClassName:p,isPlaying:h,isLocked:!1,onClick:T,playAriaLabel:h?t.Ru.get("pause"):`${t.Ru.get("play")} ${d.artist.name} ${d.name}`})]})}),(0,G.jsxs)("div",{className:u()(N),children:[(0,G.jsxs)("div",{className:v,children:[(0,G.jsx)(l.E,{as:"p",variant:"bodySmallBold",className:u()(y,"ellipsis-one-line"),children:(0,G.jsx)(re.pZ,{value:"/buddyfeed_user_profile",children:(0,G.jsx)(Y.h,{menu:(0,G.jsx)(z.B,{uri:r.user.uri}),children:(0,G.jsx)(X.N,{title:r.user.name,to:r.user.uri,dir:"auto",onClick:()=>_("profile_link",r.user.uri),children:r.user.name})})})}),(0,G.jsx)(l.E,{as:"p",variant:"marginal",className:u()(b),children:(0,G.jsx)(se,{timestamp:r.timestamp,isNowPlaying:ce(r.timestamp)})})]}),(0,G.jsxs)(l.E,{as:"p",variant:"marginal",className:S,children:[(0,G.jsx)(re.pZ,{value:"/buddyfeed_track",children:(0,G.jsx)(Y.h,{menu:(0,G.jsx)(J.P,{uri:d.uri,contextUri:d.context?.uri,albumUri:d.album?.uri,artists:[d.artist]}),children:(0,G.jsx)(X.N,{title:d.name,to:o,className:"ellipsis-one-line",dir:"auto",draggable:D,onDragStart:L,onClick:()=>_("track_link",o),children:d.name})})}),(0,G.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,G.jsx)(re.pZ,{value:"/buddyfeed_artist",children:(0,G.jsx)(Y.h,{menu:d.artist?(0,G.jsx)(O.t,{uri:d.artist.uri}):null,children:(0,G.jsx)(X.N,{title:d.artist?.name,to:d.artist?.uri,className:"ellipsis-one-line",dir:"auto",draggable:A,onDragStart:U,onClick:()=>_("artist_link",d.artist?.uri),children:d.artist?.name})})})]}),(0,G.jsx)(l.E,{as:"p",variant:"marginal",className:u()("ellipsis-one-line",P),children:(0,G.jsx)(re.pZ,{value:"/buddyfeed_context",children:(0,G.jsx)(Y.h,{menu:de(d.context?.uri,d.artist?.uri),children:(0,G.jsxs)(X.N,{title:d.context?.name,to:d.context?.uri,className:R,draggable:B,onDragStart:E,onClick:()=>_("context_link",d.context?.uri),children:[(0,G.jsx)(ae.s,{type:ue(w),iconSize:16,className:I}),(0,G.jsx)("span",{dir:"auto",className:"ellipsis-one-line",children:d.context?.name})]})})})})]})]},r.user.uri):null};var me=i(817),xe=i(99348),he=i(69693);function je({friends:e,spec:s}){const{currentSession:i}=(0,he.D)(),r=(0,xe.y)(),[t,n]=(0,a.useState)(!0),l=!i?.active&&r&&t&&(0,G.jsx)("li",{className:h,children:(0,G.jsx)(me.p,{localStorageKey:"dismissStartJamButtonFromFriendFeed",onDismiss:()=>n(!1)})},"start-jam-button");return(0,G.jsx)(W.ZI,{flipKey:e.map((e=>e.user.uri)).join(""),children:(0,G.jsxs)("ul",{className:x,children:[l,e.map(((e,i)=>(0,G.jsx)(W.lf,{flipId:e.user.uri,children:(0,G.jsx)("li",{children:(0,G.jsx)(oe,{friend:e,show:i<100,spec:s},e.user.uri)})},e.user.uri)))]})})}var ge=i(85851),fe=i(33762),pe=i(39992),Ne=i(8428),ve=i(30147),ye=i(21549);const be=({friends:e})=>{const s=(0,ne.s)(),{spec:i}=(0,ye.r)(r.W,{}),n=(0,a.useRef)(null);(0,a.useEffect)((()=>{s.logImpression(i.impression())}),[s,i]);const l=0===e.length,c=(0,a.useCallback)((()=>{s.logInteraction(i.closeButtonFactory().hitUiHide())}),[s,i]);return(0,G.jsx)(ve.ql.Provider,{value:"buddy_feed",children:(0,G.jsx)(ge._,{label:t.Ru.get("buddy-feed.friend-activity"),focusTransferId:"BUDDY-FEED",children:(0,G.jsx)("div",{className:j,ref:n,children:(0,G.jsx)(fe.w,{fixedHeader:(0,G.jsx)(pe.a,{title:t.Ru.get("buddy-feed.friend-activity"),panel:Ne.Z.BuddyFeed,onClose:c}),children:l?(0,G.jsx)(Q,{}):(0,G.jsx)(je,{friends:e,spec:i})})})})})}}}]);
//# sourceMappingURL=xpui-routes-buddy-feed-legacy.js.map