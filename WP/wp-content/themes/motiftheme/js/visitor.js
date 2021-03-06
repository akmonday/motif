(function(s, p) {
    function ba(a) {
        return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    function na(a) {
        if (!ca[a]) {
            var b = n.body,
                e = c("\x3c" + a + "\x3e").appendTo(b),
                d = e.css("display");
            e.remove();
            if ("none" === d || "" === d) {
                G || (G = n.createElement("iframe"), G.frameBorder = G.width = G.height = 0);
                b.appendChild(G);
                if (!I || !G.createElement) I = (G.contentWindow || G.contentDocument).document, I.write(("CSS1Compat" === n.compatMode ? "\x3c!doctype html\x3e" : "") + "\x3chtml\x3e\x3cbody\x3e"), I.close();
                e = I.createElement(a);
                I.body.appendChild(e);
                d = c.css(e, "display");
                b.removeChild(G)
            }
            ca[a] = d
        }
        return ca[a]
    }

    function J(a, b) {
        var e = {};
        c.each(oa.concat.apply([], oa.slice(0, b)), function() {
            e[this] = a
        });
        return e
    }

    function fb() {
        P = p
    }

    function pa() {
        setTimeout(fb, 0);
        return P = c.now()
    }

    function qa() {
        try {
            return new s.XMLHttpRequest
        } catch (a) {}
    }

    function da(a, b, e, d) {
        if (c.isArray(b)) c.each(b, function(b, f) {
            e || gb.test(a) ? d(a, f) : da(a + "[" + ("object" == typeof f || c.isArray(f) ? b : "") + "]", f, e, d)
        });
        else if (!e && null != b && "object" == typeof b)
            for (var f in b) da(a +
                "[" + f + "]", b[f], e, d);
        else d(a, b)
    }

    function ra(a, b) {
        var e, d, f = c.ajaxSettings.flatOptions || {};
        for (e in b) b[e] !== p && ((f[e] ? a : d || (d = {}))[e] = b[e]);
        d && c.extend(!0, a, d)
    }

    function U(a, b, c, d, f, g) {
        f = f || b.dataTypes[0];
        g = g || {};
        g[f] = !0;
        f = a[f];
        for (var h = 0, k = f ? f.length : 0, m = a === ea, l; h < k && (m || !l); h++) l = f[h](b, c, d), "string" == typeof l && (!m || g[l] ? l = p : (b.dataTypes.unshift(l), l = U(a, b, c, d, l, g)));
        (m || !l) && !g["*"] && (l = U(a, b, c, d, "*", g));
        return l
    }

    function sa(a) {
        return function(b, e) {
            "string" != typeof b && (e = b, b = "*");
            if (c.isFunction(e))
                for (var d =
                    b.toLowerCase().split(ta), f = 0, g = d.length, h, k; f < g; f++) h = d[f], (k = /^\+/.test(h)) && (h = h.substr(1) || "*"), h = a[h] = a[h] || [], h[k ? "unshift" : "push"](e)
        }
    }

    function ua(a, b, e) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = "width" === b ? hb : ib,
            g = 0,
            h = f.length;
        if (0 < d) {
            if ("border" !== e)
                for (; g < h; g++) e || (d -= parseFloat(c.css(a, "padding" + f[g])) || 0), "margin" === e ? d += parseFloat(c.css(a, e + f[g])) || 0 : d -= parseFloat(c.css(a, "border" + f[g] + "Width")) || 0;
            return d + "px"
        }
        d = Q(a, b, b);
        if (0 > d || null == d) d = a.style[b] || 0;
        d = parseFloat(d) || 0;
        if (e)
            for (; g <
                h; g++) d += parseFloat(c.css(a, "padding" + f[g])) || 0, "padding" !== e && (d += parseFloat(c.css(a, "border" + f[g] + "Width")) || 0), "margin" === e && (d += parseFloat(c.css(a, e + f[g])) || 0);
        return d + "px"
    }

    function jb(a, b) {
        b.src ? c.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : c.globalEval((b.text || b.textContent || b.innerHTML || "").replace(kb, "/*$0*/"));
        b.parentNode && b.parentNode.removeChild(b)
    }

    function va(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? wa(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && c.grep(a.getElementsByTagName("input"),
            wa)
    }

    function wa(a) {
        if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
    }

    function X(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function xa(a, b) {
        var e;
        if (1 === b.nodeType) {
            b.clearAttributes && b.clearAttributes();
            b.mergeAttributes && b.mergeAttributes(a);
            e = b.nodeName.toLowerCase();
            if ("object" === e) b.outerHTML = a.outerHTML;
            else if ("input" !== e || "checkbox" !== a.type && "radio" !== a.type)
                if ("option" ===
                    e) b.selected = a.defaultSelected;
                else {
                    if ("input" === e || "textarea" === e) b.defaultValue = a.defaultValue
                } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(c.expando)
        }
    }

    function ya(a, b) {
        if (1 === b.nodeType && c.hasData(a)) {
            var e, d, f;
            d = c._data(a);
            var g = c._data(b, d),
                h = d.events;
            if (h)
                for (e in delete g.handle, g.events = {}, h) {
                    d = 0;
                    for (f = h[e].length; d < f; d++) c.event.add(b, e + (h[e][d].namespace ? "." : "") + h[e][d].namespace, h[e][d], h[e][d].data)
                }
            g.data && (g.data = c.extend({},
                g.data))
        }
    }

    function za(a) {
        var b = Aa.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; b.length;) a.createElement(b.pop());
        return a
    }

    function Ba(a, b, e) {
        b = b || 0;
        if (c.isFunction(b)) return c.grep(a, function(a, c) {
            return !!b.call(a, c, a) === e
        });
        if (b.nodeType) return c.grep(a, function(a, c) {
            return a === b === e
        });
        if ("string" == typeof b) {
            var d = c.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (lb.test(b)) return c.filter(b, d, !e);
            b = c.filter(b, d)
        }
        return c.grep(a, function(a, d) {
            return 0 <= c.inArray(a, b) === e
        })
    }

    function Y() {
        return !0
    }

    function K() {
        return !1
    }

    function Ca(a, b, e) {
        var d = b + "defer",
            f = b + "queue",
            g = b + "mark",
            h = c._data(a, d);
        h && ("queue" === e || !c._data(a, f)) && ("mark" === e || !c._data(a, g)) && setTimeout(function() {
            !c._data(a, f) && !c._data(a, g) && (c.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function fa(a) {
        for (var b in a)
            if (!("data" === b && c.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Da(a, b, e) {
        if (e === p && 1 === a.nodeType)
            if (e = "data-" + b.replace(mb, "-$1").toLowerCase(), e = a.getAttribute(e), "string" == typeof e) {
                try {
                    e = "true" === e ? !0 : "false" ===
                        e ? !1 : "null" === e ? null : c.isNumeric(e) ? parseFloat(e) : nb.test(e) ? c.parseJSON(e) : e
                } catch (d) {}
                c.data(a, b, e)
            } else e = p;
        return e
    }

    function ob(a) {
        var b = Ea[a] = {}, c, d;
        a = a.split(/\s+/);
        c = 0;
        for (d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var n = s.document,
        pb = s.navigator,
        qb = s.location,
        c = function() {
            function a() {
                if (!b.isReady) {
                    try {
                        n.documentElement.doScroll("left")
                    } catch (c) {
                        setTimeout(a, 1);
                        return
                    }
                    b.ready()
                }
            }
            var b = function(a, c) {
                return new b.fn.init(a, c, f)
            }, c = s.jQuery,
                d = s.$,
                f, g = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                h =
                    /\S/,
                k = /^\s+/,
                m = /\s+$/,
                l = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                z = /^[\],:{}\s]*$/,
                q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                F = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                r = /(?:^|:|,)(?:\s*\[)+/g,
                L = /(webkit)[ \/]([\w.]+)/,
                w = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                u = /(msie) ([\w.]+)/,
                A = /(mozilla)(?:.*? rv:([\w.]+))?/,
                y = /-([a-z]|[0-9])/ig,
                E = /^-ms-/,
                t = function(a, b) {
                    return (b + "").toUpperCase()
                }, B = pb.userAgent,
                x, O, rb = Object.prototype.toString,
                ga = Object.prototype.hasOwnProperty,
                ha = Array.prototype.push,
                W = Array.prototype.slice,
                Fa = String.prototype.trim,
                Ga = Array.prototype.indexOf,
                Ha = {};
            b.fn = b.prototype = {
                constructor: b,
                init: function(a, c, e) {
                    var d, f;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !c && n.body) return this.context = n, this[0] = n.body, this.selector = a, this.length = 1, this;
                    if ("string" == typeof a) {
                        "\x3c" !== a.charAt(0) || "\x3e" !== a.charAt(a.length - 1) || 3 > a.length ? d = g.exec(a) : d = [null, a, null];
                        if (d && (d[1] || !c)) {
                            if (d[1]) return f = (c = c instanceof b ? c[0] : c) ? c.ownerDocument ||
                                c : n, (e = l.exec(a)) ? b.isPlainObject(c) ? (a = [n.createElement(e[1])], b.fn.attr.call(a, c, !0)) : a = [f.createElement(e[1])] : (e = b.buildFragment([d[1]], [f]), a = (e.cacheable ? b.clone(e.fragment) : e.fragment).childNodes), b.merge(this, a);
                            if ((c = n.getElementById(d[2])) && c.parentNode) {
                                if (c.id !== d[2]) return e.find(a);
                                this.length = 1;
                                this[0] = c
                            }
                            this.context = n;
                            this.selector = a;
                            return this
                        }
                        return !c || c.jquery ? (c || e).find(a) : this.constructor(c).find(a)
                    }
                    if (b.isFunction(a)) return e.ready(a);
                    a.selector !== p && (this.selector = a.selector,
                        this.context = a.context);
                    return b.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return W.call(this, 0)
                },
                get: function(a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function(a, c, e) {
                    var d = this.constructor();
                    b.isArray(a) ? ha.apply(d, a) : b.merge(d, a);
                    d.prevObject = this;
                    d.context = this.context;
                    "find" === c ? d.selector = this.selector + (this.selector ? " " : "") + e : c && (d.selector = this.selector + "." + c + "(" + e + ")");
                    return d
                },
                each: function(a,
                    c) {
                    return b.each(this, a, c)
                },
                ready: function(a) {
                    b.bindReady();
                    x.add(a);
                    return this
                },
                eq: function(a) {
                    a = +a;
                    return -1 === a ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(W.apply(this, arguments), "slice", W.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(b.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: ha,
                sort: [].sort,
                splice: [].splice
            };
            b.fn.init.prototype = b.fn;
            b.extend = b.fn.extend = function() {
                var a, c, e, d, f, g, x = arguments[0] || {}, h = 1,
                    O = arguments.length,
                    k = !1;
                "boolean" == typeof x && (k = x, x = arguments[1] || {}, h = 2);
                "object" != typeof x && !b.isFunction(x) && (x = {});
                for (O === h && (x = this, --h); h < O; h++)
                    if (null != (a = arguments[h]))
                        for (c in a) e = x[c], d = a[c], x !== d && (k && d && (b.isPlainObject(d) || (f = b.isArray(d))) ? (f ? (f = !1, g = e && b.isArray(e) ? e : []) : g = e && b.isPlainObject(e) ? e : {}, x[c] = b.extend(k, g, d)) : d !== p && (x[c] = d));
                return x
            };
            b.extend({
                noConflict: function(a) {
                    s.$ ===
                        b && (s.$ = d);
                    a && s.jQuery === b && (s.jQuery = c);
                    return b
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? b.readyWait++ : b.ready(!0)
                },
                ready: function(a) {
                    if (!0 === a && !--b.readyWait || !0 !== a && !b.isReady) {
                        if (!n.body) return setTimeout(b.ready, 1);
                        b.isReady = !0;
                        !0 !== a && 0 < --b.readyWait || (x.fireWith(n, [b]), b.fn.trigger && b(n).trigger("ready").off("ready"))
                    }
                },
                bindReady: function() {
                    if (!x) {
                        x = b.Callbacks("once memory");
                        if ("complete" === n.readyState) return setTimeout(b.ready, 1);
                        if (n.addEventListener) n.addEventListener("DOMContentLoaded",
                            O, !1), s.addEventListener("load", b.ready, !1);
                        else if (n.attachEvent) {
                            n.attachEvent("onreadystatechange", O);
                            s.attachEvent("onload", b.ready);
                            var c = !1;
                            try {
                                c = null == s.frameElement
                            } catch (e) {}
                            n.documentElement.doScroll && c && a()
                        }
                    }
                },
                isFunction: function(a) {
                    return "function" === b.type(a)
                },
                isArray: Array.isArray || function(a) {
                    return "array" === b.type(a)
                },
                isWindow: function(a) {
                    return a && "object" == typeof a && "setInterval" in a
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return null == a ?
                        String(a) : Ha[rb.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || "object" !== b.type(a) || a.nodeType || b.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !ga.call(a, "constructor") && !ga.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    for (var e in a);
                    return e === p || ga.call(a, e)
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw Error(a);
                },
                parseJSON: function(a) {
                    if ("string" != typeof a || !a) return null;
                    a = b.trim(a);
                    if (s.JSON && s.JSON.parse) return s.JSON.parse(a);
                    if (z.test(a.replace(q, "@").replace(F, "]").replace(r, ""))) return (new Function("return " + a))();
                    b.error("Invalid JSON: " + a)
                },
                parseXML: function(a) {
                    var c, e;
                    try {
                        s.DOMParser ? (e = new DOMParser, c = e.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a))
                    } catch (d) {
                        c = p
                    }(!c || !c.documentElement || c.getElementsByTagName("parsererror").length) && b.error("Invalid XML: " + a);
                    return c
                },
                noop: function() {},
                globalEval: function(a) {
                    a && h.test(a) && (s.execScript || function(a) {
                        s.eval.call(s,
                            a)
                    })(a)
                },
                camelCase: function(a) {
                    return a.replace(E, "ms-").replace(y, t)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, e) {
                    var d, f = 0,
                        g = a.length,
                        x = g === p || b.isFunction(a);
                    if (e)
                        if (x)
                            for (d in a) {
                                if (!1 === c.apply(a[d], e)) break
                            } else
                                for (; f < g && !1 !== c.apply(a[f++], e););
                        else if (x)
                        for (d in a) {
                            if (!1 === c.call(a[d], d, a[d])) break
                        } else
                            for (; f < g && !1 !== c.call(a[f], f, a[f++]););
                    return a
                },
                trim: Fa ? function(a) {
                    return null == a ? "" : Fa.call(a)
                } : function(a) {
                    return null ==
                        a ? "" : (a + "").replace(k, "").replace(m, "")
                },
                makeArray: function(a, c) {
                    var e = c || [];
                    if (null != a) {
                        var d = b.type(a);
                        null == a.length || "string" === d || "function" === d || "regexp" === d || b.isWindow(a) ? ha.call(e, a) : b.merge(e, a)
                    }
                    return e
                },
                inArray: function(a, b, c) {
                    var e;
                    if (b) {
                        if (Ga) return Ga.call(b, a, c);
                        e = b.length;
                        for (c = c ? 0 > c ? Math.max(0, e + c) : c : 0; c < e; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, b) {
                    var c = a.length,
                        e = 0;
                    if ("number" == typeof b.length)
                        for (var d = b.length; e < d; e++) a[c++] = b[e];
                    else
                        for (; b[e] !== p;) a[c++] =
                            b[e++];
                    a.length = c;
                    return a
                },
                grep: function(a, b, c) {
                    var e = [],
                        d;
                    c = !! c;
                    for (var f = 0, g = a.length; f < g; f++) d = !! b(a[f], f), c !== d && e.push(a[f]);
                    return e
                },
                map: function(a, c, e) {
                    var d, f, g = [],
                        x = 0,
                        h = a.length;
                    if (a instanceof b || h !== p && "number" == typeof h && (0 < h && a[0] && a[h - 1] || 0 === h || b.isArray(a)))
                        for (; x < h; x++) d = c(a[x], x, e), null != d && (g[g.length] = d);
                    else
                        for (f in a) d = c(a[f], f, e), null != d && (g[g.length] = d);
                    return g.concat.apply([], g)
                },
                guid: 1,
                proxy: function(a, c) {
                    if ("string" == typeof c) {
                        var e = a[c];
                        c = a;
                        a = e
                    }
                    if (!b.isFunction(a)) return p;
                    var d = W.call(arguments, 2),
                        e = function() {
                            return a.apply(c, d.concat(W.call(arguments)))
                        };
                    e.guid = a.guid = a.guid || e.guid || b.guid++;
                    return e
                },
                access: function(a, c, e, d, f, g) {
                    var x = a.length;
                    if ("object" == typeof c) {
                        for (var h in c) b.access(a, h, c[h], d, f, e);
                        return a
                    }
                    if (e !== p) {
                        d = !g && d && b.isFunction(e);
                        for (h = 0; h < x; h++) f(a[h], c, d ? e.call(a[h], h, f(a[h], c)) : e, g);
                        return a
                    }
                    return x ? f(a[0], c) : p
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    a = L.exec(a) || w.exec(a) || u.exec(a) || 0 > a.indexOf("compatible") &&
                        A.exec(a) || [];
                    return {
                        browser: a[1] || "",
                        version: a[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    b.extend(!0, a, this);
                    a.superclass = this;
                    a.fn = a.prototype = this();
                    a.fn.constructor = a;
                    a.sub = this.sub;
                    a.fn.init = function(e, d) {
                        d && d instanceof b && !(d instanceof a) && (d = a(d));
                        return b.fn.init.call(this, e, d, c)
                    };
                    a.fn.init.prototype = a.fn;
                    var c = a(n);
                    return a
                },
                browser: {}
            });
            b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                Ha["[object " + b + "]"] = b.toLowerCase()
            });
            B = b.uaMatch(B);
            B.browser && (b.browser[B.browser] = !0, b.browser.version = B.version);
            b.browser.webkit && (b.browser.safari = !0);
            h.test(" ") && (k = /^[\s\xA0]+/, m = /[\s\xA0]+$/);
            f = b(n);
            n.addEventListener ? O = function() {
                n.removeEventListener("DOMContentLoaded", O, !1);
                b.ready()
            } : n.attachEvent && (O = function() {
                "complete" === n.readyState && (n.detachEvent("onreadystatechange", O), b.ready())
            });
            return b
        }(),
        Ea = {};
    c.Callbacks = function(a) {
        a = a ? Ea[a] || ob(a) : {};
        var b = [],
            e = [],
            d, f, g, h, k, m = function(e) {
                var d, f, g, h;
                d = 0;
                for (f = e.length; d <
                    f; d++) g = e[d], h = c.type(g), "array" === h ? m(g) : "function" === h && (!a.unique || !z.has(g)) && b.push(g)
            }, l = function(c, l) {
                l = l || [];
                d = !a.memory || [c, l];
                f = !0;
                k = g || 0;
                g = 0;
                for (h = b.length; b && k < h; k++)
                    if (!1 === b[k].apply(c, l) && a.stopOnFalse) {
                        d = !0;
                        break
                    }
                f = !1;
                b && (a.once ? !0 === d ? z.disable() : b = [] : e && e.length && (d = e.shift(), z.fireWith(d[0], d[1])))
            }, z = {
                add: function() {
                    if (b) {
                        var a = b.length;
                        m(arguments);
                        f ? h = b.length : d && !0 !== d && (g = a, l(d[0], d[1]))
                    }
                    return this
                },
                remove: function() {
                    if (b)
                        for (var c = arguments, e = 0, d = c.length; e < d; e++)
                            for (var g =
                                0; g < b.length && !(c[e] === b[g] && (f && g <= h && (h--, g <= k && k--), b.splice(g--, 1), a.unique)); g++);
                    return this
                },
                has: function(a) {
                    if (b)
                        for (var c = 0, e = b.length; c < e; c++)
                            if (a === b[c]) return !0;
                    return !1
                },
                empty: function() {
                    b = [];
                    return this
                },
                disable: function() {
                    b = e = d = p;
                    return this
                },
                disabled: function() {
                    return !b
                },
                lock: function() {
                    e = p;
                    (!d || !0 === d) && z.disable();
                    return this
                },
                locked: function() {
                    return !e
                },
                fireWith: function(b, c) {
                    e && (f ? a.once || e.push([b, c]) : (!a.once || !d) && l(b, c));
                    return this
                },
                fire: function() {
                    z.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!d
                }
            };
        return z
    };
    var ia = [].slice;
    c.extend({
        Deferred: function(a) {
            var b = c.Callbacks("once memory"),
                e = c.Callbacks("once memory"),
                d = c.Callbacks("memory"),
                f = "pending",
                g = {
                    resolve: b,
                    reject: e,
                    notify: d
                }, h = {
                    done: b.add,
                    fail: e.add,
                    progress: d.add,
                    state: function() {
                        return f
                    },
                    isResolved: b.fired,
                    isRejected: e.fired,
                    then: function(a, b, c) {
                        k.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function() {
                        k.done.apply(k, arguments).fail.apply(k, arguments);
                        return this
                    },
                    pipe: function(a, b, e) {
                        return c.Deferred(function(d) {
                            c.each({
                                done: [a,
                                    "resolve"
                                ],
                                fail: [b, "reject"],
                                progress: [e, "notify"]
                            }, function(a, b) {
                                var e = b[0],
                                    f = b[1],
                                    g;
                                c.isFunction(e) ? k[a](function() {
                                    (g = e.apply(this, arguments)) && c.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === k ? d : this, [g])
                                }) : k[a](d[f])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (null == a) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                }, k = h.promise({}),
                m;
            for (m in g) k[m] = g[m].fire, k[m + "With"] = g[m].fireWith;
            k.done(function() {
                f = "resolved"
            }, e.disable, d.lock).fail(function() {
                    f = "rejected"
                },
                b.disable, d.lock);
            a && a.call(k, k);
            return k
        },
        when: function(a) {
            function b(a) {
                return function(b) {
                    h[a] = 1 < arguments.length ? ia.call(arguments, 0) : b;
                    m.notifyWith(l, h)
                }
            }

            function e(a) {
                return function(b) {
                    d[a] = 1 < arguments.length ? ia.call(arguments, 0) : b;
                    --k || m.resolveWith(m, d)
                }
            }
            var d = ia.call(arguments, 0),
                f = 0,
                g = d.length,
                h = Array(g),
                k = g,
                m = 1 >= g && a && c.isFunction(a.promise) ? a : c.Deferred(),
                l = m.promise();
            if (1 < g) {
                for (; f < g; f++) d[f] && d[f].promise && c.isFunction(d[f].promise) ? d[f].promise().then(e(f), m.reject, b(f)) : --k;
                k || m.resolveWith(m,
                    d)
            } else m !== a && m.resolveWith(m, g ? [a] : []);
            return l
        }
    });
    c.support = function() {
        var a, b, e, d, f, g, h, k, m, l = n.createElement("div");
        l.setAttribute("className", "t");
        l.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
        b = l.getElementsByTagName("*");
        e = l.getElementsByTagName("a")[0];
        if (!b || !b.length || !e) return {};
        d = n.createElement("select");
        f = d.appendChild(n.createElement("option"));
        b = l.getElementsByTagName("input")[0];
        a = {
            leadingWhitespace: 3 === l.firstChild.nodeType,
            tbody: !l.getElementsByTagName("tbody").length,
            htmlSerialize: !! l.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: "/a" === e.getAttribute("href"),
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !! e.style.cssFloat,
            checkOn: "on" === b.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== l.className,
            enctype: !! n.createElement("form").enctype,
            html5Clone: "\x3c:nav\x3e\x3c/:nav\x3e" !== n.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        };
        b.checked = !0;
        a.noCloneChecked = b.cloneNode(!0).checked;
        d.disabled = !0;
        a.optDisabled = !f.disabled;
        try {
            delete l.test
        } catch (p) {
            a.deleteExpando = !1
        }!l.addEventListener && l.attachEvent && l.fireEvent && (l.attachEvent("onclick", function() {
            a.noCloneEvent = !1
        }), l.cloneNode(!0).fireEvent("onclick"));
        b = n.createElement("input");
        b.value = "t";
        b.setAttribute("type", "radio");
        a.radioValue = "t" === b.value;
        b.setAttribute("checked", "checked");
        l.appendChild(b);
        e = n.createDocumentFragment();
        e.appendChild(l.lastChild);
        a.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.appendChecked = b.checked;
        e.removeChild(b);
        e.appendChild(l);
        l.innerHTML = "";
        s.getComputedStyle && (g = n.createElement("div"), g.style.width = "0", g.style.marginRight = "0", l.style.width = "2px", l.appendChild(g), a.reliableMarginRight = 0 === (parseInt((s.getComputedStyle(g, null) || {
            marginRight: 0
        }).marginRight, 10) || 0));
        if (l.attachEvent)
            for (k in {
                submit: 1,
                change: 1,
                focusin: 1
            }) g = "on" + k, (m = g in l) || (l.setAttribute(g, "return;"), m = "function" == typeof l[g]), a[k + "Bubbles"] = m;
        e.removeChild(l);
        e = d = f = g = l = b = null;
        c(function() {
            var b, e, d, f, g, k = n.getElementsByTagName("body")[0];
            !k || (b = n.createElement("div"), b.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", k.insertBefore(b, k.firstChild), l = n.createElement("div"), b.appendChild(l), l.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd style\x3d'padding:0;border:0;display:none'\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e",
                h = l.getElementsByTagName("td"), m = 0 === h[0].offsetHeight, h[0].style.display = "", h[1].style.display = "none", a.reliableHiddenOffsets = m && 0 === h[0].offsetHeight, l.innerHTML = "", l.style.width = l.style.paddingLeft = "1px", c.boxModel = a.boxModel = 2 === l.offsetWidth, "undefined" != typeof l.style.zoom && (l.style.display = "inline", l.style.zoom = 1, a.inlineBlockNeedsLayout = 2 === l.offsetWidth, l.style.display = "", l.innerHTML = "\x3cdiv style\x3d'width:4px;'\x3e\x3c/div\x3e", a.shrinkWrapBlocks = 2 !== l.offsetWidth), l.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;",
                l.innerHTML = "\x3cdiv style\x3d'position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e\x3ctable style\x3d'position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e", e = l.firstChild, d = e.firstChild, f = e.nextSibling.firstChild.firstChild, g = {
                    doesNotAddBorder: 5 !== d.offsetTop,
                    doesAddBorderForTableAndCells: 5 ===
                        f.offsetTop
                }, d.style.position = "fixed", d.style.top = "20px", g.fixedPosition = 20 === d.offsetTop || 15 === d.offsetTop, d.style.position = d.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", g.subtractsBorderForOverflowNotVisible = -5 === d.offsetTop, g.doesNotIncludeMarginInBodyOffset = 1 !== k.offsetTop, k.removeChild(b), l = null, c.extend(a, g))
        });
        return a
    }();
    var nb = /^(?:\{.*\}|\[.*\])$/,
        mb = /([A-Z])/g;
    c.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
            return !!a && !fa(a)
        },
        data: function(a, b, e, d) {
            if (c.acceptData(a)) {
                var f, g;
                f = c.expando;
                var h = "string" == typeof b,
                    k = a.nodeType,
                    m = k ? c.cache : a,
                    l = k ? a[f] : a[f] && f,
                    n = "events" === b;
                if (l && m[l] && (n || d || m[l].data) || !(h && e === p)) {
                    l || (k ? a[f] = l = ++c.uuid : l = f);
                    m[l] || (m[l] = {}, k || (m[l].toJSON = c.noop));
                    if ("object" == typeof b || "function" == typeof b) d ? m[l] = c.extend(m[l], b) : m[l].data = c.extend(m[l].data,
                        b);
                    a = f = m[l];
                    d || (f.data || (f.data = {}), f = f.data);
                    e !== p && (f[c.camelCase(b)] = e);
                    if (n && !f[b]) return a.events;
                    h ? (g = f[b], null == g && (g = f[c.camelCase(b)])) : g = f;
                    return g
                }
            }
        },
        removeData: function(a, b, e) {
            if (c.acceptData(a)) {
                var d, f, g, h = c.expando,
                    k = a.nodeType,
                    m = k ? c.cache : a,
                    l = k ? a[h] : h;
                if (m[l]) {
                    if (b && (d = e ? m[l] : m[l].data)) {
                        c.isArray(b) || (b in d ? b = [b] : (b = c.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        f = 0;
                        for (g = b.length; f < g; f++) delete d[b[f]];
                        if (!(e ? fa : c.isEmptyObject)(d)) return
                    }
                    if (!e && (delete m[l].data, !fa(m[l]))) return;
                    c.support.deleteExpando || !m.setInterval ? delete m[l] : m[l] = null;
                    k && (c.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
                }
            }
        },
        _data: function(a, b, e) {
            return c.data(a, b, e, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = c.noData[a.nodeName.toLowerCase()];
                if (b) return !0 !== b && a.getAttribute("classid") === b
            }
            return !0
        }
    });
    c.fn.extend({
        data: function(a, b) {
            var e, d, f, g = null;
            if ("undefined" == typeof a) {
                if (this.length && (g = c.data(this[0]), 1 === this[0].nodeType && !c._data(this[0], "parsedAttrs"))) {
                    d =
                        this[0].attributes;
                    for (var h = 0, k = d.length; h < k; h++) f = d[h].name, 0 === f.indexOf("data-") && (f = c.camelCase(f.substring(5)), Da(this[0], f, g[f]));
                    c._data(this[0], "parsedAttrs", !0)
                }
                return g
            }
            if ("object" == typeof a) return this.each(function() {
                c.data(this, a)
            });
            e = a.split(".");
            e[1] = e[1] ? "." + e[1] : "";
            return b === p ? (g = this.triggerHandler("getData" + e[1] + "!", [e[0]]), g === p && this.length && (g = c.data(this[0], a), g = Da(this[0], a, g)), g === p && e[1] ? this.data(e[0]) : g) : this.each(function() {
                var d = c(this),
                    f = [e[0], b];
                d.triggerHandler("setData" +
                    e[1] + "!", f);
                c.data(this, a, b);
                d.triggerHandler("changeData" + e[1] + "!", f)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                c.removeData(this, a)
            })
        }
    });
    c.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", c._data(a, b, (c._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, e) {
            !0 !== a && (e = b, b = a, a = !1);
            if (b) {
                e = e || "fx";
                var d = e + "mark";
                (a = a ? 0 : (c._data(b, d) || 1) - 1) ? c._data(b, d, a) : (c.removeData(b, d, !0), Ca(b, e, "mark"))
            }
        },
        queue: function(a, b, e) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = c._data(a, b), e && (!d || c.isArray(e) ? d = c._data(a,
                b, c.makeArray(e)) : d.push(e)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var e = c.queue(a, b),
                d = e.shift(),
                f = {};
            "inprogress" === d && (d = e.shift());
            d && ("fx" === b && e.unshift("inprogress"), c._data(a, b + ".run", f), d.call(a, function() {
                c.dequeue(a, b)
            }, f));
            e.length || (c.removeData(a, b + "queue " + b + ".run", !0), Ca(a, b, "queue"))
        }
    });
    c.fn.extend({
        queue: function(a, b) {
            "string" != typeof a && (b = a, a = "fx");
            return b === p ? c.queue(this[0], a) : this.each(function() {
                var e = c.queue(this, a, b);
                "fx" === a && "inprogress" !== e[0] && c.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                c.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = c.fx ? c.fx.speeds[a] || a : a;
            return this.queue(b || "fx", function(b, c) {
                var f = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(f)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            function e() {
                --h || d.resolveWith(f, [f])
            }
            "string" != typeof a && (a = p);
            a = a || "fx";
            for (var d = c.Deferred(), f = this, g = f.length, h = 1, k = a + "defer", m = a + "queue", l = a + "mark", n; g--;)
                if (n = c.data(f[g], k, p, !0) || (c.data(f[g], m, p, !0) ||
                    c.data(f[g], l, p, !0)) && c.data(f[g], k, c.Callbacks("once memory"), !0)) h++, n.add(e);
            e();
            return d.promise()
        }
    });
    var Ia = /[\n\t\r]/g,
        Z = /\s+/,
        sb = /\r/g,
        tb = /^(?:button|input)$/i,
        ub = /^(?:button|input|object|select|textarea)$/i,
        vb = /^a(?:rea)?$/i,
        Ja = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ka = c.support.getSetAttribute,
        D, La, Ma;
    c.fn.extend({
        attr: function(a, b) {
            return c.access(this, a, b, !0, c.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                c.removeAttr(this,
                    a)
            })
        },
        prop: function(a, b) {
            return c.access(this, a, b, !0, c.prop)
        },
        removeProp: function(a) {
            a = c.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = p, delete this[a]
                } catch (b) {}
            })
        },
        addClass: function(a) {
            var b, e, d, f, g, h, k;
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a) {
                b = a.split(Z);
                e = 0;
                for (d = this.length; e < d; e++)
                    if (f = this[e], 1 === f.nodeType)
                        if (!f.className && 1 === b.length) f.className = a;
                        else {
                            g = " " + f.className + " ";
                            h = 0;
                            for (k = b.length; h < k; h++)~ g.indexOf(" " +
                                b[h] + " ") || (g += b[h] + " ");
                            f.className = c.trim(g)
                        }
            }
            return this
        },
        removeClass: function(a) {
            var b, e, d, f, g, h, k;
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === p) {
                b = (a || "").split(Z);
                e = 0;
                for (d = this.length; e < d; e++)
                    if (f = this[e], 1 === f.nodeType && f.className)
                        if (a) {
                            g = (" " + f.className + " ").replace(Ia, " ");
                            h = 0;
                            for (k = b.length; h < k; h++) g = g.replace(" " + b[h] + " ", " ");
                            f.className = c.trim(g)
                        } else f.className = ""
            }
            return this
        },
        toggleClass: function(a,
            b) {
            var e = typeof a,
                d = "boolean" == typeof b;
            return c.isFunction(a) ? this.each(function(e) {
                c(this).toggleClass(a.call(this, e, this.className, b), b)
            }) : this.each(function() {
                if ("string" === e)
                    for (var f, g = 0, h = c(this), k = b, m = a.split(Z); f = m[g++];) k = d ? k : !h.hasClass(f), h[k ? "addClass" : "removeClass"](f);
                else if ("undefined" === e || "boolean" === e) this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b =
                0, c = this.length; b < c; b++)
                if (1 === this[b].nodeType && -1 < (" " + this[b].className + " ").replace(Ia, " ").indexOf(a)) return !0;
            return !1
        },
        val: function(a) {
            var b, e, d, f = this[0];
            if (arguments.length) return d = c.isFunction(a), this.each(function(e) {
                var f = c(this),
                    k;
                if (1 === this.nodeType && (d ? k = a.call(this, e, f.val()) : k = a, null == k ? k = "" : "number" == typeof k ? k += "" : c.isArray(k) && (k = c.map(k, function(a) {
                        return null == a ? "" : a + ""
                    })), b = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type], !b || !("set" in b) || b.set(this, k, "value") ===
                    p)) this.value = k
            });
            if (f) {
                if ((b = c.valHooks[f.nodeName.toLowerCase()] || c.valHooks[f.type]) && "get" in b && (e = b.get(f, "value")) !== p) return e;
                e = f.value;
                return "string" == typeof e ? e.replace(sb, "") : null == e ? "" : e
            }
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, e, d = a.selectedIndex,
                        f = [],
                        g = a.options,
                        h = "select-one" === a.type;
                    if (0 > d) return null;
                    a = h ? d : 0;
                    for (e = h ? d + 1 : g.length; a < e; a++)
                        if (b = g[a], b.selected && (c.support.optDisabled ? !b.disabled : null === b.getAttribute("disabled")) && (!b.parentNode.disabled || !c.nodeName(b.parentNode, "optgroup"))) {
                            b = c(b).val();
                            if (h) return b;
                            f.push(b)
                        }
                    return h && !f.length && g.length ? c(g[d]).val() : f
                },
                set: function(a, b) {
                    var e = c.makeArray(b);
                    c(a).find("option").each(function() {
                        this.selected = 0 <= c.inArray(c(this).val(), e)
                    });
                    e.length || (a.selectedIndex = -1);
                    return e
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, b, e, d) {
            var f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !==
                h) {
                if (d && b in c.attrFn) return c(a)[b](e);
                if ("undefined" == typeof a.getAttribute) return c.prop(a, b, e);
                (d = 1 !== h || !c.isXMLDoc(a)) && (b = b.toLowerCase(), g = c.attrHooks[b] || (Ja.test(b) ? La : D));
                if (e !== p) {
                    if (null === e) {
                        c.removeAttr(a, b);
                        return
                    }
                    if (g && "set" in g && d && (f = g.set(a, e, b)) !== p) return f;
                    a.setAttribute(b, "" + e);
                    return e
                }
                if (g && "get" in g && d && null !== (f = g.get(a, b))) return f;
                f = a.getAttribute(b);
                return null === f ? p : f
            }
        },
        removeAttr: function(a, b) {
            var e, d, f, g, h = 0;
            if (b && 1 === a.nodeType) {
                d = b.toLowerCase().split(Z);
                for (g =
                    d.length; h < g; h++)(f = d[h]) && (e = c.propFix[f] || f, c.attr(a, f, ""), a.removeAttribute(Ka ? f : e), Ja.test(f) && e in a && (a[e] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (tb.test(a.nodeName) && a.parentNode) c.error("type property can't be changed");
                    else if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) {
                        var e = a.value;
                        a.setAttribute("type", b);
                        e && (a.value = e);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return D && c.nodeName(a, "button") ? D.get(a, b) : b in a ? a.value : null
                },
                set: function(a, b, e) {
                    if (D && c.nodeName(a, "button")) return D.set(a,
                        b, e);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, b, e) {
            var d, f, g;
            g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return (g = 1 !== g || !c.isXMLDoc(a)) && (b = c.propFix[b] || b, f = c.propHooks[b]), e !== p ? f && "set" in f && (d = f.set(a, e, b)) !== p ? d : a[b] = e : f && "get" in f && null !==
                (d = f.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = a.getAttributeNode("tabindex");
                    return b && b.specified ? parseInt(b.value, 10) : ub.test(a.nodeName) || vb.test(a.nodeName) && a.href ? 0 : p
                }
            }
        }
    });
    c.attrHooks.tabindex = c.propHooks.tabIndex;
    La = {
        get: function(a, b) {
            var e, d = c.prop(a, b);
            return !0 === d || "boolean" != typeof d && (e = a.getAttributeNode(b)) && !1 !== e.nodeValue ? b.toLowerCase() : p
        },
        set: function(a, b, e) {
            var d;
            !1 === b ? c.removeAttr(a, e) : (d = c.propFix[e] || e, d in a && (a[d] = !0), a.setAttribute(e, e.toLowerCase()));
            return e
        }
    };
    Ka || (Ma = {
        name: !0,
        id: !0
    }, D = c.valHooks.button = {
        get: function(a, b) {
            var c;
            return (c = a.getAttributeNode(b)) && (Ma[b] ? "" !== c.nodeValue : c.specified) ? c.nodeValue : p
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            d || (d = n.createAttribute(c), a.setAttributeNode(d));
            return d.nodeValue = b + ""
        }
    }, c.attrHooks.tabindex.set = D.set, c.each(["width", "height"], function(a, b) {
        c.attrHooks[b] = c.extend(c.attrHooks[b], {
            set: function(a, c) {
                if ("" === c) return a.setAttribute(b, "auto"), c
            }
        })
    }), c.attrHooks.contenteditable = {
        get: D.get,
        set: function(a, b, c) {
            "" === b && (b = "false");
            D.set(a, b, c)
        }
    });
    c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function(a, b) {
        c.attrHooks[b] = c.extend(c.attrHooks[b], {
            get: function(a) {
                a = a.getAttribute(b, 2);
                return null === a ? p : a
            }
        })
    });
    c.support.style || (c.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || p
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    });
    c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected, {
        get: function(a) {
            a = a.parentNode;
            a && (a.selectedIndex,
                a.parentNode && a.parentNode.selectedIndex);
            return null
        }
    }));
    c.support.enctype || (c.propFix.enctype = "encoding");
    c.support.checkOn || c.each(["radio", "checkbox"], function() {
        c.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    });
    c.each(["radio", "checkbox"], function() {
        c.valHooks[this] = c.extend(c.valHooks[this], {
            set: function(a, b) {
                if (c.isArray(b)) return a.checked = 0 <= c.inArray(c(a).val(), b)
            }
        })
    });
    var ja = /^(?:textarea|input|select)$/i,
        Na = /^([^\.]*)?(?:\.(.+))?$/,
        wb = /\bhover(\.\S+)?\b/,
        xb = /^key/,
        yb = /^(?:mouse|contextmenu)|click/,
        Oa = /^(?:focusinfocus|focusoutblur)$/,
        zb = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        Ab = function(a) {
            (a = zb.exec(a)) && (a[1] = (a[1] || "").toLowerCase(), a[3] = a[3] && RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)"));
            return a
        }, Pa = function(a) {
            return c.event.special.hover ? a : a.replace(wb, "mouseenter$1 mouseleave$1")
        };
    c.event = {
        add: function(a, b, e, d, f) {
            var g, h, k, m, l, n, q, F, r;
            if (!(3 === a.nodeType || 8 === a.nodeType || !b || !e || !(g = c._data(a)))) {
                e.handler && (q = e, e = q.handler);
                e.guid || (e.guid = c.guid++);
                (k = g.events) || (g.events = k = {});
                (h = g.handle) || (g.handle = h = function(a) {
                    return "undefined" != typeof c && (!a || c.event.triggered !== a.type) ? c.event.dispatch.apply(h.elem, arguments) : p
                }, h.elem = a);
                b = c.trim(Pa(b)).split(" ");
                for (g = 0; g < b.length; g++) {
                    m = Na.exec(b[g]) || [];
                    l = m[1];
                    n = (m[2] || "").split(".").sort();
                    r = c.event.special[l] || {};
                    l = (f ? r.delegateType : r.bindType) || l;
                    r = c.event.special[l] || {};
                    m = c.extend({
                        type: l,
                        origType: m[1],
                        data: d,
                        handler: e,
                        guid: e.guid,
                        selector: f,
                        quick: Ab(f),
                        namespace: n.join(".")
                    }, q);
                    F = k[l];
                    if (!F &&
                        (F = k[l] = [], F.delegateCount = 0, !r.setup || !1 === r.setup.call(a, d, n, h))) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h);
                    r.add && (r.add.call(a, m), m.handler.guid || (m.handler.guid = e.guid));
                    f ? F.splice(F.delegateCount++, 0, m) : F.push(m);
                    c.event.global[l] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function(a, b, e, d, f) {
            var g = c.hasData(a) && c._data(a),
                h, k, m, l, n, q, p, r, s, w, u;
            if (g && (p = g.events)) {
                b = c.trim(Pa(b || "")).split(" ");
                for (h = 0; h < b.length; h++)
                    if (k = Na.exec(b[h]) || [], m = l = k[1], k = k[2], m) {
                        r = c.event.special[m] || {};
                        m = (d ? r.delegateType : r.bindType) || m;
                        w = p[m] || [];
                        n = w.length;
                        k = k ? RegExp("(^|\\.)" + k.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (q = 0; q < w.length; q++) u = w[q], (f || l === u.origType) && (!e || e.guid === u.guid) && (!k || k.test(u.namespace)) && (!d || d === u.selector || "**" === d && u.selector) && (w.splice(q--, 1), u.selector && w.delegateCount--, r.remove && r.remove.call(a, u));
                        0 === w.length && n !== w.length && ((!r.teardown || !1 === r.teardown.call(a, k)) && c.removeEvent(a, m, g.handle), delete p[m])
                    } else
                        for (m in p) c.event.remove(a,
                            m + b[h], e, d, !0);
                c.isEmptyObject(p) && (s = g.handle, s && (s.elem = null), c.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(a, b, e, d) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var f = a.type || a,
                    g = [],
                    h, k, m, l, n, q;
                if (!Oa.test(f + c.event.triggered) && (0 <= f.indexOf("!") && (f = f.slice(0, -1), h = !0), 0 <= f.indexOf(".") && (g = f.split("."), f = g.shift(), g.sort()), e && !c.event.customEvent[f] || c.event.global[f]))
                    if (a = "object" == typeof a ? a[c.expando] ? a : new c.Event(f, a) : new c.Event(f),
                        a.type = f, a.isTrigger = !0, a.exclusive = h, a.namespace = g.join("."), a.namespace_re = a.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, h = 0 > f.indexOf(":") ? "on" + f : "", e) {
                        if (a.result = p, a.target || (a.target = e), b = null != b ? c.makeArray(b) : [], b.unshift(a), l = c.event.special[f] || {}, !(l.trigger && !1 === l.trigger.apply(e, b))) {
                            q = [
                                [e, l.bindType || f]
                            ];
                            if (!d && !l.noBubble && !c.isWindow(e)) {
                                k = l.delegateType || f;
                                g = Oa.test(k + f) ? e : e.parentNode;
                                for (m = null; g; g = g.parentNode) q.push([g, k]), m = g;
                                m && m === e.ownerDocument && q.push([m.defaultView ||
                                    m.parentWindow || s, k
                                ])
                            }
                            for (k = 0; k < q.length && !a.isPropagationStopped(); k++) g = q[k][0], a.type = q[k][1], (n = (c._data(g, "events") || {})[a.type] && c._data(g, "handle")) && n.apply(g, b), (n = h && g[h]) && c.acceptData(g) && !1 === n.apply(g, b) && a.preventDefault();
                            a.type = f;
                            !d && !a.isDefaultPrevented() && (!l._default || !1 === l._default.apply(e.ownerDocument, b)) && ("click" !== f || !c.nodeName(e, "a")) && c.acceptData(e) && h && e[f] && ("focus" !== f && "blur" !== f || 0 !== a.target.offsetWidth) && !c.isWindow(e) && (m = e[h], m && (e[h] = null), c.event.triggered =
                                f, e[f](), c.event.triggered = p, m && (e[h] = m));
                            return a.result
                        }
                    } else
                        for (k in e = c.cache, e) e[k].events && e[k].events[f] && c.event.trigger(a, b, e[k].handle.elem, !0)
            }
        },
        dispatch: function(a) {
            a = c.event.fix(a || s.event);
            var b = (c._data(this, "events") || {})[a.type] || [],
                e = b.delegateCount,
                d = [].slice.call(arguments, 0),
                f = !a.exclusive && !a.namespace,
                g = [],
                h, k, m, l, n, q, F;
            d[0] = a;
            a.delegateTarget = this;
            if (e && !a.target.disabled && (!a.button || "click" !== a.type)) {
                m = c(this);
                m.context = this.ownerDocument || this;
                for (k = a.target; k != this; k =
                    k.parentNode || this) {
                    n = {};
                    q = [];
                    m[0] = k;
                    for (h = 0; h < e; h++) {
                        l = b[h];
                        F = l.selector;
                        if (n[F] === p) {
                            var r = n,
                                L = F,
                                w;
                            if (l.quick) {
                                w = l.quick;
                                var u = k.attributes || {};
                                w = (!w[1] || k.nodeName.toLowerCase() === w[1]) && (!w[2] || (u.id || {}).value === w[2]) && (!w[3] || w[3].test((u["class"] || {}).value))
                            } else w = m.is(F);
                            r[L] = w
                        }
                        n[F] && q.push(l)
                    }
                    q.length && g.push({
                        elem: k,
                        matches: q
                    })
                }
            }
            b.length > e && g.push({
                elem: this,
                matches: b.slice(e)
            });
            for (h = 0; h < g.length && !a.isPropagationStopped(); h++) {
                e = g[h];
                a.currentTarget = e.elem;
                for (b = 0; b < e.matches.length && !a.isImmediatePropagationStopped(); b++)
                    if (l = e.matches[b], f || !a.namespace && !l.namespace || a.namespace_re && a.namespace_re.test(l.namespace)) a.data = l.data, a.handleObj = l, l = ((c.event.special[l.origType] || {}).handle || l.handler).apply(e.elem, d), l !== p && (a.result = l, !1 === l && (a.preventDefault(), a.stopPropagation()))
            }
            return a.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, f, g = b.button,
                    h = b.fromElement;
                null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || n, d = c.documentElement, f = c.body, a.pageX = b.clientX + (d && d.scrollLeft || f && f.scrollLeft || 0) - (d && d.clientLeft ||
                    f && f.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || f && f.scrollTop || 0) - (d && d.clientTop || f && f.clientTop || 0));
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h);
                !a.which && g !== p && (a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[c.expando]) return a;
            var b, e, d = a,
                f = c.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props;
            a = c.Event(d);
            for (b = g.length; b;) e = g[--b], a[e] = d[e];
            a.target || (a.target = d.srcElement || n);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            a.metaKey === p && (a.metaKey = a.ctrlKey);
            return f.filter ? f.filter(a, d) : a
        },
        special: {
            ready: {
                setup: c.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, e) {
                    c.isWindow(this) && (this.onbeforeunload = e)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, e, d) {
            a = c.extend(new c.Event, e, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
            a.isDefaultPrevented() &&
                e.preventDefault()
        }
    };
    c.event.handle = c.event.dispatch;
    c.removeEvent = n.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    };
    c.Event = function(a, b) {
        if (!(this instanceof c.Event)) return new c.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? Y : K) : this.type = a;
        b && c.extend(this, b);
        this.timeStamp = a &&
            a.timeStamp || c.now();
        this[c.expando] = !0
    };
    c.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = Y;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = Y;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = Y;
            this.stopPropagation()
        },
        isDefaultPrevented: K,
        isPropagationStopped: K,
        isImmediatePropagationStopped: K
    };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        c.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var d = a.relatedTarget,
                    f = a.handleObj,
                    g;
                if (!d || d !== this && !c.contains(this, d)) a.type = f.origType, g = f.handler.apply(this, arguments), a.type = b;
                return g
            }
        }
    });
    c.support.submitBubbles || (c.event.special.submit = {
        setup: function() {
            if (c.nodeName(this, "form")) return !1;
            c.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = c.nodeName(a, "input") || c.nodeName(a, "button") ?
                    a.form : p) && !a._submit_attached && (c.event.add(a, "submit._submit", function(a) {
                    this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, !0)
                }), a._submit_attached = !0)
            })
        },
        teardown: function() {
            if (c.nodeName(this, "form")) return !1;
            c.event.remove(this, "._submit")
        }
    });
    c.support.changeBubbles || (c.event.special.change = {
        setup: function() {
            if (ja.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) c.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName &&
                        (this._just_changed = !0)
                }), c.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, c.event.simulate("change", this, a, !0))
                });
                return !1
            }
            c.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                ja.test(a.nodeName) && !a._change_attached && (c.event.add(a, "change._change", function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && c.event.simulate("change", this.parentNode, a, !0)
                }), a._change_attached = !0)
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated ||
                a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            c.event.remove(this, "._change");
            return ja.test(this.nodeName)
        }
    });
    c.support.focusinBubbles || c.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var e = 0,
            d = function(a) {
                c.event.simulate(b, a.target, c.event.fix(a), !0)
            };
        c.event.special[b] = {
            setup: function() {
                0 === e++ && n.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --e && n.removeEventListener(a, d, !0)
            }
        }
    });
    c.fn.extend({
        on: function(a,
            b, e, d, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof b && (e = b, b = p);
                for (h in a) this.on(h, b, e, a[h], f);
                return this
            }
            null == e && null == d ? (d = b, e = b = p) : null == d && ("string" == typeof b ? (d = e, e = p) : (d = e, e = b, b = p));
            if (!1 === d) d = K;
            else if (!d) return this;
            1 === f && (g = d, d = function(a) {
                c().off(a);
                return g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = c.guid++));
            return this.each(function() {
                c.event.add(this, a, d, e, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on.call(this, a, b, c, d, 1)
        },
        off: function(a, b, e) {
            if (a && a.preventDefault && a.handleObj) {
                var d =
                    a.handleObj;
                c(a.delegateTarget).off(d.namespace ? d.type + "." + d.namespace : d.type, d.selector, d.handler);
                return this
            }
            if ("object" == typeof a) {
                for (d in a) this.off(d, b, a[d]);
                return this
            }
            if (!1 === b || "function" == typeof b) e = b, b = p;
            !1 === e && (e = K);
            return this.each(function() {
                c.event.remove(this, a, e, b)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, e) {
            c(this.context).on(a, this.selector, b, e);
            return this
        },
        die: function(a, b) {
            c(this.context).off(a, this.selector ||
                "**", b);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                c.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) return c.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments,
                e = a.guid || c.guid++,
                d = 0,
                f = function(e) {
                    var f = (c._data(this, "lastToggle" + a.guid) || 0) % d;
                    c._data(this, "lastToggle" + a.guid, f + 1);
                    e.preventDefault();
                    return b[f].apply(this,
                        arguments) || !1
                };
            for (f.guid = e; d < b.length;) b[d++].guid = e;
            return this.click(f)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        c.fn[b] = function(a, c) {
            null == c && (c = a, a = null);
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        };
        c.attrFn && (c.attrFn[b] = !0);
        xb.test(b) && (c.event.fixHooks[b] = c.event.keyHooks);
        yb.test(b) && (c.event.fixHooks[b] = c.event.mouseHooks)
    });
    (function() {
        function a(a, b, c, e, f, g) {
            f = 0;
            for (var h = e.length; f < h; f++) {
                var k = e[f];
                if (k) {
                    for (var l = !1, k = k[a]; k;) {
                        if (k[d] === c) {
                            l = e[k.sizset];
                            break
                        }
                        if (1 === k.nodeType)
                            if (g || (k[d] = c, k.sizset = f), "string" != typeof b) {
                                if (k === b) {
                                    l = !0;
                                    break
                                }
                            } else if (0 < q.filter(b, [k]).length) {
                            l = k;
                            break
                        }
                        k = k[a]
                    }
                    e[f] = l
                }
            }
        }

        function b(a, b, c, e, f, g) {
            f = 0;
            for (var h = e.length; f < h; f++) {
                var k = e[f];
                if (k) {
                    for (var l = !1, k = k[a]; k;) {
                        if (k[d] ===
                            c) {
                            l = e[k.sizset];
                            break
                        }
                        1 === k.nodeType && !g && (k[d] = c, k.sizset = f);
                        if (k.nodeName.toLowerCase() === b) {
                            l = k;
                            break
                        }
                        k = k[a]
                    }
                    e[f] = l
                }
            }
        }
        var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""),
            f = 0,
            g = Object.prototype.toString,
            h = !1,
            k = !0,
            m = /\\/g,
            l = /\r\n/g,
            z = /\W/;
        [0, 0].sort(function() {
                k = !1;
                return 0
            });
        var q = function(a, b, c, d) {
            c = c || [];
            var f = b = b || n;
            if (1 !== b.nodeType && 9 !== b.nodeType) return [];
            if (!a || "string" != typeof a) return c;
            var h, k, l, m, p, z, s = !0,
                t = q.isXML(b),
                v = [],
                u = a;
            do
                if (e.exec(""), h = e.exec(u))
                    if (u = h[3], v.push(h[1]), h[2]) {
                        m = h[3];
                        break
                    } while (h);
            if (1 < v.length && L.exec(a))
                if (2 === v.length && r.relative[v[0]]) k = B(v[0] + v[1], b, d);
                else
                    for (k = r.relative[v[0]] ? [b] : q(v.shift(), b); v.length;) a = v.shift(), r.relative[a] && (a += v.shift()), k = B(a, k, d);
                else if (!d && 1 < v.length && 9 === b.nodeType && !t && r.match.ID.test(v[0]) && !r.match.ID.test(v[v.length - 1]) && (p = q.find(v.shift(), b, t), b = p.expr ? q.filter(p.expr, p.set)[0] :
                p.set[0]), b) {
                p = d ? {
                    expr: v.pop(),
                    set: A(d)
                } : q.find(v.pop(), 1 === v.length && ("~" === v[0] || "+" === v[0]) && b.parentNode ? b.parentNode : b, t);
                k = p.expr ? q.filter(p.expr, p.set) : p.set;
                for (0 < v.length ? l = A(k) : s = !1; v.length;) h = z = v.pop(), r.relative[z] ? h = v.pop() : z = "", null == h && (h = b), r.relative[z](l, h, t)
            } else l = [];
            l || (l = k);
            l || q.error(z || a);
            if ("[object Array]" === g.call(l))
                if (s)
                    if (b && 1 === b.nodeType)
                        for (a = 0; null != l[a]; a++) l[a] && (!0 === l[a] || 1 === l[a].nodeType && q.contains(b, l[a])) && c.push(k[a]);
                    else
                        for (a = 0; null != l[a]; a++) l[a] &&
                            1 === l[a].nodeType && c.push(k[a]);
                    else c.push.apply(c, l);
                    else A(l, c);
            m && (q(m, f, c, d), q.uniqueSort(c));
            return c
        };
        q.uniqueSort = function(a) {
            if (E && (h = k, a.sort(E), h))
                for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
            return a
        };
        q.matches = function(a, b) {
            return q(a, null, null, b)
        };
        q.matchesSelector = function(a, b) {
            return 0 < q(b, null, null, [a]).length
        };
        q.find = function(a, b, c) {
            var e, d, f, g, h, k;
            if (!a) return [];
            d = 0;
            for (f = r.order.length; d < f; d++)
                if (h = r.order[d], g = r.leftMatch[h].exec(a))
                    if (k = g[1], g.splice(1, 1), "\\" !==
                        k.substr(k.length - 1) && (g[1] = (g[1] || "").replace(m, ""), e = r.find[h](g, b, c), null != e)) {
                        a = a.replace(r.match[h], "");
                        break
                    }
            e || (e = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
            return {
                set: e,
                expr: a
            }
        };
        q.filter = function(a, b, c, e) {
            for (var d, f, g, h, k, l, m, n, z = a, t = [], s = b, u = b && b[0] && q.isXML(b[0]); a && b.length;) {
                for (g in r.filter)
                    if (null != (d = r.leftMatch[g].exec(a)) && d[2])
                        if (l = r.filter[g], k = d[1], f = !1, d.splice(1, 1), "\\" !== k.substr(k.length - 1)) {
                            s === t && (t = []);
                            if (r.preFilter[g])
                                if (d = r.preFilter[g](d,
                                    s, c, t, e, u)) {
                                    if (!0 === d) continue
                                } else f = h = !0;
                            if (d)
                                for (m = 0; null != (k = s[m]); m++) k && (h = l(k, d, m, s), n = e ^ h, c && null != h ? n ? f = !0 : s[m] = !1 : n && (t.push(k), f = !0));
                            if (h !== p) {
                                c || (s = t);
                                a = a.replace(r.match[g], "");
                                if (!f) return [];
                                break
                            }
                        }
                if (a === z)
                    if (null == f) q.error(a);
                    else break;
                z = a
            }
            return s
        };
        q.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        var s = q.getText = function(a) {
            var b, c;
            b = a.nodeType;
            var d = "";
            if (b)
                if (1 === b || 9 === b) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    if ("string" == typeof a.innerText) return a.innerText.replace(l,
                        "");
                    for (a = a.firstChild; a; a = a.nextSibling) d += s(a)
                } else {
                    if (3 === b || 4 === b) return a.nodeValue
                } else
                    for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (d += s(c));
            return d
        }, r = q.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function(a) {
                        return a.getAttribute("href")
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function(a, b) {
                        var c = "string" == typeof b,
                            d = c && !z.test(b),
                            c = c && !d;
                        d && (b = b.toLowerCase());
                        for (var d = 0, e = a.length, f; d < e; d++)
                            if (f = a[d]) {
                                for (;
                                    (f = f.previousSibling) && 1 !== f.nodeType;);
                                a[d] = c || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                            }
                        c && q.filter(b, a, !0)
                    },
                    "\x3e": function(a, b) {
                        var c, d = "string" == typeof b,
                            e = 0,
                            f = a.length;
                        if (d && !z.test(b))
                            for (b = b.toLowerCase(); e < f; e++) {
                                if (c = a[e]) c = c.parentNode, a[e] = c.nodeName.toLowerCase() === b ? c : !1
                            } else {
                                for (; e < f; e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && q.filter(b, a, !0)
                            }
                    },
                    "": function(c, d, e) {
                        var g, h = f++,
                            k = a;
                        "string" == typeof d && !z.test(d) && (d = d.toLowerCase(), g = d, k = b);
                        k("parentNode", d, h, c, g, e)
                    },
                    "~": function(c, d, e) {
                        var g, h = f++,
                            k = a;
                        "string" ==
                            typeof d && !z.test(d) && (d = d.toLowerCase(), g = d, k = b);
                        k("previousSibling", d, h, c, g, e)
                    }
                },
                find: {
                    ID: function(a, b, c) {
                        if ("undefined" != typeof b.getElementById && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                    },
                    NAME: function(a, b) {
                        if ("undefined" != typeof b.getElementsByName) {
                            for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return 0 === c.length ? null : c
                        }
                    },
                    TAG: function(a, b) {
                        if ("undefined" != typeof b.getElementsByTagName) return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function(a, b, c, d, e, f) {
                        a = " " + a[1].replace(m, "") + " ";
                        if (f) return a;
                        f = 0;
                        for (var g; null != (g = b[f]); f++) g && (e ^ (g.className && 0 <= (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || d.push(g) : c && (b[f] = !1));
                        return !1
                    },
                    ID: function(a) {
                        return a[1].replace(m, "")
                    },
                    TAG: function(a, b) {
                        return a[1].replace(m, "").toLowerCase()
                    },
                    CHILD: function(a) {
                        if ("nth" === a[1]) {
                            a[2] || q.error(a[0]);
                            a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0;
                            a[3] = b[3] - 0
                        } else a[2] && q.error(a[0]);
                        a[0] = f++;
                        return a
                    },
                    ATTR: function(a, b, c, d, e, f) {
                        b = a[1] = a[1].replace(m, "");
                        !f && r.attrMap[b] && (a[1] = r.attrMap[b]);
                        a[4] = (a[4] || a[5] || "").replace(m, "");
                        "~\x3d" === a[2] && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function(a, b, c, d, f) {
                        if ("not" === a[1])
                            if (1 < (e.exec(a[3]) || "").length || /^\w/.test(a[3])) a[3] = q(a[3], null, null, b);
                            else return a = q.filter(a[3], b, c, 1 ^ f), c || d.push.apply(d, a), !1;
                            else if (r.match.POS.test(a[0]) || r.match.CHILD.test(a[0])) return !0;
                        return a
                    },
                    POS: function(a) {
                        a.unshift(!0);
                        return a
                    }
                },
                filters: {
                    enabled: function(a) {
                        return !1 === a.disabled && "hidden" !== a.type
                    },
                    disabled: function(a) {
                        return !0 === a.disabled
                    },
                    checked: function(a) {
                        return !0 === a.checked
                    },
                    selected: function(a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return !0 === a.selected
                    },
                    parent: function(a) {
                        return !!a.firstChild
                    },
                    empty: function(a) {
                        return !a.firstChild
                    },
                    has: function(a, b, c) {
                        return !!q(c[3], a).length
                    },
                    header: function(a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function(a) {
                        var b = a.getAttribute("type"),
                            c = a.type;
                        return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                    },
                    radio: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                    },
                    checkbox: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                    },
                    file: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "file" === a.type
                    },
                    password: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "password" === a.type
                    },
                    submit: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b || "button" === b) && "submit" === a.type
                    },
                    image: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "image" === a.type
                    },
                    reset: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b || "button" === b) && "reset" === a.type
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    input: function(a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function(a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function(a, b) {
                        return 0 === b
                    },
                    last: function(a, b, c, d) {
                        return b === d.length -
                            1
                    },
                    even: function(a, b) {
                        return 0 === b % 2
                    },
                    odd: function(a, b) {
                        return 1 === b % 2
                    },
                    lt: function(a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function(a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function(a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function(a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function(a, b, c, d) {
                        var e = b[1],
                            f = r.filters[e];
                        if (f) return f(a, c, b, d);
                        if ("contains" === e) return 0 <= (a.textContent || a.innerText || s([a]) || "").indexOf(b[3]);
                        if ("not" === e) {
                            b = b[3];
                            c = 0;
                            for (d = b.length; c < d; c++)
                                if (b[c] === a) return !1;
                            return !0
                        }
                        q.error(e)
                    },
                    CHILD: function(a, b) {
                        var c,
                            e, f, g, h, k;
                        c = b[1];
                        k = a;
                        switch (c) {
                            case "only":
                            case "first":
                                for (; k = k.previousSibling;)
                                    if (1 === k.nodeType) return !1;
                                if ("first" === c) return !0;
                                k = a;
                            case "last":
                                for (; k = k.nextSibling;)
                                    if (1 === k.nodeType) return !1;
                                return !0;
                            case "nth":
                                c = b[2];
                                e = b[3];
                                if (1 === c && 0 === e) return !0;
                                f = b[0];
                                if ((g = a.parentNode) && (g[d] !== f || !a.nodeIndex)) {
                                    h = 0;
                                    for (k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                                    g[d] = f
                                }
                                k = a.nodeIndex - e;
                                return 0 === c ? 0 === k : 0 === k % c && 0 <= k / c
                        }
                    },
                    ID: function(a, b) {
                        return 1 === a.nodeType && a.getAttribute("id") ===
                            b
                    },
                    TAG: function(a, b) {
                        return "*" === b && 1 === a.nodeType || !! a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function(a, b) {
                        return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)
                    },
                    ATTR: function(a, b) {
                        var c = b[1],
                            c = q.attr ? q.attr(a, c) : r.attrHandle[c] ? r.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                            d = c + "",
                            e = b[2],
                            f = b[4];
                        return null == c ? "!\x3d" === e : !e && q.attr ? null != c : "\x3d" === e ? d === f : "*\x3d" === e ? 0 <= d.indexOf(f) : "~\x3d" === e ? 0 <= (" " + d + " ").indexOf(f) : f ? "!\x3d" === e ? d !== f : "^\x3d" === e ? 0 === d.indexOf(f) :
                            "$\x3d" === e ? d.substr(d.length - f.length) === f : "|\x3d" === e ? d === f || d.substr(0, f.length + 1) === f + "-" : !1 : d && !1 !== c
                    },
                    POS: function(a, b, c, d) {
                        var e = r.setFilters[b[2]];
                        if (e) return e(a, c, b, d)
                    }
                }
            }, L = r.match.POS,
            w = function(a, b) {
                return "\\" + (b - 0 + 1)
            }, u;
        for (u in r.match) r.match[u] = RegExp(r.match[u].source + /(?![^\[]*\])(?![^\(]*\))/.source), r.leftMatch[u] = RegExp(/(^(?:.|\r|\n)*?)/.source + r.match[u].source.replace(/\\(\d+)/g, w));
        var A = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            return b ? (b.push.apply(b, a), b) : a
        };
        try {
            Array.prototype.slice.call(n.documentElement.childNodes,
                0)[0].nodeType
        } catch (y) {
            A = function(a, b) {
                var c = 0,
                    d = b || [];
                if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                else if ("number" == typeof a.length)
                    for (var e = a.length; c < e; c++) d.push(a[c]);
                else
                    for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var E, t;
        n.documentElement.compareDocumentPosition ? E = function(a, b) {
            return a === b ? (h = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (E = function(a, b) {
            if (a === b) return h = !0, 0;
            if (a.sourceIndex &&
                b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                f = [];
            c = a.parentNode;
            d = b.parentNode;
            var g = c;
            if (c === d) return t(a, b);
            if (!c) return -1;
            if (!d) return 1;
            for (; g;) e.unshift(g), g = g.parentNode;
            for (g = d; g;) f.unshift(g), g = g.parentNode;
            c = e.length;
            d = f.length;
            for (g = 0; g < c && g < d; g++)
                if (e[g] !== f[g]) return t(e[g], f[g]);
            return g === c ? t(a, f[g], -1) : t(e[g], b, 1)
        }, t = function(a, b, c) {
            if (a === b) return c;
            for (a = a.nextSibling; a;) {
                if (a === b) return -1;
                a = a.nextSibling
            }
            return 1
        });
        (function() {
            var a = n.createElement("div"),
                b = "script" +
                    (new Date).getTime(),
                c = n.documentElement;
            a.innerHTML = "\x3ca name\x3d'" + b + "'/\x3e";
            c.insertBefore(a, c.firstChild);
            n.getElementById(b) && (r.find.ID = function(a, b, c) {
                if ("undefined" != typeof b.getElementById && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : p : []
            }, r.filter.ID = function(a, b) {
                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                return 1 === a.nodeType && c && c.nodeValue === b
            });
            c.removeChild(a);
            c = a = null
        })();
        (function() {
            var a = n.createElement("div");
            a.appendChild(n.createComment(""));
            0 < a.getElementsByTagName("*").length && (r.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if ("*" === a[1]) {
                    for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                    c = d
                }
                return c
            });
            a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
            a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (r.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            });
            a = null
        })();
        n.querySelectorAll &&
            function() {
                var a = q,
                    b = n.createElement("div");
                b.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e";
                if (!b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                    q = function(b, c, d, e) {
                        c = c || n;
                        if (!e && !q.isXML(c)) {
                            var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                            if (f && (1 === c.nodeType || 9 === c.nodeType)) {
                                if (f[1]) return A(c.getElementsByTagName(b), d);
                                if (f[2] && r.find.CLASS && c.getElementsByClassName) return A(c.getElementsByClassName(f[2]), d)
                            }
                            if (9 === c.nodeType) {
                                if ("body" === b && c.body) return A([c.body], d);
                                if (f &&
                                    f[3]) {
                                    var g = c.getElementById(f[3]);
                                    if (!g || !g.parentNode) return A([], d);
                                    if (g.id === f[3]) return A([g], d)
                                }
                                try {
                                    return A(c.querySelectorAll(b), d)
                                } catch (h) {}
                            } else if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                                var f = c,
                                    k = (g = c.getAttribute("id")) || "__sizzle__",
                                    l = c.parentNode,
                                    m = /^\s*[+~]/.test(b);
                                g ? k = k.replace(/'/g, "\\$\x26") : c.setAttribute("id", k);
                                m && l && (c = c.parentNode);
                                try {
                                    if (!m || l) return A(c.querySelectorAll("[id\x3d'" + k + "'] " + b), d)
                                } catch (p) {} finally {
                                    g || f.removeAttribute("id")
                                }
                            }
                        }
                        return a(b, c, d,
                            e)
                    };
                    for (var c in a) q[c] = a[c];
                    b = null
                }
        }();
        (function() {
            var a = n.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var c = !b.call(n.createElement("div"), "div"),
                    d = !1;
                try {
                    b.call(n.documentElement, "[test!\x3d'']:sizzle")
                } catch (e) {
                    d = !0
                }
                q.matchesSelector = function(a, e) {
                    e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "\x3d'$1']");
                    if (!q.isXML(a)) try {
                        if (d || !r.match.PSEUDO.test(e) && !/!=/.test(e)) {
                            var f = b.call(a, e);
                            if (f || !c || a.document && 11 !== a.document.nodeType) return f
                        }
                    } catch (g) {}
                    return 0 <
                        q(e, null, null, [a]).length
                }
            }
        })();
        (function() {
            var a = n.createElement("div");
            a.innerHTML = "\x3cdiv class\x3d'test e'\x3e\x3c/div\x3e\x3cdiv class\x3d'test'\x3e\x3c/div\x3e";
            a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (r.order.splice(1, 0, "CLASS"), r.find.CLASS = function(a, b, c) {
                if ("undefined" != typeof b.getElementsByClassName && !c) return b.getElementsByClassName(a[1])
            }, a = null))
        })();
        n.documentElement.contains ? q.contains =
            function(a, b) {
                return a !== b && (a.contains ? a.contains(b) : !0)
        } : n.documentElement.compareDocumentPosition ? q.contains = function(a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : q.contains = function() {
            return !1
        };
        q.isXML = function(a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
        };
        var B = function(a, b, c) {
            var d, e = [],
                f = "";
            for (b = b.nodeType ? [b] : b; d = r.match.PSEUDO.exec(a);) f += d[0], a = a.replace(r.match.PSEUDO, "");
            a = r.relative[a] ? a + "*" : a;
            d = 0;
            for (var g = b.length; d < g; d++) q(a, b[d], e, c);
            return q.filter(f,
                e)
        };
        q.attr = c.attr;
        q.selectors.attrMap = {};
        c.find = q;
        c.expr = q.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = q.uniqueSort;
        c.text = q.getText;
        c.isXMLDoc = q.isXML;
        c.contains = q.contains
    })();
    var Bb = /Until$/,
        Cb = /^(?:parents|prevUntil|prevAll)/,
        Db = /,/,
        lb = /^.[^:#\[\.,]*$/,
        Eb = Array.prototype.slice,
        Qa = c.expr.match.POS,
        Fb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    c.fn.extend({
        find: function(a) {
            var b = this,
                e, d;
            if ("string" != typeof a) return c(a).filter(function() {
                e = 0;
                for (d = b.length; e < d; e++)
                    if (c.contains(b[e], this)) return !0
            });
            var f = this.pushStack("", "find", a),
                g, h, k;
            e = 0;
            for (d = this.length; e < d; e++)
                if (g = f.length, c.find(a, this[e], f), 0 < e)
                    for (h = g; h < f.length; h++)
                        for (k = 0; k < g; k++)
                            if (f[k] === f[h]) {
                                f.splice(h--, 1);
                                break
                            }
            return f
        },
        has: function(a) {
            var b = c(a);
            return this.filter(function() {
                for (var a = 0, d = b.length; a < d; a++)
                    if (c.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(Ba(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(Ba(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && ("string" == typeof a ? Qa.test(a) ?
                0 <= c(a, this.context).index(this[0]) : 0 < c.filter(a, this).length : 0 < this.filter(a).length)
        },
        closest: function(a, b) {
            var e = [],
                d, f, g = this[0];
            if (c.isArray(a)) {
                for (f = 1; g && g.ownerDocument && g !== b;) {
                    for (d = 0; d < a.length; d++) c(g).is(a[d]) && e.push({
                        selector: a[d],
                        elem: g,
                        level: f
                    });
                    g = g.parentNode;
                    f++
                }
                return e
            }
            var h = Qa.test(a) || "string" != typeof a ? c(a, b || this.context) : 0;
            d = 0;
            for (f = this.length; d < f; d++)
                for (g = this[d]; g;) {
                    if (h ? -1 < h.index(g) : c.find.matchesSelector(g, a)) {
                        e.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument ||
                        g === b || 11 === g.nodeType) break
                }
            e = 1 < e.length ? c.unique(e) : e;
            return this.pushStack(e, "closest", a)
        },
        index: function(a) {
            return !a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : "string" == typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var e = "string" == typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a),
                d = c.merge(this.get(), e);
            return this.pushStack(!e[0] || !e[0].parentNode || 11 === e[0].parentNode.nodeType || !d[0] || !d[0].parentNode || 11 === d[0].parentNode.nodeType ? d : c.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return c.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, e) {
            return c.dir(a, "parentNode", e)
        },
        next: function(a) {
            return c.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return c.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return c.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return c.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, e) {
            return c.dir(a, "nextSibling",
                e)
        },
        prevUntil: function(a, b, e) {
            return c.dir(a, "previousSibling", e)
        },
        siblings: function(a) {
            return c.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return c.sibling(a.firstChild)
        },
        contents: function(a) {
            return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
        }
    }, function(a, b) {
        c.fn[a] = function(e, d) {
            var f = c.map(this, b, e);
            Bb.test(a) || (d = e);
            d && "string" == typeof d && (f = c.filter(d, f));
            f = 1 < this.length && !Fb[a] ? c.unique(f) : f;
            (1 < this.length || Db.test(d)) && Cb.test(a) &&
                (f = f.reverse());
            return this.pushStack(f, a, Eb.call(arguments).join(","))
        }
    });
    c.extend({
        filter: function(a, b, e) {
            e && (a = ":not(" + a + ")");
            return 1 === b.length ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b)
        },
        dir: function(a, b, e) {
            var d = [];
            for (a = a[b]; a && 9 !== a.nodeType && (e === p || 1 !== a.nodeType || !c(a).is(e));) 1 === a.nodeType && d.push(a), a = a[b];
            return d
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            for (d = 0; a && !(1 === a.nodeType && ++d === b); a = a[c]);
            return a
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType &&
                a !== b && c.push(a);
            return c
        }
    });
    var Aa = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Gb = / jQuery\d+="(?:\d+|null)"/g,
        ka = /^\s+/,
        Ra = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Sa = /<([\w:]+)/,
        Hb = /<tbody/i,
        Ib = /<|&#?\w+;/,
        Jb = /<(?:script|style)/i,
        Kb = /<(?:script|object|embed|option|style)/i,
        Ta = RegExp("\x3c(?:" + Aa + ")", "i"),
        Ua = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lb = /\/(java|ecma)script/i,
        kb = /^\s*<!(?:\[CDATA\[|\-\-)/,
        y = {
            option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
            legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
            thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
            tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
            td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
            col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
            area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
            _default: [0,
                "", ""
            ]
        }, Va = za(n);
    y.optgroup = y.option;
    y.tbody = y.tfoot = y.colgroup = y.caption = y.thead;
    y.th = y.td;
    c.support.htmlSerialize || (y._default = [1, "div\x3cdiv\x3e", "\x3c/div\x3e"]);
    c.fn.extend({
        text: function(a) {
            return c.isFunction(a) ? this.each(function(b) {
                var e = c(this);
                e.text(a.call(this, b, e.text()))
            }) : "object" != typeof a && a !== p ? this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(a)) : c.text(this)
        },
        wrapAll: function(a) {
            if (c.isFunction(a)) return this.each(function(b) {
                c(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return c.isFunction(a) ? this.each(function(b) {
                c(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = c(this),
                    e = b.contents();
                e.length ? e.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = c.isFunction(a);
            return this.each(function(e) {
                c(this).wrapAll(b ?
                    a.call(this, e) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a,
                    this)
            });
            if (arguments.length) {
                var a = c.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, c.clean(arguments));
                return a
            }
        },
        remove: function(a, b) {
            for (var e = 0, d; null != (d = this[e]); e++)
                if (!a || c.filter(a, [d]).length)!b && 1 === d.nodeType && (c.cleanData(d.getElementsByTagName("*")),
                c.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var a = 0, b; null != (b = this[a]); a++)
                for (1 === b.nodeType && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function() {
                return c.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === p) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(Gb, "") : null;
            if ("string" == typeof a && !Jb.test(a) && (c.support.leadingWhitespace || !ka.test(a)) && !y[(Sa.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Ra, "\x3c$1\x3e\x3c/$2\x3e");
                try {
                    for (var b = 0, e = this.length; b < e; b++) 1 === this[b].nodeType && (c.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a)
                } catch (d) {
                    this.empty().append(a)
                }
            } else c.isFunction(a) ? this.each(function(b) {
                var d = c(this);
                d.html(a.call(this, b, d.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(a)) return this.each(function(b) {
                    var e = c(this),
                        d = e.html();
                    e.replaceWith(a.call(this, b, d))
                });
                "string" != typeof a && (a = c(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                        e = this.parentNode;
                    c(this).remove();
                    b ? c(b).before(a) : c(e).append(a)
                })
            }
            return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, e) {
            var d, f, g, h = a[0],
                k = [];
            if (!c.support.checkClone && 3 === arguments.length && "string" == typeof h && Ua.test(h)) return this.each(function() {
                c(this).domManip(a,
                    b, e, !0)
            });
            if (c.isFunction(h)) return this.each(function(d) {
                var f = c(this);
                a[0] = h.call(this, d, b ? f.html() : p);
                f.domManip(a, b, e)
            });
            if (this[0]) {
                g = h && h.parentNode;
                c.support.parentNode && g && 11 === g.nodeType && g.childNodes.length === this.length ? d = {
                    fragment: g
                } : d = c.buildFragment(a, this, k);
                g = d.fragment;
                1 === g.childNodes.length ? f = g = g.firstChild : f = g.firstChild;
                if (f) {
                    b = b && c.nodeName(f, "tr");
                    f = 0;
                    for (var m = this.length, l = m - 1; f < m; f++) e.call(b ? c.nodeName(this[f], "table") ? this[f].getElementsByTagName("tbody")[0] || this[f].appendChild(this[f].ownerDocument.createElement("tbody")) :
                        this[f] : this[f], d.cacheable || 1 < m && f < l ? c.clone(g, !0, !0) : g)
                }
                k.length && c.each(k, jb)
            }
            return this
        }
    });
    c.buildFragment = function(a, b, e) {
        var d, f, g, h, k = a[0];
        b && b[0] && (h = b[0].ownerDocument || b[0]);
        h.createDocumentFragment || (h = n);
        1 === a.length && "string" == typeof k && 512 > k.length && h === n && "\x3c" === k.charAt(0) && !Kb.test(k) && (c.support.checkClone || !Ua.test(k)) && (c.support.html5Clone || !Ta.test(k)) && (f = !0, g = c.fragments[k], g && 1 !== g && (d = g));
        d || (d = h.createDocumentFragment(), c.clean(a, h, d, e));
        f && (c.fragments[k] = g ? d : 1);
        return {
            fragment: d,
            cacheable: f
        }
    };
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        c.fn[a] = function(e) {
            var d = [];
            e = c(e);
            var f = 1 === this.length && this[0].parentNode;
            if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
            for (var f = 0, g = e.length; f < g; f++) {
                var h = (0 < f ? this.clone(!0) : this).get();
                c(e[f])[b](h);
                d = d.concat(h)
            }
            return this.pushStack(d, a, e.selector)
        }
    });
    c.extend({
        clone: function(a, b, e) {
            var d, f,
                g;
            c.support.html5Clone || !Ta.test("\x3c" + a.nodeName) ? d = a.cloneNode(!0) : (d = n.createElement("div"), Va.appendChild(d), d.innerHTML = a.outerHTML, d = d.firstChild);
            var h = d;
            if ((!c.support.noCloneEvent || !c.support.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !c.isXMLDoc(a)) {
                xa(a, h);
                d = X(a);
                f = X(h);
                for (g = 0; d[g]; ++g) f[g] && xa(d[g], f[g])
            }
            if (b && (ya(a, h), e)) {
                d = X(a);
                f = X(h);
                for (g = 0; d[g]; ++g) ya(d[g], f[g])
            }
            return h
        },
        clean: function(a, b, e, d) {
            b = b || n;
            "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument ||
                n);
            for (var f = [], g, h = 0, k; null != (k = a[h]); h++)
                if ("number" == typeof k && (k += ""), k) {
                    if ("string" == typeof k)
                        if (Ib.test(k)) {
                            k = k.replace(Ra, "\x3c$1\x3e\x3c/$2\x3e");
                            g = (Sa.exec(k) || ["", ""])[1].toLowerCase();
                            var m = y[g] || y._default,
                                l = m[0],
                                p = b.createElement("div");
                            b === n ? Va.appendChild(p) : za(b).appendChild(p);
                            for (p.innerHTML = m[1] + k + m[2]; l--;) p = p.lastChild;
                            if (!c.support.tbody) {
                                l = Hb.test(k);
                                m = "table" === g && !l ? p.firstChild && p.firstChild.childNodes : "\x3ctable\x3e" === m[1] && !l ? p.childNodes : [];
                                for (g = m.length - 1; 0 <= g; --g) c.nodeName(m[g],
                                    "tbody") && !m[g].childNodes.length && m[g].parentNode.removeChild(m[g])
                            }!c.support.leadingWhitespace && ka.test(k) && p.insertBefore(b.createTextNode(ka.exec(k)[0]), p.firstChild);
                            k = p.childNodes
                        } else k = b.createTextNode(k);
                    var q;
                    if (!c.support.appendChecked)
                        if (k[0] && "number" == typeof(q = k.length))
                            for (g = 0; g < q; g++) va(k[g]);
                        else va(k);
                    k.nodeType ? f.push(k) : f = c.merge(f, k)
                }
            if (e) {
                a = function(a) {
                    return !a.type || Lb.test(a.type)
                };
                for (h = 0; f[h]; h++) d && c.nodeName(f[h], "script") && (!f[h].type || "text/javascript" === f[h].type.toLowerCase()) ?
                    d.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]) : (1 === f[h].nodeType && (b = c.grep(f[h].getElementsByTagName("script"), a), f.splice.apply(f, [h + 1, 0].concat(b))), e.appendChild(f[h]))
            }
            return f
        },
        cleanData: function(a) {
            for (var b, e, d = c.cache, f = c.event.special, g = c.support.deleteExpando, h = 0, k; null != (k = a[h]); h++)
                if (!k.nodeName || !c.noData[k.nodeName.toLowerCase()])
                    if (e = k[c.expando]) {
                        if ((b = d[e]) && b.events) {
                            for (var m in b.events) f[m] ? c.event.remove(k, m) : c.removeEvent(k, m, b.handle);
                            b.handle && (b.handle.elem =
                                null)
                        }
                        g ? delete k[c.expando] : k.removeAttribute && k.removeAttribute(c.expando);
                        delete d[e]
                    }
        }
    });
    var la = /alpha\([^)]*\)/i,
        Mb = /opacity=([^)]*)/,
        Nb = /([A-Z]|^ms)/g,
        Wa = /^-?\d+(?:px)?$/i,
        Ob = /^-?\d/,
        Pb = /^([\-+])=([\-+.\de]+)/,
        Qb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, hb = ["Left", "Right"],
        ib = ["Top", "Bottom"],
        Q, Xa, Ya;
    c.fn.css = function(a, b) {
        return 2 === arguments.length && b === p ? this : c.access(this, a, b, !0, function(a, b, f) {
            return f !== p ? c.style(a, b, f) : c.css(a, b)
        })
    };
    c.extend({
        cssHooks: {
            opacity: {
                get: function(a,
                    b) {
                    if (b) {
                        var c = Q(a, "opacity", "opacity");
                        return "" === c ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, e, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g = c.camelCase(b),
                    h = a.style,
                    k = c.cssHooks[g];
                b = c.cssProps[g] || g;
                if (e === p) return k && "get" in k && (f = k.get(a, !1, d)) !== p ? f : h[b];
                d = typeof e;
                "string" === d && (f = Pb.exec(e)) && (e = +(f[1] +
                    1) * +f[2] + parseFloat(c.css(a, b)), d = "number");
                if (!(null == e || "number" === d && isNaN(e)))
                    if ("number" === d && !c.cssNumber[g] && (e += "px"), !k || !("set" in k) || (e = k.set(a, e)) !== p) try {
                        h[b] = e
                    } catch (m) {}
            }
        },
        css: function(a, b, e) {
            var d, f;
            b = c.camelCase(b);
            f = c.cssHooks[b];
            b = c.cssProps[b] || b;
            "cssFloat" === b && (b = "float");
            if (f && "get" in f && (d = f.get(a, !0, e)) !== p) return d;
            if (Q) return Q(a, b)
        },
        swap: function(a, b, c) {
            var d = {}, f;
            for (f in b) d[f] = a.style[f], a.style[f] = b[f];
            c.call(a);
            for (f in b) a.style[f] = d[f]
        }
    });
    c.curCSS = c.css;
    c.each(["height",
        "width"
    ], function(a, b) {
        c.cssHooks[b] = {
            get: function(a, d, f) {
                var g;
                if (d) {
                    if (0 !== a.offsetWidth) return ua(a, b, f);
                    c.swap(a, Qb, function() {
                        g = ua(a, b, f)
                    });
                    return g
                }
            },
            set: function(a, b) {
                if (!Wa.test(b)) return b;
                b = parseFloat(b);
                if (0 <= b) return b + "px"
            }
        }
    });
    c.support.opacity || (c.cssHooks.opacity = {
        get: function(a, b) {
            return Mb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var e = a.style,
                d = a.currentStyle,
                f = c.isNumeric(b) ? "alpha(opacity\x3d" + 100 *
                    b + ")" : "",
                g = d && d.filter || e.filter || "";
            e.zoom = 1;
            if (1 <= b && "" === c.trim(g.replace(la, "")) && (e.removeAttribute("filter"), d && !d.filter)) return;
            e.filter = la.test(g) ? g.replace(la, f) : g + " " + f
        }
    });
    c(function() {
        c.support.reliableMarginRight || (c.cssHooks.marginRight = {
            get: function(a, b) {
                var e;
                c.swap(a, {
                    display: "inline-block"
                }, function() {
                    b ? e = Q(a, "margin-right", "marginRight") : e = a.style.marginRight
                });
                return e
            }
        })
    });
    n.defaultView && n.defaultView.getComputedStyle && (Xa = function(a, b) {
        var e, d, f;
        b = b.replace(Nb, "-$1").toLowerCase();
        (d = a.ownerDocument.defaultView) && (f = d.getComputedStyle(a, null)) && (e = f.getPropertyValue(b), "" === e && !c.contains(a.ownerDocument.documentElement, a) && (e = c.style(a, b)));
        return e
    });
    n.documentElement.currentStyle && (Ya = function(a, b) {
        var c, d, f, g = a.currentStyle && a.currentStyle[b],
            h = a.style;
        null === g && h && (f = h[b]) && (g = f);
        !Wa.test(g) && Ob.test(g) && (c = h.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g || 0, g = h.pixelLeft + "px", h.left = c, d && (a.runtimeStyle.left =
            d));
        return "" === g ? "auto" : g
    });
    Q = Xa || Ya;
    c.expr && c.expr.filters && (c.expr.filters.hidden = function(a) {
        var b = a.offsetHeight;
        return 0 === a.offsetWidth && 0 === b || !c.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || c.css(a, "display"))
    }, c.expr.filters.visible = function(a) {
        return !c.expr.filters.hidden(a)
    });
    var Rb = /%20/g,
        gb = /\[\]$/,
        Za = /\r?\n/g,
        Sb = /#.*$/,
        Tb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Ub = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Vb = /^(?:GET|HEAD)$/,
        Wb = /^\/\//,
        $a = /\?/,
        Xb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Yb = /^(?:select|textarea)/i,
        ta = /\s+/,
        Zb = /([?&])_=[^&]*/,
        ab = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bb = c.fn.load,
        ea = {}, cb = {}, M, N, db = ["*/"] + ["*"];
    try {
        M = qb.href
    } catch (ec) {
        M = n.createElement("a"), M.href = "", M = M.href
    }
    N = ab.exec(M.toLowerCase()) || [];
    c.fn.extend({
        load: function(a, b, e) {
            if ("string" != typeof a && bb) return bb.apply(this, arguments);
            if (!this.length) return this;
            var d = a.indexOf(" ");
            if (0 <= d) {
                var f =
                    a.slice(d, a.length);
                a = a.slice(0, d)
            }
            d = "GET";
            b && (c.isFunction(b) ? (e = b, b = p) : "object" == typeof b && (b = c.param(b, c.ajaxSettings.traditional), d = "POST"));
            var g = this;
            c.ajax({
                url: a,
                type: d,
                dataType: "html",
                data: b,
                complete: function(a, b, d) {
                    d = a.responseText;
                    a.isResolved() && (a.done(function(a) {
                        d = a
                    }), g.html(f ? c("\x3cdiv\x3e").append(d.replace(Xb, "")).find(f) : d));
                    e && g.each(e, [d, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return c.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ?
                    c.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Yb.test(this.nodeName) || Ub.test(this.type))
            }).map(function(a, b) {
                var e = c(this).val();
                return null == e ? null : c.isArray(e) ? c.map(e, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(Za, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: e.replace(Za, "\r\n")
                }
            }).get()
        }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        c.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    c.each(["get", "post"],
        function(a, b) {
            c[b] = function(a, d, f, g) {
                c.isFunction(d) && (g = g || f, f = d, d = p);
                return c.ajax({
                    type: b,
                    url: a,
                    data: d,
                    success: f,
                    dataType: g
                })
            }
        });
    c.extend({
        getScript: function(a, b) {
            return c.get(a, p, b, "script")
        },
        getJSON: function(a, b, e) {
            return c.get(a, b, e, "json")
        },
        ajaxSetup: function(a, b) {
            b ? ra(a, c.ajaxSettings) : (b = a, a = c.ajaxSettings);
            ra(a, b);
            return a
        },
        ajaxSettings: {
            url: M,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(N[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": db
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": s.String,
                "text html": !0,
                "text json": c.parseJSON,
                "text xml": c.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: sa(ea),
        ajaxTransport: sa(cb),
        ajax: function(a, b) {
            function e(a, b, e, n) {
                if (2 !== A) {
                    A = 2;
                    w && clearTimeout(w);
                    L = p;
                    s = n || "";
                    t.readyState =
                        0 < a ? 4 : 0;
                    var q, r, z;
                    n = b;
                    if (e) {
                        var u = d,
                            x = t,
                            E = u.contents,
                            B = u.dataTypes,
                            G = u.responseFields,
                            v, C, D, M;
                        for (C in G) C in e && (x[G[C]] = e[C]);
                        for (;
                            "*" === B[0];) B.shift(), v === p && (v = u.mimeType || x.getResponseHeader("content-type"));
                        if (v)
                            for (C in E)
                                if (E[C] && E[C].test(v)) {
                                    B.unshift(C);
                                    break
                                }
                        if (B[0] in e) D = B[0];
                        else {
                            for (C in e) {
                                if (!B[0] || u.converters[C + " " + B[0]]) {
                                    D = C;
                                    break
                                }
                                M || (M = C)
                            }
                            D = D || M
                        }
                        D ? (D !== B[0] && B.unshift(D), e = e[D]) : e = void 0
                    } else e = p; if (200 <= a && 300 > a || 304 === a) {
                        if (d.ifModified) {
                            if (v = t.getResponseHeader("Last-Modified")) c.lastModified[l] =
                                v;
                            if (v = t.getResponseHeader("Etag")) c.etag[l] = v
                        }
                        if (304 === a) n = "notmodified", q = !0;
                        else try {
                            v = d;
                            v.dataFilter && (e = v.dataFilter(e, v.dataType));
                            var N = v.dataTypes;
                            C = {};
                            var I, J, Q = N.length,
                                K, R = N[0],
                                H, P, S, T, V;
                            for (I = 1; I < Q; I++) {
                                if (1 === I)
                                    for (J in v.converters) "string" == typeof J && (C[J.toLowerCase()] = v.converters[J]);
                                H = R;
                                R = N[I];
                                if ("*" === R) R = H;
                                else if ("*" !== H && H !== R) {
                                    P = H + " " + R;
                                    S = C[P] || C["* " + R];
                                    if (!S)
                                        for (T in V = p, C)
                                            if (K = T.split(" "), K[0] === H || "*" === K[0])
                                                if (V = C[K[1] + " " + R]) {
                                                    T = C[T];
                                                    !0 === T ? S = V : !0 === V && (S = T);
                                                    break
                                                }!S && !V && c.error("No conversion from " + P.replace(" ", " to "));
                                    !0 !== S && (e = S ? S(e) : V(T(e)))
                                }
                            }
                            r = e;
                            n = "success";
                            q = !0
                        } catch (U) {
                            n = "parsererror", z = U
                        }
                    } else if (z = n, !n || a) n = "error", 0 > a && (a = 0);
                    t.status = a;
                    t.statusText = "" + (b || n);
                    q ? h.resolveWith(f, [r, n, t]) : h.rejectWith(f, [t, n, z]);
                    t.statusCode(m);
                    m = p;
                    y && g.trigger("ajax" + (q ? "Success" : "Error"), [t, d, q ? r : z]);
                    k.fireWith(f, [t, n]);
                    y && (g.trigger("ajaxComplete", [t, d]), --c.active || c.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = p);
            b = b || {};
            var d = c.ajaxSetup({}, b),
                f = d.context ||
                    d,
                g = f !== d && (f.nodeType || f instanceof c) ? c(f) : c.event,
                h = c.Deferred(),
                k = c.Callbacks("once memory"),
                m = d.statusCode || {}, l, n = {}, q = {}, s, r, L, w, u, A = 0,
                y, E, t = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!A) {
                            var c = a.toLowerCase();
                            a = q[c] = q[c] || a;
                            n[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === A ? s : null
                    },
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === A) {
                            if (!r)
                                for (r = {}; b = Tb.exec(s);) r[b[1].toLowerCase()] = b[2];
                            b = r[a.toLowerCase()]
                        }
                        return b === p ? null : b
                    },
                    overrideMimeType: function(a) {
                        A || (d.mimeType = a);
                        return this
                    },
                    abort: function(a) {
                        a = a || "abort";
                        L && L.abort(a);
                        e(0, a);
                        return this
                    }
                };
            h.promise(t);
            t.success = t.done;
            t.error = t.fail;
            t.complete = k.add;
            t.statusCode = function(a) {
                if (a) {
                    var b;
                    if (2 > A)
                        for (b in a) m[b] = [m[b], a[b]];
                    else b = a[t.status], t.then(b, b)
                }
                return this
            };
            d.url = ((a || d.url) + "").replace(Sb, "").replace(Wb, N[1] + "//");
            d.dataTypes = c.trim(d.dataType || "*").toLowerCase().split(ta);
            null == d.crossDomain && (u = ab.exec(d.url.toLowerCase()), d.crossDomain = !(!u || u[1] == N[1] && u[2] == N[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) ==
                (N[3] || ("http:" === N[1] ? 80 : 443))));
            d.data && d.processData && "string" != typeof d.data && (d.data = c.param(d.data, d.traditional));
            U(ea, d, b, t);
            if (2 === A) return !1;
            y = d.global;
            d.type = d.type.toUpperCase();
            d.hasContent = !Vb.test(d.type);
            y && 0 === c.active++ && c.event.trigger("ajaxStart");
            if (!d.hasContent && (d.data && (d.url += ($a.test(d.url) ? "\x26" : "?") + d.data, delete d.data), l = d.url, !1 === d.cache)) {
                u = c.now();
                var B = d.url.replace(Zb, "$1_\x3d" + u);
                d.url = B + (B === d.url ? ($a.test(d.url) ? "\x26" : "?") + "_\x3d" + u : "")
            }(d.data && d.hasContent && !1 !== d.contentType || b.contentType) && t.setRequestHeader("Content-Type", d.contentType);
            d.ifModified && (l = l || d.url, c.lastModified[l] && t.setRequestHeader("If-Modified-Since", c.lastModified[l]), c.etag[l] && t.setRequestHeader("If-None-Match", c.etag[l]));
            t.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + db + "; q\x3d0.01" : "") : d.accepts["*"]);
            for (E in d.headers) t.setRequestHeader(E, d.headers[E]);
            if (d.beforeSend && (!1 === d.beforeSend.call(f,
                t, d) || 2 === A)) return t.abort(), !1;
            for (E in {
                success: 1,
                error: 1,
                complete: 1
            }) t[E](d[E]);
            if (L = U(cb, d, b, t)) {
                t.readyState = 1;
                y && g.trigger("ajaxSend", [t, d]);
                d.async && 0 < d.timeout && (w = setTimeout(function() {
                    t.abort("timeout")
                }, d.timeout));
                try {
                    A = 1, L.send(n, e)
                } catch (x) {
                    if (2 > A) e(-1, x);
                    else throw x;
                }
            } else e(-1, "No Transport");
            return t
        },
        param: function(a, b) {
            var e = [],
                d = function(a, b) {
                    b = c.isFunction(b) ? b() : b;
                    e[e.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
                };
            b === p && (b = c.ajaxSettings.traditional);
            if (c.isArray(a) ||
                a.jquery && !c.isPlainObject(a)) c.each(a, function() {
                d(this.name, this.value)
            });
            else
                for (var f in a) da(f, a[f], b, d);
            return e.join("\x26").replace(Rb, "+")
        }
    });
    c.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var $b = c.now(),
        $ = /(\=)\?(&|$)|\?\?/i;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return c.expando + "_" + $b++
        }
    });
    c.ajaxPrefilter("json jsonp", function(a, b, e) {
        b = "application/x-www-form-urlencoded" === a.contentType && "string" == typeof a.data;
        if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && ($.test(a.url) ||
            b && $.test(a.data))) {
            var d, f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
                g = s[f],
                h = a.url,
                k = a.data,
                m = "$1" + f + "$2";
            !1 !== a.jsonp && (h = h.replace($, m), a.url === h && (b && (k = k.replace($, m)), a.data === k && (h += (/\?/.test(h) ? "\x26" : "?") + a.jsonp + "\x3d" + f)));
            a.url = h;
            a.data = k;
            s[f] = function(a) {
                d = [a]
            };
            e.always(function() {
                s[f] = g;
                d && c.isFunction(g) && s[f](d[0])
            });
            a.converters["script json"] = function() {
                d || c.error(f + " was not called");
                return d[0]
            };
            a.dataTypes[0] = "json";
            return "script"
        }
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                c.globalEval(a);
                return a
            }
        }
    });
    c.ajaxPrefilter("script", function(a) {
        a.cache === p && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    c.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = n.head || n.getElementsByTagName("head")[0] || n.documentElement;
            return {
                send: function(d, f) {
                    b = n.createElement("script");
                    b.async = "async";
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a,
                        d) {
                        if (d || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, c && b.parentNode && c.removeChild(b), b = p, d || f(200, "success")
                    };
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(0, 1)
                }
            }
        }
    });
    var ma = s.ActiveXObject ? function() {
            for (var a in H) H[a](0, 1)
        } : !1,
        ac = 0,
        H;
    c.ajaxSettings.xhr = s.ActiveXObject ? function() {
        var a;
        if (!(a = !this.isLocal && qa())) a: {
            try {
                a = new s.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (b) {}
            a = void 0
        }
        return a
    } : qa;
    (function(a) {
        c.extend(c.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    })(c.ajaxSettings.xhr());
    c.support.ajax && c.ajaxTransport(function(a) {
        if (!a.crossDomain || c.support.cors) {
            var b;
            return {
                send: function(e, d) {
                    var f = a.xhr(),
                        g, h;
                    a.username ? f.open(a.type, a.url, a.async, a.username, a.password) : f.open(a.type, a.url, a.async);
                    if (a.xhrFields)
                        for (h in a.xhrFields) f[h] = a.xhrFields[h];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                    !a.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) f.setRequestHeader(h,
                            e[h])
                    } catch (k) {}
                    f.send(a.hasContent && a.data || null);
                    b = function(e, h) {
                        var k, n, s, r, y;
                        try {
                            if (b && (h || 4 === f.readyState))
                                if (b = p, g && (f.onreadystatechange = c.noop, ma && delete H[g]), h) 4 !== f.readyState && f.abort();
                                else {
                                    k = f.status;
                                    s = f.getAllResponseHeaders();
                                    r = {};
                                    (y = f.responseXML) && y.documentElement && (r.xml = y);
                                    r.text = f.responseText;
                                    try {
                                        n = f.statusText
                                    } catch (w) {
                                        n = ""
                                    }!k && a.isLocal && !a.crossDomain ? k = r.text ? 200 : 404 : 1223 === k && (k = 204)
                                }
                        } catch (u) {
                            h || d(-1, u)
                        }
                        r && d(k, n, r, s)
                    };
                    !a.async || 4 === f.readyState ? b() : (g = ++ac, ma && (H || (H = {}, c(s).unload(ma)), H[g] = b), f.onreadystatechange = b)
                },
                abort: function() {
                    b && b(0, 1)
                }
            }
        }
    });
    var ca = {}, G, I, bc = /^(?:toggle|show|hide)$/,
        cc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        aa, oa = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        P;
    c.fn.extend({
        show: function(a, b, e) {
            var d;
            if (a || 0 === a) return this.animate(J("show", 3), a, b, e);
            b = 0;
            for (e = this.length; b < e; b++) a = this[b], a.style && (d = a.style.display, !c._data(a, "olddisplay") &&
                "none" === d && (d = a.style.display = ""), "" === d && "none" === c.css(a, "display") && c._data(a, "olddisplay", na(a.nodeName)));
            for (b = 0; b < e; b++)
                if (a = this[b], a.style && (d = a.style.display, "" === d || "none" === d)) a.style.display = c._data(a, "olddisplay") || "";
            return this
        },
        hide: function(a, b, e) {
            if (a || 0 === a) return this.animate(J("hide", 3), a, b, e);
            var d;
            b = 0;
            for (e = this.length; b < e; b++) a = this[b], a.style && (d = c.css(a, "display"), "none" !== d && !c._data(a, "olddisplay") && c._data(a, "olddisplay", d));
            for (b = 0; b < e; b++) this[b].style && (this[b].style.display =
                "none");
            return this
        },
        _toggle: c.fn.toggle,
        toggle: function(a, b, e) {
            var d = "boolean" == typeof a;
            c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                var b = d ? a : c(this).is(":hidden");
                c(this)[b ? "show" : "hide"]()
            }) : this.animate(J("toggle", 3), a, b, e);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, e, d) {
            function f() {
                !1 === g.queue && c._mark(this);
                var b = c.extend({}, g),
                    d =
                        1 === this.nodeType,
                    e = d && c(this).is(":hidden"),
                    f, n, p, s, r, y, w, u;
                b.animatedProperties = {};
                for (p in a) {
                    f = c.camelCase(p);
                    p !== f && (a[f] = a[p], delete a[p]);
                    n = a[f];
                    c.isArray(n) ? (b.animatedProperties[f] = n[1], n = a[f] = n[0]) : b.animatedProperties[f] = b.specialEasing && b.specialEasing[f] || b.easing || "swing";
                    if ("hide" === n && e || "show" === n && !e) return b.complete.call(this);
                    d && ("height" === f || "width" === f) && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === c.css(this, "display") && "none" === c.css(this,
                        "float") && (!c.support.inlineBlockNeedsLayout || "inline" === na(this.nodeName) ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                null != b.overflow && (this.style.overflow = "hidden");
                for (p in a) d = new c.fx(this, b, p), n = a[p], bc.test(n) ? (u = c._data(this, "toggle" + p) || ("toggle" === n ? e ? "show" : "hide" : 0), u ? (c._data(this, "toggle" + p, "show" === u ? "hide" : "show"), d[u]()) : d[n]()) : (s = cc.exec(n), r = d.cur(), s ? (y = parseFloat(s[2]), w = s[3] || (c.cssNumber[p] ? "" : "px"), "px" !== w && (c.style(this, p, (y || 1) + w), r *= (y || 1) / d.cur(), c.style(this,
                    p, r + w)), s[1] && (y = ("-\x3d" === s[1] ? -1 : 1) * y + r), d.custom(r, y, w)) : d.custom(r, n, ""));
                return !0
            }
            var g = c.speed(b, e, d);
            if (c.isEmptyObject(a)) return this.each(g.complete, [!1]);
            a = c.extend({}, a);
            return !1 === g.queue ? this.each(f) : this.queue(g.queue, f)
        },
        stop: function(a, b, e) {
            "string" != typeof a && (e = b, b = a, a = p);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var b, f = !1,
                    g = c.timers,
                    h = c._data(this);
                e || c._unmark(!0, this);
                if (null == a)
                    for (b in h) {
                        if (h[b] && h[b].stop && b.indexOf(".run") === b.length - 4) {
                            var k = h[b];
                            c.removeData(this,
                                b, !0);
                            k.stop(e)
                        }
                    } else if (h[b = a + ".run"] && h[b].stop) h = h[b], c.removeData(this, b, !0), h.stop(e);
                for (b = g.length; b--;) g[b].elem === this && (null == a || g[b].queue === a) && (e ? g[b](!0) : g[b].saveState(), f = !0, g.splice(b, 1));
                (!e || !f) && c.dequeue(this, a)
            })
        }
    });
    c.each({
        slideDown: J("show", 1),
        slideUp: J("hide", 1),
        slideToggle: J("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        c.fn[a] = function(a, c, f) {
            return this.animate(b, a, c, f)
        }
    });
    c.extend({
        speed: function(a, b, e) {
            var d =
                a && "object" == typeof a ? c.extend({}, a) : {
                    complete: e || !e && b || c.isFunction(a) && a,
                    duration: a,
                    easing: e && b || b && !c.isFunction(b) && b
            };
            d.duration = c.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in c.fx.speeds ? c.fx.speeds[d.duration] : c.fx.speeds._default;
            if (null == d.queue || !0 === d.queue) d.queue = "fx";
            d.old = d.complete;
            d.complete = function(a) {
                c.isFunction(d.old) && d.old.call(this);
                d.queue ? c.dequeue(this, d.queue) : !1 !== a && c._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a,
                b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b;
            this.elem = a;
            this.prop = c;
            b.orig = b.orig || {}
        }
    });
    c.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (c.fx.step[this.prop] || c.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a, b = c.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || "auto" === b ? 0 : b : a
        },
        custom: function(a, b, e) {
            function d(a) {
                return f.step(a)
            }
            var f = this,
                g = c.fx;
            this.startTime = P || pa();
            this.end = b;
            this.now = this.start = a;
            this.pos = this.state = 0;
            this.unit = e || this.unit || (c.cssNumber[this.prop] ? "" : "px");
            d.queue = this.options.queue;
            d.elem = this.elem;
            d.saveState = function() {
                f.options.hide && c._data(f.elem, "fxshow" + f.prop) === p && c._data(f.elem, "fxshow" + f.prop, f.start)
            };
            d() && c.timers.push(d) && !aa && (aa = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = c._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] =
                a || c.style(this.elem, this.prop);
            this.options.show = !0;
            a !== p ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
            c(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = c._data(this.elem, "fxshow" + this.prop) || c.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, e, d = P || pa(),
                f = !0,
                g = this.elem,
                h = this.options;
            if (a || d >= h.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                h.animatedProperties[this.prop] = !0;
                for (b in h.animatedProperties)!0 !== h.animatedProperties[b] && (f = !1);
                if (f) {
                    null != h.overflow && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"], function(a, b) {
                        g.style["overflow" + b] = h.overflow[a]
                    });
                    h.hide && c(g).hide();
                    if (h.hide || h.show)
                        for (b in h.animatedProperties) c.style(g, b, h.orig[b]), c.removeData(g, "fxshow" + b, !0), c.removeData(g, "toggle" + b, !0);
                    (a = h.complete) && (h.complete = !1, a.call(g))
                }
                return !1
            }
            Infinity == h.duration ? this.now = d : (e = d - this.startTime, this.state = e / h.duration, this.pos = c.easing[h.animatedProperties[this.prop]](this.state,
                e, 0, 1, h.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return !0
        }
    };
    c.extend(c.fx, {
        tick: function() {
            for (var a, b = c.timers, e = 0; e < b.length; e++) a = b[e], !a() && b[e] === a && b.splice(e--, 1);
            b.length || c.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(aa);
            aa = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                c.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    });
    c.each(["width", "height"], function(a, b) {
        c.fx.step[b] = function(a) {
            c.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    });
    c.expr && c.expr.filters && (c.expr.filters.animated = function(a) {
        return c.grep(c.timers, function(b) {
            return a === b.elem
        }).length
    });
    var dc = /^t(?:able|d|h)$/i,
        eb = /^(?:body|html)$/i;
    "getBoundingClientRect" in n.documentElement ? c.fn.offset = function(a) {
        var b = this[0],
            e;
        if (a) return this.each(function(b) {
            c.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        try {
            e = b.getBoundingClientRect()
        } catch (d) {}
        var f = b.ownerDocument,
            g = f.documentElement;
        if (!e || !c.contains(g, b)) return e ? {
            top: e.top,
            left: e.left
        } : {
            top: 0,
            left: 0
        };
        b = f.body;
        f = ba(f);
        return {
            top: e.top + (f.pageYOffset || c.support.boxModel && g.scrollTop || b.scrollTop) - (g.clientTop || b.clientTop || 0),
            left: e.left + (f.pageXOffset || c.support.boxModel && g.scrollLeft || b.scrollLeft) - (g.clientLeft || b.clientLeft || 0)
        }
    } : c.fn.offset = function(a) {
        var b = this[0];
        if (a) return this.each(function(b) {
            c.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
        var e, d = b.offsetParent,
            f = b.ownerDocument,
            g = f.documentElement,
            h = f.body;
        e = (f = f.defaultView) ? f.getComputedStyle(b, null) : b.currentStyle;
        for (var k = b.offsetTop, m = b.offsetLeft;
            (b = b.parentNode) && (b !== h && b !== g) && !(c.support.fixedPosition && "fixed" === e.position);) e = f ? f.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, m -= b.scrollLeft, b === d && (k += b.offsetTop, m += b.offsetLeft, c.support.doesNotAddBorder && (!c.support.doesAddBorderForTableAndCells || !dc.test(b.nodeName)) && (k += parseFloat(e.borderTopWidth) || 0, m += parseFloat(e.borderLeftWidth) || 0), d = b.offsetParent), c.support.subtractsBorderForOverflowNotVisible && "visible" !== e.overflow && (k += parseFloat(e.borderTopWidth) || 0, m += parseFloat(e.borderLeftWidth) || 0);
        if ("relative" === e.position || "static" === e.position) k += h.offsetTop, m += h.offsetLeft;
        c.support.fixedPosition && "fixed" === e.position && (k += Math.max(g.scrollTop, h.scrollTop), m += Math.max(g.scrollLeft, h.scrollLeft));
        return {
            top: k,
            left: m
        }
    };
    c.offset = {
        bodyOffset: function(a) {
            var b =
                a.offsetTop,
                e = a.offsetLeft;
            c.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(c.css(a, "marginTop")) || 0, e += parseFloat(c.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: e
            }
        },
        setOffset: function(a, b, e) {
            var d = c.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var f = c(a),
                g = f.offset(),
                h = c.css(a, "top"),
                k = c.css(a, "left"),
                m = {}, l = {}, n, p;
            ("absolute" === d || "fixed" === d) && -1 < c.inArray("auto", [h, k]) ? (l = f.position(), n = l.top, p = l.left) : (n = parseFloat(h) || 0, p = parseFloat(k) || 0);
            c.isFunction(b) && (b = b.call(a,
                e, g));
            null != b.top && (m.top = b.top - g.top + n);
            null != b.left && (m.left = b.left - g.left + p);
            "using" in b ? b.using.call(a, m) : f.css(m)
        }
    };
    c.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                e = this.offset(),
                d = eb.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            e.top -= parseFloat(c.css(a, "marginTop")) || 0;
            e.left -= parseFloat(c.css(a, "marginLeft")) || 0;
            d.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
            d.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: e.top - d.top,
                left: e.left -
                    d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || n.body; a && !eb.test(a.nodeName) && "static" === c.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    });
    c.each(["Left", "Top"], function(a, b) {
        var e = "scroll" + b;
        c.fn[e] = function(b) {
            var f, g;
            return b === p ? (f = this[0], !f ? null : (g = ba(f)) ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]) : this.each(function() {
                (g = ba(this)) ? g.scrollTo(a ? c(g).scrollLeft() : b,
                    a ? b : c(g).scrollTop()) : this[e] = b
            })
        }
    });
    c.each(["Height", "Width"], function(a, b) {
        var e = b.toLowerCase();
        c.fn["inner" + b] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(c.css(a, e, "padding")) : this[e]() : null
        };
        c.fn["outer" + b] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(c.css(b, e, a ? "margin" : "border")) : this[e]() : null
        };
        c.fn[e] = function(a) {
            var f = this[0];
            if (!f) return null == a ? null : this;
            if (c.isFunction(a)) return this.each(function(b) {
                var f = c(this);
                f[e](a.call(this, b, f[e]()))
            });
            if (c.isWindow(f)) {
                var g =
                    f.document.documentElement["client" + b],
                    h = f.document.body;
                return "CSS1Compat" === f.document.compatMode && g || h && h["client" + b] || g
            }
            return 9 === f.nodeType ? Math.max(f.documentElement["client" + b], f.body["scroll" + b], f.documentElement["scroll" + b], f.body["offset" + b], f.documentElement["offset" + b]) : a === p ? (f = c.css(f, e), g = parseFloat(f), c.isNumeric(g) ? g : f) : this.css(e, "string" == typeof a ? a : a + "px")
        }
    });
    s.jQuery = s.$ = c;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return c
    })
})(window);
(function() {
    var h = !0,
        p = function() {
            for (var a = Object.prototype.toString, b = {}, d = {
                    1: "element",
                    3: "textnode",
                    9: "document",
                    11: "fragment"
                }, e = "Arguments Array Boolean Date Document Element Error Fragment Function NodeList Null Number Object RegExp String TextNode Undefined Window".split(" "), c = e.length; c--;) {
                var f = e[c],
                    k = window[f];
                if (k) try {
                    b[a.call(new k)] = f.toLowerCase()
                } catch (g) {}
            }
            return function(f) {
                return null == f && (void 0 === f ? "undefined" : "null") || f.nodeType && d[f.nodeType] || "number" == typeof f.length && (f.callee &&
                    "arguments" || f.alert && "window" || f.item && "nodelist") || b[a.call(f)]
            }
        }(),
        l = function(a) {
            return "function" == p(a) && "object" == typeof a.prototype && 0 == _.values(a.prototype).length
        }, m = function(a, b, d) {
            if (a) {
                var e = a[b];
                6 != d.type && !l(e) && (e = function() {
                    for (var a = 0 < arguments.length ? "arguments[0]" : "", b = 1; b < arguments.length; b++) a += ",arguments[" + b + "]";
                    return eval("oldObject(" + a + ");")
                });
                var c;
                1 == d.type || 2 == d.type || 3 == d.type ? c = function() {
                    var a, c = null;
                    try {
                        a = e.apply(this, arguments)
                    } catch (g) {
                        c = g
                    }
                    if (1 == d.type)
                        if (null == c) a =
                            d.value.apply(this, [a, b]);
                        else throw c;
                        else 2 == d.type && null != c ? a = d.value.apply(this, [c, b]) : 3 == d.type && (a = d.value.apply(this, [a, c, b]));
                    return a
                } : 4 == d.type ? c = function() {
                    d.value.apply(this, [arguments, b]);
                    return e.apply(this, arguments)
                } : 6 == d.type ? c = function() {
                    return d.value.apply(this, arguments)
                } : 5 == d.type && (c = function() {
                    var a = this,
                        c = Array.prototype.slice.call(arguments);
                    return d.value.apply(a, [{
                        arguments: c,
                        method: b,
                        proceed: function() {
                            return e.apply(a, c)
                        }
                    }])
                });
                c.unweave = function() {
                    a[b] = e;
                    pointcut = a = c =
                        e = null
                };
                return a[b] = c
            }
        }, n = function(a, b, d) {
            var e = [],
                c;
            for (c in a) {
                var f = null;
                try {
                    f = a[c]
                } catch (g) {}
                null != f && (c.match(b.method) && l(f)) && (e[e.length] = {
                    source: a,
                    method: c,
                    advice: d
                })
            }
            return e
        }, g = function(a, b) {
            var d = "undefined" != typeof a.target.prototype ? a.target.prototype : a.target,
                e = [];
            if (6 != b.type && "undefined" == typeof d[a.method]) {
                var c = n(a.target, a, b);
                0 == c.length && (c = n(d, a, b));
                for (var f in c) e[e.length] = m(c[f].source, c[f].method, c[f].advice)
            } else e[0] = m(d, a.method, b);
            return h ? e : e[0]
        };
    jQuery.aop = {
        after: function(a,
            b) {
            return g(a, {
                type: 1,
                value: b
            })
        },
        afterThrow: function(a, b) {
            return g(a, {
                type: 2,
                value: b
            })
        },
        afterFinally: function(a, b) {
            return g(a, {
                type: 3,
                value: b
            })
        },
        before: function(a, b) {
            return g(a, {
                type: 4,
                value: b
            })
        },
        around: function(a, b) {
            return g(a, {
                type: 5,
                value: b
            })
        },
        introduction: function(a, b) {
            return g(a, {
                type: 6,
                value: b
            })
        },
        setup: function(a) {
            h = a.regexMatch
        }
    }
})();
(function(b, C, ba) {
    function d(a, ca, d) {
        a = C.createElement(a);
        ca && (a.id = q + ca);
        d && (a.style.cssText = d);
        return b(a)
    }

    function L(a) {
        var b = m.length;
        a = (r + a) % b;
        return 0 > a ? b + a : a
    }

    function n(a, b) {
        return Math.round((/%/.test(a) ? ("x" === b ? l.width() : l.height()) / 100 : 1) * parseInt(a, 10))
    }

    function da(k) {
        return a.photo || /\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(k)
    }

    function ea() {
        var k;
        a = b.extend({}, b.data(h, s));
        for (k in a) b.isFunction(a[k]) && "on" !== k.slice(0, 2) && (a[k] = a[k].call(h));
        a.rel = a.rel || h.rel || "nofollow";
        a.href =
            a.href || b(h).attr("href");
        a.title = a.title || h.title;
        "string" === typeof a.href && (a.href = b.trim(a.href))
    }

    function A(a, d) {
        b.event.trigger(a);
        d && d.call(h)
    }

    function la() {
        var k, b = q + "Slideshow_",
            d = "click." + q,
            c, f;
        a.slideshow && m[1] ? (c = function() {
            D.text(a.slideshowStop).unbind(d).bind(Q, function() {
                if (a.loop || m[r + 1]) k = setTimeout(e.next, a.slideshowSpeed)
            }).bind(R, function() {
                clearTimeout(k)
            }).one(d + " " + M, f);
            g.removeClass(b + "off").addClass(b + "on");
            k = setTimeout(e.next, a.slideshowSpeed)
        }, f = function() {
            clearTimeout(k);
            D.text(a.slideshowStart).unbind([Q, R, M, d].join(" ")).one(d, function() {
                e.next();
                c()
            });
            g.removeClass(b + "on").addClass(b + "off")
        }, a.slideshowAuto ? c() : f()) : g.removeClass(b + "off " + b + "on")
    }

    function fa(k) {
        if (!N) {
            h = k;
            ea();
            m = b(h);
            r = 0;
            "nofollow" !== a.rel && (m = b("." + E).filter(function() {
                return (b.data(this, s).rel || this.rel) === a.rel
            }), r = m.index(h), -1 === r && (m = m.add(h), r = m.length - 1));
            if (!u) {
                u = F = !0;
                g.show();
                if (a.returnFocus) b(h).blur().one(ga, function() {
                    b(this).focus()
                });
                x.css({
                    opacity: +a.opacity,
                    cursor: a.overlayClose ?
                        "pointer" : "auto"
                }).show();
                a.w = n(a.initialWidth, "x");
                a.h = n(a.initialHeight, "y");
                e.position();
                G && l.bind("resize." + O + " scroll." + O, function() {
                    x.css({
                        width: l.width(),
                        height: l.height(),
                        top: l.scrollTop(),
                        left: l.scrollLeft()
                    })
                }).trigger("resize." + O);
                A(ha, a.onOpen);
                S.add(T).hide();
                U.html(a.close).show()
            }
            e.load(!0)
        }
    }

    function ia() {
        !g && C.body && (V = !1, l = b(ba), g = d(c).attr({
                id: s,
                "class": H ? q + (G ? "IE6" : "IE") : ""
            }).hide(), x = d(c, "Overlay", G ? "position:absolute" : "").hide(), B = d(c, "Wrapper"), v = d(c, "Content").append(p = d(c,
                "LoadedContent", "width:0; height:0; overflow:hidden"), W = d(c, "LoadingOverlay").add(d(c, "LoadingGraphic")), T = d(c, "Title"), X = d(c, "Current"), I = d(c, "Next"), J = d(c, "Previous"), D = d(c, "Slideshow").bind(ha, la), U = d(c, "Close")), B.append(d(c).append(d(c, "TopLeft"), Y = d(c, "TopCenter"), d(c, "TopRight")), d(c, !1, "clear:left").append(Z = d(c, "MiddleLeft"), v, $ = d(c, "MiddleRight")), d(c, !1, "clear:left").append(d(c, "BottomLeft"), aa = d(c, "BottomCenter"), d(c, "BottomRight"))).find("div div").css({
                "float": "left"
            }), K = d(c, !1, "position:absolute; width:9999px; visibility:hidden; display:none"),
            S = I.add(J).add(X).add(D), b(C.body).append(x, g.append(B, K)))
    }

    function ma() {
        return g ? (V || (V = !0, y = Y.height() + aa.height() + v.outerHeight(!0) - v.height(), z = Z.width() + $.width() + v.outerWidth(!0) - v.width(), t = p.outerHeight(!0), w = p.outerWidth(!0), g.css({
            "padding-bottom": y,
            "padding-right": z
        }), I.click(function() {
            e.next()
        }), J.click(function() {
            e.prev()
        }), U.click(function() {
            e.close()
        }), x.click(function() {
            a.overlayClose && e.close()
        }), b(C).bind("keydown." + q, function(k) {
            var b = k.keyCode;
            u && (a.escKey && 27 === b) && (k.preventDefault(),
                e.close());
            u && (a.arrowKey && m[1]) && (37 === b ? (k.preventDefault(), J.click()) : 39 === b && (k.preventDefault(), I.click()))
        }), b("." + E, C).live("click", function(a) {
            1 < a.which || (a.shiftKey || a.altKey || a.metaKey) || (a.preventDefault(), fa(this))
        })), !0) : !1
    }
    var ja = {
        transition: "elastic",
        speed: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        inline: !1,
        html: !1,
        iframe: !1,
        fastIframe: !0,
        photo: !1,
        href: !1,
        title: !1,
        rel: !1,
        opacity: 0.6,
        preloading: !0,
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        open: !1,
        returnFocus: !0,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: void 0
    }, s = "colorbox",
        q = "cbox",
        E = q + "Element",
        ha = q + "_open",
        R = q + "_load",
        Q = q + "_complete",
        M = q + "_cleanup",
        ga = q + "_closed",
        P = q + "_purge",
        H = !b.support.opacity && !b.support.style,
        G = H && !ba.XMLHttpRequest,
        O = q + "_IE6",
        x, g, B, v, Y, Z, $, aa, m, l, p, K, W, T, X, D, I, J, U, S, a, y, z, t, w, h, r, f, u, F, N, ka, e, c = "div",
        V;
    b.colorbox || (b(ia), e = b.fn[s] = b[s] = function(a, d) {
            var c = this;
            a = a || {};
            ia();
            if (ma()) {
                if (!c[0]) {
                    if (c.selector) return c;
                    c = b("\x3ca/\x3e");
                    a.open = !0
                }
                d && (a.onComplete = d);
                c.each(function() {
                    b.data(this, s, b.extend({}, b.data(this, s) || ja, a))
                }).addClass(E);
                (b.isFunction(a.open) && a.open.call(c) || a.open) && fa(c[0])
            }
            return c
        }, e.position =
        function(b, d) {
            function c(a) {
                Y[0].style.width = aa[0].style.width = v[0].style.width = a.style.width;
                v[0].style.height = Z[0].style.height = $[0].style.height = a.style.height
            }
            var f = 0,
                m = 0,
                p = g.offset(),
                r = l.scrollTop(),
                h = l.scrollLeft();
            l.unbind("resize." + q);
            g.css({
                top: -9E4,
                left: -9E4
            });
            a.fixed && !G ? (p.top -= r, p.left -= h, g.css({
                position: "fixed"
            })) : (f = r, m = h, g.css({
                position: "absolute"
            }));
            m = !1 !== a.right ? m + Math.max(l.width() - a.w - w - z - n(a.right, "x"), 0) : !1 !== a.left ? m + n(a.left, "x") : m + Math.round(Math.max(l.width() - a.w - w - z, 0) /
                2);
            f = !1 !== a.bottom ? f + Math.max(l.height() - a.h - t - y - n(a.bottom, "y"), 0) : !1 !== a.top ? f + n(a.top, "y") : f + Math.round(Math.max(l.height() - a.h - t - y, 0) / 2);
            g.css({
                top: p.top,
                left: p.left
            });
            b = g.width() === a.w + w && g.height() === a.h + t ? 0 : b || 0;
            B[0].style.width = B[0].style.height = "9999px";
            g.dequeue().animate({
                width: a.w + w,
                height: a.h + t,
                top: f,
                left: m
            }, {
                duration: b,
                complete: function() {
                    c(this);
                    F = !1;
                    B[0].style.width = a.w + w + z + "px";
                    B[0].style.height = a.h + t + y + "px";
                    a.reposition && setTimeout(function() {
                        l.bind("resize." + q, e.position)
                    }, 1);
                    d &&
                        d()
                },
                step: function() {
                    c(this)
                }
            })
        }, e.resize = function(b) {
            u && (b = b || {}, b.width && (a.w = n(b.width, "x") - w - z), b.innerWidth && (a.w = n(b.innerWidth, "x")), p.css({
                width: a.w
            }), b.height && (a.h = n(b.height, "y") - t - y), b.innerHeight && (a.h = n(b.innerHeight, "y")), !b.innerHeight && !b.height && (p.css({
                height: "auto"
            }), a.h = p.height()), p.css({
                height: a.h
            }), e.position("none" === a.transition ? 0 : a.speed))
        }, e.prep = function(k) {
            function l() {
                a.w = a.w || p.width();
                a.w = a.mw && a.mw < a.w ? a.mw : a.w;
                return a.w
            }

            function n() {
                a.h = a.h || p.height();
                a.h = a.mh &&
                    a.mh < a.h ? a.mh : a.h;
                return a.h
            }
            if (u) {
                var h, t = "none" === a.transition ? 0 : a.speed;
                p.remove();
                p = d(c, "LoadedContent").append(k);
                p.hide().appendTo(K.show()).css({
                    width: l(),
                    overflow: a.scrolling ? "auto" : "hidden"
                }).css({
                    height: n()
                }).prependTo(v);
                K.hide();
                b(f).css({
                    "float": "none"
                });
                if (G) b("select").not(g.find("select")).filter(function() {
                    return "hidden" !== this.style.visibility
                }).css({
                    visibility: "hidden"
                }).one(M, function() {
                    this.style.visibility = "inherit"
                });
                h = function() {
                    function c() {
                        H && g[0].style.removeAttribute("filter")
                    }
                    var e, k;
                    e = m.length;
                    var h, l, n;
                    if (u) {
                        l = function() {
                            clearTimeout(ka);
                            W.hide();
                            A(Q, a.onComplete)
                        };
                        H && f && p.fadeIn(100);
                        T.html(a.title).add(p).show();
                        if (1 < e) {
                            if ("string" === typeof a.current && X.html(a.current.replace("{current}", r + 1).replace("{total}", e)).show(), I[a.loop || r < e - 1 ? "show" : "hide"]().html(a.next), J[a.loop || r ? "show" : "hide"]().html(a.previous), a.slideshow && D.show(), a.preloading)
                                for (e = [L(-1), L(1)]; k = m[e.pop()];) n = b.data(k, s).href || k.href, b.isFunction(n) && (n = n.call(k)), da(n) && (k = new Image, k.src = n)
                        } else S.hide();
                        if (a.iframe) {
                            h = d("iframe")[0];
                            "frameBorder" in h && (h.frameBorder = 0);
                            "allowTransparency" in h && (h.allowTransparency = "true");
                            h.name = q + +new Date;
                            if (a.fastIframe) l();
                            else b(h).one("load", l);
                            h.src = a.href;
                            a.scrolling || (h.scrolling = "no");
                            b(h).addClass(q + "Iframe").appendTo(p).one(P, function() {
                                h.src = "//about:blank"
                            })
                        } else l();
                        "fade" === a.transition ? g.fadeTo(t, 1, c) : c()
                    }
                };
                "fade" === a.transition ? g.fadeTo(t, 0, function() {
                    e.position(0, h)
                }) : e.position(t, h)
            }
        }, e.load = function(k) {
            var g, l, s = e.prep;
            F = !0;
            f = !1;
            h = m[r];
            k || ea();
            A(P);
            A(R, a.onLoad);
            a.h = a.height ? n(a.height, "y") - t - y : a.innerHeight && n(a.innerHeight, "y");
            a.w = a.width ? n(a.width, "x") - w - z : a.innerWidth && n(a.innerWidth, "x");
            a.mw = a.w;
            a.mh = a.h;
            a.maxWidth && (a.mw = n(a.maxWidth, "x") - w - z, a.mw = a.w && a.w < a.mw ? a.w : a.mw);
            a.maxHeight && (a.mh = n(a.maxHeight, "y") - t - y, a.mh = a.h && a.h < a.mh ? a.h : a.mh);
            g = a.href;
            ka = setTimeout(function() {
                W.show()
            }, 100);
            a.inline ? (d(c).hide().insertBefore(b(g)[0]).one(P, function() {
                b(this).replaceWith(p.children())
            }), s(b(g))) : a.iframe ? s(" ") : a.html ? s(a.html) : da(g) ?
                (b(f = new Image).addClass(q + "Photo").error(function() {
                a.title = !1;
                s(d(c, "Error").text("This image could not be loaded"))
            }).load(function() {
                var b;
                f.onload = null;
                a.scalePhotos && (l = function() {
                    f.height -= f.height * b;
                    f.width -= f.width * b
                }, a.mw && f.width > a.mw && (b = (f.width - a.mw) / f.width, l()), a.mh && f.height > a.mh && (b = (f.height - a.mh) / f.height, l()));
                a.h && (f.style.marginTop = Math.max(a.h - f.height, 0) / 2 + "px");
                if (m[1] && (a.loop || m[r + 1])) f.style.cursor = "pointer", f.onclick = function() {
                    e.next()
                };
                H && (f.style.msInterpolationMode =
                    "bicubic");
                setTimeout(function() {
                    s(f)
                }, 1)
            }), setTimeout(function() {
                f.src = g
            }, 1)) : g && K.load(g, a.data, function(a, e, f) {
                s("error" === e ? d(c, "Error").text("Request unsuccessful: " + f.statusText) : b(this).contents())
            })
        }, e.next = function() {
            if (!F && m[1] && (a.loop || m[r + 1])) r = L(1), e.load()
        }, e.prev = function() {
            if (!F && m[1] && (a.loop || r)) r = L(-1), e.load()
        }, e.close = function() {
            u && !N && (N = !0, u = !1, A(M, a.onCleanup), l.unbind("." + q + " ." + O), x.fadeTo(200, 0), g.stop().fadeTo(300, 0, function() {
                g.add(x).css({
                    opacity: 1,
                    cursor: "auto"
                }).hide();
                A(P);
                p.remove();
                setTimeout(function() {
                    N = !1;
                    A(ga, a.onClosed)
                }, 1)
            }))
        }, e.remove = function() {
            b([]).add(g).add(x).remove();
            g = null;
            b("." + E).removeData(s).removeClass(E).die()
        }, e.element = function() {
            return b(h)
        }, e.settings = ja)
})(jQuery, document, this);
var JSON;
JSON || (JSON = {});
(function() {
    function m(a) {
        return 10 > a ? "0" + a : a
    }

    function r(a) {
        s.lastIndex = 0;
        return s.test(a) ? '"' + a.replace(s, function(a) {
            var c = u[a];
            return "string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function p(a, l) {
        var c, d, h, q, g = e,
            f, b = l[a];
        b && ("object" === typeof b && "function" === typeof b.toJSON) && (b = b.toJSON(a));
        "function" === typeof k && (b = k.call(l, a, b));
        switch (typeof b) {
            case "string":
                return r(b);
            case "number":
                return isFinite(b) ? String(b) : "null";
            case "boolean":
            case "null":
                return String(b);
            case "object":
                if (!b) return "null";
                e += n;
                f = [];
                if ("[object Array]" === Object.prototype.toString.apply(b)) {
                    q = b.length;
                    for (c = 0; c < q; c += 1) f[c] = p(c, b) || "null";
                    h = 0 === f.length ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + g + "]" : "[" + f.join(",") + "]";
                    e = g;
                    return h
                }
                if (k && "object" === typeof k) {
                    q = k.length;
                    for (c = 0; c < q; c += 1) "string" === typeof k[c] && (d = k[c], (h = p(d, b)) && f.push(r(d) + (e ? ": " : ":") + h))
                } else
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (h = p(d, b)) && f.push(r(d) + (e ? ": " : ":") + h);
                h = 0 === f.length ? "{}" : e ? "{\n" + e + f.join(",\n" + e) + "\n" + g + "}" : "{" + f.join(",") +
                    "}";
                e = g;
                return h
        }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + m(this.getUTCMonth() + 1) + "-" + m(this.getUTCDate()) + "T" + m(this.getUTCHours()) + ":" + m(this.getUTCMinutes()) + ":" + m(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
        return this.valueOf()
    });
    var t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        s = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e, n, u = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, k;
    "function" !== typeof JSON.stringify && (JSON.stringify = function(a, l, c) {
        var d;
        n = e = "";
        if ("number" === typeof c)
            for (d = 0; d < c; d += 1) n += " ";
        else "string" === typeof c && (n = c); if ((k = l) && "function" !== typeof l && ("object" !== typeof l || "number" !== typeof l.length)) throw Error("JSON.stringify");
        return p("", {
            "": a
        })
    });
    "function" !== typeof JSON.parse && (JSON.parse = function(a, e) {
        function c(a, d) {
            var g, f, b = a[d];
            if (b && "object" === typeof b)
                for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (f = c(b, g), void 0 !== f ? b[g] = f : delete b[g]);
            return e.call(a, d, b)
        }
        var d;
        a = String(a);
        t.lastIndex = 0;
        t.test(a) && (a = a.replace(t, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return d = eval("(" + a + ")"), "function" === typeof e ? c({
            "": d
        }, "") : d;
        throw new SyntaxError("JSON.parse");
    })
})();
var Mustache = function() {
    var l = function() {};
    l.prototype = {
        otag: "{{",
        ctag: "}}",
        pragmas: {},
        buffer: [],
        pragmas_implemented: {
            "IMPLICIT-ITERATOR": !0
        },
        context: {},
        render: function(a, b, d, c) {
            c || (this.context = b, this.buffer = []);
            if (this.includes("", a)) {
                a = this.render_pragmas(a);
                a = this.render_section(a, b, d);
                if (c) return this.render_tags(a, b, d, c);
                this.render_tags(a, b, d, c)
            } else {
                if (c) return a;
                this.send(a)
            }
        },
        send: function(a) {
            "" != a && this.buffer.push(a)
        },
        render_pragmas: function(a) {
            if (!this.includes("%", a)) return a;
            var b =
                this;
            return a.replace(RegExp(this.otag + "%([\\w-]+) ?([\\w]+\x3d[\\w]+)?" + this.ctag), function(a, c, e) {
                if (!b.pragmas_implemented[c]) throw {
                    message: "This implementation of mustache doesn't understand the '" + c + "' pragma"
                };
                b.pragmas[c] = {};
                e && (a = e.split("\x3d"), b.pragmas[c][a[0]] = a[1]);
                return ""
            })
        },
        render_partial: function(a, b, d) {
            a = this.trim(a);
            if (!d || void 0 === d[a]) throw {
                message: "unknown_partial '" + a + "'"
            };
            return "object" != typeof b[a] ? this.render(d[a], b, d, !0) : this.render(d[a], b[a], d, !0)
        },
        render_section: function(a,
            b, d) {
            if (!this.includes("#", a) && !this.includes("^", a)) return a;
            var c = this;
            return a.replace(RegExp(this.otag + "(\\^|\\#)\\s*(.+)\\s*" + this.ctag + "\n*([\\s\\S]+?)" + this.otag + "\\/\\s*\\2\\s*" + this.ctag + "\\s*", "mg"), function(a, g, k, f) {
                a = c.find(k, b);
                if ("^" == g) return !a || c.is_array(a) && 0 === a.length ? c.render(f, b, d, !0) : "";
                if ("#" == g) return c.is_array(a) ? c.map(a, function(a) {
                    return c.render(f, c.create_context(a), d, !0)
                }).join("") : c.is_object(a) ? c.render(f, c.create_context(a), d, !0) : "function" === typeof a ? a.call(b, f,
                    function(a) {
                        return c.render(a, b, d, !0)
                    }) : a ? c.render(f, b, d, !0) : ""
            })
        },
        render_tags: function(a, b, d, c) {
            var e = this,
                g = function() {
                    return RegExp(e.otag + "(\x3d|!|\x3e|\\{|%)?([^\\/#\\^]+?)\\1?" + e.ctag + "+", "g")
                }, k = g(),
                f = function(a, c, f) {
                    switch (c) {
                        case "!":
                            return "";
                        case "\x3d":
                            return e.set_delimiters(f), k = g(), "";
                        case "\x3e":
                            return e.render_partial(f, b, d);
                        case "{":
                            return e.find(f, b);
                        default:
                            return e.escape(e.find(f, b))
                    }
                };
            a = a.split("\n");
            for (var h = 0; h < a.length; h++) a[h] = a[h].replace(k, f, this), c || this.send(a[h]);
            if (c) return a.join("\n")
        },
        set_delimiters: function(a) {
            a = a.split(" ");
            this.otag = this.escape_regex(a[0]);
            this.ctag = this.escape_regex(a[1])
        },
        escape_regex: function(a) {
            arguments.callee.sRE || (arguments.callee.sRE = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)", "g"));
            return a.replace(arguments.callee.sRE, "\\$1")
        },
        find: function(a, b) {
            a = this.trim(a);
            var d;
            if (!1 === b[a] || 0 === b[a] || b[a]) d = b[a];
            else if (!1 === this.context[a] || 0 === this.context[a] || this.context[a]) d = this.context[a];
            return "function" === typeof d ? d.apply(b) : void 0 !==
                d ? d : ""
        },
        includes: function(a, b) {
            return -1 != b.indexOf(this.otag + a)
        },
        escape: function(a) {
            a = String(null === a ? "" : a);
            return a.replace(/&(?!\w+;)|["'<>\\]/g, function(a) {
                switch (a) {
                    case "\x26":
                        return "\x26amp;";
                    case "\\":
                        return "\\\\";
                    case '"':
                        return "\x26quot;";
                    case "'":
                        return "\x26#39;";
                    case "\x3c":
                        return "\x26lt;";
                    case "\x3e":
                        return "\x26gt;";
                    default:
                        return a
                }
            })
        },
        create_context: function(a) {
            if (this.is_object(a)) return a;
            var b = ".";
            this.pragmas["IMPLICIT-ITERATOR"] && (b = this.pragmas["IMPLICIT-ITERATOR"].iterator);
            var d = {};
            d[b] = a;
            return d
        },
        is_object: function(a) {
            return a && "object" == typeof a
        },
        is_array: function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        },
        trim: function(a) {
            return a.replace(/^\s*|\s*$/g, "")
        },
        map: function(a, b) {
            if ("function" == typeof a.map) return a.map(b);
            for (var d = [], c = a.length, e = 0; e < c; e++) d.push(b(a[e]));
            return d
        }
    };
    return {
        name: "mustache.js",
        version: "0.3.1-dev",
        to_html: function(a, b, d, c) {
            var e = new l;
            c && (e.send = c);
            e.render(a, b, d);
            if (!c) return e.buffer.join("\n")
        }
    }
}();
(function() {
    var s = this,
        F = s._,
        p = {}, k = Array.prototype,
        q = Object.prototype,
        f = k.slice,
        G = k.unshift,
        H = q.toString,
        n = q.hasOwnProperty,
        v = k.forEach,
        w = k.map,
        x = k.reduce,
        y = k.reduceRight,
        z = k.filter,
        A = k.every,
        B = k.some,
        r = k.indexOf,
        C = k.lastIndexOf,
        q = Array.isArray,
        I = Object.keys,
        t = Function.prototype.bind,
        b = function(a) {
            return new l(a)
        };
    "undefined" !== typeof module && module.exports ? (module.exports = b, b._ = b) : s._ = b;
    b.VERSION = "1.1.6";
    var h = b.each = b.forEach = function(a, c, d) {
        if (null != a)
            if (v && a.forEach === v) a.forEach(c, d);
            else if (b.isNumber(a.length))
            for (var e =
                0, m = a.length; e < m && c.call(d, a[e], e, a) !== p; e++);
        else
            for (e in a)
                if (n.call(a, e) && c.call(d, a[e], e, a) === p) break
    };
    b.map = function(a, c, b) {
        var e = [];
        if (null == a) return e;
        if (w && a.map === w) return a.map(c, b);
        h(a, function(a, g, J) {
            e[e.length] = c.call(b, a, g, J)
        });
        return e
    };
    b.reduce = b.foldl = b.inject = function(a, c, d, e) {
        var m = void 0 !== d;
        null == a && (a = []);
        if (x && a.reduce === x) return e && (c = b.bind(c, e)), m ? a.reduce(c, d) : a.reduce(c);
        h(a, function(a, b, f) {
            !m && 0 === b ? (d = a, m = !0) : d = c.call(e, d, a, b, f)
        });
        if (!m) throw new TypeError("Reduce of empty array with no initial value");
        return d
    };
    b.reduceRight = b.foldr = function(a, c, d, e) {
        null == a && (a = []);
        if (y && a.reduceRight === y) return e && (c = b.bind(c, e)), void 0 !== d ? a.reduceRight(c, d) : a.reduceRight(c);
        a = (b.isArray(a) ? a.slice() : b.toArray(a)).reverse();
        return b.reduce(a, c, d, e)
    };
    b.find = b.detect = function(a, c, b) {
        var e;
        D(a, function(a, g, f) {
            if (c.call(b, a, g, f)) return e = a, !0
        });
        return e
    };
    b.filter = b.select = function(a, c, b) {
        var e = [];
        if (null == a) return e;
        if (z && a.filter === z) return a.filter(c, b);
        h(a, function(a, g, f) {
            c.call(b, a, g, f) && (e[e.length] = a)
        });
        return e
    };
    b.reject = function(a, c, b) {
        var e = [];
        if (null == a) return e;
        h(a, function(a, g, f) {
            c.call(b, a, g, f) || (e[e.length] = a)
        });
        return e
    };
    b.every = b.all = function(a, c, b) {
        var e = !0;
        if (null == a) return e;
        if (A && a.every === A) return a.every(c, b);
        h(a, function(a, g, f) {
            if (!(e = e && c.call(b, a, g, f))) return p
        });
        return e
    };
    var D = b.some = b.any = function(a, c, d) {
        c || (c = b.identity);
        var e = !1;
        if (null == a) return e;
        if (B && a.some === B) return a.some(c, d);
        h(a, function(a, b, f) {
            if (e = c.call(d, a, b, f)) return p
        });
        return e
    };
    b.include = b.contains = function(a, c) {
        var b = !1;
        if (null == a) return b;
        if (r && a.indexOf === r) return -1 != a.indexOf(c);
        D(a, function(a) {
            if (b = a === c) return !0
        });
        return b
    };
    b.invoke = function(a, c) {
        var d = f.call(arguments, 2);
        return b.map(a, function(a) {
            return (c.call ? c || a : a[c]).apply(a, d)
        })
    };
    b.pluck = function(a, c) {
        return b.map(a, function(a) {
            return a[c]
        })
    };
    b.max = function(a, c, d) {
        if (!c && b.isArray(a)) return Math.max.apply(Math, a);
        var e = {
            computed: -Infinity
        };
        h(a, function(a, b, f) {
            b = c ? c.call(d, a, b, f) : a;
            b >= e.computed && (e = {
                value: a,
                computed: b
            })
        });
        return e.value
    };
    b.min = function(a,
        c, d) {
        if (!c && b.isArray(a)) return Math.min.apply(Math, a);
        var e = {
            computed: Infinity
        };
        h(a, function(a, b, f) {
            b = c ? c.call(d, a, b, f) : a;
            b < e.computed && (e = {
                value: a,
                computed: b
            })
        });
        return e.value
    };
    b.sortBy = function(a, c, d) {
        return b.pluck(b.map(a, function(a, b, f) {
            return {
                value: a,
                criteria: c.call(d, a, b, f)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            return c < d ? -1 : c > d ? 1 : 0
        }), "value")
    };
    b.sortedIndex = function(a, c, d) {
        d || (d = b.identity);
        for (var e = 0, f = a.length; e < f;) {
            var g = e + f >> 1;
            d(a[g]) < d(c) ? e = g + 1 : f = g
        }
        return e
    };
    b.toArray =
        function(a) {
            return !a ? [] : a.toArray ? a.toArray() : b.isArray(a) ? a : b.isArguments(a) ? f.call(a) : b.values(a)
    };
    b.size = function(a) {
        return b.toArray(a).length
    };
    b.first = b.head = function(a, b, d) {
        return null != b && !d ? f.call(a, 0, b) : a[0]
    };
    b.rest = b.tail = function(a, b, d) {
        return f.call(a, null == b || d ? 1 : b)
    };
    b.last = function(a) {
        return a[a.length - 1]
    };
    b.compact = function(a) {
        return b.filter(a, function(a) {
            return !!a
        })
    };
    b.flatten = function(a) {
        return b.reduce(a, function(a, d) {
            if (b.isArray(d)) return a.concat(b.flatten(d));
            a[a.length] = d;
            return a
        }, [])
    };
    b.without = function(a) {
        var c = f.call(arguments, 1);
        return b.filter(a, function(a) {
            return !b.include(c, a)
        })
    };
    b.uniq = b.unique = function(a, c) {
        return b.reduce(a, function(a, e, f) {
            if (0 == f || (!0 === c ? b.last(a) != e : !b.include(a, e))) a[a.length] = e;
            return a
        }, [])
    };
    b.intersect = function(a) {
        var c = f.call(arguments, 1);
        return b.filter(b.uniq(a), function(a) {
            return b.every(c, function(c) {
                return 0 <= b.indexOf(c, a)
            })
        })
    };
    b.zip = function() {
        for (var a = f.call(arguments), c = b.max(b.pluck(a, "length")), d = Array(c), e = 0; e < c; e++) d[e] =
            b.pluck(a, "" + e);
        return d
    };
    b.indexOf = function(a, c, d) {
        if (null == a) return -1;
        var e;
        if (d) return d = b.sortedIndex(a, c), a[d] === c ? d : -1;
        if (r && a.indexOf === r) return a.indexOf(c);
        d = 0;
        for (e = a.length; d < e; d++)
            if (a[d] === c) return d;
        return -1
    };
    b.lastIndexOf = function(a, b) {
        if (null == a) return -1;
        if (C && a.lastIndexOf === C) return a.lastIndexOf(b);
        for (var d = a.length; d--;)
            if (a[d] === b) return d;
        return -1
    };
    b.range = function(a, b, d) {
        1 >= arguments.length && (b = a || 0, a = 0);
        d = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((b - a) / d), 0), f = 0, g = Array(e); f <
            e;) g[f++] = a, a += d;
        return g
    };
    b.bind = function(a, b) {
        if (a.bind === t && t) return t.apply(a, f.call(arguments, 1));
        var d = f.call(arguments, 2);
        return function() {
            return a.apply(b, d.concat(f.call(arguments)))
        }
    };
    b.bindAll = function(a) {
        var c = f.call(arguments, 1);
        0 == c.length && (c = b.functions(a));
        h(c, function(c) {
            a[c] = b.bind(a[c], a)
        });
        return a
    };
    b.memoize = function(a, c) {
        var d = {};
        c || (c = b.identity);
        return function() {
            var b = c.apply(this, arguments);
            return n.call(d, b) ? d[b] : d[b] = a.apply(this, arguments)
        }
    };
    b.delay = function(a, b) {
        var d =
            f.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(a, d)
        }, b)
    };
    b.defer = function(a) {
        return b.delay.apply(b, [a, 1].concat(f.call(arguments, 1)))
    };
    var E = function(a, b, d) {
        var e;
        return function() {
            var f = this,
                g = arguments,
                h = function() {
                    e = null;
                    a.apply(f, g)
                };
            d && clearTimeout(e);
            if (d || !e) e = setTimeout(h, b)
        }
    };
    b.throttle = function(a, b) {
        return E(a, b, !1)
    };
    b.debounce = function(a, b) {
        return E(a, b, !0)
    };
    b.once = function(a) {
        var b = !1,
            d;
        return function() {
            if (b) return d;
            b = !0;
            return d = a.apply(this, arguments)
        }
    };
    b.wrap = function(a,
        b) {
        return function() {
            var d = [a].concat(f.call(arguments));
            return b.apply(this, d)
        }
    };
    b.compose = function() {
        var a = f.call(arguments);
        return function() {
            for (var b = f.call(arguments), d = a.length - 1; 0 <= d; d--) b = [a[d].apply(this, b)];
            return b[0]
        }
    };
    b.after = function(a, b) {
        return function() {
            if (1 > --a) return b.apply(this, arguments)
        }
    };
    b.keys = I || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [],
            d;
        for (d in a) n.call(a, d) && (b[b.length] = d);
        return b
    };
    b.values = function(a) {
        return b.map(a, b.identity)
    };
    b.functions = b.methods = function(a) {
        return b.filter(b.keys(a), function(c) {
            return b.isFunction(a[c])
        }).sort()
    };
    b.extend = function(a) {
        h(f.call(arguments, 1), function(b) {
            for (var d in b) void 0 !== b[d] && (a[d] = b[d])
        });
        return a
    };
    b.defaults = function(a) {
        h(f.call(arguments, 1), function(b) {
            for (var d in b) null == a[d] && (a[d] = b[d])
        });
        return a
    };
    b.clone = function(a) {
        return b.isArray(a) ? a.slice() : b.extend({}, a)
    };
    b.tap = function(a, b) {
        b(a);
        return a
    };
    b.isEqual = function(a, c) {
        if (a === c) return !0;
        var d = typeof a;
        if (d != typeof c) return !1;
        if (a == c) return !0;
        if (!a && c || a && !c) return !1;
        a._chain && (a = a._wrapped);
        c._chain && (c = c._wrapped);
        if (a.isEqual) return a.isEqual(c);
        if (b.isDate(a) && b.isDate(c)) return a.getTime() === c.getTime();
        if (b.isNaN(a) && b.isNaN(c)) return !1;
        if (b.isRegExp(a) && b.isRegExp(c)) return a.source === c.source && a.global === c.global && a.ignoreCase === c.ignoreCase && a.multiline === c.multiline;
        if ("object" !== d || a.length && a.length !== c.length) return !1;
        var d = b.keys(a),
            e = b.keys(c);
        if (d.length != e.length) return !1;
        for (var f in a)
            if (!(f in c) || !b.isEqual(a[f], c[f])) return !1;
        return !0
    };
    b.isEmpty = function(a) {
        if (b.isArray(a) || b.isString(a)) return 0 === a.length;
        for (var c in a)
            if (n.call(a, c)) return !1;
        return !0
    };
    b.isElement = function(a) {
        return !!(a && 1 == a.nodeType)
    };
    b.isArray = q || function(a) {
        return "[object Array]" === H.call(a)
    };
    b.isArguments = function(a) {
        return !(!a || !n.call(a, "callee"))
    };
    b.isFunction = function(a) {
        return !(!a || !a.constructor || !a.call || !a.apply)
    };
    b.isString = function(a) {
        return !!("" === a || a && a.charCodeAt && a.substr)
    };
    b.isNumber = function(a) {
        return !!(0 ===
            a || a && a.toExponential && a.toFixed)
    };
    b.isNaN = function(a) {
        return a !== a
    };
    b.isBoolean = function(a) {
        return !0 === a || !1 === a
    };
    b.isDate = function(a) {
        return !(!a || !a.getTimezoneOffset || !a.setUTCFullYear)
    };
    b.isRegExp = function(a) {
        return !(!a || !a.test || !a.exec || !(a.ignoreCase || !1 === a.ignoreCase))
    };
    b.isNull = function(a) {
        return null === a
    };
    b.isUndefined = function(a) {
        return void 0 === a
    };
    b.noConflict = function() {
        s._ = F;
        return this
    };
    b.identity = function(a) {
        return a
    };
    b.times = function(a, b, d) {
        for (var e = 0; e < a; e++) b.call(d, e)
    };
    b.mixin =
        function(a) {
            h(b.functions(a), function(c) {
                K(c, b[c] = a[c])
            })
    };
    var L = 0;
    b.uniqueId = function(a) {
        var b = L++;
        return a ? a + b : b
    };
    b.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g
    };
    b.template = function(a, c) {
        var d = b.templateSettings,
            d = "var __p\x3d[],print\x3dfunction(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(d.interpolate, function(a, b) {
                return "'," + b.replace(/\\'/g, "'") + ",'"
            }).replace(d.evaluate || null, function(a, b) {
                return "');" +
                    b.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            d = new Function("obj", d);
        return c ? d(c) : d
    };
    var l = function(a) {
        this._wrapped = a
    };
    b.prototype = l.prototype;
    var u = function(a, c) {
        return c ? b(a).chain() : a
    }, K = function(a, c) {
            l.prototype[a] = function() {
                var a = f.call(arguments);
                G.call(a, this._wrapped);
                return u(c.apply(b, a), this._chain)
            }
        };
    b.mixin(b);
    h("pop push reverse shift sort splice unshift".split(" "), function(a) {
        var b =
            k[a];
        l.prototype[a] = function() {
            b.apply(this._wrapped, arguments);
            return u(this._wrapped, this._chain)
        }
    });
    h(["concat", "join", "slice"], function(a) {
        var b = k[a];
        l.prototype[a] = function() {
            return u(b.apply(this._wrapped, arguments), this._chain)
        }
    });
    l.prototype.chain = function() {
        this._chain = !0;
        return this
    };
    l.prototype.value = function() {
        return this._wrapped
    }
})();
Date.CultureInfo = {
    name: "en-US",
    englishName: "English (United States)",
    nativeName: "English (United States)",
    dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    abbreviatedDayNames: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    shortestDayNames: "Su Mo Tu We Th Fr Sa".split(" "),
    firstLetterDayNames: "SMTWTFS".split(""),
    monthNames: "January February March April May June July August September October November December".split(" "),
    abbreviatedMonthNames: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|after|from)/i,
        subtract: /^(\-|before|ago)/i,
        yesterday: /^yesterday/i,
        today: /^t(oday)?/i,
        tomorrow: /^tomorrow/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^min(ute)?s?/i,
        hour: /^h(ou)?rs?/i,
        week: /^w(ee)?k/i,
        month: /^m(o(nth)?s?)?/i,
        day: /^d(ays?)?/i,
        year: /^y((ea)?rs?)?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a|p)/i
    },
    abbreviatedTimeZoneStandard: {
        GMT: "-000",
        EST: "-0400",
        CST: "-0500",
        MST: "-0600",
        PST: "-0700"
    },
    abbreviatedTimeZoneDST: {
        GMT: "-000",
        EDT: "-0500",
        CDT: "-0600",
        MDT: "-0700",
        PDT: "-0800"
    }
};
Date.getMonthNumberFromName = function(a) {
    var b = Date.CultureInfo.monthNames,
        c = Date.CultureInfo.abbreviatedMonthNames;
    a = a.toLowerCase();
    for (var d = 0; d < b.length; d++)
        if (b[d].toLowerCase() == a || c[d].toLowerCase() == a) return d;
    return -1
};
Date.getDayNumberFromName = function(a) {
    var b = Date.CultureInfo.dayNames,
        c = Date.CultureInfo.abbreviatedDayNames;
    a = a.toLowerCase();
    for (var d = 0; d < b.length; d++)
        if (b[d].toLowerCase() == a || c[d].toLowerCase() == a) return d;
    return -1
};
Date.isLeapYear = function(a) {
    return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
};
Date.getDaysInMonth = function(a, b) {
    return [31, Date.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
};
Date.getTimezoneOffset = function(a, b) {
    return b ? Date.CultureInfo.abbreviatedTimeZoneDST[a.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[a.toUpperCase()]
};
Date.getTimezoneAbbreviation = function(a, b) {
    var c = b ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard,
        d;
    for (d in c)
        if (c[d] === a) return d;
    return null
};
Date.prototype.clone = function() {
    return new Date(this.getTime())
};
Date.prototype.compareTo = function(a) {
    if (isNaN(this)) throw Error(this);
    if (a instanceof Date && !isNaN(a)) return this > a ? 1 : this < a ? -1 : 0;
    throw new TypeError(a);
};
Date.prototype.equals = function(a) {
    return 0 === this.compareTo(a)
};
Date.prototype.between = function(a, b) {
    var c = this.getTime();
    return c >= a.getTime() && c <= b.getTime()
};
Date.prototype.addMilliseconds = function(a) {
    this.setMilliseconds(this.getMilliseconds() + a);
    return this
};
Date.prototype.addSeconds = function(a) {
    return this.addMilliseconds(1E3 * a)
};
Date.prototype.addMinutes = function(a) {
    return this.addMilliseconds(6E4 * a)
};
Date.prototype.addHours = function(a) {
    return this.addMilliseconds(36E5 * a)
};
Date.prototype.addDays = function(a) {
    return this.addMilliseconds(864E5 * a)
};
Date.prototype.addWeeks = function(a) {
    return this.addMilliseconds(6048E5 * a)
};
Date.prototype.addMonths = function(a) {
    var b = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + a);
    this.setDate(Math.min(b, this.getDaysInMonth()));
    return this
};
Date.prototype.addYears = function(a) {
    return this.addMonths(12 * a)
};
Date.prototype.add = function(a) {
    if ("number" == typeof a) return this._orient = a, this;
    if (a.millisecond || a.milliseconds) this.addMilliseconds(a.millisecond || a.milliseconds);
    if (a.second || a.seconds) this.addSeconds(a.second || a.seconds);
    if (a.minute || a.minutes) this.addMinutes(a.minute || a.minutes);
    if (a.hour || a.hours) this.addHours(a.hour || a.hours);
    if (a.month || a.months) this.addMonths(a.month || a.months);
    if (a.year || a.years) this.addYears(a.year || a.years);
    if (a.day || a.days) this.addDays(a.day || a.days);
    return this
};
Date._validate = function(a, b, c, d) {
    if ("number" != typeof a) throw new TypeError(a + " is not a Number.");
    if (a < b || a > c) throw new RangeError(a + " is not a valid value for " + d + ".");
    return !0
};
Date.validateMillisecond = function(a) {
    return Date._validate(a, 0, 999, "milliseconds")
};
Date.validateSecond = function(a) {
    return Date._validate(a, 0, 59, "seconds")
};
Date.validateMinute = function(a) {
    return Date._validate(a, 0, 59, "minutes")
};
Date.validateHour = function(a) {
    return Date._validate(a, 0, 23, "hours")
};
Date.validateDay = function(a, b, c) {
    return Date._validate(a, 1, Date.getDaysInMonth(b, c), "days")
};
Date.validateMonth = function(a) {
    return Date._validate(a, 0, 11, "months")
};
Date.validateYear = function(a) {
    return Date._validate(a, 1, 9999, "seconds")
};
Date.prototype.set = function(a) {
    !a.millisecond && 0 !== a.millisecond && (a.millisecond = -1);
    !a.second && 0 !== a.second && (a.second = -1);
    !a.minute && 0 !== a.minute && (a.minute = -1);
    !a.hour && 0 !== a.hour && (a.hour = -1);
    !a.day && 0 !== a.day && (a.day = -1);
    !a.month && 0 !== a.month && (a.month = -1);
    !a.year && 0 !== a.year && (a.year = -1); - 1 != a.millisecond && Date.validateMillisecond(a.millisecond) && this.addMilliseconds(a.millisecond - this.getMilliseconds()); - 1 != a.second && Date.validateSecond(a.second) && this.addSeconds(a.second - this.getSeconds()); - 1 != a.minute && Date.validateMinute(a.minute) && this.addMinutes(a.minute - this.getMinutes()); - 1 != a.hour && Date.validateHour(a.hour) && this.addHours(a.hour - this.getHours()); - 1 !== a.month && Date.validateMonth(a.month) && this.addMonths(a.month - this.getMonth()); - 1 != a.year && Date.validateYear(a.year) && this.addYears(a.year - this.getFullYear()); - 1 != a.day && Date.validateDay(a.day, this.getFullYear(), this.getMonth()) && this.addDays(a.day - this.getDate());
    a.timezone && this.setTimezone(a.timezone);
    a.timezoneOffset && this.setTimezoneOffset(a.timezoneOffset);
    return this
};
Date.prototype.clearTime = function() {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this
};
Date.prototype.isLeapYear = function() {
    var a = this.getFullYear();
    return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
};
Date.prototype.isWeekday = function() {
    return !(this.is().sat() || this.is().sun())
};
Date.prototype.getDaysInMonth = function() {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
};
Date.prototype.moveToFirstDayOfMonth = function() {
    return this.set({
        day: 1
    })
};
Date.prototype.moveToLastDayOfMonth = function() {
    return this.set({
        day: this.getDaysInMonth()
    })
};
Date.prototype.moveToDayOfWeek = function(a, b) {
    var c = (a - this.getDay() + 7 * (b || 1)) % 7;
    return this.addDays(0 === c ? c + 7 * (b || 1) : c)
};
Date.prototype.moveToMonth = function(a, b) {
    var c = (a - this.getMonth() + 12 * (b || 1)) % 12;
    return this.addMonths(0 === c ? c + 12 * (b || 1) : c)
};
Date.prototype.getDayOfYear = function() {
    return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 864E5)
};
Date.prototype.getWeekOfYear = function(a) {
    var b = this.getFullYear(),
        c = this.getMonth(),
        d = this.getDate();
    a = a || Date.CultureInfo.firstDayOfWeek;
    var e = 8 - (new Date(b, 0, 1)).getDay();
    8 == e && (e = 1);
    c = (Date.UTC(b, c, d, 0, 0, 0) - Date.UTC(b, 0, 1, 0, 0, 0)) / 864E5 + 1;
    c = Math.floor((c - e + 7) / 7);
    c === a && (b--, b = 8 - (new Date(b, 0, 1)).getDay(), c = 2 == b || 8 == b ? 53 : 52);
    return c
};
Date.prototype.isDST = function() {
    return this.toString().match(/(E|C|M|P)(S|D)T/) ? "D" == this.toString().match(/(E|C|M|P)(S|D)T/)[2] : !1
};
Date.prototype.getTimezone = function() {
    return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST())
};
Date.prototype.setTimezoneOffset = function(a) {
    var b = -1 * this.getTimezoneOffset();
    this.addMinutes(Number(a) - b);
    return this
};
Date.prototype.setTimezone = function(a) {
    return this.setTimezoneOffset(Date.getTimezoneOffset(a))
};
Date.prototype.getUTCOffset = function() {
    var a = -10 * this.getTimezoneOffset() / 6;
    if (0 > a) return a = (a - 1E4).toString(), a[0] + a.substr(2);
    a = (a + 1E4).toString();
    return "+" + a.substr(1)
};
Date.prototype.getDayName = function(a) {
    return a ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()]
};
Date.prototype.getMonthName = function(a) {
    return a ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()]
};
Date.prototype._toString = Date.prototype.toString;
Date.prototype.toString = function(a) {
    var b = this,
        c = function(a) {
            return 1 == a.toString().length ? "0" + a : a
        };
    return a ? a.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function(a) {
        switch (a) {
            case "hh":
                return c(13 > b.getHours() ? b.getHours() : b.getHours() - 12);
            case "h":
                return a = 13 > b.getHours() ? b.getHours() : b.getHours() - 12, 0 == a ? 12 : a;
            case "HH":
                return c(b.getHours());
            case "H":
                return b.getHours();
            case "mm":
                return c(b.getMinutes());
            case "m":
                return b.getMinutes();
            case "ss":
                return c(b.getSeconds());
            case "s":
                return b.getSeconds();
            case "yyyy":
                return b.getFullYear();
            case "yy":
                return b.getFullYear().toString().substring(2, 4);
            case "dddd":
                return b.getDayName();
            case "ddd":
                return b.getDayName(!0);
            case "dd":
                return c(b.getDate());
            case "d":
                return b.getDate().toString();
            case "MMMM":
                return b.getMonthName();
            case "MMM":
                return b.getMonthName(!0);
            case "MM":
                return c(b.getMonth() + 1);
            case "M":
                return b.getMonth() + 1;
            case "t":
                return 12 > b.getHours() ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
            case "tt":
                return 12 >
                    b.getHours() ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
            case "zzz":
            case "zz":
            case "z":
                return ""
        }
    }) : this._toString()
};
Date.now = function() {
    return new Date
};
Date.today = function() {
    return Date.now().clearTime()
};
Date.prototype._orient = 1;
Date.prototype.next = function() {
    this._orient = 1;
    return this
};
Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function() {
    this._orient = -1;
    return this
};
Date.prototype._is = !1;
Date.prototype.is = function() {
    this._is = !0;
    return this
};
Number.prototype._dateElement = "day";
Number.prototype.fromNow = function() {
    var a = {};
    a[this._dateElement] = this;
    return Date.now().add(a)
};
Number.prototype.ago = function() {
    var a = {};
    a[this._dateElement] = -1 * this;
    return Date.now().add(a)
};
(function() {
    for (var a = Date.prototype, b = Number.prototype, c = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/), d = "january february march april may june july august september october november december".split(/\s/), e = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/), n = function(a) {
            return function() {
                return this._is ? (this._is = !1, this.getDay() == a) : this.moveToDayOfWeek(a, this._orient)
            }
        }, k = 0; k < c.length; k++) a[c[k]] = a[c[k].substring(0, 3)] = n(k);
    c = function(a) {
        return function() {
            return this._is ?
                (this._is = !1, this.getMonth() === a) : this.moveToMonth(a, this._orient)
        }
    };
    for (n = 0; n < d.length; n++) a[d[n]] = a[d[n].substring(0, 3)] = c(n);
    c = function(a) {
        return function() {
            "s" != a.substring(a.length - 1) && (a += "s");
            return this["add" + a](this._orient)
        }
    };
    n = function(a) {
        return function() {
            this._dateElement = a;
            return this
        }
    };
    for (k = 0; k < e.length; k++) d = e[k].toLowerCase(), a[d] = a[d + "s"] = c(e[k]), b[d] = b[d + "s"] = n(d)
})();
Date.prototype.toJSONString = function() {
    return this.toString("yyyy-MM-ddThh:mm:ssZ")
};
Date.prototype.toShortDateString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern)
};
Date.prototype.toLongDateString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.longDatePattern)
};
Date.prototype.toShortTimeString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern)
};
Date.prototype.toLongTimeString = function() {
    return this.toString(Date.CultureInfo.formatPatterns.longTimePattern)
};
Date.prototype.getOrdinal = function() {
    switch (this.getDate()) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th"
    }
};
(function() {
    Date.Parsing = {
        Exception: function(a) {
            this.message = "Parse error at '" + a.substring(0, 10) + " ...'"
        }
    };
    for (var a = Date.Parsing, b = a.Operators = {
            rtoken: function(b) {
                return function(c) {
                    var f = c.match(b);
                    if (f) return [f[0], c.substring(f[0].length)];
                    throw new a.Exception(c);
                }
            },
            token: function(a) {
                return function(a) {
                    return b.rtoken(RegExp("^s*" + a + "s*"))(a)
                }
            },
            stoken: function(a) {
                return b.rtoken(RegExp("^" + a))
            },
            until: function(a) {
                return function(b) {
                    for (var c = [], g = null; b.length;) {
                        try {
                            g = a.call(this, b)
                        } catch (d) {
                            c.push(g[0]);
                            b = g[1];
                            continue
                        }
                        break
                    }
                    return [c, b]
                }
            },
            many: function(a) {
                return function(b) {
                    for (var c = [], g = null; b.length;) {
                        try {
                            g = a.call(this, b)
                        } catch (d) {
                            break
                        }
                        c.push(g[0]);
                        b = g[1]
                    }
                    return [c, b]
                }
            },
            optional: function(a) {
                return function(b) {
                    var c = null;
                    try {
                        c = a.call(this, b)
                    } catch (g) {
                        return [null, b]
                    }
                    return [c[0], c[1]]
                }
            },
            not: function(b) {
                return function(c) {
                    try {
                        b.call(this, c)
                    } catch (f) {
                        return [null, c]
                    }
                    throw new a.Exception(c);
                }
            },
            ignore: function(a) {
                return a ? function(b) {
                    var c = null,
                        c = a.call(this, b);
                    return [null, c[1]]
                } : null
            },
            product: function() {
                for (var a =
                    arguments[0], c = Array.prototype.slice.call(arguments, 1), f = [], g = 0; g < a.length; g++) f.push(b.each(a[g], c));
                return f
            },
            cache: function(b) {
                var c = {}, f = null;
                return function(g) {
                    try {
                        f = c[g] = c[g] || b.call(this, g)
                    } catch (d) {
                        f = c[g] = d
                    }
                    if (f instanceof a.Exception) throw f;
                    return f
                }
            },
            any: function() {
                var b = arguments;
                return function(c) {
                    for (var f = null, g = 0; g < b.length; g++)
                        if (null != b[g]) {
                            try {
                                f = b[g].call(this, c)
                            } catch (d) {
                                f = null
                            }
                            if (f) return f
                        }
                    throw new a.Exception(c);
                }
            },
            each: function() {
                var b = arguments;
                return function(c) {
                    for (var f = [], g = null, d = 0; d < b.length; d++)
                        if (null != b[d]) {
                            try {
                                g = b[d].call(this, c)
                            } catch (e) {
                                throw new a.Exception(c);
                            }
                            f.push(g[0]);
                            c = g[1]
                        }
                    return [f, c]
                }
            },
            all: function() {
                var a = a;
                return a.each(a.optional(arguments))
            },
            sequence: function(c, d, f) {
                d = d || b.rtoken(/^\s*/);
                f = f || null;
                return 1 == c.length ? c[0] : function(b) {
                    for (var h = null, e = null, p = [], l = 0; l < c.length; l++) {
                        try {
                            h = c[l].call(this, b)
                        } catch (m) {
                            break
                        }
                        p.push(h[0]);
                        try {
                            e = d.call(this, h[1])
                        } catch (q) {
                            e = null;
                            break
                        }
                        b = e[1]
                    }
                    if (!h) throw new a.Exception(b);
                    if (e) throw new a.Exception(e[1]);
                    if (f) try {
                        h = f.call(this, h[1])
                    } catch (s) {
                        throw new a.Exception(h[1]);
                    }
                    return [p, h ? h[1] : b]
                }
            },
            between: function(a, c, f) {
                f = f || a;
                var g = b.each(b.ignore(a), c, b.ignore(f));
                return function(a) {
                    a = g.call(this, a);
                    return [[a[0][0], r[0][2]], a[1]]
                }
            },
            list: function(a, c, f) {
                c = c || b.rtoken(/^\s*/);
                f = f || null;
                return a instanceof Array ? b.each(b.product(a.slice(0, -1), b.ignore(c)), a.slice(-1), b.ignore(f)) : b.each(b.many(b.each(a, b.ignore(c))), px, b.ignore(f))
            },
            set: function(c, d, f) {
                d = d || b.rtoken(/^\s*/);
                f = f || null;
                return function(g) {
                    for (var h =
                        null, e = h = null, p = null, l = [
                                [], g
                            ], m = !1, q = 0; q < c.length; q++) {
                        h = e = null;
                        m = 1 == c.length;
                        try {
                            h = c[q].call(this, g)
                        } catch (s) {
                            continue
                        }
                        p = [
                            [h[0]], h[1]
                        ];
                        if (0 < h[1].length && !m) try {
                            e = d.call(this, h[1])
                        } catch (t) {
                            m = !0
                        } else m = !0;
                        !m && 0 === e[1].length && (m = !0);
                        if (!m) {
                            h = [];
                            for (m = 0; m < c.length; m++) q != m && h.push(c[m]);
                            h = b.set(h, d).call(this, e[1]);
                            0 < h[0].length && (p[0] = p[0].concat(h[0]), p[1] = h[1])
                        }
                        p[1].length < l[1].length && (l = p);
                        if (0 === l[1].length) break
                    }
                    if (0 === l[0].length) return l;
                    if (f) {
                        try {
                            e = f.call(this, l[1])
                        } catch (u) {
                            throw new a.Exception(l[1]);
                        }
                        l[1] = e[1]
                    }
                    return l
                }
            },
            forward: function(a, b) {
                return function(c) {
                    return a[b].call(this, c)
                }
            },
            replace: function(a, b) {
                return function(c) {
                    c = a.call(this, c);
                    return [b, c[1]]
                }
            },
            process: function(a, b) {
                return function(c) {
                    c = a.call(this, c);
                    return [b.call(this, c[0]), c[1]]
                }
            },
            min: function(b, c) {
                return function(f) {
                    var d = c.call(this, f);
                    if (d[0].length < b) throw new a.Exception(f);
                    return d
                }
            }
        }, c = function(a) {
            return function() {
                var b = null,
                    c = [];
                1 < arguments.length ? b = Array.prototype.slice.call(arguments) : arguments[0] instanceof Array &&
                    (b = arguments[0]);
                if (b)
                    for (var d = b.shift(); 0 < d.length;) return b.unshift(d[0]), c.push(a.apply(null, b)), b.shift(), c;
                else return a.apply(null, arguments)
            }
        }, d = "optional not ignore cache".split(/\s/), e = 0; e < d.length; e++) b[d[e]] = c(b[d[e]]);
    c = function(a) {
        return function() {
            return arguments[0] instanceof Array ? a.apply(null, arguments[0]) : a.apply(null, arguments)
        }
    };
    d = "each any all".split(/\s/);
    for (e = 0; e < d.length; e++) b[d[e]] = c(b[d[e]])
})();
(function() {
    var a = function(b) {
        for (var c = [], d = 0; d < b.length; d++) b[d] instanceof Array ? c = c.concat(a(b[d])) : b[d] && c.push(b[d]);
        return c
    };
    Date.Grammar = {};
    Date.Translator = {
        hour: function(a) {
            return function() {
                this.hour = Number(a)
            }
        },
        minute: function(a) {
            return function() {
                this.minute = Number(a)
            }
        },
        second: function(a) {
            return function() {
                this.second = Number(a)
            }
        },
        meridian: function(a) {
            return function() {
                this.meridian = a.slice(0, 1).toLowerCase()
            }
        },
        timezone: function(a) {
            return function() {
                var b = a.replace(/[^\d\+\-]/g, "");
                b.length ?
                    this.timezoneOffset = Number(b) : this.timezone = a.toLowerCase()
            }
        },
        day: function(a) {
            var b = a[0];
            return function() {
                this.day = Number(b.match(/\d+/)[0])
            }
        },
        month: function(a) {
            return function() {
                this.month = 3 == a.length ? Date.getMonthNumberFromName(a) : Number(a) - 1
            }
        },
        year: function(a) {
            return function() {
                var b = Number(a);
                this.year = 2 < a.length ? b : b + (b + 2E3 < Date.CultureInfo.twoDigitYearMax ? 2E3 : 1900)
            }
        },
        rday: function(a) {
            return function() {
                switch (a) {
                    case "yesterday":
                        this.days = -1;
                        break;
                    case "tomorrow":
                        this.days = 1;
                        break;
                    case "today":
                        this.days =
                            0;
                        break;
                    case "now":
                        this.days = 0, this.now = !0
                }
            }
        },
        finishExact: function(a) {
            a = a instanceof Array ? a : [a];
            var b = new Date;
            this.year = b.getFullYear();
            this.month = b.getMonth();
            this.day = 1;
            for (b = this.second = this.minute = this.hour = 0; b < a.length; b++) a[b] && a[b].call(this);
            this.hour = "p" == this.meridian && 13 > this.hour ? this.hour + 12 : this.hour;
            if (this.day > Date.getDaysInMonth(this.year, this.month)) throw new RangeError(this.day + " is not a valid value for days.");
            a = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
            this.timezone ? a.set({
                timezone: this.timezone
            }) : this.timezoneOffset && a.set({
                timezoneOffset: this.timezoneOffset
            });
            return a
        },
        finish: function(b) {
            b = b instanceof Array ? a(b) : [b];
            if (0 === b.length) return null;
            for (var c = 0; c < b.length; c++) "function" == typeof b[c] && b[c].call(this);
            if (this.now) return new Date;
            b = Date.today();
            if (null != this.days || this.orient || this.operator) {
                var d, e;
                e = "past" == this.orient || "subtract" == this.operator ? -1 : 1;
                this.weekday && (this.unit = "day", c = Date.getDayNumberFromName(this.weekday) - b.getDay(),
                    d = 7, this.days = c ? (c + e * d) % d : e * d);
                this.month && (this.unit = "month", c = this.month - b.getMonth(), d = 12, this.months = c ? (c + e * d) % d : e * d, this.month = null);
                this.unit || (this.unit = "day");
                if (null == this[this.unit + "s"] || null != this.operator) this.value || (this.value = 1), "week" == this.unit && (this.unit = "day", this.value *= 7), this[this.unit + "s"] = this.value * e;
                return b.add(this)
            }
            this.meridian && this.hour && (this.hour = 13 > this.hour && "p" == this.meridian ? this.hour + 12 : this.hour);
            this.weekday && !this.day && (this.day = b.addDays(Date.getDayNumberFromName(this.weekday) -
                b.getDay()).getDate());
            this.month && !this.day && (this.day = 1);
            return b.set(this)
        }
    };
    var b = Date.Parsing.Operators,
        c = Date.Grammar,
        d = Date.Translator,
        e;
    c.datePartDelimiter = b.rtoken(/^([\s\-\.\,\/\x27]+)/);
    c.timePartDelimiter = b.stoken(":");
    c.whiteSpace = b.rtoken(/^\s*/);
    c.generalDelimiter = b.rtoken(/^(([\s\,]|at|on)+)/);
    var n = {};
    c.ctoken = function(a) {
        var c = n[a];
        if (!c) {
            for (var c = Date.CultureInfo.regexPatterns, d = a.split(/\s+/), e = [], k = 0; k < d.length; k++) e.push(b.replace(b.rtoken(c[d[k]]), d[k]));
            c = n[a] = b.any.apply(null,
                e)
        }
        return c
    };
    c.ctoken2 = function(a) {
        return b.rtoken(Date.CultureInfo.regexPatterns[a])
    };
    c.h = b.cache(b.process(b.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), d.hour));
    c.hh = b.cache(b.process(b.rtoken(/^(0[0-9]|1[0-2])/), d.hour));
    c.H = b.cache(b.process(b.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), d.hour));
    c.HH = b.cache(b.process(b.rtoken(/^([0-1][0-9]|2[0-3])/), d.hour));
    c.m = b.cache(b.process(b.rtoken(/^([0-5][0-9]|[0-9])/), d.minute));
    c.mm = b.cache(b.process(b.rtoken(/^[0-5][0-9]/), d.minute));
    c.s = b.cache(b.process(b.rtoken(/^([0-5][0-9]|[0-9])/),
        d.second));
    c.ss = b.cache(b.process(b.rtoken(/^[0-5][0-9]/), d.second));
    c.hms = b.cache(b.sequence([c.H, c.mm, c.ss], c.timePartDelimiter));
    c.t = b.cache(b.process(c.ctoken2("shortMeridian"), d.meridian));
    c.tt = b.cache(b.process(c.ctoken2("longMeridian"), d.meridian));
    c.z = b.cache(b.process(b.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), d.timezone));
    c.zz = b.cache(b.process(b.rtoken(/^(\+|\-)\s*\d\d\d\d/), d.timezone));
    c.zzz = b.cache(b.process(c.ctoken2("timezone"), d.timezone));
    c.timeSuffix = b.each(b.ignore(c.whiteSpace), b.set([c.tt,
        c.zzz
    ]));
    c.time = b.each(b.optional(b.ignore(b.stoken("T"))), c.hms, c.timeSuffix);
    c.d = b.cache(b.process(b.each(b.rtoken(/^([0-2]\d|3[0-1]|\d)/), b.optional(c.ctoken2("ordinalSuffix"))), d.day));
    c.dd = b.cache(b.process(b.each(b.rtoken(/^([0-2]\d|3[0-1])/), b.optional(c.ctoken2("ordinalSuffix"))), d.day));
    c.ddd = c.dddd = b.cache(b.process(c.ctoken("sun mon tue wed thu fri sat"), function(a) {
        return function() {
            this.weekday = a
        }
    }));
    c.M = b.cache(b.process(b.rtoken(/^(1[0-2]|0\d|\d)/), d.month));
    c.MM = b.cache(b.process(b.rtoken(/^(1[0-2]|0\d)/),
        d.month));
    c.MMM = c.MMMM = b.cache(b.process(c.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), d.month));
    c.y = b.cache(b.process(b.rtoken(/^(\d\d?)/), d.year));
    c.yy = b.cache(b.process(b.rtoken(/^(\d\d)/), d.year));
    c.yyy = b.cache(b.process(b.rtoken(/^(\d\d?\d?\d?)/), d.year));
    c.yyyy = b.cache(b.process(b.rtoken(/^(\d\d\d\d)/), d.year));
    e = function() {
        return b.each(b.any.apply(null, arguments), b.not(c.ctoken2("timeContext")))
    };
    c.day = e(c.d, c.dd);
    c.month = e(c.M, c.MMM);
    c.year = e(c.yyyy, c.yy);
    c.orientation = b.process(c.ctoken("past future"),
        function(a) {
            return function() {
                this.orient = a
            }
        });
    c.operator = b.process(c.ctoken("add subtract"), function(a) {
        return function() {
            this.operator = a
        }
    });
    c.rday = b.process(c.ctoken("yesterday tomorrow today now"), d.rday);
    c.unit = b.process(c.ctoken("minute hour day week month year"), function(a) {
        return function() {
            this.unit = a
        }
    });
    c.value = b.process(b.rtoken(/^\d\d?(st|nd|rd|th)?/), function(a) {
        return function() {
            this.value = a.replace(/\D/g, "")
        }
    });
    c.expression = b.set([c.rday, c.operator, c.value, c.unit, c.orientation, c.ddd,
        c.MMM
    ]);
    e = function() {
        return b.set(arguments, c.datePartDelimiter)
    };
    c.mdy = e(c.ddd, c.month, c.day, c.year);
    c.ymd = e(c.ddd, c.year, c.month, c.day);
    c.dmy = e(c.ddd, c.day, c.month, c.year);
    c.date = function(a) {
        return (c[Date.CultureInfo.dateElementOrder] || c.mdy).call(this, a)
    };
    c.format = b.process(b.many(b.any(b.process(b.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(a) {
            if (c[a]) return c[a];
            throw Date.Parsing.Exception(a);
        }), b.process(b.rtoken(/^[^dMyhHmstz]+/), function(a) {
            return b.ignore(b.stoken(a))
        }))),
        function(a) {
            return b.process(b.each.apply(null, a), d.finishExact)
        });
    var k = {};
    c.formats = function(a) {
        if (a instanceof Array) {
            for (var d = [], e = 0; e < a.length; e++) d.push(k[a[e]] = k[a[e]] || c.format(a[e])[0]);
            return b.any.apply(null, d)
        }
        return k[a] = k[a] || c.format(a)[0]
    };
    c._formats = c.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]);
    c._start = b.process(b.set([c.date, c.time, c.expression], c.generalDelimiter, c.whiteSpace), d.finish);
    c.start = function(a) {
        try {
            var b = c._formats.call({},
                a);
            if (0 === b[1].length) return b
        } catch (d) {}
        return c._start.call({}, a)
    }
})();
Date._parse = Date.parse;
Date.parse = function(a) {
    var b = null;
    if (!a) return null;
    try {
        b = Date.Grammar.start.call({}, a)
    } catch (c) {
        return null
    }
    return 0 === b[1].length ? b[0] : null
};
Date.getParseFunction = function(a) {
    var b = Date.Grammar.formats(a);
    return function(a) {
        var d = null;
        try {
            d = b.call({}, a)
        } catch (e) {
            return null
        }
        return 0 === d[1].length ? d[0] : null
    }
};
Date.parseExact = function(a, b) {
    return Date.getParseFunction(b)(a)
};
var Hashtable = function() {
    function q(a) {
        if ("string" == typeof a) return a;
        if (typeof a.hashCode == g) return a = a.hashCode(), "string" == typeof a ? a : q(a);
        if (typeof a.toString == g) return a.toString();
        try {
            return String(a)
        } catch (b) {
            return Object.prototype.toString.call(a)
        }
    }

    function z(a, b) {
        return a.equals(b)
    }

    function A(a, b) {
        return typeof b.equals == g ? b.equals(a) : a === b
    }

    function r(a) {
        return function(b) {
            if (null === b) throw Error("null is not a valid " + a);
            if ("undefined" == typeof b) throw Error(a + " must not be undefined");
        }
    }

    function n(a, b, d, c) {
        this[0] = a;
        this.entries = [];
        this.addEntry(b, d);
        null !== c && (this.getEqualityFunction = function() {
            return c
        })
    }

    function h(a) {
        return function(b) {
            for (var d = this.entries.length, c, f = this.getEqualityFunction(b); d--;)
                if (c = this.entries[d], f(b, c[0])) switch (a) {
                    case s:
                        return !0;
                    case t:
                        return c;
                    case u:
                        return [d, c[1]]
                }
                return !1
        }
    }

    function v(a) {
        return function(b) {
            for (var d = b.length, c = 0, f = this.entries.length; c < f; ++c) b[d + c] = this.entries[c][a]
        }
    }

    function k(a, b) {
        var d = a[b];
        return d && d instanceof n ? d : null
    }

    function w(a, b) {
        var d = this,
            c = [],
            f = {}, l = typeof a == g ? a : q,
            h = typeof b == g ? b : null;
        this.put = function(a, b) {
            m(a);
            x(b);
            var d = l(a),
                e, g = null;
            (e = k(f, d)) ? (d = e.getEntryForKey(a)) ? (g = d[1], d[1] = b) : e.addEntry(a, b) : (e = new n(d, a, b, h), c[c.length] = e, f[d] = e);
            return g
        };
        this.get = function(a) {
            m(a);
            var b = l(a);
            if (b = k(f, b))
                if (a = b.getEntryForKey(a)) return a[1];
            return null
        };
        this.containsKey = function(a) {
            m(a);
            var b = l(a);
            return (b = k(f, b)) ? b.containsKey(a) : !1
        };
        this.containsValue = function(a) {
            x(a);
            for (var b = c.length; b--;)
                if (c[b].containsValue(a)) return !0;
            return !1
        };
        this.clear = function() {
            c.length = 0;
            f = {}
        };
        this.isEmpty = function() {
            return !c.length
        };
        var p = function(a) {
            return function() {
                for (var b = [], d = c.length; d--;) c[d][a](b);
                return b
            }
        };
        this.keys = p("keys");
        this.values = p("values");
        this.entries = p("getEntries");
        this.remove = function(a) {
            m(a);
            var b = l(a),
                d = null,
                e = k(f, b);
            if (e && (d = e.removeEntryForKey(a), null !== d && !e.entries.length)) {
                a: {
                    for (a = c.length; a--;)
                        if (e = c[a], b === e[0]) break a;
                    a = null
                }
                y(c, a);
                delete f[b]
            }
            return d
        };
        this.size = function() {
            for (var a = 0, b = c.length; b--;) a +=
                c[b].entries.length;
            return a
        };
        this.each = function(a) {
            for (var b = d.entries(), c = b.length, e; c--;) e = b[c], a(e[0], e[1])
        };
        this.putAll = function(a, b) {
            for (var c = a.entries(), e, f, h, k = c.length, l = typeof b == g; k--;) {
                e = c[k];
                f = e[0];
                e = e[1];
                if (l && (h = d.get(f))) e = b(f, h, e);
                d.put(f, e)
            }
        };
        this.clone = function() {
            var c = new w(a, b);
            c.putAll(d);
            return c
        }
    }
    var g = "function",
        y = typeof Array.prototype.splice == g ? function(a, b) {
            a.splice(b, 1)
        } : function(a, b) {
            var d, c, f;
            if (b === a.length - 1) a.length = b;
            else {
                d = a.slice(b + 1);
                a.length = b;
                c = 0;
                for (f = d.length; c <
                    f; ++c) a[b + c] = d[c]
            }
        }, m = r("key"),
        x = r("value"),
        s = 0,
        t = 1,
        u = 2;
    n.prototype = {
        getEqualityFunction: function(a) {
            return typeof a.equals == g ? z : A
        },
        getEntryForKey: h(t),
        getEntryAndIndexForKey: h(u),
        removeEntryForKey: function(a) {
            return (a = this.getEntryAndIndexForKey(a)) ? (y(this.entries, a[0]), a[1]) : null
        },
        addEntry: function(a, b) {
            this.entries[this.entries.length] = [a, b]
        },
        keys: v(0),
        values: v(1),
        getEntries: function(a) {
            for (var b = a.length, d = 0, c = this.entries.length; d < c; ++d) a[b + d] = this.entries[d].slice(0)
        },
        containsKey: h(s),
        containsValue: function(a) {
            for (var b =
                this.entries.length; b--;)
                if (a === this.entries[b][1]) return !0;
            return !1
        }
    };
    return w
}();
/*
 Copyright 2008-2012 Allan Jardine, all rights reserved.

 This source file is free software, under either the GPL v2 license or a
 BSD style license, available at:
   http://datatables.net/license_gpl2
   http://datatables.net/license_bsd

 This source file is distributed in the hope that it will be useful, but 
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
*/
(function(O, n, $a) {
    (function(k) {
        "function" === typeof define && define.amd ? define(["jquery"], k) : jQuery && !jQuery.fn.dataTable && k(jQuery)
    })(function(k) {
        var l = function(e) {
            function r(a, b) {
                var c = l.defaults.columns,
                    d = a.aoColumns.length,
                    c = k.extend({}, l.models.oColumn, c, {
                        sSortingClass: a.oClasses.sSortable,
                        sSortingClassJUI: a.oClasses.sSortJUI,
                        nTh: b ? b : n.createElement("th"),
                        sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
                        aDataSort: c.aDataSort ? c.aDataSort : [d],
                        mData: c.mData ? c.oDefaults : d
                    });
                a.aoColumns.push(c);
                void 0 === a.aoPreSearchCols[d] ||
                    null === a.aoPreSearchCols[d] ? a.aoPreSearchCols[d] = k.extend({}, l.models.oSearch) : (c = a.aoPreSearchCols[d], void 0 === c.bRegex && (c.bRegex = !0), void 0 === c.bSmart && (c.bSmart = !0), void 0 === c.bCaseInsensitive && (c.bCaseInsensitive = !0));
                p(a, d, null)
            }

            function p(a, b, c) {
                var d = a.aoColumns[b];
                void 0 !== c && null !== c && (c.mDataProp && !c.mData && (c.mData = c.mDataProp), void 0 !== c.sType && (d.sType = c.sType, d._bAutoType = !1), k.extend(d, c), q(d, c, "sWidth", "sWidthOrig"), void 0 !== c.iDataSort && (d.aDataSort = [c.iDataSort]), q(d, c, "aDataSort"));
                var h = d.mRender ? T(d.mRender) : null,
                    f = T(d.mData);
                d.fnGetData = function(a, b) {
                    var c = f(a, b);
                    return d.mRender && b && "" !== b ? h(c, b, a) : c
                };
                d.fnSetData = ua(d.mData);
                a.oFeatures.bSort || (d.bSortable = !1);
                !d.bSortable || -1 == k.inArray("asc", d.asSorting) && -1 == k.inArray("desc", d.asSorting) ? (d.sSortingClass = a.oClasses.sSortableNone, d.sSortingClassJUI = "") : -1 == k.inArray("asc", d.asSorting) && -1 == k.inArray("desc", d.asSorting) ? (d.sSortingClass = a.oClasses.sSortable, d.sSortingClassJUI = a.oClasses.sSortJUI) : -1 != k.inArray("asc", d.asSorting) && -1 == k.inArray("desc", d.asSorting) ? (d.sSortingClass = a.oClasses.sSortableAsc, d.sSortingClassJUI = a.oClasses.sSortJUIAscAllowed) : -1 == k.inArray("asc", d.asSorting) && -1 != k.inArray("desc", d.asSorting) && (d.sSortingClass = a.oClasses.sSortableDesc, d.sSortingClassJUI = a.oClasses.sSortJUIDescAllowed)
            }

            function m(a) {
                if (!1 === a.oFeatures.bAutoWidth) return !1;
                ea(a);
                for (var b = 0, c = a.aoColumns.length; b < c; b++) a.aoColumns[b].nTh.style.width = a.aoColumns[b].sWidth
            }

            function J(a, b) {
                var c = v(a, "bVisible");
                return "number" === typeof c[b] ?
                    c[b] : null
            }

            function t(a, b) {
                var c = v(a, "bVisible"),
                    c = k.inArray(b, c);
                return -1 !== c ? c : null
            }

            function u(a) {
                return v(a, "bVisible").length
            }

            function v(a, b) {
                var c = [];
                k.map(a.aoColumns, function(a, h) {
                    a[b] && c.push(h)
                });
                return c
            }

            function E(a) {
                for (var b = l.ext.aTypes, c = b.length, d = 0; d < c; d++) {
                    var h = b[d](a);
                    if (null !== h) return h
                }
                return "string"
            }

            function x(a, b) {
                for (var c = b.split(","), d = [], h = 0, f = a.aoColumns.length; h < f; h++)
                    for (var g = 0; g < f; g++)
                        if (a.aoColumns[h].sName == c[g]) {
                            d.push(g);
                            break
                        }
                return d
            }

            function P(a) {
                for (var b =
                    "", c = 0, d = a.aoColumns.length; c < d; c++) b += a.aoColumns[c].sName + ",";
                return b.length == d ? "" : b.slice(0, -1)
            }

            function va(a, b, c, d) {
                var h, f, g, e, z;
                if (b)
                    for (h = b.length - 1; 0 <= h; h--) {
                        var l = b[h].aTargets;
                        k.isArray(l) || G(a, 1, "aTargets must be an array of targets, not a " + typeof l);
                        f = 0;
                        for (g = l.length; f < g; f++)
                            if ("number" === typeof l[f] && 0 <= l[f]) {
                                for (; a.aoColumns.length <= l[f];) r(a);
                                d(l[f], b[h])
                            } else if ("number" === typeof l[f] && 0 > l[f]) d(a.aoColumns.length + l[f], b[h]);
                        else if ("string" === typeof l[f]) {
                            e = 0;
                            for (z = a.aoColumns.length; e <
                                z; e++)("_all" == l[f] || k(a.aoColumns[e].nTh).hasClass(l[f])) && d(e, b[h])
                        }
                    }
                if (c) {
                    h = 0;
                    for (a = c.length; h < a; h++) d(h, c[h])
                }
            }

            function K(a, b) {
                var c;
                c = k.isArray(b) ? b.slice() : k.extend(!0, {}, b);
                var d = a.aoData.length,
                    h = k.extend(!0, {}, l.models.oRow);
                h._aData = c;
                a.aoData.push(h);
                for (var f, h = 0, g = a.aoColumns.length; h < g; h++) c = a.aoColumns[h], "function" === typeof c.fnRender && c.bUseRendered && null !== c.mData ? I(a, d, h, U(a, d, h)) : I(a, d, h, y(a, d, h)), c._bAutoType && "string" != c.sType && (f = y(a, d, h, "type"), null !== f && "" !== f && (f = E(f), null ===
                    c.sType ? c.sType = f : c.sType != f && "html" != c.sType && (c.sType = "string")));
                a.aiDisplayMaster.push(d);
                a.oFeatures.bDeferRender || fa(a, d);
                return d
            }

            function xa(a) {
                var b, c, d, h, f, g, e;
                if (a.bDeferLoading || null === a.sAjaxSource)
                    for (b = a.nTBody.firstChild; b;) {
                        if ("TR" == b.nodeName.toUpperCase()) {
                            c = a.aoData.length;
                            b._DT_RowIndex = c;
                            a.aoData.push(k.extend(!0, {}, l.models.oRow, {
                                nTr: b
                            }));
                            a.aiDisplayMaster.push(c);
                            f = b.firstChild;
                            for (d = 0; f;) {
                                g = f.nodeName.toUpperCase();
                                if ("TD" == g || "TH" == g) I(a, c, d, k.trim(f.innerHTML)), d++;
                                f = f.nextSibling
                            }
                        }
                        b =
                            b.nextSibling
                    }
                h = V(a);
                d = [];
                b = 0;
                for (c = h.length; b < c; b++)
                    for (f = h[b].firstChild; f;) g = f.nodeName.toUpperCase(), ("TD" == g || "TH" == g) && d.push(f), f = f.nextSibling;
                c = 0;
                for (h = a.aoColumns.length; c < h; c++) {
                    e = a.aoColumns[c];
                    null === e.sTitle && (e.sTitle = e.nTh.innerHTML);
                    var z = e._bAutoType,
                        wa = "function" === typeof e.fnRender,
                        r = null !== e.sClass,
                        m = e.bVisible,
                        p, q;
                    if (z || wa || r || !m) {
                        g = 0;
                        for (b = a.aoData.length; g < b; g++) f = a.aoData[g], p = d[g * h + c], z && "string" != e.sType && (q = y(a, g, c, "type"), "" !== q && (q = E(q), null === e.sType ? e.sType = q : e.sType !=
                            q && "html" != e.sType && (e.sType = "string"))), e.mRender ? p.innerHTML = y(a, g, c, "display") : e.mData !== c && (p.innerHTML = y(a, g, c, "display")), wa && (q = U(a, g, c), p.innerHTML = q, e.bUseRendered && I(a, g, c, q)), r && (p.className += " " + e.sClass), m ? f._anHidden[c] = null : (f._anHidden[c] = p, p.parentNode.removeChild(p)), e.fnCreatedCell && e.fnCreatedCell.call(a.oInstance, p, y(a, g, c, "display"), f._aData, g, c)
                    }
                }
                if (0 !== a.aoRowCreatedCallback.length) {
                    b = 0;
                    for (c = a.aoData.length; b < c; b++) f = a.aoData[b], D(a, "aoRowCreatedCallback", null, [f.nTr, f._aData,
                        b
                    ])
                }
            }

            function L(a, b) {
                return void 0 !== b._DT_RowIndex ? b._DT_RowIndex : null
            }

            function ga(a, b, c) {
                b = M(a, b);
                var d = 0;
                for (a = a.aoColumns.length; d < a; d++)
                    if (b[d] === c) return d;
                return -1
            }

            function Z(a, b, c, d) {
                for (var h = [], f = 0, g = d.length; f < g; f++) h.push(y(a, b, d[f], c));
                return h
            }

            function y(a, b, c, d) {
                var h = a.aoColumns[c];
                if (void 0 === (c = h.fnGetData(a.aoData[b]._aData, d))) return a.iDrawError != a.iDraw && null === h.sDefaultContent && (G(a, 0, "Requested unknown parameter " + ("function" == typeof h.mData ? "{mData function}" : "'" + h.mData +
                    "'") + " from the data source for row " + b), a.iDrawError = a.iDraw), h.sDefaultContent;
                if (null === c && null !== h.sDefaultContent) c = h.sDefaultContent;
                else if ("function" === typeof c) return c();
                return "display" == d && null === c ? "" : c
            }

            function I(a, b, c, d) {
                a.aoColumns[c].fnSetData(a.aoData[b]._aData, d)
            }

            function T(a) {
                if (null === a) return function(a, b) {
                    return null
                };
                if ("function" === typeof a) return function(b, d, h) {
                    return a(b, d, h)
                };
                if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("["))) {
                    var b = function(a, d, h) {
                        var f =
                            h.split("."),
                            g;
                        if ("" !== h) {
                            var e = 0;
                            for (g = f.length; e < g; e++) {
                                if (h = f[e].match(W)) {
                                    f[e] = f[e].replace(W, "");
                                    "" !== f[e] && (a = a[f[e]]);
                                    g = [];
                                    f.splice(0, e + 1);
                                    for (var f = f.join("."), e = 0, k = a.length; e < k; e++) g.push(b(a[e], d, f));
                                    a = h[0].substring(1, h[0].length - 1);
                                    a = "" === a ? g : g.join(a);
                                    break
                                }
                                if (null === a || void 0 === a[f[e]]) return;
                                a = a[f[e]]
                            }
                        }
                        return a
                    };
                    return function(c, d) {
                        return b(c, d, a)
                    }
                }
                return function(b, d) {
                    return b[a]
                }
            }

            function ua(a) {
                if (null === a) return function(a, b) {};
                if ("function" === typeof a) return function(b, d) {
                    a(b,
                        "set", d)
                };
                if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("["))) {
                    var b = function(a, d, h) {
                        h = h.split(".");
                        var f, g, e = 0;
                        for (g = h.length - 1; e < g; e++) {
                            if (f = h[e].match(W)) {
                                h[e] = h[e].replace(W, "");
                                a[h[e]] = [];
                                f = h.slice();
                                f.splice(0, e + 1);
                                g = f.join(".");
                                for (var k = 0, l = d.length; k < l; k++) f = {}, b(f, d[k], g), a[h[e]].push(f);
                                return
                            }
                            if (null === a[h[e]] || void 0 === a[h[e]]) a[h[e]] = {};
                            a = a[h[e]]
                        }
                        a[h[h.length - 1].replace(W, "")] = d
                    };
                    return function(c, d) {
                        return b(c, d, a)
                    }
                }
                return function(b, d) {
                    b[a] = d
                }
            }

            function $(a) {
                for (var b = [], c = a.aoData.length, d = 0; d < c; d++) b.push(a.aoData[d]._aData);
                return b
            }

            function ha(a) {
                a.aoData.splice(0, a.aoData.length);
                a.aiDisplayMaster.splice(0, a.aiDisplayMaster.length);
                a.aiDisplay.splice(0, a.aiDisplay.length);
                B(a)
            }

            function ia(a, b) {
                for (var c = -1, d = 0, h = a.length; d < h; d++) a[d] == b ? c = d : a[d] > b && a[d]--; - 1 != c && a.splice(c, 1)
            }

            function U(a, b, c) {
                var d = a.aoColumns[c];
                return d.fnRender({
                    iDataRow: b,
                    iDataColumn: c,
                    oSettings: a,
                    aData: a.aoData[b]._aData,
                    mDataProp: d.mData
                }, y(a, b, c, "display"))
            }

            function fa(a, b) {
                var c =
                    a.aoData[b],
                    d;
                if (null === c.nTr) {
                    c.nTr = n.createElement("tr");
                    c.nTr._DT_RowIndex = b;
                    c._aData.DT_RowId && (c.nTr.id = c._aData.DT_RowId);
                    c._aData.DT_RowClass && (c.nTr.className = c._aData.DT_RowClass);
                    for (var h = 0, f = a.aoColumns.length; h < f; h++) {
                        var g = a.aoColumns[h];
                        d = n.createElement(g.sCellType);
                        d.innerHTML = "function" === typeof g.fnRender && (!g.bUseRendered || null === g.mData) ? U(a, b, h) : y(a, b, h, "display");
                        null !== g.sClass && (d.className = g.sClass);
                        g.bVisible ? (c.nTr.appendChild(d), c._anHidden[h] = null) : c._anHidden[h] = d;
                        g.fnCreatedCell &&
                            g.fnCreatedCell.call(a.oInstance, d, y(a, b, h, "display"), c._aData, b, h)
                    }
                    D(a, "aoRowCreatedCallback", null, [c.nTr, c._aData, b])
                }
            }

            function ya(a) {
                var b, c, d;
                if (0 !== k("th, td", a.nTHead).length) {
                    b = 0;
                    for (d = a.aoColumns.length; b < d; b++) c = a.aoColumns[b].nTh, c.setAttribute("role", "columnheader"), a.aoColumns[b].bSortable && (c.setAttribute("tabindex", a.iTabIndex), c.setAttribute("aria-controls", a.sTableId)), null !== a.aoColumns[b].sClass && k(c).addClass(a.aoColumns[b].sClass), a.aoColumns[b].sTitle != c.innerHTML && (c.innerHTML =
                        a.aoColumns[b].sTitle)
                } else {
                    var h = n.createElement("tr");
                    b = 0;
                    for (d = a.aoColumns.length; b < d; b++) c = a.aoColumns[b].nTh, c.innerHTML = a.aoColumns[b].sTitle, c.setAttribute("tabindex", "0"), null !== a.aoColumns[b].sClass && k(c).addClass(a.aoColumns[b].sClass), h.appendChild(c);
                    k(a.nTHead).html("")[0].appendChild(h);
                    X(a.aoHeader, a.nTHead)
                }
                k(a.nTHead).children("tr").attr("role", "row");
                if (a.bJUI) {
                    b = 0;
                    for (d = a.aoColumns.length; b < d; b++) {
                        c = a.aoColumns[b].nTh;
                        h = n.createElement("div");
                        h.className = a.oClasses.sSortJUIWrapper;
                        k(c).contents().appendTo(h);
                        var f = n.createElement("span");
                        f.className = a.oClasses.sSortIcon;
                        h.appendChild(f);
                        c.appendChild(h)
                    }
                }
                if (a.oFeatures.bSort)
                    for (b = 0; b < a.aoColumns.length; b++)!1 !== a.aoColumns[b].bSortable ? ja(a, a.aoColumns[b].nTh, b) : k(a.aoColumns[b].nTh).addClass(a.oClasses.sSortableNone);
                "" !== a.oClasses.sFooterTH && k(a.nTFoot).children("tr").children("th").addClass(a.oClasses.sFooterTH);
                if (null !== a.nTFoot) {
                    c = Q(a, null, a.aoFooter);
                    b = 0;
                    for (d = a.aoColumns.length; b < d; b++) c[b] && (a.aoColumns[b].nTf = c[b],
                        a.aoColumns[b].sClass && k(c[b]).addClass(a.aoColumns[b].sClass))
                }
            }

            function Y(a, b, c) {
                var d, h, f, g = [],
                    e = [],
                    k = a.aoColumns.length,
                    l;
                void 0 === c && (c = !1);
                d = 0;
                for (h = b.length; d < h; d++) {
                    g[d] = b[d].slice();
                    g[d].nTr = b[d].nTr;
                    for (f = k - 1; 0 <= f; f--)!a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
                    e.push([])
                }
                d = 0;
                for (h = g.length; d < h; d++) {
                    if (a = g[d].nTr)
                        for (; f = a.firstChild;) a.removeChild(f);
                    f = 0;
                    for (b = g[d].length; f < b; f++)
                        if (l = k = 1, void 0 === e[d][f]) {
                            a.appendChild(g[d][f].cell);
                            for (e[d][f] = 1; void 0 !== g[d + k] && g[d][f].cell == g[d + k][f].cell;) e[d +
                                k][f] = 1, k++;
                            for (; void 0 !== g[d][f + l] && g[d][f].cell == g[d][f + l].cell;) {
                                for (c = 0; c < k; c++) e[d + c][f + l] = 1;
                                l++
                            }
                            g[d][f].cell.rowSpan = k;
                            g[d][f].cell.colSpan = l
                        }
                }
            }

            function A(a) {
                var b = D(a, "aoPreDrawCallback", "preDraw", [a]);
                if (-1 !== k.inArray(!1, b)) H(a, !1);
                else {
                    var c, d, b = [],
                        h = 0,
                        f = a.asStripeClasses.length;
                    c = a.aoOpenRows.length;
                    a.bDrawing = !0;
                    void 0 !== a.iInitDisplayStart && -1 != a.iInitDisplayStart && (a._iDisplayStart = a.oFeatures.bServerSide ? a.iInitDisplayStart : a.iInitDisplayStart >= a.fnRecordsDisplay() ? 0 : a.iInitDisplayStart,
                        a.iInitDisplayStart = -1, B(a));
                    if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++;
                    else if (a.oFeatures.bServerSide) {
                        if (!a.bDestroying && !za(a)) return
                    } else a.iDraw++; if (0 !== a.aiDisplay.length) {
                        var g = a._iDisplayStart;
                        d = a._iDisplayEnd;
                        a.oFeatures.bServerSide && (g = 0, d = a.aoData.length);
                        for (; g < d; g++) {
                            var e = a.aoData[a.aiDisplay[g]];
                            null === e.nTr && fa(a, a.aiDisplay[g]);
                            var l = e.nTr;
                            if (0 !== f) {
                                var r = a.asStripeClasses[h % f];
                                e._sRowStripe != r && (k(l).removeClass(e._sRowStripe).addClass(r), e._sRowStripe = r)
                            }
                            D(a, "aoRowCallback",
                                null, [l, a.aoData[a.aiDisplay[g]]._aData, h, g]);
                            b.push(l);
                            h++;
                            if (0 !== c)
                                for (e = 0; e < c; e++)
                                    if (l == a.aoOpenRows[e].nParent) {
                                        b.push(a.aoOpenRows[e].nTr);
                                        break
                                    }
                        }
                    } else b[0] = n.createElement("tr"), a.asStripeClasses[0] && (b[0].className = a.asStripeClasses[0]), c = a.oLanguage, f = c.sZeroRecords, 1 == a.iDraw && null !== a.sAjaxSource && !a.oFeatures.bServerSide ? f = c.sLoadingRecords : c.sEmptyTable && 0 === a.fnRecordsTotal() && (f = c.sEmptyTable), c = n.createElement("td"), c.setAttribute("valign", "top"), c.colSpan = u(a), c.className = a.oClasses.sRowEmpty,
                    c.innerHTML = ka(a, f), b[h].appendChild(c);
                    D(a, "aoHeaderCallback", "header", [k(a.nTHead).children("tr")[0], $(a), a._iDisplayStart, a.fnDisplayEnd(), a.aiDisplay]);
                    D(a, "aoFooterCallback", "footer", [k(a.nTFoot).children("tr")[0], $(a), a._iDisplayStart, a.fnDisplayEnd(), a.aiDisplay]);
                    h = n.createDocumentFragment();
                    c = n.createDocumentFragment();
                    if (a.nTBody) {
                        f = a.nTBody.parentNode;
                        c.appendChild(a.nTBody);
                        if (!a.oScroll.bInfinite || !a._bInitComplete || a.bSorted || a.bFiltered)
                            for (; c = a.nTBody.firstChild;) a.nTBody.removeChild(c);
                        c = 0;
                        for (d = b.length; c < d; c++) h.appendChild(b[c]);
                        a.nTBody.appendChild(h);
                        null !== f && f.appendChild(a.nTBody)
                    }
                    D(a, "aoDrawCallback", "draw", [a]);
                    a.bSorted = !1;
                    a.bFiltered = !1;
                    a.bDrawing = !1;
                    a.oFeatures.bServerSide && (H(a, !1), a._bInitComplete || aa(a))
                }
            }

            function ba(a) {
                a.oFeatures.bSort ? R(a, a.oPreviousSearch) : a.oFeatures.bFilter ? N(a, a.oPreviousSearch) : (B(a), A(a))
            }

            function Aa(a) {
                var b = k("\x3cdiv\x3e\x3c/div\x3e")[0];
                a.nTable.parentNode.insertBefore(b, a.nTable);
                a.nTableWrapper = k('\x3cdiv id\x3d"' + a.sTableId + '_wrapper" class\x3d"' +
                    a.oClasses.sWrapper + '" role\x3d"grid"\x3e\x3c/div\x3e')[0];
                a.nTableReinsertBefore = a.nTable.nextSibling;
                for (var c = a.nTableWrapper, d = a.sDom.split(""), h, f, g, e, z, r, m, p = 0; p < d.length; p++) {
                    f = 0;
                    g = d[p];
                    if ("\x3c" == g) {
                        e = k("\x3cdiv\x3e\x3c/div\x3e")[0];
                        z = d[p + 1];
                        if ("'" == z || '"' == z) {
                            r = "";
                            for (m = 2; d[p + m] != z;) r += d[p + m], m++;
                            "H" == r ? r = a.oClasses.sJUIHeader : "F" == r && (r = a.oClasses.sJUIFooter); - 1 != r.indexOf(".") ? (z = r.split("."), e.id = z[0].substr(1, z[0].length - 1), e.className = z[1]) : "#" == r.charAt(0) ? e.id = r.substr(1, r.length -
                                1) : e.className = r;
                            p += m
                        }
                        c.appendChild(e);
                        c = e
                    } else if ("\x3e" == g) c = c.parentNode;
                    else if ("l" == g && a.oFeatures.bPaginate && a.oFeatures.bLengthChange) h = Ba(a), f = 1;
                    else if ("f" == g && a.oFeatures.bFilter) h = Ca(a), f = 1;
                    else if ("r" == g && a.oFeatures.bProcessing) h = Da(a), f = 1;
                    else if ("t" == g) h = Ea(a), f = 1;
                    else if ("i" == g && a.oFeatures.bInfo) h = Fa(a), f = 1;
                    else if ("p" == g && a.oFeatures.bPaginate) h = Ga(a), f = 1;
                    else if (0 !== l.ext.aoFeatures.length) {
                        e = l.ext.aoFeatures;
                        m = 0;
                        for (z = e.length; m < z; m++)
                            if (g == e[m].cFeature) {
                                (h = e[m].fnInit(a)) && (f =
                                    1);
                                break
                            }
                    }
                    1 == f && null !== h && ("object" !== typeof a.aanFeatures[g] && (a.aanFeatures[g] = []), a.aanFeatures[g].push(h), c.appendChild(h))
                }
                b.parentNode.replaceChild(a.nTableWrapper, b)
            }

            function X(a, b) {
                var c = k(b).children("tr"),
                    d, h, f, g, e, l, r, m, p, q;
                a.splice(0, a.length);
                f = 0;
                for (l = c.length; f < l; f++) a.push([]);
                f = 0;
                for (l = c.length; f < l; f++) {
                    d = c[f];
                    for (h = d.firstChild; h;) {
                        if ("TD" == h.nodeName.toUpperCase() || "TH" == h.nodeName.toUpperCase()) {
                            m = 1 * h.getAttribute("colspan");
                            p = 1 * h.getAttribute("rowspan");
                            m = !m || 0 === m || 1 === m ? 1 : m;
                            p = !p || 0 === p || 1 === p ? 1 : p;
                            g = 0;
                            for (e = a[f]; e[g];) g++;
                            r = g;
                            q = 1 === m ? !0 : !1;
                            for (e = 0; e < m; e++)
                                for (g = 0; g < p; g++) a[f + g][r + e] = {
                                    cell: h,
                                    unique: q
                                }, a[f + g].nTr = d
                        }
                        h = h.nextSibling
                    }
                }
            }

            function Q(a, b, c) {
                var d = [];
                c || (c = a.aoHeader, b && (c = [], X(c, b)));
                b = 0;
                for (var h = c.length; b < h; b++)
                    for (var f = 0, g = c[b].length; f < g; f++)
                        if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
                return d
            }

            function za(a) {
                if (a.bAjaxDataGet) {
                    a.iDraw++;
                    H(a, !0);
                    var b = Ha(a);
                    la(a, b);
                    a.fnServerData.call(a.oInstance, a.sAjaxSource, b, function(b) {
                        Ia(a, b)
                    }, a);
                    return !1
                }
                return !0
            }

            function Ha(a) {
                var b = a.aoColumns.length,
                    c = [],
                    d, h, f, g;
                c.push({
                    name: "sEcho",
                    value: a.iDraw
                });
                c.push({
                    name: "iColumns",
                    value: b
                });
                c.push({
                    name: "sColumns",
                    value: P(a)
                });
                c.push({
                    name: "iDisplayStart",
                    value: a._iDisplayStart
                });
                c.push({
                    name: "iDisplayLength",
                    value: !1 !== a.oFeatures.bPaginate ? a._iDisplayLength : -1
                });
                for (f = 0; f < b; f++) d = a.aoColumns[f].mData, c.push({
                    name: "mDataProp_" + f,
                    value: "function" === typeof d ? "function" : d
                });
                if (!1 !== a.oFeatures.bFilter) {
                    c.push({
                        name: "sSearch",
                        value: a.oPreviousSearch.sSearch
                    });
                    c.push({
                        name: "bRegex",
                        value: a.oPreviousSearch.bRegex
                    });
                    for (f = 0; f < b; f++) c.push({
                        name: "sSearch_" + f,
                        value: a.aoPreSearchCols[f].sSearch
                    }), c.push({
                        name: "bRegex_" + f,
                        value: a.aoPreSearchCols[f].bRegex
                    }), c.push({
                        name: "bSearchable_" + f,
                        value: a.aoColumns[f].bSearchable
                    })
                }
                if (!1 !== a.oFeatures.bSort) {
                    var e = 0;
                    d = null !== a.aaSortingFixed ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice();
                    for (f = 0; f < d.length; f++) {
                        h = a.aoColumns[d[f][0]].aDataSort;
                        for (g = 0; g < h.length; g++) c.push({
                            name: "iSortCol_" + e,
                            value: h[g]
                        }), c.push({
                            name: "sSortDir_" +
                                e,
                            value: d[f][1]
                        }), e++
                    }
                    c.push({
                        name: "iSortingCols",
                        value: e
                    });
                    for (f = 0; f < b; f++) c.push({
                        name: "bSortable_" + f,
                        value: a.aoColumns[f].bSortable
                    })
                }
                return c
            }

            function la(a, b) {
                D(a, "aoServerParams", "serverParams", [b])
            }

            function Ia(a, b) {
                if (void 0 !== b.sEcho) {
                    if (1 * b.sEcho < a.iDraw) return;
                    a.iDraw = 1 * b.sEcho
                }(!a.oScroll.bInfinite || a.oScroll.bInfinite && (a.bSorted || a.bFiltered)) && ha(a);
                a._iRecordsTotal = parseInt(b.iTotalRecords, 10);
                a._iRecordsDisplay = parseInt(b.iTotalDisplayRecords, 10);
                var c = P(a),
                    c = void 0 !== b.sColumns && "" !==
                        c && b.sColumns != c,
                    d;
                c && (d = x(a, b.sColumns));
                for (var h = T(a.sAjaxDataProp)(b), f = 0, g = h.length; f < g; f++)
                    if (c) {
                        for (var e = [], k = 0, l = a.aoColumns.length; k < l; k++) e.push(h[f][d[k]]);
                        K(a, e)
                    } else K(a, h[f]);
                a.aiDisplay = a.aiDisplayMaster.slice();
                a.bAjaxDataGet = !1;
                A(a);
                a.bAjaxDataGet = !0;
                H(a, !1)
            }

            function Ca(a) {
                var b = a.oPreviousSearch,
                    c = a.oLanguage.sSearch,
                    c = -1 !== c.indexOf("_INPUT_") ? c.replace("_INPUT_", '\x3cinput type\x3d"text" /\x3e') : "" === c ? '\x3cinput type\x3d"text" /\x3e' : c + ' \x3cinput type\x3d"text" /\x3e',
                    d = n.createElement("div");
                d.className = a.oClasses.sFilter;
                d.innerHTML = "\x3clabel\x3e" + c + "\x3c/label\x3e";
                a.aanFeatures.f || (d.id = a.sTableId + "_filter");
                c = k('input[type\x3d"text"]', d);
                d._DT_Input = c[0];
                c.val(b.sSearch.replace('"', "\x26quot;"));
                c.bind("keyup.DT", function(c) {
                    c = a.aanFeatures.f;
                    for (var d = "" === this.value ? "" : this.value, g = 0, e = c.length; g < e; g++) c[g] != k(this).parents("div.dataTables_filter")[0] && k(c[g]._DT_Input).val(d);
                    d != b.sSearch && N(a, {
                        sSearch: d,
                        bRegex: b.bRegex,
                        bSmart: b.bSmart,
                        bCaseInsensitive: b.bCaseInsensitive
                    })
                });
                c.attr("aria-controls", a.sTableId).bind("keypress.DT", function(a) {
                    if (13 == a.keyCode) return !1
                });
                return d
            }

            function N(a, b, c) {
                var d = a.oPreviousSearch,
                    h = a.aoPreSearchCols,
                    f = function(a) {
                        d.sSearch = a.sSearch;
                        d.bRegex = a.bRegex;
                        d.bSmart = a.bSmart;
                        d.bCaseInsensitive = a.bCaseInsensitive
                    };
                if (a.oFeatures.bServerSide) f(b);
                else {
                    Ja(a, b.sSearch, c, b.bRegex, b.bSmart, b.bCaseInsensitive);
                    f(b);
                    for (b = 0; b < a.aoPreSearchCols.length; b++) Ka(a, h[b].sSearch, b, h[b].bRegex, h[b].bSmart, h[b].bCaseInsensitive);
                    La(a)
                }
                a.bFiltered = !0;
                k(a.oInstance).trigger("filter",
                    a);
                a._iDisplayStart = 0;
                B(a);
                A(a);
                ma(a, 0)
            }

            function La(a) {
                for (var b = l.ext.afnFiltering, c = v(a, "bSearchable"), d = 0, h = b.length; d < h; d++)
                    for (var f = 0, g = 0, e = a.aiDisplay.length; g < e; g++) {
                        var k = a.aiDisplay[g - f];
                        b[d](a, Z(a, k, "filter", c), k) || (a.aiDisplay.splice(g - f, 1), f++)
                    }
            }

            function Ka(a, b, c, d, h, f) {
                if ("" !== b) {
                    var g = 0;
                    b = na(b, d, h, f);
                    for (d = a.aiDisplay.length - 1; 0 <= d; d--) h = Ma(y(a, a.aiDisplay[d], c, "filter"), a.aoColumns[c].sType), b.test(h) || (a.aiDisplay.splice(d, 1), g++)
                }
            }

            function Ja(a, b, c, d, h, f) {
                d = na(b, d, h, f);
                h = a.oPreviousSearch;
                c || (c = 0);
                0 !== l.ext.afnFiltering.length && (c = 1);
                if (0 >= b.length) a.aiDisplay.splice(0, a.aiDisplay.length), a.aiDisplay = a.aiDisplayMaster.slice();
                else if (a.aiDisplay.length == a.aiDisplayMaster.length || h.sSearch.length > b.length || 1 == c || 0 !== b.indexOf(h.sSearch)) {
                    a.aiDisplay.splice(0, a.aiDisplay.length);
                    ma(a, 1);
                    for (b = 0; b < a.aiDisplayMaster.length; b++) d.test(a.asDataSearch[b]) && a.aiDisplay.push(a.aiDisplayMaster[b])
                } else
                    for (b = c = 0; b < a.asDataSearch.length; b++) d.test(a.asDataSearch[b]) || (a.aiDisplay.splice(b - c,
                        1), c++)
            }

            function ma(a, b) {
                if (!a.oFeatures.bServerSide) {
                    a.asDataSearch = [];
                    for (var c = v(a, "bSearchable"), d = 1 === b ? a.aiDisplayMaster : a.aiDisplay, h = 0, f = d.length; h < f; h++) a.asDataSearch[h] = oa(a, Z(a, d[h], "filter", c))
                }
            }

            function oa(a, b) {
                var c = b.join("  "); - 1 !== c.indexOf("\x26") && (c = k("\x3cdiv\x3e").html(c).text());
                return c.replace(/[\n\r]/g, " ")
            }

            function na(a, b, c, d) {
                if (c) return a = b ? a.split(" ") : pa(a).split(" "), a = "^(?\x3d.*?" + a.join(")(?\x3d.*?") + ").*$", RegExp(a, d ? "i" : "");
                a = b ? a : pa(a);
                return RegExp(a, d ? "i" : "")
            }

            function Ma(a, b) {
                return "function" === typeof l.ext.ofnSearch[b] ? l.ext.ofnSearch[b](a) : null === a ? "" : "html" == b ? a.replace(/[\r\n]/g, " ").replace(/<.*?>/g, "") : "string" === typeof a ? a.replace(/[\r\n]/g, " ") : a
            }

            function pa(a) {
                return a.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), "\\$1")
            }

            function Fa(a) {
                var b = n.createElement("div");
                b.className = a.oClasses.sInfo;
                a.aanFeatures.i || (a.aoDrawCallback.push({
                    fn: Na,
                    sName: "information"
                }), b.id = a.sTableId + "_info");
                a.nTable.setAttribute("aria-describedby",
                    a.sTableId + "_info");
                return b
            }

            function Na(a) {
                if (a.oFeatures.bInfo && 0 !== a.aanFeatures.i.length) {
                    var b = a.oLanguage,
                        c = a._iDisplayStart + 1,
                        d = a.fnDisplayEnd(),
                        h = a.fnRecordsTotal(),
                        f = a.fnRecordsDisplay(),
                        g;
                    g = 0 === f ? b.sInfoEmpty : b.sInfo;
                    f != h && (g += " " + b.sInfoFiltered);
                    g += b.sInfoPostFix;
                    g = ka(a, g);
                    null !== b.fnInfoCallback && (g = b.fnInfoCallback.call(a.oInstance, a, c, d, h, f, g));
                    a = a.aanFeatures.i;
                    b = 0;
                    for (c = a.length; b < c; b++) k(a[b]).html(g)
                }
            }

            function ka(a, b) {
                var c = a.fnFormatNumber(a._iDisplayStart + 1),
                    d = a.fnDisplayEnd(),
                    d = a.fnFormatNumber(d),
                    h = a.fnRecordsDisplay(),
                    h = a.fnFormatNumber(h),
                    f = a.fnRecordsTotal(),
                    f = a.fnFormatNumber(f);
                a.oScroll.bInfinite && (c = a.fnFormatNumber(1));
                return b.replace(/_START_/g, c).replace(/_END_/g, d).replace(/_TOTAL_/g, h).replace(/_MAX_/g, f)
            }

            function ca(a) {
                var b, c, d = a.iInitDisplayStart;
                if (!1 === a.bInitialised) setTimeout(function() {
                    ca(a)
                }, 200);
                else {
                    Aa(a);
                    ya(a);
                    Y(a, a.aoHeader);
                    a.nTFoot && Y(a, a.aoFooter);
                    H(a, !0);
                    a.oFeatures.bAutoWidth && ea(a);
                    b = 0;
                    for (c = a.aoColumns.length; b < c; b++) null !== a.aoColumns[b].sWidth &&
                        (a.aoColumns[b].nTh.style.width = s(a.aoColumns[b].sWidth));
                    a.oFeatures.bSort ? R(a) : a.oFeatures.bFilter ? N(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice(), B(a), A(a));
                    null !== a.sAjaxSource && !a.oFeatures.bServerSide ? (c = [], la(a, c), a.fnServerData.call(a.oInstance, a.sAjaxSource, c, function(c) {
                        var f = "" !== a.sAjaxDataProp ? T(a.sAjaxDataProp)(c) : c;
                        for (b = 0; b < f.length; b++) K(a, f[b]);
                        a.iInitDisplayStart = d;
                        a.oFeatures.bSort ? R(a) : (a.aiDisplay = a.aiDisplayMaster.slice(), B(a), A(a));
                        H(a, !1);
                        aa(a, c)
                    }, a)) : a.oFeatures.bServerSide ||
                        (H(a, !1), aa(a))
                }
            }

            function aa(a, b) {
                a._bInitComplete = !0;
                D(a, "aoInitComplete", "init", [a, b])
            }

            function qa(a) {
                var b = l.defaults.oLanguage;
                !a.sEmptyTable && (a.sZeroRecords && "No data available in table" === b.sEmptyTable) && q(a, a, "sZeroRecords", "sEmptyTable");
                !a.sLoadingRecords && (a.sZeroRecords && "Loading..." === b.sLoadingRecords) && q(a, a, "sZeroRecords", "sLoadingRecords")
            }

            function Ba(a) {
                if (a.oScroll.bInfinite) return null;
                var b = '\x3cselect size\x3d"1" ' + ('name\x3d"' + a.sTableId + '_length"') + "\x3e",
                    c, d, h = a.aLengthMenu;
                if (2 == h.length && "object" === typeof h[0] && "object" === typeof h[1]) {
                    c = 0;
                    for (d = h[0].length; c < d; c++) b += '\x3coption value\x3d"' + h[0][c] + '"\x3e' + h[1][c] + "\x3c/option\x3e"
                } else {
                    c = 0;
                    for (d = h.length; c < d; c++) b += '\x3coption value\x3d"' + h[c] + '"\x3e' + h[c] + "\x3c/option\x3e"
                }
                b += "\x3c/select\x3e";
                h = n.createElement("div");
                a.aanFeatures.l || (h.id = a.sTableId + "_length");
                h.className = a.oClasses.sLength;
                h.innerHTML = "\x3clabel\x3e" + a.oLanguage.sLengthMenu.replace("_MENU_", b) + "\x3c/label\x3e";
                k('select option[value\x3d"' + a._iDisplayLength +
                    '"]', h).attr("selected", !0);
                k("select", h).bind("change.DT", function(b) {
                    b = k(this).val();
                    var h = a.aanFeatures.l;
                    c = 0;
                    for (d = h.length; c < d; c++) h[c] != this.parentNode && k("select", h[c]).val(b);
                    a._iDisplayLength = parseInt(b, 10);
                    B(a);
                    a.fnDisplayEnd() == a.fnRecordsDisplay() && (a._iDisplayStart = a.fnDisplayEnd() - a._iDisplayLength, 0 > a._iDisplayStart && (a._iDisplayStart = 0)); - 1 == a._iDisplayLength && (a._iDisplayStart = 0);
                    A(a)
                });
                k("select", h).attr("aria-controls", a.sTableId);
                return h
            }

            function B(a) {
                a._iDisplayEnd = !1 === a.oFeatures.bPaginate ?
                    a.aiDisplay.length : a._iDisplayStart + a._iDisplayLength > a.aiDisplay.length || -1 == a._iDisplayLength ? a.aiDisplay.length : a._iDisplayStart + a._iDisplayLength
            }

            function Ga(a) {
                if (a.oScroll.bInfinite) return null;
                var b = n.createElement("div");
                b.className = a.oClasses.sPaging + a.sPaginationType;
                l.ext.oPagination[a.sPaginationType].fnInit(a, b, function(a) {
                    B(a);
                    A(a)
                });
                a.aanFeatures.p || a.aoDrawCallback.push({
                    fn: function(a) {
                        l.ext.oPagination[a.sPaginationType].fnUpdate(a, function(a) {
                            B(a);
                            A(a)
                        })
                    },
                    sName: "pagination"
                });
                return b
            }

            function ra(a, b) {
                var c = a._iDisplayStart;
                if ("number" === typeof b) a._iDisplayStart = b * a._iDisplayLength, a._iDisplayStart > a.fnRecordsDisplay() && (a._iDisplayStart = 0);
                else if ("first" == b) a._iDisplayStart = 0;
                else if ("previous" == b) a._iDisplayStart = 0 <= a._iDisplayLength ? a._iDisplayStart - a._iDisplayLength : 0, 0 > a._iDisplayStart && (a._iDisplayStart = 0);
                else if ("next" == b) 0 <= a._iDisplayLength ? a._iDisplayStart + a._iDisplayLength < a.fnRecordsDisplay() && (a._iDisplayStart += a._iDisplayLength) : a._iDisplayStart = 0;
                else if ("last" ==
                    b)
                    if (0 <= a._iDisplayLength) {
                        var d = parseInt((a.fnRecordsDisplay() - 1) / a._iDisplayLength, 10) + 1;
                        a._iDisplayStart = (d - 1) * a._iDisplayLength
                    } else a._iDisplayStart = 0;
                    else G(a, 0, "Unknown paging action: " + b);
                k(a.oInstance).trigger("page", a);
                return c != a._iDisplayStart
            }

            function Da(a) {
                var b = n.createElement("div");
                a.aanFeatures.r || (b.id = a.sTableId + "_processing");
                b.innerHTML = a.oLanguage.sProcessing;
                b.className = a.oClasses.sProcessing;
                a.nTable.parentNode.insertBefore(b, a.nTable);
                return b
            }

            function H(a, b) {
                if (a.oFeatures.bProcessing)
                    for (var c =
                        a.aanFeatures.r, d = 0, h = c.length; d < h; d++) c[d].style.visibility = b ? "visible" : "hidden";
                k(a.oInstance).trigger("processing", [a, b])
            }

            function Ea(a) {
                if ("" === a.oScroll.sX && "" === a.oScroll.sY) return a.nTable;
                var b = n.createElement("div"),
                    c = n.createElement("div"),
                    d = n.createElement("div"),
                    h = n.createElement("div"),
                    f = n.createElement("div"),
                    g = n.createElement("div"),
                    e = a.nTable.cloneNode(!1),
                    l = a.nTable.cloneNode(!1),
                    r = a.nTable.getElementsByTagName("thead")[0],
                    m = 0 === a.nTable.getElementsByTagName("tfoot").length ? null :
                        a.nTable.getElementsByTagName("tfoot")[0],
                    p = a.oClasses;
                c.appendChild(d);
                f.appendChild(g);
                h.appendChild(a.nTable);
                b.appendChild(c);
                b.appendChild(h);
                d.appendChild(e);
                e.appendChild(r);
                null !== m && (b.appendChild(f), g.appendChild(l), l.appendChild(m));
                b.className = p.sScrollWrapper;
                c.className = p.sScrollHead;
                d.className = p.sScrollHeadInner;
                h.className = p.sScrollBody;
                f.className = p.sScrollFoot;
                g.className = p.sScrollFootInner;
                a.oScroll.bAutoCss && (c.style.overflow = "hidden", c.style.position = "relative", f.style.overflow =
                    "hidden", h.style.overflow = "auto");
                c.style.border = "0";
                c.style.width = "100%";
                f.style.border = "0";
                d.style.width = "" !== a.oScroll.sXInner ? a.oScroll.sXInner : "100%";
                e.removeAttribute("id");
                e.style.marginLeft = "0";
                a.nTable.style.marginLeft = "0";
                null !== m && (l.removeAttribute("id"), l.style.marginLeft = "0");
                d = k(a.nTable).children("caption");
                0 < d.length && (d = d[0], "top" === d._captionSide ? e.appendChild(d) : "bottom" === d._captionSide && m && l.appendChild(d));
                "" !== a.oScroll.sX && (c.style.width = s(a.oScroll.sX), h.style.width = s(a.oScroll.sX),
                    null !== m && (f.style.width = s(a.oScroll.sX)), k(h).scroll(function(a) {
                        c.scrollLeft = this.scrollLeft;
                        null !== m && (f.scrollLeft = this.scrollLeft)
                    }));
                "" !== a.oScroll.sY && (h.style.height = s(a.oScroll.sY));
                a.aoDrawCallback.push({
                    fn: Oa,
                    sName: "scrolling"
                });
                a.oScroll.bInfinite && k(h).scroll(function() {
                    !a.bDrawing && 0 !== k(this).scrollTop() && (k(this).scrollTop() + k(this).height() > k(a.nTable).height() - a.oScroll.iLoadGap && a.fnDisplayEnd() < a.fnRecordsDisplay()) && (ra(a, "next"), B(a), A(a))
                });
                a.nScrollHead = c;
                a.nScrollFoot = f;
                return b
            }

            function Oa(a) {
                var b = a.nScrollHead.getElementsByTagName("div")[0],
                    c = b.getElementsByTagName("table")[0],
                    d = a.nTable.parentNode,
                    h, f, g, e, l, r, m, p, q = [],
                    n = [],
                    t = null !== a.nTFoot ? a.nScrollFoot.getElementsByTagName("div")[0] : null,
                    v = null !== a.nTFoot ? t.getElementsByTagName("table")[0] : null,
                    u = a.oBrowser.bScrollOversize,
                    w = function(a) {
                        m = a.style;
                        m.paddingTop = "0";
                        m.paddingBottom = "0";
                        m.borderTopWidth = "0";
                        m.borderBottomWidth = "0";
                        m.height = 0
                    };
                k(a.nTable).children("thead, tfoot").remove();
                h = k(a.nTHead).clone()[0];
                a.nTable.insertBefore(h,
                    a.nTable.childNodes[0]);
                g = a.nTHead.getElementsByTagName("tr");
                e = h.getElementsByTagName("tr");
                null !== a.nTFoot && (l = k(a.nTFoot).clone()[0], a.nTable.insertBefore(l, a.nTable.childNodes[1]), r = a.nTFoot.getElementsByTagName("tr"), l = l.getElementsByTagName("tr"));
                "" === a.oScroll.sX && (d.style.width = "100%", b.parentNode.style.width = "100%");
                var x = Q(a, h);
                h = 0;
                for (f = x.length; h < f; h++) p = J(a, h), x[h].style.width = a.aoColumns[p].sWidth;
                null !== a.nTFoot && F(function(a) {
                    a.style.width = ""
                }, l);
                a.oScroll.bCollapse && "" !== a.oScroll.sY &&
                    (d.style.height = d.offsetHeight + a.nTHead.offsetHeight + "px");
                h = k(a.nTable).outerWidth();
                if ("" === a.oScroll.sX) {
                    if (a.nTable.style.width = "100%", u && (k("tbody", d).height() > d.offsetHeight || "scroll" == k(d).css("overflow-y"))) a.nTable.style.width = s(k(a.nTable).outerWidth() - a.oScroll.iBarWidth)
                } else "" !== a.oScroll.sXInner ? a.nTable.style.width = s(a.oScroll.sXInner) : h == k(d).width() && k(d).height() < k(a.nTable).height() ? (a.nTable.style.width = s(h - a.oScroll.iBarWidth), k(a.nTable).outerWidth() > h - a.oScroll.iBarWidth && (a.nTable.style.width =
                    s(h))) : a.nTable.style.width = s(h);
                h = k(a.nTable).outerWidth();
                F(w, e);
                F(function(a) {
                    q.push(s(k(a).width()))
                }, e);
                F(function(a, b) {
                    a.style.width = q[b]
                }, g);
                k(e).height(0);
                null !== a.nTFoot && (F(w, l), F(function(a) {
                    n.push(s(k(a).width()))
                }, l), F(function(a, b) {
                    a.style.width = n[b]
                }, r), k(l).height(0));
                F(function(a, b) {
                    a.innerHTML = "";
                    a.style.width = q[b]
                }, e);
                null !== a.nTFoot && F(function(a, b) {
                    a.innerHTML = "";
                    a.style.width = n[b]
                }, l);
                if (k(a.nTable).outerWidth() < h) {
                    g = d.scrollHeight > d.offsetHeight || "scroll" == k(d).css("overflow-y") ?
                        h + a.oScroll.iBarWidth : h;
                    if (u && (d.scrollHeight > d.offsetHeight || "scroll" == k(d).css("overflow-y"))) a.nTable.style.width = s(g - a.oScroll.iBarWidth);
                    d.style.width = s(g);
                    a.nScrollHead.style.width = s(g);
                    null !== a.nTFoot && (a.nScrollFoot.style.width = s(g));
                    "" === a.oScroll.sX ? G(a, 1, "The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width.") : "" !== a.oScroll.sXInner && G(a, 1, "The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation")
                } else d.style.width =
                    s("100%"), a.nScrollHead.style.width = s("100%"), null !== a.nTFoot && (a.nScrollFoot.style.width = s("100%"));
                "" === a.oScroll.sY && u && (d.style.height = s(a.nTable.offsetHeight + a.oScroll.iBarWidth));
                "" !== a.oScroll.sY && a.oScroll.bCollapse && (d.style.height = s(a.oScroll.sY), u = "" !== a.oScroll.sX && a.nTable.offsetWidth > d.offsetWidth ? a.oScroll.iBarWidth : 0, a.nTable.offsetHeight < d.offsetHeight && (d.style.height = s(a.nTable.offsetHeight + u)));
                u = k(a.nTable).outerWidth();
                c.style.width = s(u);
                b.style.width = s(u);
                c = k(a.nTable).height() >
                    d.clientHeight || "scroll" == k(d).css("overflow-y");
                b.style.paddingRight = c ? a.oScroll.iBarWidth + "px" : "0px";
                null !== a.nTFoot && (v.style.width = s(u), t.style.width = s(u), t.style.paddingRight = c ? a.oScroll.iBarWidth + "px" : "0px");
                k(d).scroll();
                if (a.bSorted || a.bFiltered) d.scrollTop = 0
            }

            function F(a, b, c) {
                for (var d = 0, h = 0, f = b.length, g, e; h < f;) {
                    g = b[h].firstChild;
                    for (e = c ? c[h].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, e, d) : a(g, d), d++), g = g.nextSibling, e = c ? e.nextSibling : null;
                    h++
                }
            }

            function Pa(a, b) {
                if (!a || null === a || "" === a) return 0;
                b || (b = n.body);
                var c, d = n.createElement("div");
                d.style.width = s(a);
                b.appendChild(d);
                c = d.offsetWidth;
                b.removeChild(d);
                return c
            }

            function ea(a) {
                var b = 0,
                    c, d = 0,
                    h = a.aoColumns.length,
                    f, e, l = k("th", a.nTHead),
                    m = a.nTable.getAttribute("width");
                e = a.nTable.parentNode;
                for (f = 0; f < h; f++) a.aoColumns[f].bVisible && (d++, null !== a.aoColumns[f].sWidth && (c = Pa(a.aoColumns[f].sWidthOrig, e), null !== c && (a.aoColumns[f].sWidth = s(c)), b++));
                if (h == l.length && 0 === b && d == h && "" === a.oScroll.sX && "" === a.oScroll.sY)
                    for (f = 0; f < a.aoColumns.length; f++) c =
                        k(l[f]).width(), null !== c && (a.aoColumns[f].sWidth = s(c));
                else {
                    b = a.nTable.cloneNode(!1);
                    f = a.nTHead.cloneNode(!0);
                    d = n.createElement("tbody");
                    c = n.createElement("tr");
                    b.removeAttribute("id");
                    b.appendChild(f);
                    null !== a.nTFoot && (b.appendChild(a.nTFoot.cloneNode(!0)), F(function(a) {
                        a.style.width = ""
                    }, b.getElementsByTagName("tr")));
                    b.appendChild(d);
                    d.appendChild(c);
                    d = k("thead th", b);
                    0 === d.length && (d = k("tbody tr:eq(0)\x3etd", b));
                    l = Q(a, f);
                    for (f = d = 0; f < h; f++) {
                        var r = a.aoColumns[f];
                        r.bVisible && null !== r.sWidthOrig &&
                            "" !== r.sWidthOrig ? l[f - d].style.width = s(r.sWidthOrig) : r.bVisible ? l[f - d].style.width = "" : d++
                    }
                    for (f = 0; f < h; f++) a.aoColumns[f].bVisible && (d = Qa(a, f), null !== d && (d = d.cloneNode(!0), "" !== a.aoColumns[f].sContentPadding && (d.innerHTML += a.aoColumns[f].sContentPadding), c.appendChild(d)));
                    e.appendChild(b);
                    "" !== a.oScroll.sX && "" !== a.oScroll.sXInner ? b.style.width = s(a.oScroll.sXInner) : "" !== a.oScroll.sX ? (b.style.width = "", k(b).width() < e.offsetWidth && (b.style.width = s(e.offsetWidth))) : "" !== a.oScroll.sY ? b.style.width = s(e.offsetWidth) :
                        m && (b.style.width = s(m));
                    b.style.visibility = "hidden";
                    Ra(a, b);
                    h = k("tbody tr:eq(0)", b).children();
                    0 === h.length && (h = Q(a, k("thead", b)[0]));
                    if ("" !== a.oScroll.sX) {
                        for (f = d = e = 0; f < a.aoColumns.length; f++) a.aoColumns[f].bVisible && (e = null === a.aoColumns[f].sWidthOrig ? e + k(h[d]).outerWidth() : e + (parseInt(a.aoColumns[f].sWidth.replace("px", ""), 10) + (k(h[d]).outerWidth() - k(h[d]).width())), d++);
                        b.style.width = s(e);
                        a.nTable.style.width = s(e)
                    }
                    for (f = d = 0; f < a.aoColumns.length; f++) a.aoColumns[f].bVisible && (e = k(h[d]).width(),
                        null !== e && 0 < e && (a.aoColumns[f].sWidth = s(e)), d++);
                    h = k(b).css("width");
                    a.nTable.style.width = -1 !== h.indexOf("%") ? h : s(k(b).outerWidth());
                    b.parentNode.removeChild(b)
                }
                m && (a.nTable.style.width = s(m))
            }

            function Ra(a, b) {
                "" === a.oScroll.sX && "" !== a.oScroll.sY ? (k(b).width(), b.style.width = s(k(b).outerWidth() - a.oScroll.iBarWidth)) : "" !== a.oScroll.sX && (b.style.width = s(k(b).outerWidth()))
            }

            function Qa(a, b) {
                var c = Sa(a, b);
                if (0 > c) return null;
                if (null === a.aoData[c].nTr) {
                    var d = n.createElement("td");
                    d.innerHTML = y(a, c, b, "");
                    return d
                }
                return M(a, c)[b]
            }

            function Sa(a, b) {
                for (var c = -1, d = -1, h = 0; h < a.aoData.length; h++) {
                    var e = y(a, h, b, "display") + "",
                        e = e.replace(/<.*?>/g, "");
                    e.length > c && (c = e.length, d = h)
                }
                return d
            }

            function s(a) {
                if (null === a) return "0px";
                if ("number" == typeof a) return 0 > a ? "0px" : a + "px";
                var b = a.charCodeAt(a.length - 1);
                return 48 > b || 57 < b ? a : a + "px"
            }

            function Ta() {
                var a = n.createElement("p"),
                    b = a.style;
                b.width = "100%";
                b.height = "200px";
                b.padding = "0px";
                var c = n.createElement("div"),
                    b = c.style;
                b.position = "absolute";
                b.top = "0px";
                b.left = "0px";
                b.visibility = "hidden";
                b.width = "200px";
                b.height = "150px";
                b.padding = "0px";
                b.overflow = "hidden";
                c.appendChild(a);
                n.body.appendChild(c);
                b = a.offsetWidth;
                c.style.overflow = "scroll";
                a = a.offsetWidth;
                b == a && (a = c.clientWidth);
                n.body.removeChild(c);
                return b - a
            }

            function R(a, b) {
                var c, d, h, e, g, r, m = [],
                    p = [],
                    q = l.ext.oSort,
                    n = a.aoData,
                    s = a.aoColumns,
                    J = a.oLanguage.oAria;
                if (!a.oFeatures.bServerSide && (0 !== a.aaSorting.length || null !== a.aaSortingFixed)) {
                    m = null !== a.aaSortingFixed ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice();
                    for (c = 0; c < m.length; c++)
                        if (d = m[c][0], h = t(a, d), e = a.aoColumns[d].sSortDataType, l.ext.afnSortData[e])
                            if (g = l.ext.afnSortData[e].call(a.oInstance, a, d, h), g.length === n.length) {
                                h = 0;
                                for (e = n.length; h < e; h++) I(a, h, d, g[h])
                            } else G(a, 0, "Returned data sort array (col " + d + ") is the wrong length");
                    c = 0;
                    for (d = a.aiDisplayMaster.length; c < d; c++) p[a.aiDisplayMaster[c]] = c;
                    var u = m.length,
                        v;
                    c = 0;
                    for (d = n.length; c < d; c++)
                        for (h = 0; h < u; h++) {
                            v = s[m[h][0]].aDataSort;
                            g = 0;
                            for (r = v.length; g < r; g++) e = s[v[g]].sType, e = q[(e ? e : "string") + "-pre"],
                            n[c]._aSortData[v[g]] = e ? e(y(a, c, v[g], "sort")) : y(a, c, v[g], "sort")
                        }
                    a.aiDisplayMaster.sort(function(a, b) {
                        var c, d, e, h, f;
                        for (c = 0; c < u; c++) {
                            f = s[m[c][0]].aDataSort;
                            d = 0;
                            for (e = f.length; d < e; d++)
                                if (h = s[f[d]].sType, h = q[(h ? h : "string") + "-" + m[c][1]](n[a]._aSortData[f[d]], n[b]._aSortData[f[d]]), 0 !== h) return h
                        }
                        return q["numeric-asc"](p[a], p[b])
                    })
                }(void 0 === b || b) && !a.oFeatures.bDeferRender && S(a);
                c = 0;
                for (d = a.aoColumns.length; c < d; c++) e = s[c].sTitle.replace(/<.*?>/g, ""), h = s[c].nTh, h.removeAttribute("aria-sort"), h.removeAttribute("aria-label"),
                s[c].bSortable ? 0 < m.length && m[0][0] == c ? (h.setAttribute("aria-sort", "asc" == m[0][1] ? "ascending" : "descending"), h.setAttribute("aria-label", e + ("asc" == (s[c].asSorting[m[0][2] + 1] ? s[c].asSorting[m[0][2] + 1] : s[c].asSorting[0]) ? J.sSortAscending : J.sSortDescending))) : h.setAttribute("aria-label", e + ("asc" == s[c].asSorting[0] ? J.sSortAscending : J.sSortDescending)) : h.setAttribute("aria-label", e);
                a.bSorted = !0;
                k(a.oInstance).trigger("sort", a);
                a.oFeatures.bFilter ? N(a, a.oPreviousSearch, 1) : (a.aiDisplay = a.aiDisplayMaster.slice(),
                    a._iDisplayStart = 0, B(a), A(a))
            }

            function ja(a, b, c, d) {
                Ua(b, {}, function(b) {
                    if (!1 !== a.aoColumns[c].bSortable) {
                        var e = function() {
                            var d, e;
                            if (b.shiftKey) {
                                for (var f = !1, k = 0; k < a.aaSorting.length; k++)
                                    if (a.aaSorting[k][0] == c) {
                                        f = !0;
                                        d = a.aaSorting[k][0];
                                        e = a.aaSorting[k][2] + 1;
                                        a.aoColumns[d].asSorting[e] ? (a.aaSorting[k][1] = a.aoColumns[d].asSorting[e], a.aaSorting[k][2] = e) : a.aaSorting.splice(k, 1);
                                        break
                                    }!1 === f && a.aaSorting.push([c, a.aoColumns[c].asSorting[0], 0])
                            } else 1 == a.aaSorting.length && a.aaSorting[0][0] == c ? (d = a.aaSorting[0][0],
                                e = a.aaSorting[0][2] + 1, a.aoColumns[d].asSorting[e] || (e = 0), a.aaSorting[0][1] = a.aoColumns[d].asSorting[e], a.aaSorting[0][2] = e) : (a.aaSorting.splice(0, a.aaSorting.length), a.aaSorting.push([c, a.aoColumns[c].asSorting[0], 0]));
                            R(a)
                        };
                        a.oFeatures.bProcessing ? (H(a, !0), setTimeout(function() {
                            e();
                            a.oFeatures.bServerSide || H(a, !1)
                        }, 0)) : e();
                        "function" == typeof d && d(a)
                    }
                })
            }

            function S(a) {
                var b, c, d, e, f, g = a.aoColumns.length,
                    l = a.oClasses;
                for (b = 0; b < g; b++) a.aoColumns[b].bSortable && k(a.aoColumns[b].nTh).removeClass(l.sSortAsc +
                    " " + l.sSortDesc + " " + a.aoColumns[b].sSortingClass);
                c = null !== a.aaSortingFixed ? a.aaSortingFixed.concat(a.aaSorting) : a.aaSorting.slice();
                for (b = 0; b < a.aoColumns.length; b++)
                    if (a.aoColumns[b].bSortable) {
                        f = a.aoColumns[b].sSortingClass;
                        e = -1;
                        for (d = 0; d < c.length; d++)
                            if (c[d][0] == b) {
                                f = "asc" == c[d][1] ? l.sSortAsc : l.sSortDesc;
                                e = d;
                                break
                            }
                        k(a.aoColumns[b].nTh).addClass(f);
                        a.bJUI && (f = k("span." + l.sSortIcon, a.aoColumns[b].nTh), f.removeClass(l.sSortJUIAsc + " " + l.sSortJUIDesc + " " + l.sSortJUI + " " + l.sSortJUIAscAllowed + " " + l.sSortJUIDescAllowed),
                            f.addClass(-1 == e ? a.aoColumns[b].sSortingClassJUI : "asc" == c[e][1] ? l.sSortJUIAsc : l.sSortJUIDesc))
                    } else k(a.aoColumns[b].nTh).addClass(a.aoColumns[b].sSortingClass);
                f = l.sSortColumn;
                if (a.oFeatures.bSort && a.oFeatures.bSortClasses) {
                    a = M(a);
                    e = [];
                    for (b = 0; b < g; b++) e.push("");
                    b = 0;
                    for (d = 1; b < c.length; b++) l = parseInt(c[b][0], 10), e[l] = f + d, 3 > d && d++;
                    f = RegExp(f + "[123]");
                    var m;
                    b = 0;
                    for (c = a.length; b < c; b++) l = b % g, d = a[b].className, m = e[l], l = d.replace(f, m), l != d ? a[b].className = k.trim(l) : 0 < m.length && -1 == d.indexOf(m) && (a[b].className =
                        d + " " + m)
                }
            }

            function sa(a) {
                if (a.oFeatures.bStateSave && !a.bDestroying) {
                    var b, c;
                    b = a.oScroll.bInfinite;
                    var d = {
                        iCreate: (new Date).getTime(),
                        iStart: b ? 0 : a._iDisplayStart,
                        iEnd: b ? a._iDisplayLength : a._iDisplayEnd,
                        iLength: a._iDisplayLength,
                        aaSorting: k.extend(!0, [], a.aaSorting),
                        oSearch: k.extend(!0, {}, a.oPreviousSearch),
                        aoSearchCols: k.extend(!0, [], a.aoPreSearchCols),
                        abVisCols: []
                    };
                    b = 0;
                    for (c = a.aoColumns.length; b < c; b++) d.abVisCols.push(a.aoColumns[b].bVisible);
                    D(a, "aoStateSaveParams", "stateSaveParams", [a, d]);
                    a.fnStateSave.call(a.oInstance,
                        a, d)
                }
            }

            function Va(a, b) {
                if (a.oFeatures.bStateSave) {
                    var c = a.fnStateLoad.call(a.oInstance, a);
                    if (c) {
                        var d = D(a, "aoStateLoadParams", "stateLoadParams", [a, c]);
                        if (-1 === k.inArray(!1, d)) {
                            a.oLoadedState = k.extend(!0, {}, c);
                            a._iDisplayStart = c.iStart;
                            a.iInitDisplayStart = c.iStart;
                            a._iDisplayEnd = c.iEnd;
                            a._iDisplayLength = c.iLength;
                            a.aaSorting = c.aaSorting.slice();
                            a.saved_aaSorting = c.aaSorting.slice();
                            k.extend(a.oPreviousSearch, c.oSearch);
                            k.extend(!0, a.aoPreSearchCols, c.aoSearchCols);
                            b.saved_aoColumns = [];
                            for (d = 0; d < c.abVisCols.length; d++) b.saved_aoColumns[d] = {}, b.saved_aoColumns[d].bVisible = c.abVisCols[d];
                            D(a, "aoStateLoaded", "stateLoaded", [a, c])
                        }
                    }
                }
            }

            function w(a) {
                for (var b = 0; b < l.settings.length; b++)
                    if (l.settings[b].nTable === a) return l.settings[b];
                return null
            }

            function V(a) {
                var b = [];
                a = a.aoData;
                for (var c = 0, d = a.length; c < d; c++) null !== a[c].nTr && b.push(a[c].nTr);
                return b
            }

            function M(a, b) {
                var c = [],
                    d, e, f, g, k, l;
                e = 0;
                var m = a.aoData.length;
                void 0 !== b && (e = b, m = b + 1);
                for (f = e; f < m; f++)
                    if (l = a.aoData[f], null !== l.nTr) {
                        e = [];
                        for (d = l.nTr.firstChild; d;) g = d.nodeName.toLowerCase(), ("td" == g || "th" == g) && e.push(d), d = d.nextSibling;
                        g = d = 0;
                        for (k = a.aoColumns.length; g < k; g++) a.aoColumns[g].bVisible ? c.push(e[g - d]) : (c.push(l._anHidden[g]), d++)
                    }
                return c
            }

            function G(a, b, c) {
                a = null === a ? "DataTables warning: " + c : "DataTables warning (table id \x3d '" + a.sTableId + "'): " + c;
                if (0 === b)
                    if ("alert" == l.ext.sErrMode) alert(a);
                    else throw Error(a);
                    else O.console && console.log && console.log(a)
            }

            function q(a, b, c, d) {
                void 0 === d && (d = c);
                void 0 !== b[c] && (a[d] = b[c])
            }

            function Wa(a, b) {
                var c, d;
                for (d in b) b.hasOwnProperty(d) &&
                    (c = b[d], "object" === typeof e[d] && null !== c && !1 === k.isArray(c) ? k.extend(!0, a[d], c) : a[d] = c);
                return a
            }

            function Ua(a, b, c) {
                k(a).bind("click.DT", b, function(b) {
                    a.blur();
                    c(b)
                }).bind("keypress.DT", b, function(a) {
                    13 === a.which && c(a)
                }).bind("selectstart.DT", function() {
                    return !1
                })
            }

            function C(a, b, c, d) {
                c && a[b].push({
                    fn: c,
                    sName: d
                })
            }

            function D(a, b, c, d) {
                b = a[b];
                for (var e = [], f = b.length - 1; 0 <= f; f--) e.push(b[f].fn.apply(a.oInstance, d));
                null !== c && k(a.oInstance).trigger(c, d);
                return e
            }

            function Xa(a) {
                var b = k('\x3cdiv style\x3d"position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden"\x3e\x3cdiv style\x3d"position:absolute; top:1px; left:1px; width:100px; overflow:scroll;"\x3e\x3cdiv id\x3d"DT_BrowserTest" style\x3d"width:100%; height:10px;"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e')[0];
                n.body.appendChild(b);
                a.oBrowser.bScrollOversize = 100 === k("#DT_BrowserTest", b)[0].offsetWidth ? !0 : !1;
                n.body.removeChild(b)
            }

            function Ya(a) {
                return function() {
                    var b = [w(this[l.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                    return l.ext.oApi[a].apply(this, b)
                }
            }
            var W = /\[.*?\]$/,
                Za = O.JSON ? JSON.stringify : function(a) {
                    var b = typeof a;
                    if ("object" !== b || null === a) return "string" === b && (a = '"' + a + '"'), a + "";
                    var c, d, e = [],
                        f = k.isArray(a);
                    for (c in a) d = a[c], b = typeof d, "string" === b ? d = '"' + d + '"' : "object" === b && null !==
                        d && (d = Za(d)), e.push((f ? "" : '"' + c + '":') + d);
                    return (f ? "[" : "{") + e + (f ? "]" : "}")
                };
            this.$ = function(a, b) {
                var c, d, e = [],
                    f;
                d = w(this[l.ext.iApiIndex]);
                var g = d.aoData,
                    m = d.aiDisplay,
                    r = d.aiDisplayMaster;
                b || (b = {});
                b = k.extend({}, {
                    filter: "none",
                    order: "current",
                    page: "all"
                }, b);
                if ("current" == b.page) {
                    c = d._iDisplayStart;
                    for (d = d.fnDisplayEnd(); c < d; c++)(f = g[m[c]].nTr) && e.push(f)
                } else if ("current" == b.order && "none" == b.filter) {
                    c = 0;
                    for (d = r.length; c < d; c++)(f = g[r[c]].nTr) && e.push(f)
                } else if ("current" == b.order && "applied" == b.filter) {
                    c =
                        0;
                    for (d = m.length; c < d; c++)(f = g[m[c]].nTr) && e.push(f)
                } else if ("original" == b.order && "none" == b.filter) {
                    c = 0;
                    for (d = g.length; c < d; c++)(f = g[c].nTr) && e.push(f)
                } else if ("original" == b.order && "applied" == b.filter) {
                    c = 0;
                    for (d = g.length; c < d; c++) f = g[c].nTr, -1 !== k.inArray(c, m) && f && e.push(f)
                } else G(d, 1, "Unknown selection options");
                e = k(e);
                c = e.filter(a);
                e = e.find(a);
                return k([].concat(k.makeArray(c), k.makeArray(e)))
            };
            this._ = function(a, b) {
                var c = [],
                    d, e, f = this.$(a, b);
                d = 0;
                for (e = f.length; d < e; d++) c.push(this.fnGetData(f[d]));
                return c
            };
            this.fnAddData = function(a, b) {
                if (0 === a.length) return [];
                var c = [],
                    d, e = w(this[l.ext.iApiIndex]);
                if ("object" === typeof a[0] && null !== a[0])
                    for (var f = 0; f < a.length; f++) {
                        d = K(e, a[f]);
                        if (-1 == d) return c;
                        c.push(d)
                    } else {
                        d = K(e, a);
                        if (-1 == d) return c;
                        c.push(d)
                    }
                e.aiDisplay = e.aiDisplayMaster.slice();
                (void 0 === b || b) && ba(e);
                return c
            };
            this.fnAdjustColumnSizing = function(a) {
                var b = w(this[l.ext.iApiIndex]);
                m(b);
                void 0 === a || a ? this.fnDraw(!1) : ("" !== b.oScroll.sX || "" !== b.oScroll.sY) && this.oApi._fnScrollDraw(b)
            };
            this.fnClearTable =
                function(a) {
                    var b = w(this[l.ext.iApiIndex]);
                    ha(b);
                    (void 0 === a || a) && A(b)
            };
            this.fnClose = function(a) {
                for (var b = w(this[l.ext.iApiIndex]), c = 0; c < b.aoOpenRows.length; c++)
                    if (b.aoOpenRows[c].nParent == a) return (a = b.aoOpenRows[c].nTr.parentNode) && a.removeChild(b.aoOpenRows[c].nTr), b.aoOpenRows.splice(c, 1), 0;
                return 1
            };
            this.fnDeleteRow = function(a, b, c) {
                var d = w(this[l.ext.iApiIndex]),
                    e, f;
                a = "object" === typeof a ? L(d, a) : a;
                var g = d.aoData.splice(a, 1);
                e = 0;
                for (f = d.aoData.length; e < f; e++) null !== d.aoData[e].nTr && (d.aoData[e].nTr._DT_RowIndex =
                    e);
                e = k.inArray(a, d.aiDisplay);
                d.asDataSearch.splice(e, 1);
                ia(d.aiDisplayMaster, a);
                ia(d.aiDisplay, a);
                "function" === typeof b && b.call(this, d, g);
                d._iDisplayStart >= d.fnRecordsDisplay() && (d._iDisplayStart -= d._iDisplayLength, 0 > d._iDisplayStart && (d._iDisplayStart = 0));
                if (void 0 === c || c) B(d), A(d);
                return g
            };
            this.fnDestroy = function(a) {
                var b = w(this[l.ext.iApiIndex]),
                    c = b.nTableWrapper.parentNode,
                    d = b.nTBody,
                    h, f;
                a = void 0 === a ? !1 : a;
                b.bDestroying = !0;
                D(b, "aoDestroyCallback", "destroy", [b]);
                if (!a) {
                    h = 0;
                    for (f = b.aoColumns.length; h <
                        f; h++)!1 === b.aoColumns[h].bVisible && this.fnSetColumnVis(h, !0)
                }
                k(b.nTableWrapper).find("*").andSelf().unbind(".DT");
                k("tbody\x3etr\x3etd." + b.oClasses.sRowEmpty, b.nTable).parent().remove();
                b.nTable != b.nTHead.parentNode && (k(b.nTable).children("thead").remove(), b.nTable.appendChild(b.nTHead));
                b.nTFoot && b.nTable != b.nTFoot.parentNode && (k(b.nTable).children("tfoot").remove(), b.nTable.appendChild(b.nTFoot));
                b.nTable.parentNode.removeChild(b.nTable);
                k(b.nTableWrapper).remove();
                b.aaSorting = [];
                b.aaSortingFixed = [];
                S(b);
                k(V(b)).removeClass(b.asStripeClasses.join(" "));
                k("th, td", b.nTHead).removeClass([b.oClasses.sSortable, b.oClasses.sSortableAsc, b.oClasses.sSortableDesc, b.oClasses.sSortableNone].join(" "));
                b.bJUI && (k("th span." + b.oClasses.sSortIcon + ", td span." + b.oClasses.sSortIcon, b.nTHead).remove(), k("th, td", b.nTHead).each(function() {
                    var a = k("div." + b.oClasses.sSortJUIWrapper, this),
                        c = a.contents();
                    k(this).append(c);
                    a.remove()
                }));
                !a && b.nTableReinsertBefore ? c.insertBefore(b.nTable, b.nTableReinsertBefore) :
                    a || c.appendChild(b.nTable);
                h = 0;
                for (f = b.aoData.length; h < f; h++) null !== b.aoData[h].nTr && d.appendChild(b.aoData[h].nTr);
                !0 === b.oFeatures.bAutoWidth && (b.nTable.style.width = s(b.sDestroyWidth));
                if (f = b.asDestroyStripes.length) {
                    a = k(d).children("tr");
                    for (h = 0; h < f; h++) a.filter(":nth-child(" + f + "n + " + h + ")").addClass(b.asDestroyStripes[h])
                }
                h = 0;
                for (f = l.settings.length; h < f; h++) l.settings[h] == b && l.settings.splice(h, 1);
                e = b = null
            };
            this.fnDraw = function(a) {
                var b = w(this[l.ext.iApiIndex]);
                !1 === a ? (B(b), A(b)) : ba(b)
            };
            this.fnFilter =
                function(a, b, c, d, e, f) {
                    var g = w(this[l.ext.iApiIndex]);
                    if (g.oFeatures.bFilter) {
                        if (void 0 === c || null === c) c = !1;
                        if (void 0 === d || null === d) d = !0;
                        if (void 0 === e || null === e) e = !0;
                        if (void 0 === f || null === f) f = !0;
                        if (void 0 === b || null === b) {
                            if (N(g, {
                                sSearch: a + "",
                                bRegex: c,
                                bSmart: d,
                                bCaseInsensitive: f
                            }, 1), e && g.aanFeatures.f) {
                                b = g.aanFeatures.f;
                                c = 0;
                                for (d = b.length; c < d; c++) try {
                                    b[c]._DT_Input != n.activeElement && k(b[c]._DT_Input).val(a)
                                } catch (m) {
                                    k(b[c]._DT_Input).val(a)
                                }
                            }
                        } else k.extend(g.aoPreSearchCols[b], {
                            sSearch: a + "",
                            bRegex: c,
                            bSmart: d,
                            bCaseInsensitive: f
                        }), N(g, g.oPreviousSearch, 1)
                    }
            };
            this.fnGetData = function(a, b) {
                var c = w(this[l.ext.iApiIndex]);
                if (void 0 !== a) {
                    var d = a;
                    if ("object" === typeof a) {
                        var e = a.nodeName.toLowerCase();
                        "tr" === e ? d = L(c, a) : "td" === e && (d = L(c, a.parentNode), b = ga(c, d, a))
                    }
                    return void 0 !== b ? y(c, d, b, "") : void 0 !== c.aoData[d] ? c.aoData[d]._aData : null
                }
                return $(c)
            };
            this.fnGetNodes = function(a) {
                var b = w(this[l.ext.iApiIndex]);
                return void 0 !== a ? void 0 !== b.aoData[a] ? b.aoData[a].nTr : null : V(b)
            };
            this.fnGetPosition = function(a) {
                var b =
                    w(this[l.ext.iApiIndex]),
                    c = a.nodeName.toUpperCase();
                return "TR" == c ? L(b, a) : "TD" == c || "TH" == c ? (c = L(b, a.parentNode), a = ga(b, c, a), [c, t(b, a), a]) : null
            };
            this.fnIsOpen = function(a) {
                for (var b = w(this[l.ext.iApiIndex]), c = 0; c < b.aoOpenRows.length; c++)
                    if (b.aoOpenRows[c].nParent == a) return !0;
                return !1
            };
            this.fnOpen = function(a, b, c) {
                var d = w(this[l.ext.iApiIndex]),
                    e = V(d);
                if (-1 !== k.inArray(a, e)) {
                    this.fnClose(a);
                    var e = n.createElement("tr"),
                        f = n.createElement("td");
                    e.appendChild(f);
                    f.className = c;
                    f.colSpan = u(d);
                    "string" === typeof b ?
                        f.innerHTML = b : k(f).html(b);
                    b = k("tr", d.nTBody); - 1 != k.inArray(a, b) && k(e).insertAfter(a);
                    d.aoOpenRows.push({
                        nTr: e,
                        nParent: a
                    });
                    return e
                }
            };
            this.fnPageChange = function(a, b) {
                var c = w(this[l.ext.iApiIndex]);
                ra(c, a);
                B(c);
                (void 0 === b || b) && A(c)
            };
            this.fnSetColumnVis = function(a, b, c) {
                var d = w(this[l.ext.iApiIndex]),
                    e, f, g = d.aoColumns,
                    k = d.aoData,
                    r, p;
                if (g[a].bVisible != b) {
                    if (b) {
                        for (e = f = 0; e < a; e++) g[e].bVisible && f++;
                        p = f >= u(d);
                        if (!p)
                            for (e = a; e < g.length; e++)
                                if (g[e].bVisible) {
                                    r = e;
                                    break
                                }
                        e = 0;
                        for (f = k.length; e < f; e++) null !== k[e].nTr &&
                            (p ? k[e].nTr.appendChild(k[e]._anHidden[a]) : k[e].nTr.insertBefore(k[e]._anHidden[a], M(d, e)[r]))
                    } else {
                        e = 0;
                        for (f = k.length; e < f; e++) null !== k[e].nTr && (r = M(d, e)[a], k[e]._anHidden[a] = r, r.parentNode.removeChild(r))
                    }
                    g[a].bVisible = b;
                    Y(d, d.aoHeader);
                    d.nTFoot && Y(d, d.aoFooter);
                    e = 0;
                    for (f = d.aoOpenRows.length; e < f; e++) d.aoOpenRows[e].nTr.colSpan = u(d);
                    if (void 0 === c || c) m(d), A(d);
                    sa(d)
                }
            };
            this.fnSettings = function() {
                return w(this[l.ext.iApiIndex])
            };
            this.fnSort = function(a) {
                var b = w(this[l.ext.iApiIndex]);
                b.aaSorting = a;
                R(b)
            };
            this.fnSortListener = function(a, b, c) {
                ja(w(this[l.ext.iApiIndex]), a, b, c)
            };
            this.fnUpdate = function(a, b, c, d, e) {
                var f = w(this[l.ext.iApiIndex]);
                b = "object" === typeof b ? L(f, b) : b;
                if (k.isArray(a) && void 0 === c) {
                    f.aoData[b]._aData = a.slice();
                    for (c = 0; c < f.aoColumns.length; c++) this.fnUpdate(y(f, b, c), b, c, !1, !1)
                } else if (k.isPlainObject(a) && void 0 === c) {
                    f.aoData[b]._aData = k.extend(!0, {}, a);
                    for (c = 0; c < f.aoColumns.length; c++) this.fnUpdate(y(f, b, c), b, c, !1, !1)
                } else {
                    I(f, b, c, a);
                    a = y(f, b, c, "display");
                    var g = f.aoColumns[c];
                    null !==
                        g.fnRender && (a = U(f, b, c), g.bUseRendered && I(f, b, c, a));
                    null !== f.aoData[b].nTr && (M(f, b)[c].innerHTML = a)
                }
                c = k.inArray(b, f.aiDisplay);
                f.asDataSearch[c] = oa(f, Z(f, b, "filter", v(f, "bSearchable")));
                (void 0 === e || e) && m(f);
                (void 0 === d || d) && ba(f);
                return 0
            };
            this.fnVersionCheck = l.ext.fnVersionCheck;
            this.oApi = {
                _fnExternApiFunc: Ya,
                _fnInitialise: ca,
                _fnInitComplete: aa,
                _fnLanguageCompat: qa,
                _fnAddColumn: r,
                _fnColumnOptions: p,
                _fnAddData: K,
                _fnCreateTr: fa,
                _fnGatherData: xa,
                _fnBuildHead: ya,
                _fnDrawHead: Y,
                _fnDraw: A,
                _fnReDraw: ba,
                _fnAjaxUpdate: za,
                _fnAjaxParameters: Ha,
                _fnAjaxUpdateDraw: Ia,
                _fnServerParams: la,
                _fnAddOptionsHtml: Aa,
                _fnFeatureHtmlTable: Ea,
                _fnScrollDraw: Oa,
                _fnAdjustColumnSizing: m,
                _fnFeatureHtmlFilter: Ca,
                _fnFilterComplete: N,
                _fnFilterCustom: La,
                _fnFilterColumn: Ka,
                _fnFilter: Ja,
                _fnBuildSearchArray: ma,
                _fnBuildSearchRow: oa,
                _fnFilterCreateSearch: na,
                _fnDataToSearch: Ma,
                _fnSort: R,
                _fnSortAttachListener: ja,
                _fnSortingClasses: S,
                _fnFeatureHtmlPaginate: Ga,
                _fnPageChange: ra,
                _fnFeatureHtmlInfo: Fa,
                _fnUpdateInfo: Na,
                _fnFeatureHtmlLength: Ba,
                _fnFeatureHtmlProcessing: Da,
                _fnProcessingDisplay: H,
                _fnVisibleToColumnIndex: J,
                _fnColumnIndexToVisible: t,
                _fnNodeToDataIndex: L,
                _fnVisbleColumns: u,
                _fnCalculateEnd: B,
                _fnConvertToWidth: Pa,
                _fnCalculateColumnWidths: ea,
                _fnScrollingWidthAdjust: Ra,
                _fnGetWidestNode: Qa,
                _fnGetMaxLenString: Sa,
                _fnStringToCss: s,
                _fnDetectType: E,
                _fnSettingsFromNode: w,
                _fnGetDataMaster: $,
                _fnGetTrNodes: V,
                _fnGetTdNodes: M,
                _fnEscapeRegex: pa,
                _fnDeleteIndex: ia,
                _fnReOrderIndex: x,
                _fnColumnOrdering: P,
                _fnLog: G,
                _fnClearTable: ha,
                _fnSaveState: sa,
                _fnLoadState: Va,
                _fnCreateCookie: function(a, b, c, d, e) {
                    var f = new Date;
                    f.setTime(f.getTime() + 1E3 * c);
                    c = O.location.pathname.split("/");
                    a = a + "_" + c.pop().replace(/[\/:]/g, "").toLowerCase();
                    var g;
                    null !== e ? (g = "function" === typeof k.parseJSON ? k.parseJSON(b) : eval("(" + b + ")"), b = e(a, g, f.toGMTString(), c.join("/") + "/")) : b = a + "\x3d" + encodeURIComponent(b) + "; expires\x3d" + f.toGMTString() + "; path\x3d" + c.join("/") + "/";
                    a = n.cookie.split(";");
                    e = b.split(";")[0].length;
                    f = [];
                    if (4096 < e + n.cookie.length + 10) {
                        for (var l = 0, m = a.length; l <
                            m; l++)
                            if (-1 != a[l].indexOf(d)) {
                                var r = a[l].split("\x3d");
                                try {
                                    (g = eval("(" + decodeURIComponent(r[1]) + ")")) && g.iCreate && f.push({
                                        name: r[0],
                                        time: g.iCreate
                                    })
                                } catch (p) {}
                            }
                        for (f.sort(function(a, b) {
                            return b.time - a.time
                        }); 4096 < e + n.cookie.length + 10;) {
                            if (0 === f.length) return;
                            d = f.pop();
                            n.cookie = d.name + "\x3d; expires\x3dThu, 01-Jan-1970 00:00:01 GMT; path\x3d" + c.join("/") + "/"
                        }
                    }
                    n.cookie = b
                },
                _fnReadCookie: function(a) {
                    var b = O.location.pathname.split("/");
                    a = a + "_" + b[b.length - 1].replace(/[\/:]/g, "").toLowerCase() + "\x3d";
                    for (var b =
                        n.cookie.split(";"), c = 0; c < b.length; c++) {
                        for (var d = b[c];
                            " " == d.charAt(0);) d = d.substring(1, d.length);
                        if (0 === d.indexOf(a)) return decodeURIComponent(d.substring(a.length, d.length))
                    }
                    return null
                },
                _fnDetectHeader: X,
                _fnGetUniqueThs: Q,
                _fnScrollBarWidth: Ta,
                _fnApplyToChildren: F,
                _fnMap: q,
                _fnGetRowData: Z,
                _fnGetCellData: y,
                _fnSetCellData: I,
                _fnGetObjectDataFn: T,
                _fnSetObjectDataFn: ua,
                _fnApplyColumnDefs: va,
                _fnBindAction: Ua,
                _fnExtend: Wa,
                _fnCallbackReg: C,
                _fnCallbackFire: D,
                _fnJsonString: Za,
                _fnRender: U,
                _fnNodeToColumnIndex: ga,
                _fnInfoMacros: ka,
                _fnBrowserDetect: Xa,
                _fnGetColumns: v
            };
            k.extend(l.ext.oApi, this.oApi);
            for (var ta in l.ext.oApi) ta && (this[ta] = Ya(ta));
            var da = this;
            this.each(function() {
                var a = 0,
                    b, c, d;
                c = this.getAttribute("id");
                var h = !1,
                    f = !1;
                if ("table" != this.nodeName.toLowerCase()) G(null, 0, "Attempted to initialise DataTables on a node which is not a table: " + this.nodeName);
                else {
                    a = 0;
                    for (b = l.settings.length; a < b; a++) {
                        if (l.settings[a].nTable == this) {
                            if (void 0 === e || e.bRetrieve) return l.settings[a].oInstance;
                            if (e.bDestroy) {
                                l.settings[a].oInstance.fnDestroy();
                                break
                            } else {
                                G(l.settings[a], 0, "Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, pass no arguments or see the docs for bRetrieve and bDestroy");
                                return
                            }
                        }
                        if (l.settings[a].sTableId == this.id) {
                            l.settings.splice(a, 1);
                            break
                        }
                    }
                    if (null === c || "" === c) this.id = c = "DataTables_Table_" + l.ext._oExternConfig.iNextUnique++;
                    var g = k.extend(!0, {}, l.models.oSettings, {
                        nTable: this,
                        oApi: da.oApi,
                        oInit: e,
                        sDestroyWidth: k(this).width(),
                        sInstance: c,
                        sTableId: c
                    });
                    l.settings.push(g);
                    g.oInstance = 1 === da.length ?
                        da : k(this).dataTable();
                    e || (e = {});
                    e.oLanguage && qa(e.oLanguage);
                    e = Wa(k.extend(!0, {}, l.defaults), e);
                    q(g.oFeatures, e, "bPaginate");
                    q(g.oFeatures, e, "bLengthChange");
                    q(g.oFeatures, e, "bFilter");
                    q(g.oFeatures, e, "bSort");
                    q(g.oFeatures, e, "bInfo");
                    q(g.oFeatures, e, "bProcessing");
                    q(g.oFeatures, e, "bAutoWidth");
                    q(g.oFeatures, e, "bSortClasses");
                    q(g.oFeatures, e, "bServerSide");
                    q(g.oFeatures, e, "bDeferRender");
                    q(g.oScroll, e, "sScrollX", "sX");
                    q(g.oScroll, e, "sScrollXInner", "sXInner");
                    q(g.oScroll, e, "sScrollY", "sY");
                    q(g.oScroll,
                        e, "bScrollCollapse", "bCollapse");
                    q(g.oScroll, e, "bScrollInfinite", "bInfinite");
                    q(g.oScroll, e, "iScrollLoadGap", "iLoadGap");
                    q(g.oScroll, e, "bScrollAutoCss", "bAutoCss");
                    q(g, e, "asStripeClasses");
                    q(g, e, "asStripClasses", "asStripeClasses");
                    q(g, e, "fnServerData");
                    q(g, e, "fnFormatNumber");
                    q(g, e, "sServerMethod");
                    q(g, e, "aaSorting");
                    q(g, e, "aaSortingFixed");
                    q(g, e, "aLengthMenu");
                    q(g, e, "sPaginationType");
                    q(g, e, "sAjaxSource");
                    q(g, e, "sAjaxDataProp");
                    q(g, e, "iCookieDuration");
                    q(g, e, "sCookiePrefix");
                    q(g, e, "sDom");
                    q(g, e,
                        "bSortCellsTop");
                    q(g, e, "iTabIndex");
                    q(g, e, "oSearch", "oPreviousSearch");
                    q(g, e, "aoSearchCols", "aoPreSearchCols");
                    q(g, e, "iDisplayLength", "_iDisplayLength");
                    q(g, e, "bJQueryUI", "bJUI");
                    q(g, e, "fnCookieCallback");
                    q(g, e, "fnStateLoad");
                    q(g, e, "fnStateSave");
                    q(g.oLanguage, e, "fnInfoCallback");
                    C(g, "aoDrawCallback", e.fnDrawCallback, "user");
                    C(g, "aoServerParams", e.fnServerParams, "user");
                    C(g, "aoStateSaveParams", e.fnStateSaveParams, "user");
                    C(g, "aoStateLoadParams", e.fnStateLoadParams, "user");
                    C(g, "aoStateLoaded", e.fnStateLoaded,
                        "user");
                    C(g, "aoRowCallback", e.fnRowCallback, "user");
                    C(g, "aoRowCreatedCallback", e.fnCreatedRow, "user");
                    C(g, "aoHeaderCallback", e.fnHeaderCallback, "user");
                    C(g, "aoFooterCallback", e.fnFooterCallback, "user");
                    C(g, "aoInitComplete", e.fnInitComplete, "user");
                    C(g, "aoPreDrawCallback", e.fnPreDrawCallback, "user");
                    g.oFeatures.bServerSide && g.oFeatures.bSort && g.oFeatures.bSortClasses ? C(g, "aoDrawCallback", S, "server_side_sort_classes") : g.oFeatures.bDeferRender && C(g, "aoDrawCallback", S, "defer_sort_classes");
                    e.bJQueryUI ?
                        (k.extend(g.oClasses, l.ext.oJUIClasses), e.sDom === l.defaults.sDom && "lfrtip" === l.defaults.sDom && (g.sDom = '\x3c"H"lfr\x3et\x3c"F"ip\x3e')) : k.extend(g.oClasses, l.ext.oStdClasses);
                    k(this).addClass(g.oClasses.sTable);
                    if ("" !== g.oScroll.sX || "" !== g.oScroll.sY) g.oScroll.iBarWidth = Ta();
                    void 0 === g.iInitDisplayStart && (g.iInitDisplayStart = e.iDisplayStart, g._iDisplayStart = e.iDisplayStart);
                    e.bStateSave && (g.oFeatures.bStateSave = !0, Va(g, e), C(g, "aoDrawCallback", sa, "state_save"));
                    null !== e.iDeferLoading && (g.bDeferLoading = !0, a = k.isArray(e.iDeferLoading), g._iRecordsDisplay = a ? e.iDeferLoading[0] : e.iDeferLoading, g._iRecordsTotal = a ? e.iDeferLoading[1] : e.iDeferLoading);
                    null !== e.aaData && (f = !0);
                    "" !== e.oLanguage.sUrl ? (g.oLanguage.sUrl = e.oLanguage.sUrl, k.getJSON(g.oLanguage.sUrl, null, function(a) {
                        qa(a);
                        k.extend(!0, g.oLanguage, e.oLanguage, a);
                        ca(g)
                    }), h = !0) : k.extend(!0, g.oLanguage, e.oLanguage);
                    null === e.asStripeClasses && (g.asStripeClasses = [g.oClasses.sStripeOdd, g.oClasses.sStripeEven]);
                    b = g.asStripeClasses.length;
                    g.asDestroyStripes = [];
                    if (b) {
                        c = !1;
                        d = k(this).children("tbody").children("tr:lt(" + b + ")");
                        for (a = 0; a < b; a++) d.hasClass(g.asStripeClasses[a]) && (c = !0, g.asDestroyStripes.push(g.asStripeClasses[a]));
                        c && d.removeClass(g.asStripeClasses.join(" "))
                    }
                    c = [];
                    a = this.getElementsByTagName("thead");
                    0 !== a.length && (X(g.aoHeader, a[0]), c = Q(g));
                    if (null === e.aoColumns) {
                        d = [];
                        a = 0;
                        for (b = c.length; a < b; a++) d.push(null)
                    } else d = e.aoColumns;
                    a = 0;
                    for (b = d.length; a < b; a++) void 0 !== e.saved_aoColumns && e.saved_aoColumns.length == b && (null === d[a] && (d[a] = {}), d[a].bVisible =
                        e.saved_aoColumns[a].bVisible), r(g, c ? c[a] : null);
                    va(g, e.aoColumnDefs, d, function(a, b) {
                        p(g, a, b)
                    });
                    a = 0;
                    for (b = g.aaSorting.length; a < b; a++) {
                        g.aaSorting[a][0] >= g.aoColumns.length && (g.aaSorting[a][0] = 0);
                        var m = g.aoColumns[g.aaSorting[a][0]];
                        void 0 === g.aaSorting[a][2] && (g.aaSorting[a][2] = 0);
                        void 0 === e.aaSorting && void 0 === g.saved_aaSorting && (g.aaSorting[a][1] = m.asSorting[0]);
                        c = 0;
                        for (d = m.asSorting.length; c < d; c++)
                            if (g.aaSorting[a][1] == m.asSorting[c]) {
                                g.aaSorting[a][2] = c;
                                break
                            }
                    }
                    S(g);
                    Xa(g);
                    a = k(this).children("caption").each(function() {
                        this._captionSide =
                            k(this).css("caption-side")
                    });
                    b = k(this).children("thead");
                    0 === b.length && (b = [n.createElement("thead")], this.appendChild(b[0]));
                    g.nTHead = b[0];
                    b = k(this).children("tbody");
                    0 === b.length && (b = [n.createElement("tbody")], this.appendChild(b[0]));
                    g.nTBody = b[0];
                    g.nTBody.setAttribute("role", "alert");
                    g.nTBody.setAttribute("aria-live", "polite");
                    g.nTBody.setAttribute("aria-relevant", "all");
                    b = k(this).children("tfoot");
                    if (0 === b.length && 0 < a.length && ("" !== g.oScroll.sX || "" !== g.oScroll.sY)) b = [n.createElement("tfoot")],
                    this.appendChild(b[0]);
                    0 < b.length && (g.nTFoot = b[0], X(g.aoFooter, g.nTFoot));
                    if (f)
                        for (a = 0; a < e.aaData.length; a++) K(g, e.aaData[a]);
                    else xa(g);
                    g.aiDisplay = g.aiDisplayMaster.slice();
                    g.bInitialised = !0;
                    !1 === h && ca(g)
                }
            });
            da = null;
            return this
        };
        l.fnVersionCheck = function(e) {
            var k = function(e, k) {
                for (; e.length < k;) e += "0";
                return e
            }, p = l.ext.sVersion.split(".");
            e = e.split(".");
            for (var m = "", n = "", t = 0, u = e.length; t < u; t++) m += k(p[t], 3), n += k(e[t], 3);
            return parseInt(m, 10) >= parseInt(n, 10)
        };
        l.fnIsDataTable = function(e) {
            for (var k =
                l.settings, p = 0; p < k.length; p++)
                if (k[p].nTable === e || k[p].nScrollHead === e || k[p].nScrollFoot === e) return !0;
            return !1
        };
        l.fnTables = function(e) {
            var r = [];
            jQuery.each(l.settings, function(l, m) {
                (!e || !0 === e && k(m.nTable).is(":visible")) && r.push(m.nTable)
            });
            return r
        };
        l.version = "1.9.4";
        l.settings = [];
        l.models = {};
        l.models.ext = {
            afnFiltering: [],
            afnSortData: [],
            aoFeatures: [],
            aTypes: [],
            fnVersionCheck: l.fnVersionCheck,
            iApiIndex: 0,
            ofnSearch: {},
            oApi: {},
            oStdClasses: {},
            oJUIClasses: {},
            oPagination: {},
            oSort: {},
            sVersion: l.version,
            sErrMode: "alert",
            _oExternConfig: {
                iNextUnique: 0
            }
        };
        l.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        };
        l.models.oRow = {
            nTr: null,
            _aData: [],
            _aSortData: [],
            _anHidden: [],
            _sRowStripe: ""
        };
        l.models.oColumn = {
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bUseRendered: null,
            bVisible: null,
            _bAutoType: !0,
            fnCreatedCell: null,
            fnGetData: null,
            fnRender: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        };
        l.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollAutoCss: !0,
            bScrollCollapse: !1,
            bScrollInfinite: !1,
            bServerSide: !1,
            bSort: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCookieCallback: null,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(e) {
                if (1E3 > e) return e;
                var k = e + "";
                e = k.split("");
                for (var l = "", k = k.length, m = 0; m < k; m++) 0 === m % 3 && 0 !== m && (l = this.oLanguage.sInfoThousands + l), l = e[k - m - 1] + l;
                return l
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: function(e, l, p, m) {
                m.jqXHR = k.ajax({
                    url: e,
                    data: l,
                    success: function(e) {
                        e.sError && m.oApi._fnLog(m, 0, e.sError);
                        k(m.oInstance).trigger("xhr", [m, e]);
                        p(e)
                    },
                    dataType: "json",
                    cache: !1,
                    type: m.sServerMethod,
                    error: function(e, k, l) {
                        "parsererror" == k && m.oApi._fnLog(m, 0, "DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.")
                    }
                })
            },
            fnServerParams: null,
            fnStateLoad: function(e) {
                e = this.oApi._fnReadCookie(e.sCookiePrefix + e.sInstance);
                var l;
                try {
                    l = "function" === typeof k.parseJSON ? k.parseJSON(e) : eval("(" + e + ")")
                } catch (p) {
                    l = null
                }
                return l
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSave: function(e, k) {
                this.oApi._fnCreateCookie(e.sCookiePrefix +
                    e.sInstance, this.oApi._fnJsonString(k), e.iCookieDuration, e.sCookiePrefix, e.fnCookieCallback)
            },
            fnStateSaveParams: null,
            iCookieDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iScrollLoadGap: 100,
            iTabIndex: 0,
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sInfoThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: k.extend({}, l.models.oSearch),
            sAjaxDataProp: "aaData",
            sAjaxSource: null,
            sCookiePrefix: "SpryMedia_DataTables_",
            sDom: "lfrtip",
            sPaginationType: "two_button",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET"
        };
        l.defaults.columns = {
            aDataSort: null,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bUseRendered: !0,
            bVisible: !0,
            fnCreatedCell: null,
            fnRender: null,
            iDataSort: -1,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        };
        l.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bAutoCss: null,
                bCollapse: null,
                bInfinite: null,
                iBarWidth: 0,
                iLoadGap: null,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1
            },
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            asDataSearch: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: null,
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            sPaginationType: "two_button",
            iCookieDuration: 0,
            sCookiePrefix: "",
            fnCookieCallback: null,
            aoStateSave: [],
            aoStateLoad: [],
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iDisplayEnd: 10,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return this.oFeatures.bServerSide ? parseInt(this._iRecordsTotal, 10) : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function() {
                return this.oFeatures.bServerSide ? parseInt(this._iRecordsDisplay, 10) : this.aiDisplay.length
            },
            fnDisplayEnd: function() {
                return this.oFeatures.bServerSide ? !1 === this.oFeatures.bPaginate || -1 == this._iDisplayLength ? this._iDisplayStart + this.aiDisplay.length : Math.min(this._iDisplayStart + this._iDisplayLength, this._iRecordsDisplay) : this._iDisplayEnd
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null
        };
        l.ext = k.extend(!0, {}, l.models.ext);
        k.extend(l.ext.oStdClasses, {
            sTable: "dataTable",
            sPagePrevEnabled: "paginate_enabled_previous",
            sPagePrevDisabled: "paginate_disabled_previous",
            sPageNextEnabled: "paginate_enabled_next",
            sPageNextDisabled: "paginate_disabled_next",
            sPageJUINext: "",
            sPageJUIPrev: "",
            sPageButton: "paginate_button",
            sPageButtonActive: "paginate_active",
            sPageButtonStaticDisabled: "paginate_button paginate_button_disabled",
            sPageFirst: "first",
            sPagePrevious: "previous",
            sPageNext: "next",
            sPageLast: "last",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sFooterTH: "",
            sJUIHeader: "",
            sJUIFooter: ""
        });
        k.extend(l.ext.oJUIClasses, l.ext.oStdClasses, {
            sPagePrevEnabled: "fg-button ui-button ui-state-default ui-corner-left",
            sPagePrevDisabled: "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
            sPageNextEnabled: "fg-button ui-button ui-state-default ui-corner-right",
            sPageNextDisabled: "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
            sPageJUINext: "ui-icon ui-icon-circle-arrow-e",
            sPageJUIPrev: "ui-icon ui-icon-circle-arrow-w",
            sPageButton: "fg-button ui-button ui-state-default",
            sPageButtonActive: "fg-button ui-button ui-state-default ui-state-disabled",
            sPageButtonStaticDisabled: "fg-button ui-button ui-state-default ui-state-disabled",
            sPageFirst: "first ui-corner-tl ui-corner-bl",
            sPageLast: "last ui-corner-tr ui-corner-br",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: "ui-state-default",
            sSortDesc: "ui-state-default",
            sSortable: "ui-state-default",
            sSortableAsc: "ui-state-default",
            sSortableDesc: "ui-state-default",
            sSortableNone: "ui-state-default",
            sSortJUIAsc: "css_right ui-icon ui-icon-triangle-1-n",
            sSortJUIDesc: "css_right ui-icon ui-icon-triangle-1-s",
            sSortJUI: "css_right ui-icon ui-icon-carat-2-n-s",
            sSortJUIAscAllowed: "css_right ui-icon ui-icon-carat-1-n",
            sSortJUIDescAllowed: "css_right ui-icon ui-icon-carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead ui-state-default",
            sScrollFoot: "dataTables_scrollFoot ui-state-default",
            sFooterTH: "ui-state-default",
            sJUIHeader: "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix",
            sJUIFooter: "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
        });
        k.extend(l.ext.oPagination, {
            two_button: {
                fnInit: function(e, l, p) {
                    var m = e.oLanguage.oPaginate,
                        n = function(k) {
                            e.oApi._fnPageChange(e, k.data.action) && p(e)
                        }, m = !e.bJUI ? '\x3ca class\x3d"' + e.oClasses.sPagePrevDisabled + '" tabindex\x3d"' + e.iTabIndex + '" role\x3d"button"\x3e' + m.sPrevious + '\x3c/a\x3e\x3ca class\x3d"' +
                            e.oClasses.sPageNextDisabled + '" tabindex\x3d"' + e.iTabIndex + '" role\x3d"button"\x3e' + m.sNext + "\x3c/a\x3e" : '\x3ca class\x3d"' + e.oClasses.sPagePrevDisabled + '" tabindex\x3d"' + e.iTabIndex + '" role\x3d"button"\x3e\x3cspan class\x3d"' + e.oClasses.sPageJUIPrev + '"\x3e\x3c/span\x3e\x3c/a\x3e\x3ca class\x3d"' + e.oClasses.sPageNextDisabled + '" tabindex\x3d"' + e.iTabIndex + '" role\x3d"button"\x3e\x3cspan class\x3d"' + e.oClasses.sPageJUINext + '"\x3e\x3c/span\x3e\x3c/a\x3e';
                    k(l).append(m);
                    var t = k("a", l),
                        m = t[0],
                        t = t[1];
                    e.oApi._fnBindAction(m, {
                        action: "previous"
                    }, n);
                    e.oApi._fnBindAction(t, {
                        action: "next"
                    }, n);
                    e.aanFeatures.p || (l.id = e.sTableId + "_paginate", m.id = e.sTableId + "_previous", t.id = e.sTableId + "_next", m.setAttribute("aria-controls", e.sTableId), t.setAttribute("aria-controls", e.sTableId))
                },
                fnUpdate: function(e, k) {
                    if (e.aanFeatures.p)
                        for (var l = e.oClasses, m = e.aanFeatures.p, n, t = 0, u = m.length; t < u; t++)
                            if (n = m[t].firstChild) n.className = 0 === e._iDisplayStart ? l.sPagePrevDisabled : l.sPagePrevEnabled, n = n.nextSibling, n.className = e.fnDisplayEnd() == e.fnRecordsDisplay() ?
                                l.sPageNextDisabled : l.sPageNextEnabled
                }
            },
            iFullNumbersShowPages: 5,
            full_numbers: {
                fnInit: function(e, l, p) {
                    var m = e.oLanguage.oPaginate,
                        n = e.oClasses,
                        t = function(k) {
                            e.oApi._fnPageChange(e, k.data.action) && p(e)
                        };
                    k(l).append('\x3ca  tabindex\x3d"' + e.iTabIndex + '" class\x3d"' + n.sPageButton + " " + n.sPageFirst + '"\x3e' + m.sFirst + '\x3c/a\x3e\x3ca  tabindex\x3d"' + e.iTabIndex + '" class\x3d"' + n.sPageButton + " " + n.sPagePrevious + '"\x3e' + m.sPrevious + '\x3c/a\x3e\x3cspan\x3e\x3c/span\x3e\x3ca tabindex\x3d"' + e.iTabIndex + '" class\x3d"' +
                        n.sPageButton + " " + n.sPageNext + '"\x3e' + m.sNext + '\x3c/a\x3e\x3ca tabindex\x3d"' + e.iTabIndex + '" class\x3d"' + n.sPageButton + " " + n.sPageLast + '"\x3e' + m.sLast + "\x3c/a\x3e");
                    var u = k("a", l),
                        m = u[0],
                        n = u[1],
                        v = u[2],
                        u = u[3];
                    e.oApi._fnBindAction(m, {
                        action: "first"
                    }, t);
                    e.oApi._fnBindAction(n, {
                        action: "previous"
                    }, t);
                    e.oApi._fnBindAction(v, {
                        action: "next"
                    }, t);
                    e.oApi._fnBindAction(u, {
                        action: "last"
                    }, t);
                    e.aanFeatures.p || (l.id = e.sTableId + "_paginate", m.id = e.sTableId + "_first", n.id = e.sTableId + "_previous", v.id = e.sTableId + "_next",
                        u.id = e.sTableId + "_last")
                },
                fnUpdate: function(e, r) {
                    if (e.aanFeatures.p) {
                        var p = l.ext.oPagination.iFullNumbersShowPages,
                            m = Math.floor(p / 2),
                            n = Math.ceil(e.fnRecordsDisplay() / e._iDisplayLength),
                            t = Math.ceil(e._iDisplayStart / e._iDisplayLength) + 1,
                            u = "",
                            v, E = e.oClasses,
                            x, P = e.aanFeatures.p,
                            O = function(k) {
                                e.oApi._fnBindAction(this, {
                                    page: k + v - 1
                                }, function(k) {
                                    e.oApi._fnPageChange(e, k.data.page);
                                    r(e);
                                    k.preventDefault()
                                })
                            }; - 1 === e._iDisplayLength ? t = m = v = 1 : n < p ? (v = 1, m = n) : t <= m ? (v = 1, m = p) : t >= n - m ? (v = n - p + 1, m = n) : (v = t - Math.ceil(p /
                                2) + 1, m = v + p - 1);
                        for (p = v; p <= m; p++) u += t !== p ? '\x3ca tabindex\x3d"' + e.iTabIndex + '" class\x3d"' + E.sPageButton + '"\x3e' + e.fnFormatNumber(p) + "\x3c/a\x3e" : '\x3ca tabindex\x3d"' + e.iTabIndex + '" class\x3d"' + E.sPageButtonActive + '"\x3e' + e.fnFormatNumber(p) + "\x3c/a\x3e";
                        p = 0;
                        for (m = P.length; p < m; p++) x = P[p], x.hasChildNodes() && (k("span:eq(0)", x).html(u).children("a").each(O), x = x.getElementsByTagName("a"), x = [x[0], x[1], x[x.length - 2], x[x.length - 1]], k(x).removeClass(E.sPageButton + " " + E.sPageButtonActive + " " + E.sPageButtonStaticDisabled),
                            k([x[0], x[1]]).addClass(1 == t ? E.sPageButtonStaticDisabled : E.sPageButton), k([x[2], x[3]]).addClass(0 === n || t === n || -1 === e._iDisplayLength ? E.sPageButtonStaticDisabled : E.sPageButton))
                    }
                }
            }
        });
        k.extend(l.ext.oSort, {
            "string-pre": function(e) {
                "string" != typeof e && (e = null !== e && e.toString ? e.toString() : "");
                return e.toLowerCase()
            },
            "string-asc": function(e, k) {
                return e < k ? -1 : e > k ? 1 : 0
            },
            "string-desc": function(e, k) {
                return e < k ? 1 : e > k ? -1 : 0
            },
            "html-pre": function(e) {
                return e.replace(/<.*?>/g, "").toLowerCase()
            },
            "html-asc": function(e,
                k) {
                return e < k ? -1 : e > k ? 1 : 0
            },
            "html-desc": function(e, k) {
                return e < k ? 1 : e > k ? -1 : 0
            },
            "date-pre": function(e) {
                e = Date.parse(e);
                if (isNaN(e) || "" === e) e = Date.parse("01/01/1970 00:00:00");
                return e
            },
            "date-asc": function(e, k) {
                return e - k
            },
            "date-desc": function(e, k) {
                return k - e
            },
            "numeric-pre": function(e) {
                return "-" == e || "" === e ? 0 : 1 * e
            },
            "numeric-asc": function(e, k) {
                return e - k
            },
            "numeric-desc": function(e, k) {
                return k - e
            }
        });
        k.extend(l.ext.aTypes, [
            function(e) {
                if ("number" === typeof e) return "numeric";
                if ("string" !== typeof e) return null;
                var k, l = !1;
                k = e.charAt(0);
                if (-1 == "0123456789-".indexOf(k)) return null;
                for (var m = 1; m < e.length; m++) {
                    k = e.charAt(m);
                    if (-1 == "0123456789.".indexOf(k)) return null;
                    if ("." == k) {
                        if (l) return null;
                        l = !0
                    }
                }
                return "numeric"
            },
            function(e) {
                var k = Date.parse(e);
                return null !== k && !isNaN(k) || "string" === typeof e && 0 === e.length ? "date" : null
            },
            function(e) {
                return "string" === typeof e && -1 != e.indexOf("\x3c") && -1 != e.indexOf("\x3e") ? "html" : null
            }
        ]);
        k.fn.DataTable = l;
        k.fn.dataTable = l;
        k.fn.dataTableSettings = l.settings;
        k.fn.dataTableExt = l.ext
    })
})(window,
    document);
jQuery.cookie = function(e, b, a) {
    if (1 < arguments.length && "[object Object]" !== String(b)) {
        a = jQuery.extend({}, a);
        if (null === b || void 0 === b) a.expires = -1;
        if ("number" === typeof a.expires) {
            var d = a.expires,
                c = a.expires = new Date;
            c.setDate(c.getDate() + d)
        }
        b = String(b);
        return document.cookie = [encodeURIComponent(e), "\x3d", a.raw ? b : encodeURIComponent(b), a.expires ? "; expires\x3d" + a.expires.toUTCString() : "", a.path ? "; path\x3d" + a.path : "", a.domain ? "; domain\x3d" + a.domain : "", a.secure ? "; secure" : ""].join("")
    }
    a = b || {};
    c = a.raw ? function(a) {
        return a
    } :
        decodeURIComponent;
    return (d = RegExp("(?:^|; )" + encodeURIComponent(e) + "\x3d([^;]*)").exec(document.cookie)) ? c(d[1]) : null
};
(function(c) {
    c.fn.tipTip = function(A) {
        var B = this,
            p = {
                activation: "hover",
                keepAlive: !1,
                maxWidth: "240px",
                edgeOffset: 3,
                defaultPosition: "bottom",
                delay: 0,
                fadeIn: 200,
                fadeOut: 200,
                tipType: "informative",
                attribute: "title",
                zIndex: 99999,
                content: !1,
                enter: function() {},
                exit: function() {}
            }, a = c.extend(p, A);
        "hover" == a.activation && a.edgeOffset == p.edgeOffset && (a.edgeOffset += 5);
        if (0 >= c("#tiptip_holder").length) {
            var g = c('\x3cdiv id\x3d"tiptip_holder" class\x3d"tiptip_holder" data-tipType\x3d"' + a.tipType + '" style\x3d"max-width:' +
                a.maxWidth + ';"\x3e\x3c/div\x3e'),
                v = c('\x3cdiv id\x3d"tiptip_content" class\x3d"tiptip_content"\x3e\x3c/div\x3e'),
                t = c('\x3cdiv id\x3d"tiptip_arrow" class\x3d"tiptip_arrow"\x3e\x3c/div\x3e');
            c("body").append(g.html(v).prepend(t.html('\x3cdiv id\x3d"tiptip_arrow_inner" class\x3d"tiptip_arrow_inner"\x3e\x3c/div\x3e')))
        } else g = c("#tiptip_holder"), v = c("#tiptip_content"), t = c("#tiptip_arrow");
        return this.each(function() {
            var m = c(this),
                e;
            a.parentTarget && (e = m.parent(a.parentTarget));
            e = e || c(this);
            var w = a.content ?
                a.content.replace("\n", "") : m.attr(a.attribute);
            if ("" != w) {
                a.content || m.removeAttr(a.attribute);
                var q = !1;
                "hover" == a.activation ? e.hover(function() {
                    f();
                    c("#tiptip_close").hide()
                }, function() {
                    d()
                }) : "focus" == a.activation ? e.focus(function() {
                    f()
                }).blur(function() {
                    d()
                }) : "click" == a.activation ? (e.click(function() {
                    f();
                    c("#tiptip_close, .tiptip_close").click(function(a) {
                        a.preventDefault();
                        d()
                    });
                    return !1
                }).hover(function() {}, function() {
                    a.keepAlive || d()
                }), c("body").click(function() {
                    d()
                }), a.keepAlive || c("#tiptip_content, .tiptip_content").click(function(a) {
                    a.stopPropagation()
                })) :
                    "event" == a.activation ? e.bind(a.eventType, function() {
                        a.callback ? a.callback.call(B, f) : f();
                        c("#tiptip_close, .tiptip_close").click(function(a) {
                            a.preventDefault();
                            d()
                        })
                    }) : "now" == a.activation && setTimeout(function() {
                        f();
                        "hover" == a.eventType ? (c("#tiptip_close").hide(), m.on("mouseout", function() {
                            d()
                        })) : c("#tiptip_close, .tiptip_close, .tiptip_close_proxy").click(function(a) {
                            a.preventDefault();
                            d()
                        })
                    }, 10);
                var f = function(k) {
                    k && (w = k);
                    a.enter && a.enter.call(this);
                    v.html('\x3ca href\x3d"#" id\x3d"tiptip_close" class\x3d"tiptip_close"\x3eclose\x3c/a\x3e' +
                        w);
                    g.hide().attr("class", "tiptip_holder").css({
                        margin: "0",
                        "max-width": a.maxWidth,
                        "z-index": a.zIndex
                    });
                    t.removeAttr("style");
                    g.attr("data-tiptype", a.tipType);
                    k = parseInt(m.offset().top);
                    var h = parseInt(m.offset().left),
                        d = parseInt(m.outerWidth()),
                        e = parseInt(m.outerHeight()),
                        f = g.outerWidth(),
                        n = g.outerHeight(),
                        u = Math.round((d - f) / 2),
                        p = Math.round((e - n) / 2),
                        r = Math.round(h + u),
                        l = Math.round(k + e + a.edgeOffset),
                        b = "",
                        s = "",
                        x = Math.round(f - 12) / 2;
                    "bottom" == a.defaultPosition ? b = "_bottom" : "top" == a.defaultPosition ? b = "_top" :
                        "left" == a.defaultPosition ? b = "_left" : "right" == a.defaultPosition && (b = "_right");
                    var y = u + h < parseInt(c(window).scrollLeft()),
                        z = f + h > parseInt(c(window).width());
                    if (y && 0 > u || "_right" == b && !z || "_left" == b && h < f + a.edgeOffset + 5) b = "_right", s = Math.round(n - 13) / 2, x = -12, r = Math.round(h + d + a.edgeOffset), l = Math.round(k + p);
                    else if (z && 0 > u || "_left" == b && !y) b = "_left", s = Math.round(n - 13) / 2, x = Math.round(f), r = Math.round(h - (f + a.edgeOffset + 5)), l = Math.round(k + p);
                    h = k + e + a.edgeOffset + n + 8 > parseInt(c(window).height() + c(window).scrollTop());
                    d = 0 > k + e - (a.edgeOffset + n + 8);
                    "hover" == a.activation && (d = h = !1);
                    if (h || "_bottom" == b && h || "_top" == b && !d) b = "_top" == b || "_bottom" == b ? "_top" : b + "_top", s = n, l = Math.round(k - (n + 5 + a.edgeOffset));
                    else if (d | ("_top" == b && d) || "_bottom" == b && !h) b = "_top" == b || "_bottom" == b ? "_bottom" : b + "_bottom", s = -12, l = Math.round(k + e + a.edgeOffset);
                    if ("_right_top" == b || "_left_top" == b) l += 5;
                    else if ("_right_bottom" == b || "_left_bottom" == b) l -= 5;
                    if ("_left_top" == b || "_left_bottom" == b) r += 5;
                    t.css({
                        "margin-left": x + "px",
                        "margin-top": s + "px"
                    });
                    g.css({
                        "margin-left": r +
                            "px",
                        "margin-top": l + "px"
                    }).addClass("tip" + b);
                    0 < a.fadeIn ? (q && clearTimeout(q), q = setTimeout(function() {
                        g.stop(!0, !0).fadeIn(a.fadeIn)
                    }, a.delay)) : g.show()
                }, d = function() {
                        a.exit.call(this);
                        0 < a.fadeOut ? (q && clearTimeout(q), g.fadeOut(a.fadeOut)) : g.hide()
                    }
            }
        })
    };
    c(window).resize(function() {
        c("#tiptip_holder").fadeOut(400)
    })
})(jQuery);
(function(c) {
    c.address = function() {
        var u = function(a) {
            c(c.address).trigger(c.extend(c.Event(a), function() {
                for (var a = {}, d = c.address.parameterNames(), H = 0, e = d.length; H < e; H++) a[d[H]] = c.address.parameter(d[H]);
                return {
                    value: c.address.value(),
                    path: c.address.path(),
                    pathNames: c.address.pathNames(),
                    parameterNames: d,
                    parameters: a,
                    queryString: c.address.queryString()
                }
            }.call(c.address)))
        }, v = function(a, b, d) {
                c().bind.apply(c(c.address), Array.prototype.slice.call(arguments));
                return c.address
            }, q = function() {
                return K.pushState &&
                    d.state !== m
            }, r = function() {
                return ("/" + e.pathname.replace(RegExp(d.state), "") + e.search + (B() ? "#" + B() : "")).replace(Q, "/")
            }, B = function() {
                var a = e.href.indexOf("#");
                return -1 != a ? z(e.href.substr(a + 1), k) : ""
            }, t = function() {
                return q() ? r() : B()
            }, L = function(a) {
                a = a.toString();
                return (d.strict && "/" != a.substr(0, 1) ? "/" : "") + a
            }, z = function(a, b) {
                return d.crawlable && b ? ("" !== a ? "!" : "") + a : a.replace(/^\!/, "")
            }, w = function(a, b) {
                return parseInt(a.css(b), 10)
            }, R = function(a) {
                for (var b, c, d = 0, e = a.childNodes.length; d < e; d++) {
                    try {
                        "src" in
                            a.childNodes[d] && a.childNodes[d].src && (b = String(a.childNodes[d].src))
                    } catch (f) {}(c = R(a.childNodes[d])) && (b = c)
                }
                return b
            }, D = function() {
                if (!I) {
                    var a = t();
                    f != a && (x && 7 > p ? e.reload() : (x && (8 > p && d.history) && s(M, 50), f = a, C(k)))
                }
            }, C = function(a) {
                u(S);
                u(a ? T : U);
                s(V, 10)
            }, V = function() {
                if ("null" !== d.tracker && null !== d.tracker) {
                    var a = c.isFunction(d.tracker) ? d.tracker : h[d.tracker],
                        b = (e.pathname + e.search + (c.address && !q() ? c.address.value() : "")).replace(/\/\//, "/").replace(/^\/$/, "");
                    c.isFunction(a) ? a(b) : c.isFunction(h.urchinTracker) ?
                        h.urchinTracker(b) : h.pageTracker !== m && c.isFunction(h.pageTracker._trackPageview) ? h.pageTracker._trackPageview(b) : h._gaq !== m && c.isFunction(h._gaq.push) && h._gaq.push(["_trackPageview", decodeURI(b)])
                }
            }, M = function() {
                var a = "javascript:" + k + ";document.open();document.writeln('\x3chtml\x3e\x3chead\x3e\x3ctitle\x3e" + l.title.replace("'", "\\'") + "\x3c/title\x3e\x3cscript\x3evar " + A + ' \x3d "' + encodeURIComponent(t()) + (l.domain != e.hostname ? '";document.domain\x3d"' + l.domain : "") + "\";\x3c/script\x3e\x3c/head\x3e\x3c/html\x3e');document.close();";
                7 > p ? g.src = a : g.contentWindow.location.replace(a)
            }, X = function() {
                if (E && -1 != W) {
                    var a, b = E.substr(W + 1).split("\x26");
                    for (i = 0; i < b.length; i++) a = b[i].split("\x3d"), /^(autoUpdate|crawlable|history|strict|wrap)$/.test(a[0]) && (d[a[0]] = isNaN(a[1]) ? /^(true|yes)$/i.test(a[1]) : 0 !== parseInt(a[1], 10)), /^(state|tracker)$/.test(a[0]) && (d[a[0]] = a[1]);
                    E = null
                }
                f = t()
            }, Z = function() {
                if (!Y) {
                    Y = n;
                    X();
                    var a = function() {
                        da.call(this);
                        ea.call(this)
                    }, b = c("body").ajaxComplete(a);
                    a();
                    d.wrap && (c("body \x3e *").wrapAll('\x3cdiv style\x3d"padding:' +
                        (w(b, "marginTop") + w(b, "paddingTop")) + "px " + (w(b, "marginRight") + w(b, "paddingRight")) + "px " + (w(b, "marginBottom") + w(b, "paddingBottom")) + "px " + (w(b, "marginLeft") + w(b, "paddingLeft")) + 'px;" /\x3e').parent().wrap('\x3cdiv id\x3d"' + A + '" style\x3d"height:100%;overflow:auto;position:relative;' + (F && !window.statusbar.visible ? "resize:both;" : "") + '" /\x3e'), c("html, body").css({
                        height: "100%",
                        margin: 0,
                        padding: 0,
                        overflow: "hidden"
                    }), F && c('\x3cstyle type\x3d"text/css" /\x3e').appendTo("head").text("#" + A + "::-webkit-resizer { background-color: #fff; }"));
                    x && 8 > p && (a = l.getElementsByTagName("frameset")[0], g = l.createElement((a ? "" : "i") + "frame"), a ? (a.insertAdjacentElement("beforeEnd", g), a[a.cols ? "cols" : "rows"] += ",0", g.noResize = n, g.frameBorder = g.frameSpacing = 0) : (g.style.display = "none", g.style.width = g.style.height = 0, g.tabIndex = -1, l.body.insertAdjacentElement("afterBegin", g)), s(function() {
                        c(g).bind("load", function() {
                            var a = g.contentWindow;
                            f = a[A] !== m ? a[A] : "";
                            f != t() && (C(k), e.hash = z(f, n))
                        });
                        g.contentWindow[A] === m && M()
                    }, 50));
                    s(function() {
                        u("init");
                        C(k)
                    }, 1);
                    q() ||
                        (x && 7 < p || !x && "on" + G in h ? h.addEventListener ? h.addEventListener(G, D, k) : h.attachEvent && h.attachEvent("on" + G, D) : fa(D, 50))
                }
            }, da = function() {
                var a, b = c("ul.tabs a"),
                    d = b.size(),
                    e = -1,
                    f = function() {
                        ++e != d && (a = c(b.get(e)), a.is('[rel*\x3d"address:"]') && a.address(), s(f, 1))
                    };
                s(f, 1)
            }, ga = function() {
                f != t() && (f = t(), C(k))
            }, ha = function() {
                h.removeEventListener ? h.removeEventListener(G, D, k) : h.detachEvent && h.detachEvent("on" + G, D)
            }, ea = function() {
                if (d.crawlable) {
                    var a = e.pathname.replace(/\/$/, ""); - 1 != c("body").html().indexOf("_escaped_fragment_") &&
                        c('a[href]:not([href^\x3dhttp]), a[href*\x3d"' + document.domain + '"]').each(function() {
                            var b = c(this).attr("href").replace(/^http:/, "").replace(RegExp(a + "/?$"), "");
                            ("" === b || -1 != b.indexOf("_escaped_fragment_")) && c(this).attr("href", "#" + b.replace(/\/(.*)\?_escaped_fragment_=(.*)$/, "!$2"))
                        })
                }
            }, m, A = "jQueryAddress",
            G = "hashchange",
            S = "change",
            T = "internalChange",
            U = "externalChange",
            n = !0,
            k = !1,
            d = {
                autoUpdate: n,
                crawlable: k,
                history: n,
                strict: n,
                wrap: k,
                tracker: null
            }, y = c.browser,
            p = parseFloat(c.browser.version),
            $ = y.mozilla,
            x = y.msie,
            aa = y.opera,
            F = y.webkit || y.safari,
            N = k,
            h = window,
            l = h.document,
            K = h.history,
            e = h.location,
            fa = setInterval,
            s = setTimeout,
            Q = /\/{2,9}/g,
            y = navigator.userAgent,
            g, E = R(document),
            W = E ? E.indexOf("?") : -1,
            O = l.title,
            I = k,
            Y = k,
            P = n,
            ba = n,
            J = k,
            f = t();
        if (x) {
            p = parseFloat(y.substr(y.indexOf("MSIE") + 4));
            l.documentMode && l.documentMode != p && (p = 8 != l.documentMode ? 7 : 8);
            var ca = l.onpropertychange;
            l.onpropertychange = function() {
                ca && ca.call(l);
                l.title != O && -1 != l.title.indexOf("#" + t()) && (l.title = O)
            }
        }
        if (N = $ && 1 <= p || x && 6 <= p || aa && 9.5 <= p ||
            F && 523 <= p) {
            aa && (history.navigationMode = "compatible");
            if ("complete" == document.readyState) var ia = setInterval(function() {
                c.address && (Z(), clearInterval(ia))
            }, 50);
            else X(), c(Z);
            c(window).bind("popstate", ga).bind("unload", ha)
        } else !N && "" !== B() ? e.replace(e.href.substr(0, e.href.indexOf("#"))) : V();
        return {
            bind: function(a, b, c) {
                return v(a, b, c)
            },
            init: function(a) {
                return v("init", a)
            },
            change: function(a) {
                return v(S, a)
            },
            internalChange: function(a) {
                return v(T, a)
            },
            externalChange: function(a) {
                return v(U, a)
            },
            baseURL: function() {
                var a =
                    e.href; - 1 != a.indexOf("#") && (a = a.substr(0, a.indexOf("#")));
                /\/$/.test(a) && (a = a.substr(0, a.length - 1));
                return a
            },
            autoUpdate: function(a) {
                return a !== m ? (d.autoUpdate = a, this) : d.autoUpdate
            },
            crawlable: function(a) {
                return a !== m ? (d.crawlable = a, this) : d.crawlable
            },
            history: function(a) {
                return a !== m ? (d.history = a, this) : d.history
            },
            state: function(a) {
                if (a !== m) {
                    d.state = a;
                    var b = r();
                    d.state !== m && (K.pushState ? "/#/" == b.substr(0, 3) && e.replace(d.state.replace(/^\/$/, "") + b.substr(2)) : "/" != b && b.replace(/^\/#/, "") != B() && s(function() {
                        e.replace(d.state.replace(/^\/$/,
                            "") + "/#" + b)
                    }, 1));
                    return this
                }
                return d.state
            },
            strict: function(a) {
                return a !== m ? (d.strict = a, this) : d.strict
            },
            tracker: function(a) {
                return a !== m ? (d.tracker = a, this) : d.tracker
            },
            wrap: function(a) {
                return a !== m ? (d.wrap = a, this) : d.wrap
            },
            update: function() {
                J = n;
                this.value(f);
                J = k;
                return this
            },
            title: function(a) {
                return a !== m ? (s(function() {
                    O = l.title = a;
                    ba && (g && g.contentWindow && g.contentWindow.document) && (g.contentWindow.document.title = a, ba = k);
                    !P && $ && e.replace(-1 != e.href.indexOf("#") ? e.href : e.href + "#");
                    P = k
                }, 50), this) : l.title
            },
            value: function(a) {
                if (a !== m) {
                    a = L(a);
                    "/" == a && (a = "");
                    if (f == a && !J) return;
                    P = n;
                    f = a;
                    if (d.autoUpdate || J)
                        if (C(n), q()) K[d.history ? "pushState" : "replaceState"]({}, "", d.state.replace(/\/$/, "") + ("" === f ? "/" : f));
                        else I = n, F ? d.history ? e.hash = "#" + z(f, n) : e.replace("#" + z(f, n)) : f != t() && (d.history ? e.hash = "#" + z(f, n) : e.replace("#" + z(f, n))), x && 8 > p && d.history && s(M, 50), F ? s(function() {
                            I = k
                        }, 1) : I = k;
                    return this
                }
                return !N ? null : L(f)
            },
            path: function(a) {
                if (a !== m) {
                    var b = this.queryString(),
                        c = this.hash();
                    this.value(a + (b ? "?" + b : "") + (c ? "#" +
                        c : ""));
                    return this
                }
                return L(f).split("#")[0].split("?")[0]
            },
            pathNames: function() {
                var a = this.path(),
                    b = a.replace(Q, "/").split("/");
                ("/" == a.substr(0, 1) || 0 === a.length) && b.splice(0, 1);
                "/" == a.substr(a.length - 1, 1) && b.splice(b.length - 1, 1);
                return b
            },
            queryString: function(a) {
                if (a !== m) {
                    var b = this.hash();
                    this.value(this.path() + (a ? "?" + a : "") + (b ? "#" + b : ""));
                    return this
                }
                a = f.split("?");
                return a.slice(1, a.length).join("?").split("#")[0]
            },
            parameter: function(a, b, d) {
                var e, f;
                if (b !== m) {
                    var h = this.parameterNames();
                    f = [];
                    b =
                        b ? b.toString() : "";
                    for (e = 0; e < h.length; e++) {
                        var k = h[e],
                            g = this.parameter(k);
                        "string" == typeof g && (g = [g]);
                        k == a && (g = null === b || "" === b ? [] : d ? g.concat([b]) : [b]);
                        for (var l = 0; l < g.length; l++) f.push(k + "\x3d" + g[l])
                    } - 1 == c.inArray(a, h) && (null !== b && "" !== b) && f.push(a + "\x3d" + b);
                    this.queryString(f.join("\x26"));
                    return this
                }
                if (b = this.queryString()) {
                    d = [];
                    f = b.split("\x26");
                    for (e = 0; e < f.length; e++) b = f[e].split("\x3d"), b[0] == a && d.push(b.slice(1).join("\x3d"));
                    if (0 !== d.length) return 1 != d.length ? d : d[0]
                }
            },
            parameterNames: function() {
                var a =
                    this.queryString(),
                    b = [];
                if (a && -1 != a.indexOf("\x3d"))
                    for (var a = a.split("\x26"), d = 0; d < a.length; d++) {
                        var e = a[d].split("\x3d")[0]; - 1 == c.inArray(e, b) && b.push(e)
                    }
                return b
            },
            hash: function(a) {
                if (a !== m) return this.value(f.split("#")[0] + (a ? "#" + a : "")), this;
                a = f.split("#");
                return a.slice(1, a.length).join("#")
            }
        }
    }();
    c.fn.address = function(u) {
        if (!c(this).attr("address")) {
            var v = function(q) {
                if (q.shiftKey || q.ctrlKey || q.metaKey) return !0;
                if (c(this).is("a")) {
                    var r = u ? u.call(this) : /address:/.test(c(this).attr("rel")) ? c(this).attr("rel").split("address:")[1].split(" ")[0] :
                        void 0 !== c.address.state() && "/" != c.address.state() ? c(this).attr("href").replace(RegExp("^(.*" + c.address.state() + "|\\.)"), "") : c(this).attr("href").replace(/^(#\!?|\.)/, "");
                    c.address.value(r);
                    q.preventDefault()
                }
            };
            c(this).click(v).live("click", v).live("submit", function(q) {
                if (c(this).is("form")) {
                    var r = c(this).attr("action"),
                        r = u ? u.call(this) : (-1 != r.indexOf("?") ? r.replace(/&$/, "") : r + "?") + c(this).serialize();
                    c.address.value(r);
                    q.preventDefault()
                }
            }).attr("address", !0)
        }
        return this
    }
})(jQuery);
(function(e) {
    function v(b, a, c) {
        this.dec = b;
        this.group = a;
        this.neg = c
    }

    function s(b) {
        if (0 == p.size())
            for (var a = 0; a < u.length; a++) {
                localeGroup = u[a];
                for (var c = 0; c < localeGroup.length; c++) p.put(localeGroup[c], a)
            }
        a = ".";
        c = ",";
        if (b = p.get(b))
            if (b = w[b]) a = b[0], c = b[1];
        return new v(a, c, "-")
    }
    var p = new Hashtable,
        w = [
            [".", ","],
            [",", "."],
            [",", " "],
            [".", "'"]
        ],
        u = ["ae au ca cn eg gb hk il in jp sk th tw us".split(" "), "at br de dk es gr it nl pt tr vn".split(" "), "cz fi fr ru se pl".split(" "), ["ch"]];
    e.fn.formatNumber = function(b,
        a, c) {
        return this.each(function() {
            null == a && (a = !0);
            null == c && (c = !0);
            var d;
            d = e(this).is(":input") ? new String(e(this).val()) : new String(e(this).text());
            d = e.formatNumber(d, b);
            a && (e(this).is(":input") ? e(this).val(d) : e(this).text(d));
            if (c) return d
        })
    };
    e.formatNumber = function(b, a) {
        a = e.extend({}, e.fn.formatNumber.defaults, a);
        s(a.locale.toLowerCase());
        for (var c = "", d = !1, f = 0; f < a.format.length; f++)
            if (-1 == "0#-,.".indexOf(a.format.charAt(f))) c += a.format.charAt(f);
            else if (0 == f && "-" == a.format.charAt(f)) d = !0;
        else break;
        for (var n = "", f = a.format.length - 1; 0 <= f; f--)
            if (-1 == "0#-,.".indexOf(a.format.charAt(f))) n = a.format.charAt(f) + n;
            else break;
        a.format = a.format.substring(c.length);
        a.format = a.format.substring(0, a.format.length - n.length);
        f = new Number(b);
        return e._formatNumber(f, a, n, c, d)
    };
    e._formatNumber = function(b, a, c, d, f) {
        a = e.extend({}, e.fn.formatNumber.defaults, a);
        var n = s(a.locale.toLowerCase()),
            p = n.dec,
            q = n.group,
            n = n.neg,
            r = !1;
        if (isNaN(b))
            if (!0 == a.nanForceZero) b = 0, r = !0;
            else return null;
            "%" == c && (b *= 100);
        var l = "";
        if (-1 < a.format.indexOf(".")) {
            var h =
                p,
                k = a.format.substring(a.format.lastIndexOf(".") + 1);
            !0 == a.round ? b = new Number(b.toFixed(k.length)) : (b = b.toString(), b = b.substring(0, b.lastIndexOf(".") + k.length + 1), b = new Number(b));
            for (var m = new String((b % 1).toFixed(k.length)), m = m.substring(m.lastIndexOf(".") + 1), g = 0; g < k.length; g++)
                if ("#" == k.charAt(g) && "0" != m.charAt(g)) h += m.charAt(g);
                else if ("#" == k.charAt(g) && "0" == m.charAt(g))
                if (m.substring(g).match("[1-9]")) h += m.charAt(g);
                else break;
                else "0" == k.charAt(g) && (h += m.charAt(g));
            l += h
        } else b = Math.round(b);
        g =
            Math.floor(b);
        0 > b && (g = Math.ceil(b));
        h = "";
        h = -1 == a.format.indexOf(".") ? a.format : a.format.substring(0, a.format.indexOf("."));
        k = "";
        if (!(0 == g && "#" == h.substr(h.length - 1)) || r) {
            r = new String(Math.abs(g));
            m = 9999; - 1 != h.lastIndexOf(",") && (m = h.length - h.lastIndexOf(",") - 1);
            for (var t = 0, g = r.length - 1; - 1 < g; g--) k = r.charAt(g) + k, t++, t == m && 0 != g && (k = q + k, t = 0);
            if (h.length > k.length && (q = h.indexOf("0"), -1 != q))
                for (q = h.length - q; k.length < q;) k = "0" + k
        }!k && -1 !== h.indexOf("0", h.length - 1) && (k = "0");
        l = k + l;
        0 > b && f && 0 < d.length ? d = n + d : 0 > b &&
            (l = n + l);
        a.decimalSeparatorAlwaysShown || l.lastIndexOf(p) == l.length - 1 && (l = l.substring(0, l.length - 1));
        return d + l + c
    };
    e.fn.parseNumber = function(b, a, c) {
        null == a && (a = !0);
        null == c && (c = !0);
        var d;
        d = e(this).is(":input") ? new String(e(this).val()) : new String(e(this).text());
        if (b = e.parseNumber(d, b))
            if (a && (e(this).is(":input") ? e(this).val(b.toString()) : e(this).text(b.toString())), c) return b
    };
    e.parseNumber = function(b, a) {
        a = e.extend({}, e.fn.parseNumber.defaults, a);
        for (var c = s(a.locale.toLowerCase()), d = c.dec, f = c.group,
                c = c.neg; - 1 < b.indexOf(f);) b = b.replace(f, "");
        b = b.replace(d, ".").replace(c, "-");
        d = "";
        f = !1;
        "%" == b.charAt(b.length - 1) && (f = !0);
        for (c = 0; c < b.length; c++) - 1 < "1234567890.-".indexOf(b.charAt(c)) && (d += b.charAt(c));
        c = new Number(d);
        f && (c = (c / 100).toFixed(d.length - 1));
        return c
    };
    e.fn.parseNumber.defaults = {
        locale: "us",
        decimalSeparatorAlwaysShown: !1
    };
    e.fn.formatNumber.defaults = {
        format: "#,###.00",
        locale: "us",
        decimalSeparatorAlwaysShown: !1,
        nanForceZero: !0,
        round: !0
    };
    Number.prototype.toFixed = function(b) {
        return $._roundNumber(this,
            b)
    };
    e._roundNumber = function(b, a) {
        var c = Math.pow(10, a || 0),
            c = String(Math.round(b * c) / c);
        if (0 < a) {
            var d = c.indexOf("."); - 1 == d ? (c += ".", d = 0) : d = c.length - (d + 1);
            for (; d < a;) c += "0", d++
        }
        return c
    }
})(jQuery);
motif = window.motif || {};
(function(b, g) {
    g.shared = g.shared || {};
    g.shared.init = function() {
        this.setupForms()
    };
    g.shared.setupForms = function(a) {
        g.vars && g.vars.nonce && (a = a || document, b("form:not([action^\x3d'http'])", a).each(function() {
            var a = b("\x3cinput type\x3d'hidden' name\x3d'Nonce' value\x3d'" + g.vars.nonce + "' /\x3e"),
                e = b("\x3cinput type\x3d'hidden' name\x3d'Page' value\x3d'" + g.vars.page + "' /\x3e");
            0 == b(this).find("input[name\x3dNonce], input[name\x3dPage]").length && (b(this).append(a), b(this).append(e))
        }));
        b(document).off("click",
            ".logoutLink").on("click", ".logoutLink", function(a) {
            a.preventDefault();
            b("#logoutForm").submit()
        })
    };
    g.shared.init();
    b.is = function(a, c) {
        var b = Object.prototype.toString.call(c).slice(8, -1);
        return void 0 !== c && null !== c && b === a
    };
    b.escapeHTML = function(a) {
        return null == a || void 0 == a ? a : a.replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/'/g, "\x26#39;").replace(/"/, "\x26quot;")
    };
    b.unescapeHTML = function(a) {
        return null == a || void 0 == a ? a : a.replace(/&amp;/g, "\x26").replace(/&lt;/g, "\x3c").replace(/&gt;/g,
            "\x3e").replace(/&#39;/g, "'").replace(/&quot;/, '"')
    };
    b.getMaxZIndex = function() {
        return Math.max.apply(null, b.map(b("body \x3e *"), function(a, c) {
            if ("static" != b(a).css("position")) return parseInt(b(a).css("z-index")) || 1
        }))
    };
    b.getCustomHeaders = function(a, c, b) {
        a = a || window;
        if (a.motif.vars.nonce && a.motif.vars.page) {
            var d = a.motif.vars.nonce,
                f = a.motif.vars.page;
            b && a.motif.vars.parentNonce && (d = a.motif.vars.parentNonce);
            return c ? {
                Nonce: d,
                Page: f
            } : {
                "X-Motif-Nonce": d,
                "X-Motif-Page": f
            }
        }
        return {}
    };
    b.isCrossAppRequest =
        function(a) {
            0 == a.indexOf("/") && (a = a.substring(1));
            return 0 != a.indexOf("trader") && 0 == window.location.pathname.indexOf("/trader") ? !0 : !1
    };
    b.mAjax = function() {
        var a = Array.prototype.slice.call(arguments);
        1 == a.length && b.is("String", a[0]) && a.push({});
        var c = a.length - 1;
        a[c].headers = b.getCustomHeaders(a[c].varSource, b.isCrossAppRequest(a[c].url));
        a[c].cache = !1;
        a[c].error || (a[c].error = function(a, c, f) {
            0 != a.status && (401 == a.status ? window.location.reload() : b.genericError())
        });
        return b.ajax.apply(void 0, a)
    };
    b.mRequest =
        function(a, c, e) {
            a = a || "POST";
            var d = b('\x3cform class\x3d"hidden" action\x3d"' + c + '" method\x3d"' + a + '" /\x3e');
            a && "post" === a.toLowerCase() && (e = b.extend(e, b.getCustomHeaders(window, !0, b.isCrossAppRequest(c))));
            for (var f in e) e.hasOwnProperty(f) && e[f] && ("string" == typeof e[f] && (e[f] = e[f].replace(/'/g, '"')), d.append("\x3cinput type\x3d'hidden' name\x3d'" + f + "' value\x3d'" + e[f] + "' /\x3e"));
            b("body").append(d);
            d.submit()
    };
    b.mDialog = function(a) {
        b.colorbox(a)
    };
    b.mDialog.close = function() {
        b.colorbox.close()
    };
    b.getScrollBarWidth =
        function() {
            var a = b('\x3cdiv style\x3d"width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"\x3e\x3cdiv style\x3d"height:100px;"\x3e\x3c/div\x3e');
            b("body").append(a);
            var c = b("div", a).innerWidth();
            a.css("overflow-y", "scroll");
            var e = b("div", a).innerWidth();
            b(a).remove();
            return c - e
    };
    b.genericError = function(a, c) {
        if (!a || 0 == a.length) a = "Communication Error";
        if (!c || 0 == c.length) c = "There was an error communicating with the server. Please try again later, or contact Customer Service:";
        b.colorbox({
            width: 550,
            transition: "none",
            html: '\x3cdiv id\x3d"timeoutInterstitial" class\x3d"genericInterstitial"\x3e\x3ch2\x3e' + a + '\x3c/h2\x3e\x3cdiv class\x3d"message"\x3e\x3cdiv class\x3d"warning"\x3e\x3c/div\x3e' + c + '\x3c/div\x3e\x3cdiv class\x3d"action"\x3e\x3cdiv class\x3d"phoneMessage"\x3e\x3cdiv\x3e\x3c/div\x3e' + g.vars.customerServicePhone + '\x3c/div\x3e\x3cdiv class\x3d"emailMessage"\x3e\x3cdiv\x3e\x3c/div\x3e' + g.vars.customerServiceEmailAddress + '\x3c/div\x3e\x3cdiv class\x3d"plain"\x3e\x3cdiv\x3e\x3c/div\x3e' +
                g.vars.customerServiceHours + ", Monday-Friday\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
        })
    };
    b.url = function(a) {
        return g.vars.rootURL + a
    };
    b.traderUrl = function(a) {
        return g.vars.advisorTradingURL ? g.vars.advisorTradingURL + a : b.url(a)
    };
    b.agent = function() {
        if (b._agent) return b._agent;
        var a = navigator.userAgent,
            c = null,
            c = a.match(/(Firefox|Chrome)\/(\d+)/),
            e = a.match(/(Version)\/(\d+).*Safari/),
            d = a.match(/(MSIE) (\d+)/),
            f = a.match(/Trident\/.*rv:(\d+)/),
            g = a.match(/Opera.*Version\/(\d+)/),
            h = a.match(/(CriOS)\/(\d+)/),
            c = c ? {
                brand: c[1],
                version: parseInt(c[2]),
                engine: "Firefox" == c[1] ? "Gecko" : "Webkit"
            } : e ? {
                brand: "Safari",
                version: parseInt(e[2]),
                engine: "Webkit"
            } : d ? {
                brand: "IE",
                version: parseInt(d[2]),
                engine: "Trident"
            } : f ? {
                brand: "IE",
                version: parseInt(f[1]),
                engine: "Trident"
            } : g ? {
                brand: "Opera",
                version: parseInt(g[1]),
                engine: -1 < a.indexOf("Webkit") ? "Webkit" : "Presto"
            } : h ? {
                brand: "Chrome",
                version: parseInt(h[2]),
                engine: "Webkit"
            } : {
                brand: "Unknown",
                version: "Unknown",
                engine: "Unknown"
            };
        c.mobile = a.match(/Mobile|Phone/);
        c.mobile && (a.match(/iPad/) ?
            c.ipad = !0 : a.match(/iPhone/) && (c.iphone = !0));
        c.touch = "ontouchstart" in window || 0 < navigator.msMaxTouchPoints;
        a.match(/Macintosh/) ? (c.mac = !0, c.os = "Mac") : a.match(/Windows/) ? (c.win = !0, c.os = "Win") : a.match(/Linux|BSD/) ? (c.unixLike = !0, c.os = "unixLike") : a.match(/like Mac OS X/) ? c.os = "IOS" : c.os = "Unknown";
        return b._agent = c
    };
    b.isInViewport = function(a, c) {
        var e = b(window).scrollTop(),
            d = e + b(window).height(),
            f = b(a).offset().top,
            g = f + b(a).height();
        return c ? g <= d && f >= e : f >= e && f <= d || g >= e && g <= d
    };
    b.roundFloat = function(a, c) {
        var b =
            Math.pow(10, c);
        return Math.round(a * b) / b
    };
    b.formatFloat = function(a, c) {
        return b.formatNumber(b.roundFloat(a, c), {
            format: "#,##0" + ["", ".0", ".00"][c],
            locale: "us"
        })
    };
    b.formatShareCount = function(a) {
        return b.formatNumber(a, {
            format: "#,##0.00######",
            locale: "us"
        })
    };
    b.formatPhone = function(a) {
        return "(" + a.substring(0, 3) + ") " + a.substring(3, 6) + "-" + a.substring(6, 10)
    };
    b.parseFloat = function(a) {
        return b.parseNumber(a, {
            format: "#,###.##",
            locale: "us"
        })
    };
    b.percentage = function(a, c, e) {
        a = b.roundFloat(a, c);
        return e && !isNaN(e) &&
            e > a ? e + "%" : a ? a.toFixed(c) + "%" : "--"
    };
    b.percentageWithoutNegative = function(a, c) {
        c || (c = 1);
        return isNaN(parseFloat(a)) ? "--" : b.formatFloat(Math.abs(a), c) + "%"
    };
    b.marketCap = function(a) {
        a = parseInt(a);
        return isNaN(a) || 0 == a ? "--" : 1E9 < a ? (a = Math.round(a / 1E8) / 10, a.toFixed(1) + "B") : 1E6 < a ? (a = Math.round(a / 1E5) / 10, a.toFixed(1) + "M") : a
    };
    b.formatMoney = function(a) {
        return b.isNumeric(a) ? 0 == a ? "$0.00" : (0 > a ? "-" : "") + b.formatNumber(Math.abs(a), {
            format: "$#,##0.00",
            locale: "us"
        }) : "--"
    };
    b.formatMoneyNoDollarSign = function(a) {
        return b.isNumeric(a) ?
            0 == a ? "0.00" : (0 > a ? "-" : "") + b.formatNumber(Math.abs(a), {
                format: "#,##0.00",
                locale: "us"
            }) : "--"
    };
    b.formatMoneyExact = function(a) {
        return b.isNumeric(a) ? 0 == a ? "$0.00" : (0 > a ? "-" : "") + b.formatNumber(Math.abs(b.roundFloat(a, 5)), {
            format: "$#,##0.00###",
            locale: "us"
        }) : "--"
    };
    b.floatToFixed = function(a, c) {
        return isNaN(parseFloat(a)) ? "--" : parseFloat(a).toFixed(c)
    };
    b.formatPercentageChange = function(a) {
        if (isNaN(parseFloat(a))) return "--";
        var c = parseFloat(a);
        return 0 < c ? '\x3cspan class\x3d"up"\x3e(+' + b.percentage(b.roundFloat(a,
            1)) + ")\x3c/span\x3e" : 0 > c ? '\x3cspan class\x3d"down"\x3e(' + b.percentage(b.roundFloat(a, 1)) + ")\x3c/span\x3e" : '\x3cspan class\x3d"noChange"\x3e(' + b.percentage(b.roundFloat(a, 1)) + ")\x3c/span\x3e"
    };
    b.formatPercentageChangeWithArrows = function(a, c) {
        c = c || {};
        var e = ["percentageArrow"];
        c.large && e.push("large");
        c.paren && e.push("paren");
        c.dp || (c.dp = 1);
        if (isNaN(parseFloat(a))) return '\x3cspan class\x3d"noChange ' + e.join(" ") + '"\x3e\x3cspan\x3e--\x3c/span\x3e\x3c/span\x3e';
        var d = c.x100 ? 100 * parseFloat(a) : parseFloat(a);
        0 < d ? e.push("up") : 0 > d ? e.push("down") : e.push("noChange");
        return '\x3cspan class\x3d"' + e.join(" ") + '"\x3e\x3cspan\x3e' + b.percentageWithoutNegative(d, c.dp) + "\x3c/span\x3e\x3c/span\x3e"
    };
    b.formatPercentageChangeWithArrowsAndParens = function(a, c) {
        c = c || {};
        var e = ["percentageArrow"];
        if (isNaN(parseFloat(a))) return "--";
        var d = parseFloat(a);
        c.large && e.push("large");
        return 0 < d ? '\x3cspan class\x3d"up ' + e.join(" ") + '"\x3e(\x3cspan\x3e' + b.percentageWithoutNegative(d, 2) + "\x3c/span\x3e)\x3c/span\x3e" : 0 > d ? '\x3cspan class\x3d"down ' +
            e.join(" ") + '"\x3e(\x3cspan\x3e' + b.percentageWithoutNegative(d, 2) + "\x3c/span\x3e)\x3c/span\x3e" : '\x3cspan class\x3d"noChange ' + e.join(" ") + '"\x3e(\x3cspan\x3e' + b.percentageWithoutNegative(d, 2) + "\x3c/span\x3e)\x3c/span\x3e"
    };
    b.formatValueAndPercentageChangeWithArrowsAndParens = function(a, c, e) {
        e = e || {};
        var d = ["percentageArrow"];
        if (isNaN(parseFloat(c))) return "--";
        c = parseFloat(c);
        e.large && d.push("large");
        return 0 < c ? '\x3cspan class\x3d"up ' + d.join(" ") + '"\x3e +' + b.formatFloat(a, 2) + " (\x3cspan\x3e" + b.percentageWithoutNegative(c,
            2) + "\x3c/span\x3e)\x3c/span\x3e" : 0 > c ? '\x3cspan class\x3d"down ' + d.join(" ") + '"\x3e ' + b.formatFloat(a, 2) + " (\x3cspan\x3e" + b.percentageWithoutNegative(c, 2) + "\x3c/span\x3e)\x3c/span\x3e" : '\x3cspan class\x3d"noChange ' + d.join(" ") + '"\x3e ' + b.formatFloat(a, 2) + " (\x3cspan\x3e" + b.percentageWithoutNegative(c, 2) + "\x3c/span\x3e)\x3c/span\x3e"
    };
    b.floorFloat = function(a, c) {
        if (isNaN(parseFloat(a))) return "--";
        a = parseFloat(a);
        parseInt(c) || (c = 0);
        return Math.floor(a * Math.pow(10, c)) / Math.pow(10, c)
    };
    b.parseMoney = function(a) {
        return b.parseNumber(a, {
            format: "$#,###.##",
            locale: "us"
        })
    };
    b.formatInputEnry = function(a) {
        return parseFloat(a) ? this.roundFloat(a, 1) : 0
    };
    b.formatWeightInputEntry = function(a) {
        if (Infinity == a) return "0";
        a = b.roundFloat(parseFloat(a), 1).toFixed(1);
        return 100 < a ? 100 : 0 >= a ? "0" : a ? a : "0"
    };
    b.formatPercentage = function(a, c) {
        if (isNaN(parseFloat(a))) return "--";
        parseFloat(a);
        c = c || 1;
        var e = b.roundFloat(parseFloat(a), c).toFixed(c);
        return e + "%"
    };
    var k = {
        2005: [(new Date("3 April 2005 3:00 AM EDT")).getTime(), (new Date("30 October 2005 1:00 AM EST")).getTime()],
        2006: [(new Date("2 April 2006 3:00 AM EDT")).getTime(), (new Date("29 October 2006 1:00 AM EST")).getTime()],
        2007: [(new Date("11 March 2007 3:00 AM EDT")).getTime(), (new Date("4 November 2007 1:00 AM EST")).getTime()],
        2008: [(new Date("9 March 2008 3:00 AM EDT")).getTime(), (new Date("2 November 2008 1:00 AM EST")).getTime()],
        2009: [(new Date("8 March 2009 3:00 AM EDT")).getTime(), (new Date("1 November 2009 1:00 AM EST")).getTime()],
        2010: [(new Date("14 March 2010 3:00 AM EDT")).getTime(), (new Date("7 November 2010 1:00 AM EST")).getTime()],
        2011: [(new Date("13 March 2011 3:00 AM EDT")).getTime(), (new Date("6 November 2011 1:00 AM EST")).getTime()],
        2012: [(new Date("11 March 2012 3:00 AM EDT")).getTime(), (new Date("4 November 2012 1:00 AM EST")).getTime()],
        2013: [(new Date("10 March 2013 3:00 AM EDT")).getTime(), (new Date("3 November 2013 1:00 AM EST")).getTime()],
        2014: [(new Date("9 March 2014 3:00 AM EDT")).getTime(), (new Date("2 November 2014 1:00 AM EST")).getTime()],
        2015: [(new Date("8 March 2015 3:00 AM EDT")).getTime(), (new Date("1 November 2015 1:00 AM EST")).getTime()]
    };
    b.isNYInDST = function(a) {
        return k[a.getFullYear()] ? a.getTime() > k[a.getFullYear()][0] && a.getTime() < k[a.getFullYear()][1] : !1
    };
    b.formatDate = function(a, c) {
        if (!a) return "--";
        b.isNumeric(a) && (a = new Date(a));
        a.setTimezoneOffset(b.isNYInDST(a) ? -240 : -300);
        return a.toString(c)
    };
    b.formatTimeSince = function(a) {
        if (null == a) return "";
        a = (new Date(parseInt(g.vars.now))).getTime() - a.getTime();
        if (6E4 > a) return a = Math.floor(a / 1E3), 1 < a ? a + " seconds" : "1 second";
        if (36E5 > a) return a = Math.floor(a / 6E4), 1 < a ? a + " minutes" : "1 minute";
        if (1728E5 > a) return a = Math.floor(a / 36E5), 1 < a ? a + " hours" : "1 hour";
        if (5184E6 > a) return a = Math.floor(a / 864E5), 1 < a ? a + " days" : "1 day";
        if (63072E6 > a) return a = Math.floor(a / 2592E6), 1 < a ? a + " months" : "1 month";
        a = Math.floor(a / 31536E6);
        return 1 < a ? a + " years" : "1 year"
    };
    b.formatFootnotes = function(a) {
        return a.replace(/\[(\d+)\]/g, "\x3csup\x3e$1\x3c/sup\x3e")
    };
    b.randomString = function() {
        for (var a = "", c = 0; 8 > c; c++) var b = Math.floor(61 * Math.random()),
        a = a + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".substring(b,
            b + 1);
        return a
    };
    b.getQueryParamByName = function(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        a = RegExp("[\\?\x26]" + a + "\x3d([^\x26#]*)").exec(window.location.href);
        return null == a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
    };
    b.getQueryParams = function() {
        var a = {};
        _(location.search.substr(1).split(/&/)).each(function(c) {
            c = c.split(/=/);
            a[c[0]] = c[1]
        });
        return a
    };
    b.addQueryParam = function(a, c, b) {
        var d = a.indexOf("?");
        return -1 == d ? a + "?" + c + "\x3d" + b : a.substr(0, d + 1) + c + "\x3d" + b + "\x26" + a.substr(d + 1)
    };
    b.getCookiePref =
        function(a, c) {
            var e = b.cookie("prefs"),
                d = {};
            return null != e && "" != e ? (d = b.parseJSON(e), d[a + c]) : null
    };
    b.setCookiePref = function(a, c, e) {
        var d = {};
        d[c] = e;
        b.setCookiePrefs(a, d)
    };
    b.setCookiePrefs = function(a, c) {
        var e = b.cookie("prefs"),
            d = {};
        null != e && (d = b.parseJSON(e));
        null == d && (d = {});
        for (var f in c) d[a + f] = c[f];
        b.cookie("prefs", JSON.stringify(d), {
            domain: g.vars.cookieDomain,
            path: "/",
            expires: 15341
        })
    };
    b.getPref = function(a, c) {
        return g.vars.prefs && g.vars.prefs[a] && g.vars.prefs[a][c] ? g.vars.prefs[a][c] : b.getCookiePref(a,
            c)
    };
    b.setPref = function(a, c, e) {
        var d = {};
        d[c] = e;
        b.setPrefs(a, d)
    };
    b.setPrefs = function(a, c) {
        var e = {
            c: "catalog"
        };
        if (g.vars.prefs) {
            g.vars.prefs[a] || (g.vars.prefs[a] = {});
            for (var d in c) g.vars.prefs[a][d] = c[d];
            e = e[a];
            b.mAjax({
                url: b.url("/user/set-property"),
                type: "POST",
                data: {
                    key: e + "_preferences",
                    value: JSON.stringify(g.vars.prefs[a])
                },
                success: function(a) {}
            })
        }
        b.setCookiePrefs(a, c)
    };
    b.setupMotifErrorObject = function(a, c) {
        g.error = {
            msg: a.message,
            file: a.fileName,
            line: a.lineNumber,
            col: a.columnNumber,
            func: c,
            stackTrace: a.stack
        }
    };
    b.setupClientErrorHandlingForObject = function(a, c) {
        c || (c = /^(?!setupClientErrorHandling)/);
        b.aop.afterThrow({
            target: a,
            method: c
        }, function(a, c) {
            b.setupMotifErrorObject(a, c);
            throw a;
        });
        for (var e in a) b.is("Object", a[e]) && !a[e].uniqueId && (a[e].uniqueId = _.uniqueId(), b.setupClientErrorHandlingForObject(a[e]), delete a[e].uniqueId)
    };
    b.sendClientLog = function(a, c, e, d) {
        if (g.vars.logJsErrors) {
            var f = g.error || {};
            f.logLevel = a;
            c && c != f.msg && (f.msg = c + ": " + f.msg);
            f.msg || (f.msg = "");
            e && (f.file = e);
            f.file || (f.file = "");
            d &&
                (f.line = d);
            f.line || (f.line = 0);
            f.col || (f.col = 0);
            f.func || (f.func = "unknown");
            f.url = window.location.href;
            b.mAjax({
                type: "POST",
                url: b.url("/js-error"),
                timeout: 3E4,
                dataType: "json",
                data: f,
                error: function(a, c, b) {
                    console.log("error logging js: " + b)
                }
            });
            g.error = {}
        }
    };
    b.setupClientErrorHandling = function() {
        g.vars.logJsErrors && (b.setupClientErrorHandlingForObject(g), window.onerror = function(a, c, e) {
            b.sendClientLog("error", a, c, e)
        })
    };
    b.sanitizeDataValue = function(a) {
        return a.replace(/'/g, "").replace(/"/g, "")
    };
    b.addMustacheModelFunctions =
        function(a) {
            b.extend(a, g.vars);
            a.getCatalogPrefDisplayValue = function() {
                return function(a, b) {
                    var d = "No";
                    "SHOW_IN_CATALOG" == b(a) && (d = "Yes");
                    return d
                }
            };
            a.getSupportCatalogPrefDisplayValue = function() {
                return function(a, b) {
                    var d = "No\x3c/b\x3e",
                        f = b(a);
                    "SHOW_IN_CATALOG" == f ? d = "Yes" : "BLOCKED" == f && (d = "Blocked");
                    return d
                }
            };
            a.formatUSD = function() {
                return function(a, e) {
                    return b.formatMoney(e(a))
                }
            };
            a.formatUSDExact = function() {
                return function(a, e) {
                    return b.formatMoneyExact(e(a))
                }
            };
            a.formatPhone = function() {
                return function(a,
                    e) {
                    return b.formatPhone(e(a))
                }
            };
            a.formatNumber = function() {
                return function(a, e) {
                    var d = a.split(/,/);
                    return b.formatFloat(e(d[0]), d[1], d[2])
                }
            };
            a.formatIndexValue = function() {
                return function(a, e) {
                    return b.formatFloat(e(a), 0, 0).replace(/,/g, "")
                }
            };
            a.formatShareCount = function() {
                return function(a, e) {
                    var d = Number(e(a));
                    return 0 <= d ? b.formatShareCount(d) : "(" + b.formatShareCount(Math.abs(d)) + ")"
                }
            };
            a.formatDateMMDDYYYY = function() {
                return function(a, e) {
                    return b.formatDate(new Date(parseInt(e(a))), "MM/dd/yyyy")
                }
            };
            a.formatDateMMMDDYYYY = function() {
                return function(a, e) {
                    return b.formatDate(new Date(parseInt(e(a))), "MMM d, yyyy")
                }
            };
            a.formatDateMMMMDDYYYY = function() {
                return function(a, e) {
                    return b.formatDate(new Date(parseInt(e(a))), "MMMM d, yyyy")
                }
            };
            a.formatTime = function() {
                return function(a, e) {
                    return b.formatDate(new Date(parseInt(e(a))), "h:mm tt")
                }
            };
            a.formatTimeHMMSS = function() {
                return function(a, e) {
                    return b.formatDate(new Date(parseInt(e(a))), "h:mm:ss tt")
                }
            };
            a.formatTimeSince = function() {
                return function(a, e) {
                    return b.formatTimeSince(new Date(parseInt(e(a))))
                }
            };
            a.size = function() {
                return function(a, b) {
                    var d = a.replace(/[{}]/g, "");
                    return b("{{#" + d + "}}1{{/" + d + "}}").length
                }
            };
            a.firstWord = function() {
                return function(a, b) {
                    return b(a).replace(/\s.*$/, "")
                }
            };
            a.cap = function() {
                return function(a, b) {
                    var d = b(a).toLowerCase().split(/[\s_]|<br>/),
                        d = _(d).map(function(a) {
                            return a.substr(0, 1).toUpperCase() + a.substr(1)
                        });
                    return d.join(" ")
                }
            };
            a.under2space = function() {
                return function(a, b) {
                    return b(a).replace(/_/g, " ")
                }
            };
            a.br = function() {
                return function(a, b) {
                    return b(a).replace(/[_\s]/g,
                        "\x3cbr\x3e")
                }
            };
            a.tradeDurationDisplay = function() {
                return function(a, b) {
                    switch (b(a)) {
                        case "GOOD_FOR_DAY":
                            return "Day";
                        case "GOOD_TILL_CANCELLED":
                            return "Good Until Cancel";
                        case "FILL_OR_KILL":
                            return "Fill or Kill";
                        case "GOOD_FOR_60_DAYS":
                            return "Good for 60 Days"
                    }
                }
            };
            a.renderIfOr = function() {
                return function(a, b) {
                    var d = a.charAt(0),
                        d = a.split(d);
                    return b(d[1]).replace("false", "") || b(d[2]).replace("false", "") ? b(d[3]) : ""
                }
            };
            a.math = function() {
                return function(a, b) {
                    var d = b(a),
                        d = d.replace(/[^0-9.*\/+()-]/, "");
                    try {
                        var f =
                            eval(d)
                    } catch (g) {
                        return "--"
                    }
                    return f
                }
            };
            a.floor = function() {
                return function(a, b) {
                    return Math.floor(Number(b(a)))
                }
            };
            a.ceil = function() {
                return function(a, b) {
                    return Math.ceil(Number(b(a)))
                }
            };
            a.lowercase = function() {
                return function(a, b) {
                    return b(a).toLowerCase()
                }
            };
            a.renderIfEquals = function() {
                return function(a, b) {
                    var d = a.charAt(0),
                        d = a.split(d);
                    return b(d[1]) == b(d[2]) ? b(d[3]) : 4 < d.length ? b(d[4]) : ""
                }
            };
            a.renderIfEquals2 = a.renderIfEquals;
            a.dedupe = function() {
                return function(a, b) {
                    var d = a.split(",");
                    a = d[0];
                    var d =
                        d[1],
                        f = b(a).split(/|/);
                    return _(f).uniq().join(d)
                }
            };
            a.formatPercentChangeLarge = function() {
                return function(a, e) {
                    return b.formatPercentageChangeWithArrows(e(a), {
                        large: !0
                    })
                }
            };
            a.formatPercentChangeParensLarge = function() {
                return function(a, e) {
                    return b.formatPercentageChangeWithArrows(e(a), {
                        large: !0,
                        paren: !0
                    })
                }
            }
    };
    b.setupRibbonIconOverlay = function(a) {
        a = a || b("body");
        b("img.customBadge, img.builtBadge", a).each(function() {
            for (var a = b(this), e = b(this).attr("class").split(" "), d = 100, f = 100, l = "custom", h = 0; h < e.length; h++) 0 ==
                e[h].indexOf("x") && (d = parseInt(e[h].substr(1)), a.css({
                    width: d,
                    height: d
                }));
            100 < d && (f = 500);
            a.hasClass("builtBadge") && (l = "built");
            a.attr("src", g.vars.staticBasePath + "/images/" + g.vars.buildVersion + "/bootstrap/" + l + "_badge" + f + ".png")
        })
    };
    b.binarySearchForIndex = function(a, b, e) {
        for (var d = 0, f = e.length, g = f - d + 1; 0 < g;) {
            var g = d + Math.floor(g / 2),
                h = b(e[g]);
            if (h == a) return g;
            h > a ? f = g - 1 : d = g + 1;
            g = f - d + 1
        }
        return -1
    }
})(jQuery, motif);
$(document).on("mouseenter", "#mainMenu \x3e li, li#welcome.hasSubmenu", function() {
    $(this).addClass("hovered");
    $(this).find("ul").slideDown(100)
}).on("mouseleave", "#mainMenu \x3e li, li#welcome.hasSubmenu", function() {
    $(this).removeClass("hovered");
    $(this).find("ul").hide()
});
$(document).on("click", ".marketingLink", function(a) {
    a.preventDefault();
    a = motif.vars.marketingBasePath + "/postHandler.php";
    var b = {
        icv: isCatalogVisible,
        as: userAccountStatus,
        fn: firstName,
        mc: unreadMessageCount,
        targetUrl: $(this).attr("href"),
        imgUrl: userImageUrl
    };
    $.mRequest("post", a, b)
});
motif.widgets = motif.widgets || {};
$.extend(motif.widgets, {
    setupTooltips: function(a, b) {
        b = b || $("body");
        $(".toolTipped, .toolTippedText, .toolTippedClear", b).each(function(b) {
            b = $(this).data("defaultposition") || "right";
            var e = $(this).data("activation") || "click",
                f = $(this).data("tiptype") || "informative",
                d = !1 === $(this).data("keepalive") ? !1 : !0,
                g = $(this).data("maxwidth"),
                k = $(this).data("parent-target"),
                h = $(this).data("zindex") || $(this).parent().data("tiptip-z-index") || 99999;
            $(this).tipTip({
                content: $("\x3cdiv\x3e").append($(this).clone().children("div")).html(),
                defaultPosition: b,
                activation: e,
                keepAlive: d,
                tipType: f,
                maxWidth: g,
                zIndex: h,
                parentTarget: k,
                enter: a
            })
        })
    },
    setContentMinHeight: function() {
        if ($("#footer:visible").length) {
            var a = $(window).height(),
                b = $("#footer").height(),
                c = $("#header").height(),
                e = $("#footer").offset().top - ($("#content").height() + $("#content").offset().top),
                a = Math.floor(Math.max(a - b - c - e - 2, 0));
            $("#content").css("min-height", a + "px")
        }
    },
    getSize: function(a) {
        if (a) {
            var b = 0,
                c;
            for (c in a) a.hasOwnProperty(c) && b++;
            return b
        }
    },
    setupShowcaseNav: function() {
        $("#navFrame \x3e a").click(function(a) {
            a.preventDefault();
            $("#navFrame \x3e a").removeClass("active");
            var c = $(this);
            $("#innerMain div.module:visible").fadeOut(200, function() {
                var a = c.attr("href").substr(1);
                $("#" + a).fadeIn(200)
            });
            $(this).addClass("active");
            $("#navHighlight").css({
                top: $(this).offset().top - $("#navFrame").offset().top
            });
            $(".subMenu").hide();
            c.next(".subMenu").show()
        });
        $(".subMenu a").click(function(a) {
            a.preventDefault();
            $(".subMenu a").removeClass("active");
            $(this).addClass("active")
        });
        var a = function(a) {
            $("#navFrame \x3e a[href\x3d#" + window.location.hash.substr(2) +
                "]").trigger("click")
        };
        a();
        "onhashchange" in window ? $(window).on("hashchange", a) : $.address.change(a);
        $("#navFrame \x3e a").bind("click", function(a) {
            window.location.hash = "#/" + $(this).attr("href").substr(1)
        });
        $(".colorbox-inline").colorbox({
            iframe: !0,
            innerWidth: 640,
            innerHeight: 360
        })
    },
    getRequestParamObjToLogAction: function(a, b, c, e, f, d, g) {
        f = f || window.location.pathname + window.location.hash;
        c = c || motif.vars.pageCode;
        a = {
            "s.p": c,
            "s.d.t": a,
            "s.u": f
        };
        b && ($.is("Object", b) && (b = JSON.stringify(b), e = e || "dj"), a["s.d"] =
            b, e && (a["s.p.e"] = e));
        d && (a["s.a.i"] = d);
        g && (a["s.r.i"] = g);
        return a
    },
    getRequestParamsToLogAction: function(a, b, c, e, f, d, g) {
        return $.param(motif.widgets.getRequestParamObjToLogAction(a, b, c, e, f, d, g), !0)
    },
    populateFormFieldsForSessionLogging: function(a, b, c, e, f, d, g, k) {
        b = motif.widgets.getRequestParamObjToLogAction(b, c, e, f, d, g, k);
        for (var h in b) a.append("\x3cinput type\x3d'hidden' name\x3d'" + h + "' value\x3d'" + b[h] + "' /\x3e")
    },
    attachReqParamsToLogAction: function(a, b, c, e, f) {
        e = e || motif.vars.pageCode;
        a = $(a);
        var d;
        0 < a.length && (e && b) && a.each(function() {
            d = $(this).data("href") || $(this).attr("href");
            "#" == d && (d = "");
            d = -1 != d.indexOf("?") ? (-1 != d.indexOf("#") ? d.substr(0, d.indexOf("#")) : d) + "\x26" + motif.widgets.getRequestParamsToLogAction(b, c, e, f) + (-1 != d.indexOf("#") ? d.substr(d.indexOf("#")) : "") : (-1 != d.indexOf("#") ? d.substr(0, d.indexOf("#")) : d) + "?" + motif.widgets.getRequestParamsToLogAction(b, c, e, f) + (-1 != d.indexOf("#") ? d.substr(d.indexOf("#")) : "");
            $(this).attr("href", d)
        })
    },
    genericSessionLogger: function(a, b, c, e, f, d, g) {
        motif.vars.isLoggedIn &&
            (a = motif.widgets.getRequestParamsToLogAction(a, b, c, e, f, d, g), $.mAjax({
            url: $.url("/session-log"),
            type: "POST",
            data: a,
            error: function() {}
        }))
    },
    validatePassword: function(a, b, c) {
        var e = a.data("prev-value");
        c && a.val() == e || (a.data("prev-value", a.val()), /(?=.*[a-zA-Z]+)(?=.*(\d|[`~!@#\$%\^&\*\(\)\-_\+={}\[\]|<>\?,\.\/\\])).{6,20}/.test(a.val()) ? a.next("div.rightValidate").removeClass("invalid").addClass("valid").html("OK") : c ? a.next("div.rightValidate").removeClass("valid").html(a.attr("data-message")) : a.next("div.rightValidate").removeClass("valid").addClass("invalid").html(a.attr("data-message")),
            c && motif.widgets.validateConfirmPassword(b, a, !1))
    },
    validateConfirmPassword: function(a, b, c) {
        var e = a.data("prev-value");
        c && a.val() == e || (a.data("prev-value", a.val()), "" == a.val() ? a.next("div.rightValidate").removeClass("valid").removeClass("invalid").html(a.attr("data-message")) : a.val() == b.val() ? a.next("div.rightValidate").removeClass("invalid").addClass("valid").html("Password Matches") : c ? a.next("div.rightValidate").removeClass("valid").removeClass("invalid").html("Passwords do not match.") : a.next("div.rightValidate").removeClass("valid").addClass("invalid").html("Passwords do not match."))
    },
    setupCloudsponge: function(a, b, c) {
        function e() {
            window.csPageOptions = {
                domain_key: motif.vars.cloudspongeKey,
                skipSourceMenu: !0,
                sources: ["yahoo", "gmail", "windowslive", "aol", "plaxo"],
                include: ["email"],
                stylesheet: motif.vars.staticBasePath + "/styles/" + motif.vars.buildVersion + "/css/cloudsponge.css",
                beforeDisplayContacts: function() {
                    cloudsponge.fb.resize("600")
                },
                beforeClosing: function() {
                    $("#" + a).change().focus().removeClass("placeholder")
                }
            };
            a && (window.csPageOptions.textarea_id = a);
            c && (window.csPageOptions.afterSubmitContacts =
                c);
            if (a || c) cloudsponge.init(), b && cloudsponge.launch(b)
        }
        if ("undefined" == typeof cloudsponge || !cloudsponge.initialized) $.ajax({
            url: "https://api.cloudsponge.com/address_books.js",
            dataType: "script",
            cache: !0,
            success: function() {
                try {
                    !cloudsponge.initialized && ("undefined" != typeof motif.vars.cloudspongeKey && 0 < motif.vars.cloudspongeKey.length) && (cloudsponge.initialized = !0, $("#colorbox").on("click", ".yahoo", function(a) {
                        a.preventDefault();
                        cloudsponge.launch("yahoo")
                    }).on("click", ".gmail", function(a) {
                        a.preventDefault();
                        cloudsponge.launch("gmail")
                    }).on("click", ".windowslive", function(a) {
                        a.preventDefault();
                        cloudsponge.launch("windowslive")
                    }).on("click", ".aol", function(a) {
                        a.preventDefault();
                        cloudsponge.launch("aol")
                    }).on("click", ".plaxo", function(a) {
                        a.preventDefault();
                        cloudsponge.launch("plaxo")
                    })), e()
                } catch (a) {
                    $.setupMotifErrorObject(a, "setupCloudsponge"), $.sendClientLog("warn")
                }
            }
        });
        else try {
            e()
        } catch (f) {
            $.setupMotifErrorObject(f, "setupCloudsponge"), $.sendClientLog("warn")
        }
    },
    textareaLimiter: function(a, b) {
        $("textarea[maxlength]",
            a).each(function() {
            function c() {
                b && a.find(".maxLength span").text(f - e.val().length)
            }
            var e = $(this),
                f = $(this).attr("maxlength");
            c();
            e.focus(function() {
                setTimeout(function() {
                    c()
                }, 200)
            }).keypress(function(a) {
                a = a.charCode || a.keyCode;
                if ($(this).val().length >= f && -1 == $.inArray(a, [8, 37, 38, 39, 40, 46])) return !1
            }).bind("keyup change", function(a) {
                var b = $(this).val();
                b.length > f && (a.preventDefault(), $(this).val(b.substring(0, f)));
                c()
            })
        })
    },
    setupGlobalWidgets: function() {
        (function(a, b) {
            var c = function() {
                this.bindEvents()
            };
            c.fn = c.prototype;
            c.fn.bindEvents = function() {
                if (a.agent().touch) a(document).on("click", ".pricingDialogLink", function(a) {
                    a.preventDefault();
                    motif.vars.isLoggedIn ? location.assign(motif.vars.rootURL + "/view-content/com-structure-page") : location.assign(motif.vars.marketingBasePath + "/com-structure-page")
                });
                else a(document).ready(function() {
                    a(".pricingDialogLink").colorbox({
                        iframe: !0,
                        width: "620px",
                        height: "500px",
                        transition: "none",
                        fixed: !0,
                        href: a(this).attr("href"),
                        onComplete: function() {
                            a("#cboxClose").css("right",
                                "25px");
                            a("#cboxLoadedContent").css("padding-left", "20px").width(a("#cboxLoadedContent").width() - 20);
                            a("body").attr("style", "overflow:hidden;height:100%")
                        },
                        onClosed: function() {
                            a("#cboxClose").css("right", "");
                            a("#cboxLoadedContent").css("padding-left", "");
                            a("body").removeAttr("style")
                        }
                    })
                })
            };
            b.motif.GlobalWidgets = c
        })(jQuery, window);
        new motif.GlobalWidgets
    }
});
var _gaq = _gaq || [];
motif.analyticsReady = !1;
try {
    _gaq.push(["_setAccount", motif.vars.analytics.google.id]), _gaq.push(["_setDomainName", motif.vars.analytics.google.domain]), _gaq.push(["_addIgnoredRef", motif.vars.analytics.google.domain]), _gaq.push(["_setCampaignCookieTimeout", 5184E6]), _gaq.push(["_setCustomVar", 1, "userSegment", ["visitor", "user", "customer", "advisor"][$.cookie(motif.vars.ascCookieName) || 0], 1]), _gaq.push(["_trackPageview"])
} catch (e) {}
var setupAnalytics = function() {
    (function() {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    })();
    (function() {
        motif.analytics = new function() {
            this.trackEvent = function(a, b, c, d, f) {
                _gaq.push(["_trackEvent", a, b, c, d, f])
            };
            this.trackFakePageView = function(a) {
                _gaq.push(["_trackPageview", a])
            };
            this.trackAndSubmitForm =
                function(a, b, c, d, f, g) {
                    var h = !1 === $(b).data("valid");
                    a.preventDefault();
                    if (h) return !1;
                    this.trackEvent(c + "-delaySubmit1Sec", d, f, g);
                    b.submit()
            }
        }
    })();
    $("body#verify #verifyForm").submit(function(a) {
        motif.analytics.trackAndSubmitForm(a, this, "verify", "submit-code")
    });
    $("body#verify #resendVerify").click(function(a) {
        motif.analytics.trackEvent("verify", "send-again")
    });
    $("body#verify #brokerageApplication").click(function(a) {
        motif.analytics.trackEvent("verify", "brokerage-link")
    });
    $("body#catalog #navFrame a").bind("click",
        function() {
            motif.analytics.trackEvent("catalog", "nav", this.id)
        });
    $("body#motifDetails #motifTier2 .generalTabs a").click(function() {
        motif.analytics.trackEvent("motifDetails", this.id, $("#content").attr("data-motifUrl"))
    });
    $("body#motifDetails #learnMore").click(function() {
        motif.analytics.trackEvent("motifDetails", "Learn More", $("#content").attr("data-motifUrl"))
    });
    $("body#motifDetails #addToWatchlist, body#motifCustomization #addToWatchlist").click(function() {
        motif.analytics.trackEvent($("body").attr("id"),
            "addToWatchlist", $("#content").attr("data-motifUrl"))
    });
    $("body#motifDetails #buy, body#motifCustomization #buy").click(function() {
        motif.analytics.trackEvent($("body").attr("id"), "preview", $("#content").attr("data-motifUrl"))
    });
    $("body#motifCustomization #addRelatedStocks").click(function() {
        motif.analytics.trackEvent($("body").attr("id"), "addStocks", $("#content").attr("data-motifUrl"))
    });
    $("body#motifTradePreview #refreshSharesLink").click(function() {
        motif.analytics.trackEvent($("body").attr("id"),
            "refreshShares", $("#motifUrlName").val())
    });
    $("body#motifTradePreview #placeOrder").click(function() {
        motif.analytics.trackEvent($("body").attr("id"), "placeOrder", $("#motifUrlName").val())
    });
    $("body#motifTradePreview #changeOrder").click(function() {
        motif.analytics.trackEvent($("body").attr("id"), "changeOrder", $("#motifUrlName").val())
    });
    $("body#motifTradePreview #editTargetInvestment").click(function() {
        motif.analytics.trackEvent($("body").attr("id"), "editAmount", $("#motifUrlName").val())
    });
    $("body").on("track-ibd",
        function(a) {
            _gaq.push(["_setCustomVar", 2, "userExternalId", a.userExternalId, 1]);
            motif.analytics.trackEvent($("body").attr("id"), "ibdPreview", a.tradeType)
        });
    $("body#ownedMotif #buyMotif button").click(function() {
        motif.analytics.trackFakePageView("Motif Trade Lightbox")
    });
    $("body#ownedMotif #motifTier2 .generalTabs li a").click(function() {
        motif.analytics.trackEvent("ownedMotif", $(this).attr("href").substr(1), $("#content").attr("data-motifUrl"))
    });
    $("body#ownedMotif #motifTradePreview").click(function() {
        motif.analytics.trackEvent("ownedMotif",
            "previewOrder-" + $("#motifTradeBox input[type\x3dradio]:checked").val(), $("#content").attr("data-motifUrl"))
    });
    $("body#ownedMotif .tradeLink").click(function() {
        motif.analytics.trackEvent("ownedMotif", "tradeStockLink", $("#content").attr("data-motifUrl"))
    });
    $("body#tradeStockDefault.ticket a#previewOrder").click(function() {
        motif.analytics.trackEvent("stockTicket-" + $("body").attr("data-view"), "previewOrder", $("body").attr("data-motifname"))
    });
    $("body#tradeStockDefault.preview a#editOrder").click(function() {
        motif.analytics.trackEvent("stockPreview-" +
            $("body").attr("data-view"), "editOrder")
    });
    $("body#tradeStockDefault.preview a#previewOrder").click(function() {
        motif.analytics.trackEvent("stockTicket-" + $("body").attr("data-view"), "placeOrder")
    });
    $("body#positions a.showBalanceDetails").click(function() {
        motif.analytics.trackEvent($("body").attr("id"), "showBalance")
    });
    $("body#positions balanceDetails a").click(function() {
        motif.analytics.trackEvent($("body").attr("id"), "addFunds")
    });
    $("body#positions a.trade").click(function() {
        motif.analytics.trackEvent($("body").attr("id"),
            "trade")
    });
    $("body#orders #ordersNav li a").click(function() {
        motif.analytics.trackEvent("orders", "nav", $(this).attr("href").substr(1))
    });
    $("body#accountFunding #navFrame a").click(function() {
        motif.analytics.trackEvent("accountFunding-" + $("body").attr("data-view"), "nav", $(this).attr("href").substr(1))
    });
    $("body#faq #navFrame a").click(function() {
        motif.analytics.trackEvent("faq", "nav", $(this).attr("href").substr(1))
    });
    $("body.brokerageApplication #applicationProgressBar a").click(function() {
        motif.analytics.trackEvent("brokerageApplication",
            "progressBarSteps", $(this).attr("id"))
    });
    $("body.brokerageApplication #formControls:not(.inactive) a").click(function() {
        motif.analytics.trackEvent("brokerageApplication", $("body").attr("id"), $(this).attr("id"))
    });
    $("#featuredMotifs a").click(function() {
        motif.analytics.trackEvent($("body").attr("id"), "featuredMotif", $(this).attr("title"))
    });
    $("#relatedMotifs a").click(function() {
        motif.analytics.trackEvent($("body").attr("id"), "relatedMotif", $(this).attr("title"))
    });
    $("a[href$\x3d'.pdf']").click(function() {
        motif.analytics.trackEvent($("body").attr("id"),
            "pdfLinkClick", $(this).attr("href"))
    });
    $("a[href^\x3d'mailto']").click(function() {
        motif.analytics.trackEvent($("body").attr("id"), "mailLinkClick", $(this).attr("href").substr(7))
    });
    motif.analyticsReady = !0
};
$(document).ready(function() {
    setTimeout(setupAnalytics, 100)
});
(function(g, k) {
    var b = function() {
        this.rules = {};
        this.msgs = {};
        this.elements = [];
        this.alert = {};
        this.curElem = this.lastElem = void 0;
        this.ignoreGlobal = !1;
        this.initGenericMsgs();
        this.initGenericRules();
        this.initAlert()
    };
    b.fn = b.prototype;
    b.fn.initGlobalEvent = function() {
        var a = this,
            c = function() {
                !a.ignoreGlobal && "undefined" != typeof a.curElem && a.elValidate(a.curElem.element, !1, !0);
                g("body").unbind("click", c)
            };
        a.ignoreGlobal = !1;
        g("body").click(c)
    };
    b.fn.fullValidate = function(a) {
        var c = !0;
        this.ignoreGlobal = !0;
        for (var h =
            0; h < this.elements.length; h++)
            if (g(this.elements[h].element).hasClass("require") || !(a && "" === g(this.elements[h].element).val())) this.elValidate(this.elements[h].element, !0, !1) || (c = !1);
        return c
    };
    b.fn.addObject = function(a, c, h) {
        var d = this,
            f = {
                element: a,
                index: this.elements.length
            };
        this.elements.push(f);
        var e = a; - 1 != g.inArray(a[0].tagName, ["DIV", "SPAN"]) && (e = a.find("input, select, textarea"));
        if (c) {
            var b = function(a) {
                d.elValidate(f.element, h, !1)
            };
            e.unbind(c, b).bind(c, b)
        }
        c = function() {
            d.alert.clear(a);
            d.initGlobalEvent();
            d.curElem && g(this).attr("name") == d.curElem.lastField.attr("name") || (d.lastElem = d.curElem, d.curElem = f, d.curElem.lastField = g(this), "undefined" != typeof d.lastElem && d.elValidate(d.lastElem.element, !1, !1))
        };
        b = function(a) {
            a.stopPropagation()
        };
        e.unbind("focus", c).focus(c).unbind("click", b).click(b)
    };
    b.fn.elValidate = function(a, c, b) {
        var d = !0;
        if (!a.attr("class")) return d;
        for (var f = a.attr("class").split(" "), e = 0; e < f.length; e++) {
            if ("disabled" == f[e] || a.is(":disabled") || !a.is(":visible")) return this.alert.clear(a), !0;
            if (d && (c || "require" != f[e]) && "function" == typeof this.rules[f[e]] && !this.rules[f[e]](a, this.rules, c, this.curElem ? this.curElem.element : void 0, this.lastElem ? this.lastElem.element : void 0, b)) d = !1, this.alert.display(a, a.data(f[e] + "Msg") || a.data(f[e] + "-msg") || this.msgs[f[e]])
        }
        d && this.alert.clear(a);
        return d
    };
    b.fn.addRule = function(a, c, b) {
        this.msgs[a] = c;
        this.rules[a] = b;
        return this
    };
    b.fn.initAlert = function() {
        var a = this;
        this.alert.display = function(c, b) {
            a.alert.clear(c);
            c.addClass("inputError").after('\x3cspan class\x3d"formWarning"\x3e\x3cdiv\x3e\x3c/div\x3e' +
                b + "\x3c/span\x3e")
        };
        this.alert.clear = function(a) {
            a.removeClass("inputError").nextAll(".formWarning").remove()
        }
    };
    b.fn.initGenericMsgs = function() {
        this.msgs = {
            require: "Required",
            alpha: "Invalid entry",
            generic: "Invalid entry",
            paragraph: "Invalid entry",
            keyboard: "Invalid entry: Use only characters on a standard US keyboard excluding '\x26lt;' and '\x26gt;'",
            permissive: "Invalid entry: Characters '\x26lt;' and '\x26gt;' are disallowed",
            name: "Invalid entry",
            email: "Please enter a valid e-mail address",
            email_body: "Invalid entry",
            email_backend_unique: "Email address already taken or invalid",
            phone: "Please enter a valid phone number",
            percentage: "Please enter a number between 0-100",
            numeric: "Please enter a number",
            integer: "Please enter a whole number",
            posInteger: "Please enter a positive whole number",
            posFloat: "Please enter a positive real number",
            zip: "Please enter a valid zip code",
            ofAge: "You must be at least 18 years of age",
            password: "Password incorrect",
            securityAnswer: "Invalid entry",
            yearsEmployed: "Enter a positive whole number"
        }
    };
    b.fn.initGenericRules = function() {
        this.rules = {
            require: function(a) {
                return 0 < g.trim("object" == typeof a ? a.val() : a).length
            },
            alpha: function(a) {
                return /^[a-zA-Z\s]{0,25}$/.test("object" == typeof a ? a.val() : a)
            },
            generic: function(a) {
                return /^[\s\w\'\"\&\.\-\,\#]*$/.test("object" == typeof a ? a.val() : a)
            },
            genericNoDoubleQuote: function(a) {
                return /^[\s\w\'\&\.\-\,\#]*$/.test("object" == typeof a ? a.val() : a)
            },
            paragraph: function(a) {
                return /^[\s\w\'\"\&\.\-\,\#\!\%\?\(\)\$]*$/.test("object" == typeof a ? a.val() : a)
            },
            keyboard: function(a) {
                return /^[\s\w\'\"\&\.\-\,\#\!\%\?\(\)@$^*_=+|\\{}\[\]:;\/~`]*$/.test("object" ==
                    typeof a ? a.val() : a)
            },
            permissive: function(a) {
                return /^[^\<\>]*$/.test("object" == typeof a ? a.val() : a)
            },
            name: function(a) {
                return /^[\s\w\'\.\-]{0,25}$/.test("object" == typeof a ? a.val() : a)
            },
            email: function(a) {
                a = "object" == typeof a ? a.val() : a;
                return !a.length ? !0 : /^(?:[a-z0-9_-]+(?:\.|\+){1})*[a-z0-9_-]+@(?:[a-z0-9-]+\.)+[a-z]{2,6}$/i.test(a)
            },
            email_body: function(a) {
                return /^[\s\w\'\"\&\.\-\,\#\!\%\?\(\)\$\+\:\;\/\*\{\}]*$/.test("object" == typeof a ? a.val() : a)
            },
            email_backend_unique: function(a) {
                if ("object" == typeof a &&
                    a.val() == a.data("originalvalue")) return !0;
                var c = "object" == typeof a ? a.val() : a;
                if (!c.length) return !0;
                a = a.data("validationurl");
                var b = !0;
                g.mAjax({
                    url: a,
                    async: !1,
                    type: "POST",
                    data: {
                        email: c
                    },
                    success: function(a) {
                        b = a.isValid && a.isAvailable
                    }
                });
                return b
            },
            phone: function(a) {
                a = "object" == typeof a ? a.val() : a;
                if (!a.length) return !0;
                a = a.replace(/\s|[a-zA-Z]|-|\(|\)|\./g, "");
                return 10 == a.length && !isNaN(a)
            },
            numeric: function(a) {
                return !isNaN("object" == typeof a ? a.val() : a)
            },
            percentage: function(a) {
                (a = "object" == typeof a ? a.val() :
                    a) && (a = a.replace("%", ""));
                return !isNaN(a) && 0 <= a && 100 >= a
            },
            integer: function(a) {
                a = "object" == typeof a ? a.val() : a;
                return !isNaN(a) && parseInt(a) == a
            },
            posInteger: function(a) {
                a = "object" == typeof a ? a.val() : a;
                return !isNaN(a) && parseInt(a) == a && 0 <= a
            },
            posFloat: function(a) {
                a = "object" == typeof a ? a.val() : a;
                return !isNaN(a) && parseFloat(a) == a && 0 <= a
            },
            zip: function(a) {
                return !("object" == typeof a ? a.val() : a).length ? !0 : /^\d{5}$|^\d{5}-\d{4}$/.test("object" == typeof a ? a.val() : a)
            },
            ofAge: function(a) {
                a = -1 != g.inArray(a[0].tagName, ["DIV",
                    "SPAN"
                ]) ? g("input", a).val() : "object" == typeof a ? a.val() : a;
                a = new Date(a);
                var b = new Date;
                if (a.getTime() > b.getTime()) return 2;
                a.setFullYear(a.getFullYear() + 18);
                return a.getTime() > b.getTime() ? !1 : !0
            },
            password: function(a) {
                return /(?=.*[a-zA-Z]+)(?=.*(\d|[`~!@#\$%\^&\*\(\)\-_\+={}\[\]|<>\?,\.\/\\])).{6,20}/.test("object" == typeof a ? a.val() : a)
            },
            securityAnswer: function(a) {
                return /[a-zA-Z]{2,20}/.test("object" == typeof a ? a.val() : a)
            },
            yearsEmployed: function(a) {
                a = "object" == typeof a ? a.val() : a;
                return !a.length ? !0 : 3 > a.length &&
                    a == parseFloat(a) && 0 <= parseFloat(a) && 0 == a % 1 && "." != a[1]
            }
        }
    };
    k.Validator = b
})($, window);
$(window).on("message", function(a) {
    var c = a.originalEvent;
    if (c.origin == motif.vars.authBasePath) {
        a = JSON.parse(c.data);
        var b = {};
        a.iframeHeight && ($("#colorbox iframe").height(a.iframeHeight + 20 + "px"), b.height = a.iframeHeight + 20);
        a.iframeWidth && ($("#colorbox iframe").width(a.iframeWidth + 5 + "px"), b.width = a.iframeWidth + 5);
        a.hijackClose && $("#cboxClose").unbind("click").bind("click", function() {
            if (c.source) c.source.postMessage('{"closeTouIframe" : true}', motif.vars.authBasePath);
            else
                for (var a = 0; a < frames.length; a++) frames[a].postMessage('{"closeTouIframe" : true}',
                    motif.vars.authBasePath);
            $("#cboxClose").unbind("click").bind("click", function() {
                $.colorbox.close()
            })
        });
        $.colorbox.resize(b)
    }
});
$(document).ready(function() {
    var a = ["visitor", "user", "customer", "advisor"][$.cookie(motif.vars.ascCookieName) || 0],
        c = "CATALOG MOTIF_DETAIL CUSTOMIZE_MOTIF USER_MOTIF_WIDGET_EDITOR BUILD_YOUR_OWN FAQ_GLOSSARY MISCDOCUMENTS INVESTING_PROFILE QUESTIONNAIRE".split(" ");
    ("user" == a || "customer" == a) && -1 < $.inArray(motif.vars.page, c) && $.mAjax({
            url: motif.vars.authBasePath + "/data/login-check",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "callback",
            success: function(a) {
                a.loggedIn && location.replace(motif.vars.clientBasePath +
                    location.pathname + location.search + location.hash)
            }
        })
});
(function(a, c) {
    var b = function() {
        this.init()
    };
    b.fn = b.prototype;
    b.fn.init = function() {
        this.storageFrame = a('\x3ciframe name\x3d"xDomainStorage" class\x3d"hidden"\x3e\x3c/iframe\x3e');
        a("body").append(this.storageFrame);
        this.storageFrame.attr("src", motif.vars.clientBasePath + "/templates/xDomainStorage.html")
    };
    b.fn.storeData = function(a, b) {
        xDomainStorage.postMessage('{"' + a + '":' + JSON.stringify(b) + "}", motif.vars.clientBasePath)
    };
    c.motif.widgets.TradingSessionStore = b
})($, window);
(function(b, d) {
    var a = function() {
        this.model = {
            launcherUrl: "https://0a77378c3cbae92dfc7a-d9a71fb7b5fa6aa6bf983fac235c480e.ssl.cf2.rackcdn.com/llscripts//launcher.js"
        };
        void 0 != motif.vars.livelookEnabled && motif.vars.livelookEnabled && (b.cookie("ll-active") ? b("body").append('\x3cscript type\x3d"text/javascript" src\x3d"' + this.model.launcherUrl + '"\x3e\x3c/script') : this.bindEvents())
    };
    a.fn = a.prototype;
    a.fn.bindEvents = function() {
        var a = this;
        b(document).on("keydown", function(c) {
            c.ctrlKey && 13 == c.keyCode && (a.launchLivelook(),
                b(window).off("keydown"))
        })
    };
    a.fn.launchLivelook = function() {
        b.cookie("ll-active", !0, {
            path: "/",
            domain: motif.vars.cookieDomain
        });
        b("body").append('\x3cscript type\x3d"text/javascript" src\x3d"' + this.model.launcherUrl + '"\x3e\x3c/script');
        void 0 != motif.widgets && (void 0 != motif.vars.isLoggedIn && motif.vars.isLoggedIn) && motif.widgets.genericSessionLogger("lla", null, motif.vars.pageCode || "all")
    };
    d.motif.Livelook = a
})(jQuery, window);
(function(a) {
    "undefined" == typeof motif ? (motif = {}, motif.vars = motif.vars || {}) : (motif.main = {
            marketTimer: {
                callbacks: []
            },
            init: function() {
                this.setupConsole();
                a.setupRibbonIconOverlay();
                motif.pageId = a("body").attr("id");
                this.disableSelectedDisabledLinks();
                this.setupOnDOMReady();
                this.setupOnLoad();
                this.setupOnResize();
                this.setupDataTablesCustomSorts();
                this.setupMarketValues();
                this.setupMarketTimer();
                this.setupTermsLink();
                motif.utils.disableClickOnActiveTab();
                this.serverError();
                this.setupHtmlClass();
                motif.utils.sessionLogExternalLinks();
                void 0 != motif.Livelook && new motif.Livelook;
                this.initResponsiveMenu()
            },
            setupMainCSSFinishEvent: function() {
                function b() {
                    "transparent" != a("#footer").css("background-color") ? a("body").trigger("motif.css.main.finished") : setTimeout(b, 500)
                }
                b()
            },
            initResponsiveMenu: function() {
                function b() {
                    var a = !1,
                        g = navigator.userAgent || navigator.vendor || window.opera;
                    if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(g) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(g.substr(0,
                            4))) a = !0;
                    return a
                }

                function f() {
                    a(k).removeClass("open").addClass("close")
                }
                var h, k, l;
                (h = a.agent()) && "IE" == h.brand && 9 >= h.version ? (a("header.slide").hide(), a("nav.slide").hide()) : (h = b() ? "touchstart" : "click", k = a(".slide"), l = a(".content"), a("#navToggle").on(h, function(b) {
                    b.stopPropagation();
                    b.preventDefault();
                    l.hasClass("open") ? f() : a(k).removeClass("close").addClass("open")
                }), a("body").click(function() {
                    l.hasClass("open") && f()
                }))
            },
            setupHtmlClass: function() {
                var b = a.agent();
                a("html").addClass(b.brand + b.version).addClass(b.os).attr("data-agent-brand",
                    b.brand).attr("data-agent-version", b.version).attr("data-agent-os", b.os).attr("data-agent-engine", b.engine)
            },
            disableSelectedDisabledLinks: function() {
                a(document).on("click", "a[href*\x3d'/view-content'].disabled, .userMenu .disabled", function(a) {
                    a.preventDefault()
                })
            },
            setupTermsLink: function() {
                if (a.agent().touch) a(document).on("click", ".termsLink", function(b) {
                    b.preventDefault();
                    window.open(a.url("/view/terms-of-use"));
                    return !1
                });
                else a(document).on("click", ".termsLink", function(b) {
                    b.preventDefault();
                    a.colorbox({
                        href: motif.vars.authBasePath + "/terms",
                        iframe: !0,
                        width: "620px",
                        height: "540px",
                        scrolling: !1,
                        transition: "none"
                    })
                })
            },
            setupUnverifiedUpsell: function() {
                a(".unverifiedInterstitial, .unverifiedInterstitial *").off("click focus keyup keydown keypress change").unbind("click focus keyup keydown keypress change");
                a(document).on("click", ".unverifiedInterstitial", function(b) {
                    b.preventDefault();
                    a(this).blur();
                    a.mDialog({
                        html: a("#validationUpsell").html(),
                        transition: "none",
                        onComplete: function() {
                            a(".mDialog a.vividButton").focus();
                            a(".mDialog .cancelButton").on("click", function(b) {
                                b.preventDefault();
                                a.mDialog.close()
                            })
                        }
                    })
                })
            },
            setupOnResize: function() {
                var b;
                (function() {
                    a(window).on("resize", function() {
                        clearTimeout(b);
                        b = setTimeout(function() {
                            motif.widgets.setContentMinHeight()
                        }, 100)
                    })
                })()
            },
            setupOnDOMReady: function() {
                a(document).ready(function() {
                    (function() {
                        a(".deferred-image").each(function() {
                            a(this).attr("src", a(this).attr("data"))
                        })
                    })()
                })
            },
            setupOnLoad: function() {
                a(window).load(function() {
                    motif.widgets.setContentMinHeight()
                })
            },
            setupConsole: function() {
                window.console || (console = {
                    log: function(a) {}
                })
            },
            callPageInit: function() {
                a.setupClientErrorHandling();
                motif.widgets.setupGlobalWidgets();
                this.setupMainCSSFinishEvent();
                motif[motif.pageId] && (motif[motif.pageId].init && a.is("Function", motif[motif.pageId].init)) && (motif[motif.pageId].init(), motif[motif.pageId].selfManageFinishClass || a("body").addClass("finished-" + motif.pageId))
            },
            setupDataTablesCustomSorts: function() {
                var b = "FILLED PARTIAL_CANCEL PARTIAL_FAILURE CANCELED REVERSED REJECTED".split(" "),
                    f = /[$,+-]/g,
                    h = /[$,]/g,
                    k = /<[^>]+>/g;
                jQuery.fn.dataTableExt.oSort["absolute-asc"] = function(g, c) {
                    var a = parseFloat(g.replace(f, "")),
                        b = parseFloat(c.replace(f, "")),
                        a = isNaN(a) ? 0 : Math.abs(a),
                        b = isNaN(b) ? 0 : Math.abs(b);
                    return a - b
                };
                jQuery.fn.dataTableExt.oSort["absolute-desc"] = function(g, a) {
                    return jQuery.fn.dataTableExt.oSort["absolute-asc"](a, g)
                };
                jQuery.fn.dataTableExt.oSort["currency-asc"] = function(g, a) {
                    var b = parseFloat(g.replace(h, "")),
                        d = parseFloat(a.replace(h, "")),
                        b = isNaN(b) ? 0 : b,
                        d = isNaN(d) ? 0 : d;
                    return b - d
                };
                jQuery.fn.dataTableExt.oSort["currency-desc"] = function(a, c) {
                    return jQuery.fn.dataTableExt.oSort["currency-asc"](c, a)
                };
                jQuery.fn.dataTableExt.oSort["currency2-asc"] = function(g, c) {
                    g = a(g).text();
                    c = a(c).text();
                    var b = "-" == g ? 0 : g.replace(h, ""),
                        d = "-" == c ? 0 : c.replace(h, ""),
                        b = parseFloat(b);
                    isNaN(b) && (b = 0);
                    d = parseFloat(d);
                    isNaN(d) && (d = 0);
                    return b - d
                };
                jQuery.fn.dataTableExt.oSort["currency2-desc"] = function(a, c) {
                    return jQuery.fn.dataTableExt.oSort["currency2-asc"](c, a)
                };
                jQuery.fn.dataTableExt.oSort["currency3-asc"] =
                    function(a, c) {
                        a = a.replace(k, "");
                        c = c.replace(k, "");
                        return jQuery.fn.dataTableExt.oSort["currency-asc"](a, c)
                };
                jQuery.fn.dataTableExt.oSort["currency3-desc"] = function(a, c) {
                    return jQuery.fn.dataTableExt.oSort["currency3-asc"](c, a)
                };
                jQuery.fn.dataTableExt.oSort["percentage-asc"] = function(a, c) {
                    x = parseFloat(a);
                    y = parseFloat(c);
                    return x - y
                };
                jQuery.fn.dataTableExt.oSort["percentage-desc"] = function(a, c) {
                    return jQuery.fn.dataTableExt.oSort["percentage-asc"](c, a)
                };
                var l = /class=['"][^'"]*down['"]/;
                jQuery.fn.dataTableExt.oSort["percentageArrow-asc"] =
                    function(a, c) {
                        var b = a.match(l),
                            d = c.match(l);
                        a = a.replace(k, "");
                        c = c.replace(k, "");
                        "--" == a && (a = -1E5);
                        "--" == c && (c = -1E5);
                        a = parseFloat(a);
                        c = parseFloat(c);
                        b && (a *= -1);
                        d && (c *= -1);
                        return a - c
                };
                jQuery.fn.dataTableExt.oSort["percentageArrow-desc"] = function(a, b) {
                    return jQuery.fn.dataTableExt.oSort["percentageArrow-asc"](b, a)
                };
                jQuery.fn.dataTableExt.oSort["mixed-asc"] = function(a, b) {
                    "--" == a && (a = 0);
                    "--" == b && (b = 0);
                    x = parseFloat(a);
                    y = parseFloat(b);
                    return x - y
                };
                jQuery.fn.dataTableExt.oSort["mixed-desc"] = function(a, b) {
                    return jQuery.fn.dataTableExt.oSort["mixed-asc"](b,
                        a)
                };
                jQuery.fn.dataTableExt.oSort["motifname-asc"] = function(b, c) {
                    b = a.trim(b.replace(k, "")).replace(/^Custom /, "").toLowerCase();
                    c = a.trim(c.replace(k, "")).replace(/^Custom /, "").toLowerCase();
                    return b.match(/\bcorporate actions\b/) ? 1 : c.match(/\bcorporate actions\b/) ? -1 : b > c ? 1 : -1
                };
                jQuery.fn.dataTableExt.oSort["motifname-desc"] = function(a, b) {
                    return jQuery.fn.dataTableExt.oSort["motifname-asc"](b, a)
                };
                jQuery.fn.dataTableExt.oSort["dateTimeTable-asc"] = function(b, c) {
                    var e = new Date(a.trim(b.replace(k, " "))),
                        d = new Date(a.trim(c.replace(k, " ")));
                    return 0 < e.getTime() - d.getTime() ? 1 : -1
                };
                jQuery.fn.dataTableExt.oSort["dateTimeTable-desc"] = function(a, b) {
                    return jQuery.fn.dataTableExt.oSort["dateTimeTable-asc"](b, a)
                };
                jQuery.fn.dataTableExt.oSort["specialNumber-asc"] = function(b, c) {
                    var e = a(b).data("number"),
                        d = a(c).data("number"),
                        e = e.split("-"),
                        d = d.split("-");
                    return e[0] > d[0] ? 1 : e[0] < d[0] ? -1 : e[1] > d[1] ? 1 : -1
                };
                jQuery.fn.dataTableExt.oSort["specialNumber-desc"] = function(a, b) {
                    return jQuery.fn.dataTableExt.oSort["specialNumber-asc"](b,
                        a)
                };
                jQuery.fn.dataTableExt.oSort["statusTable-asc"] = function(g, c) {
                    var e = a(g).removeClass("status").attr("class"),
                        d = a(c).removeClass("status").attr("class");
                    return b.indexOf(e) > b.indexOf(d) ? 1 : -1
                };
                jQuery.fn.dataTableExt.oSort["statusTable-desc"] = function(a, b) {
                    return jQuery.fn.dataTableExt.oSort["statusTable-asc"](b, a)
                };
                jQuery.fn.dataTableExt.oSort["marketCap-asc"] = function(a, b) {
                    "--" === a && (a = "0");
                    "--" === b && (b = "0");
                    var e = "M" == a.substring(a.length - 1, a.length) ? 1E6 : 1E9,
                        d = "M" == b.substring(b.length - 1, b.length) ?
                            1E6 : 1E9;
                    x = parseFloat(a) * e;
                    y = parseFloat(b) * d;
                    return x < y ? -1 : x > y ? 1 : 0
                };
                jQuery.fn.dataTableExt.oSort["marketCap-desc"] = function(a, b) {
                    return jQuery.fn.dataTableExt.oSort["marketCap-asc"](b, a)
                };
                a.fn.dataTableExt.afnSortData["dom-label"] = function(b, c) {
                    var e = [];
                    a(".weightDisplay span", b.oApi._fnGetTrNodes(b)).each(function() {
                        e.push(parseFloat(a(this).text()))
                    });
                    return e
                };
                a.fn.dataTableExt.afnSortData["dom-text2"] = function(b, c) {
                    var e = [];
                    a("td.staticWeight input", b.oApi._fnGetTrNodes(b)).each(function() {
                        e.push(parseFloat(this.value))
                    });
                    return e
                };
                var m = /left:\s?(-?[\d.]+)px/;
                jQuery.fn.dataTableExt.oSort["fiftyTwoWeekRange-asc"] = function(a, b) {
                    var e = a.match(m),
                        d = b.match(m);
                    return e && d ? (e = parseInt(e[1]), d = parseInt(d[1]), e < d ? -1 : e > d ? 1 : 0) : e ? 1 : d ? -1 : 0
                };
                jQuery.fn.dataTableExt.oSort["fiftyTwoWeekRange-desc"] = function(a, b) {
                    return jQuery.fn.dataTableExt.oSort["fiftyTwoWeekRange-asc"](b, a)
                }
            },
            setupMarketValues: function() {
                function b() {
                    var b = a("#marketValues");
                    b.length && a.mAjax({
                        url: a.url("/bgprocess/data/indices"),
                        success: function(l) {
                            var m = 0;
                            a.each(l,
                                function(f, c) {
                                    var e;
                                    switch (f) {
                                        case "^DJI":
                                            e = b.find(".dow");
                                            break;
                                        case "^SPX":
                                            e = b.find(".sp500");
                                            break;
                                        default:
                                            return
                                    }
                                    if (e.length && (m++, null != c.value && null != c.valueChange && null != c.percentChange)) {
                                        e.find(".value").html(a.formatFloat(c.value, 2));
                                        var d = parseFloat(c.valueChange);
                                        0 > d ? e.find(".percent").text(a.formatFloat(d, 2) + " (" + c.percentChange.toFixed(2) + "%)").addClass("changeDown") : e.find(".percent").text("+" + a.formatFloat(d, 2) + " (" + c.percentChange.toFixed(2) + "%)").addClass("changeUp")
                                    }
                                });
                            m && b.removeClass("hidden");
                            "closed" == f.marketTimer.status && clearInterval(h)
                        }
                    })
                }
                var f = this,
                    h = setInterval(b, 3E4);
                b()
            },
            setupMarketTimer: function() {
                function b() {
                    motif.timeoutId || (motif.timeoutId = setTimeout(function() {
                        motif.timeoutId = void 0;
                        var a = parseInt(k.data("msecs"));
                        k.data("msecs", a - 6E4);
                        f.setupMarketTimer();
                        for (i in f.marketTimer.callbacks) f.marketTimer.callbacks[i]()
                    }, 6E4))
                }
                var f = this,
                    h = a("#marketStatus");
                if (h.length) {
                    var k = a("#marketTimer", h),
                        l = a("#marketStatusIndicator", h),
                        m = a("#marketStatusEndPhrase", h);
                    this.marketTimer.status =
                        l.attr("class");
                    if (1 == k.length) {
                        var g = parseInt(k.data("msecs")),
                            h = Math.floor(g / 36E5),
                            g = Math.floor(60 * (g / 36E5 % 1)),
                            c = 1 == h ? "hour" : "hours",
                            e = 1 == g ? "minute" : "minutes",
                            d = "";
                        0 < h ? d = 0 < g ? h + " " + c + ", " + g + " " + e : h + " " + c : 0 < g ? d = g + " " + e : (d = "less than a min", a.mAjax({
                            url: a.url("/data/bgprocess/market-status"),
                            success: function(a) {
                                a.timeToOpen ? (k.data("msecs", a.timeToOpen), l.attr("class", "closed").html("MARKETS CLOSED"), m.html("left until re-open"), f.marketTimer.status = "closed") : a.timeToClose && (k.data("msecs", a.timeToClose),
                                    l.attr("class", "open").html("MARKETS OPEN"), m.html("left to trade"), f.marketTimer.status = "open");
                                for (i in f.marketTimer.callbacks) f.marketTimer.callbacks[i]()
                            },
                            complete: function() {
                                b()
                            }
                        }));
                        k.html(d);
                        f.marketTimer.label = d
                    }
                    b()
                }
            },
            registerMarketTimerCallback: function(a) {
                this.marketTimer.callbacks.push(a)
            },
            serverError: function() {
                a("#showErrorButton").click(function(b) {
                    b.preventDefault();
                    b = {
                        html: "\x3cpre\x3e" + a("#errorMessageStack").text() + "\x3c/pre\x3e",
                        transition: !1,
                        scrolling: !0,
                        width: 1100,
                        height: 900,
                        onComplete: function() {}
                    };
                    void 0 != typeof top.$.colorbox ? top.$.colorbox(b) : a.colorbox(b)
                })
            },
            setParentNonce: function() {
                a.ajax({
                    url: "/get-nonce/" + motif.vars.pageCode,
                    type: "POST",
                    async: !1,
                    success: function(a) {
                        motif.vars.parentNonce = a.nonce
                    }
                })
            }
        }, motif.utils = {
            disableClickOnActiveTab: function() {
                a("ul.tabs \x3e li ").on("click", "\x3e a.active", function(a) {
                    a.preventDefault()
                })
            },
            ie9TableFix: function(b) {
                if (b && 0 != b.length) {
                    var f = a.agent();
                    if ("IE" == f.brand && 9 == f.version) {
                        var f = RegExp("\x3e[ \t\r\n\v\f]*\x3c", "g"),
                            h = b.html();
                        b.html(h.replace(f, "\x3e\x3c"))
                    }
                }
            },
            tableHasNoDataCells: function(b) {
                b = b.find("td, th");
                for (var f = 0; f < b.length; f++)
                    if ("--" == a.trim(a(b[f]).text())) return !0;
                return !1
            },
            tableHasStarredTotals: function(b) {
                b = b.find("tfoot th");
                for (var f = 0; f < b.length; f++)
                    if (-1 < a.trim(a(b[f]).text()).indexOf("*")) return !0;
                return !1
            },
            sessionLogExternalLinks: function() {
                a("body").on("click", 'a[target\x3d"_blank"]', function(b) {
                    a(this).data("ignore") || motif.widgets.genericSessionLogger("el", null, null, null, a(this).attr("href"))
                })
            }
        },
        motif.main.init())
})($);
Array.indexOf || (Array.prototype.indexOf = function(a) {
    for (var b = 0; b < this.length; b++)
        if (this[b] == a) return b;
    return -1
});
motif.widgets = motif.widgets || {};
$.extend(motif.widgets, {
    setupVoting: function() {
        var a = JSON.parse($.cookie("motif_voting")) || {};
        $(".motifVoting:not(.initialized)").each(function(d) {
            var c = $(this).data("motifname"),
                b = $(".motifVoting:not(.initialized)"),
                e = $(this);
            a[c] ? (e.addClass("voted"), e.find(".voteLink").click(function(a) {
                a.preventDefault();
                e.find("span.thanksForVoting")[0] || e.append('\x3cspan class\x3d"thanksForVoting"\x3eYou have already voted.\x3c/span\x3e')
            }), e.find("a[data-votedirection\x3d" + a[c] + "]").addClass("active")) : b.find(".voteLink").click(function(a) {
                a.preventDefault();
                if (a = $(this).data("href")) {
                    var e = $(this).data("votedirection");
                    $.mAjax({
                        url: $.url(a),
                        type: "POST",
                        success: function(a) {
                            a = (a = $.cookie("motif_voting")) ? JSON.parse(a) : {};
                            a[c] = e;
                            $.cookie("motif_voting", JSON.stringify(a), {
                                path: "/",
                                domain: motif.vars.cookieDomain
                            })
                        }
                    });
                    b.append('\x3cspan class\x3d"thanksForVoting"\x3eThanks for your vote!\x3c/span\x3e');
                    $(this).addClass("active");
                    b.addClass("voted").find(".voteLink").unbind("click").click(function(a) {
                        a.preventDefault()
                    })
                }
            });
            b.addClass("initialized")
        })
    },
    setTruncatedColumn: function(a) {
        $(a).find(".truncatedColumn").css({
            "max-width": $(a).find(".truncatedColumnHeader").width()
        }).show()
    },
    setupAddToWatchlist: function(a) {
        if (!this.watchlistEventsBound) {
            var d = "undefined" != typeof a;
            $(".watchlistToggle.add:not(.inactive)").live("click", function(c) {
                function b(b) {
                    $.mAjax({
                        url: motif.vars.rootURL + "/watchlist/" + k + "/add",
                        type: "POST",
                        data: b ? "\x26force\x3dtrue" : "",
                        success: function(b) {
                            switch (b.success) {
                                case "true":
                                case "on_watchlist":
                                    f.removeClass("add").addClass("remove").text(g);
                                    f.removeClass("inactive");
                                    $("#quickView").length || $.colorbox.close();
                                    $(".watchlistToggle[data-urlname\x3d" + k + "]").removeClass("add").addClass("remove");
                                    d && (b = a[k], void 0 != b && (b.inWatchList = !0));
                                    break;
                                case "confirm":
                                    e();
                                    break;
                                case "false":
                                    f.removeClass("add").addClass("remove").text(g), f.removeClass("inactive"), f.addClass("blackButton").removeClass("loading").text("Add to Watchlist")
                            }
                        }
                    })
                }

                function e() {
                    $.colorbox({
                        inline: !0,
                        transition: "none",
                        href: "#watchListOverrideInterstitial",
                        width: 400,
                        onComplete: function() {
                            var a = $("#cboxContent");
                            a.find(".confirm").click(function(a) {
                                a.preventDefault();
                                b(!0)
                            });
                            a.find(".close").click(function(a) {
                                a.preventDefault();
                                $.colorbox.close()
                            })
                        }
                    })
                }
                c.preventDefault();
                if (motif.vars.isLoggedIn) {
                    c.stopPropagation();
                    var k = $(this).data("urlname"),
                        f = $(this);
                    f.addClass("inactive");
                    var g = $(this).hasClass("longEye") ? "Currently Watching" : "Remove from Watchlist";
                    b()
                }
            });
            $(".watchlistToggle.remove:not(.inactive)").live("click", function(c) {
                c.preventDefault();
                c.stopPropagation();
                var b = $(this).data("urlname"),
                    e = $(this);
                e.addClass("inactive");
                $.mAjax({
                    url: motif.vars.rootURL + "/watchlist/" + b + "/remove/",
                    type: "POST",
                    success: function() {
                        e.removeClass("remove").addClass("add").text("Add to Watchlist");
                        e.removeClass("inactive");
                        $(".watchlistToggle[data-urlname\x3d" + b + "]").removeClass("remove").addClass("add");
                        if (d) {
                            var c = a[b];
                            void 0 != c && (c.inWatchList = !1)
                        }
                    }
                })
            });
            this.watchlistEventsBound = !0
        }
    },
    setupCompanyNameEllipsis: function(a) {
        return motif.widgets.setupTableEllipsis(a, "companyName", "*")
    },
    setupTableEllipsis: function(a, d, c) {
        a = $(a + " td." + d + ":visible").not(".blur");
        var b = a.filter(":visible:eq(0)");
        c = a.find(" \x3e " + c);
        0 != b.length && (c.css("width", "auto"), c.each(function() {
            $(this).data("text-width",
                $(this).width())
        }), c.css("display", "none"), c.each(function() {
            var a = $(this).data("text-width") + 1,
                c = b.width(),
                a = Math.min(a, c);
            c == a && $(this).css("width", a)
        }), c.css("display", "inline-block"))
    },
    setupExpandCollapse: function(a, d, c) {
        a.click(function(a) {
            a.preventDefault();
            var e = this;
            $(this).toggleClass("open");
            $(this).find(d).slideToggle(function() {
                c && $(e).hasClass("open") && motif.widgets.setupCompanyNameEllipsis("#" + e.id + " " + d)
            })
        })
    },
    setupSignupCookie: function(a) {
        "undefined" != typeof motif.vars.clientBasePath &&
            1 == a.split(motif.vars.clientBasePath).length && (a = motif.vars.clientBasePath + a);
        $(".signupButton").click(function() {
            $.cookie("next", a, {
                path: "/",
                domain: motif.vars.cookieDomain
            })
        })
    },
    setupFacebookJSSDK: function(a, d) {
        window.FB && !d ? a && a() : (a && (motif.widgets.facebookLoadCallbacks ? motif.widgets.facebookLoadCallbacks.push(a) : motif.widgets.facebookLoadCallbacks = [a]), d && $("#fb-root, #facebook-jssdk").remove(), $("#fb-root")[0] || $("body").append("\x3cdiv id\x3d'fb-root'\x3e\x3c/div\x3e"), window.fbAsyncInit = function() {
            FB.init({
                appId: motif.vars.facebookAppId,
                channelUrl: location.protocol + "://" + location.hostname + "/templates/fb-xss-channel.html",
                status: !0,
                cookie: !0,
                xfbml: !0
            });
            if (motif.widgets.facebookLoadCallbacks) {
                for (var a = 0; a < motif.widgets.facebookLoadCallbacks.length; a++) motif.widgets.facebookLoadCallbacks[a]();
                motif.widgets.facebookLoadCallbacks = []
            }
        }, function(a) {
            var b = a.getElementsByTagName("script")[0];
            a.getElementById("facebook-jssdk") || (a = a.createElement("script"), a.id = "facebook-jssdk", a.async = !0, a.src = "//connect.facebook.net/en_US/all.js" + (d ? "_" +
                (new Date).getTime() : ""), b.parentNode.insertBefore(a, b))
        }(document))
    },
    loginToFacebook: function(a, d) {
        motif.widgets.setupFacebookJSSDK(function() {
            FB.login(function(c) {
                c.authResponse ? FB.api("/me", function(b) {
                    if ("undefined" == typeof b.id) $(".connectToFacebook").data("connecting", !1);
                    else {
                        var e = {
                            accessToken: c.authResponse.accessToken,
                            fbUserId: b.id
                        };
                        "undefined" != typeof b.location && b.location.name && (e.location = b.location.name);
                        if ("undefined" != typeof b.work && b.work.length)
                            for (var d = 0; d < b.work.length; d++)
                                if ("undefined" !=
                                    typeof b.work[d].position) {
                                    e.profession = b.work[d].position.name;
                                    break
                                }
                        a(e, b)
                    }
                }) : $(".connectToFacebook").data("connecting", !1)
            }, {
                scope: "user_about_me, user_location, email, offline_access, publish_stream"
            })
        }, d)
    },
    setupTabbedNav: function(a) {
        var d = $("\x3e ul li", a);
        d.children("a").click(function(b) {
            b.preventDefault();
            d.children("a").removeClass("active");
            var e = $(this);
            c != window.location.hash ? $("div.component:visible", a).fadeOut(200, function() {
                var a = e.attr("href").substr(2);
                $("#" + a).fadeIn(200)
            }) : (c = e.attr("href").substr(2),
                $("#" + c).show());
            $(this).addClass("active")
        });
        var c = window.location.hash;
        window.location.hash.length ? $("#" + window.location.hash.substr(2)).removeClass("hidden") : $("#" + d.eq(0).find("a").attr("href").substr(2)).removeClass("hidden");
        $.address.change(function(a) {
            d.find('a[href\x3d"#/' + window.location.hash.substr(2) + '"]').trigger("click")
        });
        d.children("a").bind("click", function(a) {
            window.location.hash = "#" + $(this).attr("href").substr(1)
        })
    },
    initProfilePic: function(a) {
        function d() {
            var d = a.width(),
                f = e / b;
            1 > f ? (c.width(d), b = d / f, c.height(b), c.css({
                top: "-" + (b - d) / 2 + "px"
            })) : (c.height(d), e = d * f, c.width(e), c.css({
                left: "-" + (e - d) / 2 + "px"
            }));
            c.css("visibility", "visible")
        }
        var c = $("img", a),
            b = c.height(),
            e = c.width();
        0 != b && 0 != e ? d(e, b) : c.ready(function() {
            b = c.height();
            e = c.width();
            d()
        })
    },
    setupPagination: function(a) {
        var d = Math.ceil((a.totalItemCount || a.data.length) / a.pageSize);
        if (2 > d) a.holder.html("\x26lt; 1 \x26gt;");
        else {
            for (var c = "\x3cspan\x3e", c = 1 == a.currentPage ? c + "\x3cspan class\x3d'prev'\x3e\x26lt;\x3c/span\x3e" :
                    c + "\x3ca href\x3d'#prev'\x3e\x26lt;\x3c/a\x3e ", b = 1; b <= d; b++) a.currentPage == b ? c += "\x3cspan class\x3d'pagenum active'\x3e" + b + "\x3c/span\x3e" : !a.visibleRange || 2 == a.visibleRange ? c = 1 == b || b == d || 1 == a.currentPage && 4 == b || a.currentPage == d && b == d - 3 || 2 >= Math.abs(b - a.currentPage) || 4 > a.currentPage && 4 > b || a.currentPage > d - 3 && b > d - 3 ? c + ("\x3ca class\x3d'pagenum' href\x3d'#" + b + "'\x3e" + b + "\x3c/a\x3e") : c + "." : 1 == a.visibleRange && (c = 1 == b || b == d || 1 == a.currentPage && 3 == b || a.currentPage == d && b == d - 2 || 1 >= Math.abs(b - a.currentPage) ||
                3 > a.currentPage && 3 > b || a.currentPage > d - 2 && b > d - 2 ? c + ("\x3ca class\x3d'pagenum' href\x3d'#" + b + "'\x3e" + b + "\x3c/a\x3e") : c + ".");
            c = c.replace(/\.+/g, "\x3cspan class\x3d'dotdotdot'\x3e...\x3c/span\x3e");
            c = a.currentPage == d ? c + "\x3cspan class\x3d'next'\x3e\x26gt;\x3c/span\x3e" : c + "\x3ca class\x3d'next' href\x3d'#next'\x3e\x26gt;\x3c/a\x3e";
            d = $(c + "\x3c/span\x3e");
            d.find("a").click(function(b) {
                b.preventDefault();
                b = $(this).attr("href");
                "#prev" == b ? a.pageRenderCallback.call(a.pageRenderContext, a.currentPage - 1, a.data) :
                    "#next" == b ? a.pageRenderCallback.call(a.pageRenderContext, a.currentPage + 1, a.data) : (page = parseInt(b.substring(1)), a.pageRenderCallback.call(a.pageRenderContext, page, a.data))
            });
            a.holder.html(d)
        }
    },
    setupProfileTooltips: function(a, d) {
        d = d || {};
        $(a).mouseenter(function() {
            var a = this;
            if ("true" != $(this).data("loaded")) {
                var b = $(this).data("externaluserid");
                b && $.mAjax({
                    url: $.url("/modules/user-info"),
                    data: {
                        externalUserId: b
                    },
                    success: function(b) {
                        if (null != b) {
                            b.memberSince = $.formatDate(new Date(b.memberSince), "M/d/yy");
                            b.rootURL = motif.vars.rootURL;
                            if (d.hideAddFriend || motif.vars.hideInviteButton) b.showInviteButton = !1;
                            b = Mustache.to_html('\x3cdiv class\x3d"profileTip"\x3e\x3cdiv class\x3d"frame clearfix"\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e{{#showInviteButton}}\x3ca href\x3d"#invite" class\x3d"invite" data-externaluserid\x3d"{{externalId}}"\x3e+ Friend\x3c/a\x3e{{/showInviteButton}}\x3ca href\x3d"{{rootURL}}/profile/{{externalId}}"\x3e\x3cimg src\x3d"{{squareProfilePicURL}}" /\x3e\x3c/a\x3e\x3cdiv class\x3d"data"\x3e{{^isAssociate}}{{#isCustomer}}\x3cspan class\x3d"customerBadge"\x3e\x3c/span\x3e{{/isCustomer}}{{/isAssociate}}{{#isAssociate}}\x3cspan class\x3d"associateBadge"\x3e\x3c/span\x3e{{/isAssociate}}\x3ca href\x3d"{{rootURL}}/profile/{{externalId}}" class\x3d"name"\x3e{{name}}\x3c/a\x3e\x3ch4\x3eMember Since: \x3cspan class\x3d"memberSince"\x3e{{memberSince}}\x3c/span\x3e\x3c/h4\x3e{{#hasWatchlist}}\x3cp\x3eCurrently Watching:\x3c/p\x3e\x3cul class\x3d"currentlyWatching"\x3e\x3c/ul\x3e{{#watching}}\x3cli\x3e{{#motifDTO}}\x3ca href\x3d"{{rootURL}}/motifs/{{#benchmarkMotifUrlName}}{{benchmarkMotifUrlName}}/{{/benchmarkMotifUrlName}}{{urlName}}"\x3e{{#custom}}\x3cspan class\x3d"my"\x3eCustom \x3c/span\x3e{{/custom}}{{name}}\x3c/a\x3e{{/motifDTO}}\x3c/li\x3e{{/watching}}\x3c/ul\x3e{{/hasWatchlist}}{{#profession}}\x3cp\x3e{{profession}}\x3c/p\x3e{{/profession}}{{#location}}\x3cp\x3e{{location}}\x3c/p\x3e{{/location}}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
                                b);
                            $(a).find(".profileTipAnchor").after(b);
                            $(a).find(".profileTip .invite").unbind("click").click(function(a) {
                                a.preventDefault();
                                var b = this;
                                a = $(this).data("externaluserid");
                                $.mAjax({
                                    url: $.url("/social/invite-profile"),
                                    type: "POST",
                                    data: {
                                        externalUserId: a
                                    },
                                    success: function() {
                                        $(b).unbind("click");
                                        $(b).html("Sent")
                                    }
                                })
                            });
                            $(a).data("loaded", "true")
                        }
                    },
                    error: function() {}
                })
            }
        })
    },
    setupNoReturnsHover: function() {
        $(".noReturns").live("mouseenter", function() {
            var a = $(this),
                d = {
                    originDate: a.data("origin-date"),
                    inceptionReturns: a.data("inceptionReturns")
                };
            $.addMustacheModelFunctions(d);
            a.tipTip({
                activation: "now",
                content: Mustache.to_html($("#noReturnsHoverTemplate").html(), d),
                eventType: "hover",
                tipType: "declarative",
                defaultPosition: "top",
                zIndex: "99999999"
            })
        })
    },
    socialContentWarning: function() {
        motif.vars.isLoggedIn && $("#socialContentWarning")[0] && ($("#socialContentWarning a.vividButton").unbind("click").click(function(a) {
            a.preventDefault();
            $.colorbox.close()
        }), $("#socialContentWarning").unbind("cbox_cleanup").bind("cbox_cleanup", function() {
            $(this).is(":visible") &&
                (motif.acknowledgedSocialContentWarning = !0, $.mAjax({
                url: $.url("/motifs/byo/acknowledge-warning"),
                type: "POST"
            }))
        }), $.colorbox({
            inline: !0,
            transition: "none",
            href: "#socialContentWarning",
            width: "600"
        }))
    },
    initSwitchAccountContext: function(a) {
        $(".accountContext").on("change", function() {
            var d = $(this).closest("form");
            a = a || location.pathname + location.hash;
            d.children().filter(".nextPage").val(a);
            d.submit()
        })
    },
    switchAccountSilently: function(a, d) {
        $.mAjax({
            url: $.url("/silentAccountSwitch"),
            type: "POST",
            data: {
                account: a
            },
            success: function(a) {
                d(a)
            }
        })
    },
    initPrimaryEmailEditor: function(a, d) {
        $.mDialog({
            html: Handlebars.compile($("#editPrimaryEmailLightboxTemplate").html())({
                defaultEmail: a
            }),
            transition: "none",
            onComplete: function() {
                var a = new Validator;
                $(".mDialog input").each(function() {
                    a.addObject($(this), "blur")
                });
                $(".mDialog .saveButton").click(function(b) {
                    b.preventDefault();
                    a.fullValidate() && $.mAjax({
                        url: $.url("/account/settings/edit-primary-email-unverified"),
                        type: "POST",
                        data: {
                            email: $(".mDialog input[name\x3dprimaryEmailAddress]").val(),
                            currentPassword: $(".mDialog input[name\x3dcurrentPassword]").val()
                        },
                        success: function(a) {
                            a.success && (d && d(a), $.mDialog.close())
                        }
                    })
                });
                $(".mDialog .cancelButton").click(function(a) {
                    a.preventDefault();
                    $.mDialog.close()
                })
            }
        })
    }
});
(function(a, d) {
    var c = function(a, c) {
        this.model = {};
        this.templates = {};
        this.initTemplates();
        this.init(a, c);
        this.bindEvents()
    };
    c.fn = c.prototype;
    c.fn.initTemplates = function() {
        motif.vars.isLoggedIn && (this.templates.upsellTemplate = Handlebars.compile(a("#upsellInterstitialTemplate").html()))
    };
    c.fn.init = function(a, c) {
        this.model.transition = a || "none";
        this.model.motifUrl = "undefined" != typeof c ? "/motifs/" + c : "";
        this.model.loggedIn = motif.vars.isLoggedIn;
        this.prepareColorboxConfig(a, c)
    };
    c.fn.prepareColorboxConfig =
        function(b, c) {
            var d = ["visitor", "user", "customer", "advisor"][a.cookie(motif.vars.ascCookieName) || 0],
                f = "",
                g = 495;
            this.model.transition = b ? b : this.model.transition;
            this.model.motifUrl = c ? "/" + c : this.model.motifUrl;
            if (this.model.loggedIn) this.model.interstitialConfig = {
                inline: !0,
                href: "#upsellInterstitial",
                transition: this.model.transition,
                width: this.model.loggedIn ? 460 : 620,
                height: this.model.loggedIn ? null : 300,
                onComplete: function() {
                    a("#colorbox").find(".boringButton").bind("click", function(b) {
                        a.colorbox.close();
                        a(this).unbind("click");
                        b.preventDefault()
                    })
                }
            };
            else {
                window.location.hash && (f = "?tab\x3d" + window.location.hash.substring(1));
                var h = motif.vars.authBasePath + "/login-modal?next\x3d" + motif.vars.clientBasePath,
                    h = this.model.targetUrl ? h + this.model.targetUrl : h + this.model.motifUrl;
                if ("user" == d || "customer" == d) g = 406;
                this.model.interstitialConfig = {
                    iframe: !0,
                    width: 440,
                    height: g,
                    href: h + f,
                    transition: "none"
                }
            }
    };
    c.fn.bindEvents = function() {
        var b = this;
        a(document).off("click", ".upsellInterstitialButton, .upsellInterstitialButton2").on("click",
            ".upsellInterstitialButton, .upsellInterstitialButton2", function(c) {
                c.preventDefault();
                c.stopPropagation();
                c = a(this);
                var d = c.data("target");
                d && 0 < d.length && (b.model.targetUrl = d, b.prepareColorboxConfig());
                d = c.data("id");
                null != d && d.length ? b.switchAccountAndShowUpsell(d) : b.showUpsell(c)
            })
    };
    c.fn.showUpsell = function(b) {
        var c = ["visitor", "user", "customer", "advisor"][a.cookie(motif.vars.ascCookieName) || 0],
            d = "",
            f = motif.vars.authBasePath,
            g = a("#saveToMyCustom");
        b.hasClass("upsellInterstitialButton") && g.hasClass("blackButton") &&
            g.trigger("click", "signupSave");
        !this.model.loggedIn  && a.agent().touch && a.agent().mobile ? (window.location.hash && (d = "?tab\x3d" + window.location.hash.substring(1)), f += "/" + ("user" == c || "customer" == c ? "login" : "signup") + "?next\x3d" + motif.vars.clientBasePath, f = this.model.targetUrl ? f + this.model.targetUrl : f + this.model.motifUrl, f += d, setTimeout(function() {
            location.assign(f)
        }, 100)) : a.colorbox(this.model.interstitialConfig).init()
    };
    c.fn.switchAccountAndShowUpsell = function(b) {
        var c = this;
        motif.widgets.switchAccountSilently(b,
            function(b) {
                var d = {
                    isApplying: !1,
                    isApplied: !1,
                    isApproved: !1,
                    hasAction: !1,
                    isRejected: !1,
                    isClosed: !1
                };
                "APPLIED" == b.status ? (d.isApplied = !0, d.hasAction = !0) : "APPLYING" == b.status ? (d.isApplying = !0, d.hasAction = !0) : "APPROVED" == b.status ? (d.isApproved = !0, d.hasAction = !0) : "REJECTED" == b.status ? d.isRejected = !0 : "CLOSED" == b.status && (d.isClosed = !0);
                c.templates.upsellTemplate && (b = c.templates.upsellTemplate(d), a.colorbox({
                    transition: "none",
                    width: 460,
                    html: b,
                    onComplete: function() {
                        a("#colorbox").find(".boringButton").on("click",
                            function(b) {
                                b.preventDefault();
                                a(this).off("click");
                                a.colorbox.close()
                            })
                    }
                }))
            })
    };
    d.motif.widgets.UpsellInterstitial = c
})($, window);
