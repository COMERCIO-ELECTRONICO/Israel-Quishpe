/**
 * 
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {

    tipo_comprobante: {
      type: 'string'
    },
    serie_comprobante: {
      type: 'string'
    },
    num_comprobante: {
      type: 'string'
    },
    impuesto:{
      type: 'integer'
    },
    total:{
      type: 'integer'
    },
    idusuario: {
      model: 'Usuario'
    },
    iding: {
      model: 'persona'
    },
    detalleing: {
      collection: 'detalle_ingreso',
      via: 'iddetaling'
    }
  },

};

