const imagesRepository = require('../repository/images')

class ImagesController {

    async upload(body, files) {
        return await imagesRepository.upload(body, files)
     }
}

module.exports = new ImagesController