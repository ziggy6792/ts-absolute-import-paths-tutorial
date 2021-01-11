/* eslint-disable import/prefer-default-export */
import 'module-alias/register';
import 'source-map-support/register';
import aliasImport from '@example/example';
import absolutImport from 'src/example/example';

export const handler = async (event: any): Promise<any> => {
  absolutImport();
  aliasImport();
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: 'hi',
    }),
  };
};
