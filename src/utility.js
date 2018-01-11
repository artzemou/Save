
/*

+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+
|      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |
+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+
|      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |
+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+
|      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |
+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+
|      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |
+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+
|      |      |       |    Utility  |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |
+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+
|      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |
+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+
|      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |
+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+
|      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |      |      |       |      |      |      |
+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+------+------+-------+------+------+------+

*/


export default function utility() {
  var element = document.createElement("script");
				element.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js";
				document.body.appendChild(element);

  function findClosest (element, fn) {
    if (!element) return undefined;
    return fn(element) ? element : findClosest(element.parentElement, fn);
  }


  function setWayPoint(_this){
      $('.fixed').removeClass('fixed');
      $(_this + ' .section').each(function () {
          $(this).addClass('open')
      })
      setTimeout(function () {
          var i = 0,
              offset = 50;
          $('h2.title, h4.title').attr('id', '');
          $('h2.title, h4.title').next().attr('id','');
          $(_this + ' h2.title').each(function () {

              $(this).attr('id', 'title-' + i);
              $(this).next().attr('id', 'open-' + i)
              $(this).next().attr('href', 'open-' + i)

              i++;

          });
  		if(window.location.hash == '#ideeRecue'){
  			$('#title-2').trigger('click')
  			console.log('????')
  		}

      }, 1000);
  }


  function loadIframes(){
      if ($('.container_firm').length > 0) {

          setTimeout(function () {
              $('iframe').each(function () {
                  $(this).attr('src', $(this).attr('data-src'));
              });
          }, 1000);


      }
  }




  function onScroll() {
      var lastscroll = 0;
      $(window).on('scroll', function () {


          if (lastscroll > 100) {
              $('header span').html('Essai gratuit pendant 3 mois');
          }
          if (lastscroll < 100) {
              $('header span').html('Connexion');

          }


          lastscroll = $(this).scrollTop();

          return;


      });
  }



  function scrollToSection() {
      $('h2.title, h4.title, h3.title').on('click', function () {


        //  var index = parseInt($(this).attr("id").replace('title-', '')) + 0;
        var index = 0;

          if ($(this).hasClass('fixed')) {
              var target = $(this).next();

              $('html, body').animate({
                  scrollTop: $(target).offset().top - (50 + (60 * index))
              })


          } else {

              $('html, body').animate({
                  scrollTop: $(this).offset().top - (50 + (60 * index))
              })
          }


      });
  }

  function goBack() {
      $('.go-back').on('click', function () {
          $('html, body').animate({
              scrollTop: 0
          }, 'slow');
      });
  }


  function bindResponsiveCallToAction() {
      $(window).resize(function() {
          if (this.resizeTO) {
              clearTimeout(this.resizeTO)
          }
          this.resizeTO = setTimeout(function() {
              $(this).trigger('resizeEnd')
          }, 500)
      });
      $(window).on('resizeEnd', function() {
          if ($(window).width() < 680) {
              $('[data-title="First"]').off('click');
              $('[data-title="First+"]').off('click');
              $('[data-title="Open"]').off('click');
              var pageName = window.location.pathname;
              if (pageName === "/")
                  pageName = 'accueil';
              pageName = pageName.replace('/', '');
              $('[data-title="First"]').on('click', function() {
                  window.open("https://horizonapps.ebp.com/Try/?code=10241001FAA", "_blank");
                  ga('send', 'event', {
                      eventCategory: 'Essai gratuit First page ' + pageName,
                      eventAction: 'click',
                      eventLabel: 'https://horizonapps.ebp.com/Try/?code=10241001FAA'
                  })
              });
              $('[data-title="First+"]').on('click', function() {
                  window.open("https://horizonapps.ebp.com/Try/?code=10242001FAC", "_blank");
                  ga('send', 'event', {
                      eventCategory: 'Essai gratuit First+ page ' + pageName,
                      eventAction: 'click',
                      eventLabel: 'https://horizonapps.ebp.com/Try/?code=10242001FAC'
                  })
              });
              $('[data-title="Open"]').on('click', function() {
                  window.open("https://horizonapps.ebp.com/Try/?code=10243001FAA", "_blank");
                  ga('send', 'event', {
                      eventCategory: 'Essai gratuit Open page ' + pageName,
                      eventAction: 'click',
                      eventLabel: 'https://horizonapps.ebp.com/Try/?code=10243001FAA'
                  })
              })
          } else {
              $('[data-title="First"]').off('click');
              $('[data-title="First+"]').off('click');
              $('[data-title="Open"]').off('click')
          }
      });
      $(window).trigger('resize')
  }


  function responsiveAjustment() {

      $(window).resize(function () {
          if (this.resizeTO) {
              clearTimeout(this.resizeTO);
          }
          this.resizeTO = setTimeout(function () {
              $(this).trigger('resizeEnd');
          }, 500);

      });

      $(window).on('resizeEnd', function () {
         if($(window).width() > 982){
           $('.swiper-pagination.top').show();
           $('.swiper-pagination.bottom').hide();
         }
         else{
           $('.swiper-pagination.top').hide();
           $('.swiper-pagination.bottom').show();
         }


      });

      $(window).trigger('resize')


  }


  function detectMobileDevice() {

      if (navigator.userAgent.match(/Mobile/)) {
          console.log(navigator.userAgent);
  		$(document).ready(function() {
            /* *** PREVENT OBJECTS FROM LOADING *** */
            $(".anim_capture img,.anim_capture embed,.anim_capture iframe").each(function() {
              var obj = $(this);
              obj.data("objsrc", obj.attr("src"));
              obj.hide().attr("src", "");
            });
          });
      }
  }

  function throttle(callback, delay) {
      var last;
      var timer;
      return function () {
          var context = this;
          var now = +new Date();
          var args = arguments;
          if (last && now < last + delay) {

              clearTimeout(timer);
              timer = setTimeout(function () {
                  last = now;
                  callback.apply(context, args);
              }, delay);
          } else {
              last = now;
              callback.apply(context, args);
          }
      };
  }

  function debounce(callback, delay) {
      var timer;
      return function () {
          var args = arguments;
          var context = this;
          clearTimeout(timer);
          timer = setTimeout(function () {
              callback.apply(context, args);
          }, delay);
      };
  }

  var current = 1;

  function sliderPromotionPrev(_this) {

          if (current > 1) {
              $(_this  + ' .sliderPromotion .item').css({
                  left: '-100%'
              })
              current--;
              $(_this  + ' .sliderPromotion .current').addClass('justClicked').removeClass('current').prev().addClass('current').animate({
                  left: 0
              }, 1000);
              setTimeout(function () {
                  $(_this  +' .justClicked').removeClass('justClicked');
              }, 1000);
          } else {
              $(_this  + ' .sliderPromotion .item').css({
                  left: '-100%'
              })
              $(_this  + ' .sliderPromotion .current').addClass('justClicked').removeClass('current');

              $(_this  + ' .sliderPromotion .item:last').addClass('current').animate({
                  left: 0
              }, 1000);

              setTimeout(function () {
                  $(_this  + ' .justClicked').removeClass('justClicked');
              }, 1000);
              current = $(_this  + ' .sliderPromotion .item').length;

          }



  }

  function sliderPromotionNext(_this) {

          if (current < $(_this  + ' .item').length) {
              current++;
              $(_this  + '  .item').css({
                  left: '100%'
              });
              $(_this  + ' .current').addClass('justClicked').removeClass('current').next().addClass('current').animate({
                  left: 0
              }, 1000);
              setTimeout(function () {
                  $(_this  + ' .justClicked').removeClass('justClicked');
              }, 1000);



          } else {

              $(_this  + ' .item').css({
                  left: '100%'
              })
              $(_this  + ' .current').addClass('justClicked').removeClass('current');
              $(_this + ' .item:first-child').addClass('current').animate({
                  left: 0
              }, 1000);
              setTimeout(function () {
                  $(_this  + ' .justClicked').removeClass('justClicked');
              }, 1000);
              current = 1;
          }




  }






  function radialEffect(_this, e){
      var parent, ink, d, x, y;

          parent = $(_this).parent();
          //create .ink element if it doesn't exist
          if (parent.find(".ink").length == 0)
              parent.prepend("<span class='ink'></span>");

          ink = parent.find(".ink");
          //incase of quick double clicks stop the previous animation
          ink.removeClass("animate");

          //set size of .ink

          //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
          d = Math.max(parent.outerWidth(), parent.outerHeight());
          ink.css({
              height: d,
              width: d
          });


          //get click coordinates
          //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
          x = e.pageX - parent.offset().left - ink.width() / 2;
          y = e.pageY - parent.offset().top - ink.height() / 2;

          //set the position and add class .animate
          ink.css({
              top: y + 'px',
              left: x + 'px'
          }).addClass("animate");

  }


  function loadCSS( href, before, media, callback ){

  	"use strict";
  	// Arguments explained:
  	// `href` is the URL for your CSS file.
  	// `before` optionally defines the element we'll use as a reference for injecting our <link>
  	// By default, `before` uses the first <script> element in the page.
  	// However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
  	// If so, pass a different reference element to the `before` argument and it'll insert before that instead
  	// note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
  	var ss = window.document.createElement( "link" );
  	var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
  	var sheets = window.document.styleSheets;
  	ss.rel = "stylesheet";
  	ss.href = href;
  	// temporarily, set media to something non-matching to ensure it'll fetch without blocking render
  	ss.media = "only x";
  	// DEPRECATED
  	if( callback ) {
  		ss.onload = callback;
  	}

  	// inject link
  	ref.parentNode.insertBefore( ss, ref );
  	// This function sets the link's media back to `all` so that the stylesheet applies once it loads
  	// It is designed to poll until document.styleSheets includes the new sheet.
  	ss.onloadcssdefined = function( cb ){
  		var defined;
  		for( var i = 0; i < sheets.length; i++ ){
  			if( sheets[ i ].href && sheets[ i ].href.indexOf( href ) > -1 ){
  				defined = true;
  			}
  		}
  		if( defined ){
  			cb();
  		}
  		else {
  			setTimeout(function() {
  				ss.onloadcssdefined( cb );
  			});
  		}
  	};
  	ss.onloadcssdefined(function() {
  		ss.media = media || "all";
  	});
  	return ss;
  }


  function $_GET(param) {
  	var vars = {};
  	window.location.href.replace( location.hash, '' ).replace(
  		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
  		function( m, key, value ) { // callback
  			vars[key] = value !== undefined ? value : '';
  		}
  	);

  	if ( param ) {
  		return vars[param] ? vars[param] : null;
  	}
  	return vars;
  }





  function menuTarget(_this, e){
    console.log(_this, e, 'ok')

    if(!dev){
      console.log(_this.props.data.href, _this.props.KEY )
      if(_this.props.data.href !== "#"){
  		window.open(_this.props.data.href,'_blank');
  	}

      else if(_this.props.KEY === null){
            e.preventDefault();

      }
      else{
        $('html, body').animate({scrollTop:0}, 0)
        if(_this.props.KEY === 0){
              e.preventDefault();
              window.location.pathname =  ""
        }

        if(_this.props.KEY === 1){
            e.preventDefault();
            window.location.pathname =  "entreprises"

        }
        if(_this.props.KEY === 2){
          e.preventDefault();
          window.location.pathname =  "experts"

        }

        if(_this.props.KEY === 3){
          e.preventDefault();
          window.location.pathname =  "faq"

        }

        if(_this.props.KEY === 4){
          e.preventDefault();
          window.location.pathname =  "a-propos"

        }

        if(_this.props.KEY === 5){
          e.preventDefault();
          window.location.pathname =  "contact"

        }

        if(_this.props.KEY === 6){
          e.preventDefault();
          window.location.pathname =  "jeu-concours"

        }



        if(_this.props.KEY === 7){
          e.preventDefault();
          window.location.pathname =  "en-savoir-plus"

        }

        if(_this.props.KEY === 8){
          e.preventDefault();
          window.location.pathname =  "mentions-legales"

        }



      }
    }
    else{
  	console.log(_this.props.data.href, _this.props.KEY )

      if(_this.props.data.href !== "#"){
  		window.open(_this.props.data.href,'_blank');
  	}

      else if(_this.props.KEY === null){
            e.preventDefault();

      }
      else{
        $('html, body').animate({scrollTop:0}, 0)
        if(_this.props.KEY === 0){
              e.preventDefault();
              window.location.pathname =  "horizon-dev/"
        }

        if(_this.props.KEY === 1){
            console.log(':)))))')
            e.preventDefault();
            window.location.pathname =  "horizon-dev/entreprises"

        }
        if(_this.props.KEY === 2){
          e.preventDefault();
          window.location.pathname =  "horizon-dev/experts"

        }

        if(_this.props.KEY === 3){
          e.preventDefault();
          window.location.pathname =  "horizon-dev/faq"

        }

        if(_this.props.KEY === 4){
          e.preventDefault();
          window.location.pathname =  "horizon-dev/a-propos"

        }

        if(_this.props.KEY === 5){
          console.log(':())')
          e.preventDefault();
          window.location.pathname =  "horizon-dev/contact"
          console.log(':)')

        }
        if(_this.props.KEY === 6){
          e.preventDefault();
          window.location.pathname =  "horizon-dev/jeu-concours"

        }



        if(_this.props.KEY === 7){
          e.preventDefault();
          window.location.pathname =  "horizon-dev/en-savoir-plus"

        }

        if(_this.props.KEY === 8){
          e.preventDefault();
          window.location.pathname =  "horizon-dev/mentions-legales"

        }

      }
    }



  }

  function onSubmit(token) {



    if( $("#captcha1").parents('form').find('input[name=activation]').val() === 'true'){

      var data = {
        nom:$("#captcha1").parents('form').find('input[name=nom]').val(),
        prenom: $("#captcha1").parents('form').find('input[name=prenom]').val(),
        societe: $("#captcha1").parents('form').find('input[name=societe]').val(),
        tel: $("#captcha1").parents('form').find('input[name=tel]').val(),
        email: $("#captcha1").parents('form').find('input[name=email]').val(),
        message: $("#captcha1").parents('form').find('[name=message]').val(),
        mailto: $("#captcha1").parents('form').find('input[name=mailto]').val(),
        solution: $("#captcha1").parents('form').find('[name=solution]').val(),
        'g-recaptcha-response': grecaptcha.getResponse()
      }
      var re = new RegExp("^([0|\+[0-9]{1,5})?([0-9]{10})$");

      var email = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

      if(!re.test(data.tel)){
        //this.setState({displayAlert: true});
        $('#captcha1').parents('form').find('.alert-tel').addClass('active')

      }
      if(!email.test(data.email)){
        $('#captcha1').parents('form').find('.alert-email').addClass('active');
        //console.log('::):):)');

      }
      if(!re.test(data.tel) || !email.test(data.email)){
        return
      }
      else{

        $.ajax({
          type: 'POST',
          url: 'sendEmail.php',
          data:data

        })
        .done(function(msg) {
          if(msg === 'send'){

            $('.alert').text("Votre message a bien été envoyé !");
            $('.alert').show();
            setTimeout(function(){
              $('.alert').hide();
            },1500)

          }
          else if(msg === 'notSend'){
            $('.alert').text("Désolé, une erreur c'est produite lors de l'envoi de votre email !");
            $('.alert').show();
            setTimeout(function(){
              $('.alert').hide();
            },1500)
          }

        })
        .fail(function() {
            $('.alert').text("Désolé, une erreur c'est produite lors de l'envoi de votre email !");
            $('.alert').show();
            setTimeout(function(){
              $('.alert').hide();
            },1500)
        });
      }


    }


    if( $("#captcha2").parents('form').find('input[name=activation]').val() === 'true'){

      var data = {
        nom:$("#captcha2").parents('form').find('input[name=nom]').val(),
        prenom: $("#captcha2").parents('form').find('input[name=prenom]').val(),
        societe: $("#captcha2").parents('form').find('input[name=societe]').val(),
        tel: $("#captcha2").parents('form').find('input[name=tel]').val(),
        email: $("#captcha2").parents('form').find('input[name=email]').val(),
        message: $("#captcha2").parents('form').find('[name=message]').val(),
        mailto: $("#captcha2").parents('form').find('input[name=mailto]').val(),
        solution: "undefined",
        'g-recaptcha-response': grecaptcha.getResponse()
      }

      var re = new RegExp("^([0|\+[0-9]{1,5})?([0-9]{10})$");

      var email = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

      if(!re.test(data.tel)){
        //this.setState({displayAlert: true});
        $('#captcha2').parents('form').find('.alert-tel').addClass('active')

        //console.log('::):):)');

      }
      if(!email.test(data.email)){
        $('#captcha2').parents('form').find('.alert-email').addClass('active');
        //console.log('::):):)');

      }
      if(!re.test(data.tel) || !email.test(data.email)){
        return
      }
      else{
        // Submit form via jQuery/AJAX
        $.ajax({
          type: 'POST',
          url: 'sendEmail.php',
          data: data
        })
        .done(function(msg) {
          if(msg === 'send'){
            $('.alert').text("Votre message a bien été envoyé !");
            $('.alert').show();
            setTimeout(function(){
              $('.alert').hide();
            },1500)
          }
          else if(msg === 'notSend'){
            $('.alert').text("Désolé, une erreur c'est produite lors de l'envoi de votre email !");
            $('.alert').show();
            setTimeout(function(){
              $('.alert').hide();
            },1500)
          }

        })
        .fail(function() {
          $('.alert').text("Désolé, une erreur c'est produite lors de l'envoi de votre email !");
          $('.alert').show();
          setTimeout(function(){
            $('.alert').hide();
          },1500)
        });
      }


    }


    if( $("#captcha3").parents('form').find('input[name=activation]').val() === 'true'){

      var data = {
        nom:$("#captcha3").parents('form').find('input[name=nom]').val(),
        prenom: $("#captcha3").parents('form').find('input[name=prenom]').val(),
        societe: $("#captcha3").parents('form').find('input[name=societe]').val(),
        tel: $("#captcha3").parents('form').find('input[name=tel]').val(),
        email: $("#captcha3").parents('form').find('input[name=email]').val(),
        message: $("#captcha3").parents('form').find('[name=message]').val(),
        mailto: $("#captcha3").parents('form').find('input[name=mailto]').val(),
        solution: "undefined",
        'g-recaptcha-response': grecaptcha.getResponse()
      }

      var re = new RegExp("^([0|\+[0-9]{1,5})?([0-9]{10})$");

      var email = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

      if(!re.test(data.tel)){
        //this.setState({displayAlert: true});
        $('#captcha3').parents('form').find('.alert-tel').addClass('active')

        //console.log('::):):)');

      }
      if(!email.test(data.email)){
        $('#captcha3').parents('form').find('.alert-email').addClass('active');
        //console.log('::):):)');

      }
      if(!re.test(data.tel) || !email.test(data.email)){
        return
      }
      else{
        // Submit form via jQuery/AJAX
        $.ajax({
          type: 'POST',
          url: 'sendQuestionnaireEmail.php',
          data: data
        })
        .done(function(msg) {
          if(msg === 'send'){
            $('.alert').text("Votre message a bien été envoyé !");
            $('.alert').show();
            setTimeout(function(){
              $('.alert').hide();
            },1500)
          }
          else if(msg === 'notSend'){
            $('.alert').text("Désolé, une erreur c'est produite lors de l'envoi de votre email !");
            $('.alert').show();
            setTimeout(function(){
              $('.alert').hide();
            },1500)
          }

        })
        .fail(function() {
          $('.alert').text("Désolé, une erreur c'est produite lors de l'envoi de votre email !");
          $('.alert').show();
          setTimeout(function(){
            $('.alert').hide();
          },1500)
        });
      }


    }

  }
}
