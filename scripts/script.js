let one = document.getElementsByClassName('SectionOne');
let two = document.getElementsByClassName('SectionTwo');
function SectionOne() {

    for (let i = 0; i < one.length; i++) {
        one[i].classList.remove('d-none');
        one[i].classList.add('d-block');
    }

    for (let i = 0; i < two.length; i++) {
        two[i].classList.remove('d-block');
        two[i].classList.add('d-none');
    }
}

function SectionTwo() {

    for (let i = 0; i < two.length; i++) {
        two[i].classList.remove('d-none');
        two[i].classList.add('d-block');
    }

    for (let i = 0; i < one.length; i++) {
        one[i].classList.remove('d-block');
        one[i].classList.add('d-none');
    }
}