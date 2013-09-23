var dm = Npm.require('dmcreator');

DmCreator = {
    // options:
    // - data: the text to encode in the datamatrix
    // returns:
    // - success (bool)
    // - width (width of image)
    // - height
    // - channels
    // - pixels (array containing pixel values)
    generateDm: function(options) {
        if (options === undefined) options = {}; 
        return dm.generateDm(options);
    },
    decodeDm: function(options) {
        if (options === undefined) options = {};
        return dm.decodeDm(options);
    }
};
