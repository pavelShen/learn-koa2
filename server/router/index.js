'use strict'

module.exports = function(app) {
  require('./project1/index.js')(app)
  require('./project2/index.js')(app)
}
