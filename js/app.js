const word = document.querySelectorAll('span, .banner-button > a');

const number_of_elements = word.length;
const show_word = 'show';
const first_word_delay = 1500;
const next_word_delay = 300;
 
function sleep(ms){
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function delayFirstWord(ms, word_count){
  await sleep(ms);
  word[word_count].classList.add(show_word);
  delayWord(word_count);
}

async function delayWord(word_count) {
  word_count++;
  for (let i=word_count; i<number_of_elements; i++){ 
    await sleep(next_word_delay);
    word[i].classList.add(show_word); 
  }
}

window.onload = function() {
  delayFirstWord(first_word_delay, 0);
}
