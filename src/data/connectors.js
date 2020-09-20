const mongoose = require('mongoose')

// Mongo connection
mongoose.connect(process.env.MONGO_LOCATION, {
  useNewUrlParser: true,
  auth: { authSource: 'admin' },
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_SECRET,
  useUnifiedTopology: true
})

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  company: {
    type: String
  }
})

const Contacts = mongoose.model('contacts', contactSchema)

module.exports = Contacts
