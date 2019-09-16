module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.port14.elwinator",
        "icon": "__static/elwin.ico",
          "win": {
            "publish": ["github"]
          }
      }
    }
  }

  
}
