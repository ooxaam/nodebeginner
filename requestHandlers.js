function start() {
    console.log("Request handler 'start' was called.");

    function sleep(milliseconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime < startTime + milliseconds);
    }

    sleep(1000000);
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;