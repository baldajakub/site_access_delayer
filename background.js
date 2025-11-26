// Load blocked sites from storage
let blockedSites = [];

// Initialize with default sites
async function initializeBlockedSites() {
  console.log("Initializing blocked sites...");
  
  const result = await browser.storage.local.get('blockedSites');
  console.log("Storage result:", result);
  
  if (result.blockedSites && result.blockedSites.length > 0) {
    blockedSites = result.blockedSites;
    console.log("Loaded blocked sites:", blockedSites);
  } else {
    // Default sites
    blockedSites = [
      "reddit.com",
      "youtube.com",
      "facebook.com"
    ];
    await browser.storage.local.set({ blockedSites });
    console.log("Set default blocked sites:", blockedSites);
  }
}

function shouldBlock(url) {
  try {
    const hostname = new URL(url).hostname;
    console.log("Checking URL:", url, "Hostname:", hostname);
    console.log("Blocked sites list:", blockedSites);
    
    const shouldBlock = blockedSites.some(site => 
      hostname === site || 
      hostname.endsWith('.' + site) ||
      hostname.includes(site)
    );
    
    console.log("Should block?", shouldBlock);
    return shouldBlock;
    
  } catch (e) {
    console.log("Error parsing URL:", e);
    return false;
  }
}

// Listen for storage changes to update the blocked sites
browser.storage.onChanged.addListener((changes, area) => {
  console.log("Storage changed:", changes, "Area:", area);
  if (area === 'local' && changes.blockedSites) {
    blockedSites = changes.blockedSites.newValue;
    console.log("Updated blocked sites to:", blockedSites);
  }
});

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Intercepted request:", details.url);
    
    if (shouldBlock(details.url)) {
      console.log("BLOCKING and redirecting:", details.url);
      const waitingUrl = browser.runtime.getURL('waiting.html') + 
                        '?original=' + encodeURIComponent(details.url);
      return { redirectUrl: waitingUrl };
    }
    
    console.log("Allowing:", details.url);
    return {};
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// Initialize when the extension loads
initializeBlockedSites();
console.log("Background script loaded!");