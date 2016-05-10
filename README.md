Documentation "ngDocs"
=====================

-Process followed: 
-----------------

1º - Install “gulp” and “gulp-ngdocs” 

```
npm install gulp --save-dev

npm install gulp-ngdocs --save-dev
```


2º - Set the "gulpfile.js" file or create it if you do not have it, we must take special care in the path of the file you want to document and put the folder where it will analyze the js files.


```javascript
var gulp = require('gulp')
gulp.task('ngdocs', [], function () {
  var gulpDocs = require('gulp-ngdocs');
  return gulp.src('./app/view1/view1.js')
    .pipe(gulpDocs.process())
    .pipe(gulp.dest('./docs'));
});
```


3º - We will have to comment the head of the modules, drivers ... with blocks comments.
A simple example of this process is as follows:

```javascript
            /**
             * @ngdoc function
             * @name add

             * @methodOf myApp.View2.controller:View2Ctrl
             * @description
             * Add to the list the new phrase.
             */
  $scope.agregar = function(){
    $scope.datos.push($scope.newItem);
  };
```
Tags to document the code are:
-----------------------------
__@ngdoc__: It is the first directive that is included and serves to define if what follows is a driver, service, filter or policy.

__@name__ : It is the component name, following this syntax. 
```javascript
                           nameModule.typeComponent:name
```
Ngdocs, generate internal routes of the web application.

__@description__: describes the component. You can use signs "markdown".

__@example__: through samples codes, allows a test of the code that is documented:

* @example
  <example module="module name" >
   <file name="file name">
    ---Code---
   </file>
  </example>
*/

__@param__: parameter receiving function (if you receive something). It is often used as follows:
```javascript
                       @param {string} Name Name parameter.
```
The first parameter is the type of the parameter ( {string} ), the next word is the name of the parameter, and the rest is the description.
For optional parameters put behind parameter type an equal sign.
Example:
```javascript
                         @param {string=} Name Name parameter.
```

__@returns__ : describes what the function will return.
```javascript
                        @returns {string} String converted.
```

The first parameter is the type and the rest is the description.

__@restrict__: indicates whether the directive is an element (e), an attribute (a) or class (c).
__@scope__: is included to indicate that carries an isolated $scope (and only in this case).

__@requires__: It indicates if a module requires.

__@property__: describes an object property.

Links
----
If you want to put a link inside in some tag as @description, you will have to reference it with the component's name of the tag "name" if this is a internal reference, otherwise (an external reference) just add the link

* External Link -  {@link http://github.com github}   
* Internal link - Internal: {@link web.directive:directive1 directive1}
The word that goes right after the link is to be displayed as a link.


------------------------------------------------------------------------------------------------------------------------
Finally, with the next command, starts ngDocs. Make it a folder “docs” (or whatever we want to call it, it depends on what you indicate in the gulpfile.js) with the documents that make our app.
```javascript
                                    gulp ngdocs   
```

Common errors:
-------------
* In the file gulpfile.js, must be special attention in the path, if not so,you can not create all the necessary documentation.
* Keep in mind that in the @name tag must always have the same value, considering its syntax, but can not create the necessary internal routes.
* Beware asterisks  when using the @example tag.


Create documentation from separate files:
------------------------------------------
For example, to create an index for the documentation with explanations about the project, or also to define controllers for example, we can use external files to files where commented javascript code. Also they accept signs "markdown".
They will be created files with .ngdoc extension which will follow the same syntax with which we commented code .
```javascript
@ngdoc overview
@id index
@name index
@description

## API Documentation

Example 
This application is composed of {@link myApp.View1  View1} and {@link myApp.View2  View2}
```
The path of the file must be in the gulpfile.js .

Example using ngdocs:
---------------------
* Code:
https://github.com/Esri/angular-esri-map/tree/91eabf1a2a9ea8ec07540ff0678034b1d4c95272
* Api of ngDocs running:
http://esri.github.io/angular-esri-map/docs/#/api

References: 
----------

https://github.com/angular/dgeni-packages/blob/master/NOTES.md#ngdoc-tags

https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation

https://github.com/idanush/ngdocs/wiki/API-Docs-Syntax

https://github.com/nikhilmodak/gulp-ngdocs

