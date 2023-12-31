var website = "https://dzen.ru";

document.addEventListener("DOMContentLoaded", function() {
    runClickunderCallback(); 
});

function runClickunderCallback() {

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var web_script = document.createElement('script');
    web_script.type = "text/javascript";

    function getCookie(name) {
        var cookie = document.cookie;
        name += "=";
        var pos = cookie.indexOf("; " + name);
        if (pos == -1) {
            if (pos = cookie.indexOf(name), 0 != pos) return false;
        } else {
            pos += 2;
        };
        var pos2 = document.cookie.indexOf(";", pos);-1 == pos2 && (pos2 = cookie.length);
        return unescape(cookie.substring(pos + name.length, pos2));
    }

    var statistics = JSON.parse(getCookie('u_count'));
    if (statistics[1] >= 2) {
        var cou = 0;
    } else {
        var cou = 2;
    }

    if (are_cookies_enabled()) {
        var is_clck = 0;
        run();
    };

    function are_cookies_enabled() {
        var cookieEnabled = navigator.cookieEnabled ? true : false;

        if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
            document.cookie = "testcookie";
            cookieEnabled = document.cookie.indexOf("testcookie") != -1 ? true : false;
        }
        return cookieEnabled;
    }

    function inIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    };

    var compareElementsWithParentsToSelectors = function compareElementsWithParentsToSelectors(element_list, element_selectors) {

        var getParents = function getParents(elem) {
            var parents = [];

            for (; elem && elem !== document; elem = elem.parentNode) {
                parents.push(elem);
            }

            return parents;
        };

        for (var i = 0; i < element_list.length; i++) {
            if (compareElementsToSelectors(getParents(element_list[i]), element_selectors)) {
                return true;
            };
        };

        return false;
    };

    var compareElementsWithChildrenToSelectors = function compareElementsWithChildrenToSelectors(element_list, element_selectors) {

        var getChildren = function getChildren(elem) {
            var children = Array.from(elem.querySelectorAll("*"));
            children.push(elem);
            return children;
        };

        for (var i = 0; i < element_list.length; i++) {
            if (compareElementsToSelectors(getChildren(element_list[i]), element_selectors)) {
                return true;
            }
        };

        return false;
    };

    var compareElementsToSelectors = function compareElementsToSelectors(element_list, element_selectors) {

        for (var a = 0; a < element_selectors.length; a++) {
            for (var i = 0; i < element_list.length; i++) {
                match = element_list[i].matches(element_selectors[a]);
                if (match) return true;
            }
        };

        return false;
    };

    var Browser = function () {
        function Browser() {
            _classCallCheck(this, Browser);

            var browserdata = this.detectBrowser();
            this.browser = browserdata[0];
            this.version = browserdata[1];
            this.OS = this.detectOS();
        }

        _createClass(Browser, [{
            key: "detectBrowser",
            value: function detectBrowser() {
                try {
                    if (!!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
                        if (navigator.userAgent.match(/(opera)\/?\s*(\d+)/i) || navigator.userAgent.match(/(opr)\/?\s*(\d+)/i)) var version = navigator.userAgent.match(/(opera)\/?\s*(\d+)/i) || navigator.userAgent.match(/(opr)\/?\s*(\d+)/i);
                        return ["opera", version[2]];
                    };

                    if (navigator.userAgent.search(/YaBrowser/) > 0) {
                        var version = navigator.userAgent.match(/(yabrowser)\/?\s*(\d+)/i)[2];
                        return ["yandex", version];
                    };

                    if (typeof InstallTrigger !== 'undefined') {
                        var version = navigator.userAgent.match(/(firefox)\/?\s*(\d+)/i)[2];
                        return ["firefox", version];
                    };

                    if (/constructor/i.test(window.HTMLElement) || function (p) {
                        return p.toString() === "[object SafariRemoteNotification]";
                    }(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification) || !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
                        var version = navigator.userAgent.match(/(version)\/?\s*(\d+)/i)[2];
                        return ["safari", version];
                    };

                    if (false || !!document.documentMode) {
                        var version;
                        var ua = window.navigator.userAgent;
                        if (ua.indexOf("Trident/7.0") > -1) version = "11";else if (ua.indexOf("Trident/6.0") > -1) version = "10";else if (ua.indexOf("Trident/5.0") > -1) version = "9";else version = "8";

                        return ["ie", version];
                    };

                    if (!!window.StyleMedia) {
                        var version = navigator.userAgent.match(/(edge)\/?\s*(\d+)/i)[2];
                        return ["edge", version];
                    };

                    if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.csi)) {
                        var version = navigator.userAgent.match(/(chrome)\/?\s*(\d+)/i)[2];
                        return ["chrome", version];
                    };
                } catch (e) {
                    return "other";
                };

                return "other";
            }
        }, {
            key: "detectOS",
            value: function detectOS() {
                var userAgent = window.navigator.userAgent,
                    platform = window.navigator.platform,
                    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                    os = null;

                if (macosPlatforms.indexOf(platform) !== -1) {
                    return 'macos';
                } else if (iosPlatforms.indexOf(platform) !== -1) {
                    return 'ios';
                } else if (windowsPlatforms.indexOf(platform) !== -1) {
                    return 'windows';
                } else if (/Android/.test(userAgent)) {
                    return 'android';
                } else if (!os && /Linux/.test(platform)) {
                    return 'linux';
                }

                return os;
            }
        }, {
            key: "getBrowser",
            value: function getBrowser() {
                return this.browser;
            }
        }, {
            key: "getVersion",
            value: function getVersion() {
                return this.version;
            }
        }, {
            key: "getOS",
            value: function getOS() {
                return this.OS;
            }
        }]);

        return Browser;
    }();

    ;

    var browser = new Browser();
    function run() {
        window.main = new function () {

            var _997726831813 = false;

            var cl_counter = setInterval(function(){
                if (getCookie("u_cl_watch") > 0) {
                    if (!getCookie("u_eb927f21fc")){
                        clearInterval(cl_counter);
                        _997726831813 = false;
                        cou = 1;
                    };
                };
            }, 1000);

            count_to_cookie();

            system = {
                'window': null,
                '_handle': null,
                'clicked_url': null
            };
            if (typeof self.window === "undefined") {
                _parent = window;
            } else {
                _parent = self;
            }

            var var_1 = 2,
                var_2 = 0,
                var_3 = null,
                some_list = [[1, 28800]],
                hours = 24,
                var_4 = "",
                var_5 = "",
                querystring = '',
                var_6 = 100,
                logging = false,
                var_8 = true,
                var_9 = false,
                var_11 = false,
                fl = {};

            function nowdate_plus_hours(hours) {
                var now = new Date();
                var time = now.getTime();
                time += 1000 * 3600 * hours;
                now.setTime(time);
                var cookie_expires = now.toUTCString();

                return cookie_expires;
            }

            function iterate_counter(index) {

                cookie_expires = nowdate_plus_hours(6);

                var statistics = JSON.parse(getCookie('u_count'));
                statistics[index] += 1;
                new_statistics = JSON.stringify(statistics);
                setCookie("u_count", new_statistics, cookie_expires);
            }

            function count_to_cookie() {

                cookie_expires = nowdate_plus_hours(6);

                document.onclick = function (e) {
                    if (e.isTrusted) {
                        iterate_counter(0);
                    }
                };

                if (getCookie("u_count") != false) {
                    var statistics = JSON.parse(getCookie('u_count'));
                } else {
                    var statistics = [0, 0];
                    var json_satistics = JSON.stringify(statistics);
                    setCookie("u_cl_watch", 0);
                    console.log("set cookie");
                    setCookie("u_count", json_satistics, cookie_expires);
                }
            }

            function _997726831818() {
                if (something) {
                    return;
                }
                cur_time = new Date().getTime();
                wait_start = getCookie('_997726831851');
                if (var_2 != 0 && (!wait_start || wait_start > cur_time)) {
                    return;
                }
                var some_list = _997726831824(_997726831814);
                _997726831838 = getCookie('t_eb927f21fc');
                _997726831831 = 0;
                some_list.sort(_997726831819);
                while (some_list.length > 0) {
                    _997726831831 = _99772683180(some_list);
                    if (_997726831831[0] > _997726831838) break;
                }
                if (!_997726831838) {
                    _997726831838 = 0;
                }
                if (some_list.length == 0 && _997726831831[0] <= _997726831838) {
                    _997726831838 = 0;
                    some_list = _997726831824(_997726831814);
                    some_list.sort(_997726831819);
                    _997726831831 = _99772683180(some_list);
                }
                if (_997726831838 == _997726831831[0] - 1) {
                    var _997726831832 = getCookie('u_eb927f21fc');
                    if (!_997726831832) {
                        _997726831832 = 0;
                    }
                    log_print('Current click: ' + _997726831838);
                    if (_997726831832 != 0 && _997726831832 > cur_time) {
                        return;
                    }
                    log_print('Preloading init');
                    _99772683189();
                }
            }

            var ePC = {

                obm: [],

                LrrDpe: function LrrDpe() {
                    if (ePC && ePC.obm && ePC.obm.length) {
                        for (var i = 0; i < ePC.obm.length; i++) {
                            if (typeof ePC.obm[i] === 'function') {
                                ePC.obm[i]();
                            }
                        }
                        ePC.obm = [];
                    }
                },

                UUnKCvf: function UUnKCvf(obj, evt, fnc, useCapture) {
                    if (typeof useCapture == 'undefined') {
                        useCapture = false;
                    }
                    if (obj.addEventListener) {
                        obj.addEventListener(evt, fnc, useCapture);
                        return true;
                    } else if (obj.attachEvent) {
                        return obj.attachEvent('on' + evt, fnc);
                    } else {
                        evt = 'on' + evt;
                        if (typeof obj[evt] === 'function') {
                            fnc = function (f1, f2) {
                                return function () {
                                    f1.apply(this, arguments);
                                    f2.apply(this, arguments);
                                };
                            }(obj[evt], fnc);
                        }
                        obj[evt] = fnc;
                        return true;
                    }
                }
            };

            function lst(obj, evt, fnc, useCapture) {
                if (typeof useCapture == 'undefined') {
                    useCapture = false;
                }
                if (obj.addEventListener) {
                    obj.addEventListener(evt, fnc, useCapture);
                    return true;
                } else if (obj.attachEvent) {
                    return obj.attachEvent('on' + evt, fnc);
                } else {
                    evt = 'on' + evt;
                    if (typeof obj[evt] === 'function') {
                        fnc = function (f1, f2) {
                            return function () {
                                f1.apply(this, arguments);
                                f2.apply(this, arguments);
                            };
                        }(obj[evt], fnc);
                    }
                    obj[evt] = fnc;
                    return true;
                }
            }

            var aviiPmx = function aviiPmx(url) {
                this.hasworked = false;
                this.url = url;
                this.jjwtB = 'toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1';
                this._object = null;
                this._clb = null;
                var self = this;
                this.LdZSBi();
                ePC.obm.push(function () {
                    self._close();
                });
            };

            aviiPmx.prototype = {
                _close: function _close() {
                    this._clb && ePC.PgV(document, "mousedown", this._clb);
                    this._object && this._object.parentNode && this._object.parentNode.removeChild(this._object);
                    ROFkeiPN._close();
                },
                LdZSBi: function LdZSBi() {
                    var self = this;
                    self.jjwtB = "toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=" + (window.outerWidth || 1000) + ",height=" + (window.outerHeight || 1000) + ",screenX=0,screenY=0";
                    var e = document.createElement("object");
                    e.setAttribute("type", "application/x-shockwave-flash");
                    e.setAttribute("id", "infCP");
                    e.setAttribute("name", "infCP");

                    e.setAttribute("data", "data:application/pdf;base64,Q1dTCZgCAAB4nFVS/26bMBA+28CFhPygSWjXrdKk/TtF7Am2itItUlKq0kj9LzhgFjYEVaBJ9zZ7k74Cb5QZkmrbybK/++7z3Vm+Z1CXAP3fAAaBK7MFAA7d7/cv446EBPxQZOL9J4CX0TdaE9IGMKmPd6Bs8yQy4pQX64nYiqws2vP8qRBujdtOmoQ/n7JIbLoHSZQUjyn/pfmPm6QULExXalHy76I19xa+u1zcDngUNXdnSVHKupueX8f9kKdinkdCdx8unfvl9fReL145s5FcHVJLXIrO9WI2W/rOneveGNE/gd6x0+dSbDKemu4RTDN5xjwUF7ski/Ld5DaLNk7abKuJv4udLJJIkSVT7ca7m1/ONG/1Q4Rlv+m2Ls7LcC0feuzjEDWbxDwsk604MNZ/cSfPSp7IZ2oWsZilnanWCZwioUgVJCoyRKWFREfSRtJBZiDpIukh6yMZIDFRHSIZI7GQnCI9Q/YG2TmytwocjRD6ipiiK9JXCdS/yKRPoCZaOqvsrw2lt88ru5pCoAU0xipWvRaVWI/bvCMVlNJGISkj7vJe0P848gakcU3ekwpGZb4PlS0gOLGDoR2M7GBsB5YdKHI9wEVjayaln4d9OEzT3ymBL9L9A+grnY4=");
                    e.setAttribute("style", "position:fixed;visibility:visible;left:0;top:0;width:1px;height:1px;z-index:2147483638");
                    self.FlashElem = e;
                    var v = document.createElement("param");
                    v.setAttribute("name", "wmode");
                    v.setAttribute("value", "transparent");
                    e.appendChild(v);
                    var k = document.createElement("param");
                    k.setAttribute("name", "menu");
                    k.setAttribute("value", "false");
                    e.appendChild(k);
                    var a = document.createElement("param");
                    a.setAttribute("name", "allowscriptaccess");
                    a.setAttribute("value", "always");
                    e.appendChild(a);
                    var p = document.createElement("param");
                    p.setAttribute("name", "allowfullscreen");
                    p.setAttribute("value", "true");
                    e.appendChild(p);
                    p = document.createElement("param");
                    p.setAttribute("name", "autoplay");
                    p.setAttribute("value", "true");
                    e.appendChild(p);
                    var interval = setInterval(function () {
                        if (!e) {
                            return clearInterval(interval);
                        }
                        var style = "position:fixed !important;visibility:visible !important;left:0 !important;top:0 !important;width:1px !important;height:1px !important;z-index:2147483647 !important;overflow:hidden !important;";
                        e.style.visibility = 'hidden';
                        e.style.width = 0;
                        e.style.height = 0;
                        e.setAttribute('style', style);
                    }, 100);
                    self._object = e;
                    var b = setInterval(function () {
                        if (document.body) {
                            clearInterval(b);
                            self._clb = function (g) {
                                if (g.button === 0) {
                                    clearInterval(interval);
                                    self.MousePosX = g.clientX;
                                    self.MousePosY = g.clientY;
                                    self.FlashElem.style.width = "100%";
                                    self.FlashElem.style.height = "100%";
                                }
                            };
                            document.body.insertBefore(e, document.body.firstChild);
                            e.focus();

                            if (!getCookie('u_eb927f21fc')) {

                                lst(document, "mousedown", function (event) {

                                    if (self.hasworked == false) {
                                        var target = event.target.tagName.toLowerCase() || event.srcElement.tagName.toLowerCase();
                                        if (target == "a" && event.target.getAttribute("target") != "_blank" && event.button == "0") {
                                            setTimeout(function () {
                                                event.target.click();
                                            }, 300);
                                        }
                                        self._clb(event);
                                    }
                                });
                            }
                        }
                    }, 10);
                },

                SwfCndClb: function SwfCndClb() {

                    var self = this;
                    var pdf = function pdf(wnd) {
                        function e() {
                            if (self.hasworked == false) {
                                wnd.resizeTo(f[1], f[0]);
                                wnd.moveTo(f[2], f[3]);
                                wnd.location.href = k;
                                self.hasworked = true;
                                if (getCookie("u_cl_watch") && getCookie("u_cl_watch") > 0) {
                                    date = new Date();
                                    date.setTime(date.getTime() + (6 * 60 * 60 * 1000));
                                    setCookie("u_eb927f21fc", "1", date.toUTCString());
                                    setCookie("t_eb927f21fc", "1", date.toUTCString());
                                }
                                if (getCookie("u_cl_watch") && getCookie("u_cl_watch") == 0) {

                                    _997726831813 = true;
                                    setTimeout(function(){_997726831813 = false;}, 60 * 1000)

                                    setCookie("u_cl_watch", parseInt(getCookie("u_cl_watch"), 10) + 1);
                                    setCookie("u_eb927f21fc", "1", date.toUTCString());
                                    setCookie("t_eb927f21fc", "1", date.toUTCString());

                                }
                                iterate_counter(1);
                            }
                        }
                        var b = window.screen.availHeight,
                            c = window.screen.availWidth;
                        var f = [b, c, Math.round((screen.height - b) / 2), Math.round((screen.width - c) / 2)];
                        wnd.document.write("<html><head><script>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(987654,987654);};window.a.b();\x3c/script></head><body></body></html>");
                        var k = self.url,
                            l;
                        ePC.UUnKCvf(window, "focus", e, true);
                        self.FlashElem.remove();
                    };
                    return function () {
                        try {
                            var h = Math.floor(Math.random() * 1000 + 1).toString();
                            var wnd = window.open(location.href, h, self.jjwtB);
                            wnd.opener = null;
                            pdf(wnd);
                            self.FlashElem.style.width = "0px";
                            self.FlashElem.style.height = "0px";
                            self.FlashElem.style.visibility = "hidden";
                            self._closeROFkeiPN();
                        } catch (a) {
                            self._close();
                        }
                    }();
                }
            };

            function _997726831837() {

                if (!is_clck) {
                    if (_997726831847) {
                        return;
                    }
                    cur_time = new Date().getTime();
                    wait_start = getCookie('_997726831851');
                    if (var_2 != 0 && wait_start == 0) {
                        _997726831847 = false;
                        _997726831841 = setTimeout(_997726831837, var_2 * 1000);
                        setCookie('_997726831851', cur_time + var_2 * 1000);
                        log_print('Wait start: ' + Math.round(var_2) + ' second');
                        return;
                    }
                    if (wait_start != 0 && wait_start > cur_time) {
                        start_time = parseInt(wait_start - cur_time);
                        _997726831847 = false;
                        _997726831841 = setTimeout(_997726831837, start_time);
                        log_print('Wait start: ' + Math.round(start_time / 1000) + ' second');
                        return;
                    }
                    _997726831847 = true;
                    log_print('Start');
                    _997726831838 = getCookie('t_eb927f21fc');
                    _997726831832 = getCookie('u_eb927f21fc');
                    _997726831831 = 0;
                    if (!_997726831838) {
                        _997726831838 = 0;
                    }
                    if (!_997726831832) {
                        _997726831832 = 0;
                    }
                    log_print('Current click: ' + _997726831838);
                    // if (_997726831832 != 0 && _997726831832 > cur_time) {
                    //     start_time = parseInt(_997726831832 - cur_time);
                    //     _997726831847 = false;
                    //     _997726831841 = setTimeout(_997726831837, start_time);
                    //     log_print('Start over: ' + Math.round(start_time / 1000) + ' second');
                    //     return;
                    // }
                    _997726831818();
                    some_list.sort(_997726831819);
                    while (some_list.length > 0) {
                        _997726831831 = _997726831826();
                        if (_997726831831[0] > _997726831838) break;
                    }
                    if (some_list.length == 0 && _997726831831[0] <= _997726831838) {
                        _997726831838 = 0;
                        some_list = _997726831824(_997726831814);
                        some_list.sort(_997726831819);
                        _997726831831 = _997726831826();
                    }
                    var_4 = var_4 == "" ? [] : var_4.split(" ");
                    var_5 = var_5 == "" ? [] : var_5.split(" ");
                    for (i = 0; i < var_5.length; i++) {
                        var item = document.getElementById(var_5[i]);
                        if (item != null) {
                            item.onmouseup = function (a) {
                                a = a || window.event;
                                a.stopPropagation ? a.stopPropagation() : a.cancelBubble = true;
                            };
                        }
                    }

                    if (!document.referrer.includes("toloka.yandex.ru")) {
                        if (var_4.length > 0) {
                            for (i = 0; i < var_4.length; i++) {
                                var item = document.getElementById(var_4[i]);
                                if (item != null) {
                                    _99772683183(item);
                                }
                            }
                        } else {
                            // try {
                            //     clickunder_selector = utarget_selector;
                            // } catch (e) {}
                            // ;
                            // try {
                            //     clickunder_selector = popadon_selector;
                            // } catch (e) {}
                            // ;

                            // try {
                            //     if (clickunder_selector) {
                            //         if (inIframe()) {
                            //             clck_elements = [window.top.document.querySelectorAll(clickunder_selector)];
                            //             _99772683183(clck_elements);
                            //         } else {
                            //             clck_elements = document.querySelectorAll(clickunder_selector);
                            //             _99772683183(clck_elements);
                            //         }
                            //     } else {
                            //         if (inIframe()) {
                            //             _99772683183([window.top.document]);
                            //         } else {
                            //             _99772683183([document]);
                            //         }
                            //     }
                            // } catch (e) {
                            //     if (inIframe()) {
                            //         _99772683183([window.top.document]);
                            //     } else {
                            //         _99772683183([document]);
                            //     }
                            // }
                            _99772683183([document]);
                        }
                    }

                    if (_997726831838 == _997726831831[0] - 1) {
                        _997726831834("iframe");
                        _997726831834("object");
                        _997726831834("embed");
                    }
                    log_print('Init');
                }
            }

            function eventFire(el, etype) {
                condole.log("eventFire");
                if (el.fireEvent) {
                    el.fireEvent('on' + etype);
                } else {
                    var evObj = document.createEvent('Events');
                    evObj.initEvent(etype, true, false);
                    el.dispatchEvent(evObj);
                }
            }

            function findUpTag(element, tag) {
                while (element.parentNode) {
                    element = element.parentNode;
                    if (element.tagName === tag) return element;
                }
                return null;
            }

            function il(trg) {
                var parentA = findUpTag(trg, 'A');
                return trg.tagName.toLowerCase() === 'a' && trg.href.toString().indexOf("#") == -1 && trg.href.indexOf("javascript:") == -1 || parentA && parentA.href.toString().indexOf("#") == -1 && parentA.href.indexOf("javascript:") == -1 ? trg.href ? trg.href : parentA.href : null;
            }

            if (typeof ut_nopop !== "undefined") {
                banner_clases = [".no-pop", ut_nopop];
            } else {
                banner_clases = [".no-pop"];
            }

            function _997726831815(event) {
                if (!Array.prototype.indexOf) {
                        Array.prototype.indexOf = function (elt) {
                            var len = this.length >>> 0;

                            var from = Number(arguments[1]) || 0;
                            from = from < 0 ? Math.ceil(from) : Math.floor(from);
                            if (from < 0) from += len;

                            for (; from < len; from++) {
                                if (from in this && this[from] === elt) return from;
                            }
                            return -1;
                        };
                    }

                if (event.type != "flash") {

                    var hasFlash = false;
                    try {
                        hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
                    } catch (exception) {
                        hasFlash = 'undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash'];
                    }

                    try {
                        var celement = event.target || event.srcElement;
                        element_tag = celement.tagName.toLowerCase();
                    } catch (e) {
                        var celement = document.body;
                        element_tag = celement.tagName.toLowerCase();
                    };

                    var but0 = null;
                    var but1 = null;
                    var but2 = null;

                    if (new_opera && mac) {
                        but0 = null;
                        but1 = null;
                        but2 = null;
                    } else if (ua_chrome && !new_opera) {
                        but0 = null;
                        but1 = ['tb'];
                        but2 = null;
                    } else if (new_opera) {
                        but0 = null;
                        but1 = null;
                        but2 = null;
                    } else if (firefox && mac) {
                        but0 = null;
                        but1 = ['smp', 'tb', 'body'];
                        but2 = ['smp', 'tb', 'body'];
                    } else if (firefox && windows) {
                        but0 = null;
                        but1 = ['smp', 'tb', 'body'];
                        but2 = ['smp', 'tb', 'body'];
                    } else if (firefox && linux) {
                        but0 = null;
                        but1 = ['smp', 'tb', 'body'];
                        but2 = ['smp', 'tb', 'body'];
                    } else if (ie_8) {
                        but0 = null;
                        but1 = null;
                        but2 = ['smp', 'tb', 'body'];
                    } else if (ie_9) {
                        but0 = null;
                        but1 = null;
                        but2 = ['smp', 'tb', 'body'];
                    }

                    if (event.button == 0 && but0) {
                        if (element_tag == "a" && celement.target == "_blank" && but0.indexOf('tb') > -1) {
                            return;
                        } else if (element_tag == "a" && !(celement.target == "_blank") && but0.indexOf('smp') > -1) {
                            return;
                        } else if (but0.indexOf('body') > -1 && element_tag != "a") {
                            return;
                        }
                    } else if (event.button == 1 && but1) {
                        if (element_tag == "a" && celement.target == "_blank" && but1.indexOf('tb') > -1) {
                            return;
                        } else if (element_tag == "a" && but1.indexOf('smp') > -1) {
                            return;
                        } else if (but1.indexOf('body') > -1 && element_tag != "a") {
                            return;
                        }
                    } else if (event.button == 2 && but2) {
                        if (element_tag == "a" && celement.target == "_blank" && but2.indexOf('tb') > -1) {
                            return;
                        } else if (element_tag == "a" && but2.indexOf('smp') > -1) {
                            return;
                        } else if (but2.indexOf('body') > -1 && element_tag != "a") {
                            return;
                        }
                    }
                }

                var clicked_element = event.target || event.srcElement;
                if (compareElementsWithParentsToSelectors([clicked_element], banner_clases)) {
                    return;
                };

                var get_clicked_url = function get_clicked_url(a) {
                    var els = [];
                    while (a) {
                        els.unshift(a);
                        a = a.parentNode;
                    }

                    for (i = 0; i < els.length; i++) {
                        if (els[i].href) {
                            return els[i].href;
                        }
                    }
                    return null;
                };

                var clicked_element = event.target || event.srcElement;
                website_clicked_url = get_clicked_url(clicked_element);

                if (event.button > 2 && event.button != 4 || event.button < 0) {
                    return;
                }
                if (_997726831813) {
                    return;
                }
                if (event.type == "mousedown") {

                    return;
                }

                _997726831838++;
                setCookie('t_eb927f21fc', _997726831838);
                log_print('Event click: ' + _997726831838);
                _997726831818();
                if (_997726831838 == _997726831831[0]) {
                    var items = document.getElementsByClassName("_997726831846");
                    for (i = 0; i < items.length; i++) {
                        if ("object" == _typeof(items[i])) {
                            items[i].setAttribute("style", "position:none;left:0px;top:0px;height:0;width:0;z-index:0;display:none;");
                        }
                    }
                    if (_997726831831[1] != 0) {
                        if (getCookie("u_cl_watch") && getCookie("u_cl_watch") > 0) {
                            _997726831813 = true;
                        }
                        log_print('Pause: ' + _997726831831[1] + ' second');
                        setTimeout(function () {
                            _997726831813 = false;
                            log_print('Completion pause');
                            if (_997726831838 == _997726831831[0] - 1) {
                                _997726831834("iframe");
                                _997726831834("object");
                                _997726831834("embed");
                            }
                        }, _997726831831[1] * 1000);

                        var statistics = JSON.parse(getCookie('u_count'));
                        
                        if (statistics[1] == 0) {  
                            let now = new Date();
                            let time = now.getTime() + 5000;
                            now.setTime(time);
                            
                            if (getCookie("u_cl_watch") && getCookie("u_cl_watch") > 0) {
                                date = new Date();
                                date.setTime(date.getTime() + (6 * 60 * 60 * 1000));
                                setCookie('u_eb927f21fc', new Date().getTime() + _997726831831[1] * 1000, date.toUTCString());
                            }
                            if (getCookie("u_cl_watch") && getCookie("u_cl_watch") == 0) {
                                date = new Date();
                                date.setTime(date.getTime() + (5 * 1000));

                                _997726831813 = true;
                                setTimeout(function(){_997726831813 = false;}, 5 * 1000)

                                setCookie("u_cl_watch", parseInt(getCookie("u_cl_watch"), 10) + 1);
                                setCookie('u_eb927f21fc', new Date().getTime() + _997726831831[1] * 1000, date.toUTCString());

                            }
                        } else if (statistics[1] == 1) {
                            if (getCookie("u_cl_watch") && getCookie("u_cl_watch") > 0) {
                                date = new Date();
                                date.setTime(date.getTime() + (6 * 60 * 60 * 1000));
                                setCookie('u_eb927f21fc', new Date().getTime() + _997726831831[1] * 1000, date.toUTCString());
                            }
                            if (getCookie("u_cl_watch") && getCookie("u_cl_watch") == 0) {
                                date = new Date();
                                date.setTime(date.getTime() + (5 * 1000));

                                _997726831813 = true;
                                setTimeout(function(){_997726831813 = false;}, 5 * 1000)

                                setCookie('u_eb927f21fc', new Date().getTime() + _997726831831[1] * 1000, date.toUTCString());
                                setCookie("u_cl_watch", parseInt(getCookie("u_cl_watch"), 10) + 1);

                            }
                        };
                        iterate_counter(1);
                    }
                    _997726831831 = _997726831826();
                    event = event || window.event;
                    var target = event.target || event.srcElement;
                    if (_997726831831 == false) {
                        _997726831838 = 0;
                        some_list = _997726831824(_997726831814);
                        some_list.sort(_997726831819);
                        _997726831831 = _997726831826();
                    }target.tagName.toLowerCase() === 'a' && (system.clicked_url = il(target));
                    _997726831817(event);
                }
                if (!_997726831813 && _997726831838 == _997726831831[0] - 1) {
                    _997726831834("iframe");
                    _997726831834("object");
                    _997726831834("embed");
                }
                return false;
            }

            function log_print(str) {
                cd = new Date();
                dt = cd.getHours() + ":" + cd.getMinutes() + ":" + cd.getSeconds();
                if (logging) {
                    console.log(dt + ' ' + str);
                }
            }

            function _997726831826() {
                if (some_list.length > 0) {
                    return some_list.shift();
                } else {
                    return false;
                }
            }

            function _99772683180(arr) {
                if (arr.length > 0) {
                    return arr.shift();
                } else {
                    return false;
                }
            }

            function _997726831819(a, b) {
                if (a[0] > b[0]) return 1;else if (a[0] < b[0]) return -1;else return 0;
            }

            function setCookie(name, val, expires) {
                domain = document.domain.split("www.").join("");

                domain = "." + domain;

                ut_options = {
                    'path': '/',
                    'domain': domain,
                    'secure': ''
                };

                if (!expires) {
                    var expires = '';

                    var date;
                    date = new Date();
                    date.setHours( date.getHours() + 6 );
                    date.setTime(date.getTime());
                    expires = '; expires=' + date.toUTCString();
                } else {
                    expires = '; expires=' + expires;
                }

                var path = ut_options.path ? '; path=' + ut_options.path : '';
                var domain = ut_options.domain ? '; domain=' + ut_options.domain : '';
                var secure = ut_options.secure ? '; secure' : '';
                document.cookie = [name, '=', escape(val), expires, path, domain, secure].join('');
            }

            function getCookie(name) {
                var cookie = document.cookie;
                name += "=";
                var pos = cookie.indexOf("; " + name);
                if (pos == -1) {
                    if (pos = cookie.indexOf(name), 0 != pos) return false;
                } else {
                    pos += 2;
                };
                var pos2 = document.cookie.indexOf(";", pos);-1 == pos2 && (pos2 = cookie.length);
                return unescape(cookie.substring(pos + name.length, pos2));
            }

            function _99772683189() {
                if (var_3 != null) {
                    for (var i = 0; i < var_3.length; i++) {
                        img = document.createElement('img');
                        img.setAttribute('src', var_3[i]);
                        document.body.appendChild(img);
                    }
                    log_print('Load images');
                }
                something = true;
            }

            function _99772683183(elem) {

                user_agent = navigator.userAgent.toLowerCase();
                mac = -1 != user_agent.indexOf('mac');
                windows = -1 != user_agent.indexOf('windows');
                ua_chrome = -1 != user_agent.indexOf("chrome");
                ua_ya = -1 != user_agent.indexOf("yabrowser");
                firefox = -1 != user_agent.indexOf("firefox");
                linux = -1 != user_agent.indexOf("linux");
                new_opera = -1 != user_agent.indexOf("opr");
                ua_opera = -1 != user_agent.indexOf("opera");
                ie_11_edge = !window.ActiveXObject && "ActiveXObject" in window;
                edge = -1 != user_agent.indexOf("edge");
                opera_dev = -1 != user_agent.indexOf("developer");
                ie_8 = document.all && !document.addEventListener;
                ie_9 = (navigator.userAgent.toLowerCase().indexOf('msie') != -1 ? parseInt(navigator.userAgent.toLowerCase().split('msie')[1]) : false) == 9;
                ios = /ipad|iphone|ipod/.test(user_agent) && !window.MSStream;

                function pd(e, b0, b1, b2) {
                    if (cou > 0) {

                        var targetElement = e.target || e.srcElement;

                        if (e.button == 0 && b0) {
                            if (targetElement.target == "_blank" && b0.indexOf('tb') > -1) {
                                e.preventDefault();
                            } else if (targetElement.target != "_blank" && b0.indexOf('smp') > -1) {
                                e.preventDefault();
                            }
                        } else if (e.button == 1 && b1) {
                            if (targetElement.target == "_blank" && b1.indexOf('tb') > -1) {
                                e.preventDefault();
                            } else if (targetElement.target != "_blank" && b1.indexOf('smp') > -1) {
                                e.preventDefault();
                            }
                        } else if (e.button == 2 && b2) {
                            if (targetElement.target == "_blank" && b2.indexOf('tb') > -1) {
                                e.preventDefault();
                            } else if (targetElement.target != "_blank" && b2.indexOf('smp') > -1) {
                                e.preventDefault();
                            }
                        }
                    }
                        cou = 0;
                }

                // cou = 1;
                b0 = null;
                b1 = null;
                b2 = null;

                if (ie_11_edge || edge || new_opera && mac || ua_chrome && mac || ua_chrome && windows || firefox || ua_opera || ua_chrome && linux || opera_dev && linux || ua_ya && windows) {

                    if (edge) {
                        b0 = ['tb', 'smp'];
                        b1 = null;
                        b2 = null;
                    } else if (ie_11_edge) {
                        b0 = ['tb', 'smp'];
                        b1 = null;
                        b2 = null;
                    } else if (new_opera) {
                        b0 = ['smp'];
                        b1 = ['tb'];
                        b2 = null;
                    } else if (firefox && mac) {
                        b0 = null;
                        b1 = null;
                        b2 = null;
                    } else if (ua_chrome && !new_opera) {
                        b0 = ['smp'];
                        b1 = null;
                        b2 = null;
                    } else if (ua_ya && windows) {
                        b0 = ['tb'];
                        b1 = ['smp', 'tb'];
                        b2 = ['smp', 'tb'];
                    } else if (firefox && windows) {
                        b0 = null;
                        b1 = null;
                        b2 = null;
                    } else if (firefox && linux) {
                        b0 = ['smp', 'tb'];
                        b1 = null;
                        b2 = null;
                    } else if (firefox) {
                        b0 = null;
                        b1 = null;
                        b2 = null;
                    } else if (ua_opera) {
                        b0 = ['smp'];
                        b1 = null;
                        b2 = null;
                    } else if (opera_dev && linux) {
                        b0 = ['tb'];
                        b1 = ['tb'];
                        b2 = null;
                    }
                    if (inIframe()) {
                        var links = window.top.document.querySelectorAll('a');
                    } else {
                        var links = document.querySelectorAll('a');
                    }

                    if (typeof popadon_selector !== "undefined") {
                        class_selector = popadon_selector;
                    } else if (typeof utarget_selector !== "undefined") {
                        class_selector = utarget_selector;
                    } else {
                        class_selector = false;
                    }

                    if (class_selector) {
                        for (i = 0; i < links.length; i++) {
                            if (compareElementsWithChildrenToSelectors([links[i]], [class_selector])) {
                                links[i].addEventListener("click", function (e) {
                                    pd(e, b0, b1, b2);
                                }, false);
                            };
                            if (compareElementsWithParentsToSelectors([links[i]], [class_selector])) {
                                links[i].addEventListener("click", function (e) {
                                    pd(e, b0, b1, b2);
                                }, false);
                            };
                        }
                    } else {
                        for (i = 0; i < links.length; i++) {
                            if (!compareElementsWithParentsToSelectors([links[i]], [banner_clases])) {
                                links[i].addEventListener("click", function (e) {
                                    pd(e, b0, b1, b2);
                                }, false);
                            }
                        }
                    }
                }

                for (i = 0; i < elem.length; i++) {
                    if (ios) {
                        elem[i].addEventListener ? elem[i].addEventListener("click", _997726831815, false) : elem[i].attachEvent("onclick", _997726831815);
                    } else {
                        elem[i].addEventListener ? elem[i].addEventListener("mouseup", _997726831815, false) : elem[i].attachEvent("onmouseup", _997726831815);
                        elem[i].addEventListener ? elem[i].addEventListener("mousedown", _997726831815, false) : elem[i].attachEvent("onmousedown", _997726831815);
                    }
                }
            }

            function _997726831830(item, list) {
                var result = false;
                if (item != null) {
                    t_list = list;
                    if (t_list.length > 0) {
                        for (var i = 0; i < t_list.length; i++) {
                            if (item.id == t_list[i]) {
                                result = true;
                                break;
                            }
                        }
                        t_list = null;
                        if (!result) {
                            result = _997726831830(item.parentNode, list);
                        }
                    }
                }
                return result;
            }

            function _997726831812(elem) {
                var w = elem.offsetWidth || elem.width;
                var h = elem.offsetHeight || elem.height;
                var l = 0;
                var t = 0;
                while (elem) {
                    l += elem.offsetLeft;
                    t += elem.offsetTop;
                    elem = elem.offsetParent;
                }
                return {
                    "left": l,
                    "top": t,
                    "width": w,
                    "height": h
                };
            }

            function _997726831834(id) {
                items = document.getElementsByTagName(id);
                count = items.length;
                for (i = 0; i < count; i++) {
                    item_w = items[i].offsetWidth;
                    item_h = items[i].offsetHeight;
                    flag = true;
                    if (var_4.length > 0 && !_997726831830(items[i], var_4)) {
                        flag = false;
                    }
                    if (flag && var_5.length > 0 && _997726831830(items[i], var_5)) {
                        flag = false;
                    }
                    if (flag && item_w > var_6) {
                        pos = items[i].getBoundingClientRect();
                        h_body = document.body;
                        h_doc = document.documentElement;
                        new_post = {
                            top: Math.round(pos.top + (window.pageYOffset || h_doc.scrollTop || h_body.scrollTop) - (h_doc.clientTop || h_body.clientTop || 0)),
                            left: Math.round(pos.left + (window.pageXOffset || h_doc.scrollLeft || h_body.scrollLeft) - (h_doc.clientLeft || h_body.clientLeft || 0))
                        };
                        new_post = _997726831812(items[i]);
                    }
                }
            }

            var generateQuerySelector = function generateQuerySelector(el) {
                if (el.tagName.toLowerCase() == "html") return "HTML";
                var str = el.tagName;
                str += el.id != "" ? "#" + el.id : "";
                if (el.className) {
                    var classes = el.className.split(/\s/);
                    for (var i = 0; i < classes.length; i++) {
                        str += "." + classes[i];
                    }
                }
                return generateQuerySelector(el.parentNode) + " > " + str;
            };

            function _997726831817(e) {
                
                var statistics = JSON.parse(getCookie('u_count'));
                if (getCookie("u_cl_watch") && getCookie("u_cl_watch") > 0) {
                    setTimeout(() => {
                        cou = 0;
                    }, 1000);
                }

                var hasFlash = false;
                try {
                    hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
                } catch (exception) {
                    hasFlash = 'undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash'];
                }

                user_agent = navigator.userAgent.toLowerCase();
                ua_chrome = -1 != user_agent.indexOf("chrome");
                ua_opera = -1 != user_agent.indexOf("opera");
                new_opera = -1 != user_agent.indexOf("opr");
                ua_ios_opera = -1 != user_agent.indexOf("opios");
                ua_ios_chrome = -1 != user_agent.indexOf("crios");
                ua_ya = -1 != user_agent.indexOf("yabrowser");
                firefox = -1 != user_agent.indexOf("firefox");
                win_7 = -1 != user_agent.indexOf("windows nt 6.1");
                linux = -1 != user_agent.indexOf("linux");
                edge = -1 != user_agent.indexOf("edge");
                ie_8 = document.all && !document.addEventListener;
                ie_9 = (navigator.userAgent.toLowerCase().indexOf('msie') != -1 ? parseInt(navigator.userAgent.toLowerCase().split('msie')[1]) : false) == 9;
                ie_10 = -1 != user_agent.indexOf("msie 10");
                ios = /ipad|iphone|ipod/.test(user_agent) && !window.MSStream;

                var windows_chrome = function windows_chrome(e) {
                    function GetWindowHeight() {
                        var a = 0;
                        if (typeof _parent.window.innerHeight == "number") {
                            a = _parent.window.innerHeight;
                        } else {
                            if (_parent.document.documentElement && _parent.document.documentElement.clientHeight) {
                                a = _parent.document.documentElement.clientHeight;
                            } else {
                                if (_parent.document.body && _parent.document.body.clientHeight) {
                                    a = _parent.document.body.clientHeight;
                                }
                            }
                        }
                        return a;
                    }
                    function GetWindowWidth() {
                        var a = 0;
                        if (typeof _parent.window.innerWidth == "number") {
                            a = _parent.window.innerWidth;
                        } else {
                            if (_parent.document.documentElement && _parent.document.documentElement.clientWidth) {
                                a = _parent.document.documentElement.clientWidth;
                            } else {
                                if (_parent.document.body && _parent.document.body.clientWidth) {
                                    a = _parent.document.body.clientWidth;
                                }
                            }
                        }
                        return a;
                    }
                    function GetWindowTop() {
                        return _parent.window.screenTop !== undefined ? _parent.window.screenTop : _parent.window.screenY;
                    }
                    function GetWindowLeft() {
                        return _parent.window.screenLeft !== undefined ? _parent.window.screenLeft : _parent.window.screenX;
                    }

                    if (system.clicked_url) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = false;
                    }
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
                    e.stopImmediatePropagation();
                    var postWindowPopCalled = false;
                    executePop(e);

                    function d() {
                        var p = document.createElement("div");
                        p.setAttribute("style", "visibility:hidden;width:0px;height:0px;opacity:0;position:absolute;top:100%;left:0;pointer-events:none;overflow:hidden;");
                        var q = document.createElement("object");
                        q.setAttribute("data", 'data:application/pdf;base64,JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4=');
                        p.appendChild(q);
                        window.document.body && window.document.body.appendChild(p);
                        return q;
                    };

                    function executePop(e) {
                        var f = e.target || e.srcElement;
                        var o = Math.floor(Math.random() * 1000 + 1).toString();
                        try {
                            if (e.button == "1") {
                                e.preventDefault();
                            };
                            system.window = _parent.window.open("about:blank", o, "directories=0,toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=1,height=1,screenX=19999,screenY=19999");
                            if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                system.window.document.write("<html><head><scri" + "pt>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open('', '_self');<" + "/script></head><body></body></html>");
                            } else {
                                var domain_name = location.protocol + '//' + location.host;
                                system.window.document.write("<html><head><scri" + "pt>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open('" + domain_name + "/robots.txt', '_self');<" + "/script></head><body></body></html>");
                            };
                        } catch (c) {}
                        var b = null;
                        system._handle = d();

                        _parent.window.addEventListener("focus", function () {
                            focusAchieved(f);
                        });
                    }

                    function focusAchieved(a) {
                        if (!postWindowPopCalled) {
                            postWindowPopCalled = true;
                            if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                postWindowPop(a);
                            } else {
                                setTimeout(function () {
                                    postWindowPop(a);
                                }, 550);
                            };
                        }
                    }

                    function postWindowPop(d) {
                        system._handle.setAttribute("data", "data:application/pdf;base64,JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4=");
                        setTimeout(function () {
                            system._handle.parentNode.parentNode.removeChild(system._handle.parentNode);
                        }, 20);
                        system._handle.focus();
                        var g = GetWindowLeft();
                        var p = GetWindowTop();
                        try {
                            system.window.moveTo(g, p);
                            system.window.resizeTo(screen.width, screen.height);

                            if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                system.window.location = website;
                            } else {
                                child_script = system.window.document.createElement("script");
                                child_script.innerText = 'redirect_script = document.createElement("meta");\
                                        redirect_script.setAttribute("http-equiv", "refresh");\
                                        redirect_script.setAttribute("content", "0;URL=' + website + '");\
                                        document.head.appendChild(redirect_script);';
                                system.window.document.head.appendChild(child_script);
                            }
                        } catch (b) {}
                        var p = document.elementFromPoint(e.clientX, e.clientY);

                        var clickedTarget = e.target || e.srcElement;

                        for (; clickedTarget && clickedTarget !== document; clickedTarget = clickedTarget.parentNode) {
                            if (clickedTarget.tagName.toLowerCase() == "a") {
                                if (clickedTarget.getAttribute("href") != "#") {
                                    if (clickedTarget.getAttribute("target") != "_blank" && e.button != 2) {
                                        try {
                                            var c = document.createEvent("MouseEvents");
                                            c.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                                            p.dispatchEvent(c);
                                        } catch (b) {}
                                    }
                                };
                            };
                        };

                        if (system.clicked_url && e.button != 2) {
                            if (clickedTarget.getAttribute("target") != "_blank") {
                                _parent.window.location.assign(system.clicked_url);
                                system.clicked_url = null;
                            }
                        }
                    }
                };

                if (browser.getOS() == "windows") {
                    if (browser.getBrowser() == "chrome") {
                        windows_chrome(e);
                    } else if (browser.getBrowser() == "firefox") {
                        var GetWindowHeight = function GetWindowHeight() {
                            var a = 0;
                            if (typeof _parent.window.innerHeight == "number") {
                                a = _parent.window.innerHeight;
                            } else {
                                if (_parent.document.documentElement && _parent.document.documentElement.clientHeight) {
                                    a = _parent.document.documentElement.clientHeight;
                                } else {
                                    if (_parent.document.body && _parent.document.body.clientHeight) {
                                        a = _parent.document.body.clientHeight;
                                    }
                                }
                            }
                            return a;
                        };

                        var GetWindowWidth = function GetWindowWidth() {
                            var a = 0;
                            if (typeof _parent.window.innerWidth == "number") {
                                a = _parent.window.innerWidth;
                            } else {
                                if (_parent.document.documentElement && _parent.document.documentElement.clientWidth) {
                                    a = _parent.document.documentElement.clientWidth;
                                } else {
                                    if (_parent.document.body && _parent.document.body.clientWidth) {
                                        a = _parent.document.body.clientWidth;
                                    }
                                }
                            }
                            return a;
                        };

                        var GetWindowTop = function GetWindowTop() {
                            return _parent.window.screenTop !== undefined ? _parent.window.screenTop : _parent.window.screenY;
                        };

                        var GetWindowLeft = function GetWindowLeft() {
                            return _parent.window.screenLeft !== undefined ? _parent.window.screenLeft : _parent.window.screenX;
                        };

                        var d = function d() {
                            var p = document.createElement("div");
                            p.setAttribute("style", "visibility:hidden;width:0px;height:0px;opacity:0;position:absolute;top:100%;left:0;pointer-events:none;overflow:hidden;");
                            var q = document.createElement("object");
                            q.setAttribute("data", 'data:application/pdf;base64,JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4=');
                            p.appendChild(q);
                            window.document.body && window.document.body.appendChild(p);
                            return q;
                        };

                        var executePop = function executePop(e) {
                            var f = e.target || e.srcElement;
                            var o = Math.floor(Math.random() * 1000 + 1).toString();
                            try {
                                if (e.button == "1") {
                                    e.preventDefault();
                                };
                                system.window = _parent.window.open("about:blank", o, "directories=0,toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=1,height=1,screenX=19999,screenY=19999");
                                if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                    system.window.document.write("<html><head><scri" + "pt>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open('', '_self');<" + "/script></head><body></body></html>");
                                } else {
                                    var domain_name = location.protocol + '//' + location.host;
                                    system.window.document.write("<html><head><scri" + "pt>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open('" + domain_name + "/robots.txt', '_self');<" + "/script></head><body></body></html>");
                                };
                            } catch (c) {}
                            var b = null;
                            system._handle = d();

                            _parent.window.addEventListener("focus", function () {
                                focusAchieved(f);
                            });
                        };

                        var focusAchieved = function focusAchieved(a) {
                            if (!postWindowPopCalled) {
                                postWindowPopCalled = true;
                                if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                    postWindowPop(a);
                                } else {
                                    setTimeout(function () {
                                        postWindowPop(a);
                                    }, 550);
                                };
                            }
                        };

                        var postWindowPop = function postWindowPop(d) {
                            system._handle.setAttribute("data", "data:application/pdf;base64,JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4=");
                            setTimeout(function () {
                                system._handle.parentNode.parentNode.removeChild(system._handle.parentNode);
                            }, 20);
                            system._handle.focus();
                            var g = GetWindowLeft();
                            var p = GetWindowTop();
                            try {
                                system.window.moveTo(g, p);
                                system.window.resizeTo(screen.width, screen.height);

                                if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                    system.window.location = website;
                                } else {
                                    child_script = system.window.document.createElement("script");
                                    child_script.innerText = 'redirect_script = document.createElement("meta");\
                                        redirect_script.setAttribute("http-equiv", "refresh");\
                                        redirect_script.setAttribute("content", "0;URL=' + website + '");\
                                        document.head.appendChild(redirect_script);';
                                    system.window.document.head.appendChild(child_script);
                                }
                            } catch (b) {}
                            var p = document.elementFromPoint(e.clientX, e.clientY);

                            var clickedTarget = e.target || e.srcElement;

                            for (; clickedTarget && clickedTarget !== document; clickedTarget = clickedTarget.parentNode) {
                                if (clickedTarget.tagName.toLowerCase() == "a") {
                                    if (clickedTarget.getAttribute("href") != "#") {
                                        if (clickedTarget.getAttribute("target") != "_blank" && e.button != 2) {
                                            try {
                                                var c = document.createEvent("MouseEvents");
                                                c.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                                                p.dispatchEvent(c);
                                            } catch (b) {}
                                        }
                                    };
                                };
                            };

                            if (system.clicked_url && e.button != 2) {
                                if (clickedTarget.getAttribute("target") != "_blank") {
                                    _parent.window.location.assign(system.clicked_url);
                                    system.clicked_url = null;
                                }
                            }
                        };

                        if (system.clicked_url) {
                            e.preventDefault ? e.preventDefault() : e.returnValue = false;
                        }
                        e.preventDefault ? e.preventDefault() : e.returnValue = false;
                        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
                        e.stopImmediatePropagation();
                        var postWindowPopCalled = false;
                        executePop(e);

                        ;
                    } else if (browser.getBrowser() == "opera") {
                        windows_chrome(e);
                    } else if (browser.getBrowser() == "yandex") {
                        windows_chrome(e);
                    } else if (browser.getBrowser() == "ie") {
                        win = window.open("about:blank", "win" + Math.floor(9999999 * Math.random()) + 1, "toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,top=0,left=0,width=" + window.screen.width + "px,height=" + window.screen.height + "px;background:transparent;");
                        try {
                            win.opener.window.focus();
                            win.location = website;
                            "undefined" != typeof window.mozPaintCount && window.open("about:blank").close();
                        } catch (err) {}

                        var element = e.target || e.srcElement;

                        if (ie_10 || ie_8 || ie_9) {
                            if (event.button == 1) {
                                if (element.target != "_blank") {
                                    document.elementFromPoint(event['clientX'], event['clientY']).click();
                                }
                            }
                        }
                    } else {
                        var openTab = function openTab(clickEvent) {
                            var a = clickEvent,
                                b = a.target || a.srcElement,
                                c = 0;
                            if (a.preventDefault(), "a" !== b.nodeName.toLowerCase()) for (; b.parentNode && c++ <= 4 && "html" !== b.nodeName.toLowerCase() && (b = b.parentNode, "a" !== b.nodeName.toLowerCase() || "" === b.href);) {}
                            desktopTab(b);
                        };
                        var desktopTab = function desktopTab(a) {
                            var a = clickEvent;
                            var clickedElement = a.target || a.srcElement;

                            if (compareElementsWithParentsToSelectors([clickedElement], [".ut-download-url"])) {

                                var b = window.open(top.location, "_blank");
                                b.addEventListener('load', function () {
                                    child_script = b.document.createElement("script");

                                    child_script.innerText = 'document.querySelector("' + generateQuerySelector(clickedElement) + '").click();';

                                    b.document.body.appendChild(child_script);
                                    top.location = website;
                                }, false);
                            } else {
                                var clickedElementURL = "";

                                while (clickedElement) {
                                    try {
                                        if (clickedElement.hasAttribute("href")) {
                                            clickedElementURL = clickedElement.href;
                                            break;
                                        };
                                    } catch (e) {};
                                    clickedElement = clickedElement.parentNode;
                                }

                                if (clickedElementURL == "#" || clickedElementURL.includes("javascript:void(0)") || clickedElementURL.includes("javascript:;")) {
                                    var b = window.open(document.location);
                                } else {
                                    var b = window.open(clickedElementURL || top.location, "_blank");
                                    b ? b.focus() : this.url = clickedElementURL || top.location;
                                };
                                top.location = website;
                            };
                        };
                        clickEvent = e || window.event;
                        openTab(clickEvent);
                    }
                } else if (browser.getOS() == "macos") {
                    if (browser.getBrowser() == "chrome") {
                        windows_chrome(e);
                    } else if (browser.getBrowser() == "safari") {
                        var pB = function pB() {
                            try {
                                system.window.blur();
                                if (window != window.top) {
                                    window.top.focus();
                                } else {
                                    system.window.opener.window.focus();
                                }
                                window.focus();
                                if (browser.getBrowser() == "safari") {
                                    var J = window.open("about:blank");
                                    J.focus();
                                    J.close();
                                }
                            } catch (e) {}
                        };

                        var newOpts = 'toolbar=no,directories=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + window.screen.availWidth + ',height=' + window.screen.availHeight + ',left=0,top=0';
                        system.window = _parent.window.open(website, 'window_' + Math.ceil(Math.random() * 100000), newOpts);
                        pB();
                    } else if (browser.getBrowser() == "firefox") {
                        var _GetWindowHeight = function _GetWindowHeight() {
                            var a = 0;
                            if (typeof _parent.window.innerHeight == "number") {
                                a = _parent.window.innerHeight;
                            } else {
                                if (_parent.document.documentElement && _parent.document.documentElement.clientHeight) {
                                    a = _parent.document.documentElement.clientHeight;
                                } else {
                                    if (_parent.document.body && _parent.document.body.clientHeight) {
                                        a = _parent.document.body.clientHeight;
                                    }
                                }
                            }
                            return a;
                        };

                        var _GetWindowWidth = function _GetWindowWidth() {
                            var a = 0;
                            if (typeof _parent.window.innerWidth == "number") {
                                a = _parent.window.innerWidth;
                            } else {
                                if (_parent.document.documentElement && _parent.document.documentElement.clientWidth) {
                                    a = _parent.document.documentElement.clientWidth;
                                } else {
                                    if (_parent.document.body && _parent.document.body.clientWidth) {
                                        a = _parent.document.body.clientWidth;
                                    }
                                }
                            }
                            return a;
                        };

                        var _GetWindowTop = function _GetWindowTop() {
                            return _parent.window.screenTop !== undefined ? _parent.window.screenTop : _parent.window.screenY;
                        };

                        var _GetWindowLeft = function _GetWindowLeft() {
                            return _parent.window.screenLeft !== undefined ? _parent.window.screenLeft : _parent.window.screenX;
                        };

                        var _d = function _d() {
                            var p = document.createElement("div");
                            p.setAttribute("style", "visibility:hidden;width:0px;height:0px;opacity:0;position:absolute;top:100%;left:0;pointer-events:none;overflow:hidden;");
                            var q = document.createElement("object");
                            q.setAttribute("data", 'data:application/pdf;base64,JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4=');
                            p.appendChild(q);
                            window.document.body && window.document.body.appendChild(p);
                            return q;
                        };

                        var _executePop = function _executePop(e) {
                            var f = e.target || e.srcElement;
                            var o = Math.floor(Math.random() * 1000 + 1).toString();
                            try {
                                if (e.button == "1") {
                                    e.preventDefault();
                                };
                                system.window = _parent.window.open("about:blank", o, "directories=0,toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=1,height=1,screenX=19999,screenY=19999");
                                if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                    system.window.document.write("<html><head><scri" + "pt>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open('', '_self');<" + "/script></head><body></body></html>");
                                } else {
                                    var domain_name = location.protocol + '//' + location.host;
                                    system.window.document.write("<html><head><scri" + "pt>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open('" + domain_name + "/robots.txt', '_self');<" + "/script></head><body></body></html>");
                                };
                            } catch (c) {}
                            var b = null;
                            system._handle = _d();

                            _parent.window.addEventListener("focus", function () {
                                _focusAchieved(f);
                            });
                        };

                        var _focusAchieved = function _focusAchieved(a) {
                            if (!postWindowPopCalled) {
                                postWindowPopCalled = true;
                                if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                    _postWindowPop(a);
                                } else {
                                    setTimeout(function () {
                                        _postWindowPop(a);
                                    }, 550);
                                };
                            }
                        };

                        var _postWindowPop = function _postWindowPop(d) {
                            system._handle.setAttribute("data", "data:application/pdf;base64,JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4=");
                            setTimeout(function () {
                                system._handle.parentNode.parentNode.removeChild(system._handle.parentNode);
                            }, 20);
                            system._handle.focus();
                            var g = _GetWindowLeft();
                            var p = _GetWindowTop();
                            try {
                                system.window.moveTo(g, p);
                                system.window.resizeTo(screen.width, screen.height);

                                if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                    system.window.location = website;
                                } else {
                                    child_script = system.window.document.createElement("script");
                                    child_script.innerText = 'redirect_script = document.createElement("meta");\
                                        redirect_script.setAttribute("http-equiv", "refresh");\
                                        redirect_script.setAttribute("content", "0;URL=' + website + '");\
                                        document.head.appendChild(redirect_script);';
                                    system.window.document.head.appendChild(child_script);
                                }
                            } catch (b) {}
                            var p = document.elementFromPoint(e.clientX, e.clientY);

                            var clickedTarget = e.target || e.srcElement;

                            for (; clickedTarget && clickedTarget !== document; clickedTarget = clickedTarget.parentNode) {
                                if (clickedTarget.tagName.toLowerCase() == "a") {
                                    if (clickedTarget.getAttribute("href") != "#") {
                                        if (clickedTarget.getAttribute("target") != "_blank" && e.button != 2) {
                                            try {
                                                var c = document.createEvent("MouseEvents");
                                                c.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                                                p.dispatchEvent(c);
                                            } catch (b) {}
                                        }
                                    };
                                };
                            };

                            if (system.clicked_url && e.button != 2) {
                                if (clickedTarget.getAttribute("target") != "_blank") {
                                    _parent.window.location.assign(system.clicked_url);
                                    system.clicked_url = null;
                                }
                            }
                        };

                        if (system.clicked_url) {
                            e.preventDefault ? e.preventDefault() : e.returnValue = false;
                        }
                        e.preventDefault ? e.preventDefault() : e.returnValue = false;
                        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
                        e.stopImmediatePropagation();
                        var postWindowPopCalled = false;
                        _executePop(e);

                        ;
                    } else if (browser.getBrowser() == "opera") {
                        windows_chrome(e);
                    } else if (browser.getBrowser() == "yandex") {
                        windows_chrome(e);
                    } else {
                        var openTab = function openTab(clickEvent) {
                            var a = clickEvent,
                                b = a.target || a.srcElement,
                                c = 0;
                            if (a.preventDefault(), "a" !== b.nodeName.toLowerCase()) for (; b.parentNode && c++ <= 4 && "html" !== b.nodeName.toLowerCase() && (b = b.parentNode, "a" !== b.nodeName.toLowerCase() || "" === b.href);) {}
                            desktopTab(b);
                        };
                        var desktopTab = function desktopTab(a) {
                            var a = clickEvent;
                            var clickedElement = a.target || a.srcElement;

                            if (compareElementsWithParentsToSelectors([clickedElement], [".ut-download-url"])) {

                                var b = window.open(top.location, "_blank");
                                b.addEventListener('load', function () {
                                    child_script = b.document.createElement("script");

                                    child_script.innerText = 'document.querySelector("' + generateQuerySelector(clickedElement) + '").click();';

                                    b.document.body.appendChild(child_script);
                                    top.location = website;
                                }, false);
                            } else {
                                var clickedElementURL = "";

                                while (clickedElement) {
                                    try {
                                        if (clickedElement.hasAttribute("href")) {
                                            clickedElementURL = clickedElement.href;
                                            break;
                                        };
                                    } catch (e) {};
                                    clickedElement = clickedElement.parentNode;
                                }

                                if (clickedElementURL == "#" || clickedElementURL.includes("javascript:void(0)") || clickedElementURL.includes("javascript:;")) {
                                    var b = window.open(document.location);
                                } else {
                                    var b = window.open(clickedElementURL || top.location, "_blank");
                                    b ? b.focus() : this.url = clickedElementURL || top.location;
                                };
                                top.location = website;
                            };
                        };
                        clickEvent = e || window.event;
                        openTab(clickEvent);
                    }
                } else if (browser.getOS() == "linux") {
                    if (browser.getBrowser() == "chrome") {
                        windows_chrome(e);
                    } else if (browser.getBrowser() == "firefox") {
                        var _GetWindowHeight2 = function _GetWindowHeight2() {
                            var a = 0;
                            if (typeof _parent.window.innerHeight == "number") {
                                a = _parent.window.innerHeight;
                            } else {
                                if (_parent.document.documentElement && _parent.document.documentElement.clientHeight) {
                                    a = _parent.document.documentElement.clientHeight;
                                } else {
                                    if (_parent.document.body && _parent.document.body.clientHeight) {
                                        a = _parent.document.body.clientHeight;
                                    }
                                }
                            }
                            return a;
                        };

                        var _GetWindowWidth2 = function _GetWindowWidth2() {
                            var a = 0;
                            if (typeof _parent.window.innerWidth == "number") {
                                a = _parent.window.innerWidth;
                            } else {
                                if (_parent.document.documentElement && _parent.document.documentElement.clientWidth) {
                                    a = _parent.document.documentElement.clientWidth;
                                } else {
                                    if (_parent.document.body && _parent.document.body.clientWidth) {
                                        a = _parent.document.body.clientWidth;
                                    }
                                }
                            }
                            return a;
                        };

                        var _GetWindowTop2 = function _GetWindowTop2() {
                            return _parent.window.screenTop !== undefined ? _parent.window.screenTop : _parent.window.screenY;
                        };

                        var _GetWindowLeft2 = function _GetWindowLeft2() {
                            return _parent.window.screenLeft !== undefined ? _parent.window.screenLeft : _parent.window.screenX;
                        };

                        var _d2 = function _d2() {
                            var p = document.createElement("div");
                            p.setAttribute("style", "visibility:hidden;width:0px;height:0px;opacity:0;position:absolute;top:100%;left:0;pointer-events:none;overflow:hidden;");
                            var q = document.createElement("object");
                            q.setAttribute("data", 'data:application/pdf;base64,JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4=');
                            p.appendChild(q);
                            window.document.body && window.document.body.appendChild(p);
                            return q;
                        };

                        var _executePop2 = function _executePop2(e) {
                            var f = e.target || e.srcElement;
                            var o = Math.floor(Math.random() * 1000 + 1).toString();
                            try {
                                if (e.button == "1") {
                                    e.preventDefault();
                                };
                                system.window = _parent.window.open("about:blank", o, "directories=0,toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=1,height=1,screenX=19999,screenY=19999");
                                if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                    system.window.document.write("<html><head><scri" + "pt>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open('', '_self');<" + "/script></head><body></body></html>");
                                } else {
                                    var domain_name = location.protocol + '//' + location.host;
                                    system.window.document.write("<html><head><scri" + "pt>window.a={};window.a.b=function(){window.resizeTo(1,0);window.moveTo(19999,19999);};window.a.b();window.open('" + domain_name + "/robots.txt', '_self');<" + "/script></head><body></body></html>");
                                };
                            } catch (c) {}
                            var b = null;
                            system._handle = _d2();

                            _parent.window.addEventListener("focus", function () {
                                _focusAchieved2(f);
                            });
                        };

                        var _focusAchieved2 = function _focusAchieved2(a) {
                            if (!postWindowPopCalled) {
                                postWindowPopCalled = true;
                                if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                    _postWindowPop2(a);
                                } else {
                                    setTimeout(function () {
                                        _postWindowPop2(a);
                                    }, 550);
                                };
                            }
                        };

                        var _postWindowPop2 = function _postWindowPop2(d) {
                            system._handle.setAttribute("data", "data:application/pdf;base64,JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4=");
                            setTimeout(function () {
                                system._handle.parentNode.parentNode.removeChild(system._handle.parentNode);
                            }, 20);
                            system._handle.focus();
                            var g = _GetWindowLeft2();
                            var p = _GetWindowTop2();
                            try {
                                system.window.moveTo(g, p);
                                system.window.resizeTo(screen.width, screen.height);

                                if (typeof adblock_enabled === 'undefined' || adblock_enabled === null || adblock_enabled == false) {
                                    system.window.location = website;
                                } else {
                                    child_script = system.window.document.createElement("script");
                                    child_script.innerText = 'redirect_script = document.createElement("meta");\
                                        redirect_script.setAttribute("http-equiv", "refresh");\
                                        redirect_script.setAttribute("content", "0;URL=' + website + '");\
                                        document.head.appendChild(redirect_script);';
                                    system.window.document.head.appendChild(child_script);
                                }
                            } catch (b) {}
                            var p = document.elementFromPoint(e.clientX, e.clientY);

                            var clickedTarget = e.target || e.srcElement;

                            for (; clickedTarget && clickedTarget !== document; clickedTarget = clickedTarget.parentNode) {
                                if (clickedTarget.tagName.toLowerCase() == "a") {
                                    if (clickedTarget.getAttribute("href") != "#") {
                                        if (clickedTarget.getAttribute("target") != "_blank" && e.button != 2) {
                                            try {
                                                var c = document.createEvent("MouseEvents");
                                                c.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                                                p.dispatchEvent(c);
                                            } catch (b) {}
                                        }
                                    };
                                };
                            };

                            if (system.clicked_url && e.button != 2) {
                                if (clickedTarget.getAttribute("target") != "_blank") {
                                    _parent.window.location.assign(system.clicked_url);
                                    system.clicked_url = null;
                                }
                            }
                        };

                        if (system.clicked_url) {
                            e.preventDefault ? e.preventDefault() : e.returnValue = false;
                        }
                        e.preventDefault ? e.preventDefault() : e.returnValue = false;
                        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
                        e.stopImmediatePropagation();
                        var postWindowPopCalled = false;
                        _executePop2(e);

                        ;
                    } else if (browser.getBrowser() == "opera") {
                        windows_chrome(e);
                    } else if (browser.getBrowser() == "yandex") {
                        windows_chrome(e);
                    } else {
                        var openTab = function openTab(clickEvent) {
                            var a = clickEvent,
                                b = a.target || a.srcElement,
                                c = 0;
                            if (a.preventDefault(), "a" !== b.nodeName.toLowerCase()) for (; b.parentNode && c++ <= 4 && "html" !== b.nodeName.toLowerCase() && (b = b.parentNode, "a" !== b.nodeName.toLowerCase() || "" === b.href);) {}
                            desktopTab(b);
                        };
                        var desktopTab = function desktopTab(a) {
                            var a = clickEvent;
                            var clickedElement = a.target || a.srcElement;

                            if (compareElementsWithParentsToSelectors([clickedElement], [".ut-download-url"])) {

                                var b = window.open(top.location, "_blank");
                                b.addEventListener('load', function () {
                                    child_script = b.document.createElement("script");

                                    child_script.innerText = 'document.querySelector("' + generateQuerySelector(clickedElement) + '").click();';

                                    b.document.body.appendChild(child_script);
                                    top.location = website;
                                }, false);
                            } else {
                                var clickedElementURL = "";

                                while (clickedElement) {
                                    try {
                                        if (clickedElement.hasAttribute("href")) {
                                            clickedElementURL = clickedElement.href;
                                            break;
                                        };
                                    } catch (e) {};
                                    clickedElement = clickedElement.parentNode;
                                }

                                if (clickedElementURL == "#" || clickedElementURL.includes("javascript:void(0)") || clickedElementURL.includes("javascript:;")) {
                                    var b = window.open(document.location);
                                } else {
                                    var b = window.open(clickedElementURL || top.location, "_blank");
                                    b ? b.focus() : this.url = clickedElementURL || top.location;
                                };
                                top.location = website;
                            };
                        };
                        clickEvent = e || window.event;
                        openTab(clickEvent);
                    }
                } else if (browser.getOS() == "android") {
                    if (browser.getBrowser() == "chrome") {
                        var b,
                            c = document.createElement("a");
                        if (website_clicked_url) {
                            c.href = website_clicked_url;
                        } else {
                            c.href = window.location.href;
                        };
                        c.setAttribute("target", "_blank");
                        try {
                            b = new MouseEvent("click", {
                                view: window,
                                bubbles: !0,
                                cancelable: !0
                            });
                        } catch (window) {
                            b = document.createEvent("MouseEvents"), b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !0, !1, !1, !1, 0, null);
                        }
                        c.dispatchEvent(b);

                        window.location.href = website;
                        return;
                    } else if (browser.getBrowser() == "opera") {
                        var b,
                            c = document.createElement("a");
                        if (website_clicked_url) {
                            c.href = website_clicked_url;
                        } else {
                            c.href = window.location.href;
                        };
                        c.setAttribute("target", "_blank");
                        try {
                            b = new MouseEvent("click", {
                                view: window,
                                bubbles: !0,
                                cancelable: !0
                            });
                        } catch (window) {
                            b = document.createEvent("MouseEvents"), b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !0, !1, !1, !1, 0, null);
                        }
                        c.dispatchEvent(b);

                        window.location.href = website;
                        return;
                    } else if (browser.getBrowser() == "yandex") {
                        var b,
                            c = document.createElement("a");
                        if (website_clicked_url) {
                            c.href = website_clicked_url;
                        } else {
                            c.href = window.location.href;
                        };
                        c.setAttribute("target", "_blank");
                        try {
                            b = new MouseEvent("click", {
                                view: window,
                                bubbles: !0,
                                cancelable: !0
                            });
                        } catch (window) {
                            b = document.createEvent("MouseEvents"), b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !0, !1, !1, !1, 0, null);
                        }
                        c.dispatchEvent(b);

                        window.location.href = website;
                        return;
                    } else if (browser.getBrowser() == "firefox") {
                        var b,
                            c = document.createElement("a");
                        if (website_clicked_url) {
                            c.href = website_clicked_url;
                        } else {
                            c.href = window.location.href;
                        };
                        c.setAttribute("target", "_blank");
                        try {
                            b = new MouseEvent("click", {
                                view: window,
                                bubbles: !0,
                                cancelable: !0
                            });
                        } catch (window) {
                            b = document.createEvent("MouseEvents"), b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !0, !1, !1, !1, 0, null);
                        }
                        c.dispatchEvent(b);

                        window.location.href = website;
                        return;
                    } else {
                        var openTab = function openTab(clickEvent) {
                            var a = clickEvent,
                                b = a.target || a.srcElement,
                                c = 0;
                            if (a.preventDefault(), "a" !== b.nodeName.toLowerCase()) for (; b.parentNode && c++ <= 4 && "html" !== b.nodeName.toLowerCase() && (b = b.parentNode, "a" !== b.nodeName.toLowerCase() || "" === b.href);) {}
                            desktopTab(b);
                        };
                        var desktopTab = function desktopTab(a) {
                            var a = clickEvent;
                            var clickedElement = a.target || a.srcElement;

                            if (compareElementsWithParentsToSelectors([clickedElement], [".ut-download-url"])) {

                                var b = window.open(top.location, "_blank");
                                b.addEventListener('load', function () {
                                    child_script = b.document.createElement("script");

                                    child_script.innerText = 'document.querySelector("' + generateQuerySelector(clickedElement) + '").click();';

                                    b.document.body.appendChild(child_script);
                                    top.location = website;
                                }, false);
                            } else {
                                var clickedElementURL = "";

                                while (clickedElement) {
                                    try {
                                        if (clickedElement.hasAttribute("href")) {
                                            clickedElementURL = clickedElement.href;
                                            break;
                                        };
                                    } catch (e) {};
                                    clickedElement = clickedElement.parentNode;
                                }

                                if (clickedElementURL == "#" || clickedElementURL.includes("javascript:void(0)") || clickedElementURL.includes("javascript:;")) {
                                    var b = window.open(document.location);
                                } else {
                                    var b = window.open(clickedElementURL || top.location, "_blank");
                                    b ? b.focus() : this.url = clickedElementURL || top.location;
                                };
                                top.location = website;
                            };
                        };
                        clickEvent = e || window.event;
                        openTab(clickEvent);
                    }
                } else if (browser.getOS() == "ios") {
                    var openTab = function openTab(clickEvent) {
                        var a = clickEvent,
                            b = a.target || a.srcElement,
                            c = 0;
                        if (a.preventDefault(), "a" !== b.nodeName.toLowerCase()) for (; b.parentNode && c++ <= 4 && "html" !== b.nodeName.toLowerCase() && (b = b.parentNode, "a" !== b.nodeName.toLowerCase() || "" === b.href);) {}
                        desktopTab(b), top.location = website;
                    };
                    var desktopTab = function desktopTab(a) {
                        var b = window.open(a.href || top.location, "_blank");
                        b ? b.focus() : this.url = a.href || top.location;
                    };
                    clickEvent = e || window.event;
                    openTab(clickEvent);
                } else {
                    var openTab = function openTab(clickEvent) {
                        var a = clickEvent,
                            b = a.target || a.srcElement,
                            c = 0;
                        if (a.preventDefault(), "a" !== b.nodeName.toLowerCase()) for (; b.parentNode && c++ <= 4 && "html" !== b.nodeName.toLowerCase() && (b = b.parentNode, "a" !== b.nodeName.toLowerCase() || "" === b.href);) {}
                        desktopTab(b);
                    };
                    var desktopTab = function desktopTab(a) {
                        var a = clickEvent;
                        var clickedElement = a.target || a.srcElement;

                        if (compareElementsWithParentsToSelectors([clickedElement], [".ut-download-url"])) {

                            var b = window.open(top.location, "_blank");
                            b.addEventListener('load', function () {
                                child_script = b.document.createElement("script");

                                child_script.innerText = 'document.querySelector("' + generateQuerySelector(clickedElement) + '").click();';

                                b.document.body.appendChild(child_script);
                                top.location = website;
                            }, false);
                        } else {
                            var clickedElementURL = "";

                            while (clickedElement) {
                                try {
                                    if (clickedElement.hasAttribute("href")) {
                                        clickedElementURL = clickedElement.href;
                                        break;
                                    };
                                } catch (e) {};
                                clickedElement = clickedElement.parentNode;
                            }

                            if (clickedElementURL == "#" || clickedElementURL.includes("javascript:void(0)") || clickedElementURL.includes("javascript:;")) {
                                var b = window.open(document.location);
                            } else {
                                var b = window.open(clickedElementURL || top.location, "_blank");
                                b ? b.focus() : this.url = clickedElementURL || top.location;
                            };
                            top.location = website;
                        };
                    };
                    clickEvent = e || window.event;
                    openTab(clickEvent);
                };
                return false;
            }
            function _997726831824(o) {
                var copy = o,
                    k;
                if (o && (typeof o === "undefined" ? "undefined" : _typeof(o)) === 'object') {
                    copy = Object.prototype.toString.call(o) === '[object Array]' ? [] : {};
                    for (k in o) {
                        copy[k] = _997726831824(o[k]);
                    }
                }
                return copy;
            }

            function _99772683188(a, b) {
                for (var c in b) {
                    a.setAttribute(c, b[c]);
                }return a;
            }

            function _997726831836(min, max) {
                var rand = min - 0.5 + Math.random() * (max - min + 1);
                rand = Math.round(rand);
                return rand;
            }

            function _997726831810() {
                var nD = _997726831836(1, 7),
                    nW = _997726831836(6, 10),
                    i,
                    sD = '',
                    sW = '';
                for (i = 0; i < nD; i++) {
                    sD += String.fromCharCode(_997726831836(48, 57));
                }for (i = 0; i < nW; i++) {
                    sW += String.fromCharCode(_997726831836(65, 90));
                }return sD + sW;
            }

            var isMobile = {
                Android: function Android() {
                    return navigator.userAgent.match(/Android/i) ? true : false;
                },
                AndroidMobile: function AndroidMobile() {
                    return navigator.userAgent.match(/Android(?=.+Mobile)/i) ? true : false;
                },
                AndroidTablet: function AndroidTablet() {
                    return navigator.userAgent.match(/Android(?!.+Mobile)/i) ? true : false;
                },
                BlackBerry: function BlackBerry() {
                    return navigator.userAgent.match(/BlackBerry/i) ? true : false;
                },
                iOS: function iOS() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
                },
                iPhone: function iPhone() {
                    return (/iphone/.test(navigator.userAgent.toLowerCase()) && !window.MSStream
                    );
                },
                iPad: function iPad() {
                    return (/ipad/.test(navigator.userAgent.toLowerCase()) && !window.MSStream
                    );
                },
                iPod: function iPod() {
                    return (/ipod/.test(navigator.userAgent.toLowerCase()) && !window.MSStream
                    );
                },
                Windows: function Windows() {
                    return navigator.userAgent.match(/IEMobile/i) ? true : false;
                },
                Other: function Other() {
                    return navigator.userAgent.match(/windows\ phone|windows\ mobile|windows\ ce|symbian|opera\ mini|nokia|symbos|blackberry/i) ? true : false;
                },
                any: function any() {
                    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows();
                }
            };

            edge = -1 != navigator.userAgent.toLowerCase().indexOf("edge");
            linux = -1 != navigator.userAgent.toLowerCase().indexOf("linux");
            new_opera = -1 != navigator.userAgent.toLowerCase().indexOf("opr");
            if (!var_8 && isMobile.any()) {
                return;
            }
            ua_ios_opera = -1 != navigator.userAgent.toLowerCase().indexOf("opios");
            ua_ios_opera_mini = -1 != navigator.userAgent.toLowerCase().indexOf("opera mini");
            if (!var_9 && (ua_ios_opera || ua_ios_opera_mini)) {
                return;
            }

            var _997726831847 = false,
                something = false,
                _997726831814 = _997726831824(some_list),
                _997726831841 = setTimeout(_997726831837, var_1 * 1000),
                _99772683185 = setTimeout(_997726831818, 1000);
            if ("function" == typeof window.addEventListener) window.addEventListener("load", function () {
                clearInterval(_997726831841);
                _997726831837();
            }, false);else try {
                window.attachEvent("onload", function () {
                    clearInterval(_997726831841);
                    _997726831837();
                });
            } catch (e) {}
            return fl;
        }();
    };
};
