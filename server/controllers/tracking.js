/*
 * server/controllers/tracking.js
 */

'use strict';

var app = require('../app');

function index(req, res) {
    res.render('tracking/index');
}

// Public API
exports.index = index;