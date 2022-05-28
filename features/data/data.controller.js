const about = require('./about/about.controller')
const dividend = require('./dividend/dividend.controller')
const email = require('./email/email.controller')
const financial = require('./financial/financial.controller')
const history = require('./history/history.controller')
const overview = require('./overview/overview.controller')
const profile = require('./profile/profile.controller')
const ratio = require('./ratio/ratio.controller')
const summary = require('./summary/summary.controller')
const technical = require('./technical/technical.controller')
const url = require('./url/url.controller')

function data(app={}){
    technical(app)
    profile(app)
    financial(app)
    summary(app)
    dividend(app)
    ratio(app)
    history(app)
    overview(app)
    url(app)
    about(app)
    email(app)
}

module.exports = data