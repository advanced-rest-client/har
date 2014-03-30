# HTTPArchive.js ![GitHub version][github-image]

[![Build Status][travis-image]][travis-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![devDependency Status][daviddm-dev-image]][daviddm-dev-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Total views][sourcegraph-image]][sourcegraph-url]

JavaScript library to manipulate [HTTP Archive 1.2](http://www.softwareishard.com/blog/har-12-spec/) JSON objects. You can install with [Bower](http://bower.io) or [NPM](https://npmjs.org/package/httparchive.js).

## Features

- Import/export HAR objects
- Validates aginst [HAR 1.2 Spec](http://www.softwareishard.com/blog/har-12-spec/)
- Provides default values for common properties (Dates, Page IDs, etc...)
- Automatically calculates `headersSize` when headers are added/removed
- Automatically parses request url to create `queryString` objects and sets `Host` header
- Automatically updates request url when queryString array is modified
- Export headers into printed header message per [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2)
- Exports requests into cURL CLI commands
- Exports queryString array into key=value string

## Table of contents

- [Quick start](#quick-start)
- [Change Log](#changelog)
- [Documentation](#documentation)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Compiling](#compiling-)
- [Contributing](#contributing)
- [Contribute and Earn](#contribute-and-earn)
- [Donating](#donating)
- [Community](#community)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)

## Quick start

Four quick start options are available:

- [Download the latest release](https://github.com/codeinchaos/httparchive.js/releases).
- Clone the repo: 
  ```bash
git clone git@github.com:codeinchaos/httparchive.js.git
```

- Install with [Bower](http://bower.io) [![Bower version][bower-image]][bower-url]
  ```bash
bower install httparchive.js
```

- Install with [NPM](http://npmjs.org) [![NPM version][npm-image]][npm-url]
  ```bash
npm install httparchive.js
```

### What's included

Within the download you'll find the following files, providing both compiled and minified variations:

```
HTTPArchive.js/
└── dist
    ├── HTTPArchive.js
    └── HTTPArchive.min.js
```

### Sample Usage

start by creating a new log instance:

```javascript
var log = new HTTPArchiveLog({
    'creator':{
        'name':'Ahmad'
    }
});
```

create an HTTPArchivePage object and add to the log.

```javascript
var page = new HTTPArchivePage({
    'startedDateTime': new Date(),
    'id':'page_62143',
    'title':'Google',
    'comment': null,
    'pageTimings':{
        'onContentLoad':90,
        'onLoad':245
    }
});

log.addPage(page);
```

create an HTTPArchiveEntry object and add to log.

```javascript
var entry = new HTTPArchiveEntry({
    'pageref':'page_62143',
    'startedDateTime': new Date()
});

log.addEntry(entry);
```

set the entry's HTTPArchiveRequest object

```javascript
entry.request = new HTTPArchiveRequest({
    'method': 'GET',
    'url': 'http://www.google.ca/',
    'httpVersion': 'HTTP/1.1',
    'queryString':[]
});
```
lets see the result

```javascript
log.toJSON();
```

this should output:

```javascript
{
    "comment": "",
    "version": 1.2,
    "creator": {
        "name": "Ahmad"
    },
    "browser": {
        "name": null,
        "value": null
    },
    "pages": [{
        "comment": null,
        "id": "page_62143",
        "title": "Google",
        "pageTimings": {
            "onContentLoad": 90,
            "onLoad": 245
        },
        "startedDateTime": "2014-01-05T01:40:18.548Z"
    }],
    "entries": [{
        "pageref": "page_62143",
        "cache": {},
        "timings": {
            "dns": 0,
            "connect": 0,
            "blocked": 0,
            "send": 0,
            "wait": 0,
            "receive": 0
        },
        "startedDateTime": "2014-01-05T01:40:18.549Z",
        "time": "2014-01-05T01:40:18.549Z",
        "request": {
            "method": "GET",
            "url": "http://www.google.ca/",
            "httpVersion": "HTTP/1.1",
            "queryString": [],
            "headersSize": 0,
            "bodySize": 0,
            "cookies": [],
            "headers": []
        },
        "response": null
    }]
}
```

## Change Log
refer to the [releases](https://github.com/codeinchaos/httparchive.js/releases) section for a detailed ChangeLog

## Documentation

Refer to the [Wiki](https://github.com/codeinchaos/httparchive.js/wiki) for detailed API documentation.

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/codeinchaos/chrome.sockets.tcp.xhr/issues/new).

## Compiling [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

This project uses [Grunt](http://gruntjs.com/). If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

### Available Grunt commands

| Function  | Command       | Description                                                                                                                               |
| --------- | ------------- | --------------------------------------------- |
| Build     | `grunt`       | Compiles.                                     |
| Tests     | `grunt test`  | Runs tests.                                   |
| Watch     | `grunt watch` | This is a convenience method for watching.    |

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

More over, if your pull request contains JavaScript patches or features, you must include relevant unit tests.

Editor preferences are available in the [editor config](.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

### Contribute and Earn

Donate bitcoins to this project or make commits and get tips for it. If your commit is accepted by project maintainer and there are bitcoins on its balance, you will get a tip!

[![tip for next commit][tip4commit-image]][tip4commit-url]

## Donating

Donations are welcome to help support the continuous development of this project.

[![GitTip][gittip-image]][gittip-url]
[![PayPal][paypal-image]][paypal-url]

## Community

Keep track of development and updates.

- Follow [@AhmadNassri](http://twitter.com/ahmadnassri) & [@CodeInChaos](http://twitter.com/codeinchaos) on Twitter.
- Tweet [@CodeInChaos](http://twitter.com/codeinchaos) with any questions/personal support requests.
- Implementation help may be found at Stack Overflow (tagged [`chrome.sockets.tcp.xhr`](http://stackoverflow.com/questions/tagged/chrome.sockets.tcp.xhr)).
- Read and subscribe to [My Blog](http://ahmadnassri.com).

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, this project is maintained under the Semantic Versioning guidelines. Sometimes we screw up, but we'll adhere to these rules whenever possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

- Breaking backward compatibility **bumps the major** while resetting minor and patch
- New additions without breaking backward compatibility **bumps the minor** while resetting the patch
- Bug fixes and misc changes **bumps only the patch**

For more information on SemVer, please visit <http://semver.org/>.

## Authors

**Ahmad Nassri**

- Twitter: [@AhmadNassri](http://twitter.com/ahmadnassri)
- Website: [ahmadnassri.com](http://ahmadnassri.com)

## License

Licensed under [the MIT license](LICENSE).

[github-image]: https://badge.fury.io/gh/codeinchaos%2Fhttparchive.js.png
[bower-url]: http://badge.fury.io/bo/httparchive.js
[bower-image]: https://badge.fury.io/bo/httparchive.js.png
[npm-url]: http://badge.fury.io/js/httparchive.js
[npm-image]: https://badge.fury.io/js/httparchive.js.png
[travis-url]: https://travis-ci.org/codeinchaos/httparchive.js
[travis-image]: https://travis-ci.org/codeinchaos/httparchive.js.png?branch=master
[codeclimate-url]: https://codeclimate.com/github/codeinchaos/httparchive.js
[codeclimate-image]: https://codeclimate.com/github/codeinchaos/httparchive.js.png
[daviddm-url]: https://david-dm.org/codeinchaos/httparchive.js
[daviddm-image]: https://david-dm.org/codeinchaos/httparchive.js.png
[daviddm-dev-url]: https://david-dm.org/codeinchaos/httparchive.js#info=devDependencies
[daviddm-dev-image]: https://david-dm.org/codeinchaos/httparchive.js/dev-status.png
[coveralls-url]: https://coveralls.io/r/codeinchaos/httparchive.js
[coveralls-image]: https://coveralls.io/repos/codeinchaos/httparchive.js/badge.png
[sourcegraph-url]: https://sourcegraph.com/github.com/codeinchaos/httparchive.js
[sourcegraph-image]: https://sourcegraph.com/api/repos/github.com/codeinchaos/httparchive.js/counters/views.png
[gittip-url]: https://www.gittip.com/ahmadnassri/
[gittip-image]: http://img.shields.io/gittip/ahmadnassri.svg
[paypal-url]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UJ2B2BTK9VLRS&on0=project&os0=httparchive.js
[paypal-image]: http://img.shields.io/badge/PayPal-Donate-green.svg
[tip4commit-url]: http://tip4commit.com/projects/640
[tip4commit-image]: http://tip4commit.com/projects/640.svg
