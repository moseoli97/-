(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{345:function(t,a,e){t.exports=e.p+"assets/img/Operator.54aaa537.png"},401:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"operator-연산자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operator-연산자"}},[t._v("#")]),t._v(" Operator(연산자)")]),t._v(" "),s("p",[s("em",[t._v("written by sohyeon, hyemin 💡")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_1-연산자와-피연산자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-연산자와-피연산자"}},[t._v("#")]),t._v(" 1. 연산자와 피연산자")]),t._v(" "),s("ul",[s("li",[t._v("연산자(operator) : 연산을 수행하는 기호( + , - , * , / 등 )")]),t._v(" "),s("li",[t._v("피연산자(operand) : 연산자의 작업 대상(변수, 상수, 리터럴, 수식)")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("X + 3\n+ : 연산자\nX와 3 : 피연산자\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"_2-연산자의-종류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-연산자의-종류"}},[t._v("#")]),t._v(" 2. 연산자의 종류")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("종류")]),t._v(" "),s("th",[t._v("연산자")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("산술 연산자")]),t._v(" "),s("td",[t._v("+  -  *  /  %  <<  >>")]),t._v(" "),s("td",[t._v("사칙 연산과 나머지 연산")])]),t._v(" "),s("tr",[s("td",[t._v("비교 연산자")]),t._v(" "),s("td",[t._v(">  <  >=  <=  ==  !=")]),t._v(" "),s("td",[t._v("크고 작음과 같고 다름을 비교")])]),t._v(" "),s("tr",[s("td",[t._v("논리 연산자")]),t._v(" "),s("td",[t._v("&&  ||  !  &  |  ^  ~")]),t._v(" "),s("td",[t._v("그리고(AND) 와 또는(OR)으로 조건을 연결")])]),t._v(" "),s("tr",[s("td",[t._v("대입 연산자")]),t._v(" "),s("td",[t._v("=")]),t._v(" "),s("td",[t._v("우변의 값을 좌변에 저장")])]),t._v(" "),s("tr",[s("td",[t._v("기타")]),t._v(" "),s("td",[t._v("(type) ?: instanceof")]),t._v(" "),s("td",[t._v("형변환 연산자, 삼항 연산자, instanceof 연산자")])])])]),t._v(" "),s("h3",{attrs:{id:"단항-연산자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단항-연산자"}},[t._v("#")]),t._v(" 단항 연산자")]),t._v(" "),s("ul",[s("li",[t._v("증감연산자 ++ --")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("* 증가 연산자(++) 피연산자의 값을 1 증가시킨다.\n* 감소 연산자(--) 피연산자의 값을 1 감소시킨다.\n")])])]),s("ul",[s("li",[t._v("부호연산자 + -")])]),t._v(" "),s("p",[t._v("부호 연산자 '-'는 피연산자의 부호를 반대로 변경한 결과를 반환한다.")]),t._v(" "),s("h4",{attrs:{id:"ex-예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex-예제"}},[t._v("#")]),t._v(" ex) 예제")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class OperatorEx4 {\n    public static void main(String[] args) {\n        int i = -10;\n        i = +i;\n        System.out.println(i);\n        \n        i = -i;\n        System.out.println(i);\n    }\n}\n\n")])])]),s("h4",{attrs:{id:"실행결과"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과"}},[t._v("#")]),t._v(" 실행결과")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-10\n10\n")])])]),s("h3",{attrs:{id:"산술-연산자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#산술-연산자"}},[t._v("#")]),t._v(" 산술 연산자")]),t._v(" "),s("ul",[s("li",[t._v("산술 연산자 : 사칙 연산자(+, -, *, /)와 나머지 연산자(%)")])]),t._v(" "),s("h4",{attrs:{id:"ex-예제-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex-예제-2"}},[t._v("#")]),t._v(" ex) 예제")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class OperatorEx8 {\n    public static void main(String args[]) {\n        int a = 1_000_000;\n        int b = 2_000_000;\n        \n        long c = a * b;\n        \n        System.out.println(c);\n    }\n}\n")])])]),s("h4",{attrs:{id:"실행결과-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실행결과-2"}},[t._v("#")]),t._v(" 실행결과")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-1454759936  // int타입과 int타입의 연산결과는 int타입이기 때문이다. a*b의 결과가 이미 int타입의 값이므로 long형으로 자동 형변환되어도 값은 변하지 않는다.\n")])])]),s("ul",[s("li",[t._v("나머지 연산자 %는 피연산자로 정수만 허용한다.")])]),t._v(" "),s("h3",{attrs:{id:"비교-연산자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비교-연산자"}},[t._v("#")]),t._v(" 비교 연산자")]),t._v(" "),s("p",[t._v("비교 연산자는 두 피연산자를 비교하는 데 사용되는 연산자다.")]),t._v(" "),s("ul",[s("li",[t._v("대소비교 연산자 < > <= >=")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("비교 연산자")]),t._v(" "),s("th",[t._v("연산결과")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v(">")]),t._v(" "),s("td",[t._v("좌변 값이 크면, true 아니면 false")])]),t._v(" "),s("tr",[s("td",[t._v("<")]),t._v(" "),s("td",[t._v("좌변 값이 작으면, true 아니면 false")])]),t._v(" "),s("tr",[s("td",[t._v(">=")]),t._v(" "),s("td",[t._v("좌변 값이 크거나 같으면, true 아니면 false")])]),t._v(" "),s("tr",[s("td",[t._v("<=")]),t._v(" "),s("td",[t._v("좌변 값이 작거나 같으면, true 아니면 false")])])])]),t._v(" "),s("ul",[s("li",[t._v("등가비교 연산자 == !=")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("비교 연산자")]),t._v(" "),s("th",[t._v("연산결과")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("==")]),t._v(" "),s("td",[t._v("두 값이 같으면, true 아니면 false")])]),t._v(" "),s("tr",[s("td",[t._v("!=")]),t._v(" "),s("td",[t._v("두 값이 다르면, true 아니면 false")])])])]),t._v(" "),s("h3",{attrs:{id:"논리-연산자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#논리-연산자"}},[t._v("#")]),t._v(" 논리 연산자")]),t._v(" "),s("ul",[s("li",[t._v("논리 연산자 - &&, ||")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("|| (OR결합) : 피연산자 중 어느 한 쪽만 true이면 true를 결과로 얻는다.\n&& (AND결합) : 피연산자 양쪽 모두 true이어야 true를 결과로 얻는다.\n")])])]),s("ul",[s("li",[t._v("논리 부정 연산자 - !")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("! : 피연산자가 true이면 false를, false면 true를 결과로 반환한다.\n")])])]),s("ul",[s("li",[t._v("비트 연산자 & | ^ ~ << >>"),s("br"),t._v("\n비트 연산자는 피연산자를 비트단위로 논리 연산한다."),s("br"),t._v("\n피연산자로 "),s("code",[t._v("실수는 허용하지 않는다.")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("| (OR연산자) : 피연산자 중 한 쪽의 값이 1이면, 1을 결과로 얻는다. 그 외에는 0을 얻는다.\n& (AND연산자) : 피연산자 양 쪽이 모두 1이어야만 1을 결과로 얻는다. 그 외에는 0을 얻는다.\n^ (XOR연산자) : 피연산자의 값이 서로 다를 때만 1을 결과로 얻는다. 그 외에는 0을 얻는다.\n~ (비트 전환 연산자) : 피연산자를 2진수로 표현했을 때, 0은 1로, 1은 0으로 바꾼다.\n>> (시프트 연산자) : 피연산자의 2진수를 오른쪽으로 이동한다.\n<< (시프트 연산자) : 피연산자의 2진수를 왼쪽으로 이동한다.\n")])])]),s("h3",{attrs:{id:"기타-연산자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기타-연산자"}},[t._v("#")]),t._v(" 기타 연산자")]),t._v(" "),s("ul",[s("li",[t._v("조건 연산자 ? :")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("조건식 ? 식1 : 식2\n// 조건식의 평가 결과가 true이면 식1이, false이면 식2가 연산결과가 된다.\n")])])]),s("h4",{attrs:{id:"ex-예제-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex-예제-3"}},[t._v("#")]),t._v(" ex) 예제")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("result = (x > y) ? x : y;\n\nif(x > y)\n    result = x;\nelse \n    result = y;\n")])])]),s("ul",[s("li",[t._v("대입 연산자 = op=")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("= (대입연산자) : 변수와 같은 저장공간에 값 또는 수식의 연산결과를 저장하는데 사용된다.\nop= (복합 대입 연산자) : 다른 연산자(op)와 결합하여 'op='와 같은 방식으로 사용될 수 있다.\n    ex) i+= 3; \n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"_3-연산자의-우선순위"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-연산자의-우선순위"}},[t._v("#")]),t._v(" 3. 연산자의 우선순위")]),t._v(" "),s("img",{attrs:{src:e(345),height:"500px",align:"center"}}),t._v(" "),s("h3",{attrs:{id:"_1-산술-비교-논리-대입-순으로-수행된다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-산술-비교-논리-대입-순으로-수행된다"}},[t._v("#")]),t._v(" 1. 산술 > 비교 > 논리 > 대입 순으로 수행된다.")]),t._v(" "),s("h4",{attrs:{id:"ex-예제-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex-예제-4"}},[t._v("#")]),t._v(" ex) 예제")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("data & 0xFF == 0  // 비트 연산자(&)는 비교 연산자(==)보다 우선순위가 낮으므로 비교연산 후에 비트연산이 수행된다. \ndata & (0xFF == 0)\n")])])]),s("h3",{attrs:{id:"_2-단항-1-이항-2-삼항-3-단항-연산자의-우선순위가-이항-연산자보다-높다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-단항-1-이항-2-삼항-3-단항-연산자의-우선순위가-이항-연산자보다-높다"}},[t._v("#")]),t._v(" 2. 단항(1) > 이항(2) > 삼항(3) 단항 연산자의 우선순위가 이항 연산자보다 높다.")]),t._v(" "),s("h4",{attrs:{id:"ex-예제-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex-예제-5"}},[t._v("#")]),t._v(" ex) 예제")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-x + 3  // 단항 연산자가 이항 연산자보다 우선순위가 높으므로 x의 부호를 바꾼 다음 덧셈이 수행된다.\n(-x) + 3\n")])])]),s("h3",{attrs:{id:"_3-단항-연산자와-대입-연산자를-제외한-모든-연산의-진행방향은-왼쪽에서-오른쪽이다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-단항-연산자와-대입-연산자를-제외한-모든-연산의-진행방향은-왼쪽에서-오른쪽이다"}},[t._v("#")]),t._v(" 3. 단항 연산자와 대입 연산자를 제외한 모든 연산의 진행방향은 왼쪽에서 오른쪽이다.")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"question"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#question"}},[t._v("#")]),t._v(" Question")]),t._v(" "),s("ul",[s("li",[t._v("연산자와 피연산에 대해 설명하시오.")]),t._v(" "),s("li",[t._v("연산자의 우선순위를 간략하게 설명하시오.")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"reference-additional-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-additional-resources"}},[t._v("#")]),t._v(" Reference & Additional Resources")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://programmer-seva.tistory.com/5/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://programmer-seva.tistory.com/5/"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);