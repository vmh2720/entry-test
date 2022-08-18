const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(
  '811569830024-ojqros7mc8im786ddi1cj5l9tk94149c.apps.googleusercontent.com',
  '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',
  'postmessage',
);

exports.getProfileInfo = async code => {
  const r = await client.getToken(code);
  const idToken = r.tokens.id_token;

  const ticket = await client.verifyIdToken({
    idToken,
    audience: '811569830024-ojqros7mc8im786ddi1cj5l9tk94149c.apps.googleusercontent.com',
  });

  const payload = ticket.getPayload();

  return payload;
};
