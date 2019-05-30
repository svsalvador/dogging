/* eslint-disable consistent-return */
/* eslint-disable promise/always-return */
const functions = require('firebase-functions');

const cors = require('cors')({
  origin: true,
});

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();

exports.match = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    try {
      const {
        matcher,
        matched
      } = req.body.data;
      const collection = await firestore.collection('matches');
      const documentForMatcher = await collection.doc(matcher);
      const matcherData = await documentForMatcher.get();
      const matcherList = matcherData.get('list');
      if (!matcherList.includes(matched)) {
        matcherList.push(matched);
        await documentForMatcher.update({
          list: matcherList
        });
      }
      const documentForMatched = await collection.doc(matched);
      const matchedData = await documentForMatched.get();
      const matchedList = matchedData.get('list');
      return res.status(200).send({
        data: {
          matched: matchedList.includes(matcher)
        }
      });
    } catch (error) {
      res.status(400).end();
    }
  });
});
