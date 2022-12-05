var dreamStar = document.querySelector('.star');
var dream = document.querySelector('.Dream');
var cakeContain = document.querySelector('.cake');
var form = document.querySelector('.form');
var BirthdayBtn = document.querySelector('.birthday-wish--btn');
var content = document.querySelector('.content');
var audio = document.querySelector('#audio');
var audioBirthday = document.querySelector('.audio-birthday');
var audioAnserwrong = document.querySelector('.audio-anserwrong');
var intro = document.querySelector('.intro');
var btn = document.querySelector('.btn');
var birthday = document.querySelector('.birthday');
var borderStar = ['50%','50%'];
var blursArray = ['0px','2px'];// Lấy dộ mờ
var colorsArray = ['#FBFACD','orange','#00E7FF'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count1 = 200;
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
        var timeanimation = Math.floor(Math.random()*3)+2;
        div.style.backgroundColor = colorsArray[color];
        div.style.borderRadius = borderStar[border];
        div.style.position = 'absolute';
        div.style.width = widthElement + 'px';
        div.style.height = widthElement + 'px';
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px';
        div.style.filter = 'blur(' + blursArray[blur] + ')';
        div.style.animation = 'star ' + timeanimation + 's ease-in infinite';
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
                    setTimeout(() =>{
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
                    },7000)
            }
            else {  
                audio.pause();
                setTimeout(()=> {
                    audioBirthday.play();
                },5000)
                birthday.style.display = 'block';
                birthday.style.animation = 'opacity 2s ease-in';
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
        .to(birthdayImg1,0.5,{
            opacity:0,
            width:0,
        })
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
        .to(lineDecorRight,0.3,{
            y:-10,
            height:0,
            opacity:0,
        })
        .to(triangleLeft1,0.3,{
            y:-10,
            height:0,
            opacity:0,
        })
        .to(triangleLeft2,0.3,{
            y:-10,
            height:0,
            opacity:0,
        })
        .to(triangleLeft3,0.3,{
            y:-10,
            height:0,
            opacity:0,
        })
        .to(triangleLeft4,0.3,{
            y:-10,
            height:0,
            opacity:0,
        })
        .to(triangleRight1,0.3,{
            y:-10,
            height:0,
            opacity:0,
        })
        .to(triangleRight2,0.3,{
            y:-10,
            height:0,
            opacity:0,
        })
        .to(triangleRight3,0.3,{
            y:-10,
            height:0,
            opacity:0,
        })
        .to(triangleRight4,0.3,{
            y:-10,
            height:0,
            opacity:0,
        })
        .to(lineDecorLeft,0.5,{
            opacity:1,
            y:0,
            height:32,
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
        setTimeout(()=> {
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
        },8000)
        setTimeout(()=>{
            document.querySelector('.birthday-heart').style.display = 'block';
        },8000)
    var birthdayText = document.querySelector('.birthday-text');
    var string = 'Dear darling, Thêm một chủi mới chúc bé có nhiều niềm vui trong cuộc sống và đặc biệt là gặt hái được nhiều thành công';
    var str = string.split('');
    function animate()
    {
        str.length > 0 ? birthdayText.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate,40);
    }
    setTimeout(animate,21000);
    setTimeout(()=> {
        timeLine
            .to(BirthdayBtn,0.5,{
                opacity:0.1,
                x:70
            })
            .to(BirthdayBtn,0.5,{
                opacity:1,
                x:0
            })
    },30000);
}
function sendBtn()
{
    //Hàm to(phần tử được chọn,thời gian di chuyển,
    //{hiệu ứng},”khoảng cách 2 chuyển động”)
    var btnText = document.querySelector('.btn p');
    btn.addEventListener("click", () => {
        content.style.display = 'block';
        audio.play();
        btn.style.display = 'none';
        btn.style.animation = 'Fade 0.5s ease-in forwards'
        setTimeout(() => {
            formvalidate();
        },35000)
    });    
}
sendBtn();
star()
