/* aos.js */ 
AOS.init({
    offset: 200,
    delay: 0,
    duration: 1200,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
    disable:'phone'
});

/* タブ */ 
'use strict';
{
    const menuItems = document.querySelectorAll('.toggleButtons a');
    const contents = document.querySelectorAll('.info__contents');

    menuItems.forEach(clickedItem =>{
        clickedItem.addEventListener('click',e => {
            e.preventDefault();
            menuItems.forEach(item =>{
                item.classList.remove('active');
            });
            clickedItem.classList.add('active');

            contents.forEach(content =>{
                content.classList.toggle('show');
            });
        });
    });

}
/* headerイベント */ 

$(window).on('scroll', function() {
    $('.site-header').toggleClass('transform', $(this).scrollTop() > 80 )
    $('.openbtn span').toggleClass('transform', $(this).scrollTop() > 80 )
    $('.gnav__link a').toggleClass('black', $(this).scrollTop() > 80 )
    $('.header__logo').toggleClass('black', $(this).scrollTop() > 80 )
});

//モーダル
'use strict';

{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');
    open.addEventListener('click',() =>{
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
        
    })


    close.addEventListener('click',() =>{
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    })
}
// 背景固定
$(function(){
	var scrollPosition;
	$("#open").on("click", function() {
		scrollPosition = $(window).scrollTop();
		$('body').addClass('fixed').css({'top': -scrollPosition});
	});
	$("#close").on("click", function() {
		$('body').removeClass('fixed').css({'top': 0});
		window.scrollTo( 0 , scrollPosition );
	});
});
// 日時指定
const config = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
  }
flatpickr('.flatpickr', config);