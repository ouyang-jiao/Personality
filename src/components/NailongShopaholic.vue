<template>
  <div class="nailong-shopaholic-container">
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
        <div class="mouth excited"></div>
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
          <div class="hand">
            <div class="shopping-bag">
              <div class="bag-body">🛍️</div>
            </div>
          </div>
        </div>
        <div class="arm right">
          <div class="hand">
            <div class="shopping-bag">
              <div class="bag-body">🎁</div>
            </div>
          </div>
        </div>
      </div>
      <div class="legs">
        <div class="leg"></div>
        <div class="leg"></div>
      </div>
    </div>
    
    <div class="shopping-particles">
      <span v-for="i in 10" :key="i" class="particle" :style="{ animationDelay: `${i * 0.15}s` }">
        {{ ['💎', '👜', '👠', '💄', '🎀', '✨'][i % 6] }}
      </span>
    </div>
    
    <div class="price-tags">
      <div class="tag">
        <span>50%</span>
        <span>OFF</span>
      </div>
      <div class="tag">
        <span>SALE</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nailong-shopaholic-container {
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
  animation: shop-bounce 1.5s ease-in-out infinite;
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
  background: #FF4081;
  border-radius: 50%;
  position: relative;
  animation: eye-sparkle 1s ease-in-out infinite;
}

.pupil {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: #AD1457;
  border-radius: 50%;
}

.mouth {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 15px;
}

.mouth.excited {
  border-bottom: 3px solid #E65100;
  border-radius: 0 0 50% 50%;
  animation: mouth-open 0.5s ease-in-out infinite;
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
  background: rgba(255, 152, 183, 0.8);
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
  animation: wave-left 0.8s ease-in-out infinite;
}

.arm.right {
  transform: rotate(30deg);
  animation: wave-right 0.8s ease-in-out infinite;
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

.shopping-bag {
  position: absolute;
  top: -20px;
  animation: bag-swing 0.5s ease-in-out infinite;
}

.arm.left .shopping-bag { left: -10px; animation-delay: 0s; }
.arm.right .shopping-bag { right: -10px; animation-delay: 0.2s; }

.bag-body {
  font-size: 25px;
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

.shopping-particles {
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
  animation: shop-float 2.5s ease-in-out infinite;
}

.particle:nth-child(1) { top: 15%; left: 5%; }
.particle:nth-child(2) { top: 35%; right: 0%; }
.particle:nth-child(3) { top: 55%; left: -5%; }
.particle:nth-child(4) { top: 25%; right: 10%; }
.particle:nth-child(5) { top: 65%; left: 15%; }
.particle:nth-child(6) { top: 45%; right: 5%; }
.particle:nth-child(7) { top: 20%; left: -2%; }
.particle:nth-child(8) { top: 70%; right: 15%; }
.particle:nth-child(9) { top: 30%; left: 20%; }
.particle:nth-child(10) { top: 50%; right: -5%; }

.price-tags {
  position: absolute;
  top: -40px;
  left: -30px;
}

.tag {
  background: linear-gradient(135deg, #FF5252 0%, #FF1744 100%);
  color: white;
  padding: 8px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  animation: tag-bounce 0.8s ease-in-out infinite;
  margin-bottom: 10px;
}

.tag:nth-child(2) {
  background: linear-gradient(135deg, #FFD700 0%, #FFA000 100%);
  color: #333;
  animation-delay: 0.2s;
  position: absolute;
  left: 40px;
  top: 20px;
}

@keyframes shop-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes eye-sparkle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes mouth-open {
  0%, 100% { height: 15px; }
  50% { height: 20px; }
}

@keyframes wave-left {
  0%, 100% { transform: rotate(-30deg); }
  50% { transform: rotate(-10deg); }
}

@keyframes wave-right {
  0%, 100% { transform: rotate(30deg); }
  50% { transform: rotate(10deg); }
}

@keyframes bag-swing {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

@keyframes shop-float {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-20px) rotate(15deg); opacity: 0.8; }
}

@keyframes tag-bounce {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
}
</style>
