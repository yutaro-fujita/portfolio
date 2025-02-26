

//へッダーピストン
const header = document.querySelector('header');
let prevY = window.scrollY; 

window.addEventListener('scroll', () => {
	
	// 'open' クラスが付与されている場合、処理を停止
	if (document.body.classList.contains('open')) { 
		return; 
	}
	
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



$(function () {


	/*
//元に戻す場合、loadingのnoneをなくす。
	$(document).ready(function() {
		var webStorage = function () {
		  if (sessionStorage.getItem('access')) {
			// 2回目以降アクセス時の処理
			$(".loading").hide(); // 2回目以降は即座に非表示
			$(".loading").addClass('is-active');
		  } else {
			// 初回アクセス時の処理
			sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
			$(".loading").show(); // 初回アクセス時に表示
			$(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
			setTimeout(function () {
			  // ローディングを数秒後に非表示にする
			  $(".loading").addClass('is-active');
			  $(".loading-animation").removeClass('is-active');
			}, 3000); // ローディングを表示する時間
		  }
		}
		webStorage();
	  });
	  */
	
	
	
	//ローディングアニメーション
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      
        //2回目以降アクセス時の処理
	  //$(".loading").css({ 'opacity': '0', 'visibility': 'hidden' }); // 2回目以降は即座に非表示
      //$(".loading").hide();
			//$(".loading").removeClass('is-active');もともとついてないからこの行は不要。
            $(".white-maku").hide();
    } 
    
    else {
      
        //初回アクセス時の処理
      
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".loading").addClass('is-active'); // loadingを表示
      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").removeClass('is-active');
        $(".loading-animation").removeClass('is-active');
        $(".white-maku").hide();
      }, 3000); // ローディングを表示する時間
    }
  }
  webStorage();
	
	


	//初めは非表示で、100pxスクロールするまでgotopボタン見えない
	$(document).ready(function() { 
		$(".gotop").hide();
		
	$(window).on("scroll", function() {
		//100pxスクロールしたら
	if ($(this).scrollTop() > 100) {
		//gotopをフェードインする
		$(".gotop").fadeIn(500);
		//そうでなければ
	} 
	else {
		//gotopをフェードアウトさせる
		$(".gotop").fadeOut(500);
	}
 });
});
	
	
	/*
	//ヘッダー着色
	
	$(window).on("scroll", function() {
		//100pxスクロールしたら
	if ($(this).scrollTop() > $(window).height()) {
		//ヘッダーにクラス名をつける
		$("header").addClass("scroll");
		//そうでなければ
	} 
	else {
		//ヘッダーからクラス名を外す
		$("header").removeClass("scroll");
	}
});
	
	//aboutのヘッダー着色
	$(window).on("scroll", function() {
    // 9.2remと.mvの高さを計算する
    var remHeight = 9.2 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    var mvHeight = $('.about-body .mv').outerHeight();
    var totalHeight = remHeight + mvHeight;
    
    // スクロール位置が計算した高さを超えたら
    if ($(this).scrollTop() > totalHeight) {
        // ヘッダーにクラス名をつける
        $("header").addClass("scroll");
    // そうでなければ
    } else {
        // ヘッダーからクラス名を外す
        $("header").removeClass("scroll");
    }
});
*/
	
	$(window).on("scroll", function() {
    if (window.location.pathname.includes('about.html')) {
        // 9.2remと.mvの高さを計算する
        var remHeight = 9.2 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        var mvHeight = $('.about-body .mv').outerHeight();
        var totalHeight = remHeight + mvHeight;

        // スクロール位置が計算した高さを超えたら
        if ($(this).scrollTop() > totalHeight) {
            // ヘッダーにクラス名をつける
            $("header").addClass("scroll");
        // そうでなければ
        } else {
            // ヘッダーからクラス名を外す
            $("header").removeClass("scroll");
        }
    } else {
        // 100vhスクロールしたら
        if ($(this).scrollTop() > $(window).height()) {
            // ヘッダーにクラス名をつける
            $("header").addClass("scroll");
        // そうでなければ
        } else {
            // ヘッダーからクラス名を外す
            $("header").removeClass("scroll");
        }
    }
});

	
	
	//ハンバーガーメニュー処理
	//ボタンをクリックしたらbodyにクラス名openをトグルする
	$(".nav-btn").on("click",function(){
		$("body").toggleClass("open");
	});

	/*展開したnavのどこかをクリックしたとき、ブラウザにnav-buttonをクリックさせる*/
	/*$(document).on('click', '.open nav:not(.acco-key)', function(){
		$('.nav-btn').trigger('click');
	});*/
	
	$(document).on('click', '.open nav', function(event){ 
		if (!$(event.target).hasClass('acco-key') && !$(event.target).hasClass('acco-kigou')) { 
			$('.nav-btn').trigger('click');
		} 
	});
	
	//アコーディオン、ナビゲーション
	$("nav .acco-key").on("click", function() {
		$("nav .acco-this").slideToggle();
	});
	
		$("footer .acco-key").on("click", function() {
		$("footer .acco-this").slideToggle();
	});
	
	//アコーディオン展開ボタン
	$(document).on("click", ".acco-key, .acco-key .acco-kigou", function() { $(this).find(".acco-kigou").toggleClass("tenkai"); 
	});
	
	// スクロールしたらフェードイン
	//アニメ用cssに
		$('.inview1') .on('inview', function(){
			$(this) .addClass('fade-in');
		});
	
	

	
//動画！！！
	/*
	  var video01 = document.getElementById("video01");
    var video02 = document.getElementById("video02");
    // video01の再生が終わった場合
    video01.addEventListener("ended", function () {
      $(this).hide();
      $(video02).show();
      video02.play();
    });

    // video02の再生が終わった場合
    video02.addEventListener("ended", function () {
      $(this).hide();
      $(video01).show();
      video01.play();
    });
		*/
  var video01 = document.getElementById("video01"); 
	var video02 = document.getElementById("video02"); 
	var video03 = document.getElementById("video03"); 
	var movie1 = document.querySelector(".m-1"); 
	var movie2 = document.querySelector(".m-2"); 
	var movie3 = document.querySelector(".m-3");
	// video01の再生が終わった場合 
	video01.addEventListener("ended", function () { 
		$(movie1).hide(); 
		$(movie2).show(); 
		video02.play()
		});

	// video02の再生が終わった場合 
	video02.addEventListener("ended", function () { 
		$(movie2).hide(); 
		$(movie3).show(); 
		video03.play()
		});
	
		// video03の再生が終わった場合 
	video03.addEventListener("ended", function () { 
		$(movie3).hide(); 
		$(movie1).show(); 
		video01.play()
		});
	
	
//スライドショー
  $(document).ready(function() {
  function setSlick() {
    if ($(window).width() <= 440) {
      $(".slide").slick('slickSetOption', 'slidesToShow', 1, true);
    } else if ($(window).width() <= 768) {
      $(".slide").slick('slickSetOption', 'slidesToShow', 3, true);
    } else {
      $(".slide").slick('slickSetOption', 'slidesToShow', 1, true);
    }
  }

  $(".slide").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false,
    centerPadding: "50px",
    dots: false,
    fade: false,
    cssEase: "ease",
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
  });

  // 初期設定
  setSlick();

  // ウィンドウのリサイズイベント
  $(window).resize(function() {
    setSlick();
  });
});



	
	
});



