(function(t) {
    function e(e) {
        for (var n, i, u = e[0], s = e[1], c = e[2], v = 0, f = []; v < u.length; v++) i = u[v],
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && f.push(a[i][0]),
        a[i] = 0;
        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        l && l(e);
        while (f.length) f.shift()();
        return o.push.apply(o, c || []),
        r()
    }
    function r() {
        for (var t, e = 0; e < o.length; e++) {
            for (var r = o[e], n = !0, u = 1; u < r.length; u++) {
                var s = r[u];
                0 !== a[s] && (n = !1)
            }
            n && (o.splice(e--, 1), t = i(i.s = r[0]))
        }
        return t
    }
    var n = {},
    a = {
        app: 0
    },
    o = [];
    function i(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.m = t,
    i.c = n,
    i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    },
    i.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) i.d(r, n,
        function(e) {
            return t[e]
        }.bind(null, n));
        return r
    },
    i.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t["default"]
        }: function() {
            return t
        };
        return i.d(e, "a", e),
        e
    },
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    i.p = "/";
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
    s = u.push.bind(u);
    u.push = e,
    u = u.slice();
    for (var c = 0; c < u.length; c++) e(u[c]);
    var l = s;
    o.push([0, "chunk-vendors"]),
    r()
})({
    0 : function(t, e, r) {
        t.exports = r("56d7")
    },
    "24b9": function(t, e, r) {
        "use strict";
        var n = r("df65"),
        a = r.n(n);
        a.a
    },
    "3ea0": function(t, e, r) {},
    "56d7": function(t, e, r) {
        "use strict";
        r.r(e);
        r("e260"),
        r("e6cf"),
        r("cca6"),
        r("a79d");
        for (var n = r("2b0e"), a = function() {
            var t = this,
            e = t.$createElement,
            r = t._self._c || e;
            return r("div", {
                attrs: {
                    id: "app"
                }
            },
            [t._m(0), r("div", {
                staticClass: "panel"
            },
            [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.bvNumber,
                    expression: "bvNumber"
                }],
                staticClass: "bv",
                attrs: {
                    type: "input",
                    placeholder: "bv"
                },
                domProps: {
                    value: t.bvNumber
                },
                on: {
                    input: [function(e) {
                        e.target.composing || (t.bvNumber = e.target.value)
                    },
                    t.switch2av]
                }
            }), r("i", {
                staticClass: "iconfont icon-zhuanhua"
            }), r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.avNumber,
                    expression: "avNumber"
                }],
                staticClass: "av",
                attrs: {
                    type: "input",
                    placeholder: "av"
                },
                domProps: {
                    value: t.avNumber
                },
                on: {
                    input: [function(e) {
                        e.target.composing || (t.avNumber = e.target.value)
                    },
                    t.switch2bv]
                }
            })]), t._m(1)])
        },
        o = [function() {
            var t = this,
            e = t.$createElement,
            r = t._self._c || e;
            return r("nav", [r("div", {
                staticClass: "pornhub-icon"
            },
            [r("span", {
                staticClass: "left"
            },
            [t._v("Bilibili ")]), r("span", {
                staticClass: "right"
            },
            [t._v("av号bv号互转工具")])])])
        },
        function() {
            var t = this,
            e = t.$createElement,
            r = t._self._c || e;
            return r()
        }], i = (r("a15b"), r("fb6a"), r("ac1f"), r("1276"), r("2ca0"), "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF"), u = {},
        s = 0; s < 58; s++) u[i[s]] = s;
        var c = [11, 10, 3, 8, 4, 6],
        l = 177451812,
        v = 8728348608;
        function f(t) {
            for (var e = 0,
            r = 0; r < 6; r++) e += u[t[c[r]]] * Math.pow(58, r);
            return e - v ^ l
        }
        function p(t) {
            t = (t ^ l) + v;
            for (var e = "BV1  4 1 7  ".split(""), r = 0; r < 6; r++) e[c[r]] = i[Math.floor(t / Math.pow(58, r)) % 58];
            return e.join("")
        }
        var b = {
            data: function() {
                return {
                    bvNumber: "",
                    avNumber: ""
                }
            },
            methods: {
                switch2av: function() {
                    var t = null;
                    t = this.bvNumber.toLowerCase().startsWith("bv") ? this.bvNumber: "BV" + this.bvNumber,
                    this.avNumber = "av" + f(t)
                },
                switch2bv: function() {
                    var t = null;
                    t = this.avNumber.toLowerCase().startsWith("av") ? this.avNumber.slice(2) : this.avNumber,
                    t = parseInt(t),
                    this.bvNumber = String(p(t))
                }
            }
        },
        h = b,
        m = (r("24b9"), r("94fb"), r("2877")),
        d = Object(m["a"])(h, a, o, !1, null, "6bc47ba5", null),
        w = d.exports;
        r("a342");
        n["a"].config.productionTip = !1,
        new n["a"]({
            render: function(t) {
                return t(w)
            }
        }).$mount("#app")
    },
    "94fb": function(t, e, r) {
        "use strict";
        var n = r("3ea0"),
        a = r.n(n);
        a.a
    },
    a342: function(t, e, r) {},
    df65: function(t, e, r) {}
});