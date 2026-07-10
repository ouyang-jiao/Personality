<template>
  <div class="nailong-talkative-container">
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
        <div class="mouth talking">
          <div class="tongue"></div>
        </div>
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
          <div class="hand"></div>
        </div>
        <div class="arm right">
          <div class="hand"></div>
        </div>
      </div>
      <div class="legs">
        <div class="leg"></div>
        <div class="leg"></div>
      </div>
    </div>
    
    <div class="speech-bubbles">
      <div class="bubble bubble-1">
        <span>你知道吗...</span>
      </div>
      <div class="bubble bubble-2">
        <span>然后呢...</span>
      </div>
      <div class="bubble bubble-3">
        <span>还有...</span>
      </div>
    </div>
    
    <div class="word-particles">
      <span v-for="i in 12" :key="i" class="word">
        {{ ['话', '说', '你', '知', '道', '吗', '然', '后', '还', '有', '那', '个'][i % 12] }}
      </span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nailong-talkative-container {
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
  animation: talk-bounce 1s ease-in-out infinite;
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
  background: #FFA000;
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
  background: #E65100;
  border-radius: 50%;
}

.mouth {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 18px;
}

.mouth.talking {
  background: #E65100;
  border-radius: 0 0 50% 50%;
  animation: mouth-talk 0.3s ease-in-out infinite;
  overflow: hidden;
}

.tongue {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 10px;
  background: #FF5252;
  border-radius: 50%;
  animation: tongue-move 0.3s ease-in-out infinite;
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
  animation: gesture-left 0.5s ease-in-out infinite;
}

.arm.right {
  transform: rotate(20deg);
  animation: gesture-right 0.5s ease-in-out infinite;
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

.speech-bubbles {
  position: absolute;
  top: -60px;
  right: -40px;
}

.bubble {
  background: white;
  padding: 8px 15px;
  border-radius: 15px;
  font-size: 12px;
  color: #FF6B35;
  font-weight: bold;
  position: absolute;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.bubble-1 {
  top: 0;
  right: 0;
  animation: bubble-appear 2s ease-in-out infinite;
}

.bubble-2 {
  top: 35px;
  right: 20px;
  animation: bubble-appear 2s ease-in-out infinite 0.5s;
}

.bubble-3 {
  top: 70px;
  right: 5px;
  animation: bubble-appear 2s ease-in-out infinite 1s;
}

.word-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.word {
  position: absolute;
  font-size: 14px;
  color: #FF6B35;
  font-weight: bold;
  animation: word-float 2s ease-out infinite;
}

.word:nth-child(1) { top: 30%; right: 20%; animation-delay: 0s; }
.word:nth-child(2) { top: 35%; right: 25%; animation-delay: 0.15s; }
.word:nth-child(3) { top: 40%; right: 30%; animation-delay: 0.3s; }
.word:nth-child(4) { top: 45%; right: 22%; animation-delay: 0.45s; }
.word:nth-child(5) { top: 50%; right: 28%; animation-delay: 0.6s; }
.word:nth-child(6) { top: 55%; right: 24%; animation-delay: 0.75s; }
.word:nth-child(7) { top: 60%; right: 32%; animation-delay: 0.9s; }
.word:nth-child(8) { top: 32%; right: 35%; animation-delay: 1.05s; }
.word:nth-child(9) { top: 38%; right: 38%; animation-delay: 1.2s; }
.word:nth-child(10) { top: 43%; right: 34%; animation-delay: 1.35s; }
.word:nth-child(11) { top: 48%; right: 40%; animation-delay: 1.5s; }
.word:nth-child(12) { top: 53%; right: 36%; animation-delay: 1.65s; }

@keyframes talk-bounce {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(2deg); }
  75% { transform: translateY(-5px) rotate(-2deg); }
}

@keyframes mouth-talk {
  0%, 100% { height: 18px; width: 30px; }
  50% { height: 22px; width: 35px; }
}

@keyframes tongue-move {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-3px); }
}

@keyframes gesture-left {
  0%, 100% { transform: rotate(-20deg); }
  50% { transform: rotate(5deg); }
}

@keyframes gesture-right {
  0%, 100% { transform: rotate(20deg); }
  50% { transform: rotate(-5deg); }
}

@keyframes bubble-appear {
  0%, 100% { opacity: 0; transform: translateY(10px) scale(0.8); }
  20%, 80% { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes word-float {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-40px); }
}
</style>
