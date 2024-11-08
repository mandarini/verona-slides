---
layout: center
---

# Briefly: What Nx Brings

<div class="grid grid-cols-2 gap-8 mt-8">
  <div v-click class="feature-card">
    <mdi-play class="text-2xl mb-2 text-blue-500" />
    <h3 class="font-bold">Run Tasks</h3>
  </div>
  
  <div v-click class="feature-card">
    <mdi-cached class="text-2xl mb-2 text-green-500" />
    <h3 class="font-bold">Cache Task Results</h3>
  </div>
  
  <div v-click class="feature-card">
    <mdi-compass class="text-2xl mb-2 text-purple-500" />
    <h3 class="font-bold">Explore Your Workspace</h3>
  </div>
  
  <div v-click class="feature-card">
    <mdi-code-braces class="text-2xl mb-2 text-orange-500" />
    <h3 class="font-bold">Generate Code</h3>
  </div>
  
  <div v-click class="feature-card">
    <mdi-update class="text-2xl mb-2 text-red-500" />
    <h3 class="font-bold">Automate Updates</h3>
  </div>
  
  <div v-click class="feature-card">
    <mdi-vector-polygon class="text-2xl mb-2 text-indigo-500" />
    <h3 class="font-bold">Enforce Boundaries</h3>
  </div>
  
  <div v-click class="feature-card">
    <mdi-truck-delivery class="text-2xl mb-2 text-teal-500" />
    <h3 class="font-bold">Manage Releases</h3>
  </div>
</div>

<style>
.feature-card {
  @apply p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center transition-all duration-200;
}
.feature-card:hover {
  @apply shadow-lg transform -translate-y-1;
}
</style>