var path = require('path');

var PATH_BUILD_ICONS = 'src/icons',
    PATH_DIST = '../assets/icons/';

module.exports = function(grunt) {
    'use strict';


    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
        webfont: {
            run: {
                src: PATH_BUILD_ICONS + '/*.svg',
                dest: PATH_DIST,
                options: {
                    relativeFontPath: PATH_DIST,
                    stylesheet: 'scss',
                    htmlDemo: true,

                    template: 'template.css',
                    fontFamilyName: 'Yurtah Icons',
                    font: 'yh-icons',
		    baseClass: 'icon',
                    classPrefix: 'icon_',
                    types: ['woff', 'ttf', 'woff2', 'svg']
                },
            }
    	},
        shell: {
            publish: {
                command: 'npm publish'
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-path');

    grunt.registerTask('publish', ['webfont:run', 'shell:publish']);
    grunt.registerTask('default', ['webfont:run']);

};
