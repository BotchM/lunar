var subprocess = require('subprocess')
var request = require('request')

SENTRY_API_TOKEN = '93b00c26cd6c44f4b2cef5f7ed7f69dfd02066278c654f9ba7fbeb27a53e4463'



data = {
    'commits': '1ba016db88b59aa44efd3ce8cb7d0e7f6ce06b96',
    'version': '1',
    'projects': ['lunanr'],
}

res = request.post(
   'https://sentry.io/api/0/organizations/cosmos-1i/releases/',
   json=data,
   headers={'Authorization': 'Bearer {SENTRY_API_TOKEN}'},
)
