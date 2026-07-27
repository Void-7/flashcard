import type { CardItem, CardPack, Tag, KnowledgeContent, QuestionContent, QuestionType } from '../types'

let _tagId = 0
function tid(): string { return `etag_${++_tagId}` }
let _cardId = 0
function cid(): string { return `ecard_${++_cardId}` }

const T = (id: string, name: string): Tag => ({ id, name })

const tags = {
  问题识别: T(tid(), '问题识别'),
  优化方案: T(tid(), '优化方案'),
  实施步骤: T(tid(), '实施步骤'),
  答题框架: T(tid(), '答题框架'),
}

const allCards: CardItem[] = []

const E = (s: string) => s

function K(tag: Tag, title: string, description: string, code: string, notes?: string): CardItem {
  const c: CardItem = {
    id: cid(), packId: '', tagIds: [tag.id],
    type: 'knowledge',
    content: { title, description, code, notes } as KnowledgeContent,
    createdAt: Date.now(),
  }
  allCards.push(c)
  return c
}

function K2(tag1: Tag, tag2: Tag, title: string, description: string, code: string, notes?: string): CardItem {
  const c: CardItem = {
    id: cid(), packId: '', tagIds: [tag1.id, tag2.id],
    type: 'knowledge',
    content: { title, description, code, notes } as KnowledgeContent,
    createdAt: Date.now(),
  }
  allCards.push(c)
  return c
}

function Q(tag: Tag, type: QuestionType, question: string, options: string[], answer: number | number[], explanation?: string): CardItem {
  const c: CardItem = {
    id: cid(), packId: '', tagIds: [tag.id],
    type: 'question',
    content: { type, question, options, answer, explanation } as QuestionContent,
    createdAt: Date.now(),
  }
  allCards.push(c)
  return c
}

// ========== 答题框架总览 ==========
K(tags.答题框架, '答题框架总览', 'AI应用问题分析与优化答题结构', E`1. 找问题 + 解释原因
   - 准确率低 → 识别错误、漏报、错报
   - 界面复杂 → 交互设计差、体验差
   - 响应效率慢 → 响应速度慢、用户等待
   - 缺乏个性化 → 内容无定制、吸引力不足

2. 给出优化方案
   - 提升准确率 → 预训练大模型
   - 优化界面 → 可视化、一键式操作
   - 加快响应 → 缓存、分布式
   - 个性化 → 用户画像

3. 关键实施步骤（对应优化方案）

4. 预期优化效果（总结提升）`)

// ========== 问题识别 ==========
K(tags.问题识别, '问题一：准确率低', '识别错误、漏报、错报导致系统不可靠', E`表现：模型识别结果不准确，误判率高
原因：
- 训练数据不足或质量差
- 模型复杂度不够，语义理解能力弱
- 场景泛化能力差
影响：用户对系统失去信任，错误决策风险高`)

K(tags.问题识别, '问题二：界面复杂', '交互设计差、操作繁琐导致用户体验差', E`表现：功能层级深，操作步骤多，不易上手
原因：
- 未遵循用户中心设计
- 信息架构混乱，导航不清晰
- 缺乏可视化引导
影响：用户学习成本高，流失率增加`)

K(tags.问题识别, '问题三：响应效率慢', '系统响应速度慢，用户等待时间长', E`表现：请求处理延迟高，交互卡顿
原因：
- 算法计算量大，未优化
- 缺乏缓存机制
- 单点架构，无法横向扩展
影响：用户耐心下降，任务完成效率低`)

K(tags.问题识别, '问题四：缺乏个性化', '内容没有定制化，吸引力不足', E`表现：所有用户看到相同内容，千人一面
原因：
- 未接入用户画像数据
- 缺乏推荐/匹配算法
- 未记录用户历史行为
影响：用户粘性低，转化率差`)

// ========== 优化方案方向 ==========
K(tags.优化方案, '优化方向一：提升识别准确率', '采用预训练大模型提升语义理解', E`方案：
- 使用预训练大模型（如BERT、GPT等）提升语义理解
- 扩充高质量标注数据集
- 引入数据增强技术
- 建立模型持续迭代机制`)

K(tags.优化方案, '优化方向二：优化交互界面', '增加可视化、简化操作步骤、一键式操作', E`方案：
- 增加数据可视化图表，直观展示结果
- 简化操作步骤，提供一键式操作
- 优化信息架构，减少功能层级
- 增加操作引导和提示`)

K(tags.优化方案, '优化方向三：加快响应速度', '缓存机制 + 分布式计算架构', E`方案：
- 引入缓存机制（Redis/Memcached）
- 分布式计算架构（负载均衡 + 横向扩展）
- 优化算法效率，减少冗余计算
- 增加异步处理与预警机制`)

K(tags.优化方案, '优化方向四：增强个性化', '接入用户画像数据，定制个性化内容', E`方案：
- 接入用户画像系统
- 根据用户历史行为生成个性化推荐
- 实现内容/功能的动态适配
- A/B测试持续优化个性化策略`)

// ========== 关键实施步骤 ==========
K2(tags.实施步骤, tags.优化方案, '步骤一：优化模型准确度', '采用预训练大模型，提升模型语义理解能力', E`实施：
1. 评估现有模型性能基线
2. 选型预训练模型（如BERT/RoBERTa等）
3. 收集并标注领域数据
4. 微调训练 + 评估
5. 部署 + 持续监控`)

K2(tags.实施步骤, tags.优化方案, '步骤二：优化人机交互界面', '增加可视化；简化操作步骤，一键式操作', E`实施：
1. 用户调研 + 痛点分析
2. 交互原型设计（降低操作路径）
3. 增加图表可视化组件
4. 用户测试 + 迭代优化
5. 上线 + 数据埋点追踪`)

K2(tags.实施步骤, tags.优化方案, '步骤三：提升响应时间', '增加缓存机制，分布式计算架构', E`实施：
1. 识别系统瓶颈（性能分析）
2. 引入缓存层（热点数据缓存）
3. 服务拆分 + 分布式部署
4. 增加异步任务队列
5. 压力测试 + 持续优化`)

K2(tags.实施步骤, tags.优化方案, '步骤四：定制化个性化', '接入用户画像数据，根据用户历史数据生成定制化内容', E`实施：
1. 建立用户画像数据体系
2. 开发推荐/匹配算法
3. 内容动态适配引擎
4. A/B测试验证效果
5. 持续优化个性化策略`)

// ========== 预期效果总结 ==========
K(tags.答题框架, '预期优化效果', '总结优化后的整体提升效果', E`通过上述优化方案的实施，预期达到以下效果：
• 提升识别精准度，降低误报/漏报率
• 降低系统响应时间，减少用户等待时间
• 增强系统的流畅性与稳定性
• 简化交互流程，与客户产生更好的互动
• 提升客户体验，满意度显著提升`)

// ========== 综合答题框架卡片 ==========
K(tags.答题框架, '完整答题框架（示例）', '按此结构回答1.2.1-1.2.5类题目', E`答题框架：
1. 从试题中找出问题并解释原因
   - 准确率低 → 识别错误、漏报、错报
   - 界面复杂 → 交互设计差、体验差
   - 响应慢 → 响应速度慢、等待时间长
   - 缺乏个性化 → 内容无定制

2. 针对问题给出优化方案及关键步骤
   - 优化模型 → 预训练大模型提升准确度
   - 优化界面 → 可视化、一键式操作
   - 加快响应 → 缓存机制、分布式计算
   - 个性化 → 用户画像定制内容

3. 预期优化效果（总结）`)

// ========== 题目卡片 ==========
Q(tags.答题框架, 'multiple', 'AI应用常见问题包括哪些方面？（多选）',
  ['准确率低', '界面复杂', '响应效率慢', '缺乏个性化'],
  [0, 1, 2, 3])

Q(tags.问题识别, 'single', '"准确率低"对应的主要影响是什么？',
  ['识别错误、漏报、错报', '交互设计差', '响应速度慢', '内容无定制'],
  0)

Q(tags.问题识别, 'single', '"界面复杂"对应的主要影响是什么？',
  ['交互设计差、体验差', '识别错误率高', '响应延迟', '缺乏吸引力'],
  0)

Q(tags.问题识别, 'single', '"响应效率慢"对应的主要影响是什么？',
  ['响应速度慢，用户等待时间长', '识别错误', '操作复杂', '内容千篇一律'],
  0)

Q(tags.问题识别, 'single', '"缺乏个性化"对应的主要影响是什么？',
  ['内容没有定制化，吸引力不足', '响应延迟', '交互体验差', '准确率低'],
  0)

Q(tags.优化方案, 'single', '提升识别准确率应采用什么方法？',
  ['采用预训练大模型', '简化操作步骤', '增加缓存机制', '接入用户画像'],
  0)

Q(tags.优化方案, 'single', '优化交互界面的措施包括？',
  ['增加可视化，一键式操作', '提升模型准确度', '分布式部署', '用户画像分析'],
  0)

Q(tags.优化方案, 'single', '加快响应速度的措施包括？',
  ['增加缓存机制，分布式计算', '预训练大模型', '简化功能层级', '用户调研'],
  0)

Q(tags.优化方案, 'single', '增强个性化的措施包括？',
  ['接入用户画像数据，定制内容', '增加可视化图表', '优化算法效率', '扩充数据集'],
  0)

Q(tags.实施步骤, 'multiple', '优化模型准确度的实施步骤包括哪些？（多选）',
  ['评估现有模型基线', '选型预训练模型', '收集并标注领域数据', '增加广告位'],
  [0, 1, 2])

Q(tags.实施步骤, 'multiple', '提升响应时间的实施步骤包括哪些？（多选）',
  ['识别系统瓶颈', '引入缓存层', '服务拆分分布式部署', '增加功能模块'],
  [0, 1, 2])

Q(tags.答题框架, 'true-false', '答题框架的回答顺序应为：先找问题并解释原因，再给出优化方案和步骤，最后总结预期效果',
  ['正确', '错误'], 0)

function assignPackId(packId: string) {
  for (const c of allCards) {
    c.packId = packId
  }
}

export function createExamAnswerPack(): CardPack {
  const packId = 'pack_exam_answer'
  assignPackId(packId)
  return {
    id: packId,
    name: 'AI应用问题与优化方案',
    description: '1.2.1-1.2.5 答题框架：问题识别→优化方案→实施步骤→预期效果',
    tags: Object.values(tags),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }
}

export function getExamAnswerCards(): CardItem[] {
  return allCards
}
