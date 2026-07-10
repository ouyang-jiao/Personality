<template>
  <div class="nailong-lost-container">
    <div class="nailong-base">
      <div class="nailong-head">
        <div class="horns">
          <div class="horn"></div>
          <div class="horn"></div>
        </div>
        <div class="eyes">
          <div class="eye confused">
            <div class="pupil"></div>
            <div class="question-mark">?</div>
          </div>
          <div class="eye confused">
            <div class="pupil"></div>
            <div class="question-mark">?</div>
          </div>
        </div>
        <div class="mouth confused"></div>
        <div class="cheeks">
          <div class="cheek"></div>
          <div class="cheek"></div>
        </div>
        <div class="sweat-drops">
          <span class="sweat">💧</span>
          <span class="sweat">💧</span>
        </div>
      </div>
      <div class="nailong-body">
        <div class="belly"></div>
      </div>
      <div class="arms">
        <div class="arm left">
          <div class="hand holding-map">
            <div class="map">
              <div class="map-body">🗺️</div>
            </div>
          </div>
        </div>
        <div class="arm right">
          <div class="hand holding-compass">
            <div class="compass">
              <div class="compass-ring">
                <span>N</span>
                <span>E</span>
                <span>S</span>
                <span>W</span>
              </div>
              <div class="compass-needle"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="legs">
        <div class="leg walking"></div>
        <div class="leg walking"></div>
      </div>
    </div>
    
    <div class="direction-arrows">
      <span class="arrow up">⬆️</span>
      <span class="arrow down">⬇️</span>
      <span class="arrow left">⬅️</span>
      <span class="arrow right">➡️</span>
    </div>
    
    <div class="lost-particles">
      <span v-for="i in 8" :key="i" class="particle" :style="{ animationDelay: `${i * 0.2}s` }">
        {{ ['🌀', '🌫️', '❓', '🔄'][i % 4] }}
      </span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nailong-lost-container {
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
  animation: lost-walk 1s ease-in-out infinite;
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

.sweat-drops {
  position: absolute;
  top: 20px;
  left: -10px;
  right: -10px;
  display: flex;
  justify-content: space-between;
}

.sweat {
  font-size: 20px;
  animation: sweat-drop 1.5s ease-in-out infinite;
}

.sweat:last-child { animation-delay: 0.5s; }

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
  background: #FFF;
  border-radius: 50%;
  position: relative;
}

.eye.confused {
  animation: eye-confused 0.5s ease-in-out infinite;
}

.pupil {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: #424242;
  border-radius: 50%;
}

.question-mark {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  color: #607D8B;
  animation: question-bounce 0.8s ease-in-out infinite;
}

.mouth {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 8px;
}

.mouth.confused {
  border-bottom: 3px solid #E65100;
  border-radius: 50%;
  animation: mouth-confused 0.5s ease-in-out infinite;
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
  background: rgba(255, 152, 183, 0.6);
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
  transform: rotate(-25deg);
}

.arm.right {
  transform: rotate(25deg);
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

.hand.holding-map {
  width: 30px;
  height: 25px;
}

.map {
  position: absolute;
  top: -25px;
  left: -10px;
  animation: map-tremble 0.3s ease-in-out infinite;
}

.map-body {
  font-size: 30px;
}

.hand.holding-compass {
  width: 28px;
  height: 28px;
}

.compass {
  position: absolute;
  top: -25px;
  right: -5px;
  width: 30px;
  height: 30px;
  background: #FFF;
  border-radius: 50%;
  border: 3px solid #607D8B;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: compass-spin 3s linear infinite;
}

.compass-ring {
  position: absolute;
  width: 100%;
  height: 100%;
}

.compass-ring span {
  position: absolute;
  font-size: 8px;
  font-weight: bold;
  color: #607D8B;
}

.compass-ring span:nth-child(1) { top: 2px; left: 50%; transform: translateX(-50%); }
.compass-ring span:nth-child(2) { top: 50%; right: 2px; transform: translateY(-50%); }
.compass-ring span:nth-child(3) { bottom: 2px; left: 50%; transform: translateX(-50%); }
.compass-ring span:nth-child(4) { top: 50%; left: 2px; transform: translateY(-50%); }

.compass-needle {
  width: 2px;
  height: 12px;
  background: linear-gradient(to top, #FF5252, #4CAF50);
  border-radius: 2px;
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

.leg.walking:nth-child(1) {
  animation: walk-left 0.5s ease-in-out infinite;
}

.leg.walking:nth-child(2) {
  animation: walk-right 0.5s ease-in-out infinite;
}

.direction-arrows {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.arrow {
  position: absolute;
  font-size: 20px;
  animation: arrow-float 1.5s ease-in-out infinite;
}

.arrow.up { top: 5%; left: 50%; transform: translateX(-50%); }
.arrow.down { bottom: 20%; left: 50%; transform: translateX(-50%); }
.arrow.left { top: 50%; left: -10%; transform: translateY(-50%); }
.arrow.right { top: 50%; right: -10%; transform: translateY(-50%); }

.lost-particles {
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
  animation: lost-float 2s ease-in-out infinite;
}

.particle:nth-child(1) { top: 20%; left: 0%; }
.particle:nth-child(2) { top: 30%; right: 5%; }
.particle:nth-child(3) { top: 40%; left: 25%; }
.particle:nth-child(4) { top: 50%; right: 20%; }
.particle:nth-child(5) { top: 60%; left: -5%; }
.particle:nth-child(6) { top: 70%; right: -5%; }
.particle:nth-child(7) { top: 35%; left: -8%; }
.particle:nth-child(8) { top: 65%; right: 25%; }

@keyframes lost-walk {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@keyframes sweat-drop {
  0%, 100% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0; }
}

@keyframes eye-confused {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

@keyframes question-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
  50% { transform: translateX(-50%) translateY(-5px) rotate(10deg); }
}

@keyframes mouth-confused {
  0%, 100% { transform: translateX(-50%) scaleX(1); }
  50% { transform: translateX(-50%) scaleX(1.3); }
}

@keyframes map-tremble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

@keyframes compass-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes walk-left {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
}

@keyframes walk-right {
  0%, 100% { transform: rotate(10deg); }
  50% { transform: rotate(-10deg); }
}

@keyframes arrow-float {
  0%, 100% { opacity: 0.3; transform: translate(-50%, 0); }
  50% { opacity: 0.8; transform: translate(-50%, -10px); }
}

@keyframes lost-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-20px) rotate(15deg); opacity: 0.7; }
}
</style>
