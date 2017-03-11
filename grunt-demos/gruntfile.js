module.exports = function(grunt) {

  // Step- 1 Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/*.js'],
      dest: 'release/one.js',
    },
  },

  uglify: {
   my_target: {
      files: {
        'release/one.min.js': ['release/one.js']
      }
   }
				   
  },
watch: {
  scripts: {
    files: ['js/*.js','css/*.css'],
    tasks: ['concat','uglify:my_target'],
    options: {
      spawn: false,
    },
  },
}	  
	  
  
    
  });


//Step -2 Load Plugin 
grunt.loadNpmTasks('grunt-contrib-concat');	
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
	
	
	
	// Step - 3 Register Task to Run
grunt.registerTask('default', ['watch']);	
	
}