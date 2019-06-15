const timeline = new TimelineMax();

timeline.delay(3);
timeline.from('#borngreenTitleTwo', 1, {
    opacity: 0
});
timeline.to('#borngreenTitleOne', .3, {
    opacity: 0
});
