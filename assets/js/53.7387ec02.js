(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{407:function(_,v,s){"use strict";s.r(v);var e=s(19),t=Object(e.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"쿠키-cookie-와-세션-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#쿠키-cookie-와-세션-session"}},[_._v("#")]),_._v(" 쿠키(cookie)와 세션(session)")]),_._v(" "),s("p",[s("em",[_._v("written by sohyeon, hyemin 💡")])]),_._v(" "),s("br"),_._v(" "),s("h2",{attrs:{id:"_1-쿠키와-세션을-왜-사용할까"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-쿠키와-세션을-왜-사용할까"}},[_._v("#")]),_._v(" 1. 쿠키와 세션을 왜 사용할까?")]),_._v(" "),s("p",[_._v("HTTP 프로토콜의 특징이자 약점을 보완하기 위해 사용됩니다."),s("br"),_._v("\nHTTP 프로토콜은 "),s("strong",[_._v("connectionless")]),_._v(", "),s("strong",[_._v("stateless")]),_._v("한 특성이 있기 때문입니다.")]),_._v(" "),s("h3",{attrs:{id:"비연결성-connenctionless"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비연결성-connenctionless"}},[_._v("#")]),_._v(" 비연결성 (Connenctionless)")]),_._v(" "),s("p",[_._v("클라이언트가 서버에 요청을 한 후 응답을 받으면 맺었던 연결을 끊는 특성")]),_._v(" "),s("h3",{attrs:{id:"무상태성-stateless"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#무상태성-stateless"}},[_._v("#")]),_._v(" 무상태성 (Stateless)")]),_._v(" "),s("p",[_._v("서버와 클라이언트 사이의 통신이 끝나면 상태를 유지하지 않는 특성")]),_._v(" "),s("p",[_._v("상태를 모른다면,")]),_._v(" "),s("ol",[s("li",[_._v("쇼핑몰에 접속")]),_._v(" "),s("li",[_._v("로그인")]),_._v(" "),s("li",[_._v("상품 클릭 -> 상세화면으로 이동")]),_._v(" "),s("li",[_._v("로그인")]),_._v(" "),s("li",[_._v("주문")]),_._v(" "),s("li",[_._v("로그인")]),_._v(" "),s("li",[_._v("....")])]),_._v(" "),s("p",[_._v("이런식으로 매번 클라이언트를 확인하기 위해 인증을 반복해야하는 상황이 발생합니다.")]),_._v(" "),s("p",[_._v("-> 이러한 HTTP프로토콜 특성으로 인해 생기는 단점을 해결하기 위해 쿠키와 세션을 활용합니다.")]),_._v(" "),s("h2",{attrs:{id:"_1-쿠키-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-쿠키-cookie"}},[_._v("#")]),_._v(" 1. 쿠키 (Cookie)")]),_._v(" "),s("ul",[s("li",[s("p",[s("strong",[_._v("쿠키")]),_._v("는 클라이언트 "),s("strong",[_._v("로컬")]),_._v("에 저장되는 키와 값이 들어있는 작은 데이터 파일입니다.")])]),_._v(" "),s("li",[s("p",[_._v("사용자 인증이 유효한 시간을 명시할 수 있으며, 유효 시간이 정해지면 브라우저가 종료되어도 인증이 유지된다는 특징이 있습니다.")])]),_._v(" "),s("li",[s("p",[_._v("쿠키는 클라이언트의 상태 정보를 로컬에 저장했다가 참조합니다.")])]),_._v(" "),s("li",[s("p",[_._v("Response Header에 Set-Cookie 속성을 사용하면 클라이언트에 쿠키를 만들 수 있습니다.")])]),_._v(" "),s("li",[s("p",[_._v("쿠키는 사용자가 따로 요청하지 않아도 브라우저가 Request시에 Request Header를 넣어서 자동으로 서버에 전송합니다.")])])]),_._v(" "),s("h3",{attrs:{id:"쿠키의-구성-요소"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#쿠키의-구성-요소"}},[_._v("#")]),_._v(" 쿠키의 구성 요소")]),_._v(" "),s("ul",[s("li",[_._v("이름 : 각각의 쿠키를 구별하는 데 사용되는 이름")]),_._v(" "),s("li",[_._v("값 : 쿠키의 이름과 관련된 값")]),_._v(" "),s("li",[_._v("유효시간 : 쿠키의 유지시간")]),_._v(" "),s("li",[_._v("도메인 : 쿠키를 전송할 도메인")]),_._v(" "),s("li",[_._v("경로 : 쿠키를 전송할 요청 경로")])]),_._v(" "),s("h2",{attrs:{id:"_2-세션-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-세션-session"}},[_._v("#")]),_._v(" 2. 세션 (Session)")]),_._v(" "),s("ul",[s("li",[s("p",[s("strong",[_._v("세션")]),_._v("은 쿠키를 기반하고 있지만, 사용자 정보 파일을 브라우저에 저장하는 쿠키와 달리 세션은 "),s("strong",[_._v("서버")]),_._v(" 측에서 관리합니다.")])]),_._v(" "),s("li",[s("p",[_._v("서버에서는 클라이언트를 구분하기 위해 세션 ID를 부여하며 웹 브라우저가 서버에 접속해서 브라우저를 종료할 때까지 인증상태를 유지합니다.")])]),_._v(" "),s("li",[s("p",[_._v("접속 시간에 제한을 두어 일정 시간 응답이 없다면 정보가 유지되지 않게 설정이 가능 합니다.")])]),_._v(" "),s("li",[s("p",[_._v("사용자에 대한 정보를 서버에 두기 때문에 쿠키보다 보안에 좋지만, 사용자가 많아질수록 서버 메모리를 많이 차지하게 됩니다."),s("br"),_._v("\n(즉, 동접자 수가 많은 웹 사이트인 경우 서버에 과부하를 주게 되므로 성능 저하의 요인이 됩니다.)")])]),_._v(" "),s("li",[s("p",[_._v("클라이언트가 Request를 보내면, 해당 서버의 엔진이 클라이언트에게 유일한 ID를 부여하는 데 이것이 세션ID다.")])])]),_._v(" "),s("h3",{attrs:{id:"세션의-특징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#세션의-특징"}},[_._v("#")]),_._v(" 세션의 특징")]),_._v(" "),s("ul",[s("li",[_._v("각 클라이언트에게 고유 ID를 부여")]),_._v(" "),s("li",[_._v("세션 ID로 클라이언트를 구분해서 클라이언트의 요구에 맞는 서비스를 제공")]),_._v(" "),s("li",[_._v("보안 면에서 쿠키보다 우수")]),_._v(" "),s("li",[_._v("사용자가 많아질수록 서버 메모리를 많이 차지하게 됨")])]),_._v(" "),s("h2",{attrs:{id:"쿠키와-세션의-차이"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#쿠키와-세션의-차이"}},[_._v("#")]),_._v(" 쿠키와 세션의 차이")]),_._v(" "),s("ul",[s("li",[_._v("쿠키는 서버의 자원을 전혀 사용하지 않으며, 세션은 서버의 자원을 사용합니다.")]),_._v(" "),s("li",[_._v("보안 면에서 세션이 더 우수하며, 요청 속도는 쿠키가 세션보다 더 빠릅니다."),s("br"),_._v("\n(세션은 서버의 처리가 필요하기 때문)")]),_._v(" "),s("li",[_._v("쿠키는 클라이언트 로컬에 저장되기 때문에 변질되거나 request에서 스니핑 당할 우려가 있어서 보안에 취약하지만,"),s("br"),_._v("\n세션은 쿠키를 이용해서 sessionid 만 저장하고 그것으로 구분해서 서버에서 처리하기 때문에 비교적 보안성이 좋습니다.")]),_._v(" "),s("li",[_._v("쿠키도 만료시간이 있지만 파일로 저장되기 때문에 브라우저를 종료해도 계속해서 정보가 남아 있을 수 있다."),s("br"),_._v("\n또한 만료기간을 넉넉하게 잡아두면 쿠키삭제를 할 때 까지 유지될 수도 있다."),s("br"),_._v("\n반면에 세션은 만료시간을 정할 수 있지만 브라우저가 종료되면 만료시간에 상관없이 삭제된다.")]),_._v(" "),s("li",[_._v("세션은 정보가 서버에 있기 때문에 처리가 요구되어 비교적 느린 속도를 낸다.")])]),_._v(" "),s("h2",{attrs:{id:"세션의-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#세션의-사용"}},[_._v("#")]),_._v(" 세션의 사용")]),_._v(" "),s("p",[_._v("세션은 서버의 자원을 사용하기때문에 무분별하게 만들다보면 서버의 메모리가 감당할 수 없어질 수가 있고 속도가 느려질 수 있기 때문에 상황에 적합하게 세션을 사용해야 한다.")]),_._v(" "),s("h2",{attrs:{id:"reference-additional-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-additional-resources"}},[_._v("#")]),_._v(" Reference & Additional Resources")]),_._v(" "),s("blockquote",[s("ul",[s("li",[s("a",{attrs:{href:"https://interconnection.tistory.com/74",target:"_blank",rel:"noopener noreferrer"}},[_._v("쿠키와 세션 개념"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);v.default=t.exports}}]);