Documentation Generator-IMS
=====================

Process to use: 
-----------------

Install “gulp”, “gulp-ngdocs”, "gulp-connect" and "yeoman".

```
					npm install gulp  gulp-ngdocs gulp-connect --save-dev

					npm install -g yo
```


Create the folder and create the file "package.json" with the command:


```
					npm init
```


Install generator-ims 

```
       				npm install https://github.com/jlmorenorodriguez/generator-ims --save     

```


Then, create the "gulpfile.js" like https://github.com/jlmorenorodriguez/generator-ims/blob/master/gulpfile.js .


The command for use the generator-ims is

```
					yo ims:component componentName
```


Finally, use the following command to generate and view the documentation:

```
					gulp ngdocs
```
