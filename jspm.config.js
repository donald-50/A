SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "A/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.6",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:core-js@1.2.6": {
        "map": {}
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  packages: {
    "A": {
      "main": "A.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "B": "github:donald-50/B@2.0.0",
    "C": "github:donald-50/C@2.0.0"
  },
  packages: {
    "github:donald-50/B@2.0.0": {
      "map": {
        "E": "github:donald-50/E@2.0.0"
      }
    },
    "github:donald-50/C@2.0.0": {
      "map": {
        "D": "github:donald-50/D@2.0.0"
      }
    },
    "github:donald-50/D@2.0.0": {
      "map": {
        "E": "github:donald-50/E@2.0.0"
      }
    }
  }
});
