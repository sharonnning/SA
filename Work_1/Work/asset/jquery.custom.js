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
    localStorage.setItem('products_favorite', JSON.stringify(result));
    window.location.reload;
}

function clearFavorite() {
    alert('重設成功');
    localStorage.clear();
    $('input[name=product]').prop('checked', false);
    window.location.reload;
}

$(document).ready(function () {
    var products = JSON.parse(localStorage.getItem('products_favorite'));
    if (products) {
        products.forEach(function (item) {
            $('input[name=product][value=' + item + ']').prop('checked', true);
        });
    }
})