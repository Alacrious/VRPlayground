! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "/build/", t(0)
}([function(e, t, n) {
    e.exports = n(1)
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e) {
        var t = document.createElement("link");
        t.href = e, t.type = "text/css", t.rel = "stylesheet", t.media = "screen,print", t.setAttribute("data-aframe-inspector", "style"), document.getElementsByTagName("head")[0].appendChild(t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        u = n(2),
        c = o(u),
        p = n(30),
        d = o(p),
        f = n(167),
        h = o(f),
        m = n(205),
        v = o(m),
        y = n(208),
        g = o(y),
        b = n(211),
        E = o(b);
    n(212), n(216);
    var w = n(183),
        C = n(172);
    s("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"), s("https://fonts.googleapis.com/css?family=Roboto:400,300,500");
    var x = function(e) {
        function t(e) {
            r(this, t);
            var n = a(this, Object.getPrototypeOf(t).call(this, e));
            return n.onModalTextureOnClose = function(e) {
                n.setState({
                    isModalTexturesOpen: !1
                }), n.state.textureOnClose && n.state.textureOnClose(e)
            }, n.openModal = function() {
                n.setState({
                    isModalTexturesOpen: !0
                })
            }, n.toggleEdit = function() {
                n.state.inspectorEnabled ? w.close() : w.open()
            }, n.state = {
                inspectorEnabled: !0,
                sceneEl: document.querySelector("a-scene"),
                entity: null,
                isModalTexturesOpen: !1
            }, n
        }
        return i(t, e), l(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this,
                    t = new MutationObserver(function(e) {
                        C.emit("domModified", e)
                    }),
                    n = {
                        attributes: !0,
                        childList: !0,
                        characterData: !0
                    };
                t.observe(this.state.sceneEl, n), C.on("openTexturesModal", function(e) {
                    this.setState({
                        isModalTexturesOpen: !0,
                        textureOnClose: e
                    })
                }.bind(this)), C.on("entitySelected", function(t) {
                    e.setState({
                        entity: t
                    })
                }), C.on("inspectorModeChanged", function(t) {
                    e.setState({
                        inspectorEnabled: t
                    })
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.state.sceneEl,
                    t = this.state.isModalTexturesOpen,
                    n = c["default"].createElement("a", {
                        className: "toggle-edit",
                        onClick: this.toggleEdit
                    }, this.state.inspectorEnabled ? "Back to Scene" : "Inspect Scene");
                return c["default"].createElement("div", null, n, c["default"].createElement("div", {
                    id: "aframe-inspector-panels",
                    className: this.state.inspectorEnabled ? "" : "hidden"
                }, c["default"].createElement(v["default"], {
                    ref: "modaltextures",
                    isOpen: t,
                    onClose: this.onModalTextureOnClose
                }), c["default"].createElement("div", {
                    id: "left-sidebar"
                }, c["default"].createElement(g["default"], {
                    scene: e,
                    selectedEntity: this.state.entity
                })), c["default"].createElement("div", {
                    id: "right-panels"
                }, c["default"].createElement(E["default"], null), c["default"].createElement(h["default"], {
                    entity: this.state.entity
                }))))
            }
        }]), t
    }(c["default"].Component);
    t["default"] = x,
        function() {
            var e = document.createElement("div");
            e.id = "aframe-inspector", e.setAttribute("data-aframe-inspector", "app"), document.body.appendChild(e), window.addEventListener("inspector-loaded", function() {
                d["default"].render(c["default"].createElement(x, null), e)
            }), AFRAME.INSPECTOR = w
        }()
}, function(e, t, n) {
    "use strict";
    e.exports = n(3)
}, function(e, t, n) {
    "use strict";
    var o = n(4),
        r = n(5),
        a = n(17),
        i = n(20),
        s = n(25),
        l = n(9),
        u = n(27),
        c = n(28),
        p = n(29),
        d = (n(11), l.createElement),
        f = l.createFactory,
        h = l.cloneElement,
        m = o,
        v = {
            Children: {
                map: r.map,
                forEach: r.forEach,
                count: r.count,
                toArray: r.toArray,
                only: p
            },
            Component: a,
            createElement: d,
            cloneElement: h,
            isValidElement: l.isValidElement,
            PropTypes: u,
            createClass: i.createClass,
            createFactory: f,
            createMixin: function(e) {
                return e
            },
            DOM: s,
            version: c,
            __spread: m
        };
    e.exports = v
}, function(e, t) {
    "use strict";

    function n(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }

    function o() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            var o = Object.getOwnPropertyNames(t).map(function(e) {
                return t[e]
            });
            if ("0123456789" !== o.join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (a) {
            return !1
        }
    }
    var r = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
    e.exports = o() ? Object.assign : function(e, t) {
        for (var o, i, s = n(e), l = 1; l < arguments.length; l++) {
            o = Object(arguments[l]);
            for (var u in o) r.call(o, u) && (s[u] = o[u]);
            if (Object.getOwnPropertySymbols) {
                i = Object.getOwnPropertySymbols(o);
                for (var c = 0; c < i.length; c++) a.call(o, i[c]) && (s[i[c]] = o[i[c]])
            }
        }
        return s
    }
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return ("" + e).replace(E, "$&/")
    }

    function r(e, t) {
        this.func = e, this.context = t, this.count = 0
    }

    function a(e, t, n) {
        var o = e.func,
            r = e.context;
        o.call(r, t, e.count++)
    }

    function i(e, t, n) {
        if (null == e) return e;
        var o = r.getPooled(t, n);
        y(e, a, o), r.release(o)
    }

    function s(e, t, n, o) {
        this.result = e, this.keyPrefix = t, this.func = n, this.context = o, this.count = 0
    }

    function l(e, t, n) {
        var r = e.result,
            a = e.keyPrefix,
            i = e.func,
            s = e.context,
            l = i.call(s, t, e.count++);
        Array.isArray(l) ? u(l, r, n, v.thatReturnsArgument) : null != l && (m.isValidElement(l) && (l = m.cloneAndReplaceKey(l, a + (!l.key || t && t.key === l.key ? "" : o(l.key) + "/") + n)), r.push(l))
    }

    function u(e, t, n, r, a) {
        var i = "";
        null != n && (i = o(n) + "/");
        var u = s.getPooled(t, i, r, a);
        y(e, l, u), s.release(u)
    }

    function c(e, t, n) {
        if (null == e) return e;
        var o = [];
        return u(e, o, null, t, n), o
    }

    function p(e, t, n) {
        return null
    }

    function d(e, t) {
        return y(e, p, null)
    }

    function f(e) {
        var t = [];
        return u(e, t, null, v.thatReturnsArgument), t
    }
    var h = n(6),
        m = n(9),
        v = n(12),
        y = n(14),
        g = h.twoArgumentPooler,
        b = h.fourArgumentPooler,
        E = /\/+/g;
    r.prototype.destructor = function() {
        this.func = null, this.context = null, this.count = 0
    }, h.addPoolingTo(r, g), s.prototype.destructor = function() {
        this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
    }, h.addPoolingTo(s, b);
    var w = {
        forEach: i,
        map: c,
        mapIntoWithKeyPrefixInternal: u,
        count: d,
        toArray: f
    };
    e.exports = w
}, function(e, t, n) {
    "use strict";
    var o = n(7),
        r = (n(8), function(e) {
            var t = this;
            if (t.instancePool.length) {
                var n = t.instancePool.pop();
                return t.call(n, e), n
            }
            return new t(e)
        }),
        a = function(e, t) {
            var n = this;
            if (n.instancePool.length) {
                var o = n.instancePool.pop();
                return n.call(o, e, t), o
            }
            return new n(e, t)
        },
        i = function(e, t, n) {
            var o = this;
            if (o.instancePool.length) {
                var r = o.instancePool.pop();
                return o.call(r, e, t, n), r
            }
            return new o(e, t, n)
        },
        s = function(e, t, n, o) {
            var r = this;
            if (r.instancePool.length) {
                var a = r.instancePool.pop();
                return r.call(a, e, t, n, o), a
            }
            return new r(e, t, n, o)
        },
        l = function(e, t, n, o, r) {
            var a = this;
            if (a.instancePool.length) {
                var i = a.instancePool.pop();
                return a.call(i, e, t, n, o, r), i
            }
            return new a(e, t, n, o, r)
        },
        u = function(e) {
            var t = this;
            e instanceof t ? void 0 : o("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
        },
        c = 10,
        p = r,
        d = function(e, t) {
            var n = e;
            return n.instancePool = [], n.getPooled = t || p, n.poolSize || (n.poolSize = c), n.release = u, n
        },
        f = {
            addPoolingTo: d,
            oneArgumentPooler: r,
            twoArgumentPooler: a,
            threeArgumentPooler: i,
            fourArgumentPooler: s,
            fiveArgumentPooler: l
        };
    e.exports = f
}, function(e, t) {
    "use strict";

    function n(e) {
        for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, o = 0; o < t; o++) n += "&args[]=" + encodeURIComponent(arguments[o + 1]);
        n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        var r = new Error(n);
        throw r.name = "Invariant Violation", r.framesToPop = 1, r
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o, r, a, i, s) {
        if (!e) {
            var l;
            if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var u = [n, o, r, a, i, s],
                    c = 0;
                l = new Error(t.replace(/%s/g, function() {
                    return u[c++]
                })), l.name = "Invariant Violation"
            }
            throw l.framesToPop = 1, l
        }
    }
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return void 0 !== e.ref
    }

    function r(e) {
        return void 0 !== e.key
    }
    var a = n(4),
        i = n(10),
        s = (n(11), n(13), Object.prototype.hasOwnProperty),
        l = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
        u = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        },
        c = function(e, t, n, o, r, a, i) {
            var s = {
                $$typeof: l,
                type: e,
                key: t,
                ref: n,
                props: i,
                _owner: a
            };
            return s
        };
    c.createElement = function(e, t, n) {
        var a, l = {},
            p = null,
            d = null,
            f = null,
            h = null;
        if (null != t) {
            o(t) && (d = t.ref), r(t) && (p = "" + t.key), f = void 0 === t.__self ? null : t.__self, h = void 0 === t.__source ? null : t.__source;
            for (a in t) s.call(t, a) && !u.hasOwnProperty(a) && (l[a] = t[a])
        }
        var m = arguments.length - 2;
        if (1 === m) l.children = n;
        else if (m > 1) {
            for (var v = Array(m), y = 0; y < m; y++) v[y] = arguments[y + 2];
            l.children = v
        }
        if (e && e.defaultProps) {
            var g = e.defaultProps;
            for (a in g) void 0 === l[a] && (l[a] = g[a])
        }
        return c(e, p, d, f, h, i.current, l)
    }, c.createFactory = function(e) {
        var t = c.createElement.bind(null, e);
        return t.type = e, t
    }, c.cloneAndReplaceKey = function(e, t) {
        var n = c(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n
    }, c.cloneElement = function(e, t, n) {
        var l, p = a({}, e.props),
            d = e.key,
            f = e.ref,
            h = e._self,
            m = e._source,
            v = e._owner;
        if (null != t) {
            o(t) && (f = t.ref, v = i.current), r(t) && (d = "" + t.key);
            var y;
            e.type && e.type.defaultProps && (y = e.type.defaultProps);
            for (l in t) s.call(t, l) && !u.hasOwnProperty(l) && (void 0 === t[l] && void 0 !== y ? p[l] = y[l] : p[l] = t[l])
        }
        var g = arguments.length - 2;
        if (1 === g) p.children = n;
        else if (g > 1) {
            for (var b = Array(g), E = 0; E < g; E++) b[E] = arguments[E + 2];
            p.children = b
        }
        return c(e.type, d, f, h, m, v, p)
    }, c.isValidElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === l
    }, c.REACT_ELEMENT_TYPE = l, e.exports = c
}, function(e, t) {
    "use strict";
    var n = {
        current: null
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var o = n(12),
        r = o;
    e.exports = r
}, function(e, t) {
    "use strict";

    function n(e) {
        return function() {
            return e
        }
    }
    var o = function() {};
    o.thatReturns = n, o.thatReturnsFalse = n(!1), o.thatReturnsTrue = n(!0), o.thatReturnsNull = n(null), o.thatReturnsThis = function() {
        return this
    }, o.thatReturnsArgument = function(e) {
        return e
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    var o = !1;
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return e && "object" == typeof e && null != e.key ? u.escape(e.key) : t.toString(36)
    }

    function r(e, t, n, a) {
        var d = typeof e;
        if ("undefined" !== d && "boolean" !== d || (e = null), null === e || "string" === d || "number" === d || s.isValidElement(e)) return n(a, e, "" === t ? c + o(e, 0) : t), 1;
        var f, h, m = 0,
            v = "" === t ? c : t + p;
        if (Array.isArray(e))
            for (var y = 0; y < e.length; y++) f = e[y], h = v + o(f, y), m += r(f, h, n, a);
        else {
            var g = l(e);
            if (g) {
                var b, E = g.call(e);
                if (g !== e.entries)
                    for (var w = 0; !(b = E.next()).done;) f = b.value, h = v + o(f, w++), m += r(f, h, n, a);
                else
                    for (; !(b = E.next()).done;) {
                        var C = b.value;
                        C && (f = C[1], h = v + u.escape(C[0]) + p + o(f, 0), m += r(f, h, n, a))
                    }
            } else if ("object" === d) {
                var x = "",
                    T = String(e);
                i("31", "[object Object]" === T ? "object with keys {" + Object.keys(e).join(", ") + "}" : T, x)
            }
        }
        return m
    }

    function a(e, t, n) {
        return null == e ? 0 : r(e, "", t, n)
    }
    var i = n(7),
        s = (n(10), n(9)),
        l = n(15),
        u = (n(8), n(16)),
        c = (n(11), "."),
        p = ":";
    e.exports = a
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = e && (o && e[o] || e[r]);
        if ("function" == typeof t) return t
    }
    var o = "function" == typeof Symbol && Symbol.iterator,
        r = "@@iterator";
    e.exports = n
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = /[=:]/g,
            n = {
                "=": "=0",
                ":": "=2"
            },
            o = ("" + e).replace(t, function(e) {
                return n[e]
            });
        return "$" + o
    }

    function o(e) {
        var t = /(=0|=2)/g,
            n = {
                "=0": "=",
                "=2": ":"
            },
            o = "." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1);
        return ("" + o).replace(t, function(e) {
            return n[e]
        })
    }
    var r = {
        escape: n,
        unescape: o
    };
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        this.props = e, this.context = t, this.refs = i, this.updater = n || a
    }
    var r = n(7),
        a = n(18),
        i = (n(13), n(19));
    n(8), n(11);
    o.prototype.isReactComponent = {}, o.prototype.setState = function(e, t) {
        "object" != typeof e && "function" != typeof e && null != e ? r("85") : void 0, this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState")
    }, o.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate")
    };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t) {}
    var r = (n(11), {
        isMounted: function(e) {
            return !1
        },
        enqueueCallback: function(e, t) {},
        enqueueForceUpdate: function(e) {
            o(e, "forceUpdate")
        },
        enqueueReplaceState: function(e, t) {
            o(e, "replaceState")
        },
        enqueueSetState: function(e, t) {
            o(e, "setState")
        }
    });
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var o = {};
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        var n = C.hasOwnProperty(t) ? C[t] : null;
        T.hasOwnProperty(t) && (n !== E.OVERRIDE_BASE ? p("73", t) : void 0), e && (n !== E.DEFINE_MANY && n !== E.DEFINE_MANY_MERGED ? p("74", t) : void 0)
    }

    function r(e, t) {
        if (t) {
            "function" == typeof t ? p("75") : void 0, h.isValidElement(t) ? p("76") : void 0;
            var n = e.prototype,
                r = n.__reactAutoBindPairs;
            t.hasOwnProperty(b) && x.mixins(e, t.mixins);
            for (var a in t)
                if (t.hasOwnProperty(a) && a !== b) {
                    var i = t[a],
                        u = n.hasOwnProperty(a);
                    if (o(u, a), x.hasOwnProperty(a)) x[a](e, i);
                    else {
                        var c = C.hasOwnProperty(a),
                            d = "function" == typeof i,
                            f = d && !c && !u && t.autobind !== !1;
                        if (f) r.push(a, i), n[a] = i;
                        else if (u) {
                            var m = C[a];
                            !c || m !== E.DEFINE_MANY_MERGED && m !== E.DEFINE_MANY ? p("77", m, a) : void 0, m === E.DEFINE_MANY_MERGED ? n[a] = s(n[a], i) : m === E.DEFINE_MANY && (n[a] = l(n[a], i))
                        } else n[a] = i
                    }
                }
        }
    }

    function a(e, t) {
        if (t)
            for (var n in t) {
                var o = t[n];
                if (t.hasOwnProperty(n)) {
                    var r = n in x;
                    r ? p("78", n) : void 0;
                    var a = n in e;
                    a ? p("79", n) : void 0, e[n] = o
                }
            }
    }

    function i(e, t) {
        e && t && "object" == typeof e && "object" == typeof t ? void 0 : p("80");
        for (var n in t) t.hasOwnProperty(n) && (void 0 !== e[n] ? p("81", n) : void 0, e[n] = t[n]);
        return e
    }

    function s(e, t) {
        return function() {
            var n = e.apply(this, arguments),
                o = t.apply(this, arguments);
            if (null == n) return o;
            if (null == o) return n;
            var r = {};
            return i(r, n), i(r, o), r
        }
    }

    function l(e, t) {
        return function() {
            e.apply(this, arguments), t.apply(this, arguments)
        }
    }

    function u(e, t) {
        var n = t.bind(e);
        return n
    }

    function c(e) {
        for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
            var o = t[n],
                r = t[n + 1];
            e[o] = u(e, r)
        }
    }
    var p = n(7),
        d = n(4),
        f = n(17),
        h = n(9),
        m = (n(21), n(23), n(18)),
        v = n(19),
        y = (n(8), n(22)),
        g = n(24),
        b = (n(11), g({
            mixins: null
        })),
        E = y({
            DEFINE_ONCE: null,
            DEFINE_MANY: null,
            OVERRIDE_BASE: null,
            DEFINE_MANY_MERGED: null
        }),
        w = [],
        C = {
            mixins: E.DEFINE_MANY,
            statics: E.DEFINE_MANY,
            propTypes: E.DEFINE_MANY,
            contextTypes: E.DEFINE_MANY,
            childContextTypes: E.DEFINE_MANY,
            getDefaultProps: E.DEFINE_MANY_MERGED,
            getInitialState: E.DEFINE_MANY_MERGED,
            getChildContext: E.DEFINE_MANY_MERGED,
            render: E.DEFINE_ONCE,
            componentWillMount: E.DEFINE_MANY,
            componentDidMount: E.DEFINE_MANY,
            componentWillReceiveProps: E.DEFINE_MANY,
            shouldComponentUpdate: E.DEFINE_ONCE,
            componentWillUpdate: E.DEFINE_MANY,
            componentDidUpdate: E.DEFINE_MANY,
            componentWillUnmount: E.DEFINE_MANY,
            updateComponent: E.OVERRIDE_BASE
        },
        x = {
            displayName: function(e, t) {
                e.displayName = t
            },
            mixins: function(e, t) {
                if (t)
                    for (var n = 0; n < t.length; n++) r(e, t[n])
            },
            childContextTypes: function(e, t) {
                e.childContextTypes = d({}, e.childContextTypes, t)
            },
            contextTypes: function(e, t) {
                e.contextTypes = d({}, e.contextTypes, t)
            },
            getDefaultProps: function(e, t) {
                e.getDefaultProps ? e.getDefaultProps = s(e.getDefaultProps, t) : e.getDefaultProps = t
            },
            propTypes: function(e, t) {
                e.propTypes = d({}, e.propTypes, t)
            },
            statics: function(e, t) {
                a(e, t)
            },
            autobind: function() {}
        },
        T = {
            replaceState: function(e, t) {
                this.updater.enqueueReplaceState(this, e), t && this.updater.enqueueCallback(this, t, "replaceState")
            },
            isMounted: function() {
                return this.updater.isMounted(this)
            }
        },
        _ = function() {};
    d(_.prototype, f.prototype, T);
    var M = {
        createClass: function(e) {
            var t = function(e, n, o) {
                this.__reactAutoBindPairs.length && c(this), this.props = e, this.context = n, this.refs = v, this.updater = o || m, this.state = null;
                var r = this.getInitialState ? this.getInitialState() : null;
                "object" != typeof r || Array.isArray(r) ? p("82", t.displayName || "ReactCompositeComponent") : void 0, this.state = r
            };
            t.prototype = new _, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], w.forEach(r.bind(null, t)), r(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), t.prototype.render ? void 0 : p("83");
            for (var n in C) t.prototype[n] || (t.prototype[n] = null);
            return t
        },
        injection: {
            injectMixin: function(e) {
                w.push(e)
            }
        }
    };
    e.exports = M
}, function(e, t, n) {
    "use strict";
    var o = n(22),
        r = o({
            prop: null,
            context: null,
            childContext: null
        });
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        r = function(e) {
            var t, n = {};
            e instanceof Object && !Array.isArray(e) ? void 0 : o(!1);
            for (t in e) e.hasOwnProperty(t) && (n[t] = t);
            return n
        };
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var o = {};
    e.exports = o
}, function(e, t) {
    "use strict";
    var n = function(e) {
        var t;
        for (t in e)
            if (e.hasOwnProperty(t)) return t;
        return null
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return r.createFactory(e)
    }
    var r = n(9),
        a = n(26),
        i = a({
            a: "a",
            abbr: "abbr",
            address: "address",
            area: "area",
            article: "article",
            aside: "aside",
            audio: "audio",
            b: "b",
            base: "base",
            bdi: "bdi",
            bdo: "bdo",
            big: "big",
            blockquote: "blockquote",
            body: "body",
            br: "br",
            button: "button",
            canvas: "canvas",
            caption: "caption",
            cite: "cite",
            code: "code",
            col: "col",
            colgroup: "colgroup",
            data: "data",
            datalist: "datalist",
            dd: "dd",
            del: "del",
            details: "details",
            dfn: "dfn",
            dialog: "dialog",
            div: "div",
            dl: "dl",
            dt: "dt",
            em: "em",
            embed: "embed",
            fieldset: "fieldset",
            figcaption: "figcaption",
            figure: "figure",
            footer: "footer",
            form: "form",
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            head: "head",
            header: "header",
            hgroup: "hgroup",
            hr: "hr",
            html: "html",
            i: "i",
            iframe: "iframe",
            img: "img",
            input: "input",
            ins: "ins",
            kbd: "kbd",
            keygen: "keygen",
            label: "label",
            legend: "legend",
            li: "li",
            link: "link",
            main: "main",
            map: "map",
            mark: "mark",
            menu: "menu",
            menuitem: "menuitem",
            meta: "meta",
            meter: "meter",
            nav: "nav",
            noscript: "noscript",
            object: "object",
            ol: "ol",
            optgroup: "optgroup",
            option: "option",
            output: "output",
            p: "p",
            param: "param",
            picture: "picture",
            pre: "pre",
            progress: "progress",
            q: "q",
            rp: "rp",
            rt: "rt",
            ruby: "ruby",
            s: "s",
            samp: "samp",
            script: "script",
            section: "section",
            select: "select",
            small: "small",
            source: "source",
            span: "span",
            strong: "strong",
            style: "style",
            sub: "sub",
            summary: "summary",
            sup: "sup",
            table: "table",
            tbody: "tbody",
            td: "td",
            textarea: "textarea",
            tfoot: "tfoot",
            th: "th",
            thead: "thead",
            time: "time",
            title: "title",
            tr: "tr",
            track: "track",
            u: "u",
            ul: "ul",
            "var": "var",
            video: "video",
            wbr: "wbr",
            circle: "circle",
            clipPath: "clipPath",
            defs: "defs",
            ellipse: "ellipse",
            g: "g",
            image: "image",
            line: "line",
            linearGradient: "linearGradient",
            mask: "mask",
            path: "path",
            pattern: "pattern",
            polygon: "polygon",
            polyline: "polyline",
            radialGradient: "radialGradient",
            rect: "rect",
            stop: "stop",
            svg: "svg",
            text: "text",
            tspan: "tspan"
        }, o);
    e.exports = i
}, function(e, t) {
    "use strict";

    function n(e, t, n) {
        if (!e) return null;
        var r = {};
        for (var a in e) o.call(e, a) && (r[a] = t.call(n, e[a], a, e));
        return r
    }
    var o = Object.prototype.hasOwnProperty;
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
    }

    function r(e) {
        function t(t, n, o, r, a, i) {
            if (r = r || T, i = i || o, null == n[o]) {
                var s = w[a];
                return t ? new Error("Required " + s + " `" + i + "` was not specified in " + ("`" + r + "`.")) : null
            }
            return e(n, o, r, a, i)
        }
        var n = t.bind(null, !1);
        return n.isRequired = t.bind(null, !0), n
    }

    function a(e) {
        function t(t, n, o, r, a) {
            var i = t[n],
                s = y(i);
            if (s !== e) {
                var l = w[r],
                    u = g(i);
                return new Error("Invalid " + l + " `" + a + "` of type " + ("`" + u + "` supplied to `" + o + "`, expected ") + ("`" + e + "`."))
            }
            return null
        }
        return r(t)
    }

    function i() {
        return r(C.thatReturns(null))
    }

    function s(e) {
        function t(t, n, o, r, a) {
            if ("function" != typeof e) return new Error("Property `" + a + "` of component `" + o + "` has invalid PropType notation inside arrayOf.");
            var i = t[n];
            if (!Array.isArray(i)) {
                var s = w[r],
                    l = y(i);
                return new Error("Invalid " + s + " `" + a + "` of type " + ("`" + l + "` supplied to `" + o + "`, expected an array."))
            }
            for (var u = 0; u < i.length; u++) {
                var c = e(i, u, o, r, a + "[" + u + "]");
                if (c instanceof Error) return c
            }
            return null
        }
        return r(t)
    }

    function l() {
        function e(e, t, n, o, r) {
            if (!E.isValidElement(e[t])) {
                var a = w[o];
                return new Error("Invalid " + a + " `" + r + "` supplied to " + ("`" + n + "`, expected a single ReactElement."))
            }
            return null
        }
        return r(e)
    }

    function u(e) {
        function t(t, n, o, r, a) {
            if (!(t[n] instanceof e)) {
                var i = w[r],
                    s = e.name || T,
                    l = b(t[n]);
                return new Error("Invalid " + i + " `" + a + "` of type " + ("`" + l + "` supplied to `" + o + "`, expected ") + ("instance of `" + s + "`."))
            }
            return null
        }
        return r(t)
    }

    function c(e) {
        function t(t, n, r, a, i) {
            for (var s = t[n], l = 0; l < e.length; l++)
                if (o(s, e[l])) return null;
            var u = w[a],
                c = JSON.stringify(e);
            return new Error("Invalid " + u + " `" + i + "` of value `" + s + "` " + ("supplied to `" + r + "`, expected one of " + c + "."))
        }
        return r(Array.isArray(e) ? t : function() {
            return new Error("Invalid argument supplied to oneOf, expected an instance of array.")
        })
    }

    function p(e) {
        function t(t, n, o, r, a) {
            if ("function" != typeof e) return new Error("Property `" + a + "` of component `" + o + "` has invalid PropType notation inside objectOf.");
            var i = t[n],
                s = y(i);
            if ("object" !== s) {
                var l = w[r];
                return new Error("Invalid " + l + " `" + a + "` of type " + ("`" + s + "` supplied to `" + o + "`, expected an object."))
            }
            for (var u in i)
                if (i.hasOwnProperty(u)) {
                    var c = e(i, u, o, r, a + "." + u);
                    if (c instanceof Error) return c
                }
            return null
        }
        return r(t)
    }

    function d(e) {
        function t(t, n, o, r, a) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                if (null == s(t, n, o, r, a)) return null
            }
            var l = w[r];
            return new Error("Invalid " + l + " `" + a + "` supplied to " + ("`" + o + "`."))
        }
        return r(Array.isArray(e) ? t : function() {
            return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")
        })
    }

    function f() {
        function e(e, t, n, o, r) {
            if (!m(e[t])) {
                var a = w[o];
                return new Error("Invalid " + a + " `" + r + "` supplied to " + ("`" + n + "`, expected a ReactNode."))
            }
            return null
        }
        return r(e)
    }

    function h(e) {
        function t(t, n, o, r, a) {
            var i = t[n],
                s = y(i);
            if ("object" !== s) {
                var l = w[r];
                return new Error("Invalid " + l + " `" + a + "` of type `" + s + "` " + ("supplied to `" + o + "`, expected `object`."))
            }
            for (var u in e) {
                var c = e[u];
                if (c) {
                    var p = c(i, u, o, r, a + "." + u);
                    if (p) return p
                }
            }
            return null
        }
        return r(t)
    }

    function m(e) {
        switch (typeof e) {
            case "number":
            case "string":
            case "undefined":
                return !0;
            case "boolean":
                return !e;
            case "object":
                if (Array.isArray(e)) return e.every(m);
                if (null === e || E.isValidElement(e)) return !0;
                var t = x(e);
                if (!t) return !1;
                var n, o = t.call(e);
                if (t !== e.entries) {
                    for (; !(n = o.next()).done;)
                        if (!m(n.value)) return !1
                } else
                    for (; !(n = o.next()).done;) {
                        var r = n.value;
                        if (r && !m(r[1])) return !1
                    }
                return !0;
            default:
                return !1
        }
    }

    function v(e, t) {
        return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
    }

    function y(e) {
        var t = typeof e;
        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : v(t, e) ? "symbol" : t
    }

    function g(e) {
        var t = y(e);
        if ("object" === t) {
            if (e instanceof Date) return "date";
            if (e instanceof RegExp) return "regexp"
        }
        return t
    }

    function b(e) {
        return e.constructor && e.constructor.name ? e.constructor.name : T
    }
    var E = n(9),
        w = n(23),
        C = n(12),
        x = n(15),
        T = "<<anonymous>>",
        _ = {
            array: a("array"),
            bool: a("boolean"),
            func: a("function"),
            number: a("number"),
            object: a("object"),
            string: a("string"),
            symbol: a("symbol"),
            any: i(),
            arrayOf: s,
            element: l(),
            instanceOf: u,
            node: f(),
            objectOf: p,
            oneOf: c,
            oneOfType: d,
            shape: h
        };
    e.exports = _
}, function(e, t) {
    "use strict";
    e.exports = "15.2.0"
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return a.isValidElement(e) ? void 0 : r("23"), e
    }
    var r = n(7),
        a = n(9);
    n(8);
    e.exports = o
}, function(e, t, n) {
    "use strict";
    e.exports = n(31)
}, function(e, t, n) {
    "use strict";
    var o = n(32),
        r = n(35),
        a = n(159),
        i = n(59),
        s = n(52),
        l = n(28),
        u = n(164),
        c = n(165),
        p = n(166);
    n(11);
    r.inject();
    var d = {
        findDOMNode: u,
        render: a.render,
        unmountComponentAtNode: a.unmountComponentAtNode,
        version: l,
        unstable_batchedUpdates: s.batchedUpdates,
        unstable_renderSubtreeIntoContainer: p
    };
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        ComponentTree: {
            getClosestInstanceFromNode: o.getClosestInstanceFromNode,
            getNodeFromInstance: function(e) {
                return e._renderedComponent && (e = c(e)), e ? o.getNodeFromInstance(e) : null
            }
        },
        Mount: a,
        Reconciler: i
    });
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function o(e) {
        for (var t; t = e._renderedComponent;) e = t;
        return e
    }

    function r(e, t) {
        var n = o(e);
        n._hostNode = t, t[m] = n
    }

    function a(e) {
        var t = e._hostNode;
        t && (delete t[m], e._hostNode = null)
    }

    function i(e, t) {
        if (!(e._flags & h.hasCachedChildNodes)) {
            var n = e._renderedChildren,
                a = t.firstChild;
            e: for (var i in n)
                if (n.hasOwnProperty(i)) {
                    var s = n[i],
                        l = o(s)._domID;
                    if (null != l) {
                        for (; null !== a; a = a.nextSibling)
                            if (1 === a.nodeType && a.getAttribute(f) === String(l) || 8 === a.nodeType && a.nodeValue === " react-text: " + l + " " || 8 === a.nodeType && a.nodeValue === " react-empty: " + l + " ") {
                                r(s, a);
                                continue e
                            }
                        c("32", l)
                    }
                }
            e._flags |= h.hasCachedChildNodes
        }
    }

    function s(e) {
        if (e[m]) return e[m];
        for (var t = []; !e[m];) {
            if (t.push(e), !e.parentNode) return null;
            e = e.parentNode
        }
        for (var n, o; e && (o = e[m]); e = t.pop()) n = o, t.length && i(o, e);
        return n
    }

    function l(e) {
        var t = s(e);
        return null != t && t._hostNode === e ? t : null
    }

    function u(e) {
        if (void 0 === e._hostNode ? c("33") : void 0, e._hostNode) return e._hostNode;
        for (var t = []; !e._hostNode;) t.push(e), e._hostParent ? void 0 : c("34"), e = e._hostParent;
        for (; t.length; e = t.pop()) i(e, e._hostNode);
        return e._hostNode
    }
    var c = n(7),
        p = n(33),
        d = n(34),
        f = (n(8), p.ID_ATTRIBUTE_NAME),
        h = d,
        m = "__reactInternalInstance$" + Math.random().toString(36).slice(2),
        v = {
            getClosestInstanceFromNode: s,
            getInstanceFromNode: l,
            getNodeFromInstance: u,
            precacheChildNodes: i,
            precacheNode: r,
            uncacheNode: a
        };
    e.exports = v
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return (e & t) === t
    }
    var r = n(7),
        a = (n(8), {
            MUST_USE_PROPERTY: 1,
            HAS_SIDE_EFFECTS: 2,
            HAS_BOOLEAN_VALUE: 4,
            HAS_NUMERIC_VALUE: 8,
            HAS_POSITIVE_NUMERIC_VALUE: 24,
            HAS_OVERLOADED_BOOLEAN_VALUE: 32,
            injectDOMPropertyConfig: function(e) {
                var t = a,
                    n = e.Properties || {},
                    i = e.DOMAttributeNamespaces || {},
                    l = e.DOMAttributeNames || {},
                    u = e.DOMPropertyNames || {},
                    c = e.DOMMutationMethods || {};
                e.isCustomAttribute && s._isCustomAttributeFunctions.push(e.isCustomAttribute);
                for (var p in n) {
                    s.properties.hasOwnProperty(p) ? r("48", p) : void 0;
                    var d = p.toLowerCase(),
                        f = n[p],
                        h = {
                            attributeName: d,
                            attributeNamespace: null,
                            propertyName: p,
                            mutationMethod: null,
                            mustUseProperty: o(f, t.MUST_USE_PROPERTY),
                            hasSideEffects: o(f, t.HAS_SIDE_EFFECTS),
                            hasBooleanValue: o(f, t.HAS_BOOLEAN_VALUE),
                            hasNumericValue: o(f, t.HAS_NUMERIC_VALUE),
                            hasPositiveNumericValue: o(f, t.HAS_POSITIVE_NUMERIC_VALUE),
                            hasOverloadedBooleanValue: o(f, t.HAS_OVERLOADED_BOOLEAN_VALUE)
                        };
                    if (!h.mustUseProperty && h.hasSideEffects ? r("49", p) : void 0, h.hasBooleanValue + h.hasNumericValue + h.hasOverloadedBooleanValue <= 1 ? void 0 : r("50", p), l.hasOwnProperty(p)) {
                        var m = l[p];
                        h.attributeName = m
                    }
                    i.hasOwnProperty(p) && (h.attributeNamespace = i[p]), u.hasOwnProperty(p) && (h.propertyName = u[p]), c.hasOwnProperty(p) && (h.mutationMethod = c[p]), s.properties[p] = h
                }
            }
        }),
        i = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
        s = {
            ID_ATTRIBUTE_NAME: "data-reactid",
            ROOT_ATTRIBUTE_NAME: "data-reactroot",
            ATTRIBUTE_NAME_START_CHAR: i,
            ATTRIBUTE_NAME_CHAR: i + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
            properties: {},
            getPossibleStandardName: null,
            _isCustomAttributeFunctions: [],
            isCustomAttribute: function(e) {
                for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
                    var n = s._isCustomAttributeFunctions[t];
                    if (n(e)) return !0
                }
                return !1
            },
            injection: a
        };
    e.exports = s
}, function(e, t) {
    "use strict";
    var n = {
        hasCachedChildNodes: 1
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o() {
        C || (C = !0, y.EventEmitter.injectReactEventListener(v), y.EventPluginHub.injectEventPluginOrder(i), y.EventPluginUtils.injectComponentTree(p), y.EventPluginUtils.injectTreeTraversal(f), y.EventPluginHub.injectEventPluginsByName({
            SimpleEventPlugin: w,
            EnterLeaveEventPlugin: s,
            ChangeEventPlugin: a,
            SelectEventPlugin: E,
            BeforeInputEventPlugin: r
        }), y.HostComponent.injectGenericComponentClass(c), y.HostComponent.injectTextComponentClass(h), y.DOMProperty.injectDOMPropertyConfig(l), y.DOMProperty.injectDOMPropertyConfig(b), y.EmptyComponent.injectEmptyComponentFactory(function(e) {
            return new d(e)
        }), y.Updates.injectReconcileTransaction(g), y.Updates.injectBatchingStrategy(m), y.Component.injectEnvironment(u))
    }
    var r = n(36),
        a = n(51),
        i = n(66),
        s = n(67),
        l = n(72),
        u = n(73),
        c = n(87),
        p = n(32),
        d = n(130),
        f = n(131),
        h = n(132),
        m = n(133),
        v = n(134),
        y = n(137),
        g = n(138),
        b = n(146),
        E = n(147),
        w = n(148),
        C = !1;
    e.exports = {
        inject: o
    }
}, function(e, t, n) {
    "use strict";

    function o() {
        var e = window.opera;
        return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12
    }

    function r(e) {
        return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
    }

    function a(e) {
        switch (e) {
            case P.topCompositionStart:
                return k.compositionStart;
            case P.topCompositionEnd:
                return k.compositionEnd;
            case P.topCompositionUpdate:
                return k.compositionUpdate
        }
    }

    function i(e, t) {
        return e === P.topKeyDown && t.keyCode === w
    }

    function s(e, t) {
        switch (e) {
            case P.topKeyUp:
                return E.indexOf(t.keyCode) !== -1;
            case P.topKeyDown:
                return t.keyCode !== w;
            case P.topKeyPress:
            case P.topMouseDown:
            case P.topBlur:
                return !0;
            default:
                return !1
        }
    }

    function l(e) {
        var t = e.detail;
        return "object" == typeof t && "data" in t ? t.data : null
    }

    function u(e, t, n, o) {
        var r, u;
        if (C ? r = a(e) : S ? s(e, n) && (r = k.compositionEnd) : i(e, n) && (r = k.compositionStart), !r) return null;
        _ && (S || r !== k.compositionStart ? r === k.compositionEnd && S && (u = S.getData()) : S = v.getPooled(o));
        var c = y.getPooled(r, t, n, o);
        if (u) c.data = u;
        else {
            var p = l(n);
            null !== p && (c.data = p)
        }
        return h.accumulateTwoPhaseDispatches(c), c
    }

    function c(e, t) {
        switch (e) {
            case P.topCompositionEnd:
                return l(t);
            case P.topKeyPress:
                var n = t.which;
                return n !== M ? null : (O = !0, R);
            case P.topTextInput:
                var o = t.data;
                return o === R && O ? null : o;
            default:
                return null
        }
    }

    function p(e, t) {
        if (S) {
            if (e === P.topCompositionEnd || s(e, t)) {
                var n = S.getData();
                return v.release(S), S = null, n
            }
            return null
        }
        switch (e) {
            case P.topPaste:
                return null;
            case P.topKeyPress:
                return t.which && !r(t) ? String.fromCharCode(t.which) : null;
            case P.topCompositionEnd:
                return _ ? null : t.data;
            default:
                return null
        }
    }

    function d(e, t, n, o) {
        var r;
        if (r = T ? c(e, n) : p(e, n), !r) return null;
        var a = g.getPooled(k.beforeInput, t, n, o);
        return a.data = r, h.accumulateTwoPhaseDispatches(a), a
    }
    var f = n(37),
        h = n(38),
        m = n(45),
        v = n(46),
        y = n(48),
        g = n(50),
        b = n(24),
        E = [9, 13, 27, 32],
        w = 229,
        C = m.canUseDOM && "CompositionEvent" in window,
        x = null;
    m.canUseDOM && "documentMode" in document && (x = document.documentMode);
    var T = m.canUseDOM && "TextEvent" in window && !x && !o(),
        _ = m.canUseDOM && (!C || x && x > 8 && x <= 11),
        M = 32,
        R = String.fromCharCode(M),
        P = f.topLevelTypes,
        k = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: b({
                        onBeforeInput: null
                    }),
                    captured: b({
                        onBeforeInputCapture: null
                    })
                },
                dependencies: [P.topCompositionEnd, P.topKeyPress, P.topTextInput, P.topPaste]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: b({
                        onCompositionEnd: null
                    }),
                    captured: b({
                        onCompositionEndCapture: null
                    })
                },
                dependencies: [P.topBlur, P.topCompositionEnd, P.topKeyDown, P.topKeyPress, P.topKeyUp, P.topMouseDown]
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: b({
                        onCompositionStart: null
                    }),
                    captured: b({
                        onCompositionStartCapture: null
                    })
                },
                dependencies: [P.topBlur, P.topCompositionStart, P.topKeyDown, P.topKeyPress, P.topKeyUp, P.topMouseDown]
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: b({
                        onCompositionUpdate: null
                    }),
                    captured: b({
                        onCompositionUpdateCapture: null
                    })
                },
                dependencies: [P.topBlur, P.topCompositionUpdate, P.topKeyDown, P.topKeyPress, P.topKeyUp, P.topMouseDown]
            }
        },
        O = !1,
        S = null,
        N = {
            eventTypes: k,
            extractEvents: function(e, t, n, o) {
                return [u(e, t, n, o), d(e, t, n, o)]
            }
        };
    e.exports = N
}, function(e, t, n) {
    "use strict";
    var o = n(22),
        r = o({
            bubbled: null,
            captured: null
        }),
        a = o({
            topAbort: null,
            topAnimationEnd: null,
            topAnimationIteration: null,
            topAnimationStart: null,
            topBlur: null,
            topCanPlay: null,
            topCanPlayThrough: null,
            topChange: null,
            topClick: null,
            topCompositionEnd: null,
            topCompositionStart: null,
            topCompositionUpdate: null,
            topContextMenu: null,
            topCopy: null,
            topCut: null,
            topDoubleClick: null,
            topDrag: null,
            topDragEnd: null,
            topDragEnter: null,
            topDragExit: null,
            topDragLeave: null,
            topDragOver: null,
            topDragStart: null,
            topDrop: null,
            topDurationChange: null,
            topEmptied: null,
            topEncrypted: null,
            topEnded: null,
            topError: null,
            topFocus: null,
            topInput: null,
            topInvalid: null,
            topKeyDown: null,
            topKeyPress: null,
            topKeyUp: null,
            topLoad: null,
            topLoadedData: null,
            topLoadedMetadata: null,
            topLoadStart: null,
            topMouseDown: null,
            topMouseMove: null,
            topMouseOut: null,
            topMouseOver: null,
            topMouseUp: null,
            topPaste: null,
            topPause: null,
            topPlay: null,
            topPlaying: null,
            topProgress: null,
            topRateChange: null,
            topReset: null,
            topScroll: null,
            topSeeked: null,
            topSeeking: null,
            topSelectionChange: null,
            topStalled: null,
            topSubmit: null,
            topSuspend: null,
            topTextInput: null,
            topTimeUpdate: null,
            topTouchCancel: null,
            topTouchEnd: null,
            topTouchMove: null,
            topTouchStart: null,
            topTransitionEnd: null,
            topVolumeChange: null,
            topWaiting: null,
            topWheel: null
        }),
        i = {
            topLevelTypes: a,
            PropagationPhases: r
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        var o = t.dispatchConfig.phasedRegistrationNames[n];
        return b(e, o)
    }

    function r(e, t, n) {
        var r = t ? g.bubbled : g.captured,
            a = o(e, n, r);
        a && (n._dispatchListeners = v(n._dispatchListeners, a), n._dispatchInstances = v(n._dispatchInstances, e))
    }

    function a(e) {
        e && e.dispatchConfig.phasedRegistrationNames && m.traverseTwoPhase(e._targetInst, r, e)
    }

    function i(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            var t = e._targetInst,
                n = t ? m.getParentInstance(t) : null;
            m.traverseTwoPhase(n, r, e)
        }
    }

    function s(e, t, n) {
        if (n && n.dispatchConfig.registrationName) {
            var o = n.dispatchConfig.registrationName,
                r = b(e, o);
            r && (n._dispatchListeners = v(n._dispatchListeners, r), n._dispatchInstances = v(n._dispatchInstances, e))
        }
    }

    function l(e) {
        e && e.dispatchConfig.registrationName && s(e._targetInst, null, e)
    }

    function u(e) {
        y(e, a)
    }

    function c(e) {
        y(e, i)
    }

    function p(e, t, n, o) {
        m.traverseEnterLeave(n, o, s, e, t)
    }

    function d(e) {
        y(e, l)
    }
    var f = n(37),
        h = n(39),
        m = n(41),
        v = n(43),
        y = n(44),
        g = (n(11), f.PropagationPhases),
        b = h.getListener,
        E = {
            accumulateTwoPhaseDispatches: u,
            accumulateTwoPhaseDispatchesSkipTarget: c,
            accumulateDirectDispatches: d,
            accumulateEnterLeaveDispatches: p
        };
    e.exports = E
}, function(e, t, n) {
    "use strict";
    var o = n(7),
        r = n(40),
        a = n(41),
        i = n(42),
        s = n(43),
        l = n(44),
        u = (n(8), {}),
        c = null,
        p = function(e, t) {
            e && (a.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e))
        },
        d = function(e) {
            return p(e, !0)
        },
        f = function(e) {
            return p(e, !1)
        },
        h = {
            injection: {
                injectEventPluginOrder: r.injectEventPluginOrder,
                injectEventPluginsByName: r.injectEventPluginsByName
            },
            putListener: function(e, t, n) {
                "function" != typeof n ? o("94", t, typeof n) : void 0;
                var a = u[t] || (u[t] = {});
                a[e._rootNodeID] = n;
                var i = r.registrationNameModules[t];
                i && i.didPutListener && i.didPutListener(e, t, n)
            },
            getListener: function(e, t) {
                var n = u[t];
                return n && n[e._rootNodeID]
            },
            deleteListener: function(e, t) {
                var n = r.registrationNameModules[t];
                n && n.willDeleteListener && n.willDeleteListener(e, t);
                var o = u[t];
                o && delete o[e._rootNodeID]
            },
            deleteAllListeners: function(e) {
                for (var t in u)
                    if (u.hasOwnProperty(t) && u[t][e._rootNodeID]) {
                        var n = r.registrationNameModules[t];
                        n && n.willDeleteListener && n.willDeleteListener(e, t), delete u[t][e._rootNodeID]
                    }
            },
            extractEvents: function(e, t, n, o) {
                for (var a, i = r.plugins, l = 0; l < i.length; l++) {
                    var u = i[l];
                    if (u) {
                        var c = u.extractEvents(e, t, n, o);
                        c && (a = s(a, c))
                    }
                }
                return a
            },
            enqueueEvents: function(e) {
                e && (c = s(c, e))
            },
            processEventQueue: function(e) {
                var t = c;
                c = null, e ? l(t, d) : l(t, f), c ? o("95") : void 0, i.rethrowCaughtError()
            },
            __purge: function() {
                u = {}
            },
            __getListenerBank: function() {
                return u
            }
        };
    e.exports = h
}, function(e, t, n) {
    "use strict";

    function o() {
        if (s)
            for (var e in l) {
                var t = l[e],
                    n = s.indexOf(e);
                if (n > -1 ? void 0 : i("96", e), !u.plugins[n]) {
                    t.extractEvents ? void 0 : i("97", e), u.plugins[n] = t;
                    var o = t.eventTypes;
                    for (var a in o) r(o[a], t, a) ? void 0 : i("98", a, e)
                }
            }
    }

    function r(e, t, n) {
        u.eventNameDispatchConfigs.hasOwnProperty(n) ? i("99", n) : void 0, u.eventNameDispatchConfigs[n] = e;
        var o = e.phasedRegistrationNames;
        if (o) {
            for (var r in o)
                if (o.hasOwnProperty(r)) {
                    var s = o[r];
                    a(s, t, n)
                }
            return !0
        }
        return !!e.registrationName && (a(e.registrationName, t, n), !0)
    }

    function a(e, t, n) {
        u.registrationNameModules[e] ? i("100", e) : void 0, u.registrationNameModules[e] = t, u.registrationNameDependencies[e] = t.eventTypes[n].dependencies
    }
    var i = n(7),
        s = (n(8), null),
        l = {},
        u = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            possibleRegistrationNames: null,
            injectEventPluginOrder: function(e) {
                s ? i("101") : void 0, s = Array.prototype.slice.call(e), o()
            },
            injectEventPluginsByName: function(e) {
                var t = !1;
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var r = e[n];
                        l.hasOwnProperty(n) && l[n] === r || (l[n] ? i("102", n) : void 0, l[n] = r, t = !0)
                    }
                t && o()
            },
            getPluginModuleForEvent: function(e) {
                var t = e.dispatchConfig;
                if (t.registrationName) return u.registrationNameModules[t.registrationName] || null;
                for (var n in t.phasedRegistrationNames)
                    if (t.phasedRegistrationNames.hasOwnProperty(n)) {
                        var o = u.registrationNameModules[t.phasedRegistrationNames[n]];
                        if (o) return o
                    }
                return null
            },
            _resetEventPlugins: function() {
                s = null;
                for (var e in l) l.hasOwnProperty(e) && delete l[e];
                u.plugins.length = 0;
                var t = u.eventNameDispatchConfigs;
                for (var n in t) t.hasOwnProperty(n) && delete t[n];
                var o = u.registrationNameModules;
                for (var r in o) o.hasOwnProperty(r) && delete o[r]
            }
        };
    e.exports = u
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e === g.topMouseUp || e === g.topTouchEnd || e === g.topTouchCancel
    }

    function r(e) {
        return e === g.topMouseMove || e === g.topTouchMove
    }

    function a(e) {
        return e === g.topMouseDown || e === g.topTouchStart
    }

    function i(e, t, n, o) {
        var r = e.type || "unknown-event";
        e.currentTarget = b.getNodeFromInstance(o), t ? v.invokeGuardedCallbackWithCatch(r, n, e) : v.invokeGuardedCallback(r, n, e), e.currentTarget = null
    }

    function s(e, t) {
        var n = e._dispatchListeners,
            o = e._dispatchInstances;
        if (Array.isArray(n))
            for (var r = 0; r < n.length && !e.isPropagationStopped(); r++) i(e, t, n[r], o[r]);
        else n && i(e, t, n, o);
        e._dispatchListeners = null, e._dispatchInstances = null
    }

    function l(e) {
        var t = e._dispatchListeners,
            n = e._dispatchInstances;
        if (Array.isArray(t)) {
            for (var o = 0; o < t.length && !e.isPropagationStopped(); o++)
                if (t[o](e, n[o])) return n[o]
        } else if (t && t(e, n)) return n;
        return null
    }

    function u(e) {
        var t = l(e);
        return e._dispatchInstances = null, e._dispatchListeners = null, t
    }

    function c(e) {
        var t = e._dispatchListeners,
            n = e._dispatchInstances;
        Array.isArray(t) ? h("103") : void 0, e.currentTarget = t ? b.getNodeFromInstance(n) : null;
        var o = t ? t(e) : null;
        return e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, o
    }

    function p(e) {
        return !!e._dispatchListeners
    }
    var d, f, h = n(7),
        m = n(37),
        v = n(42),
        y = (n(8), n(11), {
            injectComponentTree: function(e) {
                d = e
            },
            injectTreeTraversal: function(e) {
                f = e
            }
        }),
        g = m.topLevelTypes,
        b = {
            isEndish: o,
            isMoveish: r,
            isStartish: a,
            executeDirectDispatch: c,
            executeDispatchesInOrder: s,
            executeDispatchesInOrderStopAtTrue: u,
            hasDispatches: p,
            getInstanceFromNode: function(e) {
                return d.getInstanceFromNode(e)
            },
            getNodeFromInstance: function(e) {
                return d.getNodeFromInstance(e)
            },
            isAncestor: function(e, t) {
                return f.isAncestor(e, t)
            },
            getLowestCommonAncestor: function(e, t) {
                return f.getLowestCommonAncestor(e, t)
            },
            getParentInstance: function(e) {
                return f.getParentInstance(e)
            },
            traverseTwoPhase: function(e, t, n) {
                return f.traverseTwoPhase(e, t, n)
            },
            traverseEnterLeave: function(e, t, n, o, r) {
                return f.traverseEnterLeave(e, t, n, o, r)
            },
            injection: y
        };
    e.exports = b
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        try {
            return t(n, o)
        } catch (a) {
            return void(null === r && (r = a))
        }
    }
    var r = null,
        a = {
            invokeGuardedCallback: o,
            invokeGuardedCallbackWithCatch: o,
            rethrowCaughtError: function() {
                if (r) {
                    var e = r;
                    throw r = null, e
                }
            }
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (null == t ? r("30") : void 0, null == e) return t;
        var n = Array.isArray(e),
            o = Array.isArray(t);
        return n && o ? (e.push.apply(e, t), e) : n ? (e.push(t), e) : o ? [e].concat(t) : [e, t]
    }
    var r = n(7);
    n(8);
    e.exports = o
}, function(e, t) {
    "use strict";
    var n = function(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    };
    e.exports = n
}, function(e, t) {
    "use strict";
    var n = !("undefined" == typeof window || !window.document || !window.document.createElement),
        o = {
            canUseDOM: n,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: n && !!window.screen,
            isInWorker: !n
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        this._root = e, this._startText = this.getText(), this._fallbackText = null
    }
    var r = n(4),
        a = n(6),
        i = n(47);
    r(o.prototype, {
        destructor: function() {
            this._root = null, this._startText = null, this._fallbackText = null
        },
        getText: function() {
            return "value" in this._root ? this._root.value : this._root[i()]
        },
        getData: function() {
            if (this._fallbackText) return this._fallbackText;
            var e, t, n = this._startText,
                o = n.length,
                r = this.getText(),
                a = r.length;
            for (e = 0; e < o && n[e] === r[e]; e++);
            var i = o - e;
            for (t = 1; t <= i && n[o - t] === r[a - t]; t++);
            var s = t > 1 ? 1 - t : void 0;
            return this._fallbackText = r.slice(e, s), this._fallbackText
        }
    }), a.addPoolingTo(o), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o() {
        return !a && r.canUseDOM && (a = "textContent" in document.documentElement ? "textContent" : "innerText"), a
    }
    var r = n(45),
        a = null;
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(49),
        a = {
            data: null
        };
    r.augmentClass(o, a), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n;
        var r = this.constructor.Interface;
        for (var a in r)
            if (r.hasOwnProperty(a)) {
                var s = r[a];
                s ? this[a] = s(n) : "target" === a ? this.target = o : this[a] = n[a]
            }
        var l = null != n.defaultPrevented ? n.defaultPrevented : n.returnValue === !1;
        return l ? this.isDefaultPrevented = i.thatReturnsTrue : this.isDefaultPrevented = i.thatReturnsFalse, this.isPropagationStopped = i.thatReturnsFalse, this
    }
    var r = n(4),
        a = n(6),
        i = n(12),
        s = (n(11), "function" == typeof Proxy, ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"]),
        l = {
            type: null,
            target: null,
            currentTarget: i.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
    r(o.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, this.isDefaultPrevented = i.thatReturnsTrue)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this.isPropagationStopped = i.thatReturnsTrue)
        },
        persist: function() {
            this.isPersistent = i.thatReturnsTrue
        },
        isPersistent: i.thatReturnsFalse,
        destructor: function() {
            var e = this.constructor.Interface;
            for (var t in e) this[t] = null;
            for (var n = 0; n < s.length; n++) this[s[n]] = null
        }
    }), o.Interface = l, o.augmentClass = function(e, t) {
        var n = this,
            o = function() {};
        o.prototype = n.prototype;
        var i = new o;
        r(i, e.prototype), e.prototype = i, e.prototype.constructor = e, e.Interface = r({}, n.Interface, t), e.augmentClass = n.augmentClass, a.addPoolingTo(e, a.fourArgumentPooler)
    }, a.addPoolingTo(o, a.fourArgumentPooler), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(49),
        a = {
            data: null
        };
    r.augmentClass(o, a), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t = e.nodeName && e.nodeName.toLowerCase();
        return "select" === t || "input" === t && "file" === e.type
    }

    function r(e) {
        var t = T.getPooled(O.change, N, e, _(e));
        E.accumulateTwoPhaseDispatches(t), x.batchedUpdates(a, t)
    }

    function a(e) {
        b.enqueueEvents(e), b.processEventQueue(!1)
    }

    function i(e, t) {
        S = e, N = t, S.attachEvent("onchange", r)
    }

    function s() {
        S && (S.detachEvent("onchange", r), S = null, N = null)
    }

    function l(e, t) {
        if (e === k.topChange) return t
    }

    function u(e, t, n) {
        e === k.topFocus ? (s(), i(t, n)) : e === k.topBlur && s()
    }

    function c(e, t) {
        S = e, N = t, A = e.value, D = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(S, "value", j), S.attachEvent ? S.attachEvent("onpropertychange", d) : S.addEventListener("propertychange", d, !1)
    }

    function p() {
        S && (delete S.value, S.detachEvent ? S.detachEvent("onpropertychange", d) : S.removeEventListener("propertychange", d, !1), S = null, N = null, A = null, D = null)
    }

    function d(e) {
        if ("value" === e.propertyName) {
            var t = e.srcElement.value;
            t !== A && (A = t, r(e))
        }
    }

    function f(e, t) {
        if (e === k.topInput) return t
    }

    function h(e, t, n) {
        e === k.topFocus ? (p(), c(t, n)) : e === k.topBlur && p()
    }

    function m(e, t) {
        if ((e === k.topSelectionChange || e === k.topKeyUp || e === k.topKeyDown) && S && S.value !== A) return A = S.value, N
    }

    function v(e) {
        return e.nodeName && "input" === e.nodeName.toLowerCase() && ("checkbox" === e.type || "radio" === e.type)
    }

    function y(e, t) {
        if (e === k.topClick) return t
    }
    var g = n(37),
        b = n(39),
        E = n(38),
        w = n(45),
        C = n(32),
        x = n(52),
        T = n(49),
        _ = n(63),
        M = n(64),
        R = n(65),
        P = n(24),
        k = g.topLevelTypes,
        O = {
            change: {
                phasedRegistrationNames: {
                    bubbled: P({
                        onChange: null
                    }),
                    captured: P({
                        onChangeCapture: null
                    })
                },
                dependencies: [k.topBlur, k.topChange, k.topClick, k.topFocus, k.topInput, k.topKeyDown, k.topKeyUp, k.topSelectionChange]
            }
        },
        S = null,
        N = null,
        A = null,
        D = null,
        I = !1;
    w.canUseDOM && (I = M("change") && (!("documentMode" in document) || document.documentMode > 8));
    var L = !1;
    w.canUseDOM && (L = M("input") && (!("documentMode" in document) || document.documentMode > 11));
    var j = {
            get: function() {
                return D.get.call(this)
            },
            set: function(e) {
                A = "" + e, D.set.call(this, e)
            }
        },
        H = {
            eventTypes: O,
            extractEvents: function(e, t, n, r) {
                var a, i, s = t ? C.getNodeFromInstance(t) : window;
                if (o(s) ? I ? a = l : i = u : R(s) ? L ? a = f : (a = m, i = h) : v(s) && (a = y), a) {
                    var c = a(e, t);
                    if (c) {
                        var p = T.getPooled(O.change, c, n, r);
                        return p.type = "change", E.accumulateTwoPhaseDispatches(p), p
                    }
                }
                i && i(e, s, t)
            }
        };
    e.exports = H
}, function(e, t, n) {
    "use strict";

    function o() {
        R.ReactReconcileTransaction && w ? void 0 : c("123")
    }

    function r() {
        this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = d.getPooled(), this.reconcileTransaction = R.ReactReconcileTransaction.getPooled(!0)
    }

    function a(e, t, n, r, a, i) {
        o(), w.batchedUpdates(e, t, n, r, a, i)
    }

    function i(e, t) {
        return e._mountOrder - t._mountOrder
    }

    function s(e) {
        var t = e.dirtyComponentsLength;
        t !== y.length ? c("124", t, y.length) : void 0, y.sort(i), g++;
        for (var n = 0; n < t; n++) {
            var o = y[n],
                r = o._pendingCallbacks;
            o._pendingCallbacks = null;
            var a;
            if (h.logTopLevelRenders) {
                var s = o;
                o._currentElement.props === o._renderedComponent._currentElement && (s = o._renderedComponent), a = "React update: " + s.getName(), console.time(a)
            }
            if (m.performUpdateIfNecessary(o, e.reconcileTransaction, g), a && console.timeEnd(a), r)
                for (var l = 0; l < r.length; l++) e.callbackQueue.enqueue(r[l], o.getPublicInstance())
        }
    }

    function l(e) {
        return o(), w.isBatchingUpdates ? (y.push(e), void(null == e._updateBatchNumber && (e._updateBatchNumber = g + 1))) : void w.batchedUpdates(l, e)
    }

    function u(e, t) {
        w.isBatchingUpdates ? void 0 : c("125"), b.enqueue(e, t), E = !0
    }
    var c = n(7),
        p = n(4),
        d = n(53),
        f = n(6),
        h = n(54),
        m = (n(55), n(59)),
        v = n(62),
        y = (n(8), []),
        g = 0,
        b = d.getPooled(),
        E = !1,
        w = null,
        C = {
            initialize: function() {
                this.dirtyComponentsLength = y.length
            },
            close: function() {
                this.dirtyComponentsLength !== y.length ? (y.splice(0, this.dirtyComponentsLength), _()) : y.length = 0
            }
        },
        x = {
            initialize: function() {
                this.callbackQueue.reset()
            },
            close: function() {
                this.callbackQueue.notifyAll()
            }
        },
        T = [C, x];
    p(r.prototype, v.Mixin, {
        getTransactionWrappers: function() {
            return T
        },
        destructor: function() {
            this.dirtyComponentsLength = null, d.release(this.callbackQueue), this.callbackQueue = null, R.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
        },
        perform: function(e, t, n) {
            return v.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n)
        }
    }), f.addPoolingTo(r);
    var _ = function() {
            for (; y.length || E;) {
                if (y.length) {
                    var e = r.getPooled();
                    e.perform(s, null, e), r.release(e)
                }
                if (E) {
                    E = !1;
                    var t = b;
                    b = d.getPooled(), t.notifyAll(), d.release(t)
                }
            }
        },
        M = {
            injectReconcileTransaction: function(e) {
                e ? void 0 : c("126"), R.ReactReconcileTransaction = e
            },
            injectBatchingStrategy: function(e) {
                e ? void 0 : c("127"), "function" != typeof e.batchedUpdates ? c("128") : void 0, "boolean" != typeof e.isBatchingUpdates ? c("129") : void 0, w = e
            }
        },
        R = {
            ReactReconcileTransaction: null,
            batchedUpdates: a,
            enqueueUpdate: l,
            flushBatchedUpdates: _,
            injection: M,
            asap: u
        };
    e.exports = R
}, function(e, t, n) {
    "use strict";

    function o() {
        this._callbacks = null, this._contexts = null
    }
    var r = n(7),
        a = n(4),
        i = n(6);
    n(8);
    a(o.prototype, {
        enqueue: function(e, t) {
            this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(e), this._contexts.push(t)
        },
        notifyAll: function() {
            var e = this._callbacks,
                t = this._contexts;
            if (e) {
                e.length !== t.length ? r("24") : void 0, this._callbacks = null, this._contexts = null;
                for (var n = 0; n < e.length; n++) e[n].call(t[n]);
                e.length = 0, t.length = 0
            }
        },
        checkpoint: function() {
            return this._callbacks ? this._callbacks.length : 0
        },
        rollback: function(e) {
            this._callbacks && (this._callbacks.length = e, this._contexts.length = e)
        },
        reset: function() {
            this._callbacks = null, this._contexts = null
        },
        destructor: function() {
            this.reset()
        }
    }), i.addPoolingTo(o), e.exports = o
}, function(e, t) {
    "use strict";
    var n = {
        logTopLevelRenders: !1
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var o = n(56);
    e.exports = {
        debugTool: o
    }
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o, r, a) {}

    function r(e) {}
    var a = (n(45), n(57), n(11), []),
        i = !1,
        s = [],
        l = {
            addDevtool: function(e) {
                a.push(e)
            },
            removeDevtool: function(e) {
                for (var t = 0; t < a.length; t++) a[t] === e && (a.splice(t, 1), t--)
            },
            isProfiling: function() {
                return i
            },
            beginProfiling: function() {},
            endProfiling: function() {},
            getFlushHistory: function() {
                return s
            },
            onBeginFlush: function() {
                o("onBeginFlush")
            },
            onEndFlush: function() {
                o("onEndFlush")
            },
            onBeginLifeCycleTimer: function(e, t) {
                r(e), o("onBeginLifeCycleTimer", e, t)
            },
            onEndLifeCycleTimer: function(e, t) {
                r(e), o("onEndLifeCycleTimer", e, t)
            },
            onBeginReconcilerTimer: function(e, t) {
                r(e), o("onBeginReconcilerTimer", e, t)
            },
            onEndReconcilerTimer: function(e, t) {
                r(e), o("onEndReconcilerTimer", e, t)
            },
            onBeginProcessingChildContext: function() {
                o("onBeginProcessingChildContext")
            },
            onEndProcessingChildContext: function() {
                o("onEndProcessingChildContext")
            },
            onHostOperation: function(e, t, n) {
                r(e), o("onHostOperation", e, t, n)
            },
            onSetState: function() {
                o("onSetState")
            },
            onSetDisplayName: function(e, t) {
                r(e), o("onSetDisplayName", e, t)
            },
            onSetChildren: function(e, t) {
                r(e), o("onSetChildren", e, t)
            },
            onSetOwner: function(e, t) {
                r(e), o("onSetOwner", e, t)
            },
            onSetParent: function(e, t) {
                r(e), o("onSetParent", e, t)
            },
            onSetText: function(e, t) {
                r(e), o("onSetText", e, t)
            },
            onMountRootComponent: function(e) {
                r(e), o("onMountRootComponent", e)
            },
            onBeforeMountComponent: function(e, t) {
                r(e), o("onBeforeMountComponent", e, t)
            },
            onMountComponent: function(e) {
                r(e), o("onMountComponent", e)
            },
            onBeforeUpdateComponent: function(e, t) {
                r(e), o("onBeforeUpdateComponent", e, t)
            },
            onUpdateComponent: function(e) {
                r(e), o("onUpdateComponent", e)
            },
            onUnmountComponent: function(e) {
                r(e), o("onUnmountComponent", e)
            },
            onTestEvent: function() {
                o("onTestEvent")
            }
        };
    e.exports = l
}, function(e, t, n) {
    "use strict";
    var o, r = n(58);
    o = r.now ? function() {
        return r.now()
    } : function() {
        return Date.now()
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    var o, r = n(45);
    r.canUseDOM && (o = window.performance || window.msPerformance || window.webkitPerformance), e.exports = o || {}
}, function(e, t, n) {
    "use strict";

    function o() {
        a.attachRefs(this, this._currentElement)
    }
    var r = n(7),
        a = n(60),
        i = (n(55), n(8), {
            mountComponent: function(e, t, n, r, a) {
                var i = e.mountComponent(t, n, r, a);
                return e._currentElement && null != e._currentElement.ref && t.getReactMountReady().enqueue(o, e), i
            },
            getHostNode: function(e) {
                return e.getHostNode()
            },
            unmountComponent: function(e, t) {
                a.detachRefs(e, e._currentElement), e.unmountComponent(t)
            },
            receiveComponent: function(e, t, n, r) {
                var i = e._currentElement;
                if (t !== i || r !== e._context) {
                    var s = a.shouldUpdateRefs(i, t);
                    s && a.detachRefs(e, i), e.receiveComponent(t, n, r), s && e._currentElement && null != e._currentElement.ref && n.getReactMountReady().enqueue(o, e)
                }
            },
            performUpdateIfNecessary: function(e, t, n) {
                return e._updateBatchNumber !== n ? void(null != e._updateBatchNumber && e._updateBatchNumber !== n + 1 ? r("121", n, e._updateBatchNumber) : void 0) : void e.performUpdateIfNecessary(t)
            }
        });
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        "function" == typeof e ? e(t.getPublicInstance()) : a.addComponentAsRefTo(t, e, n)
    }

    function r(e, t, n) {
        "function" == typeof e ? e(null) : a.removeComponentAsRefFrom(t, e, n)
    }
    var a = n(61),
        i = {};
    i.attachRefs = function(e, t) {
        if (null !== t && t !== !1) {
            var n = t.ref;
            null != n && o(n, e, t._owner)
        }
    }, i.shouldUpdateRefs = function(e, t) {
        var n = null === e || e === !1,
            o = null === t || t === !1;
        return n || o || t._owner !== e._owner || t.ref !== e.ref
    }, i.detachRefs = function(e, t) {
        if (null !== t && t !== !1) {
            var n = t.ref;
            null != n && r(n, e, t._owner)
        }
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    var o = n(7),
        r = (n(8), {
            isValidOwner: function(e) {
                return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef)
            },
            addComponentAsRefTo: function(e, t, n) {
                r.isValidOwner(n) ? void 0 : o("119"), n.attachRef(t, e)
            },
            removeComponentAsRefFrom: function(e, t, n) {
                r.isValidOwner(n) ? void 0 : o("120");
                var a = n.getPublicInstance();
                a && a.refs[t] === e.getPublicInstance() && n.detachRef(t)
            }
        });
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var o = n(7),
        r = (n(8), {
            reinitializeTransaction: function() {
                this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
            },
            _isInTransaction: !1,
            getTransactionWrappers: null,
            isInTransaction: function() {
                return !!this._isInTransaction
            },
            perform: function(e, t, n, r, a, i, s, l) {
                this.isInTransaction() ? o("27") : void 0;
                var u, c;
                try {
                    this._isInTransaction = !0, u = !0, this.initializeAll(0), c = e.call(t, n, r, a, i, s, l), u = !1
                } finally {
                    try {
                        if (u) try {
                            this.closeAll(0)
                        } catch (p) {} else this.closeAll(0)
                    } finally {
                        this._isInTransaction = !1
                    }
                }
                return c
            },
            initializeAll: function(e) {
                for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                    var o = t[n];
                    try {
                        this.wrapperInitData[n] = a.OBSERVED_ERROR, this.wrapperInitData[n] = o.initialize ? o.initialize.call(this) : null
                    } finally {
                        if (this.wrapperInitData[n] === a.OBSERVED_ERROR) try {
                            this.initializeAll(n + 1)
                        } catch (r) {}
                    }
                }
            },
            closeAll: function(e) {
                this.isInTransaction() ? void 0 : o("28");
                for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                    var r, i = t[n],
                        s = this.wrapperInitData[n];
                    try {
                        r = !0, s !== a.OBSERVED_ERROR && i.close && i.close.call(this, s), r = !1
                    } finally {
                        if (r) try {
                            this.closeAll(n + 1)
                        } catch (l) {}
                    }
                }
                this.wrapperInitData.length = 0
            }
        }),
        a = {
            Mixin: r,
            OBSERVED_ERROR: {}
        };
    e.exports = a
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = e.target || e.srcElement || window;
        return t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @param {?boolean} capture Check if the capture phase is supported.
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function o(e, t) {
        if (!a.canUseDOM || t && !("addEventListener" in document)) return !1;
        var n = "on" + e,
            o = n in document;
        if (!o) {
            var i = document.createElement("div");
            i.setAttribute(n, "return;"), o = "function" == typeof i[n]
        }
        return !o && r && "wheel" === e && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o
    }
    var r, a = n(45);
    a.canUseDOM && (r = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), e.exports = o
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && o[e.type] || "textarea" === t)
    }
    var o = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var o = n(24),
        r = [o({
            ResponderEventPlugin: null
        }), o({
            SimpleEventPlugin: null
        }), o({
            TapEventPlugin: null
        }), o({
            EnterLeaveEventPlugin: null
        }), o({
            ChangeEventPlugin: null
        }), o({
            SelectEventPlugin: null
        }), o({
            BeforeInputEventPlugin: null
        })];
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var o = n(37),
        r = n(38),
        a = n(32),
        i = n(68),
        s = n(24),
        l = o.topLevelTypes,
        u = {
            mouseEnter: {
                registrationName: s({
                    onMouseEnter: null
                }),
                dependencies: [l.topMouseOut, l.topMouseOver]
            },
            mouseLeave: {
                registrationName: s({
                    onMouseLeave: null
                }),
                dependencies: [l.topMouseOut, l.topMouseOver]
            }
        },
        c = {
            eventTypes: u,
            extractEvents: function(e, t, n, o) {
                if (e === l.topMouseOver && (n.relatedTarget || n.fromElement)) return null;
                if (e !== l.topMouseOut && e !== l.topMouseOver) return null;
                var s;
                if (o.window === o) s = o;
                else {
                    var c = o.ownerDocument;
                    s = c ? c.defaultView || c.parentWindow : window
                }
                var p, d;
                if (e === l.topMouseOut) {
                    p = t;
                    var f = n.relatedTarget || n.toElement;
                    d = f ? a.getClosestInstanceFromNode(f) : null
                } else p = null, d = t;
                if (p === d) return null;
                var h = null == p ? s : a.getNodeFromInstance(p),
                    m = null == d ? s : a.getNodeFromInstance(d),
                    v = i.getPooled(u.mouseLeave, p, n, o);
                v.type = "mouseleave", v.target = h, v.relatedTarget = m;
                var y = i.getPooled(u.mouseEnter, d, n, o);
                return y.type = "mouseenter", y.target = m, y.relatedTarget = h, r.accumulateEnterLeaveDispatches(v, y, p, d), [v, y]
            }
        };
    e.exports = c
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(69),
        a = n(70),
        i = n(71),
        s = {
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: i,
            button: function(e) {
                var t = e.button;
                return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0
            },
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            pageX: function(e) {
                return "pageX" in e ? e.pageX : e.clientX + a.currentScrollLeft
            },
            pageY: function(e) {
                return "pageY" in e ? e.pageY : e.clientY + a.currentScrollTop
            }
        };
    r.augmentClass(o, s), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(49),
        a = n(63),
        i = {
            view: function(e) {
                if (e.view) return e.view;
                var t = a(e);
                if (t.window === t) return t;
                var n = t.ownerDocument;
                return n ? n.defaultView || n.parentWindow : window
            },
            detail: function(e) {
                return e.detail || 0
            }
        };
    r.augmentClass(o, i), e.exports = o
}, function(e, t) {
    "use strict";
    var n = {
        currentScrollLeft: 0,
        currentScrollTop: 0,
        refreshScrollValues: function(e) {
            n.currentScrollLeft = e.x, n.currentScrollTop = e.y
        }
    };
    e.exports = n
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = this,
            n = t.nativeEvent;
        if (n.getModifierState) return n.getModifierState(e);
        var o = r[e];
        return !!o && !!n[o]
    }

    function o(e) {
        return n
    }
    var r = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var o = n(33),
        r = o.injection.MUST_USE_PROPERTY,
        a = o.injection.HAS_BOOLEAN_VALUE,
        i = o.injection.HAS_NUMERIC_VALUE,
        s = o.injection.HAS_POSITIVE_NUMERIC_VALUE,
        l = o.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
        u = {
            isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + o.ATTRIBUTE_NAME_CHAR + "]*$")),
            Properties: {
                accept: 0,
                acceptCharset: 0,
                accessKey: 0,
                action: 0,
                allowFullScreen: a,
                allowTransparency: 0,
                alt: 0,
                async: a,
                autoComplete: 0,
                autoPlay: a,
                capture: a,
                cellPadding: 0,
                cellSpacing: 0,
                charSet: 0,
                challenge: 0,
                checked: r | a,
                cite: 0,
                classID: 0,
                className: 0,
                cols: s,
                colSpan: 0,
                content: 0,
                contentEditable: 0,
                contextMenu: 0,
                controls: a,
                coords: 0,
                crossOrigin: 0,
                data: 0,
                dateTime: 0,
                "default": a,
                defer: a,
                dir: 0,
                disabled: a,
                download: l,
                draggable: 0,
                encType: 0,
                form: 0,
                formAction: 0,
                formEncType: 0,
                formMethod: 0,
                formNoValidate: a,
                formTarget: 0,
                frameBorder: 0,
                headers: 0,
                height: 0,
                hidden: a,
                high: 0,
                href: 0,
                hrefLang: 0,
                htmlFor: 0,
                httpEquiv: 0,
                icon: 0,
                id: 0,
                inputMode: 0,
                integrity: 0,
                is: 0,
                keyParams: 0,
                keyType: 0,
                kind: 0,
                label: 0,
                lang: 0,
                list: 0,
                loop: a,
                low: 0,
                manifest: 0,
                marginHeight: 0,
                marginWidth: 0,
                max: 0,
                maxLength: 0,
                media: 0,
                mediaGroup: 0,
                method: 0,
                min: 0,
                minLength: 0,
                multiple: r | a,
                muted: r | a,
                name: 0,
                nonce: 0,
                noValidate: a,
                open: a,
                optimum: 0,
                pattern: 0,
                placeholder: 0,
                poster: 0,
                preload: 0,
                profile: 0,
                radioGroup: 0,
                readOnly: a,
                rel: 0,
                required: a,
                reversed: a,
                role: 0,
                rows: s,
                rowSpan: i,
                sandbox: 0,
                scope: 0,
                scoped: a,
                scrolling: 0,
                seamless: a,
                selected: r | a,
                shape: 0,
                size: s,
                sizes: 0,
                span: s,
                spellCheck: 0,
                src: 0,
                srcDoc: 0,
                srcLang: 0,
                srcSet: 0,
                start: i,
                step: 0,
                style: 0,
                summary: 0,
                tabIndex: 0,
                target: 0,
                title: 0,
                type: 0,
                useMap: 0,
                value: 0,
                width: 0,
                wmode: 0,
                wrap: 0,
                about: 0,
                datatype: 0,
                inlist: 0,
                prefix: 0,
                property: 0,
                resource: 0,
                "typeof": 0,
                vocab: 0,
                autoCapitalize: 0,
                autoCorrect: 0,
                autoSave: 0,
                color: 0,
                itemProp: 0,
                itemScope: a,
                itemType: 0,
                itemID: 0,
                itemRef: 0,
                results: 0,
                security: 0,
                unselectable: 0
            },
            DOMAttributeNames: {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv"
            },
            DOMPropertyNames: {}
        };
    e.exports = u
}, function(e, t, n) {
    "use strict";
    var o = n(74),
        r = n(86),
        a = {
            processChildrenUpdates: r.dangerouslyProcessChildrenUpdates,
            replaceNodeWithMarkup: o.dangerouslyReplaceNodeWithMarkup,
            unmountIDFromEnvironment: function(e) {}
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return Array.isArray(t) && (t = t[1]), t ? t.nextSibling : e.firstChild
    }

    function r(e, t, n) {
        c.insertTreeBefore(e, t, n)
    }

    function a(e, t, n) {
        Array.isArray(t) ? s(e, t[0], t[1], n) : v(e, t, n)
    }

    function i(e, t) {
        if (Array.isArray(t)) {
            var n = t[1];
            t = t[0], l(e, t, n), e.removeChild(n)
        }
        e.removeChild(t)
    }

    function s(e, t, n, o) {
        for (var r = t;;) {
            var a = r.nextSibling;
            if (v(e, r, o), r === n) break;
            r = a
        }
    }

    function l(e, t, n) {
        for (;;) {
            var o = t.nextSibling;
            if (o === n) break;
            e.removeChild(o)
        }
    }

    function u(e, t, n) {
        var o = e.parentNode,
            r = e.nextSibling;
        r === t ? n && v(o, document.createTextNode(n), r) : n ? (m(r, n), l(o, r, t)) : l(o, e, t)
    }
    var c = n(75),
        p = n(81),
        d = n(85),
        f = (n(32), n(55), n(78)),
        h = n(77),
        m = n(79),
        v = f(function(e, t, n) {
            e.insertBefore(t, n)
        }),
        y = p.dangerouslyReplaceNodeWithMarkup,
        g = {
            dangerouslyReplaceNodeWithMarkup: y,
            replaceDelimitedText: u,
            processUpdates: function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    switch (s.type) {
                        case d.INSERT_MARKUP:
                            r(e, s.content, o(e, s.afterNode));
                            break;
                        case d.MOVE_EXISTING:
                            a(e, s.fromNode, o(e, s.afterNode));
                            break;
                        case d.SET_MARKUP:
                            h(e, s.content);
                            break;
                        case d.TEXT_CONTENT:
                            m(e, s.content);
                            break;
                        case d.REMOVE_NODE:
                            i(e, s.fromNode)
                    }
                }
            }
        };
    e.exports = g
}, function(e, t, n) {
    "use strict";

    function o(e) {
        if (v) {
            var t = e.node,
                n = e.children;
            if (n.length)
                for (var o = 0; o < n.length; o++) y(t, n[o], null);
            else null != e.html ? p(t, e.html) : null != e.text && f(t, e.text)
        }
    }

    function r(e, t) {
        e.parentNode.replaceChild(t.node, e), o(t)
    }

    function a(e, t) {
        v ? e.children.push(t) : e.node.appendChild(t.node)
    }

    function i(e, t) {
        v ? e.html = t : p(e.node, t)
    }

    function s(e, t) {
        v ? e.text = t : f(e.node, t)
    }

    function l() {
        return this.node.nodeName
    }

    function u(e) {
        return {
            node: e,
            children: [],
            html: null,
            text: null,
            toString: l
        }
    }
    var c = n(76),
        p = n(77),
        d = n(78),
        f = n(79),
        h = 1,
        m = 11,
        v = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent),
        y = d(function(e, t, n) {
            t.node.nodeType === m || t.node.nodeType === h && "object" === t.node.nodeName.toLowerCase() && (null == t.node.namespaceURI || t.node.namespaceURI === c.html) ? (o(t), e.insertBefore(t.node, n)) : (e.insertBefore(t.node, n), o(t))
        });
    u.insertTreeBefore = y, u.replaceChildWithTree = r, u.queueChild = a, u.queueHTML = i, u.queueText = s, e.exports = u
}, function(e, t) {
    "use strict";
    var n = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var o, r = n(45),
        a = n(76),
        i = /^[ \r\n\t\f]/,
        s = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
        l = n(78),
        u = l(function(e, t) {
            if (e.namespaceURI !== a.svg || "innerHTML" in e) e.innerHTML = t;
            else {
                o = o || document.createElement("div"), o.innerHTML = "<svg>" + t + "</svg>";
                for (var n = o.firstChild.childNodes, r = 0; r < n.length; r++) e.appendChild(n[r])
            }
        });
    if (r.canUseDOM) {
        var c = document.createElement("div");
        c.innerHTML = " ", "" === c.innerHTML && (u = function(e, t) {
            if (e.parentNode && e.parentNode.replaceChild(e, e), i.test(t) || "<" === t[0] && s.test(t)) {
                e.innerHTML = String.fromCharCode(65279) + t;
                var n = e.firstChild;
                1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1)
            } else e.innerHTML = t
        }), c = null
    }
    e.exports = u
}, function(e, t) {
    "use strict";
    var n = function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, o, r) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, o, r)
            })
        } : e
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var o = n(45),
        r = n(80),
        a = n(77),
        i = function(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
            }
            e.textContent = t
        };
    o.canUseDOM && ("textContent" in document.documentElement || (i = function(e, t) {
        a(e, r(t))
    })), e.exports = i
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = "" + e,
            n = r.exec(t);
        if (!n) return t;
        var o, a = "",
            i = 0,
            s = 0;
        for (i = n.index; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
                case 34:
                    o = "&quot;";
                    break;
                case 38:
                    o = "&amp;";
                    break;
                case 39:
                    o = "&#x27;";
                    break;
                case 60:
                    o = "&lt;";
                    break;
                case 62:
                    o = "&gt;";
                    break;
                default:
                    continue
            }
            s !== i && (a += t.substring(s, i)), s = i + 1, a += o
        }
        return s !== i ? a + t.substring(s, i) : a
    }

    function o(e) {
        return "boolean" == typeof e || "number" == typeof e ? "" + e : n(e)
    }
    var r = /["'&<>]/;
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e.substring(1, e.indexOf(" "))
    }
    var r = n(7),
        a = n(75),
        i = n(45),
        s = n(82),
        l = n(12),
        u = n(84),
        c = (n(8), /^(<[^ \/>]+)/),
        p = "data-danger-index",
        d = {
            dangerouslyRenderMarkup: function(e) {
                i.canUseDOM ? void 0 : r("51");
                for (var t, n = {}, a = 0; a < e.length; a++) e[a] ? void 0 : r("52"), t = o(e[a]), t = u(t) ? t : "*", n[t] = n[t] || [], n[t][a] = e[a];
                var d = [],
                    f = 0;
                for (t in n)
                    if (n.hasOwnProperty(t)) {
                        var h, m = n[t];
                        for (h in m)
                            if (m.hasOwnProperty(h)) {
                                var v = m[h];
                                m[h] = v.replace(c, "$1 " + p + '="' + h + '" ')
                            }
                        for (var y = s(m.join(""), l), g = 0; g < y.length; ++g) {
                            var b = y[g];
                            b.hasAttribute && b.hasAttribute(p) && (h = +b.getAttribute(p), b.removeAttribute(p), d.hasOwnProperty(h) ? r("53") : void 0, d[h] = b, f += 1)
                        }
                    }
                return f !== d.length ? r("54") : void 0, d.length !== e.length ? r("55", e.length, d.length) : void 0, d
            },
            dangerouslyReplaceNodeWithMarkup: function(e, t) {
                if (i.canUseDOM ? void 0 : r("56"), t ? void 0 : r("57"), "HTML" === e.nodeName ? r("58") : void 0, "string" == typeof t) {
                    var n = s(t, l)[0];
                    e.parentNode.replaceChild(n, e)
                } else a.replaceChildWithTree(e, t)
            }
        };
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t = e.match(c);
        return t && t[1].toLowerCase()
    }

    function r(e, t) {
        var n = u;
        u ? void 0 : l(!1);
        var r = o(e),
            a = r && s(r);
        if (a) {
            n.innerHTML = a[1] + e + a[2];
            for (var c = a[0]; c--;) n = n.lastChild
        } else n.innerHTML = e;
        var p = n.getElementsByTagName("script");
        p.length && (t ? void 0 : l(!1), i(p).forEach(t));
        for (var d = Array.from(n.childNodes); n.lastChild;) n.removeChild(n.lastChild);
        return d
    }
    var a = n(45),
        i = n(83),
        s = n(84),
        l = n(8),
        u = a.canUseDOM ? document.createElement("div") : null,
        c = /^\s*<(\w+)/;
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t = e.length;
        if (Array.isArray(e) || "object" != typeof e && "function" != typeof e ? i(!1) : void 0, "number" != typeof t ? i(!1) : void 0, 0 === t || t - 1 in e ? void 0 : i(!1), "function" == typeof e.callee ? i(!1) : void 0, e.hasOwnProperty) try {
            return Array.prototype.slice.call(e)
        } catch (n) {}
        for (var o = Array(t), r = 0; r < t; r++) o[r] = e[r];
        return o
    }

    function r(e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
    }

    function a(e) {
        return r(e) ? Array.isArray(e) ? e.slice() : o(e) : [e]
    }
    var i = n(8);
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return i ? void 0 : a(!1), d.hasOwnProperty(e) || (e = "*"), s.hasOwnProperty(e) || ("*" === e ? i.innerHTML = "<link />" : i.innerHTML = "<" + e + "></" + e + ">", s[e] = !i.firstChild), s[e] ? d[e] : null
    }
    var r = n(45),
        a = n(8),
        i = r.canUseDOM ? document.createElement("div") : null,
        s = {},
        l = [1, '<select multiple="true">', "</select>"],
        u = [1, "<table>", "</table>"],
        c = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        p = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        d = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: l,
            option: l,
            caption: u,
            colgroup: u,
            tbody: u,
            tfoot: u,
            thead: u,
            td: c,
            th: c
        },
        f = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    f.forEach(function(e) {
        d[e] = p, s[e] = !0
    }), e.exports = o
}, function(e, t, n) {
    "use strict";
    var o = n(22),
        r = o({
            INSERT_MARKUP: null,
            MOVE_EXISTING: null,
            REMOVE_NODE: null,
            SET_MARKUP: null,
            TEXT_CONTENT: null
        });
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var o = n(74),
        r = n(32),
        a = {
            dangerouslyProcessChildrenUpdates: function(e, t) {
                var n = r.getNodeFromInstance(e);
                o.processUpdates(n, t)
            }
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function o(e) {
        if (e) {
            var t = e._currentElement._owner || null;
            if (t) {
                var n = t.getName();
                if (n) return " This DOM node was rendered by `" + n + "`."
            }
        }
        return ""
    }

    function r(e, t) {
        t && ($[e._tag] && (null != t.children || null != t.dangerouslySetInnerHTML ? m("59", e._tag, e._currentElement._owner ? " Check the render method of " + e._currentElement._owner.getName() + "." : "") : void 0), null != t.dangerouslySetInnerHTML && (null != t.children ? m("60") : void 0, "object" == typeof t.dangerouslySetInnerHTML && q in t.dangerouslySetInnerHTML ? void 0 : m("61")), null != t.style && "object" != typeof t.style ? m("62", o(e)) : void 0)
    }

    function a(e, t, n, o) {
        if (!(o instanceof L)) {
            var r = e._hostContainerInfo,
                a = r._node && r._node.nodeType === X,
                s = a ? r._node : r._ownerDocument;
            V(t, s), o.getReactMountReady().enqueue(i, {
                inst: e,
                registrationName: t,
                listener: n
            })
        }
    }

    function i() {
        var e = this;
        T.putListener(e.inst, e.registrationName, e.listener)
    }

    function s() {
        var e = this;
        S.postMountWrapper(e)
    }

    function l() {
        var e = this;
        D.postMountWrapper(e)
    }

    function u() {
        var e = this;
        N.postMountWrapper(e)
    }

    function c() {
        var e = this;
        e._rootNodeID ? void 0 : m("63");
        var t = B(e);
        switch (t ? void 0 : m("64"), e._tag) {
            case "iframe":
            case "object":
                e._wrapperState.listeners = [M.trapBubbledEvent(x.topLevelTypes.topLoad, "load", t)];
                break;
            case "video":
            case "audio":
                e._wrapperState.listeners = [];
                for (var n in K) K.hasOwnProperty(n) && e._wrapperState.listeners.push(M.trapBubbledEvent(x.topLevelTypes[n], K[n], t));
                break;
            case "source":
                e._wrapperState.listeners = [M.trapBubbledEvent(x.topLevelTypes.topError, "error", t)];
                break;
            case "img":
                e._wrapperState.listeners = [M.trapBubbledEvent(x.topLevelTypes.topError, "error", t), M.trapBubbledEvent(x.topLevelTypes.topLoad, "load", t)];
                break;
            case "form":
                e._wrapperState.listeners = [M.trapBubbledEvent(x.topLevelTypes.topReset, "reset", t), M.trapBubbledEvent(x.topLevelTypes.topSubmit, "submit", t)];
                break;
            case "input":
            case "select":
            case "textarea":
                e._wrapperState.listeners = [M.trapBubbledEvent(x.topLevelTypes.topInvalid, "invalid", t)]
        }
    }

    function p() {
        A.postUpdateWrapper(this)
    }

    function d(e) {
        te.call(ee, e) || (J.test(e) ? void 0 : m("65", e), ee[e] = !0)
    }

    function f(e, t) {
        return e.indexOf("-") >= 0 || null != t.is
    }

    function h(e) {
        var t = e.type;
        d(t), this._currentElement = e, this._tag = t.toLowerCase(), this._namespaceURI = null, this._renderedChildren = null, this._previousStyle = null, this._previousStyleCopy = null, this._hostNode = null, this._hostParent = null, this._rootNodeID = null, this._domID = null, this._hostContainerInfo = null, this._wrapperState = null, this._topLevelWrapper = null, this._flags = 0
    }
    var m = n(7),
        v = n(4),
        y = n(88),
        g = n(90),
        b = n(75),
        E = n(76),
        w = n(33),
        C = n(98),
        x = n(37),
        T = n(39),
        _ = n(40),
        M = n(104),
        R = n(73),
        P = n(107),
        k = n(34),
        O = n(32),
        S = n(109),
        N = n(111),
        A = n(112),
        D = n(113),
        I = (n(55), n(114)),
        L = n(127),
        j = (n(12), n(80)),
        H = (n(8), n(64), n(24)),
        U = (n(128), n(129), n(11), k),
        F = T.deleteListener,
        B = O.getNodeFromInstance,
        V = M.listenTo,
        z = _.registrationNameModules,
        W = {
            string: !0,
            number: !0
        },
        Y = H({
            style: null
        }),
        q = H({
            __html: null
        }),
        G = {
            children: null,
            dangerouslySetInnerHTML: null,
            suppressContentEditableWarning: null
        },
        X = 11,
        K = {
            topAbort: "abort",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTimeUpdate: "timeupdate",
            topVolumeChange: "volumechange",
            topWaiting: "waiting"
        },
        Z = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        },
        Q = {
            listing: !0,
            pre: !0,
            textarea: !0
        },
        $ = v({
            menuitem: !0
        }, Z),
        J = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        ee = {},
        te = {}.hasOwnProperty,
        ne = 1;
    h.displayName = "ReactDOMComponent", h.Mixin = {
        mountComponent: function(e, t, n, o) {
            this._rootNodeID = ne++, this._domID = n._idCounter++, this._hostParent = t, this._hostContainerInfo = n;
            var a = this._currentElement.props;
            switch (this._tag) {
                case "audio":
                case "form":
                case "iframe":
                case "img":
                case "link":
                case "object":
                case "source":
                case "video":
                    this._wrapperState = {
                        listeners: null
                    }, e.getReactMountReady().enqueue(c, this);
                    break;
                case "button":
                    a = P.getHostProps(this, a, t);
                    break;
                case "input":
                    S.mountWrapper(this, a, t), a = S.getHostProps(this, a), e.getReactMountReady().enqueue(c, this);
                    break;
                case "option":
                    N.mountWrapper(this, a, t), a = N.getHostProps(this, a);
                    break;
                case "select":
                    A.mountWrapper(this, a, t), a = A.getHostProps(this, a), e.getReactMountReady().enqueue(c, this);
                    break;
                case "textarea":
                    D.mountWrapper(this, a, t), a = D.getHostProps(this, a), e.getReactMountReady().enqueue(c, this)
            }
            r(this, a);
            var i, p;
            null != t ? (i = t._namespaceURI, p = t._tag) : n._tag && (i = n._namespaceURI, p = n._tag), (null == i || i === E.svg && "foreignobject" === p) && (i = E.html), i === E.html && ("svg" === this._tag ? i = E.svg : "math" === this._tag && (i = E.mathml)), this._namespaceURI = i;
            var d;
            if (e.useCreateElement) {
                var f, h = n._ownerDocument;
                if (i === E.html)
                    if ("script" === this._tag) {
                        var m = h.createElement("div"),
                            v = this._currentElement.type;
                        m.innerHTML = "<" + v + "></" + v + ">", f = m.removeChild(m.firstChild)
                    } else f = a.is ? h.createElement(this._currentElement.type, a.is) : h.createElement(this._currentElement.type);
                else f = h.createElementNS(i, this._currentElement.type);
                O.precacheNode(this, f), this._flags |= U.hasCachedChildNodes, this._hostParent || C.setAttributeForRoot(f), this._updateDOMProperties(null, a, e);
                var g = b(f);
                this._createInitialChildren(e, a, o, g), d = g
            } else {
                var w = this._createOpenTagMarkupAndPutListeners(e, a),
                    x = this._createContentMarkup(e, a, o);
                d = !x && Z[this._tag] ? w + "/>" : w + ">" + x + "</" + this._currentElement.type + ">"
            }
            switch (this._tag) {
                case "input":
                    e.getReactMountReady().enqueue(s, this), a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                    break;
                case "textarea":
                    e.getReactMountReady().enqueue(l, this), a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                    break;
                case "select":
                    a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                    break;
                case "button":
                    a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
                    break;
                case "option":
                    e.getReactMountReady().enqueue(u, this)
            }
            return d
        },
        _createOpenTagMarkupAndPutListeners: function(e, t) {
            var n = "<" + this._currentElement.type;
            for (var o in t)
                if (t.hasOwnProperty(o)) {
                    var r = t[o];
                    if (null != r)
                        if (z.hasOwnProperty(o)) r && a(this, o, r, e);
                        else {
                            o === Y && (r && (r = this._previousStyleCopy = v({}, t.style)), r = g.createMarkupForStyles(r, this));
                            var i = null;
                            null != this._tag && f(this._tag, t) ? G.hasOwnProperty(o) || (i = C.createMarkupForCustomAttribute(o, r)) : i = C.createMarkupForProperty(o, r), i && (n += " " + i)
                        }
                }
            return e.renderToStaticMarkup ? n : (this._hostParent || (n += " " + C.createMarkupForRoot()), n += " " + C.createMarkupForID(this._domID))
        },
        _createContentMarkup: function(e, t, n) {
            var o = "",
                r = t.dangerouslySetInnerHTML;
            if (null != r) null != r.__html && (o = r.__html);
            else {
                var a = W[typeof t.children] ? t.children : null,
                    i = null != a ? null : t.children;
                if (null != a) o = j(a);
                else if (null != i) {
                    var s = this.mountChildren(i, e, n);
                    o = s.join("")
                }
            }
            return Q[this._tag] && "\n" === o.charAt(0) ? "\n" + o : o
        },
        _createInitialChildren: function(e, t, n, o) {
            var r = t.dangerouslySetInnerHTML;
            if (null != r) null != r.__html && b.queueHTML(o, r.__html);
            else {
                var a = W[typeof t.children] ? t.children : null,
                    i = null != a ? null : t.children;
                if (null != a) b.queueText(o, a);
                else if (null != i)
                    for (var s = this.mountChildren(i, e, n), l = 0; l < s.length; l++) b.queueChild(o, s[l])
            }
        },
        receiveComponent: function(e, t, n) {
            var o = this._currentElement;
            this._currentElement = e, this.updateComponent(t, o, e, n)
        },
        updateComponent: function(e, t, n, o) {
            var a = t.props,
                i = this._currentElement.props;
            switch (this._tag) {
                case "button":
                    a = P.getHostProps(this, a), i = P.getHostProps(this, i);
                    break;
                case "input":
                    S.updateWrapper(this), a = S.getHostProps(this, a), i = S.getHostProps(this, i);
                    break;
                case "option":
                    a = N.getHostProps(this, a), i = N.getHostProps(this, i);
                    break;
                case "select":
                    a = A.getHostProps(this, a), i = A.getHostProps(this, i);
                    break;
                case "textarea":
                    D.updateWrapper(this), a = D.getHostProps(this, a), i = D.getHostProps(this, i)
            }
            r(this, i), this._updateDOMProperties(a, i, e), this._updateDOMChildren(a, i, e, o), "select" === this._tag && e.getReactMountReady().enqueue(p, this)
        },
        _updateDOMProperties: function(e, t, n) {
            var o, r, i;
            for (o in e)
                if (!t.hasOwnProperty(o) && e.hasOwnProperty(o) && null != e[o])
                    if (o === Y) {
                        var s = this._previousStyleCopy;
                        for (r in s) s.hasOwnProperty(r) && (i = i || {}, i[r] = "");
                        this._previousStyleCopy = null
                    } else z.hasOwnProperty(o) ? e[o] && F(this, o) : f(this._tag, e) ? G.hasOwnProperty(o) || C.deleteValueForAttribute(B(this), o) : (w.properties[o] || w.isCustomAttribute(o)) && C.deleteValueForProperty(B(this), o);
            for (o in t) {
                var l = t[o],
                    u = o === Y ? this._previousStyleCopy : null != e ? e[o] : void 0;
                if (t.hasOwnProperty(o) && l !== u && (null != l || null != u))
                    if (o === Y)
                        if (l ? l = this._previousStyleCopy = v({}, l) : this._previousStyleCopy = null, u) {
                            for (r in u) !u.hasOwnProperty(r) || l && l.hasOwnProperty(r) || (i = i || {}, i[r] = "");
                            for (r in l) l.hasOwnProperty(r) && u[r] !== l[r] && (i = i || {}, i[r] = l[r])
                        } else i = l;
                else if (z.hasOwnProperty(o)) l ? a(this, o, l, n) : u && F(this, o);
                else if (f(this._tag, t)) G.hasOwnProperty(o) || C.setValueForAttribute(B(this), o, l);
                else if (w.properties[o] || w.isCustomAttribute(o)) {
                    var c = B(this);
                    null != l ? C.setValueForProperty(c, o, l) : C.deleteValueForProperty(c, o)
                }
            }
            i && g.setValueForStyles(B(this), i, this)
        },
        _updateDOMChildren: function(e, t, n, o) {
            var r = W[typeof e.children] ? e.children : null,
                a = W[typeof t.children] ? t.children : null,
                i = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
                l = null != r ? null : e.children,
                u = null != a ? null : t.children,
                c = null != r || null != i,
                p = null != a || null != s;
            null != l && null == u ? this.updateChildren(null, n, o) : c && !p && this.updateTextContent(""), null != a ? r !== a && this.updateTextContent("" + a) : null != s ? i !== s && this.updateMarkup("" + s) : null != u && this.updateChildren(u, n, o)
        },
        getHostNode: function() {
            return B(this)
        },
        unmountComponent: function(e) {
            switch (this._tag) {
                case "audio":
                case "form":
                case "iframe":
                case "img":
                case "link":
                case "object":
                case "source":
                case "video":
                    var t = this._wrapperState.listeners;
                    if (t)
                        for (var n = 0; n < t.length; n++) t[n].remove();
                    break;
                case "html":
                case "head":
                case "body":
                    m("66", this._tag)
            }
            this.unmountChildren(e), O.uncacheNode(this), T.deleteAllListeners(this), R.unmountIDFromEnvironment(this._rootNodeID), this._rootNodeID = null, this._domID = null, this._wrapperState = null
        },
        getPublicInstance: function() {
            return B(this)
        }
    }, v(h.prototype, h.Mixin, I.Mixin), e.exports = h
}, function(e, t, n) {
    "use strict";
    var o = n(32),
        r = n(89),
        a = {
            focusDOMComponent: function() {
                r(o.getNodeFromInstance(this))
            }
        };
    e.exports = a
}, function(e, t) {
    "use strict";

    function n(e) {
        try {
            e.focus()
        } catch (t) {}
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var o = n(91),
        r = n(45),
        a = (n(55), n(92), n(94)),
        i = n(95),
        s = n(97),
        l = (n(11), s(function(e) {
            return i(e)
        })),
        u = !1,
        c = "cssFloat";
    if (r.canUseDOM) {
        var p = document.createElement("div").style;
        try {
            p.font = ""
        } catch (d) {
            u = !0
        }
        void 0 === document.documentElement.style.cssFloat && (c = "styleFloat")
    }
    var f = {
        createMarkupForStyles: function(e, t) {
            var n = "";
            for (var o in e)
                if (e.hasOwnProperty(o)) {
                    var r = e[o];
                    null != r && (n += l(o) + ":", n += a(o, r, t) + ";")
                }
            return n || null
        },
        setValueForStyles: function(e, t, n) {
            var r = e.style;
            for (var i in t)
                if (t.hasOwnProperty(i)) {
                    var s = a(i, t[i], n);
                    if ("float" !== i && "cssFloat" !== i || (i = c), s) r[i] = s;
                    else {
                        var l = u && o.shorthandPropertyExpansions[i];
                        if (l)
                            for (var p in l) r[p] = "";
                        else r[i] = ""
                    }
                }
        }
    };
    e.exports = f
}, function(e, t) {
    "use strict";

    function n(e, t) {
        return e + t.charAt(0).toUpperCase() + t.substring(1)
    }
    var o = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridColumn: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        r = ["Webkit", "ms", "Moz", "O"];
    Object.keys(o).forEach(function(e) {
        r.forEach(function(t) {
            o[n(t, e)] = o[e]
        })
    });
    var a = {
            background: {
                backgroundAttachment: !0,
                backgroundColor: !0,
                backgroundImage: !0,
                backgroundPositionX: !0,
                backgroundPositionY: !0,
                backgroundRepeat: !0
            },
            backgroundPosition: {
                backgroundPositionX: !0,
                backgroundPositionY: !0
            },
            border: {
                borderWidth: !0,
                borderStyle: !0,
                borderColor: !0
            },
            borderBottom: {
                borderBottomWidth: !0,
                borderBottomStyle: !0,
                borderBottomColor: !0
            },
            borderLeft: {
                borderLeftWidth: !0,
                borderLeftStyle: !0,
                borderLeftColor: !0
            },
            borderRight: {
                borderRightWidth: !0,
                borderRightStyle: !0,
                borderRightColor: !0
            },
            borderTop: {
                borderTopWidth: !0,
                borderTopStyle: !0,
                borderTopColor: !0
            },
            font: {
                fontStyle: !0,
                fontVariant: !0,
                fontWeight: !0,
                fontSize: !0,
                lineHeight: !0,
                fontFamily: !0
            },
            outline: {
                outlineWidth: !0,
                outlineStyle: !0,
                outlineColor: !0
            }
        },
        i = {
            isUnitlessNumber: o,
            shorthandPropertyExpansions: a
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return r(e.replace(a, "ms-"))
    }
    var r = n(93),
        a = /^-ms-/;
    e.exports = o
}, function(e, t) {
    "use strict";

    function n(e) {
        return e.replace(o, function(e, t) {
            return t.toUpperCase()
        })
    }
    var o = /-(.)/g;
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        var o = null == t || "boolean" == typeof t || "" === t;
        if (o) return "";
        var r = isNaN(t);
        if (r || 0 === t || a.hasOwnProperty(e) && a[e]) return "" + t;
        if ("string" == typeof t) {
            t = t.trim()
        }
        return t + "px"
    }
    var r = n(91),
        a = (n(11), r.isUnitlessNumber);
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return r(e).replace(a, "-ms-")
    }
    var r = n(96),
        a = /^ms-/;
    e.exports = o
}, function(e, t) {
    "use strict";

    function n(e) {
        return e.replace(o, "-$1").toLowerCase()
    }
    var o = /([A-Z])/g;
    e.exports = n
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = {};
        return function(n) {
            return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n]
        }
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return !!u.hasOwnProperty(e) || !l.hasOwnProperty(e) && (s.test(e) ? (u[e] = !0, !0) : (l[e] = !0, !1))
    }

    function r(e, t) {
        return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && t === !1
    }
    var a = n(33),
        i = (n(32), n(99), n(55), n(103)),
        s = (n(11), new RegExp("^[" + a.ATTRIBUTE_NAME_START_CHAR + "][" + a.ATTRIBUTE_NAME_CHAR + "]*$")),
        l = {},
        u = {},
        c = {
            createMarkupForID: function(e) {
                return a.ID_ATTRIBUTE_NAME + "=" + i(e)
            },
            setAttributeForID: function(e, t) {
                e.setAttribute(a.ID_ATTRIBUTE_NAME, t)
            },
            createMarkupForRoot: function() {
                return a.ROOT_ATTRIBUTE_NAME + '=""'
            },
            setAttributeForRoot: function(e) {
                e.setAttribute(a.ROOT_ATTRIBUTE_NAME, "")
            },
            createMarkupForProperty: function(e, t) {
                var n = a.properties.hasOwnProperty(e) ? a.properties[e] : null;
                if (n) {
                    if (r(n, t)) return "";
                    var o = n.attributeName;
                    return n.hasBooleanValue || n.hasOverloadedBooleanValue && t === !0 ? o + '=""' : o + "=" + i(t)
                }
                return a.isCustomAttribute(e) ? null == t ? "" : e + "=" + i(t) : null
            },
            createMarkupForCustomAttribute: function(e, t) {
                return o(e) && null != t ? e + "=" + i(t) : ""
            },
            setValueForProperty: function(e, t, n) {
                var o = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
                if (o) {
                    var i = o.mutationMethod;
                    if (i) i(e, n);
                    else {
                        if (r(o, n)) return void this.deleteValueForProperty(e, t);
                        if (o.mustUseProperty) {
                            var s = o.propertyName;
                            o.hasSideEffects && "" + e[s] == "" + n || (e[s] = n)
                        } else {
                            var l = o.attributeName,
                                u = o.attributeNamespace;
                            u ? e.setAttributeNS(u, l, "" + n) : o.hasBooleanValue || o.hasOverloadedBooleanValue && n === !0 ? e.setAttribute(l, "") : e.setAttribute(l, "" + n)
                        }
                    }
                } else if (a.isCustomAttribute(t)) return void c.setValueForAttribute(e, t, n)
            },
            setValueForAttribute: function(e, t, n) {
                if (o(t)) {
                    null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)
                }
            },
            deleteValueForAttribute: function(e, t) {
                e.removeAttribute(t)
            },
            deleteValueForProperty: function(e, t) {
                var n = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
                if (n) {
                    var o = n.mutationMethod;
                    if (o) o(e, void 0);
                    else if (n.mustUseProperty) {
                        var r = n.propertyName;
                        n.hasBooleanValue ? e[r] = !1 : n.hasSideEffects && "" + e[r] == "" || (e[r] = "")
                    } else e.removeAttribute(n.attributeName)
                } else a.isCustomAttribute(t) && e.removeAttribute(t)
            }
        };
    e.exports = c
}, function(e, t, n) {
    "use strict";
    var o = n(100);
    e.exports = {
        debugTool: o
    }
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o, r, a) {}
    var r = n(101),
        a = n(56),
        i = (n(11), []),
        s = {
            addDevtool: function(e) {
                a.addDevtool(e), i.push(e)
            },
            removeDevtool: function(e) {
                a.removeDevtool(e);
                for (var t = 0; t < i.length; t++) i[t] === e && (i.splice(t, 1), t--)
            },
            onCreateMarkupForProperty: function(e, t) {
                o("onCreateMarkupForProperty", e, t)
            },
            onSetValueForProperty: function(e, t, n) {
                o("onSetValueForProperty", e, t, n)
            },
            onDeleteValueForProperty: function(e, t) {
                o("onDeleteValueForProperty", e, t)
            },
            onTestEvent: function() {
                o("onTestEvent")
            }
        };
    s.addDevtool(r), e.exports = s
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        null != t && "string" == typeof t.type && (t.type.indexOf("-") >= 0 || t.props.is || a(e, t))
    }
    var r, a = (n(33), n(40), n(102), n(11), function(e, t) {
            var n = [];
            for (var o in t.props) {
                var a = r(t.type, o, e);
                a || n.push(o)
            }
            n.map(function(e) {
                return "`" + e + "`"
            }).join(", ");
            1 === n.length || n.length > 1
        }),
        i = {
            onBeforeMountComponent: function(e, t) {
                o(e, t)
            },
            onBeforeUpdateComponent: function(e, t) {
                o(e, t)
            }
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        u[e] || (u[e] = {
            element: null,
            parentID: null,
            ownerID: null,
            text: null,
            childIDs: [],
            displayName: "Unknown",
            isMounted: !1,
            updateCount: 0
        }, c[e] = !0), t(u[e])
    }

    function r(e) {
        var t = u[e];
        if (t) {
            var n = t.childIDs;
            delete u[e], n.forEach(r)
        }
    }

    function a(e, t, n) {
        return "\n    in " + e + (t ? " (at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + ")" : n ? " (created by " + n + ")" : "")
    }

    function i(e) {
        var t, n = d.getDisplayName(e),
            o = d.getElement(e),
            r = d.getOwnerID(e);
        return r && (t = d.getDisplayName(r)), a(n, o && o._source, t)
    }
    var s = n(7),
        l = n(10),
        u = (n(8), n(11), {}),
        c = {},
        p = {},
        d = {
            onSetDisplayName: function(e, t) {
                o(e, function(e) {
                    return e.displayName = t
                })
            },
            onSetChildren: function(e, t) {
                o(e, function(n) {
                    n.childIDs = t, t.forEach(function(t) {
                        var n = u[t];
                        n ? void 0 : s("68"), null == n.displayName ? s("69") : void 0, null == n.childIDs && null == n.text ? s("70") : void 0, n.isMounted ? void 0 : s("71"), null == n.parentID && (n.parentID = e), n.parentID !== e ? s("72", t, n.parentID, e) : void 0
                    })
                })
            },
            onSetOwner: function(e, t) {
                o(e, function(e) {
                    return e.ownerID = t
                })
            },
            onSetParent: function(e, t) {
                o(e, function(e) {
                    return e.parentID = t
                })
            },
            onSetText: function(e, t) {
                o(e, function(e) {
                    return e.text = t
                })
            },
            onBeforeMountComponent: function(e, t) {
                o(e, function(e) {
                    return e.element = t
                })
            },
            onBeforeUpdateComponent: function(e, t) {
                o(e, function(e) {
                    return e.element = t
                })
            },
            onMountComponent: function(e) {
                o(e, function(e) {
                    return e.isMounted = !0
                }), delete c[e]
            },
            onMountRootComponent: function(e) {
                p[e] = !0
            },
            onUpdateComponent: function(e) {
                o(e, function(e) {
                    return e.updateCount++
                })
            },
            onUnmountComponent: function(e) {
                o(e, function(e) {
                    return e.isMounted = !1
                }), c[e] = !0, delete p[e]
            },
            purgeUnmountedComponents: function() {
                if (!d._preventPurging) {
                    for (var e in c) r(e);
                    c = {}
                }
            },
            isMounted: function(e) {
                var t = u[e];
                return !!t && t.isMounted
            },
            getCurrentStackAddendum: function(e) {
                var t = "";
                if (e) {
                    var n = e.type,
                        o = "function" == typeof n ? n.displayName || n.name : n,
                        r = e._owner;
                    t += a(o || "Unknown", e._source, r && r.getName())
                }
                var i = l.current,
                    s = i && i._debugID;
                return t += d.getStackAddendumByID(s)
            },
            getStackAddendumByID: function(e) {
                for (var t = ""; e;) t += i(e), e = d.getParentID(e);
                return t
            },
            getChildIDs: function(e) {
                var t = u[e];
                return t ? t.childIDs : []
            },
            getDisplayName: function(e) {
                var t = u[e];
                return t ? t.displayName : "Unknown"
            },
            getElement: function(e) {
                var t = u[e];
                return t ? t.element : null
            },
            getOwnerID: function(e) {
                var t = u[e];
                return t ? t.ownerID : null
            },
            getParentID: function(e) {
                var t = u[e];
                return t ? t.parentID : null
            },
            getSource: function(e) {
                var t = u[e],
                    n = t ? t.element : null,
                    o = null != n ? n._source : null;
                return o
            },
            getText: function(e) {
                var t = u[e];
                return t ? t.text : null
            },
            getUpdateCount: function(e) {
                var t = u[e];
                return t ? t.updateCount : 0
            },
            getRootIDs: function() {
                return Object.keys(p)
            },
            getRegisteredIDs: function() {
                return Object.keys(u)
            }
        };
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return '"' + r(e) + '"'
    }
    var r = n(80);
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return Object.prototype.hasOwnProperty.call(e, v) || (e[v] = h++, d[e[v]] = {}), d[e[v]]
    }
    var r, a = n(4),
        i = n(37),
        s = n(40),
        l = n(105),
        u = n(70),
        c = n(106),
        p = n(64),
        d = {},
        f = !1,
        h = 0,
        m = {
            topAbort: "abort",
            topAnimationEnd: c("animationend") || "animationend",
            topAnimationIteration: c("animationiteration") || "animationiteration",
            topAnimationStart: c("animationstart") || "animationstart",
            topBlur: "blur",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topChange: "change",
            topClick: "click",
            topCompositionEnd: "compositionend",
            topCompositionStart: "compositionstart",
            topCompositionUpdate: "compositionupdate",
            topContextMenu: "contextmenu",
            topCopy: "copy",
            topCut: "cut",
            topDoubleClick: "dblclick",
            topDrag: "drag",
            topDragEnd: "dragend",
            topDragEnter: "dragenter",
            topDragExit: "dragexit",
            topDragLeave: "dragleave",
            topDragOver: "dragover",
            topDragStart: "dragstart",
            topDrop: "drop",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topFocus: "focus",
            topInput: "input",
            topKeyDown: "keydown",
            topKeyPress: "keypress",
            topKeyUp: "keyup",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topMouseDown: "mousedown",
            topMouseMove: "mousemove",
            topMouseOut: "mouseout",
            topMouseOver: "mouseover",
            topMouseUp: "mouseup",
            topPaste: "paste",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topScroll: "scroll",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topSelectionChange: "selectionchange",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTextInput: "textInput",
            topTimeUpdate: "timeupdate",
            topTouchCancel: "touchcancel",
            topTouchEnd: "touchend",
            topTouchMove: "touchmove",
            topTouchStart: "touchstart",
            topTransitionEnd: c("transitionend") || "transitionend",
            topVolumeChange: "volumechange",
            topWaiting: "waiting",
            topWheel: "wheel"
        },
        v = "_reactListenersID" + String(Math.random()).slice(2),
        y = a({}, l, {
            ReactEventListener: null,
            injection: {
                injectReactEventListener: function(e) {
                    e.setHandleTopLevel(y.handleTopLevel), y.ReactEventListener = e
                }
            },
            setEnabled: function(e) {
                y.ReactEventListener && y.ReactEventListener.setEnabled(e)
            },
            isEnabled: function() {
                return !(!y.ReactEventListener || !y.ReactEventListener.isEnabled())
            },
            listenTo: function(e, t) {
                for (var n = t, r = o(n), a = s.registrationNameDependencies[e], l = i.topLevelTypes, u = 0; u < a.length; u++) {
                    var c = a[u];
                    r.hasOwnProperty(c) && r[c] || (c === l.topWheel ? p("wheel") ? y.ReactEventListener.trapBubbledEvent(l.topWheel, "wheel", n) : p("mousewheel") ? y.ReactEventListener.trapBubbledEvent(l.topWheel, "mousewheel", n) : y.ReactEventListener.trapBubbledEvent(l.topWheel, "DOMMouseScroll", n) : c === l.topScroll ? p("scroll", !0) ? y.ReactEventListener.trapCapturedEvent(l.topScroll, "scroll", n) : y.ReactEventListener.trapBubbledEvent(l.topScroll, "scroll", y.ReactEventListener.WINDOW_HANDLE) : c === l.topFocus || c === l.topBlur ? (p("focus", !0) ? (y.ReactEventListener.trapCapturedEvent(l.topFocus, "focus", n), y.ReactEventListener.trapCapturedEvent(l.topBlur, "blur", n)) : p("focusin") && (y.ReactEventListener.trapBubbledEvent(l.topFocus, "focusin", n), y.ReactEventListener.trapBubbledEvent(l.topBlur, "focusout", n)), r[l.topBlur] = !0, r[l.topFocus] = !0) : m.hasOwnProperty(c) && y.ReactEventListener.trapBubbledEvent(c, m[c], n), r[c] = !0)
                }
            },
            trapBubbledEvent: function(e, t, n) {
                return y.ReactEventListener.trapBubbledEvent(e, t, n)
            },
            trapCapturedEvent: function(e, t, n) {
                return y.ReactEventListener.trapCapturedEvent(e, t, n)
            },
            ensureScrollValueMonitoring: function() {
                if (void 0 === r && (r = document.createEvent && "pageX" in document.createEvent("MouseEvent")), !r && !f) {
                    var e = u.refreshScrollValues;
                    y.ReactEventListener.monitorScrollValue(e), f = !0
                }
            }
        });
    e.exports = y
}, function(e, t, n) {
    "use strict";

    function o(e) {
        r.enqueueEvents(e), r.processEventQueue(!1)
    }
    var r = n(39),
        a = {
            handleTopLevel: function(e, t, n, a) {
                var i = r.extractEvents(e, t, n, a);
                o(i)
            }
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n["ms" + e] = "MS" + t, n["O" + e] = "o" + t.toLowerCase(), n
    }

    function r(e) {
        if (s[e]) return s[e];
        if (!i[e]) return e;
        var t = i[e];
        for (var n in t)
            if (t.hasOwnProperty(n) && n in l) return s[e] = t[n];
        return ""
    }
    var a = n(45),
        i = {
            animationend: o("Animation", "AnimationEnd"),
            animationiteration: o("Animation", "AnimationIteration"),
            animationstart: o("Animation", "AnimationStart"),
            transitionend: o("Transition", "TransitionEnd")
        },
        s = {},
        l = {};
    a.canUseDOM && (l = document.createElement("div").style, "AnimationEvent" in window || (delete i.animationend.animation, delete i.animationiteration.animation, delete i.animationstart.animation), "TransitionEvent" in window || delete i.transitionend.transition), e.exports = r
}, function(e, t, n) {
    "use strict";
    var o = n(108),
        r = {
            getHostProps: o.getHostProps
        };
    e.exports = r
}, function(e, t) {
    "use strict";
    var n = {
            onClick: !0,
            onDoubleClick: !0,
            onMouseDown: !0,
            onMouseMove: !0,
            onMouseUp: !0,
            onClickCapture: !0,
            onDoubleClickCapture: !0,
            onMouseDownCapture: !0,
            onMouseMoveCapture: !0,
            onMouseUpCapture: !0
        },
        o = {
            getHostProps: function(e, t) {
                if (!t.disabled) return t;
                var o = {};
                for (var r in t) !n[r] && t.hasOwnProperty(r) && (o[r] = t[r]);
                return o
            }
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o() {
        this._rootNodeID && d.updateWrapper(this)
    }

    function r(e) {
        var t = this._currentElement.props,
            n = u.executeOnChange(t, e);
        p.asap(o, this);
        var r = t.name;
        if ("radio" === t.type && null != r) {
            for (var i = c.getNodeFromInstance(this), s = i; s.parentNode;) s = s.parentNode;
            for (var l = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), d = 0; d < l.length; d++) {
                var f = l[d];
                if (f !== i && f.form === i.form) {
                    var h = c.getInstanceFromNode(f);
                    h ? void 0 : a("90"), p.asap(o, h)
                }
            }
        }
        return n
    }
    var a = n(7),
        i = n(4),
        s = n(108),
        l = n(98),
        u = n(110),
        c = n(32),
        p = n(52),
        d = (n(8), n(11), {
            getHostProps: function(e, t) {
                var n = u.getValue(t),
                    o = u.getChecked(t),
                    r = i({
                        type: void 0
                    }, s.getHostProps(e, t), {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: null != n ? n : e._wrapperState.initialValue,
                        checked: null != o ? o : e._wrapperState.initialChecked,
                        onChange: e._wrapperState.onChange
                    });
                return r
            },
            mountWrapper: function(e, t) {
                var n = t.defaultValue;
                e._wrapperState = {
                    initialChecked: null != t.checked ? t.checked : t.defaultChecked,
                    initialValue: null != t.value ? t.value : n,
                    listeners: null,
                    onChange: r.bind(e)
                }
            },
            updateWrapper: function(e) {
                var t = e._currentElement.props,
                    n = t.checked;
                null != n && l.setValueForProperty(c.getNodeFromInstance(e), "checked", n || !1);
                var o = c.getNodeFromInstance(e),
                    r = u.getValue(t);
                if (null != r) {
                    var a = "" + r;
                    a !== o.value && (o.value = a)
                } else null == t.value && null != t.defaultValue && (o.defaultValue = "" + t.defaultValue), null == t.checked && null != t.defaultChecked && (o.defaultChecked = !!t.defaultChecked)
            },
            postMountWrapper: function(e) {
                var t = c.getNodeFromInstance(e);
                t.value = t.value;
                var n = t.name;
                t.name = void 0, t.defaultChecked = !t.defaultChecked, t.defaultChecked = !t.defaultChecked, t.name = n
            }
        });
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function o(e) {
        null != e.checkedLink && null != e.valueLink ? s("87") : void 0
    }

    function r(e) {
        o(e), null != e.value || null != e.onChange ? s("88") : void 0
    }

    function a(e) {
        o(e), null != e.checked || null != e.onChange ? s("89") : void 0
    }

    function i(e) {
        if (e) {
            var t = e.getName();
            if (t) return " Check the render method of `" + t + "`."
        }
        return ""
    }
    var s = n(7),
        l = n(27),
        u = n(21),
        c = (n(8), n(11), {
            button: !0,
            checkbox: !0,
            image: !0,
            hidden: !0,
            radio: !0,
            reset: !0,
            submit: !0
        }),
        p = {
            value: function(e, t, n) {
                return !e[t] || c[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
            },
            checked: function(e, t, n) {
                return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
            },
            onChange: l.func
        },
        d = {},
        f = {
            checkPropTypes: function(e, t, n) {
                for (var o in p) {
                    if (p.hasOwnProperty(o)) var r = p[o](t, o, e, u.prop);
                    if (r instanceof Error && !(r.message in d)) {
                        d[r.message] = !0;
                        i(n)
                    }
                }
            },
            getValue: function(e) {
                return e.valueLink ? (r(e), e.valueLink.value) : e.value
            },
            getChecked: function(e) {
                return e.checkedLink ? (a(e), e.checkedLink.value) : e.checked
            },
            executeOnChange: function(e, t) {
                return e.valueLink ? (r(e), e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (a(e), e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0
            }
        };
    e.exports = f
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t = "";
        return a.forEach(e, function(e) {
            null != e && ("string" == typeof e || "number" == typeof e ? t += e : l || (l = !0))
        }), t
    }
    var r = n(4),
        a = n(5),
        i = n(32),
        s = n(112),
        l = (n(11), !1),
        u = {
            mountWrapper: function(e, t, n) {
                var r = null;
                if (null != n) {
                    var a = n;
                    "optgroup" === a._tag && (a = a._hostParent), null != a && "select" === a._tag && (r = s.getSelectValueContext(a))
                }
                var i = null;
                if (null != r) {
                    var l;
                    if (l = null != t.value ? t.value + "" : o(t.children), i = !1, Array.isArray(r)) {
                        for (var u = 0; u < r.length; u++)
                            if ("" + r[u] === l) {
                                i = !0;
                                break
                            }
                    } else i = "" + r === l
                }
                e._wrapperState = {
                    selected: i
                }
            },
            postMountWrapper: function(e) {
                var t = e._currentElement.props;
                if (null != t.value) {
                    var n = i.getNodeFromInstance(e);
                    n.setAttribute("value", t.value)
                }
            },
            getHostProps: function(e, t) {
                var n = r({
                    selected: void 0,
                    children: void 0
                }, t);
                null != e._wrapperState.selected && (n.selected = e._wrapperState.selected);
                var a = o(t.children);
                return a && (n.children = a), n
            }
        };
    e.exports = u
}, function(e, t, n) {
    "use strict";

    function o() {
        if (this._rootNodeID && this._wrapperState.pendingUpdate) {
            this._wrapperState.pendingUpdate = !1;
            var e = this._currentElement.props,
                t = l.getValue(e);
            null != t && r(this, Boolean(e.multiple), t)
        }
    }

    function r(e, t, n) {
        var o, r, a = u.getNodeFromInstance(e).options;
        if (t) {
            for (o = {}, r = 0; r < n.length; r++) o["" + n[r]] = !0;
            for (r = 0; r < a.length; r++) {
                var i = o.hasOwnProperty(a[r].value);
                a[r].selected !== i && (a[r].selected = i)
            }
        } else {
            for (o = "" + n, r = 0; r < a.length; r++)
                if (a[r].value === o) return void(a[r].selected = !0);
            a.length && (a[0].selected = !0)
        }
    }

    function a(e) {
        var t = this._currentElement.props,
            n = l.executeOnChange(t, e);
        return this._rootNodeID && (this._wrapperState.pendingUpdate = !0), c.asap(o, this), n
    }
    var i = n(4),
        s = n(108),
        l = n(110),
        u = n(32),
        c = n(52),
        p = (n(11), !1),
        d = {
            getHostProps: function(e, t) {
                return i({}, s.getHostProps(e, t), {
                    onChange: e._wrapperState.onChange,
                    value: void 0
                })
            },
            mountWrapper: function(e, t) {
                var n = l.getValue(t);
                e._wrapperState = {
                    pendingUpdate: !1,
                    initialValue: null != n ? n : t.defaultValue,
                    listeners: null,
                    onChange: a.bind(e),
                    wasMultiple: Boolean(t.multiple)
                }, void 0 === t.value || void 0 === t.defaultValue || p || (p = !0)
            },
            getSelectValueContext: function(e) {
                return e._wrapperState.initialValue
            },
            postUpdateWrapper: function(e) {
                var t = e._currentElement.props;
                e._wrapperState.initialValue = void 0;
                var n = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = Boolean(t.multiple);
                var o = l.getValue(t);
                null != o ? (e._wrapperState.pendingUpdate = !1, r(e, Boolean(t.multiple), o)) : n !== Boolean(t.multiple) && (null != t.defaultValue ? r(e, Boolean(t.multiple), t.defaultValue) : r(e, Boolean(t.multiple), t.multiple ? [] : ""))
            }
        };
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function o() {
        this._rootNodeID && p.updateWrapper(this)
    }

    function r(e) {
        var t = this._currentElement.props,
            n = l.executeOnChange(t, e);
        return c.asap(o, this), n
    }
    var a = n(7),
        i = n(4),
        s = n(108),
        l = n(110),
        u = n(32),
        c = n(52),
        p = (n(8), n(11), {
            getHostProps: function(e, t) {
                null != t.dangerouslySetInnerHTML ? a("91") : void 0;
                var n = i({}, s.getHostProps(e, t), {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue,
                    onChange: e._wrapperState.onChange
                });
                return n
            },
            mountWrapper: function(e, t) {
                var n = l.getValue(t),
                    o = n;
                if (null == n) {
                    var i = t.defaultValue,
                        s = t.children;
                    null != s && (null != i ? a("92") : void 0, Array.isArray(s) && (s.length <= 1 ? void 0 : a("93"), s = s[0]), i = "" + s), null == i && (i = ""), o = i
                }
                e._wrapperState = {
                    initialValue: "" + o,
                    listeners: null,
                    onChange: r.bind(e)
                }
            },
            updateWrapper: function(e) {
                var t = e._currentElement.props,
                    n = u.getNodeFromInstance(e),
                    o = l.getValue(t);
                if (null != o) {
                    var r = "" + o;
                    r !== n.value && (n.value = r), null == t.defaultValue && (n.defaultValue = r)
                }
                null != t.defaultValue && (n.defaultValue = t.defaultValue)
            },
            postMountWrapper: function(e) {
                var t = u.getNodeFromInstance(e);
                t.value = t.textContent
            }
        });
    e.exports = p
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        return {
            type: d.INSERT_MARKUP,
            content: e,
            fromIndex: null,
            fromNode: null,
            toIndex: n,
            afterNode: t
        }
    }

    function r(e, t, n) {
        return {
            type: d.MOVE_EXISTING,
            content: null,
            fromIndex: e._mountIndex,
            fromNode: f.getHostNode(e),
            toIndex: n,
            afterNode: t
        }
    }

    function a(e, t) {
        return {
            type: d.REMOVE_NODE,
            content: null,
            fromIndex: e._mountIndex,
            fromNode: t,
            toIndex: null,
            afterNode: null
        }
    }

    function i(e) {
        return {
            type: d.SET_MARKUP,
            content: e,
            fromIndex: null,
            fromNode: null,
            toIndex: null,
            afterNode: null
        }
    }

    function s(e) {
        return {
            type: d.TEXT_CONTENT,
            content: e,
            fromIndex: null,
            fromNode: null,
            toIndex: null,
            afterNode: null
        }
    }

    function l(e, t) {
        return t && (e = e || [], e.push(t)), e
    }

    function u(e, t) {
        p.processChildrenUpdates(e, t)
    }
    var c = n(7),
        p = n(115),
        d = (n(116), n(55), n(85)),
        f = (n(10), n(59)),
        h = n(117),
        m = (n(12), n(126)),
        v = (n(8), {
            Mixin: {
                _reconcilerInstantiateChildren: function(e, t, n) {
                    return h.instantiateChildren(e, t, n)
                },
                _reconcilerUpdateChildren: function(e, t, n, o, r) {
                    var a;
                    return a = m(t), h.updateChildren(e, a, n, o, r), a
                },
                mountChildren: function(e, t, n) {
                    var o = this._reconcilerInstantiateChildren(e, t, n);
                    this._renderedChildren = o;
                    var r = [],
                        a = 0;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var s = o[i],
                                l = f.mountComponent(s, t, this, this._hostContainerInfo, n);
                            s._mountIndex = a++, r.push(l)
                        }
                    return r
                },
                updateTextContent: function(e) {
                    var t = this._renderedChildren;
                    h.unmountChildren(t, !1);
                    for (var n in t) t.hasOwnProperty(n) && c("118");
                    var o = [s(e)];
                    u(this, o)
                },
                updateMarkup: function(e) {
                    var t = this._renderedChildren;
                    h.unmountChildren(t, !1);
                    for (var n in t) t.hasOwnProperty(n) && c("118");
                    var o = [i(e)];
                    u(this, o)
                },
                updateChildren: function(e, t, n) {
                    this._updateChildren(e, t, n)
                },
                _updateChildren: function(e, t, n) {
                    var o = this._renderedChildren,
                        r = {},
                        a = this._reconcilerUpdateChildren(o, e, r, t, n);
                    if (a || o) {
                        var i, s = null,
                            c = 0,
                            p = 0,
                            d = null;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var h = o && o[i],
                                    m = a[i];
                                h === m ? (s = l(s, this.moveChild(h, d, p, c)), c = Math.max(h._mountIndex, c), h._mountIndex = p) : (h && (c = Math.max(h._mountIndex, c)), s = l(s, this._mountChildAtIndex(m, d, p, t, n))), p++, d = f.getHostNode(m)
                            }
                        for (i in r) r.hasOwnProperty(i) && (s = l(s, this._unmountChild(o[i], r[i])));
                        s && u(this, s), this._renderedChildren = a
                    }
                },
                unmountChildren: function(e) {
                    var t = this._renderedChildren;
                    h.unmountChildren(t, e), this._renderedChildren = null
                },
                moveChild: function(e, t, n, o) {
                    if (e._mountIndex < o) return r(e, t, n)
                },
                createChild: function(e, t, n) {
                    return o(n, t, e._mountIndex)
                },
                removeChild: function(e, t) {
                    return a(e, t)
                },
                _mountChildAtIndex: function(e, t, n, o, r) {
                    var a = f.mountComponent(e, o, this, this._hostContainerInfo, r);
                    return e._mountIndex = n, this.createChild(e, t, a)
                },
                _unmountChild: function(e, t) {
                    var n = this.removeChild(e, t);
                    return e._mountIndex = null, n
                }
            }
        });
    e.exports = v
}, function(e, t, n) {
    "use strict";
    var o = n(7),
        r = (n(8), !1),
        a = {
            unmountIDFromEnvironment: null,
            replaceNodeWithMarkup: null,
            processChildrenUpdates: null,
            injection: {
                injectEnvironment: function(e) {
                    r ? o("104") : void 0, a.unmountIDFromEnvironment = e.unmountIDFromEnvironment, a.replaceNodeWithMarkup = e.replaceNodeWithMarkup, a.processChildrenUpdates = e.processChildrenUpdates, r = !0
                }
            }
        };
    e.exports = a
}, function(e, t) {
    "use strict";
    var n = {
        remove: function(e) {
            e._reactInternalInstance = void 0
        },
        get: function(e) {
            return e._reactInternalInstance
        },
        has: function(e) {
            return void 0 !== e._reactInternalInstance
        },
        set: function(e, t) {
            e._reactInternalInstance = t
        }
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        var r = void 0 === e[n];
        null != t && r && (e[n] = a(t))
    }
    var r = n(59),
        a = (n(102), n(118)),
        i = (n(16), n(123)),
        s = n(14),
        l = (n(11), {
            instantiateChildren: function(e, t, n, r) {
                if (null == e) return null;
                var a = {};
                return s(e, o, a), a
            },
            updateChildren: function(e, t, n, o, s) {
                if (t || e) {
                    var l, u;
                    for (l in t)
                        if (t.hasOwnProperty(l)) {
                            u = e && e[l];
                            var c = u && u._currentElement,
                                p = t[l];
                            if (null != u && i(c, p)) r.receiveComponent(u, p, o, s), t[l] = u;
                            else {
                                u && (n[l] = r.getHostNode(u), r.unmountComponent(u, !1));
                                var d = a(p);
                                t[l] = d
                            }
                        }
                    for (l in e) !e.hasOwnProperty(l) || t && t.hasOwnProperty(l) || (u = e[l], n[l] = r.getHostNode(u), r.unmountComponent(u, !1))
                }
            },
            unmountChildren: function(e, t) {
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var o = e[n];
                        r.unmountComponent(o, t)
                    }
            }
        });
    e.exports = l
}, function(e, t, n) {
    "use strict";

    function o(e) {
        if (e) {
            var t = e.getName();
            if (t) return " Check the render method of `" + t + "`."
        }
        return ""
    }

    function r(e) {
        return "function" == typeof e && "undefined" != typeof e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent
    }

    function a(e) {
        var t, n = null === e || e === !1;
        if (n) t = u.create(a);
        else if ("object" == typeof e) {
            var s = e;
            !s || "function" != typeof s.type && "string" != typeof s.type ? i("130", null == s.type ? s.type : typeof s.type, o(s._owner)) : void 0, "string" == typeof s.type ? t = c.createInternalComponent(s) : r(s.type) ? (t = new s.type(s), t.getHostNode || (t.getHostNode = t.getNativeNode)) : t = new p(s)
        } else "string" == typeof e || "number" == typeof e ? t = c.createInstanceForText(e) : i("131", typeof e);
        t._mountIndex = 0, t._mountImage = null;
        return t
    }
    var i = n(7),
        s = n(4),
        l = n(119),
        u = n(124),
        c = n(125),
        p = (n(55), n(8), n(11), function(e) {
            this.construct(e)
        });
    s(p.prototype, l.Mixin, {
        _instantiateReactComponent: a
    });
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function o(e) {}

    function r(e, t) {}

    function a(e) {
        return e.prototype && e.prototype.isReactComponent
    }
    var i = n(7),
        s = n(4),
        l = n(115),
        u = n(10),
        c = n(9),
        p = n(42),
        d = n(116),
        f = (n(55), n(120)),
        h = (n(21), n(59)),
        m = n(121),
        v = n(122),
        y = n(19),
        g = (n(8), n(123));
    n(11);
    o.prototype.render = function() {
        var e = d.get(this)._currentElement.type,
            t = e(this.props, this.context, this.updater);
        return r(e, t), t
    };
    var b = 1,
        E = {
            construct: function(e) {
                this._currentElement = e, this._rootNodeID = null, this._instance = null, this._hostParent = null, this._hostContainerInfo = null, this._updateBatchNumber = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedNodeType = null, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._topLevelWrapper = null, this._pendingCallbacks = null, this._calledComponentWillUnmount = !1
            },
            mountComponent: function(e, t, n, s) {
                this._context = s, this._mountOrder = b++, this._hostParent = t, this._hostContainerInfo = n;
                var l, u = this._currentElement.props,
                    p = this._processContext(s),
                    f = this._currentElement.type,
                    h = this._constructComponent(u, p);
                a(f) || null != h && null != h.render || (l = h, r(f, l), null === h || h === !1 || c.isValidElement(h) ? void 0 : i("105", f.displayName || f.name || "Component"), h = new o(f));
                h.props = u, h.context = p, h.refs = y, h.updater = m, this._instance = h, d.set(h, this);
                var v = h.state;
                void 0 === v && (h.state = v = null), "object" != typeof v || Array.isArray(v) ? i("106", this.getName() || "ReactCompositeComponent") : void 0, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
                var g;
                return g = h.unstable_handleError ? this.performInitialMountWithErrorHandling(l, t, n, e, s) : this.performInitialMount(l, t, n, e, s), h.componentDidMount && e.getReactMountReady().enqueue(h.componentDidMount, h), g
            },
            _constructComponent: function(e, t) {
                return this._constructComponentWithoutOwner(e, t)
            },
            _constructComponentWithoutOwner: function(e, t) {
                var n, o = this._currentElement.type;
                return n = a(o) ? new o(e, t, m) : o(e, t, m)
            },
            performInitialMountWithErrorHandling: function(e, t, n, o, r) {
                var a, i = o.checkpoint();
                try {
                    a = this.performInitialMount(e, t, n, o, r)
                } catch (s) {
                    o.rollback(i), this._instance.unstable_handleError(s), this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)), i = o.checkpoint(), this._renderedComponent.unmountComponent(!0), o.rollback(i), a = this.performInitialMount(e, t, n, o, r)
                }
                return a
            },
            performInitialMount: function(e, t, n, o, r) {
                var a = this._instance;
                a.componentWillMount && (a.componentWillMount(), this._pendingStateQueue && (a.state = this._processPendingState(a.props, a.context))), void 0 === e && (e = this._renderValidatedComponent()), this._renderedNodeType = f.getType(e);
                var i = this._instantiateReactComponent(e);
                this._renderedComponent = i;
                var s = h.mountComponent(i, o, t, n, this._processChildContext(r));
                return s
            },
            getHostNode: function() {
                return h.getHostNode(this._renderedComponent)
            },
            unmountComponent: function(e) {
                if (this._renderedComponent) {
                    var t = this._instance;
                    if (t.componentWillUnmount && !t._calledComponentWillUnmount)
                        if (t._calledComponentWillUnmount = !0, e) {
                            var n = this.getName() + ".componentWillUnmount()";
                            p.invokeGuardedCallback(n, t.componentWillUnmount.bind(t))
                        } else t.componentWillUnmount();
                    this._renderedComponent && (h.unmountComponent(this._renderedComponent, e), this._renderedNodeType = null, this._renderedComponent = null, this._instance = null), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = null, this._topLevelWrapper = null, d.remove(t)
                }
            },
            _maskContext: function(e) {
                var t = this._currentElement.type,
                    n = t.contextTypes;
                if (!n) return y;
                var o = {};
                for (var r in n) o[r] = e[r];
                return o
            },
            _processContext: function(e) {
                var t = this._maskContext(e);
                return t
            },
            _processChildContext: function(e) {
                var t = this._currentElement.type,
                    n = this._instance,
                    o = n.getChildContext && n.getChildContext();
                if (o) {
                    "object" != typeof t.childContextTypes ? i("107", this.getName() || "ReactCompositeComponent") : void 0;
                    for (var r in o) r in t.childContextTypes ? void 0 : i("108", this.getName() || "ReactCompositeComponent", r);
                    return s({}, e, o)
                }
                return e
            },
            _checkContextTypes: function(e, t, n) {
                v(e, t, n, this.getName(), null, this._debugID)
            },
            receiveComponent: function(e, t, n) {
                var o = this._currentElement,
                    r = this._context;
                this._pendingElement = null, this.updateComponent(t, o, e, r, n)
            },
            performUpdateIfNecessary: function(e) {
                null != this._pendingElement ? h.receiveComponent(this, this._pendingElement, e, this._context) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context) : this._updateBatchNumber = null
            },
            updateComponent: function(e, t, n, o, r) {
                var a = this._instance;
                null == a ? i("136", this.getName() || "ReactCompositeComponent") : void 0;
                var s, l, u = !1;
                this._context === r ? s = a.context : (s = this._processContext(r), u = !0), l = n.props, t !== n && (u = !0), u && a.componentWillReceiveProps && a.componentWillReceiveProps(l, s);
                var c = this._processPendingState(l, s),
                    p = !0;
                !this._pendingForceUpdate && a.shouldComponentUpdate && (p = a.shouldComponentUpdate(l, c, s)), this._updateBatchNumber = null, p ? (this._pendingForceUpdate = !1, this._performComponentUpdate(n, l, c, s, e, r)) : (this._currentElement = n, this._context = r, a.props = l, a.state = c, a.context = s)
            },
            _processPendingState: function(e, t) {
                var n = this._instance,
                    o = this._pendingStateQueue,
                    r = this._pendingReplaceState;
                if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !o) return n.state;
                if (r && 1 === o.length) return o[0];
                for (var a = s({}, r ? o[0] : n.state), i = r ? 1 : 0; i < o.length; i++) {
                    var l = o[i];
                    s(a, "function" == typeof l ? l.call(n, a, e, t) : l)
                }
                return a
            },
            _performComponentUpdate: function(e, t, n, o, r, a) {
                var i, s, l, u = this._instance,
                    c = Boolean(u.componentDidUpdate);
                c && (i = u.props, s = u.state, l = u.context), u.componentWillUpdate && u.componentWillUpdate(t, n, o), this._currentElement = e, this._context = a, u.props = t, u.state = n, u.context = o, this._updateRenderedComponent(r, a), c && r.getReactMountReady().enqueue(u.componentDidUpdate.bind(u, i, s, l), u)
            },
            _updateRenderedComponent: function(e, t) {
                var n = this._renderedComponent,
                    o = n._currentElement,
                    r = this._renderValidatedComponent();
                if (g(o, r)) h.receiveComponent(n, r, e, this._processChildContext(t));
                else {
                    var a = h.getHostNode(n);
                    h.unmountComponent(n, !1), this._renderedNodeType = f.getType(r);
                    var i = this._instantiateReactComponent(r);
                    this._renderedComponent = i;
                    var s = h.mountComponent(i, e, this._hostParent, this._hostContainerInfo, this._processChildContext(t));
                    this._replaceNodeWithMarkup(a, s, n)
                }
            },
            _replaceNodeWithMarkup: function(e, t, n) {
                l.replaceNodeWithMarkup(e, t, n)
            },
            _renderValidatedComponentWithoutOwnerOrContext: function() {
                var e = this._instance,
                    t = e.render();
                return t
            },
            _renderValidatedComponent: function() {
                var e;
                u.current = this;
                try {
                    e = this._renderValidatedComponentWithoutOwnerOrContext()
                } finally {
                    u.current = null
                }
                return null === e || e === !1 || c.isValidElement(e) ? void 0 : i("109", this.getName() || "ReactCompositeComponent"), e
            },
            attachRef: function(e, t) {
                var n = this.getPublicInstance();
                null == n ? i("110") : void 0;
                var o = t.getPublicInstance(),
                    r = n.refs === y ? n.refs = {} : n.refs;
                r[e] = o
            },
            detachRef: function(e) {
                var t = this.getPublicInstance().refs;
                delete t[e]
            },
            getName: function() {
                var e = this._currentElement.type,
                    t = this._instance && this._instance.constructor;
                return e.displayName || t && t.displayName || e.name || t && t.name || null
            },
            getPublicInstance: function() {
                var e = this._instance;
                return e instanceof o ? null : e
            },
            _instantiateReactComponent: null
        },
        w = {
            Mixin: E
        };
    e.exports = w
}, function(e, t, n) {
    "use strict";
    var o = n(7),
        r = n(9),
        a = (n(8), {
            HOST: 0,
            COMPOSITE: 1,
            EMPTY: 2,
            getType: function(e) {
                return null === e || e === !1 ? a.EMPTY : r.isValidElement(e) ? "function" == typeof e.type ? a.COMPOSITE : a.HOST : void o("26", e)
            }
        });
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function o(e) {
        l.enqueueUpdate(e)
    }

    function r(e) {
        var t = typeof e;
        if ("object" !== t) return t;
        var n = e.constructor && e.constructor.name || t,
            o = Object.keys(e);
        return o.length > 0 && o.length < 20 ? n + " (keys: " + o.join(", ") + ")" : n
    }

    function a(e, t) {
        var n = s.get(e);
        return n ? n : null
    }
    var i = n(7),
        s = (n(10), n(116)),
        l = (n(55), n(52)),
        u = (n(8), n(11), {
            isMounted: function(e) {
                var t = s.get(e);
                return !!t && !!t._renderedComponent
            },
            enqueueCallback: function(e, t, n) {
                u.validateCallback(t, n);
                var r = a(e);
                return r ? (r._pendingCallbacks ? r._pendingCallbacks.push(t) : r._pendingCallbacks = [t], void o(r)) : null
            },
            enqueueCallbackInternal: function(e, t) {
                e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], o(e)
            },
            enqueueForceUpdate: function(e) {
                var t = a(e, "forceUpdate");
                t && (t._pendingForceUpdate = !0, o(t))
            },
            enqueueReplaceState: function(e, t) {
                var n = a(e, "replaceState");
                n && (n._pendingStateQueue = [t], n._pendingReplaceState = !0, o(n))
            },
            enqueueSetState: function(e, t) {
                var n = a(e, "setState");
                if (n) {
                    var r = n._pendingStateQueue || (n._pendingStateQueue = []);
                    r.push(t), o(n)
                }
            },
            enqueueElementInternal: function(e, t) {
                e._pendingElement = t, o(e)
            },
            validateCallback: function(e, t) {
                e && "function" != typeof e ? i("122", t, r(e)) : void 0
            }
        });
    e.exports = u
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o, l, u) {
        for (var c in e)
            if (e.hasOwnProperty(c)) {
                var p;
                try {
                    "function" != typeof e[c] ? r("84", o || "React class", i[n], c) : void 0, p = e[c](t, c, o, n)
                } catch (d) {
                    p = d
                }
                if (p instanceof Error && !(p.message in s)) {
                    s[p.message] = !0;
                    var f = "";
                    null !== u ? f = a.getStackAddendumByID(u) : null !== l && (f = a.getCurrentStackAddendum(l))
                }
            }
    }
    var r = n(7),
        a = n(102),
        i = n(23),
        s = (n(8), n(11), {});
    e.exports = o
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = null === e || e === !1,
            o = null === t || t === !1;
        if (n || o) return n === o;
        var r = typeof e,
            a = typeof t;
        return "string" === r || "number" === r ? "string" === a || "number" === a : "object" === a && e.type === t.type && e.key === t.key
    }
    e.exports = n
}, function(e, t) {
    "use strict";
    var n, o = {
            injectEmptyComponentFactory: function(e) {
                n = e
            }
        },
        r = {
            create: function(e) {
                return n(e)
            }
        };
    r.injection = o, e.exports = r
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return l ? void 0 : i("111", e.type), new l(e)
    }

    function r(e) {
        return new c(e)
    }

    function a(e) {
        return e instanceof c
    }
    var i = n(7),
        s = n(4),
        l = (n(8), null),
        u = {},
        c = null,
        p = {
            injectGenericComponentClass: function(e) {
                l = e
            },
            injectTextComponentClass: function(e) {
                c = e
            },
            injectComponentClasses: function(e) {
                s(u, e)
            }
        },
        d = {
            createInternalComponent: o,
            createInstanceForText: r,
            isTextComponent: a,
            injection: p
        };
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        var r = e,
            a = void 0 === r[n];
        a && null != t && (r[n] = t)
    }

    function r(e, t) {
        if (null == e) return e;
        var n = {};
        return a(e, o, n), n
    }
    var a = (n(102), n(16), n(14));
    n(11);
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function o(e) {
        this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.useCreateElement = !1
    }
    var r = n(4),
        a = n(6),
        i = n(62),
        s = [],
        l = {
            enqueue: function() {}
        },
        u = {
            getTransactionWrappers: function() {
                return s
            },
            getReactMountReady: function() {
                return l
            },
            destructor: function() {},
            checkpoint: function() {},
            rollback: function() {}
        };
    r(o.prototype, i.Mixin, u), a.addPoolingTo(o), e.exports = o
}, function(e, t) {
    "use strict";

    function n(e, t) {
        return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
    }

    function o(e, t) {
        if (n(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var o = Object.keys(e),
            a = Object.keys(t);
        if (o.length !== a.length) return !1;
        for (var i = 0; i < o.length; i++)
            if (!r.call(t, o[i]) || !n(e[o[i]], t[o[i]])) return !1;
        return !0
    }
    var r = Object.prototype.hasOwnProperty;
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var o = (n(4), n(12)),
        r = (n(11), o);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var o = n(4),
        r = n(75),
        a = n(32),
        i = function(e) {
            this._currentElement = null, this._hostNode = null, this._hostParent = null, this._hostContainerInfo = null, this._domID = null
        };
    o(i.prototype, {
        mountComponent: function(e, t, n, o) {
            var i = n._idCounter++;
            this._domID = i, this._hostParent = t, this._hostContainerInfo = n;
            var s = " react-empty: " + this._domID + " ";
            if (e.useCreateElement) {
                var l = n._ownerDocument,
                    u = l.createComment(s);
                return a.precacheNode(this, u), r(u)
            }
            return e.renderToStaticMarkup ? "" : "<!--" + s + "-->"
        },
        receiveComponent: function() {},
        getHostNode: function() {
            return a.getNodeFromInstance(this)
        },
        unmountComponent: function() {
            a.uncacheNode(this)
        }
    }), e.exports = i
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        "_hostNode" in e ? void 0 : l("33"), "_hostNode" in t ? void 0 : l("33");
        for (var n = 0, o = e; o; o = o._hostParent) n++;
        for (var r = 0, a = t; a; a = a._hostParent) r++;
        for (; n - r > 0;) e = e._hostParent, n--;
        for (; r - n > 0;) t = t._hostParent, r--;
        for (var i = n; i--;) {
            if (e === t) return e;
            e = e._hostParent, t = t._hostParent
        }
        return null
    }

    function r(e, t) {
        "_hostNode" in e ? void 0 : l("35"), "_hostNode" in t ? void 0 : l("35");
        for (; t;) {
            if (t === e) return !0;
            t = t._hostParent
        }
        return !1
    }

    function a(e) {
        return "_hostNode" in e ? void 0 : l("36"), e._hostParent
    }

    function i(e, t, n) {
        for (var o = []; e;) o.push(e), e = e._hostParent;
        var r;
        for (r = o.length; r-- > 0;) t(o[r], !1, n);
        for (r = 0; r < o.length; r++) t(o[r], !0, n)
    }

    function s(e, t, n, r, a) {
        for (var i = e && t ? o(e, t) : null, s = []; e && e !== i;) s.push(e), e = e._hostParent;
        for (var l = []; t && t !== i;) l.push(t), t = t._hostParent;
        var u;
        for (u = 0; u < s.length; u++) n(s[u], !0, r);
        for (u = l.length; u-- > 0;) n(l[u], !1, a)
    }
    var l = n(7);
    n(8);
    e.exports = {
        isAncestor: r,
        getLowestCommonAncestor: o,
        getParentInstance: a,
        traverseTwoPhase: i,
        traverseEnterLeave: s
    }
}, function(e, t, n) {
    "use strict";
    var o = n(7),
        r = n(4),
        a = n(74),
        i = n(75),
        s = n(32),
        l = (n(55), n(80)),
        u = (n(8), n(129), function(e) {
            this._currentElement = e, this._stringText = "" + e, this._hostNode = null, this._hostParent = null, this._domID = null, this._mountIndex = 0, this._closingComment = null, this._commentNodes = null
        });
    r(u.prototype, {
        mountComponent: function(e, t, n, o) {
            var r = n._idCounter++,
                a = " react-text: " + r + " ",
                u = " /react-text ";
            if (this._domID = r, this._hostParent = t, e.useCreateElement) {
                var c = n._ownerDocument,
                    p = c.createComment(a),
                    d = c.createComment(u),
                    f = i(c.createDocumentFragment());
                return i.queueChild(f, i(p)), this._stringText && i.queueChild(f, i(c.createTextNode(this._stringText))), i.queueChild(f, i(d)), s.precacheNode(this, p), this._closingComment = d, f
            }
            var h = l(this._stringText);
            return e.renderToStaticMarkup ? h : "<!--" + a + "-->" + h + "<!--" + u + "-->"
        },
        receiveComponent: function(e, t) {
            if (e !== this._currentElement) {
                this._currentElement = e;
                var n = "" + e;
                if (n !== this._stringText) {
                    this._stringText = n;
                    var o = this.getHostNode();
                    a.replaceDelimitedText(o[0], o[1], n)
                }
            }
        },
        getHostNode: function() {
            var e = this._commentNodes;
            if (e) return e;
            if (!this._closingComment)
                for (var t = s.getNodeFromInstance(this), n = t.nextSibling;;) {
                    if (null == n ? o("67", this._domID) : void 0, 8 === n.nodeType && " /react-text " === n.nodeValue) {
                        this._closingComment = n;
                        break
                    }
                    n = n.nextSibling
                }
            return e = [this._hostNode, this._closingComment], this._commentNodes = e, e
        },
        unmountComponent: function() {
            this._closingComment = null, this._commentNodes = null, s.uncacheNode(this)
        }
    }), e.exports = u
}, function(e, t, n) {
    "use strict";

    function o() {
        this.reinitializeTransaction()
    }
    var r = n(4),
        a = n(52),
        i = n(62),
        s = n(12),
        l = {
            initialize: s,
            close: function() {
                d.isBatchingUpdates = !1
            }
        },
        u = {
            initialize: s,
            close: a.flushBatchedUpdates.bind(a)
        },
        c = [u, l];
    r(o.prototype, i.Mixin, {
        getTransactionWrappers: function() {
            return c
        }
    });
    var p = new o,
        d = {
            isBatchingUpdates: !1,
            batchedUpdates: function(e, t, n, o, r, a) {
                var i = d.isBatchingUpdates;
                d.isBatchingUpdates = !0, i ? e(t, n, o, r, a) : p.perform(e, null, t, n, o, r, a)
            }
        };
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function o(e) {
        for (; e._hostParent;) e = e._hostParent;
        var t = p.getNodeFromInstance(e),
            n = t.parentNode;
        return p.getClosestInstanceFromNode(n)
    }

    function r(e, t) {
        this.topLevelType = e, this.nativeEvent = t, this.ancestors = [];
    }

    function a(e) {
        var t = f(e.nativeEvent),
            n = p.getClosestInstanceFromNode(t),
            r = n;
        do e.ancestors.push(r), r = r && o(r); while (r);
        for (var a = 0; a < e.ancestors.length; a++) n = e.ancestors[a], m._handleTopLevel(e.topLevelType, n, e.nativeEvent, f(e.nativeEvent))
    }

    function i(e) {
        var t = h(window);
        e(t)
    }
    var s = n(4),
        l = n(135),
        u = n(45),
        c = n(6),
        p = n(32),
        d = n(52),
        f = n(63),
        h = n(136);
    s(r.prototype, {
        destructor: function() {
            this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
        }
    }), c.addPoolingTo(r, c.twoArgumentPooler);
    var m = {
        _enabled: !0,
        _handleTopLevel: null,
        WINDOW_HANDLE: u.canUseDOM ? window : null,
        setHandleTopLevel: function(e) {
            m._handleTopLevel = e
        },
        setEnabled: function(e) {
            m._enabled = !!e
        },
        isEnabled: function() {
            return m._enabled
        },
        trapBubbledEvent: function(e, t, n) {
            var o = n;
            return o ? l.listen(o, t, m.dispatchEvent.bind(null, e)) : null
        },
        trapCapturedEvent: function(e, t, n) {
            var o = n;
            return o ? l.capture(o, t, m.dispatchEvent.bind(null, e)) : null
        },
        monitorScrollValue: function(e) {
            var t = i.bind(null, e);
            l.listen(window, "scroll", t)
        },
        dispatchEvent: function(e, t) {
            if (m._enabled) {
                var n = r.getPooled(e, t);
                try {
                    d.batchedUpdates(a, n)
                } finally {
                    r.release(n)
                }
            }
        }
    };
    e.exports = m
}, function(e, t, n) {
    "use strict";
    var o = n(12),
        r = {
            listen: function(e, t, n) {
                return e.addEventListener ? (e.addEventListener(t, n, !1), {
                    remove: function() {
                        e.removeEventListener(t, n, !1)
                    }
                }) : e.attachEvent ? (e.attachEvent("on" + t, n), {
                    remove: function() {
                        e.detachEvent("on" + t, n)
                    }
                }) : void 0
            },
            capture: function(e, t, n) {
                return e.addEventListener ? (e.addEventListener(t, n, !0), {
                    remove: function() {
                        e.removeEventListener(t, n, !0)
                    }
                }) : {
                    remove: o
                }
            },
            registerDefault: function() {}
        };
    e.exports = r
}, function(e, t) {
    "use strict";

    function n(e) {
        return e === window ? {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
        } : {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var o = n(33),
        r = n(39),
        a = n(41),
        i = n(115),
        s = n(20),
        l = n(124),
        u = n(104),
        c = n(125),
        p = n(52),
        d = {
            Component: i.injection,
            Class: s.injection,
            DOMProperty: o.injection,
            EmptyComponent: l.injection,
            EventPluginHub: r.injection,
            EventPluginUtils: a.injection,
            EventEmitter: u.injection,
            HostComponent: c.injection,
            Updates: p.injection
        };
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function o(e) {
        this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = a.getPooled(null), this.useCreateElement = e
    }
    var r = n(4),
        a = n(53),
        i = n(6),
        s = n(104),
        l = n(139),
        u = n(62),
        c = {
            initialize: l.getSelectionInformation,
            close: l.restoreSelection
        },
        p = {
            initialize: function() {
                var e = s.isEnabled();
                return s.setEnabled(!1), e
            },
            close: function(e) {
                s.setEnabled(e)
            }
        },
        d = {
            initialize: function() {
                this.reactMountReady.reset()
            },
            close: function() {
                this.reactMountReady.notifyAll()
            }
        },
        f = [c, p, d],
        h = {
            getTransactionWrappers: function() {
                return f
            },
            getReactMountReady: function() {
                return this.reactMountReady
            },
            checkpoint: function() {
                return this.reactMountReady.checkpoint()
            },
            rollback: function(e) {
                this.reactMountReady.rollback(e)
            },
            destructor: function() {
                a.release(this.reactMountReady), this.reactMountReady = null
            }
        };
    r(o.prototype, u.Mixin, h), i.addPoolingTo(o), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return a(document.documentElement, e)
    }
    var r = n(140),
        a = n(142),
        i = n(89),
        s = n(145),
        l = {
            hasSelectionCapabilities: function(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
            },
            getSelectionInformation: function() {
                var e = s();
                return {
                    focusedElem: e,
                    selectionRange: l.hasSelectionCapabilities(e) ? l.getSelection(e) : null
                }
            },
            restoreSelection: function(e) {
                var t = s(),
                    n = e.focusedElem,
                    r = e.selectionRange;
                t !== n && o(n) && (l.hasSelectionCapabilities(n) && l.setSelection(n, r), i(n))
            },
            getSelection: function(e) {
                var t;
                if ("selectionStart" in e) t = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                    var n = document.selection.createRange();
                    n.parentElement() === e && (t = {
                        start: -n.moveStart("character", -e.value.length),
                        end: -n.moveEnd("character", -e.value.length)
                    })
                } else t = r.getOffsets(e);
                return t || {
                    start: 0,
                    end: 0
                }
            },
            setSelection: function(e, t) {
                var n = t.start,
                    o = t.end;
                if (void 0 === o && (o = n), "selectionStart" in e) e.selectionStart = n, e.selectionEnd = Math.min(o, e.value.length);
                else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                    var a = e.createTextRange();
                    a.collapse(!0), a.moveStart("character", n), a.moveEnd("character", o - n), a.select()
                } else r.setOffsets(e, t)
            }
        };
    e.exports = l
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return e === n && t === o
    }

    function r(e) {
        var t = document.selection,
            n = t.createRange(),
            o = n.text.length,
            r = n.duplicate();
        r.moveToElementText(e), r.setEndPoint("EndToStart", n);
        var a = r.text.length,
            i = a + o;
        return {
            start: a,
            end: i
        }
    }

    function a(e) {
        var t = window.getSelection && window.getSelection();
        if (!t || 0 === t.rangeCount) return null;
        var n = t.anchorNode,
            r = t.anchorOffset,
            a = t.focusNode,
            i = t.focusOffset,
            s = t.getRangeAt(0);
        try {
            s.startContainer.nodeType, s.endContainer.nodeType
        } catch (l) {
            return null
        }
        var u = o(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
            c = u ? 0 : s.toString().length,
            p = s.cloneRange();
        p.selectNodeContents(e), p.setEnd(s.startContainer, s.startOffset);
        var d = o(p.startContainer, p.startOffset, p.endContainer, p.endOffset),
            f = d ? 0 : p.toString().length,
            h = f + c,
            m = document.createRange();
        m.setStart(n, r), m.setEnd(a, i);
        var v = m.collapsed;
        return {
            start: v ? h : f,
            end: v ? f : h
        }
    }

    function i(e, t) {
        var n, o, r = document.selection.createRange().duplicate();
        void 0 === t.end ? (n = t.start, o = n) : t.start > t.end ? (n = t.end, o = t.start) : (n = t.start, o = t.end), r.moveToElementText(e), r.moveStart("character", n), r.setEndPoint("EndToStart", r), r.moveEnd("character", o - n), r.select()
    }

    function s(e, t) {
        if (window.getSelection) {
            var n = window.getSelection(),
                o = e[c()].length,
                r = Math.min(t.start, o),
                a = void 0 === t.end ? r : Math.min(t.end, o);
            if (!n.extend && r > a) {
                var i = a;
                a = r, r = i
            }
            var s = u(e, r),
                l = u(e, a);
            if (s && l) {
                var p = document.createRange();
                p.setStart(s.node, s.offset), n.removeAllRanges(), r > a ? (n.addRange(p), n.extend(l.node, l.offset)) : (p.setEnd(l.node, l.offset), n.addRange(p))
            }
        }
    }
    var l = n(45),
        u = n(141),
        c = n(47),
        p = l.canUseDOM && "selection" in document && !("getSelection" in window),
        d = {
            getOffsets: p ? r : a,
            setOffsets: p ? i : s
        };
    e.exports = d
}, function(e, t) {
    "use strict";

    function n(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function o(e) {
        for (; e;) {
            if (e.nextSibling) return e.nextSibling;
            e = e.parentNode
        }
    }

    function r(e, t) {
        for (var r = n(e), a = 0, i = 0; r;) {
            if (3 === r.nodeType) {
                if (i = a + r.textContent.length, a <= t && i >= t) return {
                    node: r,
                    offset: t - a
                };
                a = i
            }
            r = n(o(r))
        }
    }
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return !(!e || !t) && (e === t || !r(e) && (r(t) ? o(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }
    var r = n(143);
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return r(e) && 3 == e.nodeType
    }
    var r = n(144);
    e.exports = o
}, function(e, t) {
    "use strict";

    function n(e) {
        return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
    }
    e.exports = n
}, function(e, t) {
    "use strict";

    function n() {
        if ("undefined" == typeof document) return null;
        try {
            return document.activeElement || document.body
        } catch (e) {
            return document.body
        }
    }
    e.exports = n
}, function(e, t) {
    "use strict";
    var n = {
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace"
        },
        o = {
            accentHeight: "accent-height",
            accumulate: 0,
            additive: 0,
            alignmentBaseline: "alignment-baseline",
            allowReorder: "allowReorder",
            alphabetic: 0,
            amplitude: 0,
            arabicForm: "arabic-form",
            ascent: 0,
            attributeName: "attributeName",
            attributeType: "attributeType",
            autoReverse: "autoReverse",
            azimuth: 0,
            baseFrequency: "baseFrequency",
            baseProfile: "baseProfile",
            baselineShift: "baseline-shift",
            bbox: 0,
            begin: 0,
            bias: 0,
            by: 0,
            calcMode: "calcMode",
            capHeight: "cap-height",
            clip: 0,
            clipPath: "clip-path",
            clipRule: "clip-rule",
            clipPathUnits: "clipPathUnits",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            contentScriptType: "contentScriptType",
            contentStyleType: "contentStyleType",
            cursor: 0,
            cx: 0,
            cy: 0,
            d: 0,
            decelerate: 0,
            descent: 0,
            diffuseConstant: "diffuseConstant",
            direction: 0,
            display: 0,
            divisor: 0,
            dominantBaseline: "dominant-baseline",
            dur: 0,
            dx: 0,
            dy: 0,
            edgeMode: "edgeMode",
            elevation: 0,
            enableBackground: "enable-background",
            end: 0,
            exponent: 0,
            externalResourcesRequired: "externalResourcesRequired",
            fill: 0,
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            filter: 0,
            filterRes: "filterRes",
            filterUnits: "filterUnits",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            focusable: 0,
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            format: 0,
            from: 0,
            fx: 0,
            fy: 0,
            g1: 0,
            g2: 0,
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            glyphRef: "glyphRef",
            gradientTransform: "gradientTransform",
            gradientUnits: "gradientUnits",
            hanging: 0,
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            ideographic: 0,
            imageRendering: "image-rendering",
            "in": 0,
            in2: 0,
            intercept: 0,
            k: 0,
            k1: 0,
            k2: 0,
            k3: 0,
            k4: 0,
            kernelMatrix: "kernelMatrix",
            kernelUnitLength: "kernelUnitLength",
            kerning: 0,
            keyPoints: "keyPoints",
            keySplines: "keySplines",
            keyTimes: "keyTimes",
            lengthAdjust: "lengthAdjust",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            limitingConeAngle: "limitingConeAngle",
            local: 0,
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            markerHeight: "markerHeight",
            markerUnits: "markerUnits",
            markerWidth: "markerWidth",
            mask: 0,
            maskContentUnits: "maskContentUnits",
            maskUnits: "maskUnits",
            mathematical: 0,
            mode: 0,
            numOctaves: "numOctaves",
            offset: 0,
            opacity: 0,
            operator: 0,
            order: 0,
            orient: 0,
            orientation: 0,
            origin: 0,
            overflow: 0,
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pathLength: "pathLength",
            patternContentUnits: "patternContentUnits",
            patternTransform: "patternTransform",
            patternUnits: "patternUnits",
            pointerEvents: "pointer-events",
            points: 0,
            pointsAtX: "pointsAtX",
            pointsAtY: "pointsAtY",
            pointsAtZ: "pointsAtZ",
            preserveAlpha: "preserveAlpha",
            preserveAspectRatio: "preserveAspectRatio",
            primitiveUnits: "primitiveUnits",
            r: 0,
            radius: 0,
            refX: "refX",
            refY: "refY",
            renderingIntent: "rendering-intent",
            repeatCount: "repeatCount",
            repeatDur: "repeatDur",
            requiredExtensions: "requiredExtensions",
            requiredFeatures: "requiredFeatures",
            restart: 0,
            result: 0,
            rotate: 0,
            rx: 0,
            ry: 0,
            scale: 0,
            seed: 0,
            shapeRendering: "shape-rendering",
            slope: 0,
            spacing: 0,
            specularConstant: "specularConstant",
            specularExponent: "specularExponent",
            speed: 0,
            spreadMethod: "spreadMethod",
            startOffset: "startOffset",
            stdDeviation: "stdDeviation",
            stemh: 0,
            stemv: 0,
            stitchTiles: "stitchTiles",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            string: 0,
            stroke: 0,
            strokeDasharray: "stroke-dasharray",
            strokeDashoffset: "stroke-dashoffset",
            strokeLinecap: "stroke-linecap",
            strokeLinejoin: "stroke-linejoin",
            strokeMiterlimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            surfaceScale: "surfaceScale",
            systemLanguage: "systemLanguage",
            tableValues: "tableValues",
            targetX: "targetX",
            targetY: "targetY",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            textLength: "textLength",
            to: 0,
            transform: 0,
            u1: 0,
            u2: 0,
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicode: 0,
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            values: 0,
            vectorEffect: "vector-effect",
            version: 0,
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            viewBox: "viewBox",
            viewTarget: "viewTarget",
            visibility: 0,
            widths: 0,
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            x: 0,
            xHeight: "x-height",
            x1: 0,
            x2: 0,
            xChannelSelector: "xChannelSelector",
            xlinkActuate: "xlink:actuate",
            xlinkArcrole: "xlink:arcrole",
            xlinkHref: "xlink:href",
            xlinkRole: "xlink:role",
            xlinkShow: "xlink:show",
            xlinkTitle: "xlink:title",
            xlinkType: "xlink:type",
            xmlBase: "xml:base",
            xmlLang: "xml:lang",
            xmlSpace: "xml:space",
            y: 0,
            y1: 0,
            y2: 0,
            yChannelSelector: "yChannelSelector",
            z: 0,
            zoomAndPan: "zoomAndPan"
        },
        r = {
            Properties: {},
            DOMAttributeNamespaces: {
                xlinkActuate: n.xlink,
                xlinkArcrole: n.xlink,
                xlinkHref: n.xlink,
                xlinkRole: n.xlink,
                xlinkShow: n.xlink,
                xlinkTitle: n.xlink,
                xlinkType: n.xlink,
                xmlBase: n.xml,
                xmlLang: n.xml,
                xmlSpace: n.xml
            },
            DOMAttributeNames: {}
        };
    Object.keys(o).forEach(function(e) {
        r.Properties[e] = 0, o[e] && (r.DOMAttributeNames[e] = o[e])
    }), e.exports = r
}, function(e, t, n) {
    "use strict";

    function o(e) {
        if ("selectionStart" in e && u.hasSelectionCapabilities(e)) return {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        if (window.getSelection) {
            var t = window.getSelection();
            return {
                anchorNode: t.anchorNode,
                anchorOffset: t.anchorOffset,
                focusNode: t.focusNode,
                focusOffset: t.focusOffset
            }
        }
        if (document.selection) {
            var n = document.selection.createRange();
            return {
                parentElement: n.parentElement(),
                text: n.text,
                top: n.boundingTop,
                left: n.boundingLeft
            }
        }
    }

    function r(e, t) {
        if (w || null == g || g !== p()) return null;
        var n = o(g);
        if (!E || !h(E, n)) {
            E = n;
            var r = c.getPooled(y.select, b, e, t);
            return r.type = "select", r.target = g, i.accumulateTwoPhaseDispatches(r), r
        }
        return null
    }
    var a = n(37),
        i = n(38),
        s = n(45),
        l = n(32),
        u = n(139),
        c = n(49),
        p = n(145),
        d = n(65),
        f = n(24),
        h = n(128),
        m = a.topLevelTypes,
        v = s.canUseDOM && "documentMode" in document && document.documentMode <= 11,
        y = {
            select: {
                phasedRegistrationNames: {
                    bubbled: f({
                        onSelect: null
                    }),
                    captured: f({
                        onSelectCapture: null
                    })
                },
                dependencies: [m.topBlur, m.topContextMenu, m.topFocus, m.topKeyDown, m.topMouseDown, m.topMouseUp, m.topSelectionChange]
            }
        },
        g = null,
        b = null,
        E = null,
        w = !1,
        C = !1,
        x = f({
            onSelect: null
        }),
        T = {
            eventTypes: y,
            extractEvents: function(e, t, n, o) {
                if (!C) return null;
                var a = t ? l.getNodeFromInstance(t) : window;
                switch (e) {
                    case m.topFocus:
                        (d(a) || "true" === a.contentEditable) && (g = a, b = t, E = null);
                        break;
                    case m.topBlur:
                        g = null, b = null, E = null;
                        break;
                    case m.topMouseDown:
                        w = !0;
                        break;
                    case m.topContextMenu:
                    case m.topMouseUp:
                        return w = !1, r(n, o);
                    case m.topSelectionChange:
                        if (v) break;
                    case m.topKeyDown:
                    case m.topKeyUp:
                        return r(n, o)
                }
                return null
            },
            didPutListener: function(e, t, n) {
                t === x && (C = !0)
            }
        };
    e.exports = T
}, function(e, t, n) {
    "use strict";
    var o = n(7),
        r = n(37),
        a = n(135),
        i = n(38),
        s = n(32),
        l = n(149),
        u = n(150),
        c = n(49),
        p = n(151),
        d = n(152),
        f = n(68),
        h = n(155),
        m = n(156),
        v = n(157),
        y = n(69),
        g = n(158),
        b = n(12),
        E = n(153),
        w = (n(8), n(24)),
        C = r.topLevelTypes,
        x = {
            abort: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onAbort: !0
                    }),
                    captured: w({
                        onAbortCapture: !0
                    })
                }
            },
            animationEnd: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onAnimationEnd: !0
                    }),
                    captured: w({
                        onAnimationEndCapture: !0
                    })
                }
            },
            animationIteration: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onAnimationIteration: !0
                    }),
                    captured: w({
                        onAnimationIterationCapture: !0
                    })
                }
            },
            animationStart: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onAnimationStart: !0
                    }),
                    captured: w({
                        onAnimationStartCapture: !0
                    })
                }
            },
            blur: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onBlur: !0
                    }),
                    captured: w({
                        onBlurCapture: !0
                    })
                }
            },
            canPlay: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onCanPlay: !0
                    }),
                    captured: w({
                        onCanPlayCapture: !0
                    })
                }
            },
            canPlayThrough: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onCanPlayThrough: !0
                    }),
                    captured: w({
                        onCanPlayThroughCapture: !0
                    })
                }
            },
            click: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onClick: !0
                    }),
                    captured: w({
                        onClickCapture: !0
                    })
                }
            },
            contextMenu: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onContextMenu: !0
                    }),
                    captured: w({
                        onContextMenuCapture: !0
                    })
                }
            },
            copy: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onCopy: !0
                    }),
                    captured: w({
                        onCopyCapture: !0
                    })
                }
            },
            cut: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onCut: !0
                    }),
                    captured: w({
                        onCutCapture: !0
                    })
                }
            },
            doubleClick: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onDoubleClick: !0
                    }),
                    captured: w({
                        onDoubleClickCapture: !0
                    })
                }
            },
            drag: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onDrag: !0
                    }),
                    captured: w({
                        onDragCapture: !0
                    })
                }
            },
            dragEnd: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onDragEnd: !0
                    }),
                    captured: w({
                        onDragEndCapture: !0
                    })
                }
            },
            dragEnter: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onDragEnter: !0
                    }),
                    captured: w({
                        onDragEnterCapture: !0
                    })
                }
            },
            dragExit: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onDragExit: !0
                    }),
                    captured: w({
                        onDragExitCapture: !0
                    })
                }
            },
            dragLeave: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onDragLeave: !0
                    }),
                    captured: w({
                        onDragLeaveCapture: !0
                    })
                }
            },
            dragOver: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onDragOver: !0
                    }),
                    captured: w({
                        onDragOverCapture: !0
                    })
                }
            },
            dragStart: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onDragStart: !0
                    }),
                    captured: w({
                        onDragStartCapture: !0
                    })
                }
            },
            drop: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onDrop: !0
                    }),
                    captured: w({
                        onDropCapture: !0
                    })
                }
            },
            durationChange: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onDurationChange: !0
                    }),
                    captured: w({
                        onDurationChangeCapture: !0
                    })
                }
            },
            emptied: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onEmptied: !0
                    }),
                    captured: w({
                        onEmptiedCapture: !0
                    })
                }
            },
            encrypted: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onEncrypted: !0
                    }),
                    captured: w({
                        onEncryptedCapture: !0
                    })
                }
            },
            ended: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onEnded: !0
                    }),
                    captured: w({
                        onEndedCapture: !0
                    })
                }
            },
            error: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onError: !0
                    }),
                    captured: w({
                        onErrorCapture: !0
                    })
                }
            },
            focus: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onFocus: !0
                    }),
                    captured: w({
                        onFocusCapture: !0
                    })
                }
            },
            input: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onInput: !0
                    }),
                    captured: w({
                        onInputCapture: !0
                    })
                }
            },
            invalid: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onInvalid: !0
                    }),
                    captured: w({
                        onInvalidCapture: !0
                    })
                }
            },
            keyDown: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onKeyDown: !0
                    }),
                    captured: w({
                        onKeyDownCapture: !0
                    })
                }
            },
            keyPress: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onKeyPress: !0
                    }),
                    captured: w({
                        onKeyPressCapture: !0
                    })
                }
            },
            keyUp: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onKeyUp: !0
                    }),
                    captured: w({
                        onKeyUpCapture: !0
                    })
                }
            },
            load: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onLoad: !0
                    }),
                    captured: w({
                        onLoadCapture: !0
                    })
                }
            },
            loadedData: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onLoadedData: !0
                    }),
                    captured: w({
                        onLoadedDataCapture: !0
                    })
                }
            },
            loadedMetadata: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onLoadedMetadata: !0
                    }),
                    captured: w({
                        onLoadedMetadataCapture: !0
                    })
                }
            },
            loadStart: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onLoadStart: !0
                    }),
                    captured: w({
                        onLoadStartCapture: !0
                    })
                }
            },
            mouseDown: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onMouseDown: !0
                    }),
                    captured: w({
                        onMouseDownCapture: !0
                    })
                }
            },
            mouseMove: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onMouseMove: !0
                    }),
                    captured: w({
                        onMouseMoveCapture: !0
                    })
                }
            },
            mouseOut: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onMouseOut: !0
                    }),
                    captured: w({
                        onMouseOutCapture: !0
                    })
                }
            },
            mouseOver: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onMouseOver: !0
                    }),
                    captured: w({
                        onMouseOverCapture: !0
                    })
                }
            },
            mouseUp: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onMouseUp: !0
                    }),
                    captured: w({
                        onMouseUpCapture: !0
                    })
                }
            },
            paste: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onPaste: !0
                    }),
                    captured: w({
                        onPasteCapture: !0
                    })
                }
            },
            pause: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onPause: !0
                    }),
                    captured: w({
                        onPauseCapture: !0
                    })
                }
            },
            play: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onPlay: !0
                    }),
                    captured: w({
                        onPlayCapture: !0
                    })
                }
            },
            playing: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onPlaying: !0
                    }),
                    captured: w({
                        onPlayingCapture: !0
                    })
                }
            },
            progress: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onProgress: !0
                    }),
                    captured: w({
                        onProgressCapture: !0
                    })
                }
            },
            rateChange: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onRateChange: !0
                    }),
                    captured: w({
                        onRateChangeCapture: !0
                    })
                }
            },
            reset: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onReset: !0
                    }),
                    captured: w({
                        onResetCapture: !0
                    })
                }
            },
            scroll: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onScroll: !0
                    }),
                    captured: w({
                        onScrollCapture: !0
                    })
                }
            },
            seeked: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onSeeked: !0
                    }),
                    captured: w({
                        onSeekedCapture: !0
                    })
                }
            },
            seeking: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onSeeking: !0
                    }),
                    captured: w({
                        onSeekingCapture: !0
                    })
                }
            },
            stalled: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onStalled: !0
                    }),
                    captured: w({
                        onStalledCapture: !0
                    })
                }
            },
            submit: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onSubmit: !0
                    }),
                    captured: w({
                        onSubmitCapture: !0
                    })
                }
            },
            suspend: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onSuspend: !0
                    }),
                    captured: w({
                        onSuspendCapture: !0
                    })
                }
            },
            timeUpdate: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onTimeUpdate: !0
                    }),
                    captured: w({
                        onTimeUpdateCapture: !0
                    })
                }
            },
            touchCancel: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onTouchCancel: !0
                    }),
                    captured: w({
                        onTouchCancelCapture: !0
                    })
                }
            },
            touchEnd: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onTouchEnd: !0
                    }),
                    captured: w({
                        onTouchEndCapture: !0
                    })
                }
            },
            touchMove: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onTouchMove: !0
                    }),
                    captured: w({
                        onTouchMoveCapture: !0
                    })
                }
            },
            touchStart: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onTouchStart: !0
                    }),
                    captured: w({
                        onTouchStartCapture: !0
                    })
                }
            },
            transitionEnd: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onTransitionEnd: !0
                    }),
                    captured: w({
                        onTransitionEndCapture: !0
                    })
                }
            },
            volumeChange: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onVolumeChange: !0
                    }),
                    captured: w({
                        onVolumeChangeCapture: !0
                    })
                }
            },
            waiting: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onWaiting: !0
                    }),
                    captured: w({
                        onWaitingCapture: !0
                    })
                }
            },
            wheel: {
                phasedRegistrationNames: {
                    bubbled: w({
                        onWheel: !0
                    }),
                    captured: w({
                        onWheelCapture: !0
                    })
                }
            }
        },
        T = {
            topAbort: x.abort,
            topAnimationEnd: x.animationEnd,
            topAnimationIteration: x.animationIteration,
            topAnimationStart: x.animationStart,
            topBlur: x.blur,
            topCanPlay: x.canPlay,
            topCanPlayThrough: x.canPlayThrough,
            topClick: x.click,
            topContextMenu: x.contextMenu,
            topCopy: x.copy,
            topCut: x.cut,
            topDoubleClick: x.doubleClick,
            topDrag: x.drag,
            topDragEnd: x.dragEnd,
            topDragEnter: x.dragEnter,
            topDragExit: x.dragExit,
            topDragLeave: x.dragLeave,
            topDragOver: x.dragOver,
            topDragStart: x.dragStart,
            topDrop: x.drop,
            topDurationChange: x.durationChange,
            topEmptied: x.emptied,
            topEncrypted: x.encrypted,
            topEnded: x.ended,
            topError: x.error,
            topFocus: x.focus,
            topInput: x.input,
            topInvalid: x.invalid,
            topKeyDown: x.keyDown,
            topKeyPress: x.keyPress,
            topKeyUp: x.keyUp,
            topLoad: x.load,
            topLoadedData: x.loadedData,
            topLoadedMetadata: x.loadedMetadata,
            topLoadStart: x.loadStart,
            topMouseDown: x.mouseDown,
            topMouseMove: x.mouseMove,
            topMouseOut: x.mouseOut,
            topMouseOver: x.mouseOver,
            topMouseUp: x.mouseUp,
            topPaste: x.paste,
            topPause: x.pause,
            topPlay: x.play,
            topPlaying: x.playing,
            topProgress: x.progress,
            topRateChange: x.rateChange,
            topReset: x.reset,
            topScroll: x.scroll,
            topSeeked: x.seeked,
            topSeeking: x.seeking,
            topStalled: x.stalled,
            topSubmit: x.submit,
            topSuspend: x.suspend,
            topTimeUpdate: x.timeUpdate,
            topTouchCancel: x.touchCancel,
            topTouchEnd: x.touchEnd,
            topTouchMove: x.touchMove,
            topTouchStart: x.touchStart,
            topTransitionEnd: x.transitionEnd,
            topVolumeChange: x.volumeChange,
            topWaiting: x.waiting,
            topWheel: x.wheel
        };
    for (var _ in T) T[_].dependencies = [_];
    var M = w({
            onClick: null
        }),
        R = {},
        P = {
            eventTypes: x,
            extractEvents: function(e, t, n, r) {
                var a = T[e];
                if (!a) return null;
                var s;
                switch (e) {
                    case C.topAbort:
                    case C.topCanPlay:
                    case C.topCanPlayThrough:
                    case C.topDurationChange:
                    case C.topEmptied:
                    case C.topEncrypted:
                    case C.topEnded:
                    case C.topError:
                    case C.topInput:
                    case C.topInvalid:
                    case C.topLoad:
                    case C.topLoadedData:
                    case C.topLoadedMetadata:
                    case C.topLoadStart:
                    case C.topPause:
                    case C.topPlay:
                    case C.topPlaying:
                    case C.topProgress:
                    case C.topRateChange:
                    case C.topReset:
                    case C.topSeeked:
                    case C.topSeeking:
                    case C.topStalled:
                    case C.topSubmit:
                    case C.topSuspend:
                    case C.topTimeUpdate:
                    case C.topVolumeChange:
                    case C.topWaiting:
                        s = c;
                        break;
                    case C.topKeyPress:
                        if (0 === E(n)) return null;
                    case C.topKeyDown:
                    case C.topKeyUp:
                        s = d;
                        break;
                    case C.topBlur:
                    case C.topFocus:
                        s = p;
                        break;
                    case C.topClick:
                        if (2 === n.button) return null;
                    case C.topContextMenu:
                    case C.topDoubleClick:
                    case C.topMouseDown:
                    case C.topMouseMove:
                    case C.topMouseOut:
                    case C.topMouseOver:
                    case C.topMouseUp:
                        s = f;
                        break;
                    case C.topDrag:
                    case C.topDragEnd:
                    case C.topDragEnter:
                    case C.topDragExit:
                    case C.topDragLeave:
                    case C.topDragOver:
                    case C.topDragStart:
                    case C.topDrop:
                        s = h;
                        break;
                    case C.topTouchCancel:
                    case C.topTouchEnd:
                    case C.topTouchMove:
                    case C.topTouchStart:
                        s = m;
                        break;
                    case C.topAnimationEnd:
                    case C.topAnimationIteration:
                    case C.topAnimationStart:
                        s = l;
                        break;
                    case C.topTransitionEnd:
                        s = v;
                        break;
                    case C.topScroll:
                        s = y;
                        break;
                    case C.topWheel:
                        s = g;
                        break;
                    case C.topCopy:
                    case C.topCut:
                    case C.topPaste:
                        s = u
                }
                s ? void 0 : o("86", e);
                var b = s.getPooled(a, t, n, r);
                return i.accumulateTwoPhaseDispatches(b), b
            },
            didPutListener: function(e, t, n) {
                if (t === M) {
                    var o = e._rootNodeID,
                        r = s.getNodeFromInstance(e);
                    R[o] || (R[o] = a.listen(r, "click", b))
                }
            },
            willDeleteListener: function(e, t) {
                if (t === M) {
                    var n = e._rootNodeID;
                    R[n].remove(), delete R[n]
                }
            }
        };
    e.exports = P
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(49),
        a = {
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        };
    r.augmentClass(o, a), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(49),
        a = {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        };
    r.augmentClass(o, a), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(69),
        a = {
            relatedTarget: null
        };
    r.augmentClass(o, a), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(69),
        a = n(153),
        i = n(154),
        s = n(71),
        l = {
            key: i,
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: s,
            charCode: function(e) {
                return "keypress" === e.type ? a(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? a(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        };
    r.augmentClass(o, l), e.exports = o
}, function(e, t) {
    "use strict";

    function n(e) {
        var t, n = e.keyCode;
        return "charCode" in e ? (t = e.charCode, 0 === t && 13 === n && (t = 13)) : t = n, t >= 32 || 13 === t ? t : 0
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e) {
        if (e.key) {
            var t = a[e.key] || e.key;
            if ("Unidentified" !== t) return t
        }
        if ("keypress" === e.type) {
            var n = r(e);
            return 13 === n ? "Enter" : String.fromCharCode(n)
        }
        return "keydown" === e.type || "keyup" === e.type ? i[e.keyCode] || "Unidentified" : ""
    }
    var r = n(153),
        a = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        i = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(68),
        a = {
            dataTransfer: null
        };
    r.augmentClass(o, a), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(69),
        a = n(71),
        i = {
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: a
        };
    r.augmentClass(o, i), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(49),
        a = {
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        };
    r.augmentClass(o, a), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        return r.call(this, e, t, n, o)
    }
    var r = n(68),
        a = {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        };
    r.augmentClass(o, a), e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        for (var n = Math.min(e.length, t.length), o = 0; o < n; o++)
            if (e.charAt(o) !== t.charAt(o)) return o;
        return e.length === t.length ? -1 : n
    }

    function r(e) {
        return e ? e.nodeType === N ? e.documentElement : e.firstChild : null
    }

    function a(e) {
        return e.getAttribute && e.getAttribute(k) || ""
    }

    function i(e, t, n, o, r) {
        var a;
        if (E.logTopLevelRenders) {
            var i = e._currentElement.props,
                s = i.type;
            a = "React mount: " + ("string" == typeof s ? s : s.displayName || s.name), console.time(a)
        }
        var l = C.mountComponent(e, n, null, y(e, t), r);
        a && console.timeEnd(a), e._renderedComponent._topLevelWrapper = e, j._mountImageIntoNode(l, t, e, o, n)
    }

    function s(e, t, n, o) {
        var r = T.ReactReconcileTransaction.getPooled(!n && g.useCreateElement);
        r.perform(i, null, e, t, r, n, o), T.ReactReconcileTransaction.release(r)
    }

    function l(e, t, n) {
        for (C.unmountComponent(e, n), t.nodeType === N && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild)
    }

    function u(e) {
        var t = r(e);
        if (t) {
            var n = v.getInstanceFromNode(t);
            return !(!n || !n._hostParent)
        }
    }

    function c(e) {
        var t = r(e),
            n = t && v.getInstanceFromNode(t);
        return n && !n._hostParent ? n : null
    }

    function p(e) {
        var t = c(e);
        return t ? t._hostContainerInfo._topLevelWrapper : null
    }
    var d = n(7),
        f = n(75),
        h = n(33),
        m = n(104),
        v = (n(10), n(32)),
        y = n(160),
        g = n(161),
        b = n(9),
        E = n(54),
        w = (n(55), n(162)),
        C = n(59),
        x = n(121),
        T = n(52),
        _ = n(19),
        M = n(118),
        R = (n(8), n(77)),
        P = n(123),
        k = (n(11), h.ID_ATTRIBUTE_NAME),
        O = h.ROOT_ATTRIBUTE_NAME,
        S = 1,
        N = 9,
        A = 11,
        D = {},
        I = 1,
        L = function() {
            this.rootID = I++
        };
    L.prototype.isReactComponent = {}, L.prototype.render = function() {
        return this.props
    };
    var j = {
        TopLevelWrapper: L,
        _instancesByReactRootID: D,
        scrollMonitor: function(e, t) {
            t()
        },
        _updateRootComponent: function(e, t, n, o) {
            return j.scrollMonitor(n, function() {
                x.enqueueElementInternal(e, t), o && x.enqueueCallbackInternal(e, o)
            }), e
        },
        _renderNewRootComponent: function(e, t, n, o) {
            !t || t.nodeType !== S && t.nodeType !== N && t.nodeType !== A ? d("37") : void 0, m.ensureScrollValueMonitoring();
            var r = M(e);
            T.batchedUpdates(s, r, t, n, o);
            var a = r._instance.rootID;
            return D[a] = r, r
        },
        renderSubtreeIntoContainer: function(e, t, n, o) {
            return null == e || null == e._reactInternalInstance ? d("38") : void 0, j._renderSubtreeIntoContainer(e, t, n, o)
        },
        _renderSubtreeIntoContainer: function(e, t, n, o) {
            x.validateCallback(o, "ReactDOM.render"), b.isValidElement(t) ? void 0 : d("39", "string" == typeof t ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof t ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != t && void 0 !== t.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
            var i = b(L, null, null, null, null, null, t),
                s = p(n);
            if (s) {
                var l = s._currentElement,
                    c = l.props;
                if (P(c, t)) {
                    var f = s._renderedComponent.getPublicInstance(),
                        h = o && function() {
                            o.call(f)
                        };
                    return j._updateRootComponent(s, i, n, h), f
                }
                j.unmountComponentAtNode(n)
            }
            var m = r(n),
                v = m && !!a(m),
                y = u(n),
                g = v && !s && !y,
                E = j._renderNewRootComponent(i, n, g, null != e ? e._reactInternalInstance._processChildContext(e._reactInternalInstance._context) : _)._renderedComponent.getPublicInstance();
            return o && o.call(E), E
        },
        render: function(e, t, n) {
            return j._renderSubtreeIntoContainer(null, e, t, n)
        },
        unmountComponentAtNode: function(e) {
            !e || e.nodeType !== S && e.nodeType !== N && e.nodeType !== A ? d("40") : void 0;
            var t = p(e);
            if (!t) {
                u(e), 1 === e.nodeType && e.hasAttribute(O);
                return !1
            }
            return delete D[t._instance.rootID], T.batchedUpdates(l, t, e, !1), !0
        },
        _mountImageIntoNode: function(e, t, n, a, i) {
            if (!t || t.nodeType !== S && t.nodeType !== N && t.nodeType !== A ? d("41") : void 0, a) {
                var s = r(t);
                if (w.canReuseMarkup(e, s)) return void v.precacheNode(n, s);
                var l = s.getAttribute(w.CHECKSUM_ATTR_NAME);
                s.removeAttribute(w.CHECKSUM_ATTR_NAME);
                var u = s.outerHTML;
                s.setAttribute(w.CHECKSUM_ATTR_NAME, l);
                var c = e,
                    p = o(c, u),
                    h = " (client) " + c.substring(p - 20, p + 20) + "\n (server) " + u.substring(p - 20, p + 20);
                t.nodeType === N ? d("42", h) : void 0
            }
            if (t.nodeType === N ? d("43") : void 0, i.useCreateElement) {
                for (; t.lastChild;) t.removeChild(t.lastChild);
                f.insertTreeBefore(t, e, null)
            } else R(t, e), v.precacheNode(n, t.firstChild)
        }
    };
    e.exports = j
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        var n = {
            _topLevelWrapper: e,
            _idCounter: 1,
            _ownerDocument: t ? t.nodeType === r ? t : t.ownerDocument : null,
            _node: t,
            _tag: t ? t.nodeName.toLowerCase() : null,
            _namespaceURI: t ? t.namespaceURI : null
        };
        return n
    }
    var r = (n(129), 9);
    e.exports = o
}, function(e, t) {
    "use strict";
    var n = {
        useCreateElement: !0
    };
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var o = n(163),
        r = /\/?>/,
        a = /^<\!\-\-/,
        i = {
            CHECKSUM_ATTR_NAME: "data-react-checksum",
            addChecksumToMarkup: function(e) {
                var t = o(e);
                return a.test(e) ? e : e.replace(r, " " + i.CHECKSUM_ATTR_NAME + '="' + t + '"$&')
            },
            canReuseMarkup: function(e, t) {
                var n = t.getAttribute(i.CHECKSUM_ATTR_NAME);
                n = n && parseInt(n, 10);
                var r = o(e);
                return r === n
            }
        };
    e.exports = i
}, function(e, t) {
    "use strict";

    function n(e) {
        for (var t = 1, n = 0, r = 0, a = e.length, i = a & -4; r < i;) {
            for (var s = Math.min(r + 4096, i); r < s; r += 4) n += (t += e.charCodeAt(r)) + (t += e.charCodeAt(r + 1)) + (t += e.charCodeAt(r + 2)) + (t += e.charCodeAt(r + 3));
            t %= o, n %= o
        }
        for (; r < a; r++) n += t += e.charCodeAt(r);
        return t %= o, n %= o, t | n << 16
    }
    var o = 65521;
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = i.get(e);
        return t ? (t = s(t), t ? a.getNodeFromInstance(t) : null) : void("function" == typeof e.render ? r("44") : r("45", Object.keys(e)))
    }
    var r = n(7),
        a = (n(10), n(32)),
        i = n(116),
        s = n(165);
    n(8), n(11);
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        for (var t;
            (t = e._renderedNodeType) === r.COMPOSITE;) e = e._renderedComponent;
        return t === r.HOST ? e._renderedComponent : t === r.EMPTY ? null : void 0;
    }
    var r = n(120);
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var o = n(159);
    e.exports = o.renderSubtreeIntoContainer
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        l = n(2),
        u = o(l),
        c = n(168),
        p = o(c),
        d = n(196),
        f = o(d),
        h = n(191),
        m = n(172),
        v = o(m),
        y = function(e) {
            function t(e) {
                r(this, t);
                var n = a(this, Object.getPrototypeOf(t).call(this, e));
                return n.handleToggle = function() {
                    n.setState({
                        open: !n.state.open
                    }), ga("send", "event", "Components", "toggleSidebar")
                }, n.componentChanged = function(e) {
                    v["default"].emit("selectedEntityComponentChanged", e.detail)
                }, n.state = {
                    open: !1,
                    entity: e.entity
                }, n
            }
            return i(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this,
                        t = new f["default"]('[data-action="copy-entity-to-clipboard"]', {
                            text: function(t) {
                                return (0, h.getClipboardRepresentation)(e.state.entity)
                            }
                        });
                    t.on("error", function(e) {}), v["default"].on("componentRemoved", function(t) {
                        e.forceUpdate()
                    }), v["default"].on("componentAdded", function(t) {
                        e.forceUpdate()
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.state.entity !== e.entity && (this.state.entity && this.state.entity.removeEventListener("componentchanged", this.componentChanged), e.entity && e.entity.addEventListener("componentchanged", this.componentChanged), this.setState({
                        entity: e.entity
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.entity;
                    if (e) {
                        var t = u["default"].createElement("div", null, u["default"].createElement("a", {
                                href: "#",
                                title: "Copy entity HTML to clipboard",
                                "data-action": "copy-entity-to-clipboard",
                                className: "button fa fa-clipboard",
                                onClick: function(e) {
                                    return e.stopPropagation()
                                }
                            })),
                            n = "<" + e.tagName.toLowerCase() + ">";
                        return u["default"].createElement("div", {
                            id: "sidebar"
                        }, u["default"].createElement("div", {
                            className: "sidebar-title"
                        }, u["default"].createElement("code", null, n), t), u["default"].createElement(p["default"], {
                            entity: this.state.entity
                        }))
                    }
                    return u["default"].createElement("div", null)
                }
            }]), t
        }(u["default"].Component);
    y.propTypes = {
        entity: u["default"].PropTypes.object
    }, t["default"] = y
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        l = n(2),
        u = o(l),
        c = n(169),
        p = o(c),
        d = n(174),
        f = o(d),
        h = n(192),
        m = function(e) {
            function t() {
                var e, n, o, i;
                r(this, t);
                for (var s = arguments.length, l = Array(s), u = 0; u < s; u++) l[u] = arguments[u];
                return n = o = a(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))), o.refresh = function() {
                    o.forceUpdate()
                }, i = n, a(o, i)
            }
            return i(t, e), s(t, [{
                key: "render",
                value: function() {
                    var e = this.props.entity,
                        t = e ? e.components : {},
                        n = Object.keys(t).filter(function(e) {
                            return h.DEFAULT_COMPONENTS.indexOf(e) === -1
                        }).sort().map(function(n) {
                            return u["default"].createElement(f["default"], {
                                entity: e,
                                key: n,
                                name: n,
                                component: t[n]
                            })
                        });
                    return u["default"].createElement("div", {
                        className: "components"
                    }, u["default"].createElement(h.CommonComponents, {
                        entity: e
                    }), u["default"].createElement(p["default"], {
                        entity: e
                    }), n)
                }
            }]), t
        }(u["default"].Component);
    m.propTypes = {
        entity: u["default"].PropTypes.object
    }, t["default"] = m
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e, t) {
        for (var n in e.components)
            if (n.substr(0, n.indexOf("__")) === t) return !0
    }

    function l(e, t) {
        for (var n = 2; e.components[t + "__" + n];) n++;
        return n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        c = n(2),
        p = o(c),
        d = n(170),
        f = o(d),
        h = n(172),
        m = o(h),
        v = function(e) {
            function t() {
                var e, n, o, i;
                r(this, t);
                for (var u = arguments.length, c = Array(u), p = 0; p < u; p++) c[p] = arguments[p];
                return n = o = a(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), o.addComponent = function() {
                    var e = o.props.entity,
                        t = o.refs.select.value;
                    AFRAME.components[t].multiple && s(e, t) && (t = t + "__" + l(e, t)), e.setAttribute(t, ""), m["default"].emit("componentAdded", {
                        entity: e,
                        component: t
                    }), ga("send", "event", "Components", "addComponent", t)
                }, i = n, a(o, i)
            }
            return i(t, e), u(t, [{
                key: "renderComponentOptions",
                value: function() {
                    var e = Object.keys(this.props.entity.components);
                    return Object.keys(AFRAME.components).filter(function(t) {
                        return AFRAME.components[t].multiple || e.indexOf(t) === -1
                    }).sort().map(function(e) {
                        return p["default"].createElement("option", {
                            key: e,
                            value: e
                        }, e)
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.entity;
                    return e ? p["default"].createElement(f["default"], null, p["default"].createElement("div", {
                        className: "collapsible-header"
                    }, p["default"].createElement("span", null, "COMPONENTS")), p["default"].createElement("div", {
                        className: "collapsible-content"
                    }, p["default"].createElement("div", {
                        className: "row"
                    }, p["default"].createElement("span", {
                        className: "text"
                    }, "Add"), p["default"].createElement("span", {
                        className: "value"
                    }, p["default"].createElement("select", {
                        ref: "select"
                    }, this.renderComponentOptions()), p["default"].createElement("a", {
                        className: "button fa fa-plus-circle",
                        onClick: this.addComponent
                    }))))) : p["default"].createElement("div", null)
                }
            }]), t
        }(p["default"].Component);
    v.propTypes = {
        entity: p["default"].PropTypes.object
    }, t["default"] = v
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        l = n(2),
        u = o(l),
        c = n(171),
        p = o(c),
        d = function(e) {
            function t(e) {
                r(this, t);
                var n = a(this, Object.getPrototypeOf(t).call(this, e));
                return n.toggleVisibility = function() {
                    n.setState({
                        collapsed: !n.state.collapsed
                    }), ga("send", "event", "Components", "collapse")
                }, n.state = {
                    collapsed: n.props.collapsed
                }, n
            }
            return i(t, e), s(t, [{
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.props !== e || this.state !== t
                }
            }, {
                key: "render",
                value: function() {
                    var e = (0, p["default"])({
                            collapsible: !0,
                            component: !0,
                            collapsed: this.state.collapsed
                        }),
                        t = (0, p["default"])({
                            content: !0,
                            hide: this.state.collapsed
                        });
                    return u["default"].createElement("div", {
                        className: e
                    }, u["default"].createElement("div", {
                        className: "static",
                        onClick: this.toggleVisibility
                    }, u["default"].createElement("div", {
                        className: "collapse-button"
                    }), this.props.children[0]), u["default"].createElement("div", {
                        className: t
                    }, this.props.children[1]))
                }
            }]), t
        }(u["default"].Component);
    d.propTypes = {
        collapsed: u["default"].PropTypes.bool,
        children: u["default"].PropTypes.oneOfType([u["default"].PropTypes.array, u["default"].PropTypes.element]).isRequired
    }, d.defaultProps = {
        collapsed: !1
    }, t["default"] = d
}, function(e, t, n) {
    var o, r;
    /*!
    	  Copyright (c) 2016 Jed Watson.
    	  Licensed under the MIT License (MIT), see
    	  http://jedwatson.github.io/classnames
    	*/
    ! function() {
        "use strict";

        function n() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var o = arguments[t];
                if (o) {
                    var r = typeof o;
                    if ("string" === r || "number" === r) e.push(o);
                    else if (Array.isArray(o)) e.push(n.apply(null, o));
                    else if ("object" === r)
                        for (var i in o) a.call(o, i) && o[i] && e.push(i)
                }
            }
            return e.join(" ")
        }
        var a = {}.hasOwnProperty;
        "undefined" != typeof e && e.exports ? e.exports = n : (o = [], r = function() {
            return n
        }.apply(t, o), !(void 0 !== r && (e.exports = r)))
    }()
}, function(e, t, n) {
    "use strict";

    function o() {}
    var r = n(173).EventEmitter,
        a = new r;
    a.setMaxListeners(0), o.prototype.on = function() {
        return a.on.apply(a, arguments), this
    }, o.prototype.emit = function() {
        return a.emit.apply(a, arguments), this
    }, o.prototype.removeListener = function() {
        return a.removeListener.apply(a, arguments), this
    }, e.exports = new o
}, function(e, t) {
    function n() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function o(e) {
        return "function" == typeof e
    }

    function r(e) {
        return "number" == typeof e
    }

    function a(e) {
        return "object" == typeof e && null !== e
    }

    function i(e) {
        return void 0 === e
    }
    e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
        if (!r(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, n.prototype.emit = function(e) {
        var t, n, r, s, l, u;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
            if (t = arguments[1], t instanceof Error) throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c
        }
        if (n = this._events[e], i(n)) return !1;
        if (o(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
        } else if (a(n))
            for (s = Array.prototype.slice.call(arguments, 1), u = n.slice(), r = u.length, l = 0; l < r; l++) u[l].apply(this, s);
        return !0
    }, n.prototype.addListener = function(e, t) {
        var r;
        if (!o(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, o(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (r = i(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
        function n() {
            this.removeListener(e, n), r || (r = !0, t.apply(this, arguments))
        }
        if (!o(t)) throw TypeError("listener must be a function");
        var r = !1;
        return n.listener = t, this.on(e, n), this
    }, n.prototype.removeListener = function(e, t) {
        var n, r, i, s;
        if (!o(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (n = this._events[e], i = n.length, r = -1, n === t || o(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (a(n)) {
            for (s = i; s-- > 0;)
                if (n[s] === t || n[s].listener && n[s].listener === t) {
                    r = s;
                    break
                }
            if (r < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, n.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (n = this._events[e], o(n)) this.removeListener(e, n);
        else if (n)
            for (; n.length;) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this
    }, n.prototype.listeners = function(e) {
        var t;
        return t = this._events && this._events[e] ? o(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, n.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (o(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, n.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        l = n(2),
        u = o(l),
        c = n(175),
        p = o(c),
        d = n(170),
        f = o(d),
        h = n(196),
        m = o(h),
        v = n(195),
        y = n(172),
        g = o(y),
        b = AFRAME.schema.isSingleProperty,
        E = function(e) {
            function t(e) {
                r(this, t);
                var n = a(this, Object.getPrototypeOf(t).call(this, e));
                return n.removeComponent = function(e) {
                    var t = n.props.name;
                    e.stopPropagation(), confirm("Do you really want to remove component `" + t + "`?") && (n.props.entity.removeAttribute(t), g["default"].emit("componentRemoved", {
                        entity: n.props.entity,
                        component: t
                    }), ga("send", "event", "Components", "removeComponent", t))
                }, n.renderPropertyRows = function() {
                    var e = n.props.component;
                    if (b(e.schema)) {
                        var t = n.props.name,
                            o = AFRAME.components[t].schema;
                        return u["default"].createElement(p["default"], {
                            key: t,
                            name: t,
                            schema: o,
                            data: e.data,
                            componentname: t,
                            entity: n.props.entity
                        })
                    }
                    return Object.keys(e.schema).map(function(t) {
                        return u["default"].createElement(p["default"], {
                            key: t,
                            name: t,
                            schema: e.schema[t],
                            data: e.data[t],
                            componentname: n.props.name,
                            entity: n.props.entity
                        })
                    })
                }, n.state = {
                    entity: n.props.entity,
                    name: n.props.name
                }, n
            }
            return i(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this,
                        t = new m["default"]('[data-action="copy-component-to-clipboard"]', {
                            text: function(t) {
                                var n = t.getAttribute("data-component").toLowerCase();
                                return (0, v.getClipboardRepresentation)(e.state.entity, n)
                            }
                        });
                    t.on("error", function(e) {}), g["default"].on("selectedEntityComponentChanged", function(t) {
                        t.name === e.props.name && e.forceUpdate()
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.state.entity !== e.entity && this.setState({
                        entity: e.entity
                    }), this.state.name !== e.name && this.setState({
                        name: e.name
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.name,
                        t = "";
                    e.indexOf("__") !== -1 && (t = e, e = e.substr(0, e.indexOf("__")));
                    var n = (0, v.getComponentDocsHtmlLink)(e.toLowerCase());
                    return u["default"].createElement(f["default"], null, u["default"].createElement("div", {
                        className: "collapsible-header"
                    }, u["default"].createElement("span", {
                        className: "component-title",
                        title: t || e
                    }, u["default"].createElement("span", null, t || e), " ", n), u["default"].createElement("div", null, u["default"].createElement("a", {
                        title: "Copy to clipboard",
                        "data-action": "copy-component-to-clipboard",
                        "data-component": t || e,
                        className: "flat-button",
                        onClick: function(e) {
                            return e.stopPropagation()
                        }
                    }, "copy html"), u["default"].createElement("a", {
                        title: "Remove component",
                        className: "flat-button",
                        onClick: this.removeComponent
                    }, "remove"))), u["default"].createElement("div", {
                        className: "collapsible-content"
                    }, this.renderPropertyRows()))
                }
            }]), t
        }(u["default"].Component);
    E.propTypes = {
        component: u["default"].PropTypes.any,
        entity: u["default"].PropTypes.object,
        name: u["default"].PropTypes.string
    }, t["default"] = E
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        u = n(2),
        c = o(u),
        p = n(176),
        d = o(p),
        f = n(177),
        h = o(f),
        m = n(178),
        v = o(m),
        y = n(179),
        g = o(y),
        b = n(180),
        E = o(b),
        w = n(181),
        C = o(w),
        x = n(182),
        T = o(x),
        _ = n(190),
        M = o(_),
        R = n(191),
        P = n(195),
        k = function(e) {
            function t(e) {
                r(this, t);
                var n = a(this, Object.getPrototypeOf(t).call(this, e));
                return n.id = e.componentname + ":" + e.name, n
            }
            return i(t, e), l(t, [{
                key: "getWidget",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = "material" === t.componentname && ("envMap" === t.name || "src" === t.name),
                        o = t.schema.type,
                        r = (0, d["default"])(function() {
                            ga("send", "event", "Components", "changeProperty", e.id)
                        }),
                        a = {
                            componentname: t.componentname,
                            entity: t.entity,
                            name: t.name,
                            onChange: function() {
                                R.updateEntity.apply(this, arguments), r()
                            },
                            value: t.data
                        },
                        i = {
                            min: t.schema.hasOwnProperty("min") ? t.schema.min : -(1 / 0),
                            max: t.schema.hasOwnProperty("max") ? t.schema.max : 1 / 0
                        };
                    if (t.schema.oneOf && t.schema.oneOf.length > 0) return c["default"].createElement(C["default"], s({}, a, {
                        options: t.schema.oneOf
                    }));
                    if ("map" === o || n) return c["default"].createElement(T["default"], a);
                    switch (o) {
                        case "number":
                            return c["default"].createElement(E["default"], s({}, a, i));
                        case "int":
                            return c["default"].createElement(E["default"], s({}, a, i, {
                                precision: 0
                            }));
                        case "vec3":
                            return c["default"].createElement(M["default"], a);
                        case "color":
                            return c["default"].createElement(v["default"], a);
                        case "boolean":
                            return c["default"].createElement(h["default"], a);
                        default:
                            return c["default"].createElement(g["default"], a)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = "type: " + e.schema.type + " value: " + JSON.stringify(e.data),
                        n = e.showHelp ? (0, P.getComponentDocsHtmlLink)(e.name) : "";
                    return c["default"].createElement("div", {
                        className: "row"
                    }, c["default"].createElement("label", {
                        htmlFor: this.id,
                        className: "text",
                        title: t
                    }, e.name, n), this.getWidget(e.schema.type))
                }
            }]), t
        }(c["default"].Component);
    k.propTypes = {
        componentname: c["default"].PropTypes.string.isRequired,
        id: c["default"].PropTypes.string,
        name: c["default"].PropTypes.string.isRequired,
        schema: c["default"].PropTypes.object.isRequired
    }, t["default"] = k
}, function(e, t) {
    function n(e, t, n) {
        function o(t) {
            var n = m,
                o = v;
            return m = v = void 0, T = t, g = e.apply(o, n)
        }

        function a(e) {
            return T = e, b = setTimeout(c, t), _ ? o(e) : g
        }

        function i(e) {
            var n = e - x,
                o = e - T,
                r = t - n;
            return M ? w(r, y - o) : r
        }

        function u(e) {
            var n = e - x,
                o = e - T;
            return !x || n >= t || n < 0 || M && o >= y
        }

        function c() {
            var e = C();
            return u(e) ? p(e) : void(b = setTimeout(c, i(e)))
        }

        function p(e) {
            return clearTimeout(b), b = void 0, R && m ? o(e) : (m = v = void 0, g)
        }

        function d() {
            void 0 !== b && clearTimeout(b), x = T = 0, m = v = b = void 0
        }

        function f() {
            return void 0 === b ? g : p(C())
        }

        function h() {
            var e = C(),
                n = u(e);
            if (m = arguments, v = this, x = e, n) {
                if (void 0 === b) return a(x);
                if (M) return clearTimeout(b), b = setTimeout(c, t), o(x)
            }
            return void 0 === b && (b = setTimeout(c, t)), g
        }
        var m, v, y, g, b, x = 0,
            T = 0,
            _ = !1,
            M = !1,
            R = !0;
        if ("function" != typeof e) throw new TypeError(l);
        return t = s(t) || 0, r(n) && (_ = !!n.leading, M = "maxWait" in n, y = M ? E(s(n.maxWait) || 0, t) : y, R = "trailing" in n ? !!n.trailing : R), h.cancel = d, h.flush = f, h
    }

    function o(e) {
        var t = r(e) ? b.call(e) : "";
        return t == c || t == p
    }

    function r(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }

    function a(e) {
        return !!e && "object" == typeof e
    }

    function i(e) {
        return "symbol" == typeof e || a(e) && b.call(e) == d
    }

    function s(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return u;
        if (r(e)) {
            var t = o(e.valueOf) ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(f, "");
        var n = m.test(e);
        return n || v.test(e) ? y(e.slice(2), n ? 2 : 8) : h.test(e) ? u : +e
    }
    var l = "Expected a function",
        u = NaN,
        c = "[object Function]",
        p = "[object GeneratorFunction]",
        d = "[object Symbol]",
        f = /^\s+|\s+$/g,
        h = /^[-+]0x[0-9a-f]+$/i,
        m = /^0b[01]+$/i,
        v = /^0o[0-7]+$/i,
        y = parseInt,
        g = Object.prototype,
        b = g.toString,
        E = Math.max,
        w = Math.min,
        C = Date.now;
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        s = n(2),
        l = function(e) {
            function t(e) {
                o(this, t);
                var n = r(this, Object.getPrototypeOf(t).call(this, e));
                return n.onChange = function(e) {
                    var t = e.target.checked;
                    n.setState({
                        value: t
                    }), n.props.onChange && n.props.onChange(n.props.entity, n.props.componentname, n.props.name, t)
                }, n.state = {
                    value: n.props.value
                }, n
            }
            return a(t, e), i(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.value !== this.state.value && this.setState({
                        value: e.value
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.componentname + "." + this.props.name;
                    return s.createElement("input", {
                        id: e,
                        ref: "input",
                        type: "checkbox",
                        checked: this.state.value,
                        value: this.state.value,
                        onChange: this.onChange
                    })
                }
            }]), t
        }(s.Component);
    l.propTypes = {
        componentname: s.PropTypes.string.isRequired,
        entity: s.PropTypes.object,
        name: s.PropTypes.string.isRequired,
        onChange: s.PropTypes.func,
        value: s.PropTypes.bool
    }, l.defaultProps = {
        value: !1
    }, t["default"] = l
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function i(e) {
        return 4 === e.length && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]), e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        l = n(2),
        u = function(e) {
            function t(e) {
                o(this, t);
                var n = r(this, Object.getPrototypeOf(t).call(this, e));
                return n.onChange = function(e) {
                    var t = e.target.value;
                    n.setState({
                        value: t
                    }), n.props.onChange && n.props.onChange(n.props.entity, n.props.componentname, n.props.name, t)
                }, n.state = {
                    value: i(n.props.value) || ""
                }, n
            }
            return a(t, e), s(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.value !== this.state.value && this.setState({
                        value: i(e.value)
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return l.createElement("input", {
                        type: "color",
                        className: "color",
                        value: this.state.value,
                        onChange: this.onChange
                    })
                }
            }]), t
        }(l.Component);
    u.propTypes = {
        componentname: l.PropTypes.string.isRequired,
        entity: l.PropTypes.object,
        name: l.PropTypes.string.isRequired,
        onChange: l.PropTypes.func,
        value: l.PropTypes.string
    }, u.defaultProps = {
        value: "#ffffff"
    }, t["default"] = u
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        s = n(2),
        l = function(e) {
            function t(e) {
                o(this, t);
                var n = r(this, Object.getPrototypeOf(t).call(this, e));
                return n.onChange = function(e) {
                    var t = e.target.value;
                    n.setState({
                        value: t
                    }), n.props.onChange && n.props.onChange(n.props.entity, n.props.componentname, n.props.name, t)
                }, n.state = {
                    value: n.props.value || ""
                }, n
            }
            return a(t, e), i(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.value !== this.state.value && this.setState({
                        value: e.value
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return s.createElement("input", {
                        type: "text",
                        className: "string",
                        value: this.state.value || "",
                        onChange: this.onChange
                    })
                }
            }]), t
        }(s.Component);
    l.propTypes = {
        componentname: s.PropTypes.string,
        entity: s.PropTypes.object,
        name: s.PropTypes.string.isRequired,
        onChange: s.PropTypes.func,
        value: s.PropTypes.string
    }, t["default"] = l
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        l = n(2),
        u = o(l),
        c = function(e) {
            function t(e) {
                r(this, t);
                var n = a(this, Object.getPrototypeOf(t).call(this, e));
                return n.onMouseMove = function(e) {
                    var t = parseFloat(n.value),
                        o = [e.clientX, e.clientY],
                        r = o[0] - n.prevPointer[0] - (o[1] - n.prevPointer[1]);
                    if (n.distance += r, !(Math.abs(r) <= 2)) {
                        var a = n.onMouseDownValue + n.distance / (e.shiftKey ? 5 : 50) * n.props.step;
                        a = Math.min(n.props.max, Math.max(n.props.min, a)), t !== a && n.setValue(a), n.prevPointer = [e.clientX, e.clientY]
                    }
                }, n.onMouseDown = function(e) {
                    e.preventDefault(), n.distance = 0, n.onMouseDownValue = n.state.value, n.prevPointer = [e.clientX, e.clientY], document.addEventListener("mousemove", n.onMouseMove, !1), document.addEventListener("mouseup", n.onMouseUp, !1)
                }, n.onMouseUp = function(e) {
                    document.removeEventListener("mousemove", n.onMouseMove, !1), document.removeEventListener("mouseup", n.onMouseUp, !1), Math.abs(n.distance) < 2 && (n.refs.input.focus(), n.refs.input.select())
                }, n.onBlur = function() {
                    n.setValue(parseFloat(n.refs.input.value)), n.setState({
                        "class": ""
                    })
                }, n.onChange = function(e) {
                    n.setState({
                        value: e.target.value,
                        displayValue: e.target.value
                    })
                }, n.onKeyDown = function(e) {
                    e.stopPropagation(), 13 === e.keyCode && (n.setValue(parseFloat(n.refs.input.value)), n.refs.input.blur())
                }, n.state = {
                    value: n.props.value,
                    displayValue: n.props.value.toFixed(n.props.precision)
                }, n
            }
            return i(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                    this.distance = 0, this.onMouseDownValue = 0, this.prevPointer = [0, 0], this.setValue(this.props.value), this.onBlur()
                }
            }, {
                key: "setValue",
                value: function(e) {
                    e !== this.state.value && void 0 !== e && (e = 0 === this.props.precision ? parseInt(e) : parseFloat(e), e < this.props.min && (e = this.props.min), e > this.props.max && (e = this.props.max), this.setState({
                        value: e,
                        displayValue: e.toFixed(this.props.precision)
                    }), this.props.onChange && this.props.onChange(this.props.entity, this.props.componentname, this.props.name, e))
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.value !== this.state.value && this.setState({
                        value: e.value,
                        displayValue: e.value.toFixed(this.props.precision)
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return u["default"].createElement("input", {
                        ref: "input",
                        className: "number",
                        type: "text",
                        value: this.state.displayValue,
                        onKeyDown: this.onKeyDown,
                        onChange: this.onChange,
                        onMouseDown: this.onMouseDown,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur
                    })
                }
            }]), t
        }(u["default"].Component);
    c.propTypes = {
        componentname: u["default"].PropTypes.string,
        entity: u["default"].PropTypes.object,
        max: u["default"].PropTypes.number,
        min: u["default"].PropTypes.number,
        name: u["default"].PropTypes.string,
        onChange: u["default"].PropTypes.func,
        precision: u["default"].PropTypes.number,
        step: u["default"].PropTypes.number,
        value: u["default"].PropTypes.number
    }, c.defaultProps = {
        min: -(1 / 0),
        max: 1 / 0,
        value: 0,
        precision: 2,
        step: 1
    }, t["default"] = c
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        s = n(2),
        l = function(e) {
            function t(e) {
                o(this, t);
                var n = r(this, Object.getPrototypeOf(t).call(this, e));
                return n.onChange = function(e) {
                    var t = e.target.value;
                    n.setState({
                        value: t
                    }), n.props.onChange && n.props.onChange(n.props.entity, n.props.componentname, n.props.name, t)
                }, n.renderOptions = function() {
                    return n.props.options.map(function(e) {
                        return s.createElement("option", {
                            key: e,
                            value: e
                        }, e)
                    })
                }, n.state = {
                    value: n.props.value || ""
                }, n
            }
            return a(t, e), i(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.value !== this.state.value && this.setState({
                        value: e.value
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return s.createElement("select", {
                        value: this.state.value,
                        onChange: this.onChange
                    }, this.renderOptions())
                }
            }]), t
        }(s.Component);
    l.propTypes = {
        componentname: s.PropTypes.string.isRequired,
        entity: s.PropTypes.object,
        name: s.PropTypes.string.isRequired,
        onChange: s.PropTypes.func,
        options: s.PropTypes.array.isRequired,
        value: s.PropTypes.string
    }, t["default"] = l
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e) {
        if (e) {
            var t = e.toString().match(/.*\/(.+?)\./);
            if (t && t.length > 1) return t[1]
        }
        return ""
    }

    function l(e, t, n) {
        var o = null;
        switch (e) {
            case "img":
                o = document.createElement("img"), o.id = t, o.src = n
        }
        o && document.getElementsByTagName("a-assets")[0].appendChild(o)
    }

    function u(e) {
        var t = s(e),
            n = document.querySelector("a-assets > img[src='" + e + "']");
        if (n) t = n.id;
        else {
            if (isNaN(parseInt(t[0], 10)) || (t = "i" + t), document.getElementById(t)) {
                for (var o = 1; document.getElementById(t + "_" + o);) o++;
                t += "_" + o
            }
            l("img", t, e)
        }
        return t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        p = n(2),
        d = o(p),
        f = n(183),
        h = n(172),
        m = function(e) {
            function t(e) {
                r(this, t);
                var n = a(this, Object.getPrototypeOf(t).call(this, e));
                return n.notifyChanged = function(e) {
                    n.props.onChange && n.props.onChange(n.props.entity, n.props.componentname, n.props.name, e), n.setState({
                        value: e
                    })
                }, n.onChange = function(e) {
                    var t = e.target.value;
                    n.setState({
                        value: t
                    }), n.notifyChanged(t)
                }, n.removeMap = function(e) {
                    n.setValue(""), n.notifyChanged("")
                }, n.openDialog = function() {
                    h.emit("openTexturesModal", function(e) {
                        if (e) {
                            var t = e.value;
                            if ("asset" !== e.type) {
                                var o = u(e.src);
                                t = "#" + o
                            }
                            n.props.onChange && n.props.onChange(n.props.entity, n.props.componentname, n.props.name, t), n.setValue(t)
                        }
                    })
                }, n.state = {
                    value: n.props.value || ""
                }, n
            }
            return i(t, e), c(t, [{
                key: "componentDidMount",
                value: function() {
                    this.setValue(this.props.value || "")
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.value !== this.state.value && this.setValue(e.value)
                }
            }, {
                key: "setValue",
                value: function(e) {
                    function t(e) {
                        var t = e.src.replace(/^.*[\\\/]/, "");
                        if (void 0 !== e && e.width > 0) {
                            a.title = t;
                            var n = a.width / e.width;
                            i.drawImage(e, 0, 0, e.width * n, e.height * n)
                        } else i.clearRect(0, 0, a.width, a.height)
                    }

                    function n(e) {
                        var n = e.image;
                        t(n)
                    }

                    function o(e) {
                        for (var t in f.sceneEl.systems.material.textureCache)
                            if (JSON.parse(t).src === e) return f.sceneEl.systems.material.textureCache[t];
                        return null
                    }
                    var r, a = this.refs.canvas,
                        i = a.getContext("2d");
                    r = "#" === e[0] ? e.length > 1 && document.querySelector(e) && document.querySelector(e).getAttribute("src") : AFRAME.utils.srcLoader.parseUrl(e);
                    var s = o(e),
                        l = "hidden";
                    if (s) s.then(n), l = "#" === e[0] ? "fa fa-link" : "fa fa-external-link";
                    else if (r) {
                        l = "#" === e[0] ? "fa fa-link" : "fa fa-external-link";
                        var u = new Image;
                        u.addEventListener("load", function() {
                            t(u)
                        }, !1), u.src = r
                    } else i.clearRect(0, 0, a.width, a.height);
                    this.setState({
                        value: e,
                        valueType: l
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return d["default"].createElement("span", {
                        className: "texture"
                    }, d["default"].createElement("span", {
                        className: this.state.valueType
                    }), d["default"].createElement("canvas", {
                        ref: "canvas",
                        width: "32",
                        height: "16",
                        title: this.props.mapName
                    }), d["default"].createElement("input", {
                        className: "map_value string",
                        type: "text",
                        value: this.state.value,
                        onChange: this.onChange
                    }), d["default"].createElement("a", {
                        onClick: this.removeMap,
                        className: "button fa fa-times"
                    }))
                }
            }]), t
        }(d["default"].Component);
    m.propTypes = {
        componentname: d["default"].PropTypes.string,
        entity: d["default"].PropTypes.object,
        mapName: d["default"].PropTypes.string,
        name: d["default"].PropTypes.string.isRequired,
        onChange: d["default"].PropTypes.func,
        value: d["default"].PropTypes.string
    }, m.defaultProps = {
        value: "",
        mapName: "nomap",
        dataURL: ""
    }, t["default"] = m
}, function(e, t, n) {
    "use strict";

    function o() {
        this.opened = !1, "complete" === document.readyState || "loaded" === document.readyState ? this.onDomLoaded() : document.addEventListener("DOMContentLoaded", this.onDomLoaded.bind(this))
    }
    var r = n(172),
        a = n(184),
        i = n(188),
        s = n(189);
    o.prototype = {
        onDomLoaded: function() {
            this.componentLoader = new i, this.shaderLoader = new s, this.sceneEl = document.querySelector("a-scene"), this.sceneEl.hasLoaded ? this.onSceneLoaded() : this.sceneEl.addEventListener("loaded", this.onSceneLoaded.bind(this))
        },
        onSceneLoaded: function() {
            var e = this;
            this.container = document.querySelector(".a-canvas"), this.currentCameraEl = document.querySelector("[camera]"), this.currentCameraEl.hasAttribute("data-aframe-default-camera") && (this.currentCameraEl.removeAttribute("data-aframe-default-camera"), this.currentCameraEl.setAttribute("data-aframe-inspector", "default-camera")), this.inspectorCameraEl = document.createElement("a-entity"), this.inspectorCameraEl.isInspector = !0, this.inspectorCameraEl.addEventListener("loaded", function(t) {
                e.EDITOR_CAMERA = e.inspectorCameraEl.getObject3D("camera"), e.initUI()
            }), this.inspectorCameraEl.setAttribute("camera", {
                far: 1e4,
                fov: 50,
                near: 1,
                active: !0
            }), document.querySelector("a-scene").appendChild(this.inspectorCameraEl)
        },
        initUI: function() {
            function e(e) {
                for (var t = 0; t < e.children.length; t++)
                    for (var o = e.children[t], r = 0; r < o.children.length; r++) n.addObject(o.children[r])
            }
            var t = this;
            this.EDITOR_CAMERA.position.set(20, 10, 20), this.EDITOR_CAMERA.lookAt(new THREE.Vector3), this.EDITOR_CAMERA.updateMatrixWorld(), this.camera = this.EDITOR_CAMERA, this.initEvents(), this.selected = null, window.dispatchEvent(new Event("inspector-loaded")), this.scene = this.sceneEl.object3D, this.helpers = {}, this.sceneHelpers = new THREE.Scene, this.sceneHelpers.visible = !0, this.inspectorActive = !1, this.viewport = new a(this), r.emit("windowResize");
            var n = this;
            e(this.sceneEl.object3D), document.addEventListener("model-loaded", function(e) {
                t.addObject(e.target.object3D)
            }), document.addEventListener("selectedEntityComponentChanged", function(e) {
                t.addObject(e.target.object3D)
            }), this.scene.add(this.sceneHelpers), this.open()
        },
        removeObject: function(e) {
            e.traverse(this.removeHelper.bind(this))
        },
        addHelper: function() {
            var e = new THREE.SphereBufferGeometry(2, 4, 2),
                t = new THREE.MeshBasicMaterial({
                    color: 16711680,
                    visible: !1
                });
            return function(n) {
                var o;
                if (n instanceof THREE.Camera) o = new THREE.CameraHelper(n, 1);
                else if (n instanceof THREE.PointLight) o = new THREE.PointLightHelper(n, 1);
                else if (n instanceof THREE.DirectionalLight) o = new THREE.DirectionalLightHelper(n, 1);
                else if (n instanceof THREE.SpotLight) o = new THREE.SpotLightHelper(n, 1);
                else if (n instanceof THREE.HemisphereLight) o = new THREE.HemisphereLightHelper(n, 1);
                else {
                    if (!(n instanceof THREE.SkinnedMesh)) return;
                    o = new THREE.SkeletonHelper(n)
                }
                var a = new THREE.Mesh(e, t);
                a.name = "picker", a.userData.object = n, o.add(a), this.sceneHelpers.add(o), this.helpers[n.id] = o, r.emit("helperAdded", o)
            }
        }(),
        removeHelper: function(e) {
            if (void 0 !== this.helpers[e.id]) {
                var t = this.helpers[e.id];
                t.parent.remove(t), delete this.helpers[e.id], r.emit("helperRemoved", t)
            }
        },
        selectEntity: function(e, t) {
            this.selectedEntity = e, e ? this.select(e.object3D) : this.select(null), void 0 === t && r.emit("entitySelected", e)
        },
        initEvents: function() {
            var e = this;
            window.addEventListener("keydown", function(t) {
                var n = 73 === t.keyCode && t.ctrlKey && t.altKey,
                    o = 27 === t.keyCode;
                return o ? void e.close() : void(n && e.toggle())
            }), r.on("entitySelected", function(t) {
                e.selectEntity(t, !1)
            }), r.on("inspectorModeChanged", function(t) {
                e.inspectorActive = t, e.sceneHelpers.visible = e.inspectorActive
            }), r.on("createNewEntity", function(t) {
                e.createNewEntity(t)
            }), r.on("domModified", function(t) {
                t && t.forEach(function(t) {
                    "childList" === t.type && Array.prototype.slice.call(t.removedNodes).forEach(function(t) {
                        e.selectedEntity === t && e.selectEntity(null)
                    })
                })
            })
        },
        selectById: function(e) {
            return e === this.camera.id ? void this.select(this.camera) : void this.select(this.scene.getObjectById(e, !0))
        },
        select: function(e) {
            this.selected !== e && (this.selected = e, r.emit("objectSelected", e))
        },
        deselect: function() {
            this.select(null)
        },
        clear: function() {
            this.camera.copy(this.EDITOR_CAMERA), this.deselect(), document.querySelector("a-scene").innerHTML = "", r.emit("inspectorCleared")
        },
        createNewEntity: function(e) {
            var t = this,
                n = document.createElement(e.element);
            for (var o in e.components) n.setAttribute(o, e.components[o]);
            return n.addEventListener("loaded", function() {
                t.addEntity(n)
            }), this.sceneEl.appendChild(n), n
        },
        addEntity: function(e) {
            this.addObject(e.object3D), this.selectEntity(e)
        },
        toggle: function() {
            this.opened ? this.close() : this.open()
        },
        open: function() {
            this.opened = !0, r.emit("inspectorModeChanged", !0), this.sceneEl.pause(),
                this.sceneEl.hasAttribute("embedded") && (this.sceneEl.removeAttribute("embedded"), this.sceneEl.setAttribute("aframe-inspector-removed-embedded")), document.body.classList.add("aframe-inspector-opened"), this.sceneEl.resize()
        },
        close: function() {
            this.opened = !1, r.emit("inspectorModeChanged", !1), this.sceneEl.play(), this.sceneEl.hasAttribute("aframe-inspector-removed-embedded") && (this.sceneEl.setAttribute("embedded", ""), this.sceneEl.removeAttribute("aframe-inspector-removed-embedded")), document.body.classList.remove("aframe-inspector-opened"), this.sceneEl.resize()
        },
        addObject: function(e) {
            var t = this;
            e.traverse(function(e) {
                e.el && e.el.isInspector || t.addHelper(e)
            }), r.emit("objectAdded", e), r.emit("sceneGraphChanged")
        }
    }, e.exports = new o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e) {
        function t(t) {
            for (var n = 0; n < t.children.length; n++) {
                var o = t.children[n];
                void 0 !== e.helpers[o.id] && e.helpers[o.id].update()
            }
        }

        function n(e, t) {
            return P.set(2 * e.x - 1, -(2 * e.y) + 1), R.setFromCamera(P, w), R.intersectObjects(t)
        }

        function o(e, t, n) {
            var o = e.getBoundingClientRect();
            return [(t - o.left) / o.width, (n - o.top) / o.height]
        }

        function r() {
            if (0 === k.distanceTo(O)) {
                var t = n(O, b);
                if (t.length > 0) {
                    var o = t[0].object;
                    void 0 !== o.userData.object ? e.selectEntity(o.userData.object.el) : e.selectEntity(o.el)
                } else e.selectEntity(null)
            }
        }

        function a(t) {
            if (!(t instanceof CustomEvent)) {
                t.preventDefault();
                var n = o(e.container, t.clientX, t.clientY);
                k.fromArray(n), document.addEventListener("mouseup", i, !1)
            }
        }

        function i(t) {
            if (!(t instanceof CustomEvent)) {
                var n = o(e.container, t.clientX, t.clientY);
                O.fromArray(n), r(), document.removeEventListener("mouseup", i, !1)
            }
        }

        function s(t) {
            var n = t.changedTouches[0],
                r = o(e.container, n.clientX, n.clientY);
            k.fromArray(r), document.addEventListener("touchend", l, !1)
        }

        function l(t) {
            var n = t.changedTouches[0],
                a = o(e.container, n.clientX, n.clientY);
            O.fromArray(a), r(), document.removeEventListener("touchend", l, !1)
        }

        function f(t) {
            var r = o(e.container, t.clientX, t.clientY);
            S.fromArray(r);
            var a = n(S, b);
            if (a.length > 0) {
                var i = a[0];
                c.emit("objectFocused", i.object)
            }
        }

        function h() {
            e.container.removeEventListener("mousedown", a), e.container.removeEventListener("touchstart", s), e.container.removeEventListener("dblclick", f), N.enabled = !1
        }

        function m() {
            e.container.addEventListener("mousedown", a, !1), e.container.addEventListener("touchstart", s, !1), e.container.addEventListener("dblclick", f, !1), N.enabled = !0
        }
        var v = {
                dom: e.container
            },
            y = e.currentCameraEl;
        e.sceneEl.addEventListener("camera-set-active", function(t) {
            e.enabled && (t.detail.cameraEl !== e.inspectorCameraEl && (y = t.detail.cameraEl), e.inspectorCameraEl.setAttribute("camera", "active", "true"))
        });
        var g = e.sceneHelpers,
            b = [],
            E = new THREE.GridHelper(30, 1);
        g.add(E);
        var w = e.inspectorCameraEl.getObject3D("camera"),
            C = new THREE.BoxHelper;
        C.material.depthTest = !1, C.material.transparent = !0, C.material.color.set(2075378), C.visible = !1, g.add(C);
        var x = null,
            T = null,
            _ = null,
            M = new THREE.TransformControls(w, e.container);
        M.addEventListener("change", function() {
            var e = M.object;
            if (void 0 !== e) {
                C.update(e), t(e);
                var n = M.getMode();
                switch (n) {
                    case "translate":
                        e.el.setAttribute("position", {
                            x: (0, u.getNumber)(e.position.x),
                            y: (0, u.getNumber)(e.position.y),
                            z: (0, u.getNumber)(e.position.z)
                        });
                        break;
                    case "rotate":
                        e.el.setAttribute("rotation", {
                            x: THREE.Math.radToDeg((0, u.getNumber)(e.rotation.x)),
                            y: THREE.Math.radToDeg((0, u.getNumber)(e.rotation.y)),
                            z: THREE.Math.radToDeg((0, u.getNumber)(e.rotation.z))
                        });
                        break;
                    case "scale":
                        e.el.setAttribute("scale", {
                            x: (0, u.getNumber)(e.scale.x),
                            y: (0, u.getNumber)(e.scale.y),
                            z: (0, u.getNumber)(e.scale.z)
                        })
                }
                c.emit("refreshSidebarObject3D", e), p(n)
            }
        }), M.addEventListener("mouseDown", function() {
            var e = M.object;
            x = e.position.clone(), T = e.rotation.clone(), _ = e.scale.clone(), N.enabled = !1
        }), M.addEventListener("mouseUp", function() {
            var e = M.object;
            if (null !== e) switch (M.getMode()) {
                case "translate":
                    !x.equals(e.position);
                    break;
                case "rotate":
                    !T.equals(e.rotation);
                    break;
                case "scale":
                    !_.equals(e.scale)
            }
            N.enabled = !0
        }), g.add(M), c.on("objectChanged", function() {
            e.selectedEntity.object3DMap.mesh && C.update(e.selected)
        });
        var R = new THREE.Raycaster,
            P = new THREE.Vector2,
            k = new THREE.Vector2,
            O = new THREE.Vector2,
            S = new THREE.Vector2,
            N = new THREE.EditorControls(w, e.container);
        m(), N.addEventListener("change", function() {
            M.update(), d()
        }), c.on("inspectorCleared", function() {
            N.center.set(0, 0, 0)
        }), c.on("transformModeChanged", function(e) {
            M.setMode(e)
        }), c.on("snapChanged", function(e) {
            M.setTranslationSnap(e)
        }), c.on("spaceChanged", function(e) {
            M.setSpace(e)
        }), c.on("objectSelected", function(e) {
            C.visible = !1, M.detach(), e && e.el && (e.el.getObject3D("mesh") && (C.update(e), C.visible = !0), M.attach(e))
        }), c.on("objectFocused", function(e) {
            N.focus(e), ga("send", "event", "Viewport", "selectEntity")
        }), c.on("geometryChanged", function(e) {
            null !== e && C.update(e)
        }), c.on("objectAdded", function(e) {
            e.traverse(function(e) {
                b.push(e)
            })
        }), c.on("objectChanged", function(n) {
            e.selected === n && n.geometry && n.geometry.vertices && n.geometry.vertices.length > 0 && C.update(n), M.update(), n instanceof THREE.PerspectiveCamera && n.updateProjectionMatrix(), t(n)
        }), c.on("selectedEntityComponentChanged", function() {
            c.emit("objectChanged", e.selectedEntity.object3D)
        }), c.on("objectRemoved", function(e) {
            e.traverse(function(e) {
                b.splice(b.indexOf(e), 1)
            })
        }), c.on("helperAdded", function(e) {
            b.push(e.getObjectByName("picker"))
        }), c.on("helperRemoved", function(e) {
            b.splice(b.indexOf(e.getObjectByName("picker")), 1)
        }), c.on("windowResize", function() {
            w.aspect = v.dom.offsetWidth / v.dom.offsetHeight, w.updateProjectionMatrix()
        }), c.on("showGridChanged", function(e) {
            E.visible = e
        }), c.on("inspectorModeChanged", function(t) {
            t ? (m(), e.inspectorCameraEl.setAttribute("camera", "active", "true"), Array.prototype.slice.call(document.querySelectorAll(".a-enter-vr,.rs-base")).forEach(function(e) {
                e.style.display = "none"
            })) : (h(), y.setAttribute("camera", "active", "true"), Array.prototype.slice.call(document.querySelectorAll(".a-enter-vr,.rs-base")).forEach(function(e) {
                e.style.display = "block"
            })), ga("send", "event", "Viewport", "toggleEditor", t)
        })
    }
    var a = n(176),
        i = o(a),
        s = n(185),
        l = (o(s), n(186)),
        u = (o(l), n(187)),
        c = n(172),
        p = (0, i["default"])(function(e) {
            ga("send", "event", "Viewport", "transformEntity", e)
        }, 3e3),
        d = (0, i["default"])(function() {
            ga("send", "event", "Viewport", "changeEditorCamera")
        }, 3e3);
    e.exports = r
}, function(e, t) {
    "use strict";
    ! function() {
        var e = function(e) {
            THREE.MeshBasicMaterial.call(this), this.depthTest = !1, this.depthWrite = !1, this.side = THREE.FrontSide, this.transparent = !0, this.setValues(e), this.oldColor = this.color.clone(), this.oldOpacity = this.opacity, this.highlight = function(e) {
                e ? (this.color.setRGB(1, 1, 0), this.opacity = 1) : (this.color.copy(this.oldColor), this.opacity = this.oldOpacity)
            }
        };
        e.prototype = Object.create(THREE.MeshBasicMaterial.prototype), e.prototype.constructor = e;
        var t = function(e) {
            THREE.LineBasicMaterial.call(this), this.depthTest = !1, this.depthWrite = !1, this.transparent = !0, this.linewidth = 1, this.setValues(e), this.oldColor = this.color.clone(), this.oldOpacity = this.opacity, this.highlight = function(e) {
                e ? (this.color.setRGB(1, 1, 0), this.opacity = 1) : (this.color.copy(this.oldColor), this.opacity = this.oldOpacity)
            }
        };
        t.prototype = Object.create(THREE.LineBasicMaterial.prototype), t.prototype.constructor = t;
        var n = new e({
            visible: !1,
            transparent: !1
        });
        THREE.TransformGizmo = function() {
            this.init = function() {
                THREE.Object3D.call(this), this.handles = new THREE.Object3D, this.pickers = new THREE.Object3D, this.planes = new THREE.Object3D, this.add(this.handles), this.add(this.pickers), this.add(this.planes);
                var e = new THREE.PlaneBufferGeometry(50, 50, 2, 2),
                    t = new THREE.MeshBasicMaterial({
                        visible: !1,
                        side: THREE.DoubleSide
                    }),
                    n = {
                        XY: new THREE.Mesh(e, t),
                        YZ: new THREE.Mesh(e, t),
                        XZ: new THREE.Mesh(e, t),
                        XYZE: new THREE.Mesh(e, t)
                    };
                this.activePlane = n.XYZE, n.YZ.rotation.set(0, Math.PI / 2, 0), n.XZ.rotation.set(-Math.PI / 2, 0, 0);
                for (var o in n) n[o].name = o, this.planes.add(n[o]), this.planes[o] = n[o];
                var r = function(e, t) {
                    for (var n in e)
                        for (o = e[n].length; o--;) {
                            var r = e[n][o][0],
                                a = e[n][o][1],
                                i = e[n][o][2];
                            r.name = n, a && r.position.set(a[0], a[1], a[2]), i && r.rotation.set(i[0], i[1], i[2]), t.add(r)
                        }
                };
                r(this.handleGizmos, this.handles), r(this.pickerGizmos, this.pickers), this.traverse(function(e) {
                    if (e instanceof THREE.Mesh) {
                        e.updateMatrix();
                        var t = e.geometry.clone();
                        t.applyMatrix(e.matrix), e.geometry = t, e.position.set(0, 0, 0), e.rotation.set(0, 0, 0), e.scale.set(1, 1, 1)
                    }
                })
            }, this.highlight = function(e) {
                this.traverse(function(t) {
                    t.material && t.material.highlight && (t.name === e ? t.material.highlight(!0) : t.material.highlight(!1))
                })
            }
        }, THREE.TransformGizmo.prototype = Object.create(THREE.Object3D.prototype), THREE.TransformGizmo.prototype.constructor = THREE.TransformGizmo, THREE.TransformGizmo.prototype.update = function(e, t) {
            var n = new THREE.Vector3(0, 0, 0),
                o = new THREE.Vector3(0, 1, 0),
                r = new THREE.Matrix4;
            this.traverse(function(a) {
                a.name.search("E") !== -1 ? a.quaternion.setFromRotationMatrix(r.lookAt(t, n, o)) : a.name.search("X") === -1 && a.name.search("Y") === -1 && a.name.search("Z") === -1 || a.quaternion.setFromEuler(e)
            })
        }, THREE.TransformGizmoTranslate = function() {
            THREE.TransformGizmo.call(this);
            var o = new THREE.Geometry,
                r = new THREE.Mesh(new THREE.CylinderGeometry(0, .05, .2, 12, 1, (!1)));
            r.position.y = .5, r.updateMatrix(), o.merge(r.geometry, r.matrix);
            var a = new THREE.BufferGeometry;
            a.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 1, 0, 0], 3));
            var i = new THREE.BufferGeometry;
            i.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 1, 0], 3));
            var s = new THREE.BufferGeometry;
            s.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 0, 1], 3)), this.handleGizmos = {
                X: [
                    [new THREE.Mesh(o, new e({
                            color: 16711680
                        })), [.5, 0, 0],
                        [0, 0, -Math.PI / 2]
                    ],
                    [new THREE.Line(a, new t({
                        color: 16711680
                    }))]
                ],
                Y: [
                    [new THREE.Mesh(o, new e({
                        color: 65280
                    })), [0, .5, 0]],
                    [new THREE.Line(i, new t({
                        color: 65280
                    }))]
                ],
                Z: [
                    [new THREE.Mesh(o, new e({
                            color: 255
                        })), [0, 0, .5],
                        [Math.PI / 2, 0, 0]
                    ],
                    [new THREE.Line(s, new t({
                        color: 255
                    }))]
                ],
                XYZ: [
                    [new THREE.Mesh(new THREE.OctahedronGeometry(.1, 0), new e({
                            color: 16777215,
                            opacity: .25
                        })), [0, 0, 0],
                        [0, 0, 0]
                    ]
                ],
                XY: [
                    [new THREE.Mesh(new THREE.PlaneBufferGeometry(.29, .29), new e({
                        color: 16776960,
                        opacity: .25
                    })), [.15, .15, 0]]
                ],
                YZ: [
                    [new THREE.Mesh(new THREE.PlaneBufferGeometry(.29, .29), new e({
                            color: 65535,
                            opacity: .25
                        })), [0, .15, .15],
                        [0, Math.PI / 2, 0]
                    ]
                ],
                XZ: [
                    [new THREE.Mesh(new THREE.PlaneBufferGeometry(.29, .29), new e({
                            color: 16711935,
                            opacity: .25
                        })), [.15, 0, .15],
                        [-Math.PI / 2, 0, 0]
                    ]
                ]
            }, this.pickerGizmos = {
                X: [
                    [new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, (!1)), n), [.6, 0, 0],
                        [0, 0, -Math.PI / 2]
                    ]
                ],
                Y: [
                    [new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, (!1)), n), [0, .6, 0]]
                ],
                Z: [
                    [new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, (!1)), n), [0, 0, .6],
                        [Math.PI / 2, 0, 0]
                    ]
                ],
                XYZ: [
                    [new THREE.Mesh(new THREE.OctahedronGeometry(.2, 0), n)]
                ],
                XY: [
                    [new THREE.Mesh(new THREE.PlaneBufferGeometry(.4, .4), n), [.2, .2, 0]]
                ],
                YZ: [
                    [new THREE.Mesh(new THREE.PlaneBufferGeometry(.4, .4), n), [0, .2, .2],
                        [0, Math.PI / 2, 0]
                    ]
                ],
                XZ: [
                    [new THREE.Mesh(new THREE.PlaneBufferGeometry(.4, .4), n), [.2, 0, .2],
                        [-Math.PI / 2, 0, 0]
                    ]
                ]
            }, this.setActivePlane = function(e, t) {
                var n = new THREE.Matrix4;
                t.applyMatrix4(n.getInverse(n.extractRotation(this.planes.XY.matrixWorld))), "X" === e && (this.activePlane = this.planes.XY, Math.abs(t.y) > Math.abs(t.z) && (this.activePlane = this.planes.XZ)), "Y" === e && (this.activePlane = this.planes.XY, Math.abs(t.x) > Math.abs(t.z) && (this.activePlane = this.planes.YZ)), "Z" === e && (this.activePlane = this.planes.XZ, Math.abs(t.x) > Math.abs(t.y) && (this.activePlane = this.planes.YZ)), "XYZ" === e && (this.activePlane = this.planes.XYZE), "XY" === e && (this.activePlane = this.planes.XY), "YZ" === e && (this.activePlane = this.planes.YZ), "XZ" === e && (this.activePlane = this.planes.XZ)
            }, this.init()
        }, THREE.TransformGizmoTranslate.prototype = Object.create(THREE.TransformGizmo.prototype), THREE.TransformGizmoTranslate.prototype.constructor = THREE.TransformGizmoTranslate, THREE.TransformGizmoRotate = function() {
            THREE.TransformGizmo.call(this);
            var e = function(e, t, n) {
                var o = new THREE.BufferGeometry,
                    r = [];
                n = n ? n : 1;
                for (var a = 0; a <= 64 * n; ++a) "x" === t && r.push(0, Math.cos(a / 32 * Math.PI) * e, Math.sin(a / 32 * Math.PI) * e), "y" === t && r.push(Math.cos(a / 32 * Math.PI) * e, 0, Math.sin(a / 32 * Math.PI) * e), "z" === t && r.push(Math.sin(a / 32 * Math.PI) * e, Math.cos(a / 32 * Math.PI) * e, 0);
                return o.addAttribute("position", new THREE.Float32Attribute(r, 3)), o
            };
            this.handleGizmos = {
                X: [
                    [new THREE.Line(new e(1, "x", .5), new t({
                        color: 16711680
                    }))]
                ],
                Y: [
                    [new THREE.Line(new e(1, "y", .5), new t({
                        color: 65280
                    }))]
                ],
                Z: [
                    [new THREE.Line(new e(1, "z", .5), new t({
                        color: 255
                    }))]
                ],
                E: [
                    [new THREE.Line(new e(1.25, "z", 1), new t({
                        color: 13421568
                    }))]
                ],
                XYZE: [
                    [new THREE.Line(new e(1, "z", 1), new t({
                        color: 7895160
                    }))]
                ]
            }, this.pickerGizmos = {
                X: [
                    [new THREE.Mesh(new THREE.TorusBufferGeometry(1, .12, 4, 12, Math.PI), n), [0, 0, 0],
                        [0, -Math.PI / 2, -Math.PI / 2]
                    ]
                ],
                Y: [
                    [new THREE.Mesh(new THREE.TorusBufferGeometry(1, .12, 4, 12, Math.PI), n), [0, 0, 0],
                        [Math.PI / 2, 0, 0]
                    ]
                ],
                Z: [
                    [new THREE.Mesh(new THREE.TorusBufferGeometry(1, .12, 4, 12, Math.PI), n), [0, 0, 0],
                        [0, 0, -Math.PI / 2]
                    ]
                ],
                E: [
                    [new THREE.Mesh(new THREE.TorusBufferGeometry(1.25, .12, 2, 24), n)]
                ],
                XYZE: [
                    [new THREE.Mesh(new THREE.Geometry)]
                ]
            }, this.setActivePlane = function(e) {
                "E" === e && (this.activePlane = this.planes.XYZE), "X" === e && (this.activePlane = this.planes.YZ), "Y" === e && (this.activePlane = this.planes.XZ), "Z" === e && (this.activePlane = this.planes.XY)
            }, this.update = function(e, t) {
                THREE.TransformGizmo.prototype.update.apply(this, arguments);
                var n = ({
                        handles: this.handles,
                        pickers: this.pickers
                    }, new THREE.Matrix4),
                    o = new THREE.Euler(0, 0, 1),
                    r = new THREE.Quaternion,
                    a = new THREE.Vector3(1, 0, 0),
                    i = new THREE.Vector3(0, 1, 0),
                    s = new THREE.Vector3(0, 0, 1),
                    l = new THREE.Quaternion,
                    u = new THREE.Quaternion,
                    c = new THREE.Quaternion,
                    p = t.clone();
                o.copy(this.planes.XY.rotation), r.setFromEuler(o), n.makeRotationFromQuaternion(r).getInverse(n), p.applyMatrix4(n), this.traverse(function(e) {
                    r.setFromEuler(o), "X" === e.name && (l.setFromAxisAngle(a, Math.atan2(-p.y, p.z)), r.multiplyQuaternions(r, l), e.quaternion.copy(r)), "Y" === e.name && (u.setFromAxisAngle(i, Math.atan2(p.x, p.z)), r.multiplyQuaternions(r, u), e.quaternion.copy(r)), "Z" === e.name && (c.setFromAxisAngle(s, Math.atan2(p.y, p.x)), r.multiplyQuaternions(r, c), e.quaternion.copy(r))
                })
            }, this.init()
        }, THREE.TransformGizmoRotate.prototype = Object.create(THREE.TransformGizmo.prototype), THREE.TransformGizmoRotate.prototype.constructor = THREE.TransformGizmoRotate, THREE.TransformGizmoScale = function() {
            THREE.TransformGizmo.call(this);
            var o = new THREE.Geometry,
                r = new THREE.Mesh(new THREE.BoxGeometry(.125, .125, .125));
            r.position.y = .5, r.updateMatrix(), o.merge(r.geometry, r.matrix);
            var a = new THREE.BufferGeometry;
            a.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 1, 0, 0], 3));
            var i = new THREE.BufferGeometry;
            i.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 1, 0], 3));
            var s = new THREE.BufferGeometry;
            s.addAttribute("position", new THREE.Float32Attribute([0, 0, 0, 0, 0, 1], 3)), this.handleGizmos = {
                X: [
                    [new THREE.Mesh(o, new e({
                            color: 16711680
                        })), [.5, 0, 0],
                        [0, 0, -Math.PI / 2]
                    ],
                    [new THREE.Line(a, new t({
                        color: 16711680
                    }))]
                ],
                Y: [
                    [new THREE.Mesh(o, new e({
                        color: 65280
                    })), [0, .5, 0]],
                    [new THREE.Line(i, new t({
                        color: 65280
                    }))]
                ],
                Z: [
                    [new THREE.Mesh(o, new e({
                            color: 255
                        })), [0, 0, .5],
                        [Math.PI / 2, 0, 0]
                    ],
                    [new THREE.Line(s, new t({
                        color: 255
                    }))]
                ],
                XYZ: [
                    [new THREE.Mesh(new THREE.BoxBufferGeometry(.125, .125, .125), new e({
                        color: 16777215,
                        opacity: .25
                    }))]
                ]
            }, this.pickerGizmos = {
                X: [
                    [new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, (!1)), n), [.6, 0, 0],
                        [0, 0, -Math.PI / 2]
                    ]
                ],
                Y: [
                    [new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, (!1)), n), [0, .6, 0]]
                ],
                Z: [
                    [new THREE.Mesh(new THREE.CylinderBufferGeometry(.2, 0, 1, 4, 1, (!1)), n), [0, 0, .6],
                        [Math.PI / 2, 0, 0]
                    ]
                ],
                XYZ: [
                    [new THREE.Mesh(new THREE.BoxBufferGeometry(.4, .4, .4), n)]
                ]
            }, this.setActivePlane = function(e, t) {
                var n = new THREE.Matrix4;
                t.applyMatrix4(n.getInverse(n.extractRotation(this.planes.XY.matrixWorld))), "X" === e && (this.activePlane = this.planes.XY, Math.abs(t.y) > Math.abs(t.z) && (this.activePlane = this.planes.XZ)), "Y" === e && (this.activePlane = this.planes.XY, Math.abs(t.x) > Math.abs(t.z) && (this.activePlane = this.planes.YZ)), "Z" === e && (this.activePlane = this.planes.XZ, Math.abs(t.x) > Math.abs(t.y) && (this.activePlane = this.planes.YZ)), "XYZ" === e && (this.activePlane = this.planes.XYZE)
            }, this.init()
        }, THREE.TransformGizmoScale.prototype = Object.create(THREE.TransformGizmo.prototype), THREE.TransformGizmoScale.prototype.constructor = THREE.TransformGizmoScale, THREE.TransformControls = function(e, t) {
            function n(e) {
                if (void 0 !== s.object && u !== !0 && (void 0 === e.button || 0 === e.button)) {
                    var t = e.changedTouches ? e.changedTouches[0] : e,
                        n = i(t, c[l].pickers.children),
                        o = null;
                    n && (o = n.object.name, e.preventDefault()), s.axis !== o && (s.axis = o, s.update(), s.dispatchEvent(f))
                }
            }

            function o(e) {
                if (void 0 !== s.object && u !== !0 && (void 0 === e.button || 0 === e.button)) {
                    var t = e.changedTouches ? e.changedTouches[0] : e;
                    if (0 === t.button || void 0 === t.button) {
                        var n = i(t, c[l].pickers.children);
                        if (n) {
                            e.preventDefault(), e.stopPropagation(), s.dispatchEvent(h), s.axis = n.object.name, s.update(), _.copy(Y).sub(V).normalize(), c[l].setActivePlane(s.axis, _);
                            var o = i(t, [c[l].activePlane]);
                            o && (j.copy(s.object.position), H.copy(s.object.scale), U.extractRotation(s.object.matrix), W.extractRotation(s.object.matrixWorld), F.extractRotation(s.object.parent.matrixWorld), B.setFromMatrixScale(M.getInverse(s.object.parent.matrixWorld)), E.copy(o.point))
                        }
                    }
                    u = !0
                }
            }

            function r(e) {
                if (void 0 !== s.object && null !== s.axis && u !== !1 && (void 0 === e.button || 0 === e.button)) {
                    var t = e.changedTouches ? e.changedTouches[0] : e,
                        n = i(t, [c[l].activePlane]);
                    n !== !1 && (e.preventDefault(), e.stopPropagation(), b.copy(n.point), "translate" === l ? (b.sub(E), b.multiply(B), "local" !== s.space && "scale" !== l || (b.applyMatrix4(M.getInverse(W)), s.axis.search("X") === -1 && (b.x = 0), s.axis.search("Y") === -1 && (b.y = 0), s.axis.search("Z") === -1 && (b.z = 0), b.applyMatrix4(U), s.object.position.copy(j), s.object.position.add(b)), "world" !== s.space && s.axis.search("XYZ") === -1 || (s.axis.search("X") === -1 && (b.x = 0), s.axis.search("Y") === -1 && (b.y = 0), s.axis.search("Z") === -1 && (b.z = 0), b.applyMatrix4(M.getInverse(F)), s.object.position.copy(j), s.object.position.add(b)), null !== s.translationSnap && ("local" !== s.space && "scale" !== l || s.object.position.applyMatrix4(M.getInverse(W)), s.axis.search("X") !== -1 && (s.object.position.x = Math.round(s.object.position.x / s.translationSnap) * s.translationSnap), s.axis.search("Y") !== -1 && (s.object.position.y = Math.round(s.object.position.y / s.translationSnap) * s.translationSnap), s.axis.search("Z") !== -1 && (s.object.position.z = Math.round(s.object.position.z / s.translationSnap) * s.translationSnap), "local" !== s.space && "scale" !== l || s.object.position.applyMatrix4(W))) : "scale" === l ? (b.sub(E), b.multiply(B), "local" !== s.space && "scale" !== l || ("XYZ" === s.axis ? (x = 1 + b.y / Math.max(H.x, H.y, H.z), s.object.scale.x = H.x * x, s.object.scale.y = H.y * x, s.object.scale.z = H.z * x) : (b.applyMatrix4(M.getInverse(W)), "X" === s.axis && (s.object.scale.x = H.x * (1 + b.x / H.x)), "Y" === s.axis && (s.object.scale.y = H.y * (1 + b.y / H.y)), "Z" === s.axis && (s.object.scale.z = H.z * (1 + b.z / H.z))))) : "rotate" === l && (b.sub(V), b.multiply(B), R.copy(E).sub(V), R.multiply(B), "E" === s.axis ? (b.applyMatrix4(M.getInverse(T)), R.applyMatrix4(M.getInverse(T)), w.set(Math.atan2(b.z, b.y), Math.atan2(b.x, b.z), Math.atan2(b.y, b.x)), C.set(Math.atan2(R.z, R.y), Math.atan2(R.x, R.z), Math.atan2(R.y, R.x)), P.setFromRotationMatrix(M.getInverse(F)), L.setFromAxisAngle(_, w.z - C.z), N.setFromRotationMatrix(W), P.multiplyQuaternions(P, L), P.multiplyQuaternions(P, N), s.object.quaternion.copy(P)) : "XYZE" === s.axis ? (L.setFromEuler(b.clone().cross(R).normalize()), P.setFromRotationMatrix(M.getInverse(F)), A.setFromAxisAngle(L, -b.clone().angleTo(R)), N.setFromRotationMatrix(W), P.multiplyQuaternions(P, A), P.multiplyQuaternions(P, N), s.object.quaternion.copy(P)) : "local" === s.space || "scale" === l ? (b.applyMatrix4(M.getInverse(W)), R.applyMatrix4(M.getInverse(W)), w.set(Math.atan2(b.z, b.y), Math.atan2(b.x, b.z), Math.atan2(b.y, b.x)), C.set(Math.atan2(R.z, R.y), Math.atan2(R.x, R.z), Math.atan2(R.y, R.x)), N.setFromRotationMatrix(U), null !== s.rotationSnap ? (A.setFromAxisAngle(k, Math.round((w.x - C.x) / s.rotationSnap) * s.rotationSnap), D.setFromAxisAngle(O, Math.round((w.y - C.y) / s.rotationSnap) * s.rotationSnap), I.setFromAxisAngle(S, Math.round((w.z - C.z) / s.rotationSnap) * s.rotationSnap)) : (A.setFromAxisAngle(k, w.x - C.x), D.setFromAxisAngle(O, w.y - C.y), I.setFromAxisAngle(S, w.z - C.z)), "X" === s.axis && N.multiplyQuaternions(N, A), "Y" === s.axis && N.multiplyQuaternions(N, D), "Z" === s.axis && N.multiplyQuaternions(N, I), s.object.quaternion.copy(N)) : "world" === s.space && (w.set(Math.atan2(b.z, b.y), Math.atan2(b.x, b.z), Math.atan2(b.y, b.x)), C.set(Math.atan2(R.z, R.y), Math.atan2(R.x, R.z), Math.atan2(R.y, R.x)), P.setFromRotationMatrix(M.getInverse(F)), null !== s.rotationSnap ? (A.setFromAxisAngle(k, Math.round((w.x - C.x) / s.rotationSnap) * s.rotationSnap), D.setFromAxisAngle(O, Math.round((w.y - C.y) / s.rotationSnap) * s.rotationSnap), I.setFromAxisAngle(S, Math.round((w.z - C.z) / s.rotationSnap) * s.rotationSnap)) : (A.setFromAxisAngle(k, w.x - C.x), D.setFromAxisAngle(O, w.y - C.y), I.setFromAxisAngle(S, w.z - C.z)), N.setFromRotationMatrix(W), "X" === s.axis && P.multiplyQuaternions(P, A), "Y" === s.axis && P.multiplyQuaternions(P, D), "Z" === s.axis && P.multiplyQuaternions(P, I), P.multiplyQuaternions(P, N), s.object.quaternion.copy(P))), s.update(), s.dispatchEvent(f), s.dispatchEvent(v))
                }
            }

            function a(e) {
                e.preventDefault(), void 0 !== e.button && 0 !== e.button || (u && null !== s.axis && (m.mode = l, s.dispatchEvent(m)), u = !1, e instanceof TouchEvent ? (s.axis = null, s.update(), s.dispatchEvent(f)) : n(e))
            }

            function i(n, o) {
                var r = t.getBoundingClientRect(),
                    a = (n.clientX - r.left) / r.width,
                    i = (n.clientY - r.top) / r.height;
                g.set(2 * a - 1, -(2 * i) + 1), y.setFromCamera(g, e);
                var s = y.intersectObjects(o, !0);
                return !!s[0] && s[0]
            }
            THREE.Object3D.call(this), t = void 0 !== t ? t : document, this.object = void 0, this.visible = !1, this.translationSnap = null, this.rotationSnap = null, this.space = "world", this.size = 1, this.axis = null;
            var s = this,
                l = "translate",
                u = !1,
                c = {
                    translate: new THREE.TransformGizmoTranslate,
                    rotate: new THREE.TransformGizmoRotate,
                    scale: new THREE.TransformGizmoScale
                };
            for (var p in c) {
                var d = c[p];
                d.visible = p === l, this.add(d)
            }
            var f = {
                    type: "change"
                },
                h = {
                    type: "mouseDown"
                },
                m = {
                    type: "mouseUp",
                    mode: l
                },
                v = {
                    type: "objectChange"
                },
                y = new THREE.Raycaster,
                g = new THREE.Vector2,
                b = new THREE.Vector3,
                E = new THREE.Vector3,
                w = new THREE.Vector3,
                C = new THREE.Vector3,
                x = 1,
                T = new THREE.Matrix4,
                _ = new THREE.Vector3,
                M = new THREE.Matrix4,
                R = new THREE.Vector3,
                P = new THREE.Quaternion,
                k = new THREE.Vector3(1, 0, 0),
                O = new THREE.Vector3(0, 1, 0),
                S = new THREE.Vector3(0, 0, 1),
                N = new THREE.Quaternion,
                A = new THREE.Quaternion,
                D = new THREE.Quaternion,
                I = new THREE.Quaternion,
                L = new THREE.Quaternion,
                j = new THREE.Vector3,
                H = new THREE.Vector3,
                U = new THREE.Matrix4,
                F = new THREE.Matrix4,
                B = new THREE.Vector3,
                V = new THREE.Vector3,
                z = new THREE.Euler,
                W = new THREE.Matrix4,
                Y = new THREE.Vector3,
                q = new THREE.Euler;
            t.addEventListener("mousedown", o, !1), t.addEventListener("touchstart", o, !1), t.addEventListener("mousemove", n, !1), t.addEventListener("touchmove", n, !1), t.addEventListener("mousemove", r, !1), t.addEventListener("touchmove", r, !1), t.addEventListener("mouseup", a, !1), t.addEventListener("mouseout", a, !1), t.addEventListener("touchend", a, !1), t.addEventListener("touchcancel", a, !1), t.addEventListener("touchleave", a, !1), this.dispose = function() {
                t.removeEventListener("mousedown", o), t.removeEventListener("touchstart", o), t.removeEventListener("mousemove", n), t.removeEventListener("touchmove", n), t.removeEventListener("mousemove", r), t.removeEventListener("touchmove", r), t.removeEventListener("mouseup", a), t.removeEventListener("mouseout", a), t.removeEventListener("touchend", a), t.removeEventListener("touchcancel", a), t.removeEventListener("touchleave", a)
            }, this.attach = function(e) {
                this.object = e, this.visible = !0, this.update()
            }, this.detach = function() {
                this.object = void 0, this.visible = !1, this.axis = null
            }, this.getMode = function() {
                return l
            }, this.setMode = function(e) {
                l = e ? e : l;
                for (var t in c) c[t].visible = t === l;
                this.update(), s.dispatchEvent(f)
            }, this.setTranslationSnap = function(e) {
                s.translationSnap = e
            }, this.setRotationSnap = function(e) {
                s.rotationSnap = e
            }, this.setSize = function(e) {
                s.size = e, this.update(), s.dispatchEvent(f)
            }, this.setSpace = function(e) {
                s.space = e, this.update(), s.dispatchEvent(f)
            }, this.update = function() {
                void 0 !== s.object && (s.object.updateMatrixWorld(), V.setFromMatrixPosition(s.object.matrixWorld), z.setFromRotationMatrix(M.extractRotation(s.object.matrixWorld)), e.updateMatrixWorld(), Y.setFromMatrixPosition(e.matrixWorld), q.setFromRotationMatrix(M.extractRotation(e.matrixWorld)), x = V.distanceTo(Y) / 6 * s.size, this.position.copy(V), this.scale.set(x, x, x), _.copy(Y).sub(V).normalize(), "local" === s.space || "scale" === l ? c[l].update(z, _) : "world" === s.space && c[l].update(new THREE.Euler, _), c[l].highlight(s.axis))
            }
        }, THREE.TransformControls.prototype = Object.create(THREE.Object3D.prototype), THREE.TransformControls.prototype.constructor = THREE.TransformControls
    }()
}, function(e, t) {
    "use strict";
    THREE.EditorControls = function(e, t) {
        function n(e) {
            u.enabled !== !1 && (0 === e.button ? f = p.ROTATE : 1 === e.button ? f = p.ZOOM : 2 === e.button && (f = p.PAN), t.classList.add(d[f]), y.set(e.clientX, e.clientY), t.addEventListener("mousemove", o, !1), t.addEventListener("mouseup", r, !1), t.addEventListener("mouseout", r, !1), t.addEventListener("dblclick", r, !1))
        }

        function o(e) {
            if (u.enabled !== !1) {
                v.set(e.clientX, e.clientY);
                var t = v.x - y.x,
                    n = v.y - y.y;
                f === p.ROTATE ? u.rotate(new THREE.Vector3(.005 * -t, .005 * -n, 0)) : f === p.ZOOM ? u.zoom(new THREE.Vector3(0, 0, n)) : f === p.PAN && u.pan(new THREE.Vector3((-t), n, 0)), y.set(e.clientX, e.clientY)
            }
        }

        function r(e) {
            t.removeEventListener("mousemove", o, !1), t.removeEventListener("mouseup", r, !1), t.removeEventListener("mouseout", r, !1), t.removeEventListener("dblclick", r, !1), t.classList.remove(d[f]), f = p.NONE
        }

        function a(e) {
            e.preventDefault();
            var t = 0;
            e.wheelDelta ? t = -e.wheelDelta : e.detail && (t = 10 * e.detail), u.zoom(new THREE.Vector3(0, 0, t))
        }

        function i(e) {
            e.preventDefault()
        }

        function s(e) {
            if (u.enabled !== !1) {
                switch (e.touches.length) {
                    case 1:
                        b[0].set(e.touches[0].pageX, e.touches[0].pageY, 0), b[1].set(e.touches[0].pageX, e.touches[0].pageY, 0);
                        break;
                    case 2:
                        b[0].set(e.touches[0].pageX, e.touches[0].pageY, 0), b[1].set(e.touches[1].pageX, e.touches[1].pageY, 0), w = b[0].distanceTo(b[1])
                }
                E[0].copy(b[0]), E[1].copy(b[1])
            }
        }

        function l(e) {
            function t(e, t) {
                var n = t[0];
                for (var o in t) n.distanceTo(e) > t[o].distanceTo(e) && (n = t[o]);
                return n
            }
            if (u.enabled !== !1) {
                switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
                    case 1:
                        b[0].set(e.touches[0].pageX, e.touches[0].pageY, 0), b[1].set(e.touches[0].pageX, e.touches[0].pageY, 0), u.rotate(b[0].sub(t(b[0], E)).multiplyScalar(-.005));
                        break;
                    case 2:
                        b[0].set(e.touches[0].pageX, e.touches[0].pageY, 0), b[1].set(e.touches[1].pageX, e.touches[1].pageY, 0), distance = b[0].distanceTo(b[1]), u.zoom(new THREE.Vector3(0, 0, w - distance)), w = distance;
                        var n = b[0].clone().sub(t(b[0], E)),
                            o = b[1].clone().sub(t(b[1], E));
                        n.x = -n.x, o.x = -o.x, u.pan(n.add(o).multiplyScalar(.5))
                }
                E[0].copy(b[0]), E[1].copy(b[1])
            }
        }
        t = void 0 !== t ? t : document, this.enabled = !0, this.center = new THREE.Vector3;
        var u = this,
            c = new THREE.Vector3,
            p = {
                NONE: -1,
                ROTATE: 0,
                ZOOM: 1,
                PAN: 2
            },
            d = ["state-rotating", "state-zooming", "state-dragging"],
            f = p.NONE,
            h = this.center,
            m = new THREE.Matrix3,
            v = new THREE.Vector2,
            y = new THREE.Vector2,
            g = {
                type: "change"
            };
        this.focus = function(t, n) {
            var o = new THREE.Vector3;
            if (t.matrixWorld.decompose(h, new THREE.Quaternion, o), n && t.geometry) {
                o = (o.x + o.y + o.z) / 3, h.add(t.geometry.boundingSphere.center.clone().multiplyScalar(o));
                var r = t.geometry.boundingSphere.radius * o,
                    a = e.position.clone().sub(h).normalize().multiplyScalar(2 * r);
                e.position.copy(h).add(a)
            }
            e.lookAt(h), u.dispatchEvent(g)
        }, this.pan = function(t) {
            var n = e.position.distanceTo(h);
            t.multiplyScalar(.001 * n), t.applyMatrix3(m.getNormalMatrix(e.matrix)), e.position.add(t), h.add(t), u.dispatchEvent(g)
        }, this.zoom = function(t) {
            var n = e.position.distanceTo(h);
            t.multiplyScalar(.001 * n), t.length() > n || (t.applyMatrix3(m.getNormalMatrix(e.matrix)), e.position.add(t), u.dispatchEvent(g))
        }, this.rotate = function(t) {
            c.copy(e.position).sub(h);
            var n = Math.atan2(c.x, c.z),
                o = Math.atan2(Math.sqrt(c.x * c.x + c.z * c.z), c.y);
            n += t.x, o += t.y;
            var r = 1e-6;
            o = Math.max(r, Math.min(Math.PI - r, o));
            var a = c.length();
            c.x = a * Math.sin(o) * Math.sin(n), c.y = a * Math.cos(o), c.z = a * Math.sin(o) * Math.cos(n), e.position.copy(h).add(c), e.lookAt(h), u.dispatchEvent(g)
        }, this.dispose = function() {
            t.removeEventListener("contextmenu", i, !1), t.removeEventListener("mousedown", n, !1), t.removeEventListener("mousewheel", a, !1), t.removeEventListener("MozMousePixelScroll", a, !1), t.removeEventListener("mousemove", o, !1), t.removeEventListener("mouseup", r, !1), t.removeEventListener("mouseout", r, !1), t.removeEventListener("dblclick", r, !1), t.removeEventListener("touchstart", s, !1), t.removeEventListener("touchmove", l, !1)
        }, t.addEventListener("contextmenu", i, !1), t.addEventListener("mousedown", n, !1), t.addEventListener("mousewheel", a, !1), t.addEventListener("MozMousePixelScroll", a, !1);
        var b = (new THREE.Vector3, [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]),
            E = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3],
            w = null;
        t.addEventListener("touchstart", s, !1), t.addEventListener("touchmove", l, !1)
    }, THREE.EditorControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.EditorControls.prototype.constructor = THREE.EditorControls
}, function(e, t) {
    "use strict";

    function n(e) {
        return parseFloat(e.toFixed(2))
    }
    e.exports = {
        getNumber: n
    }
}, function(e, t) {
    "use strict";

    function n() {
        this.components = null, this.loadComponentsData()
    }
    n.prototype = {
        loadComponentsData: function() {
            var e = new window.XMLHttpRequest;
            e.open("GET", "https://raw.githubusercontent.com/aframevr/aframe-components/master/components.json", !1), e.onload = function() {
                this.components = window.JSON.parse(e.responseText)
            }.bind(this), e.onerror = function() {}, e.send()
        },
        addComponentToScene: function(e, t) {
            var n = this.components[e];
            if (n && !n.included) {
                var o = document.createElement("script");
                o.src = n.url, o.setAttribute("data-component-name", e), o.setAttribute("data-component-description", n.description), o.onload = o.onreadystatechange = function() {
                    o.onreadystatechange = o.onload = null, t()
                };
                var r = document.getElementsByTagName("head")[0];
                (r || document.body).appendChild(o);
                var a = document.createElement("script");
                a.href = n.url, a.type = "text/css", a.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(a), n.included = !0
            } else t()
        }
    }, e.exports = n
}, function(e, t) {
    "use strict";

    function n() {
        this.shaders = null, this.loadShadersData()
    }
    n.prototype = {
        loadShadersData: function() {
            var e = new window.XMLHttpRequest;
            e.open("GET", "https://raw.githubusercontent.com/fernandojsg/aframe-shaders/master/shaders.json", !1), e.onload = function() {
                this.shaders = window.JSON.parse(e.responseText)
            }.bind(this), e.onerror = function() {}, e.send()
        },
        addShaderToScene: function(e, t) {
            var n = this.shaders[e];
            if (n && !n.included) {
                var o = document.createElement("script");
                o.src = n.url, o.setAttribute("data-shader-name", e), o.setAttribute("data-shader-description", n.description), o.onload = o.onreadystatechange = function() {
                    o.onreadystatechange = o.onload = null, t()
                };
                var r = document.getElementsByTagName("head")[0];
                (r || document.body).appendChild(o);
                var a = document.createElement("script");
                a.href = n.url, a.type = "text/css", a.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(a), n.included = !0
            } else t()
        }
    }, e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        c = n(2),
        p = o(c),
        d = n(180),
        f = o(d),
        h = function(e) {
            function t(e) {
                a(this, t);
                var n = i(this, Object.getPrototypeOf(t).call(this, e));
                return n.onChange = function(e, t, o, a) {
                    n.setState(r({}, o, a), function() {
                        n.props.onChange && n.props.onChange(e, t, o, n.state)
                    })
                }, n.state = {
                    x: e.value.x,
                    y: e.value.y,
                    z: e.value.z
                }, n
            }
            return s(t, e), u(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.setState(e.value)
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                        componentname: this.props.componentname,
                        entity: this.props.entity,
                        onChange: this.onChange
                    };
                    return p["default"].createElement("div", {
                        className: "vec3"
                    }, p["default"].createElement(f["default"], l({
                        name: "x",
                        value: this.state.x
                    }, e)), p["default"].createElement(f["default"], l({
                        name: "y",
                        value: this.state.y
                    }, e)), p["default"].createElement(f["default"], l({
                        name: "z",
                        value: this.state.z
                    }, e)))
                }
            }]), t
        }(p["default"].Component);
    h.propTypes = {
        componentname: p["default"].PropTypes.string,
        entity: p["default"].PropTypes.object,
        onChange: p["default"].PropTypes.func,
        value: p["default"].PropTypes.object.isRequired
    }, t["default"] = h
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o) {
        var r = v(m[e.components[t].name].schema);
        if (n && !r)
            if (null === o || void 0 === o) {
                var a = e.getAttribute(t);
                delete a[n], e.setAttribute(t, a)
            } else e.setAttribute(t, n, o);
        else null === o || void 0 === o ? e.removeAttribute(t) : e.setAttribute(t, o);
        h.emit("objectChanged", e.object3D)
    }

    function r(e, t) {
        if (e && (t === !0 || confirm("Do you really want to remove entity `" + (e.id || e.tagName) + "`?"))) {
            var n = a(e);
            f.removeObject(e.object3D), e.parentNode.removeChild(e), f.selectEntity(n)
        }
    }

    function a(e) {
        for (var t = e.nextElementSibling; t && (!t.isEntity || t.isInspector);) t = t.nextElementSibling;
        if (t && t.isEntity && !t.isInspector) return t;
        for (var n = e.previousElementSibling; n && (!n.isEntity || n.isInspector);) n = n.previousElementSibling;
        return n && n.isEntity && !n.isInspector ? n : null
    }

    function i(e) {
        r(f.selectedEntity)
    }

    function s(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }

    function l(e) {
        var t = e.cloneNode(!0);
        t.addEventListener("loaded", function(e) {
            f.selectEntity(t)
        }), e.id && (t.id = p(e.id)), t.addEventListener("loaded", function() {
            h.emit("domModified"), f.selectEntity(t)
        }), s(t, e)
    }

    function u() {
        l(f.selectedEntity)
    }

    function c(e) {
        function t(e) {
            for (var n = 0; n < e.childNodes.length; n++) {
                var o = e.childNodes[n];
                o.isEntity && t(o)
            }
            for (var r = 0; r < d.DEFAULT_COMPONENTS.length; r++) 0 === e.getAttribute(d.DEFAULT_COMPONENTS[r]).length && e.removeAttribute(d.DEFAULT_COMPONENTS[r])
        }
        e.flushToDOM();
        var n = e.cloneNode(!0);
        return t(n), n.outerHTML
    }

    function p(e) {
        if (!document.getElementById(e)) return e;
        var t = 2,
            n = e.match(/(\w+)-(\d+)/);
        for (n && (e = n[1], t = n[2]); document.getElementById(e + "-" + t);) t++;
        return e + "-" + t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.updateEntity = o, t.removeEntity = r, t.removeSelectedEntity = i, t.cloneEntity = l, t.cloneSelectedEntity = u, t.getClipboardRepresentation = c;
    var d = n(192),
        f = n(183),
        h = n(172),
        m = AFRAME.components,
        v = AFRAME.schema.isSingleProperty
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e, t, n, o) {
        e.id !== o && (e.id = o, E["default"].emit("entityIdChanged", e))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CommonComponents = t.DEFAULT_COMPONENTS = void 0;
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        u = n(2),
        c = o(u),
        p = n(193),
        d = n(175),
        f = o(d),
        h = n(170),
        m = o(h),
        v = n(194),
        y = o(v),
        g = n(191),
        b = n(172),
        E = o(b),
        w = t.DEFAULT_COMPONENTS = ["visible", "position", "scale", "rotation"],
        C = t.CommonComponents = function(e) {
            function t() {
                return r(this, t), a(this, Object.getPrototypeOf(t).apply(this, arguments))
            }
            return i(t, e), l(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    E["default"].on("selectedEntityComponentChanged", function(t) {
                        w.indexOf(t.name) !== -1 && e.forceUpdate()
                    })
                }
            }, {
                key: "renderCommonAttributes",
                value: function() {
                    var e = this.props.entity,
                        t = e ? e.components : {};
                    return Object.keys(t).filter(function(e) {
                        return w.indexOf(e) !== -1
                    }).map(function(n) {
                        var o = t[n],
                            r = AFRAME.components[n].schema;
                        return c["default"].createElement(f["default"], {
                            onChange: g.updateEntity,
                            key: n,
                            name: n,
                            showHelp: !0,
                            schema: r,
                            data: o.data,
                            componentname: n,
                            entity: e
                        })
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.entity;
                    return e ? c["default"].createElement(m["default"], null, c["default"].createElement("div", {
                        className: "collapsible-header"
                    }, c["default"].createElement("span", null, "COMMON")), c["default"].createElement("div", {
                        className: "collapsible-content"
                    }, c["default"].createElement("div", {
                        className: "row"
                    }, c["default"].createElement("span", {
                        className: "text"
                    }, "ID"), c["default"].createElement(p.InputWidget, {
                        onChange: s,
                        entity: e,
                        name: "id",
                        value: e.id
                    })), this.renderCommonAttributes(), c["default"].createElement(y["default"], {
                        entity: e
                    }))) : c["default"].createElement("div", null)
                }
            }]), t
        }(c["default"].Component);
    C.propTypes = {
        entity: c["default"].PropTypes.object
    }
}, function(e, t, n) {
    "use strict";
    e.exports = {
        BooleanWidget: n(177)["default"],
        ColorWidget: n(178)["default"],
        InputWidget: n(179)["default"],
        NumberWidget: n(180)["default"],
        SelectWidget: n(181)["default"],
        TextureWidget: n(182)["default"],
        Vec3Widget: n(190)["default"]
    }
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e) {
        return e = e.replace(/(^\s*)|(\s*$)/gi, ""), e = e.replace(/[ ]{2,}/gi, " "), e = e.replace(/\n /, "\n")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        u = n(2),
        c = o(u),
        p = n(172),
        d = function(e) {
            function t() {
                var e, n, o, i;
                r(this, t);
                for (var l = arguments.length, u = Array(l), d = 0; d < l; d++) u[d] = arguments[d];
                return n = o = a(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), o.removeMixin = function(e) {
                    var t = o.props.entity,
                        n = s(t.getAttribute("mixin").replace(e, ""));
                    0 === n.length ? t.removeAttribute("mixin") : t.setAttribute("mixin", n), ga("send", "event", "Components", "removeMixin"), p.emit("objectChanged", t.object3D)
                }, o.addMixin = function() {
                    var e = o.props.entity;
                    e.setAttribute("mixin", s(e.getAttribute("mixin") + " " + o.refs.select.value)), p.emit("objectChanged", e.object3D), ga("send", "event", "Components", "addMixin")
                }, o.renderMixinOptions = function() {
                    var e = o.props.entity.mixinEls.map(function(e) {
                            return e.id
                        }),
                        t = Array.prototype.slice.call(document.querySelectorAll("a-mixin"));
                    return t.filter(function(t) {
                        return e.indexOf(t.id) === -1
                    }).sort().map(function(e) {
                        return c["default"].createElement("option", {
                            key: e.id,
                            value: e.id
                        }, e.id)
                    })
                }, o.renderMixins = function() {
                    var e = o.props.entity.mixinEls;
                    return 0 === e.length ? c["default"].createElement("span", null) : c["default"].createElement("span", {
                        className: "mixinlist"
                    }, c["default"].createElement("ul", null, e.map(o.renderMixin)))
                }, o.renderMixin = function(e) {
                    var t = Object.keys(e.attributes).filter(function(t) {
                            return "id" !== e.attributes[t].name
                        }).map(function(t) {
                            var n = "- " + e.attributes[t].name + ":\n",
                                o = e.attributes[t].value.split(";").map(function(e) {
                                    return "  - " + s(e)
                                });
                            return n + o.join("\n")
                        }),
                        n = o.removeMixin.bind(o, e.id);
                    return c["default"].createElement("li", {
                        key: e.id
                    }, c["default"].createElement("span", {
                        className: "mixin",
                        title: t.join("\n")
                    }, e.id), c["default"].createElement("a", {
                        className: "button fa fa-trash-o",
                        onClick: n
                    }))
                }, i = n, a(o, i)
            }
            return i(t, e), l(t, [{
                key: "render",
                value: function() {
                    return c["default"].createElement("div", {
                        className: "row"
                    }, c["default"].createElement("span", {
                        className: "text"
                    }, "mixins"), c["default"].createElement("span", {
                        className: "value"
                    }, c["default"].createElement("select", {
                        ref: "select"
                    }, this.renderMixinOptions()), c["default"].createElement("a", {
                        className: "button fa fa-plus-circle",
                        onClick: this.addMixin
                    })), this.renderMixins())
                }
            }]), t
        }(c["default"].Component);
    d.propTypes = {
        entity: c["default"].PropTypes.object.isRequired
    }, t["default"] = d
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        var n = e.components[t].data,
            o = e.components[t].schema,
            r = {};
        for (var a in n) {
            var i = o[a]["default"],
                s = n[a];
            l(s) && l(i) || s === i || (r[a] = n[a])
        }
        return r
    }

    function a(e, t) {
        var n = r(e, t);
        return AFRAME.utils.styleParser.stringify(n)
    }

    function i(e) {
        if (AFRAME.components[e]) return "https://aframe.io/docs/" + AFRAME.version + "/components/" + ("camera" === e ? "" : e.toLowerCase() + ".html")
    }

    function s(e) {
        var t = i(e);
        return t ? c["default"].createElement("a", {
            title: "Help",
            className: "button help-link fa fa-question-circle",
            target: "_blank",
            onClick: function(e) {
                return e.stopPropagation()
            },
            href: t
        }) : ""
    }

    function l(e) {
        return null === e || "" === e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getClipboardRepresentation = a, t.getComponentDocsUrl = i, t.getComponentDocsHtmlLink = s;
    var u = n(2),
        c = o(u)
}, function(e, t, n) {
    var o, r, a;
    ! function(i, s) {
        r = [e, n(197), n(199), n(200)], o = s, a = "function" == typeof o ? o.apply(t, r) : o, !(void 0 !== a && (e.exports = a))
    }(this, function(e, t, n, o) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function l(e, t) {
            var n = "data-clipboard-" + e;
            if (t.hasAttribute(n)) return t.getAttribute(n)
        }
        var u = r(t),
            c = r(n),
            p = r(o),
            d = function(e) {
                function t(n, o) {
                    a(this, t);
                    var r = i(this, e.call(this));
                    return r.resolveOptions(o), r.listenClick(n), r
                }
                return s(t, e), t.prototype.resolveOptions = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
                }, t.prototype.listenClick = function(e) {
                    var t = this;
                    this.listener = (0, p["default"])(e, "click", function(e) {
                        return t.onClick(e)
                    })
                }, t.prototype.onClick = function(e) {
                    var t = e.delegateTarget || e.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new u["default"]({
                        action: this.action(t),
                        target: this.target(t),
                        text: this.text(t),
                        trigger: t,
                        emitter: this
                    })
                }, t.prototype.defaultAction = function(e) {
                    return l("action", e)
                }, t.prototype.defaultTarget = function(e) {
                    var t = l("target", e);
                    if (t) return document.querySelector(t)
                }, t.prototype.defaultText = function(e) {
                    return l("text", e)
                }, t.prototype.destroy = function() {
                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                }, t
            }(c["default"]);
        e.exports = d
    })
}, function(e, t, n) {
    var o, r, a;
    ! function(i, s) {
        r = [e, n(198)], o = s, a = "function" == typeof o ? o.apply(t, r) : o, !(void 0 !== a && (e.exports = a))
    }(this, function(e, t) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = n(t),
            a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            s = function() {
                function e(t) {
                    o(this, e), this.resolveOptions(t), this.initSelection()
                }
                return e.prototype.resolveOptions = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                }, e.prototype.initSelection = function() {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }, e.prototype.selectFake = function() {
                    var e = this,
                        t = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(), this.fakeHandlerCallback = function() {
                        return e.removeFake()
                    }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, r["default"])(this.fakeElem), this.copyText()
                }, e.prototype.removeFake = function() {
                    this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                }, e.prototype.selectTarget = function() {
                    this.selectedText = (0, r["default"])(this.target), this.copyText()
                }, e.prototype.copyText = function() {
                    var e = void 0;
                    try {
                        e = document.execCommand(this.action)
                    } catch (t) {
                        e = !1
                    }
                    this.handleResult(e)
                }, e.prototype.handleResult = function(e) {
                    e ? this.emitter.emit("success", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    }) : this.emitter.emit("error", {
                        action: this.action,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }, e.prototype.clearSelection = function() {
                    this.target && this.target.blur(), window.getSelection().removeAllRanges()
                }, e.prototype.destroy = function() {
                    this.removeFake()
                }, i(e, [{
                    key: "action",
                    set: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                        if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    },
                    get: function() {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function(e) {
                        if (void 0 !== e) {
                            if (!e || "object" !== ("undefined" == typeof e ? "undefined" : a(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                            this._target = e
                        }
                    },
                    get: function() {
                        return this._target
                    }
                }]), e
            }();
        e.exports = s
    })
}, function(e, t) {
    function n(e) {
        var t;
        if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), t = e.value;
        else {
            e.hasAttribute("contenteditable") && e.focus();
            var n = window.getSelection(),
                o = document.createRange();
            o.selectNodeContents(e), n.removeAllRanges(), n.addRange(o), t = n.toString()
        }
        return t
    }
    e.exports = n
}, function(e, t) {
    function n() {}
    n.prototype = {
        on: function(e, t, n) {
            var o = this.e || (this.e = {});
            return (o[e] || (o[e] = [])).push({
                fn: t,
                ctx: n
            }), this
        },
        once: function(e, t, n) {
            function o() {
                r.off(e, o), t.apply(n, arguments)
            }
            var r = this;
            return o._ = t, this.on(e, o, n)
        },
        emit: function(e) {
            var t = [].slice.call(arguments, 1),
                n = ((this.e || (this.e = {}))[e] || []).slice(),
                o = 0,
                r = n.length;
            for (o; o < r; o++) n[o].fn.apply(n[o].ctx, t);
            return this
        },
        off: function(e, t) {
            var n = this.e || (this.e = {}),
                o = n[e],
                r = [];
            if (o && t)
                for (var a = 0, i = o.length; a < i; a++) o[a].fn !== t && o[a].fn._ !== t && r.push(o[a]);
            return r.length ? n[e] = r : delete n[e], this
        }
    }, e.exports = n
}, function(e, t, n) {
    function o(e, t, n) {
        if (!e && !t && !n) throw new Error("Missing required arguments");
        if (!s.string(t)) throw new TypeError("Second argument must be a String");
        if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
        if (s.node(e)) return r(e, t, n);
        if (s.nodeList(e)) return a(e, t, n);
        if (s.string(e)) return i(e, t, n);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
    }

    function r(e, t, n) {
        return e.addEventListener(t, n), {
            destroy: function() {
                e.removeEventListener(t, n)
            }
        }
    }

    function a(e, t, n) {
        return Array.prototype.forEach.call(e, function(e) {
            e.addEventListener(t, n)
        }), {
            destroy: function() {
                Array.prototype.forEach.call(e, function(e) {
                    e.removeEventListener(t, n)
                })
            }
        }
    }

    function i(e, t, n) {
        return l(document.body, e, t, n)
    }
    var s = n(201),
        l = n(202);
    e.exports = o
}, function(e, t) {
    t.node = function(e) {
        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
    }, t.nodeList = function(e) {
        var n = Object.prototype.toString.call(e);
        return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
    }, t.string = function(e) {
        return "string" == typeof e || e instanceof String
    }, t.fn = function(e) {
        var t = Object.prototype.toString.call(e);
        return "[object Function]" === t
    }
}, function(e, t, n) {
    function o(e, t, n, o, a) {
        var i = r.apply(this, arguments);
        return e.addEventListener(n, i, a), {
            destroy: function() {
                e.removeEventListener(n, i, a)
            }
        }
    }

    function r(e, t, n, o) {
        return function(n) {
            n.delegateTarget = a(n.target, t, !0), n.delegateTarget && o.call(e, n)
        }
    }
    var a = n(203);
    e.exports = o
}, function(e, t, n) {
    var o = n(204);
    e.exports = function(e, t, n) {
        for (var r = n ? e : e.parentNode; r && r !== document;) {
            if (o(r, t)) return r;
            r = r.parentNode
        }
    }
}, function(e, t) {
    function n(e, t) {
        if (r) return r.call(e, t);
        for (var n = e.parentNode.querySelectorAll(t), o = 0; o < n.length; ++o)
            if (n[o] == e) return !0;
        return !1
    }
    var o = Element.prototype,
        r = o.matchesSelector || o.webkitMatchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector;
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e) {
        return e.split("/").pop()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        u = n(2),
        c = o(u),
        p = n(206),
        d = o(p),
        f = n(207).insertNewAsset,
        h = function(e) {
            function t(e) {
                r(this, t);
                var n = a(this, Object.getPrototypeOf(t).call(this, e));
                return n.onClose = function(e) {
                    n.props.onClose && n.props.onClose()
                }, n.selectTexture = function(e) {
                    n.props.onClose && n.props.onClose(e)
                }, n.generateFromSamples = function() {
                    var e = n;
                    n.samplesImages.map(function(t) {
                        var n = new Image;
                        n.addEventListener("load", function() {
                            e.state.samplesImages.push({
                                id: t.name,
                                src: n.src,
                                width: n.width,
                                height: n.height,
                                name: t.name,
                                type: "sample",
                                value: "url(" + n.src + ")"
                            }), e.setState({
                                samplesImages: e.state.samplesImages
                            })
                        }), n.src = t.src
                    })
                }, n.generateFromAssets = function() {
                    n.setState({
                        assetsImages: []
                    });
                    var e = n;
                    Array.prototype.slice.call(document.querySelectorAll("a-assets img")).map(function(t) {
                        var n = new Image;
                        n.addEventListener("load", function() {
                            e.state.assetsImages.push({
                                id: t.id,
                                src: n.src,
                                width: n.width,
                                height: n.height,
                                name: t.id,
                                type: "asset",
                                value: "#" + t.id
                            }), e.setState({
                                assetsImages: e.state.assetsImages
                            })
                        }), n.src = t.src
                    })
                }, n.onNewUrl = function(e) {
                    function t(e) {
                        o.setState({
                            preview: {
                                width: o.refs.preview.naturalWidth,
                                height: o.refs.preview.naturalHeight,
                                src: o.refs.preview.src,
                                id: "",
                                name: "",
                                type: "new",
                                loaded: !0,
                                value: "url(" + o.refs.preview.src + ")"
                            }
                        }), o.refs.preview.removeEventListener("load", t)
                    }
                    var o = n;
                    n.refs.preview.addEventListener("load", t), n.refs.preview.src = "assets/textures/wall.jpg"
                }, n.onNameChanged = function(e) {
                    var t = n.state.preview;
                    t.name = e.target.value, n.setState({
                        preview: t
                    })
                }, n.toggleNewDialog = function() {
                    n.setState({
                        addNewDialogOpened: !n.state.addNewDialogOpened
                    })
                }, n.state = {
                    isOpen: n.props.isOpen,
                    loadedTextures: [],
                    assetsImages: [],
                    samplesImages: [],
                    addNewDialogOpened: !1,
                    preview: {
                        width: 0,
                        height: 0,
                        src: "",
                        name: "",
                        loaded: !1
                    }
                }, n
            }
            return i(t, e), l(t, [{
                key: "componentDidMount",
                value: function() {
                    this.samplesImages = [], this.generateFromSamples(), this.generateFromAssets(), this.generateFromTextureCache()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.state.isOpen !== e.isOpen && (this.setState({
                        isOpen: e.isOpen
                    }), e.isOpen && this.generateFromAssets())
                }
            }, {
                key: "generateFromTextureCache",
                value: function() {}
            }, {
                key: "render",
                value: function() {
                    var e = this.state.loadedTextures,
                        t = this.state.preview,
                        n = this,
                        o = function() {
                            f("img", n.state.preview.name, n.state.preview.src), n.generateFromAssets(), n.toggleNewDialog()
                        },
                        r = function(e) {
                            n.setState({
                                preview: {
                                    width: e.width,
                                    height: e.height,
                                    src: e.src,
                                    id: "",
                                    name: e.name,
                                    type: "sample",
                                    loaded: !0,
                                    value: "url(" + e.src + ")"
                                }
                            }), n.refs.imageName.focus()
                        };
                    return c["default"].createElement(d["default"], {
                        title: "Textures",
                        isOpen: this.state.isOpen,
                        onClose: this.onClose
                    }, c["default"].createElement("button", {
                        onClick: this.toggleNewDialog
                    }, "ADD NEW ASSET"), c["default"].createElement("div", {
                        className: this.state.addNewDialogOpened ? "" : "hide"
                    }, c["default"].createElement("div", {
                        className: "newimage"
                    }, c["default"].createElement("div", {
                        className: "new_asset_options"
                    }, c["default"].createElement("span", null, "Please choose one of the following options to add a new image asset"), c["default"].createElement("ul", null, c["default"].createElement("li", null, c["default"].createElement("span", null, "Enter URL:"), " ", c["default"].createElement("input", {
                        type: "text",
                        value: this.props.newUrl,
                        onChange: this.onNewUrl
                    })), c["default"].createElement("li", null, c["default"].createElement("span", null, "Upload file:"), " ", c["default"].createElement("input", {
                        type: "file",
                        value: this.props.newUrl,
                        onChange: this.onNewUrl
                    })), c["default"].createElement("li", null, c["default"].createElement("span", null, "Select image from samples"), c["default"].createElement("ul", {
                        className: "gallery"
                    }, this.state.samplesImages.map(function(e) {
                        var t = r.bind(this, e);
                        return c["default"].createElement("li", {
                            key: e.src,
                            onClick: t
                        }, c["default"].createElement("img", {
                            width: "155px",
                            height: "155px",
                            src: e.src
                        }), c["default"].createElement("div", {
                            className: "detail"
                        }, c["default"].createElement("span", {
                            className: "title"
                        }, e.name), c["default"].createElement("br", null), c["default"].createElement("span", null, s(e.src)), c["default"].createElement("br", null), c["default"].createElement("span", null, c["default"].createElement("em", null, e.width, " x ", e.height))))
                    }))))), c["default"].createElement("div", {
                        className: "preview"
                    }, "Image name: ", c["default"].createElement("input", {
                        ref: "imageName",
                        type: "text",
                        value: this.state.preview.name,
                        onChange: this.onNameChanged
                    }), c["default"].createElement("br", null), c["default"].createElement("br", null), c["default"].createElement("img", {
                        ref: "preview",
                        width: "155px",
                        height: "155px",
                        src: t.src
                    }), this.state.preview.loaded ? c["default"].createElement("div", {
                        className: "detail"
                    }, c["default"].createElement("span", null, s(t.src)), c["default"].createElement("br", null), c["default"].createElement("span", null, t.width, " x ", t.height)) : c["default"].createElement("span", null), c["default"].createElement("br", null), c["default"].createElement("br", null), c["default"].createElement("button", {
                        onClick: o
                    }, "ADD IMAGE TO ASSETS")))), c["default"].createElement("div", {
                        className: this.state.addNewDialogOpened ? "hide" : ""
                    }, c["default"].createElement("ul", {
                        className: "gallery"
                    }, this.state.assetsImages.map(function(e) {
                        var t = this.selectTexture.bind(this, e);
                        return c["default"].createElement("li", {
                            key: e.id,
                            onClick: t
                        }, c["default"].createElement("img", {
                            width: "155px",
                            height: "155px",
                            src: e.src
                        }), c["default"].createElement("div", {
                            className: "detail"
                        }, c["default"].createElement("span", {
                            className: "title"
                        }, e.name), c["default"].createElement("br", null), c["default"].createElement("span", null, s(e.src)), c["default"].createElement("br", null), c["default"].createElement("span", null, c["default"].createElement("em", null, e.width, " x ", e.height))))
                    }.bind(this)), e.map(function(e) {
                        var t = e.image,
                            n = this.selectTexture.bind(this, e);
                        return c["default"].createElement("li", {
                            key: e.uuid,
                            onClick: n
                        }, c["default"].createElement("img", {
                            width: "155px",
                            height: "155px",
                            src: t.src
                        }), c["default"].createElement("div", {
                            className: "detail"
                        }, c["default"].createElement("span", {
                            className: "title"
                        }, "Name:"), " ", c["default"].createElement("span", null, t.name), c["default"].createElement("br", null), c["default"].createElement("span", {
                            className: "title"
                        }, "Filename:"), " ", c["default"].createElement("span", null, s(t.src)), c["default"].createElement("br", null), c["default"].createElement("span", null, c["default"].createElement("em", null, t.width, " x ", t.height))))
                    }))))
                }
            }]), t
        }(c["default"].Component);
    h.propTypes = {
        isOpen: c["default"].PropTypes.bool,
        newUrl: c["default"].PropTypes.string,
        onClose: c["default"].PropTypes.func
    }, t["default"] = h
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        s = n(2),
        l = function(e) {
            function t(e) {
                o(this, t);
                var n = r(this, Object.getPrototypeOf(t).call(this, e));
                return n.handleGlobalKeydown = function(e) {
                    n.state.isOpen && 27 === e.keyCode && n.close()
                }, n.shouldClickDismiss = function(e) {
                    var t = e.target;
                    return ("INPUT" !== t.tagName || "file" !== t.type) && (t !== n.refs.self && !n.refs.self.contains(t))
                }, n.handleGlobalMousedown = function(e) {
                    n.state.isOpen && n.shouldClickDismiss(e) && "function" == typeof n.props.onClose && n.props.onClose()
                }, n.close = function() {
                    n.setState({
                        isOpen: !1
                    }), n.props.onClose && n.props.onClose()
                }, n.state = {
                    isOpen: n.props.isOpen
                }, n
            }
            return a(t, e), i(t, [{
                key: "componentDidMount",
                value: function() {
                    document.addEventListener("keyup", this.handleGlobalKeydown), document.addEventListener("mousedown", this.handleGlobalMousedown)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("keyup", this.handleGlobalKeydown), document.removeEventListener("mousedown", this.handleGlobalMousedown)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.state.isOpen !== e.isOpen && this.setState({
                        isOpen: e.isOpen
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return this.state.isOpen ? s.createElement("div", {
                        className: "modal"
                    }, s.createElement("div", {
                        className: "modal-content",
                        ref: "self"
                    }, s.createElement("div", {
                        className: "modal-header"
                    }, s.createElement("span", {
                        className: "close",
                        onClick: this.close
                    }, "×"), s.createElement("h3", null, this.props.title)), s.createElement("div", {
                        className: "modal-body"
                    }, this.props.children))) : s.createElement("span", null)
                }
            }]), t
        }(s.Component);
    l.propTypes = {
        children: s.PropTypes.oneOfType([s.PropTypes.array, s.PropTypes.element]).isRequired,
        isOpen: s.PropTypes.bool,
        onClose: s.PropTypes.func,
        title: s.PropTypes.string
    }, t["default"] = l
}, function(e, t) {
    "use strict";

    function n(e, t, n) {
        var o = null;
        switch (e) {
            case "img":
                o = document.createElement("img"), o.id = t, o.src = n
        }
        o && document.getElementsByTagName("a-assets")[0].appendChild(o)
    }
    e.exports = {
        insertNewAsset: n
    }
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        l = n(2),
        u = o(l),
        c = n(176),
        p = o(c),
        d = n(191),
        f = n(209),
        h = o(f),
        m = n(172),
        v = {
            camera: "fa-video-camera",
            geometry: "fa-cube",
            light: "fa-lightbulb-o",
            material: "fa-picture-o"
        },
        y = (0, p["default"])(function() {
            ga("send", "event", "SceneGraph", "searchEntity")
        }, 3e3),
        g = function(e) {
            function t(e) {
                r(this, t);
                var n = a(this, Object.getPrototypeOf(t).call(this, e));
                return n.setValue = function(e) {
                    for (var t = !1, o = 0; o < n.state.options.length; o++) {
                        var r = n.state.options[o];
                        r.value === e && (n.setState({
                            value: e,
                            selectedIndex: o
                        }), n.props.onChange && n.props.onChange(e), m.emit("entitySelected", e, !0), t = !0)
                    }
                    t || n.setState({
                        value: null,
                        selectedIndex: -1
                    }), ga("send", "event", "SceneGraph", "selectEntity")
                }, n.update = function(e) {
                    n.setValue(e.target.value)
                }, n.rebuildOptions = function() {
                    function e(n, o) {
                        if (n) {
                            void 0 === o ? o = 1 : o += 1;
                            for (var r = n.children, a = 0; a < r.length; a++) {
                                var i = r[a];
                                if (!i.dataset.isInspector && i.isEntity && !i.isInspector) {
                                    var s = "";
                                    for (var l in v) i.components && i.components[l] && ! function() {
                                        var e = i.getAttribute(l),
                                            t = Object.keys(e).sort().map(function(t) {
                                                return " - " + t + ": " + e[t]
                                            }),
                                            n = l + (t.length ? "\n" + t.join("\n") : "");
                                        s += ' <i class="component fa ' + v[l] + '" title="' + n + '"></i>'
                                    }();
                                    var u = "&nbsp;&nbsp;&nbsp;".repeat(o),
                                        c = i.id ? i.id : "&lt;" + i.tagName.toLowerCase() + "&gt;",
                                        p = u + c + s;
                                    if (t.push({
                                            "static": !0,
                                            value: i,
                                            html: p
                                        }), "a-entity" !== i.tagName.toLowerCase()) continue;
                                    e(i, o)
                                }
                            }
                        }
                    }
                    var t = [{
                        "static": !0,
                        value: n.props.scene,
                        html: "&lt;a-scene&gt;"
                    }];
                    e(n.props.scene), n.setState({
                        options: t
                    })
                }, n.selectIndex = function(e) {
                    e >= 0 && e < n.state.options.length && n.setValue(n.state.options[e].value)
                }, n.onKeyDown = function(e) {
                    switch (e.keyCode) {
                        case 38:
                        case 40:
                            e.preventDefault(), e.stopPropagation()
                    }
                }, n.onKeyUp = function(e) {
                    if (null !== n.state.value) switch (e.keyCode) {
                        case 38:
                            n.selectIndex(n.state.selectedIndex - 1), ga("send", "event", "SceneGraph", "navigateWithKeyboard");
                            break;
                        case 40:
                            n.selectIndex(n.state.selectedIndex + 1), ga("send", "event", "SceneGraph", "navigateWithKeyboard")
                    }
                }, n.onChangeFilter = function(e) {
                    n.setState({
                        filterText: e.target.value
                    }), y()
                }, n.state = {
                    value: n.props.value || "",
                    options: [],
                    selectedIndex: -1,
                    filterText: ""
                }, n
            }
            return i(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.rebuildOptions(), document.addEventListener("componentremoved", function() {
                            e.forceUpdate()
                        }), m.on("entitySelected", function(t, n) {
                            n || e.setValue(t)
                        }), m.on("entityIdChanged", this.rebuildOptions), document.addEventListener("componentremoved", this.rebuildOptions),
                        m.on("domModified", this.rebuildOptions)
                }
            }, {
                key: "renderOptions",
                value: function() {
                    var e = this,
                        t = this.state.filterText.toUpperCase();
                    return this.state.options.filter(function(e, n) {
                        var o = e.value;
                        return o.id.toUpperCase().indexOf(t) > -1 || o.tagName.toUpperCase().indexOf(t) > -1
                    }).map(function(t, n) {
                        var o = "option" + (t.value === e.state.value ? " active" : "");
                        return u["default"].createElement("div", {
                            key: n,
                            className: o,
                            value: t.value,
                            onClick: function() {
                                return e.setValue(t.value)
                            }
                        }, u["default"].createElement("span", {
                            dangerouslySetInnerHTML: {
                                __html: t.html
                            }
                        }), u["default"].createElement("span", {
                            className: "icons"
                        }, u["default"].createElement("a", {
                            onClick: function() {
                                return (0, d.cloneEntity)(t.value)
                            },
                            title: "Clone entity",
                            className: "button fa fa-clone"
                        }), u["default"].createElement("a", {
                            onClick: function(e) {
                                e.stopPropagation(), (0, d.removeEntity)(t.value)
                            },
                            title: "Remove entity",
                            className: "button fa fa-trash-o"
                        })))
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return u["default"].createElement("div", {
                        className: "scenegraph"
                    }, u["default"].createElement("div", {
                        className: "scenegraph-toolbar"
                    }, u["default"].createElement(h["default"], null), u["default"].createElement("div", {
                        className: "search"
                    }, u["default"].createElement("input", {
                        placeholder: "Search...",
                        value: this.state.filterText,
                        onChange: this.onChangeFilter
                    }), u["default"].createElement("span", {
                        className: "fa fa-search"
                    }))), u["default"].createElement("div", {
                        className: "outliner",
                        tabIndex: "0",
                        onKeyDown: this.onKeyDown,
                        onKeyUp: this.onKeyUp
                    }, this.renderOptions()))
                }
            }]), t
        }(u["default"].Component);
    g.propTypes = {
        onChange: u["default"].PropTypes.func,
        scene: u["default"].PropTypes.object,
        value: u["default"].PropTypes.string
    }, g.defaultProps = {
        value: "",
        index: -1
    }, t["default"] = g
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        l = n(2),
        u = o(l),
        c = n(196),
        p = o(c),
        d = n(210),
        f = n(172),
        h = o(f),
        m = n(183),
        v = function(e) {
            function t() {
                return r(this, t), a(this, Object.getPrototypeOf(t).apply(this, arguments))
            }
            return i(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = new p["default"]('[data-action="copy-scene-to-clipboard"]', {
                        text: function(e) {
                            return (0, d.generateHtml)()
                        }
                    });
                    e.on("error", function(e) {})
                }
            }, {
                key: "saveSceneToHTML",
                value: function() {
                    function e(e, t) {
                        n.href = URL.createObjectURL(e), n.download = t || "ascene.html", n.click()
                    }

                    function t(t, n) {
                        e(new Blob([t], {
                            type: "text/html"
                        }), n)
                    }
                    var n = document.createElement("a");
                    n.style.display = "none", document.body.appendChild(n);
                    var o = (0, d.getSceneName)(document.querySelector("a-scene"));
                    t((0, d.generateHtml)(), o)
                }
            }, {
                key: "addEntity",
                value: function() {
                    h["default"].emit("createNewEntity", {
                        element: "a-entity",
                        components: {}
                    })
                }
            }, {
                key: "playScene",
                value: function() {
                    m.close()
                }
            }, {
                key: "render",
                value: function() {
                    return u["default"].createElement("div", {
                        className: "scenegraph-actions"
                    }, u["default"].createElement("a", {
                        className: "button fa fa-clipboard",
                        title: "Copy scene to clipboard",
                        "data-action": "copy-scene-to-clipboard"
                    }), u["default"].createElement("a", {
                        className: "button fa fa-download",
                        title: "Export to HTML",
                        onClick: this.saveSceneToHTML
                    }), u["default"].createElement("a", {
                        className: "button fa fa-plus",
                        title: "Add a new entity",
                        onClick: this.addEntity
                    }))
                }
            }]), t
        }(u["default"].Component);
    t["default"] = v
}, function(e, t) {
    "use strict";

    function n(e) {
        return e.id || o(window.location.host + window.location.pathname)
    }

    function o(e) {
        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "-").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
    }

    function r() {
        for (var e = new window.DOMParser, t = e.parseFromString(document.documentElement.innerHTML, "text/html"), n = t.querySelectorAll(["[data-aframe-inspector]", 'script[src$="aframe-inspector.js"]', 'style[type="text/css"]', "[aframe-injected]", 'style[data-href$="aframe.css"]', ".rs-base", 'style[data-href$="rStats.css"]'].join(",")), o = 0; o < n.length; o++) {
            var r = n[o];
            r.parentNode.removeChild(r)
        }
        return a(t)
    }

    function a(e) {
        var t;
        return t = window.ActiveXObject ? e.xml : (new window.XMLSerializer).serializeToString(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getSceneName = n, t.generateHtml = r
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        l = n(2),
        u = n(172),
        c = n(171),
        p = [{
            value: "translate",
            icon: "fa-arrows"
        }, {
            value: "rotate",
            icon: "fa-repeat"
        }, {
            value: "scale",
            icon: "fa-expand"
        }],
        d = function(e) {
            function t(e) {
                r(this, t);
                var n = a(this, Object.getPrototypeOf(t).call(this, e));
                return n.changeTransformMode = function(e) {
                    n.setState({
                        selectedTransform: e
                    }), u.emit("transformModeChanged", e), ga("send", "event", "Toolbar", "selectHelper", e)
                }, n.onLocalChange = function(e) {
                    var t = e.target.checked;
                    n.setState({
                        localSpace: t
                    }), u.emit("spaceChanged", t ? "local" : "world"), ga("send", "event", "Toolbar", "toggleLocal", t)
                }, n.renderTransformButtons = function() {
                    return p.map(function(e, t) {
                        var n, r = e.value === this.state.selectedTransform,
                            a = c((n = {
                                button: !0,
                                fa: !0
                            }, o(n, e.icon, !0), o(n, "active", r), n));
                        return l.createElement("a", {
                            title: e.value,
                            key: t,
                            onClick: this.changeTransformMode.bind(this, e.value),
                            className: a
                        })
                    }.bind(n))
                }, n.state = {
                    selectedTransform: "translate",
                    localSpace: !1
                }, n
            }
            return i(t, e), s(t, [{
                key: "render",
                value: function() {
                    return l.createElement("div", {
                        className: "toolbar"
                    }, this.renderTransformButtons(), l.createElement("span", {
                        className: "local-transform"
                    }, l.createElement("input", {
                        id: "local",
                        type: "checkbox",
                        checked: this.state.localSpace || "scale" === this.state.selectedTransform,
                        disabled: "scale" === this.state.selectedTransform,
                        onChange: this.onLocalChange
                    }), l.createElement("label", {
                        htmlFor: "local"
                    }, "local")))
                }
            }]), t
        }(l.Component);
    t["default"] = d
}, function(e, t, n) {
    var o = n(213);
    "string" == typeof o && (o = [
        [e.id, o, ""]
    ]);
    n(215)(o, {});
    o.locals && (e.exports = o.locals)
}, function(e, t, n) {
    t = e.exports = n(214)(), t.push([e.id, "body{font-family:Helvetica,Arial,sans-serif;font-size:14px;margin:0}body.aframe-inspector-opened{overflow:hidden}hr{border:0;border-top:1px solid #ccc}a{cursor:pointer}button{position:relative}textarea{-moz-tab-size:4;-o-tab-size:4;tab-size:4;white-space:pre;word-wrap:normal}textarea.success{border-color:#8b8!important}textarea.fail{border-color:red!important;background-color:rgba(255,0,0,.05)}input,textarea{outline:none}#left-sidebar,#right-panels{z-index:9999}#left-sidebar,#sidebar,.panel{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.collapsible .static{margin:0}.collapsible .static .collapse-button{float:left;margin-right:6px;width:0;height:0;border:6px solid transparent}.collapsible.collapsed .static .collapse-button{margin-top:2px;border-left-color:#1faaf2}.collapsible:not(.collapsed) .static .collapse-button{margin-top:6px;border-top-color:#1faaf2}.collapsible.collapsed .content{display:none}.toggle-edit{background-color:#ed3160;position:fixed;left:3px;top:3px;padding:6px 10px;color:#fff;text-decoration:none;text-align:center;z-index:99999;width:174px}.toggle-edit:hover{background-color:#e42b5a}.scenegraph{border-top:1px solid #111;padding-top:32px}.scenegraph .search{padding:5px}.scenegraph-toolbar{background-color:#333;position:fixed;top:32px}.scenegraph-actions{padding:9px 0 5px}.search{position:relative;color:#aaa;font-size:16px}.search input{width:185px;height:22px;background:#222;border-radius:5px;text-indent:10px}.search .fa-search{position:absolute;top:10px;right:11px}input{background-color:transparent;border:1px solid #555;color:#fff}.texture canvas,input{-webkit-transition:background-color .1s ease-in-out,border-color .1s ease-in-out,color .1s ease-in-out;transition:background-color .1s ease-in-out,border-color .1s ease-in-out,color .1s ease-in-out}input.number,input.string,input[type=number],input[type=text]{min-height:14px;outline:none}input.number{color:#20b1fb!important;font-size:12px;border:0;padding:2px;cursor:col-resize;background-color:transparent!important}input.number:focus,input.string:focus{border:1px solid #20b1fb;cursor:auto;color:#fff}#left-sidebar{position:fixed;left:0;top:0;bottom:0;width:200px;overflow:auto;background:#2b2b2b;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%}#sidebar{width:330px;background:#2b2b2b}#sidebar *{vertical-align:middle}input,select,textarea{background:#222;border:1px solid transparent;color:#888}.row{min-height:20px;margin-bottom:10px}input[type=color]{border:1px solid #111;background-color:#333;cursor:pointer}.texture canvas{border:1px solid #222}input[type=color]{height:16px;width:64px;cursor:pointer;padding:0}input[type=color]::-webkit-color-swatch{border:0}input[type=color]::-webkit-color-swatch-wrapper{padding:0}input[type=color]::-moz-color-swatch{border:0}input[type=color]::-moz-focus-inner{border:0;padding:0}body{font-family:Roboto,sans-serif;font-size:12px;color:#fff}body.editor-opened{background-color:#191919}.components{background-color:#323232;color:#bcbcbc;width:330px;position:fixed;height:100%;overflow:auto}div.vec3{display:inline}.vec3 input.number{width:50px}.collapsible-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.component-title span{float:left;max-width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase}.collapsible .static{vertical-align:middle;background-color:#323232;color:#fff;padding:10px;border-top:1px solid #262626;border-bottom:1px solid #262626;height:16px}.collapsible .menu{text-align:right}.collapsible .menu:after{color:#1faaf2;content:'\\2807';font-size:12px;padding:5px;text-align:right}.collapsible .static .collapse-button{margin-top:2px;width:0;height:0;float:left;margin-right:10px;border-left:5px solid transparent;border-right:5px solid transparent}.collapsible.collapsed .static .collapse-button{border-left-color:#1faaf2}.collapsible:not(.collapsed) .static .collapse-button{border-top-color:#1faaf2}.collapsible .content{background-color:#2b2b2b;padding:10px}.components .row{min-height:20px;margin-bottom:10px}.components *{vertical-align:middle}.components .row .text{cursor:default;display:inline-block;vertical-align:middle;width:120px}.components .row .map_value{margin:0 0 0 5px;width:68px}.hidden{visibility:hidden}.texture canvas+input{margin-left:5px}.texture .fa{padding-right:5px}.texture input:button{cursor:hand}.scenegraph-bottom{background-color:#323232;bottom:10;height:40px;z-index:100;border-top:1px solid #111;left:0}a.button{color:#bcbcbc;font-size:16px;text-decoration:none;margin-left:10px}a.button:hover{color:#1faaf2}.scenegraph-bottom a{float:right;margin:10px}.modal{position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.modal-content{position:relative;background-color:#232323;margin:auto;padding:0;width:889px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);-webkit-animation-name:animatetop;animation-name:animatetop;-webkit-animation-duration:.2s;animation-duration:.2s}@-webkit-keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}.close{color:#fff;float:right;font-size:28px;font-weight:700}.close:focus,.close:hover{color:#08f;text-decoration:none;cursor:pointer}.modal-header{padding:2px 16px;color:#fff}.modal-body{padding:16px;overflow:auto}.modal-footer{padding:2px 16px;color:#fff}.gallery{padding:0;overflow:auto;margin:0 auto}.gallery li{width:155px;margin:8px;float:left;overflow:hidden;display:inline-block;box-shadow:3px 3px 8px -2px rgba(0,0,0,.63);cursor:pointer}.gallery li:hover{box-shadow:0 0 4px 3px rgba(29,138,190,.63)}.gallery li .detail{background-color:#323232;padding:10px;min-height:60px}.gallery li:hover .detail{background-color:#444}.gallery li .detail span{color:#bbb!important}.gallery li .detail span.title{color:#eee!important;font-weight:700}.preview{width:200px;float:right;padding:10px}.new_asset_options{float:left;width:600px}.modal button{display:inline-block;margin:0 10px 0 0;padding:5px 10px;font-size:12px;line-height:1.8;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border-radius:0;cursor:pointer}.modal button:focus{outline:none}.modal button{color:#fff;background-color:#1eaaf1;border:none}.modal button.hover,.modal button:hover{background-color:#346392;text-shadow:-1px 1px #27496d}.modal button.active,.modal button:active{background-color:#27496d;text-shadow:-1px 1px #193047}.newimage{padding:10px;background-color:#323232;overflow:auto}.hide{display:none}span.value{color:#fff;display:inline-block}span.mixinlist{color:#888!important;display:inline-block}span.mixinlist ul{list-style-type:none;padding:5px;margin:5px 0 0;background-color:#222}span.mixinlist ul li{margin-bottom:3px;font-size:11px}span.mixinlist ul li:last-child{margin-bottom:0}span.mixin{width:100px;display:inline-block}.mixinlist{margin-left:120px}span.subcomponent{color:#999;margin-left:10px;float:none!important;vertical-align:top!important}.collapsible .static{cursor:pointer}.a-canvas.state-dragging{cursor:-webkit-grabbing;cursor:grabbing}code,pre{font-family:Consolas,Andale Mono,Monaco,Courier New,monospace}.tagName{font-weight:500}.sidebar-title{color:#aaa;text-align:center;background-color:#444;padding:6px 10px;font-size:12px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative}.toolbar{height:32px;background-color:#262626;color:#333;position:relative}.toolbar *{vertical-align:middle;padding:8px;margin-left:0}.toolbar a.button{margin:0 6px 0 0}.toolbar .active{background-color:#1faaf2;color:#fff}.toolbar .active:hover{color:#fff!important}.local-transform{padding-left:10px}.local-transform label{color:#aaa;padding-left:5px}.local-transform a.button{padding-top:0}.outliner{color:#868686;background:#2b2b2b;padding:0;width:100%;font-size:12px;cursor:default;outline:none;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;overflow-y:auto;position:fixed;width:200px;top:98px;height:calc(100% - 98px)}.outliner .option{padding:4px;white-space:nowrap;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.outliner .option.active{background-color:#1faaf2;color:#fff}.outliner .option .component:hover{color:#1faaf2}.outliner .option.active .component:hover{color:#1888c1}.outliner .option .icons{display:none;margin:0 3px 0 10px}.outliner .option .icons .button{font-size:12px;color:#fff}.outliner .option.active .icons{display:inline}.outliner .fa{color:#aaa}.outliner .active .fa{color:#fff}a.flat-button{color:#bcbcbc;background-color:#262626;font-size:11px;text-decoration:none;margin-left:10px;padding:5px}a.flat-button:hover{color:#1faaf2}.component-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}a.help-link{opacity:.4}a.help-link:hover{opacity:1}#right-panels{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;position:fixed;top:0;bottom:0;right:0}#aframe-inspector-panels,#right-panels{display:-webkit-box;display:-ms-flexbox;display:flex}#aframe-inspector-panels{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.aframe-inspector-opened a-scene{display:inline!important}.aframe-inspector-opened a-scene .a-canvas{position:fixed;background-color:#191919;z-index:9999}", ""])
}, function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var o = {}, r = 0; r < this.length; r++) {
                var a = this[r][0];
                "number" == typeof a && (o[a] = !0)
            }
            for (r = 0; r < t.length; r++) {
                var i = t[r];
                "number" == typeof i[0] && o[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), e.push(i))
            }
        }, e
    }
}, function(e, t, n) {
    function o(e, t) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n],
                r = f[o.id];
            if (r) {
                r.refs++;
                for (var a = 0; a < r.parts.length; a++) r.parts[a](o.parts[a]);
                for (; a < o.parts.length; a++) r.parts.push(u(o.parts[a], t))
            } else {
                for (var i = [], a = 0; a < o.parts.length; a++) i.push(u(o.parts[a], t));
                f[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: i
                }
            }
        }
    }

    function r(e) {
        for (var t = [], n = {}, o = 0; o < e.length; o++) {
            var r = e[o],
                a = r[0],
                i = r[1],
                s = r[2],
                l = r[3],
                u = {
                    css: i,
                    media: s,
                    sourceMap: l
                };
            n[a] ? n[a].parts.push(u) : t.push(n[a] = {
                id: a,
                parts: [u]
            })
        }
        return t
    }

    function a(e, t) {
        var n = v(),
            o = b[b.length - 1];
        if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), b.push(t);
        else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }

    function i(e) {
        e.parentNode.removeChild(e);
        var t = b.indexOf(e);
        t >= 0 && b.splice(t, 1)
    }

    function s(e) {
        var t = document.createElement("style");
        return t.type = "text/css", a(e, t), t
    }

    function l(e) {
        var t = document.createElement("link");
        return t.rel = "stylesheet", a(e, t), t
    }

    function u(e, t) {
        var n, o, r;
        if (t.singleton) {
            var a = g++;
            n = y || (y = s(t)), o = c.bind(null, n, a, !1), r = c.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), o = d.bind(null, n), r = function() {
            i(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = s(t), o = p.bind(null, n), r = function() {
            i(n)
        });
        return o(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    o(e = t)
                } else r()
            }
    }

    function c(e, t, n, o) {
        var r = n ? "" : o.css;
        if (e.styleSheet) e.styleSheet.cssText = E(t, r);
        else {
            var a = document.createTextNode(r),
                i = e.childNodes;
            i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a)
        }
    }

    function p(e, t) {
        var n = t.css,
            o = t.media;
        if (o && e.setAttribute("media", o), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }

    function d(e, t) {
        var n = t.css,
            o = t.sourceMap;
        o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var r = new Blob([n], {
                type: "text/css"
            }),
            a = e.href;
        e.href = URL.createObjectURL(r), a && URL.revokeObjectURL(a)
    }
    var f = {},
        h = function(e) {
            var t;
            return function() {
                return "undefined" == typeof t && (t = e.apply(this, arguments)), t
            }
        },
        m = h(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }),
        v = h(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        y = null,
        g = 0,
        b = [];
    e.exports = function(e, t) {
        t = t || {}, "undefined" == typeof t.singleton && (t.singleton = m()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var n = r(e);
        return o(n, t),
            function(e) {
                for (var a = [], i = 0; i < n.length; i++) {
                    var s = n[i],
                        l = f[s.id];
                    l.refs--, a.push(l)
                }
                if (e) {
                    var u = r(e);
                    o(u, t)
                }
                for (var i = 0; i < a.length; i++) {
                    var l = a[i];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete f[l.id]
                    }
                }
            }
    };
    var E = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
}, function(e, t) {
    "use strict";
    ! function(e, t, n, o, r, a, i) {
        e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
            (e[r].q = e[r].q || []).push(arguments)
        }, e[r].l = 1 * new Date, a = t.createElement(n), i = t.getElementsByTagName(n)[0], a.async = 1, a.src = o, i.parentNode.insertBefore(a, i)
    }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-80530812-1", "auto"), ga("send", "pageview")
}]);