<template>
  <div class="result-container">
    <div class="result-card" v-if="personality">
      <div class="result-header">
        <div class="nailong-mirror">
          <span class="personality-emoji">{{ personality.emoji }}</span>
          <span class="nailong-base">🐉</span>
        </div>
        <h1 class="result-title">{{ personality.name }}</h1>
      </div>
      
      <div class="result-content">
        <div class="official-version">
          <h3 class="version-title">
            <span class="version-icon">🎭</span>
            官方伪装版
          </h3>
          <p class="version-desc">{{ personality.official }}</p>
        </div>
        
        <button 
          class="toggle-btn" 
          @click="showReal = !showReal"
        >
          <span>{{ showReal ? '收起真相' : '查看真实面目' }}</span>
          <span class="toggle-arrow">{{ showReal ? '↑' : '↓' }}</span>
        </button>
        
        <div class="real-version" v-if="showReal">
          <h3 class="version-title real">
            <span class="version-icon">💥</span>
            真实版
          </h3>
          <p class="version-desc">{{ personality.real }}</p>
        </div>
      </div>
      
      <div class="result-footer">
        <button class="restart-btn" @click="restartTest">
          <span>🔄</span>
          <span>再测一次</span>
        </button>
        <button class="share-btn" @click="shareResult">
          <span>📤</span>
          <span>分享结果</span>
        </button>
      </div>
    </div>
    
    <button class="egg-btn" @click="openEgg">
      <span class="egg-btn-icon">🥚</span>
      <span class="egg-btn-text">打开彩蛋</span>
    </button>
    
    <p class="footer-text">测试结果仅供娱乐</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const personalities = [
  {
    id: 1,
    name: '干饭不要命的吃货战神',
    emoji: '🍔',
    official: '外在性格：随和佛系，情绪稳定，懂得享受生活，待人包容，不争不抢，擅长调节自己的压力，懂得在平凡日常里给自己寻找乐趣。',
    real: '揭开真相：你骨子里只有干饭这件大事。学习工作敷衍了事，一到吃饭嗅觉瞬间灵敏。减肥计划永远从明天开始，零食外卖永远准时到位。人生座右铭：万事可以凑合，吃饭绝不将就。别人内卷搞事业，你专心研究哪家外卖更好吃。',
    egg: '彩蛋：其实你上辈子是一只饕餮，这辈子转世投胎只为吃遍天下美食！'
  },
  {
    id: 2,
    name: '手机深度寄生选手',
    emoji: '📱',
    official: '你内心世界丰富，好奇心旺盛，接收新鲜事物速度很快；脑洞发达，内心戏充足，共情能力强。',
    real: '离开手机就浑身坐立不安，手机电量低于60%就开始焦虑。明明没有消息也要反复点亮屏幕；明明很困，刷短视频硬熬到深夜。现实生活过得平平淡淡，网上冲浪却格外积极，你的灵魂大半寄居在手机里面。',
    egg: '彩蛋：建议把手机焊在手上，这样就不用担心它会离开你了！'
  },
  {
    id: 3,
    name: '空想暴富幻想家',
    emoji: '💰',
    official: '不甘平庸，对未来抱有期待，想象力丰富，内心向往更好的生活，拥有理想，渴望突破现状。',
    real: '每天刷着短视频羡慕别人有钱，频繁幻想一夜暴富。收藏一大堆搞钱教程，但从来不肯动手实践。计划无数次存钱，最后通通失败；心里幻想锦衣玉食，现实日常穷得稳定，天天做梦发财，行动永远缺席。',
    egg: '彩蛋：建议买个枕头，梦里啥都有！'
  },
  {
    id: 4,
    name: '脸皮时厚时薄矛盾体',
    emoji: '🎭',
    official: '熟人面前活泼开朗，陌生人内敛拘谨，属于典型慢热人格；懂得照顾氛围，心思细腻敏感。',
    real: '熟人之间肆无忌惮开玩笑，脸皮比城墙还厚；一旦面对陌生人，连正常说话都局促紧张。网上发表观点侃侃而谈，现实中和别人对视都刻意避开，典型的线上强者，现实怂包。',
    egg: '彩蛋：建议随身携带社交牛逼症药水，关键时刻来一口！'
  },
  {
    id: 5,
    name: '计划永远落空的规划大师',
    emoji: '📝',
    official: '有上进心，善于反思自我，经常复盘人生，乐于规划未来，对自己有着较高期待。',
    real: '制定计划表的时候热血沸腾，执行的时候一拖再拖。睡前立志第二天奋发图强，第二天继续躺平摆烂。备忘录里清单满满，完成项目寥寥无几，制定计划＝完成计划，自我感动第一名。',
    egg: '彩蛋：你的计划表可能比你的执行力更努力！'
  },
  {
    id: 6,
    name: '间歇性自律的演员选手',
    emoji: '🎬',
    official: '偶尔觉醒上进心，清醒的时候懂得反思自身，不甘心浑浑噩噩度过每一天。',
    real: '看到别人优秀就短暂奋发图强，坚持两三天就打回原形。刷到励志视频热血10分钟，过后继续躺平玩手机。努力只是演给自己看的，大部分时间依旧得过且过。',
    egg: '彩蛋：奥斯卡欠你一座小金人，你的自律演技太逼真了！'
  },
  {
    id: 7,
    name: '重度熬夜顽固分子',
    emoji: '🌙',
    official: '夜晚思绪活跃，独处的时候更加放松，享受深夜安静的时光。',
    real: '白天萎靡不振，晚上精神焕发。明明眼皮打架，硬撑着不肯睡觉。心里清楚熬夜伤身体，但到了晚上控制不住自己。白天懊悔昨晚熬夜，晚上继续重蹈覆辙。',
    egg: '彩蛋：建议把闹钟调到早上8点，然后假装今天一定要早睡！'
  },
  {
    id: 8,
    name: '奶茶续命战士',
    emoji: '🧋',
    official: '注重生活品质，喜欢给自己找点小确幸，懂得在繁忙中寻找放松的方式。',
    real: '一天不喝奶茶就浑身难受，奶茶是你的精神支柱。无糖？不存在的！少糖是最后的妥协。钱包在哭泣，但嘴巴在狂欢，减肥永远是明天的事。',
    egg: '彩蛋：你的胃里可能有个奶茶加工厂，专门生产快乐！'
  },
  {
    id: 9,
    name: '购物狂魔剁手党',
    emoji: '🛍️',
    official: '热爱生活，追求美好事物，喜欢给自己和身边的人带来惊喜。',
    real: '看到打折就控制不住双手，购物车里永远满满的。拆快递的快乐是人生巅峰，买完就后悔，后悔完继续买。衣柜里衣服堆积如山，还是觉得没衣服穿。',
    egg: '彩蛋：建议把银行卡冻结，这样就能安心剁手了！'
  },
  {
    id: 10,
    name: '话题制造机',
    emoji: '🗣️',
    official: '开朗健谈，善于交际，总能活跃气氛，是朋友中的开心果。',
    real: '话多到停不下来，不管熟不熟都能聊得火热。别人只想安静吃饭，你能从天文聊到地理。有时候自己都不知道在说什么，但就是停不下来。',
    egg: '彩蛋：建议参加脱口秀大会，你的话痨天赋浪费了！'
  },
  {
    id: 11,
    name: '自恋担当',
    emoji: '💅',
    official: '自信大方，热爱自己，懂得欣赏自己的优点，是个阳光开朗的人。',
    real: '每天照镜子能看半小时，觉得自己简直完美。朋友圈自拍九宫格，各种角度各种滤镜。听到别人夸自己表面淡定，内心疯狂尖叫。',
    egg: '彩蛋：建议买个奖杯，上面刻着"宇宙第一美/帅"！'
  },
  {
    id: 12,
    name: '路痴本痴',
    emoji: '🗺️',
    official: '方向感不太好，但胜在心态乐观，迷路也能发现新风景。',
    real: '出门全靠导航，导航说左转你敢右转。在自己家楼下都能走错单元，去个新地方必迷路。朋友都习惯了你的迷路日常，见面地点永远是"我在这个大柱子旁边"。',
    egg: '彩蛋：建议随身携带GPS定位器，这样朋友就能找到你了！'
  },
  {
    id: 13,
    name: '杠精转世',
    emoji: '🤯',
    official: '思维敏捷，逻辑性强，喜欢探讨问题，追求真理。',
    real: '不管别人说什么都要反驳几句，你说东他说西，你说黑他说白。抬杠是你的本能，赢了杠精赛高，输了觉得对方不讲道理。朋友都怕和你讨论问题，分分钟被杠到怀疑人生。',
    egg: '彩蛋：建议去参加辩论比赛，你的抬杠能力无敌了！'
  }
]

const showReal = ref(false)
const personality = ref(null)

const getPersonality = (id) => {
  return personalities.find(p => p.id === id) || personalities[0]
}

onMounted(() => {
  const score = parseInt(localStorage.getItem('personalityScore')) || 12
  personality.value = getPersonality(score)
})

const openEgg = () => {
  router.push('/egg')
}

const restartTest = () => {
  localStorage.removeItem('personalityScore')
  router.push('/')
}

const shareResult = () => {
  if (navigator.share) {
    navigator.share({
      title: '奶龙人格测试',
      text: `我测出了${personality.value?.name}！快来测测你是哪种奶龙类型！`,
      url: window.location.href
    })
  } else {
    alert('复制链接成功，快去分享给朋友吧！')
    navigator.clipboard.writeText(window.location.href)
  }
}
</script>

<style scoped>
.result-container {
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(180deg, #FFF8E7 0%, #FFE4B5 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-card {
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(255, 189, 67, 0.2);
  margin-bottom: 30px;
}

.result-header {
  text-align: center;
  margin-bottom: 30px;
}

.nailong-mirror {
  font-size: 60px;
  margin-bottom: 20px;
}

.personality-emoji {
  margin-right: 10px;
}

.result-title {
  font-size: 32px;
  color: #FF6B35;
  font-weight: bold;
  margin: 0;
}

.result-content {
  margin-bottom: 30px;
}

.version-title {
  font-size: 20px;
  color: #333;
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.version-title.real {
  color: #FF6B35;
}

.version-icon {
  font-size: 24px;
}

.version-desc {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  margin: 0;
}

.toggle-btn {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #FF6B35 0%, #FFD93D 100%);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  transform: scale(1.02);
}

.toggle-arrow {
  font-size: 20px;
}

.real-version {
  animation: slide-down 0.3s ease;
}

.result-footer {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.restart-btn, .share-btn {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.restart-btn {
  background: rgba(255, 255, 255, 0.8);
  color: #8B7355;
  border: 2px solid #FFD93D;
}

.restart-btn:hover {
  background: white;
}

.share-btn {
  background: linear-gradient(135deg, #FF6B35 0%, #FFD93D 100%);
  color: white;
}

.share-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
}

.egg-btn {
  padding: 20px 40px;
  background: linear-gradient(135deg, #FFD93D 0%, #FFB347 100%);
  color: #8B7355;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 217, 61, 0.4);
  animation: egg-bounce 2s ease-in-out infinite;
}

.egg-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 35px rgba(255, 217, 61, 0.6);
}

.egg-btn-icon {
  font-size: 35px;
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes egg-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.footer-text {
  font-size: 14px;
  color: #8B7355;
  margin-top: 20px;
}
</style>
