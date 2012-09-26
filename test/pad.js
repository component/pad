
var pad = require('..');

describe('pad(str, len)', function(){
  describe('when below', function(){
    it('should leave the string alone', function(){
      pad('hello', 5).should.equal('hello');
    })
  })

  describe('when above', function(){
    it('should pad the string on both sides', function(){
      pad('hello', 10).should.equal('   hello  ');
      pad('hey', 7).should.equal('  hey  ');
      pad('hey', 5).should.equal(' hey ');
      pad('hey', 4).should.equal(' hey');
    })
  })
})

describe('pad(str, len, char)', function(){
  it('should pad with the character', function(){
    pad('hey', 7, '-').should.equal('--hey--');
  })
})

describe('pad.left(str, len)', function(){
  describe('when below', function(){
    it('should leave the string alone', function(){
      pad.left('hello', 5).should.equal('hello');
    })
  })

  describe('when above', function(){
    it('should pad the string', function(){
      pad.left('hello', 10).should.equal('     hello');
      pad.left('hello', 7).should.equal('  hello');
      pad.left('hello', 6).should.equal(' hello');
    })
  })
})

describe('pad.left(str, len, char)', function(){
  it('should pad with a character', function(){
    pad.left('hello', 10, '.').should.equal('.....hello');
  })
})

describe('pad.right(str, len)', function(){
  describe('when below', function(){
    it('should leave the string alone', function(){
      pad.right('hello', 5).should.equal('hello');
    })
  })

  describe('when above', function(){
    it('should pad the string', function(){
      pad.right('hello', 10).should.equal('hello     ');
      pad.right('hello', 7).should.equal('hello  ');
      pad.right('hello', 6).should.equal('hello ');
    })
  })
})

describe('pad.right(str, len, char)', function(){
  it('should pad with a character', function(){
    pad.right('hello', 10, '.').should.equal('hello.....');
  })
})