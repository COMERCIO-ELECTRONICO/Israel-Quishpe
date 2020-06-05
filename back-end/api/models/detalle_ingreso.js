/**
 * 
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes:{
    cantidad: {
      type:'integer'
    },
    precio:{
      type:'integer'
    },
    iddetaling: {
      model: 'Ingreso'
    },
    iddetalle: {
      model: 'articulo'
    }
    
    

      },
    
    };
    
    