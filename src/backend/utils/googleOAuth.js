const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(
  '486399924742-s2e240actpvcjdtv0miq1k5nivn98fej.apps.googleusercontent.com',
  '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',
  'postmessage',
);

exports.getProfileInfo = async code => {
  const r = await client.getToken(code);
  const idToken = r.tokens.id_token;

  const ticket = await client.verifyIdToken({
    idToken,
    audience: '486399924742-s2e240actpvcjdtv0miq1k5nivn98fej.apps.googleusercontent.com',
  });

  const payload = ticket.getPayload();

  return payload;
};
