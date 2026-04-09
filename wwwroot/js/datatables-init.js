window.initDataTable = function (tableId, options) {
    var selector = '#' + tableId;
    if ($.fn.DataTable.isDataTable(selector)) {
        $(selector).DataTable().destroy();
    }
    $(selector).DataTable(options || {});
};

window.destroyDataTable = function (tableId) {
    var selector = '#' + tableId;
    if ($.fn.DataTable.isDataTable(selector)) {
        $(selector).DataTable().destroy();
    }
};
