const {getDefaultConfig} = require('@react-native/metro-config');
const blacklist = require('metro-config/src/defaults/exclusionList');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const baseConfig = getDefaultConfig(__dirname);

const modifiedConfig = {
    resolver: {
        blacklistRE: blacklist([
            /\/nodejs-assets\/.*/,
            /\/android\/.*/,
            /\/ios\/.*/
        ]),
    },
};

const finalConfig = {
    ...baseConfig,
    ...modifiedConfig
}

module.exports = finalConfig;
