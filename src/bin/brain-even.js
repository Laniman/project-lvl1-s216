#!/usr/bin/env node

import welcome from '../welcome';
import hello from '..';
import game from '../brain-even';

welcome();
console.log('Answer "yes" if number even otherwise answer "no".\n');
hello();
console.log();
game();
