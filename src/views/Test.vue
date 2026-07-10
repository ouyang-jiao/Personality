<template>
  <div class="test-container">
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: `${(currentQuestion + 1) / questions.length * 100}%` }"></div>
      <div class="progress-text">{{ currentQuestion + 1 }} / {{ questions.length }}</div>
    </div>
    
    <div class="question-card">
      <div class="question-number">第 {{ currentQuestion + 1 }} 题</div>
      <h2 class="question-text">{{ questions[currentQuestion].question }}</h2>
      
      <div class="options-list">
        <button 
          v-for="(option, index) in questions[currentQuestion].options" 
          :key="index"
          class="option-btn"
          :class="{ active: selectedAnswer === index }"
          @click="selectAnswer(index)"
        >
          <span class="option-label">{{ ['A', 'B', 'C', 'D'][index] }}</span>
          <span class="option-text">{{ option.text }}</span>
        </button>
      </div>
    </div>
    
    <div class="nav-buttons">
      <button 
        class="nav-btn prev-btn" 
        :disabled="currentQuestion === 0"
        @click="prevQuestion"
      >
        ← 上一题
      </button>
      <button 
        class="nav-btn next-btn" 
        :disabled="selectedAnswer === null"
        @click="nextQuestion"
      >
        {{ currentQuestion === questions.length - 1 ? '查看结果' : '下一题' }} →
      </button>
    </div>
    
    <div class="nailong-decor">
      <span class="decor-icon">🐲</span>
      <span class="decor-text">加油加油！</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const questions = [
  {
    question: '奶龙喊你一起干饭，你会？',
    options: [
      { text: '立刻冲过去！干饭人干饭魂！', personalityId: 1 },
      { text: '先问清楚吃什么', personalityId: 5 },
      { text: '假装没听见，继续玩手机', personalityId: 2 },
      { text: '问奶龙能不能打包', personalityId: 3 }
    ]
  },
  {
    question: '奶龙说要减肥，你觉得他能坚持多久？',
    options: [
      { text: '坚持不了5分钟', personalityId: 7 },
      { text: '能坚持三天', personalityId: 6 },
      { text: '肯定能坚持！', personalityId: 11 },
      { text: '管他呢，先吃再说', personalityId: 1 }
    ]
  },
  {
    question: '奶龙早上赖床不起，小七喊他起床，你觉得谁会赢？',
    options: [
      { text: '奶龙赢，继续睡', personalityId: 7 },
      { text: '小七赢，强制拖走', personalityId: 5 },
      { text: '用美食诱惑奶龙起床', personalityId: 1 },
      { text: '两人打成平手', personalityId: 4 }
    ]
  },
  {
    question: '奶龙不小心弄坏了小七的自行车，你会？',
    options: [
      { text: '帮奶龙一起想办法修', personalityId: 10 },
      { text: '让奶龙自己承担后果', personalityId: 13 },
      { text: '假装没看见', personalityId: 4 },
      { text: '帮奶龙找借口', personalityId: 2 }
    ]
  },
  {
    question: '奶龙带你去外星旅游，你第一件事做什么？',
    options: [
      { text: '找外星美食', personalityId: 1 },
      { text: '拍照发朋友圈', personalityId: 11 },
      { text: '先规划好路线', personalityId: 5 },
      { text: '跟着奶龙瞎逛', personalityId: 7 }
    ]
  },
  {
    question: '奶龙说要教你喷火技能，你会？',
    options: [
      { text: '认真学习，争取学会', personalityId: 6 },
      { text: '害怕被烧到，拒绝学习', personalityId: 4 },
      { text: '想学但怕烫到嘴', personalityId: 12 },
      { text: '让奶龙表演给我看', personalityId: 10 }
    ]
  },
  {
    question: '奶龙问你要零食吃，你会？',
    options: [
      { text: '全部给他，反正他也吃不完', personalityId: 1 },
      { text: '只给一点，怕他吃太多', personalityId: 8 },
      { text: '不给，自己留着吃', personalityId: 13 },
      { text: '和他分享一半', personalityId: 10 }
    ]
  },
  {
    question: '奶龙想看《龙龙大怪兽》，你会？',
    options: [
      { text: '陪他一起看，超开心！', personalityId: 10 },
      { text: '觉得幼稚，不看', personalityId: 13 },
      { text: '边看边吐槽剧情', personalityId: 2 },
      { text: '看一会儿就睡着了', personalityId: 7 }
    ]
  },
  {
    question: '奶龙邀请你去帮小七的爷爷种地，你会？',
    options: [
      { text: '积极帮忙，认真干活', personalityId: 6 },
      { text: '去了但一直在摸鱼', personalityId: 7 },
      { text: '帮着帮着就去抓鱼了', personalityId: 1 },
      { text: '直接拒绝，太累了', personalityId: 4 }
    ]
  },
  {
    question: '奶龙不小心把玉米烧成了烤玉米，你会？',
    options: [
      { text: '没关系，烤玉米更好吃！', personalityId: 1 },
      { text: '批评奶龙太粗心', personalityId: 13 },
      { text: '帮奶龙一起想办法补救', personalityId: 10 },
      { text: '假装没看见，偷偷溜走', personalityId: 4 }
    ]
  },
  {
    question: '奶龙问你他和小七谁更聪明，你会？',
    options: [
      { text: '当然是奶龙最聪明！', personalityId: 11 },
      { text: '小七更聪明', personalityId: 13 },
      { text: '各有各的聪明', personalityId: 10 },
      { text: '假装没听见', personalityId: 4 }
    ]
  },
  {
    question: '奶龙迷路了，你会？',
    options: [
      { text: '和他一起找路，不急不慌', personalityId: 12 },
      { text: '打开导航帮他找路', personalityId: 5 },
      { text: '让他自己摸索', personalityId: 13 },
      { text: '跟着他一起迷路', personalityId: 7 }
    ]
  },
  {
    question: '奶龙说他是宇宙第一可爱，你会？',
    options: [
      { text: '同意！奶龙最可爱！', personalityId: 11 },
      { text: '反驳他，你才是', personalityId: 13 },
      { text: '不置可否，笑笑就好', personalityId: 4 },
      { text: '夸他两句，他会很开心', personalityId: 10 }
    ]
  }
]

const currentQuestion = ref(0)
const selectedAnswer = ref(null)
const answers = ref([])

const selectAnswer = (index) => {
  selectedAnswer.value = index
}

const prevQuestion = () => {
  if (currentQuestion.value > 0) {
    selectedAnswer.value = answers.value[currentQuestion.value - 1] || null
    currentQuestion.value--
  }
}

const nextQuestion = () => {
  if (selectedAnswer.value !== null) {
    answers.value[currentQuestion.value] = selectedAnswer.value
    
    if (currentQuestion.value < questions.length - 1) {
      currentQuestion.value++
      selectedAnswer.value = answers.value[currentQuestion.value] || null
    } else {
      calculateResult()
    }
  }
}

const calculateResult = () => {
  const personalityCounts = {}
  
  answers.value.forEach((answerIndex, questionIndex) => {
    if (answerIndex !== null) {
      const personalityId = questions[questionIndex].options[answerIndex].personalityId
      personalityCounts[personalityId] = (personalityCounts[personalityId] || 0) + 1
    }
  })
  
  let dominantPersonalityId = 1
  let maxCount = 0
  
  for (const [id, count] of Object.entries(personalityCounts)) {
    if (count > maxCount) {
      maxCount = count
      dominantPersonalityId = parseInt(id)
    }
  }
  
  localStorage.setItem('personalityScore', dominantPersonalityId)
  router.push('/result')
}
</script>

<style scoped>
.test-container {
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(180deg, #FFF8E7 0%, #FFE4B5 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-bar {
  width: 100%;
  max-width: 600px;
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  margin-bottom: 40px;
  position: relative;
  box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF6B35 0%, #FFD93D 100%);
  border-radius: 10px;
  transition: width 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
  color: #8B7355;
}

.question-card {
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(255, 189, 67, 0.2);
  margin-bottom: 30px;
}

.question-number {
  font-size: 16px;
  color: #FF6B35;
  font-weight: bold;
  margin-bottom: 20px;
}

.question-text {
  font-size: 24px;
  color: #333;
  margin-bottom: 35px;
  line-height: 1.5;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.option-btn {
  display: flex;
  align-items: center;
  padding: 20px 25px;
  background: #FFF8E7;
  border: 2px solid transparent;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.option-btn:hover {
  background: #FFECB3;
}

.option-btn.active {
  background: #FFD93D;
  border-color: #FF6B35;
}

.option-label {
  width: 30px;
  height: 30px;
  background: #FF6B35;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 20px;
}

.option-btn.active .option-label {
  background: white;
  color: #FF6B35;
}

.option-text {
  font-size: 18px;
  color: #333;
  flex: 1;
}

.nav-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.nav-btn {
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.prev-btn {
  background: rgba(255, 255, 255, 0.8);
  color: #8B7355;
}

.prev-btn:hover:not(:disabled) {
  background: white;
}

.next-btn {
  background: linear-gradient(135deg, #FF6B35 0%, #FFD93D 100%);
  color: white;
}

.next-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nailong-decor {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  color: #FF6B35;
  animation: float-decor 2s ease-in-out infinite;
}

@keyframes float-decor {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
