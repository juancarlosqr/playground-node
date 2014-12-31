window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource('en', function() {
    this.resource('en.about', { 'path' : '/about' });
    this.resource('en.projects', { 'path' : '/projects' });
  });
  this.resource('es', function() {
    this.resource('es.about', { 'path' : '/about' });
    this.resource('es.projects', { 'path' : '/projects' });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('en');
  }
});

App.EnIndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.ApplicationController = Ember.Controller.extend({
    actions : {
      changelocale : function(locale){
        this.transitionToRoute(locale);
      }
    }
});

