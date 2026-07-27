import type { CardItem, CardPack, Tag, KnowledgeContent, QuestionContent, QuestionType } from '../types'

let _tagId = 0
function tid(): string { return `tag_${++_tagId}` }

let _cardId = 0
function cid(): string { return `card_${++_cardId}` }

const T = (id: string, name: string): Tag => ({ id, name })

const tags = {
  数据读取与保存: T(tid(), '数据读取与保存'),
  数据清洗与预处理: T(tid(), '数据清洗与预处理'),
  数据筛选与查询: T(tid(), '数据筛选与查询'),
  数据分组与聚合: T(tid(), '数据分组与聚合'),
  数据统计与描述: T(tid(), '数据统计与描述'),
  数据合并与连接: T(tid(), '数据合并与连接'),
  数据可视化: T(tid(), '数据可视化'),
  机器学习: T(tid(), '机器学习'),
  深度学习与图像处理: T(tid(), '深度学习与图像处理'),
}

const tagList = Object.values(tags)

const E = (s: string) => s

function K(tag: Tag, title: string, description: string, code: string, notes?: string): CardItem {
  return {
    id: cid(), packId: '', tagIds: [tag.id],
    type: 'knowledge',
    content: { title, description, code, notes } as KnowledgeContent,
    createdAt: Date.now(),
  }
}

function Q(tag: Tag, type: QuestionType, question: string, options: string[], answer: number | number[], explanation?: string): CardItem {
  return {
    id: cid(), packId: '', tagIds: [tag.id],
    type: 'question',
    content: { type, question, options, answer, explanation } as QuestionContent,
    createdAt: Date.now(),
  }
}

const allCardItems: CardItem[] = []

function add(...cards: CardItem[]) {
  allCardItems.push(...cards)
}

add(
  K(tags.数据读取与保存, 'pd.read_csv()', '读取 CSV 文件到 DataFrame', E`pd.read_csv("file_name.csv", encoding='gbk')`),
  K(tags.数据读取与保存, 'data.to_csv()', '将 DataFrame 保存为 CSV 文件', E`data.to_csv("file_name.csv", index=False)`),
  K(tags.数据读取与保存, 'pd.read_excel()', '读取 Excel 文件到 DataFrame', E`pd.read_excel("file_name.xlsx")`),
  Q(tags.数据读取与保存, 'single', '以下哪个函数用于读取 CSV 文件到 DataFrame？', ['pd.read_csv()', 'pd.read_excel()', 'data.to_csv()', 'pd.concat()'], 0),
  Q(tags.数据读取与保存, 'single', '将 DataFrame 保存为 CSV 文件时应使用哪个函数？', ['data.to_csv()', 'pd.read_csv()', 'data.to_excel()', 'data.save()'], 0),
  Q(tags.数据读取与保存, 'true-false', 'pd.read_csv() 只能读取 UTF-8 编码的 CSV 文件', ['正确', '错误'], 1, '可通过 encoding 参数指定编码'),
)

add(
  K(tags.数据清洗与预处理, 'data.fillna()', '填充缺失值', E`data.fillna(method='ffill', inplace=True)\ndata.fillna(method='bfill', inplace=True)`),
  K(tags.数据清洗与预处理, 'data.dropna()', '删除含有缺失值的行', E`data.dropna()\ndata.dropna(subset=['column'])`),
  K(tags.数据清洗与预处理, 'data.astype()', '转换数据类型', E`data['column'].astype(int)\ndata['column'].astype(float)`),
  K(tags.数据清洗与预处理, 'pd.get_dummies()', '将分类变量转换为哑变量（数值变量）', E`pd.get_dummies(data['column'])`),
  K(tags.数据清洗与预处理, 'pd.to_datetime()', '转换为日期时间格式', E`pd.to_datetime(data['date_column'])`),
  K(tags.数据清洗与预处理, 'pd.to_numeric()', '转换为数值格式', E`pd.to_numeric(data['column'], errors='coerce')`),
  K(tags.数据清洗与预处理, 'data.drop()', '删除指定的行或列', E`data.drop(columns=['column1', 'column2'])`),
  K(tags.数据清洗与预处理, 'data.rename()', '重命名列名', E`data.rename(columns={'old_name': 'new_name'})`),
  K(tags.数据清洗与预处理, 'data.drop_duplicates()', '删除重复行', E`data.drop_duplicates()`),
  K(tags.数据清洗与预处理, 'data.duplicated()', '检查重复行', E`data.duplicated().sum()`),
  K(tags.数据清洗与预处理, 'StandardScaler', '数据标准化（均值 0, 方差 1）', E`scaler = StandardScaler()\ndata = scaler.fit_transform(data)`, 'sklearn.preprocessing'),
  K(tags.数据清洗与预处理, 'MinMaxScaler', '数据归一化（缩放到 0-1 范围）', E`scaler = MinMaxScaler()\ndata = scaler.fit_transform(data)`, 'sklearn.preprocessing'),
  K(tags.数据清洗与预处理, 'LabelEncoder', '标签编码（将类别转换为数值）', E`encoder = LabelEncoder()\ndata = encoder.fit_transform(labels)`, 'sklearn.preprocessing'),
  K(tags.数据清洗与预处理, '手动标准化', '手动数据标准化（Z-score）', E`(data - data.mean()) / data.std()`, 'numpy/pandas'),
  Q(tags.数据清洗与预处理, 'single', '以下哪个函数用于填充缺失值？', ['data.fillna()', 'data.dropna()', 'data.astype()', 'data.replace()'], 0),
  Q(tags.数据清洗与预处理, 'single', '哪方法可将分类变量转换为数值型哑变量？', ['pd.get_dummies()', 'LabelEncoder()', 'StandardScaler()', 'pd.to_numeric()'], 0),
  Q(tags.数据清洗与预处理, 'multiple', '哪些属于数据标准化/归一化方法？', ['StandardScaler', 'MinMaxScaler', 'LabelEncoder', '手动标准分'], [0, 1, 3]),
  Q(tags.数据清洗与预处理, 'true-false', 'data.dropna() 默认删除所有含有缺失值的行', ['正确', '错误'], 0),
  Q(tags.数据清洗与预处理, 'single', 'pd.to_numeric() 的 errors 参数设为哪个值可强制转换并将错误设为 NaN？', ['raise', 'ignore', 'coerce', 'skip'], 2),
)

add(
  K(tags.数据筛选与查询, 'np.where()', '条件选择，类似 Excel 的 IF 函数', E`np.where(condition, value_if_true, value_if_false)`),
  K(tags.数据筛选与查询, 'data.isin()', '检查值是否在列表中', E`data[data['column'].isin([value1, value2, value3])]`),
  K(tags.数据筛选与查询, 'data.between()', '选择在某个范围内的值', E`data[data['column'].between(18, 70)]`),
  Q(tags.数据筛选与查询, 'single', '哪种函数类似 Excel IF 用于条件选择？', ['np.where()', 'data.isin()', 'data.between()', 'data.query()'], 0),
  Q(tags.数据筛选与查询, 'true-false', 'data.isin() 用于检查某列值是否在指定列表中', ['正确', '错误'], 0),
)

add(
  K(tags.数据分组与聚合, 'data.groupby()', '按指定列分组数据并计算', E`data.groupby('column')['value_column'].mean()\ndata.groupby('column').agg({'col1':'mean','col2':'sum'})\ndata.groupby('column')[['col1','col2']].mean()`),
  K(tags.数据分组与聚合, 'pd.cut()', '将连续数据分箱成离散区间', E`pd.cut(data, bins=[0,18,35,60,100], labels=['child','young','adult','elderly'], right=False)`),
  Q(tags.数据分组与聚合, 'single', 'groupby 后哪个方法可对不同列应用不同聚合函数？', ['.agg()', '.mean()', '.sum()', '.transform()'], 0),
  Q(tags.数据分组与聚合, 'true-false', 'pd.cut() 用于将连续数据分箱为离散区间', ['正确', '错误'], 0),
)

add(
  K(tags.数据统计与描述, 'data.value_counts()', '对象列中唯一值的计数', E`data['column'].value_counts()`),
  K(tags.数据统计与描述, 'len()', '获取对象长度', E`len(data) 或 len(data['column'])`),
  K(tags.数据统计与描述, 'data.sum()', '计算总和', E`data['column'].sum() 或 data.sum()`),
  K(tags.数据统计与描述, 'data.isnull().sum()', '计算每列的缺失值数量', E`data.isnull().sum()`),
  K(tags.数据统计与描述, 'data.quantile()', '计算分位数', E`data['column'].quantile(0.25)\ndata['column'].quantile(0.75)`),
  K(tags.数据统计与描述, 'IQR 计算', '计算四分位距', E`Q1 = data['column'].quantile(0.25)\nQ3 = data['column'].quantile(0.75)\nIQR = Q3 - Q1`),
  K(tags.数据统计与描述, 'data.head()', '查看前几行数据', E`data.head(5)`),
  K(tags.数据统计与描述, 'data.info()', '查看数据框基本信息', E`data.info()`),
  K(tags.数据统计与描述, 'data.describe()', '生成描述性统计信息', E`data.describe()`),
  K(tags.数据统计与描述, 'data.shape', '获取数据框维度（行数, 列数）', E`row_count = data.shape[0]`),
  Q(tags.数据统计与描述, 'single', '查看 DataFrame 简要信息的正确函数是？', ['data.info()', 'data.describe()', 'data.head()', 'data.shape'], 0),
  Q(tags.数据统计与描述, 'single', '计算每列缺失值数量的正确方法是？', ['data.isnull().sum()', 'data.isna().count()', 'data.missing().sum()', 'data.isnull().count()'], 0),
  Q(tags.数据统计与描述, 'true-false', 'data.shape 返回 (行数, 列数) 元组', ['正确', '错误'], 0),
)

add(
  K(tags.数据合并与连接, 'pd.concat()', '沿特定轴连接数据框', E`pd.concat([X, y], axis=0/1)`),
  Q(tags.数据合并与连接, 'single', 'pd.concat() 中 axis=1 表示什么？', ['按行拼接', '按列拼接', '按索引拼接', '按值拼接'], 1),
)

add(
  K(tags.数据可视化, 'data.plot()', '创建柱状图', E`data.plot(kind='bar', stacked=True)`),
  K(tags.数据可视化, 'plt.scatter()', '创建散点图', E`plt.scatter(x, y)`),
  K(tags.数据可视化, 'plot.pie()', '创建饼图', E`data.plot.pie()`),
  Q(tags.数据可视化, 'single', '创建散点图应使用哪个函数？', ['plt.scatter()', 'data.plot(kind="bar")', 'data.plot.pie()', 'plt.plot()'], 0),
)

add(
  K(tags.机器学习, 'train_test_split', '划分训练集和测试集', E`X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)`),
  K(tags.机器学习, '模型初始化', '初始化机器学习模型', E`model = LogisticRegression(max_iter=1000)\nmodel = RandomForestRegressor(n_estimators=100)\nmodel = xgboost.XGBRegressor(n_estimators=100)`),
  K(tags.机器学习, 'model.fit()', '训练模型', E`model.fit(X_train, y_train)`),
  K(tags.机器学习, 'model.predict()', '使用模型进行预测', E`y_pred = model.predict(X_test)`),
  K(tags.机器学习, 'SMOTE', '处理类别不平衡问题', E`X_resampled, y_resampled = SMOTE().fit_resample(X_train, y_train)`, 'imbalanced-learn'),
  K(tags.机器学习, 'Pipeline', '创建数据处理和建模流水线', E`pipeline = Pipeline([('scaler', StandardScaler()), ('model', LogisticRegression())])`),
  K(tags.机器学习, '模型保存与加载', '保存和加载训练好的模型', E`pickle.dump(model, open('model.pkl', 'wb'))\njoblib.dump(model, open('model.pkl', 'wb'))`),
  Q(tags.机器学习, 'single', 'train_test_split 的 test_size=0.2 表示？', ['训练集占 20%', '测试集占 20%', '验证集占 20%', '交叉验证折数'], 1),
  Q(tags.机器学习, 'multiple', '哪些是常用的模型保存/序列化方式？', ['pickle', 'joblib', 'json', 'csv'], [0, 1]),
)

add(
  K(tags.深度学习与图像处理, 'onnxruntime.InferenceSession', '加载 ONNX 模型', E`session = ort.InferenceSession('model.onnx')`),
  K(tags.深度学习与图像处理, 'session.run()', '运行模型推理', E`output = session.run(output_name, {input_name: input_data})`),
  K(tags.深度学习与图像处理, 'session.get_inputs()', '获取模型输入信息', E`input_name = session.get_inputs()[0].name`),
  K(tags.深度学习与图像处理, 'Image.open()', '打开图像文件并转换格式', E`image = Image.open('image.jpg').convert('RGB')`),
  K(tags.深度学习与图像处理, 'image.resize()', '调整图像尺寸', E`image = image.resize((width, height))`),
  K(tags.深度学习与图像处理, 'softmax()', '计算 softmax 概率', E`probabilities = scipy.special.softmax(probabilities[0])`),
  K(tags.深度学习与图像处理, 'np.argmax()', '获取最大值的索引', E`predicted_class = np.argmax(probabilities[0])`),
  K(tags.深度学习与图像处理, 'str.strip()', '去除字符串两端空白字符', E`cleaned_name = name.strip()`),
  K(tags.深度学习与图像处理, 'cv2.imread()', '读取图像文件', E`image = cv2.imread('image.jpg')`),
  K(tags.深度学习与图像处理, 'cv2.resize()', '调整图像尺寸', E`image = cv2.resize(image, (width, height))`),
  K(tags.深度学习与图像处理, 'np.expand_dims()', '扩展数组维度', E`image = np.expand_dims(image, axis=0)`),
  Q(tags.深度学习与图像处理, 'single', '获取 ONNX 模型输入名称的函数是？', ['session.get_inputs()', 'session.get_outputs()', 'session.run()', 'ort.InferenceSession()'], 0),
  Q(tags.深度学习与图像处理, 'true-false', 'np.argmax() 获取数组中的最大值', ['正确', '错误'], 1, 'np.argmax() 获取最大值索引，非最大值本身'),
)

function assignPackId(packId: string) {
  for (const c of allCardItems) {
    c.packId = packId
  }
}

export function createAITrainerPack(): CardPack {
  const packId = 'pack_ai_trainer'
  assignPackId(packId)
  return {
    id: packId,
    name: '人工智能训练师三级',
    description: '实操知识卡片 - pandas/sklearn/深度学习',
    tags: tagList,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }
}

export function getAITrainerCards(): CardItem[] {
  return allCardItems
}
