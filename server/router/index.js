'use strict'

module.exports = function(app) {
  require('./a.js')(app)
  require('./b.js')(app)
}
