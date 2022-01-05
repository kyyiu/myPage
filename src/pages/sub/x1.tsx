export default `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body{
      overflow-y: hidden;
    }
    .a{
      width: 300px;
      height: 300px;
      position: relative;
      transform-origin: right bottom 0;
      transform: skewY(18deg);
      background-color: red;
    }
    .b {
      width: 200px;
      height: 230px;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: skewY(-18deg) rotate(-36deg) translate(0px, 70px);
      background-color: green;
    }
    .c {
      position: absolute;
      width: 5000px;
      height: 100px;
      background-color: #000;
    }
    .d, .e{
      display: inline-block;
      width: 500px;
      height: 200px;
      background-color: #ccc;
      transform-origin: bottom center;
      transform: skewY(15deg);
    }
    .e{
      transform: skewY(-15deg);
    }

   
button{
  border: none;
  background-color: #fff;
  font-size: 40px;
  cursor: pointer;
  line-height:1.8;
  width: 250px;
/*   border: 5px solid transparent; */
  box-sizing:border-box;
  background-image: linear-gradient(#2e2e2e,#2e2e2e),linear-gradient(to bottom right,  #0fd850, #f9f047);
  font-weight: 300;
  color: #2fd830;
  padding: 2px;
  border-radius: 100px;
  background-clip: content-box,padding-box;
  transition: filter .5s ease;
}
button:hover{
  filter:hue-rotate(90deg);
}

.aa {
  width: 500px;
  height: 200px;
  padding: 4px;
  border-radius: 50%;
  background-image: linear-gradient(#eee,#eee),linear-gradient(to bottom right,  #0fd850, #f9f047),linear-gradient(to bottom right,  #fff, #fff);
  background-clip: content-box,padding-box;
  box-sizing: border-box;
}


.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    padding: 5px;
    border: 5px solid rgb(118, 218, 255);
    border-radius: 50%;
    /* overflow: hidden; */
}
.wave {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: rgb(118, 218, 255);
    border-radius: 50%;
}

.wave::before,
.wave::after{
        content: "";
        position: absolute;
        width: 400px;
        height: 400px;
        top: 0;
        left: 50%;
        /* background-color: rgba(255, 255, 255, .4); */
        /* background-color: rgba(24, 209, 169, 0.4); */
        border-radius: 45%;
        transform: translate(-50%, -70%) rotate(0);
        animation: rotate 6s linear infinite;
        z-index: 10;
    }
    
    .wave::after {
        border-radius: 47%;
        /* background-color: rgba(255, 255, 255, .9); */
        /* background-color: rgba(161, 17, 228, 0.9); */
        transform: translate(-50%, -70%) rotate(0);
        animation: rotate 10s linear -5s infinite;
        z-index: 20;
    }

@keyframes rotate {
    50% {
        transform: translate(-50%, -73%) rotate(180deg);
    } 100% {
        transform: translate(-50%, -70%) rotate(360deg);
    }
}
/* background-image/background-clip */
  </style>
</head>
<body>
  <!-- <img src="./j.jpeg" alt=""> -->
  <img src="./h2.png" alt="">
  <div class="c"></div>
  <div class="a">
    <div class="b">222</div>
  </div>
  <div class="d">
  </div>
  
  <div class="e"></div>

  <div class="aa"></div>

  <!-- 关键点在于使用 border-radiuss 生成一个不太圆的圆，然后对纯色块进行切割-->
<!-- 详情参见：https://github.com/chokcoco/iCSS/issues/22-->

<div class="container">
  <div class="wave"></div>
</div>
</body>
</html>
`