<template>
  <section id="analyzer" class="analyzer-section">
    <div class="container">
      <div class="analyzer-card">
        <!-- 快速预设按钮组 (学习: 状态预置与单向赋值) -->
        <div class="preset-box">
          <span class="preset-title">点击快速加载经典电影测试:</span>
          <div class="preset-chips">
            <button
              v-for="movie in presetMovies"
              :key="movie.id"
              class="chip-btn"
              :class="{ selected: selectedMovieId === movie.id }"
              @click="loadPreset(movie)"
            >
              {{ movie.title }}
              <span
                class="mini-badge"
                :class="movie.overall"
              >
                {{ movie.overall.toUpperCase() }}
              </span>
            </button>
          </div>
        </div>

        <!-- 输入区域 (学习: v-model 双向绑定) -->
        <div class="input-area">
          <label class="input-label" for="movie-input">
            输入电影名称或剧本对白片段:
          </label>
          <div class="input-row">
            <input
              id="movie-input"
              v-model="movieInput"
              type="text"
              class="text-input"
              placeholder="例如: Barbie (2023) 或 输入剧情/角色台词..."
            />
            <button
              class="analyze-btn"
              :disabled="isAnalyzing || !movieInput.trim()"
              @click="runAnalysis"
            >
              <span v-if="isAnalyzing">⏳ 正在严谨研判...</span>
              <span v-else>🔍 启动贝克德尔测试</span>
            </button>
          </div>
        </div>

        <!-- 详细分析报告面板 (学习: 条件渲染与复杂动态样式绑定) -->
        <div v-if="currentResult" class="result-area">
          <!-- 总体结论横幅 -->
          <div
            class="verdict-banner"
            :class="currentResult.overall"
          >
            <div class="verdict-left">
              <span class="verdict-icon">
                {{ currentResult.overall === 'pass' ? '✅' : '❌' }}
              </span>
              <div>
                <h3 class="verdict-title">
                  {{ currentResult.title }}
                  <span class="verdict-tag">
                    {{ currentResult.overall === 'pass' ? '通过测试 (PASSED)' : '未通过测试 (FAILED)' }}
                  </span>
                </h3>
                <p class="verdict-director">导演: {{ currentResult.director }} · {{ currentResult.year }}</p>
              </div>
            </div>
          </div>

          <!-- 三大准则详细拆解 (学习: 动态图标与布尔状态判定) -->
          <div class="criteria-breakdown">
            <!-- 准则 1 -->
            <div class="criterion-item" :class="{ passed: currentResult.criteria.c1 }">
              <div class="crit-header">
                <span class="crit-status">
                  {{ currentResult.criteria.c1 ? '✔ 满足准则 1' : '✖ 未满足准则 1' }}
                </span>
                <h4 class="crit-title">至少两名具名女性角色</h4>
              </div>
              <p class="crit-detail">{{ currentResult.c1Details }}</p>
            </div>

            <!-- 准则 2 -->
            <div class="criterion-item" :class="{ passed: currentResult.criteria.c2 }">
              <div class="crit-header">
                <span class="crit-status">
                  {{ currentResult.criteria.c2 ? '✔ 满足准则 2' : '✖ 未满足准则 2' }}
                </span>
                <h4 class="crit-title">女性角色之间存在直接对话</h4>
              </div>
              <p class="crit-detail">{{ currentResult.c2Details }}</p>
            </div>

            <!-- 准则 3 -->
            <div class="criterion-item" :class="{ passed: currentResult.criteria.c3 }">
              <div class="crit-header">
                <span class="crit-status">
                  {{ currentResult.criteria.c3 ? '✔ 满足准则 3' : '✖ 未满足准则 3' }}
                </span>
                <h4 class="crit-title">谈话内容与男性完全无关</h4>
              </div>
              <p class="crit-detail">{{ currentResult.c3Details }}</p>
            </div>
          </div>

          <!-- 场景对白与叙事实据 -->
          <div class="evidence-box">
            <h4 class="evidence-title">🎬 剧情举证与叙事分析:</h4>
            <p class="evidence-content">{{ currentResult.evidence }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { PRESET_MOVIES } from '../data/mockData';

/**
 * 学习要点:
 * 1. 数组匹配与默认选中项
 * 2. 模拟延迟与动态结果组装
 */
const presetMovies = PRESET_MOVIES;
const selectedMovieId = ref(1);
const movieInput = ref(presetMovies[0].title);
const isAnalyzing = ref(false);
const currentResult = ref(presetMovies[0]); // 默认展示 Barbie

const loadPreset = (movie) => {
  selectedMovieId.value = movie.id;
  movieInput.value = movie.title;
  currentResult.value = movie;
};

const runAnalysis = () => {
  if (!movieInput.value.trim()) return;

  isAnalyzing.value = true;

  setTimeout(() => {
    // 如果输入的标题包含预置电影名，直接匹配对应项；否则使用默认测试模型
    const matched = presetMovies.find(m =>
      movieInput.value.toLowerCase().includes(m.title.toLowerCase().split(' ')[0])
    );

    if (matched) {
      currentResult.value = matched;
      selectedMovieId.value = matched.id;
    } else {
      // 动态合成一个分析案例
      currentResult.value = {
        id: Date.now(),
        title: movieInput.value,
        year: "2024",
        overall: "pass",
        director: "示例演示导演",
        criteria: { c1: true, c2: true, c3: true },
        c1Details: "分析到文本中存在至少两位具名女性角色并持有完整人物档案。",
        c2Details: "确认双方在第三幕场景中发生了直接双向交流。",
        c3Details: "对话主要围绕团队生存目标与科研探索任务，未提及任何男性角色。",
        evidence: "根据输入剧情提取出独立对话片段，完全符合贝克德尔测试三大测试准则。"
      };
      selectedMovieId.value = null;
    }

    isAnalyzing.value = false;
  }, 700);
};
</script>

<style scoped>
.analyzer-section {
  padding: 10px 0 50px;
}

.analyzer-card {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--card-shadow);
  padding: 32px;
}

.preset-box {
  margin-bottom: 24px;
}

.preset-title {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.preset-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 0.85rem;
  color: var(--text-main);
  transition: all 0.2s;
}

.chip-btn:hover, .chip-btn.selected {
  border-color: var(--primary);
  background: #fff;
  color: var(--primary);
}

.mini-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 4px;
}

.mini-badge.pass {
  background: var(--pass-light);
  color: var(--pass);
}

.mini-badge.fail {
  background: var(--fail-light);
  color: var(--fail);
}

.input-area {
  margin-bottom: 24px;
}

.input-label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.input-row {
  display: flex;
  gap: 12px;
}

.text-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}

.text-input:focus {
  border-color: var(--primary);
}

.analyze-btn {
  background: var(--primary);
  color: #fff;
  padding: 12px 26px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  transition: background 0.2s;
}

.analyze-btn:hover:not(:disabled) {
  background: var(--primary-hover);
}

.analyze-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.result-area {
  margin-top: 36px;
  border-top: 1px solid var(--border);
  padding-top: 28px;
}

.verdict-banner {
  padding: 20px 24px;
  border-radius: 10px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.verdict-banner.pass {
  background: var(--pass-light);
  border: 1px solid #a7f3d0;
}

.verdict-banner.fail {
  background: var(--fail-light);
  border: 1px solid #fecaca;
}

.verdict-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.verdict-icon {
  font-size: 2.2rem;
}

.verdict-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 10px;
}

.verdict-tag {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
  background: #fff;
}

.verdict-banner.pass .verdict-tag {
  color: var(--pass);
}

.verdict-banner.fail .verdict-tag {
  color: var(--fail);
}

.verdict-director {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-top: 4px;
}

.criteria-breakdown {
  display: grid;
  gap: 14px;
  margin-bottom: 24px;
}

.criterion-item {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px 20px;
}

.criterion-item.passed {
  border-left: 4px solid var(--pass);
}

.criterion-item:not(.passed) {
  border-left: 4px solid var(--fail);
}

.crit-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}

.crit-status {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
}

.criterion-item.passed .crit-status {
  background: var(--pass-light);
  color: var(--pass);
}

.criterion-item:not(.passed) .crit-status {
  background: var(--fail-light);
  color: var(--fail);
}

.crit-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-main);
}

.crit-detail {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.evidence-box {
  background: #f1f5f9;
  border-radius: 8px;
  padding: 18px 20px;
}

.evidence-title {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 6px;
  color: var(--text-main);
}

.evidence-content {
  font-size: 0.92rem;
  color: var(--text-muted);
  font-style: italic;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .input-row {
    flex-direction: column;
  }
}
</style>
