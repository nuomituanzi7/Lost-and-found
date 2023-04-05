(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/storeup/add-or-update"], {
    "09f5": function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = u(r("a34a"));

        function u(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function a(e, t, r, n, u, a, i) {
          try {
            var o = e[a](i),
              c = o.value
          } catch (s) {
            return void r(s)
          }
          o.done ? t(c) : Promise.resolve(c).then(n, u)
        }

        function i(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise((function (n, u) {
              var i = e.apply(t, r);

              function o(e) {
                a(i, n, u, o, c, "next", e)
              }

              function c(e) {
                a(i, n, u, o, c, "throw", e)
              }
              o(void 0)
            }))
          }
        }
        var o = function () {
            Promise.all([r.e("common/vendor"), r.e("components/w-picker/w-picker")]).then(function () {
              return resolve(r("3e31"))
            }.bind(null, r)).catch(r.oe)
          },
          c = {
            data: function () {
              return {
                ruleForm: {
                  userid: "",
                  refid: "",
                  tablename: "",
                  name: "",
                  picture: ""
                },
                user: {},
                ro: {
                  userid: !1,
                  refid: !1,
                  tablename: !1,
                  name: !1,
                  picture: !1
                }
              }
            },
            components: {
              wPicker: o
            },
            computed: {},
            onLoad: function (t) {
              var r = this;
              return i(n.default.mark((function u() {
                var a, i, o, c;
                return n.default.wrap((function (u) {
                  while (1) switch (u.prev = u.next) {
                    case 0:
                      return a = e.getStorageSync("nowTable"), u.next = 3, r.$api.session(a);
                    case 3:
                      if (i = u.sent, r.user = i.data, r.ruleForm.userid = e.getStorageSync("userid"), t.refid && (r.ruleForm.refid = t.refid), !t.id) {
                        u.next = 13;
                        break
                      }
                      return r.ruleForm.id = t.id, u.next = 11, r.$api.info("storeup", r.ruleForm.id);
                    case 11:
                      i = u.sent, r.ruleForm = i.data;
                    case 13:
                      if (!t.cross) {
                        u.next = 40;
                        break
                      }
                      o = e.getStorageSync("crossObj"), u.t0 = n.default.keys(o);
                    case 16:
                      if ((u.t1 = u.t0()).done) {
                        u.next = 40;
                        break
                      }
                      if (c = u.t1.value, "userid" != c) {
                        u.next = 22;
                        break
                      }
                      return r.ruleForm.userid = o[c], r.ro.userid = !0, u.abrupt("continue", 16);
                    case 22:
                      if ("refid" != c) {
                        u.next = 26;
                        break
                      }
                      return r.ruleForm.refid = o[c], r.ro.refid = !0, u.abrupt("continue", 16);
                    case 26:
                      if ("tablename" != c) {
                        u.next = 30;
                        break
                      }
                      return r.ruleForm.tablename = o[c], r.ro.tablename = !0, u.abrupt("continue", 16);
                    case 30:
                      if ("name" != c) {
                        u.next = 34;
                        break
                      }
                      return r.ruleForm.name = o[c], r.ro.name = !0, u.abrupt("continue", 16);
                    case 34:
                      if ("picture" != c) {
                        u.next = 38;
                        break
                      }
                      return r.ruleForm.picture = o[c], r.ro.picture = !0, u.abrupt("continue", 16);
                    case 38:
                      u.next = 16;
                      break;
                    case 40:
                      r.styleChange();
                    case 41:
                    case "end":
                      return u.stop()
                  }
                }), u)
              })))()
            },
            methods: {
              styleChange: function () {
                this.$nextTick((function () {}))
              },
              pictureTap: function () {
                var e = this;
                this.$api.upload((function (t) {
                  e.ruleForm.picture = e.$base.url + "upload/" + t.file, e.$forceUpdate(), e.$nextTick((function () {
                    e.styleChange()
                  }))
                }))
              },
              getUUID: function () {
                return (new Date).getTime()
              },
              onSubmitTap: function () {
                var e = this;
                return i(n.default.mark((function t() {
                  return n.default.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                      case 0:
                        if (e.ruleForm.userid) {
                          t.next = 3;
                          break
                        }
                        return e.$utils.msg("用户id不能为空"), t.abrupt("return");
                      case 3:
                        if (e.ruleForm.name) {
                          t.next = 6;
                          break
                        }
                        return e.$utils.msg("收藏名称不能为空"), t.abrupt("return");
                      case 6:
                        if (e.ruleForm.picture) {
                          t.next = 9;
                          break
                        }
                        return e.$utils.msg("收藏图片不能为空"), t.abrupt("return");
                      case 9:
                        if (!e.ruleForm.id) {
                          t.next = 14;
                          break
                        }
                        return t.next = 12, e.$api.update("storeup", e.ruleForm);
                      case 12:
                        t.next = 16;
                        break;
                      case 14:
                        return t.next = 16, e.$api.add("storeup", e.ruleForm);
                      case 16:
                        e.$utils.msgBack("提交成功");
                      case 17:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              optionsChange: function (e) {
                this.index = e.target.value
              },
              bindDateChange: function (e) {
                this.date = e.target.value
              },
              getDate: function (e) {
                var t = new Date,
                  r = t.getFullYear(),
                  n = t.getMonth() + 1,
                  u = t.getDate();
                return "start" === e ? r -= 60 : "end" === e && (r += 2), n = n > 9 ? n : "0" + n, u = u > 9 ? u : "0" + u, "".concat(r, "-").concat(n, "-").concat(u)
              },
              toggleTab: function (e) {
                this.$refs[e].show()
              }
            }
          };
        t.default = c
      }).call(this, r("543d")["default"])
    },
    "15d2": function (e, t, r) {},
    "1e9a": function (e, t, r) {
      "use strict";
      (function (e) {
        r("e65b");
        n(r("66fd"));
        var t = n(r("7e1c"));

        function n(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, r("543d")["createPage"])
    },
    3939: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("09f5"),
        u = r.n(n);
      for (var a in n) "default" !== a && function (e) {
        r.d(t, e, (function () {
          return n[e]
        }))
      }(a);
      t["default"] = u.a
    },
    "6cd0": function (e, t, r) {
      "use strict";
      var n = r("15d2"),
        u = r.n(n);
      u.a
    },
    "7e1c": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("e052"),
        u = r("3939");
      for (var a in u) "default" !== a && function (e) {
        r.d(t, e, (function () {
          return u[e]
        }))
      }(a);
      r("6cd0");
      var i, o = r("f0c5"),
        c = Object(o["a"])(u["default"], n["b"], n["c"], !1, null, "13399a66", null, !1, n["a"], i);
      t["default"] = c.exports
    },
    e052: function (e, t, r) {
      "use strict";
      var n;
      r.d(t, "b", (function () {
        return u
      })), r.d(t, "c", (function () {
        return a
      })), r.d(t, "a", (function () {
        return n
      }));
      var u = function () {
          var e = this,
            t = e.$createElement;
          e._self._c
        },
        a = []
    }
  },
  [
    ["1e9a", "common/runtime", "common/vendor"]
  ]
]);