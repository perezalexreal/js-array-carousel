const titles = ['Titolo 1', 'Titolo 2', 'Titolo 3', 'Titolo 4', 'Titolo 5'];

const paragraphs = ['Harum suscipit saepe illum, repudiandae eum minima error delectus quos, assumenda magnam, dignissimos dolores obcaecati! Nostrum fugiat dolor tempore excepturi iure voluptates!',
'Ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit saepe illum, repudiandae eum minima error delectus quos, assumenda magnam, dignissimos dolores obcaecati! Nostrum fugiat dolor tempore excepturi iure voluptates!',
'Dolor sit amet consectetur adipisicing elit. Harum suscipit saepe illum, repudiandae eum minima error delectus quos, assumenda magnam, dignissimos dolores obcaecati! Nostrum fugiat dolor tempore excepturi iure voluptates!',
'Consectetur adipisicing elit. Harum suscipit saepe illum, repudiandae eum minima error delectus quos, assumenda magnam, dignissimos dolores obcaecati! Nostrum fugiat dolor tempore excepturi iure voluptates!',
'Adipisicing elit. Harum suscipit saepe illum, repudiandae eum minima error delectus quos, assumenda magnam, dignissimos dolores obcaecati! Nostrum fugiat dolor tempore excepturi iure voluptates!'];


const next = document.querySelector("#next");
// const previous = document.querySelector("#previous");

const boxTitle = document.querySelector(".title");
const boxParagraph = document.querySelector(".paragraph");

let currentIndex = 0;

let last = false;

next.addEventListener('click', function () {
    for (let i = 0; i < titles.length; i++) {
        if (currentIndex === i) {
            boxTitle.innerHTML = titles[i];
            boxParagraph.innerHTML = paragraphs[i];
        }
        if (currentIndex === titles.length  ) {
            last = true;
            currentIndex = 0;
            boxTitle.innerHTML = titles[0];
            boxParagraph.innerHTML = paragraphs[0];
        }
    }
    currentIndex++;
})

