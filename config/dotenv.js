const path = require('path');

module.exports = function () {
    return {
        clientAllowedKeys: [
            'HOST'
        ],
        fastbootAllowedKeys: [],
        failOnMissingKey: false,
        path: path.join(path.dirname(__dirname), '.env')
    }
};
