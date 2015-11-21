cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/org.csteach.plugin.Test/www/test.js",
        "id": "org.csteach.plugin.Test.Test",
        "clobbers": [
            "window.test"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.csteach.plugin.Test": "1.0.0"
}
// BOTTOM OF METADATA
});