(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/wupinxinxi/add-or-update"], {
    "0724": function (n, e, i) {
      "use strict";
      (function (n) {
        i("e65b");
        t(i("66fd"));
        var e = t(i("c923"));

        function t(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(e.default)
      }).call(this, i("543d")["createPage"])
    },
    "542b": function (n, e, i) {
      "use strict";
      var t = i("b1b9"),
        u = i.n(t);
      u.a
    },
    "98f8": function (n, e, i) {
      "use strict";
      i.r(e);
      var t = i("f30d"),
        u = i.n(t);
      for (var r in t) "default" !== r && function (n) {
        i.d(e, n, (function () {
          return t[n]
        }))
      }(r);
      e["default"] = u.a
    },
    "9cc4": function (n, e, i) {
      "use strict";
      i.d(e, "b", (function () {
        return u
      })), i.d(e, "c", (function () {
        return r
      })), i.d(e, "a", (function () {
        return t
      }));
      var t = {
          wPicker: function () {
            return Promise.all([i.e("common/vendor"), i.e("components/w-picker/w-picker")]).then(i.bind(null, "3e31"))
          }
        },
        u = function () {
          var n = this,
            e = n.$createElement;
          n._self._c
        },
        r = []
    },
    b1b9: function (n, e, i) {},
    c923: function (n, e, i) {
      "use strict";
      i.r(e);
      var t = i("9cc4"),
        u = i("98f8");
      for (var r in u) "default" !== r && function (n) {
        i.d(e, n, (function () {
          return u[n]
        }))
      }(r);
      i("542b");
      var a, o = i("f0c5"),
        c = Object(o["a"])(u["default"], t["b"], t["c"], !1, null, "13d397ea", null, !1, t["a"], a);
      e["default"] = c.exports
    },
    f30d: function (n, e, i) {
      "use strict";
      (function (n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = u(i("a34a"));

        function u(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }

        function r(n, e, i, t, u, r, a) {
          try {
            var o = n[r](a),
              c = o.value
          } catch (s) {
            return void i(s)
          }
          o.done ? e(c) : Promise.resolve(c).then(t, u)
        }

        function a(n) {
          return function () {
            var e = this,
              i = arguments;
            return new Promise((function (t, u) {
              var a = n.apply(e, i);

              function o(n) {
                r(a, t, u, o, c, "next", n)
              }

              function c(n) {
                r(a, t, u, o, c, "throw", n)
              }
              o(void 0)
            }))
          }
        }
        var o = function () {
            Promise.all([i.e("common/vendor"), i.e("components/w-picker/w-picker")]).then(function () {
              return resolve(i("3e31"))
            }.bind(null, i)).catch(i.oe)
          },
          c = {
            data: function () {
              return {
                ruleForm: {
                  wupinbianhao: this.getUUID(),
                  wupinmingcheng: "",
                  wupinleibie: "",
                  wupintupian: "",
                  shiqushijian: "",
                  shiqudidian: "",
                  lianxidianhua: "",
                  yonghuming: "",
                  wupinmiaoshu: ""
                },
                wupinleibieOptions: [],
                wupinleibieIndex: 0,
                user: {},
                ro: {
                  wupinbianhao: !1,
                  wupinmingcheng: !1,
                  wupinleibie: !1,
                  wupintupian: !1,
                  shiqushijian: !1,
                  shiqudidian: !1,
                  lianxidianhua: !1,
                  yonghuming: !1,
                  wupinmiaoshu: !1
                }
              }
            },
            components: {
              wPicker: o
            },
            computed: {},
            onLoad: function (e) {
              var i = this;
              return a(t.default.mark((function u() {
                var r, a, o, c;
                return t.default.wrap((function (u) {
                  while (1) switch (u.prev = u.next) {
                    case 0:
                      return r = n.getStorageSync("nowTable"), u.next = 3, i.$api.session(r);
                    case 3:
                      return a = u.sent, i.user = a.data, i.ruleForm.yonghuming = i.user.yonghuming, u.next = 8, i.$api.option("wupinfenlei", "wupinleibie", {});
                    case 8:
                      if (a = u.sent, i.wupinleibieOptions = a.data, i.ruleForm.userid = n.getStorageSync("userid"), e.refid && (i.ruleForm.refid = e.refid), !e.id) {
                        u.next = 18;
                        break
                      }
                      return i.ruleForm.id = e.id, u.next = 16, i.$api.info("wupinxinxi", i.ruleForm.id);
                    case 16:
                      a = u.sent, i.ruleForm = a.data;
                    case 18:
                      if (!e.cross) {
                        u.next = 61;
                        break
                      }
                      o = n.getStorageSync("crossObj"), u.t0 = t.default.keys(o);
                    case 21:
                      if ((u.t1 = u.t0()).done) {
                        u.next = 61;
                        break
                      }
                      if (c = u.t1.value, "wupinbianhao" != c) {
                        u.next = 27;
                        break
                      }
                      return i.ruleForm.wupinbianhao = o[c], i.ro.wupinbianhao = !0, u.abrupt("continue", 21);
                    case 27:
                      if ("wupinmingcheng" != c) {
                        u.next = 31;
                        break
                      }
                      return i.ruleForm.wupinmingcheng = o[c], i.ro.wupinmingcheng = !0, u.abrupt("continue", 21);
                    case 31:
                      if ("wupinleibie" != c) {
                        u.next = 35;
                        break
                      }
                      return i.ruleForm.wupinleibie = o[c], i.ro.wupinleibie = !0, u.abrupt("continue", 21);
                    case 35:
                      if ("wupintupian" != c) {
                        u.next = 39;
                        break
                      }
                      return i.ruleForm.wupintupian = o[c], i.ro.wupintupian = !0, u.abrupt("continue", 21);
                    case 39:
                      if ("shiqushijian" != c) {
                        u.next = 43;
                        break
                      }
                      return i.ruleForm.shiqushijian = o[c], i.ro.shiqushijian = !0, u.abrupt("continue", 21);
                    case 43:
                      if ("shiqudidian" != c) {
                        u.next = 47;
                        break
                      }
                      return i.ruleForm.shiqudidian = o[c], i.ro.shiqudidian = !0, u.abrupt("continue", 21);
                    case 47:
                      if ("lianxidianhua" != c) {
                        u.next = 51;
                        break
                      }
                      return i.ruleForm.lianxidianhua = o[c], i.ro.lianxidianhua = !0, u.abrupt("continue", 21);
                    case 51:
                      if ("yonghuming" != c) {
                        u.next = 55;
                        break
                      }
                      return i.ruleForm.yonghuming = o[c], i.ro.yonghuming = !0, u.abrupt("continue", 21);
                    case 55:
                      if ("wupinmiaoshu" != c) {
                        u.next = 59;
                        break
                      }
                      return i.ruleForm.wupinmiaoshu = o[c], i.ro.wupinmiaoshu = !0, u.abrupt("continue", 21);
                    case 59:
                      u.next = 21;
                      break;
                    case 61:
                      i.styleChange();
                    case 62:
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
              shiqushijianConfirm: function (n) {
                console.log(n), this.ruleForm.shiqushijian = n.result, this.$forceUpdate()
              },
              wupinleibieChange: function (n) {
                this.wupinleibieIndex = n.target.value, this.ruleForm.wupinleibie = this.wupinleibieOptions[this.wupinleibieIndex]
              },
              wupintupianTap: function () {
                var n = this;
                this.$api.upload((function (e) {
                  n.ruleForm.wupintupian = n.$base.url + "upload/" + e.file, n.$forceUpdate(), n.$nextTick((function () {
                    n.styleChange()
                  }))
                }))
              },
              getUUID: function () {
                return (new Date).getTime()
              },
              onSubmitTap: function () {
                var n = this;
                return a(t.default.mark((function e() {
                  return t.default.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if (!n.ruleForm.id) {
                          e.next = 5;
                          break
                        }
                        return e.next = 3, n.$api.update("wupinxinxi", n.ruleForm);
                      case 3:
                        e.next = 7;
                        break;
                      case 5:
                        return e.next = 7, n.$api.add("wupinxinxi", n.ruleForm);
                      case 7:
                        n.$utils.msgBack("提交成功");
                      case 8:
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
                  i = e.getFullYear(),
                  t = e.getMonth() + 1,
                  u = e.getDate();
                return "start" === n ? i -= 60 : "end" === n && (i += 2), t = t > 9 ? t : "0" + t, u = u > 9 ? u : "0" + u, "".concat(i, "-").concat(t, "-").concat(u)
              },
              toggleTab: function (n) {
                this.$refs[n].show()
              }
            }
          };
        e.default = c
      }).call(this, i("543d")["default"])
    }
  },
  [
    ["0724", "common/runtime", "common/vendor"]
  ]
]);