var feed = new Instafeed({
    get: 'tagged',
    tagName: 'hackpompey',
    clientId: '58792a7e6884416baaf67abccd071b92',
    resolution: 'low_resolution',
    template: '<li class="instagram-item"><a href="{{link}}">' +
                  '<span class="instagram-item__caption">{{caption}}</span>' +
                  '<img class="instagram-item__image" src="{{image}}" />' +
              '</a></li>'
});
feed.run();
