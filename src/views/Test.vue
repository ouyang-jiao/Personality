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
    question: '肚子饿的时候，你的反应是？',
    options: [
      { text: '立刻找吃的，一刻也等不了', personalityId: 1 },
      { text: '先看看手机，饿一会儿也没关系', personalityId: 2 },
      { text: '想着先工作，忙完再吃', personalityId: 6 },
      { text: '纠结吃什么，想半天', personalityId: 5 }
    ]
  },
  {
    question: '手机电量低于多少会让你焦虑？',
    options: [
      { text: '低于20%才会慌', personalityId: 4 },
      { text: '低于50%就开始找充电器', personalityId: 2 },
      { text: '低于80%就紧张', personalityId: 2 },
      { text: '随时保持满电，从不焦虑', personalityId: 11 }
    ]
  },
  {
    question: '刷到别人炫富的视频，你会？',
    options: [
      { text: '羡慕，幻想自己也能暴富', personalityId: 3 },
      { text: '划过去，不关我事', personalityId: 4 },
      { text: '研究他是怎么赚到钱的', personalityId: 6 },
      { text: '酸一下，然后继续刷', personalityId: 13 }
    ]
  },
  {
    question: '在KTV唱歌，你会？',
    options: [
      { text: '麦霸附体，抢着唱', personalityId: 11 },
      { text: '默默坐在角落听别人唱', personalityId: 4 },
      { text: '只和熟人一起唱', personalityId: 4 },
      { text: '疯狂点歌但不敢唱', personalityId: 10 }
    ]
  },
  {
    question: '制定新年计划，你的习惯是？',
    options: [
      { text: '写得满满当当，一个没完成', personalityId: 5 },
      { text: '写几条简单的，尽力完成', personalityId: 6 },
      { text: '从不制定计划，走一步看一步', personalityId: 7 },
      { text: '计划赶不上变化，算了吧', personalityId: 5 }
    ]
  },
  {
    question: '看到励志视频，你会？',
    options: [
      { text: '立刻热血沸腾，坚持3天', personalityId: 6 },
      { text: '收藏起来，以后看', personalityId: 5 },
      { text: '无感，继续刷搞笑视频', personalityId: 7 },
      { text: '真的受到激励，坚持下去', personalityId: 6 }
    ]
  },
  {
    question: '晚上几点睡觉？',
    options: [
      { text: '11点前准时睡', personalityId: 6 },
      { text: '12点左右睡', personalityId: 7 },
      { text: '凌晨2-3点睡', personalityId: 7 },
      { text: '通宵是家常便饭', personalityId: 7 }
    ]
  },
  {
    question: '奶茶对你来说是？',
    options: [
      { text: '续命神器，每天必喝', personalityId: 8 },
      { text: '偶尔喝一杯', personalityId: 1 },
      { text: '从不喝，健康最重要', personalityId: 6 },
      { text: '戒了无数次，每次失败', personalityId: 8 }
    ]
  },
  {
    question: '双十一购物节，你会？',
    options: [
      { text: '提前列清单，理性消费', personalityId: 5 },
      { text: '疯狂剁手，买完后悔', personalityId: 9 },
      { text: '啥也不买，省钱要紧', personalityId: 3 },
      { text: '帮别人凑单，自己不买', personalityId: 10 }
    ]
  },
  {
    question: '和朋友聊天，你是？',
    options: [
      { text: '话痨，停不下来', personalityId: 10 },
      { text: '倾听者，很少说话', personalityId: 4 },
      { text: '偶尔插几句话', personalityId: 4 },
      { text: '疯狂玩梗，气氛担当', personalityId: 10 }
    ]
  },
  {
    question: '照镜子时，你觉得自己？',
    options: [
      { text: '太完美了，忍不住多看几眼', personalityId: 11 },
      { text: '一般般，能看就行', personalityId: 4 },
      { text: '有点丑，不想看', personalityId: 4 },
      { text: '还行，就是有点胖', personalityId: 1 }
    ]
  },
  {
    question: '去陌生的地方，你会？',
    options: [
      { text: '跟着导航走，从不迷路', personalityId: 5 },
      { text: '经常迷路，全靠问人', personalityId: 12 },
      { text: '让别人带路，自己不动脑', personalityId: 12 },
      { text: '凭感觉走，随缘', personalityId: 7 }
    ]
  },
  {
    question: '别人提出一个观点，你会？',
    options: [
      { text: '不管对错先反驳', personalityId: 13 },
      { text: '认同就点赞，不认同就忽略', personalityId: 4 },
      { text: '认真思考后再讨论', personalityId: 5 },
      { text: '表面认同，内心吐槽', personalityId: 13 }
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
