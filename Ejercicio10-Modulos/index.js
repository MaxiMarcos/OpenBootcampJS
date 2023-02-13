import chalk from 'chalk';

import * as nombreModulo from "./modulos/controller.js";


const sum = nombreModulo.suma(1, 2);

console.log(chalk.green(sum));

const mult = nombreModulo.multiplica(4,5);

console.log(mult);