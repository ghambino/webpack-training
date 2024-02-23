import _ from "lodash";
import printedMe from './print';

async function component() {

    const element = document.createElement('div');
    const btn = document.createElement('button');
    const br = document.createElement('br');
    const b2 = document.createElement('br');

    // const { default: _ } = await import('lodash');

    btn.innerHTML = 'click me and check the console';
    btn.onclick = printedMe;
    //this will only work in the present of lodash library, so we need to import it through the script or package
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.appendChild(br);
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());