const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const config = require './config';

const app = express();

const publicVapidKey = config.publicVapidKey;
const privateVapidKey = config.privateVapidKey;
