<template>
  <div class="nailong-debater-container">
    <div class="nailong-base">
      <div class="nailong-head">
        <div class="horns">
          <div class="horn"></div>
          <div class="horn"></div>
        </div>
        <div class="eyes">
          <div class="eye angry">
            <div class="pupil"></div>
            <div class="eyebrow angry"></div>
          </div>
          <div class="eye angry">
            <div class="pupil"></div>
            <div class="eyebrow angry"></div>
          </div>
        </div>
        <div class="mouth arguing"></div>
        <div class="cheeks">
          <div class="cheek"></div>
          <div class="cheek"></div>
        </div>
      </div>
      <div class="nailong-body">
        <div class="belly"></div>
      </div>
      <div class="arms">
        <div class="arm left">
          <div class="hand pointing">
            <span>✊</span>
          </div>
        </div>
        <div class="arm right">
          <div class="hand pointing">
            <span>✊</span>
          </div>
        </div>
      </div>
      <div class="legs">
        <div class="leg"></div>
        <div class="leg"></div>
      </div>
    </div>
    
    <div class="debate-particles">
      <span v-for="i in 10" :key="i" class="particle" :style="{ animationDelay: `${i * 0.1}s` }">
        {{ ['🔥', '💥', '⚡', '💢', '🤯'][i % 5] }}
      </span>
    </div>
    
    <div class="argue-bubbles">
      <div class="bubble bubble-1">不对！</div>
      <div class="bubble bubble-2">我觉得...</div>
      <div class="bubble bubble-3">不是这样！</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nailong-debater-container {
  position: relative;
  width: 200px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nailong-base {
  position: relative;
  width: 150px;
  height: 220px;
  animation: argue-shake 0.3s ease-in-out infinite;
}

.nailong-head {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 90px;
  background: linear-gradient(135deg, #FFD93D 0%, #FFB347 50%, #FF9800 100%);
  border-radius: 50% 50% 45% 45%;
  box-shadow: inset -5px -5px 10px rgba(255, 152, 0, 0.3), 0 3px 10px rgba(0,0,0,0.2);
}

.horns {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  display: flex;
  justify-content: space-between;
}

.horn {
  width: 12px;
  height: 20px;
  background: linear-gradient(135deg, #8D6E63 0%, #6D4C41 100%);
  border-radius: 50% 50% 20% 20%;
}

.horn:first-child { transform: rotate(-15deg); }
.horn:last-child { transform: rotate(15deg); }

.eyes {
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  display: flex;
  justify-content: space-between;
}

.eye {
  width: 25px;
  height: 25px;
  background: #FF5252;
  border-radius: 50%;
  position: relative;
}

.eye.angry {
  animation: eye-angry 0.2s ease-in-out infinite;
}

.pupil {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: #B71C1C;
  border-radius: 50%;
}

.eyebrow {
  position: absolute;
  top: -8px;
  width: 25px;
  height: 6px;
  background: #E65100;
  border-radius: 5px;
}

.eyebrow.angry {
  transform: rotate(-15deg);
  animation: eyebrow-angry 0.2s ease-in-out infinite;
}

.eye:last-child .eyebrow.angry {
  transform: rotate(15deg);
}

.mouth {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 15px;
}

.mouth.arguing {
  background: #E65100;
  border-radius: 5px;
  animation: mouth-argue 0.2s ease-in-out infinite;
}

.cheeks {
  position: absolute;
  top: 50px;
  left: 5px;
  width: 90px;
  display: flex;
  justify-content: space-between;
}

.cheek {
  width: 18px;
  height: 12px;
  background: rgba(255, 82, 82, 0.7);
  border-radius: 50%;
}

.nailong-body {
  position: absolute;
  top: 85px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 80px;
  background: linear-gradient(135deg, #FFB347 0%, #FF9800 100%);
  border-radius: 50% 50% 40% 40%;
}

.belly {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 55px;
  height: 50px;
  background: linear-gradient(135deg, #FFF9C4 0%, #FFECB3 100%);
  border-radius: 50% 50% 45% 45%;
}

.arms {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  width: 150px;
  display: flex;
  justify-content: space-between;
}

.arm {
  width: 45px;
  height: 50px;
  background: linear-gradient(135deg, #FFB347 0%, #FF9800 100%);
  border-radius: 30px;
}

.arm.left {
  transform: rotate(-35deg);
  animation: argue-gesture-left 0.25s ease-in-out infinite;
}

.arm.right {
  transform: rotate(35deg);
  animation: argue-gesture-right 0.25s ease-in-out infinite;
}

.hand {
  position: absolute;
  bottom: 5px;
  width: 20px;
  height: 18px;
  background: linear-gradient(135deg, #FFB347 0%, #FF9800 100%);
  border-radius: 50%;
}

.arm.left .hand { left: 5px; }
.arm.right .hand { right: 5px; }

.hand.pointing span {
  font-size: 20px;
}

.legs {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  display: flex;
  justify-content: space-between;
}

.leg {
  width: 25px;
  height: 30px;
  background: linear-gradient(135deg, #FFB347 0%, #FF9800 100%);
  border-radius: 20px;
}

.debate-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  font-size: 18px;
  animation: debate-float 1.5s ease-in-out infinite;
}

.particle:nth-child(1) { top: 15%; left: 5%; }
.particle:nth-child(2) { top: 25%; right: 0%; }
.particle:nth-child(3) { top: 35%; left: -5%; }
.particle:nth-child(4) { top: 45%; right: 10%; }
.particle:nth-child(5) { top: 55%; left: 20%; }
.particle:nth-child(6) { top: 65%; right: 5%; }
.particle:nth-child(7) { top: 20%; left: 25%; }
.particle:nth-child(8) { top: 30%; right: 20%; }
.particle:nth-child(9) { top: 50%; left: -8%; }
.particle:nth-child(10) { top: 60%; right: 25%; }

.argue-bubbles {
  position: absolute;
  top: -50px;
  right: -50px;
}

.bubble {
  background: linear-gradient(135deg, #FF5252 0%, #FF1744 100%);
  color: white;
  padding: 8px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
  animation: bubble-appear 1s ease-in-out infinite;
}

.bubble-1 {
  top: 0;
  right: 0;
}

.bubble-2 {
  top: 30px;
  right: 25px;
  animation-delay: 0.3s;
}

.bubble-3 {
  top: 60px;
  right: 10px;
  animation-delay: 0.6s;
}

@keyframes argue-shake {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-3px) rotate(-2deg); }
  75% { transform: translateX(3px) rotate(2deg); }
}

@keyframes eye-angry {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes eyebrow-angry {
  0%, 100% { transform: rotate(-15deg); }
  50% { transform: rotate(-25deg); }
}

@keyframes mouth-argue {
  0%, 100% { height: 15px; width: 30px; }
  50% { height: 20px; width: 35px; }
}

@keyframes argue-gesture-left {
  0%, 100% { transform: rotate(-35deg); }
  50% { transform: rotate(-15deg); }
}

@keyframes argue-gesture-right {
  0%, 100% { transform: rotate(35deg); }
  50% { transform: rotate(15deg); }
}

@keyframes debate-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-15px) rotate(20deg); opacity: 0.8; }
}

@keyframes bubble-appear {
  0%, 100% { opacity: 0; transform: translateY(10px) scale(0.8); }
  30%, 70% { opacity: 1; transform: translateY(0) scale(1); }
}
</style>
