# Browserify Examples

Browserify examples for starting your own workflows in web applications.

### Hello World

Simply hello world, check out how Browserify turns your Node.js code into browser code. Node.js is popular because modules are written as pieces of code that do 1 thing and 1 thing well. This allows you to use the module writing style in the browser.

### Express/JQuery/Backbone

Express sets up a web server, JQuery/Backbone are installed from NPM and required from the client side code. Modularization of the Backbone view is shown.

### Browserify Transforms

The most powerful feature in Browserify are source transforms. A source transform is a stream injected between the resolved module and the content that is returned. These examples show brfs, envify, and hbsfy.

### Express/Angular

This is a workflow that I personally like that combines the use of brfs to load Angular units of code through require(). Using napa as a shim to allow loading of bower components as npm modules (without package.json), this is a powerful way to modularly write Angular code in a team.

# License

MIT