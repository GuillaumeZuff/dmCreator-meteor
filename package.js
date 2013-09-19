Package.describe({
    summary: "Generate datamatrix tags (server side)."
});

Npm.depends({dmcreator: "0.0.7"});

Package.on_use(function(api) {
    api.add_files("dmCreator.js", "server");
    if (typeof api.export !== 'undefined') {
        api.export(['DmCreator'],'server');
    }
});
