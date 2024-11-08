---
layout: default
---

# Getting Started is Super Easy

<div class="mt-12">
  <div class="grid grid-cols-2 gap-8">
    <div v-click class="command-card">
      <div class="font-mono text-lg p-4 bg-gray-100 dark:bg-gray-800 rounded">
        npx nx init
      </div>
      <p class="mt-4 text-sm">Add Nx to any workspace, lightweight setup</p>
    </div>

    <div v-click class="command-card">
      <div class="font-mono text-lg p-4 bg-gray-100 dark:bg-gray-800 rounded">
        npx nx connect
      </div>
      <p class="mt-4 text-sm">Connect to Nx Cloud effortlessly</p>
    </div>
  </div>

  <div v-click class="mt-12">
    <div class="mermaid">
      graph LR
        A[Angular App] --> B[nx init]
        B --> C[nx connect]
        C --> D[Nx Cloud]
        style A fill:#dd1b16
        style D fill:#0072e5
    </div>
  </div>
</div>

<style>
.command-card {
  @apply p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center transition-all duration-200;
}
.command-card:hover {
  @apply shadow-lg transform -translate-y-1;
}
</style>