/**
 * ArticulosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAllUsers: async function (req , res){
        var misArticulos = await User.find();
        res.ok(misArticulos);
    }

};

