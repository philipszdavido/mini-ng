compiles the framework


This is the core of MiniNG framework.

The bootstrapApplication process:

looks up app-root tag in the DOM
gets its HTMLElement instance
get the instnace of the bootstrap component.
get the template: call the template func passing in the instance
