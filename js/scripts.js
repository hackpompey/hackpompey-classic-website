var feed = new Instafeed({
    get: 'tagged',
    tagName: 'hackpompey',
    clientId: '58792a7e6884416baaf67abccd071b92',
    resolution: 'low_resolution',
    limit: 14,
    sortBy: 'random',
    template: '<li class="instagram-item"><a href="{{link}}">' +
                  '<span class="instagram-item__caption">{{caption}}</span>' +
                  '<img class="instagram-item__image" src="{{image}}" />' +
              '</a></li>',
    success: function(data){
        var elem = document.querySelector('.instagram-feed');
        elem.className = elem.className + " instagram-feed--shown";
    }
});
feed.run();
