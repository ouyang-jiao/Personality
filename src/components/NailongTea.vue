<template>
  <div class="nailong-tea-container">
    <div class="nailong-base">
      <div class="nailong-head">
        <div class="horns">
          <div class="horn"></div>
          <div class="horn"></div>
        </div>
        <div class="eyes">
          <div class="eye">
            <div class="pupil"></div>
          </div>
          <div class="eye">
            <div class="pupil"></div>
          </div>
        </div>
        <div class="mouth happy"></div>
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
          <div class="hand holding-tea">
            <div class="tea-cup">
              <div class="cup-body">
                <div class="tea-liquid"></div>
              </div>
              <div class="cup-handle"></div>
              <div class="cup-lid"></div>
              <div class="tea-straw"></div>
              <div class="bubbles">
                <span v-for="i in 5" :key="i" class="bubble"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="arm right"></div>
      </div>
      <div class="legs">
        <div class="leg"></div>
        <div class="leg"></div>
      </div>
    </div>
    
    <div class="tea-particles">
      <span v-for="i in 8" :key="i" class="particle" :style="{ animationDelay: `${i * 0.2}s` }">🧋</span>
    </div>
    
    <div class="nailong-caffeine">
      <span class="caffeine-icon">☕</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nailong-tea-container {
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
  animation: tea-bounce 2s ease-in-out infinite;
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
  background: #4CAF50;
  border-radius: 50%;
  position: relative;
}

.pupil {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: #1B5E20;
  border-radius: 50%;
}

.mouth {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 10px;
}

.mouth.happy {
  border-bottom: 3px solid #E65100;
  border-radius: 0 0 50% 50%;
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
  width: 15px;
  height: 10px;
  background: rgba(255, 152, 183, 0.7);
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
  transform: rotate(-20deg);
  animation: drink-animation 1.5s ease-in-out infinite;
}

.arm.right {
  transform: rotate(20deg);
}

.hand {
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 20px;
  height: 18px;
  background: linear-gradient(135deg, #FFB347 0%, #FF9800 100%);
  border-radius: 50%;
}

.hand.holding-tea {
  width: 35px;
  height: 30px;
  left: 0;
  bottom: 0;
}

.tea-cup {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
}

.cup-body {
  width: 40px;
  height: 50px;
  background: linear-gradient(135deg, #FF9E80 0%, #FF6F60 100%);
  border-radius: 5px 5px 10px 10px;
  position: relative;
  overflow: hidden;
}

.tea-liquid {
  position: absolute;
  bottom: 5px;
  left: 5px;
  right: 5px;
  height: 35px;
  background: linear-gradient(135deg, #8D6E63 0%, #5D4037 100%);
  border-radius: 0 0 8px 8px;
}

.cup-handle {
  position: absolute;
  right: -8px;
  top: 15px;
  width: 12px;
  height: 25px;
  border: 4px solid #FF9E80;
  border-left: none;
  border-radius: 0 15px 15px 0;
}

.cup-lid {
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 8px;
  background: #FF9E80;
  border-radius: 5px;
}

.tea-straw {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 45px;
  background: #FFF;
  border-radius: 3px;
}

.bubbles {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.bubble {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(255,255,255,0.8);
  border-radius: 50%;
  animation: bubble-rise 1s ease-out infinite;
}

.bubble:nth-child(1) { left: -5px; animation-delay: 0s; }
.bubble:nth-child(2) { left: 5px; animation-delay: 0.2s; }
.bubble:nth-child(3) { left: 15px; animation-delay: 0.4s; }
.bubble:nth-child(4) { left: -2px; animation-delay: 0.6s; }
.bubble:nth-child(5) { left: 10px; animation-delay: 0.8s; }

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

.tea-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  font-size: 20px;
  animation: tea-float 3s ease-in-out infinite;
}

.particle:nth-child(1) { top: 20%; left: 10%; }
.particle:nth-child(2) { top: 40%; right: 5%; }
.particle:nth-child(3) { top: 60%; left: 0%; }
.particle:nth-child(4) { top: 30%; right: 15%; }
.particle:nth-child(5) { top: 70%; left: 20%; }
.particle:nth-child(6) { top: 50%; right: 0%; }
.particle:nth-child(7) { top: 25%; left: 5%; }
.particle:nth-child(8) { top: 65%; right: 10%; }

.nailong-caffeine {
  position: absolute;
  top: -30px;
  right: -20px;
  animation: caffeine-float 2s ease-in-out infinite;
}

.caffeine-icon {
  font-size: 35px;
}

@keyframes tea-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes drink-animation {
  0%, 100% { transform: rotate(-20deg) translateY(0); }
  50% { transform: rotate(-10deg) translateY(-5px); }
}

@keyframes bubble-rise {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-20px) scale(0); opacity: 0; }
}

@keyframes tea-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-25px) rotate(10deg); opacity: 0.8; }
}

@keyframes caffeine-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(15deg); }
}
</style>
