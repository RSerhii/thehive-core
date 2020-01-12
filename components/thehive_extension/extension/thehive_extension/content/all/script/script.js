var BROWSER_CONFIG = {"name":"Google Chrome","slug":"chrome","version":"0.1.9"};/* BROWSERS */
var BROWSER_CHROME_SLUG = 'chrome';
var BROWSER_FIREFOX_SLUG = 'firefox';
var BROWSER_EDGE_SLUG = 'edge';
var BROWSER_SAFARI_SLUG = 'safari';

/* BASE URI FOR THEHIVE EXTENSION */
var THEHIVE_HOME_PAGE_URI = "https://thehive.com";
var BASE_URI = 'https://thehive.com/discussion/begin-extension?url=';
var COMMENT_COUNT_URI = "https://thehive.com/notification/comment-count?url=";

/* ACTIONS */
var BACKGROUND_ACTION_OPEN_POPUP = 'open_popup';
var BACKGROUND_ACTION_GET_KEY = 'get_key';
var BACKGROUND_ACTION_SET_KEY = 'set_key';
var BACKGROUND_ACTION_SET_BADGE = 'set_badge';
var BACKGROUND_ACTION_TAB_UPDATED = 'tab_updated';

/* COLORS */
var COLOR_GAB_GREEN = '#21cf7b';

/* SEARCH ENGINES */
var SEARCH_ENGINES = [
    {
        name: "DuckDuckGo",
        url: "https://duckduckgo.com/?q=",
        icon: "duckduckgo.svg"
    },
    {
        name: "Startpage",
        url: "https://www.startpage.com/do/search?q=",
        icon: "startpage.png"
    },
    {
        name: "Qwant",
        url: "https://www.qwant.com/?q=",
        icon: "qwant.svg"
    },
    {
        name: "Bing",
        url: "https://www.bing.com/search?q=",
        icon: "bing.svg"
    },
    {
        name: "Yahoo!",
        url: "https://search.yahoo.com/search?p=",
        icon: "yahoo.svg"
    },
    {
        name: "Google",
        url: "https://www.google.com/search?q=",
        icon: "google.svg"
    }
];

/* STORAGE */
var STORAGE_BASE = 'gab_thehive_extension_data';

var TWITTER_BUTTONS_ENABLED = 'twitter_buttons_enabled';
var REDDIT_BUTTONS_ENABLED = 'reddit_buttons_enabled';
var YOUTUBE_BUTTONS_ENABLED = 'youtube_buttons_enabled';
var WINDOW_SIDEBAR_UNAVAILABLE_ENABLED = 'window_sidebar_unavailable_enabled';
var WEBSITE_COMMENT_BADGE_ENABLED = 'website_comment_badge_enabled';
var DISSENT_DISQUS_BUTTONS_ENABLED = 'dissent_disqus_buttons_enabled';
var WIKIPEDIA_BUTTONS_ENABLED = 'wikipedia_buttons_enabled';
var CUSTOM_NEW_TAB_ENABLED = 'custom_new_tab_enabled';

/* NEW TAB */
var NT_DEFAULT_SEARCH_ENGINE = 'nt_default_search_engine';

var NT_TOP_SITES_ENABLED = 'nt_top_sites_enabled';
var NT_TOP_SITES_LIMIT = 'nt_top_sites_limit';
var NT_TOP_SITES_SIZE = 'nt_top_sites_size';
var NT_TOP_SITES_SHAPE = 'nt_top_sites_shape';
var NT_TOP_SITES_HIGHLIGHT = 'nt_top_sites_highlight';
var NT_TOP_SITES_SHOW_TITLE = 'nt_top_sites_show_title';

var NT_DATETIME_SHOW_DATE = 'nt_datetime_show_date';
var NT_DATETIME_SHOW_TIME = 'nt_datetime_show_time';

var NT_COLORS_SEARCH = 'nt_colors_search';
var NT_COLORS_TEXT = 'nt_colors_text';

var NT_BACKGROUND_SOLID_COLOR = 'nt_background_solid_color';
var NT_BACKGROUND_IMAGE = 'nt_background_image';
var NT_BACKGROUND_RANDOM_GRADIENT = 'nt_background_random_gradient';
var NT_BACKGROUND_IMAGE_URL = 'nt_background_image_url';

var NT_THEHIVE_ENABLED = 'nt_thehive_enabled';
var NT_THEHIVE_DEFAULT_TAB = 'nt_thehive_default_tab';

var NT_THEHIVE_PINS = 'nt_thehive_pins';
var NT_THEHIVE_HIDE_TIPS = 'nt_thehive_hide_tips';

/* STORAGE DEFAULTS */
var STORAGE_DEFAULT_PARAMS = {};
STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[WEBSITE_COMMENT_BADGE_ENABLED] = false;
STORAGE_DEFAULT_PARAMS[DISSENT_DISQUS_BUTTONS_ENABLED] = false;
STORAGE_DEFAULT_PARAMS[WIKIPEDIA_BUTTONS_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[CUSTOM_NEW_TAB_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[NT_DEFAULT_SEARCH_ENGINE] = SEARCH_ENGINES[0];
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_ENABLED] = true;
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_LIMIT] = 20;
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SIZE] = "md";
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHAPE] = "circle";
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_HIGHLIGHT] = "light";
STORAGE_DEFAULT_PARAMS[NT_TOP_SITES_SHOW_TITLE] = true;
STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_DATE] = true;
STORAGE_DEFAULT_PARAMS[NT_DATETIME_SHOW_TIME] = true;
STORAGE_DEFAULT_PARAMS[NT_COLORS_SEARCH] = "white";
STORAGE_DEFAULT_PARAMS[NT_COLORS_TEXT] = "white";
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_SOLID_COLOR] = "";
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_IMAGE] = "";
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_IMAGE_URL] = "../assets/images/thehive-bg1.jpg";
STORAGE_DEFAULT_PARAMS[NT_BACKGROUND_RANDOM_GRADIENT] = false;
STORAGE_DEFAULT_PARAMS[NT_THEHIVE_ENABLED] = false;
STORAGE_DEFAULT_PARAMS[NT_THEHIVE_DEFAULT_TAB] = "home";
STORAGE_DEFAULT_PARAMS[NT_THEHIVE_PINS] = {
    "page1": [
        {url:"https://gab.com", title:"Gab"},
        {url:"https://thehive.com", title:"The Hive"},
        {url:"https://www.bitchute.com/", title:"Bitchute"},
        {url:"https://www.epik.com/", title:"Epik Domains"},
        {url:"https://chrome.google.com/webstore", title:"Get Extensions"}
    ]
};
STORAGE_DEFAULT_PARAMS[NT_THEHIVE_HIDE_TIPS] = false;

var STORAGE_KEY_ALL = 'all';

/**
 * @description Internal helper to check if parameter is an object
 * @function isObject
 * @param {*} obj
 * @returns {boolean}
 */
var isObject = function(obj) {
    if (isArray(obj) || isDate(obj)) return false;
    return (obj !== null && typeof obj === 'object');
};

/**
 * @description Internal helper to check if parameter is a string
 * @function isString
 * @param {*} str
 * @returns {boolean}
 */
var isString = function(str) {
    return (typeof str === 'string' || str instanceof String);
};

/**
 * @description Internal helper to check if parameter is a date
 * @function isDate
 * @param {*} date
 * @returns {boolean}
 */
var isDate = function(date) {
    if (isString(date) || isArray(date) || date == undefined || date == null) return false;
    return (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date));
};

/**
 * @description Internal helper to check if parameter is an array
 * @function isArray
 * @param {*} arr
 * @returns {boolean}
 */
var isArray = function(arr) {
    return Array.isArray(arr);
};

/**
 * @description Internal helper to check if DOMContentLoaded
 * @function ready
 * @param {Function} fn
 */
function ready(fn) {
    var d = document;
    (d.readyState == 'loading') ? d.addEventListener('DOMContentLoaded', fn): fn();
};

/**
 * @description Internal helper to get value from query string
 * @function getQueryStringValue
 * @param {String} key
 * @returns {String|null}
 */
function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
};

function getTheHiveDLogoAsSVG(height, width, fillColor, backgroundColor) {
    //Create "g" dissent icon
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.setProperty("height", height, "important");
    svg.style.setProperty("width", width, "important");
    svg.setAttribute("version", "1.1");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute("viewBox", "0 0 500 500");

    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.style.setProperty("transform", "translate(17, 37)", "important");

    var solid = document.createElementNS("http://www.w3.org/2000/svg", "path");
    solid.setAttribute("d", "M244.885937,0 L193.657763,0 L65.5018905,0 L45.5665325,0 C20.4992438,0 0,20.5016933 0,45.5466667 L0,381.453333 C0,406.504 20.4992438,427 45.5665325,427 L65.5018905,427 L193.657763,427 L244.885937,427 C389.348933,427 467,326.3134 467,213.5 C467,100.6866 393.563837,0 244.885937,0");
    solid.setAttribute("fill", fillColor);

    var line1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line1.setAttribute("d", "M309.275885,155 L121.729792,155 C115.246045,155 110,149.623395 110,143.002906 C110,136.376605 115.246045,131 121.729792,131 L309.275885,131 C315.759633,131 321,136.376605 321,143.002906 C321,149.623395 315.759633,155 309.275885,155");
    line1.setAttribute("fill", backgroundColor);

    var line2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line2.setAttribute("d", "M309.275885,225 L121.729792,225 C115.246045,225 110,219.623395 110,213.002906 C110,206.376605 115.246045,201 121.729792,201 L309.275885,201 C315.759633,201 321,206.376605 321,213.002906 C321,219.623395 315.759633,225 309.275885,225");
    line2.setAttribute("fill", backgroundColor);

    var line3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line3.setAttribute("d", "M121.78718,296 C115.271711,296 110,290.623395 110,284.002906 C110,277.376605 115.271711,272 121.78718,272 L247.218525,272 C253.733994,272 259,277.376605 259,284.002906 C259,290.623395 253.733994,296 247.218525,296 L121.78718,296 Z");
    line3.setAttribute("fill", backgroundColor);

    g.appendChild(solid);
    g.appendChild(line1);
    g.appendChild(line2);
    g.appendChild(line3);

    svg.appendChild(g);

    return svg;
};

function addManyClasses(elem, classes) {
    if (!isArray(classes)) return false;

    for (var i = 0, length = classes.length; i < length; i++) {
        elem.classList.add(classes[i]);
    };
};

function removeManyClasses(elem, classes) {
    if (!isArray(classes)) return false;
    
    for (var i = 0, length = classes.length; i < length; i++) {
      elem.classList.remove(classes[i]);
  };
};

/**
 * @description - Gab The Hive - Badge content script
 */
var GDBadge = function() {
    //Global scope
    var scope = this;

    /**
     * @description - Set badge with current window.location.href url by sending to background to make request to get comment count
     */
    scope.setBadge = function() {
        chrome.runtime.sendMessage({
            action: BACKGROUND_ACTION_SET_BADGE,
            url: window.location.href
        });
    };
};

//
var gdb = null;

/**
 * @description - onMessage Handler for receiving messages from background
 */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    var action = message['action'] || '';

    if (action === BACKGROUND_ACTION_TAB_UPDATED) {
        // Get config keys from background
        chrome.runtime.sendMessage({
            action: BACKGROUND_ACTION_GET_KEY,
            key: WEBSITE_COMMENT_BADGE_ENABLED
        }, function(enabled) {
            if (!enabled) return false;

            if (!gdb) gdb = new GDBadge();
            gdb.setBadge();
        });
    }

    //Async
    return true;
});

//Wait for page to be ready and loaded
ready(function() {
    // Get config keys from background
    chrome.runtime.sendMessage({
        action: BACKGROUND_ACTION_GET_KEY,
        key: WEBSITE_COMMENT_BADGE_ENABLED
    }, function(enabled) {
        if (!enabled) return false;

        //Delay a bit
        setTimeout(function () {
            //Init new script
            gdb = new GDBadge();
            gdb.setBadge();
        }, 150);
    });
});

var GDDisqus = function() {

    //Global scope
    var scope = this;

    /**
     * @description - Attempts to find disqus thread on any site and appends thehive button before it
     * @function fetchElements
     * @return {Boolean} success
     */
    function fetchElements() {
        //Find disqus section
        var disqusSection = document.getElementById('disqus_thread');

        //Make sure it exists, if no, return
        if (!disqusSection) return false;

        //Create new btn, append and add action
        var dissentBtn = createDissentBtn();

        //Get parent of disqus thread
        var parentElement = disqusSection.parentElement;
        //Insert button before the thread within the thread's parent
        parentElement.insertBefore(dissentBtn, disqusSection);

        //Set onclick event
        dissentBtn.onclick = dissentThisPage;

        //Success
        return true;
    };

    /**
     * @description - Helper to create "View Comments on The Hive" button with styles
     * @function createDissentBtn
     * @return {Node}
     */
    function createDissentBtn() {
        //Create container
        var container = document.createElement("div");
        container.style.setProperty("display", 'block', "important");
        container.style.setProperty("width", '100%', "important");
        container.style.setProperty("height", '80px', "important");
        container.style.setProperty("padding", '20px 0', "important");
        container.style.setProperty("overflow", 'hidden', "important");
        container.style.setProperty("box-sizing", 'border-box', "important");

        var svg = getTheHiveDLogoAsSVG("18px", "18px", "#fff", COLOR_GAB_GREEN)
        svg.style.setProperty("display", 'inline-block', "important");
        svg.style.setProperty("vertical-align", 'middle', "important");
        svg.style.setProperty("margin-left", '8px', "important");

        //Create button with same general style as "Subscribe" button but with new Gab The Hive styles
        var button = document.createElement("a");
        button.style.setProperty("display", 'block', "important");
        button.style.setProperty("width", '100%', "important");
        button.style.setProperty("height", '40px', "important");
        button.style.setProperty("background-color", COLOR_GAB_GREEN, "important");
        button.style.setProperty("border-radius", '4px', "important");
        button.style.setProperty("text-align", 'center', "important");
        button.style.setProperty("margin", '0 auto', "important");
        button.style.setProperty("box-sizing", 'border-box', "important");
        button.style.setProperty("cursor", 'pointer', "important");

        //Create button with same general style as "Subscribe" button but with new Gab The Hive styles
        var span = document.createElement("a");
        span.textContent = "View Comments on The Hive";
        span.style.setProperty("color", '#fff', "important");
        span.style.setProperty("line-height", '40px', "important");
        span.style.setProperty("font-size", '14px', "important");

        //Append
        button.appendChild(span);
        button.appendChild(svg);
        container.appendChild(button);

        //Return container
        return container;
    };

    /**
     * @description - Makes a request to the background to open a new thehive comment window with current page url
     * @function dissentThisPage
     */
    function dissentThisPage() {
        //Get url, height
        var url = window.location.href;
        var height = window.innerHeight;

        //Send message to background to open popup window
        chrome.runtime.sendMessage({
            action: BACKGROUND_ACTION_OPEN_POPUP,
            url: url,
            height: height
        });
    };

    /**
     * @description - Init script on open
     * @function scope.init
     */
    scope.init = function() {
        fetchElements();
    };
};

//Wait for page to be ready and loaded
ready(function() {
    // Get config keys from background
    chrome.runtime.sendMessage({
        action: BACKGROUND_ACTION_GET_KEY,
        key: DISSENT_DISQUS_BUTTONS_ENABLED
    }, function(enabled) {
        if (!enabled) return false;

        //Delay a bit
        setTimeout(function () {
            //Init new script
            var gdd = new GDDisqus();
            gdd.init();
        }, 2500);
    });
});
