<script lang="ts">
  import { invoke } from '@tauri-apps/api/core';

  let apiUrl = $state('');
  let message = $state('');
  let loading = $state(false);

  $effect(() => {
    loadCurrentUrl();
  });

  // Load the current API URL when component mounts
  async function loadCurrentUrl() {
    try {
      apiUrl = await invoke('get_api_url');
    } catch (error) {
      message = `Error loading URL: ${error}`;
    }
  }

  loadCurrentUrl();

  async function saveApiUrl() {
    loading = true;
    message = '';

    try {
      const response: string = await invoke('set_api_url', {
        url: apiUrl,
      });
      message = response;
    } catch (error) {
      message = `Error: ${error}`;
    } finally {
      loading = false;
    }
  }

  async function testApiConnection() {
    loading = true;
    message = '';

    try {
      const response = await invoke('make_api_request');
      message = `Success! Response: ${response}`;
    } catch (error) {
      message = `Error: ${error}`;
    } finally {
      loading = false;
    }
  }
</script>

<div class="p-3">
  <h2 class="text-xl font-bold">API Configuration</h2>

  <div class="m-3">
    <label for="apiUrl">API URL:</label>
    <input
      id="apiUrl"
      class="p-2 border border-grey-400 rounded"
      type="text"
      bind:value={apiUrl}
      placeholder="Enter API URL"
    />
  </div>

  <div class="space-x-2">
    <button
      class="rounded p-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700"
      onclick={saveApiUrl}
      disabled={loading}
    >
      {loading ? 'Saving...' : 'Save URL'}
    </button>

    <button
      class="rounded p-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700"
      onclick={testApiConnection}
      disabled={loading}
    >
      {loading ? 'Testing...' : 'Test Connection'}
    </button>
  </div>

  {#if message}
    <div class="p-2 bg-gray-700 rounded mt-4 border border-gray-500">
      {message}
    </div>
  {/if}
</div>
