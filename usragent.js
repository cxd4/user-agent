function strlen(string) {
    "use strict"; /*
    var i = 0;

    while (string[i]) {
        i += 1;
    }
    return (i); */
    return (string.length);
}
function strstr(haystack, needle) {
    "use strict"; /*
    var i = 0;
    var j = 0;
    var limit = strlen(haystack);
    var key_size = strlen(needle);

    while (i < limit) {
        if (haystack[i] === needle[j]) {
            j += 1;
        } else {
            j = 0;
        }

        if (j === key_size) {
            return true;
        }
        i += 1;
    } */
    if (haystack.search(needle) >= 0) {
        return true;
    }
    return false;
}

function get_browser_from_agent(agent) {
    "use strict";
    if (strstr(agent, "Lynx")) {
        return "Lynx";
    }
    if (strstr(agent, "Links")) {
        return "Links";
    }
    if (strstr(agent, "OPR") || strstr(agent, "Opera")) {
        return "Opera";
    }
    if (strstr(agent, "Netscape") || strstr(agent, "Navigator")) {
        return "Netscape Navigator";
    }
    if (strstr(agent, "Konqueror") || strstr(agent, "konqueror")) {
        return "Konqueror";
    }
    if (strstr(agent, "Safari")) {
        return "Apple Safari";
    }
    if (strstr(agent, "Chrome")) {
        return "Google Chrome";
    }
    if (strstr(agent, "MSIE")) {
        return "Microsoft Internet Explorer";
    }
    if (strstr(agent, "Mozilla") && strstr(agent, "Fire")) {
        return "Mozilla Firefox";
    }
    return "Mozilla-compatible";
}

function get_OS_from_agent(agent) {
    "use strict";
    if (strstr(agent, "Mobile")) {
        if (strstr(agent, "Win")) {
            return "Windows Mobile";
        }
        if (strstr(agent, "Android")) {
            return "Google Android";
        }
        return "Apple iOS";
    }
    if (strstr(agent, "Win")) {
        return "Microsoft Windows";
    }
    if (strstr(agent, "Mac")) {
        return "Apple Macintosh";
    }
    if (strstr(agent, "BSD")) {
        return "BSD Unix family";
    }
    if (strstr(agent, "Sun") || strstr(agent, "Solar")) {
        return "Solaris";
    }
    if (strstr(agent, "GNU")) {
        return "FSF GNU Project, with HURD";
    }
    if (strstr(agent, "Linux")) {
        return "Linux, presumably with GNU";
    }
    if (strstr(agent, "X11")) {
        return "Unix-based, running X";
    }
    return "(unknown operating system)";
}

function get_engine_from_agent(agent) {
    "use strict";
    var i = 0;
    var known_agents = [
        "Blink", "WebKit", "Gecko", "Presto", "KHTML", "Trident", "EdgeHTML"
    ];

    while (i < 7) {
        if (strstr(agent, known_agents[i])) {
            return (known_agents[i]);
        }
        i += 1;
    }
    return "(custom, proprietary, or none at all)";
}

function parse_user_agent(agent) {
    "use strict";
    var fields = [];

    if (agent === "") {
        fields[0] = "(no browser identification sent)";
        fields[1] = "(unknown)";
        fields[2] = "UNICS-derived";
        fields[3] = "(no way to guess)"; /* I know that's wrong.  Be quiet! */
        return (fields);
    }

    fields[0] = agent;
    fields[1] = get_browser_from_agent(agent);
    fields[2] = get_OS_from_agent(agent);
    fields[3] = get_engine_from_agent(agent);
    return (fields);
}
