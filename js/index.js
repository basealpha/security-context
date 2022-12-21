'use strict';

const constants = require('./constants');
const fs = require('fs');
const path = require('path');

const v1 = require('../contexts/security-v1.json');
const v2 = require('../contexts/security-v2.json');

exports.constants = constants;
const contexts = exports.contexts = new Map();

function _read(_path) {
  return JSON.parse(
    fs.readFileSync(
      path.join(__dirname, _path),
      {encoding: 'utf8'}));
}

contexts.set(
  constants.SECURITY_CONTEXT_V1_URL,
  v1);
contexts.set(
  constants.SECURITY_CONTEXT_V2_URL,
  v2);
