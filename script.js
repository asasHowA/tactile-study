document.addEventListener('DOMContentLoaded', function () {
    // 説明部分の文章を取得して挿入
    var descriptionSection = document.getElementById('description');
    var descriptionText = 'ここに音声触図とは・・・という説明部分の文章が挿入されます。';
    descriptionSection.textContent = descriptionText;

    // 学習用アプリと登録用アプリのリンクのクリックイベントを設定
    var learnAppLink = document.getElementById('learnAppLink');
    var registerAppLink = document.getElementById('registerAppLink');

    learnAppLink.addEventListener('click', function (event) {
        event.preventDefault();
        // 学習用アプリに関する処理を追加する場合はここに記述
        console.log('学習用アプリがクリックされました');
    });

    registerAppLink.addEventListener('click', function (event) {
        event.preventDefault();
        // 登録用アプリに関する処理を追加する場合はここに記述
        console.log('登録用アプリがクリックされました');
    });
});
