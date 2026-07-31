import type { CardItem, CardPack, Tag, QuestionContent } from "../types"

let _tid = 0
function tid(): string { return `thtag_${++_tid}` }
let _cid = 0
function cid(): string { return `thcard_${++_cid}` }

const T = (id: string, name: string): Tag => ({ id, name })

const tags = {
  单选题: T(tid(), "单选题"),
  多选题: T(tid(), "多选题"),
  判断题: T(tid(), "判断题"),
  Office办公: T(tid(), "Office办公"),
  Web与浏览器: T(tid(), "Web与浏览器"),
  业务与流程: T(tid(), "业务与流程"),
  云平台与架构: T(tid(), "云平台与架构"),
  人机交互与UI: T(tid(), "人机交互与UI"),
  培训与教学: T(tid(), "培训与教学"),
  操作系统与工具: T(tid(), "操作系统与工具"),
  数据处理: T(tid(), "数据处理"),
  数据标注: T(tid(), "数据标注"),
  数据清洗与预处理: T(tid(), "数据清洗与预处理"),
  数据采集: T(tid(), "数据采集"),
  机器学习: T(tid(), "机器学习"),
  模型训练: T(tid(), "模型训练"),
  模型评估: T(tid(), "模型评估"),
  法律与知识产权: T(tid(), "法律与知识产权"),
  测试: T(tid(), "测试"),
  深度学习与神经网络: T(tid(), "深度学习与神经网络"),
  特征工程与数据分析: T(tid(), "特征工程与数据分析"),
  算法: T(tid(), "算法"),
  职业道德: T(tid(), "职业道德"),
  自然语言处理: T(tid(), "自然语言处理"),
  计算机视觉: T(tid(), "计算机视觉"),
  设计工具: T(tid(), "设计工具"),
  项目管理: T(tid(), "项目管理"),
}

const allCards: CardItem[] = []

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )是调整职业个人、职业主体和社会成员之间关系的行为准则和规范。',
    options: ['职业纪律', '职业责任', '职业良心', '职业作风'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '职业道德是职业守则的核心内容之一，不属于职业道德强调的关系是( )。',
    options: ['个人与集体', '个人与社会', '个人与他人', '个人与工作职责'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '从业人员要强化岗位职业责任必须要做到( )。',
    options: ['了解职业责任、坚守工作岗位', '了解职业责任、强化责任意识', '坚守工作岗位、履行职业守则', '坚守工作岗位、强化责任意识'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '爱岗敬业是企业对从业人员的( )。',
    options: ['职业规定', '职业守则', '职业纪律', '职业要求'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Web与浏览器.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在浏览器中，要打开一个新的标签页，应该使用快捷键( )。',
    options: ['Ctrl + T', 'Ctrl + N', 'Ctrl + Shift + T', 'Ctrl + Shift + N'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 Word 中进行图文混排时，调整图片大小的方法( )。',
    options: ['单击图片，然后拖动图片边框上的控制点', '双击图片，然后在弹出的对话框中输入新的尺寸', '左键点击图片，选择\'大小和位置\'选项进行调整', '选择图片，然后按键盘上的方向键进行微调'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '知识产权法的基本原则包括保护创作成果、鼓励创新和技术进步以及( )。',
    options: ['公平分配利益', '促进知识传播', '保障公共利益', '限制知识产权滥用'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据采集流程中，使用( )可以帮助我们实现数据的持久化与高效检索。',
    options: ['数据分析软件', '数据可视化工具', '网络爬虫', '数据存储与管理工具'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '离线审核平台通常用于( )场景。',
    options: ['处理大量历史数据', '处理实时数据', '处理小规模数据', '处理非结构化数据'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为人工智能训练师，( )工具最常用于业务流程管理与优化。',
    options: ['TensorFlow', 'Oracle BPM Suite', 'Docker', 'Kubernetes'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据采集.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在评估数据源的质量时，( )指标不是关键因素。',
    options: ['数据的准确性', '数据的多样性', '数据的时效性', '数据的可解释性'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了确保抓取的数据质量，( )方法是无效的。',
    options: ['设置合理的抓取间隔', '使用更复杂的抓取规则', '避免抓取重复内容', '减少抓取深度'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '实时数据处理技术的主要原理是通过( )来对数据进行快速处理和分析。',
    options: ['批处理', '串行计算', '分布式计算', '缓存技术'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不是特征选择的主要方法。',
    options: ['过滤法', '包装法', '嵌入法', '降维法'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据校验和异常数据检测的方法中，( )方法不可以用于检测数据中的异常值。',
    options: ['Z-score 方法', 'IQR 方法', 'DBSCAN 方法', 'K-means 方法'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在推荐系统中，( )方法是基于用户过去的购买或评分历史来预测他们可能喜欢的项目。',
    options: ['基于内容的推荐', '协同过滤', '混合推荐', '基于知识的推荐'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '自动数据处理功能模块在( )环节可以提高数据处理速度。',
    options: ['数据收集', '数据清洗', '数据分析', '数据可视化'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )方法常用于解决离散优化问题。',
    options: ['梯度下降法', '遗传算法', '拉格朗日乘数法', '牛顿法'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '智能控制功能模块的原理主要包括( )。',
    options: ['人工智能技术', '自动控制理论', '传感器技术', '通信技术'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '生物特征识别功能模块的主要应用场景包括( )。',
    options: ['金融安全', '网络安全', '医疗诊断', '智能家居'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '计算智能的核心技术是( )。',
    options: ['机器学习', '深度学习', '进化计算', '模糊逻辑'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据挖掘方法中，( )技术不是分类算法。',
    options: ['K-最近邻', '支持向量机', '随机森林', '关联规则'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在了解业务流程现状时，( )是非常重要的信息来源。',
    options: ['企业战略规划文件', '员工访谈记录', '客户反馈信息', '市场调查报告'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了确保简单业务流程优化的效果，企业应该采取( )方法来评估流程改进的成果。',
    options: ['对比分析', '问卷调查', '流程模拟', '成本效益分析'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行复杂业务系统的改进时，首先应该进行的是( )。',
    options: ['分析现有系统的优点和缺点', '确定改进的目标和范围', '设计新的业务流程', '制定详细的实施计划'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '综合业务流程优化方法的目标是( )。',
    options: ['提高效率', '降低成本', '提升质量', '增强竞争力'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '产生式系统通常用于( )领域的知识表示。',
    options: ['自然语言处理', '专家系统', '图像识别', '语音识别'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '知识图谱中的实体和关系的表示方法通常是( )。',
    options: ['使用 XML 格式来编码实体和它们之间的关系', '实体和关系被表示为图中的节点和边，其中实体是节点，关系是连接节点的边', '实体和关系通过数据库表中的行和列来表示', '实体和关系通过神经网络中的权重和激活函数来表示'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在业务数据分析方法中，( )是一种结构化的数据分析方法，用于深入挖掘数据背后的原因和影响。',
    options: ['时间序列分析法', '决策树分析法', '神经网络分析法', '因果分析法'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '机器学习中的监督学习是( )。',
    options: ['通过已知数据进行模型训练，以预测新数据的类别或值', '通过已知数据进行模型训练，以预测新数据的特征', '通过已知数据进行模型训练，以预测新数据的分布', '通过已知数据进行模型训练，以预测新数据的关联性'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在智能训练中，特征提取的主要方法之一是( )。',
    options: ['决策树', '贝叶斯分类器', 'K-均值聚类', '主成分分析'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在模型训练时，( )策略可以帮助模型更快地收敛到最优解。',
    options: ['学习率调整', '动量减速', '梯度裁剪', '早停法'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在特征选择方法中，过滤法通常基于( )准则来选择特征。',
    options: ['信息增益', '相关性系数', '方差阈值', '互信息'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据分片中，( )是用来决定如何将数据分割到各个分片的。',
    options: ['主键', '外键', '分区键', '唯一键'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在模型评估中，召回率 Recall 的计算方法是：( )。',
    options: ['真正例数 / 真正例数 + 真正例数 / 假负例数', '假正例数 / 真正例数 + 假正例数 / 假负例数', '正确预测的样本数 / 总样本数', '错误预测的样本数 / 总样本数'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '如果需要快速原型设计和实验，( )机器学习库更适合。',
    options: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在确定数据收集方法时，应该考虑数据的类型和来源，( )方法适用于收集结构化数据。',
    options: ['问卷调查', '访谈', '观察法', '实验法'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )工具库主要用于数据的加载和预处理。',
    options: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在机器学习中，交叉验证的主要目的是( )。',
    options: ['提高模型的训练速度', '减少模型的复杂性', '增加模型的预测准确性', '评估模型的泛化能力'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在模型训练自动化工具中，( )是指通过自动化的方式对模型进行迭代优化，以提高模型的性能。',
    options: ['模型评估', '模型训练', '特征工程', '数据清洗'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在系统监控中，( )工具主要用于实时收集和分析日志数据。',
    options: ['ApacheHadoop', 'ELKStack', 'TensorFlow', 'PyTorch'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'single',
    question: '生成对抗网络中的生成器通常使用( )类型的神经网络结构。',
    options: ['卷积神经网络', '循环神经网络', '自编码器', '生成对抗网络'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不是模型部署工具的使用方法。',
    options: ['选择合适的部署环境', '将模型文件上传到部署环境中', '编写测试代码来验证模型的准确性', '对模型进行微调以提高性能'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '箱线图法在异常值检测中的作用是( )。',
    options: ['确定数据的分布范围', '识别数据中的异常值', '评估数据的离散程度', '判断数据的集中趋势'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Z-score 方法是一种基于( )的异常值检测方法。',
    options: ['最大值', '中位数', '众数', '标准差'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '位图法在数据去重中的应用主要是通过( )。',
    options: ['比较每个数据与已有数据的相似度', '记录每个数据是否出现过', '对数据进行排序', '对数据进行压缩'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '数据白化处理的主要目的是( )。',
    options: ['提高数据的准确性', '减少数据的冗余', '增强数据的可读性', '保护数据的隐私'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型训练.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行特征工程时，通常需要对数据进行( )，以便更好地进行模型训练。',
    options: ['数据清洗', '数据集成', '数据变换', '数据划分'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在选择数据标注工具时，应该权衡( )。',
    options: ['准确性、易用性、成本', '准确性、易用性、速度', '准确性、成本、速度', '易用性、成本、速度'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据集划分时，如果目标是提高模型的准确性，应采用( )划分方法。',
    options: ['随机划分', '按比例划分', '分层划分', '交叉验证'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'single',
    question: '模型训练的目标是( )。',
    options: ['最大化模型准确率', '最小化模型损失', '最大化模型泛化能力', '最小化模型复杂度'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行大规模分布式训练时，( )框架提供了较为成熟的分布式训练支持。',
    options: ['TensorFlow', 'PyTorch', 'MXNet', 'Chainer'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在算法验证过程中，通常采用的形式化方法包括模型检验和( )。',
    options: ['形式化描述', '逻辑推理', '代码审查', '测试用例'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型训练.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在超参数调优过程中，通常使用( )方法来评估模型性能。',
    options: ['交叉验证', '网格搜索', '随机搜索', '贝叶斯优化'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不是模型训练动态监控工具的典型功能。',
    options: ['提供训练损失和验证损失的实时图表', '检测并报告过拟合或欠拟合现象', '自动调整模型参数以优化性能', '允许用户远程访问和操作训练环境'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据处理过程中，( )最适合用于大规模数据的分布式处理。',
    options: ['Pandas', 'NumPy', 'ApacheSpark', 'Matplotlib'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '人工智能测试工具的主要目的是( )。',
    options: ['发现缺陷', '提高代码质量', '优化算法性能', '降低开发成本'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在实时系统中，除了评估模型的预测准确性之外，( )指标对于确保系统的响应速度至关重要。',
    options: ['模型的复杂度', '训练时间', '数据集大小', '推理时间'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在算法鲁棒性测试中，通常采用的方法包括( )。',
    options: ['边界值分析', '等价类划分', '因果图法', '错误推测法'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行数据多样性与公平性测试时，( )原则是最重要的。',
    options: ['确保数据的全面性', '关注数据的代表性', '评估算法的公平性', '保证数据的准确性'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'K 折交叉验证中，K 的取值通常为( )。',
    options: ['2', '3', '5', '1'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '敏捷开发方法强调的是( )，以便快速响应变化并持续改进软件质量。',
    options: ['频繁的代码审查和修复', '长期的项目规划和执行', '严格的需求分析和设计', '定期的项目评审和反馈'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型训练.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '关于训练集、验证集和测试集的大小比例，( )属于常见合理的范围。',
    options: ['训练集 50%，验证集 25%，测试集 25%', '训练集 20%，验证集 60%，测试集 20%', '训练集 70%，验证集 15%，测试集 15%', '训练集 40%，验证集 30%，测试集 30%'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在使用基于统计的特征选择时，如果特征之间存在高度共线性，最有可能发生的情况是( )。',
    options: ['特征的重要性会被低估', '特征的重要性会被高估', '特征选择将无法进行', '特征之间的相关性将被忽略'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '人工智能训练师进行基于模型的特征拆解及选择的初衷是( )。',
    options: ['减少模型的复杂度', '增加模型的运算速度', '提高模型的预测准确性', '降低数据存储需求'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'single',
    question: '对于非平稳时间序列数据，通过减去先前观察值来消除趋势和季节性的过程叫做( )。',
    options: ['对数变换', '标准化', '差分', '归一化'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在网络分析中，( )描述了网络中节点之间的直接连接关系。',
    options: ['聚类系数', '节点中心性', '邻居节点', '可达性'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在社会网络分析中，中心性指标用于衡量节点在网络中的重要性。( )不是正确的中心性指标。',
    options: ['度中心性', '介数中心性', '接近中心性', '平均路径长度中心性'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.特征工程与数据分析.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在图像处理中，多维度数据分解技术如 PCA 主要用于( )。',
    options: ['提升图像亮度', '压缩图像数据', '增加图像分辨率', '改变图像色彩'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '特征工程中的特征构造方法不包括( )。',
    options: ['基于领域知识的特征构造', '基于统计量的特征构造', '基于模型的特征构造', '基于可视化分析的特征构造'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在优化 AI 模型的响应时间时，( )方法可以直接减少模型推理时间。',
    options: ['增加模型的深度和宽度', '使用更复杂的激活函数', '在模型中添加更多的正则化项', '通过剪枝减少模型的参数数量'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行特征选择时，( )方法是通过计算特征与目标变量之间的相关性来进行筛选的。',
    options: ['卡方检验', '主成分分析', '决策树', '线性回归'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '应用机器学习算法时，( )策略可能导致模型过拟合。',
    options: ['减少正则化项的权重', '优化算法实现', '增加学习率', '采用随机梯度下降'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'DBSCAN 算法是一种基于密度的聚类方法，它能够发现任意形状的簇，并且对噪声点具有较好的鲁棒性。DBSCAN 算法中的两个重要参数是邻域半径ε和最小点数 MinPts，其中ε表示( )。',
    options: ['邻域内的最大距离', '邻域内的最小距离', '邻域内的平均距离', '邻域内的最小点数'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '关联规则学习中的置信度是指( )。',
    options: ['前件项目集出现的次数 / 后件项目集出现的次数', '前件项目集出现的次数 / 所有事务数', '前件项目集出现的次数 / 总项目数', '前件项目集出现的次数 / 事务的平均长度'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在回归分析中，我们通常使用( )方法来确定模型的参数。',
    options: ['最大似然估计', '最小二乘法', '主成分分析', '聚类分析'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '决策树分析是一种( )方法',
    options: ['定性分析', '定量分析', '逻辑推理', '模糊评价'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'single',
    question: '神经网络中的激活函数的作用是( )。',
    options: ['增加网络的复杂性', '提高网络的泛化能力', '减少网络的训练时间', '增强网络的表达能力'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '贝叶斯网络中的链式法则用于计算( )。',
    options: ['在已知某些条件下，事件 A 发生的概率', '在已知某些条件下，事件 B 发生的概率', '在已知某些条件下，事件 A 和事件 B 同时发生的概率', '在已知某些条件下，事件 A 和事件 B 的联合概率'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '随机森林算法是一种集成学习方法，它通过( )方式来生成多个决策树。',
    options: ['对每个数据进行随机抽样', '对每个样本进行随机抽样', '对每个决策树进行随机抽样', '对每个类别进行随机抽样'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'single',
    question: '循环神经网络 RNN 的核心思想是( )。',
    options: ['通过反向传播算法优化网络参数', '利用门控机制处理序列数据', '使用注意力机制捕捉长距离依赖关系', '采用自编码器进行特征提取'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '自然语言处理中的文本分类任务通常使用( )算法。',
    options: ['决策树', '支持向量机', '朴素贝叶斯', '神经网络'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'single',
    question: '时间序列分析中，( )方法用于移除趋势和季节性效应。',
    options: ['平稳性检验', '季节分解', '自相关函数', '累积和控制图'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行维度约简时，通常使用( )方法来评估保留的特征的重要性。',
    options: ['信息增益', '方差分析', '相关系数', '卡方检验'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在异常值检测中，( )方法通常用于基于数据分布的异常值识别。',
    options: ['离群值检测', '聚类分析', '相关性分析', '频繁模式挖掘'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '产品功能规划应该具备( )性质。',
    options: ['尽可能涵盖所有可能的功能', '简单明了，聚焦核心需求', '具有高度复杂性和灵活性', '与市场趋势和潮流保持一致'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在模型训练完成后，通常使用( )来选择最佳的模型参数。',
    options: ['网格搜索', '随机搜索', '贝叶斯优化', '线性回归'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在分布式系统中，( )实现负载均衡以提高系统的性能。',
    options: ['网格搜索', '最少连接数算法', '源地址哈希算法', '随机算法'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '网络拓扑结构对故障恢复策略性设计的影响主要体现在( )方面。',
    options: ['数据传输速度', '系统容错能力', '资源利用率', '系统安全性'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在产品维护与升级的制定过程中，( )步骤是确保产品质量的重要措施。',
    options: ['制定详细的维护计划', '定期进行产品审查', '收集用户反馈', '实施严格的版本控制'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '人工智能训练师在提升 AI 模型性能时，与人机交互的( )方面关系最为紧密。',
    options: ['算法设计', '数据标注', '硬件设备选择', '用户体验优化'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '人机交互中的控制器负责( )功能。',
    options: ['接收用户输入并转换为机器可识别的信号', '处理来自输入设备的信号并将其转换为输出设备可显示的信息', '控制计算机系统的硬件和软件资源', '管理计算机系统的电源和散热系统'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在项目管理中，( )是确保项目顺利进行的关键环节之一。',
    options: ['规划', '执行', '监控', '反馈'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '虚拟现实 VR 交互设计中，为了提高用户的操作效率，应该采用( )输入设备。',
    options: ['游戏手柄', '运动控制器', '头戴式显示器', '触觉反馈手套'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在设计多模态交互系统时，需要考虑用户的上下文环境的原因是( )。',
    options: ['因为上下文环境对系统性能没有影响', '为了适应不同的环境噪声水平，优化语音识别', '为了确保在任何环境下，交互模式都能有效、安全地工作', '上下文环境只影响视觉模式的交互'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在设计用户中心时，应该遵循( )原则来提高用户体验。',
    options: ['保持一致性', '减少操作步骤', '使用复杂的界面设计', '提供个性化推荐'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '设计的可用性标准不包括( )。',
    options: ['易用性', '高效性', '错误率', '多样性'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '流式布局适用于( )场景。',
    options: ['内容较多的页面', '需要保持元素之间相对位置的页面', '需要适应不同屏幕尺寸的页面', '需要展示大量图片的页面'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Adobe XD 的快速原型制作主要用于( )。',
    options: ['制作高保真原型', '制作低保真原型', '进行用户调查', '进行市场调研'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Marvel 的设计评审功能用于( )。',
    options: ['进行用户访谈', '设计界面 UI', '进行原型测试', '制作用户旅程地图'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Marvel 的响应式设计预览用于( )。',
    options: ['设计界面 UI', '制作用户旅程地图', '进行用户访谈', '制作低保真原型'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了使培训讲义更具吸引力，可以采用( )的排版方式。',
    options: ['单一字体', '多种字体', '大量图片', '简单图表'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )是通过让员工参与实际工作任务来提高他们的技能和知识的方法。',
    options: ['角色扮演法', '案例分析法', '工作轮换法', '模拟训练法'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'single',
    question: '案例分析法( )。',
    options: ['需要大量时间准备案例', '适用于所有学科', '可以提高学生的实践能力', '无法培养学生的理论素养'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'single',
    question: '企业常用的培训方法包括讲授法、讨论法、( )和案例分析法。',
    options: ['角色扮演法', '游戏法', '实地考察法', '实践法'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '职业道德的概念有广义和狭义之分。狭义的职业道德是指在( )活动中应遵循的职业行为准则和规范。',
    options: ['职业活动', '普通职业', '一定职业', '危险职业'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '职业道德真正形成于( )。',
    options: ['原始社会', '奴隶社会', '封建社会', '资本主义社会'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '古人所谓的“鞠躬尽瘁，死而后已”。揭示了职业活动内在的道德准则中的( )准则。',
    options: ['忠诚', '审慎', '勤勉', '民主'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '从道德和社会责任角度考虑，人工智能训练师在处理用户数据时，应确保数据的( )。',
    options: ['准确性', '完整性', '可追溯性', '安全性'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在人工智能的职业道德中，最能体现其对隐私保护的重视是( )。',
    options: ['忠诚', '勤勉', '诚信', '保密'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '人工智能训练师需要具备的素质包括( )。',
    options: ['高级管理技能', '扎实的技术基础', '高级图形设计技能', '敏锐的市场洞察力'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在职业守则的制定过程中，( )的步骤旨在确保守则的公平性和合理性。',
    options: ['收集各方意见和建议', '由专业机构进行审核', '通过行业大会进行表决', '制定详细的实施计划'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了确保职业守则的有效执行，组织应当采取( )机制来确保其落实。',
    options: ['仅依赖内部监督', '主要依靠外部监督', '结合内部监督和外部监督', '单独采用自我监督'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在职业守则中，诚实守信主要体现在( )行为上。',
    options: ['随意许诺，以满足客户需求', '不轻易承诺，但一旦答应就全力以赴', '为迎合市场趋势，夸大产品效果', '为提高工作效率，省略必要的工作步骤'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'single',
    question: '爱岗敬业的具体表现不包括( )。',
    options: ['树立远大的职业理想', '只在自己喜欢的岗位上工作', '努力提升专业技能', '严格遵守企业规章制度'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在保护用户隐私方面，人工智能训练师应采取( )措施。',
    options: ['仅对敏感数据进行部分加密', '随意限制数据访问权限', '定期进行数据备份，但不进行安全审计', '对敏感数据进行加密存储，限制数据访问权限，并定期进行安全审计'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '五笔字型汉字输入法的编码属于( )。',
    options: ['音码', '形声码', '区位码', '形码'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.操作系统与工具.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '使用 Windows 系统的维护利器可以( )系统性能。',
    options: ['提高', '降低', '保持不变', '无法确定'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: '当 Windows 系统无法连接到网络时，首先应该尝试( )，快速修复方法。',
    options: ['重启路由器或计算机', '重装网络适配器驱动程序', '联系售后', '检查其他设备是否能够连接网络'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: '要打开 Windows 小工具，用户需要( )。',
    options: ['右键任务栏空白区域', '左键任务栏空白区域', '从开始菜单中选择小工具', '右键单击开始按钮'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Web与浏览器.id],
  type: 'question',
  content: {
    type: 'single',
    question: '使用( )可以帮助我们调试网页代码，查看元素结构以及分析网络请求等。',
    options: ['任务管理器', '资源管理器', '控制面板', '开发者工具'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 Excel 中，使用( )键可以快速将光标移动到当前列最底下的单元格。',
    options: ['Ctrl + Down', 'Ctrl + Home', 'Ctrl + Right', 'Ctrl + Left'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了提高 Word2019 文档的编辑效率，可以使用( )快捷键来快速插入当前日期。',
    options: ['ALT + Shift + D', 'ALT + Shift + T', 'Ctrl + Shift + Y', 'Ctrl + Shift + I'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 Word 中，通过( )，来快速应用一组格式选项。',
    options: ['手动逐一调整每个段落的格式', '使用格式刷复制并应用格式', '创建个性化样式模板', '在样式库中选择并应用内置样式'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 Excel 中，使用( )函数可以将一个日期转换为文本格式。',
    options: ['TEXT', 'VALUE', 'NUMBER', 'DATE'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 Excel 工作表单元格中输入公式时，F$2 的单元格引用方式称为( )。',
    options: ['交叉地址引用', '混合地址引用', '相对地址引用', '绝对地址引用'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 Excel 中，( )图表类型最适合用于展示时间序列的数据变化。',
    options: ['条形图', '折线图', '饼图', '散点图'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 Excel 中，( )不可以快速切换不同的工作簿。',
    options: ['Ctrl+PageUp', 'Ctrl + Page Down', '鼠标点击工作表目录', 'Ctrl+Shift+Tab'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 Microsoft Excel 中，宏的主要作用是( )。',
    options: ['手动执行一系列复杂的计算任务。', '将数据从一个工作表复制到另一个工作表。', '格式化工作表的单元格。', '自动执行一系列预定义的操作。'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不会导致劳动合同无效。',
    options: ['违反法律、行政法规强制性规定的', '双方当事人真实意思表示一致', '一方以欺诈、胁迫的手段或者乘人之危，使对方在违背真实意思的情况下订立或者变更劳动合同的', '用人单位免除自己的法定责任、排除劳动者权利的'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不是劳动合同必备的核心条款。',
    options: ['劳动合同期限', '工作内容和工作地点', '社会保险和福利待遇', '劳动者家庭情况'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '用人单位不得解除劳动合同的情形是( )。',
    options: ['患职业病或者因工负伤被确认丧失或者部分丧失劳动能力的', '在试用期被证明不符合录用条件的', '严重违反劳动纪律或者用人单位规章制度的', '被依法追究刑事责任的'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '网络运营者应当履行的安全保障义务包括( )。',
    options: ['不得收集用户个人信息', '向第三方提供用户个人信息', '采取技术措施和其他必要措施，保障网络安全、稳定运行', '未经用户同意不得发布广告'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '网络接入的规范要求不包括( )。',
    options: ['遵守国家网络安全和信息技术管理法规', '不得进行非法网络活动', '无需获得相关资质即可提供接入服务', '保障接入网络的安全性和稳定性'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )是关键信息基础设施的特殊保护中的一方面。',
    options: ['物理安全', '网络安全', '数据安全', '应急响应'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不能作为专利申请权的主体。',
    options: ['自然人', '法人', '非法人组织', '某研究所课题组'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不是专利授权的实质性条件。',
    options: ['新颖性', '创造性', '实用性', '美观性'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.数据清洗与预处理.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不属于专利申请流程的标准化步骤。',
    options: ['提交专利申请', '专利局审查', '授予专利权', '投入市场生产'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不是遵纪守法的社会价值体现。',
    options: ['维护社会秩序和稳定', '保障人民权利和自由', '阻碍社会发展和创新', '树立社会道德风尚'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '据劳动保护的法律规定，人工智能训练师在工作中享有( )的权益。',
    options: ['自由选择工作时间', '接受定期的安全培训', '直接参与公司利润分配', '无限制的加班权利'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '根据著作权法的规定，( )受著作权法的保护。',
    options: ['法律条文', '计算机软件', '国家机关的决定', '历法'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '根据我国《专利法》的规定，申请专利的发明创造在申请日以前六个月内，出现( )的情况，会丧失新颖性。',
    options: ['他人未经申请人同意而泄露其内容', '在规定的学术会议或者技术会议上首次发表', '在中国政府主办或者承认的国际展览会上首次展出', '他人使用申请人未公开的类似技术方案'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '有可能无限期拥有的知识产权是( )。',
    options: ['著作权', '专利权', '商标权', '集成电路图设计权'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行数据采集时，( )工具可以处理非结构化数据。',
    options: ['Python', 'Excel', 'Access', 'Mysql'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了提高数据抓取效率，可以使用( )技术。',
    options: ['多线程', '单线程', '模拟登录', '验证码识别'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.培训与教学.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'single',
    question: '数据治理工具在人工智能培训中的作用，描述正确的是( )。',
    options: ['数据治理工具与人工智能培训无关', '数据治理工具主要用于数据删除', '数据治理工具帮助人工智能训练师获取和整理培训所需的高质量数据', '数据治理工具只用于数据可视化'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据采集.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'ETL 工具的使用方法通常包括这些步骤：1. 设计 ETL 过程；2. 配置 ETL 工具；3. 执行 ETL 过程；4. 监控和维护 ETL 过程。其中，( )是 ETL 工具使用方法的第一个步骤。',
    options: ['设计 ETL 过程', '配置 ETL 工具', '执行 ETL 过程', '监控和维护 ETL 过程'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )更适合处理大量非结构化数据。',
    options: ['关系型数据库', '非关系型数据库', '分布式数据库', '内存数据库'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '不属于云服务主要特点的是( )。',
    options: ['弹性伸缩', '按需付费', '高可用性', '完全无限制'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行 CSV 到 XML 数据格式转换时，可以使用( )工具或语言的库效率最高。',
    options: ['Excel', 'Notepad++', 'Python 的 pandas 库', 'PowerPoint'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'single',
    question: '内存计算平台的设计初衷是为了解决( )。',
    options: ['提高数据处理的效率', '降低存储成本', '解决数据倾斜问题', '支持复杂的数据挖掘算法'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '数据可视化工具的主要作用是( )。',
    options: ['展示数据', '分析数据', '存储数据', '清洗数据'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )可能被人工智能训练师用于特征工程，以辅助数据的探索性分析。',
    options: ['数据可视化工具', '文本编辑器', '数据库管理系统', '网络浏览器'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'single',
    question: '企业使用数据质量监控工具的主要目的是( )。',
    options: ['提高数据处理的速度', '降低数据处理的难度', '确保数据的准确性和可靠性', '减少数据存储的需求'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.操作系统与工具.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Power BI 支持( )操作系统。',
    options: ['Windows', 'macOS', 'Linux', 'iOS'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行网络数据采集时，我们应该优先选择( )方法来确保数据的全面性。',
    options: ['爬虫', '访谈', '问卷调查', '观察法'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'single',
    question: '对于小型网站的数据抓取任务，( )技术可能更适合。',
    options: ['网络爬虫', 'SDK', 'JavaScript 渲染', '数据库查询'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不是常见的数据库管理系统。',
    options: ['MySQL', 'MongoDB', 'Oracle', 'Hadoop'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据清洗与预处理流程中，( )是第一步。',
    options: ['数据收集', '数据整理', '数据转换', '数据分析'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据处理.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了提高数据质量，数据转换过程中常用的方法不包括( )。',
    options: ['数据去重', '数据规范化', '数据压缩', '数据标准化'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了保护用户隐私，业务数据相关流程中应该采用( )技术来对数据进行脱敏处理。',
    options: ['数据掩码', '数据脱敏', '数据加密', '数据备份'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'single',
    question: '容器化技术在业务数据处理流程中的优势不包括( )。',
    options: ['易于部署', '易于扩展', '易于监控', '易于迁移'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据采集.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )是一种通过邀请领域专家对数据进行评价来评估数据质量的方法。',
    options: ['统计分析法', '逻辑检查法', '专家评估法', '抽样评估法'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在设计高效业务流程时，( )措施最有助于减少不必要的延误。',
    options: ['增加审批环节', '实施自动化工具', '简化决策流程', '扩大团队规模'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '合规性检查的目的是确保组织的数据处理活动符合( )的要求。',
    options: ['法律法规', '行业标准', '内部政策', '客户期望'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )业务场景的数据产生特点是低频度、数据量小。',
    options: ['企业的专利申请数据', '证券市场的股票交易数据', '网络游戏的玩家行为数据', '体育赛事的直播数据'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在人工智能业务的分类中，( )不是人工智能训练师常见的工作内容。',
    options: ['监督学习项目的进展', '编写和调试机器学习算法代码', '制定和执行数据收集计划', '进行市场趋势分析'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '人工智能业务的功能之一是通过( )为用户提供个性化的服务体验。',
    options: ['智能推荐系统', '自动化客服', '数据分析', '虚拟现实'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在智能搜索功能模块中，( )技术可以用来构建和维护一个庞大的实体关系网络。',
    options: ['知识图谱', '搜索引擎优化', '个性化推荐', '数据挖掘'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '智能交互功能模块的优势在于( )。',
    options: ['提高用户体验', '降低人工成本', '增强系统稳定性', '拓展应用领域'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '自然语言处理中的( )任务通常涉及对文本进行分析，以确定其是积极的、消极的还是中性的。',
    options: ['命名实体识别', '词性标注', '情感分析', '句法分析'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '计算机视觉通过模拟人类视觉系统来处理和分析图像，( )不是其主要功能。',
    options: ['图像增强', '图像恢复', '图像压缩', '图像分类'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在知识发现的流程中，( )不是由人工智能训练师执行的。',
    options: ['数据分类', '模式识别', '模型调优', '模型开发'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '业务模块构建方法强调的是( )。',
    options: ['快速开发', '高质量代码', '灵活性和可扩展性', '降低维护成本'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在业务流程优化过程中，( )策略可以提高企业的响应速度。',
    options: ['消除非增值活动', '增加流程', '整合相关活动', '自动化处理'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了确保数据收集的准确性，通常需要对数据进行( )。',
    options: ['清洗', '验证', '转换', '整合'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '业务流程的展现形式与技术通常使用( )来绘制。',
    options: ['流程图软件', '数据库管理系统', '电子表格软件', '文字处理软件'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在评价业务流程优化效果时，( )是一个重要的指标。',
    options: ['生产效率', '员工满意度', '产品质量', '销售额'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在综合业务流程分析中，常用的工具不包括( )。',
    options: ['流程图', '鱼骨图', 'SWOT 分析', '甘特图'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '数据处理工具的主要功能是( )。',
    options: ['对数据进行清洗和预处理', '进行复杂的数据分析', '将数据以图表等形式展示出来', '从各种来源获取数据'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在业务数据分析方法中，( )步骤涉及到对数据进行深入的探讨和理解。',
    options: ['收集数据', '清洗数据', '分析数据', '得出结论'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.深度学习与神经网络.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '卷积神经网络 CNN 的核心组件包括卷积层、池化层和全连接层，其中( )层用于提取图像特征。',
    options: ['卷积层', '池化层', '全连接层', '激活层'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.深度学习与神经网络.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据增强方法中，( )是一种常见的图像变换技术，它可以改变图像的大小和形状。',
    options: ['裁剪', '缩放', '旋转', '平移'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'single',
    question: '自动标注方法是指利用( )技术对数据进行自动标注。',
    options: ['计算机程序', '机器学习算法', '数据挖掘技术', '自动化'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在评估分类模型的准确性时，通常使用( )指标。',
    options: ['均方误差', '准确率', '均方根误差', '对数损失'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'NumPy 库在数据处理中的优势在于其高效的( )。',
    options: ['数组计算', '字符串处理', '图形绘制', '数据库连接'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在自动化标注中，为了提高标注的准确性，系统可能会利用( )机制来不断优化其标注能力。',
    options: ['随机猜测', '专家系统', '机器学习', '手动校验'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在深度学习中，用来防止过拟合的方法是( )。',
    options: ['仅使用一层隐藏层', '增加模型的复杂度', '应用早停技术', '减少训练数据量'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在智能训练数据处理中，人工智能训练师使用 Python 或 R 的主要原因是( )。',
    options: ['这些语言提供了丰富的库和框架，专门用于数据处理和机器学习。', '这些语言不需要编程知识，任何人都可以轻松使用。', '这些语言是唯一可以进行数据处理和机器学习的语言。', '这些语言的处理速度是最快的，超过了其他所有编程语言。'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '数据探索分析的结果通常用于支持( )决策。',
    options: ['业务策略制定', '产品研发', '市场推广', '客户关系管理'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行数据探索分析时，( )可以帮助我们更好地理解数据的结构和特点。',
    options: ['数据可视化', '统计分析', '数据挖掘', '机器学习'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在缺失数据处理中，( )方法适用于存在大量相似观测值的情况。',
    options: ['删除法', '填充法', '插值法', '替换法'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '对于分类数据，( )方法可以用来处理缺失值。',
    options: ['使用删除法', '使用均值填充缺失值', '使用中位数填充缺失值', '使用众数填充缺失值'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在噪声数据处理中，( )主要用于消除信号中的平稳随机噪声。',
    options: ['滤波法', '变换法', '统计法', '模型法'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '数据归一化处理的定义是( )。',
    options: ['将数据集中的所有值转换为相同的格式。', '将数据集中的所有值缩放到一个特定的小范围，通常是 0 到 1 之间。', '将数据集中的所有值增加到最大可能的值。', '将数据集中的所有值减少到最小可能的值。'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'single',
    question: '数据标注技术的目的是( )。',
    options: ['提高数据质量', '降低数据成本', '优化数据结构', '简化数据处理流程'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了确保模型具有较好的泛化能力，通常建议将数据集划分为( )的比例。',
    options: ['40%训练集，30%验证集，30%测试集', '80%训练集，10%验证集，10%测试集', '40%训练集，40%验证集，20%测试集', '30%训练集，50%验证集，20%测试集'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'single',
    question: '自动化标注能够显著降低( )成本。',
    options: ['数据收集', '数据存储', '数据标注', '数据传输'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'single',
    question: '分布式数据处理的优势之一是能够利用多个计算节点的计算能力，从而实现任务的快速响应和高效处理。这种优势主要得益于( )。',
    options: ['负载均衡技术', '数据压缩技术', '数据缓存技术', '数据加密技术'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了确保数据可追溯性，组织应该建立一套完整的数据管理流程，包括数据的( )、存储、传输和销毁等环节。',
    options: ['创建', '收集', '分析', '应用'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据管理中，数据可追溯性的主要目的是( )。',
    options: ['提高数据处理速度', '减少数据存储成本', '确保数据来源和修改历史的透明度', '增加数据的复杂性'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Office办公.id, tags.数据清洗与预处理.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 Excel 中进行数据清洗时，( )操作是用于识别重复数据的最佳实践。',
    options: ['使用“条件格式”高亮显示重复值', '手动检查每一行数据寻找重复项', '使用排序查找重复值', '将数据转换为文本格式以便更容易识别重复'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )是一种常用的图像读取方法，可以从文件中提取像素数据。',
    options: ['图像编码', '图像解码', '图像压缩', '图像解压缩'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在文本类数据标注过程步骤中，( )是不需要的。',
    options: ['对数据进行分词', '构建词典', '进行情感分析', '标记实体'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在处理视觉类数据时，人工智能训练师制定规范的目的是( )。',
    options: ['增加数据集的多样性', '保证训练模型时的数据处理一致性和数据质量', '减少数据存储的空间需求', '加快数据处理的速度'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在算法训练过程中，选择合适的模型对于提高模型性能至关重要。( )步骤不属于模型选择过程。',
    options: ['了解不同模型的优缺点', '根据任务需求选择合适的模型', '对模型进行调参优化', '对模型进行评估和比较'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据清洗与预处理.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行文本数据预处理时，( )步骤通常用于将文本转换为数值型数据。',
    options: ['分词', '去除停用词', '词干提取', '编码转换'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '降维的主要目的是减少数据的复杂性，同时保留数据中的重要信息。( )降维方法是通过将高维数据映射到低维空间来实现的。',
    options: ['主成分分析', '线性判别分析', '决策树', '遗传算法'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '当需要对图像中的多个对象进行精确边界框绘制时，通常会使用的标注工具是( )。',
    options: ['多边形标注工具', '点云标注工具', '目标检测标注工具', '关键点标注工具'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'single',
    question: '线性规划是一种用于求解( )问题的优化算法。',
    options: ['线性', '非线性', '凸', '离散'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了高效地训练大规模数据集，( )软件组件最为关键。',
    options: ['数据库管理系统', '版本控制系统', '分布式训练框架', '集成开发环境 IDE'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.Web与浏览器.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行人工智能模型调试时，( )可推荐用来解决模型性能不佳的问题',
    options: ['立即增加模型的参数数量', '检查模型训练数据的质量，确保没有错误或偏差', '忽略验证集的性能，只关注训练集上的准确率', '停止模型训练，因为认为模型已经足够好'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在评估一个机器学习算法的性能时，( )指标不是常用的评价指标。',
    options: ['准确率 Accuracy', '精确率 Precision', '召回率 Recall', '运行时间 Run Time'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '关于模型部署，描述正确的是( )。',
    options: ['模型部署只需要考虑技术层面的因素', '模型部署是一个一次性完成的过程', '模型部署需要确保模型的安全性和隐私性', '模型部署不需要考虑用户体验'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在模型部署过程中，为了实现自动化的模型更新和版本管理，通常会使用( )工具。',
    options: ['Git', 'SVN', 'Jenkins', 'Spinnaker'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.云平台与架构.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在选择云平台进行人工智能模型训练和部署时，( )不是云平台提供的优势或服务。',
    options: ['弹性计算资源，允许用户根据需求快速扩展或缩减计算能力', '预配置的人工智能和机器学习服务，简化模型开发和部署流程', '限制用户访问的地理位置，只能选择特定区域的数据中心', '按需付费模式，用户仅需为实际使用的资源和服务付费'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'single',
    question: '容器化技术的核心优势是( )。',
    options: ['提供丰富的用户图形界面', '需要占用大量的系统资源', '实现应用的快速部署和高效资源利用', '主要用于网络安全防护'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'single',
    question: '容器化技术与虚拟机技术的主要区别在于( )。',
    options: ['容器化技术运行在操作系统之上，而虚拟机技术运行在硬件之上。', '容器化技术使用轻量级的隔离环境，而虚拟机技术使用完整的操作系统。', '容器化技术不支持多操作系统，而虚拟机技术支持多操作系统。', '容器化技术不涉及硬件抽象，而虚拟机技术涉及硬件抽象。'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '人工智能训练师在利用高性能计算资源时，主要关注( )方面。',
    options: ['硬件设备的物理维护', '算法的优化与调参', '网络带宽的分配', '操作系统的升级'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: '性能监控工具可以帮助我们( )系统性能瓶颈。',
    options: ['发现', '解决', '预测', '优化'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在测试用例设计中，( )侧重于识别和测试软件中的边界条件。',
    options: ['等价类划分法', '边界值分析法', '因果图法', '决策表技术'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '人工智能测试的主要目的是( )。',
    options: ['降低研发成本', '提升算法的计算速度', '确保 AI 系统的功能和性能符合预期', '增加 AI 系统的数据输入量'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在使用测试框架进行测试时，( )操作是不推荐的。',
    options: ['频繁修改测试代码', '在测试过程中查看日志', '在测试之前编写详细的测试计划', '在测试之后编写测试报告'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '对于回归测试，通常采用( )测试方法来确保修改没有引入新的错误。',
    options: ['自动化', '手动', '性能', '兼容性'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型训练.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在算法准确度测试中，为了避免过拟合现象，通常会将数据集划分为训练集和( )。',
    options: ['验证集', '测试集', '开发集', '学习集'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行算法安全性测试时，需要考虑的方面包括( )。',
    options: ['输入数据的合法性', '算法的执行效率', '算法的输出结果', '算法的健壮性'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在算法可解释性与透明度测试中，( )的测试方法主要关注算法的内部逻辑和结构。',
    options: ['基于模型', '基于规则', '基于数据', '基于经验'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在算法部署效果测试的流程中，( )步骤是在算法部署之前进行的。',
    options: ['数据收集与处理', '模型训练与优化', '算法部署', '效果评估'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在人工智能系统测试中，用户反馈集成的主要目的是( )。',
    options: ['减少测试用例的数量，降低测试成本', '收集用户对系统性能的定量评价', '利用用户的实际使用情况来评估和改进系统', '将用户反馈作为算法训练的主要数据来源'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型评估.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在算法测试中，若想评估模型预测值与实际值之间的关系强度，应使用的统计量是( )。',
    options: ['方差', '相关系数', '标准差', '中位数'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在撰写算法测试报告时，( )不是必须的。',
    options: ['测试用例的描述', '测试结果的详细数据', '测试环境的配置信息', '开发者的个人感想'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '当程序运行时出现异常，我们可以使用( )来查看异常的详细信息。',
    options: ['输出语句', '日志记录', '单元测试', '调试器'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在使用模型可视化工具时，关键应用是( )。',
    options: ['替代传统的编码调试过程', '帮助识别模型中的过拟合或欠拟合现象', '代替数据预处理步骤', '生成模型训练所需的随机数据'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '日志分析中，使用正则表达式的主要目的是( )。',
    options: ['压缩日志文件以节省存储空间', '快速定位和提取日志中的特定模式或关键信息', '将日志数据转换为另一种格式', '创建日志数据的备份'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在算法测试实验管理中，( )工具可以帮助自动化测试过程。',
    options: ['代码编辑器', '版本控制系统', '测试框架', '文档管理系统'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '合规性测试的标准不包括( )。',
    options: ['符合法律法规要求', '符合行业规范', '符合公司内部政策', '符合员工需求'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在实施性能优化策略时，应该遵循( )原则。',
    options: ['先易后难', '先难后易', '一次性解决所有问题', '逐步进行优化'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '企业平衡经济效益和伦理考量的方法( )。',
    options: ['以经济效益为主，伦理考量为辅', '以伦理考量为重，经济效益为辅', '寻找经济效益和伦理考量的最佳平衡点', '不需要平衡，直接追求经济效益最大化'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '数据拆解的主要目的是( )。',
    options: ['增加数据的复杂性', '简化数据分析过程', '提高数据处理的效率', '使数据更难以理解'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '人工智能算法训练师在数据拆解模型的原理中，不正确的说法是( )。',
    options: ['数据拆解可以提高模型训练的效率', '数据拆解无法帮助避免模型的过拟合问题', '数据拆解有助于更准确地评估模型性能', '数据拆解能够减少运行时间和计算量'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据处理.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '主成分分析 PCA 在数据拆解中主要用于( )。',
    options: ['增加数据的维度，使模型更复杂', '降低数据维度，减少计算复杂度', '保持数据维度不变，仅优化数据分布', '随机改变数据维度，增加模型的随机性'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据处理.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在文本数据拆解过程中，分词的主要目的是( )。',
    options: ['将文本切分成单词或短语', '识别文本中的命名实体', '判断文本的情感倾向', '分析文本的语法结构'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'single',
    question: '时间序列分析在天气预报中主要用于( )目的。',
    options: ['预测未来天气变化', '分析历史气温趋势', '改善气象站设备', '教育公众关于气候变化'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '不属于多维度数据分解的主要目的是( )。',
    options: ['简化数据结构', '提高数据处理效率', '增强数据的可解释性', '增加数据的复杂性'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在自然语言处理中，( )方法可以用于文本预处理。',
    options: ['使用神经网络进行文本分类', '对文本进行情感分析', '对文本进行分词和去停用词', '使用 TF-IDF 进行特征选择'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'single',
    question: '安全性分析的原理是通过对系统进行( )，以识别潜在的安全威胁和脆弱性，从而采取相应的安全措施来降低风险。',
    options: ['风险评估', '漏洞扫描', '入侵检测', '安全审计'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在资源分配中，( )策略可以根据用户的实际需求来分配资源。',
    options: ['先到先得策略', '平均分配策略', '按需分配策略', '优先级分配策略'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据分析的标准流程中，( )步骤是紧接着收集数据之后进行的。',
    options: ['数据清洗', '数据可视化', '数据挖掘', '数据分析'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'single',
    question: '不是评估统计模型拟合优度的指标是( )。',
    options: ['样本均值', '均方误差 MSE', '平均绝对误差 MAE', '残差平方和 RSS'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在强化学习中，( )是指智能体在执行某个动作后获得的反馈信号。',
    options: ['奖励', '惩罚', '风险', '收益'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据融合过程中，人工智能训练师通常确保数据的一致性和可靠性的方法有( )。',
    options: ['只使用第一个数据源的数据', '忽略数据之间的冲突', '实施数据清洗和预处理步骤', '仅依赖自动化工具进行数据合并'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '智能解决方案设计的核心目标是( )。',
    options: ['完全替代人工', '优化现有业务流程', '解决复杂问题并创造新价值', '减少企业运营成本'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在用户需求分析中，( )确保数据的准确性。',
    options: ['通过问卷调查收集数据', '通过访谈收集数据', '通过观察法收集数据', '通过数据分析工具验证数据'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )原则最符合人工智能技术选型时对数据层的关注。',
    options: ['优先选择最流行的技术框架', '确保数据采集的全面性和实时性', '技术选型应完全由技术团队决定', '追求最复杂的算法以获得最佳性能'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在系统集成设计中，( )确保系统的可扩展性。',
    options: ['采用开放式架构', '使用非标准化的接口和协议', '预留足够的硬件资源', '定期进行系统维护'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '用户界面设计 UI 中的反馈机制是指当用户与界面进行交互时，系统应该提供( )以确认操作是否成功。',
    options: ['声音', '振动', '文字提示', '动画效果'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在用户体验设计中，( )原则强调产品应满足用户需求并有效解决他们的问题。',
    options: ['可用性', '实用性', '可取性', '可信度'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '人工智能训练师通过( )数据策略实现产品差异化。',
    options: ['使用公开可用的通用数据集', '降低数据清洗和预处理的标准', '避免使用实时数据以简化模型训练'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在设计一个安全系统时，( )措施可以提高系统的安全性。',
    options: ['增加系统的复杂度', '定期进行系统漏洞扫描', '使用弱密码策略', '减少系统的用户数量'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了实现跨云服务的集成，通常需要使用( )技术。',
    options: ['API', 'SDK', 'Web 服务', '虚拟化'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'single',
    question: '可扩展性设计的主要目标是( )。',
    options: ['降低系统成本', '提高系统在负载增加时的性能', '简化系统架构', '减少系统维护难度'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '代码审计与优化对于软件开发过程的重要性不包括( )。',
    options: ['提高代码可读性，便于团队协作', '彻底消除所有软件缺陷', '发现并修复潜在的安全漏洞', '优化代码性能，提升系统响应速度'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'single',
    question: '根据数据保护与隐私的法规要求，企业在发生数据泄露事件时必须立即采取( )措施。',
    options: ['通知受影响的用户，报告给相关监管机构', '不通知受影响的用户，自行处理', '进行内部调查', '加强数据安全措施'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 AI 产品的迭代过程中，用户反馈的主要作用是( )。',
    options: ['确定产品功能方向', '评估市场营销策略', '优化产品性能和用户体验', '预测未来市场趋势'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在人机交互系统中，( )负责将计算机处理后的结果呈现给用户。',
    options: ['处理器', '内存', '硬盘', '显示器'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在设计人机交互界面时，( )是非常重要的，因为它可以帮助用户快速理解如何使用产品。',
    options: ['直观性', '一致性', '反馈', '效率'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在设计输出设备时，应该确保其( )。',
    options: ['显示效果清晰', '响应速度快', '数据安全性高', '兼容多种格式'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在产品设计中，为了确保可访问性，( )原则是必须遵循的。',
    options: ['简洁明了的设计', '一致性和标准化', '易于理解和操作', '美观和视觉吸引力'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )触控技术可以实现多点触控，提高用户体验。',
    options: ['电容式', '电阻式', '红外线', '超声波'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )是语音交互设计中，人工智能训练师需要特别关注的事项。',
    options: ['系统响应速度', '语音识别准确率', '用户体验调查问卷的满意度评分', '用户对话内容的情感倾向'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '最能体现 AR 技术的实时交互特性的功能是( )。',
    options: ['存储大量数据的能力', '实时提供反馈和指导', '高精度的数据分析', '长期跟踪学习进展'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在人工智能训练过程中，人工智能训练师( )有效利用用户研究的方法来提升模型性能。',
    options: ['仅依赖个人经验进行模型调优', '忽视用户反馈，仅关注技术指标的优化', '深入分析用户数据，结合用户研究方法论来指导模型训练', '随意选择用户研究工具，不进行系统分析'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )是原型设计与测试过程中，人工智能训练师用于指导模型调整的关键信息来源。',
    options: ['模型的内部代码结构', '用户反馈的定性与定量数据', '硬件设备的性能指标', '训练数据集的规模'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.模型评估.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在用户测试与评估的过程中，( )阶段是用来确定测试目标和范围。',
    options: ['需求分析', '设计测试用例', '执行测试', '结果分析与改进'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '情感设计的核心目标是提高用户的( )满意度。',
    options: ['功能满意度', '价格满意度', '情感满意度', '品牌满意度'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在设计智能语音助手时，( )助于提高用户满意度。',
    options: ['增加更多的语音指令', '减少语音识别的错误率', '使用更复杂的算法来处理用户输入', '限制助手的功能范围以简化使用'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '( )不是人机交互系统的常见性能评价指标。',
    options: ['响应时间', '用户满意度', '输入设备的价格', '系统稳定性'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在常见的交互设计模板中，( )是专门为提高网站可用性和导航效率设计的。',
    options: ['登录界面模板', '用户信息编辑模板', '网站导航栏模板', '商品详情页面模板'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '设计过程中收集用户反馈的方法不包括( )。',
    options: ['用户访谈', '问卷调查', 'A/B 测试', '代码审查'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'single',
    question: '任务分解后，每个( )都应该有明确的负责人。',
    options: ['子任务', '总任务', '关键环节', '关键节点'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了提高用户体验，开发者应该关注( )。',
    options: ['应用的界面设计', '应用的性能优化', '用户的使用情境分析', '应用的推广策略'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Adobe XD 的视觉设计工具用于( )。',
    options: ['制作用户旅程地图', '进行用户访谈', '设计界面 UI', '进行原型测试'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Axure RP 的条件逻辑设置用于( )。',
    options: ['设计界面 UI', '制作用户旅程地图', '实现交互逻辑', '进行用户调查'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Axure RP 的复杂交互模拟用于( )。',
    options: ['制作高保真原型', '进行用户访谈', '设计信息架构', '进行市场调研'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Balsamiq Mockups 的低保真设计用于( )。',
    options: ['制作高保真原型', '制作低保真原型', '进行用户访谈', '设计信息架构'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Figma 的设计系统支持用于( )。',
    options: ['制作用户旅程地图', '设计界面 UI', '进行用户访谈', '制作高保真原型'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.人机交互与UI.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Marvel 的简单交互设计用于( )。',
    options: ['制作高保真原型', '制作低保真原型', '设计界面 UI', '进行用户访谈'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在 Sketch 的插件生态系统中，( )插件可以帮助设计师快速创建和管理调色板，保持设计色彩一致性。',
    options: ['SketchMeasure', 'ArtboardSnapping', 'ColorPalettes', 'AutoLayout'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'single',
    question: 'Sketch 的矢量图形编辑用于( )。',
    options: ['设计界面 UI', '进行用户访谈', '制作高保真原型', '进行原型测试'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'single',
    question: '为了使培训讲义更具吸引力，编写时应注重( )的选取和使用。',
    options: ['案例', '理论', '数据', '图表'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在编写培训讲义的过程中，( )是至关重要的环节。',
    options: ['收集资料', '设计课程大纲', '制作课件', '进行试讲'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'single',
    question: '研讨会法的主要优点是( )。',
    options: ['能够让员工积极参与讨论', '能够培养员工的创新能力', '能够提供即时的反馈', '能够培养员工的团队合作精神'],
    answer: 0,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在进行数据处理时，( )步骤应该首先进行。',
    options: ['数据转换', '数据抽取', '数据加载', '数据探索'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据处理过程中，( )步骤不会导致数据丢失或错误。',
    options: ['数据清洗', '数据转换', '数据加载', '数据计算'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在数据处理阶段，( )的方法可以帮助提高数据处理效率。',
    options: ['使用更强大的硬件设备', '优化数据处理算法', '增加数据处理人员', '采用集中式计算'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'single',
    question: '当面临数据标注不一致的问题时，应该采取的措施是( )。',
    options: ['忽略不一致的数据', '随意修改数据标签', '重新审核和校正数据', '删除所有不一致的数据'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在人工智能训练过程中，数据标注的重要性主要体现在( )。',
    options: ['提高计算速度', '增强算法的鲁棒性', '确保数据质量', '降低存储需求'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'single',
    question: '当面临大量复杂的数据需要标注时，( )助于提高标注效率。',
    options: ['增加标注人员数量', '减少标注任务量', '采用半自动标注工具', '忽略部分复杂数据'],
    answer: 2,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'single',
    question: '数据标注项目中，( )最可能导致标注结果的不一致性。',
    options: ['使用了最新的标注工具', '标注人员对标注标准理解不同', '数据集划分过于均匀', '标注成本低于预算'],
    answer: 1,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.单选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'single',
    question: '在解决人工智能训练中的数据标注问题时，( )不是有效的方法。',
    options: ['提高数据标注的自动化水平', '增加人工标注人员的数量', '引入主动学习的方法优化标注过程', '使用预标注和人工审核结合的半自动标注方法'],
    answer: 3,
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '职业守则仅仅是一种软约束，不具备法律效力。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '职业守则虽然不具有直接的法律效力，但它可以作为行业规范，对从业人员具有约束力， 并可能作为法律判决的参考',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '如果鼠标和键盘都无法使用，可以通过按 F8 键进入 Windows 的高级启动选项进行修复。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在鼠标和键盘都无法使用的情况下， 通常需要通过其他方式 （如使用 USB 键盘或启动到安全模式）来访问高级启动选项',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Windows 10 中小工具中的时钟可以锁定前端显示。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: 'Windows 10 中的小工具（如时钟）通常不会锁定在前端显示，而是可以在桌面上自由移动和关闭',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '劳动者在试用期内可以随时解除劳动合同。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '虽然劳动者在试用期内享有解除劳动合同的权利，但通常需要提前通知用人单位，并遵守相关法律法规的规定',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据治理工具主要用于优化人工智能算法训练过程中的数据输入，以确保训练数据集的质量和一致性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '数据治理工具的主要作用是确保数据的完整性、准确性、一致性和安全性，而不仅仅 是优化人工智能算法训练过程中的数据输入 虽然数据治理对于 AI 训练数据的质量至关重 要，但其应用范围更广',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据质量监控工具的主要意义在于减少数据集的大小，以便更快地处理数据。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '数据质量监控工具的主要意义并非在于减少数据集的大小， 而是确保数据的准确性、 完整性、一致性和时效性通过监控数据质量，可以及时发现和纠正数据中的问题，从而提 高数据分析和决策的可靠性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据清洗与预处理流程的第一步是对数据进行缺失值处理。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '数据清洗与预处理流程的第一步通常是对数据进行探索和可视化分析，以了解数据的整体情况和存在的问题然后，根据分析结果选择适当的方法和工具对数据进行清洗和预处 理，包括处理缺失值、异常值、重复值等问题 因此，对数据进行缺失值处理并不是数据清 洗与预处理流程的第一步',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '特征提取的主要方法包括主成分分析和线性判别分析。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '特征提取的主要方法包括主成分分析（ PCA） 和线性判别分析（ LDA）等 这些方法可以从原始数据中提取出最有代表性的特征信息，用于后续的分类、聚类 、回归等任务特征提取是机器学习中的一项重要技术，对于提高模型的性能和准确性具有重要意义',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '智能控制功能模块的原理是通过模拟人类大脑的思维方式来实现对设备的自动控制。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '虽然智能控制功能模块确实在某种程度上模拟了人类的决策过程，但其核心原理并不是完全模拟人类大脑的思维方式， 而是基于一定的算法和规则实现对设备的自动控制',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '简化业务流程就是减少流程中的环节和步骤。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '简化业务流程并不仅仅是减少流程中的环节和步骤，更重要的是通过优化和改进流程， 提高流程的效率和质量， 同时保持流程的完整性和有效性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '业务流程优化中的监测和评估阶段的目的是确定优化目标。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '业务流程优化中的监测和评估阶段的目的是评估优化措施的效果，确保优化后的流程能够达到预期的目标， 而不是确定优化目标',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id, tags.模型评估.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在计算模型评估指标时，我们需要使用训练集和测试集的数据来计算准确率。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在计算模型评估指标时，我们通常使用训练集来训练模型，并使用测试集来评估模型的性能 使用训练集来计算准确率会导致过拟合问题',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'NumPy 库中的数组对象可以存储不同类型的数据，包括整数、浮点数、字符串等。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: 'NumPy 库中的数组对象通常用于存储相同类型的数据（如整数或浮点数），而不是混合类型的数据 虽然 NumPy 提供了对象数组来存储不同类型的数据，但这并不是其主要用途',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '线性回归是一种用于解决分类问题的方法。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '线性回归是一种用于解决回归问题的方法，而不是分类问题 回归问题涉及预测连续值， 而分类问题涉及预测离散类别',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '生成对抗网络中的生成器和判别器是同步训练的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '生成对抗网络（GAN） 中的生成器和判别器确实是同步训练的 生成器负责生成逼真的数据， 而判别器则负责区分真实数据和生成数据 两者通过相互竞争来提高各自的能力',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据探索分析是指对数据进行收集、整理、清洗和转换的过程。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '数据探索分析（EDA）并不是指对数据进行收集 、整理 、清洗和转换的过程，而是指通过初步的图表 、 图形和统计方法来了解和发现数据的基本特征和结构 数据收集 、整理清洗和转换是数据预处理的过程',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据去重技术主要是通过哈希表来实现的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '解析：数据去重技术主要是通过哈希表来实现的哈希表可以快速地检测重复的数据项，从 而实现数据去重',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据归一化处理的目的是为了改变数据的类型，使其能够适配不同的机器学习算法。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '数据归一化处理的目的是为了将数据缩放到一个特定的范围，以便不同的特征在模型训练中具有相似的尺度 这有助于提高模型的收敛速度和性能， 而不是改变数据的类型',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据标注技术主要依赖于人工进行标注，因此成本较高。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据标注技术主要依赖于人工进行标注，因此成本较高 为了提高标注效率和降低成本， 可以采用自动化标注和半自动化标注的方法',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '算法测试的评价指标主要包括时间复杂度和空间复杂度。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '算法测试的评价指标不仅限于时间复杂度和空间复杂度，还包括准确率、召回率、F1 分数 、AUC-ROC 曲线等多种指标，这些指标用于评估算法在不同方面的性能',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.云平台与架构.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '容器化技术与虚拟机技术相比，容器化技术提供了更彻底的操作系统级隔离，因为每个容器都运行在自己的操作系统内核上。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '与虚拟机技术相比，容器化技术并不提供操作系统级的隔离，而是提供应用级的隔离 每个容器共享同一个操作系统内核，但有自己的进程空间和文件系统视图',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在人工智能项目中，选择数据处理框架时，框架的易用性和灵活性比其性能和扩展性更加重要。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在人工智能项目中选择数据处理框架时，性能和扩展性同样重要，甚至在某些情况下可能比易用性和灵活性更重要 这取决于具体的应用场景和需求',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在高性能计算 HPC 环境中，为了最大化资源利用率，应该始终将所有计算节点配置为相同的任务类型，以保持操作的一致性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在高性能计算 HPC 环境中， 为了最大化资源利用率， 通常会根据任务类型将计算节点配置为不同的角色（如计算节点 、I/O 节点 、管理节点等），而不是将所有节点配置为相 同的任务类型',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在进行算法测试实验管理时，使用统一的测试管理平台可以提高测试效率，但无法帮助追踪和管理测试过程中的复杂依赖关系。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '使用统一的测试管理平台不仅可以提高测试效率，还可以帮助追踪和管理测试过程中 的复杂依赖关系测试管理平台通常具有测试用例管理、测试计划制定、测试执行跟踪等功 能， 可以有效地管理和协调测试活动',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在文本数据处理中，分词是所有语言的必要步骤。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在文本数据处理中，分词并不是所有语言的必要步骤例如，对于像英语这样的空格 分隔语言，分词通常不是必需的，因为单词之间已经通过空格进行了分隔然而，对于像中 文这样的连续文本语言，分词是文本处理的重要步骤之一',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '多维度数据分解不能有效地提高图像处理的效率和准确性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '多维度数据分解可以有效地提高图像处理的效率和准确性通过降低图像的维度和去 除冗余信息，多维度数据分解可以减少计算量并提高处理速度 同时，它还可以保留图像的 主要特征和结构，从而提高图像处理的准确性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.特征工程与数据分析.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在自然语言处理中，特征工程主要用于文本数据的降维处理。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在自然语言处理中，特征工程不仅用于文本数据的降维处理，还包括文本数据的预处 理、特征选择、特征构造等多个方面特征工程是自然语言处理中的关键步骤之一，它对于 提高模型的性能和准确性具有重要作用',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '使用交叉验证方法可以避免过拟合问题，因此在选择统计模型时应该优先考虑这种方法。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '虽然交叉验证方法可以在一定程度上避免过拟合问题，但它并不是选择统计模型的唯一或最优方法在选择统计模型时，我们还需要考虑模型的复杂度、数据的分布特性 、问题 的具体需求等多个因素  因此，不能简单地说交叉验证方法就是最优的选择',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '聚类分析是一种无监督学习方法，主要用于发现数据集中的模式和结构。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '聚类分析是一种无监督学习方法，主要用于发现数据集中的模式和结构通过聚类分析，我们可以将数据集中的样本划分为不同的簇或组， 并揭示它们之间的相似性和差异性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '集成学习方法的效果合成是指将多个模型的预测结果进行加权平均，以提高模型的性能。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '集成学习方法的效果合成不仅限于将多个模型的预测结果进行加权平均实际上，集成学习方法可以采用多种不同的合成策略来提高模型的性能 例如， 袋装法（Bagging）通过结合多个基分类器的预测结果来提高分类的准确性和稳定性 ；提升法（Boosting）则通过逐步调整样本权重和模型权重来构建强分类器； 而堆栈泛化（Stacking）则通过训练一个元学习器来组合多个基学习器的预测结果  因此，集成学习方法的效果合成是多种多样的',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '深度学习中的卷积神经网络 CNN 主要用于处理序列数据。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '深度学习中的卷积神经网络（CNN）主要用于处理图像数据而不是序列数据 CNN 通过卷积层和池化层等结构来提取图像中的局部特征和空间结构信息，并在全连接层中进行分 类或回归等任务 虽然 CNN也可以用于处理序列数据（如文本数据） ，但通常需要使用特 定的变体或改进方法（如循环卷积神经网络或卷积长短时记忆网络等）因此，不能简单地 说 CNN 主要用于处理序列数据',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '异常值检测与处理是一种用于识别数据集中异常点的方法。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '异常值检测与处理是数据分析中的一个重要步骤，用于识别和处理数据集中的异常或 极端值，这些值可能是由于测量F 、数据录入F或其他原因产生的',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能技术选型的原则包括选择最新的技术，以保持竞争优势。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '人工智能技术选型的原则不应仅包括选择最新的技术，而应考虑技术的成熟度、稳定性 、适用性以及与业务需求的匹配度',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在云服务集成中，关键策略之一是选择合适的云服务提供商以满足业务需求。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在云服务集成中，选择合适的云服务提供商以满足业务需求是关键策略之一',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '性能优化技术的原理是通过减少程序中的冗余代码来提高程序的运行速度。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '性能优化技术的原理不仅仅是通过减少程序中的冗余代码来提高程序的运行速度，还包括优化算法 、数据结构 、 内存管理等多个方面',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '产品维护与升级制定的关键是定期发布新版本以保持用户的兴趣。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '产品维护与升级制定的关键不仅仅是定期发布新版本，还包括修复已知问题、添加新功能 、优化性能等多个方面',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人机交互三要素包括输入设备、输出设备和控制器。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '人机交互三要素通常包括用户、计算机（或界面）和任务，而不是输入设备、输出设 备和控制器',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '增强现实 AR 交互主要依赖虚拟现实头戴设备。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '增强现实（AR）交互主要依赖智能手机 、平板电脑或 AR 眼镜等设备，而不是虚拟现 实头戴设备',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型评估.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '用户测试与评估的系统方法是一种定性的研究方法。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '用户测试与评估的系统方法既可以是定性的，也可以是定量的，具体取决于研究目的 和方法选择',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '使用 Adobe XD 进行原型制作时，用户可以直接导出最终的设计文件。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '使用 Adobe XD 进行原型制作时，用户需要先进行设计，然后通过导出功能将设计文 件转换为可用的格式，但直接导出的不一定是最终的设计文件，可能还需要进一步处理',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在使用 Marvel 的设计评审功能时，用户可以上传自己的设计文件，但是不能邀请其他团队成员进行评论。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在使用 Marvel 的设计评审功能时，用户不仅可以上传自己的设计文件，还可以邀请 其他团队成员进行评论和协作',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '讲授法是一种单向沟通的培训方法，因此它不利于受训者主动参与培训。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '讲授法确实是一种单向沟通的培训方法，如果缺乏互动和参与，可能会影响学员的学习效果',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据清洗与预处理.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在数据采集和处理流程中，数据清洗的主要目的是去除重复数据和提高数据质量。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据清洗的主要目的确实包括去除重复数据和提高数据质量，以确保后续分析的准确性和可靠性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '道德评价的关键是看其行为是否符合社会道德规范。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '道德评价的核心就是判断行为是否符合社会普遍接受的道德规范',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能训练师在处理敏感数据时，可以不经用户同意直接使用这些数据进行模型训练。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '处理敏感数据时，必须遵守隐私政策和相关法律法规，通常需要用户同意才能使用',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '随着全球化的发展，职业道德也呈现出单一化的趋势，不同国家和地区的职业道德规范不存在差异。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '虽然全球化促进了文化交流，但不同国家和地区的职业道德规范仍然受到各自文化、 法律和社会背景的影响，存在差异',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能训练师在职业道德建设中，无需考虑数据的质量与适用性，只需关注模型的训练效果。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '数据的质量和适用性对模型训练效果至关重要，人工智能训练师在职业道德建设中必须考虑这些因素',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能训练师在开发和训练 AI 模型时，不需要对模型可能产生的歧视性或偏见性结果负责。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '人工智能训练师有责任确保模型不会产生歧视性或偏见性结果，这是职业道德的一部分',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能训练师的职业道德不包括对用户隐私的保护。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '保护用户隐私是人工智能训练师职业道德的重要组成部分',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能训练师的主要任务是设计和开发新的算法。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '虽然设计和开发算法是人工智能训练师的一部分工作，但他们的主要职责还包括数据准备 、模型训练 、性能评估等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '职业守则的特点之一是具有普遍性，适用于所有行业。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '职业守则通常针对特定行业或职业群体，具有针对性和专业性，不一定适用于所有行业',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '职业守则核心内容不包括遵守法律。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '遵守法律是职业守则的核心内容之一 ，所有从业人员都应遵守相关法律法规',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能训练师在制定职业守则的过程中，应该充分考虑到人工智能技术的发展趋势和潜在风险。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '人工智能技术的快速发展带来了许多新的挑战和风险，人工智能训练师在制定职业守则时应充分考虑这些因素',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '职业守则的实施与监督应该完全依靠员工个人的自觉性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '职业守则的实施与监督需要多方面的努力，包括员工个人的自觉性、企业的管理制度以及行业协会的监管等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '职业守则中的奉献社会是指从业人员在工作中要T处理个人利益和社会整体利益的关系，把个人利益放在首位。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '奉献社会要求从业人员在工作中把社会整体利益放在首位，T处理个人利益和社会整体利益的关系',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '从业人员能否做到爱岗敬业，取决于他是否具有过硬的专业技能。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '虽然专业技能对爱岗敬业有一定影响，但更重要的是从业人员的职业态度和责任心',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能训练师在训练过程中，可以根据自己的经验和直觉来调整模型参数，以提高模型性能。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '虽然经验和直觉在模型训练中可能有一定作用，但更科学的方法是进行系统的实验和验证， 以找到最优的模型参数',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '语音输入是 Windows 输入法的一种智能应用。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '语音输入是 Windows 输入法提供的一种智能输入方式，允许用户通过语音输入文字',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.操作系统与工具.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Windows 系统的维护利器是一款可以帮助用户优化系统性能、清理垃圾文件和修复系统问题的软件。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '这样的软件确实可以帮助用户更好地维护和管理 Windows 系统',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Web与浏览器.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在浏览器中，可以通过点击地址栏输入网址来访问网页。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '这是浏览器的基本功能之一 ，用户可以在地址栏中输入网址来访问相应的网页',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Web与浏览器.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '浏览器的高级探索功能可以帮助用户更好地了解和管理浏览器的设置和功能。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '浏览器的高级探索功能通常提供了对浏览器设置和功能的深入了解和管理选项',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '使用 Ctrl + C 可以复制选中的文本或对象。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Ctrl + C 是 Windows 操作系统中常用的复制快捷键',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '使用 Word 进行高效办公时，可以同时打开多个文档进行编辑。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Word 允许用户同时打开多个文档进行编辑和切换',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Word 样式库中的样式可以快速应用到文档中的多个段落或文本框中。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Word 样式库中的样式可以方便地应用到文档中的多个段落或文本框中，以保持文档的一致性和格式美观',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在 Word 中进行图文混排时，图片和文本框的位置是可以随意调整的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在 Word 中，用户可以通过拖动和调整图片和文本框的位置来实现图文混排',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在 Excel 中，可以使用公式计算单元格中的数据。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Excel 是一个电子表格软件，允许用户使用公式进行计算和分析',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在 Excel 中，使用 MAX 函数可以找到一列数据中的最大值。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'MAX 函数是 Excel 中用于查找一列或一组数据中的最大值的函数',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Excel 图表的数据可视化功能只能用于静态展示数据，无法进行动态交互。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: 'Excel 图表的数据可视化功能不仅可以用于静态展示数据， 还可以通过添加交互元素 （如筛选器 、切片器等）来实现动态交互',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '工作簿的扩展名是.xls。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在 Excel 2007 及更高版本中，工作簿的扩展名是 .xlsx 而 .xls 是 Excel 2003 及更早版本的工作簿扩展名',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '通过利用 Excel 宏，我们可以将繁琐的重复性任务自动化，使我们的工作变得高效和轻松。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Excel 宏是一种自动化工具， 可以帮助用户完成繁琐的重复性任务',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '用人单位与劳动者订立的劳动合同中，约定了试用期满后自动转正的条款，这样的约定是合法的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '虽然试用期满后自动转正的做法在实践中很常见，但并非所有情况下都是合法的具体是否合法取决于相关法律法规和劳动合同的约定',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '劳动合同中必须包含劳动合同期限。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '劳动合同期限是劳动合同的必备条款之一 ，必须明确约定',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '网络运营者应当采取技术措施和其他必要措施，确保其收集的个人信息安全，防止信息泄露、损毁、丢失。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '这是网络安全法等相关法律法规对网络运营者的基本要求',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '网络接入的规范要求中，用户必须使用实名制进行注册。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '为了保障网络安全和打击网络犯罪，许多国家和地区都要求用户在网络接入时进行实名制注册',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型评估.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '关键信息基础设施的运营者应当自行或者委托网络安全服务机构对其网络的安全性和可能存在的风险每年至少进行一次检测评估。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '这是网络安全法等相关法律法规对关键信息基础设施运营者的基本要求之一',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '只有发明人和设计人才能成为专利申请权主体。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '除了发明人和设计人外，单位或其他组织也可以成为专利申请权主体',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '如果一项发明创造具有新颖性、创造性和实用性，那么它一定可以获得专利授权。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '虽然新颖性、创造性和实用性是授予专利权的条件之一，但还需要满足其他条件（如不违反法律法规 、不违背社会公德等） 才能获得专利授权',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在专利申请流程中，申请人需要提交详细的专利说明书、权利要求书和摘要等文件。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '这些文件是专利申请的基本组成部分，用于描述发明创造的内容、技术特点和保护范围等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '遵纪守法是社会成员的基本义务，因此每个人都应该自觉遵守法律法规。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '解析：遵纪守法是每个社会成员的基本义务和责任',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '根据我国相关法律法规，人工智能训练师在工作过程中应当享有与其他职业相同的劳动保护权益，包括工作安全、健康保障和合理的工作时间安排等。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '这是劳动法等相关法律法规对劳动者基本权益的保障',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在人工智能训练师的工作中，使用、复制或分发数据、算法或模型时，必须遵守知识产权法的基本原则，包括尊重知识产权的专有性、保护创作者权益和禁止未经授权的使用。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '这是知识产权法等相关法律法规对人工智能训练师等从业人员的基本要求',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '著作权法只保护原创性的作品。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '著作权法主要保护具有原创性的作品，包括文学、艺术和科学领域内具有独创性并能以一定形式表现的智力成果 但其保护范围并不仅限于原创性作品',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '专利权的主体只能是发明人或设计人。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '除了发明人或设计人外，单位或其他组织也可以成为专利权的主体',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '知识产权的保护措施只针对原创性作品。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '知识产权的保护措施不仅针对原创性作品，还包括发明、商标、实用新型、外观设计软件等多种形式的智力成果',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据采集的常用工具包括 Python、Excel 和 SQL Server。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Python 、Excel 和 SQL Server 是数据采集的常用工具Python 因其强大的数据处理能力和丰富的库支持而被广泛使用；Excel 则便于数据整理和分析 ；SQL Server 是常用的数据库管理系统， 支持数据的存储 、查询和管理',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '使用 Python 编写网络爬虫时，可以安装 requests 库，来完成任务。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在使用 Python 编写网络爬虫时，requests 库是一个非常流行的 HTTP 请求库， 它允许你发送各种类型的 HTTP请求， 非常适合用于网络爬虫的数据抓取任务',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在数据采集流程中，工具应用的意义仅限于提高数据收集的速度。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在数据采集流程中，工具应用的意义不仅限于提高数据收集的速度，还包括提高数据 的准确性 、完整性 、一致性和安全性等多个方面',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据处理.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'ETL 工具的基本原理包括数据抽取、数据转换和数据加载三个步骤。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'ETL（Extract , Transform , Load）工具的基本原理确实包括数据抽取 、数据转换和数据加载三个步骤数据抽取是从数据源中提取数据；数据转换是对数据进行清洗、转换和格式化以满足目标系统的要求； 数据加载是将转换后的数据加载到目标系统中',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据存储和管理相关工具通常具有自动备份和恢复功能。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据存储和管理相关工具通常具有自动备份和恢复功能，这是为了确保数据的可靠性和安全性 在发生数据丢失或损坏时， 可以通过备份数据来恢复',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '云服务是一种基于互联网的计算方式，通过这种方式，共享软硬件资源和信息可以按需求提供给计算机各种终端和其他设备。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '云服务是一种基于互联网的计算方式，通过这种方式，共享软硬件资源和信息可以按需求提供给计算机各种终端和其他设备云服务允许用户通过网络访问和使用远程的服务器、 存储和应用等资源',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '使用 Excel 可以将 CSV 文件转换为 JSON 格式。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '虽然 Excel 可以进行数据转换和处理，但它并不直接支持将 CSV 文件转换为JSON格式 通常需要使用编程语言（如 Python）或专门的转换工具来完成这一任务',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '所有的大数据处理平台都专门用于处理结构化数据，并且不能处理非结构化数据。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '并非所有的大数据处理平台都专门用于处理结构化数据实际上，许多大数据处理平台（如 Hadoop 、Spark 等）都能够处理非结构化数据，如文本 、图像 、视频等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.自然语言处理.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '所有的常用数据处理工具都只能处理数值型数据，无法处理文本或图像数据。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '并非所有的常用数据处理工具都只能处理数值型数据许多数据处理工具（如Python 的 Pandas 库 、R 语言等）都支持处理文本 、 图像等多种类型的数据',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在特征工程中，所有工具都自动选择最佳的特征集，无需人工干预或领域知识。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在特征工程中，并非所有工具都自动选择最佳的特征集 实际上，特征选择通常需要结合人工干预和领域知识来进行 工具可以提供一些自动化的方法（如基于统计量的筛选、基于模型的重要性排序等） ，但最终的选择还需要根据具体问题和应用场景来判断',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据审核平台是一种专门用于审核和处理数据的软件工具。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据审核平台是一种专门用于审核和处理数据的软件工具它可以帮助用户对数据进行检查 、清洗 、转换和验证等操作， 以确保数据的准确性和可靠性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.特征工程与数据分析.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Power BI 是微软推出的一款商业智能工具，主要用于数据分析和报告制作。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Power BI 是微软推出的一款商业智能工具，它提供了丰富的数据可视化 、分析和报告 制作功能 用户可以通过 Power BI 连接到各种数据源， 进行数据探索和分析， 并创建交互 式报告和仪表板来展示分析结果',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '业务流程管理与优化工具只能用于制造业企业。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '业务流程管理与优化工具不仅适用于制造业企业，还广泛应用于其他行业如金融、 零售 、 医疗等 这些工具可以帮助企业提高业务流程的效率和质量， 降低成本和风险',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据采集策略应该避免使用自动化工具，以确保数据的原始性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '数据采集策略并不应该避免使用自动化工具来确保数据的原始性相反，自动化工具可以提高数据采集的效率和准确性，减少人为F和干扰 当然，在使用自动化工具时也需 要注意数据的来源和质量控制等问题',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据源选择只要基于数据的准确性，不需要可靠性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '业务流程管理与优化工具不仅适用于制造业企业，还广泛应用于其他行业，如金融、 零售 、 医疗等 这些工具可以帮助企业提高业务流程的效率和质量， 降低成本和风险',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Web与浏览器.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据抓取技术中，正则表达式是一种非常强大的工具，可以用于匹配和提取网页中的特定信息。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据抓取技术中，正则表达式是一种非常强大的工具它可以用于匹配和提取网页中的特定信息，如文本、数字、链接等正则表达式通过定义特定的字符模式来匹配目标字符串，从而实现数据的精确抓取',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据抓取策略的优化方法包括使用更快的抓取工具。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据抓取策略的优化方法包括使用更快的抓取工具通过选择高效的抓取工具和技术， 可以提高数据抓取的速度和效率，从而缩短数据采集的周期和成本',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '关系型数据库通常用于存储结构化数据，而非关系型数据库则更适合存储半结构化或非结构化数据。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '关系型数据库通常用于存储结构化数据，如表格形式的记录；而非关系型数据库则更适合存储半结构化或非结构化数据，如文档 、图像等这是因为非关系型数据库提供了更灵 活的数据模型和存储方式， 可以更好地适应不同类型的数据存储需求',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据清洗的主要目的确实是解决数据中的重复值、缺失值和异常值问题。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据清洗的主要目的确实是解决数据中的重复值、缺失值和异常值问题这些问题会严重影响数据的准确性和可靠性，因此需要通过数据清洗来进行处理处理后的数据将更加干净 、准确和一致， 为后续的数据分析和决策提供坚实的基础',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '加密技术可以保证数据的机密性，但无法防止数据泄露。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '加密技术确实可以保证数据的机密性，即在未经授权的情况下无法访问或解密数据 然而，这并不意味着加密技术可以完全防止数据泄露数据泄露可能由多种原因引起，如密 钥泄露 、系统漏洞 、内部人员泄露等 因此，除了加密技术外，还需要采取其他安全措施来 确保数据的安全性 但根据题目的直接询问，加密技术本身确实可以保证数据的机密性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '实时数据处理技术可以处理大量数据并实时产生结果。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '实时数据处理技术可以处理大量数据并实时产生结果这种技术通过优化数据处理算法和硬件资源来提高数据处理的速度和效率，从而实现对数据的实时分析和响应这对于需要快速决策和响应的应用场景非常重要',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '容器化技术可以完全替代传统的虚拟化技术来管理业务数据处理流程。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '容器化技术并不能完全替代传统的虚拟化技术来管理业务数据处理流程虽然容器化 技术在某些方面具有优势（如轻量级、快速部署等），但它并不适用于所有场景 虚拟化技术仍然在许多领域（如大规模服务器部署 、复杂应用程序管理等）发挥着重要作用  因此， 在选择使用哪种技术时需要根据具体的应用场景和需求来判断',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据采集.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据质量评估通常是通过对数据进行抽样检查来进行的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据质量评估通常是通过对数据进行抽样检查来进行的这种方法可以在有限的资源下快速了解数据的整体情况和存在的问题通过对抽样数据的分析，可以估计出整体数据的 质量水平，并发现潜在的问题和风险点 当然，抽样检查的结果可能存在一定的误差和不确定性， 因此在实际应用中需要综合考虑多个因素来评估数据的准确性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据校验和异常数据检测的方法都是为了确保数据的准确性和完整性。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据校验和异常数据检测的方法都是为了确保数据的准确性和完整性数据校验通常通过定义一系列的规则和条件来检查数据的T性；而异常数据检测则通过统计分析和机器 学习等方法来识别出与正常数据模式不符的异常数据点这些方法可以帮助用户及时发现和 处理数据中的问题，提高数据的可靠性和可用性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '高效业务流程的设计方法应该包括对现有流程的详细分析。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '高效业务流程的设计方法应该包括对现有流程的详细分析通过了解现有流程的运行情况和存在的问题，可以确定改进的方向和目标 同时，对现有流程的分析还可以帮助用户识别出潜在的优化点和瓶颈， 为设计更高效 、更简洁的业务流程提供有力的支持.',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '合规性检查通常只关注数据的安全性，而不涉及数据的完整性和可用性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '合规性检查不仅关注数据的安全性，还涉及数据的完整性和可用性等多个方面通过合规性检查，可以确保数据的处理和使用符合法律法规和行业标准的要求，同时保护用户的 隐私和权益 因此，合规性检查是一个综合性的过程，需要综合考虑多个方面的因素来确保 数据的合规性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '业务数据产生的场合包括企业内部和外部的各种业务流程。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '业务数据产生的场合确实包括企业内部和外部的各种业务流程无论是企业内部的生 产、销售、财务等流程，还是企业与外部合作伙伴、客户之间的交互流程，都会产生大量的 业务数据这些数据对于企业的运营和管理具有重要意义，可以帮助企业更好地解市场动态 、客户需求和竞争态势等信息',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能业务可以根据应用场景分为智能客服、智能家居、自动驾驶和智能医疗等类别。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '人工智能业务确实可以根据应用场景分为智能客服、智能家居 、自动驾驶和智能医疗等多个类别这些类别分别代表了人工智能在不同领域的应用和发展方向通过将这些应用 场景进行分类和归纳，可以更好地理解人工智能技术的特点和优势，并为其在不同领域的应 用提供有针对性的解决方案',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '综合人工智能系统中的智能控制模块不能用于实现设备控制。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '综合人工智能系统中的智能控制模块可以用于实现设备控制智能控制模块是综合人 工智能系统中的重要组成部分之一，它可以通过对设备的运行状态进行监测和分析，实现对设备的精确控制和调节这种控制方式具有高效、准确和可靠的特点，可以大大提高设备的 运行效率和稳定性 因此，综合人工智能系统中的智能控制模块不仅可以用于设备控制，还可以为其他应用场景提供有力的支持',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '推荐系统的功能模块包括用户画像、物品画像和推荐算法三个部分。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '推荐系统的功能模块确实包括用户画像、物品画像和推荐算法三个部分用户画像通过对用户的行为、偏好和兴趣等信息进行分析和建模，形成对用户的全面描述；物品画像则 对物品的特征、属性和类别等信息进行描述和分类；推荐算法则根据用户画像和物品画像的 匹配程度来为用户推荐合适的物品这三个部分相互协作，共同构成了推荐系统的核心功能',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '智能搜索业务不能通过自然语言处理技术来解析和理解搜索查询。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '智能搜索业务可以通过自然语言处理技术来解析和理解搜索查询 自然语言处理技术 可以帮助智能搜索系统更好地理解用户的查询意图和需求，从而提供更准确、更个性化的搜 索结果 这种技术可以大大提高搜索系统的效率和准确性， 为用户带来更好的搜索体验',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '智能交互功能模块具有自然语言处理能力，可以理解用户的语音指令和文本输入。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '智能交互功能模块通常具有自然语言处理能力，能够理解并响应用户的语音指令和文本输入，这是其核心功能之一',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '自动数据处理能够通过人工智能模型和算力，挖掘出稳定且准确的分析结果。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '自动数据处理结合人工智能模型和强大的计算能力，能够挖掘和分析大量数据，得出稳定且准确的分析结果，这是人工智能在数据处理领域的重要应用',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '最优化决策支持利用人工智能计算来实现系统的最优性能，以及得出达到最优业务指标的分配或决策。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '最优化决策支持是人工智能的一个重要应用领域，它利用计算方法和算法来优化系统性能， 帮助决策者制定最优的业务指标分配或决策',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '自然语言处理技术可以自动分析和理解人类语言，从而实现人机交互。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '自然语言处理技术（ NLP） 的主要功能就是自动分析和理解人类语言，从而实现人与 计算机之间的有效交互',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '生物特征识别是一种身份验证技术，因此可以不经许可获取用户生物特征。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '生物特征识别确实是一种身份验证技术，但未经用户许可获取其生物特征是不合法和不道德的，侵犯了用户的隐私权',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '计算机视觉的功能包括图像处理、目标检测和识别等。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '计算机视觉的功能包括图像处理 、目标检测和识别等，这些功能使得计算机能够理解和处理视觉信息',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '图像识别是智能计算在人工智能领域的主要应用之一。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '图像识别是智能计算在人工智能领域的一个重要应用，它使得计算机能够自动识别和理解图像中的信息',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据挖掘和知识发现的流程中，数据清洗和预处理步骤是可选的。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在数据挖掘和知识发现的流程中，数据清洗和预处理是非常关键的步骤，它们确保了数据的质量和准确性，是后续分析的基础',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据挖掘和知识发现的方法包括监督学习、无监督学习和强化学习。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据挖掘和知识发现的方法确实包括监督学习、无监督学习和强化学习等，这些方法为数据分析和知识发现提供了有效的工具',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.云平台与架构.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '业务模块构建方法的原则包括可扩展性、可重用性和可维护性。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在构建业务模块时，确实需要考虑可扩展性、可重用性和可维护性等原则，以确保模块的灵活性和可持续性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '业务流程优化方法主要包括流程再造、流程改进和流程分析三种。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '业务流程优化方法主要包括流程再造、流程改进和流程分析三种，这些方法旨在提高业务流程的效率和效果',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '业务数据的收集方法只有通过问卷调查一种方式。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '业务数据的收集方法有多种，包括但不限于问卷调查、传感器采集 、网络爬虫等，问卷调查只是其中的一种方式',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '单据流是企业业务流程的核心流程之一。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '单据流确实是企业业务流程的核心流程之一，它涉及到企业内部的各种单据和文件的流转和处理',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '简单业务流程分析流程的第一步是对现有流程进行详细的记录和描述。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在进行简单业务流程分析时，第一步通常是对现有流程进行详细的记录和描述，以便了解和分析流程的现状和问题',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在复杂综合业务流程分析中，控制图和帕累托图是常用的分析工具。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在复杂综合业务流程分析中，控制图和帕累托图等分析工具确实被广泛使用，它们有助于识别流程中的问题和瓶颈， 为优化流程提供有力的支持',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '技术更新是复杂业务系统改进措施的唯一方法。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '技术更新虽然是复杂业务系统改进措施的一个重要方面，但并不是唯一的方法其他方法还包括流程再造 、组织结构调整 、 员工培训等多种方式',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '综合业务流程优化方法的原则包括以客户为中心、以流程为导向和持续改进。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '综合业务流程优化方法的原则确实包括以客户为中心 、 以流程为导向和持续改进等，这些原则有助于确保优化后的流程能够更好地满足客户需求，提高业务效率和效果',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '知识表示方法只有符号主义和连接主义两种。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '知识表示方法不仅限于符号主义和连接主义两种，还包括其他多种方法，如基于逻辑的方法 、基于规则的方法 、面向对象的方法 、基于框架的方法等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '知识图谱表示法是一种基于图的数据结构，用于表示实体之间的关系。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '知识图谱表示法确实是一种基于图的数据结构，用于表示实体及其之间的关系，这种表示方法有助于更好地理解和应用知识',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据分析工具的种类比较多，一款好的数据分析工具，可以帮助我们提高学习工作的效率。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据分析工具的种类繁多，一款好的数据分析工具能够提高数据处理的效率，帮助用户更快地从数据中提取有价值的信息',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '预测性分析是一种常见的业务数据分析，主要用于预测未来的趋势。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '预测性分析是业务数据分析的一种重要类型，它通过分析历史数据来预测未来的趋势和变化',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '业务数据可以直接进行使用，不需要进行规范化。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '业务数据在使用前通常需要进行规范化处理，以确保数据的一致性和准确性规范化包括数据清洗 、数据转换 、数据集成等多个步骤',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.机器学习.id, tags.模型评估.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '机器学习的基础流程包括特征工程、模型选择和评估。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '机器学习的基础流程确实包括特征工程、模型选择和评估特征工程是数据预处理的重要部分，模型选择和评估则用于确定最佳的模型',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.深度学习与神经网络.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '卷积神经网络主要用于处理图像数据，其基本结构包括输入层、卷积层、池化层和全连接层。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '卷积神经网络（CNN）主要用于处理图像数据，其基本结构包括输入层 、卷积层 、池化层和全连接层，这些层共同协作以提取图像中的特征并进行分类或识别',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在智能训练中，特征提取的主要方法是手工设计特征。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在智能训练中，特征提取的方法不仅限于手工设计特征，还包括自动特征提取方法， 如深度学习中的卷积神经网络等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '学习率是影响模型训练效果的关键因素之一，较大的学习率会导致模型收敛速度加快，但可能会导致模型无法收敛。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '学习率是模型训练过程中的一个重要参数，它决定了模型参数更新的步长较大的学习率可能会导致模型收敛速度加快，但也可能导致模型无法收敛到最优解',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据预处理的主要目标之一是提高模型的预测性能。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据预处理的主要目标之一是改善数据的质量和特性，从而提高模型的预测性能',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id, tags.深度学习与神经网络.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在图像数据集中添加随机噪声被视为一种数据增强方法。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在图像数据集中添加随机噪声确实被视为一种数据增强方法，它可以增加数据的多样性，有助于提高模型的泛化能力',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据分片是将一个大型数据库或数据仓库分割成更小、更易管理的部分的过程。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据分片是将大型数据库或数据仓库分割成更小、更易管理的部分的过程，这有助于提高数据处理的效率和性能',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在数据标注过程中，主动学习可以用来选择最有价值的未标注数据进行人工标注。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '主动学习是一种选择最有价值的未标注数据进行人工标注的方法，它有助于减少标注成本并提高标注效率',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '模型评估指标的选择应该基于问题的具体需求和目标。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '模型评估指标的选择应该基于问题的具体需求和目标，不同的评估指标可能适用于不同的应用场景',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'TensorFlow 和 PyTorch 都是开源的机器学习库，它们都可以用于深度学习任务。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'TensorFlow 和 PyTorch 都是流行的开源机器学习库， 它们支持深度学习模型的构建训练和部署',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在设计数据收集任务时，应该尽量避免引入偏差，以确保数据的代表性和质量。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在设计数据收集任务时，确实应该尽量避免引入偏差， 以确保数据的代表性和质量 这有助于后续的数据分析和模型训练',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '所有的自动化标注工具都能保证 100%的准确性，无需人工审核或后处理。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '并非所有的自动化标注工具都能保证 100%的准确性 自动化标注工具可能会产生F标注， 因此需要人工审核或后处理来确保标注的准确性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据预处理通常包括转换原始数据为一种更适合机器学习模型处理的格式。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据预处理通常包括将原始数据转换为更适合机器学习模型处理的格式，这包括数据清洗 、数据转换 、数据集成等多个步骤',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '模型训练和验证工具的原理是通过不断调整模型的参数来最小化损失函数，从而提高模型的预测准确性。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '模型训练和验证工具的原理确实是通过不断调整模型的参数来最小化损失函数，从而提高模型的预测准确性 这是机器学习训练过程的核心思想',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '所有的自动化模型训练工具都使用相同的超参数优化策略。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '不同的自动化模型训练工具可能使用不同的超参数优化策略这些策略可能包括网格搜索 、随机搜索 、贝叶斯优化等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '日志分析工具仅用于记录系统的F信息。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '日志分析工具不仅用于记录系统的F信息，还可以用于分析系统的性能、监控系统的状态 、诊断问题等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能训练师使用 Python 或 R 进行智能训练数据处理时，主要依赖于这些编程语言提供的数据处理和机器学习库，以及其支持的数据可视化和预处理方法。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '人工智能训练师在使用 Python 或 R 进行智能训练数据处理时，确实主要依赖于这些编程语言提供的数据处理和机器学习库， 以及其支持的数据可视化和预处理方法.',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '模型部署工具的原理是将训练好的模型转换为可执行程序，以便在实际应用中使用。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '模型部署工具的原理确实是将训练好的模型转换为可执行程序或可部署的格式，以便在实际应用中使用 这包括将模型嵌入到应用程序中 、部署到云服务等步骤',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据探索分析旨在通过初步的图表、图形和统计方法来了解和发现数据的基本特征和结构。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据探索分析（EDA）确实旨在通过初步的图表 、图形和统计方法来了解和发现数据 的基本特征和结构 这有助于为后续的数据分析和模型训练提供有价值的见解',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '缺失值处理方法中的删除法是指直接删除含有缺失值的记录。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '缺失值处理方法中的删除法确实是指直接删除含有缺失值的记录这种方法简单直接但可能会导致数据量的减少和信息的丢失在实际应用中，需要根据具体情况选择适当的缺 失值处理方法',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '当数据集中存在缺失值时，我们应该直接删除这些数据点。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '当数据集中存在缺失值时，直接删除这些数据点可能会导致信息丢失，从而影响模型的性能 通常，应该根据具体情况选择适当的缺失值处理方法，如填充法 、插值法等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在 Python 中，使用箱型图法检测异常值时，任何位于箱型图外的点都应被视为异常值并从数据集中删除。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在 Python 中使用箱型图法检测异常值时， 虽然箱型图外的点通常被视为异常值，但 并不意味着这些点都应该被删除是否删除异常值取决于具体的应用场景和数据特点在某些情况下， 异常值可能包含有价值的信息， 因此应该谨慎处理',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '异常值检测的原理完全基于统计学方法，与数据的业务逻辑无关。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '异常值检测的原理不仅基于统计学方法，还与数据的业务逻辑有关 在实际应用中 需要结合业务逻辑来判断一个数据点是否为异常值',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '噪声数据处理技术只能用于消除图像中的噪声。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '噪声数据处理技术不仅用于消除图像中的噪声，还可以用于处理其他类型的数据，如文本数据 、音频数据等 噪声数据处理的目的是提高数据的质量和可靠性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.数据清洗与预处理.id, tags.机器学习.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据白化处理通常是指一种特殊的归一化技术，它不仅缩放数据使其具有单位方差，还使数据特征之间相互独立，数据白化处理常用于图像处理、语音信号处理和机器学习领域。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据白化处理是一种特殊的归一化技术，它不仅缩放数据使其具有单位方差，还通过线性变换使数据特征之间相互独立数据白化处理常用于图像处理、语音信号处理和机器学 习领域，有助于提高模型的性能',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '特征工程是指从原始数据中提取、转换和构建有助于提高模型性能的特征的过程。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '特征工程是指从原始数据中提取、转换和构建有助于提高模型性能的特征的过程特征工程是机器学习项目中的关键步骤之一 ，对模型的性能具有重要影响',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在选择数据标注工具时，应该首先考虑工具的价格，而不是它支持的标注类型或与现有工作流的集成性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在选择数据标注工具时，应该首先考虑工具支持的标注类型、与现有工作流的集成性 易用性等因素， 而不是仅仅考虑价格 价格只是选择工具时的一个考虑因素之一',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id, tags.模型训练.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在机器学习项目中，训练集、验证集和测试集的划分并不是一成不变的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在机器学习项目中，训练集、验证集和测试集的划分并不是一成不变的 通常，这些集合的划分应该根据具体的应用场景和数据特点来确定， 并且可以在项目过程中进行调整.',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '自动化标注的主要优势在于减少了人为F，但并不包括提高效率和降低成本。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '自动化标注的主要优势在于减少了人为F、提高了效率和降低了成本 自动化标注可以快速地处理大量的数据， 并且可以通过机器学习算法来提高标注的准确性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '分布式数据处理是指在多台计算机上并行处理数据的技术。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '分布式数据处理是指在多台计算机上并行处理数据的技术这种技术可以加快数据处理速度，提高处理效率',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据可追溯性是指在数据处理和分析过程中，能够追踪数据的来源、流动路径以及数据在各个阶段所经历的处理和转换的能力。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据可追溯性是指在数据处理和分析过程中，能够追踪数据的来源、流动路径以及数据在各个阶段所经历的处理和转换的能力数据可追溯性有助于确保数据的完整性、透明度和责任性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据可追溯性确保了数据的完整性、透明度和责任性，对于数据的质量和可信度至关重要。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据可追溯性确实确保了数据的完整性、透明度和责任性，对于数据的质量和可信度至关重要 它有助于在数据出现问题时快速定位问题并采取相应的措施',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据标注.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '表格类数据的数据清洗和标注的第一步是对数据进行预处理，包括去除重复值、缺失值处理和异常值处理。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '表格类数据的数据清洗和标注的第一步通常是对数据进行预处理，包括去除重复值、 缺失值处理和异常值处理等步骤 这些预处理步骤有助于提高数据的质量和可靠性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在 Python 中，可以使用 Pillow 库读取、保存或显示图像。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在 Python 中，可以使用Pillow 库来读取、保存或显示图像Pillow 是Python ImagingLibrary （PIL） 的一个分支和友好分支，提供了丰富的图像处理功能',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据标注.id, tags.数据清洗与预处理.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在进行文本类数据清洗和标注时，规则与流程是固定不变的，适用于所有类型的文本数据。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在进行文本类数据清洗和标注时，规则与流程并不是固定不变的 它们应该根据具体的文本数据特点和应用场景来确定 不同的文本数据可能需要采用不同的清洗和标注方法',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据标注.id, tags.机器学习.id, tags.模型训练.id, tags.自然语言处理.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '对图像或视频数据进行精确的标记和注释，以提供机器学习模型训练所需的信息。标注类型可能包括边界框、多边形、语义分割等。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '对图像或视频数据进行精确的标记和注释是机器学习模型训练的重要步骤之一标注类型可能包括边界框、多边形、语义分割等，这些标注信息有助于模型理解图像或视频中的 内容和结构',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据清洗与预处理.id, tags.模型训练.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '算法训练的基本流程通常包括这些步骤：数据预处理、数据分割、选择模型、模型训练、模型评估和模型优化。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '算法训练的基本流程通常包括数据预处理、数据分割、选择模型、模型训练、模型评估和模型优化等步骤 这些步骤共同构成了机器学习项目的核心部分',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据集划分的原则是将数据集按照一定比例随机划分为训练集、验证集和测试集。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据集划分的原则通常是将数据集按照一定比例随机划分为训练集、验证集和测试集 这种划分方法有助于确保模型在不同数据集上的泛化能力',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '使用 Pandas 库可以方便地加载和处理 CSV、Excel 和 SQL 等格式的数据。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '使用 Pandas 库可以方便地加载和处理 CSV、Excel 和 SQL等格式的数据Pandas 是Python中非常流行的数据处理库之一 ，提供了丰富的数据操作和分析功能',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '降维技术可以将高维数据集映射到低维空间，同时保留数据的主要信息。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '降维技术可以将高维数据集映射到低维空间，同时保留数据的主要信息这种技术有助于减少数据的维度和计算复杂度，提高模型的性能和效率',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '使用数据标注和注释工具时，标注结果需要人工审核以确保准确性。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '使用数据标注和注释工具时，标注结果需要人工审核以确保准确性人工审核可以发现并纠正标注过程中的F和遗漏，提高标注的质量和可靠性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在模型训练过程中，训练数据集越大，模型训练出的准确率一定会越高。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在模型训练过程中，训练数据集越大并不一定意味着模型训练出的准确率会越高虽然更大的数据集可以提供更多的信息来训练模型，但如果数据质量不高或存在噪声等问题， 反而可能导致模型性能下降 因此，在准备训练数据时应该注重数据的质量和多样性.',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.模型训练.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '损失函数的选择和优化算法的选取都需要根据具体的模型和任务来决定，它们共同决定了模型训练的效果和最终性能。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '损失函数的选择和优化算法的选取都需要根据具体的模型和任务来决定它们共同决定了模型训练的效果和最终性能 选择合适的损失函数和优化算法可',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '搭建算法训练环境时，只需要考虑计算硬件的性能，而无需考虑软件依赖和版本兼容性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '搭建算法训练环境时，不仅需要考虑计算硬件的性能，还需要考虑软件依赖和版本兼容性等问题 确保算法训练环境的一致性和稳定性对于模型的训练和部署至关重要',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '机器学习框架的选择与使用主要取决于开发者的个人喜好。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '机器学习框架的选择与使用并不主要取决于开发者的个人喜好，而是应该根据具体的应用场景、数据特点和模型需求来确定不同的机器学习框架具有不同的特点和优势，应该根据实际情况进行选择',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '评估算法的效率，包括时间复杂度和空间复杂度分析，确保算法能够在可接受的时间内完成计算，并且资源消耗在合理范围内。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '评估算法的效率包括时间复杂度和空间复杂度分析是非常重要的这有助于确保算法 能够在可接受的时间内完成计算，并且资源消耗在合理范围内高效的算法可以提高数据处理和分析的速度和质量',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '超参数调优的策略只有随机搜索。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '超参数调优的策略并不仅限于随机搜索常用的超参数调优策略还包括网格搜索贝叶斯优化等方法 这些方法可以根据具体的应用场景和数据特点来选择和调整超参数的值， 从而提高模型的性能',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.模型训练.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '动态监控工具通常能够实时显示模型训练过程中的多种指标，包括但不限于损失函数值、准确率、验证集上的表现等。这些指标对于评估模型的训练效果和调整训练策略至关重要。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '动态监控工具在模型训练过程中确实能够实时显示多种指标，这些指标对于评估模型训练效果和调整训练策略至关重要',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.Web与浏览器.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在模型调试过程中，可以通过观察训练集和验证集的损失函数值来判断模型是否过拟合或欠拟合。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '通过观察训练集和验证集的损失函数值，可以判断模型是否存在过拟合（训练集损失小，验证集损失大） 或欠拟合（训练集和验证集损失都大） 的情况',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在将机器学习模型部署到生产环境时，模型部署只需要将训练好的模型文件上传到服务器，无需其他步骤。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '将机器学习模型部署到生产环境时，除了上传训练好的模型文件外，还需要进行模型集成 、环境配置 、依赖安装 、接口对接等一系列步骤',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'TensorFlow Lite 是一个用于在移动设备上部署机器学习模型的框架。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'TensorFlow Lite 是 TensorFlow 的轻量级解决方案，专门用于在移动设备上部署机器学习模型',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '使用云平台可以降低企业的运营成本。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '使用云平台可以通过弹性伸缩 、资源共享等方式降低企业的运营成本',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '容器化技术是一种将应用程序及其依赖项打包在一起的方法，以便在不同的环境中轻松部署和运行。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '容器化技术确实是一种将应用程序及其依赖项打包在一起的方法，以便在不同的环境中轻松部署和运行',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '性能监控工具可以自动发现系统中的瓶颈和问题，无需人工干预。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '性能监控工具可以帮助发现系统中的瓶颈和问题，但通常需要人工干预来进一步分析和解决问题',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在设计人工智能系统的测试用例时，确保测试用例的全面性比确保它们的执行效率更重要。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在设计人工智能系统的测试用例时，确保测试用例的全面性确实比确保它们的执行效 率更重要  因为全面性能够覆盖更多的场景和问题，从而提高系统的可靠性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能测试的目的在一定程度上可以识别并解决模型可能存在的偏差，确保 AI 系统的决策过程是公正和无歧视的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '人工智能测试的目的确实包括识别并解决模型可能存在的偏差， 以确保AI系统的决策过程是公正和无歧视的',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能测试工具的类型只包括黑盒测试。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '人工智能测试工具的类型不仅包括黑盒测试，还包括白盒测试、灰盒测试等多种类型这些测试方法从不同的角度对系统进行测试， 以提高测试的全面性和准确性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在选择测试框架时，唯一需要考虑的因素是该框架是否支持自动化测试。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在选择测试框架时，除了考虑是否支持自动化测试外，还需要考虑框架的稳定性、易 用性 、可扩展性 、社区支持等多种因素',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在人工智能项目的测试过程中，自动化测试可以完全取代手动测试，因为自动化测试可以覆盖所有的测试场景。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在人工智能项目的测试过程中， 自动化测试虽然重要，但并不能完全取代手动测试 因为有些测试场景（如探索性测试、用户界面测试等）更适合手动测试 同时， 自动化测试 也不能覆盖所有的测试场景',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '算法性能指标的监控可以帮助我们了解算法的实际运行情况，从而优化算法设计。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '算法性能指标的监控确实可以帮助我们了解算法的实际运行情况，从而优化算法设计',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '交叉验证是一种强大的统计技术，可以用来确保模型评估结果的稳定性和可靠性，特别是在数据量有限的情况下。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '交叉验证确实是一种强大的统计技术，可以用来确保模型评估结果的稳定性和可靠性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '算法鲁棒性测试只关注算法在面对特定类型的数据异常时的表现。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '算法鲁棒性测试不仅关注算法在面对特定类型的数据异常时的表现，还关注算法在面 对各种不确定性和变化时的稳定性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '算法安全性测试的结果可以用来指导算法的改进和优化。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '算法安全性测试的结果确实可以用来指导算法的改进和优化，以提高系统的安全性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '算法可解释性与透明度测试是确保人工智能系统决策过程能够被用户、开发者和监管机构理解和信任的重要方面。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '算法可解释性与透明度测试确实是确保人工智能系统决策过程能够被用户、开发者和 监管机构理解和信任的重要方面',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在进行数据多样性与公平性测试时，我们只需要关注数据集中是否存在偏见即可。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在进行数据多样性与公平性测试时，除了关注数据集中是否存在偏见外，还需要关注数据集的代表性 、平衡性等多个方面',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'k 折交叉验证是一种评价训练数据的数据集泛化能力的统计方法，通过对数据集进行多次划分，对多次评估的结果取平均，从而消除单次划分时数据划分不平衡造成的不良影响。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'k 折交叉验证确实是一种评价训练数据的数据集泛化能力的统计方法',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '收集和分析算法在生产环境中的性能数据是重要的，这有助于了解算法的实际表现，并进行必要的优化。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '收集和分析算法在生产环境中的性能数据确实很重要，这有助于了解算法的实际表现 并进行必要的优化',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '用户反馈集成可以帮助开发团队更好地理解用户需求，从而提高人工智能系统的满意度。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '用户反馈集成确实可以帮助开发团队更好地理解用户需求，从而提高人工智能系统的满意度',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在进行算法测试结果的统计分析时，我们应该只关注正例的测试结果。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在进行算法测试结果的统计分析时，我们应该关注所有测试结果的分布情况，而不仅 仅是正例的测试结果因为负例和其他类型的测试结果同样重要，它们能够提供更多关于算 法性能的信息',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '测试报告是一份重要的文档，它不仅记录了测试结果，还应该详细说明测试的方法、测试环境、测试用例、测试数据和测试过程中遇到的问题及解决方案。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '测试报告确实是一份重要的文档，它不仅记录了测试结果，还应该详细说明测试的方 法 、测试环境 、测试用例 、测试数据和测试过程中遇到的问题及解决方案',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Web与浏览器.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在人工智能算法开发过程中，进行调试与问题定位时，在发现问题后立即重写整个算法，而不是逐步定位和修复问题。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在人工智能算法开发过程中进行调试与问题定位时，应该逐步定位和修复问题，而不 是立即重写整个算法 因为重写算法可能会引入新的问题，并且会浪费大量的时间和资源',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.数据清洗与预处理.id, tags.测试.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在人工智能算法的开发和测试中，通过可视化，可以更直观地识别数据中的模式、异常值、偏差和噪声，同时也能够更清楚地展示算法性能的变化趋势和潜在问题。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在人工智能算法的开发和测试中，通过可视化确实可以更直观地识别数据中的模式、 异常值 、偏差和噪声等问题',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '日志分析工具通常需要具备实时处理能力，以便快速响应潜在的安全威胁。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '日志分析工具确实需要具备实时处理能力，以便快速响应潜在的安全威胁这有助于 及时发现并解决问题，确保系统的安全性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在人工智能项目中，修复与迭代是一个持续的过程，通常不是简单地按部就班解决所有缺陷后再进行测试和迭代。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在人工智能项目中，修复与迭代是一个持续的过程 由于人工智能系统的复杂性和不 确定性，通常不可能简单地按部就班解决所有缺陷后再进行测试和迭代相反，开发者需要 在开发过程中不断地进行测试 、发现问题 、修复问题， 并进行迭代优化',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '合规性测试只需要验证软件产品是否符合行业标准和法律法规，而不需要考虑产品的实际功能和性能。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '合规性测试不仅需要验证软件产品是否符合行业标准和法律法规，还需要考虑产品的实际功能和性能合规性测试是确保软件产品符合相关法规和标准的重要手段，但它不仅仅 关注法规符合性，还包括对产品功能和性能的全面评估',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '利用并行计算和分布式系统可以显著提高算法的运行效率，尤其是对于那些可以分解为多个独立且可以并行处理的任务的算法。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '利用并行计算和分布式系统可以显著提高算法的运行效率，尤其是对于那些可以分解 为多个独立且可以并行处理的任务的算法并行计算和分布式系统通过将计算任务分配给多 个处理器或计算机节点， 可以充分利用计算资源，加速算法的执行过程',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在进行伦理考量时，我们只需要关注自己的利益，而不需要考虑他人的利益。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在进行伦理考量时，我们不能只关注自己的利益，而需要综合考虑他人的利益和社会 影响伦理考量是确保人工智能系统符合道德和法律标准的重要环节，它要求我们在设计和 开发过程中充分尊重和保护他人的权益',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在人工智能算法训练中，数据拆解的基本方法包括随机拆分和分层拆分。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在人工智能算法训练中，数据拆解的基本方法包括随机拆分和分层拆分随机拆分是 将数据集随机分成训练集 、验证集和测试集 ；分层拆分则是根据数据的某些特征进行分层， 然后在每一层内进行随机拆分， 以确保训练集 、验证集和测试集在特征分布上的一致性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据拆解模型的原理是将原始数据按照一定的规则进行拆分和重组，以便更好地理解和分析数据。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据拆解模型的原理是将原始数据按照一定的规则进行拆分和重组，以便更好地理解 和分析数据通过数据拆解，我们可以将数据集划分为不同的子集，从而更深入地了解数据 的特征和规律',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id, tags.模型评估.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '训练集、验证集和测试集的作用都是为了评估模型的性能。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '训练集、验证集和测试集的作用各不相同训练集用于训练模型，验证集用于调整模 型参数和选择最佳模型，测试集用于评估模型的性能 因此，它们并不是都用于评估模型的 性能',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据处理.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '主成分分析是一种基于数据拆解的特征降维方法。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '主成分分析（PCA）是一种基于数据拆解的特征降维方法 它通过线性变换将原始数 据投影到低维空间上， 同时尽可能保留原始数据的主要信息',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '基于统计的特征拆解及选择是一种常用的机器学习特征处理方法。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '基于统计的特征拆解及选择是一种常用的机器学习特征处理方法它通过对特征进行 统计分析和选择， 可以去除冗余和不相关的特征，提高模型的性能和泛化能力',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在基于模型的特征选择中，递归特征消除 RFE 是一种包装器方法，它通过反复构建模型来选择特征子集。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在基于模型的特征选择中，递归特征消除（ RFE）是一种包装器方法 它通过反复构 建模型来选择特征子集，并根据模型的性能来评估特征的重要性 在每次迭代中，RFE都会 移除最不重要的特征， 直到达到预定的特征数量或模型的性能不再显著提高为止',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '时间序列数据分割时，通常不需要保持数据的连续性和时序性，可以直接随机分割。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '时间序列数据分割时，通常需要保持数据的连续性和时序性 因为时间序列数据具有时间上的依赖性和连续性，如果直接随机分割可能会导致数据的时间结构和趋势被破坏，从而影响模型的性能和准确性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '时间序列分析是一种预测方法，它可以帮助我们预测未来的天气情况。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '时间序列分析是一种预测方法，它可以帮助我们预测未来的天气情况通过时间序列 分析，我们可以利用历史天气数据来建立预测模型，并根据当前的天气状况和趋势来预测未 来的天气情况',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在网络分析中，节点和边分别代表网络中的对象和它们之间的关系。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在网络分析中，节点和边分别代表网络中的对象和它们之间的关系节点通常表示实 体或个体， 而边则表示这些实体或个体之间的连接或关系',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '社会网络分析主要关注个体之间的社会联系，而忽略了网络结构的影响。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '社会网络分析不仅关注个体之间的社会联系，还重视网络结构的影响 它通过分析网 络中的节点 、边和子图等结构特征，来揭示社会关系的模式和规律',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '多维度数据分解的原理仅适用于数值型数据。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '多维度数据分解的原理不仅适用于数值型数据，还适用于其他类型的数据，如文本数据 、图像数据等 多维度数据分解是一种将高维数据投影到低维空间上的方法，它可以通过 保留数据的主要特征和结构来降低数据的维度',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '特征提取是指从原始数据中提取出对模型预测有帮助的特征。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '特征提取是指从原始数据中提取出对模型预测有帮助的特征它是机器学习中的重要 步骤之一 ，通过选择有用的特征来提高模型的性能和准确性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '响应时间的优化是指在软件设计中减少程序执行所需的时间。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '响应时间的优化是指在软件设计中减少程序执行所需的时间通过优化算法、数据结 构 、 并发处理等方面， 可以提高程序的执行效率并减少响应时间',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在人工智能系统的训练过程中，人工智能训练师不需要关注模型的安全性分析。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在人工智能系统的训练过程中，人工智能训练师需要关注模型的安全性分析安全性 分析是确保模型在实际应用中不受恶意攻击或数据泄露等威胁的重要环节人工智能训练师 需要对模型进行安全性评估， 并采取相应的措施来提高模型的安全性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '负载均衡是一种资源分配策略，用于确保系统中的各个服务器负载相对均衡。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '负载均衡是一种资源分配策略，用于确保系统中的各个服务器负载相对均衡通过负 载均衡，可以将请求均匀地分配到多个服务器上，从而提高系统的吞吐量和响应速度，并减 少单个服务器的负载压力',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据预处理技术细节包括数据清洗、数据集成、数据变换和数据规约四个步骤。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据预处理技术细节包括数据清洗、数据集成、数据变换和数据规约四个步骤这些 步骤是数据预处理过程中的关键环节，它们可以帮助我们提高数据的质量和可用性，并为后 续的建模和分析提供有力的支持',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据清洗与预处理.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在数据分析过程中，数据清洗的主要目的是去除重复数据、处理缺失值和异常值。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在数据分析过程中，数据清洗的主要目的是去除重复数据、处理缺失值和异常值通 过数据清洗，我们可以确保数据的准确性和一致性，并减少数据中的噪声和冗余信息',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '机器学习算法可以完全替代人类专家在某些领域的决策过程。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '机器学习算法虽然在某些领域可以辅助或替代人类专家的决策过程，但它们并不能完 全替代人类专家因为机器学习算法的性能和准确性取决于训练数据的质量和数量、算法的 选择和参数设置等多个因素 同时，人类专家具有丰富的经验和专业知识，可以在复杂和不 确定的环境下做出更准确的决策',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '关联规则学习中的置信度是指包含项集 A 的事务中同时也包含项集 B 的比例。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '关联规则学习中的置信度是指包含项集 A 的事务中同时也包含项集 B 的比例它是 评估关联规则强度的重要指标之一 ，可以帮助我们了解项集之间的关联程度和可靠性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '线性回归模型是最常用的回归分析方法。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '线性回归模型是最常用的回归分析方法之一它通过建立自变量和因变量之间的线性 关系来预测因变量的值线性回归模型具有简单易懂、计算方便等优点，在许多领域都有广 泛的应用',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '决策树的每个节点可以有多个父节点。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '决策树的每个节点通常只有一个父节点（除了根节点没有父节点外）决策树是一种 树形结构，其中每个节点表示一个决策点或条件判断，而边则表示决策的结果或路径因此， 决策树的每个节点不可能有多个父节点',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.Office办公.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '神经网络中的激活函数是用来引入非线性因素的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '神经网络中的激活函数是用来引入非线性因素的激活函数可以使得神经网络能够学习和表示复杂的非线性关系 常见的激活函数包括 Sigmoid 函数 、Tanh 函数 、ReLU函数等 它们在不同的应用场景下具有不同的优缺点和适用性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在贝叶斯网络中，节点之间的依赖关系是通过概率分布来描述的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在贝叶斯网络中，节点之间的依赖关系是通过概率分布来描述的贝叶斯网络是一种基于概率图模型的方法，它利用有向无环图来表示变量之间的依赖关系，并通过条件概率表来描述变量之间的具体依赖程度 这使得贝叶斯网络能够灵活地表示和处理不确定性问题 ',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在强化学习中，奖励信号应该始终与动作结果相关联，以便模型能够学习到T的动作选择。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在强化学习中，奖励信号是模型学习的关键 它应该准确地反映动作的结果，以便模型能够学会选择能够最大化长期奖励的动作',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在文本分析中，词袋模型将文本表示为单词的集合。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '词袋模型（Bag of Words , BoW）是一种文本表示方法， 它将文本视为单词的集合，不考虑单词的顺序和上下文每个单词在文本中的出现次数（或是否存在）被记录下来，形 成一个特征向量',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '时间序列分析只能处理线性数据。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '时间序列分析可以处理线性数据，但也可以处理非线性数据现代时间序列分析方法， 如非线性自回归模型 、混沌理论等，都可用于分析非线性时间序列数据',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '主成分分析 PCA 是一种常用的维度约简技术，其基本思想是通过降低数据维度来减少信息损失。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '主成分分析（PCA）是一种广泛使用的数据降维技术，它通过线性变换将数据投影到 较低维度的空间中， 同时尽可能保留原始数据的信息',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.数据处理.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据融合技术主要用于将多源异构数据集成为一个统一的数据源。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据融合技术是一种将来自不同来源、格式或类型的数据集成到一个统一的数据视图中的方法 它有助于整合和分析来自多个渠道的信息，提高数据的可用性和准确性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '智能解决方案设计旨在结合人工智能技术与特定领域需求，提供全面的解决方案。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '智能解决方案设计通常涉及将人工智能技术（如机器学习、深度学习等）应用于特定 领域的问题， 以提供定制化的 、高效的解决方案',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '用户需求分析是指识别和理解用户对产品或服务的需求和期望，以便设计出符合其预期的解决方案。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '用户需求分析是产品或服务开发过程中的一个关键步骤，它涉及收集和分析用户的需求和期望， 以确保最终的产品或服务能够满足用户的期望和需求',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '产品功能规划是对产品功能的全面、系统、科学的规划，它具有全局性、前瞻性和创新性。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '产品功能规划是产品开发过程中的一个重要环节，它涉及对产品功能的全面、系统和 科学的规划 这种规划通常具有全局性（考虑整个产品的功能体系） 、前瞻性（预测未来市 场和技术趋势） 和创新性（探索新的功能点或改进现有功能） ',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '模型训练与验证的方法只有交叉验证一种。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '模型训练与验证的方法有多种，交叉验证只是其中一种其他方法还包括留出法 、自助法等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '系统集成设计的规则主要包括尽量减少模块之间的依赖关系，以提高系统的灵活性。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '系统集成设计的规则之一确实是尽量减少模块之间的依赖关系，以提高系统的灵活性 和可维护性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '用户界面设计 UI 不需要考虑性能优化。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '用户界面设计（UI） 同样需要考虑性能优化，包括加载速度 、响应时间等， 以确保用 户体验的流畅性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '用户体验设计 UX 的原则强调在设计过程中始终关注用户的需求和体验。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '用户体验设计（UX） 的原则确实强调在设计过程中始终关注用户的需求和体验，以确保产品能够满足用户的期望',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '产品差异化设计旨在使产品在竞争激烈的市场中脱颖而出，吸引更多的用户。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '产品差异化设计旨在使产品在竞争激烈的市场中脱颖而出，通过独特的功能、设计或 品牌形象吸引更多的用户',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在设计软件时，不需要考虑安全性问题。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在设计软件时， 安全性问题是必须考虑的，包括数据保护 、权限控制等方面',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '可扩展性设计旨在确保系统能够在不断增长的需求下保持高性能。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '可扩展性设计旨在确保系统能够在不断增长的需求下保持高性能，通过横向或纵向扩 展来满足用户的需求',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '代码审计主要关注代码的编写规范性，对系统性能影响不大。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '代码审计不仅关注代码的编写规范性，还对系统的安全性 、性能等方面有重要影响',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '企业在收集、存储和处理用户数据时，不需要告知用户数据的用途和收集方式。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '企业在收集、存储和处理用户数据时，必须告知用户数据的用途和收集方式，并遵守 相关的隐私保护法规',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '故障恢复策略的设计不包括备份和恢复机制。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '故障恢复策略的设计包括备份和恢复机制，以确保在发生故障时能够迅速恢复系统的 正常运行',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在用户反馈与迭代过程的管理中，应该忽略所有负面反馈。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在用户反馈与迭代过程的管理中，应该积极倾听并考虑所有用户反馈，包括负面反馈以不断改进产品',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人机交互是指人与计算机之间的信息交流和操作过程。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '人机交互是指人与计算机之间的信息交流和操作过程，涉及输入、处理和输出等多个 环节',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人机交互模型描述了人和计算机之间信息传递的过程，通常包括输入、处理、输出和反馈等环节。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '人机交互模型描述了人和计算机之间信息传递的过程，通常包括输入、处理、输出和 反馈等环节',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在用户界面设计中，应该遵循一致性原则，即相同类型的元素应该有相同的操作和外观。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在用户界面设计中，应该遵循一致性原则，确保相同类型的元素具有相同的操作和外观， 以提高用户体验',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '输入与输出的系统设计应该考虑用户的操作习惯和心理模型。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '输入与输出的系统设计应该考虑用户的操作习惯和心理模型，以确保用户能够轻松、 高效地完成操作',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '反馈机制在人机交互中不起重要作用。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '反馈机制在人机交互中起着非常重要的作用，它可以帮助用户了解操作的结果和状态 从而指导用户进行下一步操作',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '适应性设计是指产品或服务能够根据用户的需求和偏好进行自动调整。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '适应性设计是指产品或服务能够根据用户的需求和偏好进行自动调整，以提高用户体 验和满意度',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '触摸界面交互主要依赖键盘和鼠标。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '触摸界面交互主要依赖触摸屏设备， 而不是键盘和鼠标',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '语音交互设计不需要考虑语音识别的准确性和响应速度。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '语音交互设计需要考虑语音识别的准确性和响应速度，以确保用户能够顺利、高效地与系统进行交互',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '虚拟现实 VR 交互的设计需要考虑用户的生理反应。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '虚拟现实（VR） 交互的设计需要考虑用户的生理反应， 以确保用户在沉浸式的环境 中能够舒适 、安全地进行交互',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '多模态交互设计仅关注不同输入方式的整合，而不考虑输出方式。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '多模态交互设计不仅关注不同输入方式的整合，还考虑不同输出方式的整合，以实现更加自然 、高效的交互',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '用户研究的方法论主要包括定性和定量两种方法。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '用户研究的方法论主要包括定性和定量两种方法，以收集和分析用户数据，了解用户 需求和偏好',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '原型设计与测试是人机交互设计过程中的最后一步。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '原型设计与测试是人机交互设计过程中的一个重要环节，但并不是最后一步通常还包括用户测试 、评估和改进等多个步骤',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '情感设计主要关注用户的理性需求。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '情感设计主要关注用户的感性需求，包括审美、情感共鸣等方面，而不仅仅是理性需求',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '人工智能在人机交互中主要应用于提高系统的安全性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '人工智能在人机交互中的应用非常广泛，不仅限于提高系统的安全性，还包括提高交互效率 、智能化推荐等多个方面',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '一个高效的人机交互系统应该能够在短时间内响应用户的操作。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '一个高效的人机交互系统应该能够在短时间内响应用户的操作，以提高用户体验和满意度',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '用户中心的设计原则要求设计师在设计过程中始终站在用户的角度思考问题，因此设计师不需要了解产品的目标市场和竞争对手。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '用户中心的设计原则要求设计师在设计过程中始终站在用户的角度思考问题，但同时也需要了解产品的目标市场和竞争对手， 以确保设计符合市场需求',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '设计的可用性标准是指在设计过程中需要遵循的一系列原则和规范，以确保产品的易用性和用户体验。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '设计的可用性标准是指在设计过程中需要遵循的一系列原则和规范，以确保产品的易用性和用户体验',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '交互设计模板可以帮助设计师更好地组织和展示他们的想法。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '交互设计模板可以帮助设计师更好地组织和展示他们的想法，提高设计效率和沟通效果',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在设计过程中，用户反馈是必不可少的环节，因为它可以帮助设计师更好地了解用户需求。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在设计过程中，用户反馈是必不可少的环节，因为它可以帮助设计师更好地了解用户 需求，从而改进设计',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '工作流程的任务分解有助于明确每个阶段的责任和目标。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '工作流程的任务分解有助于明确每个阶段的责任和目标，确保项目顺利进行',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '界面设计的布局策略仅关注美观而忽视功能性。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '界面设计的布局策略不仅关注美观性，还非常注重功能性，以确保用户能够高效地完 成操作',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '用户使用情境的分析工具可以帮助设计师更好地理解目标用户的需求和行为。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '用户使用情境的分析工具可以帮助设计师更好地理解目标用户的需求和行为，从而设计出更符合用户需求的产品',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Adobe XD 只能用于创建移动应用的原型。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: 'Adobe XD 不仅可用于创建移动应用的原型， 还可用于网页和其他类型应用的设计原 型',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Axure RP 是一款用于创建原型和模拟复杂交互的工具。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Axure RP 确实是一款功能强大的工具，用于创建原型和模拟复杂交互',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Axure RP 中的条件逻辑设置可以用来控制页面元素的显示和隐藏。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Axure RP 中的条件逻辑设置允许设计师根据用户操作或特定条件来控制页面元素的显示和隐藏',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Balsamiq Mockups 只能用于创建线框图。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '虽然 Balsamiq Mockups 以创建线框图而闻名，但它也支持其他类型的设计原型，如低保真和高保真原型',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Figma 的设计系统支持创建自定义组件库。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Figma 的设计系统确实支持创建自定义组件库，这有助于设计师在整个项目中保持设 计的一致性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Marvel 的简单交互设计强调减少用户的认知负担，提高用户体验。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Marvel 的简单交互设计确实旨在减少用户的认知负担，从而提高用户体验',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '使用 Marvel 的响应式设计预览，设计师可以轻松地查看和调整他们的网站布局，以确保其在各种设备上都能正常工作。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Marvel 的响应式设计预览功能允许设计师查看和调整网站布局，以确保其在各种设备上都能正常工作',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Sketch 的插件生态系统为用户提供了广泛的功能扩展选项。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Sketch 的插件生态系统提供了广泛的功能扩展选项，这增强了软件的可定制性和灵活性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: 'Sketch 的矢量图形编辑功能非常强大，可以轻松地创建和编辑各种复杂的图形。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: 'Sketch 的矢量图形编辑功能非常强大， 支持创建和编辑各种复杂的图形',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '培训讲义编写应该包含大量的理论知识和实例分析。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '培训讲义编写应该包含理论知识和实例分析，以帮助学员更好地理解和应用所学知识',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '培训讲义的编写应该遵循一定的结构，包括引入、主体和总结三个部分。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '培训讲义的编写应该遵循一定的结构，包括引入 、主体和总结三个部分，这有助于学员更好地理解和掌握培训内容',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '编写培训讲义时，不需要考虑学员的学习需求和背景。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '编写培训讲义时，必须考虑学员的学习需求和背景，以确保培训内容与学员的实际需求相匹配',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在人工智能培训中，使用单一的教学方法可以有效地满足所有学员的学习需求。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在人工智能培训中，使用单一的教学方法可能无法满足所有学员的学习需求，因为学员的学习风格 、背景和经验各不相同',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '讲授法是一种非常有效的培训方法，因此没有缺点。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '讲授法虽然是一种有效的培训方法，但也有其局限性，如缺乏互动、可能无法适应所有学员的学习风格等',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '培训方法的选择应该完全依赖于培训者的经验和偏好。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '培训方法的选择应该基于学员的学习需求 、学习风格 、培训目标和可用资源等因素， 而不是完全依赖于培训者的经验和偏好',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在数据采集和处理流程中，重点分析数据的质量和准确性是非常重要的。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在数据采集和处理流程中，重点分析数据的质量和准确性是非常重要的，因为这直接影响到后续分析和决策的准确性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据清洗与预处理.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在数据采集和处理流程中，数据清洗是一个不必要的步骤。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '在数据采集和处理流程中，数据清洗是一个必要的步骤，它有助于识别和纠正数据中的F 、不一致和缺失等问题',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.人机交互与UI.id, tags.数据处理.id, tags.数据清洗与预处理.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '指导数据采集和处理问题的解决方法主要包括数据清洗、数据转换和数据可视化。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '指导数据采集和处理问题的解决方法确实包括数据清洗、数据转换和数据可视化等步骤，这些步骤共同构成了数据处理和分析的完整流程',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在数据标注流程中，标注员需要严格按照标注规则进行操作。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在数据标注流程中，标注员需要严格按照标注规则进行操作，以确保标注的一致性和准确性',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据标注.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据标注流程中的难点仅仅是数据清洗。',
    options: ['正确', '错误'],
    answer: 1,
    explanation: '数据标注流程中的难点不仅限于数据清洗，还包括数据理解、标注规则的制定和执行、 标注质量的控制等方面',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据标注.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '数据标注流程中的常见问题点包括数据清洗和预处理。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '数据标注流程中的常见问题点确实包括数据清洗和预处理，这些步骤对于确保标注数据的准确性和一致性至关重要',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.判断题.id, tags.业务与流程.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'true-false',
    question: '在数据标注过程中，标注人员需要遵循一定的标注规范和流程。',
    options: ['正确', '错误'],
    answer: 0,
    explanation: '在数据标注过程中，标注人员需要遵循一定的标注规范和流程，以确保标注的一致',
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '职业道德，就是同人们的职业活动紧密联系的符合职业特点所要求( )的的总和。',
    options: ['道德准则', '道德情操', '道德品质', '道德底线', '道德约束'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '职业道德基本知识中，关于奉献社会的要求，正确的是( )。',
    options: ['树立正确的义利观', '认真履行岗位职责', '正确处理个人利益和集体利益的关系', '增强社会责任感', '以我为主'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在社会主义社会时期，职业道德的发展有特点包括 ( )。',
    options: ['个人主义盛行', '注重社会责任', '提倡无私奉献', '追求公平正义', '鼓励创新和发展'],
    answer: [1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '职业道德建设的基本原则关注职业活动中的人际关系和社会责任。这些原则鼓励人们在职业活动中保持( )，并不断提升自己的专业知识和技能。',
    options: ['公正公平', '爱岗敬业', '团队合作', '持续学习', '个人至上'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型训练.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人工智能训练师在进行模型训练时，应遵循的职业道德基本要求包括( )。',
    options: ['保护用户隐私和数据安全', '确保模型输出的准确性和可靠性', '尊重知识产权和公平竞争', '不断提升自身专业技能', '遵守法律法规和公司规章制度'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在人工智能训练过程中，训练师需要遵循的职业道德规范包括( )。',
    options: ['尊重知识产权', '保持公正客观', '注重数据安全', '勇于创新', '个人利益优先'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在人工智能训练过程中，( )是不被鼓励的。',
    options: ['过度追求模型的准确率', '忽视模型的可解释性', '在未经充分验证的情况下将模型应用于实际场景', '不断尝试新的技术和方法以提高模型性能', '不尊重和保护用户隐私和数据安全'],
    answer: [1, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '职业守则是指从事某种职业的人们在职业活动中应该遵循的行为规范的总和，它包括( )。',
    options: ['道德准则', '法律法规', '技术规程', '个人习惯', '文化传统'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '关于职业守则，符合其通常具有的特点的描述为( )。',
    options: ['职业守则具有高度的个性化，每位从业者都可以根据自己的喜好来制定', '职业守则强调从业者在工作中的专业态度和责任心', '职业守则仅关注本职业内部的操作规范和流程', '职业守则涉及本职业与其他职业之间的合作关系与沟通', '职业守则随着社会发展和行业变革而不断更新和完善'],
    answer: [1, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '职业守则要求我们在工作中，不应该出现( )的情况。',
    options: ['承担责任', '逃避责任', '推卸责任', '履行责任', '忽略责任'],
    answer: [1, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在制定职业守则时，应遵循( )原则。',
    options: ['公平性', '公正性', '公开性', '透明性', '保密性'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '为了确保职业守则的有效实施，企业应该采取( )等措施。',
    options: ['制定明确、具体的职业守则', '建立有效的监督和激励机制', '提供必要的培训和资源支持', '定期评估职业守则的执行情况并进行改进', '不透明的处理过程'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '职业守则要求从业人员在工作中做到( )。',
    options: ['团结协作', '顾全大局', '相互学习', '进取创新', '个人利益优先'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.职业道德.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '从业人员要做到爱岗敬业就应( )。',
    options: ['树立正确的职业理想', '强化职业责任', '缺乏团队精神', '提高职业技能', '消极怠工'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在人工智能训练过程中，( )行为是不被允许的。',
    options: ['篡改原始数据', '泄露用户隐私', '优化模型性能', '忽视模型可解释性', '不使用未经授权的算法库'],
    answer: [0, 1],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: 'Windows 输入法的( )智能应用可以帮助用户提高输入效率。',
    options: ['减少拼写错误', '提高打字速度', '实现语音输入', '提供个性化体验', '支持多种语言输入'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: 'Windows 系统更新工具可以更新( )。',
    options: ['操作系统补丁', '驱动程序', '第三方应用程序', '安全补丁', '语言包'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 Windows 操作系统中，可能会遇到( )常见故障。',
    options: ['系统缓慢或冻结', '软件安装错误', '网络连接中断', '硬件不兼容', '打印机驱动问题'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在使用 Windows 小工具的过程中，( )操作可能会导致问题。',
    options: ['将小工具拖放到不适当的位置', '修改小工具的设置', '删除小工具', '更新小工具', '不更新小工具的软件版本'],
    answer: [0, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Web与浏览器.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '当你想要查找某个特定的网页时，可以使用( )。',
    options: ['在搜索引擎中输入关键词进行搜索', '访问收藏夹中的网页链接', '通过浏览器的历史记录找到之前访问过的网页', '使用浏览器的地址栏直接输入网址', '询问朋友或同事推荐的网页链接'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Web与浏览器.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在使用浏览器的高级探索功能时，( )可以帮助你更好地理解网页的工作原理。',
    options: ['查看网页的源代码', '使用浏览器的开发者工具进行网络请求分析', '禁用 JavaScript 来查看网页的基本结构', '启用浏览器的广告拦截器', '清除浏览器的缓存和 Cookie'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.操作系统与工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '正确描述 Office 快捷键作用的是( )。',
    options: ['Ctrl+C: 复制选中的内容', 'Ctrl+V: 粘贴剪切板中的内容', 'Ctrl+A: 查找', 'Ctrl+F: 全选', 'Ctrl+H: 替换'],
    answer: [0, 1, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 Word 中，( )可以提高工作效率。',
    options: ['使用快捷键', '利用模板快速创建文档', '批量修改文档格式', '定期备份文件', '使用宏自动化任务'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '关于 Word 样式库的快速应用，( )操作可以加速文档格式设置。',
    options: ['创建个性化样式模板', '使用“样式”功能批量修改文字格式', '手动逐一调整每个段落的字体和大小', '利用“格式刷”复制并应用格式', '导入外部样式库进行快速设置'],
    answer: [0, 1, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 Word 中进行图文混排时，可以提高文档的视觉效果和专业程度的方法有( )。',
    options: ['使用“样式”功能批量修改文字格式', '利用“格式刷”复制并应用格式', '手动逐一调整每个段落的字体和大小', '导入外部样式库进行快速设置', '使用“布局”或“排列”功能合理放置图片和文本'],
    answer: [0, 1, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 Excel 中，公式可以用来进行( )操作。',
    options: ['对工作表数据进行计算', '查找特定数据', '匹配不同数据项', '进行数据统计', '实现动画效果'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 Excel 中，进行数据排序时，可以使用( )方法。',
    options: ['按单元格值', '按条件格式图标', '按字体类型排序', '按字体颜色排序', '按单元格颜色排序'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Office办公.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '作为人工智能训练师，在使用 Excel 进行数据可视化时，( )方法可以帮助提高图表的清晰度和专业度。',
    options: ['选择合适的图表类型', '使用统一的色调和风格', '添加图表标题和数据标签', '调整图表的大小以适应更多数据', '避免过多的图表特效和颜色'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '关于 Excel 工作簿的管理，( )操作是正确的。',
    options: ['可以将多个工作簿合并为一个工作簿', '可以对工作簿进行加密保护', '可以对工作簿中的数据进行排序', '可以对工作簿中的数据进行筛选', '可以对工作簿中的数据进行分类汇总'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Office办公.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '作为人工智能训练师，在利用 Excel 宏实现数据处理自动化时，( )操作是可能的。',
    options: ['自动清洗数据', '自动生成图表', '自动进行数据分类', '自动填充公式', '自动发送邮件'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )情况可能导致劳动合同被认定为无效。',
    options: ['用人单位与劳动者未在一个月内订立书面劳动合同', '劳动合同中约定的劳动报酬低于当地最低工资标准', '劳动合同中约定的试用期为两个月', '劳动合同中约定了违反法律、行政法规的条款', '用人单位未按照合同约定支付劳动报酬'],
    answer: [1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在劳动合同中，通常需要明确规定( )事项以保障雇员权益。',
    options: ['试用期长度及条件', '培训和技能提升', '工作职责的具体描述', '合同期限和终止条件', '竞业禁止和保密协议'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '订立劳动合同应遵循的基本原则是( )。',
    options: ['劳动行政部门鉴证原则', '平等自愿原则', '协商一致原则', '遵守法律法规原则', '双方公证原则'],
    answer: [1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '根据《中华人民共和国网络安全法》，网络运营者应当履行的安全保障义务包括( )。',
    options: ['制定内部安全管理制度和操作规程，确定网络安全负责人，落实网络安全保护责任', '采取防范计算机病毒和网络攻击、网络侵入等危害网络安全行为的技术措施', '采取监测、记录网络运行状态、网络安全事件的技术措施，并按照规定留存相关的网络日志不少于六个月', '采取数据分类、重要数据备份和加密等措施', '法律、行政法规规定的其他义务'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在网络接入使用中，人工智能训练师应当( )确保合规性。',
    options: ['使用加密技术进行数据传输', '定期参与网络安全培训', '遵守数据保护法规', '使用个人设备进行工作', '保持软件和系统的更新'],
    answer: [0, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '关键信息基础设施的运营者还应当履行( )。',
    options: ['设置专门安全管理机构和安全管理负责人，并对该负责人和关键岗位的人员进行安全背景审查。', '定期对从业人员进行网络安全教育、技术培训和技能考核。', '对重要系统和数据库进行容灾备份。', '制定网络安全事件应急预案，并定期进行演练。', '法律、行政法规规定的其他义务。'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )正确描述了专利申请权主体。',
    options: ['发明人必须是企事业单位的员工', '企事业单位可以是专利申请权主体', '个人可以是专利申请权主体', '发明人、企事业单位和个人都不能作为专利申请权主体', '发明人、企事业单位和个人都可以作为专利申请权主体'],
    answer: [1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '专利授权的实质性条件通常包括( )要素。',
    options: ['新颖性', '实用性', '创造性', '可复制性', '道德合规性'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.数据清洗与预处理.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在专利申请流程的标准化步骤中，( )属于必须进行的步骤。',
    options: ['提交专利申请书和相关文件', '对申请进行初步审查', '公布专利申请以征求公众意见', '实质审查以确定发明的可专利性', '办理专利权登记并支付年费以维持专利有效性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '遵纪守法的社会价值体现在( )方面。',
    options: ['维护社会秩序', '保障公民权益', '促进经济发展', '提高道德水平', '减少犯罪率'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '签订劳动合同的情形中，可以认定无效或部分无效的有( )。',
    options: ['用人单位甲与劳动者乙签订劳动合同，为期一年，工作内容是运送假钞', '用人单位甲与劳动者乙约定，社会保险由劳动者自行缴纳', '用人单位甲与劳动者乙签订的劳动合同中缺少劳动保护条款', '用人单位甲与劳动者乙签订的劳动合同没有约定违约金', '用人单位合并以后的合同'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '根据知识产权法的基本原则，( )行为属于侵权行为。',
    options: ['未经许可擅自使用他人的专利产品', '在新闻报道中合理引用他人作品', '未经允许将他人的商标用于自己的产品包装上', '在学术研究中引用他人的研究成果', '在公共场所播放他人的音乐作品'],
    answer: [0, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '属于侵犯著作权人权利的情形是( )。',
    options: ['未经允许，将他人作品改编成电影', '未经许可，在公共场合演唱他人的歌曲', '未经许可，将他人的软件进行商业性使用', '未经许可，在社交媒体上分享他人的摄影作品', '未经许可，将他人的文章进行翻译并发布'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在讨论人工智能训练师与专利权的主体和客体时，( )是正确的。',
    options: ['人工智能训练师可以成为专利的发明主体', '由人工智能训练师辅助开发的 AI 技术不能成为专利的发明客体', '人工智能本身可以作为专利的发明主体', '人工智能生成的技术方案可以成为专利的发明客体', '人工智能训练师可以成为专利的发明客体'],
    answer: [0, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在知识产权保护中，专利保护的对象是( )。',
    options: ['发明创造', '实用新型', '外观设计', '商标', '商业秘密'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '属于 Python 爬虫库的是( )。',
    options: ['BeautifulSoup', 'Scrapy', 'NumPy', 'Requests', 'Pandas'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据抓取与提取的常用技术包括( )。',
    options: ['正则表达式', '网络爬虫', 'API 接口', '数据可视化', '数据库查询'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在数据采集流程中，使用工具可以( )。',
    options: ['提高数据收集的效率', '确保数据的质量和一致性', '简化数据清洗和预处理的步骤', '加强数据分析和可视化的能力', '限制了数据来源的多样性'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据治理工具在人工智能领域具有( )关键作用。',
    options: ['确保数据的一致性和准确性', '提高数据的安全性和隐私保护', '简化数据收集和存储过程', '增强数据分析的可重复性和可靠性', '限制数据科学家的创新自由'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: 'ETL 工具的基本原理包括( )步骤。',
    options: ['数据抽取', '数据清洗', '数据转换', '数据加载', '数据验证'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在使用数据存储和管理工具时，( )可以提高工作效率。',
    options: ['使用自动化脚本简化数据操作', '定期对数据进行清理和维护', '利用内置模板快速创建报表', '对数据进行分类和标签化以便于检索', '避免使用复杂的查询语句以提高性能'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )是云服务和工具的优势。',
    options: ['弹性伸缩', '按需付费', '自动备份', '数据隔离', '随时随地访问'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行数据预处理时，( )工具可以帮助实现常见数据格式间的转换。',
    options: ['Python 的 pandas 库', 'Java 的 Jackson 库', 'xmlstarlet', 'csvkit', 'Excel'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '大数据处理平台通常可以分为( )类型。',
    options: ['批处理平台', '流处理平台', '图计算平台', '内存计算平台', '实时处理平台'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '广泛用于数据清洗和预处理阶段的工具是( )。',
    options: ['Python 的 Pandas 库', 'SQLServer', 'ApacheHadoop', 'MicrosoftExcel', 'TableauPrep'],
    answer: [0, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '特征工程工具在人工智能应用中通常具有( )特点。',
    options: ['自动化特征提取', '增强数据可视化', '简化特征选择过程', '提高模型性能', '降低模型性能'],
    answer: [0, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '使用数据质量监控工具可以( )。',
    options: ['自动检测数据质量问题', '提供数据清洗建议', '实时监控数据变化', '生成数据质量报告', '优化数据处理流程'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据审核平台的主要类型包括( )。',
    options: ['在线审核平台', '离线审核平台', '实时审核平台', '批量审核平台', '智能审核平台'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在选择合适的数据可视化工具时，人工智能训练师应考虑( )因素。',
    options: ['易用性和学习曲线', '数据兼容性和处理能力', '可视化类型和定制选项', '成本和许可证要求', '社区支持和更新频率'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '业务流程管理与优化工具可以帮助企业实现( )目标。',
    options: ['提高工作效率', '降低运营成本', '提升客户满意度', '优化资源配置', '实现流程自动化'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据采集的策略包括( )。',
    options: ['数据源的选择', '数据采集的方法', '数据清洗和预处理', '数据存储和管理', '数据分析和挖掘'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行数据源选择时，( )可以帮助我们找到合适的数据源。',
    options: ['使用搜索引擎查找相关数据', '咨询专业人士或行业专家', '参考权威机构发布的数据报告', '通过社交媒体平台获取数据', '尝试多种数据源并进行比较'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在选择数据抓取技术时，需要考虑的因素包括( )。',
    options: ['抓取速度', '数据准确性', '技术支持', '抓取范围', '抓取成本'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在执行网络数据抓取任务时，人工智能训练师需要注意( )法律和伦理问题。',
    options: ['遵守 robots.txt 文件规定的抓取规则', '尊重版权和知识产权', '避免对目标网站造成过度负担', '保证数据的匿名性和隐私保护', '公开抓取的数据和抓取过程'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在设计数据存储解决方案时，考虑数据的持久化，( )可以用来实现数据的持久化。',
    options: ['使用事务来确保数据的一致性', '实施 RAID 技术以提高数据冗余和可用性', '采用实时内存数据库加速数据访问', '使用数据备份和恢复策略', '应用数据加密技术保护数据安全'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据清洗与预处理流程的主要步骤包括( )。',
    options: ['数据筛选', '数据转换', '数据分析', '数据集成', '数据可视化'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在数据集成过程中，( )有助于处理数据冲突和不一致性。',
    options: ['数据仲裁，选择最佳数据源', '数据融合，结合多个数据源的信息', '数据清洗，消除错误和重复项', '数据加密，保护数据安全', '数据压缩，减少存储空间需求'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在业务数据相关流程中，为了确保数据安全和用户隐私，( )被广泛应用。',
    options: ['加密技术', '访问控制', '数据脱敏', '数据备份', '数据恢复'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '实时数据处理技术中，( )特性对于处理大规模流式数据至关重要。',
    options: ['数据的持久化存储能力', '支持窗口操作', '异步数据处理能力', '容错恢复机制', '数据处理的确定性'],
    answer: [1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在特征选择方法中，( )方法可以用于减少特征的维度。',
    options: ['过滤法', '包装法', '嵌入法', '降维法', '聚类法'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '容器化技术在业务数据处理流程中的意义包括( )。',
    options: ['提高资源利用率', '简化部署和运维', '增强系统安全性', '降低硬件成本', '支持跨平台运行'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据质量评估的主要目的是( )。',
    options: ['提高数据处理的效率', '保证数据的准确性', '保证数据的时效性', '保证数据的完整性', '保证数据的安全性'],
    answer: [1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据校验过程中，为了确保数据的质量，( )步骤是必要的。',
    options: ['检查数据的完整性，确保没有缺失值', '应用机器学习模型预测数据趋势', '检测并处理异常值，避免其对分析结果的影响', '验证数据的一致性，确保数据格式正确', '对数据进行清洗，去除重复记录'],
    answer: [0, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在设计高效业务流程时，( )是至关重要的。',
    options: ['明确流程的目标和输出', '减少不必要的审批环节', '提升员工的技能和培训', '增加更多的检查点以确保质量', '采用最新的技术而不考虑成本'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '合规性检查的主要目的是( )。',
    options: ['确保数据质量', '发现潜在风险', '提高数据处理效率', '满足监管要求', '优化数据存储结构'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '业务数据的特点有( )。',
    options: ['实时性', '多样性', '准确性', '可追溯性', '安全性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '实施人工智能项目时( )因素被认为是至关重要的成功要素。',
    options: ['数据质量和数量', '强大的计算能力', '高级算法和模型', '用户界面设计', '法律法规遵守'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )功能属于人工智能的范畴。',
    options: ['图像识别', '自动翻译', '智能推荐', '在线客服', '自动驾驶'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '推荐系统功能模块的原理包括( )方面。',
    options: ['协同过滤', '内容推荐', '混合推荐', '深度学习推荐', '基于知识的推荐'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '实现智能搜索功能模块的关键步骤有( )。',
    options: ['数据收集与预处理', '特征提取与选择', '模型训练与评估', '搜索结果排序与展示', '网络安全与数据加密'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '智能交互功能模块的优势是( )。',
    options: ['提高用户体验', '降低人工成本', '增强系统智能化程度', '数据安全', '无法提高工作效率'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '自动数据处理功能模块可以支持( )数据处理方式。',
    options: ['批量处理', '实时处理', '定时处理', '手动处理', '分布式处理'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在实现最优化决策功能模块时，( )方法可以被采用。',
    options: ['梯度下降法', '遗传算法', '线性规划', '动态规划', '拉格朗日乘数法'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '智能控制功能模块在( )领域有广泛应用。',
    options: ['智能家居', '工业自动化', '航空航天', '医疗电子', '交通运输'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '自然语言处理的任务有( )。',
    options: ['文本分类', '命名实体识别', '语音转换', '问答系统', '文本生成'],
    answer: [0, 1, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '生物特征识别功能模块的特点有( )。',
    options: ['唯一性', '稳定性', '可采集性', '灵活性', '不可复制性'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '计算机视觉涉及( )主要任务。',
    options: ['图像分类', '目标跟踪', '视频压缩', '图像修复', '视频编辑'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '关于计算智能的描述，说法正确的是( )。',
    options: ['计算智能是一种模拟人类智能的技术和系统', '计算智能主要依赖于传统编程方法', '计算智能可以处理不确定性和复杂性', '计算智能具有自适应和学习能力', '计算智能仅限于解决特定问题'],
    answer: [0, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在数据挖掘和知识发现的过程中，( )步骤是必不可少的。',
    options: ['数据清洗', '数据转换', '数据加密', '模型训练', '特征提取'],
    answer: [0, 1, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据挖掘和知识发现的方法包括( )。',
    options: ['统计分析', '序列分析', '关联规则学习', '分类', '聚类'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '业务模块构建方法的原则包括( )。',
    options: ['模块化设计', '高内聚低耦合', '单一职责原则', '开闭原则', '依赖倒置原则'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行业务流程优化时，应该采取( )策略。',
    options: ['持续改进', '系统改造', '全新设计', '外包', '合作'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在业务数据采集中，需要重点关注( )。',
    options: ['数据采集人员', '数据采集工具的流行度', '数据采集质量', '数据采集可靠性', '数据采集效率'],
    answer: [2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '业务流程管理 BPM 的核心要素包括( )。',
    options: ['流程设计', '流程执行', '流程监控', '流程分析', '流程优化'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行简单业务流程分析时，常用的方法有( )。',
    options: ['流程图分析法', 'SWOT 分析法', '5W1H 分析法', '实验法', '头脑风暴法'],
    answer: [0, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '为了实现业务流程的持续改进，可以采用( )方法。',
    options: ['定期评估流程性能', '鼓励员工提出改进建议', '实施持续监控和改进机制', '引入外部专家进行诊断', '专注于单个流程的优化'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '业务流程优化效果的评价指标包括( )。',
    options: ['成本降低', '效率提升', '质量改进', '客户满意度提高', '创新能力增强'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在综合业务流程分析流程中，( )阶段涉及到对现有流程的详细描述和改进建议。',
    options: ['需求分析', '流程设计', '流程实施', '流程监控', '流程优化'],
    answer: [1, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行复杂业务系统改进时，可以考虑的措施有( )。',
    options: ['对现有系统进行全面评估', '分析业务流程，找出瓶颈和问题', '采用敏捷开发方法进行快速迭代', '引入新技术和新工具提高系统性能', '对用户进行培训，提高他们的使用技能'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '综合业务流程优化方法的原则包括：( )。',
    options: ['以客户为中心', '以流程为导向', '以结果为导向', '以效率为导向', '以成本为导向'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '通过知识表示使得机器具备的能力包括( )。',
    options: ['演绎', '推理', '解决问题', '数据采集', '创新'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '知识图谱是一种用于表示和组织知识的数据结构，其基本元素包括( )。',
    options: ['节点', '数据库', '算法', '边', '属性'],
    answer: [0, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '业务数据分析工具通常可以分为( )。',
    options: ['报表生成工具', '数据挖掘工具', '可视化工具', '统计分析工具', '数据脱敏工具'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行业务数据分析时，通常采用( )方法来发现数据中的模式和趋势。',
    options: ['描述性分析', '随机性分析', '规范性分析', '因果性分析', '探索性分析'],
    answer: [0, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行业务数据分析时，( )环节是必不可少的。',
    options: ['数据收集', '数据清洗', '数据加密', '数据挖掘', '数据脱敏'],
    answer: [0, 1],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '关于机器学习的基本流程，必要的步骤包括( )。',
    options: ['问题定义', '数据收集', '特征工程', '模型训练与评估', '部署与监控'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '生成对抗网络主要组成部分是( )。',
    options: ['生成器', '分类器', '编码器', '解码器', '判别器'],
    answer: [0, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在智能训练中，特征提取的主要方法包括( )。',
    options: ['主成分分析', '线性判别分析', '梯度提升树', '贝叶斯分类器', '神经网络'],
    answer: [0, 1],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在模型训练中，可以用来改善模型的性能的策略包括( )。',
    options: ['增加训练数据集的大小', '减少学习率', '使用早停技术', '增加模型复杂度', '应用正则化技术'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据预处理的策略有( )。',
    options: ['数据清洗', '数据集成', '数据变换', '数据规约', '参数调优'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在数据增强中，( )方法可以增加数据的多样性。',
    options: ['翻转图像', '固定剪裁', '旋转图像', '添加噪声', '低分辨率模拟'],
    answer: [0, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )方法属于水平分片技术。',
    options: ['基于范围的分片', '基于哈希的分片', '基于列表的分片', '基于值的分片', '基于连接的分片'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )标注工具可以帮助提高数据标注的效率和质量。',
    options: ['LabelImg', 'RectLabel', 'VGG Image Annotator', 'Photoshop', 'Coreldraw'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在模型评估指标的计算方法中，( )是正确的。',
    options: ['准确率可以通过计算所有预测正确的样本数除以总样本数得到', '精确率可以通过计算真正例数除以所有被预测为正例的样本数得到', '召回率可以通过计算真正例数除以所有实际为正例的样本数得到', 'F1 值可以通过计算精确率和召回率的调和平均值得到', 'AUC-ROC 曲线下的面积可以用来衡量模型的整体性能'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在评估回归模型时，常用的评估指标有( )。',
    options: ['均方误差', '均方根误差', '平均绝对误差', 'R 平方', '平均相对误差'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在选择机器学习库时，需要考虑( )因素。',
    options: ['库的易用性', '库的性能', '库的社区支持', '库的文档质量', '库的可扩展性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: 'Pandas 库在数据处理方面的主要优势是( )。',
    options: ['强大的数据结构', '高效的内存管理', '丰富的数据处理函数', '深度学习支持', '实时数据处理'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在设计数据收集任务的策略时，需要考虑( )些因素。',
    options: ['目标受众的特点', '数据的可用性和质量', '数据收集的成本和时间', '数据分析的方法和技术', '数据存储和管理的方案'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )原理是自动化标注工具常用的。',
    options: ['基于规则的方法', '基于机器学习的方法', '基于深度学习的方法', '基于人工的方法', '基于随机选择的方法'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: 'python 工具库中，( )常用于数据加载与预处理。',
    options: ['DataLoader', 'Dataset', 'NumPy', 'Pandas', 'Matplotlib'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在模型优化过程中，( )方法可以帮助提高模型的性能。',
    options: ['调整模型的超参数', '使用正则化技术', '重复训练', '尝试不同的模型结构', '对模型进行集成学习'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型训练.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在模型训练过程中，( )技术可以用于防止过拟合。',
    options: ['数据增强', '早停法', 'Dropout', '增加模型复杂度', '使用更大的数据集'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )原理是和人工智能训练师和模型训练自动化工具的工作中相关的。',
    options: ['数据预处理和增强', '超参数优化', '损失函数和梯度下降法', '分布式计算和并行处理', '用户界面设计和交互性改进'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在系统监控中，常用于收集和分析服务器性能指标的工具是( )。',
    options: ['Nagios', 'Prometheus', 'Elasticsearch', 'Splunk', 'TensorFlow'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在生成对抗网络中，( )方法可以用于提高生成数据的质量。',
    options: ['增加生成器的复杂度', '增加判别器的复杂度', '使用更小的学习率', '使用更大的学习率', '增加训练轮次'],
    answer: [0, 1, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 R 语言中，对数据集进行标准化的主要目的是( )。',
    options: ['减少数据存储空间', '增加模型复杂性', '改善模型收敛性', '增加特征之间的可比性', '降低模型预测精度'],
    answer: [2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '使用模型部署工具时，通常需要考虑( )因素。',
    options: ['模型的性能', '模型的准确性', '模型的实时性', '模型的可用性', '模型的兼容性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )是探索性数据分析常用的可视化图形方法。',
    options: ['散点图', '箱线图', '直方图', '热力图', '雷达图'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行数据探索分析时，通常会关注( )方面的信息。',
    options: ['数据的完整性', '数据的准确性', '数据的时效性', '数据的可解释性', '数据的多样性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 python 中，利用填充缺失数据处理缺失数据的方法主要有( )。',
    options: ['常数填充', '统计值填充', '前向/后向填充', '插值方法', '模型预测填充'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在大规模数据集中，( )策略可以有效处理缺失值，同时尽量减少信息损失。',
    options: ['使用数据集的全局均值填充缺失值', '利用邻近观测值进行局部插补', '基于模型的预测填充', '采用多重插补技术', '删除所有含有缺失值的记录'],
    answer: [1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在异常值检测和处理的过程中，( )步骤是必要的。',
    options: ['识别异常值', '分析异常值产生的原因', '对异常值进行处理', '忽略异常值', '验证处理后的数据质量'],
    answer: [0, 1, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '处理异常值的常用方法有( )。',
    options: ['删除异常值', '替换异常值为均值或中位数', '对异常值进行变换', '使用机器学习模型进行预测', '替换异常值为最大值'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '噪声数据处理的技术主要包括( )。',
    options: ['去噪技术', '量化技术', '增强技术', '特征提取技术', '分类技术'],
    answer: [0, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '影响数据去重的效率和准确性的主要因素有( )。',
    options: ['数据的格式', '数据的规模', '数据的更新频率', '数据的存储位置', '数据的加密方式'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据归一化的方法有( )。',
    options: ['最大最小归一化', '均值归一化', '指数归一化', '众数归一化', '零均值归一化'],
    answer: [0, 1, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据白化处理的主要目的是( )',
    options: ['提高数据的可读性', '减少数据的冗余', '增强数据的可解释性', '保护数据隐私', '提高计算复杂度'],
    answer: [1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在机器学习和数据分析中，特征工程包括( )。',
    options: ['数据标注', '数据清洗', '特征选择', '特征提取', '特征缩放'],
    answer: [2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '使用数据标注工具时，应该注意( )。',
    options: ['确保标注准确性和一致性', '合理分配标注任务', '定期检查标注质量', '及时更新标注工具和库', '避免过度依赖单一工具'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )是数据标注的方式',
    options: ['手动', '自动化', '半自动', '众包', '数据编程'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在机器学习中，为了避免模型过拟合，通常需要对数据进行交叉验证。( )正确的描述了交叉验证。',
    options: ['交叉验证是一种数据划分方法', '交叉验证是一种模型评估方法', '交叉验证可以有效地避免模型过拟合', '交叉验证可以有效地提高模型的泛化能力', '交叉验证需要将数据集划分为训练集、验证集和测试集'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '自动化标注的优势包括( )。',
    options: ['提高标注效率', '降低人力成本', '减少标注误差', '提高数据质量', '增加标注速度'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '分布式数据处理的主要优势包括( )。',
    options: ['提高数据处理速度', '降低单个节点的负载', '增强系统的可扩展性', '支持实时数据处理', '保证数据的一致性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据可追溯性是指数据从产生到销毁的整个生命周期内，能够追踪和记录数据的来源、修改、传输和使用情况的能力。( )符合数据可追溯性的定义。',
    options: ['数据在存储过程中可以被篡改', '数据在传输过程中可以被加密', '数据在删除后可以被恢复', '数据在创建时可以自动记录时间戳', '数据在访问时可以进行身份验证'],
    answer: [3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据可追溯性的重要性是( )。',
    options: ['它确保了研究结果的可重复性', '它允许追踪数据来源', '它有助于保护知识产权', '它减少了数据处理的成本', '它增强了数据分析的透明度'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Office办公.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 Excel 中进行数据清洗时，( )操作是常用的数据预处理步骤。',
    options: ['数据录入', '数据筛选', '数据排序', '数据去重', '数据透视'],
    answer: [1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '关于图像的读取、保存及显示方法，说法正确的是( )。',
    options: ['使用 Python 中的 PIL 库可以读取和保存图像文件', '使用 JavaScript 中的 Canvas API 可以在网页上显示图像', '使用 C++中的 OpenCV 库可以读取和保存图像文件', '使用 Java 中的 BufferedImage 类可以读取和保存图像文件', '使用 HTML 中的 br 标签可以在网页上显示图像'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.数据标注.id, tags.数据清洗与预处理.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在文本类数据清洗和标注的过程中，人工智能训练师通常会遵循( )规则与流程。',
    options: ['去除或更正文本中的拼写错误', '识别并处理文本中的同义词和近义词', '对文本进行情感分析，标注正面或负面情感', '保留文本中的所有特殊字符和标点符号', '将文本数据转换为小写，以统一格式'],
    answer: [0, 1, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在制定视觉类数据处理规范时，至关重要的依据有( )。',
    options: ['遵守行业标准和法规', '确保数据隐私和安全', '考虑数据的多样性和代表性', '优化数据处理的效率和成本', '参考竞争对手的数据处理方式'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在算法训练过程中，( )步骤是必不可少的。',
    options: ['数据收集', '特征工程', '模型选择', '模型训练', '模型评估'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在机器学习项目中，( )是数据集划分时应考虑的因素。',
    options: ['数据集应保持独立性，避免数据泄露', '数据集应具有代表性，以覆盖各种情况', '数据集划分应保证每个子集大小相同', '数据集划分应考虑数据的类别平衡', '数据集划分应基于随机抽样原则'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )是分布式数据库系统 MyCat 的三大功能。',
    options: ['分表', '导入', '读写分离', '备份', '主从切换'],
    answer: [0, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '特征选择的主要目标是( )。',
    options: ['增加模型的复杂性', '减少过拟合的风险', '提高模型的预测性能', '降低计算成本', '使模型更易于解释'],
    answer: [1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据标注.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在深度学习项目中，数据标注可能涉及的任务有( )。',
    options: ['对象分类', '噪声消除', '实例分割', '边缘检测', '属性标注'],
    answer: [0, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在模型训练过程中，( )步骤是必不可少的。',
    options: ['数据预处理', '模型构建', '参数初始化', '模型评估', '模型优化'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id, tags.模型评估.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在深度学习中，为了提高模型的泛化能力，通常会使用正则化技术。关于正则化技术的分类和特点的描述，( )描述是正确的。',
    options: ['L1 正则化是一种在损失函数中加入参数绝对值之和的方法', 'L2 正则化是一种在损失函数中加入参数平方和的方法', 'Dropout 是一种在训练过程中随机丢弃一部分神经元的方法', 'Early stopping 是一种在验证集上性能不再提升时提前终止训练的方法', '数据增强是一种通过对原始数据进行变换来增加数据多样性的方法'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '算法训练环境搭建的要素包括( )。',
    options: ['硬件设备', '软件工具', '数据集', '网络连接', '算法实现'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )机器学习框架支持深度学习，并且广泛用于工业界和学术界。',
    options: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )正确反映了“人工智能训练师”和“算法验证技术”的概念及其作用。',
    options: ['人工智能训练师负责设计和实施机器学习模型的训练流程。', '算法验证技术主要关注于确保机器学习模型在现实世界应用中的稳定性和可靠性。', '人工智能训练师通常需要掌握编程、数据处理和统计分析等多方面的技能。', '算法验证技术不涉及对模型的测试，只关注算法的理论研究。', '人工智能训练师的工作仅限于数据的收集和预处理，不包括模型的选择和调优。'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '超参数调优的策略包括( )。',
    options: ['网格搜索', '随机搜索', '贝叶斯优化', '遗传算法', '梯度下降法'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '模型训练动态监控工具常见的功能是( )。',
    options: ['实时显示模型的训练进度', '能够保存和加载模型检查点', '自动修复训练过程中出现的错误', '提供多种方式来展示模型训练状态', '允许用户设置阈值以在特定条件下触发警报或动作'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Web与浏览器.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在调试模型时，推荐的做法是( )。',
    options: ['逐步调整超参数', '同时调整多个超参数', '记录每次调试的结果以便分析', '仅关注训练损失而不考虑验证损失', '在不同的数据集上验证模型性能'],
    answer: [0, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在选择算法测试的评价指标时，需要考虑( )因素。',
    options: ['算法的准确性', '算法的效率', '算法的稳定性', '算法的代码长度', '算法的可读性'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )是在模型部署阶段进行的。',
    options: ['模型训练', '模型验证', '模型转换', '环境配置', '性能测试'],
    answer: [2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )工具提供了模型转换功能，以便于模型部署。',
    options: ['TensorFlowSavedModel', 'ONNXConverter', 'PyTorchTorchScript', 'TensorFlowLiteConverter', 'Django'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '云平台使用的优势包括( )。',
    options: ['提高资源利用率', '降低运维成本', '实现弹性伸缩', '支持多种开发语言', '提供安全可靠的存储服务'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '容器化技术的主要特点包括( )。',
    options: ['轻量级', '隔离性', '可移植性', '数据持久化', '版本控制和组件重用'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )正确描述了容器化技术与虚拟机技术的区别。',
    options: ['容器化技术比虚拟机技术更轻量级', '虚拟机技术需要模拟整个操作系统，而容器化技术则共享宿主机操作系统', '容器化技术在启动速度上通常优于虚拟机技术', '虚拟机技术在隔离性方面通常优于容器化技术', '容器化技术和虚拟机技术都可以用于云计算环境'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在选择数据处理框架时，需要考虑( )因素。',
    options: ['性能需求', '数据量大小', '开发团队的熟悉程度', '框架的社区支持', '框架的学习曲线'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '高性能计算资源利用的策略包括( )。',
    options: ['资源分配策略', '负载均衡策略', '节能策略', '安全策略', '性能监控策略'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人工智能训练师在使用性能监控工具时可以关注( )。',
    options: ['监控模型训练过程中的资源使用情况', '分析模型训练过程中的性能指标', '实时调整模型参数以优化训练效果', '监控并预测硬件故障，确保训练环境的稳定性', '评估不同算法在同一数据集上的性能表现'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '一个良好的测试用例通常具备( )的属性。',
    options: ['明确性', '完整性', '可重复性', '必要性', '无限性'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人工智能测试的主要目包括( )。',
    options: ['验证 AI 系统的正确性', '评估 AI 系统的性能', '增强用户体验', '确保安全性和隐私保护', '探索新的 AI 应用'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人工智能测试方法包括( )。',
    options: ['黑盒测试', '白盒测试', '灰盒测试', '红盒测试', '蓝盒测试'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在选择测试框架时，需要考虑的主要因素有( )。',
    options: ['支持的编程语言', '测试框架的流行程度', '框架的社区支持和文档', '是否支持并行测试执行', '框架是否免费或开源'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '关于自动化和手动测试方法的比较与选择，描述正确的是( )。',
    options: ['自动化测试可以完全替代手动测试', '自动化测试可以提高测试效率', '自动化测试可以覆盖更多的测试场景', '自动化测试可以降低测试成本', '自动化测试可以减少人为错误'],
    answer: [1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在监控算法性能时，( )指标是评估分类算法有效性的重要标准。',
    options: ['准确率', '召回率', '精确率', 'F1 分数', '处理时间'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在算法准确度测试中，通常使用( )来衡量算法的准确性。',
    options: ['精确率', '召回率', 'F1 值', '均方误差', '对数损失'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )正确描述了人工智能训练师和算法鲁棒性测试的关系。',
    options: ['人工智能训练师负责设计和实施算法的训练计划，确保模型能够达到预定的性能标准。', '算法鲁棒性测试旨在评估模型对异常输入或故意攻击的抵抗力。', '人工智能训练师通常不参与模型的鲁棒性测试，这通常是质量保证团队的职责。', '算法鲁棒性测试包括对模型进行压力测试，以观察其在极端数据情况下的行为。', '人工智能训练师仅关注模型的准确性，而不考虑其对现实世界变化的适应能力。'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '算法安全性测试的目的是( )',
    options: ['检查算法的正确性', '评估算法的性能', '确保算法的机密性', '检测算法的漏洞和缺陷', '验证算法的可用性'],
    answer: [2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行算法可解释性与透明度测试时，( )因素是需要考虑的。',
    options: ['算法的应用场景。', '算法的目标和需求。', '用户的接受程度。', '法律法规的要求。', '算法的技术实现细节。'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行数据多样性测试时，必须遵守的原则是( )。',
    options: ['确保数据集覆盖所有关键特征', '数据应反映真实世界的分布', '避免数据集中存在偏见或歧视', '数据集必须包含足够的异常值', '数据集应定期更新以反映最新趋势'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行交叉验证时，( )步骤是必要的。',
    options: ['划分训练集和测试集', '选择合适的交叉验证方法', '重复执行交叉验证过程', '分析交叉验证结果', '调整模型参数'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在算法部署效果测试中，需要关注的环节有( )。',
    options: ['算法性能', '模型准确性', '系统稳定性', '用户体验', '算法代码长度'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )正确描述了人工智能训练师在用户反馈集成过程中的职责。',
    options: ['人工智能训练师负责收集和分析用户的反馈信息，以优化 AI 系统的性能。', '人工智能训练师不参与用户反馈的收集工作，这一任务通常由客户服务团队完成。', '人工智能训练师利用用户反馈调整算法参数，以提高系统的用户满意度。', '人工智能训练师只关注技术层面的反馈，如系统错误或性能问题，而忽略用户的主观感受。', '人工智能训练师需要将用户反馈转化为具体的训练目标和策略，确保模型持续改进。'],
    answer: [0, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在分析算法测试结果的统计显著性时，( )方法可以用来判断算法间性能差异是否显著。',
    options: ['配对 t 检验', 'Mann-WhitneyU 检验', '方差分析', '相关系数', '皮尔逊卡方检验'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '为了确保算法测试报告的清晰性和可读性，应该采取的措施有( )。',
    options: ['使用行业标准术语和定义', '包含详细的测试用例和步骤', '提供测试结果的图表和可视化', '附带所有原始数据和日志文件', '按照时间顺序编排测试事件'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Web与浏览器.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )正确描述了人工智能训练师在调试与问题定位中使用的方法与技巧。',
    options: ['人工智能训练师通常使用逐层检查的方法来识别深度学习模型中的性能瓶颈。', '为了定位问题，人工智能训练师不会修改输入数据，以避免数据污染导致的误判。', '人工智能训练师会运用可视化工具来理解模型内部状态和中间层的输出。', '在定位模型性能问题时，人工智能训练师可能会对数据集进行重新采样，以便更好地评估模型的泛化能力。', '人工智能训练师往往忽略模型的过拟合问题，因为这只是表明模型已经很好地学习到了训练数据。'],
    answer: [0, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.Web与浏览器.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: 'TensorBoard 提供的( )功能有助于模型的监控和调试。',
    options: ['实时显示模型训练过程中的损失函数变化', '自动优化模型的超参数', '可视化神经网络的架构', '直观展示模型在不同数据集上的性能差异', '自动生成模型代码'],
    answer: [0, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行日志分析时，( )技巧可以帮助提高分析的效率和质量。',
    options: ['使用正则表达式来提取关键信息', '对日志进行分类和标签化', '利用日志分析工具自动识别异常行为', '定期清理和归档日志文件', '将日志数据与其他数据源进行关联分析'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '算法测试实验管理中，( )策略可以提高实验效率。',
    options: ['制定详细的实验计划', '使用自动化测试工具', '对实验结果进行实时监控', '忽略实验过程中的问题', '定期回顾和总结实验经验'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在修复与迭代过程中，( )工具和技术可以帮助团队提高工作效率。',
    options: ['敏捷开发方法', '单次大规模发布', '自动化测试', '代码审查', '项目管理软件'],
    answer: [0, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '合规性测试的标准包括( )方面。',
    options: ['符合法律法规要求', '符合行业规范', '符合公司内部政策', '符合客户期望', '符合员工需求'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行性能优化策略的选择与实施时，需要考虑的因素包括( )。',
    options: ['系统架构', '用户体验', '成本预算', '技术可行性', '数据安全性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型评估.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在人工智能系统测试阶段应该包括对算法决策过程的伦理评估，确保( )。',
    options: ['算法的公正性', '算法的鲁棒性', '算法的透明性', '算法的可解释性', '算法的高可用'],
    answer: [0, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )方法属于数据拆解的常用手段。',
    options: ['维度拆解', '指标拆解', '流程拆解', '随机拆解', '关联拆解'],
    answer: [0, 1, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据拆解对模型性能的影响可能是( )。',
    options: ['提高模型的预测准确性', '降低模型的过拟合风险', '加速模型的训练过程', '增加模型的复杂度', '减少模型调参的工作量'],
    answer: [0, 1],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型训练.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '验证集的主要作用是( )。',
    options: ['用于训练模型', '用于评估模型的泛化能力', '用于选择最佳的模型配置', '用于测试模型的预测能力', '用于调整模型的超参数'],
    answer: [1, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '属于特征降维的常用方法的是( )。',
    options: ['主成分分析', '线性判别分析', '独立成分分析', '聚类分析', '朴素贝叶斯分类器'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '基于统计的特征拆解的目的是( )。',
    options: ['提取数据中的有用信息', '简化特征结构', '增加特征的个数', '降低计算复杂度', '提高模型性能'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型评估.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在特征选择过程中，可以使用( )方法来评估特征的重要性。',
    options: ['基于模型的特征重要性评估', '基于统计量的特征重要性评估', '基于可视化技术的特征重要性评估', '基于专家经验的特征重要性评估', '基于计算复杂度的特征重要性评估'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行时间序列数据的拆解和处理时，通常需要考虑( )因素。',
    options: ['数据的周期性', '数据的趋势性', '数据的季节性', '数据的随机性', '数据的分组特征'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '文本数据的拆解技术主要包括( )方面。',
    options: ['词性标注', '命名实体识别', '依存关系分析', '语义角色标注', '句法分析'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '时间序列分析在天气预报中的主要作用是( )。',
    options: ['预测未来天气状况', '分析历史天气数据', '确定天气变化趋势', '评估天气模型的准确性', '优化气象观测网络'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在网络分析中，节点通常不能用来表示( )。',
    options: ['实体', '关系', '属性', '数据', '模型'],
    answer: [1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )正确描述了人工智能训练师和网络分析方法在社会网络研究中的应用。',
    options: ['人工智能训练师通过标注和反馈数据，帮助机器学习算法优化社交网络中的用户行为预测模型。', '网络分析方法用于识别社交网络中的关键节点，从而理解信息传播的模式。', '人工智能训练师不直接参与社会网络分析，他们的主要工作集中在数据清洗和预处理阶段。', '社交网络中的大量数据为人工智能训练师提供了丰富的训练资源，用于改进推荐系统的精准度。', '网络分析方法通过计算节点的中心性指数，分析社交网络的结构和动态。'],
    answer: [0, 1, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '多维度数据分解的主要目的是( )。',
    options: ['简化数据结构', '提高数据处理效率', '增强数据的可解释性', '降低数据存储成本', '增加数据的复杂性'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.计算机视觉.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在图像处理中，多维度数据分解的主要目的是( )。',
    options: ['提高图像质量', '提高图像处理的效率', '降低图像存储成本', '提取有用的图像信息', '降低计算复杂度'],
    answer: [1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )正确描述了人工智能训练师与机器学习特征工程分类之间的关系，',
    options: ['人工智能训练师负责使用机器学习算法和深度学习技术来训练模型，而特征工程是这一过程中提升模型性能的关键步骤。', '机器学习特征工程主要分为监督学习和无监督学习两大类，每种分类下的特征处理方式有所不同。', '人工智能训练师在模型训练过程中，需要依据特征工程的分类来选择合适的处理策略。', '特征工程包括数据预处理、特征选择、特征构造和特征降维等步骤，这些步骤完全由人工智能训练师自主完成，无需其他团队支持。', '机器学习特征工程的分类有助于人工智能训练师更好地理解数据，从而设计出更有效的训练策略和优化方案。'],
    answer: [0, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id, tags.特征工程与数据分析.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '机器学习特征工程在自然语言处理中的应用主要包括( )。',
    options: ['文本分类', '情感分析', '命名实体识别', '推荐系统', '拼写检查和语法纠错'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '针对大规模数据集的机器学习模型，( )可以帮助减少响应时间。',
    options: ['实施模型剪枝以减少冗余权重', '应用量化技术降低模型精度要求', '使用更复杂的优化算法以提高训练速度', '扩大数据集规模以提高模型泛化能力', '利用分布式计算框架进行并行处理'],
    answer: [0, 1, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行安全性分析时，需要考虑的因素包括( )。',
    options: ['人员因素', '环境因素', '技术因素', '管理因素', '经济因素'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在分布式系统中，为了实现负载均衡，( )策略可以被采用。',
    options: ['随机分发', '轮询分发', '最少连接数分发', '源地址哈希分发', '最少响应时间分发'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在文本数据预处理中，常见的步骤包括( )。',
    options: ['分词', '去除停用词', '词干提取和词形还原', '将文本转换为数字向量表示', '增加文本的字数'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.特征工程与数据分析.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据分析的标准流程通常包括( )步骤。',
    options: ['数据收集', '数据清洗', '数据可视化', '数据挖掘', '数据分析报告'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在选择统计模型时，应该被考虑的因素是( )。',
    options: ['模型的复杂性', '数据的可用性', '模型的预测能力', '模型的易解释性', '模型的训练时间'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在应用机器学习算法时，为了加快模型的训练速度，可以采取以下( )策略。',
    options: ['增加正则化强度', '优化算法实现', '使用更复杂的模型结构', '采用随机梯度下降', '增加学习率'],
    answer: [1, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '聚类分析是一种无监督学习方法，用于将数据集划分为多个组或簇，使得同一组内的数据点尽可能相似，而不同组之间的数据点尽可能不同。( )算法属于聚类分析的常用算法。',
    options: ['K-means 算法', '层次聚类算法', 'DBSCAN 算法', '主成分分析', '线性判别分析'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )正确描述了人工智能训练师与关联规则学习挖掘过程之间的关系及其内容。',
    options: ['人工智能训练师首先需要进行数据预处理，以确保数据质量。', '在挖掘关联规则时，人工智能训练师不参与设定最小支持度和置信度阈值。', '人工智能训练师负责解释和评估挖掘出的关联规则，以确定其业务价值。', '关联规则的挖掘完全自动化，人工智能训练师不参与整个流程。', '人工智能训练师会使用领域知识来指导关联规则的挖掘，并帮助筛选有意义的规则。'],
    answer: [0, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )描述了人工智能训练师在回归分析模型建立过程中的职责。',
    options: ['人工智能训练师负责确定回归模型的自变量和因变量。', '在建立回归模型时，人工智能训练师不参与数据清洗和预处理工作。', '人工智能训练师会进行模型诊断，以确保回归模型没有违反任何统计假设。', '回归模型一旦建立，人工智能训练师就不再需要进行任何后续的调整或优化。', '人工智能训练师负责向非技术利益相关者解释回归模型的结果和影响。'],
    answer: [0, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在决策树分析中，( )确定最优的划分标准。',
    options: ['信息增益率', '基尼指数', '最大似然估计', '交叉熵', '方差减小'],
    answer: [0, 1],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '神经网络分析中，激活机制的作用是( )。',
    options: ['增强网络的非线性表达能力', '提供网络的稀疏性', '帮助网络学习复杂的模式', '增加网络的计算量', '使网络具有自我修正的能力'],
    answer: [0, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )正确描述了人工智能训练师在使用贝叶斯网络进行概率推断的职责。',
    options: ['人工智能训练师负责构建贝叶斯网络的结构，包括确定节点和它们之间的依赖关系。', '在贝叶斯网络中，人工智能训练师不参与概率分布的指定和参数估计。', '人工智能训练师使用贝叶斯网络来预测未来事件的概率，并据此做出决策。', '一旦贝叶斯网络建立，人工智能训练师就无需再对其进行任何更新或修正。', '人工智能训练师需要向利益相关者解释贝叶斯网络概率推断的结果和其对决策的影响。'],
    answer: [0, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在集成学习中，Boosting 方法通过( )方式提高模型的准确性。',
    options: ['增加训练数据的数量', '减少训练数据的数量', '调整基学习器的权重', '改变基学习器的类型', '优化损失函数'],
    answer: [2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.深度学习与神经网络.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '深度学习中常用的网络结构包括( )。',
    options: ['卷积神经网络', '循环神经网络', '长短时记忆网络', '生成对抗网络', '全连接神经网络'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.机器学习.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '强化学习策略的目标是实现奖励最大化。在选择动作时，通常采用的策略包括( )。',
    options: ['贪心策略', 'ε-贪婪策略', '玻尔兹曼探索', 'UCB 策略', '随机策略'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '自然语言处理中的文本分析技术主要包括( )方面。',
    options: ['词法分析', '句法分析', '语义分析', '情感分析', '主题建模'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.算法.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行时间序列分析时，( )步骤是必要的。',
    options: ['数据清洗', '异常值检测', '趋势分析', '周期性分析', '预测未来趋势'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在应用维度约简技术进行数据压缩时，( )因素需要考虑。',
    options: ['数据的编码格式', '数据的维度', '数据的稀疏性', '数据的分布情况', '数据的噪声水平'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据清洗与预处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )技术可用于处理检测到的异常值。',
    options: ['删除异常值', '替换异常值', '通过插值填补异常值', '使用异常值进行模型训练', '基于领域知识修正异常值'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人工智能训练师在数据融合技术综合利用中，主要用于提升模型的( )。',
    options: ['准确性', '效率', '稳定性', '扩展性', '复杂性'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在设计智能解决方案时，需要考虑的要素包括( )。',
    options: ['技术可行性', '经济可行性', '社会可行性', '环境可行性', '法律可行性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '用户需求分析的目的是( )。',
    options: ['了解用户的需求和期望', '评估产品的功能和性能', '确定产品的市场定位', '制定产品的开发计划', '优化产品的用户体验'],
    answer: [0, 1, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在产品功能规划中，( )步骤是必不可少的。',
    options: ['市场调研', '用户需求分析', '功能优先级排序', '技术可行性评估', '成本效益分析'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在选择人工智能算法时，训练师应关注算法的( )，以确保模型的高效运行。',
    options: ['计算复杂度', '时间复杂度', '空间复杂度', '数据利用率', '模型精度'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.模型训练.id, tags.模型评估.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在模型训练与验证的过程中，( )方法可以用来评估模型的性能。',
    options: ['交叉验证', '留一法', '自助法', '均值法', '方差法'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '系统集成设计时，应遵循的规则包括( )。',
    options: ['模块化设计原则', '可扩展性原则', '安全性原则', '可靠性原则', '封闭性原则'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在用户界面设计 UI 中，有助于提高用户体验的设计特点是( )。',
    options: ['简洁明了', '色彩搭配', '布局合理', '响应式设计', '复杂操作'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '用户体验设计 UX 的原则包括( )。',
    options: ['以用户为中心的设计', '简洁明了的界面', '可用性', '非响应式设计', '设计一致性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.法律与知识产权.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在安全性和隐私保护方面，人工智能训练师确保产品差异化的方法有( )。',
    options: ['集成先进的加密技术', '实施严格的数据访问控制', '提供透明的数据使用政策', '忽视用户数据保护法规', '减少安全措施以提高性能'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在进行安全性考虑与设计时，( )因素是需要关注的。',
    options: ['用户隐私保护', '数据加密技术', '访问控制策略', '物理安全措施', '网络安全措施'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '云服务集成中的 API 集成通常采用( )方式。',
    options: ['RESTful API', 'SOAP API', 'RPC API', 'XML-RPC API', 'JSON-RPC API'],
    answer: [0, 1],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '关于代码优化，可以提升程序运行效率的实践是( )。',
    options: ['使用全局变量而非局部变量', '避免不必要的循环和递归调用', '选择更快的算法和数据结构', '减少函数调用开销', '通过增加冗余代码来提高可读性'],
    answer: [1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.云平台与架构.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在可扩展性设计中，( )方法可以提高系统的灵活性。',
    options: ['模块化设计', '使用中间件', '采用微服务架构', '优化数据库查询', '使用缓存技术'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '代码审计与优化的重要性体现在( )方面。',
    options: ['提高代码质量', '减少潜在的安全风险', '提升系统性能', '降低维护成本', '增强团队协作'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在处理用户数据时，公司应该遵循( )原则。',
    options: ['最小化', '有目的性', '公开透明', '灵活性', '用户授权'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '故障恢复的策略性设计需要考虑( )方面。',
    options: ['备份策略', '恢复策略', '容灾策略', '监控策略', '优化策略'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '关于产品维护与升级的策略，( )是正确的描述。',
    options: ['定期进行版本迭代', '优先解决紧急问题', '保持技术债务最小化', '忽略长期规划', '持续监控市场动态'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在用户反馈与迭代过程的管理中，( )因素可能会影响改进计划的制定。',
    options: ['资源限制', '技术可行性', '市场环境', '用户满意度', '竞争对手策略'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )与人工智能训练师和人机交互的定义紧密相关。',
    options: ['数据标注与预处理', '用户行为分析', '算法设计与优化', '用户界面设计与优化', '用户反馈收集与处理'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人机交互的目的是( )。',
    options: ['提高计算机的性能', '提高用户的操作效率', '实现人与计算机之间的信息交换', '实现人与计算机之间的自然交流', '实现人与计算机之间的无缝连接'],
    answer: [1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人机交互的模型包括( )方面。',
    options: ['用户研究', '设计原则', '交互方式', '评估方法', '技术实现'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人机交互设计的基本原则包括( )。',
    options: ['直观性原则', '一致性原则', '反馈性原则', '容错性原则', '复杂性原则'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在设计输入与输出系统时，需要考虑的因素包括( )。',
    options: ['用户的需求', '系统的性能', '数据的准确性', '设备的兼容性', '环境的适应性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '为了确保反馈机制的有效性，需要考虑的因素有( )。',
    options: ['反馈的及时性', '反馈的准确性', '反馈的主观性', '反馈的针对性', '反馈的激励性'],
    answer: [0, 1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在设计过程中，为了提高产品的适应性，需要考虑的因素有( )。',
    options: ['用户的需求和期望', '技术的可行性和成本', '市场竞争状况', '法律法规的要求', '文化和社会背景'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '电阻式触摸技术的缺点包括( )。',
    options: ['灵敏度低', '耐久性差', '透光性差', '抗干扰能力弱', '价格昂贵'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '语音交互设计的关键细节包括( )。',
    options: ['语音识别准确性', '自然语言理解能力', '语音合成自然度', '用户界面设计', '语音信号处理技术'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '增强现实 AR 在人工智能训练师的工作中，可以用于提升训练效果的方面包括( )。',
    options: ['提供实时数据可视化', '模拟复杂环境下的操作', '实现远程协同培训', '增强学习者的记忆力', '减少实际操作的风险'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在虚拟现实 VR 交互设计中，( )方法可以提高用户的沉浸感。',
    options: ['使用高质量的图像和视频', '提供真实的触觉反馈', '采用自然的手势和动作交互', '限制视野范围', '增加声音效果'],
    answer: [0, 1, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '多模态交互的综合设计需要考虑( )方面。',
    options: ['用户体验', '界面设计', '交互逻辑', '技术支持', '数据分析'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '用户研究方法论的目的是( )。',
    options: ['了解用户需求', '优化产品设计', '提高用户体验', '评估产品性能', '预测市场趋势'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在人工智能训练师的工作流程中，原型设计与测试的实施过程包括( )。',
    options: ['需求分析', '模型构建', '数据准备', '算法优化', '系统测试'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.测试.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在用户测试阶段，人工智能训练师应确保测试环境的( )以避免对用户产生误导。',
    options: ['真实性', '控制性', '一致性', '安全性', '多样性'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '通过( )，使 AI 系统更好地理解用户。',
    options: ['开发高级的自然语言处理技术', '集成面部表情识别技术', '应用情感语义分析', '增加系统响应的延迟时间', '设计固定不变的交互模式'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.自然语言处理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '当用户向智能助手提问时，NLP 如何帮助 AI 理解问题并给出恰当的回答的原理是( )。',
    options: ['通过关键词匹配找到最相似的答案', '利用深度学习模型解析语句结构和上下文', '依靠预设的问答数据库', '通过语义理解捕捉问题的真实意图', '使用模式匹配技术识别问题类型'],
    answer: [1, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人机交互系统的性能评价标准通常包括( )。',
    options: ['响应时间', '准确性', '可靠性', '易用性', '安全性'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '用户中心的设计原则包括( )。',
    options: ['简洁明了的界面设计', '提供个性化服务', '确保用户隐私安全', '快速响应和高效操作', '提供多种支付方式'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在设计过程中，为了提高产品的可用性，应该遵循( )原则。',
    options: ['简洁明了', '一致性', '可预测性', '容错性', '用户控制与自由'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在设计 AI 助手的交互界面时，促进用户与 AI 进行有效沟通的关键因素是( )',
    options: ['使用复杂的图形界面确保信息的丰富性', '提供清晰的反馈机制，让用户知道 AI 正在处理请求', '设计直观的语音识别功能，使对话流畅', '限制用户输入，以简化 AI 的理解过程', '采用一致的视觉和语言风格，增强用户体验的一致性'],
    answer: [1, 2, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '当遇到与现有设计过程或预期目标相悖的用户反馈时，正确处理方式是( )。',
    options: ['直接忽略用户的反馈', '对用户反馈进行筛选和分类', '与用户进行进一步的沟通以理解他们的需求', '根据用户反馈调整产品设计', '将用户反馈作为产品开发的新思路'],
    answer: [1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.项目管理.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '任务分解的输出结果应该包括( )。',
    options: ['任务清单', '任务分解图', '任务责任分配表', '风险评估报告', '时间和资源计划'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在界面设计中，为了提高信息的可读性和易理解性，通常会采用( )哪些布局策略。',
    options: ['对比布局', '对齐布局', '重复布局', '亲密性布局', '层次感布局'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在使用情境的分析工具时，需要考虑的因素有( )。',
    options: ['用户的行为模式', '用户的使用频率', '用户的反馈信息', '用户的隐私数据', '用户的网络环境'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 Adobe XD 中，( )是创建原型的方法。',
    options: ['使用预设模板', '从 Photoshop 导入设计', '使用 Adobe Illustrator 设计', '手动绘制界面元素', '使用 Sketch 设计'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: 'Adobe XD 的视觉设计工具适用于( )场景。',
    options: ['移动应用设计', '网页设计', '平面设计', '用户体验设计', '广告设计'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id, tags.培训与教学.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在人工智能培训中，Axure RP 可以用来进行复杂交互模拟( )方面。',
    options: ['界面布局设计', '功能流程图绘制', '条件逻辑模拟', '数据驱动的动态内容展示', '用户界面动画效果'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在使用 Axure RP 进行原型设计时，条件逻辑设置可以用于实现( )交互特性。',
    options: ['显示或隐藏界面元素', '动态调整文本和图像内容', '导航到不同的页面', '数据驱动的表单验证', '生成基于用户输入的动态列表'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在使用 Balsamiq Mockups 进行低保真设计时，( )操作可以帮助你更好地组织和管理你的设计元素。',
    options: ['使用画布上的网格来对齐元素', '为不同的页面或屏幕创建单独的画布', '使用图层来管理不同层次的设计元素', '通过颜色编码来区分不同类型的元素', '将常用的组件保存到组件库中以方便重复使用'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: 'Figma 的设计系统支持( )功能。',
    options: ['组件化设计', '响应式设计', '颜色和字体管理', '图标库', '文档导出'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.人机交互与UI.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 Marvel 的简单交互设计中，用户可以通过( )方式进行操作。',
    options: ['点击', '滑动', '长按', '拖拽', '语音控制'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: 'Marvel 的设计评审功能可以帮助设计师们发现设计中的( )问题。',
    options: ['布局不合理', '色彩搭配不协调', '用户体验不佳', '功能实现不完整', '设计风格与品牌定位不符'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: 'Marvel 的响应式设计预览中，( )功能可以帮助用户在不同设备上获得最佳体验。',
    options: ['自动调整页面布局', '提供多种主题颜色', '支持触摸操作', '提供个性化设置', '支持语音输入'],
    answer: [0, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 Sketch 的插件生态系统中，( )插件可以帮助设计师提高工作效率。',
    options: ['Sketch Measure', 'Artboard Snapping', 'Color Palettes', 'Auto Layout', '3D 渲染引擎'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.设计工具.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在 Sketch 中，矢量图形的编辑可以通过( )来实现精确的节点控制。',
    options: ['直接选择工具', '钢笔工具', '矢量网格工具', '剪刀工具', '放大镜工具'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '编写培训讲义时，应遵循( )原则。',
    options: ['针对性原则', '实用性原则', '系统性原则', '创新性原则', '主观性原则'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '为了提高培训效果，培训讲义结构设计的方法是( )。',
    options: ['引入部分', '主体部分', '结尾部分', '总结部分', '互动环节'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在人工智能领域，成为一名合格的人工智能训练师需要具备( )能力或知识。',
    options: ['理解并掌握机器学习和深度学习的基本原理', '能够设计并实现有效的数据预处理和特征工程策略', '精通至少一种编程语言，如 Python，并能使用相关库进行数据处理和模型训练', '了解人工智能伦理、隐私保护和相关法律法规', '拥有优秀的沟通技巧，能够清晰地向非技术人员解释复杂概念'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在领导力培训中，常用的方法包括( )。',
    options: ['自我评估工具', '360 度反馈', '情景模拟', '角色扮演', '心理测试'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '( )培训方法可以帮助员工更好地理解和掌握新知识。',
    options: ['讲授法', '演示法', '模拟练习法', '独立学习', '案例分析法'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人工智能训练师的培训方法中，( )可能导致培训效果不佳。',
    options: ['培训过程中缺乏实践机会', '培训课程内容不够全面', '培训师缺乏行业经验', '培训方法过于理论化', '学员学习动力不足'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.培训与教学.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在选择培训方法时，需要考虑的因素包括( )。',
    options: ['培训目标', '学员特点', '培训资源', '培训时间', '培训成本'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '人工智能训练师在数据采集和处理流程中，需要关注( )以确保数据质量。',
    options: ['数据的多样性', '数据的时效性', '数据的完整性', '数据的准确性', '数据的标注质量'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在数据处理过程中，( )步骤可能会导致数据丢失或错误。',
    options: ['数据清洗', '数据转换', '数据加载', '数据计算', '数据可视化'],
    answer: [0, 1, 2],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在数据采集和处理流程中，常见的错误包括( )。',
    options: ['数据格式不一致', '数据缺失', '数据处理速度慢', '数据存储不安全', '数据分析不准确'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据采集.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在解决数据采集和处理问题时，( )方法可以帮助我们提高数据质量。',
    options: ['使用专业的数据采集工具', '对数据进行清洗和预处理', '对数据进行验证和校对', '对数据进行加密和安全存储', '对数据进行备份和恢复'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.业务与流程.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据标注流程中的重点分析包括( )。',
    options: ['数据清洗与预处理', '标注指南的制定', '标注人员的培训与管理', '数据质量控制', '数据的存储与维护'],
    answer: [0, 1, 2, 3],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '数据标注过程中，解决标注人员水平参差不齐问题的方法有( )。',
    options: ['提供统一的培训资料', '对标注人员进行定期考核', '采用自动化的标注工具', '增加标注人员的数量', '提高标注任务的难度'],
    answer: [0, 1],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.培训与教学.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '标注人员培训不足，可能会带来的负面影响包括( )。',
    options: ['标注结果出现较多的错误', '标注人员对标注任务失去兴趣', '数据标注工具的更新频率加快', '项目延期，无法按时交付', '标注成本因返工而增加'],
    answer: [0, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

allCards.push({
  id: cid(), packId: "", tagIds: [tags.多选题.id, tags.数据标注.id],
  type: 'question',
  content: {
    type: 'multiple',
    question: '在解决数据标注问题时，( )可以提高标注的准确性。',
    options: ['选择经验丰富的标注人员', '采用多人协作的标注方式', '使用专业的标注工具', '对标注人员进行严格的考核', '对标注结果进行多次审核'],
    answer: [0, 1, 2, 3, 4],
  } as QuestionContent,
  createdAt: Date.now(),
})

function assignPackId(packId: string) {
  for (const c of allCards) { c.packId = packId }
}

export function createTheoryPack(): CardPack {
  const packId = 'pack_theory'
  assignPackId(packId)
  return {
    id: packId,
    name: '人工智能训练师三级 理论知识',
    description: '第3部分-理论知识复习题（单选/多选/判断）',
    tags: Object.values(tags),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }
}

export function getTheoryCards(): CardItem[] {
  return allCards
}