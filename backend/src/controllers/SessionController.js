const connection = require('../database/connection')


module.exports = {
  //esse método apenas verifica se a ID da ONG existe.
  async create(req, res){
    const { id } = req.body;

    const ong = await connection('ongs').where('id', id).select('name').first();

    if(!ong){
      return res.status(400).json({ error: 'No ONG find whit this ID'});
    }

    return res.json(ong);

  }
}