var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;
// 공이 움직이는 것을 표현하기 위해 x와 y에 작은 값을 매 프레임마다 더해줌

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2; //x축 위 시작점

var rightPressed = false;
var leftPressed = false;
// 버튼을 누르는 것은 boolean으로 정의하고 초기화
// 처음에는 버튼이 눌리지 않은 상태이므로 기본 값은 false
// 키가 눌렸음을 인식하기 위해 eventListener를 설정(하단)

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2); //Math.PI = 파이(3.14...) 왜 2를 곱하지
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
// 공이 매 프레임마다 다시 그려지게 됨

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    // drawBall, drawPaddle 함수를 호출
    x += dx;
    y += dy;
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // 공의 위치에서 y 값이 0보다 작은 경우 음/양수를 반대로 바꾸어 y축의 방향을 바꾸어줌
    // 공이 매 프레임마다 2px만큼 움직이고 있었다면 이제는 매 프레임마다 2px만큼 "아래 방향으로" 이동할 것
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
        }
    }

    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    } else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    // keyCode37 클릭 시 paddle은 좌측으로 7px, 39 클릭 시 우측으로 7px 움직임
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// 키보드 중 하나가 눌리면 keydown 이벤트 발생 -> keyDownHandler 함수 실행
// 키에서 손 떼면 keyup 이벤트 발생 -> keyUpHandler 함수 실행

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    } else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
// 변수 e = event
// keyCode 37=왼쪽 방향키, 39=오른쪽 방향키
// (ex) keyCode 37을 누르면 leftPressed 변수가 true, 손 떼면 false

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    } else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

setInterval(draw, 10);
// draw 함수는 setInterval을 통해 10밀리초마다 실행됨

var ballRadius = 10;


