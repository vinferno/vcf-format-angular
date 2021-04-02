export function help(args: any) {
  const options = {
    '--test': '--help --test',
  };

  switch (args[1]) {
    case '--test':
      console.log('This is just a test.');
      return args;
    default:
      console.log('please select a help topic');
      console.log(JSON.stringify(options, null, 4));
      return args;
  }
}
