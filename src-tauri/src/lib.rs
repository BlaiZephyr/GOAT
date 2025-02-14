// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
pub mod request;

use crate::request::{get_api_url, make_api_request, set_api_url};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            make_api_request,
            get_api_url,
            set_api_url
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
