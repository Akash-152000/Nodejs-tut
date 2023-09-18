const URL = require('../model/urlShort')
const shortid = require('shortid')



async function handleGetShortUrl(req,res){
    const body = req.body
    if(!body.url){
        console.log(body,body.url);
        return res.status(400).json({msg:"Please send url"})
    }
    const shortId = shortid.generate(body.url)

    await URL.create({
        urlShortCode:shortId,
        redirectUrl:body.url,
        activityOnUrl:[]
    })
    return res.status(201).json({id:shortId})
}   


async function handleRedirectUrl(req,res){
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
            urlShortCode:shortId,
        },
        {
          $push: {
            activityOnUrl: {
              timestamp: Date.now(),
            },
          },
        }
      );
      res.redirect(entry.redirectUrl);
}

async function handleAnalytics(req,res){
    const shortId = req.params.id
    const result = await URL.findOne({urlShortCode:shortId});
    res.json({clicks:result.activityOnUrl.length})
}

module.exports = {handleGetShortUrl, handleRedirectUrl,handleAnalytics}