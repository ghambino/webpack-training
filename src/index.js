import _ from "lodash";
import './style.css';
import MyImage from './images/Screen Shot 2024-02-05 at 1.45.21 PM.png';
import rawData from './data/data.csv';
import rawXml from './data/data.xml';
import rawToml from './data/data.toml';
import rawYaml from './data/data.yaml';
import rawJson5 from './data/data.json5';


console.log(rawToml.title); // output `TOML Example`
console.log(rawToml.owner.name); // output `Tom Preston-Werner`

console.log(rawYaml.title); // output `YAML Example`
console.log(rawYaml.owner.name); // output `Tom Preston-Werner`

console.log(rawJson5.title); // output `JSON5 Example`
console.log(rawJson5.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement('div');
    const imgElement = document.createElement('img');
    imgElement.src = MyImage;
    // imgElement.height = '250px';
    // imgElement.width = '100px';
    //this will only work in the present of lodash library, so we need to import it through the script or package
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    element.appendChild(imgElement);

    console.log(rawData);
    console.log(rawXml);

    return element;
}

document.body.appendChild(component());