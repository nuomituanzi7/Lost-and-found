(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/jubaotousu/add-or-update"], {
    "0a45": function (n, e, t) {
      "use strict";
      var r = t("6edc"),
        a = t.n(r);
      a.a
    },
    "255f": function (n, e, t) {
      "use strict";
      (function (n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = a(t("a34a"));

        function a(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }

        function u(n, e, t, r, a, u, i) {
          try {
            var o = n[u](i),
              c = o.value
          } catch (s) {
            return void t(s)
          }
          o.done ? e(c) : Promise.resolve(c).then(r, a)
        }

        function i(n) {
          return function () {
            var e = this,
              t = arguments;
            return new Promise((function (r, a) {
              var i = n.apply(e, t);

              function o(n) {
                u(i, r, a, o, c, "next", n)
              }

              function c(n) {
                u(i, r, a, o, c, "throw", n)
              }
              o(void 0)
            }))
          }
        }
        var o = function () {
            Promise.all([t.e("common/vendor"), t.e("components/w-picker/w-picker")]).then(function () {
              return resolve(t("3e31"))
            }.bind(null, t)).catch(t.oe)
          },
          c = {
            data: function () {
              return {
                ruleForm: {
                  bianhao: this.getUUID(),
                  jubaoneirong: "",
                  xiangguanpingzheng: "",
                  yonghuming: "",
                  xingming: "",
                  jubaoshijian: "",
                  sfsh: "",
                  shhf: "",
                  userid: ""
                },
                user: {},
                ro: {
                  bianhao: !1,
                  jubaoneirong: !1,
                  xiangguanpingzheng: !1,
                  yonghuming: !1,
                  xingming: !1,
                  jubaoshijian: !1,
                  sfsh: !1,
                  shhf: !1,
                  userid: !1
                }
              }
            },
            components: {
              wPicker: o
            },
            computed: {},
            onLoad: function (e) {
              var t = this;
              return i(r.default.mark((function a() {
                var u, i, o, c;
                return r.default.wrap((function (a) {
                  while (1) switch (a.prev = a.next) {
                    case 0:
                      return u = n.getStorageSync("nowTable"), a.next = 3, t.$api.session(u);
                    case 3:
                      if (i = a.sent, t.user = i.data, t.ruleForm.yonghuming = t.user.yonghuming, t.ruleForm.xingming = t.user.xingming, t.ruleForm.userid = n.getStorageSync("userid"), e.refid && (t.ruleForm.refid = e.refid), !e.id) {
                        a.next = 15;
                        break
                      }
                      return t.ruleForm.id = e.id, a.next = 13, t.$api.info("jubaotousu", t.ruleForm.id);
                    case 13:
                      i = a.sent, t.ruleForm = i.data;
                    case 15:
                      if (!e.cross) {
                        a.next = 50;
                        break
                      }
                      o = n.getStorageSync("crossObj"), a.t0 = r.default.keys(o);
                    case 18:
                      if ((a.t1 = a.t0()).done) {
                        a.next = 50;
                        break
                      }
                      if (c = a.t1.value, "bianhao" != c) {
                        a.next = 24;
                        break
                      }
                      return t.ruleForm.bianhao = o[c], t.ro.bianhao = !0, a.abrupt("continue", 18);
                    case 24:
                      if ("jubaoneirong" != c) {
                        a.next = 28;
                        break
                      }
                      return t.ruleForm.jubaoneirong = o[c], t.ro.jubaoneirong = !0, a.abrupt("continue", 18);
                    case 28:
                      if ("xiangguanpingzheng" != c) {
                        a.next = 32;
                        break
                      }
                      return t.ruleForm.xiangguanpingzheng = o[c], t.ro.xiangguanpingzheng = !0, a.abrupt("continue", 18);
                    case 32:
                      if ("yonghuming" != c) {
                        a.next = 36;
                        break
                      }
                      return t.ruleForm.yonghuming = o[c], t.ro.yonghuming = !0, a.abrupt("continue", 18);
                    case 36:
                      if ("xingming" != c) {
                        a.next = 40;
                        break
                      }
                      return t.ruleForm.xingming = o[c], t.ro.xingming = !0, a.abrupt("continue", 18);
                    case 40:
                      if ("jubaoshijian" != c) {
                        a.next = 44;
                        break
                      }
                      return t.ruleForm.jubaoshijian = o[c], t.ro.jubaoshijian = !0, a.abrupt("continue", 18);
                    case 44:
                      if ("userid" != c) {
                        a.next = 48;
                        break
                      }
                      return t.ruleForm.userid = o[c], t.ro.userid = !0, a.abrupt("continue", 18);
                    case 48:
                      a.next = 18;
                      break;
                    case 50:
                      t.styleChange();
                    case 51:
                    case "end":
                      return a.stop()
                  }
                }), a)
              })))()
            },
            methods: {
              styleChange: function () {
                this.$nextTick((function () {}))
              },
              jubaoshijianChange: function (n) {
                this.ruleForm.jubaoshijian = n.target.value, this.$forceUpdate()
              },
              xiangguanpingzhengTap: function () {
                var n = this;
                this.$api.upload((function (e) {
                  n.ruleForm.xiangguanpingzheng = n.$base.url + "upload/" + e.file, n.$forceUpdate(), n.$nextTick((function () {
                    n.styleChange()
                  }))
                }))
              },
              getUUID: function () {
                return (new Date).getTime()
              },
              onSubmitTap: function () {
                var n = this;
                return i(r.default.mark((function e() {
                  return r.default.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if (n.ruleForm.userid) {
                          e.next = 3;
                          break
                        }
                        return n.$utils.msg("用户id不能为空"), e.abrupt("return");
                      case 3:
                        if (!n.ruleForm.id) {
                          e.next = 8;
                          break
                        }
                        return e.next = 6, n.$api.update("jubaotousu", n.ruleForm);
                      case 6:
                        e.next = 10;
                        break;
                      case 8:
                        return e.next = 10, n.$api.add("jubaotousu", n.ruleForm);
                      case 10:
                        n.$utils.msgBack("提交成功");
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              optionsChange: function (n) {
                this.index = n.target.value
              },
              bindDateChange: function (n) {
                this.date = n.target.value
              },
              getDate: function (n) {
                var e = new Date,
                  t = e.getFullYear(),
                  r = e.getMonth() + 1,
                  a = e.getDate();
                return "start" === n ? t -= 60 : "end" === n && (t += 2), r = r > 9 ? r : "0" + r, a = a > 9 ? a : "0" + a, "".concat(t, "-").concat(r, "-").concat(a)
              },
              toggleTab: function (n) {
                this.$refs[n].show()
              }
            }
          };
        e.default = c
      }).call(this, t("543d")["default"])
    },
    "66f5": function (n, e, t) {
      "use strict";
      t.r(e);
      var r = t("bd60"),
        a = t("f171");
      for (var u in a) "default" !== u && function (n) {
        t.d(e, n, (function () {
          return a[n]
        }))
      }(u);
      t("0a45");
      var i, o = t("f0c5"),
        c = Object(o["a"])(a["default"], r["b"], r["c"], !1, null, "e609472a", null, !1, r["a"], i);
      e["default"] = c.exports
    },
    "691c": function (n, e, t) {
      "use strict";
      (function (n) {
        t("e65b");
        r(t("66fd"));
        var e = r(t("66f5"));

        function r(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(e.default)
      }).call(this, t("543d")["createPage"])
    },
    "6edc": function (n, e, t) {},
    bd60: function (n, e, t) {
      "use strict";
      var r;
      t.d(e, "b", (function () {
        return a
      })), t.d(e, "c", (function () {
        return u
      })), t.d(e, "a", (function () {
        return r
      }));
      var a = function () {
          var n = this,
            e = n.$createElement;
          n._self._c
        },
        u = []
    },
    f171: function (n, e, t) {
      "use strict";
      t.r(e);
      var r = t("255f"),
        a = t.n(r);
      for (var u in r) "default" !== u && function (n) {
        t.d(e, n, (function () {
          return r[n]
        }))
      }(u);
      e["default"] = a.a
    }
  },
  [
    ["691c", "common/runtime", "common/vendor"]
  ]
]);