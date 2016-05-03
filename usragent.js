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

function parse_user_agent(agent) {
    "use strict";
    var fields = [];

    fields[0] = agent;
    fields[1] = "(unknown)";
    fields[2] = "Unix-derived";
    if (fields[0] === "") {
        fields[0] = "(no browser identification sent)";
        return (fields);
    }

    if (strstr(agent, "Lynx")) {
        fields[1] = "Lynx";
    } else if (strstr(agent, "Links")) {
        fields[1] = "Links";
    } else if (strstr(agent, "OPR") || strstr(agent, "Opera")) {
        fields[1] = "Opera";
    } else if (strstr(agent, "Netscape") || strstr(agent, "Navigator")) {
        fields[1] = "Netscape Navigator";
    } else if (strstr(agent, "Konqueror") || strstr(agent, "konqueror")) {
        fields[1] = "Konqueror";
    } else if (strstr(agent, "Safari")) {
        fields[1] = "Apple Safari";
    } else if (strstr(agent, "Chrome")) {
        fields[1] = "Google Chrome";
    } else if (strstr(agent, "MSIE")) {
        fields[1] = "Microsoft Internet Explorer";
    } else if (strstr(agent, "Mozilla")) {
        if (strstr(agent, "Fire") || strstr(agent, "Phoenix")) {
            fields[1] = "Mozilla Firefox";
        } else {
            fields[1] = "Mozilla-compatible";
        }
    }
    return (fields);
}
