const User = require("../models/User");

class UserRepository {
  async findAll() {
    return await User.findAll();
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async create(user) {
    return await User.create(user);
  }

  async update(id, user) {
    const existingUser = await User.findByPk(id);
    if (existingUser) {
      existingUser.set(user);
      return await existingUser.save();
    }
    return null;
  }

  async delete(id) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new UserRepository();
