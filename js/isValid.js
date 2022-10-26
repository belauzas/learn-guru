function isValidName(str) {
    const minNameLength = 2;
    const maxNameLength = 30;

    if (typeof str !== 'string') return [true, 'Name has to be a string.'];
    if (str.length < minNameLength) return [true, `Name can not be shorter than ${minNameLength} symbols.`];
    if (str.length >= maxNameLength) return [true, `Name can not be longer than ${maxNameLength} symbols.`];

    return [false, 'OK'];
}

function isValidEmail(str) {
    const minEmailLength = 6;
    const maxEmailLength = 40;

    if (typeof str !== 'string') return [true, 'Email has to be a string.'];
    if (str.length < minEmailLength) return [true, `Email can not be shorter than ${minEmailLength} symbols.`];
    if (str.length >= maxEmailLength) return [true, `Email can not be longer than ${maxEmailLength} symbols.`];

    return [false, 'OK'];
}

export {
    isValidName,
    isValidEmail,
}