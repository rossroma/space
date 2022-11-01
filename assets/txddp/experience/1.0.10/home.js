(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
  215: function(e, t, n) {
      e.exports = {
          home: "Home--home--cJ9LUOt",
          videoBg: "Home--videoBg--2ev4mfZ",
          bg: "Home--bg--3DIj31m",
          center: "Home--center--5-_ehNR",
          solgan: "Home--solgan--1AdMRyc",
          btn: "Home--btn--bBinpxE",
          navBtn: "Home--navBtn--2BrpB0G",
          navBtnIcon: "Home--navBtnIcon--2C3vXJZ"
      }
  },
  236: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0)
        , a = n.n(r)
        , c = n(88)
        , o = n(7)
        , i = n(8)
        , l = n(18)
        , u = n(21)
        , s = n(9)
        , m = n(11)
        , d = n(215)
        , p = n.n(d)
        , v = n(23);
      function f(e, t) {
          return E(e) || h(e, t) || y(e, t) || b()
      }
      function b() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      function y(e, t) {
          if (e) {
              if ("string" == typeof e)
                  return g(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
          }
      }
      function g(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++)
              r[n] = e[n];
          return r
      }
      function h(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != n) {
              var r = [], a = !0, c = !1, o, i;
              try {
                  for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value),
                  !t || r.length !== t); a = !0)
                      ;
              } catch (e) {
                  c = !0,
                  i = e
              } finally {
                  try {
                      a || null == n.return || n.return()
                  } finally {
                      if (c)
                          throw i
                  }
              }
              return r
          }
      }
      function E(e) {
          if (Array.isArray(e))
              return e
      }
      var O, w, j = function e() {
          var t, n = Object(s.b)().isPhone, d, b = f(Object(r.useState)(!1), 2), y = b[0], g = b[1], h = Object(r.useRef)(null);
          function E() {
              h.current && !Object(u.b)(h.current) && Object(u.c)(h.current)
          }
          function O(e) {
              e.stopPropagation(),
              e.preventDefault(),
              Object(l.c)("/practice", "//img2.rossroma.com/display/practice_".concat(u.d ? "pc" : "mobile", ".mp4"))
          }
          return Object(r.useEffect)((function() {
              var e;
              h.current && h.current.addEventListener("ended", (function() {
                  e = setTimeout((function() {
                      h.current && (h.current.pause(),
                      h.current.currentTime = 0,
                      h.current.play())
                  }
                  ), 3e3)
              }
              ));
              var t = document.querySelector(".teamix-nav-logo");
              function n() {
                  g(!1)
              }
              return t && v.a && (t.style.display = "none"),
              v.a && window.addEventListener("IDLE-TO-HOME", n),
              function() {
                  clearTimeout(e),
                  t && v.a && (t.style.display = ""),
                  v.a && window.removeEventListener("IDLE-TO-HOME", n)
              }
          }
          ), []),
          a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
              className: p.a.videoBg
          }, u.a && a.a.createElement("video", {
              ref: h,
              className: p.a.bg,
              style: {
                  objectFit: "cover"
              },
            //   src: "//img2.rossroma.com/display/home_".concat(u.d ? "pc" : "mobile", ".mp4"),
              src: "//hybrid-cloud-experience.oss-cn-hangzhou.aliyuncs.com/home_".concat(u.d ? "pc" : "mobile", ".mp4"),
              poster: "/assets/imgextra/i3/O1CN01HQUdjS1ujwP62ZU1s_!!6000000006074-0-tps-1920-1080.jpg",
              autoPlay: !0,
              muted: !0,
              controls: !1,
              "webkit-playsinline": "true",
              playsInline: !0,
              renderer: "standard",
              "x5-video-player-type": "h5-page",
              "x5-video-player-fullscreen": "true"
          })), a.a.createElement("div", {
              className: "".concat(p.a.home, " ").concat(n ? "mobile" : "pc"),
              onClick: E
          }, a.a.createElement("div", {
              className: p.a.center
          }, a.a.createElement("div", null, a.a.createElement("img", {
              className: p.a.solgan,
              src: v.a ? "/assets/imgextra/i3/O1CN01da2P711uI0FwpWhX4_!!6000000006013-2-tps-1304-296.png" : "//img2.rossroma.com/display/home_text.png",
              alt: "\u653f\u4f01\u6570\u667a\u521b\u65b0\u7684\u540c\u884c\u8005"
          })), a.a.createElement(o.b, {
              className: p.a.btn,
              to: "/build",
              onClick: O,
              trackEvent: ["\u9996\u9875", "\u5f00\u59cb\u63a2\u7d22"]
          }, "\u5f00\u542f\u63a2\u7d22")), a.a.createElement("div", {
              className: p.a.navBtn,
              onClick: function e() {
                  g(!0),
                  Object(m.a)("\u9996\u9875", "\u5feb\u901f\u5bfc\u822a")
              }
          }, a.a.createElement(i.b, {
              type: "menu",
              className: p.a.navBtnIcon
          }))), y && a.a.createElement(c.a, {
              onClose: function e() {
                  return g(!1)
              }
          }))
      }, x = t.default = j
  }
}]);
