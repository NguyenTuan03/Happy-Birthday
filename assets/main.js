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
var borderArray = ['50%','0'];//Lấy giọt mưa borderraidus hình 
var borderStar = ['50%','50%'];
var blursArray = ['1px','4px'];// Lấy dộ mờ
var colorsArray = ['#FBFACD','orange','#00E7FF'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 70;
var count1 = 70;
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
        var timeanimation = Math.floor(Math.random()*8)+4;
        div.style.backgroundColor = colorsArray[color];
        div.style.borderRadius = borderStar[border];
        div.style.position = 'absolute';
        div.style.width = widthElement + 'px';
        div.style.height = widthElement + 'px';
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px';
        div.style.filter = 'blur(' + blursArray[blur] + ')';
        div.style.animation = 'star '+ timeanimation + 's ease-in infinite';
        intro.appendChild(div);
    }
}
function createRain()
{
    for (var i=0;i<count;i++)
    {
        var div = document.createElement("div");
        var randomLeft =Math.floor(Math.random()* width);
        var randomTop =Math.floor(Math.random()* height);
        var color = Math.floor(Math.random()*3);
        var border = Math.floor(Math.random()*2);
        var widthElement = Math.floor(Math.random()*5)+5;
        var blur = Math.floor(Math.random()*2);
        var timeanimation = Math.floor(Math.random()*12)+8;
        div.style.backgroundColor = colorsArray[color];
        div.style.borderRadius = borderArray[border];
        div.style.position = 'absolute';
        div.style.width = widthElement + 'px';
        div.style.height = widthElement + 'px';
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px';
        div.style.filter = 'blur(' + blursArray[blur] + ')';
        div.style.animation = 'move '+ timeanimation + 's ease-in infinite';
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
}
function sendBtn()
{
    //Hàm to(phần tử được chọn,thời gian di chuyển,
    //{hiệu ứng},”khoảng cách 2 chuyển động”)
    var btnText = document.querySelector('.btn p');
    var timeLine = new TimelineMax({
        paused: false
    });    
    btn.addEventListener("click", () => {
        // timeLine
        //     .to(btnText, 0.6, {
        //         opacity: 0
        //     })
        //     .to(btn, 0.8, {
        //         height: 0.2,
        //         opacity: 0.5,
        //         boxShadow: "0px 0px 35px 7px #cd28fa",
        //         delay: 0.25
        //     })
        //     .to(btn, 0.1, {
        //         opacity: 0.5,
        //         background: "#26ff92"
        //     })
        //     .to(btn, 0, {
        //         width: 1,
        //         delay: 0.2
        //     })
        //     .to(btn, 0.1, {
        //         boxShadow: "0px 0px 100px 55px #B01E68",
        //         y: 90,
        //         height: 100,
        //         delay: 0.23
        //     })
        //     .to(btn, 0.3, {
        //         height: 1000,
        //         y: -1500,
        //         boxShadow: "0px 0px 85px 17px #B01E68",
        //         delay: 0.2
        //     })
                content.style.display = 'block';
                btn.style.display = 'none'
            setTimeout(() => {
                formvalidate();
            },38000)
        });    
}
sendBtn();
star()
