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

    const catNew = new Cat();
    catNew.petName = document.querySelector('#petName').value;

    catNew.breed = document.querySelector('#breed').value;

    catNew.age = document.querySelector('#age').value;

    catNew.food = checkFood();

    catNew.sex = checkSex();

    console.log(catNew);
});

const checkSex = () => {
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

const checkFood = () => {
    const checkboxes = document.querySelectorAll('.food');

    const checkboxesChecked = [];
    for (item of checkboxes) {
        if (item.checked) {
            checkboxesChecked.push(item.value);
        }
    }
    return checkboxesChecked.join();
}