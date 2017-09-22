window.onload = function () {
    var now         = new Date(),
        expires     = now,
        lastVisit   = document.cookie.match(/lastVisit=([^;]+)/),
        userName    = 'somebody';
    // 1. You should set month in standalone way
    expires.setMonth(now.getMonth() + 2);
    // 2. For each cookie you set value individually: for username in 1st line, and for lastVisit in 2nd
    document.cookie = "username=" + userName  + ";path=/;expires=" + expires.toGMTString();
    document.cookie = "lastVisit=" + now.toDateString() + ";path=/;expires=" + expires.toGMTString();
    // 3. You should test and extract your cookie value BEFORE you set it (see above with cookie match)
    // 4. You should test if it's not null also
    if (null != lastVisit) {
        // 5. You should use innerHTML property for set content
        document.getElementById("lastVisitedOn").innerHTML = lastVisit[1];
    }

    // 6. But in general you should RTFM more :)
    // 7. ps: And also use some standard frameworks for this -- not manual raw JS
}