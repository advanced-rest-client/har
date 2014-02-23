(function () {
    'use strict';

    function HTTPArchiveEntry (options, strict) {
        this._strict = (strict === undefined) ? true : strict;

        Object.defineProperties(this, {
            _strict: {
                enumerable: false,
                writable: true,
                value: true
            },

            pageref: {
                enumerable: true,
                writable: true,
                value: undefined
            },

            cache: {
                enumerable: true,
                writable: true,
                value: {}
            },

            serverIPAddress: {
                enumerable: true,
                writable: true,
                value: undefined
            },

            connection: {
                enumerable: true,
                writable: true,
                value: undefined
            },

            comment: {
                enumerable: true,
                writable: true,
                value: undefined
            },

            timings: {
                enumerable: true,
                writable: true,
                value: {
                    dns: 0,
                    connect: 0,
                    blocked: 0,
                    send: 0,
                    wait: 0,
                    receive: 0
                }
            },

            props: {
                enumerable: false,
                configurable: false,
                value: {
                    _startedDateTime: new Date(),
                    _time: new Date(),
                    _request: null,
                    _response: null,
                }
            },

            startedDateTime: {
                enumerable: true,

                get: function () {
                    return this.props._startedDateTime;
                },

                set: function (value) {
                    if (!(value instanceof Date)) {
                        try {
                            value = new Date(value);
                        } catch (e) {
                            throw new Error('invalid date object.');
                        }
                    }

                    this.props._startedDateTime = value;
                }
            },

            time: {
                enumerable: true,

                get: function () {
                    return this.props._time;
                },

                set: function (value) {
                    if (typeof value !== 'number') {
                        throw new Error('invalid time value.');
                    }

                    this.props._time = value;
                }
            },

            request: {
                enumerable: true,

                get: function () {
                    return this.props._request;
                },

                set: function (value) {
                    if (!(value instanceof HTTPArchiveRequest)) {
                        try {
                            value = new HTTPArchiveRequest(value);
                        } catch (e) {
                            throw new Error('invalid request object.');
                        }
                    }

                    this.props._request = value;
                }
            },

            response: {
                enumerable: true,

                get: function () {
                    return this.props._response;
                },

                set: function (value) {
                    if (!(value instanceof HTTPArchiveResponse)) {
                        try {
                            value = new HTTPArchiveResponse(value);
                        } catch (e) {
                            throw new Error('invalid response object.');
                        }
                    }

                    this.props._response = value;
                }
            }
        });

        this.setOptions(options);
    }

    if (typeof define === 'function') {
        // Add support for require.js
        if (typeof define.amd === 'undefined') {
            define(function(require, exports, module) {
                exports.HTTPArchiveEntry = HTTPArchiveEntry;
            });
        } else {
            // if is AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
            define([], function() {
                return HTTPArchiveEntry;
            });
        }

    } else if (typeof exports !== 'undefined') {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var HTTPArchiveEntry = require('beautify').HTTPArchiveEntry`.
        exports.HTTPArchiveEntry = HTTPArchiveEntry;
    } else if (typeof window !== 'undefined') {
        // If we're running a web page and don't have either of the above, add our one global
        window.HTTPArchiveEntry = HTTPArchiveEntry;
    } else if (typeof global !== 'undefined') {
        // If we don't even have window, try global.
        global.HTTPArchiveEntry = HTTPArchiveEntry;
    }
})();
