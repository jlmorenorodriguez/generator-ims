(function() {


  /**
    @ngdoc overview
    @id <%= componentModuleName %>
    @name <%= componentModuleName %>
    @description
    
    ##<%= componentModuleName %>

    Describe the module here.
    This module use the controller {@link <%= componentModuleName %>.Controller:<%= classedName %>Controller <%= classedName %>Controller} and the 
    directive {@link <%= componentModuleName %>.Directive:<%= camelizedName %> <%= camelizedName %>} .
  */
  angular.module('<%= componentModuleName %>', [])

  .constant('<%= camelizedName %>Config', {
      configVar: true
    })
    /**
     * @ngdoc controller
     * @name <%= componentModuleName %>.Controller:<%= classedName %>Controller
     *
     * @description
     * Describe the <%= componentName %> component here.
     *
     * @requires $log
     * @example
       <example module="<%= componentModuleName %>">
        <file name="index.html">
          <div ng-controller="<%= classedName %>Controller as vm">
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
    .controller('<%= classedName %>Controller',['$log' , function ($log) {
      var vm = this;
     // vm.componentName = '<%= componentName %>';
      //vm.configVar = angular.isDefined($attrs.configVar) ? vm.$parent.$eval($attrs.configVar) : <%= camelizedName %> Config.configVar;
      vm.$log = $log;
      vm.message = 'Hello World!';
      vm.logs = [];


      /**
       * @ngdoc function
       * @name camelizer
       * @methodOf <%= componentModuleName %>.Controller:<%= classedName %>Controller
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
   * @name <%= componentModuleName %>.Directive:<%= camelizedName %>
   *
   * @description
   * Example of simple directive for convert text to CamelCase.
   * @example
     <example module="<%= componentModuleName %>">
      
      <file name="index.html">
          <div ng-controller="<%= classedName %>Controller">
            <<%= camelizedName %> text="Example of the directive Camel "></<%= camelizedName %>>
          </div>
      </file>
    </example>
   */

  .directive('<%= camelizedName %>', function() {
    return {
      restrict: 'AEC',
      controller: '<%= classedName %>Controller',
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