'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.runSql(`
    CREATE TABLE countries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      country VARCHAR(255) UNIQUE NOT NULL
    );
  `, callback);
};

exports.down = function(db, callback) {
  db.runSql('DROP TABLE countries;', callback);
};

exports._meta = {
  "version": 1
};
