var url_path_join = function () {
    /**
     * join a sequence of url components with '/'
     */
    var url = '';
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] === '') {
            continue;
        }
        if (url.length > 0 && url[url.length - 1] != '/') {
            url = url + '/' + arguments[i];
        } else {
            url = url + arguments[i];
        }
    }
    url = url.replace(/\/\/+/, '/');
    return url;
};

var uuid = function () {
    /**
     * http://www.ietf.org/rfc/rfc4122.txt
     */
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[12] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[16] = hexDigits.substr((s[16] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01

    var uuid = s.join("");
    return uuid;
};