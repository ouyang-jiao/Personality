<template>
  <div class="nailong-phone">
    <div class="nailong-shadow"></div>
    <div class="nailong-body-wrapper">
      <div class="nailong-head">
        <div class="head-shine"></div>
        <div class="eyes">
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
        <div class="mouth">
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
        <div class="arm right holding-phone">
          <div class="arm-pad"></div>
          <div class="smartphone">
            <div class="phone-screen">
              <div class="screen-content">
                <div class="video-bar"></div>
                <div class="video-bar"></div>
                <div class="video-bar"></div>
              </div>
            </div>
            <div class="phone-notch"></div>
            <div class="phone-home"></div>
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
      <div class="phone-glow">
        <div class="glow-ring"></div>
        <div class="glow-ring delay-1"></div>
        <div class="glow-ring delay-2"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nailong-phone {
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

.eye-pupil.small {
  width: 12px;
  height: 15px;
  background: #1a1a1a;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: eye-move 2s ease-in-out infinite;
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

.mouth-curve {
  width: 40px;
  height: 12px;
  border-bottom: 3px solid #FF9F43;
  border-radius: 0 0 50px 50px;
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
  transform: rotate(-25deg);
}

.arm.right {
  right: 20px;
  transform: rotate(15deg);
}

.arm.right.holding-phone {
  animation: phone-tap 0.8s ease-in-out infinite;
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

.smartphone {
  width: 45px;
  height: 80px;
  background: #1a1a1a;
  border-radius: 8px;
  position: absolute;
  right: -25px;
  top: -40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.phone-screen {
  width: 38px;
  height: 65px;
  background: #000;
  border-radius: 5px;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}

.screen-content {
  padding: 5px;
}

.video-bar {
  width: 100%;
  height: 4px;
  background: #FF6B35;
  border-radius: 2px;
  margin-bottom: 3px;
  animation: video-play 1s ease-in-out infinite;
}

.video-bar:nth-child(2) {
  animation-delay: 0.2s;
}

.video-bar:nth-child(3) {
  animation-delay: 0.4s;
}

.phone-notch {
  width: 15px;
  height: 5px;
  background: #1a1a1a;
  border-radius: 0 0 5px 5px;
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
}

.phone-home {
  width: 12px;
  height: 12px;
  border: 2px solid #444;
  border-radius: 50%;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
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

.phone-glow {
  position: absolute;
  top: 60px;
  right: 20px;
}

.glow-ring {
  width: 60px;
  height: 60px;
  border: 2px solid rgba(59, 130, 246, 0.4);
  border-radius: 50%;
  position: absolute;
  animation: glow-expand 1.5s ease-out infinite;
}

.glow-ring.delay-1 {
  animation-delay: 0.5s;
}

.glow-ring.delay-2 {
  animation-delay: 1s;
}

@keyframes eye-move {
  0%, 100% {
    transform: translate(-50%, -50%);
  }
  25% {
    transform: translate(-30%, -50%);
  }
  75% {
    transform: translate(-70%, -50%);
  }
}

@keyframes phone-tap {
  0%, 100% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(25deg);
  }
}

@keyframes video-play {
  0%, 100% {
    width: 30%;
    opacity: 0.5;
  }
  50% {
    width: 100%;
    opacity: 1;
  }
}

@keyframes glow-expand {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
