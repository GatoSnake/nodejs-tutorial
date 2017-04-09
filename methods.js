var methods = {};

this.output = 123;

methods.sumNumbers = (x, y) => {
    output = x + y;
    return output;
}

methods.circleCircumference = (radius) => {
    output = 2 * Math.PI * radius;
    return output;
}

methods.areaOfRectangle = (a, b) => {
    output = a * b;
    return output;
}

exports.data = methods;
