/**
 * Created by Jon on 08/03/16.
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    uncss: {
      dist: {
        src: ['elmPage1.html'],
        dest: 'css/tidy.css',
        options: {
          report: 'min' // optional: include to report savings
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/elmPage1.html': ['elmPage1.html']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);

  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('default', ['uncss']);

};
