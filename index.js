var HTTPArchiveLog = require('./src/HTTPArchiveLog').HTTPArchiveLog;
var HTTPArchivePage = require('./src/HTTPArchivePage').HTTPArchivePage;
var HTTPArchiveEntry = require('./src/HTTPArchiveEntry').HTTPArchiveEntry;
var HTTPArchiveRequest = require('./src/HTTPArchiveRequest').HTTPArchiveRequest;
var HTTPArchiveResponse = require('./src/HTTPArchiveResponse').HTTPArchiveResponse;
var HTTPArchiveUtils = require('./src/HTTPArchiveUtils').HTTPArchiveUtils;

// aliases
var HTTPArchive = {
	Log: HTTPArchiveLog,
	Page: HTTPArchivePage,
	Entry: HTTPArchiveEntry,
	Request: HTTPArchiveRequest,
	Response: HTTPArchiveResponse,
	Utils: HTTPArchiveUtils
};

module.exports = HTTPArchive;
