import { help } from './options/option-help';

export function cli(args: any) {
  console.log(args);

  switch (args[0]) {
    case '--help':
      return help(args);
    default:
      return help(args);
  }
  return args;
}
