/**
 * 
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    tipo_persona: {
      type: 'string'
    },
    nombre_persona: {
      type: 'string'
    },
    tipoDocumento_persona:{
      type:'string'
    },
    numDocumento_persona:{
      type:'string'
    },
    direccion_persona:{
      type: 'string'
    },
    telefono_persona:{
      type:'string'
    },
    email_persona:{
      type:'string'
    },
    ingresos: {
      collection: 'Ingreso',
      via: 'iding'
    },
    vetas: {
      collection: 'venta',
      via: 'idventasp'
    },

  },

};

