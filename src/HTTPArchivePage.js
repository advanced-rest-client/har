(function (window) {
    'use strict';

    var HTTPArchivePage = window.HTTPArchivePage = function (options) {
        Object.defineProperties(this, {
            id: {
                enumerable: true,
                writable: true,
                value: null
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
                    _startedDateTime: new Date
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
    };
})(window || this);
