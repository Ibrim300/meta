function t(t, e, i, n) {
    Object.defineProperty(t, e, {
        get: i,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
function e(t, e) {
    return Object.keys(e).forEach((function(i) {
        "default" === i || "__esModule" === i || t.hasOwnProperty(i) || Object.defineProperty(t, i, {
            enumerable: !0,
            get: function() {
                return e[i]
            }
        })
    }
    )),
    t
}
var i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
  , n = {}
  , s = {}
  , o = i.parcelRequirecc45;
null == o && ((o = function(t) {
    if (t in n)
        return n[t].exports;
    if (t in s) {
        var e = s[t];
        delete s[t];
        var i = {
            id: t,
            exports: {}
        };
        return n[t] = i,
        e.call(i.exports, i, i.exports),
        i.exports
    }
    var o = new Error("Cannot find module '" + t + "'");
    throw o.code = "MODULE_NOT_FOUND",
    o
}
).register = function(t, e) {
    s[t] = e
}
,
i.parcelRequirecc45 = o),
o.register("hxwDY", (function(i, n) {
    t(i.exports, "popperGenerator", (()=>o("8iXfp").popperGenerator)),
    t(i.exports, "detectOverflow", (()=>o("gGcga").default)),
    t(i.exports, "createPopperBase", (()=>o("8iXfp").createPopper)),
    t(i.exports, "createPopper", (()=>o("3tUi5").createPopper)),
    t(i.exports, "createPopperLite", (()=>o("kznft").createPopper));
    var s = o("1KQnQ")
      , r = o("e0Om6");
    o("8iXfp"),
    o("gGcga"),
    o("3tUi5"),
    o("kznft");
    e(i.exports, s),
    e(i.exports, r)
}
)),
o.register("1KQnQ", (function(e, i) {
    t(e.exports, "top", (()=>n)),
    t(e.exports, "bottom", (()=>s)),
    t(e.exports, "right", (()=>o)),
    t(e.exports, "left", (()=>r)),
    t(e.exports, "auto", (()=>a)),
    t(e.exports, "basePlacements", (()=>l)),
    t(e.exports, "start", (()=>c)),
    t(e.exports, "end", (()=>d)),
    t(e.exports, "clippingParents", (()=>u)),
    t(e.exports, "viewport", (()=>h)),
    t(e.exports, "popper", (()=>f)),
    t(e.exports, "reference", (()=>p)),
    t(e.exports, "variationPlacements", (()=>g)),
    t(e.exports, "placements", (()=>m)),
    t(e.exports, "beforeRead", (()=>_)),
    t(e.exports, "read", (()=>v)),
    t(e.exports, "afterRead", (()=>b)),
    t(e.exports, "beforeMain", (()=>y)),
    t(e.exports, "main", (()=>w)),
    t(e.exports, "afterMain", (()=>E)),
    t(e.exports, "beforeWrite", (()=>x)),
    t(e.exports, "write", (()=>T)),
    t(e.exports, "afterWrite", (()=>A)),
    t(e.exports, "modifierPhases", (()=>O));
    var n = "top"
      , s = "bottom"
      , o = "right"
      , r = "left"
      , a = "auto"
      , l = [n, s, o, r]
      , c = "start"
      , d = "end"
      , u = "clippingParents"
      , h = "viewport"
      , f = "popper"
      , p = "reference"
      , g = l.reduce((function(t, e) {
        return t.concat([e + "-" + c, e + "-" + d])
    }
    ), [])
      , m = [].concat(l, [a]).reduce((function(t, e) {
        return t.concat([e, e + "-" + c, e + "-" + d])
    }
    ), [])
      , _ = "beforeRead"
      , v = "read"
      , b = "afterRead"
      , y = "beforeMain"
      , w = "main"
      , E = "afterMain"
      , x = "beforeWrite"
      , T = "write"
      , A = "afterWrite"
      , O = [_, v, b, y, w, E, x, T, A]
}
)),
o.register("e0Om6", (function(e, i) {
    t(e.exports, "applyStyles", (()=>o("aOl9t").default)),
    t(e.exports, "arrow", (()=>o("kU5lB").default)),
    t(e.exports, "computeStyles", (()=>o("5ZHwq").default)),
    t(e.exports, "eventListeners", (()=>o("jU5vk").default)),
    t(e.exports, "flip", (()=>o("hMqHB").default)),
    t(e.exports, "hide", (()=>o("95q7y").default)),
    t(e.exports, "offset", (()=>o("lWzyf").default)),
    t(e.exports, "popperOffsets", (()=>o("cePA2").default)),
    t(e.exports, "preventOverflow", (()=>o("bxdrS").default));
    o("aOl9t"),
    o("kU5lB"),
    o("5ZHwq"),
    o("jU5vk"),
    o("hMqHB"),
    o("95q7y"),
    o("lWzyf"),
    o("cePA2"),
    o("bxdrS")
}
)),
o.register("aOl9t", (function(e, i) {
    t(e.exports, "default", (()=>r));
    var n = o("oKPBf")
      , s = o("93iQ7");
    var r = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {}
                  , o = e.attributes[t] || {}
                  , r = e.elements[t];
                (0,
                s.isHTMLElement)(r) && (0,
                n.default)(r) && (Object.assign(r.style, i),
                Object.keys(o).forEach((function(t) {
                    var e = o[t];
                    !1 === e ? r.removeAttribute(t) : r.setAttribute(t, !0 === e ? "" : e)
                }
                )))
            }
            ))
        },
        effect: function(t) {
            var e = t.state
              , i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper),
            e.styles = i,
            e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
            function() {
                Object.keys(e.elements).forEach((function(t) {
                    var o = e.elements[t]
                      , r = e.attributes[t] || {}
                      , a = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                        return t[e] = "",
                        t
                    }
                    ), {});
                    (0,
                    s.isHTMLElement)(o) && (0,
                    n.default)(o) && (Object.assign(o.style, a),
                    Object.keys(r).forEach((function(t) {
                        o.removeAttribute(t)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    }
}
)),
o.register("oKPBf", (function(e, i) {
    function n(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("93iQ7", (function(e, i) {
    t(e.exports, "isElement", (()=>s)),
    t(e.exports, "isHTMLElement", (()=>r)),
    t(e.exports, "isShadowRoot", (()=>a));
    var n = o("93G53");
    function s(t) {
        return t instanceof (0,
        n.default)(t).Element || t instanceof Element
    }
    function r(t) {
        return t instanceof (0,
        n.default)(t).HTMLElement || t instanceof HTMLElement
    }
    function a(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof (0,
        n.default)(t).ShadowRoot || t instanceof ShadowRoot)
    }
}
)),
o.register("93G53", (function(e, i) {
    function n(t) {
        if (null == t)
            return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("kU5lB", (function(e, i) {
    t(e.exports, "default", (()=>f));
    var n = o("h06jI")
      , s = o("dElKO")
      , r = o("ciq1x")
      , a = o("5KzeH")
      , l = o("g1hRA")
      , c = o("cOvrb")
      , d = o("3Os63")
      , u = o("hdgde")
      , h = o("1KQnQ");
    var f = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state, o = t.name, r = t.options, f = i.elements.arrow, p = i.modifiersData.popperOffsets, g = (0,
            n.default)(i.placement), m = (0,
            l.default)(g), _ = [h.left, h.right].indexOf(g) >= 0 ? "height" : "width";
            if (f && p) {
                var v = function(t, e) {
                    return t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t,
                    (0,
                    d.default)("number" != typeof t ? t : (0,
                    u.default)(t, h.basePlacements))
                }(r.padding, i)
                  , b = (0,
                s.default)(f)
                  , y = "y" === m ? h.top : h.left
                  , w = "y" === m ? h.bottom : h.right
                  , E = i.rects.reference[_] + i.rects.reference[m] - p[m] - i.rects.popper[_]
                  , x = p[m] - i.rects.reference[m]
                  , T = (0,
                a.default)(f)
                  , A = T ? "y" === m ? T.clientHeight || 0 : T.clientWidth || 0 : 0
                  , O = E / 2 - x / 2
                  , L = v[y]
                  , k = A - b[_] - v[w]
                  , D = A / 2 - b[_] / 2 + O
                  , $ = (0,
                c.within)(L, D, k)
                  , S = m;
                i.modifiersData[o] = ((e = {})[S] = $,
                e.centerOffset = $ - D,
                e)
            }
        },
        effect: function(t) {
            var e = t.state
              , i = t.options.element
              , n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && (0,
            r.default)(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    }
}
)),
o.register("h06jI", (function(e, i) {
    function n(t) {
        return t.split("-")[0]
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("dElKO", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = o("41Z5W");
    function s(t) {
        var e = (0,
        n.default)(t)
          , i = t.offsetWidth
          , s = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width),
        Math.abs(e.height - s) <= 1 && (s = e.height),
        {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: s
        }
    }
}
)),
o.register("41Z5W", (function(e, i) {
    t(e.exports, "default", (()=>l));
    var n = o("93iQ7")
      , s = o("4J8n1")
      , r = o("93G53")
      , a = o("gotNd");
    function l(t, e, i) {
        void 0 === e && (e = !1),
        void 0 === i && (i = !1);
        var o = t.getBoundingClientRect()
          , l = 1
          , c = 1;
        e && (0,
        n.isHTMLElement)(t) && (l = t.offsetWidth > 0 && (0,
        s.round)(o.width) / t.offsetWidth || 1,
        c = t.offsetHeight > 0 && (0,
        s.round)(o.height) / t.offsetHeight || 1);
        var d = ((0,
        n.isElement)(t) ? (0,
        r.default)(t) : window).visualViewport
          , u = !(0,
        a.default)() && i
          , h = (o.left + (u && d ? d.offsetLeft : 0)) / l
          , f = (o.top + (u && d ? d.offsetTop : 0)) / c
          , p = o.width / l
          , g = o.height / c;
        return {
            width: p,
            height: g,
            top: f,
            right: h + p,
            bottom: f + g,
            left: h,
            x: h,
            y: f
        }
    }
}
)),
o.register("4J8n1", (function(e, i) {
    t(e.exports, "max", (()=>n)),
    t(e.exports, "min", (()=>s)),
    t(e.exports, "round", (()=>o));
    var n = Math.max
      , s = Math.min
      , o = Math.round
}
)),
o.register("gotNd", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = o("9r1ut");
    function s() {
        return !/^((?!chrome|android).)*safari/i.test((0,
        n.default)())
    }
}
)),
o.register("9r1ut", (function(e, i) {
    function n() {
        var t = navigator.userAgentData;
        return null != t && t.brands ? t.brands.map((function(t) {
            return t.brand + "/" + t.version
        }
        )).join(" ") : navigator.userAgent
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("ciq1x", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = o("93iQ7");
    function s(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (i && (0,
        n.isShadowRoot)(i)) {
            var s = e;
            do {
                if (s && t.isSameNode(s))
                    return !0;
                s = s.parentNode || s.host
            } while (s)
        }
        return !1
    }
}
)),
o.register("5KzeH", (function(e, i) {
    t(e.exports, "default", (()=>h));
    var n = o("93G53")
      , s = o("oKPBf")
      , r = o("huVQQ")
      , a = o("93iQ7")
      , l = o("lKbxe")
      , c = o("aerap")
      , d = o("9r1ut");
    function u(t) {
        return (0,
        a.isHTMLElement)(t) && "fixed" !== (0,
        r.default)(t).position ? t.offsetParent : null
    }
    function h(t) {
        for (var e = (0,
        n.default)(t), i = u(t); i && (0,
        l.default)(i) && "static" === (0,
        r.default)(i).position; )
            i = u(i);
        return i && ("html" === (0,
        s.default)(i) || "body" === (0,
        s.default)(i) && "static" === (0,
        r.default)(i).position) ? e : i || function(t) {
            var e = /firefox/i.test((0,
            d.default)());
            if (/Trident/i.test((0,
            d.default)()) && (0,
            a.isHTMLElement)(t) && "fixed" === (0,
            r.default)(t).position)
                return null;
            var i = (0,
            c.default)(t);
            for ((0,
            a.isShadowRoot)(i) && (i = i.host); (0,
            a.isHTMLElement)(i) && ["html", "body"].indexOf((0,
            s.default)(i)) < 0; ) {
                var n = (0,
                r.default)(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter)
                    return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }
}
)),
o.register("huVQQ", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = o("93G53");
    function s(t) {
        return (0,
        n.default)(t).getComputedStyle(t)
    }
}
)),
o.register("lKbxe", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = o("oKPBf");
    function s(t) {
        return ["table", "td", "th"].indexOf((0,
        n.default)(t)) >= 0
    }
}
)),
o.register("aerap", (function(e, i) {
    t(e.exports, "default", (()=>a));
    var n = o("oKPBf")
      , s = o("17OuU")
      , r = o("93iQ7");
    function a(t) {
        return "html" === (0,
        n.default)(t) ? t : t.assignedSlot || t.parentNode || ((0,
        r.isShadowRoot)(t) ? t.host : null) || (0,
        s.default)(t)
    }
}
)),
o.register("17OuU", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = o("93iQ7");
    function s(t) {
        return (((0,
        n.isElement)(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
}
)),
o.register("g1hRA", (function(e, i) {
    function n(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("cOvrb", (function(e, i) {
    t(e.exports, "within", (()=>s)),
    t(e.exports, "withinMaxClamp", (()=>r));
    var n = o("4J8n1");
    function s(t, e, i) {
        return (0,
        n.max)(t, (0,
        n.min)(e, i))
    }
    function r(t, e, i) {
        var n = s(t, e, i);
        return n > i ? i : n
    }
}
)),
o.register("3Os63", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = o("gcu3h");
    function s(t) {
        return Object.assign({}, (0,
        n.default)(), t)
    }
}
)),
o.register("gcu3h", (function(e, i) {
    function n() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("hdgde", (function(e, i) {
    function n(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t,
            e
        }
        ), {})
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("5ZHwq", (function(e, i) {
    t(e.exports, "default", (()=>p));
    var n = o("1KQnQ")
      , s = o("5KzeH")
      , r = o("93G53")
      , a = o("17OuU")
      , l = o("huVQQ")
      , c = o("h06jI")
      , d = o("7kchx")
      , u = o("4J8n1")
      , h = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function f(t) {
        var e, i = t.popper, o = t.popperRect, c = t.placement, d = t.variation, f = t.offsets, p = t.position, g = t.gpuAcceleration, m = t.adaptive, _ = t.roundOffsets, v = t.isFixed, b = f.x, y = void 0 === b ? 0 : b, w = f.y, E = void 0 === w ? 0 : w, x = "function" == typeof _ ? _({
            x: y,
            y: E
        }) : {
            x: y,
            y: E
        };
        y = x.x,
        E = x.y;
        var T = f.hasOwnProperty("x")
          , A = f.hasOwnProperty("y")
          , O = n.left
          , L = n.top
          , k = window;
        if (m) {
            var D = (0,
            s.default)(i)
              , $ = "clientHeight"
              , S = "clientWidth";
            if (D === (0,
            r.default)(i) && (D = (0,
            a.default)(i),
            "static" !== (0,
            l.default)(D).position && "absolute" === p && ($ = "scrollHeight",
            S = "scrollWidth")),
            c === n.top || (c === n.left || c === n.right) && d === n.end)
                L = n.bottom,
                E -= (v && D === k && k.visualViewport ? k.visualViewport.height : D[$]) - o.height,
                E *= g ? 1 : -1;
            if (c === n.left || (c === n.top || c === n.bottom) && d === n.end)
                O = n.right,
                y -= (v && D === k && k.visualViewport ? k.visualViewport.width : D[S]) - o.width,
                y *= g ? 1 : -1
        }
        var C, j = Object.assign({
            position: p
        }, m && h), P = !0 === _ ? function(t) {
            var e = t.x
              , i = t.y
              , n = window.devicePixelRatio || 1;
            return {
                x: (0,
                u.round)(e * n) / n || 0,
                y: (0,
                u.round)(i * n) / n || 0
            }
        }({
            x: y,
            y: E
        }) : {
            x: y,
            y: E
        };
        return y = P.x,
        E = P.y,
        g ? Object.assign({}, j, ((C = {})[L] = A ? "0" : "",
        C[O] = T ? "0" : "",
        C.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + E + "px)" : "translate3d(" + y + "px, " + E + "px, 0)",
        C)) : Object.assign({}, j, ((e = {})[L] = A ? E + "px" : "",
        e[O] = T ? y + "px" : "",
        e.transform = "",
        e))
    }
    var p = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , n = i.gpuAcceleration
              , s = void 0 === n || n
              , o = i.adaptive
              , r = void 0 === o || o
              , a = i.roundOffsets
              , l = void 0 === a || a
              , u = {
                placement: (0,
                c.default)(e.placement),
                variation: (0,
                d.default)(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, f(Object.assign({}, u, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, f(Object.assign({}, u, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))),
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    }
}
)),
o.register("7kchx", (function(e, i) {
    function n(t) {
        return t.split("-")[1]
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("jU5vk", (function(e, i) {
    t(e.exports, "default", (()=>r));
    var n = o("93G53")
      , s = {
        passive: !0
    };
    var r = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , i = t.instance
              , o = t.options
              , r = o.scroll
              , a = void 0 === r || r
              , l = o.resize
              , c = void 0 === l || l
              , d = (0,
            n.default)(e.elements.popper)
              , u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return a && u.forEach((function(t) {
                t.addEventListener("scroll", i.update, s)
            }
            )),
            c && d.addEventListener("resize", i.update, s),
            function() {
                a && u.forEach((function(t) {
                    t.removeEventListener("scroll", i.update, s)
                }
                )),
                c && d.removeEventListener("resize", i.update, s)
            }
        },
        data: {}
    }
}
)),
o.register("hMqHB", (function(e, i) {
    t(e.exports, "default", (()=>u));
    var n = o("eFT7Y")
      , s = o("h06jI")
      , r = o("4NVvZ")
      , a = o("gGcga")
      , l = o("iN4T7")
      , c = o("1KQnQ")
      , d = o("7kchx");
    var u = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , o = t.name;
            if (!e.modifiersData[o]._skip) {
                for (var u = i.mainAxis, h = void 0 === u || u, f = i.altAxis, p = void 0 === f || f, g = i.fallbackPlacements, m = i.padding, _ = i.boundary, v = i.rootBoundary, b = i.altBoundary, y = i.flipVariations, w = void 0 === y || y, E = i.allowedAutoPlacements, x = e.options.placement, T = (0,
                s.default)(x), A = g || (T === x || !w ? [(0,
                n.default)(x)] : function(t) {
                    if ((0,
                    s.default)(t) === c.auto)
                        return [];
                    var e = (0,
                    n.default)(t);
                    return [(0,
                    r.default)(t), e, (0,
                    r.default)(e)]
                }(x)), O = [x].concat(A).reduce((function(t, i) {
                    return t.concat((0,
                    s.default)(i) === c.auto ? (0,
                    l.default)(e, {
                        placement: i,
                        boundary: _,
                        rootBoundary: v,
                        padding: m,
                        flipVariations: w,
                        allowedAutoPlacements: E
                    }) : i)
                }
                ), []), L = e.rects.reference, k = e.rects.popper, D = new Map, $ = !0, S = O[0], C = 0; C < O.length; C++) {
                    var j = O[C]
                      , P = (0,
                    s.default)(j)
                      , N = (0,
                    d.default)(j) === c.start
                      , H = [c.top, c.bottom].indexOf(P) >= 0
                      , M = H ? "width" : "height"
                      , I = (0,
                    a.default)(e, {
                        placement: j,
                        boundary: _,
                        rootBoundary: v,
                        altBoundary: b,
                        padding: m
                    })
                      , B = H ? N ? c.right : c.left : N ? c.bottom : c.top;
                    L[M] > k[M] && (B = (0,
                    n.default)(B));
                    var W = (0,
                    n.default)(B)
                      , R = [];
                    if (h && R.push(I[P] <= 0),
                    p && R.push(I[B] <= 0, I[W] <= 0),
                    R.every((function(t) {
                        return t
                    }
                    ))) {
                        S = j,
                        $ = !1;
                        break
                    }
                    D.set(j, R)
                }
                if ($)
                    for (var Q = function(t) {
                        var e = O.find((function(e) {
                            var i = D.get(e);
                            if (i)
                                return i.slice(0, t).every((function(t) {
                                    return t
                                }
                                ))
                        }
                        ));
                        if (e)
                            return S = e,
                            "break"
                    }, K = w ? 3 : 1; K > 0; K--) {
                        if ("break" === Q(K))
                            break
                    }
                e.placement !== S && (e.modifiersData[o]._skip = !0,
                e.placement = S,
                e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    }
}
)),
o.register("eFT7Y", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function s(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return n[t]
        }
        ))
    }
}
)),
o.register("4NVvZ", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = {
        start: "end",
        end: "start"
    };
    function s(t) {
        return t.replace(/start|end/g, (function(t) {
            return n[t]
        }
        ))
    }
}
)),
o.register("gGcga", (function(e, i) {
    t(e.exports, "default", (()=>f));
    var n = o("5T76m")
      , s = o("17OuU")
      , r = o("41Z5W")
      , a = o("dgDBP")
      , l = o("ik7Fq")
      , c = o("1KQnQ")
      , d = o("93iQ7")
      , u = o("3Os63")
      , h = o("hdgde");
    function f(t, e) {
        void 0 === e && (e = {});
        var i = e
          , o = i.placement
          , f = void 0 === o ? t.placement : o
          , p = i.strategy
          , g = void 0 === p ? t.strategy : p
          , m = i.boundary
          , _ = void 0 === m ? c.clippingParents : m
          , v = i.rootBoundary
          , b = void 0 === v ? c.viewport : v
          , y = i.elementContext
          , w = void 0 === y ? c.popper : y
          , E = i.altBoundary
          , x = void 0 !== E && E
          , T = i.padding
          , A = void 0 === T ? 0 : T
          , O = (0,
        u.default)("number" != typeof A ? A : (0,
        h.default)(A, c.basePlacements))
          , L = w === c.popper ? c.reference : c.popper
          , k = t.rects.popper
          , D = t.elements[x ? L : w]
          , $ = (0,
        n.default)((0,
        d.isElement)(D) ? D : D.contextElement || (0,
        s.default)(t.elements.popper), _, b, g)
          , S = (0,
        r.default)(t.elements.reference)
          , C = (0,
        a.default)({
            reference: S,
            element: k,
            strategy: "absolute",
            placement: f
        })
          , j = (0,
        l.default)(Object.assign({}, k, C))
          , P = w === c.popper ? j : S
          , N = {
            top: $.top - P.top + O.top,
            bottom: P.bottom - $.bottom + O.bottom,
            left: $.left - P.left + O.left,
            right: P.right - $.right + O.right
        }
          , H = t.modifiersData.offset;
        if (w === c.popper && H) {
            var M = H[f];
            Object.keys(N).forEach((function(t) {
                var e = [c.right, c.bottom].indexOf(t) >= 0 ? 1 : -1
                  , i = [c.top, c.bottom].indexOf(t) >= 0 ? "y" : "x";
                N[t] += M[i] * e
            }
            ))
        }
        return N
    }
}
)),
o.register("5T76m", (function(e, i) {
    t(e.exports, "default", (()=>b));
    var n = o("1KQnQ")
      , s = o("e1yxe")
      , r = o("ef4Kl")
      , a = o("cqjGx")
      , l = o("5KzeH")
      , c = o("17OuU")
      , d = o("huVQQ")
      , u = o("93iQ7")
      , h = o("41Z5W")
      , f = o("aerap")
      , p = o("ciq1x")
      , g = o("oKPBf")
      , m = o("ik7Fq")
      , _ = o("4J8n1");
    function v(t, e, i) {
        return e === n.viewport ? (0,
        m.default)((0,
        s.default)(t, i)) : (0,
        u.isElement)(e) ? function(t, e) {
            var i = (0,
            h.default)(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop,
            i.left = i.left + t.clientLeft,
            i.bottom = i.top + t.clientHeight,
            i.right = i.left + t.clientWidth,
            i.width = t.clientWidth,
            i.height = t.clientHeight,
            i.x = i.left,
            i.y = i.top,
            i
        }(e, i) : (0,
        m.default)((0,
        r.default)((0,
        c.default)(t)))
    }
    function b(t, e, i, n) {
        var s = "clippingParents" === e ? function(t) {
            var e = (0,
            a.default)((0,
            f.default)(t))
              , i = ["absolute", "fixed"].indexOf((0,
            d.default)(t).position) >= 0 && (0,
            u.isHTMLElement)(t) ? (0,
            l.default)(t) : t;
            return (0,
            u.isElement)(i) ? e.filter((function(t) {
                return (0,
                u.isElement)(t) && (0,
                p.default)(t, i) && "body" !== (0,
                g.default)(t)
            }
            )) : []
        }(t) : [].concat(e)
          , o = [].concat(s, [i])
          , r = o[0]
          , c = o.reduce((function(e, i) {
            var s = v(t, i, n);
            return e.top = (0,
            _.max)(s.top, e.top),
            e.right = (0,
            _.min)(s.right, e.right),
            e.bottom = (0,
            _.min)(s.bottom, e.bottom),
            e.left = (0,
            _.max)(s.left, e.left),
            e
        }
        ), v(t, r, n));
        return c.width = c.right - c.left,
        c.height = c.bottom - c.top,
        c.x = c.left,
        c.y = c.top,
        c
    }
}
)),
o.register("e1yxe", (function(e, i) {
    t(e.exports, "default", (()=>l));
    var n = o("93G53")
      , s = o("17OuU")
      , r = o("8fnXo")
      , a = o("gotNd");
    function l(t, e) {
        var i = (0,
        n.default)(t)
          , o = (0,
        s.default)(t)
          , l = i.visualViewport
          , c = o.clientWidth
          , d = o.clientHeight
          , u = 0
          , h = 0;
        if (l) {
            c = l.width,
            d = l.height;
            var f = (0,
            a.default)();
            (f || !f && "fixed" === e) && (u = l.offsetLeft,
            h = l.offsetTop)
        }
        return {
            width: c,
            height: d,
            x: u + (0,
            r.default)(t),
            y: h
        }
    }
}
)),
o.register("8fnXo", (function(e, i) {
    t(e.exports, "default", (()=>a));
    var n = o("41Z5W")
      , s = o("17OuU")
      , r = o("4WW7r");
    function a(t) {
        return (0,
        n.default)((0,
        s.default)(t)).left + (0,
        r.default)(t).scrollLeft
    }
}
)),
o.register("4WW7r", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = o("93G53");
    function s(t) {
        var e = (0,
        n.default)(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
}
)),
o.register("ef4Kl", (function(e, i) {
    t(e.exports, "default", (()=>c));
    var n = o("17OuU")
      , s = o("huVQQ")
      , r = o("8fnXo")
      , a = o("4WW7r")
      , l = o("4J8n1");
    function c(t) {
        var e, i = (0,
        n.default)(t), o = (0,
        a.default)(t), c = null == (e = t.ownerDocument) ? void 0 : e.body, d = (0,
        l.max)(i.scrollWidth, i.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), u = (0,
        l.max)(i.scrollHeight, i.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0), h = -o.scrollLeft + (0,
        r.default)(t), f = -o.scrollTop;
        return "rtl" === (0,
        s.default)(c || i).direction && (h += (0,
        l.max)(i.clientWidth, c ? c.clientWidth : 0) - d),
        {
            width: d,
            height: u,
            x: h,
            y: f
        }
    }
}
)),
o.register("cqjGx", (function(e, i) {
    t(e.exports, "default", (()=>l));
    var n = o("3QP5e")
      , s = o("aerap")
      , r = o("93G53")
      , a = o("1ADUj");
    function l(t, e) {
        var i;
        void 0 === e && (e = []);
        var o = (0,
        n.default)(t)
          , c = o === (null == (i = t.ownerDocument) ? void 0 : i.body)
          , d = (0,
        r.default)(o)
          , u = c ? [d].concat(d.visualViewport || [], (0,
        a.default)(o) ? o : []) : o
          , h = e.concat(u);
        return c ? h : h.concat(l((0,
        s.default)(u)))
    }
}
)),
o.register("3QP5e", (function(e, i) {
    t(e.exports, "default", (()=>l));
    var n = o("aerap")
      , s = o("1ADUj")
      , r = o("oKPBf")
      , a = o("93iQ7");
    function l(t) {
        return ["html", "body", "#document"].indexOf((0,
        r.default)(t)) >= 0 ? t.ownerDocument.body : (0,
        a.isHTMLElement)(t) && (0,
        s.default)(t) ? t : l((0,
        n.default)(t))
    }
}
)),
o.register("1ADUj", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = o("huVQQ");
    function s(t) {
        var e = (0,
        n.default)(t)
          , i = e.overflow
          , s = e.overflowX
          , o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + o + s)
    }
}
)),
o.register("ik7Fq", (function(e, i) {
    function n(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("dgDBP", (function(e, i) {
    t(e.exports, "default", (()=>l));
    var n = o("h06jI")
      , s = o("7kchx")
      , r = o("g1hRA")
      , a = o("1KQnQ");
    function l(t) {
        var e, i = t.reference, o = t.element, l = t.placement, c = l ? (0,
        n.default)(l) : null, d = l ? (0,
        s.default)(l) : null, u = i.x + i.width / 2 - o.width / 2, h = i.y + i.height / 2 - o.height / 2;
        switch (c) {
        case a.top:
            e = {
                x: u,
                y: i.y - o.height
            };
            break;
        case a.bottom:
            e = {
                x: u,
                y: i.y + i.height
            };
            break;
        case a.right:
            e = {
                x: i.x + i.width,
                y: h
            };
            break;
        case a.left:
            e = {
                x: i.x - o.width,
                y: h
            };
            break;
        default:
            e = {
                x: i.x,
                y: i.y
            }
        }
        var f = c ? (0,
        r.default)(c) : null;
        if (null != f) {
            var p = "y" === f ? "height" : "width";
            switch (d) {
            case a.start:
                e[f] = e[f] - (i[p] / 2 - o[p] / 2);
                break;
            case a.end:
                e[f] = e[f] + (i[p] / 2 - o[p] / 2)
            }
        }
        return e
    }
}
)),
o.register("iN4T7", (function(e, i) {
    t(e.exports, "default", (()=>l));
    var n = o("7kchx")
      , s = o("1KQnQ")
      , r = o("gGcga")
      , a = o("h06jI");
    function l(t, e) {
        void 0 === e && (e = {});
        var i = e
          , o = i.placement
          , l = i.boundary
          , c = i.rootBoundary
          , d = i.padding
          , u = i.flipVariations
          , h = i.allowedAutoPlacements
          , f = void 0 === h ? s.placements : h
          , p = (0,
        n.default)(o)
          , g = p ? u ? s.variationPlacements : s.variationPlacements.filter((function(t) {
            return (0,
            n.default)(t) === p
        }
        )) : s.basePlacements
          , m = g.filter((function(t) {
            return f.indexOf(t) >= 0
        }
        ));
        0 === m.length && (m = g);
        var _ = m.reduce((function(e, i) {
            return e[i] = (0,
            r.default)(t, {
                placement: i,
                boundary: l,
                rootBoundary: c,
                padding: d
            })[(0,
            a.default)(i)],
            e
        }
        ), {});
        return Object.keys(_).sort((function(t, e) {
            return _[t] - _[e]
        }
        ))
    }
}
)),
o.register("95q7y", (function(e, i) {
    t(e.exports, "default", (()=>l));
    var n = o("1KQnQ")
      , s = o("gGcga");
    function r(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }),
        {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }
    function a(t) {
        return [n.top, n.right, n.bottom, n.left].some((function(e) {
            return t[e] >= 0
        }
        ))
    }
    var l = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , i = t.name
              , n = e.rects.reference
              , o = e.rects.popper
              , l = e.modifiersData.preventOverflow
              , c = (0,
            s.default)(e, {
                elementContext: "reference"
            })
              , d = (0,
            s.default)(e, {
                altBoundary: !0
            })
              , u = r(c, n)
              , h = r(d, o, l)
              , f = a(u)
              , p = a(h);
            e.modifiersData[i] = {
                referenceClippingOffsets: u,
                popperEscapeOffsets: h,
                isReferenceHidden: f,
                hasPopperEscaped: p
            },
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": f,
                "data-popper-escaped": p
            })
        }
    }
}
)),
o.register("lWzyf", (function(e, i) {
    t(e.exports, "default", (()=>r));
    var n = o("h06jI")
      , s = o("1KQnQ");
    var r = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var e = t.state
              , i = t.options
              , o = t.name
              , r = i.offset
              , a = void 0 === r ? [0, 0] : r
              , l = s.placements.reduce((function(t, i) {
                return t[i] = function(t, e, i) {
                    var o = (0,
                    n.default)(t)
                      , r = [s.left, s.top].indexOf(o) >= 0 ? -1 : 1
                      , a = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i
                      , l = a[0]
                      , c = a[1];
                    return l = l || 0,
                    c = (c || 0) * r,
                    [s.left, s.right].indexOf(o) >= 0 ? {
                        x: c,
                        y: l
                    } : {
                        x: l,
                        y: c
                    }
                }(i, e.rects, a),
                t
            }
            ), {})
              , c = l[e.placement]
              , d = c.x
              , u = c.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += d,
            e.modifiersData.popperOffsets.y += u),
            e.modifiersData[o] = l
        }
    }
}
)),
o.register("cePA2", (function(e, i) {
    t(e.exports, "default", (()=>s));
    var n = o("dgDBP");
    var s = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , i = t.name;
            e.modifiersData[i] = (0,
            n.default)({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    }
}
)),
o.register("bxdrS", (function(e, i) {
    t(e.exports, "default", (()=>g));
    var n = o("1KQnQ")
      , s = o("h06jI")
      , r = o("g1hRA")
      , a = o("8ptl2")
      , l = o("cOvrb")
      , c = o("dElKO")
      , d = o("5KzeH")
      , u = o("gGcga")
      , h = o("7kchx")
      , f = o("gcu3h")
      , p = o("4J8n1");
    var g = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , i = t.options
              , o = t.name
              , g = i.mainAxis
              , m = void 0 === g || g
              , _ = i.altAxis
              , v = void 0 !== _ && _
              , b = i.boundary
              , y = i.rootBoundary
              , w = i.altBoundary
              , E = i.padding
              , x = i.tether
              , T = void 0 === x || x
              , A = i.tetherOffset
              , O = void 0 === A ? 0 : A
              , L = (0,
            u.default)(e, {
                boundary: b,
                rootBoundary: y,
                padding: E,
                altBoundary: w
            })
              , k = (0,
            s.default)(e.placement)
              , D = (0,
            h.default)(e.placement)
              , $ = !D
              , S = (0,
            r.default)(k)
              , C = (0,
            a.default)(S)
              , j = e.modifiersData.popperOffsets
              , P = e.rects.reference
              , N = e.rects.popper
              , H = "function" == typeof O ? O(Object.assign({}, e.rects, {
                placement: e.placement
            })) : O
              , M = "number" == typeof H ? {
                mainAxis: H,
                altAxis: H
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, H)
              , I = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null
              , B = {
                x: 0,
                y: 0
            };
            if (j) {
                if (m) {
                    var W, R = "y" === S ? n.top : n.left, Q = "y" === S ? n.bottom : n.right, K = "y" === S ? "height" : "width", U = j[S], q = U + L[R], z = U - L[Q], F = T ? -N[K] / 2 : 0, V = D === n.start ? P[K] : N[K], Y = D === n.start ? -N[K] : -P[K], X = e.elements.arrow, G = T && X ? (0,
                    c.default)(X) : {
                        width: 0,
                        height: 0
                    }, Z = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : (0,
                    f.default)(), J = Z[R], tt = Z[Q], et = (0,
                    l.within)(0, P[K], G[K]), it = $ ? P[K] / 2 - F - et - J - M.mainAxis : V - et - J - M.mainAxis, nt = $ ? -P[K] / 2 + F + et + tt + M.mainAxis : Y + et + tt + M.mainAxis, st = e.elements.arrow && (0,
                    d.default)(e.elements.arrow), ot = st ? "y" === S ? st.clientTop || 0 : st.clientLeft || 0 : 0, rt = null != (W = null == I ? void 0 : I[S]) ? W : 0, at = U + it - rt - ot, lt = U + nt - rt, ct = (0,
                    l.within)(T ? (0,
                    p.min)(q, at) : q, U, T ? (0,
                    p.max)(z, lt) : z);
                    j[S] = ct,
                    B[S] = ct - U
                }
                if (v) {
                    var dt, ut = "x" === S ? n.top : n.left, ht = "x" === S ? n.bottom : n.right, ft = j[C], pt = "y" === C ? "height" : "width", gt = ft + L[ut], mt = ft - L[ht], _t = -1 !== [n.top, n.left].indexOf(k), vt = null != (dt = null == I ? void 0 : I[C]) ? dt : 0, bt = _t ? gt : ft - P[pt] - N[pt] - vt + M.altAxis, yt = _t ? ft + P[pt] + N[pt] - vt - M.altAxis : mt, wt = T && _t ? (0,
                    l.withinMaxClamp)(bt, ft, yt) : (0,
                    l.within)(T ? bt : gt, ft, T ? yt : mt);
                    j[C] = wt,
                    B[C] = wt - ft
                }
                e.modifiersData[o] = B
            }
        },
        requiresIfExists: ["offset"]
    }
}
)),
o.register("8ptl2", (function(e, i) {
    function n(t) {
        return "x" === t ? "y" : "x"
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("8iXfp", (function(e, i) {
    t(e.exports, "popperGenerator", (()=>p)),
    t(e.exports, "createPopper", (()=>g));
    var n = o("gcqB4")
      , s = o("dElKO")
      , r = o("cqjGx")
      , a = o("5KzeH")
      , l = o("ahlk8")
      , c = o("dlelj")
      , d = o("l57aq")
      , u = (o("gGcga"),
    o("93iQ7"))
      , h = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function f() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }
        ))
    }
    function p(t) {
        void 0 === t && (t = {});
        var e = t
          , i = e.defaultModifiers
          , o = void 0 === i ? [] : i
          , p = e.defaultOptions
          , g = void 0 === p ? h : p;
        return function(t, e, i) {
            void 0 === i && (i = g);
            var p = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, h, g),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }
              , m = []
              , _ = !1
              , v = {
                state: p,
                setOptions: function(i) {
                    var n = "function" == typeof i ? i(p.options) : i;
                    b(),
                    p.options = Object.assign({}, g, p.options, n),
                    p.scrollParents = {
                        reference: (0,
                        u.isElement)(t) ? (0,
                        r.default)(t) : t.contextElement ? (0,
                        r.default)(t.contextElement) : [],
                        popper: (0,
                        r.default)(e)
                    };
                    var s = (0,
                    l.default)((0,
                    d.default)([].concat(o, p.options.modifiers)));
                    return p.orderedModifiers = s.filter((function(t) {
                        return t.enabled
                    }
                    )),
                    p.orderedModifiers.forEach((function(t) {
                        var e = t.name
                          , i = t.options
                          , n = void 0 === i ? {} : i
                          , s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: p,
                                name: e,
                                instance: v,
                                options: n
                            })
                              , r = function() {};
                            m.push(o || r)
                        }
                    }
                    )),
                    v.update()
                },
                forceUpdate: function() {
                    if (!_) {
                        var t = p.elements
                          , e = t.reference
                          , i = t.popper;
                        if (f(e, i)) {
                            p.rects = {
                                reference: (0,
                                n.default)(e, (0,
                                a.default)(i), "fixed" === p.options.strategy),
                                popper: (0,
                                s.default)(i)
                            },
                            p.reset = !1,
                            p.placement = p.options.placement,
                            p.orderedModifiers.forEach((function(t) {
                                return p.modifiersData[t.name] = Object.assign({}, t.data)
                            }
                            ));
                            for (var o = 0; o < p.orderedModifiers.length; o++)
                                if (!0 !== p.reset) {
                                    var r = p.orderedModifiers[o]
                                      , l = r.fn
                                      , c = r.options
                                      , d = void 0 === c ? {} : c
                                      , u = r.name;
                                    "function" == typeof l && (p = l({
                                        state: p,
                                        options: d,
                                        name: u,
                                        instance: v
                                    }) || p)
                                } else
                                    p.reset = !1,
                                    o = -1
                        }
                    }
                },
                update: (0,
                c.default)((function() {
                    return new Promise((function(t) {
                        v.forceUpdate(),
                        t(p)
                    }
                    ))
                }
                )),
                destroy: function() {
                    b(),
                    _ = !0
                }
            };
            if (!f(t, e))
                return v;
            function b() {
                m.forEach((function(t) {
                    return t()
                }
                )),
                m = []
            }
            return v.setOptions(i).then((function(t) {
                !_ && i.onFirstUpdate && i.onFirstUpdate(t)
            }
            )),
            v
        }
    }
    var g = p()
}
)),
o.register("gcqB4", (function(e, i) {
    t(e.exports, "default", (()=>h));
    var n = o("41Z5W")
      , s = o("eOasn")
      , r = o("oKPBf")
      , a = o("93iQ7")
      , l = o("8fnXo")
      , c = o("17OuU")
      , d = o("1ADUj")
      , u = o("4J8n1");
    function h(t, e, i) {
        void 0 === i && (i = !1);
        var o = (0,
        a.isHTMLElement)(e)
          , h = (0,
        a.isHTMLElement)(e) && function(t) {
            var e = t.getBoundingClientRect()
              , i = (0,
            u.round)(e.width) / t.offsetWidth || 1
              , n = (0,
            u.round)(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n
        }(e)
          , f = (0,
        c.default)(e)
          , p = (0,
        n.default)(t, h, i)
          , g = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , m = {
            x: 0,
            y: 0
        };
        return (o || !o && !i) && (("body" !== (0,
        r.default)(e) || (0,
        d.default)(f)) && (g = (0,
        s.default)(e)),
        (0,
        a.isHTMLElement)(e) ? ((m = (0,
        n.default)(e, !0)).x += e.clientLeft,
        m.y += e.clientTop) : f && (m.x = (0,
        l.default)(f))),
        {
            x: p.left + g.scrollLeft - m.x,
            y: p.top + g.scrollTop - m.y,
            width: p.width,
            height: p.height
        }
    }
}
)),
o.register("eOasn", (function(e, i) {
    t(e.exports, "default", (()=>l));
    var n = o("4WW7r")
      , s = o("93G53")
      , r = o("93iQ7")
      , a = o("ieX38");
    function l(t) {
        return t !== (0,
        s.default)(t) && (0,
        r.isHTMLElement)(t) ? (0,
        a.default)(t) : (0,
        n.default)(t)
    }
}
)),
o.register("ieX38", (function(e, i) {
    function n(t) {
        return {
            scrollLeft: t.scrollLeft,
            scrollTop: t.scrollTop
        }
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("ahlk8", (function(e, i) {
    t(e.exports, "default", (()=>r));
    var n = o("1KQnQ");
    function s(t) {
        var e = new Map
          , i = new Set
          , n = [];
        function s(t) {
            i.add(t.name),
            [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n)
                }
            }
            )),
            n.push(t)
        }
        return t.forEach((function(t) {
            e.set(t.name, t)
        }
        )),
        t.forEach((function(t) {
            i.has(t.name) || s(t)
        }
        )),
        n
    }
    function r(t) {
        var e = s(t);
        return n.modifierPhases.reduce((function(t, i) {
            return t.concat(e.filter((function(t) {
                return t.phase === i
            }
            )))
        }
        ), [])
    }
}
)),
o.register("dlelj", (function(e, i) {
    function n(t) {
        var e;
        return function() {
            return e || (e = new Promise((function(i) {
                Promise.resolve().then((function() {
                    e = void 0,
                    i(t())
                }
                ))
            }
            ))),
            e
        }
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("l57aq", (function(e, i) {
    function n(t) {
        var e = t.reduce((function(t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
                options: Object.assign({}, i.options, e.options),
                data: Object.assign({}, i.data, e.data)
            }) : e,
            t
        }
        ), {});
        return Object.keys(e).map((function(t) {
            return e[t]
        }
        ))
    }
    t(e.exports, "default", (()=>n))
}
)),
o.register("3tUi5", (function(e, i) {
    t(e.exports, "createPopper", (()=>g));
    var n = o("8iXfp")
      , s = o("jU5vk")
      , r = o("cePA2")
      , a = o("5ZHwq")
      , l = o("aOl9t")
      , c = o("lWzyf")
      , d = o("hMqHB")
      , u = o("bxdrS")
      , h = o("kU5lB")
      , f = o("95q7y")
      , p = [s.default, r.default, a.default, l.default, c.default, d.default, u.default, h.default, f.default]
      , g = (0,
    n.popperGenerator)({
        defaultModifiers: p
    })
}
)),
o.register("kznft", (function(e, i) {
    t(e.exports, "createPopper", (()=>d));
    var n = o("8iXfp")
      , s = o("jU5vk")
      , r = o("cePA2")
      , a = o("5ZHwq")
      , l = o("aOl9t")
      , c = [s.default, r.default, a.default, l.default]
      , d = (0,
    n.popperGenerator)({
        defaultModifiers: c
    })
}
));
(function(t) {
    function e(t) {
        if (t && t.__esModule)
            return t;
        var e = Object.create(null);
        return t && Object.keys(t).forEach((function(i) {
            if ("default" !== i) {
                var n = Object.getOwnPropertyDescriptor(t, i);
                Object.defineProperty(e, i, n.get ? n : {
                    enumerable: !0,
                    get: function() {
                        return t[i]
                    }
                })
            }
        }
        )),
        e.default = t,
        Object.freeze(e)
    }
    var i = e(t);
    const n = 1e6
      , s = 1e3
      , o = "transitionend"
      , r = t=>null == t ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()
      , a = t=>{
        do {
            t += Math.floor(Math.random() * n)
        } while (document.getElementById(t));
        return t
    }
      , l = t=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith("."))
                return null;
            i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]),
            e = i && "#" !== i ? i.trim() : null
        }
        return e
    }
      , c = t=>{
        const e = l(t);
        return e && document.querySelector(e) ? e : null
    }
      , d = t=>{
        const e = l(t);
        return e ? document.querySelector(e) : null
    }
      , u = t=>{
        if (!t)
            return 0;
        let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
        const n = Number.parseFloat(e)
          , o = Number.parseFloat(i);
        return n || o ? (e = e.split(",")[0],
        i = i.split(",")[0],
        (Number.parseFloat(e) + Number.parseFloat(i)) * s) : 0
    }
      , h = t=>{
        t.dispatchEvent(new Event(o))
    }
      , f = t=>(t[0] || t).nodeType
      , p = (t,e)=>{
        let i = !1;
        const n = e + 5;
        function s() {
            i = !0,
            t.removeEventListener(o, s)
        }
        t.addEventListener(o, s),
        setTimeout((()=>{
            i || h(t)
        }
        ), n)
    }
      , g = (t,e,i)=>{
        Object.keys(i).forEach((n=>{
            const s = i[n]
              , o = e[n]
              , a = o && f(o) ? "element" : r(o);
            if (!new RegExp(s).test(a))
                throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
        }
        ))
    }
      , m = t=>{
        if (!t)
            return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
            const e = getComputedStyle(t)
              , i = getComputedStyle(t.parentNode);
            return "none" !== e.display && "none" !== i.display && "hidden" !== e.visibility
        }
        return !1
    }
      , _ = t=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , v = t=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? v(t.parentNode) : null
    }
      , b = ()=>function() {}
      , y = t=>t.offsetHeight
      , w = ()=>{
        const {jQuery: t} = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }
      , E = t=>{
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
    }
      , x = ()=>"rtl" === document.documentElement.dir
      , T = (t,e)=>{
        E((()=>{
            const i = w();
            if (i) {
                const n = i.fn[t];
                i.fn[t] = e.jQueryInterface,
                i.fn[t].Constructor = e,
                i.fn[t].noConflict = ()=>(i.fn[t] = n,
                e.jQueryInterface)
            }
        }
        ))
    }
      , A = new Map;
    var O = {
        set(t, e, i) {
            A.has(t) || A.set(t, new Map);
            const n = A.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
        },
        get: (t,e)=>A.has(t) && A.get(t).get(e) || null,
        remove(t, e) {
            if (!A.has(t))
                return;
            const i = A.get(t);
            i.delete(e),
            0 === i.size && A.delete(t)
        }
    };
    const L = /[^.]*(?=\..*)\.|.*/
      , k = /\..*/
      , D = /::\d+$/
      , $ = {};
    let S = 1;
    const C = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , j = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function P(t, e) {
        return e && `${e}::${S++}` || t.uidEvent || S++
    }
    function N(t) {
        const e = P(t);
        return t.uidEvent = e,
        $[e] = $[e] || {},
        $[e]
    }
    function H(t, e) {
        return function i(n) {
            return n.delegateTarget = t,
            i.oneOff && K.off(t, n.type, e),
            e.apply(t, [n])
        }
    }
    function M(t, e, i) {
        return function n(s) {
            const o = t.querySelectorAll(e);
            for (let {target: e} = s; e && e !== this; e = e.parentNode)
                for (let r = o.length; r--; )
                    if (o[r] === e)
                        return s.delegateTarget = e,
                        n.oneOff && K.off(t, s.type, i),
                        i.apply(e, [s]);
            return null
        }
    }
    function I(t, e, i=null) {
        const n = Object.keys(t);
        for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i)
                return o
        }
        return null
    }
    function B(t, e, i) {
        const n = "string" == typeof e
          , s = n ? i : e;
        let o = t.replace(k, "");
        const r = C[o];
        return r && (o = r),
        j.has(o) || (o = t),
        [n, s, o]
    }
    function W(t, e, i, n, s) {
        if ("string" != typeof e || !t)
            return;
        i || (i = n,
        n = null);
        const [o,r,a] = B(e, i, n)
          , l = N(t)
          , c = l[a] || (l[a] = {})
          , d = I(c, r, o ? i : null);
        if (d)
            return void (d.oneOff = d.oneOff && s);
        const u = P(r, e.replace(L, ""))
          , h = o ? M(t, i, n) : H(t, i);
        h.delegationSelector = o ? i : null,
        h.originalHandler = r,
        h.oneOff = s,
        h.uidEvent = u,
        c[u] = h,
        t.addEventListener(a, h, o)
    }
    function R(t, e, i, n, s) {
        const o = I(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)),
        delete e[i][o.uidEvent])
    }
    function Q(t, e, i, n) {
        const s = e[i] || {};
        Object.keys(s).forEach((o=>{
            if (o.includes(n)) {
                const n = s[o];
                R(t, e, i, n.originalHandler, n.delegationSelector)
            }
        }
        ))
    }
    const K = {
        on(t, e, i, n) {
            W(t, e, i, n, !1)
        },
        one(t, e, i, n) {
            W(t, e, i, n, !0)
        },
        off(t, e, i, n) {
            if ("string" != typeof e || !t)
                return;
            const [s,o,r] = B(e, i, n)
              , a = r !== e
              , l = N(t)
              , c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r])
                    return;
                return void R(t, l, r, o, s ? i : null)
            }
            c && Object.keys(l).forEach((i=>{
                Q(t, l, i, e.slice(1))
            }
            ));
            const d = l[r] || {};
            Object.keys(d).forEach((i=>{
                const n = i.replace(D, "");
                if (!a || e.includes(n)) {
                    const e = d[i];
                    R(t, l, r, e.originalHandler, e.delegationSelector)
                }
            }
            ))
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t)
                return null;
            const n = w()
              , s = e.replace(k, "")
              , o = e !== s
              , r = j.has(s);
            let a, l = !0, c = !0, d = !1, u = null;
            return o && n && (a = n.Event(e, i),
            n(t).trigger(a),
            l = !a.isPropagationStopped(),
            c = !a.isImmediatePropagationStopped(),
            d = a.isDefaultPrevented()),
            r ? (u = document.createEvent("HTMLEvents"),
            u.initEvent(s, l, !0)) : u = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== i && Object.keys(i).forEach((t=>{
                Object.defineProperty(u, t, {
                    get: ()=>i[t]
                })
            }
            )),
            d && u.preventDefault(),
            c && t.dispatchEvent(u),
            u.defaultPrevented && void 0 !== a && a.preventDefault(),
            u
        }
    }
      , U = "5.0.0-beta3";
    class q {
        constructor(t) {
            (t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t,
            O.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            O.remove(this._element, this.constructor.DATA_KEY),
            this._element = null
        }
        static getInstance(t) {
            return O.get(t, this.DATA_KEY)
        }
        static get VERSION() {
            return U
        }
    }
    const z = "alert"
      , F = "bs.alert"
      , V = `.${F}`
      , Y = '[data-bs-dismiss="alert"]'
      , X = `close ${V}`
      , G = `closed ${V}`
      , Z = `click ${V}.data-api`
      , J = "alert"
      , tt = "fade"
      , et = "show";
    class it extends q {
        static get DATA_KEY() {
            return F
        }
        close(t) {
            const e = t ? this._getRootElement(t) : this._element
              , i = this._triggerCloseEvent(e);
            null === i || i.defaultPrevented || this._removeElement(e)
        }
        _getRootElement(t) {
            return d(t) || t.closest(`.${J}`)
        }
        _triggerCloseEvent(t) {
            return K.trigger(t, X)
        }
        _removeElement(t) {
            if (t.classList.remove(et),
            !t.classList.contains(tt))
                return void this._destroyElement(t);
            const e = u(t);
            K.one(t, "transitionend", (()=>this._destroyElement(t))),
            p(t, e)
        }
        _destroyElement(t) {
            t.parentNode && t.parentNode.removeChild(t),
            K.trigger(t, G)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = O.get(this, F);
                e || (e = new it(this)),
                "close" === t && e[t](this)
            }
            ))
        }
        static handleDismiss(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
    }
    K.on(document, Z, Y, it.handleDismiss(new it)),
    T(z, it);
    const nt = "button"
      , st = "bs.button"
      , ot = "active"
      , rt = '[data-bs-toggle="button"]'
      , at = `click.${st}.data-api`;
    class lt extends q {
        static get DATA_KEY() {
            return st
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle(ot))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = O.get(this, st);
                e || (e = new lt(this)),
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    function ct(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function dt(t) {
        return t.replace(/[A-Z]/g, (t=>`-${t.toLowerCase()}`))
    }
    K.on(document, at, rt, (t=>{
        t.preventDefault();
        const e = t.target.closest(rt);
        let i = O.get(e, st);
        i || (i = new lt(e)),
        i.toggle()
    }
    )),
    T(nt, lt);
    const ut = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${dt(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${dt(e)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {};
            return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((i=>{
                let n = i.replace(/^bs/, "");
                n = n.charAt(0).toLowerCase() + n.slice(1, n.length),
                e[n] = ct(t.dataset[i])
            }
            )),
            e
        },
        getDataAttribute: (t,e)=>ct(t.getAttribute(`data-bs-${dt(e)}`)),
        offset(t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + document.body.scrollTop,
                left: e.left + document.body.scrollLeft
            }
        },
        position: t=>({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    }
      , ht = 3
      , ft = {
        find: (t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t,e=document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),
        parents(t, e) {
            const i = [];
            let n = t.parentNode;
            for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== ht; )
                n.matches(e) && i.push(n),
                n = n.parentNode;
            return i
        },
        prev(t, e) {
            let i = t.previousElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let i = t.nextElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.nextElementSibling
            }
            return []
        }
    }
      , pt = "carousel"
      , gt = "bs.carousel"
      , mt = `.${gt}`
      , _t = ".data-api"
      , vt = "ArrowLeft"
      , bt = "ArrowRight"
      , yt = 500
      , wt = 40
      , Et = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , xt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , Tt = "next"
      , At = "prev"
      , Ot = "left"
      , Lt = "right"
      , kt = `slide ${mt}`
      , Dt = `slid ${mt}`
      , $t = `keydown ${mt}`
      , St = `mouseenter ${mt}`
      , Ct = `mouseleave ${mt}`
      , jt = `touchstart ${mt}`
      , Pt = `touchmove ${mt}`
      , Nt = `touchend ${mt}`
      , Ht = `pointerdown ${mt}`
      , Mt = `pointerup ${mt}`
      , It = `dragstart ${mt}`
      , Bt = `load ${mt}${_t}`
      , Wt = `click ${mt}${_t}`
      , Rt = "carousel"
      , Qt = "active"
      , Kt = "slide"
      , Ut = "carousel-item-end"
      , qt = "carousel-item-start"
      , zt = "carousel-item-next"
      , Ft = "carousel-item-prev"
      , Vt = "pointer-event"
      , Yt = ".active"
      , Xt = ".active.carousel-item"
      , Gt = ".carousel-item"
      , Zt = ".carousel-item img"
      , Jt = ".carousel-item-next, .carousel-item-prev"
      , te = ".carousel-indicators"
      , ee = "[data-bs-target]"
      , ie = "[data-bs-slide], [data-bs-slide-to]"
      , ne = '[data-bs-ride="carousel"]'
      , se = "touch"
      , oe = "pen";
    class re extends q {
        constructor(t, e) {
            super(t),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._indicatorsElement = ft.findOne(te, this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent),
            this._addEventListeners()
        }
        static get Default() {
            return Et
        }
        static get DATA_KEY() {
            return gt
        }
        next() {
            this._isSliding || this._slide(Tt)
        }
        nextWhenVisible() {
            !document.hidden && m(this._element) && this.next()
        }
        prev() {
            this._isSliding || this._slide(At)
        }
        pause(t) {
            t || (this._isPaused = !0),
            ft.findOne(Jt, this._element) && (h(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = ft.findOne(Xt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void K.one(this._element, Dt, (()=>this.to(t)));
            if (e === t)
                return this.pause(),
                void this.cycle();
            const i = t > e ? Tt : At;
            this._slide(i, this._items[t])
        }
        dispose() {
            K.off(this._element, mt),
            this._items = null,
            this._config = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null,
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...Et,
                ...t
            },
            g(pt, t, xt),
            t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= wt)
                return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0,
            e && this._slide(e > 0 ? Lt : Ot)
        }
        _addEventListeners() {
            this._config.keyboard && K.on(this._element, $t, (t=>this._keydown(t))),
            "hover" === this._config.pause && (K.on(this._element, St, (t=>this.pause(t))),
            K.on(this._element, Ct, (t=>this.cycle(t)))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t=>{
                !this._pointerEvent || t.pointerType !== oe && t.pointerType !== se ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
            }
              , e = t=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
            }
              , i = t=>{
                !this._pointerEvent || t.pointerType !== oe && t.pointerType !== se || (this.touchDeltaX = t.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout((t=>this.cycle(t)), yt + this._config.interval))
            }
            ;
            ft.find(Zt, this._element).forEach((t=>{
                K.on(t, It, (t=>t.preventDefault()))
            }
            )),
            this._pointerEvent ? (K.on(this._element, Ht, (e=>t(e))),
            K.on(this._element, Mt, (t=>i(t))),
            this._element.classList.add(Vt)) : (K.on(this._element, jt, (e=>t(e))),
            K.on(this._element, Pt, (t=>e(t))),
            K.on(this._element, Nt, (t=>i(t))))
        }
        _keydown(t) {
            /input|textarea/i.test(t.target.tagName) || (t.key === vt ? (t.preventDefault(),
            this._slide(Ot)) : t.key === bt && (t.preventDefault(),
            this._slide(Lt)))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? ft.find(Gt, t.parentNode) : [],
            this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const i = t === Tt
              , n = t === At
              , s = this._getItemIndex(e)
              , o = this._items.length - 1;
            if ((n && 0 === s || i && s === o) && !this._config.wrap)
                return e;
            const r = (s + (n ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t)
              , n = this._getItemIndex(ft.findOne(Xt, this._element));
            return K.trigger(this._element, kt, {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = ft.findOne(Yt, this._indicatorsElement);
                e.classList.remove(Qt),
                e.removeAttribute("aria-current");
                const i = ft.find(ee, this._indicatorsElement);
                for (let e = 0; e < i.length; e++)
                    if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        i[e].classList.add(Qt),
                        i[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || ft.findOne(Xt, this._element);
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const i = this._directionToOrder(t)
              , n = ft.findOne(Xt, this._element)
              , s = this._getItemIndex(n)
              , o = e || this._getItemByOrder(i, n)
              , r = this._getItemIndex(o)
              , a = Boolean(this._interval)
              , l = i === Tt
              , c = l ? qt : Ut
              , d = l ? zt : Ft
              , h = this._orderToDirection(i);
            if (o && o.classList.contains(Qt))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(o, h).defaultPrevented && n && o) {
                if (this._isSliding = !0,
                a && this.pause(),
                this._setActiveIndicatorElement(o),
                this._activeElement = o,
                this._element.classList.contains(Kt)) {
                    o.classList.add(d),
                    y(o),
                    n.classList.add(c),
                    o.classList.add(c);
                    const t = u(n);
                    K.one(n, "transitionend", (()=>{
                        o.classList.remove(c, d),
                        o.classList.add(Qt),
                        n.classList.remove(Qt, d, c),
                        this._isSliding = !1,
                        setTimeout((()=>{
                            K.trigger(this._element, Dt, {
                                relatedTarget: o,
                                direction: h,
                                from: s,
                                to: r
                            })
                        }
                        ), 0)
                    }
                    )),
                    p(n, t)
                } else
                    n.classList.remove(Qt),
                    o.classList.add(Qt),
                    this._isSliding = !1,
                    K.trigger(this._element, Dt, {
                        relatedTarget: o,
                        direction: h,
                        from: s,
                        to: r
                    });
                a && this.cycle()
            }
        }
        _directionToOrder(t) {
            return [Lt, Ot].includes(t) ? x() ? t === Lt ? At : Tt : t === Lt ? Tt : At : t
        }
        _orderToDirection(t) {
            return [Tt, At].includes(t) ? x() ? t === Tt ? Ot : Lt : t === Tt ? Lt : Ot : t
        }
        static carouselInterface(t, e) {
            let i = O.get(t, gt)
              , n = {
                ...Et,
                ...ut.getDataAttributes(t)
            };
            "object" == typeof e && (n = {
                ...n,
                ...e
            });
            const s = "string" == typeof e ? e : n.slide;
            if (i || (i = new re(t,n)),
            "number" == typeof e)
                i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s])
                    throw new TypeError(`No method named "${s}"`);
                i[s]()
            } else
                n.interval && n.ride && (i.pause(),
                i.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                re.carouselInterface(this, t)
            }
            ))
        }
        static dataApiClickHandler(t) {
            const e = d(this);
            if (!e || !e.classList.contains(Rt))
                return;
            const i = {
                ...ut.getDataAttributes(e),
                ...ut.getDataAttributes(this)
            }
              , n = this.getAttribute("data-bs-slide-to");
            n && (i.interval = !1),
            re.carouselInterface(e, i),
            n && O.get(e, gt).to(n),
            t.preventDefault()
        }
    }
    K.on(document, Wt, ie, re.dataApiClickHandler),
    K.on(window, Bt, (()=>{
        const t = ft.find(ne);
        for (let e = 0, i = t.length; e < i; e++)
            re.carouselInterface(t[e], O.get(t[e], gt))
    }
    )),
    T(pt, re);
    const ae = "collapse"
      , le = "bs.collapse"
      , ce = `.${le}`
      , de = {
        toggle: !0,
        parent: ""
    }
      , ue = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , he = `show ${ce}`
      , fe = `shown ${ce}`
      , pe = `hide ${ce}`
      , ge = `hidden ${ce}`
      , me = `click ${ce}.data-api`
      , _e = "show"
      , ve = "collapse"
      , be = "collapsing"
      , ye = "collapsed"
      , we = "width"
      , Ee = "height"
      , xe = ".show, .collapsing"
      , Te = '[data-bs-toggle="collapse"]';
    class Ae extends q {
        constructor(t, e) {
            super(t),
            this._isTransitioning = !1,
            this._config = this._getConfig(e),
            this._triggerArray = ft.find(`${Te}[href="#${this._element.id}"],${Te}[data-bs-target="#${this._element.id}"]`);
            const i = ft.find(Te);
            for (let t = 0, e = i.length; t < e; t++) {
                const e = i[t]
                  , n = c(e)
                  , s = ft.find(n).filter((t=>t === this._element));
                null !== n && s.length && (this._selector = n,
                this._triggerArray.push(e))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return de
        }
        static get DATA_KEY() {
            return le
        }
        toggle() {
            this._element.classList.contains(_e) ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains(_e))
                return;
            let t, e;
            this._parent && (t = ft.find(xe, this._parent).filter((t=>"string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains(ve))),
            0 === t.length && (t = null));
            const i = ft.findOne(this._selector);
            if (t) {
                const n = t.find((t=>i !== t));
                if (e = n ? O.get(n, le) : null,
                e && e._isTransitioning)
                    return
            }
            if (K.trigger(this._element, he).defaultPrevented)
                return;
            t && t.forEach((t=>{
                i !== t && Ae.collapseInterface(t, "hide"),
                e || O.set(t, le, null)
            }
            ));
            const n = this._getDimension();
            this._element.classList.remove(ve),
            this._element.classList.add(be),
            this._element.style[n] = 0,
            this._triggerArray.length && this._triggerArray.forEach((t=>{
                t.classList.remove(ye),
                t.setAttribute("aria-expanded", !0)
            }
            )),
            this.setTransitioning(!0);
            const s = ()=>{
                this._element.classList.remove(be),
                this._element.classList.add(ve, _e),
                this._element.style[n] = "",
                this.setTransitioning(!1),
                K.trigger(this._element, fe)
            }
              , o = `scroll ${n[0].toUpperCase() + n.slice(1)}`
              , r = u(this._element);
            K.one(this._element, "transitionend", s),
            p(this._element, r),
            this._element.style[n] = `${this._element[o]}px`
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains(_e))
                return;
            if (K.trigger(this._element, pe).defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            y(this._element),
            this._element.classList.add(be),
            this._element.classList.remove(ve, _e);
            const e = this._triggerArray.length;
            if (e > 0)
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t]
                      , i = d(e);
                    i && !i.classList.contains(_e) && (e.classList.add(ye),
                    e.setAttribute("aria-expanded", !1))
                }
            this.setTransitioning(!0);
            const i = ()=>{
                this.setTransitioning(!1),
                this._element.classList.remove(be),
                this._element.classList.add(ve),
                K.trigger(this._element, ge)
            }
            ;
            this._element.style[t] = "";
            const n = u(this._element);
            K.one(this._element, "transitionend", i),
            p(this._element, n)
        }
        setTransitioning(t) {
            this._isTransitioning = t
        }
        dispose() {
            super.dispose(),
            this._config = null,
            this._parent = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        _getConfig(t) {
            return (t = {
                ...de,
                ...t
            }).toggle = Boolean(t.toggle),
            g(ae, t, ue),
            t
        }
        _getDimension() {
            return this._element.classList.contains(we) ? we : Ee
        }
        _getParent() {
            let {parent: t} = this._config;
            f(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = ft.findOne(t);
            const e = `${Te}[data-bs-parent="${t}"]`;
            return ft.find(e, t).forEach((t=>{
                const e = d(t);
                this._addAriaAndCollapsedClass(e, [t])
            }
            )),
            t
        }
        _addAriaAndCollapsedClass(t, e) {
            if (!t || !e.length)
                return;
            const i = t.classList.contains(_e);
            e.forEach((t=>{
                i ? t.classList.remove(ye) : t.classList.add(ye),
                t.setAttribute("aria-expanded", i)
            }
            ))
        }
        static collapseInterface(t, e) {
            let i = O.get(t, le);
            const n = {
                ...de,
                ...ut.getDataAttributes(t),
                ..."object" == typeof e && e ? e : {}
            };
            if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1),
            i || (i = new Ae(t,n)),
            "string" == typeof e) {
                if (void 0 === i[e])
                    throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                Ae.collapseInterface(this, t)
            }
            ))
        }
    }
    K.on(document, me, Te, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = ut.getDataAttributes(this)
          , i = c(this);
        ft.find(i).forEach((t=>{
            const i = O.get(t, le);
            let n;
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent,
            i._parent = i._getParent()),
            n = "toggle") : n = e,
            Ae.collapseInterface(t, n)
        }
        ))
    }
    )),
    T(ae, Ae);
    const Oe = "dropdown"
      , Le = "bs.dropdown"
      , ke = `.${Le}`
      , De = ".data-api"
      , $e = "Escape"
      , Se = "Space"
      , Ce = "Tab"
      , je = "ArrowUp"
      , Pe = "ArrowDown"
      , Ne = 2
      , He = new RegExp(`${je}|${Pe}|${$e}`)
      , Me = `hide ${ke}`
      , Ie = `hidden ${ke}`
      , Be = `show ${ke}`
      , We = `shown ${ke}`
      , Re = `click ${ke}`
      , Qe = `click ${ke}${De}`
      , Ke = `keydown ${ke}${De}`
      , Ue = `keyup ${ke}${De}`
      , qe = "disabled"
      , ze = "show"
      , Fe = "dropup"
      , Ve = "dropend"
      , Ye = "dropstart"
      , Xe = "navbar"
      , Ge = '[data-bs-toggle="dropdown"]'
      , Ze = ".dropdown-menu"
      , Je = ".navbar-nav"
      , ti = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , ei = x() ? "top-end" : "top-start"
      , ii = x() ? "top-start" : "top-end"
      , ni = x() ? "bottom-end" : "bottom-start"
      , si = x() ? "bottom-start" : "bottom-end"
      , oi = x() ? "left-start" : "right-start"
      , ri = x() ? "right-start" : "left-start"
      , ai = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , li = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)"
    };
    class ci extends q {
        constructor(t, e) {
            super(t),
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        static get Default() {
            return ai
        }
        static get DefaultType() {
            return li
        }
        static get DATA_KEY() {
            return Le
        }
        toggle() {
            if (this._element.disabled || this._element.classList.contains(qe))
                return;
            const t = this._element.classList.contains(ze);
            ci.clearMenus(),
            t || this.show()
        }
        show() {
            if (this._element.disabled || this._element.classList.contains(qe) || this._menu.classList.contains(ze))
                return;
            const t = ci.getParentFromElement(this._element)
              , e = {
                relatedTarget: this._element
            };
            if (!K.trigger(this._element, Be, e).defaultPrevented) {
                if (this._inNavbar)
                    ut.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === i)
                        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? e = t : f(this._config.reference) ? (e = this._config.reference,
                    void 0 !== this._config.reference.jquery && (e = this._config.reference[0])) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const n = this._getPopperConfig()
                      , s = n.modifiers.find((t=>"applyStyles" === t.name && !1 === t.enabled));
                    this._popper = i.createPopper(e, this._menu, n),
                    s && ut.setDataAttribute(this._menu, "popper", "static")
                }
                "ontouchstart"in document.documentElement && !t.closest(Je) && [].concat(...document.body.children).forEach((t=>K.on(t, "mouseover", null, b()))),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.toggle(ze),
                this._element.classList.toggle(ze),
                K.trigger(this._element, We, e)
            }
        }
        hide() {
            if (this._element.disabled || this._element.classList.contains(qe) || !this._menu.classList.contains(ze))
                return;
            const t = {
                relatedTarget: this._element
            };
            K.trigger(this._element, Me, t).defaultPrevented || (this._popper && this._popper.destroy(),
            this._menu.classList.toggle(ze),
            this._element.classList.toggle(ze),
            ut.removeDataAttribute(this._menu, "popper"),
            K.trigger(this._element, Ie, t))
        }
        dispose() {
            K.off(this._element, ke),
            this._menu = null,
            this._popper && (this._popper.destroy(),
            this._popper = null),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _addEventListeners() {
            K.on(this._element, Re, (t=>{
                t.preventDefault(),
                this.toggle()
            }
            ))
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...ut.getDataAttributes(this._element),
                ...t
            },
            g(Oe, t, this.constructor.DefaultType),
            "object" == typeof t.reference && !f(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${Oe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _getMenuElement() {
            return ft.next(this._element, Ze)[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains(Ve))
                return oi;
            if (t.classList.contains(Ye))
                return ri;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains(Fe) ? e ? ii : ei : e ? si : ni
        }
        _detectNavbar() {
            return null !== this._element.closest(`.${Xe}`)
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        static dropdownInterface(t, e) {
            let i = O.get(t, Le);
            if (i || (i = new ci(t,"object" == typeof e ? e : null)),
            "string" == typeof e) {
                if (void 0 === i[e])
                    throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                ci.dropdownInterface(this, t)
            }
            ))
        }
        static clearMenus(t) {
            if (t) {
                if (t.button === Ne || "keyup" === t.type && t.key !== Ce)
                    return;
                if (/input|select|textarea|form/i.test(t.target.tagName))
                    return
            }
            const e = ft.find(Ge);
            for (let i = 0, n = e.length; i < n; i++) {
                const n = O.get(e[i], Le)
                  , s = {
                    relatedTarget: e[i]
                };
                if (t && "click" === t.type && (s.clickEvent = t),
                !n)
                    continue;
                const o = n._menu;
                if (e[i].classList.contains(ze)) {
                    if (t) {
                        if ([n._element].some((e=>t.composedPath().includes(e))))
                            continue;
                        if ("keyup" === t.type && t.key === Ce && o.contains(t.target))
                            continue
                    }
                    K.trigger(e[i], Me, s).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>K.off(t, "mouseover", null, b()))),
                    e[i].setAttribute("aria-expanded", "false"),
                    n._popper && n._popper.destroy(),
                    o.classList.remove(ze),
                    e[i].classList.remove(ze),
                    ut.removeDataAttribute(o, "popper"),
                    K.trigger(e[i], Ie, s))
                }
            }
        }
        static getParentFromElement(t) {
            return d(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === Se || t.key !== $e && (t.key !== Pe && t.key !== je || t.target.closest(Ze)) : !He.test(t.key))
                return;
            if (t.preventDefault(),
            t.stopPropagation(),
            this.disabled || this.classList.contains(qe))
                return;
            const e = ci.getParentFromElement(this)
              , i = this.classList.contains(ze);
            if (t.key === $e)
                return (this.matches(Ge) ? this : ft.prev(this, Ge)[0]).focus(),
                void ci.clearMenus();
            if (!i && (t.key === je || t.key === Pe))
                return void (this.matches(Ge) ? this : ft.prev(this, Ge)[0]).click();
            if (!i || t.key === Se)
                return void ci.clearMenus();
            const n = ft.find(ti, e).filter(m);
            if (!n.length)
                return;
            let s = n.indexOf(t.target);
            t.key === je && s > 0 && s--,
            t.key === Pe && s < n.length - 1 && s++,
            s = -1 === s ? 0 : s,
            n[s].focus()
        }
    }
    K.on(document, Ke, Ge, ci.dataApiKeydownHandler),
    K.on(document, Ke, Ze, ci.dataApiKeydownHandler),
    K.on(document, Qe, ci.clearMenus),
    K.on(document, Ue, ci.clearMenus),
    K.on(document, Qe, Ge, (function(t) {
        t.preventDefault(),
        ci.dropdownInterface(this)
    }
    )),
    T(Oe, ci);
    const di = "modal"
      , ui = "bs.modal"
      , hi = `.${ui}`
      , fi = "Escape"
      , pi = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , gi = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , mi = `hide ${hi}`
      , _i = `hidePrevented ${hi}`
      , vi = `hidden ${hi}`
      , bi = `show ${hi}`
      , yi = `shown ${hi}`
      , wi = `focusin ${hi}`
      , Ei = `resize ${hi}`
      , xi = `click.dismiss ${hi}`
      , Ti = `keydown.dismiss ${hi}`
      , Ai = `mouseup.dismiss ${hi}`
      , Oi = `mousedown.dismiss ${hi}`
      , Li = `click ${hi}.data-api`
      , ki = "modal-scrollbar-measure"
      , Di = "modal-backdrop"
      , $i = "modal-open"
      , Si = "fade"
      , Ci = "show"
      , ji = "modal-static"
      , Pi = ".modal-dialog"
      , Ni = ".modal-body"
      , Hi = '[data-bs-toggle="modal"]'
      , Mi = '[data-bs-dismiss="modal"]'
      , Ii = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Bi = ".sticky-top";
    class Wi extends q {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._dialog = ft.findOne(Pi, this._element),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        static get Default() {
            return pi
        }
        static get DATA_KEY() {
            return ui
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning)
                return;
            this._isAnimated() && (this._isTransitioning = !0);
            const e = K.trigger(this._element, bi, {
                relatedTarget: t
            });
            this._isShown || e.defaultPrevented || (this._isShown = !0,
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            K.on(this._element, xi, Mi, (t=>this.hide(t))),
            K.on(this._dialog, Oi, (()=>{
                K.one(this._element, Ai, (t=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }
                ))
            }
            )),
            this._showBackdrop((()=>this._showElement(t))))
        }
        hide(t) {
            if (t && t.preventDefault(),
            !this._isShown || this._isTransitioning)
                return;
            if (K.trigger(this._element, mi).defaultPrevented)
                return;
            this._isShown = !1;
            const e = this._isAnimated();
            if (e && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            K.off(document, wi),
            this._element.classList.remove(Ci),
            K.off(this._element, xi),
            K.off(this._dialog, Oi),
            e) {
                const t = u(this._element);
                K.one(this._element, "transitionend", (t=>this._hideModal(t))),
                p(this._element, t)
            } else
                this._hideModal()
        }
        dispose() {
            [window, this._element, this._dialog].forEach((t=>K.off(t, hi))),
            super.dispose(),
            K.off(document, wi),
            this._config = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _getConfig(t) {
            return t = {
                ...pi,
                ...t
            },
            g(di, t, gi),
            t
        }
        _showElement(t) {
            const e = this._isAnimated()
              , i = ft.findOne(Ni, this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            i && (i.scrollTop = 0),
            e && y(this._element),
            this._element.classList.add(Ci),
            this._config.focus && this._enforceFocus();
            const n = ()=>{
                this._config.focus && this._element.focus(),
                this._isTransitioning = !1,
                K.trigger(this._element, yi, {
                    relatedTarget: t
                })
            }
            ;
            if (e) {
                const t = u(this._dialog);
                K.one(this._dialog, "transitionend", n),
                p(this._dialog, t)
            } else
                n()
        }
        _enforceFocus() {
            K.off(document, wi),
            K.on(document, wi, (t=>{
                document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
            }
            ))
        }
        _setEscapeEvent() {
            this._isShown ? K.on(this._element, Ti, (t=>{
                this._config.keyboard && t.key === fi ? (t.preventDefault(),
                this.hide()) : this._config.keyboard || t.key !== fi || this._triggerBackdropTransition()
            }
            )) : K.off(this._element, Ti)
        }
        _setResizeEvent() {
            this._isShown ? K.on(window, Ei, (()=>this._adjustDialog())) : K.off(window, Ei)
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop((()=>{
                document.body.classList.remove($i),
                this._resetAdjustments(),
                this._resetScrollbar(),
                K.trigger(this._element, vi)
            }
            ))
        }
        _removeBackdrop() {
            this._backdrop.parentNode.removeChild(this._backdrop),
            this._backdrop = null
        }
        _showBackdrop(t) {
            const e = this._isAnimated();
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = Di,
                e && this._backdrop.classList.add(Si),
                document.body.appendChild(this._backdrop),
                K.on(this._element, xi, (t=>{
                    this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === this._config.backdrop ? this._triggerBackdropTransition() : this.hide())
                }
                )),
                e && y(this._backdrop),
                this._backdrop.classList.add(Ci),
                !e)
                    return void t();
                const i = u(this._backdrop);
                K.one(this._backdrop, "transitionend", t),
                p(this._backdrop, i)
            } else if (!this._isShown && this._backdrop) {
                this._backdrop.classList.remove(Ci);
                const i = ()=>{
                    this._removeBackdrop(),
                    t()
                }
                ;
                if (e) {
                    const t = u(this._backdrop);
                    K.one(this._backdrop, "transitionend", i),
                    p(this._backdrop, t)
                } else
                    i()
            } else
                t()
        }
        _isAnimated() {
            return this._element.classList.contains(Si)
        }
        _triggerBackdropTransition() {
            if (K.trigger(this._element, _i).defaultPrevented)
                return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight;
            t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(ji);
            const e = u(this._dialog);
            K.off(this._element, "transitionend"),
            K.one(this._element, "transitionend", (()=>{
                this._element.classList.remove(ji),
                t || (K.one(this._element, "transitionend", (()=>{
                    this._element.style.overflowY = ""
                }
                )),
                p(this._element, e))
            }
            )),
            p(this._element, e),
            this._element.focus()
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight;
            (!this._isBodyOverflowing && t && !x() || this._isBodyOverflowing && !t && x()) && (this._element.style.paddingLeft = `${this._scrollbarWidth}px`),
            (this._isBodyOverflowing && !t && !x() || !this._isBodyOverflowing && t && x()) && (this._element.style.paddingRight = `${this._scrollbarWidth}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        _checkScrollbar() {
            const t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        _setScrollbar() {
            this._isBodyOverflowing && (this._setElementAttributes(Ii, "paddingRight", (t=>t + this._scrollbarWidth)),
            this._setElementAttributes(Bi, "marginRight", (t=>t - this._scrollbarWidth)),
            this._setElementAttributes("body", "paddingRight", (t=>t + this._scrollbarWidth))),
            document.body.classList.add($i)
        }
        _setElementAttributes(t, e, i) {
            ft.find(t).forEach((t=>{
                if (t !== document.body && window.innerWidth > t.clientWidth + this._scrollbarWidth)
                    return;
                const n = t.style[e]
                  , s = window.getComputedStyle(t)[e];
                ut.setDataAttribute(t, e, n),
                t.style[e] = i(Number.parseFloat(s)) + "px"
            }
            ))
        }
        _resetScrollbar() {
            this._resetElementAttributes(Ii, "paddingRight"),
            this._resetElementAttributes(Bi, "marginRight"),
            this._resetElementAttributes("body", "paddingRight")
        }
        _resetElementAttributes(t, e) {
            ft.find(t).forEach((t=>{
                const i = ut.getDataAttribute(t, e);
                void 0 === i && t === document.body ? t.style[e] = "" : (ut.removeDataAttribute(t, e),
                t.style[e] = i)
            }
            ))
        }
        _getScrollbarWidth() {
            const t = document.createElement("div");
            t.className = ki,
            document.body.appendChild(t);
            const e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                let i = O.get(this, ui);
                const n = {
                    ...pi,
                    ...ut.getDataAttributes(this),
                    ..."object" == typeof t && t ? t : {}
                };
                if (i || (i = new Wi(this,n)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }
            ))
        }
    }
    K.on(document, Li, Hi, (function(t) {
        const e = d(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(),
        K.one(e, bi, (t=>{
            t.defaultPrevented || K.one(e, vi, (()=>{
                m(this) && this.focus()
            }
            ))
        }
        ));
        let i = O.get(e, ui);
        if (!i) {
            const t = {
                ...ut.getDataAttributes(e),
                ...ut.getDataAttributes(this)
            };
            i = new Wi(e,t)
        }
        i.toggle(this)
    }
    )),
    T(di, Wi);
    const Ri = ".fixed-top, .fixed-bottom, .is-fixed"
      , Qi = ".sticky-top"
      , Ki = ()=>{
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t)
    }
      , Ui = (t=Ki())=>{
        document.body.style.overflow = "hidden",
        qi(Ri, "paddingRight", (e=>e + t)),
        qi(Qi, "marginRight", (e=>e - t)),
        qi("body", "paddingRight", (e=>e + t))
    }
      , qi = (t,e,i)=>{
        const n = Ki();
        ft.find(t).forEach((t=>{
            if (t !== document.body && window.innerWidth > t.clientWidth + n)
                return;
            const s = t.style[e]
              , o = window.getComputedStyle(t)[e];
            ut.setDataAttribute(t, e, s),
            t.style[e] = i(Number.parseFloat(o)) + "px"
        }
        ))
    }
      , zi = ()=>{
        document.body.style.overflow = "auto",
        Fi(Ri, "paddingRight"),
        Fi(Qi, "marginRight"),
        Fi("body", "paddingRight")
    }
      , Fi = (t,e)=>{
        ft.find(t).forEach((t=>{
            const i = ut.getDataAttribute(t, e);
            void 0 === i && t === document.body ? t.style.removeProperty(e) : (ut.removeDataAttribute(t, e),
            t.style[e] = i)
        }
        ))
    }
      , Vi = "offcanvas"
      , Yi = "bs.offcanvas"
      , Xi = `.${Yi}`
      , Gi = ".data-api"
      , Zi = `load ${Xi}${Gi}`
      , Ji = "Escape"
      , tn = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , en = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }
      , nn = "offcanvas-backdrop"
      , sn = "show"
      , on = "offcanvas-toggling"
      , rn = ".offcanvas.show"
      , an = `${rn}, .${on}`
      , ln = `show ${Xi}`
      , cn = `shown ${Xi}`
      , dn = `hide ${Xi}`
      , un = `hidden ${Xi}`
      , hn = `focusin ${Xi}`
      , fn = `click ${Xi}${Gi}`
      , pn = `click.dismiss ${Xi}`
      , gn = '[data-bs-dismiss="offcanvas"]'
      , mn = '[data-bs-toggle="offcanvas"]';
    class _n extends q {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._isShown = !1,
            this._addEventListeners()
        }
        static get Default() {
            return tn
        }
        static get DATA_KEY() {
            return Yi
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || K.trigger(this._element, ln, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._element.style.visibility = "visible",
            this._config.backdrop && document.body.classList.add(nn),
            this._config.scroll || Ui(),
            this._element.classList.add(on),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(sn),
            setTimeout((()=>{
                this._element.classList.remove(on),
                K.trigger(this._element, cn, {
                    relatedTarget: t
                }),
                this._enforceFocusOnElement(this._element)
            }
            ), u(this._element)))
        }
        hide() {
            this._isShown && (K.trigger(this._element, dn).defaultPrevented || (this._element.classList.add(on),
            K.off(document, hn),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.remove(sn),
            setTimeout((()=>{
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._element.style.visibility = "hidden",
                this._config.backdrop && document.body.classList.remove(nn),
                this._config.scroll || zi(),
                K.trigger(this._element, un),
                this._element.classList.remove(on)
            }
            ), u(this._element))))
        }
        _getConfig(t) {
            return t = {
                ...tn,
                ...ut.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            g(Vi, t, en),
            t
        }
        _enforceFocusOnElement(t) {
            K.off(document, hn),
            K.on(document, hn, (e=>{
                document === e.target || t === e.target || t.contains(e.target) || t.focus()
            }
            )),
            t.focus()
        }
        _addEventListeners() {
            K.on(this._element, pn, gn, (()=>this.hide())),
            K.on(document, "keydown", (t=>{
                this._config.keyboard && t.key === Ji && this.hide()
            }
            )),
            K.on(document, fn, (t=>{
                const e = ft.findOne(c(t.target));
                this._element.contains(t.target) || e === this._element || this.hide()
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = O.get(this, Yi) || new _n(this,"object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    K.on(document, fn, mn, (function(t) {
        const e = d(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        _(this))
            return;
        K.one(e, un, (()=>{
            m(this) && this.focus()
        }
        ));
        const i = ft.findOne(an);
        i && i !== e || (O.get(e, Yi) || new _n(e)).toggle(this)
    }
    )),
    K.on(window, Zi, (()=>{
        ft.find(rn).forEach((t=>(O.get(t, Yi) || new _n(t)).show()))
    }
    )),
    T(Vi, _n);
    const vn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , bn = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i
      , yn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , wn = (t,e)=>{
        const i = t.nodeName.toLowerCase();
        if (e.includes(i))
            return !vn.has(i) || Boolean(bn.test(t.nodeValue) || yn.test(t.nodeValue));
        const n = e.filter((t=>t instanceof RegExp));
        for (let t = 0, e = n.length; t < e; t++)
            if (n[t].test(i))
                return !0;
        return !1
    }
      , En = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function xn(t, e, i) {
        if (!t.length)
            return t;
        if (i && "function" == typeof i)
            return i(t);
        const n = (new window.DOMParser).parseFromString(t, "text/html")
          , s = Object.keys(e)
          , o = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, i = o.length; t < i; t++) {
            const i = o[t]
              , n = i.nodeName.toLowerCase();
            if (!s.includes(n)) {
                i.parentNode.removeChild(i);
                continue
            }
            const r = [].concat(...i.attributes)
              , a = [].concat(e["*"] || [], e[n] || []);
            r.forEach((t=>{
                wn(t, a) || i.removeAttribute(t.nodeName)
            }
            ))
        }
        return n.body.innerHTML
    }
    const Tn = "tooltip"
      , An = "bs.tooltip"
      , On = `.${An}`
      , Ln = "bs-tooltip"
      , kn = new RegExp(`(^|\\s)${Ln}\\S+`,"g")
      , Dn = new Set(["sanitize", "allowList", "sanitizeFn"])
      , $n = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }
      , Sn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: x() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: x() ? "right" : "left"
    }
      , Cn = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: En,
        popperConfig: null
    }
      , jn = {
        HIDE: `hide ${On}`,
        HIDDEN: `hidden ${On}`,
        SHOW: `show ${On}`,
        SHOWN: `shown ${On}`,
        INSERTED: `inserted ${On}`,
        CLICK: `click ${On}`,
        FOCUSIN: `focusin ${On}`,
        FOCUSOUT: `focusout ${On}`,
        MOUSEENTER: `mouseenter ${On}`,
        MOUSELEAVE: `mouseleave ${On}`
    }
      , Pn = "fade"
      , Nn = "modal"
      , Hn = "show"
      , Mn = "show"
      , In = "out"
      , Bn = ".tooltip-inner"
      , Wn = "hover"
      , Rn = "focus"
      , Qn = "click"
      , Kn = "manual";
    class Un extends q {
        constructor(t, e) {
            if (void 0 === i)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return Cn
        }
        static get NAME() {
            return Tn
        }
        static get DATA_KEY() {
            return An
        }
        static get Event() {
            return jn
        }
        static get EVENT_KEY() {
            return On
        }
        static get DefaultType() {
            return $n
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click,
                    e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains(Hn))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout),
            K.off(this._element, this.constructor.EVENT_KEY),
            K.off(this._element.closest(`.${Nn}`), "hide.bs.modal", this._hideModalHandler),
            this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.config = null,
            this.tip = null,
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
                return;
            const t = K.trigger(this._element, this.constructor.Event.SHOW)
              , e = v(this._element)
              , n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !n)
                return;
            const s = this.getTipElement()
              , o = a(this.constructor.NAME);
            s.setAttribute("id", o),
            this._element.setAttribute("aria-describedby", o),
            this.setContent(),
            this.config.animation && s.classList.add(Pn);
            const r = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this._element) : this.config.placement
              , l = this._getAttachment(r);
            this._addAttachmentClass(l);
            const c = this._getContainer();
            O.set(s, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) || (c.appendChild(s),
            K.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper ? this._popper.update() : this._popper = i.createPopper(this._element, s, this._getPopperConfig(l)),
            s.classList.add(Hn);
            const d = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
            d && s.classList.add(...d.split(" ")),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>{
                K.on(t, "mouseover", b())
            }
            ));
            const h = ()=>{
                const t = this._hoverState;
                this._hoverState = null,
                K.trigger(this._element, this.constructor.Event.SHOWN),
                t === In && this._leave(null, this)
            }
            ;
            if (this.tip.classList.contains(Pn)) {
                const t = u(this.tip);
                K.one(this.tip, "transitionend", h),
                p(this.tip, t)
            } else
                h()
        }
        hide() {
            if (!this._popper)
                return;
            const t = this.getTipElement()
              , e = ()=>{
                this._isWithActiveTrigger() || (this._hoverState !== Mn && t.parentNode && t.parentNode.removeChild(t),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                K.trigger(this._element, this.constructor.Event.HIDDEN),
                this._popper && (this._popper.destroy(),
                this._popper = null))
            }
            ;
            if (!K.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                if (t.classList.remove(Hn),
                "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>K.off(t, "mouseover", b))),
                this._activeTrigger[Qn] = !1,
                this._activeTrigger[Rn] = !1,
                this._activeTrigger[Wn] = !1,
                this.tip.classList.contains(Pn)) {
                    const i = u(t);
                    K.one(t, "transitionend", e),
                    p(t, i)
                } else
                    e();
                this._hoverState = ""
            }
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip)
                return this.tip;
            const t = document.createElement("div");
            return t.innerHTML = this.config.template,
            this.tip = t.children[0],
            this.tip
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(ft.findOne(Bn, t), this.getTitle()),
            t.classList.remove(Pn, Hn)
        }
        setElementContent(t, e) {
            if (null !== t)
                return "object" == typeof e && f(e) ? (e.jquery && (e = e[0]),
                void (this.config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = xn(e, this.config.allowList, this.config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title),
            t
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            const i = this.constructor.DATA_KEY;
            return (e = e || O.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
            O.set(t.delegateTarget, i, e)),
            e
        }
        _getOffset() {
            const {offset: t} = this.config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        altBoundary: !0,
                        fallbackPlacements: this.config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this.config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t=>this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...e,
                ..."function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${Ln}-${this.updateAttachment(t)}`)
        }
        _getContainer() {
            return !1 === this.config.container ? document.body : f(this.config.container) ? this.config.container : ft.findOne(this.config.container)
        }
        _getAttachment(t) {
            return Sn[t.toUpperCase()]
        }
        _setListeners() {
            this.config.trigger.split(" ").forEach((t=>{
                if ("click" === t)
                    K.on(this._element, this.constructor.Event.CLICK, this.config.selector, (t=>this.toggle(t)));
                else if (t !== Kn) {
                    const e = t === Wn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN
                      , i = t === Wn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    K.on(this._element, e, this.config.selector, (t=>this._enter(t))),
                    K.on(this._element, i, this.config.selector, (t=>this._leave(t)))
                }
            }
            )),
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            K.on(this._element.closest(`.${Nn}`), "hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = {
                ...this.config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusin" === t.type ? Rn : Wn] = !0),
            e.getTipElement().classList.contains(Hn) || e._hoverState === Mn ? e._hoverState = Mn : (clearTimeout(e._timeout),
            e._hoverState = Mn,
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout((()=>{
                e._hoverState === Mn && e.show()
            }
            ), e.config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusout" === t.type ? Rn : Wn] = e._element.contains(t.relatedTarget)),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = In,
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((()=>{
                e._hoverState === In && e.hide()
            }
            ), e.config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        _getConfig(t) {
            const e = ut.getDataAttributes(this._element);
            return Object.keys(e).forEach((t=>{
                Dn.has(t) && delete e[t]
            }
            )),
            t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]),
            "number" == typeof (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            g(Tn, t, this.constructor.DefaultType),
            t.sanitize && (t.template = xn(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        _getDelegateConfig() {
            const t = {};
            if (this.config)
                for (const e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = t.getAttribute("class").match(kn);
            null !== e && e.length > 0 && e.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))
        }
        _handlePopperPlacementChange(t) {
            const {state: e} = t;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = O.get(this, An);
                const i = "object" == typeof t && t;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new Un(this,i)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    T(Tn, Un);
    const qn = "popover"
      , zn = "bs.popover"
      , Fn = `.${zn}`
      , Vn = "bs-popover"
      , Yn = new RegExp(`(^|\\s)${Vn}\\S+`,"g")
      , Xn = {
        ...Un.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , Gn = {
        ...Un.DefaultType,
        content: "(string|element|function)"
    }
      , Zn = {
        HIDE: `hide ${Fn}`,
        HIDDEN: `hidden ${Fn}`,
        SHOW: `show ${Fn}`,
        SHOWN: `shown ${Fn}`,
        INSERTED: `inserted ${Fn}`,
        CLICK: `click ${Fn}`,
        FOCUSIN: `focusin ${Fn}`,
        FOCUSOUT: `focusout ${Fn}`,
        MOUSEENTER: `mouseenter ${Fn}`,
        MOUSELEAVE: `mouseleave ${Fn}`
    }
      , Jn = "fade"
      , ts = "show"
      , es = ".popover-header"
      , is = ".popover-body";
    class ns extends Un {
        static get Default() {
            return Xn
        }
        static get NAME() {
            return qn
        }
        static get DATA_KEY() {
            return zn
        }
        static get Event() {
            return Zn
        }
        static get EVENT_KEY() {
            return Fn
        }
        static get DefaultType() {
            return Gn
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(ft.findOne(es, t), this.getTitle());
            let e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)),
            this.setElementContent(ft.findOne(is, t), e),
            t.classList.remove(Jn, ts)
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${Vn}-${this.updateAttachment(t)}`)
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this.config.content
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = t.getAttribute("class").match(Yn);
            null !== e && e.length > 0 && e.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = O.get(this, zn);
                const i = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new ns(this,i),
                O.set(this, zn, e)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    T(qn, ns);
    const ss = "scrollspy"
      , os = "bs.scrollspy"
      , rs = `.${os}`
      , as = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , ls = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , cs = `activate ${rs}`
      , ds = `scroll ${rs}`
      , us = `load ${rs}.data-api`
      , hs = "dropdown-item"
      , fs = "active"
      , ps = '[data-bs-spy="scroll"]'
      , gs = ".nav, .list-group"
      , ms = ".nav-link"
      , _s = ".nav-item"
      , vs = ".list-group-item"
      , bs = ".dropdown"
      , ys = ".dropdown-toggle"
      , ws = "offset"
      , Es = "position";
    class xs extends q {
        constructor(t, e) {
            super(t),
            this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
            this._config = this._getConfig(e),
            this._selector = `${this._config.target} ${ms}, ${this._config.target} ${vs}, ${this._config.target} .${hs}`,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            K.on(this._scrollElement, ds, (()=>this._process())),
            this.refresh(),
            this._process()
        }
        static get Default() {
            return as
        }
        static get DATA_KEY() {
            return os
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? ws : Es
              , e = "auto" === this._config.method ? t : this._config.method
              , i = e === Es ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            ft.find(this._selector).map((t=>{
                const n = c(t)
                  , s = n ? ft.findOne(n) : null;
                if (s) {
                    const t = s.getBoundingClientRect();
                    if (t.width || t.height)
                        return [ut[e](s).top + i, n]
                }
                return null
            }
            )).filter((t=>t)).sort(((t,e)=>t[0] - e[0])).forEach((t=>{
                this._offsets.push(t[0]),
                this._targets.push(t[1])
            }
            ))
        }
        dispose() {
            super.dispose(),
            K.off(this._scrollElement, rs),
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        _getConfig(t) {
            if ("string" != typeof (t = {
                ...as,
                ..."object" == typeof t && t ? t : {}
            }).target && f(t.target)) {
                let {id: e} = t.target;
                e || (e = a(ss),
                t.target.id = e),
                t.target = `#${e}`
            }
            return g(ss, t, ls),
            t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (let e = this._offsets.length; e--; )
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
        }
        _activate(t) {
            this._activeTarget = t,
            this._clear();
            const e = this._selector.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`))
              , i = ft.findOne(e.join(","));
            i.classList.contains(hs) ? (ft.findOne(ys, i.closest(bs)).classList.add(fs),
            i.classList.add(fs)) : (i.classList.add(fs),
            ft.parents(i, gs).forEach((t=>{
                ft.prev(t, `${ms}, ${vs}`).forEach((t=>t.classList.add(fs))),
                ft.prev(t, _s).forEach((t=>{
                    ft.children(t, ms).forEach((t=>t.classList.add(fs)))
                }
                ))
            }
            ))),
            K.trigger(this._scrollElement, cs, {
                relatedTarget: t
            })
        }
        _clear() {
            ft.find(this._selector).filter((t=>t.classList.contains(fs))).forEach((t=>t.classList.remove(fs)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = O.get(this, os);
                if (e || (e = new xs(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    K.on(window, us, (()=>{
        ft.find(ps).forEach((t=>new xs(t,ut.getDataAttributes(t))))
    }
    )),
    T(ss, xs);
    const Ts = "tab"
      , As = "bs.tab"
      , Os = `.${As}`
      , Ls = `hide ${Os}`
      , ks = `hidden ${Os}`
      , Ds = `show ${Os}`
      , $s = `shown ${Os}`
      , Ss = `click ${Os}.data-api`
      , Cs = "dropdown-menu"
      , js = "active"
      , Ps = "fade"
      , Ns = "show"
      , Hs = ".dropdown"
      , Ms = ".nav, .list-group"
      , Is = ".active"
      , Bs = ":scope > li > .active"
      , Ws = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , Rs = ".dropdown-toggle"
      , Qs = ":scope > .dropdown-menu .active";
    class Ks extends q {
        static get DATA_KEY() {
            return As
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(js) || _(this._element))
                return;
            let t;
            const e = d(this._element)
              , i = this._element.closest(Ms);
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? Bs : Is;
                t = ft.find(e, i),
                t = t[t.length - 1]
            }
            const n = t ? K.trigger(t, Ls, {
                relatedTarget: this._element
            }) : null;
            if (K.trigger(this._element, Ds, {
                relatedTarget: t
            }).defaultPrevented || null !== n && n.defaultPrevented)
                return;
            this._activate(this._element, i);
            const s = ()=>{
                K.trigger(t, ks, {
                    relatedTarget: this._element
                }),
                K.trigger(this._element, $s, {
                    relatedTarget: t
                })
            }
            ;
            e ? this._activate(e, e.parentNode, s) : s()
        }
        _activate(t, e, i) {
            const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? ft.children(e, Is) : ft.find(Bs, e))[0]
              , s = i && n && n.classList.contains(Ps)
              , o = ()=>this._transitionComplete(t, n, i);
            if (n && s) {
                const t = u(n);
                n.classList.remove(Ns),
                K.one(n, "transitionend", o),
                p(n, t)
            } else
                o()
        }
        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(js);
                const t = ft.findOne(Qs, e.parentNode);
                t && t.classList.remove(js),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(js),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            y(t),
            t.classList.contains(Ps) && t.classList.add(Ns),
            t.parentNode && t.parentNode.classList.contains(Cs) && (t.closest(Hs) && ft.find(Rs).forEach((t=>t.classList.add(js))),
            t.setAttribute("aria-expanded", !0)),
            i && i()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = O.get(this, As) || new Ks(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    K.on(document, Ss, Ws, (function(t) {
        t.preventDefault(),
        (O.get(this, As) || new Ks(this)).show()
    }
    )),
    T(Ts, Ks);
    const Us = "toast"
      , qs = "bs.toast"
      , zs = `.${qs}`
      , Fs = `click.dismiss ${zs}`
      , Vs = `hide ${zs}`
      , Ys = `hidden ${zs}`
      , Xs = `show ${zs}`
      , Gs = `shown ${zs}`
      , Zs = "fade"
      , Js = "hide"
      , to = "show"
      , eo = "showing"
      , io = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , no = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    }
      , so = '[data-bs-dismiss="toast"]';
    class oo extends q {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        static get DefaultType() {
            return io
        }
        static get Default() {
            return no
        }
        static get DATA_KEY() {
            return qs
        }
        show() {
            if (K.trigger(this._element, Xs).defaultPrevented)
                return;
            this._clearTimeout(),
            this._config.animation && this._element.classList.add(Zs);
            const t = ()=>{
                this._element.classList.remove(eo),
                this._element.classList.add(to),
                K.trigger(this._element, Gs),
                this._config.autohide && (this._timeout = setTimeout((()=>{
                    this.hide()
                }
                ), this._config.delay))
            }
            ;
            if (this._element.classList.remove(Js),
            y(this._element),
            this._element.classList.add(eo),
            this._config.animation) {
                const e = u(this._element);
                K.one(this._element, "transitionend", t),
                p(this._element, e)
            } else
                t()
        }
        hide() {
            if (!this._element.classList.contains(to))
                return;
            if (K.trigger(this._element, Vs).defaultPrevented)
                return;
            const t = ()=>{
                this._element.classList.add(Js),
                K.trigger(this._element, Ys)
            }
            ;
            if (this._element.classList.remove(to),
            this._config.animation) {
                const e = u(this._element);
                K.one(this._element, "transitionend", t),
                p(this._element, e)
            } else
                t()
        }
        dispose() {
            this._clearTimeout(),
            this._element.classList.contains(to) && this._element.classList.remove(to),
            K.off(this._element, Fs),
            super.dispose(),
            this._config = null
        }
        _getConfig(t) {
            return t = {
                ...no,
                ...ut.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            },
            g(Us, t, this.constructor.DefaultType),
            t
        }
        _setListeners() {
            K.on(this._element, Fs, so, (()=>this.hide()))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = O.get(this, qs);
                if (e || (e = new oo(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    T(Us, oo)
}
)(o("hxwDY"));
//# sourceMappingURL=index.25aed619.js.map
