//ヘッダーピストン
const header = document.querySelector('header');
let prevY = window.scrollY; 

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
 
if (currentY < prevY) { 
    header.classList.remove('hidden'); 
  } 
	else { 
  if (currentY > 0) {
      header.classList.add('hidden'); 
    }
  }
  prevY = currentY; 
});


$(function() {
	/*ddをはじめ非表示にしておく(display:noneを設定できない｛flexをつけている場合など｝とき用)*/
$(".pagetop").hide();
		
//ボタンをクリックしたらbodyにクラス名をトグルする
	$(".nav-btn").on("click",function(){
		$("body").toggleClass("menu-open");
	});

	/*展開したnavのどこかをクリックしたとき、ブラウザにnav-buttonをクリックさせる*/
	$(document).on('click', '.menu-open nav', function(){
		$('.nav-btn').trigger('click');
	});
	

	
// ローダー終了
  function end_loader() {
    $('#loader03').fadeOut(1000);
  }
	// テキスト表示
  function show_txt() {
    $('#loader03 .txt').fadeIn(600);
  }
  // 処理③
  setTimeout(function () {
    show_txt();
  }, 600)
  // 処理④
  setTimeout(function () {
    end_loader();
  }, 1400)
	
//カルーセル（＆カルーセルのズームアップ）
 $(".slide")
    // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    // 通常のオプション
    .slick({
     infinite: true, //スライドのループを有効
  arrows: false, //前へ、次への矢印ボタンの有無
  fade: true, //スライドの切り替えをフェードに
  speed: 2000, //アニメーションの切り替えスピード
  autoplaySpeed: 3000, //自動再生時のスライドの静止時間
  autoplay: true, //スライダーの自動再生
  pauseOnFocus: false, //フォーカスで一時停止を無効
  pauseOnHover: false, //マウスホバーで一時停止を無効
  pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
  })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"add-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });
	
	
	

	
/*今回はローディング要らんかも
	//flexボックスの非表示
	function hide_at_start(){
	$('#loader03 .circles-to-rhombuses-spinner').hide();
		}
  // ローダー終了
  function end_loader() {
    $('#loader03').fadeOut(800);
  }
  // ローディング表示
  function show_load() {
    $('#loader03 .circles-to-rhombuses-spinner').fadeIn(400);
  }
  // ローディング非表示
  function hide_load() {
    $('#loader03 .circles-to-rhombuses-spinner').fadeOut(400);
  }
  // テキスト表示
  function show_txt() {
    $('#loader03 .txt').fadeIn(400);
  }
 
  // タイマー処理
  $(window).on('load', function () {
	//非表示処理ゼロ	
	setTimeout(function () {
		hide_at_start();
	}, 0)	
  // 処理①
  setTimeout(function () {
    show_load();
  }, 800)
  // 処理②
  setTimeout(function () {
    hide_load();
  }, 3500)
  // 処理③
  setTimeout(function () {
    show_txt();
  }, 4000)
  // 処理④
  setTimeout(function () {
    end_loader();
  }, 5000)

		*/
});

/*ブラー出現*/
	// blurTriggerにblurというクラス名を付ける定義

function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		}else{
		$(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
		}
		});
}
	// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


//100pxスクロールしたらpagetop表示
	$(window).on("scroll", function() {
		//100pxスクロールしたら
	if ($(this).scrollTop() > 100) {
		//gotopをフェードインする
		$(".pagetop").fadeIn();

	} else {
		//gotopをフェードアウトさせる
		$(".pagetop").fadeOut();

	}
});