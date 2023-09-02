const axios = require('axios');
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

module.exports = {
  async getWordsFromDB(callback: Function) {

    try {
      await client.connect((err: Error | null) => {
        if (err) {
          console.error('Error connecting to MongoDB:', err);
        } else {
          console.log('Connected to MongoDB');
        }
      });


      const db = client.db("bugginout");
      const words = db.collection("words");

      const data = await words.find({}).toArray();

      console.log('data is', data);

      callback(null, data);
    } catch (error) {
      console.error("Error querying the database:", error);
      callback(error);
    }
  }
}