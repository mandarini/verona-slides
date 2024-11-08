---
layout: two-cols
---

# Download Task Artifacts

<div class="mt-8 pr-8">
  <div v-click class="text-xl mb-8">
    Problem and solution, including access restrictions.
  </div>

  <div v-click class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mt-8">
    <h3 class="font-bold text-lg mb-4">
      <i class="i-mdi-shield-check mr-2" />
      Access Control
    </h3>
    <p class="text-sm">
      Access is restricted to members of your organization for security.
    </p>
  </div>
</div>

::right::

<div v-click class="ml-8 mt-8">
  <div class="border dark:border-gray-700 rounded-lg p-4">
    <div class="text-center mb-4 font-bold">Download Flow</div>
    <div class="mermaid">
      graph TD
        A[User] --> B[Download Button]
        B --> C{Auth Check}
        C -->|Authorized| D[Download Artifact]
        C -->|Unauthorized| E[Access Denied]
    </div>
  </div>
</div>