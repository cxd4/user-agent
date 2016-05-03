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
    fields[1] = "Mozilla-compatible";
    fields[2] = "Unix-derived";

    if (fields[0] === "") {
        fields[0] = "(no browser identification sent)";
        fields[1] = "(unknown)";
        return (fields);
    }

    if (strstr(agent, "Firefox")) {
        fields[1] = "Mozilla Firefox";
    }
    return (fields);
}
