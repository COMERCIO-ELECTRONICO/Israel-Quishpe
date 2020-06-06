/**
 * 
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
     
      nombre_rol:{
        type: 'string'
      },
      descripcion_rol:{
        type: 'string'
      },
      usuario: {
        collection: 'Usuario',
        via: 'idusu'
      },
  
    },
  
  };
  
  