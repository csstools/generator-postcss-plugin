var postcss = require('postcss');

module.exports = postcss.plugin('<%= plugin_name %>', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css) {

        // Transform CSS AST here

    };
});
