import * as yargs from 'yargs';
import {Minilang} from './minilang';

const argv = yargs.argv;

//Define filename
const filename = argv.f;

let mini = new Minilang(filename);

