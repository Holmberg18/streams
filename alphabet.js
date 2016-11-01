var stream = require('stream');

function Alphabet(options) {
    stream.Readable.call(this, options);
    this._start = 'a';
    this._end = 'z';
    this._curr = this._start.charCodeAt(0);
};

function RandNum(options) {
    stream.Readable.call(this, options);
    this._start = 1;
    this._end = 50;
    this._curr = this._start;
};

RandNum.prototype = Object.create(stream.Readable.prototype);
RandNum.prototype.constructor = RandNum;

Alphabet.prototype = Object.create(stream.Readable.prototype);
Alphabet.prototype.constructor = Alphabet;

Alphabet.prototype._read = function() {
    var letter = String.fromCharCode(this._curr);
    var buf = new Buffer(letter, 'utf8');
    this.push(buf);
    this._curr++;
    if (letter === this._end) {
        this.push(null);
    }
};

RandNum.prototype._read = function(){
    var number = this._curr;
    var buf = new Buffer(number);
    //put edits here...
    
};

module.exports = Alphabet;