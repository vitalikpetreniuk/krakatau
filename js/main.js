/* jQuery lazy load plugin */
/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);
$(function() {
        $('.lazy').lazy({
            // callback
            //beforeLoad: function(element) {
                //console.log(element);
                // if(element.prop("tagName") == 'picture') {
                // 	console.log('is picture');
                // }
            //},
            afterLoad: function(element) {
                AOS.refresh();
            },

			// custom loaders
            // customLoaderName: function(element) {
             //    element.load();
            // },
        });
    });

var audHello;
var audLanguage;
var audAudience;

var html_lang = document.getElementsByTagName('html')[0].getAttribute('lang');

var mobileCountries = ['switzerland', 'saudi-arabia', 'usa', 'spain', 'australia', 'portugal', 'canada', 'tunisia', 'france', 'russia', 'japan', 'brazil', 'germany', 'mexico', 'great-britain', 'vietnam', 'korea', 'indonesia', 'italy', 'india'];
var mobileCountriesDots = '';

function audienceLang(lang, audience){

	if(html_lang === 'ru')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'Английский';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'Испанский';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'Хинди';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'Арабский';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'Русский';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'Французский';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'Португальский';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'Индонезийский';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'Китайский (диаспора)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'Немецкий';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'Японский';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'Итальянский';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'Вьетнамский';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'Корейский';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' М');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'en')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'English';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'Spanish';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'Hindi';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'Arabic';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'Russian';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'French';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'Portuguese';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'Indonesian';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'Chinese (diaspora)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'German';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'Japanese';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'Italian';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'Vietnamese';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'Korean';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' M');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'es')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'Inglés';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'Español';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'Hindi';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'Árabe';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'Ruso';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'Francés';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'Portugués';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'Indonesio';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'Chino (diáspora)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'Alemán';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'Japonés';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'Italiano';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'Vietnamita';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'Coreano';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' mill');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'fr')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'Anglais';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'Espagnol';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'Hindi';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'Arabe';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'Ruso';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'Français';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'Portugais';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'Indonésien';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'Chinois (diaspora)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'Alemán';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'Japonés';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'Italien';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'Vietnamien';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'Coréen';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' Mns');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'it')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'Inglese';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'Spagnolo';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'Hindi';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'Arabo';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'Russo';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'Francese';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'Portoghese';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'Indonesiano';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'Cinese (diaspora)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'Tedesco';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'Giapponese';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'Italiano';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'Vietnamita';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'Coreano';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' Mln');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'pt')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'Inglês';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'Espanhol';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'Hindi';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'Árabe';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'Russo';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'Francês';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'Português';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'Indonésio';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'Chinês (diáspora)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'Alemão';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'Japonês';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'Italiano';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'Vietnamita';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'Coreano';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' M');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'id')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'Bahasa Inggris';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'Bahasa Spanyol';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'Bahasa Hindi';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'Bahasa Arab';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'Bahasa Rusia';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'Bahasa Perancis';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'Bahasa Portugis';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'Bahasa Indonesia';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'Bahasa Cina (diaspora)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'Bahasa Jerman';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'Bahasa Jepang';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'Bahasa Italia';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'Bahasa Vietnam';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'Bahasa Korea';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' M');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'de')
	{
		console.log ('deutch works');

		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'Englisch';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'Spanisch';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'Hindi';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'Arabisch';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'Russisch';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'Französisch';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'Portugiesisch';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'Indonesisch';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'Chinesisch (diaspora)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'Deutsch';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'Japanisch';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'Italienisch';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'Vietnamesisch';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'Koreanisch';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' M');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'ar')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'الإنجليزية';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'الإسبانية';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'الهندية';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'العربية';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'الروسية';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'الفرنسية';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'البرتغالية';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'الأندونيسية';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'الصينية (الشتات)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'الألمانية';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'اليابانية';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'الإيطالية';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'الفيتنامية';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'الكورية';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' م');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'hi')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'अंग्रेज़ी';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'स्पेनिश';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'हिन्दी';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'अरबी';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'रशियन';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'फ्रेंच';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'पुर्तगाली';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'इन्डोनेशियाई';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'चाइनीज (प्रवासी)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'जर्मन';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'जापानी';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'इटालियन';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'वियतनामी';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'कोरियन';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').html(audAudience+'<span>मिलियन</span>');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'zh')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = '英語';
			audAudience = 8;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = '西班牙語';
			audAudience = 6;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = '印度語';
			audAudience = 5.4;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = '阿拉伯語';
			audAudience = 3.2;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = '俄語';
			audAudience = 2.7;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = '法語';
			audAudience = 2.5;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = '葡萄牙語';
			audAudience = 2.4;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = '印尼語';
			audAudience = 2;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = '漢語 (流散)';
			audAudience = 1.6;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = '德語';
			audAudience = 1.3;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = '日語';
			audAudience = 1.3;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = '意大利語';
			audAudience = .9;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = '越南語';
			audAudience = .8;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = '韓語';
			audAudience = .77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').html(audAudience+'<span>億</span>');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'ja')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = '英語';
			audAudience = 8;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'スペイン語';
			audAudience = 6;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'ヒンディー語';
			audAudience = 5.4;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'アラビア語';
			audAudience = 3.2;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'ロシア語';
			audAudience = 2.7;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'フランス語';
			audAudience = 2.5;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'ポルトガル語';
			audAudience = 2.4;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'インドネシア語';
			audAudience = 2;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = '中国語 (ディアスポラ)';
			audAudience = 1.6;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'ドイツ語';
			audAudience = 1.3;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = '日本語';
			audAudience = 1.3;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'イタリア語';
			audAudience = .9;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'ベトナム語';
			audAudience = .8;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = '韓国語';
			audAudience = .77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').html(audAudience+'<span>億</span>');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'ko')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = '영어';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = '스페인어';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = '힌디어';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = '아랍어';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = '러시아어';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = '프랑스어';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = '포르투갈어';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = '인도네시아어';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = '중국어 (디아스포라)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = '독일어';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = '일본어';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = '이탈리아어';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = '베트남어';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = '한국어';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' M');
		audience.find('.audience-lang span').text(audLanguage);
	}else if(html_lang === 'vi')
	{
		if(lang === 'Eng')
		{
			audHello = 'Hello';
			audLanguage = 'Tiếng Anh';
			audAudience = 800;
		}
		else if(lang === 'Spa')
		{
			audHello = 'Hola';
			audLanguage = 'Tiếng Tây Ban Nha';
			audAudience = 600;
		}
		else if(lang === 'Hin')
		{
			audHello = '';
			audLanguage = 'Tiếng Hindi';
			audAudience = 540;
		}
		else if(lang === 'Ara')
		{
			audHello = '';
			audLanguage = 'Tiếng Ả Rập';
			audAudience = 320;
		}
		else if(lang === 'Rus')
		{
			audHello = 'Привет';
			audLanguage = 'Tiếng Nga';
			audAudience = 270;
		}
		else if(lang === 'Fre')
		{
			audHello = 'Salut';
			audLanguage = 'Tiếng Pháp';
			audAudience = 250;
		}
		else if(lang === 'Por')
		{
			audHello = 'Oi';
			audLanguage = 'Tiếng Bồ Đào Nha';
			audAudience = 240;
		}
		else if(lang === 'Ind')
		{
			audHello = 'Hai';
			audLanguage = 'Tiếng Indonesia';
			audAudience = 200;
		}
		else if(lang === 'Chi')
		{
			audHello = '';
			audLanguage = 'Tiếng Trung Quốc (di cư)';
			audAudience = 160;
		}
		else if(lang === 'Deu')
		{
			audHello = 'Hallo';
			audLanguage = 'Tiếng Đức';
			audAudience = 130;
		}
		else if(lang === 'Jpn')
		{
			audHello = '';
			audLanguage = 'Tiếng Nhật';
			audAudience = 130;
		}
		else if(lang === 'Ita')
		{
			audHello = 'Ciao';
			audLanguage = 'Tiếng Ý';
			audAudience = 90;
		}
		else if(lang === 'Vie')
		{
			audHello = 'Chào';
			audLanguage = 'Tiếng Việt';
			audAudience = 80;
		}
		else if(lang === 'Kor')
		{
			audHello = '';
			audLanguage = 'Tiếng Hàn';
			audAudience = 77;
		}

		audience.find('.audience-map').removeClass('eng spa hin ara rus fre por ind chi deu jpn ita vie kor').addClass(lang.toLowerCase());
		audience.find('.audience-hello span').text(audHello);
		audience.find('.audience-quantity').text(audAudience+' TR');
		audience.find('.audience-lang span').text(audLanguage);
	}
}

function interactiveMap(country)
{
	var crm;
	var country_title;
	var crm_left = 0;
	var crm_right = 0;
	var crm_top = 0;

	if($(window).width() > 1023)
	{
		if(country === 'usa')
		{
			crm_left = '20vw';
			crm_top = '4vw';
		}else if(country === 'canada')
		{
			crm_left = '20vw';
			crm_top = '-2vw';
		}else if(country === 'mexico')
		{
			crm_left = '18vw';
			crm_top = '9vw';
		}else if(country === 'dominicana')
		{
			crm_left = '26vw';
			crm_top = '10vw';
		}else if(country === 'brazil')
		{
			crm_left = '31vw';
			crm_top = '19vw';
		}else if(country === 'venezuella')
		{
			crm_left = '27vw';
			crm_top = '13.5vw';
		}else if(country === 'colombia')
		{
			crm_left = '25vw';
			crm_top = '14.5vw';
		}else if(country === 'ecuador')
		{
			crm_left = '23vw';
			crm_top = '16vw';
		}else if(country === 'peru')
		{
			crm_left = '24.5vw';
			crm_top = '18vw';
		}else if(country === 'bolivia')
		{
			crm_left = '27.5vw';
			crm_top = '20.5vw';
		}else if(country === 'chile')
		{
			crm_left = '26.5vw';
			crm_top = '26vw';
		}else if(country === 'paraguay')
		{
			crm_left = '29.5vw';
			crm_top = '22.5vw';
		}else if(country === 'uruguay')
		{
			crm_left = '30vw';
			crm_top = '25vw';
		}else if(country === 'argentina')
		{
			crm_left = '28.5vw';
			crm_top = '26vw';
		}else if(country === 'mauritania')
		{
			crm_left = '42vw';
			crm_top = '9.5vw';
		}else if(country === 'morocco')
		{
			crm_left = '43vw';
			crm_top = '6vw';
		}else if(country === 'tunisia')
		{
			crm_left = '47vw';
			crm_top = '5.3vw';
		}else if(country === 'libya')
		{
			crm_left = '49.5vw';
			crm_top = '7.5vw';
		}else if(country === 'egypt')
		{
			crm_left = '52.5vw';
			crm_top = '8vw';
		}else if(country === 'angola')
		{
			crm_left = '49.3vw';
			crm_top = '19vw';
		}else if(country === 'south-africa')
		{
			crm_left = '51vw';
			crm_top = '24vw';
		}else if(country === 'mozambique')
		{
			crm_left = '53.5vw';
			crm_top = '21vw';
		}else if(country === 'somalia')
		{
			crm_left = '58vw';
			crm_top = '14vw';
		}else if(country === 'saudi-arabia')
		{
			crm_left = '56.5vw';
			crm_top = '8.5vw';
		}else if(country === 'yemen')
		{
			crm_left = '57.5vw';
			crm_top = '11vw';
		}else if(country === 'oman')
		{
			crm_left = '60vw';
			crm_top = '9vw';
		}else if(country === 'uae')
		{
			country_title = 'ОАЭ';
			crm = '1700';
			crm_left = '59vw';
			crm_top = '8vw';
		}else if(country === 'qatar')
		{
			crm_left = '59vw';
			crm_top = '8vw';
		}else if(country === 'bahrain')
		{
			crm_left = '59vw';
			crm_top = '8vw';
		}else if(country === 'kuwait')
		{
			crm_left = '57vw';
			crm_top = '7vw';
		}else if(country === 'iraq')
		{
			crm_left = '56vw';
			crm_top = '6vw';
		}else if(country === 'syria')
		{
			crm_left = '55vw';
			crm_top = '5vw';
		}else if(country === 'lebanon')
		{
			crm_left = '54vw';
			crm_top = '6vw';
		}else if(country === 'israel')
		{
			crm_left = '54vw';
			crm_top = '7vw';
		}else if(country === 'algeria')
		{
			crm_left = '45vw';
			crm_top = '7vw';
		}else if(country === 'spain')
		{
			crm_left = '44vw';
			crm_top = '4vw';
		}else if(country === 'portugal')
		{
			crm_left = '43vw';
			crm_top = '4vw';
		}else if(country === 'france')
		{
			crm_left = '45.5vw';
			crm_top = '2vw';
		}else if(country === 'ireland')
		{
			crm_left = '43vw';
			crm_top = '0vw';
		}else if(country === 'great-britain')
		{
			crm_left = '44.5vw';
			crm_top = '0vw';
		}else if(country === 'belgium')
		{
			crm_left = '46vw';
			crm_top = '1vw';
		}else if(country === 'netherlands')
		{
			crm_left = '46vw';
			crm_top = '1vw';
		}else if(country === 'denmark')
		{
			crm_left = '47vw';
			crm_top = '0vw';
		}else if(country === 'germany')
		{
			crm_left = '47.5vw';
			crm_top = '0.5vw';
		}else if(country === 'switzerland')
		{
			crm_left = '47vw';
			crm_top = '2vw';
		}else if(country === 'italy')
		{
			crm_left = '48vw';
			crm_top = '3vw';
		}else if(country === 'hungary')
		{
			crm_left = '50vw';
			crm_top = '2vw';
		}else if(country === 'slovakia')
		{
			crm_left = '50vw';
			crm_top = '1vw';
		}else if(country === 'belarus')
		{
			crm_left = '51.5vw';
			crm_top = '0vw';
		}else if(country === 'poland')
		{
			crm_left = '49.5vw';
			crm_top = '0vw';
		}else if(country === 'lithuania')
		{
			crm_left = '50vw';
			crm_top = '-0.5vw';
		}else if(country === 'latvia')
		{
			crm_left = '51vw';
			crm_top = '-1vw';
		}else if(country === 'estonia')
		{
			crm_left = '51vw';
			crm_top = '-1.5vw';
		}else if(country === 'ukraine')
		{
			crm_left = '52.5vw';
			crm_top = '1vw';
		}else if(country === 'moldova')
		{
			crm_left = '52vw';
			crm_top = '2vw';
		}else if(country === 'russia')
		{
			crm_left = '64vw';
			crm_top = '-2vw';
		}else if(country === 'georgia')
		{
			crm_left = '55vw';
			crm_top = '3vw';
		}else if(country === 'azerbaijan')
		{
			crm_left = '56.5vw';
			crm_top = '3.5vw';
		}else if(country === 'armenia')
		{
			crm_left = '56vw';
			crm_top = '4vw';
		}else if(country === 'kazakhstan')
		{
			crm_left = '61vw';
			crm_top = '1vw';
		}else if(country === 'turkmenistan')
		{
			crm_left = '60vw';
			crm_top = '4vw';
		}else if(country === 'uzbekistan')
		{
			crm_left = '60vw';
			crm_top = '3vw';
		}else if(country === 'kyrgyzstan')
		{
			crm_left = '63vw';
			crm_top = '3vw';
		}else if(country === 'tajikistan')
		{
			crm_left = '63vw';
			crm_top = '4vw';
		}else if(country === 'pakistan')
		{
			crm_left = '63vw';
			crm_top = '6.5vw';
		}else if(country === 'india')
		{
			crm_left = '65vw';
			crm_top = '8vw';
		}else if(country === 'sri-lanka')
		{
			crm_left = '67.5vw';
			crm_top = '14vw';
		}else if(country === 'nepal')
		{
			crm_left = '67vw';
			crm_top = '7vw';
		}else if(country === 'bangladesh')
		{
			crm_left = '69vw';
			crm_top = '9vw';
		}else if(country === 'bhutan')
		{
			crm_left = '68vw';
			crm_top = '7vw';
		}else if(country === 'malaysia')
		{
			crm_left = '72vw';
			crm_top = '14vw';
		}else if(country === 'japan')
		{
			crm_left = '80vw';
			crm_top = '4vw';
		}else if(country === 'korea')
		{
			crm_left = '77vw';
			crm_top = '4vw';
		}else if(country === 'thailand')
		{
			crm_left = '72vw';
			crm_top = '11vw';
		}else if(country === 'laos')
		{
			crm_left = '72vw';
			crm_top = '10vw';
		}else if(country === 'vietnam')
		{
			crm_left = '73vw';
			crm_top = '10vw';
		}else if(country === 'cambodia')
		{
			crm_left = '73vw';
			crm_top = '12vw';
		}else if(country === 'indonesia')
		{
			crm_left = '76vw';
			crm_top = '16vw';
		}else if(country === 'australia')
		{
			crm_left = '80vw';
			crm_top = '23vw';
		}
	}else if($(window).width() < 767)
	{
		if(country === 'switzerland')
		{
			crm_left = '47vw';
			crm_right = 'auto';
			crm_top = '2vw';
		}else if(country === 'saudi-arabia')
		{
			crm_right = '29vw'
			crm_left = 'auto';
			crm_top = '10.5vw';
		}else if(country === 'usa')
		{
			crm_right = 'auto';
			crm_left = '15vw';
			crm_top = '5vw';
		}else if(country === 'spain')
		{
			crm_right = 'auto';
			crm_left = '44vw';
			crm_top = '4vw';
		}else if(country === 'australia')
		{
			crm_right = '1vw';
			crm_left = 'auto';
			crm_top = '28vw';
		}else if(country === 'portugal')
		{
			crm_right = 'auto';
			crm_left = '43vw';
			crm_top = '4vw';
		}else if(country === 'canada')
		{
			crm_right = 'auto';
			crm_left = '19vw';
			crm_top = '-2vw';
		}else if(country === 'tunisia')
		{
			crm_right = 'auto';
			crm_left = '49vw';
			crm_top = '5.3vw';
		}else if(country === 'france')
		{
			crm_right = 'auto';
			crm_left = '46.5vw';
			crm_top = '2vw';
		}else if(country === 'russia')
		{
			crm_right = '18vw';
			crm_left = 'auto';
			crm_top = '-2vw';
		}else if(country === 'japan')
		{
			crm_right = '2.5vw';
			crm_left = 'auto';
			crm_top = '7vw';
		}else if(country === 'brazil')
		{
			crm_right = 'auto';
			crm_left = '29vw';
			crm_top = '23vw';
		}else if(country === 'germany')
		{
			crm_right = 'auto';
			crm_left = '48.5vw';
			crm_top = '0.5vw';
		}else if(country === 'mexico')
		{
			crm_right = 'auto';
			crm_left = '13vw';
			crm_top = '11vw';
		}else if(country === 'great-britain')
		{
			crm_right = 'auto';
			crm_left = '44.5vw';
			crm_top = '0vw';
		}else if(country === 'vietnam')
		{
			crm_right = '10vw'
			crm_left = 'auto';
			crm_top = '14vw';
		}else if(country === 'korea')
		{
			crm_right = '3vw';
			crm_left = 'auto';
			crm_top = '7vw';
		}else if(country === 'indonesia')
		{
			crm_right = '5vw';
			crm_left = 'auto';
			crm_top = '20vw';
		}else if(country === 'italy')
		{
			crm_right = 'auto';
			crm_left = '50vw';
			crm_top = '4vw';
		}else if(country === 'india')
		{
			crm_right = '18vw';
			crm_left = 'auto';
			crm_top = '12vw';
		}
	}



	if(html_lang === 'ru')
	{
		if(country === 'usa')
		{
			country_title = 'США';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'Канада';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'Мексика';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'Доминиканская республика';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'Бразилия';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'Венесуелла';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'Колумбия';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'Эквадор';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'Перу';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'Боливия';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'Чили';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'Парагвай';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'Уругвай';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'Аргентина';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'Мавритания';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'Марокко';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'Тунис';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'Ливия';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'Египет';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'Ангола';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'Южная Африка';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'Мозамбик';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'Сомали';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'Саудовская Аравия';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'Йемен';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'Оман';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'ОАЭ';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'Катар';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'Бахрейн';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'Кувейт';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'Ирак';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'Сирия';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'Ливан';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'Иордания';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'Алжир';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'Испания';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'Португалия';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'Франция';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'Ирландия';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'Англия';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'Бельгия';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'Нидерланды';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'Дания';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'Германия';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'Швейцария';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'Италия';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'Венгрия';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'Словакия';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'Белоруссия';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'Польша';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'Литва';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'Латвия';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'Эстония';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'Украина';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'Молдавия';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'Россия';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'Грузия';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'Азербайджан';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'Армения';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'Казахстан';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'Туркмения';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'Узбекистан';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'Киргизия';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'Таджикистан';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'Пакистан';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'Индия';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'Шри Ланка';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'Непал';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'Бангладеш';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'Бутан';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'Малайзия';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'Япония';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'Южная Корея';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'Тайланд';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'Лаос';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'Вьетнам';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'Камбоджа';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'Индонезия';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'Австралия';
			crm = '4400';
		}
	}else if(html_lang === 'en')
	{
		if(country === 'usa')
		{
			country_title = 'USA';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'Canada';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'Mexico';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'Dominicana';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'Brazil';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'Venezuella';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'Colombia';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'Ecuador';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'Peru';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'Bolivia';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'Chile';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'Paraguay';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'Uruguay';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'Argentina';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'Mauritania';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'Morocco';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'Tunisia';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'Libya';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'Egypt';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'Angola';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'South Africa';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'Mozambique';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'Somalia';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'Saudi Arabia';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'Yemen';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'Oman';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'UAE';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'Qatar';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'Bahrain';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'Kuwait';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'Iraq';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'Syria';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'Lebanon';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'Jordan';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'Algeria';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'Spain';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'Portugal';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'France';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'Ireland';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'Great Britain';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'Belgium';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'Netherlands';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'Denmark';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'Germany';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'Switzerland';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'Italy';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'Hungary';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'Slovakia';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'Belarus';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'Poland';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'Lithuania';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'Latvia';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'Estonia';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'Ukraine';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'Moldova';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'Russia';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'Georgia';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'Azerbaijan';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'Armenia';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'Kazakhstan';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'Turkmenistan';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'Uzbekistan';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'Kyrgyztan';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'Tajikistan';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'Pakistan';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'India';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'Sri Lanka';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'Nepal';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'Bangladesh';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'Bhutan';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'Malaysia';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'Japan';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'South Korea';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'Thailand';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'Laos';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'Vietnam';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'Cambodia';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'Indonesia';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'Australia';
			crm = '4400';
		}
	}else if(html_lang === 'es')
	{
		if(country === 'usa')
		{
			country_title = 'Estados Unidos de America';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'Canadá';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'México';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'Dominicana';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'Brasil';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'Venezuela';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'Colombia';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'Ecuador';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'Perú';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'Bolivia';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'Chile';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'Paraguay';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'Uruguay';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'Argentina';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'Mauritania';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'Marruecos';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'Túnez';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'Libia';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'Egipto';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'Angola';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'Sudáfrica';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'Mozambique';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'Somalia';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'Arabia Saudita';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'Yemen';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'Omán';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'EAU';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'Qatar';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'Bahrain';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'Kuwait';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'Irak';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'Siria';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'Lebanon';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'Jordania';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'Argelia';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'España';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'Portugal';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'Francia';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'Irlanda';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'Gran Bretaña';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'Bélgica';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'Países Bajos';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'Dinamarca';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'Alemania';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'Suiza';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'Italia';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'Hungría';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'Eslovaquia';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'Bielorrusia';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'Polonia';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'Lituania';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'Letonia';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'Estonia';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'Ucrania';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'Moldavia';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'Rusia';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'Georgia';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'Azerbaiyán';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'Armenia';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'Kazajstán';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'Turkmenistán';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'Uzbekistán';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'Kirguistán';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'Tayikistán';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'Pakistán';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'India';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'Sri Lanka';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'Nepal';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'Bangladesh';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'Bután';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'Malasia';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'Japón';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'Corea del Sur';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'Tailandia';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'Laos';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'Vietnam';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'Camboya';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'Indonesia';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'Australia';
			crm = '4400';
		}
	}else if(html_lang === 'fr')
	{
		if(country === 'usa')
		{
			country_title = "États-Unis d'Amérique";
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'Canada';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'Mexique';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'République Dominicaine';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'Brésil';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'Venezuela';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'Colombie';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'Equateur';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'Pérou';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'Bolivie';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'Chili';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'Paraguay';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'Uruguay';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'Argentine';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'Mauritanie';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'Maroc';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'Tunisie';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'Libye';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'Egypte';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'Angola';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'Afrique du Sud';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'Mozambique';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'Somalie';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'Arabie Saoudite';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'Yémen';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'Oman';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'Émirats arabes unis';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'Qatar';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'Bahreïn';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'Koweit';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'Irak';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'Syrie';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'Liban';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'Jordanie';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'Algérie';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'Espagne';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'le Portugal';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'France';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'Irlande';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'Grande Bretagne';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'Belgique';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'Pays-Bas';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'Denmark';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'Danemark';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'Suisse';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'Italie';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'Hongrie';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'Slovaquie';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'Biélorussie';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'Pologne';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'Lituanie';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'Lettonie';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'Estonie';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'Ukraine';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'Moldavie';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'Russie';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'Géorgie';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'Azerbaïdjan';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'Arménie';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'Kazakhstan';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'Turkménistan';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'Ouzbékistan';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'Kirghizistan';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'Tadjikistan';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'Pakistan';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'Inde';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'Sri Lanka';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'Népal';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'Bangladesh';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'Bhoutan';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'Malaisie';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'Japon';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'Corée du Sud';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'Thaïlande';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'Laos';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'Vietnam';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'Cambodge';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'Indonésie';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'Australie';
			crm = '4400';
		}
	}else if(html_lang === 'it')
	{
		if(country === 'usa')
		{
			country_title = "Stati Uniti d'America";
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'Canada';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'Messico';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'Repubblica Dominicana';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'Brasile';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'Venezuela';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'Colombia';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'Ecuador';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'Perù';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'Bolivia';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'Cile';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'Paraguay';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'Uruguay';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'Argentina';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'Mauritania';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'Marocco';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'Tunisia';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'Libia';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'Egitto';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'Angola';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'Sud Africa';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'Mozambico';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'Somalia';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'Arabia Saudita';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'Yemen';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'Oman';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'Emirati Arabi Uniti';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'Qatar';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'Bahrain';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'Kuwait';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'Iraq';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'Siria';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'Libano';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'Giordania';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'Algeria';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'Spagna';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'Portogallo';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'Francia';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'Irlanda';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'Gran Bretagna';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'Belgio';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'Olanda';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'Danimarca';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'Germania';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'Svizzera';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'Italia';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'Ungheria';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'Slovacchia';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'Bielorussia';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'Polonia';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'Lituania';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'Lettonia';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'Estonia';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'Ucraina';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'Moldavia';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'Russia';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'Georgia';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'Azerbaijan';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'Armenia';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'Kazakistan';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'Turkmenistan';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'Uzbekistan';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'Kirghizistan';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'Tajikistan';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'Pakistan';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'India';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'Sri Lanka';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'Nepal';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'Bangladesh';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'Bhutan';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'Malesia';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'Giappone';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'Corea del Sud';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'Tailandia';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'Laos';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'Vietnam';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'Cambogia';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'Indonesia';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'Australia';
			crm = '4400';
		}
	}else if(html_lang === 'pt')
	{
		if(country === 'usa')
		{
			country_title = 'Estados Unidos da America';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'Canadá';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'México';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'República Dominicana';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'Brasil';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'Venezuela';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'Colômbia';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'Ecuador';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'Peru';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'Bolivia';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'Chile';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'Paraguay';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'Uruguay';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'Argentina';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'Mauritânia';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'Marrocos';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'Tunisia';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'Líbia';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'Egito';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'Angola';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'África do Sul';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'Moçambique';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'Somália';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'Arábia Saudita';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'Iémen';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'Omã';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'UAE';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'Catar';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'Barém';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'Kuwait';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'Iraque';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'Siria';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'Líbano';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'Jordânia';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'Argélia';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'Espanha';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'Portugal';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'França';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'Irlanda';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'Grã Bretanha';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'Bélgica';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'Países Baixos';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'Dinamarca';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'Alemanha';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'Suíça';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'Itália';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'Hungria';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'Eslováquia';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'Bélgica';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'Polônia';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'Lituânia';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'Letônia';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'Estônia';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'Ucrânia';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'Moldávia';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'Rússia';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'Geórgia';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'Azerbaijão';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'Armênia';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'Cazaquistão';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'Turquemenistão';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'Usbequistão';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'Quirguistão';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'Tajiquistão';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'Paquistão';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'India';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'Sri Lanka';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'Nepal';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'Bangladesh';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'Butão';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'Malásia';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'Japão';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'Coreia do Sul';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'Tailândia';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'Laos';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'Vietnã';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'Camboja';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'Indonésia';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'Austrália';
			crm = '4400';
		}
	}else if(html_lang === 'id')
	{
		if(country === 'usa')
		{
			country_title = 'Amerika Serikat';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'Kanada';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'Meksiko';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'Republik Dominika';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'Brazil';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'Venezuela';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'Kolombia';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'Ekuador';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'Peru';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'Bolivia';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'Chili';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'Paraguay';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'Uruguay';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'Argentina';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'Mauritania';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'Maroko';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'Tunisia';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'Libya';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'Mesir';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'Angola';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'Afrika Selatan';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'Mozambik';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'Somalia';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'Arab Saudi';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'Yaman';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'Oman';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'UAE';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'Qatar';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'Bahrain';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'Kuwait';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'Irak';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'Siria';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'Lebanon';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'Yordania';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'Aljazair';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'Spanyol';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'Portugal';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'Perancis';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'Irlandia';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'Inggris Raya';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'Belgium';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'Belanda';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'Denmark';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'Jerman';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'Swiss';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'Italia';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'Hungaria';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'Slovakia';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'Belarus';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'Polandia';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'Lithuania';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'Latvia';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'Estonia';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'Ukraina';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'Moldavia';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'Rusia';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'Georgia';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'Azerbaijan';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'Armenia';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'Kazakhstan';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'Turkmenistan';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'Uzbekistan';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'Kirgistan';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'Tajikistan';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'Pakistan';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'India';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'Srilanka';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'Nepal';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'Bangladesh';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'Bhutan';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'Malaysia';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'Jepang';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'Korea Selatan';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'Thailand';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'Laos';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'Vietnam';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'Kamboja';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'Indonesia';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'Australia';
			crm = '4400';
		}
	}else if(html_lang === 'de')
	{
		if(country === 'usa')
		{
			country_title = 'Vereinigte Staaten von Amerika';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'Kanada';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'Mexiko';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'Dominikanische Republik';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'Brasilien';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'Venezuela';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'Kolumbien';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'Ecuador';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'Peru';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'Bolivien';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'Chile';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'Paraguay';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'Uruguay';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'Argentinien';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'Mauretanien';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'Marokko';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'Tunesien';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'Libyen';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'Ägypten';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'Angola';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'Südafrika';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'Mosambik';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'Somalia';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'Saudi-Arabien';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'Jemen';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'Oman';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'Vereinigte Arabische Emirate';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'Katar';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'Bahrain';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'Kuwait';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'Irak';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'Syrien';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'Libanon';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'Jordanien';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'Algerien';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'Spanien';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'Portugal';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'Frankreich';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'Irland';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'Großbritannien';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'Belgien';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'Niederlande';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'Dänemark';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'Deutschland';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'Schweiz';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'Italien';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'Ungarn';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'Slowakei';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'Weißrussland';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'Polen';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'Litauen';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'Lettland';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'Estland';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'Ukraine';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'Moldau';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'Russland';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'Georgia';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'Aserbaidschan';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'Armenien';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'Kasachstan';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'Turkmenistan';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'Usbekistan';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'Kirgisistan';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'Tadschikistan';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'Pakistan';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'Indien';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'Sri Lanka';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'Nepal';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'Bangladesch';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'Bhutan';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'Malaysia';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'Japan';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'Südkorea';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'Thailand';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'Laos';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'Vietnam';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'Kambodscha';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'Indonesien';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'Australien';
			crm = '4400';
		}
	}else if(html_lang === 'ar')
	{
		if(country === 'usa')
		{
			country_title = 'الولايات المتحدة الامريكية';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'كندا';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'المكسيك';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'جمهورية الدومنيكان';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'البرازيل';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'فنزويلا';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'كولومبيا';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'إكوادور';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'بيرو';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'بوليفيا';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'تشيلي';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'باراغواي';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'أوروغواي';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'الأرجنتين';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'موريتانيا';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'المغرب';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'تونس';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'ليبيا';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'مصر';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'أنغولا';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'جنوب أفريقيا';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'موزمبيق';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'الصومال';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'المملكة العربية السعودية';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'اليمن';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'سلطنة عمان';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'الإمارات العربية المتحدة';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'دولة قطر';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'البحرين';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'الكويت';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'العراق';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'سيريا';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'لبنان';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'الأردن';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'الجزائر';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'إسبانيا';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'البرتغال';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'فرنسا';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'أيرلندا';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'ريطانيا العظمى';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'بلجيكا';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'هولندا';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'الدنمارك';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'ألمانيا';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'سويسرا';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'إيطاليا';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'هنغاريا';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'سلوفاكيا';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'روسيا البيضاء';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'بولندا';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'ليتوانيا';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'لاتفيا';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'إستونيا';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'أوكرانيا';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'مولدافيا';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'روسيا';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'جورجيا';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'أذربيجان';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'أرمينيا';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'كازاخستان';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'تركمانستان';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'أوزبكستان';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'قيرغيزستان';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'طاجيكستان';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'باكستان';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'الهند';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'سيريلانكا';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'نيبال';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'بنغلاديش';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'بوتان';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'ماليزيا';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'اليابان';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'كوريا الجنوبية';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'تايلاند';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'لاوس';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'فيتنام';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'كمبوديا';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'إندونيسيا';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'أستراليا';
			crm = '4400';
		}
	}else if(html_lang === 'hi')
	{
		if(country === 'usa')
		{
			country_title = 'संयुक्त राज्य अमरीका';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'कनाडा';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'मेक्सिको';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'डोमिनिकन गणराज्य';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'ब्राज़िल';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'वेनेजुएला';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'कोलम्बिया';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'इकुआडोर';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'पेरू';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'बोलीविया';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'चिली';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'पैराग्वे';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'उरुग्वे';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'अर्जेंटीना';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'मॉरिटानिया';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'मोरक्को';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'ट्यूनीशिया';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'लीबिया';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'इजिप्ट';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'अंगोला';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'दक्षिण अफ्रीका';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'मोजाम्बिक';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'सोमालिया';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'सऊदी अरब';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'यमन';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'ओमान';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'संयुक्त अरब अमीरात';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'कतर';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'बहरीन';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'कुवैट';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'इराक';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'सिरिआ';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'लेबनान';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'जॉर्डन';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'एलजीरिया';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'स्पेन';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'पुर्तगाल';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'फ्रांस';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'आयरलैंड';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'ग्रेट ब्रिटेन';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'बेल्जियम';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'नीदरलैंड';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'डेनमार्क';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'जर्मनी';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'स्विट्जरलैंड';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'इटली';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'हंगरी';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'स्लोवाकिया';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'बेलारूस';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'पोलैंड';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'लिथुआनिया';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'लातविया';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'एस्तोनिया';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'यूक्रेन';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'मोलदाविया';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'रूस';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'जॉर्जिया';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'आज़रबाइजान';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'आर्मीनिया';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'कज़ाखस्तान';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'तुर्कमेनिस्तान';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'उज़्बेकिस्तान';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'किर्गिज़स्तान';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'तजाकिस्तान';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'पाकिस्तान';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'भारत';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'श्री लंका';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'नेपाल';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'बांग्लादेश';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'बुटान';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'मलेशिया';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'जापान';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'जापान';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'थाईलैंड';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'लाओस';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'वियतनाम';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'कंबोडिया';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'इंडोनेशिया';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'ऑस्ट्रेलिया';
			crm = '4400';
		}
	}else if(html_lang === 'zh')
	{
		if(country === 'usa')
		{
			country_title = '美國';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = '加拿大';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = '墨西哥';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = '多明尼加共和國';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = '巴西';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = '委內瑞拉';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = '哥倫比亞';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = '厄瓜多爾';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = '秘魯';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = '玻利維亞';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = '智利';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = '巴拉圭';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = '烏拉圭';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = '阿根廷';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = '毛里塔尼亞';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = '摩洛哥';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = '突尼斯';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = '利比亞';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = '埃及';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = '安哥拉';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = '南非';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = '莫桑比克';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = '索馬里';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = '沙特阿拉伯';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = '也門';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = '阿曼';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = '阿聯酋';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = '卡塔爾';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = '巴林';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = '科威特';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = '伊拉克';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = '西里亞';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = '黎巴嫩';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = '約旦';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = '阿爾及利亞';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = '西班牙';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = '葡萄牙';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = '法國';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = '愛爾蘭';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = '大不列顛';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = '比利時';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = '荷蘭';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = '丹麥';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = '德國';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = '瑞士';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = '意大利';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = '匈牙利';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = '斯洛伐克';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = '白俄羅斯';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = '波蘭';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = '立陶宛';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = '拉脫維亞';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = '愛沙尼亞';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = '烏克蘭';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = '摩爾達維亞';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = '俄國';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = '佐治亞州';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = '阿塞拜疆';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = '亞美尼亞';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = '哈薩克斯坦';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = '土庫曼斯坦';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = '烏茲別克斯坦';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = '吉爾吉斯斯坦';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = '塔吉克斯坦';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = '巴基斯坦';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = '印度';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = '斯里蘭卡';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = '尼泊爾';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = '孟加拉國';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = '不丹';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = '馬來西亞';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = '日本';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = '南韓';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = '泰國';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = '老撾';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = '越南';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = '柬埔寨';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = '印度尼西亞';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = '澳大利亞';
			crm = '4400';
		}
	}else if(html_lang === 'ja')
	{
		if(country === 'usa')
		{
			country_title = 'アメリカ';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'カナダ';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'メキシコ';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'ドミニカ';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'ブラジル';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'ベネズエラ';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'コロンビア';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'エクアドル';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'ペルー';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'ボリビア';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'チリ';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'パラグアイ';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'ウルグアイ';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'アルゼンチン';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'モーリタニア';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'モロッコ';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'チュニジア';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'リビア';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'エジプト';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'アンゴラ';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = '南アフリカ';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'モザンビーク';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'ソマリア';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'サウジアラビア';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'イエメン';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'オマーン';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'アラブ首長国連邦';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'カタール';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'バーレーン';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'クウェート';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'イラク';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'シリア';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'レバノン';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'ヨルダン';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'アルジェリア';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'スペイン';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'ポルトガル';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'フランス';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'アイルランド';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'イギリス';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'ベルギー';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'オランダ';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'デンマーク';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'ドイツ';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'スイス';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'イタリア';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'ハンガリー';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'スロバキア';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'ベラルーシ';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'ポーランド';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'リトアニア';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'ラトビア';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'エストニア';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'ウクライナ';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'モルダビア';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'ロシア';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'ジョージア';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'アゼルバイジャン';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'アルメニア';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'カザフスタン';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'トルクメニスタン';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'ウズベキスタン';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'キルギス';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'タジキスタン';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'パキスタン';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'インド';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'スリランカ';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'ネパール';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'バングラデシュ';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'ブータン';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'マレーシア';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = '日本';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = '韓国';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'タイ';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'ラオス';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'ベトナム';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'カンボジア';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'インドネシア';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'オーストラリア';
			crm = '4400';
		}
	}else if(html_lang === 'ko')
	{
		if(country === 'usa')
		{
			country_title = '미국';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = '캐나다';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = '멕시코';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = '도미니카 공화국';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = '브라질';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = '베네수엘라';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = '콜롬비아';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = '에콰도르';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = '페루';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = '볼리비아';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = '칠레';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = '파라과이';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = '우루과이';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = '아르헨티나';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = '모리타니';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = '모로코';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = '튀니지';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = '리비아';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = '이집트';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = '앙골라';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = '남아프리카공화국';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = '모잠비크';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = '소말리아';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = '사우디아라비아';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = '예멘';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = '오만';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = '아랍에미리트';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = '카타르';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = '바레인';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = '쿠웨이트';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = '이라크';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = '시리아';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = '리비아';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = '요르단';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = '알제리';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = '스페인';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = '포르투갈';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = '프랑스';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = '아일랜드';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = '영국';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = '벨기에';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = '네덜란드';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = '덴마크';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = '독일';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = '스위스';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = '이탈리아';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = '헝가리';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = '슬로바키아';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = '벨라루스';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = '폴란드';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = '리투아니아';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = '라트비아';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = '에스토니아';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = '우크라이나';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = '몰다비아';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = '러시아';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = '조지아';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = '아제르바이잔';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = '아르메니아';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = '카자흐스탄';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = '투르크메니스탄';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = '우즈베키스탄';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = '키르기스스탄';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = '타지키스탄';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = '파키스탄';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = '인도';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = '스리랑카';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = '네팔';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = '방글라데시';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = '부탄';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = '말레이시아';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = '일본';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = '대한민국';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = '태국';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = '라오스';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = '베트남';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = '캄보디아';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = '인도네시아';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = '호주';
			crm = '4400';
		}
	}else if(html_lang === 'vi')
	{
		if(country === 'usa')
		{
			country_title = 'Nước Mỹ.';
			crm = '5500';
		}else if(country === 'canada')
		{
			country_title = 'Canada';
			crm = '4200';
		}else if(country === 'mexico')
		{
			country_title = 'Mexico';
			crm = '900';
		}else if(country === 'dominicana')
		{
			country_title = 'Cộng hòa Dominican';
			crm = '1000';
		}else if(country === 'brazil')
		{
			country_title = 'Brazil';
			crm = '900';
		}else if(country === 'venezuella')
		{
			country_title = 'Venezuela';
			crm = '300';
		}else if(country === 'colombia')
		{
			country_title = 'Colombia';
			crm = '1000';
		}else if(country === 'ecuador')
		{
			country_title = 'Ecuador';
			crm = '1000';
		}else if(country === 'peru')
		{
			country_title = 'Peru';
			crm = '750';
		}else if(country === 'bolivia')
		{
			country_title = 'Bôlivia';
			crm = '600';
		}else if(country === 'chile')
		{
			country_title = 'Chile';
			crm = '1100';
		}else if(country === 'paraguay')
		{
			country_title = 'Paraguay';
			crm = '550';
		}else if(country === 'uruguay')
		{
			country_title = 'Uruguay';
			crm = '1200';
		}else if(country === 'argentina')
		{
			country_title = 'Argentina';
			crm = '470';
		}else if(country === 'mauritania')
		{
			country_title = 'Mauritania';
			crm = '570';
		}else if(country === 'morocco')
		{
			country_title = 'Ma-rốc';
			crm = '660';
		}else if(country === 'tunisia')
		{
			country_title = 'Tunisia';
			crm = '1400';
		}else if(country === 'libya')
		{
			country_title = 'Libya';
			crm = '400';
		}else if(country === 'egypt')
		{
			country_title = 'Ai Cập';
			crm = '400';
		}else if(country === 'angola')
		{
			country_title = 'Ăng-gô';
			crm = '570';
		}else if(country === 'south-africa')
		{
			country_title = 'Nam Phi';
			crm = '2000';
		}else if(country === 'mozambique')
		{
			country_title = 'Mozambique';
			crm = '1000';
		}else if(country === 'somalia')
		{
			country_title = 'Somalia';
			crm = '580';
		}else if(country === 'saudi-arabia')
		{
			country_title = 'Ả Rập Saudi';
			crm = '1700';
		}else if(country === 'yemen')
		{
			country_title = 'Yemen';
			crm = '900';
		}else if(country === 'oman')
		{
			country_title = 'Ô-man';
			crm = '1200';
		}else if(country === 'uae')
		{
			country_title = 'UAE';
			crm = '1700';
		}else if(country === 'qatar')
		{
			country_title = 'Qatar';
			crm = '1400';
		}else if(country === 'bahrain')
		{
			country_title = 'Bahrain';
			crm = '1000';
		}else if(country === 'kuwait')
		{
			country_title = 'Cô-oét';
			crm = '1200';
		}else if(country === 'iraq')
		{
			country_title = 'Irac';
			crm = '280';
		}else if(country === 'syria')
		{
			country_title = 'Siria';
			crm = '550';
		}else if(country === 'lebanon')
		{
			country_title = 'Lebanon';
			crm = '630';
		}else if(country === 'israel')
		{
			country_title = 'Jordan';
			crm = '830';
		}else if(country === 'algeria')
		{
			country_title = 'Algeria';
			crm = '350';
		}else if(country === 'spain')
		{
			country_title = 'Tây Ban Nha';
			crm = '2100';
		}else if(country === 'portugal')
		{
			country_title = 'Bồ Đào Nha';
			crm = '2000';
		}else if(country === 'france')
		{
			country_title = 'Pháp';
			crm = '4100';
		}else if(country === 'ireland')
		{
			country_title = 'Ai-len';
			crm = '2000';
		}else if(country === 'great-britain')
		{
			country_title = 'Nước Anh';
			crm = '3600';
		}else if(country === 'belgium')
		{
			country_title = 'nước Bỉ';
			crm = '4200';
		}else if(country === 'netherlands')
		{
			country_title = 'nước Hà Lan';
			crm = '3200';
		}else if(country === 'denmark')
		{
			country_title = 'Đan mạch';
			crm = '4500';
		}else if(country === 'germany')
		{
			country_title = 'nước Đức';
			crm = '3800';
		}else if(country === 'switzerland')
		{
			country_title = 'Thụy sĩ';
			crm = '4700';
		}else if(country === 'italy')
		{
			country_title = 'Nước Ý';
			crm = '2700';
		}else if(country === 'hungary')
		{
			country_title = 'Hungary';
			crm = '2100';
		}else if(country === 'slovakia')
		{
			country_title = 'Slovakia';
			crm = '2700';
		}else if(country === 'belarus')
		{
			country_title = 'Bêlarut';
			crm = '470';
		}else if(country === 'poland')
		{
			country_title = 'Ba Lan';
			crm = '1900';
		}else if(country === 'lithuania')
		{
			country_title = 'Litva';
			crm = '1300';
		}else if(country === 'latvia')
		{
			country_title = 'Latvia';
			crm = '1300';
		}else if(country === 'estonia')
		{
			country_title = 'Estonia';
			crm = '1800';
		}else if(country === 'ukraine')
		{
			country_title = 'Ukraine';
			crm = '570';
		}else if(country === 'moldova')
		{
			country_title = 'Moldavia';
			crm = '600';
		}else if(country === 'russia')
		{
			country_title = 'Nga';
			crm = '1200';
		}else if(country === 'georgia')
		{
			country_title = 'Georgia';
			crm = '500';
		}else if(country === 'azerbaijan')
		{
			country_title = 'Ailen';
			crm = '370';
		}else if(country === 'armenia')
		{
			country_title = 'Armenia';
			crm = '340';
		}else if(country === 'kazakhstan')
		{
			country_title = 'Kazakhstan';
			crm = '430';
		}else if(country === 'turkmenistan')
		{
			country_title = 'Turkmenistan';
			crm = '290';
		}else if(country === 'uzbekistan')
		{
			country_title = 'Uzbekistan';
			crm = '400';
		}else if(country === 'kyrgyzstan')
		{
			country_title = 'Kít-sinh-gơ';
			crm = '350';
		}else if(country === 'tajikistan')
		{
			country_title = 'Tajikistan';
			crm = '650';
		}else if(country === 'pakistan')
		{
			country_title = 'Pakistan';
			crm = '380';
		}else if(country === 'india')
		{
			country_title = 'Ấn Độ';
			crm = '500';
		}else if(country === 'sri-lanka')
		{
			country_title = 'Sri Lanka';
			crm = '530';
		}else if(country === 'nepal')
		{
			country_title = 'Nepal';
			crm = '490';
		}else if(country === 'bangladesh')
		{
			country_title = 'Bangladesh';
			crm = '620';
		}else if(country === 'bhutan')
		{
			country_title = 'Bhutan';
			crm = '500';
		}else if(country === 'malaysia')
		{
			country_title = 'Malaysia';
			crm = '1100';
		}else if(country === 'japan')
		{
			country_title = 'Nhật Bản';
			crm = '4000';
		}else if(country === 'korea')
		{
			country_title = 'Nam Triều Tiên';
			crm = '3000';
		}else if(country === 'thailand')
		{
			country_title = 'nước Thái Lan';
			crm = '740';
		}else if(country === 'laos')
		{
			country_title = 'Nước Lào';
			crm = '470';
		}else if(country === 'vietnam')
		{
			country_title = 'Việt Nam';
			crm = '700';
		}else if(country === 'cambodia')
		{
			country_title = 'Campuchia';
			crm = '600';
		}else if(country === 'indonesia')
		{
			country_title = 'Indonesia';
			crm = '600';
		}else if(country === 'australia')
		{
			country_title = 'Châu Úc';
			crm = '4400';
		}
	}
	
	$('.welcome-map .crm-content .crm-country').text(country_title);
	$('.welcome-map .crm-content .crm-price span').text(crm);


	if($(window).width() > 1023)
	{
		$('.crm-info').css('left', crm_left);
		$('.crm-info').css('top', crm_top);
	}else
	{
		$('.crm-info').css('left', crm_left);
		$('.crm-info').css('top', crm_top);
		$('.crm-info').css('right', crm_right);
	}
}

$(function(){

	var emailE = 'krakatau.pro';
  	emailE = ('hello' + '@' + emailE);

  	$('.footer-email').append('<a href="mailto:'+emailE+'">'+emailE+'</a>');

	var audience = $('section#audience');

	$('.kr-header__trigger').on('click tap', function(){
		if($(this).hasClass('opened'))
		{
			$(this).removeClass('opened');
			$('.kr-header__mobilemenu').slideUp();
		}else
		{
			$(this).addClass('opened');
			$('.kr-header__mobilemenu').slideDown();
		}
	});
	$('.kr-header__lang span').on('click tap', function(){
		$(this).parent().toggleClass('active');
	});

	if($(window).width()<768)
    {
		$('.about-content__box .box-header').on('click tap', function(){
			$(this).parent().find('.box-content').slideToggle();
		});
    }

	if(audience.length)
	{

		audience.find('.audience-choose ul li:nth-child(1)').addClass('active');
		audienceLang('Eng', $('section#audience'));

		audience.find('.audience-choose ul li').each(function(){
			$(this).attr('data-offset-left', $(this).offset().left);
		});

		audience.find('.audience-choose ul li').on('click tap', function(){
			audience.find('.audience-choose ul li').removeClass('active');
			$(this).addClass('active');

			if($(window).width()<415)
			{
				scrollLeft = $(this).attr('data-offset-left') - ($(window).width()/2) + 37.5;
					$('.audience-choose').animate({scrollLeft:scrollLeft}, 400);
			}

			audienceLang($(this).text(), $('section#audience'));
		});
	}

	$('.infographics-slider').owlCarousel({
	    loop:true,
	    nav:true,
		lazyLoad:true,
	    dots: true,
	    items:1
	});

	$('.kr-section_contact-us .social-links ul li').on('click', function(){
		$('.kr-section_contact-us .social-links ul li').removeClass('active');
		$(this).addClass('active');

		$('.kr-section_contact-us .social-inputs input').removeClass('active');
		$('.kr-section_contact-us .social-inputs input').eq($(this).index()).addClass('active');
	});
	$('.kr-request .social-links ul li').on('click', function(){
		$('.kr-request .social-links ul li').removeClass('active');
		$(this).addClass('active');

		$('.kr-request .social-inputs input').removeClass('active');
		$('.kr-request .social-inputs input').eq($(this).index()).addClass('active');
	});



	var scrollPos = 0;
	$(window).on('load resize scroll', function () {
        var wHeight = $(window).height();
        $('.kr-section').each(function () {
            if ($(window).scrollTop() + (wHeight - 400) >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('.kr-header__mainmenu li').removeClass('active');
                $('.kr-header__mobilemenu li').removeClass('active');

                $('.kr-header__mainmenu li a[href="#' + id + '"]').parent().addClass('active');
                $('.kr-header__mobilemenu li a[href="#' + id + '"]').parent().addClass('active');

            }else if($(this).hasClass('services') && $(window).scrollTop() + (wHeight - 200) < $(this).offset().top){
                $('.kr-header__mainmenu li').removeClass('active');
                $('.kr-header__mobilemenu li').removeClass('active');
            }
        });

        var section_about_top = $('.welcome-map').offset().top - 50;


		var st = $(this).scrollTop();

        if($(this).scrollTop() > section_about_top - $('.kr-header').outerHeight() && st > scrollPos)
        {
			if($(window).width()>1279)
			{
				$('.kr-languages').css('top', 56);
			}else if($(window).width()>767 && $(window).width()<1280)
			{
				$('.kr-languages').css('top', 50);
			}else
			{
				$('.kr-languages').css('top', 44);
			}
        }else if($(this).scrollTop() > section_about_top - $('.kr-header').outerHeight() && st <= scrollPos)
        {
			if($(window).width()>1279)
			{
				$('.kr-languages').css('top', 95);
			}else if($(window).width()>767 && $(window).width()<1280)
			{
				$('.kr-languages').css('top', 89);
			}else
			{
				$('.kr-languages').css('top', 77);
			}
        }else
        {
			if($(window).width()>1279)
			{
				$('.kr-languages').css('top', 95);
			}else if($(window).width()>767 && $(window).width()<1280)
			{
				$('.kr-languages').css('top', 89);
			}else
			{
				$('.kr-languages').css('top', 77);
			}
        }
		scrollPos = st;
    });

    $('.kr-header__mainmenu a').on('click', function (e) {
    	e.preventDefault();
        var aId = $(this).attr('href');
        var aTag = $(aId);
        $('html,body').animate({scrollTop: aTag.offset().top - 100},'slow');
        return false;
    });
    $('.kr-header__mobilemenu a').on('click', function (e) {
    	e.preventDefault();

    	$('.kr-header__trigger').removeClass('opened');
		$('.kr-header__mobilemenu').slideUp('200');

		$this = $(this);
		setTimeout(function(){
	        var aId = $this.attr('href');
	        var aTag = $(aId);
	        $('html,body').animate({scrollTop: aTag.offset().top - 77},'slow');
	        return false;
		}, 200);
    });



	if($(window).width()>1279)
	{
		document.addEventListener('mousemove', parallax);
	}


    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;

        let _depth2_lr = `${(_mouseX - _w) * 0.0085}`;
        let _depth2_tb = `${(_mouseY - _h) * 0.0085}`;

        let _depth3_lr = `${(_mouseX - _w) * 0.019}`;
        let _depth3_tb = `${(_mouseY - _h) * 0.019}`;

        let _depth4_lr = `${(_mouseX - _w) * 0.04}`;
        let _depth4_tb = `${(_mouseY - _h) * 0.04}`;

        let x2 = `${_depth2_lr}`;
        let y2 = `${_depth2_tb}`;

        let x3 = `${_depth3_lr}`;
        let y3 = `${_depth3_tb}`;

       	let x4 = `${_depth4_lr}`;
        let y4 = `${_depth4_tb}`;

        $('.audience-quantity').css('margin-left', x2-0);
        $('.audience-quantity').css('margin-top', y2-0);

        $('.audience-lang span').css('margin-left', x4-0);
        $('.audience-lang span').css('top', y4-0);


        $('.audience-hello').css('transition', 'none');
        $('.audience-hello').css('transform', 'translate('+x3+'px ,'+y3+'px)');
    }

    if($('.profit-calculator').length)
    {
	    var custom_values = [1000000, 5000000, 10000000, 15000000, 20000000, 25000000, 30000000, 35000000, 40000000, 45000000, 50000000, 55000000, 60000000, 65000000, 70000000, 75000000, 80000000, 85000000, 90000000, 95000000, 100000000];
	    var my_from = custom_values.indexOf(1000000);
	    var my_to = custom_values.indexOf(100000000);
	    var profit_factor;

	    $('#profit-input').ionRangeSlider({
	        grid: false,
	        prettify_enabled: true,
	        values: custom_values,
	        from: my_from,
	        to: my_to,
	        step: 5000000,
	        onChange: function (data) {
	        	total_profit = 0;
	    		profit_factor = parseInt($('.irs-single').text().split(' ').join(''))/1000000;

	    		$('.pc-languages ul li').each(function(){
		    		lang_profit = parseInt($(this).find('.pc-lang-price').attr('data-price'));
		    		$(this).find('.pc-lang-price span').text((lang_profit*profit_factor).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));


		    		total_profit += lang_profit*profit_factor;
		    	});
		    	$('.profit-calculator .pc-subtotal span:nth-child(2) span').text(total_profit.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	        }
	    });

	    let my_range = $('#profit-input').data("ionRangeSlider");

	    $('.range-left').on('click', function(){
	    	if(parseInt($('.irs-single').text().split(' ').join('')) > 1000000 && parseInt($('.irs-single').text().split(' ').join('')) !== 5000000)
	    	{
	    		var range_left_num = parseInt($('.irs-single').text().split(' ').join('')) - 5000000;

	    		my_range.update({
			        from: custom_values.indexOf(range_left_num)
			    });

	    	}else if(parseInt($('.irs-single').text().split(' ').join('')) > 1000000 && parseInt($('.irs-single').text().split(' ').join('')) === 5000000)
	    	{
	    		my_range.update({
			        from: custom_values.indexOf(1000000)
			    });
	    	}

	    	total_profit = 0;
			profit_factor = parseInt($('.irs-single').text().split(' ').join(''))/1000000;

			$('.pc-languages ul li').each(function(){
	    		lang_profit = parseInt($(this).find('.pc-lang-price').attr('data-price'));
	    		$(this).find('.pc-lang-price span').text((lang_profit*profit_factor).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));


	    		total_profit += lang_profit*profit_factor;
	    	});
	    	$('.profit-calculator .pc-subtotal span:nth-child(2) span').text(total_profit.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	    });
	    $('.range-right').on('click', function(){
	    	if(parseInt($('.irs-single').text().split(' ').join('')) < 100000000 && parseInt($('.irs-single').text().split(' ').join('')) !== 1000000)
	    	{
	    		var range_left_num = parseInt($('.irs-single').text().split(' ').join('')) + 5000000;

	    		my_range.update({
			        from: custom_values.indexOf(range_left_num)
			    });

	    	}else if(parseInt($('.irs-single').text().split(' ').join('')) < 100000000 && parseInt($('.irs-single').text().split(' ').join('')) === 1000000)
	    	{
	    		my_range.update({
			        from: custom_values.indexOf(5000000)
			    });
	    	}

	    	total_profit = 0;
			profit_factor = parseInt($('.irs-single').text().split(' ').join(''))/1000000;

			$('.pc-languages ul li').each(function(){
	    		lang_profit = parseInt($(this).find('.pc-lang-price').attr('data-price'));
	    		$(this).find('.pc-lang-price span').text((lang_profit*profit_factor).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));


	    		total_profit += lang_profit*profit_factor;
	    	});
	    	$('.profit-calculator .pc-subtotal span:nth-child(2) span').text(total_profit.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	    });


    	var total_profit = 0;
    	var lang_profit;

		// profit_factor = parseInt($('.irs-single').text().split(' ').join(''))/1000000;

    	$('.pc-languages ul li').each(function(){
    		lang_profit = parseInt($(this).find('.pc-lang-price').attr('data-price'));
    		$(this).find('.pc-lang-price span').text(lang_profit.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));


    		total_profit += lang_profit;
    	});

    	$('.profit-calculator .pc-subtotal span:nth-child(2) span').text(total_profit.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    }

    $('.kr-header__nav-contact button').on('click', function(){
    	$('body').addClass('request-onscreen');
    	$('.kr-request:not(.request-thanks)').addClass('show');
    });

    $('.audience-info button').on('click', function(){
    	$('body').addClass('request-onscreen');
		$('.kr-request:not(.request-thanks)').addClass('show');
    });
    $('.profit-calculator .pc-request button').on('click', function(){
    	$('body').addClass('request-onscreen');
		$('.kr-request:not(.request-thanks)').addClass('show');
    });

	$('.contact-us form input[type="submit"]').on('click', function(e){
		// e.preventDefault();
		//$('.kr-request:not(.request-thanks)').removeClass('show');
		//$('.kr-request.request-thanks').addClass('show');

		setTimeout(function(){
			$('.kr-request.request-thanks').removeClass('show');
			$('body').removeClass('request-onscreen');
		}, 2000);
	});

    $(document).mouseup(function(e)
	{
	    var container = $('.kr-request-content');

	    // if the target of the click isn't the container nor a descendant of the container
	    if (!container.is(e.target) && container.has(e.target).length === 0)
	    {
	    	$('body').removeClass('request-onscreen');
	        container.parent().removeClass('show');
	    }
	});

	var c_active;

	$('.map-nav .mn-next').on('click', function(){
		c_active = $('.map-dots ul li.active').index();
		if(c_active+1 < mobileCountries.length)
		{
			c_active++;
		}else
		{
			c_active = 0;
		}

		if(c_active === 1 || c_active === 4 || c_active === 9 || c_active === 10 || c_active === 15 || c_active === 16 || c_active === 17 || c_active === 19)
		{
			$('.crm-info').addClass('inverted');
		}else
		{
			$('.crm-info').removeClass('inverted');
		}

		$('.map-dots ul li').removeClass('active');
		$('.map-dots ul li').eq(c_active).addClass('active');
		interactiveMap(mobileCountries[c_active]);

		$('.welcome-map svg > g > g > g > g').css('opacity', 0);
		$('.welcome-map svg > g > g > g > g.'+mobileCountries[c_active]).css('opacity', 1);
	});

	$('.map-nav .mn-prev').on('click', function(){
		c_active = $('.map-dots ul li.active').index();
		if(c_active === 0)
		{
			c_active = mobileCountries.length-1;
		}else
		{
			c_active--;
		}

		if(c_active === 1 || c_active === 4 || c_active === 9 || c_active === 10 || c_active === 15 || c_active === 16 || c_active === 17 || c_active === 19)
		{
			$('.crm-info').addClass('inverted');
		}else
		{
			$('.crm-info').removeClass('inverted');
		}

		$('.map-dots ul li').removeClass('active');
		$('.map-dots ul li').eq(c_active).addClass('active');
		interactiveMap(mobileCountries[c_active]);

		$('.welcome-map svg > g > g > g > g').css('opacity', 0);
		$('.welcome-map svg > g > g > g > g.'+mobileCountries[c_active]).css('opacity', 1);
	});

	$('.map-dots ul li').on('click', function(){
		c_active = $(this).index();

		if(c_active === 4 || c_active === 10 || c_active === 15 || c_active === 16 || c_active === 17 || c_active === 19)
		{
			$('.crm-info').addClass('inverted');
		}else
		{
			$('.crm-info').removeClass('inverted');
		}

		$('.map-dots ul li').removeClass('active');
		$(this).addClass('active');
		interactiveMap(mobileCountries[c_active]);

		$('.welcome-map svg > g > g > g > g').css('opacity', 0);
		$('.welcome-map svg > g > g > g > g.'+mobileCountries[c_active]).css('opacity', 1);
	});

	if($(window).width()<1024)
	{
		$('.kr-languages ul li').on('click', function(e){
			e.preventDefault();
			$('body').addClass('request-onscreen');
			$('.kr-lang-popup').addClass('show');
		});

		$(document).mouseup(function(e)
		{
			var container = $('.kr-lang-popup-content');

			// if the target of the click isn't the container nor a descendant of the container
			if (!container.is(e.target) && container.has(e.target).length === 0)
			{
				$('body').removeClass('request-onscreen');
				container.parent().removeClass('show');
			}
		});
	}


	$(window).on('load', function(){

		setTimeout(function (){
			$('.youtube').each(function (){
				var iframe = document.createElement( "iframe" );
				// iframe.setAttribute( "allow", "autoplay" );
				iframe.setAttribute( "frameborder", "0" );
				iframe.setAttribute( "allowfullscreen", "" );
				iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ $(this).data("embed")+"?rel=0&showinfo=0&autoplay=1" );
				this.innerHTML = "";
				$(this).append( iframe );
			})

			$.ajax({
				url: location.origin + '/img/image-php/image1.php',
				cache: true,
				success: function (response) {
					$('#insertimage1').html(response).addClass('on-screen');
					$('.welcome-map').addClass('on-screen');

					if($(window).width() > 1023)
					{
						$('.welcome-map svg > g > g > g > g.usa').css('opacity', 1);
						interactiveMap('usa');
					}else
					{
						$('.welcome-map svg > g > g > g > g.switzerland').css('opacity', 1);
						interactiveMap('switzerland');
					}
					$('.welcome-map .crm-info').addClass('active');

					var im_country;
					$('body').on('mouseenter', '.welcome-map svg > g > g > g > g', function(){
						$('.welcome-map svg > g > g > g > g').css('opacity', 0);

						$(this).css('opacity', 1);
						im_country = $(this).attr('class');
						interactiveMap(im_country);
						$('.welcome-map .crm-info').addClass('active');

					});

					if($(window).width()<1024)
					{
						for(var mc = 0;mc<mobileCountries.length;mc++)
						{
							mobileCountriesDots += '<li data-country="'+mobileCountries[mc]+'"></li>';
						}

						$('.map-dots ul').append(mobileCountriesDots);
						$('.map-dots ul li:nth-child(1)').addClass('active');

						interactiveMap(mobileCountries[0]);
						$('.welcome-map svg > g > g > g > g.'+mobileCountries[0]).css('opacity', 1);
						$('.welcome-map .crm-info').addClass('active');
					}
				}
			})

			$.ajax({
				url: location.origin + '/audience.php',
				cache: true,
				context: document.body
			}).done(function(data) {
				$('#audience .container').prepend(data);

				if(audience.length)
				{
					audience.find('.audience-choose ul li:nth-child(1)').addClass('active');
					audienceLang('Eng', $('section#audience'));

					audience.find('.audience-choose ul li').each(function(){
						$(this).attr('data-offset-left', $(this).offset().left);
					});

					audience.find('.audience-choose ul li').on('click tap', function(){
						audience.find('.audience-choose ul li').removeClass('active');
						$(this).addClass('active');

						if($(window).width()<415)
						{
							scrollLeft = $(this).attr('data-offset-left') - ($(window).width()/2) + 37.5;
							$('.audience-choose').animate({scrollLeft:scrollLeft}, 400);
						}

						audienceLang($(this).text(), $('section#audience'));
					});
				}
			});
		}, 1000)

	});
});
( function() {
	var youtube = document.querySelectorAll( ".youtube" );
	for (var i = 0; i < youtube.length; i++) {
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		var image = new Image();
		image.src = source;
		image.addEventListener( "load", function() {
			youtube[ i ].appendChild( image );
		}( i ) );

		// youtube[i].addEventListener( "click", function() {
		// 	var iframe = document.createElement( "iframe" );
		// 	iframe.setAttribute( "allow", "autoplay" );
		// 	iframe.setAttribute( "frameborder", "0" );
		// 	iframe.setAttribute( "allowfullscreen", "" );
		// 	iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
		// 	this.innerHTML = "";
		// 	this.appendChild( iframe );
		// } );
	};
} )();