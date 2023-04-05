(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/center/center"], {
    "3c61": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("a588"),
        a = n.n(r);
      for (var u in r) "default" !== u && function (e) {
        n.d(t, e, (function () {
          return r[e]
        }))
      }(u);
      t["default"] = a.a
    },
    5094: function (e, t, n) {
      "use strict";
      var r;
      n.d(t, "b", (function () {
        return a
      })), n.d(t, "c", (function () {
        return u
      })), n.d(t, "a", (function () {
        return r
      }));
      var a = function () {
          var e = this,
            t = e.$createElement;
          e._self._c
        },
        u = []
    },
    "6b58": function (e, t, n) {
      "use strict";
      var r = n("c8e1"),
        a = n.n(r);
      a.a
    },
    "6b77": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("5094"),
        a = n("3c61");
      for (var u in a) "default" !== u && function (e) {
        n.d(t, e, (function () {
          return a[e]
        }))
      }(u);
      n("6b58");
      var o, c = n("f0c5"),
        i = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
      t["default"] = i.exports
    },
    "712b": function (e, t, n) {
      "use strict";
      (function (e) {
        n("e65b");
        r(n("66fd"));
        var t = r(n("6b77"));

        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, n("543d")["createPage"])
    },
    a588: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = u(n("a34a")),
          a = u(n("fc9c"));

        function u(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function o(e, t, n, r, a, u, o) {
          try {
            var c = e[u](o),
              i = c.value
          } catch (s) {
            return void n(s)
          }
          c.done ? t(i) : Promise.resolve(i).then(r, a)
        }

        function c(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise((function (r, a) {
              var u = e.apply(t, n);

              function c(e) {
                o(u, r, a, c, i, "next", e)
              }

              function i(e) {
                o(u, r, a, c, i, "throw", e)
              }
              c(void 0)
            }))
          }
        }
        var i = {
          data: function () {
            return {
              isH5Plus: !0,
              user: {},
              tableName: "",
              role: "",
              menuList: []
            }
          },
          onLoad: function () {
            var t = this;
            return c(r.default.mark((function n() {
              var u, o, c;
              return r.default.wrap((function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return t.role = e.getStorageSync("role"), u = e.getStorageSync("nowTable"), n.next = 4, t.$api.session(u);
                  case 4:
                    o = n.sent, t.user = o.data, t.tableName = u, c = a.default.list(), t.menuList = c;
                  case 9:
                  case "end":
                    return n.stop()
                }
              }), n)
            })))()
          },
          onShow: function () {
            var t = this;
            return c(r.default.mark((function n() {
              var u, o, c;
              return r.default.wrap((function (n) {
                while (1) switch (n.prev = n.next) {
                  case 0:
                    return t.role = e.getStorageSync("role"), u = e.getStorageSync("nowTable"), n.next = 4, t.$api.session(u);
                  case 4:
                    o = n.sent, t.user = o.data, t.tableName = u, c = a.default.list(), t.menuList = c;
                  case 9:
                  case "end":
                    return n.stop()
                }
              }), n)
            })))()
          },
          methods: {
            onPageTap: function (t) {
              e.navigateTo({
                url: t,
                fail: function () {
                  e.switchTab({
                    url: t
                  })
                }
              })
            }
          }
        };
        t.default = i
      }).call(this, n("543d")["default"])
    },
    c8e1: function (e, t, n) {}
  },
  [
    ["712b", "common/runtime", "common/vendor"]
  ]
]);