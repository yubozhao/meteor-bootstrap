Package.describe({
  name: "bozhao:bootstrap-material-design",
  summary: "Highly configurable bootstrap and material design integration.",
  version: "3.3.1",
  git: "https://github.com/yubozhao/meteor-bootstrap"
});


Package._transitional_registerBuildPlugin({
  name: 'bootstrap-configurator',
  use: [
    'underscore',
    'bozhao:bootstrap-material-design-data@3.3.1'
  ],
  sources: [
    'module-definitions.js',
    'distributed-configuration.js',
    'bootstrap-configurator.js'
  ],
  npmDependencies: {}
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.2.2");
  api.use([
    'jquery',
    'bozhao:bootstrap-material-design-data@3.3.1',
  ], 'client');
});
