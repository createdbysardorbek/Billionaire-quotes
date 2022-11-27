const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.testimonial__bottom');
const quote = document.querySelectorAll('.quote')
const testImg = document.querySelectorAll('.testimonial__img');

let counter = 0;

function showSlides(i = 0) {
    quote[i].classList.add('active')
    testImg[i].classList.add('active');
}

function hideSlides() {
    quote.forEach(elem => {
        elem.classList.remove('active');
    })
    testImg.forEach(elem => {
        elem.classList.remove('active');
    })
}

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0
    }
    hideSlides();
    showSlides(counter)
})

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    hideSlides();
    showSlides(counter);
})

// function Car(marka, year) {
//     this.name = marka
//     this.years = year
// }

// let nexia = new Car('Nexia', 2022);

// console.log(nexia);

// class Car {
//     constructor(marka, year) {
//         this.name = marka
//         this.years = year
//     }
// }

// const carAbout = new Car('Qora Jentra', 2022);
// console.log(carAbout);

// let person = {
//     name: 'Cristiano',
//     surname: function () {
//         return this.name
//     },
// }

// let person2 = {
//     name: 'Lionel',
//     surname: 'Messi',
// }

// console.log(person.surname.apply(person2));


// let obj = {
//     name: "John",
//     surname: "Smith",
//     setName: function (name) {
//         this.name = name

//         function sayHi() {
//             console.log(this.name + " hello")
//         }
//         sayHi.call(this);
//     },
// }
// obj.setName('Alex')
// console.log(obj)