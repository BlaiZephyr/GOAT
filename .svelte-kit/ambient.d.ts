
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const SESSION_MANAGER: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_MENU_PREFIX: string;
	export const ICEAUTHORITY: string;
	export const LANGUAGE: string;
	export const NODE: string;
	export const TAURI_ENV_DEBUG: string;
	export const npm_config_verify_deps_before_run: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const DESKTOP_SESSION: string;
	export const KITTY_PID: string;
	export const GTK_RC_FILES: string;
	export const MACOSX_DEPLOYMENT_TARGET: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const TAURI_ENV_PLATFORM: string;
	export const XDG_SESSION_TYPE: string;
	export const SYSTEMD_EXEC_PID: string;
	export const XAUTHORITY: string;
	export const KITTY_PUBLIC_KEY: string;
	export const MOTD_SHOWN: string;
	export const XKB_DEFAULT_MODEL: string;
	export const GTK2_RC_FILES: string;
	export const HOME: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const STARSHIP_SHELL: string;
	export const WAYLAND_DISPLAY: string;
	export const KITTY_WINDOW_ID: string;
	export const XDG_SEAT_PATH: string;
	export const INVOCATION_ID: string;
	export const MANAGERPID: string;
	export const INIT_CWD: string;
	export const STARSHIP_SESSION_KEY: string;
	export const KDE_SESSION_UID: string;
	export const npm_lifecycle_script: string;
	export const XKB_DEFAULT_LAYOUT: string;
	export const TAURI_ENV_PLATFORM_VERSION: string;
	export const XDG_SESSION_CLASS: string;
	export const TAURI_ENV_FAMILY: string;
	export const TERMINFO: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const QT_WAYLAND_RECONNECT: string;
	export const KDE_SESSION_VERSION: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const TAURI_ENV_TARGET_TRIPLE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const TAURI_CLI_VERBOSITY: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const DEBUGINFOD_URLS: string;
	export const TAURI_ENV_ARCH: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const XDG_DATA_DIRS: string;
	export const KDE_FULL_SESSION: string;
	export const PATH: string;
	export const npm_config_node_gyp: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const MAIL: string;
	export const npm_config_registry: string;
	export const XKB_DEFAULT_OPTIONS: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		SESSION_MANAGER: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		XDG_SESSION_PATH: string;
		XDG_MENU_PREFIX: string;
		ICEAUTHORITY: string;
		LANGUAGE: string;
		NODE: string;
		TAURI_ENV_DEBUG: string;
		npm_config_verify_deps_before_run: string;
		MEMORY_PRESSURE_WRITE: string;
		DESKTOP_SESSION: string;
		KITTY_PID: string;
		GTK_RC_FILES: string;
		MACOSX_DEPLOYMENT_TARGET: string;
		XDG_SEAT: string;
		PWD: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		TAURI_ENV_PLATFORM: string;
		XDG_SESSION_TYPE: string;
		SYSTEMD_EXEC_PID: string;
		XAUTHORITY: string;
		KITTY_PUBLIC_KEY: string;
		MOTD_SHOWN: string;
		XKB_DEFAULT_MODEL: string;
		GTK2_RC_FILES: string;
		HOME: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		MEMORY_PRESSURE_WATCH: string;
		STARSHIP_SHELL: string;
		WAYLAND_DISPLAY: string;
		KITTY_WINDOW_ID: string;
		XDG_SEAT_PATH: string;
		INVOCATION_ID: string;
		MANAGERPID: string;
		INIT_CWD: string;
		STARSHIP_SESSION_KEY: string;
		KDE_SESSION_UID: string;
		npm_lifecycle_script: string;
		XKB_DEFAULT_LAYOUT: string;
		TAURI_ENV_PLATFORM_VERSION: string;
		XDG_SESSION_CLASS: string;
		TAURI_ENV_FAMILY: string;
		TERMINFO: string;
		TERM: string;
		npm_package_name: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		QT_WAYLAND_RECONNECT: string;
		KDE_SESSION_VERSION: string;
		PAM_KWALLET5_LOGIN: string;
		TAURI_ENV_TARGET_TRIPLE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		TAURI_CLI_VERBOSITY: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		DEBUGINFOD_URLS: string;
		TAURI_ENV_ARCH: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		XDG_DATA_DIRS: string;
		KDE_FULL_SESSION: string;
		PATH: string;
		npm_config_node_gyp: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		MAIL: string;
		npm_config_registry: string;
		XKB_DEFAULT_OPTIONS: string;
		KITTY_INSTALLATION_DIR: string;
		npm_node_execpath: string;
		OLDPWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
