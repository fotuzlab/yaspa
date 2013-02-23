'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('yaspaAppDB', ['ngResource']).
    factory('Project', function($resource) {
      var Project = $resource('https://api.mongolab.com/api/1/databases/yaspa_db/collections',
          { apiKey: 'FhAo2Y8EZWaK6IKYlp3_gzdpDHTaiegP' }, {
            update: { method: 'PUT' }
          }
      );
 
      Project.prototype.update = function(cb) {
        return Project.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };
 
      Project.prototype.destroy = function(cb) {
        return Project.remove({id: this._id.$oid}, cb);
      };
 
      return Project;
    });
