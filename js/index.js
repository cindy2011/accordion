/*******************
 *
 *  @特色页面
 * ************************/
(function(window, undefined) {
    function transnav(opt) {
        this.Oli;
        this.tsmain;
        this.prev = 0;
        this.init();
    }
    transnav.prototype = {
        orgli: parseInt(parseInt(document.documentElement.style.fontSize) * (130 / 100)),
        org2li: parseInt(parseInt(document.documentElement.style.fontSize) * (65 / 100)),
        //开始函数
        init: function() {
            this.RenderDom();
            this.animation();
        },
        // 渲染DOM
        RenderDom: function() {
            var tsmain = document.getElementById('tsmain');
            var Oli = tsmain.getElementsByTagName('li');
            this.Oli = Oli;
            this.tsmain = tsmain;
            for (var i = 0; i < Oli.length; i++) {
                if (Oli[i].id == 'tsnow') { Oli[i].style.width = this.orgli + 'px'; } else { Oli[i].style.left = this.org2li * (i - 1) + this.orgli + 'px'; }
            }
            tsmain.style.width = (this.org2li * (Oli.length - 1) + this.orgli) + "px";
        },
        animation: function() {
            var Oli = this.Oli;
            var tsmain = this.tsmain;
            var prev = this.prev;
            var lock = 1;
            var thatorgli = this.orgli;
            var thatorg2li = this.org2li;
            //点击事件
            for (var i = 0; i < Oli.length; i++) {
                Oli[i].index = i;
                Oli[i].onclick = function() {
                    clearInterval(startPlay);
                    var num = this.index;
                    autoPlay(num);
                    startPlay = setInterval(function() {
                        num++;
                        if (num > $("#tsmain li").length - 1) {
                            num = 0;
                        }
                        autoPlay(num);
                    }, 2000);
                    // var tstime = null;
                    // $("#tsmain li").removeClass("active");
                    // Oli[record].className = 'active';
                    // Oli[record].style.width = thatorgli + 'px';
                    // //做大小互换处理,先后顺序问题
                    // if (lock && prev != record) {
                    //     var num = this.index;
                    //     $(".tsnav" + num).fadeOut('slow');
                    //     tstime = setInterval(function() {
                    //         lock = 0;
                    //         for (var i = 0; i < Oli.length; i++) {
                    //             if (prev < i && i <= record) {
                    //                 Oli[i].style.left = Oli[i].offsetLeft - 1 + 'px';
                    //             }
                    //             if (prev >= i && i > record) {
                    //                 Oli[i].style.left = Oli[i].offsetLeft + 1 + 'px';
                    //             }
                    //         }
                    //         if (Oli[record].offsetLeft == ((record) * thatorg2li) && prev <= record) {
                    //             clearInterval(tstime);
                    //             $(".tsnav" + prev).fadeIn('slow');
                    //             prev = record;
                    //             lock = 1;
                    //         }
                    //         if (prev > record) {
                    //             if (Oli[record + 1].offsetLeft == ((record) * thatorg2li + thatorgli)) {
                    //                 clearInterval(tstime);
                    //                 $(".tsnav" + prev).fadeIn('slow');
                    //                 prev = record;
                    //                 lock = 1;
                    //             }
                    //         }
                    //     }, 13);
                    // }
                }
            }
            var num = 0;
            var startPlay = setInterval(function() {
                num++;
                if (num > $("#tsmain li").length - 1) {
                    num = 0;
                }
                autoPlay(num);
            }, 2000);

            function autoPlay(num) {
                //开始
                var record = num;
                var tstime = null;
                var tsmain = document.getElementById('tsmain');
                var Oli = tsmain.getElementsByTagName('li');
                $("#tsmain li").removeClass("active");
                Oli[record].className = 'active';
                Oli[record].style.width = thatorgli + 'px';
                //做大小互换处理,先后顺序问题
                if (lock && prev != record) {
                    $(".tsnav" + num).fadeOut('slow');
                    tstime = setInterval(function() {
                        lock = 0;
                        for (var i = 0; i < Oli.length; i++) {
                            if (prev < i && i <= record) {
                                Oli[i].style.left = Oli[i].offsetLeft - 1 + 'px';
                            }
                            if (prev >= i && i > record) {
                                Oli[i].style.left = Oli[i].offsetLeft + 1 + 'px';
                            }
                        }
                        if (Oli[record].offsetLeft == ((record) * thatorg2li) && prev <= record) {
                            clearInterval(tstime);
                            $(".tsnav" + prev).fadeIn('slow');
                            prev = record;
                            lock = 1;
                        }
                        if (prev > record) {
                            if (Oli[record + 1].offsetLeft == ((record) * thatorg2li + thatorgli)) {
                                clearInterval(tstime);
                                $(".tsnav" + prev).fadeIn('slow');
                                prev = record;
                                lock = 1;
                            }
                        }
                    }, 13);
                }
                //结束
            }
        }
    }
    window.transnav = new transnav();
    // //记录要改变的参数
    // var data={
    // tsmain: document.getElementById('tsmain'),
    // Oli   : tsmain.getElementsByTagName('li'),
    // Owidth:65,
    // outwidth:130
    // }
})(window);