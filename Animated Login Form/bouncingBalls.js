const ballContainer = document.getElementById('ball-container');
const gravity = 0.07;

function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');


  const size = Math.random() * 70;
  ball.style.width = (size) + 'px';
  ball.style.height = (size) + 'px';

  
  ball.style.left = Math.random() * (ballContainer.offsetWidth - size) + 'px';
  ball.style.top = Math.random() * (ballContainer.offsetHeight - size) + 'px';
  let dx = Math.random() * 4 - 2;

  
  let dy = -Math.random() * 6;

  function updateBallPosition() {
    let left = parseInt(ball.style.right);
    let top = parseInt(ball.style.top);

    
    if (left <= 0 || left >= ballContainer.offsetWidth - ball.offsetWidth) {
      dx *= -1; 
      dy *= 0.8 + Math.random() * 0.2; 
    }

    
    if (top >= ballContainer.offsetHeight - ball.offsetHeight) {
      dy *= -0.9; 
      dx *= 0.8 + Math.random() * 0.9; 
    } else {
      dy += gravity; 
    }

    
    left += dx;
    top += dy;

    ball.style.left = left + 'px';
    ball.style.top = top + 'px';

    requestAnimationFrame(updateBallPosition);
  }

  ballContainer.appendChild(ball);
  updateBallPosition();
}

// Create 10-20 balls
for (let i = 0; i < Math.floor(Math.random() * 11) + 50; i++) {
  createBall();
}
