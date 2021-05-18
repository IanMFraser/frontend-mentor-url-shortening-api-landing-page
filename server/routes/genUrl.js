const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const config = require('config');
const {nanoid} = require('nanoid');
const Url = require('../models/Url');

router.post('/', async (req, res) => {
    
    const { longUrl } = req.body;
    const baseUrl = config.get('baseuri');
    const urlCode = nanoid(10);

    //check if the base url is valid
    if(!validUrl.isUri(baseUrl)) {
        return res.status(401).json('invalid base url');
    }

    //check if the input (long) url is valid
    if(validUrl.isUri(longUrl)){
        try {
            let url = await Url.findOne({ longUrl });
      
            if (url) {
              res.json(url);
            } else {
              const shortUrl = baseUrl + '/' + urlCode;
              console.log(shortUrl)
              url = new Url({
                longUrl,
                shortUrl,
                urlCode,
                date: new Date(),
              });
      
              await url.save();
      
              res.json(url);
            }
          } catch (err) {
            console.error(err.message);
            res.status(500).json('Server Error');
          }
    } else {
        res.status(401).json('invalid long url');
    }
})

module.exports = router;