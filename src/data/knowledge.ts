import type { KnowledgeMeta, QuestionMeta, Deck, QuestionType } from '../types'

let _cardId = 0
function nextId(prefix: string = 'k'): string {
  return `${prefix}_${++_cardId}`
}

function knowledge(
  deckId: string,
  title: string,
  description: string,
  code: string,
  notes?: string,
): KnowledgeMeta {
  return {
    id: nextId('k'),
    deckId,
    front: { title, description },
    back: { code, notes },
  }
}

function question(
  deckId: string,
  type: QuestionType,
  q: string,
  options: string[],
  answer: number | number[],
  explanation?: string,
): QuestionMeta {
  return {
    id: nextId('q'),
    deckId,
    type,
    question: q,
    options,
    answer,
    explanation,
  }
}

const deck_01: Deck = { id: 'd1', title: '数据读取与保存', cardIds: [] }
const deck_02: Deck = { id: 'd2', title: '数据清洗与预处理', cardIds: [] }
const deck_03: Deck = { id: 'd3', title: '数据筛选与查询', cardIds: [] }
const deck_04: Deck = { id: 'd4', title: '数据分组与聚合', cardIds: [] }
const deck_05: Deck = { id: 'd5', title: '数据统计与描述', cardIds: [] }
const deck_06: Deck = { id: 'd6', title: '数据合并与连接', cardIds: [] }
const deck_07: Deck = { id: 'd7', title: '数据可视化', cardIds: [] }
const deck_08: Deck = { id: 'd8', title: '机器学习', cardIds: [] }
const deck_09: Deck = { id: 'd9', title: '深度学习与图像处理', cardIds: [] }

const E = (s: string) => s

const k1_1 = knowledge(deck_01.id, 'pd.read_csv()', '读取 CSV 文件到 DataFrame', E`pd.read_csv("file_name.csv", encoding='gbk')`)
const k1_2 = knowledge(deck_01.id, 'data.to_csv()', '将 DataFrame 保存为 CSV 文件', E`data.to_csv("file_name.csv", index=False)`)
const k1_3 = knowledge(deck_01.id, 'pd.read_excel()', '读取 Excel 文件到 DataFrame', E`pd.read_excel("file_name.xlsx")`)
deck_01.cardIds.push(k1_1.id, k1_2.id, k1_3.id)

const q1_1 = question(deck_01.id, 'single', '以下哪个函数用于读取 CSV 文件到 DataFrame？', ['pd.read_csv()', 'pd.read_excel()', 'data.to_csv()', 'pd.concat()'], 0)
const q1_2 = question(deck_01.id, 'single', '将 DataFrame 保存为 CSV 文件时应使用哪个函数？', ['data.to_csv()', 'pd.read_csv()', 'data.to_excel()', 'data.save()'], 0)
const q1_3 = question(deck_01.id, 'true-false', 'pd.read_csv() 只能读取 UTF-8 编码的 CSV 文件', ['正确', '错误'], 1, '可以通过 encoding 参数指定编码，如 encoding="gbk"')
deck_01.cardIds.push(q1_1.id, q1_2.id, q1_3.id)

const k2_1 = knowledge(deck_02.id, 'data.fillna()', '填充缺失值', E`data.fillna(method='ffill', inplace=True)\ndata.fillna(method='bfill', inplace=True)`)
const k2_2 = knowledge(deck_02.id, 'data.dropna()', '删除含有缺失值的行', E`data.dropna()\ndata.dropna(subset=['column'])`)
const k2_3 = knowledge(deck_02.id, 'data.astype()', '转换数据类型', E`data['column'].astype(int)\ndata['column'].astype(float)`)
const k2_4 = knowledge(deck_02.id, 'pd.get_dummies()', '将分类变量转换为哑变量', E`pd.get_dummies(data['column'])`)
const k2_5 = knowledge(deck_02.id, 'pd.to_datetime()', '转换为日期时间格式', E`pd.to_datetime(data['date_column'])`)
const k2_6 = knowledge(deck_02.id, 'pd.to_numeric()', '转换为数值格式', E`pd.to_numeric(data['column'], errors='coerce')`)
const k2_7 = knowledge(deck_02.id, 'data.drop()', '删除指定的行或列', E`data.drop(columns=['column1', 'column2'])`)
const k2_8 = knowledge(deck_02.id, 'data.rename()', '重命名列名', E`data.rename(columns={'old_name': 'new_name'})`)
const k2_9 = knowledge(deck_02.id, 'data.drop_duplicates()', '删除重复行', E`data.drop_duplicates()`)
const k2_10 = knowledge(deck_02.id, 'data.duplicated()', '检查重复行', E`data.duplicated().sum()`)
const k2_11 = knowledge(deck_02.id, 'StandardScaler', '数据标准化（均值 0, 方差 1）', E`scaler = StandardScaler()\ndata = scaler.fit_transform(data)`, '来自 sklearn.preprocessing')
const k2_12 = knowledge(deck_02.id, 'MinMaxScaler', '数据归一化（缩放到 0-1 范围）', E`scaler = MinMaxScaler()\ndata = scaler.fit_transform(data)`, '来自 sklearn.preprocessing')
const k2_13 = knowledge(deck_02.id, 'LabelEncoder', '标签编码（将类别转换为数值）', E`encoder = LabelEncoder()\ndata = encoder.fit_transform(labels)`, '来自 sklearn.preprocessing')
const k2_14 = knowledge(deck_02.id, '手动标准化', '手动数据标准化（Z-score）', E`(data - data.mean()) / data.std()`, '使用 numpy/pandas')
deck_02.cardIds.push(k2_1.id, k2_2.id, k2_3.id, k2_4.id, k2_5.id, k2_6.id, k2_7.id, k2_8.id, k2_9.id, k2_10.id, k2_11.id, k2_12.id, k2_13.id, k2_14.id)

const q2_1 = question(deck_02.id, 'single', '以下哪个函数用于填充缺失值？', ['data.fillna()', 'data.dropna()', 'data.astype()', 'data.replace()'], 0)
const q2_2 = question(deck_02.id, 'single', '以下哪种方法可以将分类变量转换为数值型哑变量？', ['pd.get_dummies()', 'LabelEncoder()', 'StandardScaler()', 'pd.to_numeric()'], 0)
const q2_3 = question(deck_02.id, 'multiple', '以下哪些方法属于数据标准化/归一化方法？（多选）', ['StandardScaler (均值 0, 方差 1)', 'MinMaxScaler (缩放到 0-1)', 'LabelEncoder', '手动 (data - mean) / std'], [0, 1, 3])
const q2_4 = question(deck_02.id, 'true-false', 'data.dropna() 默认删除所有含有缺失值的行', ['正确', '错误'], 0)
const q2_5 = question(deck_02.id, 'single', 'pd.to_numeric() 中的 errors 参数设为哪个值可以强制转换并将错误设为 NaN？', ['raise', 'ignore', 'coerce', 'skip'], 2)
deck_02.cardIds.push(q2_1.id, q2_2.id, q2_3.id, q2_4.id, q2_5.id)

const k3_1 = knowledge(deck_03.id, 'np.where()', '条件选择，类似 Excel 的 IF 函数', E`np.where(condition, value_if_true, value_if_false)`)
const k3_2 = knowledge(deck_03.id, 'data.isin()', '检查值是否在列表中', E`data[data['column'].isin([value1, value2, value3])]`)
const k3_3 = knowledge(deck_03.id, 'data.between()', '选择在某个范围内的值', E`data[data['column'].between(18, 70)]`)
deck_03.cardIds.push(k3_1.id, k3_2.id, k3_3.id)

const q3_1 = question(deck_03.id, 'single', '以下哪个函数类似 Excel 的 IF 函数用于条件选择？', ['np.where()', 'data.isin()', 'data.between()', 'data.query()'], 0)
const q3_2 = question(deck_03.id, 'true-false', 'data.isin() 用于检查某列的值是否在指定列表中', ['正确', '错误'], 0)
deck_03.cardIds.push(q3_1.id, q3_2.id)

const k4_1 = knowledge(deck_04.id, 'data.groupby()', '按指定列分组数据并计算', E`data.groupby('column')['value_column'].mean()\ndata.groupby('column').agg({'col1': 'mean', 'col2': 'sum'})\ndata.groupby('column')[['col1', 'col2']].mean()`)
const k4_2 = knowledge(deck_04.id, 'pd.cut()', '将连续数据分箱成离散区间', E`pd.cut(data, bins=[0, 18, 35, 60, 100], labels=['child', 'young', 'adult', 'elderly'], right=False)`)
deck_04.cardIds.push(k4_1.id, k4_2.id)

const q4_1 = question(deck_04.id, 'single', '在 groupby 之后使用哪个方法可以对不同列应用不同聚合函数？', ['.agg()', '.mean()', '.sum()', '.transform()'], 0)
const q4_2 = question(deck_04.id, 'true-false', 'pd.cut() 用于将连续数据分箱为离散区间', ['正确', '错误'], 0)
deck_04.cardIds.push(q4_1.id, q4_2.id)

const k5_1 = knowledge(deck_05.id, 'data.value_counts()', '对象列中唯一值的计数', E`data['column'].value_counts()`)
const k5_2 = knowledge(deck_05.id, 'len()', '获取对象长度', E`len(data) 或 len(data['column'])`)
const k5_3 = knowledge(deck_05.id, 'data.sum()', '计算总和', E`data['column'].sum() 或 data.sum()`)
const k5_4 = knowledge(deck_05.id, 'data.isnull().sum()', '计算每列的缺失值数量', E`data.isnull().sum()`)
const k5_5 = knowledge(deck_05.id, 'data.quantile()', '计算分位数', E`data['column'].quantile(0.25)  # Q1\ndata['column'].quantile(0.75)  # Q3`)
const k5_6 = knowledge(deck_05.id, 'IQR 计算', '计算四分位距', E`Q1 = data['column'].quantile(0.25)\nQ3 = data['column'].quantile(0.75)\nIQR = Q3 - Q1`)
const k5_7 = knowledge(deck_05.id, 'data.head()', '查看前几行数据', E`data.head(5)  # 查看前 5 行`)
const k5_8 = knowledge(deck_05.id, 'data.info()', '查看数据框基本信息', E`data.info()`)
const k5_9 = knowledge(deck_05.id, 'data.describe()', '生成描述性统计信息', E`data.describe()`)
const k5_10 = knowledge(deck_05.id, 'data.shape', '获取数据框维度（行数, 列数）', E`row_count = data.shape[0]`)
deck_05.cardIds.push(k5_1.id, k5_2.id, k5_3.id, k5_4.id, k5_5.id, k5_6.id, k5_7.id, k5_8.id, k5_9.id, k5_10.id)

const q5_1 = question(deck_05.id, 'single', '以下哪个函数用于查看 DataFrame 的简要信息（列名、非空值数、数据类型）？', ['data.info()', 'data.describe()', 'data.head()', 'data.shape'], 0)
const q5_2 = question(deck_05.id, 'single', '计算 DataFrame 每列缺失值数量的正确方法是？', ['data.isnull().sum()', 'data.isna().count()', 'data.missing().sum()', 'data.isnull().count()'], 0)
const q5_3 = question(deck_05.id, 'true-false', 'data.shape 返回一个元组 (行数, 列数)', ['正确', '错误'], 0)
deck_05.cardIds.push(q5_1.id, q5_2.id, q5_3.id)

const k6_1 = knowledge(deck_06.id, 'pd.concat()', '沿特定轴连接数据框', E`pd.concat([X, y], axis=0/1)`)
deck_06.cardIds.push(k6_1.id)

const q6_1 = question(deck_06.id, 'single', 'pd.concat() 中 axis=1 表示什么？', ['按行拼接', '按列拼接', '按索引拼接', '按值拼接'], 1)
deck_06.cardIds.push(q6_1.id)

const k7_1 = knowledge(deck_07.id, 'data.plot()', '创建柱状图', E`data.plot(kind='bar', stacked=True)`)
const k7_2 = knowledge(deck_07.id, 'plt.scatter()', '创建散点图', E`plt.scatter(x, y)`)
const k7_3 = knowledge(deck_07.id, 'plot.pie()', '创建饼图', E`data.plot.pie()`)
deck_07.cardIds.push(k7_1.id, k7_2.id, k7_3.id)

const q7_1 = question(deck_07.id, 'single', '创建散点图应使用哪个函数？', ['plt.scatter()', 'data.plot(kind="bar")', 'data.plot.pie()', 'plt.plot()'], 0)
deck_07.cardIds.push(q7_1.id)

const k8_1 = knowledge(deck_08.id, 'train_test_split', '划分训练集和测试集', E`X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)`)
const k8_2 = knowledge(deck_08.id, '模型初始化', '初始化机器学习模型', E`model = LogisticRegression(max_iter=1000)\nmodel = RandomForestRegressor(n_estimators=100)\nmodel = xgboost.XGBRegressor(n_estimators=100)`)
const k8_3 = knowledge(deck_08.id, 'model.fit()', '训练模型', E`model.fit(X_train, y_train)`)
const k8_4 = knowledge(deck_08.id, 'model.predict()', '使用模型进行预测', E`y_pred = model.predict(X_test)`)
const k8_5 = knowledge(deck_08.id, 'SMOTE', '处理类别不平衡问题', E`X_resampled, y_resampled = SMOTE().fit_resample(X_train, y_train)`)
const k8_6 = knowledge(deck_08.id, 'Pipeline', '创建数据处理和建模的流水线', E`pipeline = Pipeline([('scaler', StandardScaler()), ('model', LogisticRegression())])`)
const k8_7 = knowledge(deck_08.id, '模型保存与加载', '保存和加载训练好的模型', E`with open('model_name', 'w') as file:\n    pickle.dump(model, open('model.pkl', 'wb'))\n    joblib.dump(model, open('model.pkl', 'wb'))`)
deck_08.cardIds.push(k8_1.id, k8_2.id, k8_3.id, k8_4.id, k8_5.id, k8_6.id, k8_7.id)

const q8_1 = question(deck_08.id, 'single', 'train_test_split 中 test_size 参数为 0.2 表示？', ['训练集占 20%', '测试集占 20%', '验证集占 20%', '交叉验证折数为 20%'], 1)
const q8_2 = question(deck_08.id, 'multiple', '以下哪些是常用的模型保存/序列化方式？（多选）', ['pickle', 'joblib', 'json', 'csv'], [0, 1])
deck_08.cardIds.push(q8_1.id, q8_2.id)

const k9_1 = knowledge(deck_09.id, 'onnxruntime.InferenceSession', '加载 ONNX 模型', E`session = ort.InferenceSession('model.onnx')`)
const k9_2 = knowledge(deck_09.id, 'session.run()', '运行模型推理', E`output = session.run(output_name, {input_name: input_data})`)
const k9_3 = knowledge(deck_09.id, 'session.get_inputs()', '获取模型输入信息', E`input_name = session.get_inputs()[0].name`)
const k9_4 = knowledge(deck_09.id, 'Image.open()', '打开图像文件并转换格式', E`image = Image.open('image.jpg').convert('RGB')`)
const k9_5 = knowledge(deck_09.id, 'image.resize()', '调整图像尺寸', E`image = image.resize((width, height))`)
const k9_6 = knowledge(deck_09.id, 'softmax()', '计算 softmax 概率', E`probabilities = scipy.special.softmax(probabilities[0])`)
const k9_7 = knowledge(deck_09.id, 'np.argmax()', '获取最大值的索引', E`predicted_class = np.argmax(probabilities[0])`)
const k9_8 = knowledge(deck_09.id, 'str.strip()', '去除字符串两端空白字符', E`cleaned_name = name.strip()`)
const k9_9 = knowledge(deck_09.id, 'cv2.imread()', '读取图像文件', E`image = cv2.imread('image.jpg')`)
const k9_10 = knowledge(deck_09.id, 'cv2.resize()', '调整图像尺寸', E`image = cv2.resize(image, (width, height))`)
const k9_11 = knowledge(deck_09.id, 'np.expand_dims()', '扩展数组维度', E`image = np.expand_dims(image, axis=0)`)
deck_09.cardIds.push(k9_1.id, k9_2.id, k9_3.id, k9_4.id, k9_5.id, k9_6.id, k9_7.id, k9_8.id, k9_9.id, k9_10.id, k9_11.id)

const q9_1 = question(deck_09.id, 'single', '以下哪个函数用于获取 ONNX 模型的输入名称？', ['session.get_inputs()', 'session.get_outputs()', 'session.run()', 'ort.InferenceSession()'], 0)
const q9_2 = question(deck_09.id, 'true-false', 'np.argmax() 用于获取数组中的最大值', ['正确', '错误'], 1, 'np.argmax() 获取的是最大值的索引，而非最大值本身')
deck_09.cardIds.push(q9_1.id, q9_2.id)

export const allDecks: Deck[] = [
  deck_01, deck_02, deck_03, deck_04, deck_05,
  deck_06, deck_07, deck_08, deck_09,
]

export const allKnowledgeCards: KnowledgeMeta[] = [
  k1_1, k1_2, k1_3,
  k2_1, k2_2, k2_3, k2_4, k2_5, k2_6, k2_7, k2_8, k2_9, k2_10, k2_11, k2_12, k2_13, k2_14,
  k3_1, k3_2, k3_3,
  k4_1, k4_2,
  k5_1, k5_2, k5_3, k5_4, k5_5, k5_6, k5_7, k5_8, k5_9, k5_10,
  k6_1,
  k7_1, k7_2, k7_3,
  k8_1, k8_2, k8_3, k8_4, k8_5, k8_6, k8_7,
  k9_1, k9_2, k9_3, k9_4, k9_5, k9_6, k9_7, k9_8, k9_9, k9_10, k9_11,
]

export const allQuestionCards: QuestionMeta[] = [
  q1_1, q1_2, q1_3,
  q2_1, q2_2, q2_3, q2_4, q2_5,
  q3_1, q3_2,
  q4_1, q4_2,
  q5_1, q5_2, q5_3,
  q6_1,
  q7_1,
  q8_1, q8_2,
  q9_1, q9_2,
]
