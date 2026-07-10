<template>
  <div class="nailong-procrastinate">
    <div class="nailong-shadow"></div>
    <div class="nailong-body-wrapper">
      <div class="nailong-head lazy">
        <div class="head-shine"></div>
        <div class="eyes lazy">
          <div class="eye left">
            <div class="eye-white"></div>
            <div class="eye-pupil half"></div>
            <div class="eye-highlight"></div>
          </div>
          <div class="eye right">
            <div class="eye-white"></div>
            <div class="eye-pupil half"></div>
            <div class="eye-highlight"></div>
          </div>
        </div>
        <div class="nose"></div>
        <div class="mouth lazy">
          <div class="mouth-curve"></div>
        </div>
        <div class="cheeks">
          <div class="cheek left"></div>
          <div class="cheek right"></div>
        </div>
        <div class="yawn">
          <span>😴</span>
        </div>
      </div>
      <div class="nailong-body lying">
        <div class="body-belly"></div>
      </div>
      <div class="nailong-arms">
        <div class="arm left lazy">
          <div class="arm-pad"></div>
          <div class="arm-claws">
            <div class="claw"></div>
            <div class="claw"></div>
            <div class="claw"></div>
          </div>
        </div>
        <div class="arm right lazy">
          <div class="arm-pad"></div>
          <div class="arm-claws">
            <div class="claw"></div>
            <div class="claw"></div>
            <div class="claw"></div>
          </div>
        </div>
      </div>
      <div class="nailong-legs">
        <div class="leg left crossed">
          <div class="leg-pad"></div>
        </div>
        <div class="leg right crossed">
          <div class="leg-pad"></div>
        </div>
      </div>
      <div class="lazy-items">
        <div class="clock">⏰</div>
        <div class="plan-list">
          <span>📝</span>
          <span class="check">✓</span>
          <span class="check">✓</span>
          <span class="uncheck">✗</span>
          <span class="uncheck">✗</span>
          <span class="uncheck">✗</span>
        </div>
      </div>
      <div class="sleep-lines">
        <span class="z">z</span>
        <span class="z">Z</span>
        <span class="z">Z</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nailong-procrastinate {
  width: 280px;
  height: 300px;
  position: relative;
  margin: 0 auto;
}

.nailong-shadow {
  width: 180px;
  height: 30px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(10px);
}

.nailong-body-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.nailong-head {
  width: 130px;
  height: 115px;
  background: radial-gradient(ellipse at 30% 30%, #FFD93D 0%, #FFB347 50%, #FF9F43 100%);
  border-radius: 55% 55% 50% 50%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 
    inset -8px -8px 18px rgba(255, 159, 67, 0.3),
    0 8px 25px rgba(255, 159, 67, 0.3);
}

.nailong-head.lazy {
  animation: head-nod 2s ease-in-out infinite;
}

.head-shine {
  width: 40px;
  height: 22px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  position: absolute;
  top: 12px;
  left: 18px;
  transform: rotate(-30deg);
}

.eyes {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 28px;
}

.eyes.lazy {
  top: 45px;
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

.eye-pupil.half {
  width: 12px;
  height: 20px;
  background: #1a1a1a;
  border-radius: 50%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: eye-droop 3s ease-in-out infinite;
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
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
}

.mouth {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.mouth.lazy .mouth-curve {
  width: 35px;
  height: 10px;
  border-bottom: 3px solid #FF9F43;
  border-radius: 0 0 50px 50px;
}

.cheeks {
  position: absolute;
  top: 55px;
  left: 5px;
  right: 5px;
  display: flex;
  justify-content: space-between;
}

.cheek {
  width: 25px;
  height: 18px;
  background: rgba(255, 182, 193, 0.5);
  border-radius: 50%;
}

.yawn {
  position: absolute;
  top: -20px;
  right: -10px;
  font-size: 24px;
  animation: yawn-float 2s ease-in-out infinite;
}

.nailong-body {
  width: 150px;
  height: 90px;
  background: radial-gradient(ellipse at 30% 30%, #FFD93D 0%, #FFB347 50%, #FF9F43 100%);
  border-radius: 50% 50% 45% 45%;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.body-belly {
  width: 80px;
  height: 50px;
  background: radial-gradient(ellipse at 50% 50%, #FFFFFF 0%, #FFFAF0 50%, #FFE4B5 100%);
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
}

.nailong-arms {
  position: absolute;
  top: 110px;
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
  left: 30px;
  transform: rotate(-20deg);
}

.arm.right {
  right: 30px;
  transform: rotate(20deg);
}

.arm.lazy {
  animation: arm-dangle 2s ease-in-out infinite;
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
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}

.leg {
  width: 45px;
  height: 55px;
  background: radial-gradient(ellipse at 50% 20%, #FFB347 0%, #FF9F43 100%);
  border-radius: 50%;
  position: absolute;
}

.leg.left {
  left: -25px;
  transform: rotate(15deg);
}

.leg.right {
  right: -25px;
  transform: rotate(-15deg);
}

.leg.crossed {
  animation: leg-swing 3s ease-in-out infinite;
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

.lazy-items {
  position: absolute;
  top: 60px;
  left: -40px;
}

.clock {
  font-size: 28px;
  animation: clock-tick 1s ease-in-out infinite;
}

.plan-list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.plan-list span {
  font-size: 14px;
}

.check {
  color: #6BCB77;
}

.uncheck {
  color: #FF6B35;
}

.sleep-lines {
  position: absolute;
  top: 40px;
  right: -20px;
}

.z {
  position: absolute;
  font-size: 18px;
  color: #8B7355;
  animation: z-float 2s ease-in-out infinite;
}

.z:nth-child(1) {
  right: 0;
  animation-delay: 0s;
}

.z:nth-child(2) {
  right: 15px;
  top: 15px;
  font-size: 22px;
  animation-delay: 0.5s;
}

.z:nth-child(3) {
  right: 30px;
  top: 35px;
  font-size: 26px;
  animation-delay: 1s;
}

@keyframes head-nod {
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

@keyframes eye-droop {
  0%, 100% {
    top: 60%;
    height: 20px;
  }
  50% {
    top: 65%;
    height: 10px;
  }
}

@keyframes yawn-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes arm-dangle {
  0%, 100% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(-30deg);
  }
}

@keyframes leg-swing {
  0%, 100% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
}

@keyframes clock-tick {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
}

@keyframes z-float {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-10px);
    opacity: 1;
  }
}
</style>
