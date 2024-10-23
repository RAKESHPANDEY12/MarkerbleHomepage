
// Begin SessionStack code
!function (a, b) {
    var c = window; c.SessionStackKey = a, c[a] = c[a] || {
        t: b,
        q: []
    }; for (var d = ["start", "stop", "identify", "getSessionId", "log", "setOnDataCallback", "trackEvent"], e = 0; e < d.length; e++)!function (b) {
        c[a][b] = c[a][b] || function () {
            c[a].q.push([b].concat([].slice.call(arguments, 0)));
        }
    }(d[e]); var f = document.createElement("script"); f.async = 1, f.crossOrigin = "anonymous",
        f.src = "https://cdn.sessionstack.com/sessionstack.js"; var g = document.getElementsByTagName("script")[0];
    g.parentNode.insertBefore(f, g)
}("SessionStack", "3c570557e73f4b28a1df5987c3a34433");

SessionStack.identify({
    userId: "",
    email: "",
    displayName: "",
    charityName_str: ""
});
// End of SessionStack Code
Sentry.onLoad(function () {
    Sentry.init({
        // Performance Monitoring
        tracesSampleRate: 0.0030, // Capture 3% of the transactions
        // Session Replay
        replaysSessionSampleRate: 0, // This sets the sample rate at 0%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 0.0001, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
});

(function (f, b, g) {
    var xo = g.prototype.open, xs = g.prototype.send, c;
    f.hj = f.hj || function () { (f.hj.q = f.hj.q || []).push(arguments) };
    f._hjSettings = { hjid: 8637, hjsv: 2 };
    function ls() { f.hj.documentHtml = b.documentElement.outerHTML; c = b.createElement("script"); c.async = 1; c.src = "//static.hotjar.com/c/hotjar-8637.js?sv=2"; b.getElementsByTagName("head")[0].appendChild(c); }
    if (b.readyState === "interactive" || b.readyState === "complete" || b.readyState === "loaded") { ls(); } else { if (b.addEventListener) { b.addEventListener("DOMContentLoaded", ls, false); } }
    if (!f._hjPlayback && b.addEventListener) {
        g.prototype.open = function (l, j, m, h, k) { this._u = j; xo.call(this, l, j, m, h, k) };
        g.prototype.send = function (e) { var j = this; function h() { if (j.readyState === 4) { f.hj("_xhr", j._u, j.status, j.response) } } this.addEventListener("readystatechange", h, false); xs.call(this, e) };
    }
})(window, document, window.XMLHttpRequest);

!function () { "use strict"; !function (e, t) { var n = e.amplitude || { _q: [], _iq: {} }; if (n.invoked) e.console && console.error && console.error("Amplitude snippet has been loaded."); else { var r = function (e, t) { e.prototype[t] = function () { return this._q.push({ name: t, args: Array.prototype.slice.call(arguments, 0) }), this } }, s = function (e, t, n) { return function (r) { e._q.push({ name: t, args: Array.prototype.slice.call(n, 0), resolve: r }) } }, o = function (e, t, n) { e[t] = function () { if (n) return { promise: new Promise(s(e, t, Array.prototype.slice.call(arguments))) } } }, i = function (e) { for (var t = 0; t < m.length; t++)o(e, m[t], !1); for (var n = 0; n < g.length; n++)o(e, g[n], !0) }; n.invoked = !0; var u = t.createElement("script"); u.type = "text/javascript", u.integrity = "sha384-x0ik2D45ZDEEEpYpEuDpmj05fY91P7EOZkgdKmq4dKL/ZAVcufJ+nULFtGn0HIZE", u.crossOrigin = "anonymous", u.async = !0, u.src = "https://cdn.amplitude.com/libs/analytics-browser-2.0.0-min.js.gz", u.onload = function () { e.amplitude.runQueuedFunctions || console.log("[Amplitude] Error: could not load SDK") }; var a = t.getElementsByTagName("script")[0]; a.parentNode.insertBefore(u, a); for (var c = function () { return this._q = [], this }, p = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset", "preInsert", "postInsert", "remove", "getUserProperties"], l = 0; l < p.length; l++)r(c, p[l]); n.Identify = c; for (var d = function () { return this._q = [], this }, f = ["getEventProperties", "setProductId", "setQuantity", "setPrice", "setRevenue", "setRevenueType", "setEventProperties"], v = 0; v < f.length; v++)r(d, f[v]); n.Revenue = d; var m = ["getDeviceId", "setDeviceId", "getSessionId", "setSessionId", "getUserId", "setUserId", "setOptOut", "setTransport", "reset", "extendSession"], g = ["init", "add", "remove", "track", "logEvent", "identify", "groupIdentify", "setGroup", "revenue", "flush"]; i(n), n.createInstance = function (e) { return n._iq[e] = { _q: [] }, i(n._iq[e]), n._iq[e] }, e.amplitude = n } }(window, document) }();
amplitude.init('3288a27749bb645ea882343ba53688e');

(function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "cx7e9i5227");
clarity("set", "Username", " ");
clarity("set", "User ID", "6878");
clarity("set", "Charity", "");
clarity("set", "Email", "");

(function (w) {
    var s = document.createElement('script');
    s.src = 'https://survey.survicate.com/workspaces/fe014523b98dc37603d70c1d1b550bb0/web_surveys.js';
    s.async = true;
    var e = document.getElementsByTagName('script')[0];
    e.parentNode.insertBefore(s, e);
})(window);

(function (apiKey) {
    (function (p, e, n, d, o) {
        var v, w, x, y, z; o = p[d] = p[d] || {}; o._q = o._q || [];
        v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track']; for (w = 0, x = v.length; w < x; ++w)(function (m) {
            o[m] = o[m] || function () { o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0))); };
        })(v[w]);
        y = e.createElement(n); y.async = !0; y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
        z = e.getElementsByTagName(n)[0]; z.parentNode.insertBefore(y, z);
    })(window, document, 'script', 'pendo');

    // This function creates anonymous visitor IDs in Pendo unless you change the visitor id field to use your app's values
    // This function uses the placeholder 'ACCOUNT-UNIQUE-ID' value for account ID unless you change the account id field to use your app's values
    // Call this function after users are authenticated in your app and your visitor and account id values are available
    // Please use Strings, Numbers, or Bools for value types.
    pendo.initialize({
        visitor: {
            id: "778254f5649622408baedaa5345c1bea"   // Required if user is logged in, default creates anonymous ID
            // email:        // Recommended if using Pendo Feedback, or NPS Email
            // full_name:    // Recommended if using Pendo Feedback
            // role:         // Optional

            // You can add any additional visitor level key-values here,
            // as long as it's not one of the above reserved names.
        },

        account: {
            id: "6878" // Required if using Pendo Feedback, default uses the value 'ACCOUNT-UNIQUE-ID'
            // name:         // Optional
            // is_paying:    // Recommended if using Pendo Feedback
            // monthly_value:// Recommended if using Pendo Feedback
            // planLevel:    // Optional
            // planPrice:    // Optional
            // creationDate: // Optional

            // You can add any additional account level key-values here,
            // as long as it's not one of the above reserved names.
        }
    });

})('39a8d61c-85ad-4338-57ca-f75d8120e72d');

window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date());
gtag('config', 'G-5TFXZGWXN6');
var STONLY_WID = "2f923eb8-74f3-11eb-accc-0ad3430e55ea";
!function (s, t, o, n, l, y, w, g) { s.StonlyWidget || ((w = s.StonlyWidget = function () { w._api ? w._api.apply(w, arguments) : w.queue.push(arguments) }).queue = [], (y = t.createElement(o)).async = !0, (g = new XMLHttpRequest).open("GET", n + "version?v=" + Date.now(), !0), g.onreadystatechange = function () { 4 === g.readyState && (y.src = n + "stonly-widget.js?v=" + (200 === g.status ? g.responseText : Date.now()), (l = t.getElementsByTagName(o)[0]).parentNode.insertBefore(y, l)) }, g.send()) }(window, document, "script", "https://stonly.com/js/widget/v2/");


var newSelect2 = $.fn.select2; // take reference of select2 v4.1.0 to this variable
delete $.fn.select2; // delete select2 v4.1.0

loadPartial($('#side_navigation'))

REQUEST_LOCKED = false
PAGE_STATE = 1
REQUEST_URL = ''

window.productFruitsUser = {
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    signUpAt: "2024-10-23T22:26:27",
};
(function (w, d, u, c, l) {
    w.productFruits = w.productFruits || {};
    w.productFruits.language = l; w.productFruits.code = c;
    var a = d.getElementsByTagName('head')[0];
    var r = d.createElement('script'); r.async = 1;
    r.src = u + '?c=' + c;
    r.onload = function () { waitForAnnouncementsV2(); }
    a.appendChild(r);
})(window, document, 'https://app.productfruits.com/static/script.js', 'vH2WoCwMmetCjVwO', 'en');

function applyClickEventOnLink() {
    $.map($("a"), function (a, i) {
        href = $(a).attr("href")
        data_method = $(a).attr("data-method")
        skip_ajax_loading = $(a).attr("data-skip-ajax-loading") == "true" ? true : false
        if (skip_ajax_loading == false && typeof (data_method) == "undefined" && ($(a).attr("onclick") == undefined) && (href && href.indexOf("#") == -1 && href.indexOf("page") == -1 && href.indexOf("admin") == -1) && href != "javascript:void(0)" && data_method != "delete") {
            $(a).attr("onclick", "return loadMainBody(this)")
        }

        // Deal with links which has data-method attributes
        if (typeof (data_method) != "undefined") {

            url = $(a).attr("href")
            method = $(a).attr("data-method")
            // $(a).attr("onclick", "return applyAjaxFormSubmitOnLink('" +url+ "','" + method + "')" )
            // $(a).removeAttr("data-method")
        }

    })
}

// This methos is for those links which have attribute data-method
function applyAjaxFormSubmitOnLink(url, method) {
    $.ajax({
        url: url,
        method: method,
        beforeSend: function (xhr, setting) {
            showAjaxLoader()
            setRequestLock(true)
        },
        complete: function (xhr, status) {
            hideAjaxLoader()
            setRequestLock(false)
        },
        success: function (response, data) {
            setRequestLock(false)
            if (response.message) {
                alert(response.message)
            }
            if (response.logged_out == true) {
                document.location.href = response.redirect_url
            } else if (response.redirect_url) {
                loadMainBody(response.redirect_url)
            }
        },
        error: function (response) {
            setRequestLock(false)
            if (response.redirect_url) {
                loadMainBody(response.redirect_url)
            } else {
                alert("Error loading data!")
            }
        }
    })
    return false

}
function setRequestLock(lock) {
    REQUEST_LOCKED = lock
}

// This method is to submit forms in ajax way
function applyAjaxFormSubmitOnForm() {
    $.map($("form"), function (a, i) {
        skip_ajax_loading = $(a).attr("data-skip-ajax-loading") == "true" ? true : false
        if (skip_ajax_loading == false && ($(a).attr("onsubmit") == undefined)) {
            buildAjaxFormSubmitOnForm(a)
        }
    })
}

//TODO:  Add validation callback
function buildAjaxFormSubmitOnForm(formElement) {

    $(formElement).ajaxForm({
        beforeSend: function (xhr, setting) {
            validationCallbackFunction = $(formElement).attr("data-validation-callback")
            if (validationCallbackFunction) {
                isValid = Function('"use strict";return (' + validationCallbackFunction + ')')();
                if (!isValid) return false;
            }
            showAjaxLoader()
            setRequestLock(true)
        },
        complete: function (xhr, status) {
            hideAjaxLoader()
            setRequestLock(false)
        },
        success: function (response, data) {
            setRequestLock(false)
            if (response.message) {
                alert(response.message)
            }
            if (response.redirect_url) {
                loadMainBody(response.redirect_url)
            }
            // Close any modal if created via modal
            $(formElement).closest(".modal").modal("hide")
        },
        error: function (response) {
            setRequestLock(false)
            $(formElement).find("button[type='submit']").attr("disabled", false)
            var resJson = response.responseJSON;
            if (resJson !== undefined && resJson.errors) {
                alert(resJson.errors);
            } else {
                alert("Error loading data!")
            }
            if (response.redirect_url) {
                loadMainBody(response.redirect_url)
            }

            $(formElement).find("input[type='submit']").each(function () {
                $(this).prop("disabled", false);
                var name = $(this).attr("name");
                if (name == "save_and_add") {
                    $(this).val("Save and Add Another")
                } else {
                    $(this).val("Save");
                }
            });
        }
    });
}

// If you want to do validation and then submit form then, pass form element if validation is true.
function submitAjaxForm(formElement) {
    $(formElement).ajaxSubmit({
        beforeSend: function (xhr, setting) {
            validationCallbackFunction = $(formElement).attr("data-validation-callback")
            if (validationCallbackFunction) {
                isValid = Function('"use strict";return (' + validationCallbackFunction + ')')();
                if (!isValid) return false;
            }
            showAjaxLoader()
            setRequestLock(true)
        },
        complete: function (xhr, status) {
            hideAjaxLoader()
            setRequestLock(false)
        },
        success: function (response, data) {
            setRequestLock(false)
            if (response.message) {
                alert(response.message)
            }
            if (response.redirect_url) {
                loadMainBody(response.redirect_url)
            }
            // Close any modal if created via modal
            $(formElement).closest(".modal").modal("hide")
        },
        error: function (response) {
            setRequestLock(false)
            $(formElement).find("button[type='submit']").attr("disabled", false)
            var resJson = response.responseJSON;
            if (resJson !== undefined && resJson.errors) {
                alert(resJson.errors);
            } else {
                alert("Error loading data!")
            }
            if (response.redirect_url) {
                loadMainBody(response.redirect_url)
            }

            $(formElement).find("input[type='submit']").each(function () {
                $(this).prop("disabled", false);
                var name = $(this).attr("name");
                if (name == "save_and_add") {
                    $(this).val("Save and Add Another")
                } else {
                    $(this).val("Save");
                }
            });
        }
    });
}

$(document).ajaxComplete(function () {
    applyClickEventOnLink()
    applyAjaxFormSubmitOnForm();
    $("#main_body_loader").hide();
    var url = window.location.href;
    if (url.indexOf("users/6878/two_fa") == -1) {
        $("#main_header_div").css("pointer-events", "");
    }
});

function showAjaxLoader() {
    $("#main_body_loader").show();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function hideAjaxLoader() {
    $("#main_body_loader").hide();
}

// For borwser back button
window.addEventListener('popstate', function (event) {
    loadMainBody()
}, false);

function loadMainBody(element) {
    if (REQUEST_LOCKED == true) {
        console.log('request is locked')
        return false
    }
    method = 'get'

    if (typeof (element) == "undefined") {
        url = window.location.href
    } else if (typeof (element) == "string") {
        url = element
    } else {
        url = $(element).attr("href")
    }

    if (url == "/users/sign_out") {
        return false
    }
    if (window.location.pathname == "/" || url == "/") {
        url = "/my-home"
    }
    REQUEST_URL = url
    //showAjaxLoader()

    $.ajax({
        url: url,
        method: method,
        async: true,
        beforeSend: function (xhr, setting) {
            showAjaxLoader()
            setRequestLock(true)
        },
        complete: function (xhr, status) {
            hideAjaxLoader()
            setRequestLock(false)
        },
        success: function (data, res) {
            setRequestLock(false)
            if (data.message) {
                alert(data.message)
            }
            if (data.redirect_url) {
                loadMainBody(data.redirect_url)
            } else {
                $("#main_body_div").html(data.html)
                window.history.pushState({}, "", REQUEST_URL);
            }
        },
        error: function (res) {
            setRequestLock(false)
            resJson = res.responseJSON
            if (resJson !== undefined && resJson.errors) {
                alert(resJson.errors)
            } else {
                alert("Error loading page.")
            }
            if (res.status != 406 && resJson.redirect_url) {
                loadMainBody(resJson.redirect_url)
            }
        }
    })
    return false
}
loadMainBody()
