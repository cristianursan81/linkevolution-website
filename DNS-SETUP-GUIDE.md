# 🌍 DNS Configuration Guide for linkevolution.eu

## Required DNS Records

Add these records to your DNS provider for `linkevolution.eu`:

### A Records (Point to GitHub Pages)
```
Type: A     | Host: @   | Value: 185.199.108.153 | TTL: 3600
Type: A     | Host: @   | Value: 185.199.109.153 | TTL: 3600
Type: A     | Host: @   | Value: 185.199.110.153 | TTL: 3600
Type: A     | Host: @   | Value: 185.199.111.153 | TTL: 3600
```

### CNAME Record (WWW subdomain)
```
Type: CNAME | Host: www | Value: cristianursan81.github.io | TTL: 3600
```

## Step-by-Step Instructions

### Option 1: Namecheap
1. **Login**: https://ap.www.namecheap.com/
2. **Navigate**: Domain List → linkevolution.eu → Manage
3. **DNS Settings**: Click "Advanced DNS" tab
4. **Clean Up**: Delete existing A/CNAME records for @ and www
5. **Add Records**: Add the 5 records listed above
6. **Save**: Click "Save All Changes"

### Option 2: GoDaddy
1. **Login**: https://account.godaddy.com/
2. **Navigate**: My Products → DNS → linkevolution.eu
3. **Add Records**: Click "Add" and enter each record
4. **Save**: Save changes

### Option 3: Cloudflare
1. **Login**: https://dash.cloudflare.com/
2. **Select Domain**: Click on linkevolution.eu
3. **DNS Tab**: Go to DNS section
4. **Add Records**: Add records with Proxy enabled (orange cloud ✅)
5. **Save**: Records save automatically

## Verification

After adding DNS records:

### 1. Check DNS Propagation
Use online tools to verify:
- https://whatsmydns.net/ (enter linkevolution.eu)
- https://dnschecker.org/ (enter linkevolution.eu)

### 2. Test Website Access
- Wait 15-30 minutes for propagation
- Visit: https://linkevolution.eu
- Test: https://www.linkevolution.eu

### 3. GitHub Pages Verification
1. Go to: https://github.com/cristianursan81/linkevolution-website
2. Settings → Pages
3. Custom domain should show: linkevolution.eu
4. Look for green checkmark ✅ next to domain

## Troubleshooting

### Common Issues:
- **DNS not propagating**: Wait up to 24 hours (usually 15-30 minutes)
- **SSL certificate pending**: GitHub issues SSL automatically, may take 1 hour
- **404 errors**: Verify GitHub Pages source is set to "Deploy from a branch" + "main" + "/ (root)"

### DNS Values Double-Check:
- A records point to GitHub Pages IPs (185.199.108-111.153)
- CNAME points to your GitHub Pages domain (cristianursan81.github.io)
- No conflicting records (old A records pointing elsewhere)

## Current Status: ⏳

- [x] GitHub Pages configured
- [x] CNAME file updated
- [x] Website files deployed
- [ ] DNS records configured ← **YOU ARE HERE**
- [ ] Domain verification complete
- [ ] Website live at linkevolution.eu

---

## 🎯 Once DNS is configured:

Your professional website will be live at:
- ✅ https://linkevolution.eu
- ✅ https://www.linkevolution.eu

**Business Contact Information:**
- 📧 cristianursan@outlook.es
- 📱 +34 647 027 418
- 💬 WhatsApp: +34 647 027 418
- 🌐 Website: linkevolution.eu

Ready to serve your digital transformation clients! 🚀
