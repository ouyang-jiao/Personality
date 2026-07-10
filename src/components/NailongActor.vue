<template>
  <div class="nailong-actor">
    <div class="nailong-shadow"></div>
    <div class="nailong-body-wrapper">
      <div class="nailong-head acting">
        <div class="head-shine"></div>
        <div class="eyes acting">
          <div class="eye left">
            <div class="eye-white"></div>
            <div class="eye-pupil"></div>
            <div class="eye-highlight"></div>
          </div>
          <div class="eye right">
            <div class="eye-white"></div>
            <div class="eye-pupil"></div>
            <div class="eye-highlight"></div>
          </div>
        </div>
        <div class="nose"></div>
        <div class="mouth acting">
          <div class="mouth-curve"></div>
        </div>
        <div class="cheeks">
          <div class="cheek left"></div>
          <div class="cheek right"></div>
        </div>
        <div class="acting-sweat">
          <span>💦</span>
        </div>
      </div>
      <div class="nailong-body">
        <div class="body-belly"></div>
      </div>
      <div class="nailong-arms">
        <div class="arm left acting">
          <div class="arm-pad"></div>
          <div class="arm-claws">
            <div class="claw"></div>
            <div class="claw"></div>
            <div class="claw"></div>
          </div>
        </div>
        <div class="arm right acting">
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
      <div class="drama-masks">
        <div class="mask happy">😊</div>
        <div class="mask sad">😢</div>
        <div class="mask angry">😤</div>
      </div>
      <div class="spotlight">
        <div class="light-beam"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nailong-actor {
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

.nailong-head.acting {
  animation: head-act 1.5s ease-in-out infinite;
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

.eyes.acting {
  animation: eye-widening 1.5s ease-in-out infinite;
}

.eye {
  width: 38px;
  height: 44px;
  background: #90EE90;
  border-radius: 50%;
  position: relative;
}

.eye-white {
  width: 27px;
  height: 32px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.eye-pupil {
  width: 18px;
  height: 22px;
  background: #1a1a1a;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.eye-highlight {
  width: 7px;
  height: 7px;
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

.mouth.acting .mouth-curve {
  width: 45px;
  height: 15px;
  border-bottom: 4px solid #FF9F43;
  border-radius: 0 0 50px 50px;
  animation: mouth-smile 1.5s ease-in-out infinite;
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
  animation: blush-act 1.5s ease-in-out infinite;
}

.acting-sweat {
  position: absolute;
  top: 50px;
  right: -15px;
  font-size: 20px;
  animation: sweat-bubble 1s ease-in-out infinite;
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
  transform: rotate(-25deg);
}

.arm.right {
  right: 25px;
  transform: rotate(25deg);
}

.arm.acting {
  animation: arm-gesture 2s ease-in-out infinite;
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

.drama-masks {
  position: absolute;
  top: 40px;
  left: -30px;
}

.mask {
  font-size: 24px;
  position: absolute;
  animation: mask-switch 3s ease-in-out infinite;
}

.mask.happy {
  top: 0;
  animation-delay: 0s;
}

.mask.sad {
  top: 35px;
  animation-delay: 1s;
}

.mask.angry {
  top: 70px;
  animation-delay: 2s;
}

.spotlight {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}

.light-beam {
  width: 200px;
  height: 200px;
  background: radial-gradient(ellipse at center top, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: light-pulse 2s ease-in-out infinite;
}

@keyframes head-act {
  0%, 100% {
    transform: translateX(-50%) rotate(0deg);
  }
  25% {
    transform: translateX(-50%) rotate(-5deg);
  }
  75% {
    transform: translateX(-50%) rotate(5deg);
  }
}

@keyframes eye-widening {
  0%, 100% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(1.1);
  }
}

@keyframes mouth-smile {
  0%, 100% {
    height: 15px;
  }
  50% {
    height: 10px;
  }
}

@keyframes blush-act {
  0%, 100% {
    background: rgba(255, 182, 193, 0.6);
  }
  50% {
    background: rgba(255, 105, 180, 0.8);
  }
}

@keyframes sweat-bubble {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-5px);
    opacity: 0.7;
  }
}

@keyframes arm-gesture {
  0%, 100% {
    transform: rotate(-25deg);
  }
  50% {
    transform: rotate(-10deg);
  }
}

@keyframes mask-switch {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}

@keyframes light-pulse {
  0%, 100% {
    opacity: 0.5;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translateX(-50%) scale(1.1);
  }
}
</style>
