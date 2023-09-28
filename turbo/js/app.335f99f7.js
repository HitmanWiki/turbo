(function(t) {
    function e(e) {
        for (var n, o, r = e[0], l = e[1], c = e[2], u = 0, p = []; u < r.length; u++) o = r[u], Object.prototype.hasOwnProperty.call(s, o) && s[o] && p.push(s[o][0]), s[o] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
        d && d(e);
        while (p.length) p.shift()();
        return i.push.apply(i, c || []), a()
    }

    function a() {
        for (var t, e = 0; e < i.length; e++) {
            for (var a = i[e], n = !0, r = 1; r < a.length; r++) {
                var l = a[r];
                0 !== s[l] && (n = !1)
            }
            n && (i.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }
    var n = {},
        s = {
            app: 0
        },
        i = [];

    function o(e) {
        if (n[e]) return n[e].exports;
        var a = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = t, o.c = n, o.d = function(t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(a, n, function(e) {
                return t[e]
            }.bind(null, n));
        return a
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var c = 0; c < r.length; c++) e(r[c]);
    var d = l;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    "0220": function(t, e, a) {
        "use strict";
        a("38ee")
    },
    "04f4": function(t, e, a) {
        "use strict";
        a("8b8c")
    },
    1: function(t, e) {},
    10: function(t, e) {},
    11: function(t, e) {},
    12: function(t, e) {},
    "120f": function(t, e, a) {
        "use strict";
        a("8224")
    },
    13: function(t, e) {},
    14: function(t, e) {},
    2: function(t, e) {},
    3: function(t, e) {},
    "38ee": function(t, e, a) {},
    "3f1b": function(t, e, a) {},
    4: function(t, e) {},
    4668: function(t, e, a) {
        "use strict";
        a("c6c5")
    },
    4678: function(t, e, a) {
        var n = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function s(t) {
            var e = i(t);
            return a(e)
        }

        function i(t) {
            if (!a.o(n, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return n[t]
        }
        s.keys = function() {
            return Object.keys(n)
        }, s.resolve = i, t.exports = s, s.id = "4678"
    },
    5: function(t, e) {},
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("2b0e"),
            s = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "main-container",
                    attrs: {
                        id: "app"
                    }
                }, [e("header", {
                    staticStyle: {
                        "margin-bottom": "30px"
                    },
                    attrs: {
                        id: "home"
                    }
                }, [e("Navbar", {
                    attrs: {
                        isConnecting: t.isConnecting
                    },
                    on: {
                        connect: t.connect
                    }
                })], 1), t.account && t.isEligible ? e("div", {
                    staticClass: "container d-flex justify-content-between align-items-start flex-wrap xl-gap"
                }, [t.isShowConfigs ? e("div", {
                    staticClass: "col-xl-7 col-12 pe-xl-4"
                }, [e("transaction-config", {
                    staticClass: "mb-4"
                }), e("router-view")], 1) : e("div", {
                    staticClass: "col-12 pe-xl-4"
                }, [e("router-view")], 1), e("div", {
                    staticClass: "col-xl-5 col-12 align-top relative"
                }, [t.isShowConfigs ? e("account-list", {
                    staticClass: "mt-4 mt-lg-0 mb-4"
                }) : t._e(), t.isShowConfigs ? e("notification-list", {
                    staticClass: "mt-4 mt-lg-0 mb-4"
                }) : t._e()], 1)]) : t.account ? e("div", {
                    staticClass: "d-flex justfy-content-center align-items-center"
                }, [t._m(0)]) : e("div", {
                    staticClass: "container d-flex justify-content-lg-between align-items-center justify-between flex-wrap"
                }, [e("ContractList")], 1), e("alert-modal", {
                    attrs: {
                        title: t.alertModalTitle,
                        icon: t.alertModalIcon,
                        active: t.alertModalActive,
                        content: t.alertModalContent,
                        btnOk: t.alertModalBtnOk,
                        callback: t.alertModalCallback
                    },
                    on: {
                        ok: function(e) {
                            t.alertModalActive = !1
                        }
                    }
                })], 1)
            },
            i = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "bg-white d-flex flex-column justfy-content-center align-items-center",
                    staticStyle: {
                        width: "80%",
                        padding: "5rem"
                    }
                }, [e("div", {
                    staticStyle: {
                        "font-size": "20px"
                    }
                }, [t._v(" Loading... ")])])
            }],
            o = function() {
                var t = this,
                    e = t._self._c;
                return e("header", {
                    staticClass: "py-4 bg-#2f5c9c"
                }, [e("div", {
                    staticClass: "container d-flex justify-content-lg-between align-items-center justify-between flex-wrap"
                }, [e("div", {}, [e("div", {
                    staticClass: "d-flex align-items-center justify-content-lg-start justify-content-center justify-between"
                }, [e("div", {}, [e("ul", {
                    staticClass: "list-unstyled d-flex align-items-center m-0 ms-lg-0 ms-3"
                }, [e("li", [e("router-link", {
                    attrs: {
                        to: "/"
                    }
                }, [e("a", {
                    staticClass: "text-muted"
                }, [t._v("Turbo Snipping Tools")])])], 1), e("li", [e("router-link", {
                    attrs: {
                        to: "/contracts"
                    }
                }, [e("a", {
                    staticClass: "text-muted",
                    staticStyle: {
                        "white-space": "nowrap"
                    }
                }, [t._v("Contracts")])])], 1)])])])]), e("div", {
                    staticClass: "col-xl-6 col-12 mt-lg-0 mt-3"
                }, [e("div", {
                    staticClass: "connect-wallet d-flex justify-content-lg-end justify-content-center align-items-center"
                }, [e("div", {
                    staticClass: "wallet ms-4"
                }, [e("div", {
                    staticClass: "dropdown"
                }, [t.account ? e("div", {
                    staticClass: "d-flex align-items-center flex-wrap justify-content-center"
                }, [e("img", {
                    staticClass: "action-icon",
                    staticStyle: {
                        width: "25px",
                        height: "25px",
                        "margin-right": "15px",
                        cursor: "pointer"
                    },
                    attrs: {
                        onclick: "Intercom('showArticle', 5989339)",
                        src: "img/question.svg"
                    }
                }), t.showSearch ? e("div", {
                    staticClass: "d-flex",
                    staticStyle: {
                        position: "relative"
                    }
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.contract,
                        expression: "contract"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        height: "35px",
                        "padding-right": "30px"
                    },
                    attrs: {
                        id: "contract-address-search",
                        type: "text",
                        placeholder: "Contract Address"
                    },
                    domProps: {
                        value: t.contract
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.contract = e.target.value)
                        }
                    }
                }), e("a", {
                    staticStyle: {
                        position: "absolute",
                        top: "5px",
                        right: "5px"
                    },
                    attrs: {
                        "data-mdb-placement": "bottom",
                        title: "Delete"
                    },
                    on: {
                        click: t.watch
                    }
                }, [e("img", {
                    staticClass: "action-icon",
                    staticStyle: {
                        width: "25px",
                        height: "25px"
                    },
                    attrs: {
                        src: "img/search.svg"
                    }
                })])]) : t._e(), e("div", {
                    staticClass: "d-flex align-items-center mobile-mt",
                    staticStyle: {
                        "margin-left": "16px",
                        "border-radius": "15px",
                        overflow: "hidden",
                        color: "#7e7e7e",
                        "font-weight": "900"
                    }
                }, [e("div", {
                    staticClass: "d-flex align-items-center justify-content-center;",
                    staticStyle: {
                        "line-height": "1",
                        background: "white",
                        padding: "10px 20px"
                    }
                }, [t._v(t._s(t.getNetwork().title))]), e("div", {
                    staticClass: "d-flex align-items-center justify-content-center;",
                    staticStyle: {
                        "line-height": "1",
                        background: "black",
                        padding: "10px 20px",
                        cursor: "pointer",
                        color: "white"
                    },
                    on: {
                        click: function(e) {
                            t.copyToClipboard(t.account.get("address"))
                        }
                    }
                }, [t._v(t._s(t.formatAddress(t.account.get("address"))))])])]) : e("div", [e("div", {
                    staticClass: "d-flex align-items-center flex-wrap justify-content-center"
                }, [e("img", {
                    staticClass: "action-icon",
                    staticStyle: {
                        width: "25px",
                        height: "25px",
                        "margin-right": "15px",
                        cursor: "pointer"
                    },
                    attrs: {
                        onclick: "Intercom('showArticle', 'tutorial')",
                        src: "img/question.svg"
                    }
                }), e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center"
                }, [e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: t.onConnect
                    }
                }, [t._v(t._s(t.isConnecting ? "Signing" : "CONNECT"))])])])])])])])])]), e("v-tour", {
                    attrs: {
                        name: "myTour",
                        steps: t.steps
                    }
                })], 1)
            },
            r = [],
            l = (a("14d9"), a("c0d8")),
            c = a.n(l),
            d = a("2eaf"),
            u = a("5aac"),
            p = a.n(u);
        const m = [{
                inputs: [{
                    internalType: "address",
                    name: "_factory",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_WETH",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                inputs: [],
                name: "WETH",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "tokenA",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "tokenB",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amountADesired",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountBDesired",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountAMin",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountBMin",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "addLiquidity",
                outputs: [{
                    internalType: "uint256",
                    name: "amountA",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountB",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amountTokenDesired",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountTokenMin",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountETHMin",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "addLiquidityETH",
                outputs: [{
                    internalType: "uint256",
                    name: "amountToken",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountETH",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [],
                name: "factory",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "reserveIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "reserveOut",
                    type: "uint256"
                }],
                name: "getAmountIn",
                outputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "reserveIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "reserveOut",
                    type: "uint256"
                }],
                name: "getAmountOut",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }],
                name: "getAmountsIn",
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }],
                name: "getAmountsOut",
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountA",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "reserveA",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "reserveB",
                    type: "uint256"
                }],
                name: "quote",
                outputs: [{
                    internalType: "uint256",
                    name: "amountB",
                    type: "uint256"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "tokenA",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "tokenB",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountAMin",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountBMin",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "removeLiquidity",
                outputs: [{
                    internalType: "uint256",
                    name: "amountA",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountB",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountTokenMin",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountETHMin",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "removeLiquidityETH",
                outputs: [{
                    internalType: "uint256",
                    name: "amountToken",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountETH",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountTokenMin",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountETHMin",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "removeLiquidityETHSupportingFeeOnTransferTokens",
                outputs: [{
                    internalType: "uint256",
                    name: "amountETH",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountTokenMin",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountETHMin",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "approveMax",
                    type: "bool"
                }, {
                    internalType: "uint8",
                    name: "v",
                    type: "uint8"
                }, {
                    internalType: "bytes32",
                    name: "r",
                    type: "bytes32"
                }, {
                    internalType: "bytes32",
                    name: "s",
                    type: "bytes32"
                }],
                name: "removeLiquidityETHWithPermit",
                outputs: [{
                    internalType: "uint256",
                    name: "amountToken",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountETH",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountTokenMin",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountETHMin",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "approveMax",
                    type: "bool"
                }, {
                    internalType: "uint8",
                    name: "v",
                    type: "uint8"
                }, {
                    internalType: "bytes32",
                    name: "r",
                    type: "bytes32"
                }, {
                    internalType: "bytes32",
                    name: "s",
                    type: "bytes32"
                }],
                name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
                outputs: [{
                    internalType: "uint256",
                    name: "amountETH",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "tokenA",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "tokenB",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountAMin",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountBMin",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }, {
                    internalType: "bool",
                    name: "approveMax",
                    type: "bool"
                }, {
                    internalType: "uint8",
                    name: "v",
                    type: "uint8"
                }, {
                    internalType: "bytes32",
                    name: "r",
                    type: "bytes32"
                }, {
                    internalType: "bytes32",
                    name: "s",
                    type: "bytes32"
                }],
                name: "removeLiquidityWithPermit",
                outputs: [{
                    internalType: "uint256",
                    name: "amountA",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountB",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapETHForExactTokens",
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactETHForTokens",
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactTokensForETH",
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactTokensForTokens",
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountInMax",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapTokensForExactETH",
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountInMax",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapTokensForExactTokens",
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                stateMutability: "payable",
                type: "receive"
            }],
            y = [{
                inputs: [{
                    internalType: "address",
                    name: "_feeToSetter",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "token0",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "token1",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "pair",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "PairCreated",
                type: "event"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "allPairs",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "allPairsLength",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "tokenA",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "tokenB",
                    type: "address"
                }],
                name: "createPair",
                outputs: [{
                    internalType: "address",
                    name: "pair",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "feeTo",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "feeToSetter",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "getPair",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "_feeTo",
                    type: "address"
                }],
                name: "setFeeTo",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "_feeToSetter",
                    type: "address"
                }],
                name: "setFeeToSetter",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }],
            g = [{
                inputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "Burn",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1",
                    type: "uint256"
                }],
                name: "Mint",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0In",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1In",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount0Out",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount1Out",
                    type: "uint256"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "Swap",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint112",
                    name: "reserve0",
                    type: "uint112"
                }, {
                    indexed: !1,
                    internalType: "uint112",
                    name: "reserve1",
                    type: "uint112"
                }],
                name: "Sync",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                constant: !0,
                inputs: [],
                name: "DOMAIN_SEPARATOR",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "MINIMUM_LIQUIDITY",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "PERMIT_TYPEHASH",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "burn",
                outputs: [{
                    internalType: "uint256",
                    name: "amount0",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount1",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "factory",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "getReserves",
                outputs: [{
                    internalType: "uint112",
                    name: "_reserve0",
                    type: "uint112"
                }, {
                    internalType: "uint112",
                    name: "_reserve1",
                    type: "uint112"
                }, {
                    internalType: "uint32",
                    name: "_blockTimestampLast",
                    type: "uint32"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "_token0",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token1",
                    type: "address"
                }],
                name: "initialize",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "kLast",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "mint",
                outputs: [{
                    internalType: "uint256",
                    name: "liquidity",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "nonces",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }, {
                    internalType: "uint8",
                    name: "v",
                    type: "uint8"
                }, {
                    internalType: "bytes32",
                    name: "r",
                    type: "bytes32"
                }, {
                    internalType: "bytes32",
                    name: "s",
                    type: "bytes32"
                }],
                name: "permit",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "price0CumulativeLast",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "price1CumulativeLast",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "skim",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "amount0Out",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amount1Out",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                }],
                name: "swap",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "sync",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "token0",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "token1",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }],
            h = [{
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "delegator",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "fromDelegate",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "toDelegate",
                    type: "address"
                }],
                name: "DelegateChanged",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "delegate",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "previousBalance",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "newBalance",
                    type: "uint256"
                }],
                name: "DelegateVotesChanged",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                inputs: [],
                name: "DELEGATION_TYPEHASH",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "DOMAIN_TYPEHASH",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "account",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "uint32",
                    name: "",
                    type: "uint32"
                }],
                name: "checkpoints",
                outputs: [{
                    internalType: "uint32",
                    name: "fromBlock",
                    type: "uint32"
                }, {
                    internalType: "uint256",
                    name: "votes",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "subtractedValue",
                    type: "uint256"
                }],
                name: "decreaseAllowance",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "delegatee",
                    type: "address"
                }],
                name: "delegate",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "delegatee",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "nonce",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "expiry",
                    type: "uint256"
                }, {
                    internalType: "uint8",
                    name: "v",
                    type: "uint8"
                }, {
                    internalType: "bytes32",
                    name: "r",
                    type: "bytes32"
                }, {
                    internalType: "bytes32",
                    name: "s",
                    type: "bytes32"
                }],
                name: "delegateBySig",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "delegator",
                    type: "address"
                }],
                name: "delegates",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "account",
                    type: "address"
                }],
                name: "getCurrentVotes",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "account",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "blockNumber",
                    type: "uint256"
                }],
                name: "getPriorVotes",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "addedValue",
                    type: "uint256"
                }],
                name: "increaseAllowance",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "mint",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "nonces",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "numCheckpoints",
                outputs: [{
                    internalType: "uint32",
                    name: "",
                    type: "uint32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }],
            f = [{
                constant: !0,
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }],
            b = [{
                inputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapETHForExactTokens",
                selector: "0xfb3bdb41",
                index: {
                    amountIn: 0,
                    amountOut: 1,
                    path: 2,
                    to: 3,
                    deadline: 4,
                    isExact: !0
                },
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactETHForTokens",
                selector: "0x7ff36ab5",
                index: {
                    amountIn: 0,
                    amountOut: 1,
                    path: 2,
                    to: 3,
                    deadline: 4,
                    isExact: !1
                },
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
                selector: "0xb6f9de95",
                index: {
                    amountIn: 0,
                    amountOut: 1,
                    path: 2,
                    to: 3,
                    deadline: 4,
                    isExact: !1
                },
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactTokensForETH",
                selector: "0x18cbafe5",
                index: {
                    amountIn: 1,
                    amountOut: 2,
                    path: 3,
                    to: 4,
                    deadline: 5,
                    isExact: !1
                },
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
                selector: "0x791ac947",
                index: {
                    amountIn: 1,
                    amountOut: 2,
                    path: 3,
                    to: 4,
                    deadline: 5,
                    isExact: !1
                },
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactTokensForTokens",
                selector: "0x38ed1739",
                index: {
                    amountIn: 1,
                    amountOut: 2,
                    path: 3,
                    to: 4,
                    deadline: 5,
                    isExact: !1
                },
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountOutMin",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
                selector: "0x5c11d795",
                index: {
                    amountIn: 1,
                    amountOut: 2,
                    path: 3,
                    to: 4,
                    deadline: 5,
                    isExact: !1
                },
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountInMax",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapTokensForExactETH",
                selector: "0x4a25d94a",
                index: {
                    amountIn: 1,
                    amountOut: 2,
                    path: 3,
                    to: 4,
                    deadline: 5,
                    isExact: !0
                },
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountInMax",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256"
                }],
                name: "swapTokensForExactTokens",
                selector: "0x8803dbee",
                index: {
                    amountIn: 2,
                    amountOut: 1,
                    path: 3,
                    to: 4,
                    deadline: 5,
                    isExact: !0
                },
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "amountInMax",
                    type: "uint256"
                }, {
                    internalType: "address[]",
                    name: "path",
                    type: "address[]"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }],
                name: "swapTokensForExactTokens",
                selector: "0x472b43f3",
                index: {
                    amountIn: 2,
                    amountOut: 1,
                    path: 3,
                    to: 4,
                    deadline: -1,
                    isExact: !0
                },
                outputs: [{
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }],
            v = [{
                constant: !0,
                inputs: [],
                name: "name",
                outputs: [{
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "guy",
                    type: "address"
                }, {
                    name: "wad",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "src",
                    type: "address"
                }, {
                    name: "dst",
                    type: "address"
                }, {
                    name: "wad",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "wad",
                    type: "uint256"
                }],
                name: "withdraw",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "decimals",
                outputs: [{
                    name: "",
                    type: "uint8"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    name: "",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "symbol",
                outputs: [{
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    name: "dst",
                    type: "address"
                }, {
                    name: "wad",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "deposit",
                outputs: [],
                payable: !0,
                stateMutability: "payable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    name: "",
                    type: "address"
                }, {
                    name: "",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                payable: !0,
                stateMutability: "payable",
                type: "fallback"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    name: "src",
                    type: "address"
                }, {
                    indexed: !0,
                    name: "guy",
                    type: "address"
                }, {
                    indexed: !1,
                    name: "wad",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    name: "src",
                    type: "address"
                }, {
                    indexed: !0,
                    name: "dst",
                    type: "address"
                }, {
                    indexed: !1,
                    name: "wad",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    name: "dst",
                    type: "address"
                }, {
                    indexed: !1,
                    name: "wad",
                    type: "uint256"
                }],
                name: "Deposit",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    name: "src",
                    type: "address"
                }, {
                    indexed: !1,
                    name: "wad",
                    type: "uint256"
                }],
                name: "Withdrawal",
                type: "event"
            }],
            w = [{
                inputs: [{
                    internalType: "address",
                    name: "_WETH",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_from",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "Deposit",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_router",
                    type: "address"
                }],
                name: "RouterChanged",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_spender",
                    type: "address"
                }],
                name: "SpenderUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_from",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "Withdraw",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "WithdrawDustETH",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "WithdrawDustToken",
                type: "event"
            }, {
                inputs: [],
                name: "WETH",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_owner",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address[]",
                    name: "_recipients",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amountIns",
                    type: "uint256[]"
                }, {
                    internalType: "uint256[]",
                    name: "_maxOuts",
                    type: "uint256[]"
                }],
                name: "buy",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "deposit",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address[]",
                    name: "_recipients",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amounts",
                    type: "uint256[]"
                }],
                name: "multiSendETH",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address[]",
                    name: "_recipients",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amounts",
                    type: "uint256[]"
                }, {
                    internalType: "uint256",
                    name: "_totalAmount",
                    type: "uint256"
                }],
                name: "multiWithdrawETH",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "ownerToSpender",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "router",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address[]",
                    name: "_sellers",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amountIns",
                    type: "uint256[]"
                }, {
                    internalType: "bool",
                    name: "_isPercent",
                    type: "bool"
                }],
                name: "sell",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_router",
                    type: "address"
                }],
                name: "setRouter",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_spender",
                    type: "address"
                }],
                name: "setSpender",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "spenderToOwner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "withdraw",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }],
                name: "withdrawDustETH",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }],
                name: "withdrawDustToken",
                outputs: [{
                    internalType: "bool",
                    name: "_sent",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                stateMutability: "payable",
                type: "receive"
            }],
            T = [{
                inputs: [{
                    internalType: "address",
                    name: "_WETH",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_router",
                    type: "address"
                }],
                name: "RouterChanged",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "WithdrawDustETH",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "WithdrawDustToken",
                type: "event"
            }, {
                inputs: [],
                name: "WETH",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address[]",
                    name: "_recipients",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amounts",
                    type: "uint256[]"
                }],
                name: "multiSendETH",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address[]",
                    name: "_recipients",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amounts",
                    type: "uint256[]"
                }],
                name: "multiSendToken",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token0",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token1",
                    type: "address"
                }, {
                    internalType: "address[]",
                    name: "_recipients",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amountIns",
                    type: "uint256[]"
                }, {
                    internalType: "uint256[]",
                    name: "_maxOuts",
                    type: "uint256[]"
                }, {
                    internalType: "address",
                    name: "_factory",
                    type: "address"
                }, {
                    internalType: "bool",
                    name: "_isBuy",
                    type: "bool"
                }, {
                    internalType: "bool",
                    name: "_isPercent",
                    type: "bool"
                }, {
                    internalType: "bytes32",
                    name: "_parentHash",
                    type: "bytes32"
                }],
                name: "multicall",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "ownerToSpender",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "routerV2",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_routerV2",
                    type: "address"
                }],
                name: "setRouter",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }],
                name: "withdrawDustETH",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }],
                name: "withdrawDustToken",
                outputs: [{
                    internalType: "bool",
                    name: "_sent",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                stateMutability: "payable",
                type: "receive"
            }],
            C = [{
                inputs: [{
                    internalType: "address",
                    name: "_factory",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_WETH",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_escrow",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_escrow",
                    type: "address"
                }],
                name: "EscrowUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "WithdrawDustETH",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "WithdrawDustToken",
                type: "event"
            }, {
                inputs: [],
                name: "WETH",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address[]",
                    name: "_recipients",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amountIns",
                    type: "uint256[]"
                }, {
                    internalType: "uint256[]",
                    name: "_maxOuts",
                    type: "uint256[]"
                }],
                name: "buy",
                outputs: [{
                    internalType: "uint256",
                    name: "amountSpent",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "escrow",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amountOut",
                    type: "uint256"
                }],
                name: "getAmountIn",
                outputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amountIn",
                    type: "uint256"
                }],
                name: "getAmountOut",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address[]",
                    name: "_sellers",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amountIns",
                    type: "uint256[]"
                }],
                name: "sell",
                outputs: [{
                    internalType: "uint256",
                    name: "amountReceived",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_escrow",
                    type: "address"
                }],
                name: "setEscrow",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }],
                name: "withdrawDustETH",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }],
                name: "withdrawDustToken",
                outputs: [{
                    internalType: "bool",
                    name: "_sent",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }],
            k = [{
                inputs: [{
                    internalType: "address",
                    name: "_WETH",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_aggregator",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_aggregator",
                    type: "address"
                }],
                name: "AggregatorUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "WithdrawDustETH",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256"
                }],
                name: "WithdrawDustToken",
                type: "event"
            }, {
                inputs: [],
                name: "WETH",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "aggregator",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_from",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token0",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token1",
                    type: "address"
                }, {
                    internalType: "address[]",
                    name: "_recipients",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amountIns",
                    type: "uint256[]"
                }, {
                    internalType: "uint256[]",
                    name: "_maxOuts",
                    type: "uint256[]"
                }, {
                    internalType: "address",
                    name: "_factory",
                    type: "address"
                }],
                name: "buy",
                outputs: [{
                    internalType: "uint256",
                    name: "refund",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_factory",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token0",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token1",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amountOut",
                    type: "uint256"
                }],
                name: "getAmountIn",
                outputs: [{
                    internalType: "uint256",
                    name: "amountIn",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_factory",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token0",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token1",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_amountIn",
                    type: "uint256"
                }],
                name: "getAmountOut",
                outputs: [{
                    internalType: "uint256",
                    name: "amountOut",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token0",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_token1",
                    type: "address"
                }, {
                    internalType: "address[]",
                    name: "_recipients",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "_amountIns",
                    type: "uint256[]"
                }, {
                    internalType: "address",
                    name: "_factory",
                    type: "address"
                }, {
                    internalType: "bool",
                    name: "_isPercent",
                    type: "bool"
                }],
                name: "sell",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_aggregator",
                    type: "address"
                }],
                name: "setAggregator",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }],
                name: "withdrawDustETH",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "_token",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "_to",
                    type: "address"
                }],
                name: "withdrawDustToken",
                outputs: [{
                    internalType: "bool",
                    name: "_sent",
                    type: "bool"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                stateMutability: "payable",
                type: "receive"
            }];
        var x = {
                UniswapRouterABI: m,
                UniswapFactoryABI: y,
                UniswapPairABI: g,
                TokenABI: h,
                NameABI: f,
                ERC20ABI: v,
                EscrowABI: w,
                RouterABI: C,
                AggregatorABI: T,
                RouterV2ABI: k,
                TradingABI: b
            },
            _ = {
                API_BASE_URL: "http://localhost",
                PARSE_APP_ID: "tokenix",
                PARSE_MASTER_KEY: "tokenix_master",
                PARSE_URL: "https://backend.tokenix.org/tokenix",
                PARSE_LIVE_QUERY_URL: "ws://localhost:1338",
                PARSE_JS_KEY: "",
                PARSE_DEFAULT_PASSWORD: "sniper",
                ADMIN: "0x0000",
                CHAIN_ID: 1,
                NETWORK: "main",
                SOCKET_DAPP_ID: "fcbefc9c-953d-4917-a209-07bf5a4ad7f8",
                MIN_SNIPER_VALUE: 0,
                MIN_SNIPER_VALUE_FOR_COPY_TRADING: .5,
                MIN_DETAILS_SNIPER_AMOUNT: 0,
                SNIPER_ADDRESS: "",
                MAINNET_RPC: "",
                MAINNET_UNI_ROUTER_ADDRESS: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
                MAINNET_WETH_ADDRESS: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                ETH_ESCROW_ADDRESS: "0x89d7c52b999DE0f2D862eD944203BFA0526AE973",
                RINKEBY_ESCROW_ADDRESS: "0x3e4dEaB798b75FB19E3305cf2DDc83032940A24c",
                BSC_ESCROW_ADDRESS: "0xf965f1995A6CC011524F8762d811F64f1045777E",
                ETH_ROUTER_ADDRESS: "0xf05dab17B820063Ca143303641adD237C3cA9d32",
                RINKEBY_ROUTER_ADDRESS: "0xAAa83841d5a6Ea44E90Cd534d2e470005e4633c3",
                BSC_ROUTER_ADDRESS: "0x9d1a0E3492F16Ad58E744071e41483495537e488",
                ETH_AGGREGATOR_ADDRESS: "0x7Fa99b800F0188381a76698Bb13076a7F726c420",
                RINKEBY_AGGREGATOR_ADDRESS: "0xf2Ca019454C5e0dcdcBD8e3539CcfCF00850e148",
                BSC_AGGREGATOR_ADDRESS: "0x328c0Ac24544fbF031080E470A7037d66F57013b",
                CRO_AGGREGATOR_ADDRESS: "",
                ETH_ROUTER_V2_ADDRESS: "0xaC3d134c890C309740140B4Cd62c0FbC2CFA8F4c",
                RINKEBY_ROUTER_V2_ADDRESS: "0x39a70EDaC9413F4A71ea9c682b2c62095b165A7b",
                BSC_ROUTER_V2_ADDRESS: "0xa7c94265eeC99B43C17BAC5Cd04d24641F73c934",
                CRO_ROUTER_V2_ADDRESS: "",
                ETH_WETH_ADDRESS: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                RINKEBY_WETH_ADDRESS: "0xc778417e063141139fce010982780140aa0cd5ab",
                BSC_WETH_ADDRESS: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                CRO_WETH_ADDRESS: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
                ETH_DEX_LIST: [{
                    title: "UniSwapV2",
                    address: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
                    router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                    abi: x.UniswapRouterABI
                }, {
                    title: "UniSwapV3",
                    address: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
                    router: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                    isCopyTrading: !0
                }, {
                    title: "SushiSwap",
                    address: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
                    router: "0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f",
                    abi: x.UniswapRouterABI
                }],
                CRO_DEX_LIST: [{
                    title: "MMF Swap",
                    address: "0xd590cc180601aecd6eeadd9b7f2b7611519544f4",
                    router: "0x145677fc4d9b8f19b5d56d1820c48e0443049a30",
                    isDirect: !0
                }],
                RINKEBY_DEX_LIST: [{
                    title: "Uniswap",
                    address: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
                    router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                    abi: x.UniswapRouterABI
                }, {
                    title: "UniSwapV3",
                    address: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
                    router: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                    isCopyTrading: !0
                }],
                BSC_DEX_LIST: [{
                    title: "PancakeSwap",
                    address: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
                    router: "0x10ED43C718714eb63d5aA57B78B54704E256024E"
                }],
                IS_TEST: !1
            };
        const M = a("bf48");
        class A {
            constructor() {
                this._initilized = !1
            }
            get client() {
                return M
            }
            instance() {
                return M
            }
            getClass(t) {
                return M.Object.extend(t)
            }
            getUserClass() {
                return M.User
            }
            getAccountQuery() {
                return this.getQuery("Account")
            }
            getTargetQuery() {
                return this.getQuery("Target")
            }
            getContractQuery() {
                return this.getQuery("Contract")
            }
            getHistoryQuery() {
                return this.getQuery("History")
            }
            getQuery(t) {
                return new M.Query(t)
            }
            destroy() {
                return Promise.all([])
            }
            init(t) {
                this._initilized && !t || (M.initialize(_.PARSE_APP_ID, _.PARSE_JS_KEY), M.masterKey = _.PARSE_MASTER_KEY, M.serverURL = _.PARSE_URL), this.destroy().then(() => {
                    this._initilized = !0
                })
            }
            getLiveQueryClient() {
                return new M.LiveQueryClient({
                    applicationId: _.PARSE_APP_ID,
                    serverURL: _.PARSE_LIVE_QUERY_URL,
                    javascriptKey: _.PARSE_JS_KEY
                })
            }
            callCloud(t, e) {
                return M.Cloud.run(t, e)
            }
            getHistories(t, e = 0, a = 100) {
                const n = this.getHistoryQuery();
                return n.equalTo("contract", t), n.descending("createdAt"), n.skip(e), n.limit(a), n.find()
            }
        }
        const S = new A;
        var B = S;
        const O = new n["default"];
        var I = O,
            E = a("2f62");
        a("d9e2");
        const L = a("3452");
        class P {
            encrypt(t, e) {
                return L.AES.encrypt(t, e).toString()
            }
            decrypt(t, e) {
                const a = L.AES.decrypt(t, e),
                    n = a.toString(L.enc.Utf8);
                return n
            }
        }
        var D = new P;
        class N {
            formatAddress(t, e) {
                return t ? (e = e || 4, t.length < 2 * e + 3 ? t : t.substring(0, e) + "..." + t.substr(-e)) : t
            }
            sleep(t) {
                return new Promise(e => {
                    setTimeout(() => {
                        e()
                    }, 1e3 * t)
                })
            }
            formatBigInt(t) {
                return "0x" + BigInt(t).toString(16)
            }
            loadScript(t) {
                const e = window.jQuery;
                return new Promise(a => {
                    e.getScript(t).done(() => {
                        a()
                    })
                })
            }
            formatBalance(t, e) {
                return e || (e = 18), parseInt(BigInt(1e4 * t) / BigInt(10 ** e)) / 1e4
            }
            copyToClipboard(t) {
                navigator.clipboard.writeText(t)
            }
            convertToCSV(t) {
                for (var e = "object" != typeof t ? JSON.parse(t) : t, a = "", n = 0; n < e.length; n++) {
                    var s = "";
                    for (var i in e[n]) "" != s && (s += ","), s += e[n][i];
                    a += s + "\r\n"
                }
                return a
            }
            exportCSVFile(t, e, a) {
                t && e.unshift(t);
                var n = JSON.stringify(e),
                    s = this.convertToCSV(n),
                    i = a + ".csv" || !1,
                    o = new Blob([s], {
                        type: "text/csv;charset=utf-8;"
                    });
                if (navigator.msSaveBlob) navigator.msSaveBlob(o, i);
                else {
                    var r = document.createElement("a");
                    if (void 0 !== r.download) {
                        var l = URL.createObjectURL(o);
                        r.setAttribute("href", l), r.setAttribute("download", i), r.style.visibility = "hidden", document.body.appendChild(r), r.click(), document.body.removeChild(r)
                    }
                }
            }
            exportJSONFile(t, e) {
                var a = e + ".json" || !1,
                    n = new Blob([t], {
                        type: "text/json;charset=utf-8;"
                    });
                if (navigator.msSaveBlob) navigator.msSaveBlob(n, a);
                else {
                    var s = document.createElement("a");
                    if (void 0 !== s.download) {
                        var i = URL.createObjectURL(n);
                        s.setAttribute("href", i), s.setAttribute("download", a), s.style.visibility = "hidden", document.body.appendChild(s), s.click(), document.body.removeChild(s)
                    }
                }
            }
        }
        var j = new N;
        const F = "e_account_changed",
            R = "e_chain_changed",
            $ = "e_login",
            W = "c_new_tx",
            H = "c_test_failed",
            G = "c_test_finished",
            U = "c_test_success",
            q = "e_reject_sign",
            V = "e_new_block",
            z = "e_new_order";
        let Q = null,
            Y = {};
        async function K(t, e, a, n, s, i, o) {
            if (!i.status) return;
            let r = "0",
                l = "0";
            const c = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
            if ("buy" == o) {
                r = BigInt(i.logs[0].data).toString();
                for (let e of i.logs)
                    if (e.address.toLowerCase() == t.toLowerCase() && e.topics[0].toLowerCase() == c.toLowerCase()) {
                        l = BigInt(e.data).toString();
                        break
                    }
            } else {
                r = BigInt(i.logs[i.logs.length - 1].data).toString();
                for (let e of i.logs)
                    if (e.address.toLowerCase() == t.toLowerCase() && e.topics[0].toLowerCase() == c.toLowerCase() && BigInt(e.topics[1]) == BigInt(n.get("address"))) {
                        l = BigInt(e.data).toString();
                        break
                    }
            }
            const d = B.getClass("Order"),
                u = new d;
            u.set("from", n.get("address")), u.set("owner", qt.address), u.set("type", o), u.set("source", s), u.set("network", qt.getNetwork().network), u.set("token0", qt.getWETHAddress()), u.set("token1", t), u.set("to", a), u.set("tx", i.transactionHash), u.set("ethAmount", r), u.set("token1Amount", l), u.set("decimals", e.get("decimals")), u.set("symbol", e.get("symbol")), u.set("gasPrice", i.effectiveGasPrice), u.set("gasUsed", i.gasUsed);
            let p = 0;
            try {
                p = (BigInt(i.effectiveGasPrice) * BigInt(i.gasUsed)).toString(), u.set("gasFee", p)
            } catch (h) {}
            await u.save();
            const m = B.getQuery("Status");
            m.equalTo("network", qt.getNetwork().network), m.equalTo("source", s), m.matches("from", n.get("address"), "i"), m.matches("owner", qt.address, "i"), m.limit(1);
            const y = await m.find();
            let g;
            if (y.length > 0 && (g = y[0]), !g) {
                const t = B.getClass("Status");
                g = new t, g.set("network", qt.getNetwork().network), g.set("source", s), g.set("from", n.get("address")), g.set("owner", qt.address), g.set("ethAmount", "0"), g.set("gasFee", "0"), g.set("numTx", 0)
            }
            "buy" == o ? g.set("ethAmount", (BigInt(g.get("ethAmount")) - BigInt(r)).toString()) : g.set("ethAmount", (BigInt(g.get("ethAmount")) + BigInt(r)).toString()), g.set("gasFee", (BigInt(g.get("gasFee")) + BigInt(p)).toString()), g.increment("numTx"), await g.save(), I.$emit(z, u)
        }
        async function J(t, e, a) {
            let n = 0;
            try {
                n = Y[t][e.get("address")]
            } catch (s) {
                console.log(s)
            }
            if (BigInt(n) == BigInt(0)) {
                const a = qt.getTokenContract(t);
                if (n = await a.methods.balanceOf(e.get("address")).call(), BigInt(n) == BigInt(0)) throw new Error("Account balance is 0")
            }
            return BigInt(n) * BigInt(parseInt(a)) / BigInt(100)
        }
        async function X(t, e, a, n, s) {
            if (s = parseFloat(s), isNaN(s)) return 0;
            let i = 0;
            const o = a ? [qt.getWETHAddress(), t] : [t, qt.getWETHAddress()];
            try {
                i = await e.methods.getAmountsOut(n, o).call()
            } catch (r) {
                return console.log("Amount out fetch error", r), 0
            }
            return i = BigInt(i[1]) / BigInt(1e5) * BigInt(parseInt(1e3 * (100 - s))), j.formatBigInt(i)
        }
        const Z = {
                main: null,
                list: []
            },
            tt = {
                list: t => [qt.account, ...t.list],
                main: t => t.main
            },
            et = {
                async fetch({
                    commit: t,
                    state: e
                }) {
                    const a = B.getClass("Account");
                    let s = localStorage.getItem(qt.getNetwork().network + "-accounts");
                    s ? (localStorage.setItem(`${qt.getNetwork().network}-${qt.address}-accounts`, s), localStorage.removeItem(qt.getNetwork().network + "-accounts")) : s = localStorage.getItem(`${qt.getNetwork().network}-${qt.address}-accounts`);
                    let i = [];
                    try {
                        const t = JSON.parse(s);
                        for (let e of t) "string" == typeof e.address && i.push(new a(e))
                    } catch (r) {
                        console.log("account fetch error", r)
                    }
                    const o = [];
                    for (let n of i) {
                        try {
                            n.pk = D.decrypt(n.get("privateKey"), qt.signature)
                        } catch (r) {
                            console.log("account error")
                        }
                        n.pk && "" != n.pk || (n.pk = n.get("privateKey")), o.push(n)
                    }
                    t("SET", ["list", o]), Q && clearInterval(Q), Q = setInterval(() => {
                        const t = t => {
                            qt.getBalance(t.get("address")).then(e => {
                                const a = BigInt(e).toString();
                                n["default"].set(t, "balance", a)
                            })
                        };
                        for (let a of e.list) t(a);
                        t(qt.account)
                    }, 5e3)
                },
                async create({
                    commit: t,
                    state: e
                }, {
                    name: a,
                    privateKey: n,
                    isMain: s
                }) {
                    const i = qt.createAccount(),
                        o = B.getClass("Account"),
                        r = new o;
                    let l;
                    if (r.set("user", qt.address), r.set("name", a), r.set("network", qt.getNetwork().network), "" != n) {
                        const t = qt.web3.eth.accounts.privateKeyToAccount(n);
                        r.set("address", t.address), l = n
                    } else r.set("address", i.address), l = i.privateKey;
                    r.pk = l;
                    const c = D.encrypt(l, qt.signature);
                    r.set("privateKey", c), r.set("isMain", s), s ? t("SET", ["main", r]) : t("PUSH", ["list", r]), localStorage.setItem(`${qt.getNetwork().network}-${qt.address}-accounts`, JSON.stringify(e.list.map(t => t.attributes)))
                },
                async edit({
                    state: t
                }, {
                    account: e,
                    fields: a
                }) {
                    Object.keys(a).map(t => {
                        e.set(t, a[t])
                    }), localStorage.setItem(`${qt.getNetwork().network}-${qt.address}-accounts`, JSON.stringify(t.list.map(t => t.attributes)))
                },
                async delete({
                    commit: t,
                    state: e
                }, a) {
                    a.get("isMain") || (t("SET", ["list", e.list.filter(t => t.get("address").toLowerCase() != a.get("address").toLowerCase())]), localStorage.setItem(`${qt.getNetwork().network}-${qt.address}-accounts`, JSON.stringify(e.list.map(t => t.attributes))))
                },
                async getEscrowBalance({}, t) {
                    return await qt.getEscrowBalance(t)
                },
                async escrowDeposit({}, t) {
                    const e = qt.getEscrowContract();
                    await e.methods.deposit().send({
                        value: j.formatBigInt(BigInt(t * 10 ** 18)),
                        from: qt.address
                    })
                },
                async escrowWithdraw({}, {
                    to: t,
                    amount: e
                }) {
                    const a = qt.getEscrowContract();
                    await a.methods.withdraw(t, j.formatBigInt(BigInt(e * 10 ** 18))).send({
                        from: qt.address
                    })
                },
                async getGasPrice({}) {
                    return await qt.getGasPrice()
                },
                async test({}, {
                    account: t
                }) {
                    const e = await qt.getBalance(t.get("address"));
                    if (BigInt(e) < BigInt(.01 * 10 ** 18)) throw new Error("Insufficient balance")
                },
                async buy({}, {
                    account: t,
                    factory: e,
                    contract: a,
                    router: n,
                    isOriginalRouter: s,
                    token: i,
                    amountIns: o,
                    maxOuts: r,
                    config: l,
                    isCheckTx: c,
                    slippage: d
                }) {
                    let u, p;
                    if (s) {
                        u = n;
                        const e = qt.getUniswapV2Contract(n),
                            a = await X(i, e, !0, o[0], d);
                        p = e.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(a, [qt.getWETHAddress(), i], t.get("address"), (new Date).getTime())
                    } else {
                        const a = qt.getAggregatorContract();
                        u = qt.getAggregatorAddress(), p = a.methods.multicall(qt.getWETHAddress(), i, [t.get("address")], o, r, e, !0, !1, qt.web3.utils.asciiToHex(""))
                    }
                    if (c) {
                        const e = p.encodeABI(),
                            a = await qt.estimateGasLimit({
                                from: t.get("address"),
                                to: u,
                                value: o[0],
                                data: e
                            });
                        l.gas = j.formatBigInt(BigInt(a) + BigInt(15e4))
                    }
                    const m = {
                        from: t.get("address"),
                        to: u,
                        value: o[0],
                        ...l
                    };
                    let y, g = "wallet";
                    !qt.getLevel().canSnipe() || qt.address.toLowerCase() == t.get("address").toLowerCase() && !t.pk ? y = await p.send(m) : (g = "account", y = await qt.send(p, t.pk, m)), K(i, a, u, t, g, y, "buy")
                },
                async sellTest({}, {
                    account: t,
                    factory: e,
                    router: a,
                    isOriginalRouter: n,
                    token: s,
                    amountIns: i,
                    isPercent: o,
                    slippage: r
                }) {
                    let l, c;
                    if (n) {
                        l = a;
                        const e = qt.getUniswapV2Contract(a);
                        let n = BigInt(i[0]);
                        o && (n = await J(s, t, n)), n = j.formatBigInt(n);
                        const d = await X(s, e, !1, n, r);
                        c = e.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(n, d, [s, qt.getWETHAddress()], t.get("address"), (new Date).getTime())
                    } else {
                        l = qt.getAggregatorAddress();
                        const a = qt.getAggregatorContract();
                        c = a.methods.multicall(s, qt.getWETHAddress(), [t.get("address")], i, [0], e, !1, o, qt.web3.utils.asciiToHex(""))
                    }
                    const d = c.encodeABI();
                    await qt.estimateGasLimit({
                        from: t.get("address"),
                        to: l,
                        value: 0,
                        data: d
                    })
                },
                async sell({}, {
                    account: t,
                    token: e,
                    contract: a,
                    factory: n,
                    router: s,
                    isOriginalRouter: i,
                    amountIns: o,
                    isPercent: r,
                    config: l,
                    isCheckTx: c,
                    slippage: d
                }) {
                    let u, p, m = o[0];
                    if (i) {
                        u = s;
                        const a = qt.getUniswapV2Contract(s);
                        m = BigInt(o[0]), r && (m = await J(e, t, m)), m = j.formatBigInt(m);
                        const n = await X(e, a, !1, m, d);
                        p = a.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(m, n, [e, qt.getWETHAddress()], t.get("address"), (new Date).getTime())
                    } else {
                        u = qt.getAggregatorAddress();
                        const a = qt.getAggregatorContract();
                        p = a.methods.multicall(e, qt.getWETHAddress(), [t.get("address")], o, [0], n, !1, r, qt.web3.utils.asciiToHex(""))
                    }
                    if (c) {
                        const e = p.encodeABI(),
                            a = await qt.estimateGasLimit({
                                from: t.get("address"),
                                to: u,
                                value: 0,
                                data: e
                            });
                        l.gas = j.formatBigInt(BigInt(a) + BigInt(1e5))
                    }
                    const y = {
                        from: t.get("address"),
                        to: u,
                        value: 0,
                        ...l
                    };
                    let g, h = "wallet";
                    !qt.getLevel().canSnipe() || qt.address.toLowerCase() == t.get("address").toLowerCase() && !t.pk ? g = await p.send(y) : (h = "account", g = await qt.send(p, t.pk, y)), K(e, a, u, t, h, g, "sell")
                },
                async copy({}, {
                    token: t,
                    contract: e,
                    account: a,
                    to: n,
                    config: s,
                    value: i,
                    input: o,
                    isBuy: r
                }) {
                    const l = { ...s,
                            from: a.get("address"),
                            to: n,
                            value: i,
                            data: o
                        },
                        c = await qt.send(null, a.pk, l);
                    K(t, e, n, a, "account", c, r ? "buy" : "sell")
                },
                async allowance({}, {
                    account: t,
                    contract: e,
                    router: a,
                    isOriginalRouter: n
                }) {
                    const s = qt.getTokenContract(e.get("address"));
                    let i = n ? a : qt.getRouterV2Address();
                    return await s.methods.allowance(t.get("address"), i).call()
                },
                async approve({}, {
                    account: t,
                    contract: e,
                    router: a,
                    isOriginalRouter: n
                }) {
                    let s = n ? a : qt.getRouterV2Address();
                    const i = qt.getTokenContract(e.get("address"));
                    let o = e.get("totalSupply");
                    BigInt(o) == BigInt(0) && (o = BigInt(10 ** 18 * 10 ** 18));
                    const r = i.methods.approve(s, j.formatBigInt(o));
                    let l = await qt.getGasPrice();
                    l = BigInt(l) * BigInt(150) / BigInt(100);
                    const c = {
                        from: t.get("address"),
                        to: e.get("address"),
                        gas: 1e5,
                        value: 0,
                        gasPrice: j.formatBigInt(l)
                    };
                    qt.getLevel().canSnipe() && (qt.address.toLowerCase() != t.get("address").toLowerCase() || t.pk) ? await qt.send(r, t.pk, c) : await r.send(c)
                },
                async cancel({}, {
                    account: t,
                    gasPrice: e
                }) {
                    await qt.send(null, t.pk, {
                        from: t.get("address"),
                        to: t.get("address"),
                        value: 0,
                        gas: 4e4,
                        gasPrice: e
                    })
                },
                async deposit({}, {
                    recipients: t,
                    amounts: e,
                    totalAmount: a,
                    isEscrow: n
                }) {
                    const s = qt.getAggregatorContract();
                    let i = "multiSendETH";
                    e = e.map(t => j.formatBigInt(t * 10 ** 18));
                    let o = [t, e];
                    const r = {
                        from: qt.address
                    };
                    a = j.formatBigInt(a * 10 ** 18), n ? (i = "multiWithdrawETH", o.push(a)) : r["value"] = a, await s.methods[i](...o).send(r)
                },
                async withdraw({}, {
                    account: t,
                    to: e,
                    amount: a
                }) {
                    const n = BigInt(await qt.getBalance(t.get("address"))),
                        s = await qt.estimateGasLimit({
                            from: t.get("address"),
                            to: e,
                            value: j.formatBigInt(a * 10 ** 18)
                        }),
                        i = await qt.getGasPrice(),
                        o = BigInt(i) * BigInt(s);
                    a = BigInt(a * 10 ** 18), n - o < a && (a = n - o), await qt.send(null, t.pk, {
                        from: t.get("address"),
                        to: e,
                        value: j.formatBigInt(a),
                        gas: s,
                        gasPrice: i
                    })
                },
                async getTokenBalance({}, {
                    account: t,
                    contract: e
                }) {
                    const a = e.get("address"),
                        n = await qt.getTokenBalance(a, t.get("address"));
                    return Y[a] || (Y[a] = {}), Y[a][t.get("address")] = n, n
                }
            },
            at = {
                SET(t, [e, a]) {
                    t[e] = a
                },
                PUSH(t, [e, a]) {
                    t[e].push(a)
                }
            };
        var nt = {
            namespaced: !0,
            state: Z,
            getters: tt,
            actions: et,
            mutations: at
        };
        const st = {
                list: [],
                active: null
            },
            it = {
                list: t => t.list,
                active: t => t.active
            },
            ot = {
                async fetch({
                    commit: t
                }) {
                    console.log("Getting contracts");
                    const e = B.getContractQuery();
                    e.equalTo("user", qt.address), e.equalTo("network", qt.getNetwork().network), e.limit(30), e.descending("createdAt");
                    const a = await e.find();
                    t("SET", ["list", a])
                },
                async setActive({
                    commit: t
                }, e) {
                    t("SET", ["active", e])
                },
                async get({
                    dispatch: t
                }, e) {
                    const a = B.getContractQuery();
                    a.matches("address", e, "i"), a.ascending("createdAt"), a.limit(1);
                    const n = await a.find();
                    if (n.length > 0) {
                        if (n[0].get("totalSupply")) return n[0];
                        await n[0].destroy()
                    }
                    return await t("create", e)
                },
                async create({}, t) {
                    const e = await qt.getTokenDetails(t),
                        a = B.getClass("Contract"),
                        n = new a;
                    return n.set("owner", e.owner), n.set("network", qt.getNetwork().network), n.set("address", t), n.set("abi", []), n.set("totalSupply", e.totalSupply), n.set("decimals", e.decimals), n.set("name", e.name), n.set("symbol", e.symbol), await n.save(), n
                }
            },
            rt = {
                SET(t, [e, a]) {
                    t[e] = a
                }
            };
        var lt = {
            namespaced: !0,
            state: st,
            getters: it,
            actions: ot,
            mutations: rt
        };
        const ct = {},
            dt = {},
            ut = {
                async fetch({}, t) {
                    const e = B.getContractQuery();
                    return e.equalTo("user", qt.address), e.equalTo("network", qt.getNetwork().network), e.equalTo("contract", t), e.limit(30), e.descending("createdAt"), await e.find()
                }
            },
            pt = {
                SET(t, [e, a]) {
                    t[e] = a
                }
            };
        var mt = {
            namespaced: !0,
            state: ct,
            getters: dt,
            actions: ut,
            mutations: pt
        };
        const yt = {},
            gt = {},
            ht = {
                async fetch({}, t) {
                    const e = B.getQuery("History");
                    e.equalTo("contract", t), e.equalTo("network", qt.getNetwork().network), e.limit(30), e.descending("createdAt");
                    const a = await e.find();
                    return a
                }
            },
            ft = {
                SET(t, [e, a]) {
                    t[e] = a
                }
            };
        var bt = {
            namespaced: !0,
            state: yt,
            getters: gt,
            actions: ht,
            mutations: ft
        };
        const vt = {
                liveList: [],
                pastList: [],
                watchList: []
            },
            wt = {
                liveList: t => t.liveList,
                pastList: t => t.pastList,
                watchList: t => t.watchList
            },
            Tt = {
                async fetch({
                    commit: t
                }, e) {
                    let a = "";
                    const n = B.getQuery("Watch");
                    n.equalTo("user", qt.address), n.equalTo("network", qt.getNetwork().network), "live" == e ? (n.equalTo("isActive", !0), n.equalTo("isFinished", !1), a = "liveList") : "past" == e ? (n.equalTo("isActive", !0), n.equalTo("isFinished", !0), a = "pastList") : (n.equalTo("isActive", !1), a = "watchList"), n.limit(30), n.descending("createdAt");
                    const s = await n.find();
                    t("SET", [a, s])
                },
                async get({}, t) {
                    const e = B.getQuery("Watch");
                    e.equalTo("network", qt.getNetwork().network), e.equalTo("address", t), e.limit(1);
                    const a = await e.find();
                    return a.length > 0 ? a[0] : null
                },
                async delete({
                    commit: t,
                    state: e
                }, {
                    address: a,
                    type: n
                }) {
                    const s = B.getQuery("Watch");
                    s.equalTo("address", a), s.equalTo("network", qt.getNetwork().network), s.equalTo("user", qt.address), s.limit(1);
                    const i = await s.find();
                    if (i.length > 0) {
                        await i[0].destroy();
                        const s = n + "List";
                        t("SET", [s, e[s].filter(t => t.get("address") != a)])
                    }
                    return !0
                },
                async createUpdate({
                    commit: t,
                    state: e
                }, {
                    address: a,
                    owner: n,
                    symbol: s,
                    name: i,
                    isActive: o,
                    totalSupply: r,
                    decimals: l,
                    isFinished: c
                }) {
                    const d = B.getQuery("Watch");
                    d.equalTo("network", qt.getNetwork().network), d.equalTo("address", a), d.limit(1);
                    const u = await d.find();
                    let p = null,
                        m = null,
                        y = null;
                    if (u.length > 0) p = u[0], m = !!p.get("isActive"), y = !!p.get("isFinished");
                    else {
                        const t = B.getClass("Watch");
                        p = new t, p.set("network", qt.getNetwork().network)
                    }
                    return a && p.set("address", a), i && p.set("name", i), s && p.set("symbol", s), n && p.set("owner", n), r && p.set("totalSupply", r), l && p.set("decimals", l), p.set("user", qt.address), void 0 != o && p.set("isActive", o), void 0 != c && p.set("isFinished", c), await p.save(), t("SET", !1 === m ? ["watchList", e.watchList.filter(t => t.id != p.id)] : !1 === y ? ["liveList", e.liveList.filter(t => t.id != p.id)] : ["pastList", e.pastList.filter(t => t.id != p.id)]), p.get("isActive") ? p.get("isFinished") ? t("PUSH", ["pastList", p]) : t("PUSH", ["liveList", p]) : t("PUSH", ["watchList", p]), p
                }
            },
            Ct = {
                SET(t, [e, a]) {
                    t[e] = a
                },
                PUSH(t, [e, a]) {
                    t[e].push(a)
                }
            };
        var kt = {
            namespaced: !0,
            state: vt,
            getters: wt,
            actions: Tt,
            mutations: Ct
        };
        const xt = {
                status: [],
                orders: {
                    pageSize: 5,
                    page: 0,
                    data: []
                }
            },
            _t = {
                status: t => t.status,
                orders: t => t.orders
            },
            Mt = {
                async fetchStatus({
                    commit: t
                }) {
                    const e = B.getQuery("Status"),
                        a = qt.getLevel().canUseAccount() ? "account" : "wallet";
                    e.equalTo("network", qt.getNetwork().network), e.equalTo("source", a), e.matches("owner", qt.address, "i");
                    const n = await e.find();
                    t("SET", ["status", n])
                },
                async fetchOrders({
                    state: t,
                    commit: e
                }, {
                    pageSize: a,
                    page: n
                }) {
                    a = a || 5, n = n || 1;
                    const s = B.getQuery("Order"),
                        i = qt.getLevel().canUseAccount() ? "account" : "wallet";
                    s.equalTo("network", qt.getNetwork().network), s.equalTo("source", i), s.matches("owner", qt.address, "i"), s.skip(a * (n - 1)), s.limit(a), s.descending("createdAt");
                    const o = await s.find();
                    let r = {};
                    r = 1 == n ? {
                        pageSize: a,
                        page: n,
                        data: o
                    } : {
                        pageSize: a,
                        page: n,
                        data: [...t.orders.data, ...o]
                    }, e("SET", ["orders", r])
                }
            },
            At = {
                SET(t, [e, a]) {
                    t[e] = a
                }
            };
        var St = {
            namespaced: !0,
            state: xt,
            getters: _t,
            actions: Mt,
            mutations: At
        };
        const Bt = {
                config: {
                    gasGWei: 0,
                    blocks: 1,
                    buyGasMultiplier: 1.1,
                    buyFastGasMultiplier: 1.2,
                    buyAmount: .1,
                    maxSupply: 0,
                    sellPercent: 100,
                    sellGasMultiplier: 1.1,
                    sellFastGasMultiplier: 1.2,
                    cancelGasMultiplier: 1.5,
                    buyOn: "",
                    isBuyInstant: !0,
                    isSellOnWarn: !0,
                    factory: 0,
                    copyRouters: [],
                    isOriginalRouter: !0,
                    isMEV: !1,
                    mevFee: .001,
                    slippage: .3,
                    warns: [],
                    isBuySameAmount: !1,
                    isSellSameAmount: !0,
                    isBuyOnce: !1,
                    sellThreshold: 0,
                    gasLimitETH: .15
                }
            },
            Ot = {
                config: t => t.config
            },
            It = {
                async getConfig({
                    state: t
                }, {
                    action: e,
                    type: a,
                    history: n
                }) {
                    a || (a = "normal");
                    let s, i, o, r = 1e6;
                    if (n) {
                        const t = n.get("data");
                        s = t.transaction.gasPrice, i = t.transaction.maxFeePerGas, o = t.transaction.maxPriorityFeePerGas, i && o ? s = 0 : (i = 0, o = 0)
                    } else s = await qt.getGasPrice(), i = 0, o = 0;
                    i || o || s || (s = await qt.getGasPrice());
                    let l, c = parseFloat(t.config.gasGWei);
                    "frontrun" == a ? l = parseFloat(t.config[e + "FastGasMultiplier"]) : "backrun" == a && n ? (c = 0, l = 1) : l = parseFloat(t.config[e + "GasMultiplier"]), c ? (s = BigInt(c) * BigInt(10 ** 9), i = 0, o = 0) : 1 != l && (s ? s = BigInt(s) * BigInt(parseInt(100 * l)) / BigInt(100) : (i = BigInt(i) * BigInt(parseInt(100 * l)) / BigInt(100), o = BigInt(o) * BigInt(parseInt(100 * l)) / BigInt(100)));
                    const d = {
                        gas: r
                    };
                    return s ? d.gasPrice = j.formatBigInt(s) : (d.maxFeePerGas = j.formatBigInt(i), d.maxPriorityFeePerGas = j.formatBigInt(o)), d
                }
            },
            Et = {
                SET(t, [e, a]) {
                    t[e] = a
                }
            };
        var Lt = {
            namespaced: !0,
            state: Bt,
            getters: Ot,
            actions: It,
            mutations: Et
        };
        const Pt = {
                list: [],
                templates: []
            },
            Dt = {
                list: t => t.list,
                templates: t => t.templates
            },
            Nt = {
                async fetchTemplate({
                    commit: t
                }) {
                    const e = B.getQuery("TargetTemplate");
                    e.ascending("createdAt");
                    const a = await e.find();
                    t("SET", ["templates", a])
                },
                async fetch({
                    commit: t
                }) {
                    const e = B.getTargetQuery();
                    e.matches("user", qt.address, "i"), e.equalTo("network", qt.getNetwork().network), e.limit(30), e.ascending("createdAt");
                    const a = await e.find();
                    t("SET", ["list", a])
                },
                async create({
                    commit: t
                }, {
                    name: e,
                    address: a
                }) {
                    const n = B.getClass("Target"),
                        s = new n;
                    s.set("user", qt.address), s.set("name", e), s.set("network", qt.getNetwork().network), s.set("address", a), await s.save(), t("PUSH", ["list", s])
                },
                async edit({}, {
                    target: t,
                    fields: e
                }) {
                    Object.keys(e).map(a => {
                        t.set(a, e[a])
                    }), await t.save()
                },
                async delete({
                    commit: t,
                    state: e
                }, a) {
                    await a.destroy(), t("SET", ["list", e.list.filter(t => t.id != a.id)])
                }
            },
            jt = {
                SET(t, [e, a]) {
                    t[e] = a
                },
                PUSH(t, [e, a]) {
                    t[e].push(a)
                }
            };
        var Ft = {
            namespaced: !0,
            state: Pt,
            getters: Dt,
            actions: Nt,
            mutations: jt
        };
        n["default"].use(E["a"]);
        const Rt = new E["a"].Store({
            modules: {
                accounts: nt,
                contracts: lt,
                positions: mt,
                histories: bt,
                watches: kt,
                information: St,
                transactions: Lt,
                targets: Ft
            },
            state: {
                account: null,
                balance: 0
            },
            getters: {
                account: t => t.account,
                balance: t => t.balance
            },
            actions: {},
            mutations: {
                SET(t, [e, a]) {
                    t[e] = a
                }
            }
        });
        I.$on($, () => {
            Rt.dispatch("accounts/fetch"), Rt.dispatch("watches/fetch", "watch"), Rt.dispatch("watches/fetch", "live"), Rt.dispatch("watches/fetch", "past")
        });
        var $t = Rt;
        const {
            formatBytes32String: Wt,
            parseBytes32String: Ht
        } = a("4d8a");
        class Gt {
            constructor() {
                this.web3 = null, this.account = {}, this.address = null, this.balance = 0, this.timer = null, this.provider = null, this.subscription = null, this.chainId = null, this.sniperBalance = j.formatBigInt(0), this.sniperEthValue = j.formatBigInt(0), this.contracts = {}, this.abis = {}
            }
            createAccount() {
                return this.web3.eth.accounts.create()
            }
            getLevel() {
                const t = [],
                    e = [],
                    a = {};
                return a.isWhitelisted = () => t.map(t => t.toLowerCase()).includes(this.address.toLowerCase()), a.isCopyTradingWhitelisted = () => e.map(t => t.toLowerCase()).includes(this.address.toLowerCase()), a.canSnipe = () => !0, a.canCopyTrade = () => !0, a.canUseAccount = () => !0, a.canSeeDetails = () => !0, a.canWatch = () => !0, a.canSetTpSl = () => !0, a
            }
            isAdmin() {
                const t = ["0x2c7e0035dd2a63624684922615849fc5ae996bcd"];
                try {
                    return this.address.toLowerCase() == _.ADMIN.toLowerCase() || t.map(t => t.toLowerCase()).includes(this.address.toLowerCase())
                } catch (e) {
                    return !1
                }
            }
            async init() {
                const t = {
                        walletconnect: {
                            package: d["a"],
                            options: {
                                infuraId: _.INFURA_ID,
                                rpc: {
                                    [_.CHAIN_ID]: _.RPC_URL
                                }
                            }
                        }
                    },
                    e = new p.a({
                        cacheProvider: !0,
                        providerOptions: t
                    }),
                    a = await e.connect();
                this.provider = a, this.web3 = new c.a(a), this.initObserver();
                const n = await this.web3.eth.getAccounts();
                a.on("accountsChanged", t => {
                    I.$emit(F, t)
                }), a.on("chainChanged", async t => {
                    window.location.reload(), this.chainId = parseInt(t), I.$emit(R, n)
                }), a.on("connect", t => {
                    console.log("Chain Connected", t.chainId)
                }), a.on("disconnect", t => {
                    console.log("Wallet Disconnected", t.code, t.message)
                }), I.$emit(F, n)
            }
            async switchNetwork() {
                const t = "0x" + BigInt(_.CHAIN_ID).toString(16);
                if (!this.isNetworkRequest) {
                    this.isNetworkRequest = !0;
                    try {
                        await this.provider.request({
                            method: "wallet_switchEthereumChain",
                            params: [{
                                chainId: t
                            }]
                        })
                    } catch (e) {
                        if (4902 === e.code) try {
                            await this.provider.request({
                                method: "wallet_addEthereumChain",
                                params: [{
                                    chainId: t
                                }]
                            })
                        } catch (a) {}
                    }
                    this.isNetworkRequest = !1
                }
            }
            initObserver() {
                I.$off(F), I.$on(F, async t => {
                    this.address = t[0], this.chainId = parseInt(await this.web3.eth.net.getId());
                    try {
                        const e = await this.web3.eth.personal.sign("turbo_snipping_tools", t[0]);
                        this.signature = e
                    } catch (e) {
                        return console.log(e), void I.$emit(q)
                    }
                    this.balance = 0, await this.initAccount()
                })
            }
            initTimer() {
                this.timer && clearInterval(this.timer);
                const t = () => {
                    this.updateBalance()
                };
                t()
            }
            async initAccount() {
                localStorage.removeItem("Parse/sniper/currentUser"), localStorage.removeItem("Parse/sniper/installationId"), B.init(!0);
                const t = B.getUserClass(),
                    e = B.getQuery(t);
                e.equalTo("address", this.address.toLowerCase());
                let a = await e.find();
                0 == a.length ? (a = new t({
                    address: this.address.toLowerCase(),
                    username: this.address.toLowerCase(),
                    password: _.PARSE_DEFAULT_PASSWORD
                }), await a.save()) : a = a[0], this.web3.eth.clearSubscriptions(), this.subscription = this.web3.eth.subscribe("newBlockHeaders", (function(t, e) {
                    t ? console.error(t) : I.$emit(V, e.number)
                })).on("connected", (function(t) {
                    console.log("connected", t)
                })).on("data", (function(t) {
                    console.log("block data", t)
                })).on("error", console.error), this.subscription.unsubscribe((function(t, e) {
                    e && console.log("Successfully unsubscribed!")
                })), this.account = a, this.address = a.get("address"), this.balance = 0, await B.getUserClass().logIn(this.address, _.PARSE_DEFAULT_PASSWORD), a.set("timestamp", this.signature), await a.save(), $t.commit("SET", ["account", a]), a.set("name", "Wallet"), n["default"].set(a, "balance", 0), this.initTimer(), I.$emit($, a)
            }
            bytes32(t) {
                return Wt(t)
            }
            parseBytes32(t) {
                return Ht(t)
            }
            isAddress(t) {
                return this.web3.utils.isAddress(t)
            }
            getNetwork() {
                const t = {
                    1: {
                        network: "main",
                        title: "ETH",
                        currency: "ETH",
                        explorer: "https://etherscan.io/",
                        dextool: "https://www.dextools.io/app/ether/pair-explorer/"
                    },
                    4: {
                        network: "rinkeby",
                        title: "RINKEBY",
                        currency: "ETH",
                        explorer: "https://rinkeby.etherscan.io/",
                        dextool: "https://www.dextools.io/app/ether/pair-explorer/"
                    },
                    56: {
                        network: "bsc-main",
                        title: "BSC",
                        currency: "BNB",
                        explorer: "https://bscscan.com/",
                        dextool: "https://www.dextools.io/app/bsc/pair-explorer/"
                    },
                    25: {
                        network: null,
                        cantWatch: !0,
                        title: "CRO",
                        currency: "CRO",
                        explorer: "https://cronos.org/explorer",
                        dextool: "https://dexscreener.com/cronos/"
                    }
                };
                return t[this.chainId]
            }
            async getBalance(t) {
                return this.web3.eth.getBalance(t)
            }
            async getTokenBalance(t, e) {
                const a = this.getTokenContract(t),
                    n = await a.methods.balanceOf(e).call();
                return n
            }
            async getSniperBalance() {
                const t = new c.a(new c.a.providers.HttpProvider(_.MAINNET_RPC)),
                    e = new t.eth.Contract(x.TokenABI, _.SNIPER_ADDRESS),
                    a = await e.methods.balanceOf(this.address).call();
                if (0 == a) return [0, 0];
                const n = new t.eth.Contract(x.UniswapRouterABI, _.MAINNET_UNI_ROUTER_ADDRESS),
                    s = await n.methods.getAmountsOut(a, [_.SNIPER_ADDRESS, _.MAINNET_WETH_ADDRESS]).call();
                return [a, s[1]]
            }
            async getEscrowBalance(t) {
                t || (t = this.address);
                const e = this.getEscrowContract();
                try {
                    return await e.methods.balanceOf(t).call()
                } catch (a) {
                    return 0
                }
            }
            async updateBalance() {
                const t = await this.web3.eth.getBalance(this.address);
                this.balance = t, $t.commit("SET", ["balance", j.formatBalance(t)])
            }
            sign(t, e) {
                const a = this.web3.eth.accounts.hashMessage("I am signing my one-time nonce: " + e);
                return this.web3.eth.sign(a, t)
            }
            getAbi(t) {
                return this.abis[t]
            }
            setAbi(t, e) {
                return this.abis[t] = e
            }
            getTokenContract(t) {
                return t || (t = _.SNIPER_ADDRESS), new this.web3.eth.Contract(x.TokenABI, t)
            }
            addDexList(t) {
                const e = this.getNetwork();
                _[e.title + "_DEX_LIST"].push(t)
            }
            getDexList() {
                const t = this.getNetwork();
                return _[t.title + "_DEX_LIST"]
            }
            getWETHAddress() {
                const t = this.getNetwork();
                return _[t.title + "_WETH_ADDRESS"]
            }
            getAggregatorAddress() {
                const t = this.getNetwork();
                return _[t.title + "_AGGREGATOR_ADDRESS"]
            }
            getEscrowAddress() {
                const t = this.getNetwork();
                return _[t.title + "_ESCROW_ADDRESS"]
            }
            getRouterAddress() {
                const t = this.getNetwork();
                return _[t.title + "_ROUTER_ADDRESS"]
            }
            getRouterV2Address() {
                const t = this.getNetwork();
                return _[t.title + "_ROUTER_V2_ADDRESS"]
            }
            getEscrowContract() {
                return new this.web3.eth.Contract(x.EscrowABI, this.getEscrowAddress())
            }
            getUniswapV2Contract(t) {
                return new this.web3.eth.Contract(x.UniswapRouterABI, t)
            }
            getAggregatorContract() {
                return new this.web3.eth.Contract(x.AggregatorABI, this.getAggregatorAddress())
            }
            getRouterV2Contract() {
                return new this.web3.eth.Contract(x.RouterV2ABI, this.getRouterV2Address())
            }
            getRouterContract() {
                return new this.web3.eth.Contract(x.RouterABI, this.getRouterAddress())
            }
            async decimals(t) {
                t || (t = _.SNIPER_ADDRESS);
                const e = this.getTokenContract();
                return parseInt(await e.methods.decimals().call())
            }
            async getTokenDetails(t) {
                const e = this.getTokenContract(t);
                if (this.contracts[t]) return this.contracts[t];
                const a = {};
                try {
                    console.log("owner"), a.owner = await e.methods.owner().call(), console.log(a.owner)
                } catch (n) {
                    console.log(n)
                }
                try {
                    console.log("total supply"), a.totalSupply = await e.methods.totalSupply().call(), console.log(a.totalSupply)
                } catch (n) {
                    console.log(n)
                }
                try {
                    console.log("decimals"), a.decimals = await e.methods.decimals().call(), console.log(a.decimals)
                } catch (n) {
                    console.log(n)
                }
                try {
                    console.log("name"), a.name = await e.methods.name().call(), console.log(a.name)
                } catch (n) {
                    console.log(n)
                }
                try {
                    console.log("symbol"), a.symbol = await e.methods.symbol().call(), console.log(a.symbol)
                } catch (n) {
                    console.log(n)
                }
                return this.contracts[t] = a, a
            }
            async getGasPrice() {
                return await this.web3.eth.getGasPrice()
            }
            async estimateGasLimit(t) {
                return await this.web3.eth.estimateGas(t)
            }
            async send(t, e, a) {
                let n;
                if (t && (a.data = t.encodeABI()), !e) return await this.web3.eth.sendTransaction(a);
                n = await this.web3.eth.accounts.signTransaction(a, e);
                const s = await this.web3.eth.sendSignedTransaction(n.rawTransaction);
                return s.hash = s.blockHash, s
            }
            callAfterBlocks(t, e, a) {
                if (0 != e) {
                    console.log(t, e, a);
                    var n = this.web3.eth.subscribe("newBlockHeaders", (function(t) {
                        t && console.error(t)
                    })).on("connected", (function(t) {
                        console.log("connected"), console.log(t)
                    })).on("data", (function(t) {
                        console.log("block data", t)
                    })).on("error", console.error);
                    n.unsubscribe((function(t, e) {
                        e && console.log("Successfully unsubscribed!")
                    }))
                } else a(!0)
            }
        }
        const Ut = new Gt;
        var qt = Ut,
            Vt = {
                name: "Navbar",
                props: ["isConnecting"],
                components: {},
                data() {
                    return {
                        contract: "",
                        steps: [{
                            target: "#contract-address-search",
                            header: {
                                title: "Watch contracts"
                            },
                            content: "Type your contract address here to watch the live transactions"
                        }, {
                            target: "#escrow-card",
                            header: {
                                title: "Escrow Information"
                            },
                            content: "This card contains information about your balance. All your funds are stored in the escrow smart contract. You can deposit and withdraw at any time you want"
                        }, {
                            target: "#main-account-table-card",
                            header: {
                                title: "Main wallet"
                            },
                            content: "This is the main wallet to trigger any transactions like Buy / Sell. You have to deposit some ETH to pay gas fee. 0.3ETH is just the enough amount for sending any transactions"
                        }, {
                            target: "#main-account-action-card",
                            header: {
                                title: "Main wallet actions"
                            },
                            content: "You can send transactions using these buttons, It will call escrow contract's function to buy or sell. The gas fee is paid by main account. You can deposit to this main account by clicking the Deposit button"
                        }, {
                            target: "#sub-account-table-card",
                            header: {
                                title: "Sub wallets to store tokens"
                            },
                            content: "These are sub accounts that will store the tokens you buy. You have to deposit to this account for approving the tokens for selling later. All the ETH from selling tokens will be saved in your escrow account and you can withdraw anytime."
                        }, {
                            target: "#transaction-config-card",
                            header: {
                                title: "Transaction configration"
                            },
                            content: "This is the main configration panel for each transaction you make. It has settings like ETH amount to buy a token or max percent of total supply, selling on warn etc. This also has helpful function called Get Selector which converts function names to bytecode. This bytecode will be used to make exact purchase upon owner action like add liquidity or open trading"
                        }, {
                            target: "#active-contracts-card",
                            header: {
                                title: "Active Contracts"
                            },
                            content: "This is the active contracts that you have your positions or traded in the past."
                        }]
                    }
                },
                computed: { ...Object(E["c"])(["account", "balance"]),
                    showSearch() {
                        const t = this.$route.params.address;
                        return !qt.isAddress(t)
                    }
                },
                mounted() {
                    I.$on(R, () => {
                        this.$forceUpdate()
                    })
                },
                methods: {
                    onConnect() {
                        this.$emit("connect")
                    },
                    getNetwork() {
                        return qt.getNetwork()
                    },
                    copyToClipboard(t) {
                        this.$toast("Address copied to clipboard", {
                            position: "top-right",
                            timeout: 2e3,
                            closeOnClick: !0
                        }), j.copyToClipboard(t)
                    },
                    startTutor() {
                        this.$tours["myTour"].start()
                    },
                    formatAddress(t) {
                        return j.formatAddress(t)
                    },
                    async connect() {
                        await qt.init()
                    },
                    watch() {
                        qt.isAddress(this.contract) && this.$router.push({
                            name: "Contract",
                            params: {
                                address: this.contract
                            }
                        })
                    }
                }
            },
            zt = Vt,
            Qt = (a("120f"), a("2877")),
            Yt = Object(Qt["a"])(zt, o, r, !1, null, "75812eba", null),
            Kt = Yt.exports,
            Jt = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticStyle: {
                        "margin-top": "16px"
                    }
                }, [e("div", {
                    staticClass: "card mb-4 sticky-top align-top"
                }, [e("div", {
                    staticClass: "card-body p-0 py-4",
                    attrs: {
                        id: "main-account-table-card"
                    }
                }, [e("div", {
                    staticClass: "d-flex justify-content-between px-4 pb-3"
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Actions")]), e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center",
                    staticStyle: {
                        "margin-top": "-5px"
                    },
                    attrs: {
                        id: "main-account-action-card"
                    }
                }, [t.formatBalance(t.escrowBalance) > .01 ? [t.isEscrowDepositing ? e("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "img/spinner.svg"
                    }
                }) : e("a", {
                    staticClass: "btn-theme",
                    staticStyle: {
                        width: "100px"
                    },
                    on: {
                        click: function(e) {
                            return t.handleDeposit(!0)
                        }
                    }
                }, [t._v("Migrate V1")])] : t._e(), !t.isDepositing && t.getLevel().canSnipe() ? e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: function(e) {
                            return t.handleDeposit(!1)
                        }
                    }
                }, [t._v("Deposit")]) : t.isDepositing ? e("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "img/spinner.svg"
                    }
                }) : t._e(), e("a", {
                    staticClass: "btn-theme",
                    staticStyle: {
                        width: "150px"
                    },
                    on: {
                        click: function(e) {
                            return t.handleAddRouter()
                        }
                    }
                }, [t._v("Add Router")])], 2)])]), e("div", {
                    staticClass: "d-flex justify-content-center align-items-center mb-4 mt-2 flex-wrap"
                }, [t.formatBalance(t.escrowBalance) > .01 ? e("div", {
                    staticStyle: {
                        width: "100%",
                        "padding-left": "10%",
                        padding: "right: 10%",
                        "margin-bottom": "40px"
                    }
                }, [t._v(" You currently have "), e("b", [t._v(t._s(t.formatBalance(t.escrowBalance)) + " " + t._s(t.getNetwork().currency))]), t._v(" in your escrow balance. "), e("br"), t._v(' Please click "Migrate V1" button to withdraw. ')]) : t._e(), t.isCopyTrading ? e("div", {
                    staticStyle: {
                        position: "relative"
                    }
                }, [t._m(1), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.txConfig.gasLimitETH,
                        expression: "txConfig.gasLimitETH"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        width: "80px",
                        "padding-left": "5px"
                    },
                    attrs: {
                        type: "text",
                        placeholder: "0"
                    },
                    domProps: {
                        value: t.txConfig.gasLimitETH
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.txConfig, "gasLimitETH", e.target.value)
                        }
                    }
                })]) : e("div", {
                    staticStyle: {
                        position: "relative"
                    }
                }, [t._m(0), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.txConfig.gasGWei,
                        expression: "txConfig.gasGWei"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        width: "80px",
                        "padding-left": "5px"
                    },
                    attrs: {
                        type: "text",
                        placeholder: "0"
                    },
                    domProps: {
                        value: t.txConfig.gasGWei
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.txConfig, "gasGWei", e.target.value)
                        }
                    }
                })]), e("div", {
                    staticStyle: {
                        "margin-left": "20px"
                    }
                }, [e("div", {
                    staticClass: "d-flex align-items-center dm"
                }, [!t.isCopyTrading && t.dexList.length > 0 ? e("vs-select", {
                    attrs: {
                        placeholder: ""
                    },
                    model: {
                        value: t.txConfig.factory,
                        callback: function(e) {
                            t.$set(t.txConfig, "factory", e)
                        },
                        expression: "txConfig.factory"
                    }
                }, t._l(t.dexList, (function(a, n) {
                    return e("vs-option", {
                        key: "dex-" + n,
                        attrs: {
                            label: a.title,
                            value: n
                        }
                    }, [t._v(" " + t._s(a.title) + " ")])
                })), 1) : t.isCopyTrading && t.copyDexList.length > 0 ? e("vs-select", {
                    attrs: {
                        placeholder: "",
                        filter: "",
                        multiple: "",
                        "collapse-chips": ""
                    },
                    model: {
                        value: t.txConfig.copyRouters,
                        callback: function(e) {
                            t.$set(t.txConfig, "copyRouters", e)
                        },
                        expression: "txConfig.copyRouters"
                    }
                }, t._l(t.copyDexList, (function(a, n) {
                    return e("vs-option", {
                        key: "dex-" + n,
                        attrs: {
                            label: a.title,
                            value: n
                        }
                    }, [t._v(" " + t._s(a.title) + " ")])
                })), 1) : t._e()], 1)]), e("div", {
                    staticStyle: {
                        "margin-left": "20px"
                    }
                }, [e("div", {
                    staticClass: "d-flex align-items-center dm"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.isCheckTx,
                        expression: "isCheckTx"
                    }],
                    staticClass: "form-check-input",
                    attrs: {
                        id: "check_transaction",
                        type: "checkbox",
                        value: "",
                        "aria-label": "..."
                    },
                    domProps: {
                        checked: Array.isArray(t.isCheckTx) ? t._i(t.isCheckTx, "") > -1 : t.isCheckTx
                    },
                    on: {
                        change: function(e) {
                            var a = t.isCheckTx,
                                n = e.target,
                                s = !!n.checked;
                            if (Array.isArray(a)) {
                                var i = "",
                                    o = t._i(a, i);
                                n.checked ? o < 0 && (t.isCheckTx = a.concat([i])) : o > -1 && (t.isCheckTx = a.slice(0, o).concat(a.slice(o + 1)))
                            } else t.isCheckTx = s
                        }
                    }
                }), e("label", {
                    staticClass: "me-2 m-0 ps-3",
                    attrs: {
                        for: "check_transaction"
                    }
                }, [t._v("Precheck Tx")]), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6071559)"
                    }
                })])])]), t.isCopyTrading ? t._e() : e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center mb-4 mt-2",
                    attrs: {
                        id: "main-account-action-card"
                    }
                }, [t.isBuying ? e("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "img/spinner.svg"
                    }
                }) : e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: function(e) {
                            return t.handleBuy()
                        }
                    }
                }, [t._v("Buy")]), t.isSelling ? e("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "img/spinner.svg"
                    }
                }) : e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: function(e) {
                            return t.handleSell()
                        }
                    }
                }, [t._v("Sell")]), t.isSellTesting ? e("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "img/spinner.svg"
                    }
                }) : e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: function(e) {
                            return t.handleSellTest()
                        }
                    }
                }, [t._v("Sell Test")]), t.isCancelling ? e("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "img/spinner.svg"
                    }
                }) : e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: function(e) {
                            return t.handleCancel()
                        }
                    }
                }, [t._v("Cancel")])]), e("div", {
                    staticClass: "d-flex justify-content-around align-items-center",
                    staticStyle: {
                        "border-top": "2px solid #00000033",
                        "padding-top": "25px",
                        "padding-bottom": "20px"
                    }
                }, [t.showOriginalRouter ? e("div", {
                    staticClass: "d-flex align-items-center dm"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.txConfig.isOriginalRouter,
                        expression: "txConfig.isOriginalRouter"
                    }],
                    staticClass: "form-check-input",
                    attrs: {
                        id: "original_router",
                        type: "checkbox",
                        value: "",
                        "aria-label": "..."
                    },
                    domProps: {
                        checked: Array.isArray(t.txConfig.isOriginalRouter) ? t._i(t.txConfig.isOriginalRouter, "") > -1 : t.txConfig.isOriginalRouter
                    },
                    on: {
                        change: function(e) {
                            var a = t.txConfig.isOriginalRouter,
                                n = e.target,
                                s = !!n.checked;
                            if (Array.isArray(a)) {
                                var i = "",
                                    o = t._i(a, i);
                                n.checked ? o < 0 && t.$set(t.txConfig, "isOriginalRouter", a.concat([i])) : o > -1 && t.$set(t.txConfig, "isOriginalRouter", a.slice(0, o).concat(a.slice(o + 1)))
                            } else t.$set(t.txConfig, "isOriginalRouter", s)
                        }
                    }
                }), e("label", {
                    staticClass: "me-2 m-0 ps-3",
                    attrs: {
                        for: "original_router"
                    }
                }, [t._v("Original Router")]), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6071560)"
                    }
                })]) : t._e(), t.txConfig.isOriginalRouter ? e("div", {
                    staticStyle: {
                        position: "relative"
                    }
                }, [t._m(2), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.txConfig.slippage,
                        expression: "txConfig.slippage"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        width: "80px",
                        "padding-left": "5px"
                    },
                    attrs: {
                        type: "text",
                        placeholder: "0"
                    },
                    domProps: {
                        value: t.txConfig.slippage
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.txConfig, "slippage", e.target.value)
                        }
                    }
                })]) : t._e(), e("div", [e("b", [t._v(t._s(t.getNetwork().currency) + " Price")]), t._v(": " + t._s(t.ethPrice))]), e("div", [e("b", [t._v("GWei")]), t._v(": " + t._s(t.gwei))])])]), e("div", {
                    staticClass: "card"
                }, [e("div", {
                    staticClass: "card-body p-0 py-4",
                    attrs: {
                        id: "sub-account-table-card"
                    }
                }, [e("div", {
                    staticClass: "d-flex justify-content-between px-4 pb-3"
                }, [t._m(3), e("div", {
                    staticClass: "d-flex"
                }, [t.getLevel().canUseAccount() ? [t.isCreatingSub ? e("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "img/spinner.svg"
                    }
                }) : e("a", {
                    staticClass: "zoom",
                    attrs: {
                        "data-mdb-toggle": "modal",
                        "data-mdb-target": "#staticBackdrop1"
                    },
                    on: {
                        click: t.handleCreate
                    }
                }, [e("img", {
                    attrs: {
                        src: "img/plus.svg"
                    }
                })])] : t._e()], 2)]), t.isSpenderSet && t.accounts.length > 0 ? e("div", {
                    staticClass: "table-responsive"
                }, [e("table", {
                    staticClass: "table m-0",
                    attrs: {
                        id: "table2"
                    }
                }, [t._m(4), e("tbody", t._l(t.accounts, (function(a) {
                    return e("tr", {
                        key: a.get("address")
                    }, [e("td", {
                        staticClass: "text-center",
                        staticStyle: {
                            "padding-left": "20px",
                            "padding-right": "0"
                        }
                    }, [t.getLevel().canUseAccount() ? e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.activeAccounts[a.get("address")],
                            expression: "activeAccounts[account.get('address')]"
                        }],
                        staticClass: "form-check-input",
                        attrs: {
                            type: "checkbox",
                            "aria-label": "..."
                        },
                        domProps: {
                            checked: Array.isArray(t.activeAccounts[a.get("address")]) ? t._i(t.activeAccounts[a.get("address")], null) > -1 : t.activeAccounts[a.get("address")]
                        },
                        on: {
                            change: function(e) {
                                var n = t.activeAccounts[a.get("address")],
                                    s = e.target,
                                    i = !!s.checked;
                                if (Array.isArray(n)) {
                                    var o = null,
                                        r = t._i(n, o);
                                    s.checked ? r < 0 && t.$set(t.activeAccounts, a.get("address"), n.concat([o])) : r > -1 && t.$set(t.activeAccounts, a.get("address"), n.slice(0, r).concat(n.slice(r + 1)))
                                } else t.$set(t.activeAccounts, a.get("address"), i)
                            }
                        }
                    }) : t._e()]), e("td", [t._v(t._s(a.get("name") || "NoName"))]), e("td", {
                        staticStyle: {
                            cursor: "pointer"
                        },
                        on: {
                            click: function(e) {
                                t.copyToClipboard(a.get("address"))
                            }
                        }
                    }, [t._v(t._s(t.formatAddress(a.get("address"))) + "...")]), e("td", {
                        staticStyle: {
                            cursor: "pointer"
                        },
                        on: {
                            click: function(e) {
                                t.openLink("https://etherscan.io/address/" + a.get("address"))
                            }
                        }
                    }, [t._v(t._s(t.formatBalance(a.balance)))]), e("td", {
                        staticStyle: {
                            width: "300px!important"
                        }
                    }, [e("div", {
                        staticClass: "edit"
                    }, [t.isApproved[a.get("address")] || t.isCopyTrading ? t._e() : [t.isApproving[a.get("address")] ? e("img", {
                        staticClass: "loading-icon",
                        attrs: {
                            src: "img/spinner.svg"
                        }
                    }) : e("a", {
                        staticClass: "me-2",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            title: "Approve"
                        },
                        on: {
                            click: function(e) {
                                return t.handleApprove(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/Approve.svg"
                        }
                    })])], t.wallet.get("address") != a.get("address") ? [t.isEditing[a.get("address")] ? e("img", {
                        staticClass: "loading-icon",
                        attrs: {
                            src: "img/spinner.svg"
                        }
                    }) : e("a", {
                        staticClass: "me-2",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            title: "Edit"
                        },
                        on: {
                            click: function(e) {
                                return t.handleEdit(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/Edit.svg"
                        }
                    })]), a.balance && parseFloat(a.balance) > 0 ? [t.isWithdrawing[a.get("address")] ? e("img", {
                        staticClass: "loading-icon",
                        attrs: {
                            src: "img/spinner.svg"
                        }
                    }) : e("a", {
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            title: "Withdraw"
                        },
                        on: {
                            click: function(e) {
                                return t.handleWithdraw(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/Withdraw.svg"
                        }
                    })])] : 0 == parseFloat(a.balance) ? e("a", {
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            title: "Delete"
                        },
                        on: {
                            click: function(e) {
                                return t.handleDelete(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/Delete.svg"
                        }
                    })]) : t._e(), e("a", {
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            title: "Get Private Key"
                        },
                        on: {
                            click: function(e) {
                                return t.copyPrivateKey(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/Spender.svg"
                        }
                    })])] : t._e()], 2)])])
                })), 0)]), e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center mt-4"
                }, [e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: t.handleImport
                    }
                }, [t._v("Import")]), e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: t.handleExport
                    }
                }, [t._v("Export")]), e("div", [t._v("Total: " + t._s(t.getTotalBalance)), e("b")])])]) : e("div", {
                    staticClass: "px-4"
                }, [t.getLevel().canUseAccount() ? [t._v(" Please create an account to trade automatically ")] : [t._v(" Please upgrade your subscription to use accounts ")]], 2)])]), e("deposit-modal", {
                    attrs: {
                        balance: t.depositModalBalance,
                        content: t.depositModalContent,
                        caption: t.depositModalCaption,
                        hasTo: t.depositModalHasTo,
                        active: t.depositModalActive,
                        callback: t.depositModalCallback
                    },
                    on: {
                        close: function(e) {
                            t.depositModalActive = !1
                        }
                    }
                }), e("confirm-modal", {
                    attrs: {
                        title: t.confirmTitle,
                        content: t.confirmContent,
                        icon: t.confirmIcon,
                        active: t.confirmActive,
                        callback: t.confirmCallback
                    },
                    on: {
                        cancel: function(e) {
                            t.confirmActive = !1
                        }
                    }
                }), e("input-modal", {
                    attrs: {
                        title: t.inputModalTitle,
                        active: t.inputModalActive,
                        btnOk: t.inputModalBtnOk,
                        btnCancel: t.inputModalBtnCancel,
                        callback: t.inputModalCallback,
                        fields: t.inputModalFields
                    },
                    on: {
                        cancel: function(e) {
                            t.inputModalActive = !1
                        }
                    }
                }), e("alert-modal", {
                    attrs: {
                        title: t.alertModalTitle,
                        icon: t.alertModalIcon,
                        active: t.alertModalActive,
                        content: t.alertModalContent,
                        btnOk: t.alertModalBtnOk,
                        callback: t.alertModalCallback
                    },
                    on: {
                        ok: function(e) {
                            t.alertModalActive = !1
                        }
                    }
                })], 1)
            },
            Xt = [function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "pointer custom-label form-label",
                    staticStyle: {
                        position: "absolute",
                        top: "-20px"
                    }
                }, [t._v("GWei"), e("img", {
                    staticClass: "ms-lg-2",
                    attrs: {
                        onclick: "Intercom('showArticle', 6021055)",
                        src: "img/info-card.svg"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "pointer custom-label form-label",
                    staticStyle: {
                        position: "absolute",
                        top: "-20px"
                    }
                }, [t._v("Gas Limit"), e("img", {
                    staticClass: "ms-lg-2",
                    attrs: {
                        onclick: "Intercom('showArticle', 6208153)",
                        src: "img/info-card.svg"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "pointer custom-label form-label",
                    staticStyle: {
                        position: "absolute",
                        top: "-20px"
                    }
                }, [t._v("Slippage"), e("img", {
                    staticClass: "ms-lg-2",
                    attrs: {
                        onclick: "Intercom('showArticle', 6082813)",
                        src: "img/info-card.svg"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "d-flex"
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Accounts")]), e("img", {
                    staticClass: "action-icon bounce",
                    staticStyle: {
                        width: "25px",
                        height: "25px",
                        "margin-left": "15px",
                        cursor: "pointer"
                    },
                    attrs: {
                        onclick: "Intercom('showArticle', 6170036)",
                        src: "img/question.svg"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("thead", [e("tr", [e("th", {
                    staticStyle: {
                        padding: "0px"
                    },
                    attrs: {
                        width: "70"
                    }
                }), e("th", [t._v("Name")]), e("th", [t._v("Address")]), e("th", [t._v("Balance")]), e("th", {
                    staticStyle: {
                        width: "300px!important"
                    }
                }, [t._v("Function")])])])
            }],
            Zt = a("bc3a"),
            te = a.n(Zt);
        class ee {
            constructor() {}
            getAbi(t) {
                for (let e of qt.getDexList())
                    if (e.address.toLowerCase() == t.toLowerCase() && e.abi) return e.abi;
                return null
            }
        }
        const ae = new ee;
        var ne = ae;
        class se {
            constructor() {
                this.abis = {}, this.isLoading = {}, this.details = {}
            }
            async getAbiFromSelector(t) {
                return this.isLoading[t] ? null : (this.isLoading[t] = !0, te.a.get("https://www.4byte.directory/api/v1/signatures/?hex_signature=" + t, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(async e => {
                    const a = e.data.results;
                    if (a.length > 0) {
                        const e = a[0],
                            n = e.text_signature,
                            s = n.split("(")[0],
                            i = n.split("(")[1].split(")")[0].split(","),
                            o = {
                                inputs: [],
                                name: s,
                                type: "function"
                            };
                        return i.map(t => {
                            "" != t && o.inputs.push({
                                name: t,
                                type: t
                            })
                        }), this.abis[t] = o, o
                    }
                    return null
                }))
            }
            getFunctionSelector(t) {
                const e = t.inputs.map(t => t.type).join(","),
                    a = `${t.name}(${e})`,
                    n = new c.a;
                return n.eth.abi.encodeFunctionSignature(a)
            }
            parseFunctionArgs(t, e) {
                const a = new c.a,
                    n = e.substring(10),
                    s = t.inputs.map(t => t.type),
                    i = t.inputs.map(t => t.name),
                    o = a.eth.abi.decodeParameters(s, n),
                    r = {};
                for (let l = 0; l < s.length; l++) r[i[l]] = o[l];
                return r
            }
            isWarn(t, e, a, n) {
                if (a && a.method && -1 != a.method.indexOf("removeLiquidity")) return !0;
                if (a && a.selector && n && n.includes(a.selector)) return !0;
                const s = t.get("data").transaction,
                    i = s.input.toLowerCase();
                for (let o of e)
                    if (-1 != i.indexOf(o.get("address").substring(2).toLowerCase()) && s.from.toLowerCase() != o.get("address").toLowerCase()) return !0;
                return !1
            }
            getDetails(t, e, a) {
                const n = e.get("data"),
                    s = n.transaction,
                    i = s.hash,
                    o = "" + i;
                let r;
                r = t ? qt.getAbi(t.get("address")) : ne.getAbi(s.to);
                let l = {
                    hash: i,
                    status: s.status,
                    value: (parseInt(s.value) / 10 ** 18).toFixed(3)
                };
                const c = s.input.substring(0, 10);
                if (n.contractCall) this.details[o] = { ...l,
                    method: n.contractCall.methodName,
                    selector: c,
                    params: n.contractCall.params
                };
                else {
                    let t, e;
                    if (!a) {
                        let a = !1;
                        if (r && Array.isArray(r))
                            for (let n of r)
                                if ("function" == n.type) {
                                    const i = this.getFunctionSelector(n);
                                    if (c == i) {
                                        t = n.name, e = this.parseFunctionArgs(n, s.input), a = !0;
                                        break
                                    }
                                }
                        a || (this.abis[c] ? (t = this.abis[c].name, e = this.parseFunctionArgs(this.abis[c], s.input)) : this.getAbiFromSelector(c))
                    }
                    this.details[o] = { ...l,
                        input: s.input,
                        method: t,
                        selector: c,
                        params: e
                    }
                }
                return this.details[o]
            }
            parseTransaction(t) {
                let e = t.input;
                "0x5ae401dc" == e.substring(0, 10) && (e = "0x" + e.substr(330) + "00000000"), console.log(e);
                const a = new c.a;
                for (let n of x.TradingABI)
                    if (e.substring(0, 10) == n.selector) {
                        const t = a.eth.abi.decodeParameters(n.inputs, "0x" + e.substr(10));
                        return {
                            params: t,
                            abi: n
                        }
                    }
                return null
            }
        }
        var ie = new se;

        function oe() {
            return "Cn-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xyn]/g, (function(t) {
                if ("n" == t) return 9 * Math.random() | 0;
                var e = 16 * Math.random() | 1,
                    a = "x" == t ? e : 3 & e | 8;
                return a.toString(16)
            }))
        }
        class re {
            constructor() {
                this.webSocket = null, this.socketClosed = !0, this.firstMessageArrived = !1, this.callback = null
            }
            setCallback(t) {
                this.callback = t
            }
            init(t, e) {
                this.close(), this.firstMessageArrived = !1, this.webSocket = new WebSocket("wss://api.blocknative.com/v0"), this.socketClosed = !1, this.webSocket.onmessage = a => {
                    if (!this.firstMessageArrived) {
                        this.firstMessageArrived = !0;
                        let a = {
                            appName: "Onboard",
                            appVersion: "1.34.1",
                            blockchain: {
                                system: "ethereum",
                                network: qt.getNetwork().network
                            },
                            categoryCode: "configs",
                            config: {
                                watchAddress: !0,
                                ...t
                            },
                            dappId: _.SOCKET_DAPP_ID,
                            eventCode: "put",
                            timeStamp: (new Date).toISOString(),
                            version: "3.5.0"
                        };
                        return e && (a["config"]["abi"] = e), void setTimeout(() => {
                            this.webSocket.send(JSON.stringify(a))
                        }, 1e3)
                    }
                    let n = JSON.parse(a.data);
                    n.event && n.event.transaction && (n = n.event, "pending" != n.transaction.status && "confirmed" != n.transaction.status && "failed" != n.transaction.status || this.callback(n))
                }, this.webSocket.onclose = () => {
                    console.log("The connection has been closed and reconnecting"), this.socketClosed = !0, this.init()
                }, this.webSocket.onerror = () => {
                    console.log("The connection faced an error and reconnecting"), this.init()
                }, this.webSocket.onopen = () => {
                    this.webSocket.send(JSON.stringify({
                        appName: "Onboard",
                        appVersion: "3.5.0",
                        blockchain: {
                            system: "ethereum",
                            network: qt.getNetwork().network
                        },
                        categoryCode: "initialize",
                        connectionId: oe(),
                        dappId: _.SOCKET_DAPP_ID,
                        eventCode: "checkDappId",
                        timeStamp: (new Date).toISOString(),
                        version: "3.5.0"
                    }))
                }
            }
            close() {
                return !!this.webSocket && (this.webSocket.onclose = () => {}, this.webSocket.close(), this.webSocket = null, !0)
            }
        }
        class le {
            constructor() {
                this.contract = null, this.owner = null, this.abi = null, this.isListening = !1, this.sockets = []
            }
            stop() {
                if (this.sockets.length > 0) {
                    for (let t of this.sockets) t.close();
                    this.sockets = []
                }
                this.isListening = !1
            }
            async listenTargets(t, e) {
                this.stop(), this.isListening = !0, this.sockets = t.map(t => {
                    const a = new re,
                        n = {
                            scope: t,
                            filters: [{
                                _join: "OR",
                                terms: e.map(t => ({
                                    to: t
                                }))
                            }]
                        };
                    return a.setCallback(async t => {
                        const e = B.getClass("History"),
                            a = new e;
                        a.set("data", t), a.set("owner", t.transaction.from), a.set("status", t.transaction.status), a.set("hash", t.transaction.hash), a.set("contract", this.contract), I.$emit(W, a)
                    }), a.init(n), a
                })
            }
            async listen(t, e) {
                this.stop(), this.sockets = [new re], this.isListening = !0, this.contract = t, this.owner = e;
                const a = {
                    scope: this.owner,
                    filters: [{
                        _join: "OR",
                        terms: [{
                            from: this.owner
                        }, {
                            to: this.contract
                        }]
                    }],
                    watchAddress: !0
                };
                this.sockets[0].setCallback(async t => {
                    const e = B.getClass("History"),
                        a = new e;
                    a.set("data", t), a.set("owner", this.owner), a.set("status", t.transaction.status), a.set("hash", t.transaction.hash), a.set("contract", this.contract), I.$emit(W, a)
                }), this.sockets[0].init(a)
            }
        }
        var ce = new le,
            de = function() {
                var t = this,
                    e = t._self._c;
                return e("Modal", {
                    attrs: {
                        active: t.active
                    },
                    on: {
                        close: t.handleClose
                    }
                }, [e("div", {
                    attrs: {
                        id: "staticBackdrop1",
                        "data-mdb-backdrop": "static",
                        "data-mdb-keyboard": "false",
                        tabindex: "-1",
                        "aria-labelledby": "staticBackdropLabel",
                        "aria-hidden": "true"
                    }
                }, [e("div", {
                    staticClass: "modal-body py-5 px-4"
                }, [e("div", {
                    staticClass: "text-center"
                }, [e("p", {
                    staticClass: "m-0 roundp"
                }, [t._v("Your Current Balance")]), e("h3", {
                    staticClass: "mt-1 fs20 fs34"
                }, [e("b", [t._v(t._s(t.formatBalance(t.balance)))])]), e("p", {
                    staticClass: "mt-4 roundp",
                    domProps: {
                        innerHTML: t._s(t.content)
                    }
                })]), e("div", {
                    staticClass: "form mb-3"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.amount,
                        expression: "amount"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "Amount"
                    },
                    domProps: {
                        value: t.amount
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.amount = e.target.value)
                        }
                    }
                })]), e("div", {
                    staticClass: "form mb-3"
                }, [t.hasTo ? e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.to,
                        expression: "to"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "To"
                    },
                    domProps: {
                        value: t.to
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.to = e.target.value)
                        }
                    }
                }) : t._e()]), e("div", {
                    staticClass: "d-flex justify-content-center flex-wrap align-content-center mt-4"
                }, [e("div", {
                    staticClass: "col-xl-7 col-6 d-flex text-center"
                }, [e("a", {
                    staticClass: "btn btn-black d-block w-100 ms-2 btn-lg",
                    on: {
                        click: t.handleDeposit
                    }
                }, [t._v(t._s(t.caption))])])])])])])
            },
            ue = [],
            pe = function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("transition", {
                    attrs: {
                        name: "fade",
                        appear: ""
                    }
                }, [t.active ? e("div", {
                    staticClass: "mymodal-overlay",
                    on: {
                        click: t.close
                    }
                }) : t._e()]), e("transition", {
                    attrs: {
                        name: "pop",
                        appear: ""
                    }
                }, [t.active ? e("div", {
                    staticClass: "mymodal",
                    attrs: {
                        role: "dialog"
                    }
                }, [e("div", {
                    staticStyle: {
                        position: "relative"
                    }
                }, [e("div", {
                    staticClass: "close-btn",
                    on: {
                        click: t.close
                    }
                }, [e("font-awesome-icon", {
                    attrs: {
                        color: "black",
                        icon: "times"
                    }
                })], 1), t._t("default")], 2)]) : t._e()])], 1)
            },
            me = [],
            ye = {
                name: "Modal",
                props: ["active"],
                components: {},
                methods: {
                    close() {
                        this.$emit("close")
                    }
                }
            },
            ge = ye,
            he = (a("97e6"), Object(Qt["a"])(ge, pe, me, !1, null, "432c9d87", null)),
            fe = he.exports,
            be = {
                name: "InformationList",
                props: ["balance", "content", "caption", "hasTo", "active", "callback"],
                components: {
                    Modal: fe
                },
                computed: { ...Object(E["c"])({})
                },
                watch: {},
                beforeDestroy() {},
                async mounted() {},
                methods: {
                    formatBalance(t, e) {
                        return j.formatBalance(t, e)
                    },
                    handleDeposit() {
                        this.callback ? this.callback(this.amount, this.to) : this.$emit("deposit", this.amount, this.to)
                    },
                    handleClose() {
                        this.$emit("close")
                    }
                },
                data() {
                    return {
                        isDeposit: !1,
                        amount: 0,
                        to: ""
                    }
                }
            },
            ve = be,
            we = Object(Qt["a"])(ve, de, ue, !1, null, "6fc6e7e8", null),
            Te = we.exports,
            Ce = function() {
                var t = this,
                    e = t._self._c;
                return e("Modal", {
                    attrs: {
                        active: t.active
                    },
                    on: {
                        close: t.handleCancel
                    }
                }, [e("div", {
                    attrs: {
                        id: "staticBackdrop4",
                        "data-mdb-backdrop": "static",
                        "data-mdb-keyboard": "false",
                        tabindex: "-1",
                        "aria-labelledby": "staticBackdropLabel",
                        "aria-hidden": "true"
                    }
                }, [e("div", {
                    staticClass: "modal-dialog-centered model-width1"
                }, [e("div", {}, [e("div", {
                    staticClass: "modal-body py-5 px-4"
                }, [e("div", {
                    staticClass: "text-center"
                }, [e("img", {
                    attrs: {
                        src: `img/${t.icon}.svg`
                    }
                }), e("h3", {
                    staticClass: "mt-4 mb- fs20"
                }, [e("b", [t._v(t._s(t.title))])]), e("p", [t._v(t._s(t.content))])]), e("div", {
                    staticClass: "d-flex justify-content-between flex-wrap align-content-center mt-4"
                }, [e("div", {
                    staticClass: "col-xl-6 col-6 text-center"
                }, [e("a", {
                    staticClass: "btn btn-outline-black outline-gray d-block me-2",
                    attrs: {
                        "data-mdb-dismiss": "modal"
                    },
                    on: {
                        click: t.handleCancel
                    }
                }, [t._v(t._s(t.btnCancel))])]), e("div", {
                    staticClass: "col-xl-6 col-6 d-flex text-center"
                }, [e("a", {
                    staticClass: "btn btn-black d-block w-100 ms-2",
                    on: {
                        click: t.handleOk
                    }
                }, [t._v(t._s(t.btnOk))])])])])])])])])
            },
            ke = [],
            xe = {
                name: "ConfirmModal",
                props: {
                    callback: {},
                    active: {
                        type: Boolean
                    },
                    icon: {
                        type: String,
                        default: "info"
                    },
                    title: {
                        type: String
                    },
                    content: {
                        type: String
                    },
                    btnCancel: {
                        type: String,
                        default: "No"
                    },
                    btnOk: {
                        type: String,
                        default: "Yes"
                    }
                },
                components: {
                    Modal: fe
                },
                computed: { ...Object(E["c"])({})
                },
                watch: {},
                beforeDestroy() {},
                async mounted() {},
                methods: {
                    handleCancel() {
                        this.$emit("cancel")
                    },
                    handleOk() {
                        this.callback ? this.callback() : this.$emit("ok")
                    }
                },
                data() {
                    return {}
                }
            },
            _e = xe,
            Me = Object(Qt["a"])(_e, Ce, ke, !1, null, "03d5670c", null),
            Ae = Me.exports,
            Se = function() {
                var t = this,
                    e = t._self._c;
                return e("Modal", {
                    attrs: {
                        active: t.active
                    },
                    on: {
                        close: t.handleCancel
                    }
                }, [e("div", {
                    attrs: {
                        id: "staticBackdrop4",
                        "data-mdb-backdrop": "static",
                        "data-mdb-keyboard": "false",
                        tabindex: "-1",
                        "aria-labelledby": "staticBackdropLabel",
                        "aria-hidden": "true"
                    }
                }, [e("div", {
                    staticClass: "modal-dialog-centered model-width1"
                }, [e("div", {}, [e("h2", {
                    staticClass: "text-center d-block textb border-bottom mt-4"
                }, [t._v(t._s(t.title))]), e("div", {
                    staticClass: "modal-body pt-0"
                }, [t._l(t.fields, (function(a) {
                    return e("div", {
                        key: a.name,
                        staticClass: "form mb-3 text-left"
                    }, [e("label", {
                        staticClass: "mb-2"
                    }, [t._v(t._s(a.label))]), "textarea" == a.type ? e("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: a.model,
                            expression: "field.model"
                        }],
                        staticClass: "form-control",
                        domProps: {
                            value: a.model
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(a, "model", e.target.value)
                            }
                        }
                    }) : e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: a.model,
                            expression: "field.model"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            type: "text",
                            placeholder: a.placeholder || ""
                        },
                        domProps: {
                            value: a.model
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(a, "model", e.target.value)
                            }
                        }
                    })])
                })), e("div", {
                    staticClass: "d-flex justify-content-between flex-wrap align-content-center mt-2"
                }, [e("div", {
                    staticClass: "col-xl-6 col-6 text-center"
                }, [e("a", {
                    staticClass: "btn btn-outline-black d-block me-2",
                    attrs: {
                        "data-mdb-dismiss": "modal"
                    },
                    on: {
                        click: t.handleCancel
                    }
                }, [t._v(t._s(t.btnCancel))])]), e("div", {
                    staticClass: "col-xl-6 col-6 d-flex text-center"
                }, [e("a", {
                    staticClass: "btn btn-black d-block w-100 ms-2",
                    on: {
                        click: t.handleOk
                    }
                }, [t._v(t._s(t.btnOk))])])])], 2)])])])])
            },
            Be = [],
            Oe = {
                name: "InputModal",
                props: {
                    callback: {},
                    active: {
                        type: Boolean
                    },
                    fields: {
                        type: Array
                    },
                    title: {
                        type: String
                    },
                    btnCancel: {
                        type: String,
                        default: "No"
                    },
                    btnOk: {
                        type: String,
                        default: "Yes"
                    }
                },
                components: {
                    Modal: fe
                },
                computed: { ...Object(E["c"])({})
                },
                watch: {},
                beforeDestroy() {},
                async mounted() {},
                methods: {
                    handleCancel() {
                        this.$emit("cancel")
                    },
                    handleOk() {
                        this.callback ? this.callback() : this.$emit("ok")
                    }
                },
                data() {
                    return {}
                }
            },
            Ie = Oe,
            Ee = Object(Qt["a"])(Ie, Se, Be, !1, null, "db75cf3e", null),
            Le = Ee.exports,
            Pe = function() {
                var t = this,
                    e = t._self._c;
                return e("Modal", {
                    attrs: {
                        active: t.active
                    },
                    on: {
                        close: t.handleOk
                    }
                }, [e("div", {
                    attrs: {
                        id: "staticBackdrop4",
                        "data-mdb-backdrop": "static",
                        "data-mdb-keyboard": "false",
                        tabindex: "-1",
                        "aria-labelledby": "staticBackdropLabel",
                        "aria-hidden": "true"
                    }
                }, [e("div", {
                    staticClass: "modal-dialog-centered model-width1"
                }, [e("div", {}, [e("div", {
                    staticClass: "modal-body py-5 px-4"
                }, [e("div", {
                    staticClass: "text-center"
                }, [e("img", {
                    attrs: {
                        src: `img/${t.icon}.svg`
                    }
                }), e("h3", {
                    staticClass: "mt-4 mb- fs20"
                }, [e("b", [t._v(t._s(t.title))])]), e("p", [t._v(t._s(t.content))])]), e("div", {
                    staticClass: "d-flex justify-content-center flex-wrap align-content-center mt-4"
                }, [e("div", {
                    staticClass: "col-xl-6 col-6 d-flex text-center"
                }, [e("a", {
                    staticClass: "btn btn-black d-block w-100 ms-2",
                    on: {
                        click: t.handleOk
                    }
                }, [t._v(t._s(t.btnOk))])])])])])])])])
            },
            De = [],
            Ne = {
                name: "AlertModal",
                props: {
                    callback: {},
                    icon: {
                        type: String,
                        default: "success"
                    },
                    active: {
                        type: Boolean
                    },
                    title: {
                        type: String
                    },
                    content: {
                        type: String
                    },
                    btnOk: {
                        type: String,
                        default: "Yes"
                    }
                },
                components: {
                    Modal: fe
                },
                computed: { ...Object(E["c"])({})
                },
                watch: {},
                beforeDestroy() {},
                async mounted() {},
                methods: {
                    handleOk() {
                        this.callback ? this.callback() : this.$emit("ok")
                    }
                },
                data() {
                    return {}
                }
            },
            je = Ne,
            Fe = Object(Qt["a"])(je, Pe, De, !1, null, "39b5235b", null),
            Re = Fe.exports;
        class $e {
            constructor() {
                this.boughtTokens = [], this.buyProcessed = [], this.soldTokens = [], this.sellProcessed = [], this.processed = []
            }
            setProcessed(t, e) {
                this.processed.push(t.toLowerCase() + "-" + e.toLowerCase())
            }
            hasProcessed(t, e) {
                return this.processed.includes(t.toLowerCase() + "-" + e.toLowerCase())
            }
            setBought(t) {
                this.boughtTokens.push(t.toLowerCase())
            }
            hasBought(t) {
                return this.boughtTokens.includes(t.toLowerCase())
            }
            setSold(t) {
                this.soldTokens.push(t.toLowerCase())
            }
            hasSold(t) {
                return this.soldTokens.includes(t.toLowerCase())
            }
            setBuyProcessed(t) {
                this.buyProcessed.push(t.toLowerCase())
            }
            hasBuyProcessed(t) {
                return this.buyProcessed.includes(t.toLowerCase())
            }
            setSellProcessed(t) {
                this.sellProcessed.push(t.toLowerCase())
            }
            hasSellProcessed(t) {
                return this.sellProcessed.includes(t.toLowerCase())
            }
            pad(t, e) {
                t = BigInt(t).toString(16);
                while (t.length < e) t = "0" + t;
                return t
            }
            fill(t, e) {
                while (t.length < e) t += "0";
                return t
            }
            getInput({
                input: t,
                selector: e,
                args: a,
                abi: n,
                index: s
            }) {
                const i = new c.a,
                    o = [];
                let r = 0;
                for (let c = 0; c <= 5; c++)
                    for (let t in s)
                        if (s[t] === c && "isExact" != t) {
                            0 == c ? r = a[t] : o.push(a[t]);
                            break
                        }
                const l = i.eth.abi.encodeParameters(n, o);
                let d = e + l.substr(2);
                if (-1 == s.deadline) {
                    let n = t.substr(0, 10) + this.pad(a["deadline"], 64) + t.substring(74, t.indexOf(e.substr(2)));
                    n += d.substr(2, t.length - n.length), d = n, d = this.fill(d, t.length)
                }
                return {
                    value: r,
                    input: d
                }
            }
        }
        const We = new $e;
        var He = We,
            Ge = {
                name: "AccountList",
                components: {
                    DepositModal: Te,
                    ConfirmModal: Ae,
                    InputModal: Le,
                    AlertModal: Re
                },
                computed: { ...Object(E["c"])({
                        wallet: "account",
                        accounts: "accounts/list",
                        contract: "contracts/active",
                        txConfig: "transactions/config",
                        targets: "targets/list"
                    }),
                    isCopyTrading() {
                        return "CopyTrading" == this.$route.name
                    },
                    getTotalBalance() {
                        let t = 0;
                        return this.accounts.map(e => {
                            t += e.balance ? parseFloat(e.balance) : 0
                        }), this.formatBalance(t)
                    }
                },
                watch: {
                    isCopyTrading() {
                        1 == this.isCopyTrading ? this.showOriginalRouter = !1 : this.showOriginalRouter = !0
                    },
                    "txConfig.factory": {
                        deep: !0,
                        immediate: !0,
                        handler: function() {
                            const t = qt.getDexList()[this.txConfig.factory];
                            t.isDirect ? (n["default"].set(this.txConfig, "isOriginalRouter", !0), this.showOriginalRouter = !1) : (n["default"].set(this.txConfig, "isOriginalRouter", !1), this.showOriginalRouter = !0)
                        }
                    },
                    "txConfig.isOriginalRouter" () {
                        this.setApproveStatus()
                    },
                    async accounts() {
                        this.accounts && (this.isApproved = {}, this.accounts.map(t => {
                            this.activeAccounts[t.get("address")] = !1, n["default"].set(this.isApproved, t.get("address"), !0)
                        }), this.setApproveStatus())
                    },
                    async contract() {
                        this.isApproved = {}, this.accounts.map(t => {
                            n["default"].set(this.isApproved, t.get("address"), !0)
                        }), this.contract && this.setApproveStatus()
                    }
                },
                beforeDestroy() {
                    clearInterval(this.timer), clearInterval(this.gWeiTimer), I.$off(W), I.$off("buy"), I.$off("sell")
                },
                async mounted() {
                    I.$on(W, t => {
                        this.preCheck(t)
                    }), I.$on("buy", ({
                        history: t,
                        type: e
                    }) => {
                        this.handleBuy(t, e)
                    }), I.$on("sell", ({
                        history: t,
                        type: e,
                        accounts: a
                    }) => {
                        this.handleSell(t, e, a)
                    }), this.isCopyTrading && (this.showOriginalRouter = !1), this.updateDexList(), this.updateGwei(), clearInterval(this.gWeiTimer), this.gWeiTimer = setInterval(this.updateGwei, 5e3), await this.updateEscrowBalance(), He.getActiveAccounts = this.getActiveAccounts, n["default"].set(this.txConfig, "isOriginalRouter", !0)
                },
                methods: { ...Object(E["b"])({
                        fetch: "accounts/fetch",
                        create: "accounts/create",
                        edit: "accounts/edit",
                        delete: "accounts/delete",
                        deposit: "accounts/deposit",
                        cancel: "accounts/cancel",
                        approve: "accounts/approve",
                        allowance: "accounts/allowance",
                        test: "accounts/test",
                        buy: "accounts/buy",
                        sell: "accounts/sell",
                        copy: "accounts/copy",
                        sellTest: "accounts/sellTest",
                        escrowDeposit: "accounts/escrowDeposit",
                        withdraw: "accounts/withdraw",
                        getGasPrice: "accounts/getGasPrice",
                        getTxConfig: "transactions/getConfig",
                        getEscrowBalance: "accounts/getEscrowBalance",
                        createUpdateWatch: "watches/createUpdate",
                        fetchContract: "contracts/get"
                    }),
                    openLink(t) {
                        window.open(t)
                    },
                    getLevel() {
                        return qt.getLevel()
                    },
                    copyPrivateKey(t) {
                        this.$toast("Account Private Key copied to clipboard.", {
                            position: "top-right",
                            timeout: 2e3,
                            closeOnClick: !0
                        }), j.copyToClipboard(t.pk)
                    },
                    getNetwork() {
                        return qt.getNetwork()
                    },
                    async updateGwei() {
                        this.escrowBalance = await this.getEscrowBalance();
                        const t = await qt.getGasPrice();
                        this.gwei = parseInt(BigInt(t) / BigInt(10 ** 9));
                        const e = this.getNetwork().currency;
                        await te.a.get(`https://min-api.cryptocompare.com/data/price?fsym=${e}&tsyms=USD`).then(async t => {
                            this.ethPrice = t.data.USD
                        })
                    },
                    async updateEscrowBalance() {
                        this.escrowBalance = await this.getEscrowBalance()
                    },
                    formatAddress(t) {
                        return j.formatAddress(t)
                    },
                    copyToClipboard(t) {
                        this.$toast("Address copied to clipboard", {
                            position: "top-right",
                            timeout: 2e3,
                            closeOnClick: !0
                        }), j.copyToClipboard(t)
                    },
                    setApproveStatus() {
                        clearInterval(this.timer), this.timer = setInterval(async () => {
                            if (!this.accounts || !this.contract) return;
                            clearInterval(this.timer);
                            const t = qt.getDexList()[this.txConfig.factory].router;
                            for (let e of this.accounts) {
                                const a = await this.allowance({
                                    account: e,
                                    contract: this.contract,
                                    isOriginalRouter: this.txConfig.isOriginalRouter,
                                    router: t
                                });
                                BigInt(a) == BigInt(0) ? n["default"].set(this.isApproved, e.get("address"), !1) : n["default"].set(this.isApproved, e.get("address"), !0)
                            }
                        }, 1e3)
                    },
                    formatBalance(t, e) {
                        return t ? j.formatBalance(t, e) : "_"
                    },
                    getActiveAccounts() {
                        if (!this.getLevel().canSnipe()) return [this.wallet];
                        const t = [];
                        return this.accounts.map(e => {
                            this.activeAccounts[e.get("address")] && t.push(e)
                        }), t
                    },
                    handleImport() {
                        const t = document.createElement("input");
                        t.setAttribute("type", "file"), document.body.appendChild(t), t.style.visibility = "hidden", t.click(), t.onchange = () => {
                            const e = t.files[0],
                                a = new FileReader;
                            a.readAsBinaryString(e), a.onloadend = () => {
                                const t = JSON.parse(a.result),
                                    e = localStorage.getItem(`${qt.getNetwork().network}-${qt.address}-accounts`);
                                let n = [];
                                try {
                                    n = JSON.parse(e)
                                } catch (s) {
                                    console.log("account fetch error on import", s)
                                }
                                for (let a of t) 0 == n.filter(t => t.address.toLowerCase() == a.address.toLowerCase()).length && n.push(a);
                                localStorage.setItem(`${qt.getNetwork().network}-${qt.address}-accounts`, JSON.stringify(n)), this.$store.dispatch("accounts/fetch")
                            }
                        }, document.body.removeChild(t)
                    },
                    async handleExportOld() {
                        this.alertModalTitle = "Warning", this.alertModalIcon = "warning", this.alertModalActive = !0, this.alertModalContent = "Previous accounts are encrypted using the siganture of 'turbo_snipping_tools'. Please sign this string to export the private key of old accounts.", this.alertModalBtnOk = "Ok", this.alertModalCallback = async () => {
                            this.alertModalActive = !1;
                            const t = await qt.web3.eth.personal.sign("Turbo_Snipping_Tools", qt.address),
                                e = B.getAccountQuery();
                            e.equalTo("user", qt.address), e.equalTo("network", qt.getNetwork().network), e.limit(30), e.ascending("createdAt");
                            const a = await e.find();
                            let n = [];
                            for (let o of a) try {
                                n.push({
                                    address: o.get("address"),
                                    privateKey: D.decrypt(o.get("privateKey"), t)
                                })
                            } catch (i) {
                                console.log("account error")
                            }
                            const s = {
                                address: "Address".replace(/,/g, ""),
                                privateKey: "PrivateKey"
                            };
                            j.exportCSVFile(s, n, "exploited")
                        }
                    },
                    handleExport() {
                        this.alertModalTitle = "Warning", this.alertModalIcon = "warning", this.alertModalActive = !0, this.alertModalContent = "Please don't share the exported file to anyone. Even it's encrypted exploiters can decrypt your private key by asking you to sign a message through your wallet.", this.alertModalBtnOk = "Ok", this.alertModalCallback = () => {
                            this.alertModalActive = !1, j.exportJSONFile(localStorage.getItem(`${qt.getNetwork().network}-${qt.address}-accounts`), "accounts")
                        }
                    },
                    handleCreate() {
                        this.alertModalTitle = "Warning", this.alertModalIcon = "warning", this.alertModalActive = !0, this.alertModalContent = "After creation of a new account, please try to export the private key of new account and import into your wallet or export the accounts to make a backup. Otherwise, we don't guarantee the lose of fund because of losing the account keys.", this.alertModalBtnOk = "Ok", this.alertModalCallback = () => {
                            this.alertModalActive = !1, this.inputModalActive = !0, this.inputModalBtnOk = "Create", this.inputModalBtnCancel = "Cancel", this.inputModalFields = [{
                                label: "Name",
                                name: "name",
                                model: "Account " + (this.accounts.length + 1)
                            }, {
                                label: "Private Key",
                                name: "privateKey",
                                model: "",
                                placeholder: "Leave it blank for new account"
                            }], this.inputModalTitle = "Create Sub Account", this.inputModalCallback = async () => {
                                let t = this.inputModalFields[1].model;
                                if (t || (t = ""), "" != t) try {
                                    const e = qt.web3.eth.accounts.privateKeyToAccount(t);
                                    if (0 != this.accounts.filter(t => t.get("address").toLowerCase() == e.address.toLowerCase()).length) return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Account is duplicated", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null)
                                } catch (e) {
                                    return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Private key is invalid", this.alertModalBtnOk = "Ok", this.alertModalCallback = null, void console.log("invalid private key")
                                }
                                this.inputModalActive = !1, this.isCreatingSub = !0;
                                try {
                                    await this.create({
                                        name: this.inputModalFields[0].model,
                                        privateKey: t,
                                        isMain: !1
                                    }), this.$toast("Sub account created successfully", {
                                        position: "top-right",
                                        timeout: 2e3,
                                        closeOnClick: !0
                                    })
                                } catch (e) {
                                    this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an issue creating a sub account. Please try again", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                                }
                                this.isCreatingSub = !1
                            }
                        }
                    },
                    handleAddRouter() {
                        this.inputModalActive = !0, this.inputModalBtnOk = "Add", this.inputModalBtnCancel = "Cancel", this.inputModalFields = [{
                            label: "Name",
                            model: "Custom Router"
                        }, {
                            label: "Router Address",
                            model: ""
                        }], this.inputModalTitle = "Add Router", this.inputModalCallback = async () => {
                            this.inputModalActive = !1;
                            const t = this.inputModalFields[1].model,
                                e = qt.getUniswapV2Contract(t),
                                a = await e.methods.factory().call();
                            try {
                                const e = {
                                    title: this.inputModalFields[0].model,
                                    address: a,
                                    router: t
                                };
                                qt.addDextList(e), this.updateDexList()
                            } catch (n) {
                                console.log(n), this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on adding router. Please try again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                            }
                        }
                    },
                    updateDexList() {
                        this.dexList = qt.getDexList().filter(t => !t.isCopyTrading), this.copyDexList = qt.getDexList()
                    },
                    handleDeposit(t) {
                        this.inputModalActive = !0, this.inputModalBtnOk = "Deposit", t && (this.inputModalBtnOk = "Withdraw"), this.inputModalBtnCancel = "Cancel", this.inputModalFields = [], this.accounts.map(t => {
                            t.get("address").toLowerCase() != qt.address.toLowerCase() && this.inputModalFields.push({
                                label: t.get("name") || "NoName",
                                address: t.get("address"),
                                model: "0"
                            })
                        }), this.inputModalTitle = "Deposit", t && (this.inputModalTitle = "Escrow Withdraw"), this.inputModalCallback = async () => {
                            this.inputModalActive = !1;
                            const e = [],
                                a = [];
                            let n = 0;
                            if (this.inputModalFields.map(t => {
                                    const s = parseFloat(t.model);
                                    s && s > 0 && (e.push(t.address), a.push(s), n += s)
                                }), 0 != a.length) {
                                t ? this.isEscrowDepositing = !0 : this.isDepositing = !0;
                                try {
                                    await this.deposit({
                                        recipients: e,
                                        amounts: a,
                                        totalAmount: n,
                                        isEscrow: t
                                    }), this.$toast("Deposited successfully", {
                                        position: "top-right",
                                        timeout: 2e3,
                                        closeOnClick: !0
                                    })
                                } catch (s) {
                                    this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on deposit. Please try again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                                }
                                t ? (this.isEscrowDepositing = !1, await this.updateEscrowBalance()) : this.isDepositing = !1
                            }
                        }
                    },
                    handleWithdraw(t) {
                        this.checkBalance(t, "withdraw") && (this.depositModalActive = !0, this.depositModalContent = "Please input amount to withdraw.", this.depositModalCaption = "Withdraw", this.depositModalHasTo = !0, this.depositModalBalance = t.balance, this.depositModalCallback = async (e, a) => {
                            this.depositModalActive = !1, n["default"].set(this.isWithdrawing, t.get("address"), !0);
                            try {
                                await this.withdraw({
                                    account: t,
                                    amount: parseFloat(e),
                                    to: a
                                }), this.$toast("Withdraw was successfully", {
                                    position: "top-right",
                                    timeout: 2e3,
                                    closeOnClick: !0
                                })
                            } catch (s) {
                                this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on withdraw. Please try again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                            }
                            n["default"].set(this.isWithdrawing, t.get("address"), !1)
                        })
                    },
                    handleEdit(t) {
                        this.inputModalActive = !0, this.inputModalBtnOk = "Save", this.inputModalBtnCancel = "Cancel", this.inputModalFields = [{
                            label: "Name",
                            name: "name",
                            model: t.get("name") || "NoName"
                        }], this.inputModalTitle = "Edit Account", this.inputModalCallback = async () => {
                            this.inputModalActive = !1;
                            const e = {};
                            this.inputModalFields.map(t => {
                                e[t.name] = t.model
                            }), n["default"].set(this.isEditing, t.get("address"), !0);
                            try {
                                await this.edit({
                                    account: t,
                                    fields: e
                                }), this.$toast("Account edit was successfully", {
                                    position: "top-right",
                                    timeout: 2e3,
                                    closeOnClick: !0
                                })
                            } catch (a) {
                                this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on editing. Please try again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                            }
                            n["default"].set(this.isEditing, t.get("address"), !1)
                        }
                    },
                    async handleDelete(t) {
                        this.confirmTitle = "Confirm", this.confirmContent = "Are you sure you want to remove this account?", this.confirmIcon = "delete-warning", this.confirmActive = !0, this.confirmCallback = async () => {
                            try {
                                await this.delete(t), this.$toast("Sub account created successfully", {
                                    position: "top-right",
                                    timeout: 2e3,
                                    closeOnClick: !0
                                })
                            } catch (e) {
                                this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on deleting. Please try again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                            }
                            this.confirmActive = !1
                        }
                    },
                    async handleApprove(t, e, a, s) {
                        let i = !0;
                        if (!a) {
                            const t = this.$route.params.address;
                            if (!this.checkAddress(t)) return
                        }
                        if (s || (i = this.txConfig.isOriginalRouter, s = qt.getDexList()[this.txConfig.factory].router), a = a || this.contract, !this.checkBalance(t)) return;
                        const o = await this.allowance({
                            account: t,
                            contract: a,
                            isOriginalRouter: i,
                            router: s
                        });
                        if (BigInt(o) == BigInt(0)) {
                            console.log("approving"), n["default"].set(this.isApproving, t.get("address"), !0);
                            try {
                                await this.approve({
                                    account: t,
                                    contract: a,
                                    isOriginalRouter: i,
                                    router: s
                                }), console.log("approved"), n["default"].set(this.isApproved, t.get("address"), !0)
                            } catch (r) {
                                console.log("approve erorr", r), e || (this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on approving. Please check account balance", this.alertModalBtnOk = "Ok", this.alertModalCallback = null)
                            }
                            n["default"].set(this.isApproving, t.get("address"), !1)
                        } else n["default"].set(this.isApproved, t.get("address"), !0)
                    },
                    async handleTest() {
                        console.log("testing triggered");
                        const t = this.getActiveAccounts();
                        if (0 == t.length) return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Please select at least one account", this.alertModalBtnOk = "Ok", this.alertModalCallback = null, void I.$emit(G);
                        if (!this.isCopyTrading) {
                            const e = this.$route.params.address;
                            if (!this.checkAddress(e)) return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Token address is not correct. Please refresh the page.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null, void I.$emit(G);
                            if (!ce.isListening) return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Please click Watch icon to see the live transactions", this.alertModalBtnOk = "Ok", this.alertModalCallback = null, void I.$emit(G);
                            Promise.all(t.map(async t => {
                                await this.test({
                                    account: t,
                                    token: e
                                })
                            })).then(() => {
                                I.$emit(U)
                            }).catch(t => {
                                console.log(t), I.$emit(H)
                            })
                        }
                        I.$emit(U)
                    },
                    async handleBuy(t, e) {
                        e || (e = "normal");
                        let a = this.isCheckTx;
                        "backrun" == e && (a = !1);
                        const n = this.$route.params.address;
                        if (!this.checkAddress(n)) return void console.log("token address is not correct");
                        const s = await this.getTxConfig({
                                action: "buy",
                                type: e,
                                history: t
                            }),
                            i = s.gasPrice || s.maxFeePerGas,
                            o = parseInt(BigInt(i) * BigInt(s.gas) / BigInt(10 ** 15)) / 1e3;
                        if (console.log(o), parseFloat(o) > parseFloat(this.txConfig.gasLimitETH) && 0 != parseFloat(this.txConfig.gasLimitETH)) return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Gas price is exceed the gas limit setting", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null);
                        const r = this.getActiveAccounts();
                        if (0 == r.length) return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Please select at least one account", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null);
                        this.isBuying = !0;
                        const l = [];
                        try {
                            this.hasBought[n] = !0;
                            for (let t = 0; t < r.length; t++) {
                                const e = r[t],
                                    i = [],
                                    o = [];
                                i.push(j.formatBigInt(this.txConfig.buyAmount * 10 ** 18)), o.push(j.formatBigInt(BigInt(this.contract.get("totalSupply")) * BigInt(1e4 * this.txConfig.maxSupply) / BigInt(1e6)));
                                const c = this.buy({
                                    account: e,
                                    token: n,
                                    contract: this.contract,
                                    factory: qt.getDexList()[this.txConfig.factory].address,
                                    amountIns: i,
                                    maxOuts: o,
                                    config: s,
                                    isOriginalRouter: this.txConfig.isOriginalRouter,
                                    router: qt.getDexList()[this.txConfig.factory].router,
                                    isCheckTx: a,
                                    slippage: this.txConfig.slippage
                                }).then(async () => {
                                    this.$toast(`Bought successfully for ${e.get("name")||"NoName"}. Approving...`, {
                                        position: "top-right",
                                        timeout: 2e3,
                                        closeOnClick: !0
                                    })
                                }).catch(t => {
                                    console.log(e.get("name") || "NoName", t), this.$toast.error("Buy failed for " + (e.get("name") || "NoName"), {
                                        position: "top-right",
                                        timeout: 2e3,
                                        closeOnClick: !0
                                    })
                                });
                                l.push(c)
                            }
                            await Promise.all(l)
                        } catch (c) {
                            console.log(c), this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on buying. Please try again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                        }
                        this.isBuying = !1
                    },
                    async handleSellTest() {
                        const t = this.$route.params.address;
                        if (!this.checkAddress(t)) return;
                        const e = this.getActiveAccounts();
                        if (0 == e.length) return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Please select at least one account", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null);
                        this.isSellTesting = !0;
                        try {
                            const a = [];
                            for (let n = 0; n < e.length; n++) {
                                const s = e[n],
                                    i = [];
                                i.push(j.formatBigInt(this.txConfig.sellPercent));
                                const o = this.sellTest({
                                    account: s,
                                    token: t,
                                    factory: qt.getDexList()[this.txConfig.factory].address,
                                    isOriginalRouter: this.txConfig.isOriginalRouter,
                                    router: qt.getDexList()[this.txConfig.factory].router,
                                    amountIns: i,
                                    isPercent: !0,
                                    slippage: this.txConfig.slippage
                                }).then(() => {
                                    this.$toast("Sell test was successful for " + (s.get("name") || "NoName"), {
                                        position: "top-right",
                                        timeout: 2e3,
                                        closeOnClick: !0
                                    })
                                }).catch(t => {
                                    console.log("Sell test for " + (s.get("name") || "NoName"), t), this.$toast.error("Sell test error for " + (s.get("name") || "NoName"), {
                                        position: "top-right",
                                        timeout: 2e3,
                                        closeOnClick: !0
                                    })
                                });
                                a.push(o)
                            }
                            await Promise.all(a)
                        } catch (a) {
                            console.log(a), this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on selling. Please try again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                        }
                        this.isSellTesting = !1
                    },
                    async handleSell(t, e, a) {
                        if (this.isSelling) return;
                        e || (e = "normal");
                        let n = this.isCheckTx;
                        "backrun" == e && (n = !1);
                        const s = this.$route.params.address;
                        if (!this.checkAddress(s)) return;
                        const i = await this.getTxConfig({
                                action: "sell",
                                type: e,
                                history: t
                            }),
                            o = i.gasPrice || i.maxFeePerGas,
                            r = parseInt(BigInt(o) * BigInt(i.gas) / BigInt(10 ** 15)) / 1e3;
                        if (console.log(r), parseFloat(r) > parseFloat(this.txConfig.gasLimitETH) && 0 != parseFloat(this.txConfig.gasLimitETH)) return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Gas price is exceed the gas limit setting", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null);
                        let l = [];
                        if (l = a || this.getActiveAccounts(), 0 == l.length) return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Please select at least one account", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null);
                        try {
                            this.hasSold[s] = !0, this.isSelling = !0;
                            const t = [];
                            for (let e = 0; e < l.length; e++) {
                                const a = l[e],
                                    o = [];
                                o.push(j.formatBigInt(this.txConfig.sellPercent));
                                const r = this.sell({
                                    account: a,
                                    token: s,
                                    contract: this.contract,
                                    amountIns: o,
                                    factory: qt.getDexList()[this.txConfig.factory].address,
                                    isOriginalRouter: this.txConfig.isOriginalRouter,
                                    router: qt.getDexList()[this.txConfig.factory].router,
                                    isPercent: !0,
                                    config: i,
                                    isCheckTx: n,
                                    slippage: this.txConfig.slippage
                                }).then(() => {
                                    this.$toast("Selling was successful for " + (a.get("name") || "NoName"), {
                                        position: "top-right",
                                        timeout: 2e3,
                                        closeOnClick: !0
                                    })
                                }).catch(t => {
                                    console.log(t), this.$toast.error("Selling error for " + (a.get("name") || "NoName"), {
                                        position: "top-right",
                                        timeout: 2e3,
                                        closeOnClick: !0
                                    })
                                });
                                t.push(r)
                            }
                            await Promise.all(t)
                        } catch (c) {
                            console.log(c), this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on selling. Please try again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                        }
                        this.isSelling = !1
                    },
                    async handleCancel() {
                        const t = await this.getTxConfig({
                                action: "cancel"
                            }),
                            e = this.getActiveAccounts();
                        if (0 == e.length) return this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Please select at least one account", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null);
                        this.isCancelling = !0;
                        try {
                            const a = [];
                            for (let n = 0; n < e.length; n++) {
                                const s = e[n],
                                    i = this.cancel({
                                        account: s,
                                        gasPrice: t.gasPrice
                                    }).then(() => {
                                        this.$toast("Cancelled for " + (s.get("name") || "NoName"), {
                                            position: "top-right",
                                            timeout: 2e3,
                                            closeOnClick: !0
                                        })
                                    }).catch(t => {
                                        console.log(t), this.$toast.error("Cancelling error for " + (s.get("name") || "NoName"), {
                                            position: "top-right",
                                            timeout: 2e3,
                                            closeOnClick: !0
                                        })
                                    });
                                a.push(i)
                            }
                            await Promise.all(a)
                        } catch (a) {
                            this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on cancel. Please try again", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                        }
                        this.isCancelling = !1
                    },
                    checkAddress(t) {
                        return !(!this.contract || this.contract.get("address").toLowerCase() != t.toLowerCase() || !qt.isAddress(t)) || (this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Please select one contract.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null, !1)
                    },
                    checkBalance(t, e) {
                        if (e || (e = "send"), 0 == parseInt(t.balance)) {
                            let t = "";
                            return "send" == e ? t = "There is not enough balance to send transaction. Please deposit for gas fee." : "withdraw" == e && (t = "There is not enough balance to withdraw."), this.$toast.error("" + t, {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            }), !1
                        }
                        return !0
                    },
                    async handleCopyTrading(t) {
                        console.log("copy trading");
                        const e = t.get("data"),
                            a = e.transaction,
                            n = ie.parseTransaction(a);
                        if (!n) return void console.log("unknown tx");
                        if (He.hasProcessed(a.hash, a.status)) return void console.log("already processed");
                        He.setProcessed(a.hash, a.status);
                        const {
                            params: s,
                            abi: i
                        } = n, o = i.index, r = parseInt(((new Date).getTime() + 18e5) / 1e3), l = i.selector, c = o.isExact;
                        let d;
                        d = 0 == o.amountIn ? a.value : s[o.amountIn - 1];
                        let u = s[o.amountOut - 1];
                        const p = s[o.path - 1],
                            m = qt.getWETHAddress().toLowerCase();
                        if (p[p.length - 1].toLowerCase() == m) {
                            const e = p[0],
                                n = this.targets.filter(t => t.get("address").toLowerCase() == a.from.toLowerCase())[0],
                                s = n.get("excludes") || [];
                            if (s.filter(t => t.address.toLowerCase() == e.toLowerCase()).length > 0) return this.$toast.warning("Token is excluded", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            }), void console.log("excluded");
                            console.log("ok"), console.log("handling sell");
                            let m = "normal";
                            if (this.txConfig.isSellOnWarn) {
                                if ("pending" == a.status) m = parseFloat(this.txConfig.sellFastGasMultiplier) > 1 ? "frontrun" : "backrun";
                                else if (He.hasSellProcessed(a.hash)) return void console.log("already processed")
                            } else if ("confirmed" != a.status) return void console.log("waiting until confirmed");
                            const y = this.getActiveAccounts();
                            He.setSellProcessed(a.hash);
                            const g = await this.getTxConfig({
                                    action: "sell",
                                    type: m,
                                    history: t
                                }),
                                h = g.gasPrice || g.maxFeePerGas,
                                f = parseInt(BigInt(h) * BigInt(g.gas) / BigInt(10 ** 15)) / 1e3;
                            if (console.log(f), parseFloat(f) > parseFloat(this.txConfig.gasLimitETH) && 0 != parseFloat(this.txConfig.gasLimitETH)) return void this.$toast.error("Gas price is exceed the gas limit setting", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            });
                            this.$toast("Sell Copy is in progress", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            });
                            const b = B.getClass("Contract"),
                                v = new b;
                            v.set("totalSupply", 0), v.set("address", e);
                            for (let t of y) {
                                const n = async () => {
                                    try {
                                        if (!this.checkBalance(t)) return;
                                        if (this.txConfig.isSellSameAmount) {
                                            let n = await qt.getTokenBalance(e, a.from);
                                            "confirmed" == a.status && (n = BigInt(n) + BigInt(d));
                                            const s = await qt.getTokenBalance(e, t.get("address")),
                                                i = BigInt(d) * BigInt(1e7) / BigInt(n),
                                                o = BigInt(s) * i / BigInt(1e7);
                                            if (0 != parseInt(u)) {
                                                const t = BigInt(o) * BigInt(1e7) / BigInt(d);
                                                u = BigInt(u) * t / BigInt(1e7)
                                            }
                                            d = o
                                        } else {
                                            const a = await qt.getTokenBalance(e, t.get("address")),
                                                n = BigInt(parseInt(a / d * 1e5));
                                            0 != parseInt(u) && (u = BigInt(u) * n / BigInt(1e5))
                                        }
                                        if (BigInt(d) == BigInt(0)) return;
                                        if (console.log(d, u), 0 != parseFloat(this.txConfig.sellThreshold)) {
                                            const e = qt.getUniswapV2Contract(a.to),
                                                n = await e.methods.getAmountsOut(d, p).call(),
                                                s = n[1];
                                            if (BigInt(s) < BigInt(this.txConfig.sellThreshold * 10 ** 18)) return void this.$toast.error("Threshold error for " + (t.get("name") || "NoName"), {
                                                position: "top-right",
                                                timeout: 2e3,
                                                closeOnClick: !0
                                            })
                                        }
                                        await this.handleApprove(t, !1, v, a.to);
                                        const n = {
                                                amountIn: d,
                                                amountOut: u,
                                                path: p,
                                                to: t.get("address"),
                                                deadline: r,
                                                isExact: c
                                            },
                                            {
                                                value: s,
                                                input: m
                                            } = He.getInput({
                                                input: a.input,
                                                selector: l,
                                                args: n,
                                                abi: i.inputs,
                                                index: o
                                            });
                                        await this.copy({
                                            token: e,
                                            contract: v,
                                            account: t,
                                            to: a.to,
                                            config: g,
                                            value: s,
                                            input: m,
                                            isBuy: !1
                                        }), this.$toast(`Sold successfully for ${t.get("name")||"NoName"}.`, {
                                            position: "top-right",
                                            timeout: 2e3,
                                            closeOnClick: !0
                                        })
                                    } catch (n) {
                                        console.log(n), this.$toast.error("Sell error for " + (t.get("name") || "NoName"), {
                                            position: "top-right",
                                            timeout: 2e3,
                                            closeOnClick: !0
                                        })
                                    }
                                };
                                n()
                            }
                        } else if (p[0].toLowerCase() == m) {
                            console.log("handling buy");
                            const e = p[p.length - 1],
                                n = this.targets.filter(t => t.get("address").toLowerCase() == a.from.toLowerCase())[0],
                                s = n.get("excludes") || [];
                            if (s.filter(t => t.address.toLowerCase() == e.toLowerCase()) > 0) return this.$toast.warning("Token is excluded", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            }), void console.log("excluded");
                            console.log("ok");
                            let m = "normal";
                            if (this.txConfig.isBuyInstant) {
                                if ("pending" == a.status) m = parseFloat(this.txConfig.buyFastGasMultiplier) > 1 ? "frontrun" : "backrun";
                                else if (He.hasBuyProcessed(e)) return void console.log("already processed")
                            } else if ("confirmed" != a.status) return void console.log("waiting until confirmed");
                            if (this.txConfig.isBuyOnce && He.hasBought(p[p.length - 1])) return void this.$toast("Already bought this token", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            });
                            if (!this.txConfig.isBuySameAmount) {
                                const t = j.formatBigInt(this.txConfig.buyAmount * 10 ** 18);
                                if (0 != parseInt(u)) {
                                    const e = BigInt(parseInt(t / d * 1e5));
                                    u = BigInt(u) * e / BigInt(1e5)
                                }
                                d = t
                            }
                            const y = this.getActiveAccounts();
                            He.setBuyProcessed(e);
                            const g = await this.getTxConfig({
                                    action: "buy",
                                    type: m,
                                    history: t
                                }),
                                h = g.gasPrice || g.maxFeePerGas,
                                f = parseInt(BigInt(h) * BigInt(g.gas) / BigInt(10 ** 15)) / 1e3;
                            if (console.log(f), parseFloat(f) > parseFloat(this.txConfig.gasLimitETH) && 0 != parseFloat(this.txConfig.gasLimitETH)) return void this.$toast.error("Gas price is exceed the gas limit setting", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            });
                            g.gas = a.gas, this.$toast("Buy Copy is in progress", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            });
                            const b = B.getClass("Contract");
                            let v = new b;
                            v.set("totalSupply", 0), v.set("address", e);
                            for (let t of y) {
                                if (!this.checkBalance(t)) return;
                                const n = {
                                        amountIn: d,
                                        amountOut: u,
                                        path: p,
                                        to: t.get("address"),
                                        deadline: r,
                                        isExact: c
                                    },
                                    {
                                        value: s,
                                        input: m
                                    } = He.getInput({
                                        input: a.input,
                                        selector: l,
                                        args: n,
                                        abi: i.inputs,
                                        index: o
                                    }),
                                    y = async () => {
                                        try {
                                            await this.copy({
                                                token: e,
                                                contract: v,
                                                account: t,
                                                to: a.to,
                                                config: g,
                                                value: s,
                                                input: m,
                                                isBuy: !0
                                            }), await this.handleApprove(t, !1, v, a.to), this.$toast(`Bought successfully for ${t.get("name")||"NoName"}. Approving...`, {
                                                position: "top-right",
                                                timeout: 2e3,
                                                closeOnClick: !0
                                            })
                                        } catch (n) {
                                            console.log(n), this.$toast.error("Buy error for " + (t.get("name") || "NoName"), {
                                                position: "top-right",
                                                timeout: 2e3,
                                                closeOnClick: !0
                                            })
                                        }
                                    };
                                y().then(async () => {
                                    const t = v.get("decimals");
                                    t || (v = await this.fetchContract(e), await this.createUpdateWatch({
                                        address: v.get("address"),
                                        name: v.get("name"),
                                        totalSupply: v.get("totalSupply"),
                                        decimals: v.get("decimals"),
                                        owner: v.get("owner"),
                                        symbol: v.get("symbol"),
                                        isActive: !0,
                                        isFinished: !1
                                    }))
                                })
                            }
                        }
                    },
                    preCheck(t) {
                        if (t.test) return void this.handleTest();
                        if (this.isCopyTrading) return void this.handleCopyTrading(t);
                        const e = ie.getDetails(this.contract, t, !0);
                        console.log("New check", e.hash);
                        const a = this.$route.params.address;
                        let n = null;
                        this.txConfig.buyOn && "" != this.txConfig.buyOn && (n = this.txConfig.buyOn.replace(/\s/gi, "")), "" == n && (n = null), (n && e.selector.toLowerCase() == this.txConfig.buyOn.toLowerCase() || e.method && -1 != e.method.toLowerCase().indexOf(this.txConfig.buyOn.toLowerCase())) && n && !this.hasBought[a] && (this.$toast("Buy in progress...", {
                            position: "top-right",
                            timeout: 2e3,
                            closeOnClick: !0
                        }), this.txConfig.isBuyInstant && "pending" == e.status ? (console.log("Buying instantly"), this.handleBuy(t, "backrun")) : this.txConfig.isBuyInstant || "confirmed" != e.status || (I.$off(V), console.log("Buying after Confirmed. Waiting for block ", this.txConfig.blocks), parseInt(this.txConfig.blocks) - 1 <= 0 ? this.handleBuy(t, "normal") : I.$on(V, e => {
                            e >= t.get("data").transaction.blockNumber + parseInt(this.txConfig.blocks) - 1 && (this.handleBuy(t, "normal"), I.$off(V))
                        }))), this.txConfig.isSellOnWarn && this.isWarn(t, e) && "pending" == e.status && !this.hasSold[a] && (console.log("Selling as there is a warn"), this.$toast.warning("Selling on warn...", {
                            position: "top-right",
                            timeout: 2e3,
                            closeOnClick: !0
                        }), this.handleSell(t, "frontrun"))
                    },
                    isWarn(t, e) {
                        return ie.isWarn(t, this.accounts, e, this.txConfig.warns)
                    }
                },
                data() {
                    return {
                        showOriginalRouter: !0,
                        hasBought: {},
                        hasSold: {},
                        dexList: [],
                        copyDexList: [],
                        gWeiTimer: null,
                        ethPrice: 0,
                        gwei: 0,
                        escrowBalance: 0,
                        isSpenderSetting: !1,
                        isCreatingMain: !1,
                        isCreatingSub: !1,
                        isDepositing: !1,
                        isCancelling: !1,
                        isBuying: !1,
                        isSelling: !1,
                        isApproving: {},
                        isEditing: {},
                        isWithdrawing: {},
                        isEscrowDepositing: !1,
                        isSellTesting: !1,
                        isCheckTx: !0,
                        timer: null,
                        isSpenderSet: !0,
                        isApproved: {},
                        mainDepositAmount: 0,
                        withdrawAmount: 0,
                        to: "",
                        activeAccounts: {},
                        depositModalBalance: 0,
                        depositModalActive: !1,
                        depositModalCallback: null,
                        depositModalContent: "",
                        depositModalCaption: "",
                        depositModalHasTo: !1,
                        confirmActive: !1,
                        confirmTitle: "",
                        confirmContent: "",
                        confirmCallback: null,
                        confirmIcon: "info",
                        inputModalFields: [],
                        inputModalActive: !1,
                        inputModalTitle: "",
                        inputModalCallback: null,
                        inputModalBtnOk: "Yes",
                        inputModalBtnCancel: "Cancel",
                        alertModalTitle: "",
                        alertModalIcon: "success",
                        alertModalActive: !1,
                        alertModalContent: "",
                        alertModalBtnOk: "",
                        alertModalCallback: null
                    }
                }
            },
            Ue = Ge,
            qe = (a("72e7"), Object(Qt["a"])(Ue, Jt, Xt, !1, null, "7a38ac36", null)),
            Ve = qe.exports,
            ze = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "card cardlabel sticky-top align-top",
                    attrs: {
                        id: "transaction-config-card"
                    }
                }, [e("div", {
                    staticClass: "expander",
                    on: {
                        click: function(e) {
                            t.isExpand = !t.isExpand
                        }
                    }
                }, [e("h2", [t._v("Configuration")]), e("font-awesome-icon", {
                    class: {
                        "icon-rotate": !0 === t.isExpand
                    },
                    attrs: {
                        icon: "fa-solid fa-chevron-down"
                    }
                })], 1), t.isCopyTrading() ? e("div", {
                    staticClass: "card-body",
                    class: {
                        "is-expand": !0 === t.isExpand
                    }
                }, [e("div", {
                    staticClass: "d-flex flex-wrap"
                }, [e("div", {
                    staticClass: "col-lg-6 pe-lg-3"
                }, [t._m(0), e("div", {
                    staticClass: "d-flex flex-wrap mt-2"
                }, [e("div", {
                    staticClass: "col-lg-6 pe-lg-3 col-sm-12 col-12"
                }, [e("div", {}, [e("label", {
                    staticClass: "form-label"
                }, [t._v(t._s(t.getNetwork().currency) + " Amount"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208171)"
                    }
                })]), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.buyAmount,
                        expression: "config.buyAmount"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "12"
                    },
                    domProps: {
                        value: t.config.buyAmount
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "buyAmount", e.target.value)
                        }
                    }
                })])]), e("div", {
                    staticClass: "col-lg-6 ps-lg-3 col-sm-12 col-12 mobile-mt"
                }, [e("div", {
                    staticClass: "d-flex align-items-center dm"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.isBuyInstant,
                        expression: "config.isBuyInstant"
                    }],
                    staticClass: "form-check-input",
                    attrs: {
                        id: "check",
                        type: "checkbox",
                        value: "",
                        "aria-label": "..."
                    },
                    domProps: {
                        checked: Array.isArray(t.config.isBuyInstant) ? t._i(t.config.isBuyInstant, "") > -1 : t.config.isBuyInstant
                    },
                    on: {
                        change: function(e) {
                            var a = t.config.isBuyInstant,
                                n = e.target,
                                s = !!n.checked;
                            if (Array.isArray(a)) {
                                var i = "",
                                    o = t._i(a, i);
                                n.checked ? o < 0 && t.$set(t.config, "isBuyInstant", a.concat([i])) : o > -1 && t.$set(t.config, "isBuyInstant", a.slice(0, o).concat(a.slice(o + 1)))
                            } else t.$set(t.config, "isBuyInstant", s)
                        }
                    }
                }), e("label", {
                    staticClass: "me-2 m-0 ps-3",
                    attrs: {
                        for: "check"
                    }
                }, [t._v("Buy Instant")]), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208167)"
                    }
                })]), e("div", {
                    staticClass: "d-flex align-items-center dm mt-1"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.isBuySameAmount,
                        expression: "config.isBuySameAmount"
                    }],
                    staticClass: "form-check-input",
                    attrs: {
                        id: "check2",
                        type: "checkbox",
                        value: "",
                        "aria-label": "..."
                    },
                    domProps: {
                        checked: Array.isArray(t.config.isBuySameAmount) ? t._i(t.config.isBuySameAmount, "") > -1 : t.config.isBuySameAmount
                    },
                    on: {
                        change: function(e) {
                            var a = t.config.isBuySameAmount,
                                n = e.target,
                                s = !!n.checked;
                            if (Array.isArray(a)) {
                                var i = "",
                                    o = t._i(a, i);
                                n.checked ? o < 0 && t.$set(t.config, "isBuySameAmount", a.concat([i])) : o > -1 && t.$set(t.config, "isBuySameAmount", a.slice(0, o).concat(a.slice(o + 1)))
                            } else t.$set(t.config, "isBuySameAmount", s)
                        }
                    }
                }), e("label", {
                    staticClass: "me-2 m-0 ps-3",
                    attrs: {
                        for: "check2"
                    }
                }, [t._v("Same Amount")]), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208171)"
                    }
                })]), e("div", {
                    staticClass: "d-flex align-items-center dm mt-1"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.isBuyOnce,
                        expression: "config.isBuyOnce"
                    }],
                    staticClass: "form-check-input",
                    attrs: {
                        id: "check3",
                        type: "checkbox",
                        value: "",
                        "aria-label": "..."
                    },
                    domProps: {
                        checked: Array.isArray(t.config.isBuyOnce) ? t._i(t.config.isBuyOnce, "") > -1 : t.config.isBuyOnce
                    },
                    on: {
                        change: function(e) {
                            var a = t.config.isBuyOnce,
                                n = e.target,
                                s = !!n.checked;
                            if (Array.isArray(a)) {
                                var i = "",
                                    o = t._i(a, i);
                                n.checked ? o < 0 && t.$set(t.config, "isBuyOnce", a.concat([i])) : o > -1 && t.$set(t.config, "isBuyOnce", a.slice(0, o).concat(a.slice(o + 1)))
                            } else t.$set(t.config, "isBuyOnce", s)
                        }
                    }
                }), e("label", {
                    staticClass: "me-2 m-0 ps-3",
                    attrs: {
                        for: "check3"
                    }
                }, [t._v("Buy Once")]), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208176)"
                    }
                })])])]), e("div", {
                    staticClass: "d-flex flex-wrap mt-2"
                }, [e("div", {
                    staticClass: "col-lg-6 pe-3"
                }, [e("div", {}, [t._m(1), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.buyGasMultiplier,
                        expression: "config.buyGasMultiplier"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "0"
                    },
                    domProps: {
                        value: t.config.buyGasMultiplier
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "buyGasMultiplier", e.target.value)
                        }
                    }
                })])]), e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {}, [t._m(2), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.buyFastGasMultiplier,
                        expression: "config.buyFastGasMultiplier"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "1.5"
                    },
                    domProps: {
                        value: t.config.buyFastGasMultiplier
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "buyFastGasMultiplier", e.target.value)
                        }
                    }
                })])])])]), e("div", {
                    staticClass: "col-lg-6 mobile-mt"
                }, [t._m(3), e("div", {
                    staticClass: "d-flex flex-wrap mt-2"
                }, [e("div", {
                    staticClass: "col-lg-12 pe-3"
                }, [e("div", {
                    staticClass: "d-flex flex-wrap"
                }, [e("div", {
                    staticClass: "col-lg-6 pe-3"
                }, [e("div", {}, [t._m(4), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.sellThreshold,
                        expression: "config.sellThreshold"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "0"
                    },
                    domProps: {
                        value: t.config.sellThreshold
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "sellThreshold", e.target.value)
                        }
                    }
                })])]), e("div", {
                    staticClass: "col-lg-6 ps-lg-3 col-sm-12 col-12 mobile-mt"
                }, [e("div", {
                    staticClass: "d-flex align-items-center dm"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.isSellOnWarn,
                        expression: "config.isSellOnWarn"
                    }],
                    staticClass: "form-check-input",
                    attrs: {
                        id: "checksellinstant",
                        type: "checkbox",
                        value: "",
                        "aria-label": "..."
                    },
                    domProps: {
                        checked: Array.isArray(t.config.isSellOnWarn) ? t._i(t.config.isSellOnWarn, "") > -1 : t.config.isSellOnWarn
                    },
                    on: {
                        change: function(e) {
                            var a = t.config.isSellOnWarn,
                                n = e.target,
                                s = !!n.checked;
                            if (Array.isArray(a)) {
                                var i = "",
                                    o = t._i(a, i);
                                n.checked ? o < 0 && t.$set(t.config, "isSellOnWarn", a.concat([i])) : o > -1 && t.$set(t.config, "isSellOnWarn", a.slice(0, o).concat(a.slice(o + 1)))
                            } else t.$set(t.config, "isSellOnWarn", s)
                        }
                    }
                }), e("label", {
                    staticClass: "me-2 m-0 ps-3",
                    attrs: {
                        for: "checksellinstant"
                    }
                }, [t._v("Sell Instant")]), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208184)"
                    }
                })]), e("div", {
                    staticClass: "d-flex align-items-center dm mt-3"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.isSellSameAmount,
                        expression: "config.isSellSameAmount"
                    }],
                    staticClass: "form-check-input",
                    attrs: {
                        id: "checksameamount",
                        type: "checkbox",
                        value: "",
                        "aria-label": "..."
                    },
                    domProps: {
                        checked: Array.isArray(t.config.isSellSameAmount) ? t._i(t.config.isSellSameAmount, "") > -1 : t.config.isSellSameAmount
                    },
                    on: {
                        change: function(e) {
                            var a = t.config.isSellSameAmount,
                                n = e.target,
                                s = !!n.checked;
                            if (Array.isArray(a)) {
                                var i = "",
                                    o = t._i(a, i);
                                n.checked ? o < 0 && t.$set(t.config, "isSellSameAmount", a.concat([i])) : o > -1 && t.$set(t.config, "isSellSameAmount", a.slice(0, o).concat(a.slice(o + 1)))
                            } else t.$set(t.config, "isSellSameAmount", s)
                        }
                    }
                }), e("label", {
                    staticClass: "me-2 m-0 ps-3",
                    attrs: {
                        for: "checksameamount"
                    }
                }, [t._v("Same Amount")]), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208193)"
                    }
                })])])]), e("div", {
                    staticClass: "d-flex flex-wrap mt-2"
                }, [e("div", {
                    staticClass: "col-lg-6 pe-3"
                }, [e("div", {}, [t._m(5), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.sellGasMultiplier,
                        expression: "config.sellGasMultiplier"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "0"
                    },
                    domProps: {
                        value: t.config.sellGasMultiplier
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "sellGasMultiplier", e.target.value)
                        }
                    }
                })])]), e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {}, [t._m(6), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.sellFastGasMultiplier,
                        expression: "config.sellFastGasMultiplier"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "1.5"
                    },
                    domProps: {
                        value: t.config.sellFastGasMultiplier
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "sellFastGasMultiplier", e.target.value)
                        }
                    }
                })])])])])])])])]) : e("div", {
                    staticClass: "card-body",
                    class: {
                        "is-expand": !0 === t.isExpand
                    }
                }, [e("div", {
                    staticClass: "d-flex flex-wrap"
                }, [e("div", {
                    staticClass: "col-lg-6 pe-lg-3"
                }, [e("div", {
                    staticClass: "d-flex"
                }, [t._m(7), e("div", {
                    staticClass: "col-lg-5 d-flex align-items-center",
                    style: t.getLevel().canSnipe() ? "" : "visibility: hidden;"
                }, [t._m(8), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.buyOn,
                        expression: "config.buyOn"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        "margin-top": "0px"
                    },
                    attrs: {
                        type: "text",
                        placeholder: ""
                    },
                    domProps: {
                        value: t.config.buyOn
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "buyOn", e.target.value)
                        }
                    }
                })]), t.canWatch ? e("a", {
                    staticStyle: {
                        "margin-left": "10px"
                    },
                    attrs: {
                        "data-mdb-placement": "bottom",
                        title: "Watch"
                    },
                    on: {
                        click: t.handleWatch
                    }
                }, [t.isWatch ? e("img", {
                    staticClass: "action-icon",
                    staticStyle: {
                        width: "30px",
                        height: "30px"
                    },
                    attrs: {
                        src: "img/unobserve.svg"
                    }
                }) : e("img", {
                    staticClass: "action-icon",
                    staticStyle: {
                        width: "30px",
                        height: "30px"
                    },
                    attrs: {
                        src: "img/observe.svg"
                    }
                }), t.isWatch ? e("span", [t._v("Watching...")]) : t._e()]) : t._e()]), e("div", {
                    staticClass: "d-flex flex-wrap mt-2"
                }, [e("div", {
                    staticClass: "col-lg-6 pe-lg-3 col-sm-12 col-12"
                }, [e("div", {}, [e("label", {
                    staticClass: "form-label"
                }, [t._v(t._s(t.getNetwork().currency) + " Amount"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6021003)"
                    }
                })]), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.buyAmount,
                        expression: "config.buyAmount"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "12"
                    },
                    domProps: {
                        value: t.config.buyAmount
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "buyAmount", e.target.value)
                        }
                    }
                })])]), e("div", {
                    staticClass: "col-lg-6 col-sm-12 col-12"
                }, [t.config.isOriginalRouter ? t._e() : e("div", {}, [t._m(9), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.maxSupply,
                        expression: "config.maxSupply"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "0.75"
                    },
                    domProps: {
                        value: t.config.maxSupply
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "maxSupply", e.target.value)
                        }
                    }
                })])])]), t.getLevel().canSnipe() ? e("div", {
                    staticClass: "d-flex flex-wrap mt-2"
                }, [e("div", {
                    staticClass: "col-lg-6 pe-3"
                }, [e("div", {}, [t._m(10), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.buyGasMultiplier,
                        expression: "config.buyGasMultiplier"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "0"
                    },
                    domProps: {
                        value: t.config.buyGasMultiplier
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "buyGasMultiplier", e.target.value)
                        }
                    }
                })])]), e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {}, [t._m(11), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.gasLimitETH,
                        expression: "config.gasLimitETH"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "1.5"
                    },
                    domProps: {
                        value: t.config.gasLimitETH
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "gasLimitETH", e.target.value)
                        }
                    }
                })])])]) : t._e()]), e("div", {
                    staticClass: "col-lg-6 mobile-mt"
                }, [t._m(12), e("div", {
                    staticClass: "d-flex flex-wrap mt-2"
                }, [e("div", {
                    staticClass: "col-lg-6 pe-lg-3 col-sm-12 col-12"
                }, [e("div", {}, [t._m(13), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.sellPercent,
                        expression: "config.sellPercent"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "100"
                    },
                    domProps: {
                        value: t.config.sellPercent
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "sellPercent", e.target.value)
                        }
                    }
                })])]), t.getLevel().canSnipe() ? e("div", {
                    staticClass: "col-lg-6 ps-lg-3 col-sm-12 col-12 mobile-mt"
                }, [e("div", {
                    staticClass: "d-flex align-items-center dm"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.isBuyInstant,
                        expression: "config.isBuyInstant"
                    }],
                    staticClass: "form-check-input",
                    attrs: {
                        id: "check",
                        type: "checkbox",
                        value: "",
                        "aria-label": "..."
                    },
                    domProps: {
                        checked: Array.isArray(t.config.isBuyInstant) ? t._i(t.config.isBuyInstant, "") > -1 : t.config.isBuyInstant
                    },
                    on: {
                        change: function(e) {
                            var a = t.config.isBuyInstant,
                                n = e.target,
                                s = !!n.checked;
                            if (Array.isArray(a)) {
                                var i = "",
                                    o = t._i(a, i);
                                n.checked ? o < 0 && t.$set(t.config, "isBuyInstant", a.concat([i])) : o > -1 && t.$set(t.config, "isBuyInstant", a.slice(0, o).concat(a.slice(o + 1)))
                            } else t.$set(t.config, "isBuyInstant", s)
                        }
                    }
                }), e("label", {
                    staticClass: "me-2 m-0 ps-3",
                    attrs: {
                        for: "check"
                    }
                }, [t._v(t._s(t.config.isBuyInstant ? "Buy Instant" : "Blocks: "))]), t.config.isBuyInstant ? t._e() : e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.blocks,
                        expression: "config.blocks"
                    }],
                    staticClass: "form-check-input",
                    staticStyle: {
                        width: "30px",
                        height: "30px",
                        "margin-top": "0px",
                        "margin-left": "5px"
                    },
                    domProps: {
                        value: t.config.blocks
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "blocks", e.target.value)
                        }
                    }
                }), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6021015)"
                    }
                })]), e("div", {
                    staticClass: "d-flex align-items-center dm mt-3"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.isSellOnWarn,
                        expression: "config.isSellOnWarn"
                    }],
                    staticClass: "form-check-input",
                    attrs: {
                        id: "check2",
                        type: "checkbox",
                        value: "",
                        "aria-label": "..."
                    },
                    domProps: {
                        checked: Array.isArray(t.config.isSellOnWarn) ? t._i(t.config.isSellOnWarn, "") > -1 : t.config.isSellOnWarn
                    },
                    on: {
                        change: function(e) {
                            var a = t.config.isSellOnWarn,
                                n = e.target,
                                s = !!n.checked;
                            if (Array.isArray(a)) {
                                var i = "",
                                    o = t._i(a, i);
                                n.checked ? o < 0 && t.$set(t.config, "isSellOnWarn", a.concat([i])) : o > -1 && t.$set(t.config, "isSellOnWarn", a.slice(0, o).concat(a.slice(o + 1)))
                            } else t.$set(t.config, "isSellOnWarn", s)
                        }
                    }
                }), e("label", {
                    staticClass: "me-2 m-0 ps-3",
                    attrs: {
                        for: "check2"
                    }
                }, [t._v("Sell on Warn")]), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6021020)"
                    }
                })])]) : t._e()]), t.getLevel().canSnipe() ? e("div", {
                    staticClass: "d-flex flex-wrap mt-2"
                }, [e("div", {
                    staticClass: "col-lg-12 pe-3"
                }, [e("div", {
                    staticClass: "d-flex flex-wrap"
                }, [e("div", {
                    staticClass: "col-lg-6 pe-3"
                }, [e("div", {}, [t._m(14), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.sellGasMultiplier,
                        expression: "config.sellGasMultiplier"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "0"
                    },
                    domProps: {
                        value: t.config.sellGasMultiplier
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "sellGasMultiplier", e.target.value)
                        }
                    }
                })])]), e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {}, [t._m(15), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.sellFastGasMultiplier,
                        expression: "config.sellFastGasMultiplier"
                    }],
                    staticClass: "form-control",
                    attrs: {
                        type: "text",
                        placeholder: "1.5"
                    },
                    domProps: {
                        value: t.config.sellFastGasMultiplier
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "sellFastGasMultiplier", e.target.value)
                        }
                    }
                })])])])])]) : t._e()])]), e("hr"), e("div", {
                    staticClass: "d-flex flex-wrap align-items-center mobile-gap"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "d-flex flex-wrap"
                }, [t._m(16), e("div", {
                    staticClass: "col-lg-6 d-flex align-items-center"
                }, [e("label", {
                    staticClass: "form-label",
                    staticStyle: {
                        "margin-right": "6px!important",
                        "margin-top": "3px!important"
                    }
                }, [t._v("Gas Multiplier")]), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.config.cancelGasMultiplier,
                        expression: "config.cancelGasMultiplier"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        "margin-top": "-5px"
                    },
                    attrs: {
                        type: "text",
                        placeholder: ""
                    },
                    domProps: {
                        value: t.config.cancelGasMultiplier
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.config, "cancelGasMultiplier", e.target.value)
                        }
                    }
                })])])]), e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "d-flex flex-wrap pe-3"
                }, [e("div", {
                    staticClass: "col-lg-6"
                }, [e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center",
                    staticStyle: {
                        "margin-top": "-4px"
                    }
                }, [e("a", {
                    staticClass: "btn-theme",
                    staticStyle: {
                        "font-size": "12px"
                    },
                    on: {
                        click: function(e) {
                            return t.getSelector()
                        }
                    }
                }, [t._v("Get Selector")]), e("img", {
                    staticClass: "pointer ms-lg-2",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6020973)"
                    }
                })])]), e("div", {
                    staticClass: "col-6 d-flex align-items-center"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.selector,
                        expression: "selector"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        "margin-top": "-5px"
                    },
                    attrs: {
                        type: "text",
                        placeholder: ""
                    },
                    domProps: {
                        value: t.selector
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.selector = e.target.value)
                        }
                    }
                })])])])])])])
            },
            Qe = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "d-flex"
                }, [e("div", {
                    staticStyle: {
                        "margin-right": "8px",
                        "margin-top": "3px"
                    }
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Buy")])])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Normal Gas Multiplier"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208167)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Frontrun Gas Multiplier"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208167)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "d-flex",
                    staticStyle: {
                        "margin-top": "3px"
                    }
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Sell")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Threshold"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208182)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Normal Gas Multiplier"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208184)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Frontrun Gas Multiplier"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208184)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticStyle: {
                        "margin-right": "8px",
                        "margin-top": "3px"
                    }
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Buy")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label",
                    staticStyle: {
                        "margin-right": "6px!important",
                        "margin-top": "6px!important"
                    }
                }, [t._v("On "), e("img", {
                    staticClass: "pointer ms-lg-2",
                    attrs: {
                        id: "help-buy-on",
                        src: "img/info-card.svg",
                        "data-toggle": "tooltip",
                        "data-placement": "bottom",
                        title: "Trigger buy on this function",
                        onclick: "Intercom('showArticle', 6020973)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Max Percent"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6021003)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Normal Gas Multiplier"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6021015)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Gas Limit"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6208153)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "d-flex",
                    staticStyle: {
                        height: "30px",
                        "margin-top": "3px"
                    }
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Sell")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Account’s Percent"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6021011)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Normal Gas Multiplier"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6021020)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("label", {
                    staticClass: "form-label"
                }, [t._v("Frontrun Gas Multiplier"), e("img", {
                    staticClass: "ms-lg-2 pointer",
                    attrs: {
                        src: "img/info-card.svg",
                        onclick: "Intercom('showArticle', 6021020)"
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "col-lg-6"
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Cancel")])])
            }],
            Ye = {
                name: "TransactionConfig",
                components: {},
                computed: { ...Object(E["c"])({
                        config: "transactions/config",
                        contract: "contracts/active"
                    }),
                    canWatch() {
                        return this.contract && this.getLevel().canSnipe() && !this.getNetwork().cantWatch
                    }
                },
                watch: {
                    contract() {
                        this.isWatch && (ce.stop(), this.isWatch = !1)
                    }
                },
                async mounted() {},
                beforeDestroy() {
                    ce.stop()
                },
                methods: { ...Object(E["b"])({}),
                    isCopyTrading() {
                        return "CopyTrading" == this.$route.name
                    },
                    getLevel() {
                        return qt.getLevel()
                    },
                    getNetwork() {
                        return qt.getNetwork()
                    },
                    getSelector() {
                        if ("0x" != this.selector.substr(0, 2)) {
                            let t = this.selector;
                            t = t.replace(/(\r\n|\n|\r)/gm, ""), t = t.split("(");
                            const e = t[0].split(" "),
                                a = e[e.length - 1];
                            t = t[1].split(")")[0];
                            const n = t.split(","),
                                s = [];
                            n.map(t => {
                                for (let e of t.split(" "))
                                    if ("" != e) {
                                        s.push(e);
                                        break
                                    }
                            }), t = `${a}(${s.join(",")})`;
                            const i = new c.a;
                            this.selector = i.eth.abi.encodeFunctionSignature(t)
                        }
                    },
                    async handleWatch() {
                        if (this.isWatch) ce.stop(), this.isWatch = !1;
                        else {
                            const t = await qt.getTokenDetails(this.contract.get("address"));
                            ce.listen(this.contract.get("address"), t.owner), this.isWatch = !0
                        }
                    }
                },
                data() {
                    return {
                        isWatch: !1,
                        selector: "",
                        isExpand: !1
                    }
                }
            },
            Ke = Ye,
            Je = (a("b3e4"), Object(Qt["a"])(Ke, ze, Qe, !1, null, "79407570", null)),
            Xe = Je.exports,
            Ze = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "card w-full"
                }, [e("div", {
                    staticClass: "card-body p-0 py-4"
                }, [e("div", {
                    staticClass: "d-flex justify-content-between align-items-center px-4 pb-3"
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("New Contracts")]), e("div", {
                    staticClass: "d-flex",
                    staticStyle: {
                        position: "relative"
                    }
                }, [e("input", {
                    staticClass: "form-control",
                    attrs: {
                        id: "contract-address-search",
                        type: "text",
                        placeholder: "Search..."
                    },
                    on: {
                        keyup: t.onSearch
                    }
                }), e("div", {
                    staticClass: ""
                }, [e("a", {
                    staticClass: "",
                    on: {
                        // click: t.onTG
                    }
                }, [t._v("")])])])]), e("div", {
                    staticClass: "table-responsive"
                }, [e("div", {
                    staticClass: "table m-0 align-items-center border0 w-100"
                }, [t._l(t.contracts, (function(a) {
                    return e("div", {
                        key: "initial" + a.get("address"),
                        staticStyle: {
                            "border-bottom": "1px solid gray",
                            cursor: "pointer"
                        },
                        on: {
                            click: function(e) {
                                return t.onOpenContract(a)
                            }
                        }
                    }, [e("div", {
                        staticClass: "d-flex justify-between"
                    }, [e("td", [e("b", [t._v("Name:")]), e("b", {
                        staticStyle: {
                            "margin-left": "20px"
                        }
                    }, [t._v(t._s(a.get("name")) + " / " + t._s(a.get("symbol")))])]), e("td", [e("b", [t._v("Contract:")]), t._v(" " + t._s(t.formatAddress(a.get("address"))) + " ")]), e("td", [e("b", [t._v("Owner:")]), t._v(" " + t._s(t.formatAddress(a.get("owner"))) + " " + t._s(a.get("balance") ? "/" + a.get("balance") : "") + " "), e("b", {
                        staticStyle: {
                            "margin-left": "10px"
                        }
                    }, [t._v("Deploys: ")]), t._v(" " + t._s(a.get("numDeployed")) + " "), e("b", {
                        staticStyle: {
                            "margin-left": "10px"
                        }
                    }, [t._v("LP Removes: ")]), t._v(" " + t._s(a.get("numRemoved")) + " ")]), e("td", [e("b", [t._v("Total Supply:")]), t._v(" " + t._s(t.formatNumber(a.get("totalSupply"))) + " ")]), e("td", [e("b", [t._v("Decimals:")]), t._v(" " + t._s(a.get("decimals")) + " ")])]), e("div", {
                        staticClass: "d-flex justify-between"
                    }, [e("td", [e("b", [t._v("Function:")]), t._v(" " + t._s(a.get("function")) + " ")]), e("td", [e("b", [t._v("Max TX:")]), t._v(" " + t._s(a.get("maxTx")) + ", "), e("b", [t._v("Wallet")]), t._v(" : " + t._s(a.get("maxWallet")) + " ")]), e("td", [e("b", [t._v("Buy Tax:")]), t._v(" " + t._s(a.get("buyTax")) + ", Sell Tax: " + t._s(a.get("sellTax")) + " ")]), e("td", [e("b", [t._v("Early Buy:")]), t._v(" " + t._s(a.get("earlyBuyTax")) + " "), e("b", [t._v("Early Sell")]), t._v(" : " + t._s(a.get("earlySellTax")) + " ")]), e("td", [e("b", [t._v("Dead Block:")]), t._v(" " + t._s(a.get("deadBlocks")) + ", Buy Tax : " + t._s(a.get("deadBlockBuyTax")) + ", Sell Tax : " + t._s(a.get("deadBlockSellTax")) + " ")])])])
                })), e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center mt-4"
                }, [e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: t.loadMore
                    }
                }, [t._v("Load more")])])], 2)])])])
            },
            ta = [],
            ea = {
                name: "List",
                props: [],
                components: {},
                data() {
                    return {
                        contracts: [],
                        offset: 0,
                        pageSize: 6,
                        query: "",
                        timer: null
                    }
                },
                beforeDestroy() {},
                computed: { ...Object(E["c"])({})
                },
                watch: {},
                async mounted() {
                    this.refresh()
                },
                methods: { ...Object(E["b"])({}),
                    onTG() {
                        window.open("#")
                    },
                    async refresh() {
                        let t;
                        const e = B.getQuery("Contract");
                        e.equalTo("network", "main"), e.limit(this.pageSize), e.skip(this.offset), e.descending("createdAt");
                        let a = null;
                        if (this.query && "" != this.query) {
                            const t = B.getQuery("Contract");
                            t.matches("name", this.query.toLowerCase(), "i");
                            const e = B.getQuery("Contract");
                            e.matches("address", this.query.toLowerCase(), "i");
                            const n = B.getQuery("Contract");
                            n.matches("address", this.query.toLowerCase(), "i"), a = B.instance().Query.or(t, e, n)
                        }
                        t = a ? B.instance().Query.and(e, a) : e;
                        const n = await t.find();
                        this.offset += this.pageSize, this.contracts.push(...n)
                    },
                    onSearch(t) {
                        this.timer && clearTimeout(this.timer), this.timer = setTimeout(() => {
                            const e = t.target.value;
                            this.query = e, this.contracts = [], this.offset = 0, this.refresh()
                        }, 2e3)
                    },
                    async loadMore() {
                        this.refresh()
                    },
                    onOpenContract(t) {
                        this.$router.push({
                            name: "Contract",
                            params: {
                                address: t.get("address")
                            }
                        })
                    },
                    formatAddress(t) {
                        return j.formatAddress(t)
                    },
                    formatNumber(t, e) {
                        if (t = parseFloat(t), 0 == t) return t;
                        if (t < 1e3) return parseFloat(t.toFixed(5));
                        e || (e = 3);
                        const a = [{
                                value: 1,
                                symbol: ""
                            }, {
                                value: 1e3,
                                symbol: "k"
                            }, {
                                value: 1e6,
                                symbol: "M"
                            }, {
                                value: 1e9,
                                symbol: "G"
                            }, {
                                value: 1e12,
                                symbol: "T"
                            }, {
                                value: 1e15,
                                symbol: "P"
                            }, {
                                value: 1e18,
                                symbol: "E"
                            }],
                            n = /\.0+$|(\.[0-9]*[1-9])0+$/;
                        var s = a.slice().reverse().find((function(e) {
                            return t >= e.value
                        }));
                        return s ? parseFloat((t / s.value).toFixed(e)).toString().replace(n, "$1") + s.symbol : "0"
                    }
                }
            },
            aa = ea,
            na = (a("4668"), Object(Qt["a"])(aa, Ze, ta, !1, null, "7633554b", null)),
            sa = na.exports,
            ia = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "card"
                }, [e("div", {
                    staticClass: "card-body p-0 py-4"
                }, [e("div", {
                    staticClass: "d-flex justify-content-between align-items-center px-4 pb-3"
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Recent Actions")]), e("div", [e("span", {
                    staticStyle: {
                        "margin-right": "6px",
                        "font-weight": "900",
                        "font-size": "14px"
                    }
                }, [t._v("Total PnL: ")]), e("span", {
                    class: t.profit < 0 ? "text-danger" : "text-success",
                    staticStyle: {
                        "font-weight": "900",
                        "font-size": "18px"
                    }
                }, [t._v(t._s(t.profit) + " " + t._s(t.getNetwork().currency))])])]), e("div", {
                    staticClass: "table-responsive"
                }, [e("table", {
                    staticClass: "table m-0 align-items-center"
                }, [e("thead", [e("tr", [e("th", [t._v("Token")]), e("th", [t._v(t._s(t.getNetwork().currency))]), e("th", [t._v("Gas")]), e("th", [t._v("Time")])])]), e("tbody", t._l(t.orders.data, (function(a) {
                    return e("tr", {
                        key: a.id
                    }, [e("td", {
                        staticClass: "pointer",
                        on: {
                            click: function(e) {
                                return t.openOrderDetails(a)
                            }
                        }
                    }, [t._v(t._s(a.get("symbol") || t.formatAddress(a.get("token1"))))]), e("td", [e("span", {
                        class: "buy" == t.getType(a) ? "text-danger" : "text-success"
                    }, [t._v(t._s(t.getEthAmount(a)))])]), e("td", [t._v(t._s(t.getGas(a)))]), e("td", {
                        staticStyle: {
                            "white-space": "nowrap"
                        }
                    }, [t._v(t._s(t.getTime(a)))])])
                })), 0)]), e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center mt-4"
                }, [e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: t.loadMore
                    }
                }, [t._v("Load more")])])])])])
            },
            oa = [],
            ra = (a("13d5"), {
                name: "AccountList",
                components: {},
                computed: { ...Object(E["c"])({
                        status: "information/status",
                        orders: "information/orders"
                    }),
                    profit() {
                        const t = this.status.reduce((t, e) => t + BigInt(e.get("ethAmount")), BigInt(0));
                        return this.formatBalance(parseInt(t))
                    }
                },
                watch: {},
                beforeDestroy() {
                    I.$off(z)
                },
                async mounted() {
                    this.update(), I.$on(z, t => {
                        this.page = 1, this.update()
                    })
                },
                methods: { ...Object(E["b"])({
                        fetchStatus: "information/fetchStatus",
                        fetchOrders: "information/fetchOrders"
                    }),
                    loadMore() {
                        this.page += 1, this.fetchOrders({
                            pageSize: this.pageSize,
                            page: this.page
                        })
                    },
                    async update() {
                        await this.fetchStatus(), await this.fetchOrders({
                            pageSize: this.pageSize,
                            page: this.page
                        })
                    },
                    openOrderDetails(t) {
                        window.open(this.getNetwork().explorer + "tx/" + t.get("tx"))
                    },
                    formatBalance(t, e) {
                        return t ? j.formatBalance(t, e) : "_"
                    },
                    getType(t) {
                        return t.get("type")
                    },
                    getEthAmount(t) {
                        const e = "buy" == this.getType(t) ? "-" : "";
                        return e + this.formatBalance(t.get("ethAmount")) + this.getNetwork().currency
                    },
                    getTokenAmount(t) {
                        return this.formatBalance(t.get("token1Amount"))
                    },
                    getGas(t) {
                        return this.formatBalance(t.get("gasFee")) + this.getNetwork().currency
                    },
                    getTime(t) {
                        const e = new Date(t.createdAt);
                        return e.toLocaleString()
                    },
                    getNetwork() {
                        return qt.getNetwork()
                    },
                    formatAddress(t) {
                        return j.formatAddress(t)
                    }
                },
                data() {
                    return {
                        pageSize: 5,
                        page: 1
                    }
                }
            }),
            la = ra,
            ca = Object(Qt["a"])(la, ia, oa, !1, null, "cd24f06a", null),
            da = ca.exports,
            ua = {
                name: "Home",
                components: {
                    ContractList: sa,
                    Navbar: Kt,
                    AccountList: Ve,
                    TransactionConfig: Xe,
                    AlertModal: Re,
                    NotificationList: da
                },
                beforeDestroy() {
                    I.$off(q)
                },
                methods: {
                    isAdmin() {
                        return qt.isAdmin()
                    },
                    async connect() {
                        if (!this.isConnecting) try {
                            await qt.init(), this.isConnecting = !0
                        } catch (t) {
                            this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error connecting your wallet. Please try again", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                        }
                    },
                    goToBuy() {
                        window.open(`https://app.uniswap.org/#/swap?exactField=input&inputCurrency=ETH&outputCurrency=${_.SNIPER_ADDRESS}&chain=mainnet`)
                    },
                    async checkSniperBalance() {
                        let t, e;
                        try {
                            [t, e] = [0, 0]
                        } catch (a) {
                            return console.log(a), void(this.timer = setTimeout(this.checkSniperBalance, 5e3))
                        }
                        clearTimeout(this.timer), qt.sniperBalance = j.formatBigInt(t), qt.sniperEthValue = j.formatBigInt(e), this.isEligible = !0
                    }
                },
                computed: { ...Object(E["c"])(["account", "balance"]),
                    ...Object(E["c"])({
                        contract: "contracts/active"
                    }),
                    isShowConfigs() {
                        return "List" != this.$route.name
                    },
                    hasContract() {
                        return !!this.contract
                    }
                },
                watch: {
                    async account() {
                        this.account && (this.isEligible = !0, clearTimeout(this.timer))
                    }
                },
                async mounted() {
                    I.$on(q, () => {
                        this.isConnecting = !1
                    })
                },
                data() {
                    return {
                        isImportStarted: !1,
                        importPage: 0,
                        importPageSize: 50,
                        isLoading: !1,
                        isEligible: !0,
                        timer: null,
                        isConnecting: !1,
                        alertModalTitle: "",
                        alertModalIcon: "success",
                        alertModalActive: !1,
                        alertModalContent: "",
                        alertModalBtnOk: "",
                        alertModalCallback: null
                    }
                }
            },
            pa = ua,
            ma = (a("90b3"), Object(Qt["a"])(pa, s, i, !1, null, null, null)),
            ya = ma.exports,
            ga = a("8c4f"),
            ha = function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("active-list"), e("alert-modal", {
                    attrs: {
                        title: t.alertModalTitle,
                        icon: t.alertModalIcon,
                        active: t.alertModalActive,
                        content: t.alertModalContent,
                        btnOk: t.alertModalBtnOk,
                        callback: t.alertModalCallback
                    },
                    on: {
                        ok: function(e) {
                            t.alertModalActive = !1
                        }
                    }
                })], 1)
            },
            fa = [],
            ba = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "card"
                }, [e("div", {
                    staticClass: "card-body p-0 py-4",
                    attrs: {
                        id: "active-contracts-card"
                    }
                }, [e("div", {
                    staticClass: "d-flex justify-content-between align-items-center px-4 pb-3"
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Active Contracts")]), e("div", {
                    staticClass: "tabs-btn"
                }, [e("ul", {
                    staticClass: "nav nav-tabs mb-3",
                    attrs: {
                        id: "ex1",
                        role: "tablist"
                    }
                }, [e("li", {
                    staticClass: "nav-item",
                    attrs: {
                        role: "presentation"
                    }
                }, [e("a", {
                    staticClass: "nav-link text-capitalize",
                    class: "live" == t.tab ? "active" : "",
                    attrs: {
                        id: "ex1-tab-1",
                        "data-mdb-toggle": "tab",
                        role: "tab",
                        "aria-controls": "ex1-tabs-1",
                        "aria-selected": "true"
                    },
                    on: {
                        click: function(e) {
                            return t.switchTab("live")
                        }
                    }
                }, [t._v("Live")])]), e("li", {
                    staticClass: "nav-item",
                    attrs: {
                        role: "presentation"
                    }
                }, [e("a", {
                    staticClass: "nav-link text-capitalize",
                    class: "past" == t.tab ? "active" : "",
                    attrs: {
                        id: "ex1-tab-2",
                        "data-mdb-toggle": "tab",
                        role: "tab",
                        "aria-controls": "ex1-tabs-2",
                        "aria-selected": "false"
                    },
                    on: {
                        click: function(e) {
                            return t.switchTab("past")
                        }
                    }
                }, [t._v("Past")])])])])]), e("div", {
                    staticClass: "tab-content",
                    attrs: {
                        id: "ex1-content"
                    }
                }, [e("div", {
                    staticClass: "tab-pane fade show active",
                    attrs: {
                        id: "ex1-tabs-1",
                        role: "tabpanel",
                        "aria-labelledby": "ex1-tab-1"
                    }
                }, [e("div", {
                    staticClass: "table-responsive"
                }, [t.watches.length > 0 ? e("table", {
                    staticClass: "table m-0 align-items-center"
                }, [t._m(0), e("tbody", t._l(t.watches, (function(a) {
                    return e("tr", {
                        key: a.id,
                        on: {
                            click: function(e) {
                                return t.goToDetails(a)
                            }
                        }
                    }, [e("td", {
                        staticStyle: {
                            cursor: "pointer"
                        }
                    }, [t._v(t._s(a.get("name")))]), e("td", [t._v(t._s(a.get("symbol")))]), e("td", [t._v(t._s(t.getPrice(a)))]), e("td", [t._v(t._s(t.getMarketCap(a)))]), e("td", [e("line-chart", {
                        attrs: {
                            width: "150px",
                            height: "60px",
                            data: t.chartData[a.get("address")]
                        }
                    })], 1), e("td", [e("div", {
                        staticClass: "edit"
                    }, [e("a", {
                        staticClass: "me-2",
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.openChart(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/view.svg"
                        }
                    })]), e("a", {
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.deleteWatch(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/Delete.svg"
                        }
                    })])])])])
                })), 0)]) : e("div", {
                    staticStyle: {
                        "margin-left": "25px"
                    }
                }, [t._v(" There is no active contract. Please add one by searching contract address ")])])])])])])
            },
            va = [function() {
                var t = this,
                    e = t._self._c;
                return e("thead", [e("tr", [e("th", [t._v("Name")]), e("th", [t._v("Symbol")]), e("th", [t._v("Price")]), e("th", [t._v("MC")]), e("th", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [t._v("Chart")]), e("th")])])
            }],
            wa = a("ade3"),
            Ta = a("8055"),
            Ca = a.n(Ta);
        const ka = "wss://api-v4.zerion.io/",
            xa = "zk_dev_749bc86e06644158935d5f24ed33c087",
            _a = ka;

        function Ma(t, e) {
            return Object.keys(t.payload).every(a => {
                const n = t.payload[a],
                    s = e.meta[a];
                return "object" === typeof n ? JSON.stringify(n) === JSON.stringify(s) : s === n
            })
        }
        const Aa = {
                namespace: "assets",
                socket: Ca()(_a + "assets", {
                    transports: ["websocket"],
                    timeout: 6e4,
                    query: {
                        api_token: xa
                    }
                })
            },
            Sa = {
                namespace: "address",
                socket: Ca()(_a + "address", {
                    transports: ["websocket"],
                    timeout: 6e4,
                    query: {
                        api_token: xa
                    }
                })
            };

        function Ba(t, e) {
            return new Promise(a => {
                const {
                    socket: n,
                    namespace: s
                } = t;

                function i(t) {
                    Ma(e, t) && (r(), a(t))
                }
                const o = e.scope[0];

                function r() {
                    n.off(`received ${s} ${o}`, i), n.emit("unsubscribe", e)
                }
                n.emit("get", e), n.on(`received ${s} ${o}`, i)
            })
        }

        function Oa(t, e, a) {
            const {
                socket: n,
                namespace: s
            } = t;

            function i(t) {
                Ma(e, t) && a(t)
            }
            const o = e.scope[0];

            function r() {
                n.off(`received ${s} ${o}`, i), n.emit("unsubscribe", e)
            }
            return n.emit("subscribe", e), n.on(`received ${s} ${o}`, i), {
                unsubscribe: r
            }
        }
        class Ia {
            constructor() {
                Object(wa["a"])(this, "version", "test")
            }
            subscribeBalance(t, e) {
                return Oa(Sa, {
                    scope: ["portfolio-decomposition"],
                    payload: {
                        addresses: t,
                        currency: "usd"
                    }
                }, e)
            }
            subscribeChart(t, e, a) {
                return Oa(Sa, {
                    scope: ["charts"],
                    payload: {
                        addresses: t,
                        currency: "usd",
                        charts_type: e,
                        charts_max_assets: 0,
                        charts_min_percentage: 100
                    }
                }, a)
            }
            subscribeAssetChart(t, e, a) {
                return Oa(Aa, {
                    scope: ["charts"],
                    payload: {
                        asset_codes: [t],
                        charts_type: e,
                        currency: "usd"
                    }
                }, a)
            }
            async getBalance(t) {
                const e = {
                    currency: "usd"
                };
                return "object" == typeof t ? e["addresses"] = t : e["address"] = t, Ba(Sa, {
                    scope: ["portfolio-decomposition"],
                    payload: e
                }).then(t => t.payload)
            }
            async getActions(t, e = null) {
                return Ba(Sa, {
                    scope: ["actions"],
                    payload: {
                        addresses: t,
                        currency: "usd",
                        actions_action_types: [],
                        actions_limit: 10,
                        cursor: e
                    }
                }).then(t => ({
                    payload: t.payload,
                    cursor: t.meta.next_cursor
                }))
            }
            async getAssetActions(t, e) {
                return Ba(Sa, {
                    scope: ["actions"],
                    payload: {
                        addresses: t,
                        actions_fungible_ids: [e],
                        actions_limit: 10,
                        currency: "usd"
                    }
                }).then(t => t.payload.actions)
            }
            async getTransactions(t, e, a) {
                return e = e || 0, a = a || 10, Ba(Sa, {
                    scope: ["transactions"],
                    payload: {
                        addresses: t,
                        currency: "usd",
                        transactions_offset: e,
                        transactions_limit: a
                    }
                }).then(t => t.payload)
            }
            async getPositionsByAddress(t) {
                return Ba(Sa, {
                    scope: ["positions"],
                    payload: {
                        address: t,
                        currency: "usd"
                    }
                }).then(t => t.payload)
            }
            async getPositions(t) {
                return Ba(Sa, {
                    scope: ["positions"],
                    payload: {
                        addresses: t,
                        currency: "usd"
                    }
                }).then(t => t.payload)
            }
            async getAssetPositions(t, e) {
                return Ba(Sa, {
                    scope: ["positions"],
                    payload: {
                        assets: [e],
                        addresses: t,
                        currency: "usd"
                    }
                }).then(t => t.payload.positions.positions)
            }
            async getAddressInfo(t) {
                return Ba(Sa, {
                    scope: ["info"],
                    payload: {
                        address: t
                    }
                }).then(t => t.payload.info.address)
            }
            async searchAssets(t) {
                return Ba(Aa, {
                    scope: ["info"],
                    payload: {
                        limit: 7,
                        offset: 0,
                        search_query: t
                    }
                }).then(t => t.payload["info"])
            }
            async getAssetFullInfo(t) {
                return Ba(Aa, {
                    scope: ["full-info"],
                    payload: {
                        asset_code: t,
                        currency: "usd"
                    }
                }).then(t => t.payload["full-info"])
            }
            async getAssetStats(t, e) {
                return Ba(Aa, {
                    scope: ["stats"],
                    payload: {
                        addresses: t,
                        asset_code: e,
                        currency: "usd"
                    }
                }).then(t => t.payload["stats"])
            }
            async getAssetPrices(t) {
                return Ba(Aa, {
                    scope: ["prices"],
                    payload: {
                        asset_codes: [t],
                        currency: "usd"
                    }
                }).then(t => t.payload["prices"])
            }
            async getAssetCharts(t, e) {
                return Ba(Aa, {
                    scope: ["charts"],
                    payload: {
                        asset_codes: [t],
                        charts_type: e,
                        currency: "usd"
                    }
                }).then(t => t.payload["charts"])
            }
            async getCharts(t, e) {
                return Ba(Sa, {
                    scope: ["charts"],
                    payload: {
                        addresses: t,
                        currency: "usd",
                        charts_type: e,
                        charts_max_assets: 0,
                        charts_min_percentage: 100
                    }
                }).then(t => t.payload)
            }
        }
        var Ea = new Ia,
            La = {
                name: "ActiveList",
                components: {},
                computed: { ...Object(E["c"])({
                        liveList: "watches/liveList",
                        pastList: "watches/pastList"
                    }),
                    watches() {
                        return this[this.tab + "List"]
                    }
                },
                watch: {
                    liveList() {
                        this.liveList && this.refreshChart()
                    }
                },
                async mounted() {
                    window.Chart.defaults.global.elements.point.backgroundColor = "rgba(255, 0, 0, 1)", window.Chart.defaults.global.elements.point.borderWidth = 5, window.Chart.defaults.global.elements.point.radius = .5, window.Chart.defaults.global.elements.point.hoverRadius = 5, window.Chart.defaults.global.aspectRatio = 6, window.Chart.defaults.global.responsive = !0, window.Chart.defaults.global.maintainAspectRatio = !1, window.Chart.defaults.global.plugins.legend = {
                        display: !1
                    }, window.Chart.defaults.scale.position = "right", window.Chart.defaults.scale.gridLines.display = !1, window.Chart.defaults.scale.display = !1, window.Chart.defaults.global.legend.display = !1, window.Chart.defaults.global.legend.labels.generateLabels = function() {
                        return ""
                    }, window.Chart.defaults.global.legendCallback = function() {
                        return ""
                    }, window.Chart.defaults.global.tooltips.callbacks.label = function() {
                        return ""
                    }, window.Chart.defaults.global.tooltips.callbacks.title = function() {
                        return ""
                    }, window.Chart.defaults.global.tooltips.backgroundColor = "rgba(255,0,0,0.8)", this.chartData = {}, this.refreshChart(), this.timer = setInterval(this.refreshChart, 1e4)
                },
                beforeDestroy() {
                    this.timer && clearInterval(this.timer)
                },
                methods: { ...Object(E["b"])({
                        fetch: "watches/fetch",
                        delete: "watches/delete"
                    }),
                    refreshChart() {
                        this.liveList && 0 != this.liveList.length && ((new Date).getTime() < this.lastTimeRefresh + 9e3 || (this.lastTimeRefresh = (new Date).getTime(), this.liveList.map(t => {
                            const e = t.get("address").toLowerCase();
                            Ea.getAssetCharts(e, "d").then(a => {
                                const s = a[e];
                                s && s.length ? n["default"].set(this.chartData, t.get("address"), s) : n["default"].set(this.chartData, t.get("address"), [])
                            })
                        })))
                    },
                    getPrice(t, e) {
                        if (!this.chartData[t.get("address")]) return e ? 0 : "_";
                        const a = this.chartData[t.get("address")];
                        if (0 == a.length) return e ? 0 : "_";
                        let n = a[0][1];
                        if (e) return n;
                        if (n < 1) {
                            n = n.toString();
                            let t = 2;
                            for (; t < n.length; t++)
                                if (0 != n[t]) break;
                            return "$" + n.slice(0, t) + n.slice(t, t + 3)
                        }
                        const s = new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD"
                        });
                        return s.format(n)
                    },
                    getMarketCap(t) {
                        try {
                            const e = this.getPrice(t, !0);
                            let a = BigInt(e * 10 ** 30) * BigInt(t.get("totalSupply")) / BigInt(10 ** t.get("decimals")) / BigInt(10 ** 30);
                            const n = (t, e) => {
                                if (t = parseFloat(t), 0 == t) return t;
                                if (t < 1e3) return parseFloat(t.toFixed(5));
                                e || (e = 3);
                                const a = [{
                                        value: 1,
                                        symbol: ""
                                    }, {
                                        value: 1e3,
                                        symbol: "k"
                                    }, {
                                        value: 1e6,
                                        symbol: "M"
                                    }, {
                                        value: 1e9,
                                        symbol: "G"
                                    }, {
                                        value: 1e12,
                                        symbol: "T"
                                    }, {
                                        value: 1e15,
                                        symbol: "P"
                                    }, {
                                        value: 1e18,
                                        symbol: "E"
                                    }],
                                    n = /\.0+$|(\.[0-9]*[1-9])0+$/;
                                var s = a.slice().reverse().find((function(e) {
                                    return t >= e.value
                                }));
                                return s ? parseFloat((t / s.value).toFixed(e)).toString().replace(n, "$1") + s.symbol : "0"
                            };
                            return n(a)
                        } catch (e) {
                            return "_"
                        }
                    },
                    getNetwork() {
                        return qt.getNetwork()
                    },
                    openChart(t) {
                        const e = this.getNetwork().dextool + t.get("address");
                        window.open(e)
                    },
                    formatAddress(t) {
                        return j.formatAddress(t)
                    },
                    deleteWatch(t) {
                        this.delete({
                            address: t.get("address"),
                            type: this.tab
                        })
                    },
                    goToDetails(t) {
                        this.$router.push({
                            name: "Contract",
                            params: {
                                address: t.get("address")
                            }
                        })
                    },
                    switchTab(t) {
                        this.tab = t
                    }
                },
                data() {
                    return {
                        tab: "live",
                        chartData: {},
                        lastTimeRefresh: 0,
                        timer: null
                    }
                }
            },
            Pa = La,
            Da = Object(Qt["a"])(Pa, ba, va, !1, null, "4a552454", null),
            Na = Da.exports,
            ja = {
                name: "Home",
                components: {
                    ActiveList: Na,
                    AlertModal: Re
                },
                computed: { ...Object(E["c"])(["account", "balance"])
                },
                watch: {},
                async mounted() {
                    this.setActive(null);
                    let t = parseInt(localStorage.getItem("hasShownGasLimitHelper") || 0);
                    console.log(t), isNaN(t) && (t = 0), t < 2 && (this.alertModalTitle = "Warning", this.alertModalIcon = "warning", this.alertModalActive = !0, this.alertModalContent = "There is a new setting called Gas Limit on Transaction Configuration panel. You can now set the maximum gas amount that you are willing to spend for Buy/Sell or Copy Trading", this.alertModalBtnOk = "Ok", localStorage.setItem("hasShownGasLimitHelper", t + 1))
                },
                methods: { ...Object(E["b"])({
                        setActive: "contracts/setActive"
                    })
                },
                data() {
                    return {
                        alertModalTitle: "",
                        alertModalIcon: "success",
                        alertModalActive: !1,
                        alertModalContent: "",
                        alertModalBtnOk: "",
                        alertModalCallback: null
                    }
                }
            },
            Fa = ja,
            Ra = Object(Qt["a"])(Fa, ha, fa, !1, null, "c13c13fe", null),
            $a = Ra.exports,
            Wa = function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("target-list"), e("history-list", {
                    staticStyle: {
                        "margin-top": "16px"
                    },
                    attrs: {
                        hasNoFunctions: !0
                    }
                })], 1)
            },
            Ha = [],
            Ga = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticStyle: {
                        "margin-top": "16px"
                    }
                }, [e("div", {
                    staticClass: "card"
                }, [e("div", {
                    staticClass: "card-body p-0 py-4",
                    attrs: {
                        id: "sub-account-table-card"
                    }
                }, [e("div", {
                    staticClass: "d-flex justify-content-between px-4 pb-3"
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Targets")]), e("div", {
                    staticClass: "d-flex"
                }, [t.getLevel().canCopyTrade() ? [t.isWatch ? e("a", {
                    staticClass: "zoom",
                    staticStyle: {
                        width: "30px",
                        "margin-right": "20px"
                    },
                    on: {
                        click: t.handleWatch
                    }
                }, [e("img", {
                    attrs: {
                        src: "img/unwatch.svg"
                    }
                })]) : e("a", {
                    staticClass: "zoom",
                    staticStyle: {
                        width: "30px",
                        "margin-right": "20px"
                    },
                    on: {
                        click: t.handleWatch
                    }
                }, [e("img", {
                    attrs: {
                        src: "img/watch.svg"
                    }
                })])] : t._e(), t.isCreatingSub ? e("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "img/spinner.svg"
                    }
                }) : e("a", {
                    staticClass: "zoom",
                    attrs: {
                        "data-mdb-toggle": "modal",
                        "data-mdb-target": "#staticBackdrop1"
                    },
                    on: {
                        click: t.handleCreate
                    }
                }, [e("img", {
                    attrs: {
                        src: "img/plus.svg"
                    }
                })])], 2)]), t.targets.length > 0 ? e("div", {
                    staticClass: "table-responsive"
                }, [e("table", {
                    staticClass: "table m-0",
                    attrs: {
                        id: "table2"
                    }
                }, [t._m(0), e("tbody", t._l(t.targets, (function(a) {
                    return e("tr", {
                        key: a.id
                    }, [e("td", {
                        staticClass: "text-center",
                        staticStyle: {
                            "padding-left": "20px",
                            "padding-right": "0"
                        }
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.activeTargets[a.get("address")],
                            expression: "activeTargets[target.get('address')]"
                        }],
                        staticClass: "form-check-input",
                        attrs: {
                            type: "checkbox",
                            "aria-label": "..."
                        },
                        domProps: {
                            checked: Array.isArray(t.activeTargets[a.get("address")]) ? t._i(t.activeTargets[a.get("address")], null) > -1 : t.activeTargets[a.get("address")]
                        },
                        on: {
                            change: function(e) {
                                var n = t.activeTargets[a.get("address")],
                                    s = e.target,
                                    i = !!s.checked;
                                if (Array.isArray(n)) {
                                    var o = null,
                                        r = t._i(n, o);
                                    s.checked ? r < 0 && t.$set(t.activeTargets, a.get("address"), n.concat([o])) : r > -1 && t.$set(t.activeTargets, a.get("address"), n.slice(0, r).concat(n.slice(r + 1)))
                                } else t.$set(t.activeTargets, a.get("address"), i)
                            }
                        }
                    })]), e("td", [t._v(t._s(a.get("name") || "NoName"))]), e("td", {
                        staticStyle: {
                            cursor: "pointer"
                        },
                        on: {
                            click: function(e) {
                                t.copyToClipboard(a.get("address"))
                            }
                        }
                    }, [t._v(t._s(t.formatAddress(a.get("address"))) + "...")]), e("td", [t._v(t._s(t.formatBalance(a.balance)))]), e("td", [e("div", {
                        staticClass: "edit"
                    }, [t.isEditing[a.get("address")] ? e("img", {
                        staticClass: "loading-icon",
                        attrs: {
                            src: "img/spinner.svg"
                        }
                    }) : e("a", {
                        staticClass: "me-2",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            title: "Edit"
                        },
                        on: {
                            click: function(e) {
                                return t.handleEdit(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/Edit.svg"
                        }
                    })]), e("a", {
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            title: "Delete"
                        },
                        on: {
                            click: function(e) {
                                return t.handleDelete(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/Delete.svg"
                        }
                    })]), e("a", {
                        staticStyle: {
                            "margin-left": "5px"
                        },
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            title: "Edit Excludes"
                        },
                        on: {
                            click: function(e) {
                                return t.handleEditExclude(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/exclude.png"
                        }
                    })])])])])
                })), 0)]), t.getLevel().canCopyTrade() ? e("div", {
                    staticClass: "p-4 d-flex justify-content-center"
                }, [t._v(" You can set exclusion tokens on a per-account basis by clicking the Exclusions icon next to the Delete button. Click Watch to activate CopyTrading. ")]) : e("div", {
                    staticClass: "p-1 d-flex justify-content-center"
                }, [t._v(" Please purchase more $SNIPE to use this feature. ")])]) : e("div", {
                    staticClass: "px-4"
                }, [t._v(" Please create a target to copy trading ")])])]), e("confirm-modal", {
                    attrs: {
                        title: t.confirmTitle,
                        content: t.confirmContent,
                        icon: t.confirmIcon,
                        active: t.confirmActive,
                        callback: t.confirmCallback
                    },
                    on: {
                        cancel: function(e) {
                            t.confirmActive = !1
                        }
                    }
                }), e("input-modal", {
                    attrs: {
                        title: t.inputModalTitle,
                        active: t.inputModalActive,
                        btnOk: t.inputModalBtnOk,
                        btnCancel: t.inputModalBtnCancel,
                        callback: t.inputModalCallback,
                        fields: t.inputModalFields
                    },
                    on: {
                        cancel: function(e) {
                            t.inputModalActive = !1
                        }
                    }
                }), e("alert-modal", {
                    attrs: {
                        title: t.alertModalTitle,
                        icon: t.alertModalIcon,
                        active: t.alertModalActive,
                        content: t.alertModalContent,
                        btnOk: t.alertModalBtnOk,
                        callback: t.alertModalCallback
                    },
                    on: {
                        ok: function(e) {
                            t.alertModalActive = !1
                        }
                    }
                }), e("edit-trigger-modal", {
                    attrs: {
                        callback: t.editTriggerModalCallback,
                        active: t.editTriggerModalActive,
                        templates: t.templates,
                        target: t.editTriggerModalTarget
                    },
                    on: {
                        cancel: function(e) {
                            t.editTriggerModalActive = !1
                        }
                    }
                }), e("ExcludeModal", {
                    attrs: {
                        active: t.excludeModalActive,
                        target: t.activeTarget
                    },
                    on: {
                        close: function(e) {
                            t.excludeModalActive = !1
                        }
                    }
                })], 1)
            },
            Ua = [function() {
                var t = this,
                    e = t._self._c;
                return e("thead", [e("tr", [e("th", {
                    staticStyle: {
                        padding: "0px"
                    },
                    attrs: {
                        width: "70"
                    }
                }), e("th", [t._v("Name")]), e("th", [t._v("Address")]), e("th", [t._v("Balance")]), e("th", [t._v("Function")])])])
            }],
            qa = function() {
                var t = this,
                    e = t._self._c;
                return e("Modal", {
                    attrs: {
                        active: t.active
                    },
                    on: {
                        close: t.handleCancel
                    }
                }, [e("div", {
                    attrs: {
                        id: "staticBackdrop4",
                        "data-mdb-backdrop": "static",
                        "data-mdb-keyboard": "false",
                        tabindex: "-1",
                        "aria-labelledby": "staticBackdropLabel",
                        "aria-hidden": "true"
                    }
                }, [e("div", {
                    staticClass: "modal-dialog-centered model-width1"
                }, [e("div", {}, [e("div", {
                    staticClass: "modal-body px-4"
                }, [e("div", {
                    staticClass: "text-center"
                }, [e("h3", {
                    staticClass: "mt-4 mb- fs20"
                }, [e("b", [t._v("Trigger functions")])]), e("p", [t._v("Select at least one of these functions to copy target's trading behavior.")])]), e("div", {
                    staticClass: "d-flex justify-content-between flex-wrap align-content-center mt-4"
                }, [e("div", {
                    staticClass: "col-xl-6 col-6 text-center"
                }, [e("a", {
                    staticClass: "btn btn-outline-black outline-gray d-block me-2",
                    attrs: {
                        "data-mdb-dismiss": "modal"
                    },
                    on: {
                        click: t.handleCancel
                    }
                }, [t._v("Cancel")])]), e("div", {
                    staticClass: "col-xl-6 col-6 d-flex text-center"
                }, [e("a", {
                    staticClass: "btn btn-black d-block w-100 ms-2",
                    on: {
                        click: t.handleOk
                    }
                }, [t._v("Save")])])])])])])])])
            },
            Va = [],
            za = {
                name: "ConfirmModal",
                props: {
                    callback: {},
                    active: {
                        type: Boolean
                    },
                    target: {
                        type: Object
                    },
                    templates: {
                        type: Array
                    }
                },
                components: {
                    Modal: fe
                },
                computed: { ...Object(E["c"])({})
                },
                watch: {},
                beforeDestroy() {},
                async mounted() {},
                methods: {
                    handleCancel() {
                        this.$emit("cancel")
                    },
                    handleOk() {
                        this.callback ? this.callback() : this.$emit("ok")
                    }
                },
                data() {
                    return {}
                }
            },
            Qa = za,
            Ya = Object(Qt["a"])(Qa, qa, Va, !1, null, "45098cde", null),
            Ka = Ya.exports,
            Ja = function() {
                var t = this,
                    e = t._self._c;
                return e("Modal", {
                    attrs: {
                        active: t.active
                    },
                    on: {
                        close: t.handleClose
                    }
                }, [e("div", {
                    attrs: {
                        id: "staticBackdrop1",
                        "data-mdb-backdrop": "static",
                        "data-mdb-keyboard": "false",
                        tabindex: "-1",
                        "aria-labelledby": "staticBackdropLabel",
                        "aria-hidden": "true"
                    }
                }, [e("div", {
                    staticClass: "modal-body py-3 px-4"
                }, [t.isLoaded ? e("div", [e("div", {
                    staticStyle: {
                        color: "black",
                        "font-weight": "900",
                        "font-size": "20px",
                        margin: "20px"
                    }
                }, [t._v(" Excluded Tokens List "), e("img", {
                    staticClass: "action-icon bounce",
                    staticStyle: {
                        width: "25px",
                        height: "25px",
                        "margin-left": "15px",
                        cursor: "pointer"
                    },
                    attrs: {
                        src: "img/question.svg"
                    },
                    on: {
                        click: t.showHelp
                    }
                })]), e("div", {
                    staticStyle: {
                        "max-height": "500px",
                        "overflow-y": "auto"
                    }
                }, [e("table", {
                    staticClass: "table m-0 w-100"
                }, [e("thead", [e("tr", [e("th", [t._v("Address")]), e("th", [t._v("Name")]), e("th")])]), e("tbody", t._l(t.tokens, (function(a) {
                    return e("tr", {
                        key: a.address
                    }, [e("td", [t._v(t._s(t.formatAddress(a.address)))]), e("td", [t._v(t._s(a.name))]), e("td", [e("a", {
                        staticClass: "me-2",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-placement": "bottom",
                            title: "Delete"
                        },
                        on: {
                            click: function(e) {
                                return t.handleDelete(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/Delete.svg"
                        }
                    })])])])
                })), 0)])]), e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center mt-4 mb-0"
                }, [e("a", {
                    staticClass: "btn-theme",
                    staticStyle: {
                        width: "120px"
                    },
                    on: {
                        click: t.handleCreate
                    }
                }, [t._v(t._s(t.btnCreate))]), e("a", {
                    staticClass: "btn-theme",
                    staticStyle: {
                        width: "120px"
                    },
                    on: {
                        click: t.handleUpdate
                    }
                }, [t._v(t._s(t.btnUpdate))])])]) : e("div", [t._v(" Loading... ")])])]), e("input-modal", {
                    attrs: {
                        title: t.inputModalTitle,
                        active: t.inputModalActive,
                        btnOk: t.inputModalBtnOk,
                        btnCancel: t.inputModalBtnCancel,
                        callback: t.inputModalCallback,
                        fields: t.inputModalFields
                    },
                    on: {
                        cancel: function(e) {
                            t.inputModalActive = !1
                        }
                    }
                })], 1)
            },
            Xa = [],
            Za = {
                name: "ExcludeModal",
                props: ["target", "active"],
                components: {
                    Modal: fe,
                    InputModal: Le
                },
                computed: { ...Object(E["c"])({})
                },
                watch: {
                    async active() {
                        this.isLoaded = !1, this.btnUpdate = "Save", this.active && (this.tokens = this.target.get("excludes") || [], this.isLoaded = !0)
                    }
                },
                beforeDestroy() {},
                async mounted() {},
                methods: { ...Object(E["b"])({
                        fetchContract: "contracts/get"
                    }),
                    showHelp() {
                        this.handleClose(), window.Intercom("showArticle", 6208204)
                    },
                    handleDelete(t) {
                        this.tokens = this.tokens.filter(e => e.address.toLowerCase() != t.address.toLowerCase())
                    },
                    handleCreate() {
                        this.inputModalActive = !0, this.inputModalBtnOk = "Create", this.inputModalBtnCancel = "Cancel", this.inputModalFields = [{
                            label: "Token Address",
                            name: "address",
                            model: ""
                        }], this.inputModalTitle = "Create excluded token", this.inputModalCallback = async () => {
                            const t = this.inputModalFields[0].model;
                            if (qt.isAddress(t))
                                if (this.tokens.filter(e => e.address.toLowerCase() == t.toLowerCase()).length > 0) this.$toast.error("Token already exists", {
                                    position: "top-right",
                                    timeout: 2e3,
                                    closeOnClick: !0
                                });
                                else {
                                    this.inputModalActive = !1, this.btnCreate = "Creating...";
                                    try {
                                        const e = await this.fetchContract(t);
                                        this.tokens.push({
                                            address: t,
                                            name: e.get("name")
                                        }), this.$toast("An exclude created successfully", {
                                            position: "top-right",
                                            timeout: 2e3,
                                            closeOnClick: !0
                                        })
                                    } catch (e) {
                                        this.$toast.error("There was an issue creating an exclude. Please try again", {
                                            position: "top-right",
                                            timeout: 2e3,
                                            closeOnClick: !0
                                        })
                                    }
                                    this.btnCreate = "Create"
                                }
                            else this.$toast.error("Invalid address", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            })
                        }
                    },
                    async handleUpdate() {
                        this.target.set("excludes", this.tokens), this.btnUpdate = "Saving...";
                        try {
                            await this.target.save()
                        } catch (t) {
                            this.$toast.error("There was an error. Please try again", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            }), this.btnUpdate = "Retry"
                        }
                        this.btnUpdate = "Save", this.handleClose()
                    },
                    formatAddress(t) {
                        return j.formatAddress(t)
                    },
                    handleClose() {
                        this.$emit("close")
                    }
                },
                data() {
                    return {
                        tokens: [],
                        isLoaded: !1,
                        btnUpdate: "Save",
                        btnCreate: "Create",
                        inputModalFields: [],
                        inputModalActive: !1,
                        inputModalTitle: "",
                        inputModalCallback: null,
                        inputModalBtnOk: "Yes",
                        inputModalBtnCancel: "Cancel"
                    }
                }
            },
            tn = Za,
            en = (a("f9d1"), Object(Qt["a"])(tn, Ja, Xa, !1, null, "66bf71b0", null)),
            an = en.exports,
            nn = {
                name: "TargetList",
                components: {
                    ConfirmModal: Ae,
                    InputModal: Le,
                    AlertModal: Re,
                    EditTriggerModal: Ka,
                    ExcludeModal: an
                },
                computed: { ...Object(E["c"])({
                        targets: "targets/list",
                        templates: "targets/templates",
                        txConfig: "transactions/config"
                    })
                },
                watch: {},
                beforeDestroy() {
                    ce.stop()
                },
                async mounted() {
                    await this.fetch()
                },
                methods: { ...Object(E["b"])({
                        fetchTemplate: "targets/fetchTemplate",
                        fetch: "targets/fetch",
                        create: "targets/create",
                        edit: "targets/edit",
                        delete: "targets/delete"
                    }),
                    handleSimulate() {
                        const t = !0,
                            e = {
                                timeStamp: "2022-05-11T02:14:35.518Z",
                                categoryCode: "activeAddress",
                                eventCode: "txPool",
                                dappId: "e72e44c7-d688-4e0e-82a1-6ceb410b2992",
                                blockchain: {
                                    system: "ethereum",
                                    network: "rinkeby"
                                },
                                contractCall: {
                                    contractType: "multicall",
                                    contractAddress: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                                    methodName: "multicall",
                                    params: {
                                        deadline: "1652237008",
                                        data: ["0x5ae401dc000000000000000000000000000000000000000000000000000000006282af3b00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000e4472b43f300000000000000000000000000000000000000000000000006f05b59d3b2000000000000000000000000000000000000000000000000000000042bab17e9331f00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000045666d334c90c63b9a9f124609dbbc9cfae3830000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000bed85cf4c249bd5fc187af600d652dd2beefddea00000000000000000000000000000000000000000000000000000000"]
                                    },
                                    subCalls: [{
                                        data: null,
                                        contractType: null
                                    }]
                                },
                                transaction: {
                                    status: "pending",
                                    monitorId: "Geth_4_D_PROD",
                                    monitorVersion: "0.114.3",
                                    pendingTimeStamp: "2022-05-11T02:14:35.518Z",
                                    pendingBlockNumber: 10655119,
                                    hash: "0x5a3cc9e104ee95e3aecb288110bb2bd252cdc04db391d2bf8a189535fa4b84e9",
                                    from: "0x0045666d334c90c63b9a9f124609dbbc9cfae383",
                                    to: "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
                                    value: "1000000000000000",
                                    gas: 246362,
                                    nonce: 28,
                                    blockHash: null,
                                    blockNumber: null,
                                    v: "0x1",
                                    r: "0x66f18ae64c0ff7b3e2a8cec6244f454608a32361e15ffde1bdf4743a4f6be293",
                                    s: "0x2627f3b8d6e53b4e36d20a9f21fb6410e1c922c8281535f5802e37ef8e1d05b2",
                                    input: "0x5ae401dc000000000000000000000000000000000000000000000000000000006282af3b00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000e4472b43f300000000000000000000000000000000000000000000000006f05b59d3b2000000000000000000000000000000000000000000000000000000042bab17e9331f00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000045666d334c90c63b9a9f124609dbbc9cfae3830000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000bed85cf4c249bd5fc187af600d652dd2beefddea00000000000000000000000000000000000000000000000000000000",
                                    type: 2,
                                    maxFeePerGas: "2013555873",
                                    maxFeePerGasGwei: 2.01,
                                    maxPriorityFeePerGas: "1500000000",
                                    maxPriorityFeePerGasGwei: 1.5,
                                    transactionIndex: null,
                                    asset: "",
                                    watchedAddress: "0x8f52b715ac8c4f8f567f9f04d4c6a041a29f2181",
                                    direction: "outgoing",
                                    counterparty: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"
                                }
                            },
                            a = {
                                timeStamp: "2022-05-11T00:25:09.453Z",
                                categoryCode: "activeAddress",
                                eventCode: "txPool",
                                dappId: "e72e44c7-d688-4e0e-82a1-6ceb410b2992",
                                blockchain: {
                                    system: "ethereum",
                                    network: "rinkeby"
                                },
                                contractCall: {
                                    contractType: "Uniswap V2: Router02",
                                    contractAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                                    methodName: "swapExactTokensForETHSupportingFeeOnTransferTokens",
                                    params: {
                                        amountIn: "2101881211557745845375620",
                                        amountOutMin: "0",
                                        path: ["0x084406A54bB53a465Bf6bBB2Dc9141A61A64aA17", "0xc778417E063141139Fce010982780140Aa0cD5Ab"],
                                        to: "0x8F52b715Ac8c4f8f567F9f04d4C6A041a29f2181",
                                        deadline: "1652228966558"
                                    }
                                },
                                transaction: {
                                    status: "confirmed",
                                    monitorId: "Geth_4_D_PROD",
                                    monitorVersion: "0.114.3",
                                    pendingTimeStamp: "2022-05-11T00:25:09.453Z",
                                    pendingBlockNumber: 10654682,
                                    hash: "0x544eb9e27071b32f2e8ba81ab45dad686ecd7dab6d6710b6fda7ac9cf9dd3d677",
                                    from: "0x8F52b715Ac8c4f8f567F9f04d4C6A041a29f2181",
                                    to: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                                    value: "0",
                                    gas: 553830,
                                    nonce: 14,
                                    blockHash: null,
                                    blockNumber: null,
                                    v: "0x1",
                                    r: "0x329079901ee490b021f4068d007c6e313d5b54331f9fd9f9cb372c96fb29c83",
                                    s: "0x12e3d0134e68b50e909c81e47acf90678b41408619fce1a35339f986395f9ab5",
                                    input: "0x791ac94700000000000000000000000000000000000000000001bd17357383d548dc9284000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000008f52b715ac8c4f8f567f9f04d4c6a041a29f218100000000000000000000000000000000000000000000000000000180b085489e0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000084406a54bb53a465bf6bbb2dc9141a61a64aa17000000000000000000000000c778417e063141139fce010982780140aa0cd5ab",
                                    type: 2,
                                    maxFeePerGas: "1007076764",
                                    maxFeePerGasGwei: 1.01,
                                    maxPriorityFeePerGas: "1007076764",
                                    maxPriorityFeePerGasGwei: 1.01,
                                    transactionIndex: null,
                                    asset: "",
                                    watchedAddress: "0x8f52b715ac8c4f8f567f9f04d4c6a041a29f2181",
                                    direction: "outgoing",
                                    counterparty: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
                                }
                            };
                        let n;
                        n = t ? e : a;
                        const s = t => {
                            for (var e = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = a.length, s = 0; s < t; s++) e += a.charAt(Math.floor(Math.random() * n));
                            return e
                        };
                        n.transaction.hash = s(5);
                        const i = B.getClass("History"),
                            o = new i;
                        o.set("data", n), o.set("owner", n.transaction.from), o.set("status", n.transaction.status), o.set("hash", n.transaction.hash), o.set("contract", this.contract), I.$emit(W, o)
                    },
                    getLevel() {
                        return qt.getLevel()
                    },
                    getNetwork() {
                        return qt.getNetwork()
                    },
                    formatAddress(t) {
                        return j.formatAddress(t)
                    },
                    copyToClipboard(t) {
                        this.$toast("Address copied to clipboard", {
                            position: "top-right",
                            timeout: 2e3,
                            closeOnClick: !0
                        }), j.copyToClipboard(t)
                    },
                    formatBalance(t, e) {
                        return t ? j.formatBalance(t, e) : "_"
                    },
                    getActiveTargets() {
                        const t = [];
                        return this.targets.map(e => {
                            this.activeTargets[e.get("address")] && t.push(e)
                        }), t
                    },
                    handleWatch() {
                        const t = this.getActiveTargets(),
                            e = this.txConfig.copyRouters,
                            a = qt.getDexList(),
                            n = e.map(t => a[t].router);
                        return 0 == t.length ? (this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Please select at least one target", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null)) : t.length > 3 ? (this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "You can't watch more than 3 targets", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null)) : 0 == n.length ? (this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Please select at least one router", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null)) : 0 == He.getActiveAccounts().length ? (this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "Please select at least one account", this.alertModalBtnOk = "Ok", void(this.alertModalCallback = null)) : void(this.isWatch ? (ce.stop(), this.isWatch = !1) : (ce.listenTargets(t.map(t => t.get("address")), n), this.isWatch = !0))
                    },
                    handleCreate() {
                        this.inputModalActive = !0, this.inputModalBtnOk = "Create", this.inputModalBtnCancel = "Cancel", this.inputModalFields = [{
                            label: "Name",
                            name: "name",
                            model: "Target " + (this.targets.length + 1)
                        }, {
                            label: "Address",
                            name: "address",
                            model: ""
                        }], this.inputModalTitle = "Create a target", this.inputModalCallback = async () => {
                            if (qt.isAddress(this.inputModalFields[1].model)) {
                                this.inputModalActive = !1, this.isCreatingSub = !0;
                                try {
                                    await this.create({
                                        name: this.inputModalFields[0].model,
                                        address: this.inputModalFields[1].model
                                    }), this.$toast("A target created successfully", {
                                        position: "top-right",
                                        timeout: 2e3,
                                        closeOnClick: !0
                                    })
                                } catch (t) {
                                    this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an issue creating a target. Please try again", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                                }
                                this.isCreatingSub = !1
                            } else this.$toast.error("Invalid address", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            })
                        }
                    },
                    handleEditExclude(t) {
                        this.activeTarget = t, this.excludeModalActive = !0
                    },
                    handleEditTrigger(t) {
                        this.editTriggerModalActive = !0, this.editTriggerModalTarget = t
                    },
                    handleEdit(t) {
                        this.inputModalActive = !0, this.inputModalBtnOk = "Save", this.inputModalBtnCancel = "Cancel", this.inputModalFields = [{
                            label: "Name",
                            name: "name",
                            model: t.get("name") || "NoName"
                        }, {
                            label: "Address",
                            name: "address",
                            model: t.get("address")
                        }], this.inputModalTitle = "Edit target", this.inputModalCallback = async () => {
                            if (!qt.isAddress(this.inputModalFields[1].model)) return void this.$toast.error("Invalid address", {
                                position: "top-right",
                                timeout: 2e3,
                                closeOnClick: !0
                            });
                            this.inputModalActive = !1;
                            const e = {};
                            this.inputModalFields.map(t => {
                                e[t.name] = t.model
                            }), n["default"].set(this.isEditing, t.get("address"), !0);
                            try {
                                await this.edit({
                                    target: t,
                                    fields: e
                                }), this.$toast("Target edit was successful", {
                                    position: "top-right",
                                    timeout: 2e3,
                                    closeOnClick: !0
                                })
                            } catch (a) {
                                this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on editing. Please try again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                            }
                            n["default"].set(this.isEditing, t.get("address"), !1)
                        }
                    },
                    async handleDelete(t) {
                        this.confirmTitle = "Confirm", this.confirmContent = "Are you sure you want to remove this target?", this.confirmIcon = "delete-warning", this.confirmActive = !0, this.confirmCallback = async () => {
                            try {
                                await this.delete(t), this.$toast("Target remove successfully", {
                                    position: "top-right",
                                    timeout: 2e3,
                                    closeOnClick: !0
                                })
                            } catch (e) {
                                this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There was an error on deleting. Please try again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                            }
                            this.confirmActive = !1
                        }
                    }
                },
                data() {
                    return {
                        isWatch: !1,
                        excludeModalActive: !1,
                        activeTarget: null,
                        isCreatingSub: !1,
                        isEditing: {},
                        activeTargets: {},
                        confirmActive: !1,
                        confirmTitle: "",
                        confirmContent: "",
                        confirmCallback: null,
                        confirmIcon: "info",
                        inputModalFields: [],
                        inputModalActive: !1,
                        inputModalTitle: "",
                        inputModalCallback: null,
                        inputModalBtnOk: "Yes",
                        inputModalBtnCancel: "Cancel",
                        editTriggerModalActive: !1,
                        editTriggerModalCallback: null,
                        editTriggerModalTarget: null,
                        alertModalTitle: "",
                        alertModalIcon: "success",
                        alertModalActive: !1,
                        alertModalContent: "",
                        alertModalBtnOk: "",
                        alertModalCallback: null
                    }
                }
            },
            sn = nn,
            on = (a("bd65"), Object(Qt["a"])(sn, Ga, Ua, !1, null, "b18190da", null)),
            rn = on.exports,
            ln = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "card"
                }, [e("div", {
                    staticClass: "card-body p-4"
                }, [e("div", {
                    staticClass: "d-flex justify-content-between"
                }, [e("h2", [t._v("Transactions")]), t.contract ? e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center",
                    staticStyle: {
                        width: "100px",
                        "margin-top": "-10px"
                    }
                }, [e("a", {
                    staticClass: "w-100 btn-theme btn-w ms-0",
                    on: {
                        click: function(e) {
                            return t.setAbi()
                        }
                    }
                }, [t._v("Set ABI")])]) : t._e()]), t._l(t.histories, (function(a) {
                    return e("div", {
                        key: a.id,
                        staticClass: "border4 mt-5"
                    }, [e("div", {
                        staticClass: "d-flex border amenu align-items-center justify-content-between flex-wrap"
                    }, [e("a", {
                        staticClass: "btn-full",
                        style: "background:" + t.getNonceColor(a)
                    }, [t._v("Nonce: " + t._s(a.get("data").transaction.nonce))]), e("p", {
                        staticClass: "pe-1"
                    }, [t._v("From: " + t._s(t.formatAddress(a.get("data").transaction.from)))]), e("div", {
                        staticClass: "border-end h100p"
                    }), e("p", {
                        staticClass: "pe-1"
                    }, [t._v("To: " + t._s(t.formatAddress(a.get("data").transaction.to)))]), t.hasNoFunctions ? t._e() : e("div", {
                        staticClass: "button-text d-flex justify-content-center align-items-center",
                        style: "pending" != t.getTransactionDetails(a).status ? "visibility: hidden!important;" : ""
                    }, [e("a", {
                        staticClass: "btn-theme btn-w ms-0",
                        on: {
                            click: function(e) {
                                return t.handleBuy(a)
                            }
                        }
                    }, [t._v("Buy")]), e("a", {
                        staticClass: "btn-theme btn-w ms-2",
                        on: {
                            click: function(e) {
                                return t.handleSell(a)
                            }
                        }
                    }, [t._v("Sell")])])]), e("div", {
                        staticClass: "d-flex p-3 pb-0 flex-wrap"
                    }, [e("span", {
                        staticClass: "me-3"
                    }, [t._v("Method :")]), e("a", {
                        staticClass: "border-theme"
                    }, [t._v(t._s(t.getTransactionDetails(a).method ? t.getTransactionDetails(a).method : t.getTransactionDetails(a).selector))]), t.isWarn(a, t.getTransactionDetails(a)) ? e("span", [e("b", {
                        staticClass: "text-danger ms-3"
                    }, [t._v("WARN")])]) : t._e(), e("p", {
                        staticClass: "m-0 ms-3"
                    }, [t._v("Time: " + t._s(t.getTime(a)))])]), e("div", {
                        staticClass: "code-select p-3 pt-0"
                    }, [e("VueJsonPretty", {
                        staticStyle: {
                            "max-width": "800px",
                            "overflow-x": "auto"
                        },
                        attrs: {
                            path: "res",
                            data: t.getTransactionDetails(a)
                        }
                    })], 1)])
                }))], 2), e("input-modal", {
                    attrs: {
                        title: t.inputModalTitle,
                        active: t.inputModalActive,
                        btnOk: t.inputModalBtnOk,
                        btnCancel: t.inputModalBtnCancel,
                        callback: t.inputModalCallback,
                        fields: t.inputModalFields
                    },
                    on: {
                        cancel: function(e) {
                            t.inputModalActive = !1
                        }
                    }
                })], 1)
            },
            cn = [],
            dn = a("838b"),
            un = a.n(dn),
            pn = {
                name: "HistoryList",
                props: ["contract", "hasNoFunctions"],
                components: {
                    VueJsonPretty: un.a,
                    InputModal: Le
                },
                data() {
                    return {
                        histories: [],
                        colors: {},
                        inputModalFields: [],
                        inputModalActive: !1,
                        inputModalTitle: "",
                        inputModalCallback: null,
                        inputModalBtnOk: "Yes",
                        inputModalBtnCancel: "Cancel"
                    }
                },
                computed: { ...Object(E["c"])({
                        accounts: "accounts/list",
                        txConfig: "transactions/config"
                    })
                },
                watch: {},
                beforeDestroy() {
                    I.$off(W, this.handleNewTx)
                },
                async mounted() {
                    I.$on(W, this.handleNewTx), this.contract && (this.histories = await this.fetch(this.contract.get("address")))
                },
                methods: { ...Object(E["b"])({
                        fetch: "histories/fetch"
                    }),
                    setAbi() {
                        console.log(qt.getAbi(this.contract.get("address"))), this.inputModalActive = !0, this.inputModalBtnOk = "Ok", this.inputModalBtnCancel = "Cancel", this.inputModalFields = [{
                            label: "ABI",
                            model: JSON.stringify(qt.getAbi(this.contract.get("address"))),
                            type: "textarea"
                        }], this.inputModalTitle = "Set ABI", this.inputModalActive = !0, this.inputModalCallback = async () => {
                            this.inputModalActive = !1, qt.setAbi(this.contract.get("address"), JSON.parse(this.inputModalFields[0].model))
                        }
                    },
                    handleNewTx(t) {
                        t.test || this.histories.unshift(t)
                    },
                    formatAddress(t) {
                        return j.formatAddress(t)
                    },
                    handleBuy(t) {
                        I.$emit("buy", {
                            history: t,
                            type: "backrun"
                        })
                    },
                    handleSell(t) {
                        I.$emit("sell", {
                            history: t,
                            type: "frontrun"
                        })
                    },
                    getTime(t) {
                        const e = new Date(t.get("data").timeStamp);
                        return e.toLocaleString()
                    },
                    getNonceColor(t) {
                        const e = t.get("data").transaction.nonce;
                        if (!this.colors[e]) {
                            const t = Math.floor(255 * Math.random()),
                                a = Math.floor(255 * Math.random()),
                                n = Math.floor(255 * Math.random());
                            this.colors[e] = `rgb(${t}, ${a}, ${n});`
                        }
                        return this.colors[e]
                    },
                    isWarn(t, e) {
                        return ie.isWarn(t, this.accounts, e, this.txConfig.warns)
                    },
                    getTransactionDetails(t) {
                        return ie.getDetails(this.contract, t)
                    }
                }
            },
            mn = pn,
            yn = Object(Qt["a"])(mn, ln, cn, !1, null, "f0f22004", null),
            gn = yn.exports,
            hn = {
                name: "CopyTrading",
                components: {
                    TargetList: rn,
                    HistoryList: gn
                },
                computed: { ...Object(E["c"])({
                        txConfig: "transactions/config"
                    })
                },
                mounted() {
                    n["default"].set(this.txConfig, "gasGWei", 0)
                }
            },
            fn = hn,
            bn = Object(Qt["a"])(fn, Wa, Ha, !1, null, null, null),
            vn = bn.exports,
            wn = function() {
                var t = this,
                    e = t._self._c;
                return t.contract ? e("div", [e("div", [e("Details", {
                    attrs: {
                        watch: t.watch,
                        contract: t.contract
                    },
                    on: {
                        update: t.updateWatch
                    }
                })], 1), e("div", [e("PositionList", {
                    staticClass: "mt-4",
                    attrs: {
                        contract: t.contract
                    }
                })], 1), t.getLevel().canSnipe() ? e("div", {
                    staticStyle: {
                        "margin-top": "30px"
                    }
                }, [e("HistoryList", {
                    attrs: {
                        contract: t.contract
                    }
                })], 1) : t._e()]) : e("div", {}, [t._m(0)])
            },
            Tn = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "card"
                }, [e("div", {
                    staticClass: "card-body p-0 p-4",
                    staticStyle: {
                        "font-weight": "900"
                    }
                }, [t._v(" Loading contract details "), e("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "img/spinner.svg"
                    }
                })])])
            }],
            Cn = (a("b83f"), function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "card"
                }, [e("div", {
                    staticClass: "card-body p-0 py-4"
                }, [t._m(0), e("div", {
                    staticClass: "table-responsive"
                }, [e("table", {
                    staticClass: "table m-0 align-items-center border0 w-100"
                }, [t.getLevel().canUseAccount() ? e("tbody", t._l(t.accounts, (function(a) {
                    return e("tr", {
                        key: a.id
                    }, [e("th", {
                        staticStyle: {
                            width: "50px"
                        }
                    }, [t._v("Name:")]), e("td", {
                        staticStyle: {
                            width: "50px",
                            "text-align": "left"
                        }
                    }, [t._v(t._s(a.get("name")))]), e("th", [t._v("Balance:")]), e("td", {
                        staticStyle: {
                            "text-align": "left",
                            "font-weight": "900"
                        }
                    }, [t._v(t._s(t.getBalance(a)) + " / " + t._s(t.getEthValue(a)) + " " + t._s(t.getNetwork().currency))]), e("th", [t._v("TP/SL:")]), e("td", {
                        staticStyle: {
                            "text-align": "left"
                        }
                    }, [t._v(" " + t._s(t.getTp(a)) + " / " + t._s(t.getSl(a)) + " "), t.getLevel().canSetTpSl() ? e("a", {
                        staticClass: "me-2",
                        staticStyle: {
                            "margin-left": "10px"
                        },
                        attrs: {
                            "data-mdb-placement": "bottom",
                            title: "Edit"
                        },
                        on: {
                            click: function(e) {
                                return t.handleEditTpSl(a)
                            }
                        }
                    }, [e("img", {
                        staticClass: "action-icon",
                        attrs: {
                            src: "img/Edit.svg"
                        }
                    })]) : t._e()])])
                })), 0) : e("tbody", [e("tr", [e("th", [t._v("Balance:")]), e("td", {
                    staticStyle: {
                        "text-align": "left",
                        "font-weight": "900"
                    }
                }, [t._v(t._s(t.getBalance(t.wallet)))]), e("th", [t._v(t._s(t.getNetwork().currency) + " Value:")]), e("td", {
                    staticStyle: {
                        "text-align": "left",
                        "font-weight": "900"
                    }
                }, [t._v(t._s(t.getEthValue(t.wallet)) + " " + t._s(t.getNetwork().currency))]), e("th", [t._v("TP/SL:")]), e("td", {
                    staticStyle: {
                        "text-align": "left"
                    }
                }, [t._v(" " + t._s(t.getTp(t.wallet)) + " / " + t._s(t.getSl(t.wallet)) + " "), e("a", {
                    staticClass: "me-2",
                    staticStyle: {
                        "margin-left": "10px"
                    },
                    attrs: {
                        "data-mdb-placement": "bottom",
                        title: "Edit"
                    },
                    on: {
                        click: function(e) {
                            return t.handleEditTpSl(t.wallet)
                        }
                    }
                }, [e("img", {
                    staticClass: "action-icon",
                    attrs: {
                        src: "img/Edit.svg"
                    }
                })])])])])])])]), e("TpSlModal", {
                    attrs: {
                        active: t.tpSlModalActive,
                        balances: t.balances,
                        positions: t.positions,
                        activeAccount: t.tpSlActiveAccount,
                        callback: t.tpSlModalCallback
                    },
                    on: {
                        close: function(e) {
                            t.tpSlModalActive = !1
                        }
                    }
                })], 1)
            }),
            kn = [function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "d-flex justify-content-between align-items-center px-4 pb-3"
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Positions")])])
            }],
            xn = function() {
                var t = this,
                    e = t._self._c;
                return e("Modal", {
                    attrs: {
                        active: t.active
                    },
                    on: {
                        close: t.handleClose
                    }
                }, [e("div", {
                    staticClass: "overflow-hidden pt-4",
                    attrs: {
                        id: "staticBackdrop7",
                        "data-mdb-backdrop": "static",
                        "data-mdb-keyboard": "false",
                        tabindex: "-1",
                        "aria-labelledby": "staticBackdropLabel",
                        "aria-hidden": "true"
                    }
                }, [e("div", {
                    staticClass: "modal-dialog-centered",
                    staticStyle: {
                        width: "350px"
                    }
                }, [e("div", {
                    staticClass: "modal-content"
                }, [e("h2", {
                    staticClass: "text-center d-block textb mb-0 border-bottom"
                }, [t._v("Take Profit / Stop Loss")]), e("div", {
                    staticClass: "modal-body pt-0"
                }, [e("div", {
                    staticClass: "d-flex justify-content-between border-bottom py-3"
                }, [e("div", {
                    staticClass: "col-lg-6 pstart"
                }, [e("p", {
                    staticStyle: {
                        width: "fit-content"
                    }
                }, [t._v("Entry Price")])]), e("div", {
                    staticClass: "col-lg-6 d-flex justify-content-start flex-column align-items-end pend"
                }, [e("p", [e("span", {
                    staticStyle: {
                        "margin-right": "15px"
                    }
                }, [t._v(t._s(t.entry))]), t._v(t._s(t.getNetwork().currency))])])]), e("div", {
                    staticClass: "d-flex justify-content-between flex-wrap mt-4"
                }, [e("div", {
                    staticClass: "col-lg-12 heightpx"
                }, [e("div", {
                    staticClass: "d-flex justify-content-between align-items-center h-100 bg-border p-2"
                }, [e("span", {
                    style: t.isTpValid ? "" : "color: red"
                }, [t._v("Take Profit")]), e("div", {
                    staticClass: "d-flex relative"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.tp,
                        expression: "tp"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        height: "25px",
                        width: "90px",
                        "padding-right": "40px"
                    },
                    attrs: {
                        type: "text",
                        placeholder: "0"
                    },
                    domProps: {
                        value: t.tp
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.tp = e.target.value)
                        }
                    }
                }), e("div", {
                    staticStyle: {
                        position: "absolute",
                        right: "30px"
                    }
                }, [t._v(" " + t._s(t.getNetwork().currency) + " ")])])])]), e("div", {
                    staticClass: "text-entire mt-3"
                }, [e("p", [t._v("When "), e("span", [t._v("Price")]), t._v(" reaches more than "), e("span", [t._v(t._s(parseFloat(t.tp).toFixed(2)))]), t._v(", it will trigger sell. Estimated profit will be "), e("span", {
                    staticClass: "usd"
                }, [t._v(t._s((parseFloat(t.tp) - parseFloat(t.entry)).toFixed(2)) + " " + t._s(t.getNetwork().currency))])])])]), e("div", {
                    staticClass: "d-flex justify-content-between flex-wrap mt-4"
                }, [e("div", {
                    staticClass: "col-lg-12 heightpx"
                }, [e("div", {
                    staticClass: "d-flex justify-content-between align-items-center h-100 bg-border p-2"
                }, [e("span", {
                    style: t.isSlValid ? "" : "color: red"
                }, [t._v("Stop Loss")]), e("div", {
                    staticClass: "d-flex relative"
                }, [e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sl,
                        expression: "sl"
                    }],
                    staticClass: "form-control",
                    staticStyle: {
                        height: "25px",
                        width: "90px",
                        "padding-right": "40px"
                    },
                    attrs: {
                        type: "text",
                        placeholder: "0"
                    },
                    domProps: {
                        value: t.sl
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.sl = e.target.value)
                        }
                    }
                }), e("div", {
                    staticStyle: {
                        position: "absolute",
                        right: "30px"
                    }
                }, [t._v(" " + t._s(t.getNetwork().currency) + " ")])])])]), e("div", {
                    staticClass: "text-entire mt-3 mb-3"
                }, [e("p", [t._v("When "), e("span", [t._v("Price")]), t._v(" reaches below than "), e("span", [t._v(t._s(parseFloat(t.sl).toFixed(2)))]), t._v(", it will trigger sell. Estimated lose will be"), e("span", {
                    staticClass: "usd"
                }, [t._v(" " + t._s((parseFloat(t.entry) - parseFloat(t.sl)).toFixed(2)) + " " + t._s(t.getNetwork().currency))])])]), e("div", {
                    staticClass: "d-flex justify-content-between flex-wrap align-content-center w-100"
                }, [e("div", {
                    staticClass: "col-xl-6 col-6 text-center"
                }, [e("a", {
                    staticClass: "btn btn-outline-black d-block me-2 text-capitalize",
                    attrs: {
                        "data-mdb-dismiss": "modal"
                    },
                    on: {
                        click: t.handleClose
                    }
                }, [t._v("Cancel")])]), e("div", {
                    staticClass: "col-xl-6 col-6 d-flex text-center"
                }, [e("a", {
                    staticClass: "btn btn-black d-block w-100 ms-2 text-capitalize",
                    on: {
                        click: t.handleSave
                    }
                }, [t._v("Confirm")])])])])])])])])])
            },
            _n = [],
            Mn = {
                name: "TpSlModal",
                props: ["active", "callback", "activeAccount", "positions", "balances"],
                components: {
                    Modal: fe
                },
                computed: { ...Object(E["c"])({}),
                    isTpValid() {
                        const t = parseFloat(this.tp);
                        return !isNaN(t) && (0 == t || parseFloat(this.tp) > parseFloat(this.entry))
                    },
                    isSlValid() {
                        const t = parseFloat(this.sl);
                        return !isNaN(t) && (0 == t || parseFloat(this.sl) < parseFloat(this.entry))
                    }
                },
                watch: {
                    activeAccount() {
                        this.tp = this.positions[this.activeAccount.get("address")].tp, this.sl = this.positions[this.activeAccount.get("address")].sl, this.entry = this.balances[this.activeAccount.get("address")].eth
                    }
                },
                beforeDestroy() {},
                async mounted() {},
                methods: {
                    getNetwork() {
                        return qt.getNetwork()
                    },
                    formatBalance(t, e) {
                        return j.formatBalance(t, e)
                    },
                    handleSave() {
                        this.isTpValid && this.isSlValid && this.callback && this.callback(this.tp, this.sl)
                    },
                    handleClose() {
                        this.$emit("close")
                    }
                },
                data() {
                    return {
                        tp: 0,
                        sl: 0,
                        entry: 0
                    }
                }
            },
            An = Mn,
            Sn = Object(Qt["a"])(An, xn, _n, !1, null, "2a6e5f2a", null),
            Bn = Sn.exports,
            On = {
                name: "HistoryList",
                props: ["contract"],
                components: {
                    TpSlModal: Bn
                },
                data() {
                    return {
                        positions: {},
                        balances: {},
                        timer: null,
                        tpSlActiveAccount: null,
                        tpSlModalActive: !1,
                        tpSlModalCallback: null,
                        tpSlEntry: 0
                    }
                },
                beforeDestroy() {
                    clearInterval(this.timer)
                },
                computed: { ...Object(E["c"])({
                        wallet: "account",
                        accounts: "accounts/list",
                        txConfig: "transactions/config"
                    })
                },
                watch: {},
                async mounted() {
                    this.positions = {};
                    for (let t of this.accounts) this.positions[t.get("address")] = {
                        tp: 0,
                        sl: 0
                    };
                    this.timer = setInterval(this.fetchBalances, 5e3)
                },
                methods: { ...Object(E["b"])({
                        fetch: "positions/fetch",
                        getTokenBalance: "accounts/getTokenBalance"
                    }),
                    getLevel() {
                        return qt.getLevel()
                    },
                    getNetwork() {
                        return qt.getNetwork()
                    },
                    async fetchBalances() {
                        if (!this.accounts) return;
                        const t = qt.getDexList()[this.txConfig.factory],
                            e = [];
                        for (let a of this.accounts) {
                            const s = await this.getTokenBalance({
                                account: a,
                                contract: this.contract
                            });
                            let i;
                            if (BigInt(s) == BigInt(0)) i = 0;
                            else if (this.txConfig.isOriginalRouter) {
                                const e = qt.getUniswapV2Contract(t.router),
                                    a = await e.methods.getAmountsOut(s, [this.contract.get("address"), qt.getWETHAddress()]).call();
                                i = a[1]
                            } else {
                                const e = qt.getRouterV2Contract();
                                i = await e.methods.getAmountOut(t.address, this.contract.get("address"), qt.getWETHAddress(), s).call()
                            }
                            const o = {
                                eth: j.formatBalance(i),
                                token: j.formatBalance(s, this.contract.get("decimals"))
                            };
                            n["default"].set(this.balances, a.get("address"), o);
                            const r = this.positions[a.get("address")];
                            let l = !1;
                            isNaN(parseFloat(r.tp)) || parseFloat(r.tp) > 0 && parseFloat(o.eth) > 0 && parseFloat(o.eth) > parseFloat(r.tp) && (e.push(a), l = !0), isNaN(parseFloat(r.sl)) || parseFloat(r.sl) > 0 && parseFloat(o.eth) > 0 && parseFloat(o.eth) < parseFloat(r.sl) && (l || e.push(a))
                        }
                        e.length > 0 && I.$emit("sell", {
                            history: null,
                            type: "normal",
                            accounts: e
                        })
                    },
                    getBalance(t) {
                        const e = this.balances[t.get("address")];
                        return e ? this.balances[t.get("address")].token : "_"
                    },
                    getEthValue(t) {
                        const e = this.balances[t.get("address")];
                        return e ? this.balances[t.get("address")].eth : "_"
                    },
                    getTp(t) {
                        const e = this.positions[t.get("address")];
                        return e && 0 != e.tp ? e.tp : "_"
                    },
                    getSl(t) {
                        const e = this.positions[t.get("address")];
                        return e && 0 != e.sl ? e.sl : "_"
                    },
                    handleEditTpSl(t) {
                        this.tpSlActiveAccount = t, this.tpSlModalActive = !0, this.tpSlModalCallback = (e, a) => {
                            this.positions[t.get("address")].tp = e, this.positions[t.get("address")].sl = a, this.tpSlModalActive = !1
                        }
                    }
                }
            },
            In = On,
            En = (a("04f4"), Object(Qt["a"])(In, Cn, kn, !1, null, "3a2ad6e8", null)),
            Ln = En.exports,
            Pn = (a("5377"), function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "card"
                }, [e("div", {
                    staticClass: "card-body p-0 py-4"
                }, [e("div", {
                    staticClass: "d-flex justify-content-between align-items-center px-4 pb-3"
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("Details")]), e("div", {
                    staticStyle: {
                        position: "relative"
                    }
                }, [e("a", {
                    on: {
                        click: function(e) {
                            t.showMenu = !t.showMenu
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: "img/dots.svg"
                    }
                })]), t.showMenu ? e("div", {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: () => {
                            t.showMenu = !1
                        },
                        expression: "() => {showMenu=false}"
                    }],
                    staticClass: "card",
                    staticStyle: {
                        position: "absolute",
                        right: "0"
                    }
                }, [e("div", {
                    staticClass: "card-body",
                    staticStyle: {
                        padding: "0.5rem 0rem!important"
                    }
                }, [t.watch && t.watch.get("isActive") && !t.watch.get("isFinished") ? t._e() : [e("div", {
                    staticStyle: {
                        padding: "0.5rem 1rem",
                        "white-space": "nowrap",
                        cursor: "pointer"
                    },
                    on: {
                        click: t.activateContract
                    }
                }, [t._v(" Move to Live list ")]), e("hr", {
                    staticStyle: {
                        margin: "0"
                    }
                })], t.watch && t.watch.get("isActive") && t.watch.get("isFinished") ? t._e() : [e("div", {
                    staticStyle: {
                        padding: "0.5rem 1rem",
                        "white-space": "nowrap",
                        cursor: "pointer"
                    },
                    on: {
                        click: t.finishContract
                    }
                }, [t._v(" Move to Past list ")])]], 2)]) : t._e()])]), e("div", {
                    staticClass: "table-responsive",
                    staticStyle: {
                        "overflow-x": "hidden!important"
                    }
                }, [e("table", {
                    staticClass: "table m-0 align-items-center border0 w-100"
                }, [t.getLevel().canSeeDetails() ? e("tbody", [e("tr", [e("th", {}, [t._v("Name:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("name")))]), e("th", {}, [t._v("Symbol: ")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("symbol")))]), e("th", {}, [t._v("Total Supply:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.formatTotalSupply(t.contract.get("totalSupply"))))])]), e("tr", [e("th", [t._v("Function:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("function") || "_"))]), e("th", [t._v("Tax Buy/Sell:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("buyTax") || "_") + "/" + t._s(t.contract.get("sellTax") || "_"))]), e("th", [t._v("Dead Blocks:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("deadBlocks") || "_"))])]), e("tr", [e("th", [t._v("Decimals:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("decimals") || "_"))]), e("th", [t._v("Max Tx/Wallet:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("maxTx") || "_") + "/" + t._s(t.contract.get("maxWallet") || "_"))]), e("th", [t._v("Owner Balance:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.ownerBalance) + " " + t._s(t.getNetwork().currency))])])]) : e("tbody", [e("tr", [e("th", {}, [t._v("Name:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("name")))]), e("th", {}, [t._v("Symbol: ")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("symbol")))]), e("th", {}, [t._v("Total Supply:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.formatTotalSupply(t.contract.get("totalSupply"))))])]), e("tr", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !1,
                        expression: "false"
                    }]
                }, [e("th", [t._v("Function:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("function") || "_"))]), e("th", [t._v("Tax Buy/Sell:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("buyTax") || "_") + "/" + t._s(t.contract.get("sellTax") || "_"))]), e("th", [t._v("Dead Blocks:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("deadBlocks") || "_"))])]), e("tr", [e("th", [t._v("Decimals:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("decimals") || "_"))]), e("th", [t._v("Tax Buy/Sell:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.contract.get("buyTax") || "_") + "/" + t._s(t.contract.get("sellTax") || "_"))]), e("th", [t._v("Owner Balance:")]), e("td", {
                    staticStyle: {
                        "text-align": "right"
                    }
                }, [t._v(t._s(t.ownerBalance) + " " + t._s(t.getNetwork().currency))])])])]), e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center mt-2"
                }, [e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: function(e) {
                            return t.openDexTool()
                        }
                    }
                }, [t._v("Dextools")]), e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: function(e) {
                            return t.openContract()
                        }
                    }
                }, [t._v("Contract")]), e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: function(e) {
                            return t.openOwner()
                        }
                    }
                }, [t._v("Owner")]), !t.isTesting && t.getLevel().canSnipe() ? e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: function(e) {
                            return t.handleTest()
                        }
                    }
                }, [t._v("Test")]) : t.isTesting ? e("img", {
                    staticClass: "loading-icon",
                    attrs: {
                        src: "img/spinner.svg"
                    }
                }) : t._e(), e("a", {
                    staticClass: "btn-theme",
                    on: {
                        click: function(e) {
                            return t.showWarns()
                        }
                    }
                }, [t._v("Warns")])])])]), e("div", {
                    staticClass: "card-body p-0 py-4 w-full"
                }, [e("div", {
                    staticClass: "d-flex justify-content-between align-items-center px-4 pb-3"
                }, [e("h2", {
                    staticClass: "m-0"
                }, [t._v("HoneyPot info")]), e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center mt-2"
                }, [e("a", {
                    staticClass: "btn-theme",
                    style: t.hpResult && t.hpResult.honeypotResult && 1 == t.hpResult.honeypotResult.isHoneypot ? "background-color: red;" : "",
                    on: {
                        click: function(e) {
                            return t.openHPInfo()
                        }
                    }
                }, [t._v("HoneyPotIs")])])]), t.hpResult ? e("div", {
                    staticClass: "w-full px-4"
                }, [e("div", {
                    staticClass: "d-flex w-full justify-content-between"
                }, [e("div", {
                    staticClass: "w-50"
                }, [e("b", [t._v("Simulation")]), e("VueJsonPretty", {
                    staticStyle: {
                        "max-width": "100%",
                        "overflow-x": "auto"
                    },
                    attrs: {
                        path: "res",
                        data: t.hpResult.simulationResult
                    }
                })], 1), e("div", {
                    staticClass: "w-50"
                }, [e("div", [e("b", [t._v("Result")]), e("VueJsonPretty", {
                    staticStyle: {
                        "max-width": "100%",
                        "overflow-x": "hidden"
                    },
                    attrs: {
                        path: "res",
                        data: t.hpResult.honeypotResult
                    }
                })], 1), e("div", [e("b", [t._v("Flags")]), t.hpResult.flags ? e("div", [t._v(" " + t._s(t.hpResult.flags.join(", ")) + " ")]) : t._e()]), e("div", [e("b", [t._v("Holder Analysis")]), e("VueJsonPretty", {
                    staticStyle: {
                        "max-width": "100%",
                        "overflow-x": "hidden"
                    },
                    attrs: {
                        path: "res",
                        data: t.hpResult.holderAnalysis
                    }
                })], 1)])])]) : t._e()]), e("alert-modal", {
                    attrs: {
                        title: t.alertModalTitle,
                        icon: t.alertModalIcon,
                        active: t.alertModalActive,
                        content: t.alertModalContent,
                        btnOk: t.alertModalBtnOk,
                        callback: t.alertModalCallback
                    },
                    on: {
                        ok: function(e) {
                            t.alertModalActive = !1
                        }
                    }
                }), e("WarnModal", {
                    attrs: {
                        active: t.warnModalActive,
                        contract: t.contract
                    },
                    on: {
                        close: function(e) {
                            t.warnModalActive = !1
                        }
                    }
                })], 1)
            }),
            Dn = [],
            Nn = function() {
                var t = this,
                    e = t._self._c;
                return e("Modal", {
                    attrs: {
                        active: t.active
                    },
                    on: {
                        close: t.handleClose
                    }
                }, [e("div", {
                    attrs: {
                        id: "staticBackdrop1",
                        "data-mdb-backdrop": "static",
                        "data-mdb-keyboard": "false",
                        tabindex: "-1",
                        "aria-labelledby": "staticBackdropLabel",
                        "aria-hidden": "true"
                    }
                }, [e("div", {
                    staticClass: "modal-body py-3 px-4"
                }, [t.isLoaded ? e("div", [e("div", {
                    staticStyle: {
                        color: "black",
                        "font-weight": "900",
                        "font-size": "20px",
                        margin: "20px"
                    }
                }, [t._v(" Warning List ")]), e("div", {
                    staticStyle: {
                        "max-height": "500px",
                        "overflow-y": "auto"
                    }
                }, [e("table", {
                    staticClass: "table m-0 w-100"
                }, [e("thead", [e("tr", [e("th"), e("th", [t._v("Selector")]), e("th", [t._v("Details")])])]), e("tbody", t._l(t.signatures, (function(a) {
                    return e("tr", {
                        key: a.signature
                    }, [e("td", [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: a.isWarn,
                            expression: "selector.isWarn"
                        }],
                        staticClass: "form-check-input",
                        attrs: {
                            type: "checkbox",
                            "aria-label": "..."
                        },
                        domProps: {
                            checked: Array.isArray(a.isWarn) ? t._i(a.isWarn, null) > -1 : a.isWarn
                        },
                        on: {
                            change: function(e) {
                                var n = a.isWarn,
                                    s = e.target,
                                    i = !!s.checked;
                                if (Array.isArray(n)) {
                                    var o = null,
                                        r = t._i(n, o);
                                    s.checked ? r < 0 && t.$set(a, "isWarn", n.concat([o])) : r > -1 && t.$set(a, "isWarn", n.slice(0, r).concat(n.slice(r + 1)))
                                } else t.$set(a, "isWarn", i)
                            }
                        }
                    })]), e("td", [t._v(t._s(a.signature))]), e("td", ["" != a.title && a.title ? [e("span", {
                        staticStyle: {
                            color: "black",
                            "font-weight": "900"
                        }
                    }, [t._v(t._s(a.title))])] : [e("div", {
                        staticClass: "button-text d-flex justify-content-center align-items-center mt-2"
                    }, [e("a", {
                        staticClass: "btn-theme",
                        staticStyle: {
                            width: "120px"
                        },
                        on: {
                            click: function(e) {
                                return t.open4Byte(a.signature)
                            }
                        }
                    }, [t._v("Open in 4Byte")])])]], 2)])
                })), 0)])]), e("div", {
                    staticClass: "button-text d-flex justify-content-center align-items-center mt-4 mb-0"
                }, [e("a", {
                    staticClass: "btn-theme",
                    staticStyle: {
                        width: "120px"
                    },
                    on: {
                        click: t.handleUpdate
                    }
                }, [t._v("Update")])])]) : e("div", [t._v(" Loading... ")])])])])
            },
            jn = [],
            Fn = {
                name: "WarnModal",
                props: ["contract", "active"],
                components: {
                    Modal: fe
                },
                computed: { ...Object(E["c"])({
                        config: "transactions/config"
                    })
                },
                watch: {
                    async active() {
                        if (this.isLoaded = !1, this.active) {
                            this.signatures = this.contract.get("abi");
                            for (let t = 0; t < this.signatures.length; t++) {
                                const e = this.signatures[t];
                                n["default"].set(this.signatures[t], "isWarn", this.config.warns.includes(e.signature));
                                let a = e.abi;
                                a || (ie.abis[e.signature] || await ie.getAbiFromSelector(e.signature), a = ie.abis[e.signature]), n["default"].set(this.signatures[t], "title", this.formatAbi(a))
                            }
                            this.isLoaded = !0
                        }
                    }
                },
                beforeDestroy() {},
                async mounted() {},
                methods: {
                    handleUpdate() {
                        n["default"].set(this.config, "warns", this.signatures.filter(t => t.isWarn).map(t => t.signature)), this.handleClose()
                    },
                    handleClose() {
                        this.$emit("close")
                    },
                    open4Byte(t) {
                        const e = "https://www.4byte.directory/signatures/?bytes4_signature=" + t;
                        window.open(e)
                    },
                    formatAbi(t) {
                        if (!t) return "";
                        let e = [];
                        for (let a of t.inputs || []) {
                            let t = "";
                            "" != a.name && (t = a.type, a.type != a.name && (t += " " + a.name), e.push(t))
                        }
                        return `${t.name}(${e.join(",")})`
                    }
                },
                data() {
                    return {
                        signatures: [],
                        isLoaded: !1
                    }
                }
            },
            Rn = Fn,
            $n = (a("0220"), Object(Qt["a"])(Rn, Nn, jn, !1, null, "69aaef50", null)),
            Wn = $n.exports,
            Hn = {
                name: "Details",
                props: ["contract", "watch"],
                components: {
                    AlertModal: Re,
                    VueJsonPretty: un.a,
                    WarnModal: Wn
                },
                data() {
                    return {
                        hpResult: {},
                        showMenu: !1,
                        isTesting: !1,
                        timer: null,
                        ownerBalance: 0,
                        warnModalActive: !1,
                        alertModalTitle: "",
                        alertModalIcon: "success",
                        alertModalActive: !1,
                        alertModalContent: "",
                        alertModalBtnOk: "",
                        alertModalCallback: null
                    }
                },
                computed: { ...Object(E["c"])({
                        config: "transactions/config"
                    })
                },
                watch: {},
                beforeDestroy() {
                    I.$off(H), I.$off(U), I.$off(G), clearInterval(this.timer)
                },
                async mounted() {
                    n["default"].set(this.config, "warns", []), I.$on(H, () => {
                        this.isTesting = !1, this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There is an unknown error in your configrations. Please check them again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                    }), I.$on(U, () => {
                        this.isTesting = !1, this.alertModalTitle = "Success", this.alertModalIcon = "success", this.alertModalActive = !0, this.alertModalContent = "Test was successful. You are good to go.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null
                    }), I.$on(G, () => {
                        this.isTesting = !1
                    });
                    const t = async () => {
                        this.ownerBalance = this.formatBalance(await qt.getBalance(this.contract.get("owner")));
                        const t = "https://api.honeypot.is/v2/IsHoneypot?address=" + this.contract.get("address");
                        fetch(t).then(t => t.json()).then(t => {
                            this.hpResult = t
                        })
                    };
                    t(), this.timer = setInterval(t, 1e4)
                },
                methods: { ...Object(E["b"])({
                        createUpdateWatch: "watches/createUpdate"
                    }),
                    showWarns() {
                        this.warnModalActive = !0
                    },
                    getLevel() {
                        return qt.getLevel()
                    },
                    formatBalance(t, e) {
                        return t ? j.formatBalance(t, e) : "_"
                    },
                    getNetwork() {
                        return qt.getNetwork()
                    },
                    formatTotalSupply() {
                        let t = this.contract.get("decimals") || 18,
                            e = this.contract.get("totalSupply") || 18;
                        return (BigInt(e) / BigInt(10 ** t)).toString()
                    },
                    openDexTool() {
                        const t = this.getNetwork().dextool + this.contract.get("address");
                        window.open(t)
                    },
                    openContract() {
                        const t = this.getNetwork().explorer + "address/" + this.contract.get("address");
                        window.open(t)
                    },
                    openOwner() {
                        const t = this.getNetwork().explorer + "address/" + this.contract.get("owner");
                        window.open(t)
                    },
                    openHPInfo() {
                        const t = "https://honeypot.is/ethereum?address=" + this.contract.get("address");
                        window.open(t)
                    },
                    handleTest() {
                        this.isTesting = !0, I.$emit(W, {
                            test: !0
                        }), setTimeout(() => {
                            0 != this.isTesting && (this.isTesting = !1, this.alertModalTitle = "Error", this.alertModalIcon = "error", this.alertModalActive = !0, this.alertModalContent = "There is an unknown error in your configrations. Please check them again.", this.alertModalBtnOk = "Ok", this.alertModalCallback = null)
                        }, 1e4)
                    },
                    async watchContract() {
                        this.$emit("update", await this.createUpdateWatch({
                            address: this.contract.get("address"),
                            name: this.contract.get("name"),
                            totalSupply: this.contract.get("totalSupply"),
                            decimals: this.contract.get("decimals"),
                            owner: this.contract.get("owner"),
                            symbol: this.contract.get("symbol"),
                            isActive: !1,
                            isFinished: !1
                        }))
                    },
                    async finishContract() {
                        this.$emit("update", await this.createUpdateWatch({
                            address: this.contract.get("address"),
                            name: this.contract.get("name"),
                            totalSupply: this.contract.get("totalSupply"),
                            decimals: this.contract.get("decimals"),
                            owner: this.contract.get("owner"),
                            symbol: this.contract.get("symbol"),
                            isActive: !0,
                            isFinished: !0
                        }))
                    },
                    async activateContract() {
                        this.$emit("update", await this.createUpdateWatch({
                            address: this.contract.get("address"),
                            name: this.contract.get("name"),
                            totalSupply: this.contract.get("totalSupply"),
                            decimals: this.contract.get("decimals"),
                            owner: this.contract.get("owner"),
                            symbol: this.contract.get("symbol"),
                            isActive: !0,
                            isFinished: !1
                        }))
                    }
                }
            },
            Gn = Hn,
            Un = (a("c85c"), Object(Qt["a"])(Gn, Pn, Dn, !1, null, "a454ce74", null)),
            qn = Un.exports,
            Vn = {
                name: "Contract",
                components: {
                    HistoryList: gn,
                    PositionList: Ln,
                    Details: qn
                },
                data() {
                    return {
                        address: "",
                        contract: null,
                        watch: null
                    }
                },
                computed: { ...Object(E["c"])({
                        txConfig: "transactions/config"
                    })
                },
                watch: {
                    async $route() {
                        await this.init()
                    }
                },
                beforeDestroy() {
                    this.setActive(null)
                },
                async mounted() {
                    await this.init()
                },
                methods: { ...Object(E["b"])({
                        fetchContract: "contracts/get",
                        fetchWatch: "watches/get",
                        setActive: "contracts/setActive"
                    }),
                    getLevel() {
                        return qt.getLevel()
                    },
                    async init() {
                        this.contract = null, this.address = this.$route.params.address, this.contract = await this.fetchContract(this.address), this.setActive(this.contract), this.watch = await this.fetchWatch(this.address);
                        const t = parseFloat(this.contract.get("maxTx")),
                            e = parseInt(this.contract.get("deadBlocks")),
                            a = this.contract.get("function");
                        this.getLevel().canSnipe() && (!isNaN(t) && t && n["default"].set(this.txConfig, "maxSupply", t), !isNaN(e) && e > 0 ? (n["default"].set(this.txConfig, "blocks", e), n["default"].set(this.txConfig, "isBuyInstant", !1)) : (n["default"].set(this.txConfig, "blocks", 1), n["default"].set(this.txConfig, "isBuyInstant", !0)), a ? n["default"].set(this.txConfig, "buyOn", a) : a && "" != a || n["default"].set(this.txConfig, "buyOn", "addLiquidityETH"))
                    },
                    updateWatch(t) {
                        this.watch = t
                    }
                }
            },
            zn = Vn,
            Qn = Object(Qt["a"])(zn, wn, Tn, !1, null, "2ee2922d", null),
            Yn = Qn.exports;
        n["default"].use(ga["a"]);
        const Kn = [{
                path: "/",
                name: "Home",
                component: $a
            }, {
                path: "/contracts",
                name: "List",
                component: sa
            }, {
                path: "/contract/:address?",
                name: "Contract",
                component: Yn
            }, {
                path: "/copytrading",
                name: "CopyTrading",
                component: vn
            }],
            Jn = new ga["a"]({
                routes: Kn
            });
        Jn.beforeEach((t, e, a) => {
            a()
        });
        var Xn = Jn,
            Zn = a("ecee"),
            ts = a("c074"),
            es = a("ad3d"),
            as = a("c28b"),
            ns = a.n(as),
            ss = a("2536"),
            is = a.n(ss),
            os = a("d842"),
            rs = a("30ef"),
            ls = a.n(rs),
            cs = a("574d"),
            ds = a.n(cs),
            us = (a("04f2"), a("6c42"));
        a("da96");
        a("2440"), n["default"].use(is.a), n["default"].use(os["a"].use(ls.a)), n["default"].use(ds.a, {}), n["default"].use(us["a"]), n["default"].use(ns.a), Zn["c"].add(ts["t"], ts["q"], ts["m"], ts["l"], ts["n"], ts["o"], ts["s"], ts["p"], ts["j"], ts["e"], ts["k"], ts["f"], ts["r"], ts["b"], ts["c"], ts["d"], ts["a"], ts["h"], ts["i"], ts["g"]), n["default"].component("font-awesome-icon", es["a"]), B.init(), n["default"].config.productionTip = !1, new n["default"]({
            router: Xn,
            store: $t,
            render: t => t(ya)
        }).$mount("#app"), document.addEventListener("visibilitychange", () => {
            "hidden" === document.visibilityState && window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE")
        })
    },
    6: function(t, e) {},
    "64ca": function(t, e, a) {},
    7: function(t, e) {},
    "72e7": function(t, e, a) {
        "use strict";
        a("64ca")
    },
    "75bb": function(t, e, a) {},
    7806: function(t, e, a) {},
    8: function(t, e) {},
    8224: function(t, e, a) {},
    "8b8c": function(t, e, a) {},
    9: function(t, e) {},
    "90b3": function(t, e, a) {
        "use strict";
        a("f9c8")
    },
    "97e6": function(t, e, a) {
        "use strict";
        a("c371")
    },
    b3e4: function(t, e, a) {
        "use strict";
        a("cb00")
    },
    bd65: function(t, e, a) {
        "use strict";
        a("3f1b")
    },
    c371: function(t, e, a) {},
    c6c5: function(t, e, a) {},
    c85c: function(t, e, a) {
        "use strict";
        a("75bb")
    },
    cb00: function(t, e, a) {},
    f9c8: function(t, e, a) {},
    f9d1: function(t, e, a) {
        "use strict";
        a("7806")
    }
});
//# sourceMappingURL=app.335f99f7.js.map