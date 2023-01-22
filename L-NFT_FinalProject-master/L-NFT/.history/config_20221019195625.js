export const nftaddress = ""
export const nftmarketaddress = ""

module.exports = {
    webpack(config) {
      config.infrastructureLogging = { debug: /PackFileCache/ }
      return config;
    }
  }