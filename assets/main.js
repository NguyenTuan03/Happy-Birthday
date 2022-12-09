var dreamStar = document.querySelector('.star');
var dream = document.querySelector('.Dream');
var cakeContain = document.querySelector('.cake');
var form = document.querySelector('.form');
var BirthdayBtn = document.querySelector('.birthday-wish--btn');
var content = document.querySelector('.content');
var audio = document.querySelector('#audio');
var audioBirthday = document.querySelector('#audio-birthday');
var audioAnserwrong = document.querySelector('.audio-anserwrong');
var intro = document.querySelector('.intro');
var btn = document.querySelector('.btn');
var birthday = document.querySelector('.birthday');
var borderStar = ['50%','50%'];
var blursArray = ['0px','2px'];// Lấy dộ mờ
var colorsArray = ['#FBFACD','orange','#00E7FF'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count1 = 150;
function star()
{
    for (var i=0;i<count1;i++)
    {
        var div = document.createElement("div");
        var randomLeft =Math.floor(Math.random()* width);
        var randomTop =Math.floor(Math.random()* height);
        var color = Math.floor(Math.random()*3);
        var border = Math.floor(Math.random()*2);
        var widthElement = Math.floor(Math.random()*4)+4;
        var blur = Math.floor(Math.random()*2);
        div.style.backgroundColor = colorsArray[color];
        div.style.borderRadius = borderStar[border];
        div.style.position = 'absolute';
        div.style.width = widthElement + 'px';
        div.style.height = widthElement + 'px';
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px';
        div.style.filter = 'blur(' + blursArray[blur] + ')';
        intro.appendChild(div);
    }
}   
function formvalidate()
{
    var number = 22022003;
    var formImg = document.querySelector('.form-img');
    var formInput= document.querySelector('.form-content');
    var formbtn = document.querySelector('.form-btn');
    var ImgWrong = document.querySelector('.image-wrong');
    var Imgbaby1 = document.querySelector('.form-img__baby-flower');
    var Imgbaby2 = document.querySelector('.form-img__baby-flower1');
    form.style.display = 'block';
    var timeLine = new TimelineMax({
        paused: false
    });
    timeLine
        .to(formImg,0, {
            opacity: 0            
        })
        .to(formInput,0,{
            opacity:0,
        })
        .to(formbtn,0,{
            opacity:0,
        })
        .to(Imgbaby1,0,{
            opacity:0,
        })
        .to(Imgbaby2,0,{
            opacity:0,
        })
        .to(formImg,0.6,{
            y:-40,
            opacity:0.2,
        })
        .to(formImg,0.5,{
            y:-30,
            opacity:0.5
        })
        .to(formImg,0.2,{
            y:-20,
            height:290,
            opacity:1            
        })
        .to(formInput,0.5,{
            opacity:0,
            y:-10,
        })
        .to(formInput,0.5,{
            opacity:1,
            y:-20,
        })
        .to(formbtn,0.5,{
            height:30,
            opacity:0.5,
            y:-20,
            delay: 0.5
        })
        .to(formbtn,0.3,{
            height:30,
            opacity:1,
        })
        .to(Imgbaby1,0.6,{
            y:-20,
            opacity:0.5,
            height:100
        })        
        .to(Imgbaby1,0.8,{
            y:0,
            opacity:1,
            height:150
        })        
        .to(Imgbaby2,0.6,{
            y:-20,
            opacity:0.5,
            height:100
        })        
        .to(Imgbaby2,0.8,{
            y:0,
            opacity:1,
            height:150
        })    
        formbtn.onclick = function()
        {
            audio.pause();
            if (formInput.value != number) {
                console.log('sai r');
                ImgWrong.style.display = 'block';
                ImgWrong.style.animation = 'opacity 1s ease-in';
                audioAnserwrong.play();
                    sleep(7000)
                        .then(function(){
                            form.style.display = 'block';
                        timeLine
                            .to(formImg,0, {
                                opacity: 0            
                            })
                            .to(formbtn,0,{
                                opacity:0,
                            })
                            .to(formImg,0.6,{
                                height:40,
                                y:-20,
                                opacity:0.8,
                            })
                            .to(formImg,0.2,{
                                height:290,
                                opacity:1            
                            })
                            .to(formbtn,0.5,{
                                height:30,
                                opacity:0.5,
                                y:-20,
                                delay: 0.5
                            })
                            .to(formbtn,0.3,{
                                height:30,
                                opacity:1,
                            })        
                        ImgWrong.style.display = 'none';
                        audio.play();
                        })
            }
            else {  
                audio.pause();
                audioBirthday.play()
                birthday.style.display = 'block';
                birthday.style.animation = 'opacity 1s ease-in';
                clearTimeout(setTimeout(() => {
                    audio.play();
                    content.style.display = 'block';
                }, 2500));
                clearTimeout(setTimeout(() => {
                    formvalidate();
                },38000));
                birthdayCard();
            }   
        }            
}
function birthdayCard()
{
    document.querySelector('body').style.backgroundColor = 'rgb(219 201 181)';
    var lineDecorLeft = document.querySelector('.line-decor--left');
    var triangleLeft1 = document.querySelector('.triangle--left1');
    var triangleLeft2 = document.querySelector('.triangle--left2');
    var triangleLeft3 = document.querySelector('.triangle--left3');
    var triangleLeft4 = document.querySelector('.triangle--left4');
    var lineDecorRight = document.querySelector('.line-decor--right');
    var triangleRight1 = document.querySelector('.triangle--right1');
    var triangleRight2 = document.querySelector('.triangle--right2');
    var triangleRight3 = document.querySelector('.triangle--right3');
    var triangleRight4 = document.querySelector('.triangle--right4');
    var birthdaytext1 = document.querySelector('.birthday-text1');
    var birthdaytext2 = document.querySelector('.birthday-text2');
    var birthdaytext3 = document.querySelector('.birthday-text3');
    var birthdaytext4 = document.querySelector('.birthday-text4');
    var birthdaytext5 = document.querySelector('.birthday-text5');
    var birthdaytext6 = document.querySelector('.birthday-text6');
    var birthdaytext7 = document.querySelector('.birthday-text7');
    var birthdaytext8 = document.querySelector('.birthday-text8');
    var birthdaytext9 = document.querySelector('.birthday-text9');
    var birthdaytext10 = document.querySelector('.birthday-text10');
    var birthdaytext11 = document.querySelector('.birthday-text11');
    var birthdaytext12 = document.querySelector('.birthday-text12');
    var birthdaytext13 = document.querySelector('.birthday-text13');
    var birthdayImg1 = document.querySelector('.birthday-img1');
    var birthdayImg2 = document.querySelector('.birthday-img2');
    var birthdayImgPic1 = document.querySelector('.birthday-img1--pic1');
    var birthdayImgPic2 = document.querySelector('.birthday-img1--pic2');
    var birthdayIcon = document.querySelector('.birthday-icon');
    function showText()
    {
        setTimeout(()=>{
            birthdaytext1.style.animation = 'Rotate 1.5s ease-in infinite'
            birthdaytext2.style.animation = 'Rotate 2s ease-in infinite'
            birthdaytext3.style.animation = 'Rotate 1.5s ease-in infinite'
            birthdaytext4.style.animation = 'Rotate 1.9s ease-in infinite'
            birthdaytext5.style.animation = 'Rotate 1.3s ease-in infinite'
            birthdaytext6.style.animation = 'Rotate 1.8s ease-in infinite'
            birthdaytext7.style.animation = 'Rotate 1.5s ease-in infinite'
            birthdaytext8.style.animation = 'Rotate 1.1s ease-in infinite'
            birthdaytext9.style.animation = 'Rotate 1.7s ease-in infinite'
            birthdaytext10.style.animation = 'Rotate 2s ease-in infinite'
            birthdaytext11.style.animation = 'Rotate 1.5s ease-in infinite'
            birthdaytext12.style.animation = 'Rotate 1.7s ease-in infinite'
            birthdaytext13.style.animation = 'Rotate 1.9s ease-in infinite'
        },1000)
    }
    var timeLine = new TimelineMax({
        paused: false
    });
    timeLine
        // .to(birthdayImg1,0.5,{
        //     opacity:0,
        //     width:0,
        // })
        .to(birthdayImgPic1,0.7,{
            opacity:0,
            width:0,
        })
        .to(birthdayIcon,1,{
            y:-120
        })
        .to(lineDecorLeft,0.3,{
            y:-10,
            height:0,
        })
        .to(lineDecorLeft,0.5,{
            opacity:1,
            y:0,
            height:32,
        })
        .to(triangleLeft1,0,{
            y:-10,
            height:0,
        })
        .to(triangleLeft2,0,{
            y:-10,
            height:0,
        })
        .to(triangleLeft3,0,{
            y:-10,
            height:0,
        })
        .to(triangleLeft4,0,{
            y:-10,
            height:0,
        })
        .to(lineDecorRight,0.3,{
            y:-10,
            height:0,
        })
        .to(triangleRight1,0.3,{
            y:-10,
            height:0,
        })
        .to(triangleRight2,0.3,{
            y:-10,
            height:0,
        })
        .to(triangleRight3,0.3,{
            y:-10,
            height:0,
        })
        .to(triangleRight4,0.3,{
            y:-10,
            height:0,
        })
        .to(triangleLeft1,0.2,{
            opacity:1,
            y:0,
            height:20
        })
        .to(triangleLeft2,0.2,{
            opacity:1,
            y:0,
            height:20
        })
        .to(triangleLeft3,0.2,{
            opacity:1,
            y:0,
            height:20
        })
        .to(triangleLeft4,0.3,{
            y:0,
            height:20,
            opacity:1,
        })
        .to(lineDecorRight,0.5,{
            opacity:1,
            y:0,
            height:32
        })
        .to(triangleRight1,0.2,{
            opacity:1,
            y:0,
            height:20
        })
        .to(triangleRight2,0.2,{
            opacity:1,
            y:0,
            height:20
        })
        .to(triangleRight3,0.2,{
            opacity:1,
            y:0,
            height:20
        })
        .to(triangleRight4,0.2,{
            opacity:1,
            y:0,
            height:20,
        })
        .to(birthdayImg1,0.5,{
            opacity:1,
            width:156,
            delay:1,
        })
        .to(birthdayImgPic1,0.5,{
            opacity:1,
            width:148,
            delay:1
        })
        .to(birthdayImg2,0.5,{
            opacity:1,
            width:156,
            delay:1,
        })
        .to(birthdayImgPic2,0.5,{
            opacity:1,
            width:148,
            delay:1
        })
        .to(birthdayIcon,0.8,{
            y:-100,
            opacity:0.1
        })
        .to(birthdayIcon,0.6,{
            y:-90,
            opacity:0.2
        })
        .to(birthdayIcon,0.6,{
            y:-80,
            opacity:0.3
        })
        .to(birthdayIcon,0.6,{
            y:-70,
            opacity:0.4
        })
        .to(birthdayIcon,0.6,{
            y:-60,
            opacity:0.5
        })
        .to(birthdayIcon,0.6,{
            y:-50,
            opacity:0.6
        })
        .to(birthdayIcon,0.6,{
            y:-40,
            opacity:0.7
        })
        .to(birthdayIcon,0.6,{
            y:-30,
            opacity:0.8
        })
        .to(birthdayIcon,0.6,{
            y:-20,
            opacity:0.9
        })
        .to(birthdayIcon,0.6,{
            y:-10,
            opacity:1
        })
        .to(birthdayIcon,0.6,{
            y:0,
            opacity:1
        })
        sleep(6000)
            .then(function(){
                birthdaytext1.style.display = 'block'
                birthdaytext2.style.display = 'block'
                birthdaytext3.style.display = 'block'
                birthdaytext4.style.display = 'block'
                birthdaytext5.style.display = 'block'
                birthdaytext6.style.display = 'block'
                birthdaytext7.style.display = 'block'
                birthdaytext8.style.display = 'block'
                birthdaytext9.style.display = 'block'
                birthdaytext10.style.display = 'block'
                birthdaytext11.style.display = 'block'
                birthdaytext12.style.display = 'block'
                birthdaytext13.style.display = 'block'
                showText();
                return sleep(2000)
            })
            .then(function(){
                document.querySelector('.birthday-heart').style.display = 'block';
            })
    var birthdayText = document.querySelector('.birthday-text');
    var string = 'Dear darling, Thêm một chủi mới chúc bé có nhiều niềm vui trong cuộc sống và đặc biệt là gặt hái được nhiều thành công';
    var str = string.split('');
    function animate()
    {
        str.length > 0 ? birthdayText.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate,40);
    }
    setTimeout(animate,21000);
    sleep(29000)
        .then(function(){
            timeLine
            .to(BirthdayBtn,0.5,{
                opacity:0.1,
                x:70
            })
            .to(BirthdayBtn,0.5,{
                opacity:1,
                x:0
            })
        })
    BirthdayBtn.onclick = function()
    {
        cake();
    }
}
function cake()
{   
    form.style.display = 'none';
    birthday.style.display = 'none';
    cakeContain.style.display = 'block';
    var WishBtn = document.querySelector('.text--btn');
    var Texthpbd = document.querySelector('.text h1');
    var balloon1 = document.querySelector('.balloon1');
    var balloon2 = document.querySelector('.balloon2');
    var balloon3 = document.querySelector('.balloon3');
    var balloon4 = document.querySelector('.balloon4');
    var balloon5 = document.querySelector('.balloon5');
    var balloon6 = document.querySelector('.balloon6');
    var balloon7 = document.querySelector('.balloon7');
    var balloon8 = document.querySelector('.balloon8');
    var balloon9 = document.querySelector('.balloon9');
    var balloon10 = document.querySelector('.balloon10');
    var balloon11 = document.querySelector('.balloon11');
    var balloon12 = document.querySelector('.balloon12');
    var timeLine = new TimelineMax({
        paused: false
    });
    timeLine
        .to(Texthpbd, 0.2,{
            y:-20,
        })
        .to(balloon1,0.5,{
            y:-400
        })
        .to(Texthpbd, 0.2,{
            y:-10,
            opacity:0.5
        })
        .to(Texthpbd, 0.5,{
            y:0,
            opacity:1
        })
        .to(WishBtn, 0.5,{
            y:-20,
        })
        .to(balloon1,0.5,{
            y:0,
            opacity:1
        })
        .to(balloon2,1,{
            y:0,
            opacity:1
        })
        .to(balloon3,0.5,{
            y:0,
            opacity:1
        })
        .to(balloon4,0.3,{
            y:0,
            opacity:1
        })
        .to(balloon5,0.5,{
            y:0,
            opacity:1
        })
        .to(balloon6,0.5,{
            y:0,
            opacity:1
        })
        .to(balloon7,0.5,{
            y:0,
            opacity:1
        })
        .to(balloon8,0.5,{
            y:0,
            opacity:1
        })
        .to(balloon9,0.5,{
            y:0,
            opacity:1
        })
        .to(balloon10,0.5,{
            y:0,
            opacity:1
        })
        .to(balloon11,0.5,{
            y:0,
            opacity:1
        })
        .to(balloon12,0.5,{
            y:0,
            opacity:1
        })
        sleep(10000)
            .then(function(){
                timeLine
                .to(WishBtn, 0.5,{
                    y:0,
                    opacity:1
                })
            })
        WishBtn.onclick = function()
        {
            document.querySelector('.text-para').style.display = 'none'
            var timeLine = new TimelineMax({
                paused: false
            });
            timeLine
                .to(WishBtn, 0.8, {
                    height: 0.2,
                    opacity: 0.5,
                    boxShadow: "0px 0px 35px 7px #cd28fa",
                    delay: 0.25
                })
                .to(WishBtn, 0.1, {
                    opacity: 0.5,
                    background: "#26ff92"
                })
                .to(WishBtn, 0, {
                    width: 1,
                    delay: 0.2
                })
                .to(WishBtn, 0.1, {
                    boxShadow: "0px 0px 100px 55px #bc97ceaa",
                    y: 90,
                    height: 100,
                    delay: 0.23
                })
                .to(WishBtn, 0.3, {
                    height: 1000,
                    y: -1500,
                    boxShadow: "0px 0px 85px 17px #e778d6",
                    delay: 0.2
                })
            sleep(3000)
                .then(function(){
                    cakeContain.style.display = 'none';
                    cakeContain.style.transition = 'all 2s ease-in'
                    dream.style.display = 'block';
                    dream.style.animation = 'opacity 2s ease-in'
                    LaunchRocket();
                    for (var i=0;i<200;i++)
                    {
                        var div = document.createElement("div");
                        var randomLeft =Math.floor(Math.random()* width);
                        var randomTop =Math.floor(Math.random()* height);
                        var border = Math.floor(Math.random()*2);
                        var widthElement = Math.floor(Math.random()*2)+3;
                        var timeanimation = Math.floor(Math.random()*3)+2;
                        div.style.backgroundColor = 'rgba(255,255,200,0.8)';
                        div.style.borderRadius = borderStar[border];
                        div.style.position = 'absolute';
                        div.style.width = widthElement + 'px';
                        div.style.height = widthElement + 'px';
                        div.style.marginLeft = randomLeft + 'px';
                        div.style.marginTop = randomTop + 'px';
                        div.style.animation = 'star ' + timeanimation+ 's ease-in infinite';
                        dreamStar.appendChild(div);
                    }

                })
        }
}
function LaunchRocket()
{
    document.querySelector('body').style.backgroundColor = '#000'
    var dreamArrow = document.querySelector('.dream-arrow');
    var Arrow = document.querySelector('.arrow');
    var dreamMsg = document.querySelector('.dream-contain--msg');
    var moonBtn = document.querySelector('.moon-btn');
    var dreamText = document.querySelector('.dream-text');
    var rocket = document.querySelector('.rocket');
    var starBklink = document.querySelector('.star-blink');
    var string = 'Gửi điều ước vào đây và phóng chúng vào vì sao nào';
    var str = string.split('');
    function animate()
    {
        str.length > 0 ? dreamText.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate,40);
    }
    setTimeout(animate,1000);     
    var timeLine = new TimelineMax({
        paused: false
    });
    moonBtn.onclick = function()
    {
        audioBirthday.pause();
        setTimeout(() => {
            dreamMsg.style.right = '168px'
            dreamMsg.style.bottom = '260px'
            dreamMsg.style.transition = 'all 1s ease-in'
        }, 4000);
        timeLine
            .to(dreamArrow,0.5,{
                opacity:0
            })
            .to(Arrow,0.5,{
                opacity:0
            })
            .to(dreamMsg,1,{
                rotation: 150,
                delay:1
            })
            .to(dreamMsg,1,{
                x:-140,
                y:48,
                width:0,
            })
            .to(dreamMsg,0.5,{
                opacity:0,
                delay:1.5
            })
            .to(rocket,2,{
                y:-100,
                delay:2
            })
            .to(rocket,1.5,{
                rotation: 80,
                y:-180,
                x:230,
                delay:0
            })
            .to(rocket,2,{
                rotation: 0,
            })
            .to(rocket,2,{
                rotation: -60,
                y:-260,
                x:-40,
            })
            .to(rocket,2,{
                rotation: 0,
            })
            .to(rocket,0.5,{
                rotation: 50,
                y:-670,
                x:550,
            })
            sleep(3000)
                .then(function()
                {
                    document.querySelector('.dream-text').style.display = 'none';
                    document.querySelector('.dream-text').style.transition = 'all 1s ease-in';
                    return sleep(14500)
                })
                .then(function(){
                    starBklink.style.display = 'block';
                    return sleep(18500)
                })
                .then(function(){
                    starBklink.style.display = 'none';
                    starBklink.style.transition = 'all 2s';
                })
                setTimeout(() => {
                    dream.style.display = 'none';
                    document.querySelector('#drag-container').style.zIndex = 999;
                    document.querySelector('#drag-container').style.display = 'block';
                    document.querySelector('#spin-container').style.top = '30%';
                    document.querySelector('#spin-container').style.display = 'block';
                    carousel();
                }, 20000);
    }
    //         getData()
    //             .then((data) => {
    //                 console.log(data.data);
    //             })
    //         var api = 'http://localhost:3000/comment';
    // async function getData() 
    // {
    //     var input = document.querySelector('.dream-msg').value;
    //     try {
    //         let data = axios.put(api+'/'+1,{
    //             desc: input
    //         })
    //         return data;
    //     }
    //     catch(e){
    //         console.log(e)
    //     }
    // }
}
function sendBtn()
{
    //Hàm to(phần tử được chọn,thời gian di chuyển,
    //{hiệu ứng},”khoảng cách 2 chuyển động”)
    btn.addEventListener("click", () => {
        content.style.display = 'block';
        audio.play();
        btn.style.display = 'none';
        btn.style.animation = 'Fade 0.5s ease-in forwards'
        sleep(35000)
            .then(formvalidate)
    });    
}
function sleep(ms)
{
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    })
}
function carousel()
{
    var radius = 240; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 170; // width of images (unit: px)
var imgHeight = 200; // height of images (unit: px)
setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}
// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function(e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};

}
sendBtn();
star()