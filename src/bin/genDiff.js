#!/usr/bin/env node
import program from 'commander';
import genDiff from '..';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    try {
      console.log(genDiff(firstConfig, secondConfig, program.format));
    } catch (e) {
      console.log(`Failed to build diff: ${e}`);
      process.exit(1);
    }
  })
  .parse(process.argv);

if (process.argv.slice(2).length === 0) {
  console.log(`[INFO] cli args len: ${process.argv.slice(2).length}`);

  program.outputHelp();
  process.exit(1);
}
