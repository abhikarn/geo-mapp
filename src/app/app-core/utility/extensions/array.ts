import * as _ from 'lodash';
Array.prototype.sum = function (field?: string) {
    return this.reduce((sum, object) => sum + (field ? (+object[field] || 0) : object), 0);
};
Array.prototype.clone = function () {
    return _.cloneDeep(this);
};
