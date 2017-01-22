var fileref=document.createElement("link")
fileref.setAttribute("rel", "stylesheet")
fileref.setAttribute("type", "text/css")
fileref.setAttribute("href", "style.css")

// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
  var srcElement = e.srcElement;

  if ($(srcElement).is('img.irc_mi') // Google Image search results
      || $(srcElement).is('a.image-list-link > img') // Imgur image search results
      || $(srcElement).is('img.product-image')// Amazon search results
      || $(srcElement).is('img.scaledImageFitWidth')// Facebook search results 1
      || $(srcElement).is('img.img')// Facebook search results 2
      || $(srcElement).is('img.JZUAbb')//google plus image search results
      || $(srcElement).is('img.res-image-media') //reddit search results 1
      || $(srcElement).is('img.res-media-max-size') //reddit search results 2
      || $(srcElement).is('img.res-media-zoomable') //reddit search results 3
      || $(srcElement).is('img.preview') //reddit search results 4


  //|| $(srcElement).is('video.video-stream.html5-main-video') //Youtube HTML5 Video
  )
  {

    if (prevDOM === srcElement) return;

    $('.facebook-link').remove();
    $('.twitter-link').remove();
    $('.gplus-link').remove();



    // // For NPE checking, we check safely. We need to remove the class name
    // // Since we will be styling the new one after.
    // if (prevDOM != null) {
    //   // prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
    // }
    //
    // // Add a visited class name to the element. So we can style it.
    // // srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
    //
    // srcElement.style.border = '1px solid red'

    // The current element is now the previous. So we can remove the class
    // during the next iteration.
    prevDOM = srcElement;



    var linkfb = document.createElement('a'); // create the link
    $(linkfb).addClass('facebook-link')
    linkfb.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u='.concat(srcElement.src));

    var imgfb = document.createElement('img');
    imgfb.setAttribute('src', chrome.extension.getURL('facebook.png'));
    imgfb.setAttribute('height', '32px');
    imgfb.setAttribute('width', '32px');

    var linkt = document.createElement('a'); // create the link
    $(linkt).addClass('twitter-link')
    linkt.setAttribute('href', 'http://twitter.com/intent/tweet?status='.concat(srcElement.src));

    var imgt = document.createElement('img');
    imgt.setAttribute('src', chrome.extension.getURL('twitter.png'));
    imgt.setAttribute('height', '32px');
    imgt.setAttribute('width', '32px');

    var linkgp = document.createElement('a'); // create the link
    $(linkgp).addClass('gplus-link')
    linkgp.setAttribute('href', 'https://plus.google.com/share?url='.concat(srcElement.src));

    var imggp = document.createElement('img');
    imggp.setAttribute('src', chrome.extension.getURL('gplus.png'));
    imggp.setAttribute('height', '32px');
    imggp.setAttribute('width', '32px');

    linkfb.appendChild(imgfb);
    linkt.appendChild(imgt);
    linkgp.appendChild(imggp);


    var top = $(srcElement).offset().top;
    var left = $(srcElement).offset().left;
    $(linkfb).css({
      position: 'absolute',
      top: top + 5,
      left: left + 5,
      zIndex: 999
    })
    $(linkt).css({
      position: 'absolute',
      top: top + 5,
      left: left + 45,
      zIndex: 999
    })
    $(linkgp).css({
      position: 'absolute',
      top: top + 5,
      left: left + 85,
      zIndex: 999
    })

    ;

    document.body.appendChild(linkfb);
    document.body.appendChild(linkt);
    document.body.appendChild(linkgp);


  }
}, false);

//<div>Icons made by
//<a href="http://www.freepik.com"
//title="Freepik">Freepik</a>
//from <a href="http://www.flaticon.com"
//title="Flaticon">www.flaticon.com</a>
//is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
//title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>