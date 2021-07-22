const {google} = require ('googleapis');

const CLIENT_ID = '469495469632-vlgf5oo5gsgk22noos8b6f0mf9ufd7oj.apps.googleusercontent.com';
const CLIENT_SECRET = 'LZWW0ddLKCZ_f1DcCgSOmzmx';

const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04RsxupDfnQWVCgYIARAAGAQSNwF-L9IrXSm4uvWpFKYvLHWYmIAY2eE9l2vTGPcQc2fLV5JcOw1BOzGIDcXgupjCWeZBrYfRhjs';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});
