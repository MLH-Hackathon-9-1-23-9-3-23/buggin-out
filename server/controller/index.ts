const { getWordsFromDB } = require('../model');
import { Request, Response } from 'express';

module.exports = {
  getWords(req: Request, res: Response) {

    getWordsFromDB((err: Error | null, data: any) => {
      if (err) {
        console.log('Received an error on route /controller/getWordFromDB', err);
        res.sendStatus(404);
      } else {
        res.status(201).send(data);
      }
    })
  },
}