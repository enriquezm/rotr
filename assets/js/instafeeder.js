var feed = new Instafeed({
    get: 'user',
    userId: '427946466',
    accessToken: '427946466.1677ed0.39a4af5d853b45b3965c230929b132b3',
    limit: '4',
    template: '<a class="ig-item" href="{{link}}"><img class="ig-image" src="{{image}}" /></a>'
});
feed.run();
