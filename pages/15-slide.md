---
layout: default
---

# CIPE Affected Project Graph

<div class="mt-8">
  <div v-click class="text-xl mb-8">
    How it helps visualize project relationships and troubleshoot CI issues.
  </div>

  <div class="grid grid-cols-2 gap-8">
    <div v-click class="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
      <h3 class="font-bold text-lg mb-4">
        <i class="i-mdi-graph-outline mr-2" />
        Project Dependencies
      </h3>
      <ul class="list-disc ml-4 space-y-2">
        <li>Visualize project relationships</li>
        <li>Identify affected projects</li>
        <li>Troubleshoot CI issues</li>
      </ul>
    </div>
    <div v-click class="border dark:border-gray-700 rounded-lg p-4">
      <div class="text-center mb-4 font-bold">Project Graph Example</div>
      <div class="mermaid">
        graph TD
          A[Project A] --> B[Project B]
          A --> C[Project C]
          B --> D[Project D]
          style A fill:#ff7070
          style B fill:#ffe070
          style C fill:#ffe070
      </div>
      <div class="text-sm text-center mt-4">
        <span class="text-red-500">■</span> Changed Project
        <span class="ml-4 text-yellow-500">■</span> Affected Project
      </div>
    </div>
  </div>
</div>