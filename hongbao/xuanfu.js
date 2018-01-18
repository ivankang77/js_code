document.writeln("<script type=\'text/javascript\'>");
document.writeln("function hideinfd(){$(\'#infd\').removeClass(\'off\');$(\'#bgcolor\').removeClass(\'onbg\');init();}");
document.writeln("function showinfd(){$(\'#infd\').addClass(\'off\');$(\'#bgcolor\').addClass(\'onbg\');}");
document.writeln("</script>");
document.writeln("<style type=\'text/css\'>");
document.writeln(".bgcolor{height:0px;}.onbg{position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; z-index: 10000000; pointer-events: none; overflow: hidden;  background-color: rgba(64,64,64,.87);}");
document.writeln("#petalbox {position: relative; width: 100%;height: 100%; pointer-events: none;overflow: hidden; }");
document.writeln("#infd{position:fixed; width:250px;height:250px; z-index:99999999999;  top:15%;right:45%; margin-right:-125px; -moz-transform:scale(0,0);-ms-transform:scale(0,0);-o-transform:scale(0,0);-webkit-transform:scale(0,0);transform:scale(0,0);right:100%;top:100%;  }");
document.writeln("#infd.off {position:fixed; width:300px;height:370px; z-index:99999999999;  top:15%;right:45%; margin-right:-125px;-moz-transition: all .8s ease-out 0s;-webkit-transition: all .8s ease-out 0s;transition: all .8s ease-out 0s;-moz-transform:scale(1,1);-ms-transform:scale(1,1);-o-transform:scale(1,1);-webkit-transform:scale(1,1);transform:scale(1,1); }");
document.writeln("#infd img{ width:100%; }");
document.writeln(".infdM1{ display:block; width:25px; height:25px; right:0px; position:absolute; top:0px; z-index:9999;  background: url(http://6g.xmhmylmr.com/hongbao/iw_close.png) no-repeat;}");
document.writeln(".infdM3{ display:block; width:180px; height:50px; left:45%; margin-left:-75px; position:absolute; bottom:60px;   }");
document.writeln("#result{right:70px; position:absolute; bottom:98px;width:160px;height:30px;line-height:24px; text-align:center; color:#fff;font-weight:bold; font-size:18px;}");
document.writeln(".updownsale{-webkit-animation:updown 3s .2s ease both infinite;-moz-animation:updown 3s .2s ease both infinite;-o-animation:updown 3s .2s ease both infinite;-ms-animation:updown 3s .2s ease both infinite; position:fixed;right:10px;top:15%;z-index:10; width:20%; }");
document.writeln("@-webkit-keyframes updown{");
document.writeln("    0%{opacity:1;");
document.writeln("    -webkit-transform:translateY(0)}");
document.writeln("    50%{opacity:1;");
document.writeln("    -webkit-transform:translateY(30px)}");
document.writeln("    100%{opacity:1;");
document.writeln("    -webkit-transform:translateY(0px)}");
document.writeln("}");
document.writeln("@-moz-keyframes updown{");
document.writeln("    0%{opacity:1;");
document.writeln("    -moz-transform:translateY(0)}");
document.writeln("    50%{opacity:1;");
document.writeln("    -moz-transform:translateY(30px)}");
document.writeln("    100%{opacity:1;");
document.writeln("    -moz-transform:translateY(0px)}");
document.writeln("}");
document.writeln("@-o-keyframes updown{");
document.writeln("    0%{opacity:1;");
document.writeln("    -o-transform:translateY(0)}");
document.writeln("    50%{opacity:1;");
document.writeln("    -o-transform:translateY(30px)}");
document.writeln("    100%{opacity:1;");
document.writeln("    -o-transform:translateY(0px)}");
document.writeln("}");
document.writeln("@-ms-keyframes updown{");
document.writeln("    0%{opacity:1;");
document.writeln("    -ms-transform:translateY(0)}");
document.writeln("    50%{opacity:1;");
document.writeln("    -ms-transform:translateY(30px)}");
document.writeln("    100%{opacity:1;");
document.writeln("    -ms-transform:translateY(0px)}");
document.writeln("}");
document.writeln("</style>");
document.writeln('<div class="bgcolor" id="bgcolor">');
document.writeln("	<div id=\'petalbox\'>");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("<div id=\'infd\'>");
document.writeln("	<img src=\'http://6g.xmhmylmr.com/hongbao/infd2.png\' class=\'infdimg\' /><div id='result'>奖品名称奖品名称</div>");
document.writeln("    <a href=\'javascript:void(0)\' onclick=\'hideinfd()\'  class=\'infdM1\' alt=\'关闭\' title=\'关闭\' > </a>");
document.writeln("    <a href=\'https://kf7.kuaishang.cn/bs/im.htm?cas=56339___636395&fi=66593&ism=1&sText=hongbao&ref=hongbao\' class=\'infdM3\' alt=\'点击开抢\' title=\'点击开抢\'></a>");
document.writeln("</div>");
document.writeln("<img src=\'http://6g.xmhmylmr.com/hongbao/infd1.png\' class=\'updownsale\' onclick=\'showinfd();\' />");


        var NUMBER_OF_LEAVES = 50;
        function init() {
            var container = document.getElementById('petalbox');
            try {
                for (var i = 0;
                     i < NUMBER_OF_LEAVES;
                     i++) {
                    container.appendChild(createALeaf());
					}
            }
            catch(e) {
            }
        }

       
        function randomInteger(low, high) {
            return low + Math.floor(Math.random() * (high - low));
        }

        function randomFloat(low, high) {
            return low + Math.random() * (high - low);
        }

        
        function pixelValue(value) {
            return value + 'px';
        }

       
        function durationValue(value) {
            return value + 's';
        }
        var giftsArr = new Array();
        giftsArr[0] = "哈根达斯魔力伞";
        giftsArr[1] = "韩国精美化妆包";
        giftsArr[2] = "超级补水神器";
        giftsArr[3] = "免费脱毛一次";
        giftsArr[4] = "现金红包";
        //数组打乱
        giftsArr.sort(function(){ return 0.5 - Math.random() })

        function radnGift(){
            var randomNum = parseInt(Math.random()*giftsArr.length);
            $("#result").text(giftsArr[randomNum]);
        }
        radnGift();
        function createALeaf() {          
            var leafDiv = document.createElement('div');
					leafDiv.classList.add("gifs");
            var image = document.createElement('img');            
            image.src ='http://6g.xmhmylmr.com/hongbao/rain'+ randomInteger(1, 5) + '.png';           
            //image.src ='images/rain1.png';           
            leafDiv.style.top = pixelValue(randomInteger(-80, -200));
            leafDiv.style.left = pixelValue(randomInteger(0, 960));
			
            var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin':'counterclockwiseSpinAndFlip';      
            leafDiv.style.webkitAnimationName ='fade, drop';
            leafDiv.style.animationName ='fade, drop';
            image.style.webkitAnimationName = spinAnimationName;
            image.style.animationName = spinAnimationName;

            /* 随机下落时间 */
            var fadeAndDropDuration = durationValue(randomFloat(2, 10));

            /* 随机旋转时间 */
            var spinDuration = durationValue(randomFloat(3, 4));

            leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
            leafDiv.style.animationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;

            // 随机delay时间
            var leafDelay = durationValue(randomFloat(0, 0));

            leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
            leafDiv.style.animationDelay = leafDelay + ', ' + leafDelay;
            image.style.webkitAnimationDuration = spinDuration;
            image.style.animationDuration = spinDuration;
            leafDiv.appendChild(image);
            return leafDiv;
        }
		
document.writeln("<style type=\'text/css\'>");	
document.writeln("#petalbox > div.gifs {");
document.writeln("	-webkit-transform: translate3d(0, -200px, 0);");
document.writeln("    position: absolute;");
document.writeln("    -webkit-animation-iteration-count: 1, 0;");
document.writeln("    -webkit-animation-direction: normal, normal;");
document.writeln("    -webkit-animation-timing-function: linear, ease-in;");
document.writeln("    -webkit-backface-visibility: hidden;");
document.writeln("    animation-iteration-count: 1, 0;");
document.writeln("    animation-direction: normal, normal;");
document.writeln("    animation-timing-function: linear, ease-in;");
document.writeln("    backface-visibility: hidden;");
document.writeln("	-webkit-animation-iteration-count: infinite;");
document.writeln("	animation-iteration-count: infinite;");
document.writeln("}");
document.writeln("#petalbox > div.gifs > img {");
document.writeln("    position: absolute;");
document.writeln("    -webkit-animation-iteration-count: infinite;");
document.writeln("    -webkit-animation-direction: alternate;");
document.writeln("    -webkit-animation-timing-function: linear;");
document.writeln("    -webkit-backface-visibility: hidden;");
document.writeln("    animation-iteration-count: infinite;");
document.writeln("    animation-direction: alternate;");
document.writeln("    animation-timing-function: linear;");
document.writeln("    backface-visibility: hidden;");
document.writeln("}");
document.writeln("@-webkit-keyframes fade {");
document.writeln("    0%, 70% {");
document.writeln("        opacity: 1;");
document.writeln("    }");
document.writeln("    100% {");
document.writeln("        opacity: 0;");
document.writeln("    }");
document.writeln("}");
document.writeln("@keyframes fade {");
document.writeln("    0%, 70% {");
document.writeln("        opacity: 1;");
document.writeln("    }");
document.writeln("    100% {");
document.writeln("        opacity: 0;");
document.writeln("    }");
document.writeln("}");
document.writeln("@-webkit-keyframes drop {");
document.writeln("    0% {");
document.writeln("        -webkit-transform: translate3d(0, -300px, 0);");
document.writeln("    }");
document.writeln("    100% {");
document.writeln("        -webkit-transform: translate3d(0, 1100px, 0);");
document.writeln("    }");
document.writeln("}");
document.writeln("@keyframes drop {");
document.writeln("    0% {");
document.writeln("        transform: translate3d(0, -300px, 0);");
document.writeln("    }");
document.writeln("    100% {");
document.writeln("        transform: translate3d(0, 1100px, 0);");
document.writeln("    }");
document.writeln("}");
document.writeln("@-webkit-keyframes clockwiseSpin {");
document.writeln("    0% {");
document.writeln("        -webkit-transform: none;");
document.writeln("    }");
document.writeln("    100% {");
document.writeln("        -webkit-transform: rotate(480deg);");
document.writeln("    }");
document.writeln("}");
document.writeln("@keyframes clockwiseSpin {");
document.writeln("    0% {");
document.writeln("        transform: none;");
document.writeln("    }");
document.writeln("    100% {");
document.writeln("        transform: rotate(480deg);");
document.writeln("    }");
document.writeln("}");
document.writeln("@-webkit-keyframes counterclockwiseSpinAndFlip {");
document.writeln("    0% {");
document.writeln("        -webkit-transform: none;");
document.writeln("    }");
document.writeln("    100% {");
document.writeln("        -webkit-transform: rotate(-480deg);");
document.writeln("    }");
document.writeln("}");
document.writeln("}");
document.writeln("@keyframes counterclockwiseSpinAndFlip {");
document.writeln("    0% {");
document.writeln("        transform: none;");
document.writeln("    }");
document.writeln("    100% {");
document.writeln("        transform: rotate(-480deg);");
document.writeln("    }");
document.writeln("}");
document.writeln("</style>");


init();