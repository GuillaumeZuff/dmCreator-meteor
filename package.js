Package.describe({
    name: "dmcreator",
    version: "0.0.1",
    summary: "Generate datamatrix tags (server side)."
});

Npm.depends({dmcreator: "0.7.5"});

Package.onUse(function(api) {
    api.addFiles("dmCreator.js", "server");

    api.export(['DmCreator'],'server');
});
