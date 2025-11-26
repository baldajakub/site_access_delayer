console.log("Settings script loaded!");

const siteInput = document.getElementById('siteInput');
const addButton = document.getElementById('addSite');
const siteList = document.getElementById('siteList');

// Load sites from storage and display them
async function loadSites() {
    try {
        console.log("Loading sites from storage...");
        const result = await browser.storage.local.get('blockedSites');
        console.log("Raw storage result:", result);
        
        let sites = result.blockedSites;
        
        // If no sites exist, initialize with defaults
        if (!sites || sites.length === 0) {
            console.log("No sites found, initializing defaults...");
            sites = [
                "reddit.com",
                "www.reddit.com", 
                "seznam.cz",
                "www.seznam.cz"
            ];
            await browser.storage.local.set({ blockedSites: sites });
        }
        
        console.log("Final sites to display:", sites);
        
        siteList.innerHTML = '';
        
        if (sites.length === 0) {
            siteList.innerHTML = '<div class="empty-message">No sites blocked yet. Add some above!</div>';
            return;
        }
        
        sites.forEach(site => {
            addSiteToList(site);
        });
        
    } catch (error) {
        console.error("Error loading sites:", error);
        siteList.innerHTML = '<div class="empty-message">Error loading sites: ' + error.message + '</div>';
    }
}

// Add a site to the list UI
function addSiteToList(site) {
    const li = document.createElement('li');
    li.className = 'site-item';
    li.innerHTML = `
        <span class="site-url">${site}</span>
        <button class="remove-btn" title="Remove">🗑️</button>
    `;
    
    li.querySelector('.remove-btn').addEventListener('click', () => {
        removeSite(site);
    });
    
    siteList.appendChild(li);
}

// Add a new site
async function addNewSite() {
    const site = siteInput.value.trim().toLowerCase();
    
    if (!site) {
        alert('Please enter a website');
        return;
    }
    
    // Basic validation
    if (!site.includes('.')) {
        alert('Please enter a valid website (e.g., "youtube.com")');
        return;
    }
    
    const result = await browser.storage.local.get('blockedSites');
    const sites = result.blockedSites || [];
    
    if (sites.includes(site)) {
        alert('This site is already in the list!');
        return;
    }
    
    sites.push(site);
    await browser.storage.local.set({ blockedSites: sites });
    
    siteInput.value = '';
    loadSites(); // Reload the list
}

// Remove a site
async function removeSite(siteToRemove) {
    const result = await browser.storage.local.get('blockedSites');
    const sites = result.blockedSites || [];
    
    const updatedSites = sites.filter(site => site !== siteToRemove);
    await browser.storage.local.set({ blockedSites: updatedSites });
    
    loadSites(); // Reload the list
}

// Event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, loading sites...");
    
    // Add event listeners
    addButton.addEventListener('click', addNewSite);
    siteInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addNewSite();
        }
    });
    
    // Load sites
    loadSites();
});