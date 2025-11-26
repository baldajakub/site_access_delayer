# Site Access Delayer 🛑⏰

A simple Firefox/LibreWolf extension that helps you break the habit of mindlessly browsing distracting websites by adding a mindful pause before accessing them.

## 🎯 What It Does

- **Blocks distracting sites** with a customizable list
- **Shows a 10-second waiting page** before allowing access
- **Gives you time to think** if you really want to visit the site
- **Easy management** with a simple popup settings page

## 🚀 Installation

### From Firefox Add-ons Store (Coming Soon)
*[Link will be added once published]*

### Manual Installation
1. Download or clone this repository
2. Open Firefox/LibreWolf and go to `about:debugging`
3. Click "This Firefox" (or "This LibreWolf")
4. Click "Load Temporary Add-on"
5. Select any file from the extension folder

## 🛠️ How to Use

1. **Click the extension icon** in your toolbar
2. **Add sites to block** by typing domains (e.g., `reddit.com`, `youtube.com`)
3. **Try visiting a blocked site** - you'll see the waiting page first
4. **Wait 10 seconds** and consciously decide to continue or go back

## 📁 Files Structure

```
site-access-delayer/
├── manifest.json          # Extension configuration
├── background.js          # Intercepts and blocks sites
├── settings.html          # Settings popup UI
├── settings.js            # Settings functionality
├── waiting.html           # Waiting page UI
├── waiting.js             # Waiting page countdown
└── icons/                 # Extension icons (for store)
    ├── icon-16.png
    ├── icon-32.png
    ├── icon-48.png
    ├── icon-96.png
    └── icon-128.png
```

## ⚙️ Features

- ✅ Customizable block list
- ✅ 10-second waiting period
- ✅ One-click site management
- ✅ Persistent storage
- ✅ Clean, minimalist design
- ✅ Privacy-focused (no data collection)

## 🎨 Default Blocked Sites

- `reddit.com`
- `www.reddit.com`
- `seznam.cz`
- `www.seznam.cz`

*You can easily add or remove sites in the settings!*

## 🔧 Technical Details

- Built with vanilla JavaScript
- Uses Firefox WebExtensions API
- `webRequest` API for site blocking
- `storage.local` for data persistence
- No external dependencies

## 🐛 Troubleshooting

**Settings not loading?**
- Make sure you're using Firefox/LibreWolf
- Check browser console for errors (Right-click popup → Inspect)

**Sites not being blocked?**
- Verify sites are added in settings (include domain only, no `https://`)
- Check background script console in `about:debugging`

## 🤝 Contributing

Feel free to fork and improve! Some ideas:
- Customizable wait times
- Scheduled blocking (e.g., during work hours)
- Export/import block lists
- More detailed statistics

## 📄 License

MIT License - feel free to use and modify!

## 🎉 Credits

Made with ❤️ for better digital wellbeing and more mindful browsing.

---

**Remember**: Every 10-second pause is a chance to choose how you spend your time! ⏳