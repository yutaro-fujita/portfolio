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






//ハンバーガーメニュー処理
	//ボタンをクリックしたらbodyにクラス名openをトグルする
	$(".nav-btn").on("click",function(){
		$("body").toggleClass("open");
	});	
	
/*展開したnavのどこかをクリックしたとき、ブラウザにnav-buttonをクリックさせる*/
	$(document).on('click', '.open .sp', function(){
		$('.nav-btn').trigger('click');
	});
	
	
	

$(function() {
	
  $(".mv.slide").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    cssEase: "ease",
    infinite: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
  });
	
	$(".pickup .slide").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    cssEase: "ease",
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
      
		
		prevArrow:'<img src="img/prev-btn.png" alt="" class="prev_icon">',
    nextArrow:'<img src="img/next-btn.png" alt="" class="next_icon">'
		
  });
    $(document).ready(function () {
    var $slider = $(".pickup .slide.sp.under");

    if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
    }

    $slider.slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        cssEase: "ease",
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        rtl: true, // 逆方向
        prevArrow: '<img src="img/prev-btn.png" alt="" class="prev_icon">',
        nextArrow: '<img src="img/next-btn.png" alt="" class="next_icon">'
    });

    // rtl を強制適用
    $slider.slick("setOption", "rtl", true, true);
});





    
	$(".gallery.slide").slick({
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    dots: false,
    cssEase: "linear",
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 3000,
	
	
		
		
  });
	
}); 



$(function() {
    // アコーディオン、ナビゲーション
    $("header .acco-key.shop").on("click", function() {
        // 他のアコーディオンを閉じる
        $("header .acco-this.shop").stop(true, true).slideToggle();
        $("header .acco-this.information").slideUp();
        $("header .acco-this.support").slideUp();
    });
    
    $("header .acco-key.information").on("click", function() {
        // 他のアコーディオンを閉じる
        $("header .acco-this.information").stop(true, true).slideToggle();
        $("header .acco-this.shop").slideUp();
        $("header .acco-this.support").slideUp();
    });

    $("header .acco-key.support").on("click", function() {
        // 他のアコーディオンを閉じる
        $("header .acco-this.support").stop(true, true).slideToggle();
        $("header .acco-this.shop").slideUp();
        $("header .acco-this.information").slideUp();
    });
});

	/*
	//アコーディオン展開ボタン
	$(document).on("click", ".acco-key, .acco-key .acco-kigou", function() { $(this).find(".acco-kigou").toggleClass("tenkai"); 
	});
	*/
	








//aboutusにふわっと変化

$(function(){
		$('.aboutus.inview') .on('inview', function(){
			$('.bg-asian') .toggleClass('bg-show');
            $('.bg-chill') .toggleClass('bg-hide');
            $('.technology .target') .toggleClass('bg-hide');
		});
        
	});
    









