import {Command} from "./parse/parse";
import {createNewProject} from "./commands/new/new";
import {helpAction} from "./commands/help";
import {serveAction} from "./commands/serve/serve";

export function commandAction(command: string, subCommands: string[]) {

    const c = stringToCommand(command);

    switch (c) {

        case Command.new: {
            const projectName = subCommands[0];
            createNewProject(projectName);
            break;
        }

        case Command.generate: {
            break;
        }

        case Command.serve: {
            serveAction();
            break;
        }

        case Command.help: {
            helpAction()
            break
        }

        default: break;

    }

}

function stringToCommand(value: string): Command | undefined {
    if (value in Command) {
        return Command[value as keyof typeof Command];
    }
    return undefined;
}
