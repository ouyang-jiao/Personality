<template>
  <div class="nailong-shy">
    <div class="nailong-shadow"></div>
    <div class="nailong-body-wrapper">
      <div class="nailong-head hiding">
        <div class="head-shine"></div>
        <div class="eyes shy">
          <div class="eye left">
            <div class="eye-white"></div>
            <div class="eye-pupil small"></div>
            <div class="eye-highlight"></div>
          </div>
          <div class="eye right">
            <div class="eye-white"></div>
            <div class="eye-pupil small"></div>
            <div class="eye-highlight"></div>
          </div>
        </div>
        <div class="nose"></div>
        <div class="mouth shy">
          <div class="mouth-curve small"></div>
        </div>
        <div class="cheeks">
          <div class="cheek left"></div>
          <div class="cheek right"></div>
        </div>
      </div>
      <div class="nailong-body">
        <div class="body-belly"></div>
      </div>
      <div class="nailong-arms">
        <div class="arm left covering">
          <div class="arm-pad"></div>
          <div class="face-cover"></div>
        </div>
        <div class="arm right covering">
          <div class="arm-pad"></div>
          <div class="face-cover"></div>
        </div>
      </div>
      <div class="nailong-legs">
        <div class="leg left">
          <div class="leg-pad"></div>
        </div>
        <div class="leg right">
          <div class="leg-pad"></div>
        </div>
      </div>
      <div class="shy-lines">
        <span class="line">💨</span>
        <span class="line">💨</span>
        <span class="line">💨</span>
      </div>
      <div class="embarrassment-sweat">
        <span class="drop">💧</span>
        <span class="drop">💧</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nailong-shy {
  width: 250px;
  height: 320px;
  position: relative;
  margin: 0 auto;
}

.nailong-shadow {
  width: 160px;
  height: 25px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(8px);
}

.nailong-body-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.nailong-head {
  width: 140px;
  height: 125px;
  background: radial-gradient(ellipse at 30% 30%, #FFD93D 0%, #FFB347 50%, #FF9F43 100%);
  border-radius: 55% 55% 50% 50%;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 
    inset -8px -8px 18px rgba(255, 159, 67, 0.3),
    0 8px 25px rgba(255, 159, 67, 0.3);
}

.nailong-head.hiding {
  animation: head-hide 1.5s ease-in-out infinite;
}

.head-shine {
  width: 45px;
  height: 25px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 20px;
  transform: rotate(-30deg);
}

.eyes {
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
}

.eyes.shy {
  top: 50px;
}

.eye {
  width: 35px;
  height: 40px;
  background: #90EE90;
  border-radius: 50%;
  position: relative;
}

.eye-white {
  width: 25px;
  height: 30px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.eye-pupil.small {
  width: 10px;
  height: 12px;
  background: #1a1a1a;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.eye-highlight {
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 30%;
}

.nose {
  width: 10px;
  height: 7px;
  background: #FF9F43;
  border-radius: 50%;
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
}

.mouth {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}

.mouth-curve.small {
  width: 25px;
  height: 8px;
  border-bottom: 3px solid #FF9F43;
  border-radius: 0 0 50px 50px;
}

.cheeks {
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
}

.cheek {
  width: 35px;
  height: 25px;
  background: rgba(255, 105, 180, 0.7);
  border-radius: 50%;
  animation: blush 1.5s ease-in-out infinite;
}

.nailong-body {
  width: 125px;
  height: 110px;
  background: radial-gradient(ellipse at 30% 30%, #FFD93D 0%, #FFB347 50%, #FF9F43 100%);
  border-radius: 55% 55% 50% 50%;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
}

.body-belly {
  width: 70px;
  height: 60px;
  background: radial-gradient(ellipse at 50% 50%, #FFFFFF 0%, #FFFAF0 50%, #FFE4B5 100%);
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.nailong-arms {
  position: absolute;
  top: 135px;
  left: 0;
  right: 0;
}

.arm {
  width: 55px;
  height: 40px;
  background: radial-gradient(ellipse at 70% 30%, #FFD93D 0%, #FFB347 100%);
  border-radius: 50%;
  position: absolute;
}

.arm.left {
  left: 20px;
  transform: rotate(-40deg);
}

.arm.right {
  right: 20px;
  transform: rotate(40deg);
}

.arm.covering {
  animation: cover-face 1.5s ease-in-out infinite;
}

.arm-pad {
  width: 18px;
  height: 13px;
  background: rgba(255, 182, 193, 0.7);
  border-radius: 50%;
  position: absolute;
  top: 60%;
  left: 10%;
}

.face-cover {
  width: 30px;
  height: 30px;
  background: rgba(255, 189, 67, 0.8);
  border-radius: 50%;
  position: absolute;
  top: -15px;
}

.arm.left .face-cover {
  right: -10px;
}

.arm.right .face-cover {
  left: -10px;
}

.nailong-legs {
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
}

.leg {
  width: 40px;
  height: 50px;
  background: radial-gradient(ellipse at 50% 20%, #FFB347 0%, #FF9F43 100%);
  border-radius: 50%;
}

.leg-pad {
  width: 22px;
  height: 15px;
  background: rgba(255, 182, 193, 0.6);
  border-radius: 50%;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
}

.shy-lines {
  position: absolute;
  top: 80px;
  left: -30px;
}

.line {
  position: absolute;
  font-size: 18px;
  animation: line-flow 1s ease-in-out infinite;
}

.line:nth-child(1) {
  top: 0;
  animation-delay: 0s;
}

.line:nth-child(2) {
  top: 15px;
  animation-delay: 0.2s;
}

.line:nth-child(3) {
  top: 30px;
  animation-delay: 0.4s;
}

.embarrassment-sweat {
  position: absolute;
  top: 70px;
  right: 10px;
}

.drop {
  position: absolute;
  font-size: 16px;
  animation: sweat-drop 1.5s ease-in-out infinite;
}

.drop:nth-child(1) {
  top: 0;
  animation-delay: 0s;
}

.drop:nth-child(2) {
  top: 20px;
  animation-delay: 0.5s;
}

@keyframes head-hide {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

@keyframes blush {
  0%, 100% {
    background: rgba(255, 105, 180, 0.7);
  }
  50% {
    background: rgba(255, 105, 180, 0.9);
  }
}

@keyframes cover-face {
  0%, 100% {
    transform: rotate(-40deg);
  }
  50% {
    transform: rotate(-30deg);
  }
}

@keyframes line-flow {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(-30px);
    opacity: 0;
  }
}

@keyframes sweat-drop {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(30px);
    opacity: 0;
  }
}
</style>
