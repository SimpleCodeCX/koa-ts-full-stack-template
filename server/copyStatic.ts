import * as shell from 'shelljs';
shell.cp('-R', './src/assets', '../dist/server/src');
shell.cp('-R', 'package.json', '../dist/server/package.json');
shell.cp('-R', 'tsconfig.json', '../dist/server/tsconfig.json');
shell.rm('-R', '../dist/server/test');
