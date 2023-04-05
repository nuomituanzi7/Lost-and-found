(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/news-detail/news-detail"], {
    "29c6": function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e("ed67"),
        u = e.n(r);
      for (var a in r) "default" !== a && function (n) {
        e.d(t, n, (function () {
          return r[n]
        }))
      }(a);
      t["default"] = u.a
    },
    "376e": function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e("70f2"),
        u = e("29c6");
      for (var a in u) "default" !== a && function (n) {
        e.d(t, n, (function () {
          return u[n]
        }))
      }(a);
      e("f083");
      var i, c = e("f0c5"),
        o = Object(c["a"])(u["default"], r["b"], r["c"], !1, null, "aa4daff0", null, !1, r["a"], i);
      t["default"] = o.exports
    },
    "488d": function (n, t, e) {},
    "70f2": function (n, t, e) {
      "use strict";
      var r;
      e.d(t, "b", (function () {
        return u
      })), e.d(t, "c", (function () {
        return a
      })), e.d(t, "a", (function () {
        return r
      }));
      var u = function () {
          var n = this,
            t = n.$createElement;
          n._self._c
        },
        a = []
    },
    bd94: function (n, t, e) {
      "use strict";
      (function (n) {
        e("e65b");
        r(e("66fd"));
        var t = r(e("376e"));

        function r(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(t.default)
      }).call(this, e("543d")["createPage"])
    },
    ed67: function (n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = u(e("a34a"));

      function u(n) {
        return n && n.__esModule ? n : {
          default: n
        }
      }

      function a(n, t, e, r, u, a, i) {
        try {
          var c = n[a](i),
            o = c.value
        } catch (f) {
          return void e(f)
        }
        c.done ? t(o) : Promise.resolve(o).then(r, u)
      }

      function i(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise((function (r, u) {
            var i = n.apply(t, e);

            function c(n) {
              a(i, r, u, c, o, "next", n)
            }

            function o(n) {
              a(i, r, u, c, o, "throw", n)
            }
            c(void 0)
          }))
        }
      }
      var c = {
        data: function () {
          return {
            detail: {},
            id: ""
          }
        },
        onLoad: function (n) {
          var t = this;
          return i(r.default.mark((function e() {
            var u;
            return r.default.wrap((function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t.id = n.id, e.next = 3, t.$api.info("news", n.id);
                case 3:
                  u = e.sent, t.detail = u.data;
                case 5:
                case "end":
                  return e.stop()
              }
            }), e)
          })))()
        }
      };
      t.default = c
    },
    f083: function (n, t, e) {
      "use strict";
      var r = e("488d"),
        u = e.n(r);
      u.a
    }
  },
  [
    ["bd94", "common/runtime", "common/vendor"]
  ]
]);