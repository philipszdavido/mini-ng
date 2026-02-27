import {parse} from "./parse/parse";
import { commandAction } from "./command_action";

function startCLI() {

    const argv = process.argv.slice(2);

    // console.log(argv)

    // Parse arguments into commands

    if (!argv) {
        // display help board
    }

    if (argv.length <= 1) {
        // TODO: Look into this
        // display help board
    }

    const { command, subCommands } = parse(argv);

    commandAction(command, subCommands);

}

startCLI()
