### Transforms

##### Modules

* Inlining Static Assets - brfs module
* Environments detection - envify
* Compiled Handlebars templates - hbsfy

### Demo
```browserify -t hbsfy -t brfs -t [ envify --NODE_ENV development ] main.js > bundle.js```
