const sqlite3 = require('sqlite3').verbose()

exports.plugin = {
  register(container, options) {
    return new sqlite3.Database(options.location)
  },
  async deregister(container, options) {
    options.db.close()
    return true
  }
}
