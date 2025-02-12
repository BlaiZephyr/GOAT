<!-- ApiSetup.svelte -->
<script lang="ts">
    import { invoke } from "@tauri-apps/api/core";

    let apiUrl = "";
    let message = "";
    let loading = false;

    // Load the current API URL when component mounts
    async function loadCurrentUrl() {
        try {
            apiUrl = await invoke("get_api_url");
        } catch (error) {
            message = `Error loading URL: ${error}`;
        }
    }

    loadCurrentUrl();

    async function saveApiUrl() {
        loading = true;
        let message: String = "";

        try {
            const response: String = await invoke("set_api_url", {
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
        message = "";

        try {
            const response = await invoke("make_api_request");
            message = `Success! Response: ${response}`;
        } catch (error) {
            message = `Error: ${error}`;
        } finally {
            loading = false;
        }
    }
</script>

<div class="api-setup">
    <h2>API Configuration</h2>

    <div class="input-group">
        <label for="apiUrl">API URL:</label>
        <input
            id="apiUrl"
            type="text"
            bind:value={apiUrl}
            placeholder="Enter API URL"
        />
    </div>

    <div class="button-group">
        <button on:click={saveApiUrl} disabled={loading}>
            {loading ? "Saving..." : "Save URL"}
        </button>

        <button on:click={testApiConnection} disabled={loading}>
            {loading ? "Testing..." : "Test Connection"}
        </button>
    </div>

    {#if message}
        <div class="message">
            {message}
        </div>
    {/if}
</div>

 // sorry freddy daddy, feel free to replace by tailwind :kekw:
<style>
    .api-setup {
        padding: 1rem;
        max-width: 500px;
        margin: 0 auto;
    }

    .input-group {
        margin-bottom: 1rem;
    }

    .input-group label {
        display: block;
        margin-bottom: 0.5rem;
    }

    .input-group input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .button-group {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        background-color: #4a4a4a;
        color: white;
        cursor: pointer;
    }

    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    .message {
        padding: 1rem;
        background-color: #f5f5f5;
        border-radius: 4px;
    }
</style>
