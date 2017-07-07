module.exports = function(grunt)
{
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'css/main.css': 'css/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['**/*.less'],
                tasks: ['less']
            },
        },

        concat: {
           options: {
             separator: ';',
           },
           dist: {
             src: ['js/script.js', 'js/script1.js'],
             dest: 'js/built.js',
           },
         },

        uglify: {
         my_target: {
           files: {
             'js/output.min.js': ['js/built.js']
           }
         }
        },

        clean: {
          build: {
            src: ['js/output.min.js']
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
