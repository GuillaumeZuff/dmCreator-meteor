Package.describe({
    summary: "Generate datamatrix tags (server side)."
});

Npm.depends({dmcreator: "latest"});

Package.on_use(function(api) {
    api.add_files("dmCreator.js", "server");
    if (typeof api.export !== 'undefined') {
        api.export(['DmCreator'],'server');
    }
});
