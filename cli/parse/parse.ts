
export enum Command {
    new,
    generate,
    serve,
    version,
    help
}

export function parse(argv: string[]): any {

    const command = argv[0];

    // sub commands
    const subCommands = argv.slice(1);

    return {command, subCommands }

}
