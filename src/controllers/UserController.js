const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const {active, name, email} = req.body

    const user = await User.create({ active, name, email })

    return res.status(201).json(user)
  },

  async index(req, res) {

    const users = await User.findAll()

    return res.status(200).json(users)
  }
}