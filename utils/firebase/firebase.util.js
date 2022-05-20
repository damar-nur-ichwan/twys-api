const admin = require("firebase-admin")
const { getFirestore } = require('firebase-admin/firestore');
const { firebase } = require('../../configs')

admin.initializeApp({
  credential: admin.credential.cert(firebase),
  databaseURL: "https://cuacca-51da2-default-rtdb.firebaseio.com"
})

module.exports = { 
  firestore: getFirestore,
  realtime: admin.database()
}