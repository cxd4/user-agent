function parse_user_agent(agent) {
    "use strict";
    var fields = [];

    fields[0] = agent;
    fields[1] = "Mozilla-compatible";
    fields[2] = "Unix-derived";
    return (fields);
}
