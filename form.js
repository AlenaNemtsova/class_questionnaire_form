class Cat {
    constructor(petName, breed, age, food, sex) {
        this.petName = petName;
        this.breed = breed;
        this.age = age;
        this.food = food;
        this.sex = sex;
    }
}

document.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();

    const cat2 = new Cat();
    cat2.petName = document.querySelector('#petName').value;

    cat2.breed = document.querySelector('#breed').value;

    cat2.age = document.querySelector('#age').value;

    const foodAll = checkFood();
    cat2.food = foodAll;

    const sexSelected = checkSex();
    cat2.sex = sexSelected;

    console.log(cat2);
});


function checkFood() {
    const checkboxes = document.querySelectorAll('.food');

    const checkboxesChecked = [];
    for (item of checkboxes) {
        if (item.checked) {
            checkboxesChecked.push(item.value);
        }
    }
    return checkboxesChecked.join();
}

function checkSex() {
    let radioChecked = '';
    const radios = document.querySelectorAll('.sex');
    for (item of radios) {
        if (item.checked) {
            radioChecked = item.value;
            // break; – если radio-кнопок много: цикл завершится, как только будет найден первый checked
        }
    }
    return radioChecked;
}