// clickTest()がついている要素がクリックされたら、anime_testってIdがついているやつに対して処理する関数
function clickTest(){
    target = document.getElementById("anime_test"); //targetっていう入れ物に、anime_testのidついてる要素を取得

        if(target.className == null || target.className==""){   //class名の中身があるまたは空か
            target.className = "active";       //なかったら".active"をつける。.がつくのがミソ
        } else {
            target.className = "";  //入ってたらclass名をなくす
        }
}

//targetっていう入れ物を用意して、idをそこに詰める
//そのターゲットのidを持つ要素に、classを追加する処理を行った
//そうすると、cssに記述したスタイルを適用させる