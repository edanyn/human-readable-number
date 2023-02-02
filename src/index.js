module.exports = function toReadable (number) {
  const toTeens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const toTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result ='';
    let numberToStr = String(number);  
    if (number <= 19) {
      result = toTeens[number];
    } else if ((number > 19 && number <= 99) && (numberToStr[1] === '0')) {
      result = toTens[Number(numberToStr[0])];
    } else if ((number > 19 && number <= 99) && (numberToStr[1] !== '0')) {
      result = `${toTens[Number(numberToStr[0])]} ${toTeens[Number(numberToStr[1])]}`;
    } else if ((number >= 100 && number <= 999) && (numberToStr[1] === '0' && numberToStr[2] === '0')) {
      result = `${toTeens[Number(numberToStr[0])]} hundred`;
    } else if ((number >= 100 && number <= 999) && (Number(numberToStr.slice(1)) <= 19)) {
      result = `${toTeens[Number(numberToStr[0])]} hundred ${toTeens[Number(numberToStr.slice(1))]}`;  
    } else if ((number >= 100 && number <= 999) && ((Number(numberToStr.slice(1.2) > 1)) && numberToStr[2] === '0')) {
      result = `${toTeens[Number(numberToStr[0])]} hundred ${toTens[Number(numberToStr[1])]}`;
    } else if ((number >= 100 && number <= 999) && (Number(numberToStr.slice(1)) > 19) && numberToStr[2] !== '0') {
      result = `${toTeens[Number(numberToStr[0])]} hundred ${toTens[Number(numberToStr[1])]} ${toTeens[Number(numberToStr[2])]}`;
    }  
      return result
}
