Package.describe({
    summary: "Generate datamatrix tags (server side)."
});

Npm.depends({dmcreator: "0.0.2"});

Package.on_use(function(api) {
    api.add_files("dmCreator.js", "server");
});
