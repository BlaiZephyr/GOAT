<script lang="ts">
  let { children } = $props();
  import '../app.css';
</script>

<div class="h-svh w-svw bg-gray-900 text-gray-300">
  {@render children()}
</div>
