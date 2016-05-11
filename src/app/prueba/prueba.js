(function() {


  /**
    @ngdoc overview
    @id generator-ims.prueba
    @name generator-ims.prueba
    @description
    
    ##generator-ims.prueba

    Describe the module here.
    This module use the controller {@link generator-ims.prueba.Controller:PruebaController PruebaController} and the 
    directive {@link generator-ims.prueba.Directive:prueba prueba} .
  */
  angular.module('generator-ims.prueba', [])

  .constant('pruebaConfig', {
      configVar: true
    })
    /**
     * @ngdoc controller
     * @name generator-ims.prueba.Controller:PruebaController
     *
     * @description
     * Describe the Prueba component here.
     *
     * @requires $log
     * @example
       <example module="generator-ims.prueba">
        <file name="index.html">
          <div ng-controller="PruebaController as vm">
            <label>Test log message:</label>
            <input type="text" ng-model="vm.message" />
            <button ng-click="vm.CamelCaseLog(vm.message)">log</button>
            <button ng-click="vm.logs=[]">delete array</button>
            <ul>
              <li ng-repeat="line in vm.logs track by $index">
              {{line}}
              </li>
            </ul>
          </div>
        </file>
      </example>
     */
    .controller('PruebaController',['$log' , function ($log) {
      var vm = this;
     // vm.componentName = 'Prueba';
      //vm.configVar = angular.isDefined($attrs.configVar) ? vm.$parent.$eval($attrs.configVar) : prueba Config.configVar;
      vm.$log = $log;
      vm.message = 'Hello World!';
      vm.logs = [];


      /**
       * @ngdoc function
       * @name camelizer
       * @methodOf generator-ims.prueba.Controller:PruebaController
       * @description
       * Convert the parameter "phrase" to CamelCase, i.e. removes the spaces and puts the first character of the next word in uppercase.
       *
       * @param {string} phrase Text to convert.
       *
       * @returns {string} Text converted.
       */
      vm.camelizer = function(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
          return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
      };
      vm.CamelCaseLog = function(message) {
        vm.logs.push(vm.camelizer(message));
        vm.$log.warn(vm.camelizer(message));

      };

    }])

  /**
   * @ngdoc directive
   * @name generator-ims.prueba.Directive:prueba
   *
   * @description
   * Example of simple directive for convert text to CamelCase.
   * @example
     <example module="generator-ims.prueba">
      
      <file name="index.html">
          <div ng-controller="PruebaController">
            <prueba text="Example of the directive Camel "></prueba>
          </div>
      </file>
    </example>
   */

  .directive('prueba', function() {
    return {
      restrict: 'AEC',
      controller: 'PruebaController',
      controllerAs: 'vm',
      template: "<label>{{text}}</label>",
      scope: {
        text: "@"
      },
      link: function(scope, iElement, iAttrs, controller) {

        var textcamel = controller.camelizer(iAttrs.text);
        iAttrs.text = textcamel;

      }
    };
  });
})();