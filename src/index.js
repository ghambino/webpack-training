import _ from "lodash";

function component() {
    const element = document.createElement('div');

    //this will only work in the present of lodash library, so we need to import it through the script or package
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    return element;
}

document.body.appendChild(component());