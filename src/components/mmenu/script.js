//components/mmenu
window.addEventListener('load',function (){
   $('.jsMenuOpen').on('click', function (){
      $('.aside').addClass("open");
   });


   document.addEventListener('click',  (e)=> {
      let target = e.target;

      if (!target.closest(".aside") && !target.closest(".jsMenuOpen")) {
         $('.aside').removeClass("open");
      } else if(target.closest(".jsMenuClose")){
         $('.aside').removeClass("open");
      }

   });
});