(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
  211: function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
          return b
      }
      )),
      n.d(t, "a", (function() {
          return y
      }
      ));
      var a = n(0)
        , r = n.n(a)
        , c = n(9)
        , i = n(68)
        , o = n(212)
        , l = n.n(o);
      function s(e, t) {
          return v(e) || d(e, t) || f(e, t) || u()
      }
      function u() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      function f(e, t) {
          if (e) {
              if ("string" == typeof e)
                  return m(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0
          }
      }
      function m(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, a = new Array(t); n < t; n++)
              a[n] = e[n];
          return a
      }
      function d(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
              var a = [], r = !0, c = !1, i, o;
              try {
                  for (n = n.call(e); !(r = (i = n.next()).done) && (a.push(i.value),
                  !t || a.length !== t); r = !0)
                      ;
              } catch (e) {
                  c = !0,
                  o = e
              } finally {
                  try {
                      r || null == n.return || n.return()
                  } finally {
                      if (c)
                          throw o
                  }
              }
              return a
          }
      }
      function v(e) {
          if (Array.isArray(e))
              return e
      }
      var p = function(e, t) {
          var n = {};
          for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                  t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
          return n
      }
        , b = function e(t, n) {};
      function y(e) {
          var t = e.className
            , n = void 0 === t ? "" : t
            , o = e.children
            , l = e.onContentChange
            , u = e.onTouchHead
            , f = e.onTouchTail
            , m = e.scrollingDuration
            , d = void 0 === m ? 1500 : m
            , v = p(e, ["className", "children", "onContentChange", "onTouchHead", "onTouchTail", "scrollingDuration"])
            , y = Object(a.useRef)(null)
            , E = Object(a.useRef)(0)
            , C = Object(a.useRef)(0)
            , j = Object(a.useRef)(!1);
          Object(a.useEffect)((function() {
              if (y.current && y.current.parentElement) {
                  var e = y.current
                    , t = function t(n) {
                      var a, r, c, i, o, m;
                      if (!j.current) {
                          var v = Math.abs(n.deltaX) > Math.abs(n.deltaY) ? (0 === window.orientation ? -1 : 1) * n.deltaX : n.deltaY;
                          E.current += v,
                          E.current < 0 && (E.current = 0),
                          E.current > e.clientWidth - ((null === (a = e.parentElement) || void 0 === a ? void 0 : a.clientWidth) || 0) && (E.current = e.clientWidth - ((null === (r = e.parentElement) || void 0 === r ? void 0 : r.clientWidth) || 0)),
                          e.style.transform = "translate(".concat(-1 * E.current, "px, 0)"),
                          e.dataset.offset = String(E.current);
                          var p, b = s(h(e, v), 2), g = b[0], N = b[1];
                          if (C.current !== g)
                              if (g >= 0) {
                                  var w = v > 0 ? Math.min(e.clientWidth - (null === (c = e.parentElement) || void 0 === c ? void 0 : c.clientWidth), N.offsetLeft) : Math.max(0, N.offsetLeft + N.clientWidth - (null === (i = e.parentElement) || void 0 === i ? void 0 : i.clientWidth));
                                  Math.abs(w - E.current) > .2 * ((null === (m = null === (o = y.current) || void 0 === o ? void 0 : o.parentElement) || void 0 === m ? void 0 : m.clientWidth) || 100) && (j.current = !0,
                                  O(E, e, w, d).then((function() {
                                      j.current = !1
                                  }
                                  )),
                                  "function" == typeof l && l(g, N))
                              } else
                                  v > 0 ? "function" == typeof f && f() : "function" == typeof u && u();
                          C.current = g
                      }
                  }
                    , n = Object(i.a)(e.parentElement, t);
                  return function() {
                      n()
                  }
              }
          }
          ), []),
          Object(a.useEffect)((function() {
              if (y.current) {
                  var e = y.current;
                  return b = function t(n) {
                      var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                      return j.current = !0,
                      O(E, e, (e.children[n] || {}).offsetLeft || 0, a ? d : 0).then((function() {
                          j.current = !1
                      }
                      ))
                  }
                  ,
                  function() {
                      b = function e() {}
                  }
              }
          }
          ), []);
          var g, N = Object(c.b)().isPhone;
          return r.a.createElement("div", Object.assign({
              className: "horizontal-scroll-wrapper ".concat(n, " ").concat(N ? "phone" : "").trim()
          }, v), r.a.createElement("div", {
              className: "inner",
              ref: y
          }, o))
      }
      function h(e, t) {
          var n = Number(e.dataset.offset)
            , a = n + e.parentElement.clientWidth
            , r = function e(r) {
              return t < 0 ? r.offsetLeft < n && r.offsetLeft + r.clientWidth > n : r.offsetLeft < a && r.offsetLeft + r.clientWidth > a
          }
            , c = Array.prototype.slice.apply(e.children)
            , i = c.findIndex(r);
          return [i, c[i]]
      }
      function O(e, t, n) {
          var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1500;
          return new Promise((function(r) {
              e.current = n,
              t.style.transform = "translate(".concat(-1 * e.current, "px, 0)"),
              t.dataset.offset = String(e.current),
              t.style.transition = "transform ".concat(a, "ms ease-in-out"),
              setTimeout((function() {
                  t.style.transition = "none",
                  r(null)
              }
              ), a)
          }
          ))
      }
  },
  212: function(e, t, n) {},
  213: function(e, t, n) {
      "use strict";
      n.d(t, "a", (function() {
          return i
      }
      ));
      var a = n(0)
        , r = n.n(a)
        , c = function(e, t) {
          var n = {};
          for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                  t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
          return n
      };
      function i(e) {
          var t = e.ratio
            , n = void 0 === t ? 1.5 : t
            , i = e.property
            , l = void 0 === i ? "width" : i
            , s = e.children
            , u = c(e, ["ratio", "property", "children"])
            , f = Object(a.useRef)(null);
          return Object(a.useEffect)((function() {
              var e = null
                , t = function t() {
                  e && (clearTimeout(e),
                  e = null),
                  e = setTimeout((function() {
                      var e;
                      if (f.current instanceof HTMLDivElement) {
                          var t = null === (e = f.current) || void 0 === e ? void 0 : e.clientHeight;
                          f.current.style[l] = "".concat(o(t * n), "px")
                      }
                  }
                  ), 100)
              };
              return t(),
              window.addEventListener("resize", t),
              function() {
                  window.removeEventListener("resize", t)
              }
          }
          ), [l, n]),
          r.a.createElement("div", Object.assign({}, u, {
              ref: f
          }), s)
      }
      function o(e) {
          var t = parseInt(String(e), 10);
          return t % 2 != 0 && (t += 1),
          t
      }
  },
  216: function(e, t, n) {},
  217: function(e, t, n) {
      e.exports = {
          PracticeCase: "PracticeCase--PracticeCase--2g3__It",
          horizontalScroll: "PracticeCase--horizontalScroll--3xXb-5U",
          PracticeCasePhone: "PracticeCase--PracticeCasePhone--1FZNpmv",
          ScrollTip: "PracticeCase--ScrollTip--11hvZ_N",
          CaseContent: "PracticeCase--CaseContent--i5Rw6Bm",
          CaseWrappeer: "PracticeCase--CaseWrappeer--2OqTjYc",
          GoBack: "PracticeCase--GoBack--17vcOzi",
          CaseInnerMiddle: "PracticeCase--CaseInnerMiddle--3pUfmk1",
          SideNav: "PracticeCase--SideNav--1cdxqfz",
          IndustrySelect: "PracticeCase--IndustrySelect--2TqBHk6",
          IndustryName: "PracticeCase--IndustryName--1mpQaGj",
          OptionList: "PracticeCase--OptionList--2B_hCus",
          CaseList: "PracticeCase--CaseList--3VYtcwk",
          CaseLinkActive: "PracticeCase--CaseLinkActive--1Frwq5I",
          CaseMain: "PracticeCase--CaseMain--vjt71BY"
      }
  },
  235: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0)
        , r = n.n(a)
        , c = n(4)
        , i = n(29)
        , o = n(7)
        , l = n(8)
        , s = n(211)
        , u = n(18)
        , f = n(47)
        , m = n(213)
        , d = n(9)
        , v = n(46)
        , p = n(216)
        , b = function(e, t) {
          var n = {};
          for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                  t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
          return n
      };
      function y(e) {
          var t = e.className, n = void 0 === t ? "" : t, c = e.data, i = void 0 === c ? [] : c, o = e.onItemClick, l = void 0 === o ? function() {}
          : o, s = b(e, ["className", "data", "onItemClick"]), u, p = Object(d.b)().isPhone, y = Object(v.b)(), h = Object(a.useMemo)((function() {
              if (y <= 720 && !p)
                  return [i];
              var e = Math.ceil(.5 * i.length);
              return [i.slice(0, e), i.slice(e)]
          }
          ), [i, p, y]);
          return r.a.createElement("div", Object.assign({
              className: "case-list ".concat(n, " ").concat(p ? "phone" : "pc").trim()
          }, s), r.a.createElement("div", {
              className: "case-list-inner-flex"
          }, h.map((function(e, t) {
              return r.a.createElement("div", {
                  className: "case-row ".concat(y <= 720 && !p ? "full-height" : "").trim(),
                  key: "case-row-".concat(t)
              }, e.map((function(e) {
                  return r.a.createElement(m.a, {
                      className: "case-item",
                      ratio: p ? 1.9649122807017543 : 1.5086206896551724,
                      onClick: function t() {
                          "function" == typeof l && l(e)
                      },
                      key: "case-item-".concat(e.id || e.name)
                  }, r.a.createElement("div", {
                      className: "bg-block",
                      style: {
                          backgroundImage: "url(".concat(e.imgUrl, ")")
                      }
                  }), r.a.createElement("div", {
                      className: "case-info"
                  }, r.a.createElement("div", {
                      className: "case-name"
                  }, e.name), r.a.createElement("div", {
                      className: "case-summary"
                  }, (e.summary || []).map((function(e) {
                      return r.a.createElement("div", {
                          className: "case-summary-item",
                          key: "case-summary-item-".concat(e.name)
                      }, r.a.createElement("div", {
                          className: "case-summary-value"
                      }, r.a.createElement("span", {
                          className: "value"
                      }, e.value), r.a.createElement("span", {
                          className: "suffix"
                      }, e.unit)), r.a.createElement("div", {
                          className: "case-summary-label"
                      }, r.a.createElement(f.a, null, e.name)))
                  }
                  )))))
              }
              )))
          }
          ))))
      }
      var h = n(64)
        , O = n(39)
        , E = n(11)
        , C = n(217)
        , j = n.n(C)
        , g = n(23);
      function N(e, t) {
          return I(e) || S(e, t) || P(e, t) || w()
      }
      function w() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      function P(e, t) {
          if (e) {
              if ("string" == typeof e)
                  return k(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(e, t) : void 0
          }
      }
      function k(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, a = new Array(t); n < t; n++)
              a[n] = e[n];
          return a
      }
      function S(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
              var a = [], r = !0, c = !1, i, o;
              try {
                  for (n = n.call(e); !(r = (i = n.next()).done) && (a.push(i.value),
                  !t || a.length !== t); r = !0)
                      ;
              } catch (e) {
                  c = !0,
                  o = e
              } finally {
                  try {
                      r || null == n.return || n.return()
                  } finally {
                      if (c)
                          throw o
                  }
              }
              return a
          }
      }
      function I(e) {
          if (Array.isArray(e))
              return e
      }
      function L(e) {
          var t, n = (e || {}).data, c = void 0 === n ? [] : n, f, m = Object(d.b)().isPhone, v = Object(a.useRef)(null), p = Object(a.useMemo)((function() {
              var t;
              return c.length ? (null === (t = e.match.params) || void 0 === t ? void 0 : t.type) || c[0].id : null
          }
          ), [c, e.match.params]), b = Object(a.useMemo)((function() {
              var t;
              return null === (t = e.match.params) || void 0 === t ? void 0 : t.caseId
          }
          ), [e.match.params]), O = Object(a.useMemo)((function() {
              if (!b)
                  return null;
              var e = c.find((function(e) {
                  return e.id === p
              }
              ));
              return e && e.children ? e.children.find((function(e) {
                  return e.id === b
              }
              )) : null
          }
          ), [b, c, p]), C = Object(a.useCallback)((function() {
              setTimeout((function() {
                  if (v.current instanceof HTMLDivElement) {
                      var e = v.current.querySelector(".industry-tabs .tab-item.active");
                      if (e instanceof HTMLDivElement) {
                          var t = v.current.querySelector(".active-decoration");
                          t.style.left = "".concat(e.offsetLeft, "px"),
                          t.style.width = "".concat(e.clientWidth, "px")
                      }
                  }
              }
              ), 0)
          }
          ), []), w = Object(a.useRef)(!1), P = Object(a.useCallback)((function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300;
              w.current = !0,
              setTimeout((function() {
                  w.current = !1
              }
              ), e)
          }
          ), []), k = Object(a.useRef)(null), S, I = N(Object(a.useState)(0), 2), L = I[0], T = I[1];
          function x(e) {
              e.stopPropagation(),
              Object(o.a)("/practice/case/".concat(p)),
              Object(E.a)("\u4e91\u5b9e\u8df5", "\u5178\u578b\u6848\u4f8b", "\u8fd4\u56de\u5217\u8868")
          }
          Object(a.useEffect)((function() {
              var e = null
                , t = function t() {
                  C(),
                  w.current || (e && (clearTimeout(e),
                  e = null),
                  e = setTimeout((function() {
                      if (Object(s.b)(c.findIndex((function(e) {
                          return e.id === p
                      }
                      ))),
                      k.current instanceof HTMLDivElement) {
                          var e = k.current.children[0];
                          T(.5092436974789916 * e.clientWidth)
                      }
                  }
                  ), 300))
              };
              return t(),
              window.addEventListener("resize", t),
              function() {
                  window.removeEventListener("resize", t)
              }
          }
          ), [c, C, p, b]);
          var M = Object(a.useCallback)((function() {
              return O && r.a.createElement("div", {
                  className: j.a.CaseContent
              }, m ? r.a.createElement(h.a, {
                  data: O,
                  onBack: function e() {
                      Object(o.a)("/practice/case/".concat(p)),
                      Object(E.a)("\u4e91\u5b9e\u8df5", "\u5178\u578b\u6848\u4f8b", "\u8fd4\u56de\u5217\u8868")
                  },
                  eventPrefix: ["\u4e91\u5b9e\u8df5", "\u5178\u578b\u6848\u4f8b", "\u6848\u4f8b\u8be6\u60c5-".concat(O.name)]
              }) : r.a.createElement("div", {
                  className: j.a.CaseWrappeer,
                  onClick: g.a ? x : void 0
              }, r.a.createElement("div", {
                  className: j.a.GoBack,
                  onClick: x
              }, r.a.createElement(l.b, {
                  type: "back",
                  size: "medium"
              }), "\u8fd4\u56de"), r.a.createElement("div", {
                  className: j.a.CaseInnerMiddle,
                  style: {
                      height: L || "auto"
                  },
                  onClick: g.a ? function(e) {
                      return e.stopPropagation()
                  }
                  : void 0
              }, r.a.createElement("div", {
                  className: j.a.SideNav
              }, r.a.createElement("div", {
                  className: j.a.IndustrySelect
              }, r.a.createElement("span", {
                  className: j.a.IndustryName
              }, (c.find((function(e) {
                  return e.id === p
              }
              )) || {}).name || ""), r.a.createElement(l.b, {
                  type: "arrow-up",
                  size: "xs"
              }), r.a.createElement("div", {
                  className: j.a.OptionList
              }, c.map((function(e) {
                  var t = e.id
                    , n = e.name
                    , a = e.children;
                  return r.a.createElement(o.b, {
                      to: "/practice/case/".concat(t, "/").concat(a[0].id),
                      trackEvent: ["\u4e91\u5b9e\u8df5", "\u5178\u578b\u6848\u4f8b", "\u6848\u4f8b\u7c7b\u578b\u5de6\u4fa7-".concat(n)],
                      key: "industry-link-".concat(t)
                  }, n)
              }
              )))), r.a.createElement("div", {
                  className: j.a.CaseList
              }, (c.find((function(e) {
                  return e.id === p
              }
              )) || {
                  children: []
              }).children.map((function(e) {
                  var t = e.id
                    , n = e.name;
                  return r.a.createElement(o.b, {
                      className: t === b ? j.a.CaseLinkActive : "",
                      to: "/practice/case/".concat(p, "/").concat(t),
                      trackEvent: ["\u4e91\u5b9e\u8df5", "\u5178\u578b\u6848\u4f8b", "\u6848\u4f8b\u5de6\u4fa7\u76ee\u5f55-".concat(n)],
                      key: "case-link-".concat(t)
                  }, n)
              }
              )))), r.a.createElement("div", {
                  className: j.a.CaseMain,
                  ref: k
              }, r.a.createElement(h.a, {
                  className: j.a.Infomation,
                  data: O,
                  eventPrefix: ["\u4e91\u5b9e\u8df5", "\u5178\u578b\u6848\u4f8b", "\u6848\u4f8b\u8be6\u60c5-".concat(O.name)]
              })))))
          }
          ), [b, O, L, c, p, m]);
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
              className: "".concat(j.a.PracticeCase, " ").concat(m ? j.a.PracticeCasePhone : "").trim(),
              ref: v
          }, r.a.createElement(i.a, {
              className: "industry-tabs"
          }, c.map((function(e) {
              var t = e.id
                , n = e.name;
              return r.a.createElement("div", {
                  className: "tab-item ".concat(t === p ? "active" : "").trim(),
                  onClick: function e() {
                      t !== p && (Object(o.a)("/practice/case/".concat(t)),
                      Object(E.a)("\u4e91\u5b9e\u8df5", "\u5178\u578b\u6848\u4f8b", "\u6848\u4f8b\u7c7b\u578b\u9876\u90e8-".concat(n)))
                  },
                  key: "tab-item-".concat(t)
              }, n)
          }
          )), r.a.createElement("div", {
              className: "active-decoration"
          })), c.length > 0 && r.a.createElement(s.a, {
              className: j.a.horizontalScroll,
              onContentChange: function e(t) {
                  c[t] && c[t].id && (Object(o.a)("/practice/case/".concat(c[t].id)),
                  P(),
                  Object(E.a)("\u4e91\u5b9e\u8df5", "\u5178\u578b\u6848\u4f8b", "\u6848\u4f8b\u7c7b\u578b\u9876\u90e8-".concat(c[t].name)))
              },
              scrollingDuration: 800
          }, c.map((function(e) {
              var t = e.id
                , n = e.children;
              return r.a.createElement(y, {
                  data: n,
                  onItemClick: function e(n) {
                      Object(o.a)("/practice/case/".concat(t, "/").concat(n.id)),
                      Object(E.a)("\u4e91\u5b9e\u8df5", "\u5178\u578b\u6848\u4f8b", "\u6848\u4f8b\u76ee\u5f55-".concat(n.name))
                  },
                  key: "item-".concat(t)
              })
          }
          ))), !m && r.a.createElement("div", {
              className: j.a.ScrollTip
          })), r.a.createElement(u.a, {
              uuid: "PRACTICE-CASE-DETAIL",
              renderer: M
          }))
      }
      function T(e) {
          var t, n = N(c.g.useModel("practice"), 2), i = n[0], o = n[1];
          Object(a.useEffect)((function() {
              o.fetchCase()
          }
          ), []);
          var l = Object(a.useMemo)((function() {
              return i.caseInfo.length > 0 ? i.caseInfo : []
          }
          ), [i.caseInfo]);
          return l.length > 0 ? r.a.createElement(L, Object.assign({}, e, {
              data: l
          })) : r.a.createElement(O.a, {
              text: "\u6570\u636e\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019\u7247\u523b"
          })
      }
      var x = T
        , M = t.default = x
  }
}]);
