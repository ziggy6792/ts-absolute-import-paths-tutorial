import 'module-alias/register';
import path from 'path';

import { handler as bHandler } from '../packages/lambda-b/src';
import { handler as cHandler } from '../packages/lambda-c/src';
import lambdaLocal = require('lambda-local');

// const callB = async () =>
//   await lambdaLocal.execute({
//     lambdaPath: path.join(__dirname, '../packages/lambda-a/src/index'),
//     lambdaHandler: 'handler',
//     envfile: path.join(__dirname, '.env-local'),
//     event: {},
//   });

const callB = async () => bHandler({});
const callC = async () => bHandler({});

const main = async () => {
  await callB();
  await callC();
};

main()
  .then((result) => console.log({ result }))
  .catch((err) => console.log({ err }));
