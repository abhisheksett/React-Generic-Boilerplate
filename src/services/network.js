/**
 * This file will be used for all API calls. WIP
 */

import axios from 'axios';
import config from '../config/config';
import constants from '../config/constants';

const serverBaseUrl = `${config.protocol}://${config.hostname}:${config.port}`;

const memoizedData = {};

/**
 * @method makeApiRequest This method is a wrapper on all network calls. If any kind
 * of customization is required, that should be done here
 * @param {*} method The type of request, GET, POST, PUT, DELETE etc
 * @param {*} url The url needs to be called
 * @param {*} data The data needs to be passed to server
 * @param {*} params For get request, if any parameter need to be passed along with URL
 * @param {*} memoizeResponse If this is true, it will remember the response and next time it won't make
 * @param {*} fileResponse For test mode, function will reply back with this file response
 * API call, instead data will be returned from saved value
 */
const makeApiRequest = ({
  method,
  url,
  data = {},
  params = undefined,
  memoizeResponse = false,
  fileResponse = null
}) => {
  return new Promise(async (resolve, reject) => {
    if (config.env === constants.ENV_TEST) {
      return resolve(fileResponse ? fileResponse : {});
    }
    if (memoizedData[url]) {
      return resolve(memoizedData[url]);
    }
    axios({
      method,
      url: `${serverBaseUrl}${url}`,
      data,
      params,
      headers: {}
    })
      .then(response => {
        if (memoizeResponse) {
          memoizedData[url] = response.data;
        }
        return resolve(response.data);
      })
      .catch(err => {
        return reject(err);
      });
    return true;
  });
};

export default makeApiRequest;
