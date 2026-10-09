/**
 * 前端学习演示数据 - 纯静态模拟数据
 * 无后端调用，无敏感配置
 */

export const CRITERIA_DEFINITIONS = [
  {
    key: 'c1',
    number: '01',
    label: '至少两名有名字的女性角色',
    description: '片中至少有两位拥有明确名字或称谓的女性角色，而非泛指路人或无名群演。'
  },
  {
    key: 'c2',
    number: '02',
    label: '她们之间存在直接对话',
    description: '这两位女性角色之间进行了双向交流，而非单向发号施令或单方面的问候。'
  },
  {
    key: 'c3',
    number: '03',
    label: '对话内容与男性无关',
    description: '她们讨论的话题涉及科学、理想、事业、生存、冒险等，而非围绕某个男性角色。'
  }
];

export const PRESET_MOVIES = [
  {
    id: 1,
    title: "Barbie (芭比)",
    year: "2023",
    overall: "pass",
    director: "Greta Gerwig",
    criteria: {
      c1: true,
      c2: true,
      c3: true
    },
    c1Details: "经典芭比 (Stereotypical Barbie)、葛洛莉亚 (Gloria)、萨莎 (Sasha) 等多位有名字女性角色。",
    c2Details: "芭比与母女葛洛莉亚、萨莎在逃亡途中及现实世界有大量深入交流。",
    c3Details: "对话主要围绕女性自我认知、母女理解、母系社会运作及成长焦虑展开，完全独立于肯 (Ken)。",
    evidence: "葛洛莉亚那段震撼人心的长篇独白：'做女人几乎是不可能的，你必须非常漂亮，但又不能太漂亮...'"
  },
  {
    id: 2,
    title: "Oppenheimer (奥本海默)",
    year: "2023",
    overall: "fail",
    director: "Christopher Nolan",
    criteria: {
      c1: true,
      c2: false,
      c3: false
    },
    c1Details: "凯瑟琳·奥本海默 (Katherine 'Kitty' Oppenheimer) 与琼·塔特洛克 (Jean Tatlock)。",
    c2Details: "两位主要女性角色在全片中没有任何同框交流场景。",
    c3Details: "由于没有两人之间的直接对话，该准则自动无法满足。",
    evidence: "全片女性角色的行动与台词均主要围绕罗伯特·奥本海默的生平、情感与政治听证会展开。"
  },
  {
    id: 3,
    title: "Alien (异形)",
    year: "1979",
    overall: "pass",
    director: "Ridley Scott",
    criteria: {
      c1: true,
      c2: true,
      c3: true
    },
    c1Details: "艾伦·雷普莉 (Ellen Ripley) 与琼·兰伯特 (Joan Lambert)。",
    c2Details: "两人作为诺史莫号船员在太空舰桥多次展开技术与决策沟通。",
    c3Details: "讨论冷冻休眠程序、飞船电脑 Mother 指令以及应对异形怪物的逃生流程。",
    evidence: "雷普莉与兰伯特就检疫隔离协议和飞船降落参数展开激烈的技术对话。"
  },
  {
    id: 4,
    title: "The Dark Knight (黑暗骑士)",
    year: "2008",
    overall: "fail",
    director: "Christopher Nolan",
    criteria: {
      c1: true,
      c2: false,
      c3: false
    },
    c1Details: "瑞秋·道斯 (Rachel Dawes) 与芭芭拉·戈登 (Barbara Gordon)。",
    c2Details: "片中女性角色从未相互对话。",
    c3Details: "不满足对话条件。",
    evidence: "瑞秋与布鲁斯·韦恩及哈维·登特有关键剧情线，但与其他女性角色无互动交集。"
  }
];

export const FAQS = [
  {
    question: "什么是贝克德尔测试 (Bechdel Test)？",
    answer: "贝克德尔测试由漫画家 Alison Bechdel 于 1985 年提出，是衡量影视作品中女性角色代表性与独立性的经典行业基准指标。"
  },
  {
    question: "一部电影没通过测试，就说明它不是一部好电影吗？",
    answer: "并不是！贝克德尔测试并不是评判电影艺术水准或政治正确的绝对标准，它是一个宏观的文化观察工具，用于揭示电影行业长期以来以男性为主导的叙事惯性。"
  },
  {
    question: "这个前端项目在 Vue 学习中有何特色？",
    answer: "该项目生动展示了布尔逻辑状态切换（Pass/Fail）、动态徽章 Class 绑定（:class）、预设快速填单与多层嵌套数据展示，非常贴合实战开发需求。"
  }
];
