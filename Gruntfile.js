/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig( {
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist/dist-grunt'],

        copy: {
            distgrunt: {
                files: [
                    {
                        expand: true,
                        cwd: 'www/',
                        src: ['**'],
                        dest: 'dist/dist-grunt/'
                    },
                    {
                        expand: true,
                        cwd: 'www/',
                        src: ['index.html'],
                        dest: 'dist/dist-grunt/',
                        filter: 'isFile'
                    }
                ]
            }
        },

        jst: {
            compile: {
                options: {
                    templateSettings: {
                        interpolate : /\{\{(.+?)\}\}/g
                    },
                    processName: function(fileName) {
                        var searchString = 'template/';
                        var beginIndex = fileName.indexOf(searchString) + searchString.length;
                        var templateName = fileName.substring(beginIndex);
                        console.log('Template Name: ' + templateName);
                        return templateName;
                    }
                },
                files: {
                    "www/src/script/template/Templates.js": ["www/src/script/template/**/*.html"]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib');

    grunt.registerTask('build', ['jst:compile']);

};