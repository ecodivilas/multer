const userRepository = require('../repository/users')

class UserController {

    async getAllusers() {
       return await userRepository.getAllusers()
    }
    async createUsers(users) {
        return await userRepository.createUsers(users)
     }
    async updateUsers(users) {
        return await userRepository.updateUsers(users)
     }
    async deleteUsers(id) {
        return await userRepository.deleteUsers(id)
     }
}

module.exports = new UserController