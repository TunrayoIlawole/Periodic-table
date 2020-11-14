let domElements = {
    container: document.querySelector('.main-content'),
    heading: document.querySelector('h2'),
    video: document.querySelector('video'),
    fact: document.querySelector('.fact-text'),
    name: document.querySelector('.name-text'),
    atomicNo: document.querySelector('.am-text'),
    massNo: document.querySelector('.mn-text'),
    year: document.querySelector('.year-text'),
    nature: document.querySelector('.nature-text'),
    eps: document.querySelector('.eps-text'),
    ec: document.querySelector('.ec-text')
}

let requestFile = "elements.json";

const elements = async function(e) {
    try {
        const result = await fetch(requestFile);
        const data = await result.json();
        const elements = data.elements;

        const item = e.target.closest('.element').id;
        // console.log(item);
        let element = elements.find(element => element.name === item);
        domElements.heading.classList.add('hide');

        // elements fact
        domElements.fact.textContent = element.fact;
        domElements.fact.style.color = element.color;
        domElements.name.textContent = element.name;
        domElements.name.style.color = element.color;
        domElements.atomicNo.textContent = element.AM;
        domElements.atomicNo.style.color = element.color;
        domElements.massNo.textContent = element.MN;
        domElements.massNo.style.color = element.color;
        domElements.year.textContent = element.year;
        domElements.year.style.color = element.color;
        domElements.nature.textContent = element.nature;
        domElements.nature.style.color = element.color;
        domElements.eps.textContent = element.eps;
        domElements.eps.style.color = element.color;
        domElements.ec.textContent = element.ec;
        domElements.ec.style.color = element.color;
        domElements.video.src = `./assets/PT/${element.name}.mp4`;
    } catch (error) {
        alert(error);
    }
};

domElements.container.addEventListener('click', elements);