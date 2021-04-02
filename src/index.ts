#!/usr/bin/env node

import { cli } from './cli';

cli(process.argv.slice(2));
console.log('Hello world');
