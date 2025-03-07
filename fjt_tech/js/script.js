//最初のキャッチコピーの登場、多分cozy2見ればできる

//へッダーピストン
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


//ハンバーガーメニュー処理
	//ボタンをクリックしたらbodyにクラス名openをトグルする
	$(".nav-btn").on("click",function(){
		$("body").toggleClass("open");
	});	
	
/*展開したnavのどこかをクリックしたとき、ブラウザにnav-buttonをクリックさせる*/
	$(document).on('click', '.open nav.sp-show', function(){
		$('.nav-btn').trigger('click');
	});



// スクロールしたら変数名つける
//fvの処理
$(function(){ 
    $('.inview-fv').on('inview', function(event, isInViewFv) {
	if (isInViewFv) {
		$('.mv-image').addClass('darker'); 
	  $('.catchcopy').addClass('gone');
	}
	else { 
		$('.mv-image').removeClass('darker'); 
	  $('.catchcopy').removeClass('gone');
	} 												
 });
             
          
             
});
$(function() {
    // 通常の inview の処理
    $('.inview').on('inview', function() {
        $(this).addClass('fade-in');  
    });
    
    //フッターにもdarker
    $('footer').on('inview', function(event, isInView) {
        if (isInView && $(this).hasClass('fade-in')) {
            $('.mv-image').addClass('darker');
        } else {
            $('.mv-image').removeClass('darker');
        }
    });
    
});



document.querySelectorAll('ul a').forEach(link => { link.addEventListener('click', function(e) {
	// 特定のリンクの場合のみscroll-padding-topを変更
	if (this.classList.contains('special-link')) { document.documentElement.style.scrollPaddingTop = '0rem';
	} 
	else { 
		document.documentElement.style.scrollPaddingTop = '10rem';
	  } 
  });
});

//slide
$(function(){
		
		$('.slide').slick({
			autoplay:true,
			autoplaySpeed:3000,			
			dots:false,
			fade:false,
			cssEase:"ease",
			infinite:true,
			slidesToShow:3,
			slidesToScroll:1,
			speed:1000,
			pauseOnFocus:false,
			pauseOnHover:false,
			
			
			//レスポンシブ対応
			/*
			cssのほうでは、.slideにmax-width設定、imgにmax-width:100%、height:auto設定が必要
			imgにmax-width:100%はslideの横幅ぴったにする操作。height:autoは縦横比キープ。
			*/
			//viewportの設定も忘れずに。付け得なのでファイル作成時につける癖をつけよう。
			responsive:[
				
			{
				breakpoint:750,
				settings:{
				slidesToShow: 2,
				},
			},
				
			{
				breakpoint:600,
				settings:{
					slidesToShow:1,
				},
			},
				
			]
		
			
			/*
			  ◆なめらかに連続してスライド運動させ続けるやり方（商品を見せるときとか）
			    autoplaySpeed:0,
			    cssEase:"linear",
				  speed:5000,(適当にゆっくりめにする)
			*/
			/*
			  ◆検証ツールでセレクタ名探して、ボタンの位置や色など調整可能
			   そのとき、じぶんでつくったcssに記述する（本体に書かず別のスタイルシートで上書きする）
				 自分で作ったcssが一番最後に読まれるようにheadのなかの配置に気を付ける
			*/
			/*
			autoplaySpeed:3000,　初期値は3000(ms)=3(s)。
			arrows:true,
			  矢印。初期値はtrue。背景白だと見えない。
			  画像幅が画面100%の場合、画面外にボタンがあることになるので、
			  意図しないスクロールバーが表示されてしまう。その場合は、
			　・arrowsをfalseにする。
			　・cssでボタンの表示を変える
			centerMode:false,
			  前後のスライドがちょっと見えるようになる。
			centerPadding:"50px", 初期値は"50px"
			fade:false, センターモードより優先される。
			cssEase:"ease",
			  動き方の設定(フェードだとわかりにくい)
			  「cssイージング」と検索するとグラフとか解説が出てくる。
			  ease　初期値。最後ゆっくり
			  linear　一定速度
			infinite:true,
			  falseにするとスライドがループせず、端まで行ったら止まるようになる。
			  （それ以上右に行けなくなる。）
			  自動スライドは端まで行ったら止まる。
			pauseOnFocus:true,
			pauseOnHover:true,
			  触ってたりマウス乗ったら自動再生とまる。初期値はtrue。
			  Focusは、そのエリア（の要素）をクリックしている状態みたいな感じ。
			  ふつうテキストボックスにカーソルが入ってる状態をいう。
			slidesToShow:3, 何枚も出せる。わかるだろ
			slidesToScroll:1,
			  何枚送りにするか指定できる。上と併用して、3枚ごとの塊のスライドみたいにできる。
			    枚数が足りない（割り切れない）と、効果が感じられないタイミングが出てしまう。
				  ※センターモードがONだと機能しなくなるっぽい※　　　
			speed:1000, 初期値1000。
			*/
			
		});
		
	});



//メンバーの二段目ぶんだけセクション下を延長する
function updatePadding() {
    const target = document.querySelector('.member .flx-box:nth-child(2)'); // transformが適用されている要素
    const targetStyle = window.getComputedStyle(target);
    const transformMatrix = targetStyle.transform;

    if (transformMatrix !== 'none') {
        const matrixValues = transformMatrix.match(/matrix.*\((.+)\)/)[1].split(', ');
        const translateY = parseFloat(matrixValues[5]); // Y方向の変位を取得

        const paddingTarget = document.querySelector('.member'); // paddingを変更する要素
        paddingTarget.style.paddingBottom = `calc(${translateY}px + 10vw + 8rem)`; // padding-bottomに適用
    }
}
// 初回実行
updatePadding();

// 変化を監視する場合
window.addEventListener('resize', updatePadding);
