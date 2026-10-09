<template>
  <section id="showcase" class="showcase-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">影史经典测试案例库</h2>
        <p class="section-subtitle">探索不同时期、不同流派经典作品的贝克德尔测试实测表现</p>
      </div>

      <div class="movies-grid">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="movie-card"
        >
          <div class="card-head">
            <div>
              <h3 class="movie-name">{{ movie.title }}</h3>
              <span class="movie-meta">{{ movie.director }} · {{ movie.year }}</span>
            </div>
            <span
              class="badge"
              :class="movie.overall"
            >
              {{ movie.overall === 'pass' ? 'PASSED' : 'FAILED' }}
            </span>
          </div>

          <div class="checks-row">
            <span class="check-pill" :class="{ ok: movie.criteria.c1 }">
              {{ movie.criteria.c1 ? '✔ 具名女性' : '✖ 具名女性' }}
            </span>
            <span class="check-pill" :class="{ ok: movie.criteria.c2 }">
              {{ movie.criteria.c2 ? '✔ 产生对话' : '✖ 产生对话' }}
            </span>
            <span class="check-pill" :class="{ ok: movie.criteria.c3 }">
              {{ movie.criteria.c3 ? '✔ 非关男性' : '✖ 非关男性' }}
            </span>
          </div>

          <p class="card-summary">{{ movie.c3Details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PRESET_MOVIES } from '../data/mockData';
const movies = PRESET_MOVIES;
</script>

<style scoped>
.showcase-section {
  padding: 50px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-main);
}

.section-subtitle {
  color: var(--text-muted);
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.movie-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 14px;
}

.movie-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
}

.movie-meta {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.badge {
  font-size: 0.75rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 4px;
}

.badge.pass {
  background: var(--pass-light);
  color: var(--pass);
}

.badge.fail {
  background: var(--fail-light);
  color: var(--fail);
}

.checks-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.check-pill {
  font-size: 0.72rem;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--fail-light);
  color: var(--fail);
  font-weight: 600;
}

.check-pill.ok {
  background: var(--pass-light);
  color: var(--pass);
}

.card-summary {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.5;
}
</style>
