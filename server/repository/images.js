const { connect } = require("../config/db");
const bcrypt = require('bcryptjs');

class ImagesRepository {
  db = {};
  constructor() {
    this.db = connect();
  }

  async upload(body, files) {
      try {
        // console.log("Files: ", files)
        
        // const imageQuery = 'INSERT INTO images (image_url, mimetype, originalname, size, found_report_id) VALUES ($1, $2, $3, $4, $5) RETURNING * ';
        const insertPromises = files.map(async (file, index) => {
          const {filename, mimetype, originalname, size } = file
          const fileData = { image_url: filename, mimetype, originalname, size, post_id: body.id} 

            const imageUploaded = await this.db.images.create(fileData)
            console.log(`Done ${index + 1}`);
            return imageUploaded;
        });

        const insertedImages = await Promise.all(insertPromises);

        // Respond once all images are inserted
        return "Successfully inserted"
    } catch (error) {
        console.error(error.message);
    }
  }

}
module.exports = new ImagesRepository();