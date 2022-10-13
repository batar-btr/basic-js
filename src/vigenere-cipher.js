const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(...args) {
      this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

      if (args[0] === undefined || (args[0] + '') === 'true') {
          this.type = 'direct';
      } else if ((args[0] + '') === 'false') {
          this.type = 'reverse';
      };

      this.tabulaRecta = [];

      for (let i = 0; i < this.alphabet.length; i++) {
          this.tabulaRecta.push([...this.alphabet.slice(i), ...this.alphabet.slice(0, i)])
      }

  }
  encrypt(...args) {
      if (args[0] !== undefined && args[1] !== undefined) {
          let string = args[0].toUpperCase();
          let key = args[1].toUpperCase();

          let stringChar = [...string].filter(char => this.alphabet.indexOf(char) !== -1);


          let mult = Math.floor(stringChar.length/key.length) + 1; 
          let keyString = [...key.repeat(mult).slice(0,stringChar.length)].reverse();

          let finalKeyString = [];

          [...string].forEach((char,idx)=>{
              if(this.alphabet.indexOf(char) !== -1) {
                  finalKeyString[idx] = keyString.pop();
              } else {
                  finalKeyString[idx] = char;
              }
          })

          console.log(finalKeyString);

          let result = [];

          [...string].forEach((char, idx) => {
              if(this.alphabet.indexOf(char) === -1) {
                  result[idx] = char;
              } else {
                  let x = this.alphabet.indexOf(finalKeyString[idx]);
                  let y = this.alphabet.indexOf(char);
                  result[idx] = this.tabulaRecta[x][y];
              }
          });

          return result.join('');
          
      } else {
          throw new Error('Incorrect arguments!');
      }
  }
  decrypt(...args) {
      if (args[0] !== undefined && args[1] !== undefined) {
          let string = args[0];
          let key = args[1];

          let mult = Math.floor(string.length/key.length) + 1; 

          let keyString = key.repeat(mult).slice(0,string.length);

          console.log(string);
          console.log(keyString);
      } else {
          throw new Error('Incorrect arguments!');
      }
  }
}

module.exports = {
  VigenereCipheringMachine
};
