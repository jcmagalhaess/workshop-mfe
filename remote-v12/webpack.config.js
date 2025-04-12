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
    uniqueName: "remoteV12",
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
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
        name: "remote_v12",
        filename: "remoteEntry.js",
        exposes: {
            './ChamadaCapital': './src/app/features/chamada-capital/chamada-capital.module.ts',
        },

        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '12.2.0' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '12.2.0' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '12.2.0' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '12.2.0' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
