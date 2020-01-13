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

var Background = function() {

    var scope = this;

    //

    var content = document.getElementById("content");
    var mainImage = document.getElementById("main__image");
    var clearUploadedBackgroundBtn = document.getElementById("sidebar-settings-meta-clear-background-image-btn");
    var metaBackgroundImageBox = document.getElementById("sidebar-settings-meta-background-image");
    var solidColorOption = document.getElementById("si_nt_background_solid_color");
    var randomGradientOption = document.getElementById("si_nt_background_random_gradient");
    var hideTipsOption = document.getElementById("si_nt_thehive_hide_tips");

    var colorSchemes = ["cs--black", "cs--white", "cs--light-grey", "cs--dark-grey"];

    var HEX_VALUES = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];


    //

    clearUploadedBackgroundBtn.addEventListener("click", function() {
        newTab.settings.updateSettingsItem(NT_BACKGROUND_IMAGE, null, true);
        scope.resetBackgroundImage();
    });

    var tipsCloser = document.getElementById("thehive-tab-foot-closer");
    tipsCloser.addEventListener('click', function() {
        newTab.settings.updateSettingsItem(NT_THEHIVE_HIDE_TIPS, true, true, true);
        scope.setHideTips();
    });

    scope.resetBackgroundImage = function() {
        metaBackgroundImageBox.src = newTab.userDefaults[NT_BACKGROUND_IMAGE_URL];
        if (!solidColorOption.value && !randomGradientOption.checked) {
            scope.setBackgroundImage({a:false}, true);
        } else if (solidColorOption.value) {
            mainImage.style.removeProperty("background-image");
            mainImage.classList.add("hidden");
            content.style.removeProperty("background");
            content.style.setProperty("background-color", solidColorOption.value, "important");
        } else {
            var gradient = getRandomLinearGradient();
            mainImage.classList.add("hidden");
            content.style.setProperty("background", gradient, "important");
        }
    };

    function getRandomHex() {
        var h = "#";
        for (var i = 0; i < 6; i++) {
            var x = Math.round(Math.random() * 14);
            var y = HEX_VALUES[x];
            h += y;
        };
        return h;
    };

    function getRandomLinearGradient() {
        var colorStart = getRandomHex();
        var colorEnd = getRandomHex();
        var angle = Math.round(Math.random() * 360);

        var gradient = "linear-gradient(" + angle + "deg, " + colorStart + ", " + colorEnd + ")";

        return gradient;
    };

    //

    scope.setBackgroundSolidColor = function(event) {
        if (!isObject(event)) return false;

        var color = event.detail;

        if (!color) {
            scope.resetBackgroundImage();
        }
        else {
            mainImage.classList.add("hidden");
            content.style.removeProperty("background");
            content.style.setProperty("background-color", color, "important");
        }
    };

    scope.setBackgroundRandomGradient = function(event) {
        if (!isObject(event)) return false;

        var enabled = event.detail;

        if (enabled) {
            var gradient = getRandomLinearGradient();
            mainImage.classList.add("hidden");
            content.style.setProperty("background", gradient, "important");
        }
        else {
            scope.resetBackgroundImage();
        }
    };

    scope.setBackgroundImage = function(event, force) {
        if (!isObject(event)) return false;

        var imageData = event.detail;

        if (!imageData && !force) {
            scope.resetBackgroundImage();
        }
        else {
            var bgImg = '';
            if (imageData) {
                bgImg = "url(" + imageData + ")";
                mainImage.style.setProperty("background-image", bgImg, "important");
                metaBackgroundImageBox.src = imageData;
            } else {
                bgImg = "url(" + newTab.userDefaults[NT_BACKGROUND_IMAGE_URL] + ")";
                mainImage.style.setProperty("background-image", bgImg, "important");
                metaBackgroundImageBox.src = newTab.userDefaults[NT_BACKGROUND_IMAGE_URL];
            }
            mainImage.classList.remove("hidden");

            //Reset background solid color
            var event2 = new CustomEvent("WELM_update_settings_item", {
                detail: {
                    key: NT_BACKGROUND_SOLID_COLOR,
                    value: null,
                    updateInRuntime: true,
                    updateInput: true
                }
            });
            window.dispatchEvent(event2);
        }
    };

    scope.setPageColorScheme = function(event) {
        if (!isObject(event)) return false;

        removeManyClasses(content, colorSchemes);

        var color = event.detail;
        var newClass = "cs--" + color;
        content.classList.add(newClass);
    };

    scope.setHideTips = function() {
        var enabled = hideTipsOption.checked;

        if (!enabled) {
            var e = document.getElementById("thehive-tab-foot");
            e.classList.remove('hidden');
        } else {
            var e = document.getElementById("thehive-tab-foot");
            e.classList.add('hidden');
        }
    }
    //

    window.addEventListener("WELM_nt_background_solid_color", scope.setBackgroundSolidColor, false);
    window.addEventListener("WELM_nt_background_image", scope.setBackgroundImage, false);
    window.addEventListener("WELM_nt_colors_text", scope.setPageColorScheme, false);
    window.addEventListener("WELM_nt_background_random_gradient", scope.setBackgroundRandomGradient, false);
    window.addEventListener("WELM_nt_thehive_hide_tips", scope.setHideTips, false);
};

var DateTime = function() {

    var scope = this;

    //

    var UPDATE_DATE_INTERVAL = 60000; //1m
    var UPDATE_TIME_INTERVAL = 5000; //5s

    //

    var headerTimeBlock = document.getElementById("header-time-block");
    var headerTime = document.getElementById("header-time");
    var headerTimePeriod = document.getElementById("header-time-period");
    var headerDate = document.getElementById("header-date");

    var dateUpdater;
    var timeUpdater;

    //

    function getTimeData() {
        var date = new Date();

        var hour = date.getHours();
        var ampm = hour >= 12 ? 'PM' : 'AM';

        var time = new Date().toLocaleTimeString('en-US', {
            hour12: true,
            hour: "numeric",
            minute: "numeric"
        });

        //Remove AM, PM
        time = time.replace(" AM", "").replace(" PM", "");

        return {
            time: time,
            period: ampm
        };
    };

    function getDateData() {
        var date = new Date();

        var formatted = date.toLocaleDateString("en-US", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return formatted;
    };

    function timeUpdaterFuntion() {
        var timeData = getTimeData();

        headerTime.textContent = timeData.time;
        headerTimePeriod.textContent = timeData.period;
    };

    function dateUpdaterFuntion() {
        var formattedDate = getDateData();

        headerDate.textContent = formattedDate;
    };

    //

    scope.setDateEnabled = function(event) {
        if (!isObject(event)) return false;

        var enabled = event.detail;

        headerDate.classList.toggle("hidden", !enabled);

        if (!enabled) {
            if (dateUpdater) clearInterval(dateUpdater);
        }
        else {
            dateUpdaterFuntion();
            setInterval(dateUpdaterFuntion, UPDATE_DATE_INTERVAL);
        }
    };

    scope.setTimeEnabled = function(event) {
        if (!isObject(event)) return false;
        
        var enabled = event.detail;

        headerTimeBlock.classList.toggle("hidden", !enabled);

        if (!enabled) {
            if (timeUpdater) clearInterval(timeUpdater);
        }
        else {
            timeUpdaterFuntion();
            setInterval(timeUpdaterFuntion, UPDATE_TIME_INTERVAL);
        }
    };

    //

    window.addEventListener("WELM_nt_datetime_show_date", scope.setDateEnabled, false);
    window.addEventListener("WELM_nt_datetime_show_time", scope.setTimeEnabled, false);
};

var Menu = function() {
    
    var menuBtn = document.getElementById('menu-btn');
    var main = document.getElementById('main');

    //

    menuBtn.addEventListener('click', function() {
        main.classList.toggle('sidebar-open');
    });
};

var Search = function() {

    var scope = this;

    //

    var searchInput = document.getElementById("search-input");
    var searchInputIcon = document.getElementById("search-input-icon");
    var searchForm = document.getElementById("search-form");
    var searchEngineList = document.getElementById('search-engine-list');

    //

    function getSearchEngineListItem(searchEngineBlock, defaultSearchEngine) {
        if (!isObject(searchEngineBlock) || !isObject(defaultSearchEngine)) return null;

        var button = document.createElement('a');
        button.className = 'search-engine-dropdown__list-item';
        button.setAttribute("data-value", searchEngineBlock.name);
        button.addEventListener("click", function() {
            updateSearchEngine(this, searchEngineBlock);
        });

        if (defaultSearchEngine.name === searchEngineBlock.name) {
            button.classList.add("active");
            updateSearchEngine(button, searchEngineBlock);
        }

        var icon = document.createElement('img');
        icon.className = "search-engine-dropdown__list-item__img";
        icon.alt = searchEngineBlock.name;
        icon.src = "../assets/images/icons/" + searchEngineBlock.icon;

        var title = document.createElement('span');
        title.className = "search-engine-dropdown__list-item__title";
        title.textContent = searchEngineBlock.name;

        button.appendChild(icon);
        button.appendChild(title);

        return button;
    };

    var defaultSearchEngine = newTab.userDefaults[NT_DEFAULT_SEARCH_ENGINE];

    for (var i = 0; i < SEARCH_ENGINES.length; i++) {
        var searchEngineItem = getSearchEngineListItem(SEARCH_ENGINES[i], defaultSearchEngine);
        if (!searchEngineItem) continue;
        searchEngineList.appendChild(searchEngineItem);
    };

    function updateSearchEngine(btn, searchEngineBlock) {
        if (!btn || !isObject(searchEngineBlock)) return false;

        var activeBtn = document.querySelector('.search-engine-dropdown__list-item.active');
        if (activeBtn) activeBtn.classList.remove("active");

        btn.classList.add('active');

        var placeholder = "Search " + searchEngineBlock.name + " or type a URL";
        searchInput.setAttribute("placeholder", placeholder);

        searchInputIcon.src = "../assets/images/icons/" + searchEngineBlock.icon;

        searchForm.setAttribute("action", searchEngineBlock.url);

        //Set config keys from background
        chrome.runtime.sendMessage({
            action: BACKGROUND_ACTION_SET_KEY,
            key: NT_DEFAULT_SEARCH_ENGINE,
            value: searchEngineBlock
        });
    };

    //

    scope.setSearchColorScheme = function(event) {
        if (!isObject(event)) return false;

        var color = event.detail;

        searchForm.classList.remove("white", "black", "dark-grey", "light-grey");
        searchForm.classList.add(color);
    };

    //

    window.addEventListener("WELM_nt_colors_search", scope.setSearchColorScheme, false);

};

var Settings = function() {

    var scope = this;

    //

    var settingsItems = document.querySelectorAll(".sidebar-table-item__input");

    var MAX_FILE_SIZE_IN_MB = 1;

    //

    scope.updateSettingsItem = function(key, val, updateInRuntime, updateInput) {
        if (!isString(key)) return false;

        //Set newTab defaults
        newTab.userDefaults[key] = val;

        if (updateInRuntime) {
            //Set config keys from background
            chrome.runtime.sendMessage({
                action: BACKGROUND_ACTION_SET_KEY,
                key: key,
                value: val
            });
        }

        if (updateInput) {
            var input = document.querySelector(".sidebar-table-item__input[data-storage-key='" + key + "']");
            var itemKey = input.classList.contains("sidebar-table-item__input--checkbox") ? "checked" : "value";
            var isFileInput = item.getAttribute("type") === "file";

            if (!isFileInput) {
                input[itemKey] = val;
            }
        }
        else {
            //Send event
            var customEventName = "WELM_" + key;
            var event = new CustomEvent(customEventName, {
                detail: val
            });
            window.dispatchEvent(event);
        }
    };

    //

    //Set settings inputs
    for (var i = 0; i < settingsItems.length; i++) {
        var item = settingsItems[i];

        var storageKey = item.getAttribute("data-storage-key");
        if (!storageKey) continue;

        var storageValue = newTab.userDefaults[storageKey];

        var isFileInput = item.getAttribute("type") == "file";
        var itemKey = item.classList.contains("sidebar-table-item__input--checkbox") ? "checked" : "value";

        if (!isFileInput) {
            item[itemKey] = storageValue;
        }

        var evtName = item.classList.contains("sidebar-table-item__input--textbox") ? "input" : "change";

        //Set initial value
        scope.updateSettingsItem(storageKey, storageValue, false);

        //
        item.addEventListener(evtName, function(event) {
            var val = this.classList.contains("sidebar-table-item__input--checkbox") ? this.checked : this.value;

            var isFileInput = this.getAttribute("type") == "file";
            if (isFileInput) {
                processFile(this, function(input, fileData) {
                    if (!input || !fileData) return false;

                    scope.updateSettingsItem(input.getAttribute("data-storage-key"), fileData, true);
                });
            }
            else {
                scope.updateSettingsItem(this.getAttribute("data-storage-key"), val, true);
            }
        });
    };

    function processFile(input, callback) {
        var file = input.files[0];

        if (!file) return callback(null, null);

        var reader = new FileReader();
        var fileSizeMB = ((file.size/1024)/1024).toFixed(4); // MB

        if (fileSizeMB > MAX_FILE_SIZE_IN_MB) {
            alert("Error: Image exceeds maximum of 1MB file size.");
            return callback(null, null);
        }

        reader.addEventListener("load", function () {
            return callback(input, reader.result);
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    //

    window.addEventListener("WELM_update_settings_item", function(event) {
        if (!isObject(event)) return false;

        var data = event.detail;

        if (!isObject(data)) return false;

        scope.updateSettingsItem(
            data["key"],
            data["value"],
            data["updateInRuntime"],
            data["updateInput"]
        );
    }, false);

};

var TheHive = function() {

    var scope = this;

    //

    var thehiveSection = document.getElementById('thehive-section');
    var recentComments = document.getElementById('thehive-recent-comments');

    var THEHIVE_TAB_HOME = "home";
    var THEHIVE_TAB_DISCOVER = "discover";
    var THEHIVE_TAB_NOTIFICATIONS = "notifications";

    //

    function updateActiveTab(tab) {
        var on = document.getElementById("si_nt_thehive_enabled");
        if (!on.checked || !tab || !isString(tab)) return false;

        var activeTab = document.querySelector(".thehive-section-header__meta-tabs__btn.active");
        if (activeTab) activeTab.classList.remove("active");

        var btn = document.querySelector(".thehive-section-header__meta-tabs__btn[data-tab='" + tab + "']");
        if (btn) btn.classList.add("active");

        if (tab !== THEHIVE_TAB_HOME) newTab.classes.modules.thehive.home.hide();
        else newTab.classes.modules.thehive.home.show();

        if (tab !== THEHIVE_TAB_DISCOVER) newTab.classes.modules.thehive.discover.hide();
        else newTab.classes.modules.thehive.discover.show();

        if (tab !== THEHIVE_TAB_NOTIFICATIONS) newTab.classes.modules.thehive.notifications.hide();
        else newTab.classes.modules.thehive.notifications.show();
    };

    var tabs = document.querySelectorAll(".thehive-section-header__meta-tabs__btn");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(event) {
            updateActiveTab(this.getAttribute('data-tab'));
        });
    };

    function getTheHiveCardBtn(type, title, link) {
        if (!type || !link) return null;

        var btn = document.createElement('a');
        btn.className = "thehive-item__card-btn-block__item";
        btn.href = "https://thehive.com/discussion/begin?url=" + link;

        var btnIcon = document.createElement('img');
        btnIcon.className = "thehive-item__card-btn-block__item__img";
        btnIcon.src = "../assets/images/icons/" + type + ".svg"

        var btnTitle = document.createElement('span');
        btnTitle.className = "thehive-item__card-btn-block__item__title";
        btnTitle.textContent = title || "0";

        btn.appendChild(btnIcon);
        btn.appendChild(btnTitle);

        return btn;
    };

    function getTheHiveCard(commentBlock) {
        if (!commentBlock || !isObject(commentBlock)) return null;

        var statsBlock = commentBlock["stats"] || {};
        var pagePreviewBlock = commentBlock["pagePreview"] || {};
        var urlText = pagePreviewBlock["url"] || "";

        var card = document.createElement('div');
        card.className = "thehive-item__card";

        var title = document.createElement('span');
        title.className = "thehive-item__card__title";
        title.textContent = pagePreviewBlock["title"] || "";

        var subtitle = document.createElement('span');
        subtitle.className = "thehive-item__card__subtitle";
        subtitle.textContent = urlText;

        var media = document.createElement('img');
        media.className = "thehive-item__card__media";

        var images = pagePreviewBlock["images"] || "";
        if (isArray(images)) {
            var image = images[0];
            media.src = image;
        }

        var btnBlock = document.createElement('div');

        btnBlock.className = "thehive-item__card-btn-block";

        var likeBtn = getTheHiveCardBtn("upvote", statsBlock["upvoteCount"], urlText);
        var dislikeBtn = getTheHiveCardBtn("downvote", statsBlock["downCount"], urlText);
        var commentBtn = getTheHiveCardBtn("comment", statsBlock["commentCount"], urlText);

        card.appendChild(title);
        card.appendChild(subtitle);
        card.appendChild(media);

        if (likeBtn) btnBlock.appendChild(likeBtn);
        if (dislikeBtn) btnBlock.appendChild(dislikeBtn);
        if (commentBtn) btnBlock.appendChild(commentBtn);

        card.appendChild(btnBlock);

        return card;
    };

    //

    scope.getTheHiveItem = function(commentBlock) {
        if (!commentBlock || !isObject(commentBlock)) return null;

        var pagePreviewBlock = commentBlock["pagePreview"] || {};
        var url = pagePreviewBlock["url"] || "";
        var titleText = pagePreviewBlock["title"] || "";

        var hostname = (new URL(url)).hostname;

        var item = document.createElement('div');
        item.className = "thehive-item";
        item.onclick = function() {
            var link = "https://thehive.com/discussion/begin?url=" + url;
            window.location.href = link;
        };

        var inner = document.createElement('div');
        inner.className = "thehive-item__inner";

        var icon = document.createElement('img');
        icon.className = "thehive-item__icon";
        icon.title = titleText;
        icon.src = 'https://logo.clearbit.com/' + hostname;

        var card = getTheHiveCard(commentBlock);

        inner.appendChild(icon);
        if (card) inner.appendChild(card);

        item.appendChild(inner);

        return item;
    };

    scope.setTheHiveEnabled = function(event) {
        if (!isObject(event)) return false;

        var enabled = event.detail;

        thehiveSection.classList.toggle("hidden", !enabled);
        if (enabled) updateActiveTab("home");
    };

    scope.setTheHiveDefaultTab = function(event) {
        if (!isObject(event)) return false;

        var tab = event.detail;

        updateActiveTab(tab);
    };

    //

    window.addEventListener("WELM_nt_thehive_enabled", scope.setTheHiveEnabled, false);
    window.addEventListener("WELM_nt_thehive_default_tab", scope.setTheHiveDefaultTab, false);
};

var TheHiveDiscover = function() {

    var scope = this;

    //

    var parentContainer = document.getElementById("thehive-content__discover");
    var urlItemContainer = document.getElementById("thehive-discover-url-container");

    //

    function reset() {
        urlItemContainer.innerText = "";
    };

    function loadData() {
        //Perform request to get comment count
        performRequest({
            method: 'GET',
            url: 'https://thehive.com/url?fmt=json'
        }, function(error, data) {
            //Must be object
            if (!isObject(data)) return;

            var blocks = data.commentUrls;
            if (!blocks || !isArray(blocks)) return;

            reset();

            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                var node = newTab.classes.modules.thehive.index.getTheHiveItem(block);
                if (!node) continue;
                urlItemContainer.appendChild(node);
            };
        });
    };

    //

    scope.show = function() {
        parentContainer.classList.remove("hidden");

        loadData();
    };

    scope.hide = function() {
        parentContainer.classList.add("hidden");
    };
};

var TheHiveHome = function() {

    var scope = this;

    //

    var parentContainer = document.getElementById("thehive-content__home");
    var homeItemContainer = document.getElementById("thehive-home-card-container");

    //

    function reset() {
        homeItemContainer.innerText = "";
    };

    function loadData() {
        //Perform request to get notifications
        performRequest({
            method: 'GET',
            url: 'https://thehive.com?fmt=json'
        }, function(error, data) {
            //Must be object
            if (!data || !isObject(data)) return;

            var blocks = data.commentUrls;
            if (!blocks || !isArray(blocks)) return;

            reset();

            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                var node = newTab.classes.modules.thehive.index.getTheHiveItem(block);
                if (!node) continue;
                homeItemContainer.appendChild(node);
            };
        });
    };

    //

    scope.show = function() {
        parentContainer.classList.remove("hidden");

        loadData();
    };

    scope.hide = function() {
        parentContainer.classList.add("hidden");
    };
};

var TheHiveNotifications = function() {

    var scope = this;

    //

    var parentContainer = document.getElementById("thehive-content__notifications");
    var notificationItemContainer = document.getElementById("thehive-notifications-container");
    var notificationTabBtn = document.getElementById("thehive-notification-tab-btn");

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var newNotiCount = 0;

    //

    function reset() {
        newNotiCount = 0;
        notificationItemContainer.innerText = "";
    };

    function loadData() {
        //Perform request to get notifications
        performRequest({
            method: 'GET',
            url: 'https://thehive.com/notification?fmt=json'
        }, function(error, data) {
            //Must be object
            if (!data || !isObject(data)) return;

            var blocks = data["notifications"];
            if (!blocks || !isArray(blocks)) return;

            reset();

            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];

                var node = getTheHiveNotification(block);
                if (!node) continue;

                notificationItemContainer.appendChild(node);
            };

            setBadge();
        });
    };

    function setBadge() {
        if (newNotiCount > 0) {
            notificationTabBtn.setAttribute("data-badge", newNotiCount);
            notificationTabBtn.classList.add("has-badge");
        }
        else {
            notificationTabBtn.removeAttribute("data-badge");
            notificationTabBtn.classList.remove("has-badge");
        }
    };

    function getTheHiveNotification(notiBlock) {
        if (!isObject(notiBlock)) return null;

        //Blocks
        var subjectBlock = notiBlock["subject"] || {};
        var actorBlock = notiBlock["actor"] || {};
        var urlBlock = subjectBlock["url"] || {};
        var commentId = subjectBlock["_id"] || "";

        var hostname = (new URL(urlBlock.url)).hostname;

        var action = notiBlock["action"] || "";
        var subjectType = notiBlock["subjectType"] || "";
        subjectType = subjectType.toLowerCase();

        var noti = document.createElement('a');
        noti.className = 'thehive-noti cs--white-on-black ' + action;
        if (commentId) noti.href = "https://thehive.com/comment/" + commentId;
        if (notiBlock.status === "new") {
            noti.classList.add("new");
            newNotiCount ++;
        }

        //

        var icons = document.createElement('div');
        icons.className = 'thehive-noti__icons';

        var urlIcon = document.createElement('img');
        urlIcon.className = 'thehive-noti__icons__url';
        urlIcon.src = 'https://logo.clearbit.com/' + hostname;

        var actionIcon = document.createElement('img');
        actionIcon.className = 'thehive-noti__icons__action';
        var actionIconUrl = "../assets/images/icons/" + getIconForAction(action);
        actionIcon.src = actionIconUrl;

        icons.appendChild(urlIcon);
        icons.appendChild(actionIcon);

        //

        var content = document.createElement('div');
        content.className = 'thehive-noti__page-content';

        var title = document.createElement('span');
        title.className = 'thehive-noti__page-content__title';
        title.textContent = urlBlock["title"] || "";

        var url = document.createElement('span');
        url.className = 'thehive-noti__page-content__url';
        url.textContent = urlBlock["url"] || "";

        content.appendChild(title);
        content.appendChild(url);

        //

        var context = document.createElement('div');
        context.className = 'thehive-noti__context';

        var name = document.createElement('span');
        name.className = 'thehive-noti__context__name';
        name.textContent = actorBlock["username"] || "";

        var text = document.createElement('span');
        text.className = 'thehive-noti__context__text';
        text.textContent = getActionInPastTense(action) + " your " + subjectType;

        var elapsed = document.createElement('span');
        elapsed.className = 'thehive-noti__context__elapsed';
        elapsed.textContent = getElapsedTime(notiBlock["created"] || "");

        var subject = document.createElement('p');
        subject.className = 'thehive-noti__context__subject';
        subject.textContent = subjectBlock["body"] || "";

        context.appendChild(name);
        context.appendChild(text);
        context.appendChild(elapsed);
        context.appendChild(subject);

        if (notiBlock.action === "reply") {
            var relatedBlock = notiBlock["related"] || {};
            var bodyText = relatedBlock["body"] || "";

            var reply = document.createElement('p');
            reply.className = 'thehive-noti__context__reply';
            reply.textContent = bodyText;

            context.appendChild(reply);
        }

        //

        var meta = document.createElement('div');
        meta.className = 'thehive-noti__meta';

        meta.appendChild(content);
        meta.appendChild(context);

        //

        noti.appendChild(icons);
        noti.appendChild(meta);

        return noti;
    };

    function getElapsedTime(startDate) {
        var a = new Date(startDate);

        var b = new Date();

        var difference = (b - a) / 1000;

        var elapsed = "";

        if (difference < 60) elapsed = "just now";
        else if (difference >= 60 && difference < 3600) {
            var min = (difference / 60);
            min = parseInt(min);
            elapsed = min + "m ago";
        }
        else if (difference >= 3600 && difference < 86400) {
            var hr = (difference / 3600);
            hr = parseInt(hr);
            elapsed = hr + "h ago";
        }
        else if (difference >= 3600 && difference < 86400) {
            var hr = (difference / 3600);
            hr = parseInt(hr);
            elapsed = hr + "h ago";
        }
        else {
            var monthName = monthNames[a.getMonth()];
            var day = a.getDate();

            elapsed = monthName + " " + day;
        }

        return elapsed;
    };

    function getActionInPastTense(action) {
        var past = "looked at";

        if (action == "upvote") past = "upvoted";
        else if (action == "downvote") past = "downvoted";
        else if (action == "reply") past = "replied to";

        return past;
    };

    function getIconForAction(action) {
        var iconName = "spinner.svg";

        if (action == "upvote") iconName = "upvote.svg";
        else if (action == "downvote") iconName = "downvote.svg";
        else if (action == "reply") iconName = "comment.svg";

        return iconName;
    };

    //

    scope.show = function() {
        parentContainer.classList.remove("hidden");

        loadData();
    };

    scope.hide = function() {
        parentContainer.classList.add("hidden");
    };
};

var TopSites = function() {

    var scope = this;

    var topSiteList = document.getElementById('top-site-list');
    var topSitesEnabledCheckbox = document.querySelector('.sidebar-table-item__input.sidebar-table-item__input--checkbox[data-storage-key="nt_top_sites_enabled"]');
    var topSiteItems = [];

    var sizes = ["sm", "md", "lg"];
    var highlights = ["light", "dark"];
    var shapes = ["square", "circle"];

    var allStyleClasses = [].concat.apply([], [sizes, highlights, shapes]);

    topSitesEnabledCheckbox.addEventListener("change", function() {
        if (!this.checked) return false;

        createTopWithDefaults();
    });

    function createTopWithDefaults() {
        createTop(
            newTab.userDefaults[NT_TOP_SITES_ENABLED],
            newTab.userDefaults[NT_TOP_SITES_LIMIT],
            newTab.userDefaults[NT_TOP_SITES_SIZE],
            newTab.userDefaults[NT_TOP_SITES_SHAPE]
        );
    };

    function createTop(enabled, limit, size, shape) {
        if (!size) size = newTab.userDefaults[NT_TOP_SITES_SIZE];
        if (!shape) shape = newTab.userDefaults[NT_TOP_SITES_SHAPE];
        if (limit === undefined) limit = newTab.userDefaults[NT_TOP_SITES_LIMIT];

        if (!enabled) {
            return false;
        }
        reset();
        topSites = newTab.userDefaults[NT_THEHIVE_PINS]['page1'];
        
        var max = Math.min(topSites.length, limit);

        for (var i = 0; i < max; i++) {
            var site = topSites[i];

            var topSiteItem = getTopSiteItem(site);
            if (!topSiteItem) continue;
            topSiteItems.push(topSiteItem);
            topSiteList.appendChild(topSiteItem);
        }
    };

    function reset() {
        topSiteItems = [];

        while (topSiteList.firstChild) {
            topSiteList.removeChild(topSiteList.firstChild);
        };
    };

    function getTopSiteItem(site, size, shape, highlight) {
        if (!isObject(site)) return false;

        if (!size) size = newTab.userDefaults[NT_TOP_SITES_SIZE];
        if (!shape) shape = newTab.userDefaults[NT_TOP_SITES_SHAPE];
        if (!highlight) highlight = newTab.userDefaults[NT_TOP_SITES_HIGHLIGHT];

        var hostname;
        try {
            hostname = (new URL(site.url)).hostname;
        } catch (e) { 
            scope.removePinnedSite(site.url);
            return false;
        }
        var titleText = site.title;

        var button = document.createElement('a');
        button.className = 'top-site-item';
        button.href = site.url;
        button.classList.add(size);
        button.classList.add(shape);
        button.classList.add(highlight);

        var title = document.createElement('span');
        title.className = 'top-site-item__title';
        title.textContent = titleText;

        var image = document.createElement('img')
        image.className = 'top-site-item__img';;
        image.title = site.title;
        image.src = 'https://logo.clearbit.com/' + hostname;

        button.appendChild(image);
        button.appendChild(title);

        var wrapper = document.createElement('div');
        wrapper.className = 'top-site-wrapper';
        var closer = document.createElement('a');
        closer.className = 'top-site-remove';
        closer.textContent = 'X';
        closer.addEventListener("click", function(event) {
            scope.removePinnedSite(site.url);
        });
        wrapper.appendChild(button);
        wrapper.appendChild(closer);

        return wrapper;
    };

    scope.removePinnedSite = function(url) {
        if (!url) return;
        var pins = newTab.userDefaults[NT_THEHIVE_PINS]['page1'];
        pins.splice(pins.findIndex(function(i) {
            return i.url === url;
        }), 1);
        var event2 = new CustomEvent("WELM_update_settings_item", {
            detail: {
                key: NT_THEHIVE_PINS,
                value: {"page1":pins},
                updateInRuntime: true,
                updateInput: false
            }
        });
        window.dispatchEvent(event2);
        createTopWithDefaults();
    }

    scope.addPinnedSite = function(url, title) {
        if (!url || !title) return;
        var newSite = {url:url, title:title};
        var pins = newTab.userDefaults[NT_THEHIVE_PINS]['page1'];
        pins.push(newSite);
        var event2 = new CustomEvent("WELM_update_settings_item", {
            detail: {
                key: NT_THEHIVE_PINS,
                value: {"page1":pins},
                updateInRuntime: true,
                updateInput: false
            }
        });
        window.dispatchEvent(event2);
        createTopWithDefaults();
    }

    //

    scope.setTopSitesEnabled = function(event) {
        if (!isObject(event)) return false;

        var enabled = event.detail;

        topSiteList.classList.toggle("hidden", !enabled);

        if (!enabled) return false;

        createTopWithDefaults();
    };

    scope.updateTopSites = function(event) {
        if (!isObject(event)) return false;

        createTopWithDefaults();
    };

    scope.updateTopSiteStyle = function(event) {
        if (!isObject(event)) return false;

        for (var i = 0; i < topSiteItems.length; i++) {
            var item = topSiteItems[i];

            removeManyClasses(item, allStyleClasses);

            var size = newTab.userDefaults[NT_TOP_SITES_SIZE];
            var shape = newTab.userDefaults[NT_TOP_SITES_SHAPE];
            var highlight = newTab.userDefaults[NT_TOP_SITES_HIGHLIGHT];

            item.classList.add(size);
            item.classList.add(shape);
            item.classList.add(highlight);
        };
    };

    scope.setTopSitesTitlesEnabled = function(event) {
        if (!isObject(event)) return false;

        var enabled = event.detail;

        topSiteList.classList.toggle("show-titles", enabled);
    };

    //
    var pinnedEntryDiv = document.getElementById("pinned-site-entry");
    var pinnedAddButton = document.getElementById("top-site-add-button");
    pinnedAddButton.addEventListener('click', function() {
        pinnedEntryDiv.classList.remove('hidden');
        pinnedAddButton.classList.add('hidden');
    });

    var pinnedCancelButton = document.getElementById("pinned-cancel");
    pinnedCancelButton.addEventListener('click', function() {
        pinnedEntryDiv.classList.add('hidden');
        pinnedAddButton.classList.remove('hidden');
    });

    var pinned_url = document.getElementById("pinned_url");
    var pinned_title = document.getElementById("pinned_title");
    var pinned_submit = document.getElementById("pinned-submit");
    pinned_submit.addEventListener('click', function() {
        if (!pinned_url.value || !pinned_title.value) {
            return alert('Must enter both fields.');
        }
        try {
            var url = new URL(pinned_url.value);
        } catch (e) {
            return alert('Invalid URL.  Should be a valid url like: https://www.thehive.com/');
        }
        scope.addPinnedSite(pinned_url.value, pinned_title.value);
        pinnedEntryDiv.classList.add('hidden');
        pinnedAddButton.classList.remove('hidden');
        pinned_url.value = '';
        pinned_title.value = '';
    })


    window.addEventListener("WELM_nt_top_sites_enabled", scope.setTopSitesEnabled, false);
    window.addEventListener("WELM_nt_top_sites_limit", scope.updateTopSites, false);
    window.addEventListener("WELM_nt_top_sites_size", scope.updateTopSiteStyle, false);
    window.addEventListener("WELM_nt_top_sites_shape", scope.updateTopSiteStyle, false);
    window.addEventListener("WELM_nt_top_sites_highlight", scope.updateTopSiteStyle, false);
    window.addEventListener("WELM_nt_top_sites_show_title", scope.setTopSitesTitlesEnabled, false);
};

var newTab = {};

chrome.runtime.sendMessage({
    action: BACKGROUND_ACTION_GET_KEY,
    key: STORAGE_KEY_ALL
}, function(defaults) {
    _init(defaults);
});

function _init(defaults) {
    newTab.userDefaults = defaults;
    newTab.classes = {
        modules: {
            thehive: {
                index: new TheHive(),
                home: new TheHiveHome(),
                discover: new TheHiveDiscover(),
                notifications: new TheHiveNotifications(),
            },
            topsites: {
                index: new TopSites(),
            },
        },
        page: {
            datetime: new DateTime(),
            menu: new Menu(),
            search: new Search(),
            background: new Background()
        }
    };

    newTab.settings = new Settings();
};

function performRequest(options, callback) {
    //Must have options
    if (!options || !isObject(options)) return callback(false, {});

    //Get data
    var method = options.method || '';
    var url = options.url || '';
    var params = options.params;
    var headers = options.headers;

    //Must have method, url
    if (!method || !url) {
        if (callback) return callback(false, {});
        return false;
    }

    //Create new request
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    //Set headers
    xhr.setRequestHeader('Content-type', 'application/json');
    //Check for headers
    if (headers && isArray(headers)) {
        //Cycle
        for (var i = 0; i < headers.length; i++) {
            var header = headers[i];
            //Ensure is object
            if (isObject(header)) {
                //Set
                xhr.setRequestHeader(header.key, header.value);
            }
        };
    }

    //Send params
    if (params && isObject(params)) {
        xhr.send(JSON.stringify(params));
    }
    else {
        xhr.send({});
    }

    //On load handler
    xhr.onload = function() {
        //Attempt to parse response
        var data = {};
        try { data = JSON.parse(xhr.responseText); }
        catch(e) { /**/ };
        //
        if (callback) callback(false, data);
    };

    //On error handler
    xhr.onerror = function() {
        //Attempt to parse response
        var data = {};
        try { data = JSON.parse(xhr.responseText); }
        catch(e) { /**/ };
        //
        if (callback) callback(true, data);
    };
};