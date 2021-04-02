import { help } from './options/option-help';
import { smart } from './options/option-smart';

export function cli(args: any) {
  console.log('arguments:', args);

  switch (args[0]) {
    case '--smart':
      return smart(args);
    case '--help':
      return help(args);
    default:
      console.log('use a help command');
      return help(args);
  }
  return args;
}
