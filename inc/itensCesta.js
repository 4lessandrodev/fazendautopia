var conn = require('./db');

module.exports = {

  save(item, ordem) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO tb_itens_cestas(item_cesta, ordem_cesta)
VALUES(?, ?)`, [
        item, ordem
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getOrdens(ordem) {
    return new Promise((resolve, reject) => {
      conn.query(`
      SELECT * FROM tb_itens_cestas WHERE ordem_cesta = ?
      `, [
        ordem
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  deleteItem(item) {
    return new Promise((resolve, reject) => {
      conn.query(`
      DELETE FROM tb_itens_cestas WHERE item_cesta = ?
      `, [
        item
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
};