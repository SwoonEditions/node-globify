module.exports = (data, setting) =>
data.replace(new RegExp(`require\\((\'|\")${setting[0]}(\'|\")\\)`, 'g'),
    `(typeof window !== \"undefined\" ? window['${setting[1]}'] : typeof global !== \"undefined\" ? global['${setting[1]}'] : null)`);