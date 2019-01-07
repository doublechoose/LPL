var _msg_queue = Promise.resolve();

var _handle_ws_message = function (e) {
    _msg_queue.then(function () {
        return deserialize(e.data);
    }).then(function (msg) {
        _finish_ws_message(msg);
    }).catch(function (error) {
        console.error("Couldn't process kernel message", error);
    });
};

_finish_ws_message = function (msg) {
    switch (msg.channel) {
        case 'shell':
            return this._handle_shell_reply(msg);
        case 'iopub':
            return this._handle_iopub_message(msg);
        case 'stdin':
            return this._handle_input_request(msg);
        default:
            console.error("unrecognized message channel", msg.channel, msg);
    }
};

_handle_shell_reply = function (reply) {
    this.events.trigger('shell_reply.Kernel', {
        kernel: this,
        reply: reply
    });
    var that = this;
    var content = reply.content;
    var metadata = reply.metadata;
    var parent_id = reply.parent_header.msg_id;
    var callbacks = this.get_callbacks_for_msg(parent_id);
    var promise = Promise.resolve();
    if (!callbacks || !callbacks.shell) {
        return;
    }
    var shell_callbacks = callbacks.shell;

    // signal that shell callbacks are done
    this._finish_shell(parent_id);

    if (shell_callbacks.reply !== undefined) {
        promise = promise.then(function () {
            return shell_callbacks.reply(reply);
        });
    }
    if (content.payload && shell_callbacks.payload) {
        promise = promise.then(function () {
            return that._handle_payloads(content.payload, shell_callbacks.payload, reply);
        });
    }
    return promise;
};