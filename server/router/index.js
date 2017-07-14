'use strict'

module.exports = function(app) {
  require('./project1/index.js')(app)
  require('./project2/index.js')(app)
  require('./project3/index.js')(app)
  require('./project4/index.js')(app)
}
