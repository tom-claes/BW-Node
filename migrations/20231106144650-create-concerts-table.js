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
    CREATE TABLE concerts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      artist_id INT NOT NULL,
      location VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      start_time TIME NOT NULL,
      end_time TIME NOT NULL,

      FOREIGN KEY (artist_id) REFERENCES artists(id) ON DELETE CASCADE ON UPDATE CASCADE
    );
  `, callback);
};

exports.down = function(db, callback) {
  db.runSql('DROP TABLE concerts;', callback);
};

exports._meta = {
  "version": 1
};
