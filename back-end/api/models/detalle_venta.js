/**
 * 
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    cantidad_venta: {
      type: 'integer'
    },
    precio_venta:{
      type:'integer'
    },
    descuento:{
      type: 'integer'
    },
    iddetalven: {
      model: 'articulo'
    },
    iddetalventa: {
      model: 'venta'
    }
  },

};

