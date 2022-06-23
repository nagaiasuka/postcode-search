// 検索ボタン変数化
let search = document.getElementById('search');
search.addEventListener('click',()=>{

    // APIのURL
    let url = 'https://zipcloud.ibsnet.co.jp/api/search';

    // 入力された郵便番号
    let postcode = $(".postcode").val();
    // console.log(postcode);

    // 送るデータを整形
    let param = { zipcode:postcode };
    console.log(param);

    // サーバーと通信
    $.ajax({
        type: "GET", //多いのはPOST
        cache: false,
        url: url,
        data: param,
        dataType: "jsonp"
    })

    .done(function (res) {
        if (res.status != 200) {
            $('#zip_result').html(res.message);
        } else {

            // console.log(res);
            let result = res.results[0];
            
            address1.value =result.address1;
            kana1.value =result.kana1;
            address2.value =result.address2;
            kana2.value =result.kana2;
            address3.value =result.address3;
            kana3.value =result.kana3;
        
        }
    })
    .fail(function () {
        $('#zip_result').html("通信エラーです。時間をおいてお試しください。")
    });
});
