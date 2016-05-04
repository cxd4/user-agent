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

function parse_user_agent(agent) {
    "use strict";
    var fields = [];

    fields[2] = "UNICS-derived";
    if (agent === "") {
        fields[0] = "(no browser identification sent)";
        fields[1] = "(unknown)";
        return (fields);
    }
    fields[0] = agent;
    fields[1] = get_browser_from_agent(agent);

    if (strstr(agent, "Mobile")) {
        if (strstr(agent, "Win")) {
            fields[2] = "Windows Mobile";
        } else if (strstr(agent, "Android")) {
            fields[2] = "Google Android";
        } else {
            fields[2] = "Apple iOS";
        }
    } else if (strstr(agent, "Win")) {
        fields[2] = "Microsoft Windows";
    } else if (strstr(agent, "Mac")) {
        fields[2] = "Apple Macintosh";
    } else if (strstr(agent, "BSD")) {
        fields[2] = "BSD Unix family";
    } else if (strstr(agent, "Sun") || strstr(agent, "Solar")) {
        fields[2] = "Solaris";
    } else if (strstr(agent, "X11")) {
        fields[2] = "Unix-based, running X";
    }

    return (fields);
}
