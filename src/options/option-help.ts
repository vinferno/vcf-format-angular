export function help(args: any) {
  const options = {
    '--test': '--help --test',
  };
  const helpMessage = '--help';
  console.log(JSON.stringify(options));
  return args;
}
