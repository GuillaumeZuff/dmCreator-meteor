var dm = Npm.require('dmcreator');

DmCreator = {
    // options:
    // - path: output directory (MUST exist)
    // - data: the text to encode in the datamatrix
    // returns:
    // - true if successful, false otherwise
    generateDm: function(options) {
        if (options === undefined) options = {}; 
        return dm.generateDm(options);
    },
    decodeDm: function(options) {
        if (options === undefined) options = {};
        return dm.decodeDm(options);
    }
};
