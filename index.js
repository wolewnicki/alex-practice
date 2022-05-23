const a = 'someconst';

const test = () => {
    alert(`this is my const ${a}`);
}

function testFunc () {
    alert('function function');
}

const myConst = 'asfd';


const handedness = (hand) => {
    alert(`Oh so you're ${hand} handed? that's cool`);
}

const myButton = document.getElementById('my-button');
const mySelect = document.getElementById('my-select');

myButton.addEventListener('click', () => handedness(mySelect.value));