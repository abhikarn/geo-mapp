import * as _ from 'lodash';
Array.prototype.sum = function (field?: string) {
    return this.reduce((sum, object) => sum + (field ? (+object[field] || 0) : object), 0);
};
Array.prototype.clone = function () {
    return _.cloneDeep(this);
};
// Array.prototype.customSort = function (fieldName) {
//     return this.sort(SortByName, fieldName);
// };

// function SortByName(x, y, sortColumnName) {
//     return ((x[sortColumnName] == y[sortColumnName]) ? 0 : ((x[sortColumnName] > y[sortColumnName]) ? 1 : -1));
// }
