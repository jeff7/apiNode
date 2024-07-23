// services/userService.js
const userRepository = require("../repositories/userRepository");

exports.getAllUsers = () => userRepository.findAll();
exports.getUserById = (id) => userRepository.findById(id);
exports.createUser = (user) => userRepository.create(user);
exports.updateUser = (id, user) => userRepository.update(id, user);
exports.deleteUser = (id) => userRepository.delete(id);
