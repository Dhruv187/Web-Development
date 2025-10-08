const URL = require("../models/url");
const shortid = require("shortid");

async function GenerateShortID(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url rquired" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitedHistory: [],
  });
  return res.render("home", { id: shortID });
}

async function handleRedirect(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: { timestamps: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectURL);
}
module.exports = { GenerateShortID, handleRedirect };
