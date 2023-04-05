(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/yonghu/add-or-update"], {
    3619: function (n, e, t) {
      "use strict";
      (function (n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = i(t("a34a"));

        function i(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }

        function u(n, e, t, r, i, u, a) {
          try {
            var o = n[u](a),
              c = o.value
          } catch (s) {
            return void t(s)
          }
          o.done ? e(c) : Promise.resolve(c).then(r, i)
        }

        function a(n) {
          return function () {
            var e = this,
              t = arguments;
            return new Promise((function (r, i) {
              var a = n.apply(e, t);

              function o(n) {
                u(a, r, i, o, c, "next", n)
              }

              function c(n) {
                u(a, r, i, o, c, "throw", n)
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
                  yonghuming: "",
                  mima: "",
                  xingming: "",
                  nianling: "",
                  xingbie: "",
                  shouji: "",
                  youxiang: "",
                  touxiang: ""
                },
                xingbieOptions: [],
                xingbieIndex: 0,
                user: {},
                ro: {
                  yonghuming: !1,
                  mima: !1,
                  xingming: !1,
                  nianling: !1,
                  xingbie: !1,
                  shouji: !1,
                  youxiang: !1,
                  touxiang: !1
                }
              }
            },
            components: {
              wPicker: o
            },
            computed: {},
            onLoad: function (e) {
              var t = this;
              return a(r.default.mark((function i() {
                var u, a, o, c;
                return r.default.wrap((function (i) {
                  while (1) switch (i.prev = i.next) {
                    case 0:
                      return u = n.getStorageSync("nowTable"), i.next = 3, t.$api.session(u);
                    case 3:
                      if (a = i.sent, t.user = a.data, t.xingbieOptions = "男,女".split(","), t.ruleForm.userid = n.getStorageSync("userid"), e.refid && (t.ruleForm.refid = e.refid), !e.id) {
                        i.next = 14;
                        break
                      }
                      return t.ruleForm.id = e.id, i.next = 12, t.$api.info("yonghu", t.ruleForm.id);
                    case 12:
                      a = i.sent, t.ruleForm = a.data;
                    case 14:
                      if (!e.cross) {
                        i.next = 53;
                        break
                      }
                      o = n.getStorageSync("crossObj"), i.t0 = r.default.keys(o);
                    case 17:
                      if ((i.t1 = i.t0()).done) {
                        i.next = 53;
                        break
                      }
                      if (c = i.t1.value, "yonghuming" != c) {
                        i.next = 23;
                        break
                      }
                      return t.ruleForm.yonghuming = o[c], t.ro.yonghuming = !0, i.abrupt("continue", 17);
                    case 23:
                      if ("mima" != c) {
                        i.next = 27;
                        break
                      }
                      return t.ruleForm.mima = o[c], t.ro.mima = !0, i.abrupt("continue", 17);
                    case 27:
                      if ("xingming" != c) {
                        i.next = 31;
                        break
                      }
                      return t.ruleForm.xingming = o[c], t.ro.xingming = !0, i.abrupt("continue", 17);
                    case 31:
                      if ("nianling" != c) {
                        i.next = 35;
                        break
                      }
                      return t.ruleForm.nianling = o[c], t.ro.nianling = !0, i.abrupt("continue", 17);
                    case 35:
                      if ("xingbie" != c) {
                        i.next = 39;
                        break
                      }
                      return t.ruleForm.xingbie = o[c], t.ro.xingbie = !0, i.abrupt("continue", 17);
                    case 39:
                      if ("shouji" != c) {
                        i.next = 43;
                        break
                      }
                      return t.ruleForm.shouji = o[c], t.ro.shouji = !0, i.abrupt("continue", 17);
                    case 43:
                      if ("youxiang" != c) {
                        i.next = 47;
                        break
                      }
                      return t.ruleForm.youxiang = o[c], t.ro.youxiang = !0, i.abrupt("continue", 17);
                    case 47:
                      if ("touxiang" != c) {
                        i.next = 51;
                        break
                      }
                      return t.ruleForm.touxiang = o[c], t.ro.touxiang = !0, i.abrupt("continue", 17);
                    case 51:
                      i.next = 17;
                      break;
                    case 53:
                      t.styleChange();
                    case 54:
                    case "end":
                      return i.stop()
                  }
                }), i)
              })))()
            },
            methods: {
              styleChange: function () {
                this.$nextTick((function () {}))
              },
              xingbieChange: function (n) {
                this.xingbieIndex = n.target.value, this.ruleForm.xingbie = this.xingbieOptions[this.xingbieIndex]
              },
              touxiangTap: function () {
                var n = this;
                this.$api.upload((function (e) {
                  n.ruleForm.touxiang = n.$base.url + "upload/" + e.file, n.$forceUpdate(), n.$nextTick((function () {
                    n.styleChange()
                  }))
                }))
              },
              getUUID: function () {
                return (new Date).getTime()
              },
              onSubmitTap: function () {
                var n = this;
                return a(r.default.mark((function e() {
                  return r.default.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if (n.ruleForm.yonghuming) {
                          e.next = 3;
                          break
                        }
                        return n.$utils.msg("用户名不能为空"), e.abrupt("return");
                      case 3:
                        if (!n.ruleForm.youxiang || n.$validate.isEmail(n.ruleForm.youxiang)) {
                          e.next = 6;
                          break
                        }
                        return n.$utils.msg("邮箱应输入邮件格式"), e.abrupt("return");
                      case 6:
                        if (!n.ruleForm.id) {
                          e.next = 11;
                          break
                        }
                        return e.next = 9, n.$api.update("yonghu", n.ruleForm);
                      case 9:
                        e.next = 13;
                        break;
                      case 11:
                        return e.next = 13, n.$api.add("yonghu", n.ruleForm);
                      case 13:
                        n.$utils.msgBack("提交成功");
                      case 14:
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
                  i = e.getDate();
                return "start" === n ? t -= 60 : "end" === n && (t += 2), r = r > 9 ? r : "0" + r, i = i > 9 ? i : "0" + i, "".concat(t, "-").concat(r, "-").concat(i)
              },
              toggleTab: function (n) {
                this.$refs[n].show()
              }
            }
          };
        e.default = c
      }).call(this, t("543d")["default"])
    },
    "37fb": function (n, e, t) {
      "use strict";
      (function (n) {
        t("e65b");
        r(t("66fd"));
        var e = r(t("da52"));

        function r(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(e.default)
      }).call(this, t("543d")["createPage"])
    },
    6316: function (n, e, t) {
      "use strict";
      var r = t("d3f9"),
        i = t.n(r);
      i.a
    },
    7314: function (n, e, t) {
      "use strict";
      t.r(e);
      var r = t("3619"),
        i = t.n(r);
      for (var u in r) "default" !== u && function (n) {
        t.d(e, n, (function () {
          return r[n]
        }))
      }(u);
      e["default"] = i.a
    },
    d352: function (n, e, t) {
      "use strict";
      var r;
      t.d(e, "b", (function () {
        return i
      })), t.d(e, "c", (function () {
        return u
      })), t.d(e, "a", (function () {
        return r
      }));
      var i = function () {
          var n = this,
            e = n.$createElement;
          n._self._c
        },
        u = []
    },
    d3f9: function (n, e, t) {},
    da52: function (n, e, t) {
      "use strict";
      t.r(e);
      var r = t("d352"),
        i = t("7314");
      for (var u in i) "default" !== u && function (n) {
        t.d(e, n, (function () {
          return i[n]
        }))
      }(u);
      t("6316");
      var a, o = t("f0c5"),
        c = Object(o["a"])(i["default"], r["b"], r["c"], !1, null, "546e0b92", null, !1, r["a"], a);
      e["default"] = c.exports
    }
  },
  [
    ["37fb", "common/runtime", "common/vendor"]
  ]
]);