const https = require('https');
https.get('https://generativelanguage.googleapis.com/v1beta/models?key=REMOVED', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => console.log(data));
});
