var elixir = require('laravel-elixir');

require('laravel-elixir-imagemin');
require('laravel-elixir-sass-compass');

elixir.config.images = {
    folder: 'images',
    outputFolder: 'img'
};

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.compass("app.scss", "public/css", {
  		style: "compressed",
  		sass: "resources/assets/sass",
  		font: "public/fonts",
  		image: "public/img",
  		javascript: "public/js",
  		sourcemap: true
 		});
    mix.scripts('../../../node_modules/jquery/dist/jquery.js', 'public/js/jquery.js')
       .scripts('../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js', 'public/js/bootstrap.js')
       .scripts('../../../node_modules/flexslider/jquery.flexslider.js', 'public/js/flexslider.js')
       .scripts('../../../node_modules/desandro-classie/classie.js', 'public/js/classie.js')
       .scripts('../../../node_modules/waypoints/lib/jquery.waypoints.js', 'public/js/waypoints.js')
       .scripts('../../../node_modules/retina.js/src/retina.js', 'public/js/retina.js')
       .scripts(['scripts.js']);
    mix.imagemin();

    mix.copy('node_modules/et-line/fonts/', 'public/fonts')
       .copy('node_modules/bootstrap-sass/assets/fonts/bootstrap/', 'public/fonts')
       .copy('node_modules/flexslider/fonts/', 'public/fonts')
       .copy('node_modules/font-awesome/fonts/', 'public/fonts')
       .copy('node_modules/animate.css/animate.min.css', 'public/css');
    
    mix.browserSync({
        proxy: 'ngd.app',
        xip: true
    });
});
