(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/uni-ui/lib/uni-icons/uni-icons"], {
    3692: function (n, t, e) {
      "use strict";
      var u = e("fa81"),
        i = e.n(u);
      i.a
    },
    4030: function (n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var u = i(e("5787"));

      function i(n) {
        return n && n.__esModule ? n : {
          default: n
        }
      }
      var r = {
        name: "UniIcons",
        props: {
          type: {
            type: String,
            default: ""
          },
          color: {
            type: String,
            default: "#333333"
          },
          size: {
            type: [Number, String],
            default: 16
          }
        },
        data: function () {
          return {
            icons: u.default
          }
        },
        methods: {
          _onClick: function () {
            this.$emit("click")
          }
        }
      };
      t.default = r
    },
    a265: function (n, t, e) {
      "use strict";
      e.r(t);
      var u = e("4030"),
        i = e.n(u);
      for (var r in u) "default" !== r && function (n) {
        e.d(t, n, (function () {
          return u[n]
        }))
      }(r);
      t["default"] = i.a
    },
    b9c6: function (n, t, e) {
      "use strict";
      e.r(t);
      var u = e("bd87"),
        i = e("a265");
      for (var r in i) "default" !== r && function (n) {
        e.d(t, n, (function () {
          return i[n]
        }))
      }(r);
      e("3692");
      var a, c = e("f0c5"),
        o = Object(c["a"])(i["default"], u["b"], u["c"], !1, null, "5b2edd92", null, !1, u["a"], a);
      t["default"] = o.exports
    },
    bd87: function (n, t, e) {
      "use strict";
      var u;
      e.d(t, "b", (function () {
        return i
      })), e.d(t, "c", (function () {
        return r
      })), e.d(t, "a", (function () {
        return u
      }));
      var i = function () {
          var n = this,
            t = n.$createElement;
          n._self._c
        },
        r = []
    },
    fa81: function (n, t, e) {}
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/uni-ui/lib/uni-icons/uni-icons-create-component',
  {
    'components/uni-ui/lib/uni-icons/uni-icons-create-component': (function (module, exports, __webpack_require__) {
      __webpack_require__('543d')['createComponent'](__webpack_require__("b9c6"))
    })
  },
  [
    ['components/uni-ui/lib/uni-icons/uni-icons-create-component']
  ]
]);