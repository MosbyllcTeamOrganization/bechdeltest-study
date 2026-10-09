<template>
  <section class="hero-section">
    <div class="container hero-content">
      <div class="eyebrow">
        <span>📽️ AI Film & Narrative Analysis</span>
      </div>
      <h1 class="hero-title">
        电影是否通过 <span class="highlight">贝克德尔测试？</span>
      </h1>
      <p class="hero-desc">
        输入任意电影名称或剧本对白片段，AI 将基于严谨的影视叙事学规则，自动判定是否满足三大女性独立代表性准则。
      </p>

      <!-- 三大黄金准则卡片 (学习: 静态结构与网格布局) -->
      <div class="rules-grid">
        <div
          v-for="rule in criteria"
          :key="rule.key"
          class="rule-card"
        >
          <div class="rule-num">{{ rule.number }}</div>
          <h3 class="rule-title">{{ rule.label }}</h3>
          <p class="rule-desc">{{ rule.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CRITERIA_DEFINITIONS } from '../data/mockData';
const criteria = CRITERIA_DEFINITIONS;
</script>

<style scoped>
.hero-section {
  padding: 50px 0 30px;
  text-align: center;
}

.hero-content {
  max-width: 900px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 16px;
  color: var(--text-main);
}

.highlight {
  color: var(--primary);
  background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc {
  font-size: 1.15rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 36px;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  text-align: left;
}

.rule-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--card-shadow);
  position: relative;
  overflow: hidden;
}

.rule-num {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--primary);
  opacity: 0.25;
  margin-bottom: 4px;
}

.rule-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 8px;
}

.rule-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2rem;
  }
}
</style>
