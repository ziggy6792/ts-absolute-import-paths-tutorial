/* eslint-disable import/prefer-default-export */
import 'module-alias/register';
import 'source-map-support/register';
import relativeImport from './example/example';

export const handler = async (event: any): Promise<any> => {
  relativeImport();
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: 'hi',
    }),
  };
};

// handler({});
