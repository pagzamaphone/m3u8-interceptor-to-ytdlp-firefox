browser.webRequest.onBeforeRequest.addListener(
  async function(details) {
    if (details.url.indexOf(".m3u8") !== -1) {
      let originUrl = details.originUrl || details.documentUrl || "https://Unknown-Referer";
      let filename = "Downloaded_Video";

      // If the request came from a valid tab, get the tab's title
      if (details.tabId >= 0) {
        try {
          let tab = await browser.tabs.get(details.tabId);
          if (tab && tab.title) {
            // Split at the first dash to remove site branding, then trim spaces
            let rawTitle = tab.title.split('-')[0].trim();
            // Remove illegal Windows filename characters (< > : " / \ | ? *)
            filename = rawTitle.replace(/[<>:"/\\|?*]+/g, '');
          }
        } catch (error) {
          console.error("Could not fetch tab info:", error);
        }
      }

      // Build the command with the output template flag
      let command = `yt-dlp "${details.url}" --referer "${originUrl}" -o "${filename}.%(ext)s"`;
      
      browser.storage.local.set({ lastCommand: command });
    }
  },
  { urls: ["<all_urls>"] }
);