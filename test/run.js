var testRunnerConfig = {
  describe: 'Stem stylus bem',
  stylus: {
    use: function plugin(stylus) {
      stylus.include(__dirname + '../');
    },
    import: ['../bem', '../bower_components/stem-stylus-utils']
  }
}

require('stylus-test-runner')(testRunnerConfig)