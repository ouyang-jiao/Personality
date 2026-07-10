<template>
  <div class="home-container">
    <div class="nailong-clouds">
      <div class="cloud cloud1">☁️</div>
      <div class="cloud cloud2">☁️</div>
    </div>
    
    <div class="nailong-wrapper">
      <div class="nailong-3d bounce-animation">
        <div class="nailong-body-3d">
          <div class="nailong-head-3d">
            <div class="nailong-face-3d">
              <div class="eye-3d left">
                <div class="eye-white"></div>
                <div class="pupil-3d"></div>
              </div>
              <div class="eye-3d right">
                <div class="eye-white"></div>
                <div class="pupil-3d"></div>
              </div>
              <div class="mouth-3d"></div>
            </div>
          </div>
          <div class="nailong-torso-3d">
            <div class="nailong-belly-3d"></div>
          </div>
          <div class="arm-3d left"></div>
          <div class="arm-3d right"></div>
          <div class="leg-3d left"></div>
          <div class="leg-3d right"></div>
        </div>
      </div>
      <div class="nailong-greeting">
        <div class="speech-bubble">
          <span>嗨~ 来测测你的性格吧！</span>
          <div class="bubble-arrow"></div>
        </div>
      </div>
    </div>
    
    <div class="content-section">
      <div class="title-wrapper">
        <h1 class="main-title">奶龙人格测试</h1>
        <p class="subtitle">看看你是哪种奶龙类型！</p>
      </div>
      
      <button class="start-btn" @click="startTest">
        <span class="btn-icon">🐉</span>
        <span class="btn-text">开始测试</span>
        <span class="btn-arrow">→</span>
      </button>
    </div>
    
    <div class="floating-elements">
      <span class="float-element float1">🐲</span>
      <span class="float-element float2">✨</span>
      <span class="float-element float3">🥚</span>
      <span class="float-element float4">💫</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const startTest = () => {
  router.push('/test')
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #FFF8E7 0%, #FFE4B5 100%);
}

.nailong-clouds {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  overflow: hidden;
}

.cloud {
  position: absolute;
  font-size: 50px;
  opacity: 0.5;
}

.cloud1 {
  top: 20px;
  left: 10%;
  animation: float-cloud 15s ease-in-out infinite;
}

.cloud2 {
  top: 60px;
  right: 15%;
  animation: float-cloud 20s ease-in-out infinite reverse;
}

.nailong-wrapper {
  position: relative;
  z-index: 10;
  margin-bottom: 30px;
}

.nailong-3d {
  width: 200px;
  height: 280px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nailong-body-3d {
  position: relative;
  width: 160px;
  height: 240px;
}

.nailong-head-3d {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: linear-gradient(180deg, #FFD93D 0%, #FFB347 100%);
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(255, 183, 77, 0.4), inset -5px -5px 15px rgba(255, 152, 0, 0.2);
}

.nailong-face-3d {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 50px;
}

.eye-3d {
  position: absolute;
  width: 22px;
  height: 26px;
  top: 5px;
}

.eye-3d.left {
  left: 5px;
}

.eye-3d.right {
  right: 5px;
}

.eye-white {
  width: 100%;
  height: 100%;
  background: #1A1A1A;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
}

.pupil-3d {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: #FFFFFF;
  border-radius: 50%;
}

.mouth-3d {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 10px;
  border-bottom: 3px solid #1A1A1A;
  border-radius: 0 0 50% 50%;
}

.nailong-torso-3d {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 120px;
  background: linear-gradient(180deg, #FFD93D 0%, #FFB347 100%);
  border-radius: 55% 55% 50% 50%;
  box-shadow: 0 10px 25px rgba(255, 183, 77, 0.4), inset -5px -5px 15px rgba(255, 152, 0, 0.2);
}

.nailong-belly-3d {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  background: linear-gradient(180deg, #FFF8E1 0%, #FFECB3 100%);
  border-radius: 50%;
}

.arm-3d {
  position: absolute;
  width: 35px;
  height: 70px;
  background: linear-gradient(180deg, #FFD93D 0%, #FFB347 100%);
  border-radius: 40px;
  top: 100px;
}

.arm-3d.left {
  left: 5px;
  transform: rotate(25deg);
  transform-origin: top center;
}

.arm-3d.right {
  right: 5px;
  transform: rotate(-25deg);
  transform-origin: top center;
}

.leg-3d {
  position: absolute;
  width: 35px;
  height: 60px;
  background: linear-gradient(180deg, #FFB347 0%, #FF9800 100%);
  border-radius: 40px;
  bottom: 0;
}

.leg-3d.left {
  left: 35px;
}

.leg-3d.right {
  right: 35px;
}

.bounce-animation {
  animation: bounce-3d 1.5s ease-in-out infinite;
}

.nailong-greeting {
  position: absolute;
  top: -10px;
  right: -60px;
}

.speech-bubble {
  background: white;
  padding: 15px 25px;
  border-radius: 25px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  font-size: 16px;
  color: #FF6B35;
  font-weight: bold;
  position: relative;
}

.bubble-arrow {
  position: absolute;
  bottom: -10px;
  left: 50px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid white;
}

.content-section {
  position: relative;
  z-index: 10;
  text-align: center;
  width: 100%;
  max-width: 600px;
}

.title-wrapper {
  margin-bottom: 40px;
}

.main-title {
  font-size: 48px;
  color: #FF6B35;
  font-weight: bold;
  margin: 0 0 15px 0;
  text-shadow: 3px 3px 0 rgba(255, 217, 61, 0.5);
  animation: title-bounce 2s ease-in-out infinite;
}

.subtitle {
  font-size: 20px;
  color: #8B7355;
  margin: 0;
}

.start-btn {
  background: linear-gradient(135deg, #FF6B35 0%, #FFD93D 100%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 22px 60px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
  transition: all 0.3s ease;
  margin-bottom: 30px;
}

.start-btn:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.5);
}

.btn-icon {
  font-size: 30px;
}

.btn-text {
  letter-spacing: 2px;
}

.btn-arrow {
  font-size: 28px;
  animation: arrow-bounce 0.8s ease-in-out infinite;
}

.footer-text {
  font-size: 14px;
  color: #8B7355;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.float-element {
  position: absolute;
  font-size: 30px;
  opacity: 0.3;
}

.float1 { top: 20%; left: 5%; animation: float-random 8s ease-in-out infinite; }
.float2 { top: 50%; right: 8%; animation: float-random 10s ease-in-out infinite reverse; }
.float3 { bottom: 25%; left: 10%; animation: float-random 7s ease-in-out infinite; }
.float4 { bottom: 45%; right: 5%; animation: float-random 9s ease-in-out infinite reverse; }

@keyframes bounce-3d {
  0%, 100% {
    transform: translateY(0) scaleY(1);
  }
  25% {
    transform: translateY(-15px) scaleY(0.95);
  }
  50% {
    transform: translateY(-20px) scaleY(1);
  }
  75% {
    transform: translateY(-10px) scaleY(0.98);
  }
}

@keyframes float-cloud {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(40px); }
}

@keyframes title-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes arrow-bounce {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}

@keyframes float-random {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-30px) rotate(15deg); }
  50% { transform: translateY(-20px) rotate(-10deg); }
  75% { transform: translateY(-35px) rotate(5deg); }
}
</style>
