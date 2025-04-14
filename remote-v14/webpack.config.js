const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "remoteV14",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "remoteV14",
        filename: "remoteEntry.json",
        exposes: {
            './ChamadaCapital': './src/app/features/chamada-capital/chamada-capital.module.ts',
        },

        // For hosts (please adjust)
        remotes: {
            "remote_v12": "http://localhost:4201/remoteEntry.js",
        },

        shared: share({
          "@angular/core": { singleton: true },
          "@angular/common": { singleton: true },
          "@angular/common/http": { singleton: true },
          "@angular/router": { singleton: true },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
