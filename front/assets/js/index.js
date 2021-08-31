/**
 * 包装器
 */

import Conf from './conf';
import _Api from './api';

// import Storage from './storage';
// import Date from './date';
import _Http from './http';

export const api = new _Api();
export const http = new _Http();

export default {Conf, api, Storage, Date, http};
