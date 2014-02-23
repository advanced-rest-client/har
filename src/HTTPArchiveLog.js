(function () {
    'use strict';

    function HTTPArchiveLog (options, strict) {
        this._strict = (strict === undefined) ? true : strict;

        Object.defineProperties(this, {
            _strict: {
                enumerable: false,
                writable: true,
                value: true
            },

            props: {
                enumerable: false,
                configurable: false,
                value: {
                    _pages: [],
                    _entries: []
                }
            },

            comment: {
                enumerable: true,
                writable: true,
                value: undefined
            },

            version: {
                enumerable: true,
                writable: true,
                value: 1.2
            },

            creator: {
                enumerable: true,
                writable: true,
                value: {
                    name: 'HTTPArchive.js',
                    version: '1.0.0'
                }
            },

            browser: {
                enumerable: true,
                writable: true,
                value: undefined
            },

            pages: {
                enumerable: true,

                get: function () {
                    return this.props._pages;
                },

                set: function (pages) {
                    if (!Array.isArray(pages)) {
                        throw new Error('invalid HTTPArchivePage object.');
                    }

                    for (var x in pages) {
                        this.addPage(pages[x]);
                    }
                }
            },

            entries: {
                enumerable: true,

                get: function () {
                    return this.props._entries;
                },

                set: function (entries) {
                    if (!Array.isArray(entries)) {
                        throw new Error('invalid HTTPArchiveEntry object.');
                    }

                    for (var x in entries) {
                        this.addEntry(entries[x]);
                    }
                }
            }
        });

        this.setOptions(options);
    }

    HTTPArchiveLog.prototype.addPage = function (page) {
        if (!(page instanceof HTTPArchivePage)) {
            page = new HTTPArchivePage(page);
        }

        this.props._pages.push(page);
        return page;
    };

    HTTPArchiveLog.prototype.addEntry = function (entry) {
        if (!(entry instanceof HTTPArchiveEntry)) {
            entry = new HTTPArchiveEntry(entry);
        }

        this.props._entries.push(entry);
        return entry;
    };

    if (typeof define === 'function') {
        // Add support for require.js
        if (typeof define.amd === 'undefined') {
            define(function(require, exports, module) {
                exports.HTTPArchiveLog = HTTPArchiveLog;
            });
        } else {
            // if is AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
            define([], function() {
                return HTTPArchiveLog;
            });
        }

    } else if (typeof exports !== 'undefined') {
        // Add support for CommonJS. Just put this file somewhere on your require.paths
        // and you will be able to `var HTTPArchiveLog = require('beautify').HTTPArchiveLog`.
        exports.HTTPArchiveLog = HTTPArchiveLog;
    } else if (typeof window !== 'undefined') {
        // If we're running a web page and don't have either of the above, add our one global
        window.HTTPArchiveLog = HTTPArchiveLog;
    } else if (typeof global !== 'undefined') {
        // If we don't even have window, try global.
        global.HTTPArchiveLog = HTTPArchiveLog;
    }
}).call(this);
