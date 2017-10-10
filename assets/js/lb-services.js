(function(window, angular, undefined) {'use strict';

var urlBase = "http://52.8.192.6:3000/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.AppUser
 * @header lbServices.AppUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AppUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AppUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/AppUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.AppUser#prototype$__findById__accessTokens
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#prototype$__destroyById__accessTokens
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#prototype$__updateById__accessTokens
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use AppUser.userProfiles() instead.
        "prototype$__get__userProfiles": {
          url: urlBase + "/AppUsers/:id/userProfiles",
          method: "GET"
        },

        // INTERNAL. Use AppUser.userProfiles.create() instead.
        "prototype$__create__userProfiles": {
          url: urlBase + "/AppUsers/:id/userProfiles",
          method: "POST"
        },

        // INTERNAL. Use AppUser.userProfiles.update() instead.
        "prototype$__update__userProfiles": {
          url: urlBase + "/AppUsers/:id/userProfiles",
          method: "PUT"
        },

        // INTERNAL. Use AppUser.userProfiles.destroy() instead.
        "prototype$__destroy__userProfiles": {
          url: urlBase + "/AppUsers/:id/userProfiles",
          method: "DELETE"
        },

        // INTERNAL. Use AppUser.userAddresses.findById() instead.
        "prototype$__findById__userAddresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/userAddresses/:fk",
          method: "GET"
        },

        // INTERNAL. Use AppUser.userAddresses.destroyById() instead.
        "prototype$__destroyById__userAddresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/userAddresses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use AppUser.userAddresses.updateById() instead.
        "prototype$__updateById__userAddresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/userAddresses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use AppUser.orders.findById() instead.
        "prototype$__findById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use AppUser.orders.destroyById() instead.
        "prototype$__destroyById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use AppUser.orders.updateById() instead.
        "prototype$__updateById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/orders/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#prototype$__get__accessTokens
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Queries accessTokens of AppUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/AppUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#prototype$__create__accessTokens
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/AppUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#prototype$__delete__accessTokens
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/AppUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#prototype$__count__accessTokens
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Counts accessTokens of AppUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/AppUsers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use AppUser.userAddresses() instead.
        "prototype$__get__userAddresses": {
          isArray: true,
          url: urlBase + "/AppUsers/:id/userAddresses",
          method: "GET"
        },

        // INTERNAL. Use AppUser.userAddresses.create() instead.
        "prototype$__create__userAddresses": {
          url: urlBase + "/AppUsers/:id/userAddresses",
          method: "POST"
        },

        // INTERNAL. Use AppUser.userAddresses.destroyAll() instead.
        "prototype$__delete__userAddresses": {
          url: urlBase + "/AppUsers/:id/userAddresses",
          method: "DELETE"
        },

        // INTERNAL. Use AppUser.userAddresses.count() instead.
        "prototype$__count__userAddresses": {
          url: urlBase + "/AppUsers/:id/userAddresses/count",
          method: "GET"
        },

        // INTERNAL. Use AppUser.orders() instead.
        "prototype$__get__orders": {
          isArray: true,
          url: urlBase + "/AppUsers/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use AppUser.orders.create() instead.
        "prototype$__create__orders": {
          url: urlBase + "/AppUsers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use AppUser.orders.destroyAll() instead.
        "prototype$__delete__orders": {
          url: urlBase + "/AppUsers/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use AppUser.orders.count() instead.
        "prototype$__count__orders": {
          url: urlBase + "/AppUsers/:id/orders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#create
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/AppUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#createMany
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/AppUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#upsert
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/AppUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#exists
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/AppUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#findById
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/AppUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#find
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/AppUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#findOne
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/AppUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#updateAll
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/AppUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#deleteById
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/AppUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#count
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/AppUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#prototype$updateAttributes
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/AppUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#createChangeStream
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/AppUsers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#login
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/AppUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#logout
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/AppUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#confirm
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/AppUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#resetPassword
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/AppUsers/reset",
          method: "POST"
        },

        // INTERNAL. Use UserProfile.appUser() instead.
        "::get::UserProfile::appUser": {
          url: urlBase + "/UserProfiles/:id/appUser",
          method: "GET"
        },

        // INTERNAL. Use UserAddresses.appUser() instead.
        "::get::UserAddresses::appUser": {
          url: urlBase + "/UserAddresses/:id/appUser",
          method: "GET"
        },

        // INTERNAL. Use Orders.appUser() instead.
        "::get::Orders::appUser": {
          url: urlBase + "/Orders/:id/appUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AppUser#getCurrent
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/AppUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.AppUser#updateOrCreate
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.AppUser#update
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.AppUser#destroyById
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.AppUser#removeById
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.AppUser#getCachedCurrent
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.AppUser#login} or
         * {@link lbServices.AppUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A AppUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser#isAuthenticated
         * @methodOf lbServices.AppUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser#getCurrentId
         * @methodOf lbServices.AppUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.AppUser#modelName
    * @propertyOf lbServices.AppUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `AppUser`.
    */
    R.modelName = "AppUser";

    /**
     * @ngdoc object
     * @name lbServices.AppUser.userProfiles
     * @header lbServices.AppUser.userProfiles
     * @object
     * @description
     *
     * The object `AppUser.userProfiles` groups methods
     * manipulating `UserProfile` instances related to `AppUser`.
     *
     * Call {@link lbServices.AppUser#userProfiles AppUser.userProfiles()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.AppUser#userProfiles
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Fetches hasOne relation userProfiles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        R.userProfiles = function() {
          var TargetResource = $injector.get("UserProfile");
          var action = TargetResource["::get::AppUser::userProfiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userProfiles#create
         * @methodOf lbServices.AppUser.userProfiles
         *
         * @description
         *
         * Creates a new instance in userProfiles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        R.userProfiles.create = function() {
          var TargetResource = $injector.get("UserProfile");
          var action = TargetResource["::create::AppUser::userProfiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userProfiles#createMany
         * @methodOf lbServices.AppUser.userProfiles
         *
         * @description
         *
         * Creates a new instance in userProfiles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        R.userProfiles.createMany = function() {
          var TargetResource = $injector.get("UserProfile");
          var action = TargetResource["::createMany::AppUser::userProfiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userProfiles#destroy
         * @methodOf lbServices.AppUser.userProfiles
         *
         * @description
         *
         * Deletes userProfiles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.userProfiles.destroy = function() {
          var TargetResource = $injector.get("UserProfile");
          var action = TargetResource["::destroy::AppUser::userProfiles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userProfiles#update
         * @methodOf lbServices.AppUser.userProfiles
         *
         * @description
         *
         * Update userProfiles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        R.userProfiles.update = function() {
          var TargetResource = $injector.get("UserProfile");
          var action = TargetResource["::update::AppUser::userProfiles"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.AppUser.userAddresses
     * @header lbServices.AppUser.userAddresses
     * @object
     * @description
     *
     * The object `AppUser.userAddresses` groups methods
     * manipulating `UserAddresses` instances related to `AppUser`.
     *
     * Call {@link lbServices.AppUser#userAddresses AppUser.userAddresses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.AppUser#userAddresses
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Queries userAddresses of AppUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        R.userAddresses = function() {
          var TargetResource = $injector.get("UserAddresses");
          var action = TargetResource["::get::AppUser::userAddresses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userAddresses#count
         * @methodOf lbServices.AppUser.userAddresses
         *
         * @description
         *
         * Counts userAddresses of AppUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.userAddresses.count = function() {
          var TargetResource = $injector.get("UserAddresses");
          var action = TargetResource["::count::AppUser::userAddresses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userAddresses#create
         * @methodOf lbServices.AppUser.userAddresses
         *
         * @description
         *
         * Creates a new instance in userAddresses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        R.userAddresses.create = function() {
          var TargetResource = $injector.get("UserAddresses");
          var action = TargetResource["::create::AppUser::userAddresses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userAddresses#createMany
         * @methodOf lbServices.AppUser.userAddresses
         *
         * @description
         *
         * Creates a new instance in userAddresses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        R.userAddresses.createMany = function() {
          var TargetResource = $injector.get("UserAddresses");
          var action = TargetResource["::createMany::AppUser::userAddresses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userAddresses#destroyAll
         * @methodOf lbServices.AppUser.userAddresses
         *
         * @description
         *
         * Deletes all userAddresses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.userAddresses.destroyAll = function() {
          var TargetResource = $injector.get("UserAddresses");
          var action = TargetResource["::delete::AppUser::userAddresses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userAddresses#destroyById
         * @methodOf lbServices.AppUser.userAddresses
         *
         * @description
         *
         * Delete a related item by id for userAddresses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for userAddresses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.userAddresses.destroyById = function() {
          var TargetResource = $injector.get("UserAddresses");
          var action = TargetResource["::destroyById::AppUser::userAddresses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userAddresses#findById
         * @methodOf lbServices.AppUser.userAddresses
         *
         * @description
         *
         * Find a related item by id for userAddresses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for userAddresses
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        R.userAddresses.findById = function() {
          var TargetResource = $injector.get("UserAddresses");
          var action = TargetResource["::findById::AppUser::userAddresses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.userAddresses#updateById
         * @methodOf lbServices.AppUser.userAddresses
         *
         * @description
         *
         * Update a related item by id for userAddresses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for userAddresses
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        R.userAddresses.updateById = function() {
          var TargetResource = $injector.get("UserAddresses");
          var action = TargetResource["::updateById::AppUser::userAddresses"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.AppUser.orders
     * @header lbServices.AppUser.orders
     * @object
     * @description
     *
     * The object `AppUser.orders` groups methods
     * manipulating `Orders` instances related to `AppUser`.
     *
     * Call {@link lbServices.AppUser#orders AppUser.orders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.AppUser#orders
         * @methodOf lbServices.AppUser
         *
         * @description
         *
         * Queries orders of AppUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::get::AppUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.orders#count
         * @methodOf lbServices.AppUser.orders
         *
         * @description
         *
         * Counts orders of AppUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orders.count = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::count::AppUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.orders#create
         * @methodOf lbServices.AppUser.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders.create = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::create::AppUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.orders#createMany
         * @methodOf lbServices.AppUser.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::createMany::AppUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.orders#destroyAll
         * @methodOf lbServices.AppUser.orders
         *
         * @description
         *
         * Deletes all orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::delete::AppUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.orders#destroyById
         * @methodOf lbServices.AppUser.orders
         *
         * @description
         *
         * Delete a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::destroyById::AppUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.orders#findById
         * @methodOf lbServices.AppUser.orders
         *
         * @description
         *
         * Find a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::findById::AppUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.AppUser.orders#updateById
         * @methodOf lbServices.AppUser.orders
         *
         * @description
         *
         * Update a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::updateById::AppUser::orders"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Restaurant
 * @header lbServices.Restaurant
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Restaurant` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Restaurant",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Restaurants/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Restaurant.restaurantUser() instead.
        "prototype$__get__restaurantUser": {
          url: urlBase + "/Restaurants/:id/restaurantUser",
          method: "GET"
        },

        // INTERNAL. Use Restaurant.categories.findById() instead.
        "prototype$__findById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Restaurant.categories.destroyById() instead.
        "prototype$__destroyById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Restaurant.categories.updateById() instead.
        "prototype$__updateById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Restaurant.food.findById() instead.
        "prototype$__findById__food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/food/:fk",
          method: "GET"
        },

        // INTERNAL. Use Restaurant.food.destroyById() instead.
        "prototype$__destroyById__food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/food/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Restaurant.food.updateById() instead.
        "prototype$__updateById__food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/food/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Restaurant.categories() instead.
        "prototype$__get__categories": {
          isArray: true,
          url: urlBase + "/Restaurants/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Restaurant.categories.create() instead.
        "prototype$__create__categories": {
          url: urlBase + "/Restaurants/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Restaurant.categories.destroyAll() instead.
        "prototype$__delete__categories": {
          url: urlBase + "/Restaurants/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Restaurant.categories.count() instead.
        "prototype$__count__categories": {
          url: urlBase + "/Restaurants/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use Restaurant.food() instead.
        "prototype$__get__food": {
          isArray: true,
          url: urlBase + "/Restaurants/:id/food",
          method: "GET"
        },

        // INTERNAL. Use Restaurant.food.create() instead.
        "prototype$__create__food": {
          url: urlBase + "/Restaurants/:id/food",
          method: "POST"
        },

        // INTERNAL. Use Restaurant.food.destroyAll() instead.
        "prototype$__delete__food": {
          url: urlBase + "/Restaurants/:id/food",
          method: "DELETE"
        },

        // INTERNAL. Use Restaurant.food.count() instead.
        "prototype$__count__food": {
          url: urlBase + "/Restaurants/:id/food/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#create
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Restaurants",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#createMany
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Restaurants",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#upsert
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Restaurants",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#exists
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Restaurants/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#findById
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Restaurants/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#find
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Restaurants",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#findOne
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Restaurants/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#updateAll
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Restaurants/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#deleteById
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Restaurants/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#count
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Restaurants/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#prototype$updateAttributes
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Restaurants/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#createChangeStream
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Restaurants/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#findByLocation
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `ctx` – `{object=}` - 
         *
         *  - `data` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "findByLocation": {
          url: urlBase + "/Restaurants/findByLocation",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.restaurants() instead.
        "::get::RestaurantUser::restaurants": {
          url: urlBase + "/RestaurantUsers/:id/restaurants",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.restaurants.create() instead.
        "::create::RestaurantUser::restaurants": {
          url: urlBase + "/RestaurantUsers/:id/restaurants",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.restaurants.createMany() instead.
        "::createMany::RestaurantUser::restaurants": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/restaurants",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.restaurants.update() instead.
        "::update::RestaurantUser::restaurants": {
          url: urlBase + "/RestaurantUsers/:id/restaurants",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.restaurants.destroy() instead.
        "::destroy::RestaurantUser::restaurants": {
          url: urlBase + "/RestaurantUsers/:id/restaurants",
          method: "DELETE"
        },

        // INTERNAL. Use Category.restaurant() instead.
        "::get::Category::restaurant": {
          url: urlBase + "/Categories/:id/restaurant",
          method: "GET"
        },

        // INTERNAL. Use Food.restaurant() instead.
        "::get::Food::restaurant": {
          url: urlBase + "/Food/:id/restaurant",
          method: "GET"
        },

        // INTERNAL. Use Orders.restaurant() instead.
        "::get::Orders::restaurant": {
          url: urlBase + "/Orders/:id/restaurant",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Restaurant#updateOrCreate
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#update
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#destroyById
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Restaurant#removeById
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Restaurant#modelName
    * @propertyOf lbServices.Restaurant
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Restaurant`.
    */
    R.modelName = "Restaurant";


        /**
         * @ngdoc method
         * @name lbServices.Restaurant#restaurantUser
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Fetches belongsTo relation restaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        R.restaurantUser = function() {
          var TargetResource = $injector.get("RestaurantUser");
          var action = TargetResource["::get::Restaurant::restaurantUser"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Restaurant.categories
     * @header lbServices.Restaurant.categories
     * @object
     * @description
     *
     * The object `Restaurant.categories` groups methods
     * manipulating `Category` instances related to `Restaurant`.
     *
     * Call {@link lbServices.Restaurant#categories Restaurant.categories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Restaurant#categories
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Queries categories of Restaurant.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Restaurant::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.categories#count
         * @methodOf lbServices.Restaurant.categories
         *
         * @description
         *
         * Counts categories of Restaurant.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::Restaurant::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.categories#create
         * @methodOf lbServices.Restaurant.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::Restaurant::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.categories#createMany
         * @methodOf lbServices.Restaurant.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::Restaurant::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.categories#destroyAll
         * @methodOf lbServices.Restaurant.categories
         *
         * @description
         *
         * Deletes all categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::Restaurant::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.categories#destroyById
         * @methodOf lbServices.Restaurant.categories
         *
         * @description
         *
         * Delete a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::Restaurant::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.categories#findById
         * @methodOf lbServices.Restaurant.categories
         *
         * @description
         *
         * Find a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::Restaurant::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.categories#updateById
         * @methodOf lbServices.Restaurant.categories
         *
         * @description
         *
         * Update a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::Restaurant::categories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Restaurant.food
     * @header lbServices.Restaurant.food
     * @object
     * @description
     *
     * The object `Restaurant.food` groups methods
     * manipulating `Food` instances related to `Restaurant`.
     *
     * Call {@link lbServices.Restaurant#food Restaurant.food()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Restaurant#food
         * @methodOf lbServices.Restaurant
         *
         * @description
         *
         * Queries food of Restaurant.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::get::Restaurant::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.food#count
         * @methodOf lbServices.Restaurant.food
         *
         * @description
         *
         * Counts food of Restaurant.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.food.count = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::count::Restaurant::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.food#create
         * @methodOf lbServices.Restaurant.food
         *
         * @description
         *
         * Creates a new instance in food of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.create = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::create::Restaurant::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.food#createMany
         * @methodOf lbServices.Restaurant.food
         *
         * @description
         *
         * Creates a new instance in food of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.createMany = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::createMany::Restaurant::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.food#destroyAll
         * @methodOf lbServices.Restaurant.food
         *
         * @description
         *
         * Deletes all food of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.food.destroyAll = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::delete::Restaurant::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.food#destroyById
         * @methodOf lbServices.Restaurant.food
         *
         * @description
         *
         * Delete a related item by id for food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for food
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.food.destroyById = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::destroyById::Restaurant::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.food#findById
         * @methodOf lbServices.Restaurant.food
         *
         * @description
         *
         * Find a related item by id for food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for food
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.findById = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::findById::Restaurant::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Restaurant.food#updateById
         * @methodOf lbServices.Restaurant.food
         *
         * @description
         *
         * Update a related item by id for food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for food
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.updateById = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::updateById::Restaurant::food"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RestaurantUser
 * @header lbServices.RestaurantUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RestaurantUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RestaurantUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RestaurantUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#prototype$__findById__accessTokens
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#prototype$__destroyById__accessTokens
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#prototype$__updateById__accessTokens
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.restaurants() instead.
        "prototype$__get__restaurants": {
          url: urlBase + "/RestaurantUsers/:id/restaurants",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.restaurants.create() instead.
        "prototype$__create__restaurants": {
          url: urlBase + "/RestaurantUsers/:id/restaurants",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.restaurants.update() instead.
        "prototype$__update__restaurants": {
          url: urlBase + "/RestaurantUsers/:id/restaurants",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.restaurants.destroy() instead.
        "prototype$__destroy__restaurants": {
          url: urlBase + "/RestaurantUsers/:id/restaurants",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.categories.findById() instead.
        "prototype$__findById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.categories.destroyById() instead.
        "prototype$__destroyById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.categories.updateById() instead.
        "prototype$__updateById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.food.findById() instead.
        "prototype$__findById__food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/food/:fk",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.food.destroyById() instead.
        "prototype$__destroyById__food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/food/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.food.updateById() instead.
        "prototype$__updateById__food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/food/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.orders.findById() instead.
        "prototype$__findById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.orders.destroyById() instead.
        "prototype$__destroyById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.orders.updateById() instead.
        "prototype$__updateById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.findById() instead.
        "prototype$__findById__restaurantPayments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments/:fk",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.destroyById() instead.
        "prototype$__destroyById__restaurantPayments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.updateById() instead.
        "prototype$__updateById__restaurantPayments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.variations.findById() instead.
        "prototype$__findById__variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/variations/:fk",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.variations.destroyById() instead.
        "prototype$__destroyById__variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/variations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.variations.updateById() instead.
        "prototype$__updateById__variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/variations/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#prototype$__get__accessTokens
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Queries accessTokens of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#prototype$__create__accessTokens
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/RestaurantUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#prototype$__delete__accessTokens
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/RestaurantUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#prototype$__count__accessTokens
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Counts accessTokens of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/RestaurantUsers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.categories() instead.
        "prototype$__get__categories": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.categories.create() instead.
        "prototype$__create__categories": {
          url: urlBase + "/RestaurantUsers/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.categories.destroyAll() instead.
        "prototype$__delete__categories": {
          url: urlBase + "/RestaurantUsers/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.categories.count() instead.
        "prototype$__count__categories": {
          url: urlBase + "/RestaurantUsers/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.food() instead.
        "prototype$__get__food": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/food",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.food.create() instead.
        "prototype$__create__food": {
          url: urlBase + "/RestaurantUsers/:id/food",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.food.destroyAll() instead.
        "prototype$__delete__food": {
          url: urlBase + "/RestaurantUsers/:id/food",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.food.count() instead.
        "prototype$__count__food": {
          url: urlBase + "/RestaurantUsers/:id/food/count",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.orders() instead.
        "prototype$__get__orders": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.orders.create() instead.
        "prototype$__create__orders": {
          url: urlBase + "/RestaurantUsers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.orders.destroyAll() instead.
        "prototype$__delete__orders": {
          url: urlBase + "/RestaurantUsers/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.orders.count() instead.
        "prototype$__count__orders": {
          url: urlBase + "/RestaurantUsers/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments() instead.
        "prototype$__get__restaurantPayments": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.create() instead.
        "prototype$__create__restaurantPayments": {
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.destroyAll() instead.
        "prototype$__delete__restaurantPayments": {
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.count() instead.
        "prototype$__count__restaurantPayments": {
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments/count",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.variations() instead.
        "prototype$__get__variations": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/variations",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.variations.create() instead.
        "prototype$__create__variations": {
          url: urlBase + "/RestaurantUsers/:id/variations",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.variations.destroyAll() instead.
        "prototype$__delete__variations": {
          url: urlBase + "/RestaurantUsers/:id/variations",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.variations.count() instead.
        "prototype$__count__variations": {
          url: urlBase + "/RestaurantUsers/:id/variations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#create
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/RestaurantUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#createMany
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/RestaurantUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#upsert
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/RestaurantUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#exists
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/RestaurantUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#findById
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RestaurantUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#find
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RestaurantUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#findOne
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RestaurantUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#updateAll
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/RestaurantUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#deleteById
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/RestaurantUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#count
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/RestaurantUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#prototype$updateAttributes
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/RestaurantUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#createChangeStream
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/RestaurantUsers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#login
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/RestaurantUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#logout
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/RestaurantUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#confirm
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/RestaurantUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#resetPassword
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/RestaurantUsers/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#stats
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `ctx` – `{object=}` - 
         *
         *  - `data` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "stats": {
          url: urlBase + "/RestaurantUsers/stats",
          method: "POST"
        },

        // INTERNAL. Use Restaurant.restaurantUser() instead.
        "::get::Restaurant::restaurantUser": {
          url: urlBase + "/Restaurants/:id/restaurantUser",
          method: "GET"
        },

        // INTERNAL. Use Category.restaurantUser() instead.
        "::get::Category::restaurantUser": {
          url: urlBase + "/Categories/:id/restaurantUser",
          method: "GET"
        },

        // INTERNAL. Use Food.restaurantUser() instead.
        "::get::Food::restaurantUser": {
          url: urlBase + "/Food/:id/restaurantUser",
          method: "GET"
        },

        // INTERNAL. Use Orders.restaurantUser() instead.
        "::get::Orders::restaurantUser": {
          url: urlBase + "/Orders/:id/restaurantUser",
          method: "GET"
        },

        // INTERNAL. Use RestaurantPayments.restaurantUser() instead.
        "::get::RestaurantPayments::restaurantUser": {
          url: urlBase + "/RestaurantPayments/:id/restaurantUser",
          method: "GET"
        },

        // INTERNAL. Use Variations.restaurantUser() instead.
        "::get::Variations::restaurantUser": {
          url: urlBase + "/Variations/:id/restaurantUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#getCurrent
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/RestaurantUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#updateOrCreate
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#update
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#destroyById
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#removeById
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#getCachedCurrent
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.RestaurantUser#login} or
         * {@link lbServices.RestaurantUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A RestaurantUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#isAuthenticated
         * @methodOf lbServices.RestaurantUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#getCurrentId
         * @methodOf lbServices.RestaurantUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.RestaurantUser#modelName
    * @propertyOf lbServices.RestaurantUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RestaurantUser`.
    */
    R.modelName = "RestaurantUser";

    /**
     * @ngdoc object
     * @name lbServices.RestaurantUser.restaurants
     * @header lbServices.RestaurantUser.restaurants
     * @object
     * @description
     *
     * The object `RestaurantUser.restaurants` groups methods
     * manipulating `Restaurant` instances related to `RestaurantUser`.
     *
     * Call {@link lbServices.RestaurantUser#restaurants RestaurantUser.restaurants()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#restaurants
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Fetches hasOne relation restaurants.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        R.restaurants = function() {
          var TargetResource = $injector.get("Restaurant");
          var action = TargetResource["::get::RestaurantUser::restaurants"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurants#create
         * @methodOf lbServices.RestaurantUser.restaurants
         *
         * @description
         *
         * Creates a new instance in restaurants of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        R.restaurants.create = function() {
          var TargetResource = $injector.get("Restaurant");
          var action = TargetResource["::create::RestaurantUser::restaurants"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurants#createMany
         * @methodOf lbServices.RestaurantUser.restaurants
         *
         * @description
         *
         * Creates a new instance in restaurants of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        R.restaurants.createMany = function() {
          var TargetResource = $injector.get("Restaurant");
          var action = TargetResource["::createMany::RestaurantUser::restaurants"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurants#destroy
         * @methodOf lbServices.RestaurantUser.restaurants
         *
         * @description
         *
         * Deletes restaurants of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.restaurants.destroy = function() {
          var TargetResource = $injector.get("Restaurant");
          var action = TargetResource["::destroy::RestaurantUser::restaurants"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurants#update
         * @methodOf lbServices.RestaurantUser.restaurants
         *
         * @description
         *
         * Update restaurants of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        R.restaurants.update = function() {
          var TargetResource = $injector.get("Restaurant");
          var action = TargetResource["::update::RestaurantUser::restaurants"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RestaurantUser.categories
     * @header lbServices.RestaurantUser.categories
     * @object
     * @description
     *
     * The object `RestaurantUser.categories` groups methods
     * manipulating `Category` instances related to `RestaurantUser`.
     *
     * Call {@link lbServices.RestaurantUser#categories RestaurantUser.categories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#categories
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Queries categories of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::RestaurantUser::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.categories#count
         * @methodOf lbServices.RestaurantUser.categories
         *
         * @description
         *
         * Counts categories of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::RestaurantUser::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.categories#create
         * @methodOf lbServices.RestaurantUser.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::RestaurantUser::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.categories#createMany
         * @methodOf lbServices.RestaurantUser.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::RestaurantUser::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.categories#destroyAll
         * @methodOf lbServices.RestaurantUser.categories
         *
         * @description
         *
         * Deletes all categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::RestaurantUser::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.categories#destroyById
         * @methodOf lbServices.RestaurantUser.categories
         *
         * @description
         *
         * Delete a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::RestaurantUser::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.categories#findById
         * @methodOf lbServices.RestaurantUser.categories
         *
         * @description
         *
         * Find a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::RestaurantUser::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.categories#updateById
         * @methodOf lbServices.RestaurantUser.categories
         *
         * @description
         *
         * Update a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::RestaurantUser::categories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RestaurantUser.food
     * @header lbServices.RestaurantUser.food
     * @object
     * @description
     *
     * The object `RestaurantUser.food` groups methods
     * manipulating `Food` instances related to `RestaurantUser`.
     *
     * Call {@link lbServices.RestaurantUser#food RestaurantUser.food()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#food
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Queries food of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::get::RestaurantUser::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.food#count
         * @methodOf lbServices.RestaurantUser.food
         *
         * @description
         *
         * Counts food of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.food.count = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::count::RestaurantUser::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.food#create
         * @methodOf lbServices.RestaurantUser.food
         *
         * @description
         *
         * Creates a new instance in food of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.create = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::create::RestaurantUser::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.food#createMany
         * @methodOf lbServices.RestaurantUser.food
         *
         * @description
         *
         * Creates a new instance in food of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.createMany = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::createMany::RestaurantUser::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.food#destroyAll
         * @methodOf lbServices.RestaurantUser.food
         *
         * @description
         *
         * Deletes all food of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.food.destroyAll = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::delete::RestaurantUser::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.food#destroyById
         * @methodOf lbServices.RestaurantUser.food
         *
         * @description
         *
         * Delete a related item by id for food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for food
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.food.destroyById = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::destroyById::RestaurantUser::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.food#findById
         * @methodOf lbServices.RestaurantUser.food
         *
         * @description
         *
         * Find a related item by id for food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for food
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.findById = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::findById::RestaurantUser::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.food#updateById
         * @methodOf lbServices.RestaurantUser.food
         *
         * @description
         *
         * Update a related item by id for food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for food
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.updateById = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::updateById::RestaurantUser::food"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RestaurantUser.orders
     * @header lbServices.RestaurantUser.orders
     * @object
     * @description
     *
     * The object `RestaurantUser.orders` groups methods
     * manipulating `Orders` instances related to `RestaurantUser`.
     *
     * Call {@link lbServices.RestaurantUser#orders RestaurantUser.orders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#orders
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Queries orders of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::get::RestaurantUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.orders#count
         * @methodOf lbServices.RestaurantUser.orders
         *
         * @description
         *
         * Counts orders of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orders.count = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::count::RestaurantUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.orders#create
         * @methodOf lbServices.RestaurantUser.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders.create = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::create::RestaurantUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.orders#createMany
         * @methodOf lbServices.RestaurantUser.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::createMany::RestaurantUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.orders#destroyAll
         * @methodOf lbServices.RestaurantUser.orders
         *
         * @description
         *
         * Deletes all orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::delete::RestaurantUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.orders#destroyById
         * @methodOf lbServices.RestaurantUser.orders
         *
         * @description
         *
         * Delete a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::destroyById::RestaurantUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.orders#findById
         * @methodOf lbServices.RestaurantUser.orders
         *
         * @description
         *
         * Find a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::findById::RestaurantUser::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.orders#updateById
         * @methodOf lbServices.RestaurantUser.orders
         *
         * @description
         *
         * Update a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::updateById::RestaurantUser::orders"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RestaurantUser.restaurantPayments
     * @header lbServices.RestaurantUser.restaurantPayments
     * @object
     * @description
     *
     * The object `RestaurantUser.restaurantPayments` groups methods
     * manipulating `RestaurantPayments` instances related to `RestaurantUser`.
     *
     * Call {@link lbServices.RestaurantUser#restaurantPayments RestaurantUser.restaurantPayments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#restaurantPayments
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Queries restaurantPayments of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        R.restaurantPayments = function() {
          var TargetResource = $injector.get("RestaurantPayments");
          var action = TargetResource["::get::RestaurantUser::restaurantPayments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurantPayments#count
         * @methodOf lbServices.RestaurantUser.restaurantPayments
         *
         * @description
         *
         * Counts restaurantPayments of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.restaurantPayments.count = function() {
          var TargetResource = $injector.get("RestaurantPayments");
          var action = TargetResource["::count::RestaurantUser::restaurantPayments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurantPayments#create
         * @methodOf lbServices.RestaurantUser.restaurantPayments
         *
         * @description
         *
         * Creates a new instance in restaurantPayments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        R.restaurantPayments.create = function() {
          var TargetResource = $injector.get("RestaurantPayments");
          var action = TargetResource["::create::RestaurantUser::restaurantPayments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurantPayments#createMany
         * @methodOf lbServices.RestaurantUser.restaurantPayments
         *
         * @description
         *
         * Creates a new instance in restaurantPayments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        R.restaurantPayments.createMany = function() {
          var TargetResource = $injector.get("RestaurantPayments");
          var action = TargetResource["::createMany::RestaurantUser::restaurantPayments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurantPayments#destroyAll
         * @methodOf lbServices.RestaurantUser.restaurantPayments
         *
         * @description
         *
         * Deletes all restaurantPayments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.restaurantPayments.destroyAll = function() {
          var TargetResource = $injector.get("RestaurantPayments");
          var action = TargetResource["::delete::RestaurantUser::restaurantPayments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurantPayments#destroyById
         * @methodOf lbServices.RestaurantUser.restaurantPayments
         *
         * @description
         *
         * Delete a related item by id for restaurantPayments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for restaurantPayments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.restaurantPayments.destroyById = function() {
          var TargetResource = $injector.get("RestaurantPayments");
          var action = TargetResource["::destroyById::RestaurantUser::restaurantPayments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurantPayments#findById
         * @methodOf lbServices.RestaurantUser.restaurantPayments
         *
         * @description
         *
         * Find a related item by id for restaurantPayments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for restaurantPayments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        R.restaurantPayments.findById = function() {
          var TargetResource = $injector.get("RestaurantPayments");
          var action = TargetResource["::findById::RestaurantUser::restaurantPayments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.restaurantPayments#updateById
         * @methodOf lbServices.RestaurantUser.restaurantPayments
         *
         * @description
         *
         * Update a related item by id for restaurantPayments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for restaurantPayments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        R.restaurantPayments.updateById = function() {
          var TargetResource = $injector.get("RestaurantPayments");
          var action = TargetResource["::updateById::RestaurantUser::restaurantPayments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RestaurantUser.variations
     * @header lbServices.RestaurantUser.variations
     * @object
     * @description
     *
     * The object `RestaurantUser.variations` groups methods
     * manipulating `Variations` instances related to `RestaurantUser`.
     *
     * Call {@link lbServices.RestaurantUser#variations RestaurantUser.variations()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser#variations
         * @methodOf lbServices.RestaurantUser
         *
         * @description
         *
         * Queries variations of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R.variations = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::get::RestaurantUser::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.variations#count
         * @methodOf lbServices.RestaurantUser.variations
         *
         * @description
         *
         * Counts variations of RestaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.variations.count = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::count::RestaurantUser::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.variations#create
         * @methodOf lbServices.RestaurantUser.variations
         *
         * @description
         *
         * Creates a new instance in variations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R.variations.create = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::create::RestaurantUser::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.variations#createMany
         * @methodOf lbServices.RestaurantUser.variations
         *
         * @description
         *
         * Creates a new instance in variations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R.variations.createMany = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::createMany::RestaurantUser::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.variations#destroyAll
         * @methodOf lbServices.RestaurantUser.variations
         *
         * @description
         *
         * Deletes all variations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.variations.destroyAll = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::delete::RestaurantUser::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.variations#destroyById
         * @methodOf lbServices.RestaurantUser.variations
         *
         * @description
         *
         * Delete a related item by id for variations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for variations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.variations.destroyById = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::destroyById::RestaurantUser::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.variations#findById
         * @methodOf lbServices.RestaurantUser.variations
         *
         * @description
         *
         * Find a related item by id for variations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for variations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R.variations.findById = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::findById::RestaurantUser::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantUser.variations#updateById
         * @methodOf lbServices.RestaurantUser.variations
         *
         * @description
         *
         * Update a related item by id for variations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for variations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R.variations.updateById = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::updateById::RestaurantUser::variations"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.UserProfile
 * @header lbServices.UserProfile
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserProfile` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "UserProfile",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/UserProfiles/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use UserProfile.appUser() instead.
        "prototype$__get__appUser": {
          url: urlBase + "/UserProfiles/:id/appUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#create
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/UserProfiles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#createMany
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/UserProfiles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#upsert
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/UserProfiles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#exists
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/UserProfiles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#findById
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/UserProfiles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#find
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/UserProfiles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#findOne
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/UserProfiles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#updateAll
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/UserProfiles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#deleteById
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/UserProfiles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#count
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/UserProfiles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#prototype$updateAttributes
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/UserProfiles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#createChangeStream
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/UserProfiles/change-stream",
          method: "POST"
        },

        // INTERNAL. Use AppUser.userProfiles() instead.
        "::get::AppUser::userProfiles": {
          url: urlBase + "/AppUsers/:id/userProfiles",
          method: "GET"
        },

        // INTERNAL. Use AppUser.userProfiles.create() instead.
        "::create::AppUser::userProfiles": {
          url: urlBase + "/AppUsers/:id/userProfiles",
          method: "POST"
        },

        // INTERNAL. Use AppUser.userProfiles.createMany() instead.
        "::createMany::AppUser::userProfiles": {
          isArray: true,
          url: urlBase + "/AppUsers/:id/userProfiles",
          method: "POST"
        },

        // INTERNAL. Use AppUser.userProfiles.update() instead.
        "::update::AppUser::userProfiles": {
          url: urlBase + "/AppUsers/:id/userProfiles",
          method: "PUT"
        },

        // INTERNAL. Use AppUser.userProfiles.destroy() instead.
        "::destroy::AppUser::userProfiles": {
          url: urlBase + "/AppUsers/:id/userProfiles",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.UserProfile#updateOrCreate
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#update
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#destroyById
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.UserProfile#removeById
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserProfile` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.UserProfile#modelName
    * @propertyOf lbServices.UserProfile
    * @description
    * The name of the model represented by this $resource,
    * i.e. `UserProfile`.
    */
    R.modelName = "UserProfile";


        /**
         * @ngdoc method
         * @name lbServices.UserProfile#appUser
         * @methodOf lbServices.UserProfile
         *
         * @description
         *
         * Fetches belongsTo relation appUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        R.appUser = function() {
          var TargetResource = $injector.get("AppUser");
          var action = TargetResource["::get::UserProfile::appUser"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Category",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Categories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Category.restaurantUser() instead.
        "prototype$__get__restaurantUser": {
          url: urlBase + "/Categories/:id/restaurantUser",
          method: "GET"
        },

        // INTERNAL. Use Category.restaurant() instead.
        "prototype$__get__restaurant": {
          url: urlBase + "/Categories/:id/restaurant",
          method: "GET"
        },

        // INTERNAL. Use Category.food.findById() instead.
        "prototype$__findById__food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/food/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.food.destroyById() instead.
        "prototype$__destroyById__food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/food/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.food.updateById() instead.
        "prototype$__updateById__food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/food/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.food() instead.
        "prototype$__get__food": {
          isArray: true,
          url: urlBase + "/Categories/:id/food",
          method: "GET"
        },

        // INTERNAL. Use Category.food.create() instead.
        "prototype$__create__food": {
          url: urlBase + "/Categories/:id/food",
          method: "POST"
        },

        // INTERNAL. Use Category.food.destroyAll() instead.
        "prototype$__delete__food": {
          url: urlBase + "/Categories/:id/food",
          method: "DELETE"
        },

        // INTERNAL. Use Category.food.count() instead.
        "prototype$__count__food": {
          url: urlBase + "/Categories/:id/food/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#create
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createMany
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#upsert
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Categories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#exists
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Categories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Categories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#find
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Categories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findOne
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Categories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#updateAll
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Categories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#deleteById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Categories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#count
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Categories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#prototype$updateAttributes
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Categories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createChangeStream
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Categories/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Restaurant.categories.findById() instead.
        "::findById::Restaurant::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Restaurant.categories.destroyById() instead.
        "::destroyById::Restaurant::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Restaurant.categories.updateById() instead.
        "::updateById::Restaurant::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Restaurant.categories() instead.
        "::get::Restaurant::categories": {
          isArray: true,
          url: urlBase + "/Restaurants/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Restaurant.categories.create() instead.
        "::create::Restaurant::categories": {
          url: urlBase + "/Restaurants/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Restaurant.categories.createMany() instead.
        "::createMany::Restaurant::categories": {
          isArray: true,
          url: urlBase + "/Restaurants/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Restaurant.categories.destroyAll() instead.
        "::delete::Restaurant::categories": {
          url: urlBase + "/Restaurants/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Restaurant.categories.count() instead.
        "::count::Restaurant::categories": {
          url: urlBase + "/Restaurants/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.categories.findById() instead.
        "::findById::RestaurantUser::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.categories.destroyById() instead.
        "::destroyById::RestaurantUser::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.categories.updateById() instead.
        "::updateById::RestaurantUser::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.categories() instead.
        "::get::RestaurantUser::categories": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.categories.create() instead.
        "::create::RestaurantUser::categories": {
          url: urlBase + "/RestaurantUsers/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.categories.createMany() instead.
        "::createMany::RestaurantUser::categories": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.categories.destroyAll() instead.
        "::delete::RestaurantUser::categories": {
          url: urlBase + "/RestaurantUsers/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.categories.count() instead.
        "::count::RestaurantUser::categories": {
          url: urlBase + "/RestaurantUsers/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use Food.category() instead.
        "::get::Food::category": {
          url: urlBase + "/Food/:id/category",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Category#updateOrCreate
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Category#update
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Category#destroyById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Category#removeById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Category#modelName
    * @propertyOf lbServices.Category
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Category`.
    */
    R.modelName = "Category";


        /**
         * @ngdoc method
         * @name lbServices.Category#restaurantUser
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Fetches belongsTo relation restaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        R.restaurantUser = function() {
          var TargetResource = $injector.get("RestaurantUser");
          var action = TargetResource["::get::Category::restaurantUser"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category#restaurant
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Fetches belongsTo relation restaurant.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        R.restaurant = function() {
          var TargetResource = $injector.get("Restaurant");
          var action = TargetResource["::get::Category::restaurant"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.food
     * @header lbServices.Category.food
     * @object
     * @description
     *
     * The object `Category.food` groups methods
     * manipulating `Food` instances related to `Category`.
     *
     * Call {@link lbServices.Category#food Category.food()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#food
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries food of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::get::Category::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.food#count
         * @methodOf lbServices.Category.food
         *
         * @description
         *
         * Counts food of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.food.count = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::count::Category::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.food#create
         * @methodOf lbServices.Category.food
         *
         * @description
         *
         * Creates a new instance in food of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.create = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::create::Category::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.food#createMany
         * @methodOf lbServices.Category.food
         *
         * @description
         *
         * Creates a new instance in food of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.createMany = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::createMany::Category::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.food#destroyAll
         * @methodOf lbServices.Category.food
         *
         * @description
         *
         * Deletes all food of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.food.destroyAll = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::delete::Category::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.food#destroyById
         * @methodOf lbServices.Category.food
         *
         * @description
         *
         * Delete a related item by id for food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for food
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.food.destroyById = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::destroyById::Category::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.food#findById
         * @methodOf lbServices.Category.food
         *
         * @description
         *
         * Find a related item by id for food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for food
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.findById = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::findById::Category::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.food#updateById
         * @methodOf lbServices.Category.food
         *
         * @description
         *
         * Update a related item by id for food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for food
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food.updateById = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::updateById::Category::food"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Food
 * @header lbServices.Food
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Food` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Food",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Food/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Food.restaurantUser() instead.
        "prototype$__get__restaurantUser": {
          url: urlBase + "/Food/:id/restaurantUser",
          method: "GET"
        },

        // INTERNAL. Use Food.category() instead.
        "prototype$__get__category": {
          url: urlBase + "/Food/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Food.restaurant() instead.
        "prototype$__get__restaurant": {
          url: urlBase + "/Food/:id/restaurant",
          method: "GET"
        },

        // INTERNAL. Use Food.variations.findById() instead.
        "prototype$__findById__variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Food/:id/variations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Food.variations.destroyById() instead.
        "prototype$__destroyById__variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Food/:id/variations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Food.variations.updateById() instead.
        "prototype$__updateById__variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Food/:id/variations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Food.variations() instead.
        "prototype$__get__variations": {
          isArray: true,
          url: urlBase + "/Food/:id/variations",
          method: "GET"
        },

        // INTERNAL. Use Food.variations.create() instead.
        "prototype$__create__variations": {
          url: urlBase + "/Food/:id/variations",
          method: "POST"
        },

        // INTERNAL. Use Food.variations.destroyAll() instead.
        "prototype$__delete__variations": {
          url: urlBase + "/Food/:id/variations",
          method: "DELETE"
        },

        // INTERNAL. Use Food.variations.count() instead.
        "prototype$__count__variations": {
          url: urlBase + "/Food/:id/variations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#create
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Food",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#createMany
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Food",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#upsert
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Food",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#exists
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Food/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#findById
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Food/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#find
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Food",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#findOne
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Food/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#updateAll
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Food/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#deleteById
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Food/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#count
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Food/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#prototype$updateAttributes
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Food/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Food#createChangeStream
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Food/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Restaurant.food.findById() instead.
        "::findById::Restaurant::food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/food/:fk",
          method: "GET"
        },

        // INTERNAL. Use Restaurant.food.destroyById() instead.
        "::destroyById::Restaurant::food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/food/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Restaurant.food.updateById() instead.
        "::updateById::Restaurant::food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Restaurants/:id/food/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Restaurant.food() instead.
        "::get::Restaurant::food": {
          isArray: true,
          url: urlBase + "/Restaurants/:id/food",
          method: "GET"
        },

        // INTERNAL. Use Restaurant.food.create() instead.
        "::create::Restaurant::food": {
          url: urlBase + "/Restaurants/:id/food",
          method: "POST"
        },

        // INTERNAL. Use Restaurant.food.createMany() instead.
        "::createMany::Restaurant::food": {
          isArray: true,
          url: urlBase + "/Restaurants/:id/food",
          method: "POST"
        },

        // INTERNAL. Use Restaurant.food.destroyAll() instead.
        "::delete::Restaurant::food": {
          url: urlBase + "/Restaurants/:id/food",
          method: "DELETE"
        },

        // INTERNAL. Use Restaurant.food.count() instead.
        "::count::Restaurant::food": {
          url: urlBase + "/Restaurants/:id/food/count",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.food.findById() instead.
        "::findById::RestaurantUser::food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/food/:fk",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.food.destroyById() instead.
        "::destroyById::RestaurantUser::food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/food/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.food.updateById() instead.
        "::updateById::RestaurantUser::food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/food/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.food() instead.
        "::get::RestaurantUser::food": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/food",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.food.create() instead.
        "::create::RestaurantUser::food": {
          url: urlBase + "/RestaurantUsers/:id/food",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.food.createMany() instead.
        "::createMany::RestaurantUser::food": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/food",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.food.destroyAll() instead.
        "::delete::RestaurantUser::food": {
          url: urlBase + "/RestaurantUsers/:id/food",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.food.count() instead.
        "::count::RestaurantUser::food": {
          url: urlBase + "/RestaurantUsers/:id/food/count",
          method: "GET"
        },

        // INTERNAL. Use Category.food.findById() instead.
        "::findById::Category::food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/food/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.food.destroyById() instead.
        "::destroyById::Category::food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/food/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.food.updateById() instead.
        "::updateById::Category::food": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/food/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.food() instead.
        "::get::Category::food": {
          isArray: true,
          url: urlBase + "/Categories/:id/food",
          method: "GET"
        },

        // INTERNAL. Use Category.food.create() instead.
        "::create::Category::food": {
          url: urlBase + "/Categories/:id/food",
          method: "POST"
        },

        // INTERNAL. Use Category.food.createMany() instead.
        "::createMany::Category::food": {
          isArray: true,
          url: urlBase + "/Categories/:id/food",
          method: "POST"
        },

        // INTERNAL. Use Category.food.destroyAll() instead.
        "::delete::Category::food": {
          url: urlBase + "/Categories/:id/food",
          method: "DELETE"
        },

        // INTERNAL. Use Category.food.count() instead.
        "::count::Category::food": {
          url: urlBase + "/Categories/:id/food/count",
          method: "GET"
        },

        // INTERNAL. Use Variations.food() instead.
        "::get::Variations::food": {
          url: urlBase + "/Variations/:id/food",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Food#updateOrCreate
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Food#update
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Food#destroyById
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Food#removeById
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Food#modelName
    * @propertyOf lbServices.Food
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Food`.
    */
    R.modelName = "Food";


        /**
         * @ngdoc method
         * @name lbServices.Food#restaurantUser
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Fetches belongsTo relation restaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        R.restaurantUser = function() {
          var TargetResource = $injector.get("RestaurantUser");
          var action = TargetResource["::get::Food::restaurantUser"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Food#category
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Fetches belongsTo relation category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Food::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Food#restaurant
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Fetches belongsTo relation restaurant.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        R.restaurant = function() {
          var TargetResource = $injector.get("Restaurant");
          var action = TargetResource["::get::Food::restaurant"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Food.variations
     * @header lbServices.Food.variations
     * @object
     * @description
     *
     * The object `Food.variations` groups methods
     * manipulating `Variations` instances related to `Food`.
     *
     * Call {@link lbServices.Food#variations Food.variations()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Food#variations
         * @methodOf lbServices.Food
         *
         * @description
         *
         * Queries variations of Food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R.variations = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::get::Food::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Food.variations#count
         * @methodOf lbServices.Food.variations
         *
         * @description
         *
         * Counts variations of Food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.variations.count = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::count::Food::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Food.variations#create
         * @methodOf lbServices.Food.variations
         *
         * @description
         *
         * Creates a new instance in variations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R.variations.create = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::create::Food::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Food.variations#createMany
         * @methodOf lbServices.Food.variations
         *
         * @description
         *
         * Creates a new instance in variations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R.variations.createMany = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::createMany::Food::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Food.variations#destroyAll
         * @methodOf lbServices.Food.variations
         *
         * @description
         *
         * Deletes all variations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.variations.destroyAll = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::delete::Food::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Food.variations#destroyById
         * @methodOf lbServices.Food.variations
         *
         * @description
         *
         * Delete a related item by id for variations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for variations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.variations.destroyById = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::destroyById::Food::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Food.variations#findById
         * @methodOf lbServices.Food.variations
         *
         * @description
         *
         * Find a related item by id for variations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for variations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R.variations.findById = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::findById::Food::variations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Food.variations#updateById
         * @methodOf lbServices.Food.variations
         *
         * @description
         *
         * Update a related item by id for variations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for variations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R.variations.updateById = function() {
          var TargetResource = $injector.get("Variations");
          var action = TargetResource["::updateById::Food::variations"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Zones
 * @header lbServices.Zones
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Zones` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Zones",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Zones/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Zones#create
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Zones",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#createMany
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Zones",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#upsert
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Zones",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#exists
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Zones/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#findById
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Zones/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#find
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Zones",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#findOne
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Zones/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#updateAll
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Zones/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#deleteById
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Zones/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#count
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Zones/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#prototype$updateAttributes
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Zones/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Zones#createChangeStream
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Zones/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Zones#updateOrCreate
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Zones#update
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Zones#destroyById
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Zones#removeById
         * @methodOf lbServices.Zones
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Zones` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Zones#modelName
    * @propertyOf lbServices.Zones
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Zones`.
    */
    R.modelName = "Zones";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RestaurantTypes
 * @header lbServices.RestaurantTypes
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RestaurantTypes` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RestaurantTypes",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/restaurantTypes/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#create
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/restaurantTypes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#createMany
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/restaurantTypes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#upsert
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/restaurantTypes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#exists
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/restaurantTypes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#findById
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/restaurantTypes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#find
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/restaurantTypes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#findOne
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/restaurantTypes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#updateAll
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/restaurantTypes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#deleteById
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/restaurantTypes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#count
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/restaurantTypes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#prototype$updateAttributes
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/restaurantTypes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#createChangeStream
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/restaurantTypes/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#updateOrCreate
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#update
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#destroyById
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RestaurantTypes#removeById
         * @methodOf lbServices.RestaurantTypes
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantTypes` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.RestaurantTypes#modelName
    * @propertyOf lbServices.RestaurantTypes
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RestaurantTypes`.
    */
    R.modelName = "RestaurantTypes";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Container",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Containers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainers
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/Containers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#createContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/Containers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#destroyContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/Containers/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/Containers/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFiles
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/Containers/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/Containers/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#removeFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/Containers/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#upload
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/Containers/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#download
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/Containers/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Container#modelName
    * @propertyOf lbServices.Container
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Container`.
    */
    R.modelName = "Container";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.UserAddresses
 * @header lbServices.UserAddresses
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserAddresses` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "UserAddresses",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/UserAddresses/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use UserAddresses.appUser() instead.
        "prototype$__get__appUser": {
          url: urlBase + "/UserAddresses/:id/appUser",
          method: "GET"
        },

        // INTERNAL. Use UserAddresses.estates() instead.
        "prototype$__get__estates": {
          url: urlBase + "/UserAddresses/:id/estates",
          method: "GET"
        },

        // INTERNAL. Use UserAddresses.cities() instead.
        "prototype$__get__cities": {
          url: urlBase + "/UserAddresses/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use UserAddresses.colonies() instead.
        "prototype$__get__colonies": {
          url: urlBase + "/UserAddresses/:id/colonies",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#create
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/UserAddresses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#createMany
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/UserAddresses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#upsert
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/UserAddresses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#exists
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/UserAddresses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#findById
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/UserAddresses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#find
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/UserAddresses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#findOne
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/UserAddresses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#updateAll
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/UserAddresses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#deleteById
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/UserAddresses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#count
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/UserAddresses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#prototype$updateAttributes
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/UserAddresses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#createChangeStream
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/UserAddresses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use AppUser.userAddresses.findById() instead.
        "::findById::AppUser::userAddresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/userAddresses/:fk",
          method: "GET"
        },

        // INTERNAL. Use AppUser.userAddresses.destroyById() instead.
        "::destroyById::AppUser::userAddresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/userAddresses/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use AppUser.userAddresses.updateById() instead.
        "::updateById::AppUser::userAddresses": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/userAddresses/:fk",
          method: "PUT"
        },

        // INTERNAL. Use AppUser.userAddresses() instead.
        "::get::AppUser::userAddresses": {
          isArray: true,
          url: urlBase + "/AppUsers/:id/userAddresses",
          method: "GET"
        },

        // INTERNAL. Use AppUser.userAddresses.create() instead.
        "::create::AppUser::userAddresses": {
          url: urlBase + "/AppUsers/:id/userAddresses",
          method: "POST"
        },

        // INTERNAL. Use AppUser.userAddresses.createMany() instead.
        "::createMany::AppUser::userAddresses": {
          isArray: true,
          url: urlBase + "/AppUsers/:id/userAddresses",
          method: "POST"
        },

        // INTERNAL. Use AppUser.userAddresses.destroyAll() instead.
        "::delete::AppUser::userAddresses": {
          url: urlBase + "/AppUsers/:id/userAddresses",
          method: "DELETE"
        },

        // INTERNAL. Use AppUser.userAddresses.count() instead.
        "::count::AppUser::userAddresses": {
          url: urlBase + "/AppUsers/:id/userAddresses/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#updateOrCreate
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#update
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#destroyById
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#removeById
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserAddresses` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.UserAddresses#modelName
    * @propertyOf lbServices.UserAddresses
    * @description
    * The name of the model represented by this $resource,
    * i.e. `UserAddresses`.
    */
    R.modelName = "UserAddresses";


        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#appUser
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Fetches belongsTo relation appUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        R.appUser = function() {
          var TargetResource = $injector.get("AppUser");
          var action = TargetResource["::get::UserAddresses::appUser"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#estates
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Fetches belongsTo relation estates.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        R.estates = function() {
          var TargetResource = $injector.get("Estates");
          var action = TargetResource["::get::UserAddresses::estates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#cities
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Fetches belongsTo relation cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        R.cities = function() {
          var TargetResource = $injector.get("Cities");
          var action = TargetResource["::get::UserAddresses::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserAddresses#colonies
         * @methodOf lbServices.UserAddresses
         *
         * @description
         *
         * Fetches belongsTo relation colonies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        R.colonies = function() {
          var TargetResource = $injector.get("Colonies");
          var action = TargetResource["::get::UserAddresses::colonies"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Orders
 * @header lbServices.Orders
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Orders` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Orders",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Orders/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Orders.appUser() instead.
        "prototype$__get__appUser": {
          url: urlBase + "/Orders/:id/appUser",
          method: "GET"
        },

        // INTERNAL. Use Orders.restaurantUser() instead.
        "prototype$__get__restaurantUser": {
          url: urlBase + "/Orders/:id/restaurantUser",
          method: "GET"
        },

        // INTERNAL. Use Orders.restaurant() instead.
        "prototype$__get__restaurant": {
          url: urlBase + "/Orders/:id/restaurant",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#create
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Orders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#createMany
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Orders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#upsert
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Orders",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#exists
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Orders/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#findById
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Orders/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#find
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Orders",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#findOne
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Orders/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#updateAll
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Orders/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#deleteById
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Orders/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#count
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Orders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#prototype$updateAttributes
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Orders/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#createChangeStream
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Orders/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Orders#process
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `ctx` – `{object=}` - 
         *
         *  - `data` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `data` – `{object=}` - 
         */
        "process": {
          url: urlBase + "/Orders/process",
          method: "POST"
        },

        // INTERNAL. Use AppUser.orders.findById() instead.
        "::findById::AppUser::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use AppUser.orders.destroyById() instead.
        "::destroyById::AppUser::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use AppUser.orders.updateById() instead.
        "::updateById::AppUser::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/AppUsers/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use AppUser.orders() instead.
        "::get::AppUser::orders": {
          isArray: true,
          url: urlBase + "/AppUsers/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use AppUser.orders.create() instead.
        "::create::AppUser::orders": {
          url: urlBase + "/AppUsers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use AppUser.orders.createMany() instead.
        "::createMany::AppUser::orders": {
          isArray: true,
          url: urlBase + "/AppUsers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use AppUser.orders.destroyAll() instead.
        "::delete::AppUser::orders": {
          url: urlBase + "/AppUsers/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use AppUser.orders.count() instead.
        "::count::AppUser::orders": {
          url: urlBase + "/AppUsers/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.orders.findById() instead.
        "::findById::RestaurantUser::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.orders.destroyById() instead.
        "::destroyById::RestaurantUser::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.orders.updateById() instead.
        "::updateById::RestaurantUser::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.orders() instead.
        "::get::RestaurantUser::orders": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.orders.create() instead.
        "::create::RestaurantUser::orders": {
          url: urlBase + "/RestaurantUsers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.orders.createMany() instead.
        "::createMany::RestaurantUser::orders": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.orders.destroyAll() instead.
        "::delete::RestaurantUser::orders": {
          url: urlBase + "/RestaurantUsers/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.orders.count() instead.
        "::count::RestaurantUser::orders": {
          url: urlBase + "/RestaurantUsers/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use RestaurantPayments.orders() instead.
        "::get::RestaurantPayments::orders": {
          url: urlBase + "/RestaurantPayments/:id/orders",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Orders#updateOrCreate
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Orders#update
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Orders#destroyById
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Orders#removeById
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Orders#modelName
    * @propertyOf lbServices.Orders
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Orders`.
    */
    R.modelName = "Orders";


        /**
         * @ngdoc method
         * @name lbServices.Orders#appUser
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Fetches belongsTo relation appUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AppUser` object.)
         * </em>
         */
        R.appUser = function() {
          var TargetResource = $injector.get("AppUser");
          var action = TargetResource["::get::Orders::appUser"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Orders#restaurantUser
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Fetches belongsTo relation restaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        R.restaurantUser = function() {
          var TargetResource = $injector.get("RestaurantUser");
          var action = TargetResource["::get::Orders::restaurantUser"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Orders#restaurant
         * @methodOf lbServices.Orders
         *
         * @description
         *
         * Fetches belongsTo relation restaurant.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Restaurant` object.)
         * </em>
         */
        R.restaurant = function() {
          var TargetResource = $injector.get("Restaurant");
          var action = TargetResource["::get::Orders::restaurant"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Estates
 * @header lbServices.Estates
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Estates` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Estates",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Estates/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Estates.cities.findById() instead.
        "prototype$__findById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Estates/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Estates.cities.destroyById() instead.
        "prototype$__destroyById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Estates/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Estates.cities.updateById() instead.
        "prototype$__updateById__cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Estates/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Estates.cities() instead.
        "prototype$__get__cities": {
          isArray: true,
          url: urlBase + "/Estates/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Estates.cities.create() instead.
        "prototype$__create__cities": {
          url: urlBase + "/Estates/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Estates.cities.destroyAll() instead.
        "prototype$__delete__cities": {
          url: urlBase + "/Estates/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use Estates.cities.count() instead.
        "prototype$__count__cities": {
          url: urlBase + "/Estates/:id/cities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#create
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Estates",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#createMany
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Estates",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#upsert
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Estates",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#exists
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Estates/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#findById
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Estates/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#find
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Estates",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#findOne
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Estates/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#updateAll
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Estates/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#deleteById
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Estates/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#count
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Estates/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#prototype$updateAttributes
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Estates/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Estates#createChangeStream
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Estates/change-stream",
          method: "POST"
        },

        // INTERNAL. Use UserAddresses.estates() instead.
        "::get::UserAddresses::estates": {
          url: urlBase + "/UserAddresses/:id/estates",
          method: "GET"
        },

        // INTERNAL. Use Cities.estates() instead.
        "::get::Cities::estates": {
          url: urlBase + "/Cities/:id/estates",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Estates#updateOrCreate
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Estates#update
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Estates#destroyById
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Estates#removeById
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Estates#modelName
    * @propertyOf lbServices.Estates
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Estates`.
    */
    R.modelName = "Estates";

    /**
     * @ngdoc object
     * @name lbServices.Estates.cities
     * @header lbServices.Estates.cities
     * @object
     * @description
     *
     * The object `Estates.cities` groups methods
     * manipulating `Cities` instances related to `Estates`.
     *
     * Call {@link lbServices.Estates#cities Estates.cities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Estates#cities
         * @methodOf lbServices.Estates
         *
         * @description
         *
         * Queries cities of Estates.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        R.cities = function() {
          var TargetResource = $injector.get("Cities");
          var action = TargetResource["::get::Estates::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Estates.cities#count
         * @methodOf lbServices.Estates.cities
         *
         * @description
         *
         * Counts cities of Estates.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.cities.count = function() {
          var TargetResource = $injector.get("Cities");
          var action = TargetResource["::count::Estates::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Estates.cities#create
         * @methodOf lbServices.Estates.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        R.cities.create = function() {
          var TargetResource = $injector.get("Cities");
          var action = TargetResource["::create::Estates::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Estates.cities#createMany
         * @methodOf lbServices.Estates.cities
         *
         * @description
         *
         * Creates a new instance in cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        R.cities.createMany = function() {
          var TargetResource = $injector.get("Cities");
          var action = TargetResource["::createMany::Estates::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Estates.cities#destroyAll
         * @methodOf lbServices.Estates.cities
         *
         * @description
         *
         * Deletes all cities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.destroyAll = function() {
          var TargetResource = $injector.get("Cities");
          var action = TargetResource["::delete::Estates::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Estates.cities#destroyById
         * @methodOf lbServices.Estates.cities
         *
         * @description
         *
         * Delete a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cities.destroyById = function() {
          var TargetResource = $injector.get("Cities");
          var action = TargetResource["::destroyById::Estates::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Estates.cities#findById
         * @methodOf lbServices.Estates.cities
         *
         * @description
         *
         * Find a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        R.cities.findById = function() {
          var TargetResource = $injector.get("Cities");
          var action = TargetResource["::findById::Estates::cities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Estates.cities#updateById
         * @methodOf lbServices.Estates.cities
         *
         * @description
         *
         * Update a related item by id for cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        R.cities.updateById = function() {
          var TargetResource = $injector.get("Cities");
          var action = TargetResource["::updateById::Estates::cities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Cities
 * @header lbServices.Cities
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Cities` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Cities",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Cities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Cities.estates() instead.
        "prototype$__get__estates": {
          url: urlBase + "/Cities/:id/estates",
          method: "GET"
        },

        // INTERNAL. Use Cities.colonies.findById() instead.
        "prototype$__findById__colonies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cities/:id/colonies/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cities.colonies.destroyById() instead.
        "prototype$__destroyById__colonies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cities/:id/colonies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cities.colonies.updateById() instead.
        "prototype$__updateById__colonies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cities/:id/colonies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cities.colonies() instead.
        "prototype$__get__colonies": {
          isArray: true,
          url: urlBase + "/Cities/:id/colonies",
          method: "GET"
        },

        // INTERNAL. Use Cities.colonies.create() instead.
        "prototype$__create__colonies": {
          url: urlBase + "/Cities/:id/colonies",
          method: "POST"
        },

        // INTERNAL. Use Cities.colonies.destroyAll() instead.
        "prototype$__delete__colonies": {
          url: urlBase + "/Cities/:id/colonies",
          method: "DELETE"
        },

        // INTERNAL. Use Cities.colonies.count() instead.
        "prototype$__count__colonies": {
          url: urlBase + "/Cities/:id/colonies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#create
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Cities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#createMany
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Cities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#upsert
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Cities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#exists
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Cities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#findById
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Cities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#find
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Cities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#findOne
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Cities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#updateAll
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Cities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#deleteById
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Cities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#count
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Cities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#prototype$updateAttributes
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Cities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cities#createChangeStream
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Cities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use UserAddresses.cities() instead.
        "::get::UserAddresses::cities": {
          url: urlBase + "/UserAddresses/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Estates.cities.findById() instead.
        "::findById::Estates::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Estates/:id/cities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Estates.cities.destroyById() instead.
        "::destroyById::Estates::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Estates/:id/cities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Estates.cities.updateById() instead.
        "::updateById::Estates::cities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Estates/:id/cities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Estates.cities() instead.
        "::get::Estates::cities": {
          isArray: true,
          url: urlBase + "/Estates/:id/cities",
          method: "GET"
        },

        // INTERNAL. Use Estates.cities.create() instead.
        "::create::Estates::cities": {
          url: urlBase + "/Estates/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Estates.cities.createMany() instead.
        "::createMany::Estates::cities": {
          isArray: true,
          url: urlBase + "/Estates/:id/cities",
          method: "POST"
        },

        // INTERNAL. Use Estates.cities.destroyAll() instead.
        "::delete::Estates::cities": {
          url: urlBase + "/Estates/:id/cities",
          method: "DELETE"
        },

        // INTERNAL. Use Estates.cities.count() instead.
        "::count::Estates::cities": {
          url: urlBase + "/Estates/:id/cities/count",
          method: "GET"
        },

        // INTERNAL. Use Colonies.cities() instead.
        "::get::Colonies::cities": {
          url: urlBase + "/Colonies/:id/cities",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Cities#updateOrCreate
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Cities#update
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Cities#destroyById
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Cities#removeById
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Cities#modelName
    * @propertyOf lbServices.Cities
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Cities`.
    */
    R.modelName = "Cities";


        /**
         * @ngdoc method
         * @name lbServices.Cities#estates
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Fetches belongsTo relation estates.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Estates` object.)
         * </em>
         */
        R.estates = function() {
          var TargetResource = $injector.get("Estates");
          var action = TargetResource["::get::Cities::estates"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Cities.colonies
     * @header lbServices.Cities.colonies
     * @object
     * @description
     *
     * The object `Cities.colonies` groups methods
     * manipulating `Colonies` instances related to `Cities`.
     *
     * Call {@link lbServices.Cities#colonies Cities.colonies()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Cities#colonies
         * @methodOf lbServices.Cities
         *
         * @description
         *
         * Queries colonies of Cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        R.colonies = function() {
          var TargetResource = $injector.get("Colonies");
          var action = TargetResource["::get::Cities::colonies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cities.colonies#count
         * @methodOf lbServices.Cities.colonies
         *
         * @description
         *
         * Counts colonies of Cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.colonies.count = function() {
          var TargetResource = $injector.get("Colonies");
          var action = TargetResource["::count::Cities::colonies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cities.colonies#create
         * @methodOf lbServices.Cities.colonies
         *
         * @description
         *
         * Creates a new instance in colonies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        R.colonies.create = function() {
          var TargetResource = $injector.get("Colonies");
          var action = TargetResource["::create::Cities::colonies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cities.colonies#createMany
         * @methodOf lbServices.Cities.colonies
         *
         * @description
         *
         * Creates a new instance in colonies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        R.colonies.createMany = function() {
          var TargetResource = $injector.get("Colonies");
          var action = TargetResource["::createMany::Cities::colonies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cities.colonies#destroyAll
         * @methodOf lbServices.Cities.colonies
         *
         * @description
         *
         * Deletes all colonies of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.colonies.destroyAll = function() {
          var TargetResource = $injector.get("Colonies");
          var action = TargetResource["::delete::Cities::colonies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cities.colonies#destroyById
         * @methodOf lbServices.Cities.colonies
         *
         * @description
         *
         * Delete a related item by id for colonies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for colonies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.colonies.destroyById = function() {
          var TargetResource = $injector.get("Colonies");
          var action = TargetResource["::destroyById::Cities::colonies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cities.colonies#findById
         * @methodOf lbServices.Cities.colonies
         *
         * @description
         *
         * Find a related item by id for colonies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for colonies
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        R.colonies.findById = function() {
          var TargetResource = $injector.get("Colonies");
          var action = TargetResource["::findById::Cities::colonies"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cities.colonies#updateById
         * @methodOf lbServices.Cities.colonies
         *
         * @description
         *
         * Update a related item by id for colonies.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for colonies
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        R.colonies.updateById = function() {
          var TargetResource = $injector.get("Colonies");
          var action = TargetResource["::updateById::Cities::colonies"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Colonies
 * @header lbServices.Colonies
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Colonies` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Colonies",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Colonies/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Colonies.cities() instead.
        "prototype$__get__cities": {
          url: urlBase + "/Colonies/:id/cities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#create
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Colonies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#createMany
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Colonies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#upsert
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Colonies",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#exists
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Colonies/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#findById
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Colonies/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#find
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Colonies",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#findOne
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Colonies/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#updateAll
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Colonies/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#deleteById
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Colonies/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#count
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Colonies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#prototype$updateAttributes
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Colonies/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Colonies#createChangeStream
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Colonies/change-stream",
          method: "POST"
        },

        // INTERNAL. Use UserAddresses.colonies() instead.
        "::get::UserAddresses::colonies": {
          url: urlBase + "/UserAddresses/:id/colonies",
          method: "GET"
        },

        // INTERNAL. Use Cities.colonies.findById() instead.
        "::findById::Cities::colonies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cities/:id/colonies/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cities.colonies.destroyById() instead.
        "::destroyById::Cities::colonies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cities/:id/colonies/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cities.colonies.updateById() instead.
        "::updateById::Cities::colonies": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cities/:id/colonies/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cities.colonies() instead.
        "::get::Cities::colonies": {
          isArray: true,
          url: urlBase + "/Cities/:id/colonies",
          method: "GET"
        },

        // INTERNAL. Use Cities.colonies.create() instead.
        "::create::Cities::colonies": {
          url: urlBase + "/Cities/:id/colonies",
          method: "POST"
        },

        // INTERNAL. Use Cities.colonies.createMany() instead.
        "::createMany::Cities::colonies": {
          isArray: true,
          url: urlBase + "/Cities/:id/colonies",
          method: "POST"
        },

        // INTERNAL. Use Cities.colonies.destroyAll() instead.
        "::delete::Cities::colonies": {
          url: urlBase + "/Cities/:id/colonies",
          method: "DELETE"
        },

        // INTERNAL. Use Cities.colonies.count() instead.
        "::count::Cities::colonies": {
          url: urlBase + "/Cities/:id/colonies/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Colonies#updateOrCreate
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Colonies#update
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Colonies#destroyById
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Colonies#removeById
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colonies` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Colonies#modelName
    * @propertyOf lbServices.Colonies
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Colonies`.
    */
    R.modelName = "Colonies";


        /**
         * @ngdoc method
         * @name lbServices.Colonies#cities
         * @methodOf lbServices.Colonies
         *
         * @description
         *
         * Fetches belongsTo relation cities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cities` object.)
         * </em>
         */
        R.cities = function() {
          var TargetResource = $injector.get("Cities");
          var action = TargetResource["::get::Colonies::cities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Backgrounds
 * @header lbServices.Backgrounds
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Backgrounds` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Backgrounds",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/backgrounds/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Backgrounds#getContainers
         * @methodOf lbServices.Backgrounds
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Backgrounds` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/backgrounds",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Backgrounds#createContainer
         * @methodOf lbServices.Backgrounds
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Backgrounds` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/backgrounds",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Backgrounds#destroyContainer
         * @methodOf lbServices.Backgrounds
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/backgrounds/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Backgrounds#getContainer
         * @methodOf lbServices.Backgrounds
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Backgrounds` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/backgrounds/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Backgrounds#getFiles
         * @methodOf lbServices.Backgrounds
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Backgrounds` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/backgrounds/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Backgrounds#getFile
         * @methodOf lbServices.Backgrounds
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Backgrounds` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/backgrounds/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Backgrounds#removeFile
         * @methodOf lbServices.Backgrounds
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/backgrounds/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Backgrounds#upload
         * @methodOf lbServices.Backgrounds
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/backgrounds/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Backgrounds#download
         * @methodOf lbServices.Backgrounds
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/backgrounds/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Backgrounds#modelName
    * @propertyOf lbServices.Backgrounds
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Backgrounds`.
    */
    R.modelName = "Backgrounds";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RestaurantPayments
 * @header lbServices.RestaurantPayments
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RestaurantPayments` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RestaurantPayments",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RestaurantPayments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use RestaurantPayments.restaurantUser() instead.
        "prototype$__get__restaurantUser": {
          url: urlBase + "/RestaurantPayments/:id/restaurantUser",
          method: "GET"
        },

        // INTERNAL. Use RestaurantPayments.orders() instead.
        "prototype$__get__orders": {
          url: urlBase + "/RestaurantPayments/:id/orders",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#create
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/RestaurantPayments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#createMany
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/RestaurantPayments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#upsert
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/RestaurantPayments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#exists
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/RestaurantPayments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#findById
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RestaurantPayments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#find
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RestaurantPayments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#findOne
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RestaurantPayments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#updateAll
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/RestaurantPayments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#deleteById
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/RestaurantPayments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#count
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/RestaurantPayments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#prototype$updateAttributes
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/RestaurantPayments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#createChangeStream
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/RestaurantPayments/change-stream",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.findById() instead.
        "::findById::RestaurantUser::restaurantPayments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments/:fk",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.destroyById() instead.
        "::destroyById::RestaurantUser::restaurantPayments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.updateById() instead.
        "::updateById::RestaurantUser::restaurantPayments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments() instead.
        "::get::RestaurantUser::restaurantPayments": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.create() instead.
        "::create::RestaurantUser::restaurantPayments": {
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.createMany() instead.
        "::createMany::RestaurantUser::restaurantPayments": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.destroyAll() instead.
        "::delete::RestaurantUser::restaurantPayments": {
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.restaurantPayments.count() instead.
        "::count::RestaurantUser::restaurantPayments": {
          url: urlBase + "/RestaurantUsers/:id/restaurantPayments/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#updateOrCreate
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#update
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#destroyById
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#removeById
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantPayments` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.RestaurantPayments#modelName
    * @propertyOf lbServices.RestaurantPayments
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RestaurantPayments`.
    */
    R.modelName = "RestaurantPayments";


        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#restaurantUser
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Fetches belongsTo relation restaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        R.restaurantUser = function() {
          var TargetResource = $injector.get("RestaurantUser");
          var action = TargetResource["::get::RestaurantPayments::restaurantUser"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RestaurantPayments#orders
         * @methodOf lbServices.RestaurantPayments
         *
         * @description
         *
         * Fetches belongsTo relation orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Orders` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Orders");
          var action = TargetResource["::get::RestaurantPayments::orders"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Variations
 * @header lbServices.Variations
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Variations` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Variations",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Variations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Variations.food() instead.
        "prototype$__get__food": {
          url: urlBase + "/Variations/:id/food",
          method: "GET"
        },

        // INTERNAL. Use Variations.restaurantUser() instead.
        "prototype$__get__restaurantUser": {
          url: urlBase + "/Variations/:id/restaurantUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#create
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Variations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#createMany
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Variations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#upsert
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Variations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#exists
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Variations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#findById
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Variations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#find
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Variations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#findOne
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Variations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#updateAll
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Variations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#deleteById
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Variations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#count
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Variations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#prototype$updateAttributes
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Variations/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Variations#createChangeStream
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Variations/change-stream",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.variations.findById() instead.
        "::findById::RestaurantUser::variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/variations/:fk",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.variations.destroyById() instead.
        "::destroyById::RestaurantUser::variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/variations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.variations.updateById() instead.
        "::updateById::RestaurantUser::variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RestaurantUsers/:id/variations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RestaurantUser.variations() instead.
        "::get::RestaurantUser::variations": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/variations",
          method: "GET"
        },

        // INTERNAL. Use RestaurantUser.variations.create() instead.
        "::create::RestaurantUser::variations": {
          url: urlBase + "/RestaurantUsers/:id/variations",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.variations.createMany() instead.
        "::createMany::RestaurantUser::variations": {
          isArray: true,
          url: urlBase + "/RestaurantUsers/:id/variations",
          method: "POST"
        },

        // INTERNAL. Use RestaurantUser.variations.destroyAll() instead.
        "::delete::RestaurantUser::variations": {
          url: urlBase + "/RestaurantUsers/:id/variations",
          method: "DELETE"
        },

        // INTERNAL. Use RestaurantUser.variations.count() instead.
        "::count::RestaurantUser::variations": {
          url: urlBase + "/RestaurantUsers/:id/variations/count",
          method: "GET"
        },

        // INTERNAL. Use Food.variations.findById() instead.
        "::findById::Food::variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Food/:id/variations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Food.variations.destroyById() instead.
        "::destroyById::Food::variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Food/:id/variations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Food.variations.updateById() instead.
        "::updateById::Food::variations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Food/:id/variations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Food.variations() instead.
        "::get::Food::variations": {
          isArray: true,
          url: urlBase + "/Food/:id/variations",
          method: "GET"
        },

        // INTERNAL. Use Food.variations.create() instead.
        "::create::Food::variations": {
          url: urlBase + "/Food/:id/variations",
          method: "POST"
        },

        // INTERNAL. Use Food.variations.createMany() instead.
        "::createMany::Food::variations": {
          isArray: true,
          url: urlBase + "/Food/:id/variations",
          method: "POST"
        },

        // INTERNAL. Use Food.variations.destroyAll() instead.
        "::delete::Food::variations": {
          url: urlBase + "/Food/:id/variations",
          method: "DELETE"
        },

        // INTERNAL. Use Food.variations.count() instead.
        "::count::Food::variations": {
          url: urlBase + "/Food/:id/variations/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Variations#updateOrCreate
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Variations#update
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Variations#destroyById
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Variations#removeById
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Variations` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Variations#modelName
    * @propertyOf lbServices.Variations
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Variations`.
    */
    R.modelName = "Variations";


        /**
         * @ngdoc method
         * @name lbServices.Variations#food
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Fetches belongsTo relation food.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Food` object.)
         * </em>
         */
        R.food = function() {
          var TargetResource = $injector.get("Food");
          var action = TargetResource["::get::Variations::food"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Variations#restaurantUser
         * @methodOf lbServices.Variations
         *
         * @description
         *
         * Fetches belongsTo relation restaurantUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RestaurantUser` object.)
         * </em>
         */
        R.restaurantUser = function() {
          var TargetResource = $injector.get("RestaurantUser");
          var action = TargetResource["::get::Variations::restaurantUser"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
