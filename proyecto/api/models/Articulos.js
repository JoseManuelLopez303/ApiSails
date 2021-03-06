/**
 * Articulos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: { type: 'string', required: true},
    color: { type: 'string', allowNull: true},
    precio: { type: 'number', required: true},
  },

};

