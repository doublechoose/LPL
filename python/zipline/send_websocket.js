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

ws_host_url = "ws://localhost:8888/api/kernels/c0285b0c-0b35-465b-8ed5-fce6df39f51a";

msg = {
    "header": {
        "msg_id": "5bbfed2af3554f6e9bb0839f82d54c9b",
        "username": "username",
        "session": "080e168b3eb04c4f834b8072011e8b19",
        "msg_type": "execute_request",
        "version": "5.2"
    },
    "metadata": {},
    "content": {
        "code": "print(\"hello king\")",
        "silent": false,
        "store_history": true,
        "user_expressions": {},
        "allow_stdin": true,
        "stop_on_error": true
    },
    "buffers": [],
    "parent_header": {},
    "channel": "shell"
};

ws_url = 'ws://localhost:8888';
kernel_url = "/api/kernels/c0285b0c-0b35-465b-8ed5-fce6df39f51a";
session_id = '080e168b3eb04c4f834b8072011e8b19';

ws = new this.WebSocket([
    ws_url,
    url_path_join(kernel_url, 'channels'),
    "?session_id=" + session_id
].join(''));

ws.onopen = function (evt) {
    console.log("Connection open ...");
    ws.send(msg);
}

ws.onmessage = function (evt) {
    console.log("Received Message: " + evt.data);
    // ws.close();
};