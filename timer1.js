const input = process.argv.slice(2);
console.log(input);
for (let seconds of input) {
    if (!isNaN(seconds) && (seconds > 0)){
      setTimeout(() => { process.stdout.write('\x07') }, 1000 * parseInt(seconds));
    
  }
}
