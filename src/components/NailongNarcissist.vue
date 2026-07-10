<template>
  <div class="nailong-narcissist-container">
    <div class="nailong-base">
      <div class="nailong-head">
        <div class="horns">
          <div class="horn"></div>
          <div class="horn"></div>
        </div>
        <div class="eyes">
          <div class="eye">
            <div class="pupil"></div>
            <div class="heart-pupil"></div>
          </div>
          <div class="eye">
            <div class="pupil"></div>
            <div class="heart-pupil"></div>
          </div>
        </div>
        <div class="mouth proud"></div>
        <div class="cheeks">
          <div class="cheek"></div>
          <div class="cheek"></div>
        </div>
        <div class="crown">👑</div>
      </div>
      <div class="nailong-body">
        <div class="belly"></div>
      </div>
      <div class="arms">
        <div class="arm left">
          <div class="hand holding-mirror">
            <div class="mirror">
              <div class="mirror-frame"></div>
              <div class="mirror-glass">
                <span>💖</span>
              </div>
            </div>
          </div>
        </div>
        <div class="arm right">
          <div class="hand">
            <span class="pose">💅</span>
          </div>
        </div>
      </div>
      <div class="legs">
        <div class="leg"></div>
        <div class="leg"></div>
      </div>
    </div>
    
    <div class="sparkle-particles">
      <span v-for="i in 15" :key="i" class="sparkle" :style="{ animationDelay: `${i * 0.1}s` }">✨</span>
    </div>
    
    <div class="love-hearts">
      <span v-for="i in 5" :key="i" class="heart" :style="{ animationDelay: `${i * 0.3}s` }">❤️</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nailong-narcissist-container {
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
  animation: narcissist-bounce 2s ease-in-out infinite;
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

.crown {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 35px;
  animation: crown-float 1s ease-in-out infinite;
}

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
  background: #E040FB;
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
  background: #880E4F;
  border-radius: 50%;
}

.heart-pupil {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: #FF1744;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  animation: heart-pulse 0.5s ease-in-out infinite;
}

.mouth {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 12px;
}

.mouth.proud {
  border-bottom: 3px solid #E65100;
  border-radius: 0 0 50% 50%;
  transform: translateX(-50%) scaleX(1.2);
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
  background: rgba(255, 152, 183, 0.9);
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
  transform: rotate(-30deg);
}

.arm.right {
  transform: rotate(30deg);
  animation: pose-animation 1.5s ease-in-out infinite;
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

.hand.holding-mirror {
  width: 30px;
  height: 25px;
}

.mirror {
  position: absolute;
  top: -35px;
  left: -5px;
}

.mirror-frame {
  width: 35px;
  height: 45px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA000 100%);
  border-radius: 5px;
  padding: 3px;
}

.mirror-glass {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #E8EAF6 0%, #C5CAE9 100%);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

.pose {
  font-size: 20px;
  animation: pose-shine 1s ease-in-out infinite;
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

.sparkle-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.sparkle {
  position: absolute;
  font-size: 16px;
  animation: sparkle-float 2s ease-in-out infinite;
}

.sparkle:nth-child(1) { top: 10%; left: 10%; }
.sparkle:nth-child(2) { top: 20%; right: 5%; }
.sparkle:nth-child(3) { top: 30%; left: 5%; }
.sparkle:nth-child(4) { top: 40%; right: 15%; }
.sparkle:nth-child(5) { top: 50%; left: 20%; }
.sparkle:nth-child(6) { top: 60%; right: 8%; }
.sparkle:nth-child(7) { top: 70%; left: 15%; }
.sparkle:nth-child(8) { top: 80%; right: 12%; }
.sparkle:nth-child(9) { top: 15%; left: 25%; }
.sparkle:nth-child(10) { top: 25%; right: 20%; }
.sparkle:nth-child(11) { top: 35%; left: -5%; }
.sparkle:nth-child(12) { top: 45%; right: -2%; }
.sparkle:nth-child(13) { top: 55%; left: 30%; }
.sparkle:nth-child(14) { top: 65%; right: 25%; }
.sparkle:nth-child(15) { top: 75%; left: -8%; }

.love-hearts {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.heart {
  position: absolute;
  font-size: 18px;
  animation: heart-float 2.5s ease-in-out infinite;
}

.heart:nth-child(1) { top: 20%; left: 5%; }
.heart:nth-child(2) { top: 40%; right: 0%; }
.heart:nth-child(3) { top: 60%; left: -5%; }
.heart:nth-child(4) { top: 30%; right: 15%; }
.heart:nth-child(5) { top: 50%; left: 25%; }

@keyframes narcissist-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes crown-float {
  0%, 100% { transform: translateX(-50%) translateY(0) rotate(-5deg); }
  50% { transform: translateX(-50%) translateY(-5px) rotate(5deg); }
}

@keyframes heart-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}

@keyframes pose-animation {
  0%, 100% { transform: rotate(30deg); }
  50% { transform: rotate(45deg); }
}

@keyframes pose-shine {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}

@keyframes sparkle-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-20px) rotate(30deg); opacity: 1; }
}

@keyframes heart-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
  50% { transform: translateY(-30px) rotate(15deg); opacity: 0.9; }
}
</style>
