/**
 * 
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    tipoComprobante: {
      type: 'string'
    },
    serieComprobante: {
      type: 'string'
    },
    numComprobante: {
      type: 'string'
    },
    impuesto_venta: {
      type: 'integer'
    },
    total_venta: {
      type: 'integer'
    },
    idventaUsu: {
      model: 'Usuario'
    },
    detalleventas: {
      collection: 'detalle_venta',
      via: 'iddetalventa'
    },
    idventasp: {
      model: 'persona'
    }
  },

};

