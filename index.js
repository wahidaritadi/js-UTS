// Import stylesheets
import './style.css';

// Write Javascript code!
const cat = ['Kucing', 'Meong'];

let i = 0;
let len = cat.length;
let text = '';

for (; i < len; ) {
  text += cat[i] + '<br>';
  i++;
}
document.getElementById('app').innerHTML = text;
