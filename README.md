Documentation Generator-IMS
=====================

Process to use: 
-----------------

Firstly, you need an Angular project with the "package.json" well configured. If you don't have this file yet, you can create it with the following command:

```
					npm init
```


Install “gulp”, “gulp-ngdocs”, "gulp-connect" and "yeoman".

```
					npm install -g yo
					npm install gulp  gulp-ngdocs gulp-connect --save-dev
					
```


Install generator-ims 

```
       				npm install https://github.com/jlmorenorodriguez/generator-ims --save     

```


With the following command, the folder src/app is created. Inside you will find the template files generated by the yeoman generator for this component.

```
					yo ims:component componentName
```

You need to complete these templates according to your needs.

Then, create the "gulpfile.js" like https://github.com/jlmorenorodriguez/generator-ims/blob/master/gulpfile.js .
Edit the options in the gulpfile to include the components previously generated in the 'ngdocs' task, so:

```
					var options = {
					    scripts: [
					      "src/app/componentName/componentName.js" // -> Put the scripts here 
					    ]
					  };
```

Use the following command to generate and view the documentation:

```
					gulp ngdocs
```

This command will create the docs folder with the documentation generated by ngDocs, and will start the server if it's configured in "gulpfile.js" (port 8083 by default). If you already have a server, you don't need this part.

Finally, you can access the API to read the documentation and test the example of any method at: http://[your_url]/api