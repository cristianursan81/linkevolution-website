# 🚀 GitHub Pages Deployment Guide for linkevolution.eu

## Step 1: Create GitHub Repository

1. **Go to GitHub**: Visit [github.com](https://github.com) and login
2. **Create New Repository**:
   - Click "New" or "Create repository"
   - Repository name: `linkevolution-website`
   - Description: `Professional website for Linkevolution digital transformation consulting`
   - Set to **Public** (required for free GitHub Pages)
   - ✅ **Do NOT** initialize with README (we already have one)

## Step 2: Push Your Code to GitHub

Copy and run these commands in your terminal (replace YOURUSERNAME with your GitHub username):

```bash
git remote add origin https://github.com/cristianursan81/linkevolution-website.git
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. **Go to Repository Settings**:
   - Navigate to your repository on GitHub
   - Click **Settings** tab (top menu)

2. **Configure Pages**:
   - Scroll down to **Pages** section (left sidebar)
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main"
   - **Folder**: Select "/ (root)"

## Step 4: Configure Custom Domain

1. **In GitHub Pages Settings**:
   - **Custom domain**: Enter `linkevolution.eu`
   - Click **Save**
   - This creates a CNAME file in your repository

## Step 5: Configure DNS in Namecheap

1. **Login to Namecheap**:
   - Go to your account: https://ap.www.namecheap.com/
   - Navigate to Domain List → Manage (for linkevolution.eu)

2. **Advanced DNS Settings**:
   - Click **Advanced DNS** tab
   - **Delete any existing A/CNAME records** for @ and www

3. **Add New Records**:
   ```
   Type: A     | Host: @   | Value: 185.199.108.153 | TTL: Automatic
   Type: A     | Host: @   | Value: 185.199.109.153 | TTL: Automatic  
   Type: A     | Host: @   | Value: 185.199.110.153 | TTL: Automatic
   Type: A     | Host: @   | Value: 185.199.111.153 | TTL: Automatic
   Type: CNAME | Host: www | Value: cristianursan81.github.io | TTL: Automatic
   ```
   
   **Replace YOURUSERNAME** with cristianursan81!

4. **Save Changes**: Click "Save All Changes"

## Step 6: Verify Deployment

1. **Check GitHub Actions**:
   - Go to your repository → **Actions** tab
   - You should see a workflow running/completed
   - Green checkmark = successful deployment

2. **Test Your Website**:
   - Wait 15-30 minutes for DNS propagation
   - Visit: `https://linkevolution.eu`
   - Also test: `https://www.linkevolution.eu`

## 🎯 What Happens Next

- ✅ **Automatic Deployments**: Every time you push code, the site updates
- ✅ **Free SSL Certificate**: GitHub provides HTTPS automatically
- ✅ **Fast Global CDN**: Your site loads quickly worldwide
- ✅ **Professional Domain**: linkevolution.eu is now your business website

## 🔧 Making Updates

To update your website:
1. Edit files locally
2. Commit changes: `git commit -am "Update website"`
3. Push to GitHub: `git push`
4. Site automatically rebuilds and deploys!

## 📞 Your Live Contact Information

Once deployed, visitors can reach you at:
- ✉️ cristianursan@outlook.es
- 📱 +34 647 027 418
- 💬 WhatsApp: +34 647 027 418
- 🌐 Website: linkevolution.eu

## 🆘 Troubleshooting

**If site doesn't load after 1 hour:**
1. Check DNS settings in Namecheap
2. Verify GitHub Actions completed successfully
3. Ensure custom domain is saved in GitHub Pages settings

**Need help?** GitHub and Namecheap both have excellent support docs!

---

## 🎉 Congratulations!

Your professional Linkevolution website will be live at **linkevolution.eu** helping you attract clients and grow your digital transformation business! 🚀
