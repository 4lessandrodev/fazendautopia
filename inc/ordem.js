var conn = require('./db');
var NeDB = require('nedb');
let db = new NeDB({
  filename: 'ordens.db',
  autoload: true
});

module.exports = {

  save(user) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO tb_ordens(client_ordem)
VALUES(?)`, [
        user
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getLastOrdem(user) {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT MAX(id) FROM tb_ordens WHERE client_ordem = ?
      `, [
        user
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  saveOrdemInLocalDB(ordem) {
    db.insert({ ordem, status: 'Em aberto' }, (err, results) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: err
        });
      } else {
        res.status(200).json(results);
      }
    });
  }
};