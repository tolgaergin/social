/*
Plugin Name: socialProfiles
Version: 1.0
Plugin URI: https://github.com/tolgaergin/social
Description: To list social accounts with 46 icons 
Author: Tolga Ergin
Author URI: http://tolgaergin.com
Designer: Gökhun Güneyhan
Designer URI: http://gokhunguneyhan.com
*/

/* PLUGIN USAGE */
/* 

$('#clickable').socialProfiles({
      email: 'example@example.com',
      facebook: 'tolgaergin',
      twitter: 'tolgaergin',
      pinterest: 'tolga',
      dribbble: 'bbb',
      skype: 'tolgaergin.com'
    });

*/

(function($){
  $.fn.extend({

    socialProfiles: function(options) {

      var defaults = {
        animation: 'launchpad', // launchpad, launchpadReverse, slideTop, slideRight, slideBottom, slideLeft, chain
        chainAnimationSpeed: 100, // fadetime for each social element - 1000 is one second
        blur: false,
        apple: null,
        myspace: null,
        blackberry: null,
        wikipedia: null,
        email: null,
        wordpress: null,
        deviantart: null,
        forrst: null,
        technorati: null,
        xbox: null,
        android: null,
        evernote: null,
        zerply: null,
        xing: null,
        vimeo: null,
        tumblr: null,
        facebook: null,
        digg: null,
        delicious: null,
        friendfeed: null,
        linkedin: null,
        paypal: null,
        behance: null,
        foursquare: null,
        windows: null,
        skype: null,
        twitter: null,
        posterous: null,
        lastfm: null,
        quora: null,
        youtube: null,
        pinterest: null,
        path: null,
        google: null,
        flud: null,
        stumbleupon: null,
        reddit: null,
        rss: null,
        scoutzie: null,
        blogger: null,
        grooveshark: null,
        aim: null,
        yahoo: null,
        flickr: null,
        dribbble: null,
        instagram: null
      };
      var options = $.extend(true,defaults, options);

      var beforeDivs = '<div class="arthref arthrefSocialProfiles"><div class="overlay '+options.animation+'"><div class="icon-container"><div class="centered"><ul>';
      var afterDivs = '</ul></div></div></div></div>';
      var listItem = '';

      if(options.apple) { listItem += '<li><a href="https://itunes.apple.com/'+options.apple+'" target="_blank" rel="nofollow" class="aApple"><span></span></a><span>Apple</span></li>'; }
      if(options.myspace) { listItem += '<li><a href="http://www.myspace.com/'+options.myspace+'" target="_blank" rel="nofollow" class="aMySpace"><span></span></a><span>MySpace</span></li>'; }
      if(options.blackberry) { listItem += '<li><a href="http://'+options.blackberry+'" target="_blank" rel="nofollow" class="aBlackBerry"><span></span></a><span>BlackBerry</span></li>'; }
      if(options.wikipedia) { listItem += '<li><a href="http://en.wikipedia.org/wiki/User:'+options.wikipedia+'" target="_blank" rel="nofollow" class="aWikipedia"><span></span></a><span>Wikipedia</span></li>'; }
      if(options.email) { listItem += '<li><a href="mailto:'+options.email+'" class="aEMail"><span></span></a><span>E-Mail</span></li>'; }
      if(options.wordpress) { listItem += '<li><a href="http://'+options.wordpress+'.wordpress.com" target="_blank" rel="nofollow" class="aWordpress"><span></span></a><span>Wordpress</span></li>'; }
      if(options.deviantart) { listItem += '<li><a href="http://'+options.deviantart+'.deviantart.com" target="_blank" rel="nofollow" class="aDeviantArt"><span></span></a><span>DeviantArt</span></li>'; }

      if(options.forrst) { listItem += '<li><a href="http://forrst.com/people/'+options.forrst+'" target="_blank" rel="nofollow" class="aForrst"><span></span></a><span>Forrst</span></li>'; }
      if(options.technorati) { listItem += '<li><a href="http://technorati.com/people/technorati/'+options.technorati+'" target="_blank" rel="nofollow" class="aTechnorati"><span></span></a><span>Technorati</span></li>'; }
      if(options.xbox) { listItem += '<li><a href="http://'+options.xbox+'" target="_blank" rel="nofollow" class="aXBox"><span></span></a><span>XBox</span></li>'; }
      if(options.android) { listItem += '<li><a href="https://play.google.com/store/apps/developer?id='+options.android+'" target="_blank" rel="nofollow" class="aAndroid"><span></span></a><span>Android</span></li>'; }
      if(options.evernote) { listItem += '<li><a href="http://'+options.evernote+'" target="_blank" rel="nofollow" class="aEvernote"><span></span></a><span>Evernote</span></li>'; }
      if(options.zerply) { listItem += '<li><a href="http://zerply.com/'+options.zerply+'" target="_blank" rel="nofollow" class="aZerply"><span></span></a><span>Zerply</span></li>'; }
      if(options.xing) { listItem += '<li><a href="http://www.xing.com/profile/'+options.xing+'" target="_blank" rel="nofollow" class="aXing"><span></span></a><span>Xing</span></li>'; }

      if(options.vimeo) { listItem += '<li><a href="http://vimeo.com/'+options.vimeo+'" target="_blank" rel="nofollow" class="aVimeo"><span></span></a><span>Vimeo</span></li>'; }
      if(options.tumblr) { listItem += '<li><a href="http://'+options.tumblr+'.tumblr.com" target="_blank" rel="nofollow" class="aTumblr"><span></span></a><span>Tumblr</span></li>'; }
      if(options.facebook) { listItem += '<li><a href="http://facebook.com/'+options.facebook+'" target="_blank" rel="nofollow" class="aFacebook"><span></span></a><span>Facebook</span></li>'; }
      if(options.digg) { listItem += '<li><a href="http://digg.com/users/'+options.digg+'" target="_blank" rel="nofollow" class="aDigg"><span></span></a><span>Digg</span></li>'; }
      if(options.delicious) { listItem += '<li><a href="http://delicious.com/'+options.delicious+'" target="_blank" rel="nofollow" class="aDelicious"><span></span></a><span>Delicious</span></li>'; }
      if(options.friendfeed) { listItem += '<li><a href="http://friendfeed.com/'+options.friendfeed+'" target="_blank" rel="nofollow" class="aFriendFeed"><span></span></a><span>FriendFeed</span></li>'; }
      if(options.linkedin) { listItem += '<li><a href="http://'+options.linkedin+'" target="_blank" rel="nofollow" class="aLinkedIn"><span></span></a><span>LinkedIn</span></li>'; }

      if(options.paypal) { listItem += '<li><a href="https://'+options.paypal+'" target="_blank" rel="nofollow" class="aPaypal"><span></span></a><span>Paypal</span></li>'; }
      if(options.behance) { listItem += '<li><a href="http://www.behance.net/'+options.behance+'" target="_blank" rel="nofollow" class="aBehance"><span></span></a><span>Behance</span></li>'; }
      if(options.foursquare) { listItem += '<li><a href="https://foursquare.com/'+options.foursquare+'" target="_blank" rel="nofollow" class="aFoursquare"><span></span></a><span>Foursquare</span></li>'; }
      if(options.windows) { listItem += '<li><a href="http://'+options.windows+'" target="_blank" rel="nofollow" class="aWindows"><span></span></a><span>Windows</span></li>'; }
      if(options.skype) { listItem += '<li><a href="skype:'+options.skype+'?add" target="_blank" rel="nofollow" class="aSkype"><span></span></a><span>Skype</span></li>'; }
      if(options.twitter) { listItem += '<li><a href="https://twitter.com/'+options.twitter+'" target="_blank" rel="nofollow" class="aTwitter"><span></span></a><span>Twitter</span></li>'; }
      if(options.posterous) { listItem += '<li><a href="http://'+options.posterous+'.posterous.com" target="_blank" rel="nofollow" class="aPosterous"><span></span></a><span>Posterous</span></li>'; }

      if(options.lastfm) { listItem += '<li><a href="http://www.lastfm.com.tr/user/'+options.lastfm+'" target="_blank" rel="nofollow" class="aLastFm"><span></span></a><span>Last.fm</span></li>'; }
      if(options.quora) { listItem += '<li><a href="http://www.quora.com/'+options.quora+'" target="_blank" rel="nofollow" class="aQuora"><span></span></a><span>Quora</span></li>'; }
      if(options.youtube) { listItem += '<li><a href="http://youtube.com/user/'+options.youtube+'" target="_blank" rel="nofollow" class="aYouTube"><span></span></a><span>YouTube</span></li>'; }
      if(options.pinterest) { listItem += '<li><a href="http://pinterest.com/'+options.pinterest+'" target="_blank" rel="nofollow" class="aPinterest"><span></span></a><span>Pinterest</span></li>'; }
      if(options.path) { listItem += '<li><a href="http://path.com/'+options.path+'" target="_blank" rel="nofollow" class="aPath"><span></span></a><span>Path</span></li>'; }
      if(options.google) { listItem += '<li><a href="https://plus.google.com/'+options.google+'" target="_blank" rel="nofollow" class="aGooglePlus"><span></span></a><span>Google+</span></li>'; }
      if(options.flud) { listItem += '<li><a href="http://'+options.flud+'" target="_blank" rel="nofollow" class="aFlud"><span></span></a><span>Flud</span></li>'; }

      if(options.stumbleupon) { listItem += '<li><a href="http://www.stumbleupon.com/stumbler/'+options.stumbleupon+'" target="_blank" rel="nofollow" class="aStumbleUpon"><span></span></a><span>StumbleUpon</span></li>'; }
      if(options.reddit) { listItem += '<li><a href="http://www.reddit.com/user/'+options.reddit+'" target="_blank" rel="nofollow" class="aReddit"><span></span></a><span>Reddit</span></li>'; }
      if(options.rss) { listItem += '<li><a href="http://feeds.feedburner.com/'+options.rss+'" target="_blank" rel="nofollow" class="aRSS"><span></span></a><span>RSS</span></li>'; }
      if(options.scoutzie) { listItem += '<li><a href="http://scoutzie.com/'+options.scoutzie+'" target="_blank" rel="nofollow" class="aScoutzie"><span></span></a><span>Scoutzie</span></li>'; }
      if(options.blogger) { listItem += '<li><a href="http://'+options.blogger+'.blogspot.com" target="_blank" rel="nofollow" class="aBlogger"><span></span></a><span>Blogger</span></li>'; }
      if(options.grooveshark) { listItem += '<li><a href="http://grooveshark.com/#!/'+options.grooveshark+'" target="_blank" rel="nofollow" class="aGrooveshark"><span></span></a><span>Grooveshark</span></li>'; }
      if(options.aim) { listItem += '<li><a href="http://'+options.aim+'" target="_blank" rel="nofollow" class="aAIM"><span></span></a><span>AIM</span></li>'; }

      if(options.yahoo) { listItem += '<li><a href="http://'+options.yahoo+'" target="_blank" rel="nofollow" class="aYahoo"><span></span></a><span>Yahoo</span></li>'; }
      if(options.flickr) { listItem += '<li><a href="http://flickr.com/'+options.flickr+'" target="_blank" rel="nofollow" class="aFlickr"><span></span></a><span>Flickr</span></li>'; }
      if(options.dribbble) { listItem += '<li><a href="http://dribbble.com/'+options.dribbble+'" target="_blank" rel="nofollow" class="aDribbble"><span></span></a><span>Dribbble</span></li>'; }
      if(options.instagram) { listItem += '<li><a href="http://instagram.com/'+options.instagram+'" target="_blank" rel="nofollow" class="aInstagram"><span></span></a><span>Instagram</span></li>'; }

      $('body').append(beforeDivs+listItem+afterDivs);

      return this.each(function() {
          var o = options;
          var obj = $(this);
          var body = $('body');
          var overlay = $('.arthrefSocialProfiles').find('.overlay');
          var ulElement = overlay.find('ul');
          var liElements = ulElement.find('li');

          if(o.blur) overlay.addClass('opaque');

          obj.click(function() {
            if(o.blur) body.children().not('.arthref, script').addClass('blurred');
            overlay.css('display','block');
            setTimeout(function(){
              overlay.addClass('active');
              ulElement.addClass('active');
              if(o.animation=='chain') chainAnimation(liElements,o.chainAnimationSpeed,'1');
            },0);
          });

          $( document ).on( "click touchstart", ".arthrefSocialProfiles .overlay", function( e ) {
            if(o.blur) body.children().removeClass('blurred');
            overlay.removeClass('active');
            ulElement.removeClass('active');
            setTimeout(function(){
              overlay.css('display','none');
            },300);
          });

          liElements.click(function(e) {
            e.stopPropagation();
          });

      });

      function chainAnimation(e,s,o) {
        var $fade = $(e);
        $fade.each(function( i ){
            $(this).delay(i * s).fadeTo(s,o);
        });
      };

    }

  });
})(jQuery);

