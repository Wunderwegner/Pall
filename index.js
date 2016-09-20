"use strict";
const _ = require('lodash');
/**
 * @param object
 * @returns [Array]
 */
function objToArr(o) {
    if (_.isObject(o)) {
        return _.reduce(o, (r, v, p) => {
            r.push(p, v);
            return r;
        }, []);
    } else {
        throw new Error('Argument must be an object.');
    }
}
/**
 * @param array
 * @returns {Object}
 */
function arrToObj(a) {
    const ps = _.filter(a, (v, i) => {
        return !(i % 2);
    });
    const vs = _.filter(a, (v, i) => {
        return i % 2;
    });

    return _.zipObject(ps, vs);
}
/**
 * @param object
 * @returns {Promise}
 */
function Pall(o) {
    return Promise.all(objToArr(o))
        .then(r => {
            return Promise.resolve(arrToObj(r));
        })
        .catch(e => {
            return Promise.reject(e);
        });
}

module.exports = Pall;
