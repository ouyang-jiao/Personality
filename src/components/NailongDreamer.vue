<template>
  <div class="nailong-dreamer">
    <div class="nailong-shadow"></div>
    <div class="nailong-body-wrapper">
      <div class="nailong-head">
        <div class="head-shine"></div>
        <div class="eyes closed">
          <div class="eye left">
            <div class="eye-lid"></div>
          </div>
          <div class="eye right">
            <div class="eye-lid"></div>
          </div>
        </div>
        <div class="nose"></div>
        <div class="mouth dreaming">
          <div class="mouth-curve"></div>
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
        <div class="arm left">
          <div class="arm-pad"></div>
          <div class="arm-claws">
            <div class="claw"></div>
            <div class="claw"></div>
            <div class="claw"></div>
          </div>
        </div>
        <div class="arm right">
          <div class="arm-pad"></div>
          <div class="arm-claws">
            <div class="claw"></div>
            <div class="claw"></div>
            <div class="claw"></div>
          </div>
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
      <div class="dream-clouds">
        <div class="dream-cloud cloud1">
          <span class="dream-content">💰</span>
        </div>
        <div class="dream-cloud cloud2">
          <span class="dream-content">🏠</span>
        </div>
        <div class="dream-cloud cloud3">
          <span class="dream-content">🚗</span>
        </div>
      </div>
      <div class="money-particles">
        <span class="coin">🪙</span>
        <span class="coin">💰</span>
        <span class="coin">💎</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nailong-dreamer {
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

.eye {
  width: 38px;
  height: 44px;
  background: #90EE90;
  border-radius: 50%;
  position: relative;
}

.eye-lid {
  width: 100%;
  height: 50%;
  background: #FFB347;
  border-radius: 50% 50% 0 0;
  position: absolute;
  top: 0;
  animation: blink-dream 3s ease-in-out infinite;
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

.mouth.dreaming .mouth-curve {
  width: 45px;
  height: 18px;
  border-bottom: 4px solid #FF9F43;
  border-radius: 0 0 50px 50px;
  animation: smile-dream 2s ease-in-out infinite;
}

.cheeks {
  position: absolute;
  top: 60px;
  left: 5px;
  right: 5px;
  display: flex;
  justify-content: space-between;
}

.cheek {
  width: 28px;
  height: 20px;
  background: rgba(255, 182, 193, 0.6);
  border-radius: 50%;
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
  width: 50px;
  height: 35px;
  background: radial-gradient(ellipse at 70% 30%, #FFD93D 0%, #FFB347 100%);
  border-radius: 50%;
  position: absolute;
}

.arm.left {
  left: 25px;
  transform: rotate(-30deg);
  animation: daydream-arm 2s ease-in-out infinite;
}

.arm.right {
  right: 25px;
  transform: rotate(30deg);
  animation: daydream-arm 2s ease-in-out infinite reverse;
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

.arm-claws {
  position: absolute;
  top: 70%;
  left: 5%;
  display: flex;
  gap: 3px;
}

.arm-claws .claw {
  width: 5px;
  height: 8px;
  background: #5c4033;
  border-radius: 0 0 50% 50%;
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

.dream-clouds {
  position: absolute;
  top: 30px;
  right: -20px;
}

.dream-cloud {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  padding: 10px 20px;
  position: absolute;
  animation: dream-float 4s ease-in-out infinite;
}

.cloud1 {
  top: 0;
  right: 0;
  animation-delay: 0s;
}

.cloud2 {
  top: 40px;
  right: 20px;
  animation-delay: 1.5s;
}

.cloud3 {
  top: 80px;
  right: 0;
  animation-delay: 3s;
}

.dream-content {
  font-size: 24px;
}

.money-particles {
  position: absolute;
  top: 100px;
  right: 0;
}

.coin {
  position: absolute;
  font-size: 20px;
  animation: coin-fall 2s ease-in-out infinite;
}

.coin:nth-child(1) {
  right: 40px;
  animation-delay: 0s;
}

.coin:nth-child(2) {
  right: 60px;
  animation-delay: 0.7s;
}

.coin:nth-child(3) {
  right: 50px;
  animation-delay: 1.4s;
}

@keyframes blink-dream {
  0%, 90%, 100% {
    top: 0;
    height: 50%;
  }
  95% {
    top: 50%;
    height: 50%;
  }
}

@keyframes smile-dream {
  0%, 100% {
    height: 18px;
  }
  50% {
    height: 12px;
  }
}

@keyframes daydream-arm {
  0%, 100% {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(-40deg);
  }
}

@keyframes dream-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
    opacity: 1;
  }
}

@keyframes coin-fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(80px) rotate(360deg);
    opacity: 0;
  }
}
</style>
