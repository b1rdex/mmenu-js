Mmenu.addons.navbars.close=function(e){var t=this,n=Mmenu.$('<a class="mm-btn mm-btn_close mm-navbar__btn" href="#" />').appendTo(e);this.bind("setPage:after",function(e){n[0].setAttribute("href","#"+e.id)}),this.bind("setPage:after:sr-text",function(){n.html(Mmenu.sr_text(t.i18n(t.conf.screenReader.text.closeMenu))),Mmenu.sr_aria(n,"owns",n[0].getAttribute("href").slice(1))})};