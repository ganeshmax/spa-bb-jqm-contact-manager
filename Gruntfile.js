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
                        cwd: 'client/',
                        src: ['**'],
                        dest: 'dist/dist-grunt/'
                    },
                    {
                        expand: true,
                        cwd: 'client/',
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
                    }
                },
                files: {
                    "client/app/script/template/Templates.js": ["client/app/script/template/**/*.html"]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib');

    grunt.registerTask('build', ['jst:compile']);

};