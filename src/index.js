import _ from "lodash";
import printedMe from './print';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerHTML = 'click me and check the console';
    btn.onclick = printedMe
    //this will only work in the present of lodash library, so we need to import it through the script or package
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());