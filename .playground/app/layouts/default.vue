<template>
  <div class="min-h-dvh bg-(--color-gray-100) flex flex-col">
    <TestHeader />
    <main class="max-w-7xl grow relative flex flex-col w-full mx-auto">
      <slot />
    </main>
    <TestFooter />
  </div>
</template>