<template>
  <div class="egg-container">
    <div class="confetti-container">
      <div 
        v-for="i in 80" 
        :key="i" 
        class="confetti"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          backgroundColor: ['#FF6B35', '#FFD93D', '#FF4081', '#4CAF50', '#2196F3', '#E91E63', '#FF9800', '#9C27B0'][i % 8],
          animationDuration: `${2 + Math.random() * 3}s`,
          width: `${6 + Math.random() * 8}px`,
          height: `${6 + Math.random() * 8}px`
        }"
      ></div>
    </div>
    
    <div class="egg-card">
      <div class="egg-icon bounce-animation">🥚</div>
      <h1 class="egg-title">惊喜彩蛋!</h1>
      <p class="egg-text">{{ personality?.egg || '恭喜你完成测试！' }}</p>
      
      <div class="back-btn" @click="goBack">
        <span>←</span>
        <span>返回结果</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const personalities = [
  {
    id: 1,
    egg: '彩蛋：其实你上辈子是一只饕餮，这辈子转世投胎只为吃遍天下美食！'
  },
  {
    id: 2,
    egg: '彩蛋：建议把手机焊在手上，这样就不用担心它会离开你了！'
  },
  {
    id: 3,
    egg: '彩蛋：建议买个枕头，梦里啥都有！'
  },
  {
    id: 4,
    egg: '彩蛋：建议随身携带社交牛逼症药水，关键时刻来一口！'
  },
  {
    id: 5,
    egg: '彩蛋：你的计划表可能比你的执行力更努力！'
  },
  {
    id: 6,
    egg: '彩蛋：奥斯卡欠你一座小金人，你的自律演技太逼真了！'
  },
  {
    id: 7,
    egg: '彩蛋：建议把闹钟调到早上8点，然后假装今天一定要早睡！'
  },
  {
    id: 8,
    egg: '彩蛋：你的胃里可能有个奶茶加工厂，专门生产快乐！'
  },
  {
    id: 9,
    egg: '彩蛋：建议把银行卡冻结，这样就能安心剁手了！'
  },
  {
    id: 10,
    egg: '彩蛋：建议参加脱口秀大会，你的话痨天赋浪费了！'
  },
  {
    id: 11,
    egg: '彩蛋：建议买个奖杯，上面刻着"宇宙第一美/帅"！'
  },
  {
    id: 12,
    egg: '彩蛋：建议随身携带GPS定位器，这样朋友就能找到你了！'
  },
  {
    id: 13,
    egg: '彩蛋：建议去参加辩论比赛，你的抬杠能力无敌了！'
  }
]

const personality = ref(null)

const getPersonality = (id) => {
  return personalities.find(p => p.id === id) || personalities[0]
}

onMounted(() => {
  const score = parseInt(localStorage.getItem('personalityScore')) || 12
  personality.value = getPersonality(score)
})

const goBack = () => {
  router.push('/result')
}
</script>

<style scoped>
.egg-container {
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(180deg, #FFF8E7 0%, #FFE4B5 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 100;
}

.confetti {
  position: absolute;
  top: -20px;
  border-radius: 4px;
  animation: confetti-fall linear forwards;
}

.egg-card {
  position: relative;
  z-index: 10;
  background: white;
  border-radius: 30px;
  padding: 50px 40px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(255, 189, 67, 0.3);
  max-width: 500px;
  width: 100%;
  animation: egg-appear 0.6s ease;
}

.egg-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.bounce-animation {
  animation: bounce 1.5s ease-in-out infinite;
}

.egg-title {
  font-size: 36px;
  color: #FF6B35;
  font-weight: bold;
  margin: 0 0 20px 0;
}

.egg-text {
  font-size: 20px;
  color: #8B7355;
  line-height: 1.8;
  margin: 0 0 30px 0;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 35px;
  background: linear-gradient(135deg, #FF6B35 0%, #FFD93D 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes egg-appear {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes confetti-fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(1080deg);
    opacity: 0;
  }
}
</style>
