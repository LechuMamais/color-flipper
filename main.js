import './style.css';


const COLOR_PALETTE = {
  '#F5FDC6': 'Cream',
  '#F5C396': 'Peach',
  '#D0B17A': 'Ecru',
  '#A89F68': 'Dark Ecru',
  '#41521F': 'Dark Moss Green'
};

const addOptionsToColorPicker = () => {

  // Opciones del select

  const colorPickerSelect = document.querySelector('#color-picker')

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option)
  });

};

const addEventListenerToColorPicker = () =>{
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');

  colorPickerSelect.addEventListener('change', (ev) =>{
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor;

    //Que agregue el nombre del color, o un - para el blanco
    colorName.innerHTML = COLOR_PALETTE[newColor] || '-';
    
  })


};

addOptionsToColorPicker();
addEventListenerToColorPicker();