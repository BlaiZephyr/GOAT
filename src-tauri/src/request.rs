use curl::easy::Easy;
use once_cell::sync::Lazy;
use std::io::{stdout, Write};
use std::sync::Mutex;

static API_URL: Lazy<Mutex<String>> =
    Lazy::new(|| Mutex::new(String::from("https://api.default.com")));

//am i doing something wrong in terms of these commands? pretty sure i'm following best practices here.
//https://v1.tauri.app/v1/guides/features/command/
#[tauri::command]
pub fn set_api_url(url: String) -> Result<String, String> {
    let mut api_url = API_URL.lock().map_err(|_| "Failed to lock API_URL")?;
    *api_url = url.clone();
    Ok(format!("API URL set to: {}", url))
}

#[tauri::command]
pub fn get_api_url() -> Result<String, String> {
    let api_url = API_URL.lock().map_err(|_| "Failed to lock API_URL")?;
    Ok(api_url.to_string())
}

#[tauri::command]
pub fn make_api_request() -> Result<String, String> {
    let api_url = API_URL.lock().map_err(|_| "Failed to lock API_URL")?;
    let mut easy = Easy::new();
    let mut response_data = Vec::new();

    easy.url(&api_url).map_err(|e| e.to_string())?;

    {
        let mut transfer = easy.transfer();
        transfer
            .write_function(|data| {
                response_data.extend_from_slice(data);
                Ok(data.len())
            })
            .map_err(|e| e.to_string())?;

        transfer.perform().map_err(|e| e.to_string())?;
    }

    String::from_utf8(response_data).map_err(|e| e.to_string())
}
