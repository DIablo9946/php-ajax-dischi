let mix = require('laravel-mix');



mix
.js('src/js/action.js', 'public/js/')
.sass('src/scss/style.scss', 'public/css/')
.copyDirectory('src/php', 'public/')
;
