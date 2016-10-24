angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.favoritos', {
    url: '/favoritos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favoritos.html',
        controller: 'favoritosCtrl'
      }
    }
  })

  .state('menu.minhasCategorias', {
    url: '/minhas_categorias',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minhasCategorias.html',
        controller: 'minhasCategoriasCtrl'
      }
    }
  })

  .state('meusFavoritos', {
    url: '/favoritos',
    templateUrl: 'templates/meusFavoritos.html',
    controller: 'meusFavoritosCtrl'
  })

  .state('menu.historico', {
    url: '/historico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/historico.html',
        controller: 'historicoCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.pertoDeMim', {
    url: '/perto_de_mim',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pertoDeMim.html',
        controller: 'pertoDeMimCtrl'
      }
    }
  })

  .state('menu.anuncio', {
    url: '/anuncio/{{id}}',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anuncio.html',
        controller: 'anuncioCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});