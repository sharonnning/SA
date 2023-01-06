function addFavorite() {
    var data = $('form').serializeArray();
    if (typeof data !== 'object') {
        alert('設定錯誤');
        return null;
    }
    if (data.length <= 0) {
        alert('請選擇項目');
        return null;
    }

    var result = [];
    data.forEach(function (item, index) {
        result.push(item['value']);
    })

    alert('新增成功');
    window.location = '?product=' + result.join(',');
}

$(document).ready(function () {
    var searchParams = new URLSearchParams(window.location.search);
    var products     = searchParams.get('product');
    if (products) {
        products = products.split(',');
        products.forEach(function (item) {
            $('input[name=product][value=' + item + ']').prop('checked', true);
        });
    }
})