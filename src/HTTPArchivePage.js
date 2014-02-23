(function () {
    'use strict';

    function HTTPArchivePage (options, strict) {
        this._strict = (strict === undefined) ? true : strict;

        Object.defineProperties(this, {
            _strict: {
                enumerable: false,
                writable: true
            },

            comment: {
                enumerable: true,
                writable: true,
                value: undefined
            },

            id: {
                enumerable: true,
                writable: true,
                value: Math.floor(Math.random() * 11)
            },

            title: {
                enumerable: true,
                writable: true,
                value: null
            },

            pageTimings: {
                enumerable: true,
                writable: true,
                value: {
                    onContentLoad: 0,
                    onLoad: 0
                }
            },

            props: {
                enumerable: false,
                configurable: false,
                value: {
                    _startedDateTime: new Date()
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
            }
        });

        this.setOptions(options);
    }

    if (typeof define === 'function') {
        // Add support for require.js
        if (typeof define.amd === 'undefined') {
            define(function(require, exports, module) {
                exports.HTTPArchivePage = HTTPArchivePage;
            });
        } else {
            // if is AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
            define([], function() {
                return HTTPArchivePage;
            });
        }

    } else if (typeof exports !== 'undefined') {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var HTTPArchivePage = require('beautify').HTTPArchivePage`.
        exports.HTTPArchivePage = HTTPArchivePage;
    } else if (typeof window !== 'undefined') {
        // If we're running a web page and don't have either of the above, add our one global
        window.HTTPArchivePage = HTTPArchivePage;
    } else if (typeof global !== 'undefined') {
        // If we don't even have window, try global.
        global.HTTPArchivePage = HTTPArchivePage;
    }
}).call(this);
