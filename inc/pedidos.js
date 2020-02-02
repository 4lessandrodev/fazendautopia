var conn = require("./db");

module.exports = {

  save(fields) {
    let query, params = [fields.cliente, fields.itens, fields.total, fields.ecobag, fields.freight, fields.paymentMethod.fields.deliveryAddress, fields.note, fields.plan, fields.enabled, fields.district];

    let code = parseInt(fields.id);
    //Editar pedido
    if (code > 0) {
      params.push(`${fields.status}`);
      params.push(`${code}`);
      query = `
        UPDATE tb_pedido
        SET cliente = ?,
        itens = ?,
        total = ?,
        ecobag = ?, 
        freight = ?,
        paymentMethod = ?,
        deliveryType = ?,
        deliveryAddress = ?,
        note = ?,
        plan = ?,
        enabled = ?,
        district = ?,
        status = ?
        WHERE id = ?
        `;
      //Salvar novo pedido
    } else {
      params.push('Em aberto');
      fields.enabled = 1;
      query = `INSERT INTO tb_pedido (cliente, itens, total, ecobag, freight, paymentMethod, deliveryType, deliveryAddress, note, plan, enabled, district, status)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    }

    return new Promise((resolve, reject) => {
      console.log('PARAMETROS: ' + params);
      console.log('QUERY: ' + query);

      conn.query(query, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },


  getPedidos() {
    return new Promise((resolve, reject) => {
      conn.query(`
       SELECT * FROM tb_pedido WHERE enabled = 1;
      `, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },


  //Deletar um PEDIDO
  delete(id) {
    return new Promise((resolve, reject) => {
      conn.query(`
      DELETE FROM tb_pedido WHERE id = ?
      `, [
        id
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

};