const pythonShell = require('python-shell');

const script1 = '../client/pythonScript.py';

const sendNext = (img, response) => {
  const nextValue = img % 10;
  const options = {
    args: [
      nextValue,
    ],
  };

  pythonShell.run(script1, options, (err) => {
    if (err) {
      response.writeHead(500);
      return response.end(err);
    }
    const img2 = img / 10;
    if (img2 > 0) {
      sendNext(img2, response);
    }
    response.writeHeader(200, { 'content-type': 'text/plain' });
    response.write('Mission accomplised!');
    return response.end();
  });
};

const runScript1 = (request, response) => {
  const { img } = request.headers;

  sendNext(img, response);
};


module.export.runScript1 = runScript1;
