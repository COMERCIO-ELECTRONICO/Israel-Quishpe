/**
 * 
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
codigo:{
  type: 'string'
},
nombre:{
  type:'string'
},
precio_venta:{
  type: 'integer'
},
stock:{
  type:'integer'
},
descripcion:{
  type:'string'
},
imagen:{
  type:'string'
},
articulos: {
  collection: 'detalle_ingreso',
  via: 'iddetalle'
},
idartic: {
  model: 'categoria'
},
detalleventa: {
  collection: 'detalle_venta',
  via: 'iddetalven'
}


  },

};

