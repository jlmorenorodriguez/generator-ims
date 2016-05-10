Documentation Generator-IMS
=====================

-Process to use: 
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

Go to the folder "node_modules" and into it, go to the folder "generator-ims" and install the dependences of the generator with the next command:

```
cd node_modules/generator-ims/

npm link
``` 

Then, create the "gulpfile.js" like https://github.com/jlmorenorodriguez/generator-ims/blob/master/gulpfile.js .


Finally, use the following command to generate and view the documentation:

´´´
gulp ngdocs
´´´
