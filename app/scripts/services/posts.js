angular.module('angularProjectApp')
    .provider('Post', function() {
        this.$get = ['$resource', function($resource) {
            var Post = $resource('http://54.72.3.96:3000/posts/:_id', {}, {
                update: {
                    method: 'PUT'
                }
            });
            return Post;
        }];
    });
