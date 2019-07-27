var fs = require('fs'),
    path = require('path'),
    glob = require('glob'),
    start = './src/assets/svg/',
    finish = './src/assets/js/img-',
    header = 'document.head.innerHTML += \'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><defs>',
    footer = '</defs></svg>\'\n';

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}

var dirs = getDirectories(start);
dirs.forEach(function(dir) {
  glob(start + dir + '/*.svg', function (er, files) {
    var output = header;
    files.forEach(function(file) {
      console.log(file);
      var svgfile = fs.readFileSync(file, "utf8");
      var size = svgfile.match(/viewBox="([^"]*)"/g);
      svgfile = svgfile.replace(/ fill=".*?"/g, '');
      svgfile = svgfile.replace(/<svg[^>]*>/g, '');
      svgfile = svgfile.replace(/<\/svg>/g, '');
      output += '<symbol id="' + path.basename(file, '.svg') + '" ' + size + '>' + svgfile + '</symbol>';
    });

    output = output.replace(/[\r\n]\s*/g, '');
    output += footer;
    fs.writeFileSync(finish + dir + '.js', output);
  });
});
