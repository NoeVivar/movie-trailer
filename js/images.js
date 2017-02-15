// image-url arguments:
// $path: path relative to images directory in config.rb
// $path-only: if true, will cause only the path to be returned instead of a `url()` function
// $cache-buster: When set to `false` no cache buster will be used (i.e. `?313420982`)
$header-img: image-url('background/sass.gif', false, false)
background-image: $header-img