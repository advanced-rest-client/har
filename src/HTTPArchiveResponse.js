(function () {
    'use strict';

    function HTTPArchiveResponse (options, strict) {
        this._strict = (strict === undefined) ? true : strict;

        Object.defineProperties(this, new HTTPArchiveHeadersProps(this));

        Object.defineProperties(this, {
            _strict: {
                enumerable: false,
                writable: true,
                value: true
            },

            status: {
                enumerable: true,
                writable: true,
                value: 0
            },

            statusText: {
                enumerable: true,
                writable: true,
                value: ''
            },

            httpVersion: {
                enumerable: true,
                writable: true,
                value: 'HTTP/1.1'
            },

            redirectURL: {
                enumerable: true,
                writable: true,
                value: ''
            },

            bodySize: {
                enumerable: true,
                writable: true,
                value: 0
            },

            content: {
                enumerable: true,
                writable: true,
                value: {
                    size: 0,
                    mimeType: '',
                    text: ''
                }
            },

            comment: {
                enumerable: true,
                writable: true,
                value: undefined
            }
        });

        this.setOptions(options);
    }

    HTTPArchiveResponse.prototype.printHeaders = function () {
        var headers = [];

        // generatae first header line
        headers.push(this.httpVersion + ' ' + this.status + ' ' + this.statusText);

        for (var name in this.props._headers) {
            headers.push(name + ': ' + this.props._headers[name]);
        }

        return headers.join('\r\n') + '\r\n\r\n';
    };

    HTTPArchiveResponse.prototype.toString = function () {
        return this.printHeaders();
    };

    if (typeof define === 'function') {
        // Add support for require.js
        if (typeof define.amd === 'undefined') {
            define(function(require, exports, module) {
                exports.HTTPArchiveResponse = HTTPArchiveResponse;
            });
        } else {
            // if is AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
            define([], function() {
                return HTTPArchiveResponse;
            });
        }

    } else if (typeof exports !== 'undefined') {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var HTTPArchiveResponse = require('beautify').HTTPArchiveResponse`.
        exports.HTTPArchiveResponse = HTTPArchiveResponse;
    } else if (typeof window !== 'undefined') {
        // If we're running a web page and don't have either of the above, add our one global
        window.HTTPArchiveResponse = HTTPArchiveResponse;
    } else if (typeof global !== 'undefined') {
        // If we don't even have window, try global.
        global.HTTPArchiveResponse = HTTPArchiveResponse;
    }
})();
