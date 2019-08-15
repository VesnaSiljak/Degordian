module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-html-build");
  grunt.loadNpmTasks("grunt-browser-sync");

  grunt.initConfig({
    concat: {
      js: {
        src: ["static/js/*.js"],
        dest: "js/script.js"
      },
      css: {
        src: ["static/css/*.css"],
        dest: "css/style.css"
      }
    },
    cssmin: {
      target: {
        src: ["css/style.css"],
        dest: "dist/style.min.css"
      }
    },
    uglify: {
      target: {
        src: ["js/script.js"],
        dest: "dist/script.min.js"
      }
    },
    imagemin: {
      dynamic: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: "static/img/",
            src: ["*.{jpg,png,gif}"],
            dest: "img/"
          }
        ]
      }
    },
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "scss",
            src: ["*.scss"],
            dest: "static/css",
            ext: ".css"
          }
        ]
      }
    },
    watch: {
      js: {
        files: ["static/js/*.js"],
        tasks: ["concat:js", "uglify"]
      },
      scss: {
        files: ["scss/*.scss"],
        tasks: ["sass"]
      },
      css: {
        files: ["static/css/*.css"],
        tasks: ["concat:css", "cssmin"]
      },
      html: {
        files: ["static/html/**/*.html"],
        tasks: ["htmlbuild"]
      }
    },
    htmlbuild: {
      dist: {
        src: ["./static/html/*.html"],
        dest: "./",
        options: {
          beautify: true,
          relative: true,
          basePath: false,
          sections: {
            layout: {
              footer: "./static/html/layouts/footer.html",
              header: "./static/html/layouts/header.html"
            }
          }
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["dist/*.css", "dist/*.js", "*.html"]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }
  });
  grunt.registerTask("default", [
    "sass",
    "concat",
    "cssmin",
    "uglify",
    "htmlbuild",
    "browserSync",
    "watch"
  ]);
};
