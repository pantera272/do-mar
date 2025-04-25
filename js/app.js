//banner variables
const word = document.querySelectorAll('span, .banner-button > a');

const number_of_elements = word.length;
const show_word = 'show';
const first_word_delay = 1500;
const next_word_delay = 300;

//action links variables
const navLinks = document.querySelectorAll('a');
const sections = document.querySelectorAll('section');
const hidePage = 'disable-view';
let page = '';


 
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

async function delayWord(word_count){
  word_count++;
  for(let i=word_count; i<number_of_elements; i++){ 
    await sleep(next_word_delay);
    word[i].classList.add(show_word); 
  }
}

window.onload = function(){
  delayFirstWord(first_word_delay, 0);
}

//add action to navLinks
for(let navLink of navLinks){
  navLink.addEventListener('click', function(event){
    event.preventDefault();
    page = this.getAttribute('href');
    showPage(page);
  })
}

//change page
function showPage(sectionPage){
  sectionPage = sectionPage.replace('#','');
  console.log(sectionPage);
  for (let section of sections){
    section.classList.add(hidePage);
    if(section.classList.contains(sectionPage)){
      section.classList.remove(hidePage);
    }
  }
}

//console.log(sections);