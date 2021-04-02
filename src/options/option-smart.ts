import * as fs from 'fs';

export function smart(args: any) {
  const options = {
    '--test': '--help --test',
  };

  switch (args[1]) {
    case '--test':
      console.log('This is just a test.');
      return args;
    default:
      console.log('please select a smart component path');
      console.log(fs.readdirSync('./'));
      return args;
  }
}
