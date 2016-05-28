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
    "use strict";
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
    }
    return null;
 // return (haystack.search(needle) >= 0); // broken KTHML vs. Gecko key read
}

function get_browser_from_agent(agent) {
    "use strict";
    if (strstr(agent, "Lynx")) {
        return "Lynx";
    }
    if (strstr(agent, "Links")) {
        return "Links";
    }
    if (strstr(agent, "NetSurf")) {
        return "NetSurf";
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
    if (strstr(agent, "Chrome")) {
        return "Google Chrome";
    }
    if (strstr(agent, "Safari")) {
        return "Apple Safari";
    }
    if (strstr(agent, "MSIE")) {
        return "Microsoft Internet Explorer";
    }
    if (strstr(agent, "Firefox")) {
        return "Mozilla Firefox";
    }
    if (strstr(agent, "Mozilla")) {
        return strstr(agent, "Gecko")
            ? "Mozilla-compatible"
            : "Mosaic Netscape";
    }
    return "(unknown)";
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

 // all the "ganoo slash linOX" stuff
    if (strstr(agent, "Debian")) {
        return "Debian";
    }
    if (strstr(agent, "Red Hat")) {
        return "Red Hat";
    }
    if (strstr(agent, "Arch")) {
        return "Arch";
    }
    if (strstr(agent, "Slackware")) {
        return "Slackware";
    }
    if (strstr(agent, "Gentoo")) {
        return "Stallmanix (just kidding; it's Gentoo)";
    }
    if (strstr(agent, "Ubuntu") || strstr(agent, "ubuntu")) {
        return "Ubuntu"; // Ubuntu, Kubuntu, Gubuntu, Xubuntu, ...whatever
    }
    if (strstr(agent, "Fedora")) {
        return "Fedora";
    }
    if (strstr(agent, "GNU") && strstr(agent, "Linux")) {
        return "GNU/Linux";
    }
    if (strstr(agent, "Linux")) {
        return "Linux, presumably with GNU";
    }
    if (strstr(agent, "GNU")) {
        return "FSF GNU Project, with HURD";
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
        "Blink", "WebKit", "KHTML", "Gecko", "Presto", "Trident", "EdgeHTML"
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
