const regExpDic = {
    email : /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password : /^[0-9a-zA-Z]{4,}$/,
}

/**
 * Function validate/ Check Input on RegExp provideed in regExDic by inpit data-required type
 * @param {HTMLInpitElement} el
 * @returns {Boolean} - Retrun true if input valid or doesn't data-required attr
 */

export function validate (el) {
    const regExpName = el.dataset.required;

    if(!regExpDic[regExpName]) return true;

    return regExpDic[regExpName].test(el.value);
}