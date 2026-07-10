<template>
  <div class="nailong-eater">
    <div class="nailong-shadow"></div>
    <div class="nailong-body-wrapper">
      <div class="nailong-head">
        <div class="head-shine"></div>
        <div class="eyes">
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
        <div class="mouth eating">
          <div class="mouth-open"></div>
          <div class="food-crumb crumb1"></div>
          <div class="food-crumb crumb2"></div>
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
        <div class="arm left holding">
          <div class="arm-pad"></div>
          <div class="food-item">🍗</div>
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
      <div class="food-particles">
        <span class="particle">🍟</span>
        <span class="particle">🍔</span>
        <span class="particle">🍕</span>
        <span class="particle">🍜</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nailong-eater {
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

.mouth.eating .mouth-open {
  width: 40px;
  height: 25px;
  background: #5c4033;
  border-radius: 0 0 50px 50px;
  position: relative;
  animation: mouth-bite 0.5s ease-in-out infinite;
}

.food-crumb {
  position: absolute;
  background: #8B4513;
  border-radius: 50%;
  animation: crumb-bounce 0.5s ease-in-out infinite;
}

.crumb1 {
  width: 6px;
  height: 6px;
  top: -8px;
  left: 10px;
}

.crumb2 {
  width: 5px;
  height: 5px;
  top: -5px;
  right: 12px;
  animation-delay: 0.2s;
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
  transform: rotate(-35deg);
}

.arm.left.holding {
  animation: eating-motion 1s ease-in-out infinite;
}

.arm.right {
  right: 25px;
  transform: rotate(20deg);
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

.food-item {
  font-size: 30px;
  position: absolute;
  left: -20px;
  top: -15px;
  animation: food-bounce 0.5s ease-in-out infinite;
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

.food-particles {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.particle {
  position: absolute;
  font-size: 20px;
  animation: particle-float 2s ease-in-out infinite;
}

.particle:nth-child(1) {
  left: -60px;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  left: -30px;
  animation-delay: 0.3s;
}

.particle:nth-child(3) {
  right: -30px;
  animation-delay: 0.6s;
}

.particle:nth-child(4) {
  right: -60px;
  animation-delay: 0.9s;
}

@keyframes mouth-bite {
  0%, 100% {
    height: 25px;
  }
  50% {
    height: 15px;
  }
}

@keyframes crumb-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes eating-motion {
  0%, 100% {
    transform: rotate(-35deg);
  }
  50% {
    transform: rotate(-20deg);
  }
}

@keyframes food-bounce {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(10deg);
  }
}

@keyframes particle-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateY(-30px) rotate(20deg);
    opacity: 0.5;
  }
}
</style>
