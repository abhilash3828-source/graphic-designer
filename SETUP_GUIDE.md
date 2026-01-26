# Setup & Customization Guide

## Step-by-Step Setup Instructions

### Step 1: Prepare Your Images

1. Create high-quality design images (recommended sizes):
   - **Thumbnails**: 1200x675px or 1280x720px (16:9 ratio)
   - **Posters**: 1000x1500px or 1200x1800px (2:3 ratio)
   - **Logo**: 1000x1000px or similar (1:1 ratio)
   - **Ad Creatives**: 1200x628px (Facebook), 1080x1080px (Instagram), or your dimensions

2. Save images as JPG or PNG format

3. Optimize images for web:
   - Compress using tools like TinyPNG, ImageOptim, or Squoosh
   - Keep file sizes under 500KB each for fast loading

### Step 2: Add Images to Website

1. Navigate to `assets/` folder
2. Replace placeholder images:
   - `placeholder-thumbnail-1.jpg` → Your 1st thumbnail
   - `placeholder-thumbnail-2.jpg` → Your 2nd thumbnail
   - `placeholder-thumbnail-3.jpg` → Your 3rd thumbnail
   - `placeholder-poster-1.jpg` → Your 1st poster
   - `placeholder-poster-2.jpg` → Your 2nd poster
   - `placeholder-poster-3.jpg` → Your 3rd poster
   - `placeholder-logo.jpg` → Your logo
   - `placeholder-ad-1.jpg` → Your 1st ad creative
   - `placeholder-ad-2.jpg` → Your 2nd ad creative

### Step 3: Update Text Content

Open `index.html` in a text editor and update:

#### Logo & Brand Name (Line ~52)
```html
<!-- BEFORE -->
<span class="logo-text">Design Studio</span>

<!-- AFTER -->
<span class="logo-text">Your Name</span>
```

#### Hero Section (Lines ~96-98)
```html
<!-- BEFORE -->
<h1 class="hero-title">Creative Design Solutions</h1>
<p class="hero-subtitle">Transforming ideas into compelling visual experiences</p>

<!-- AFTER -->
<h1 class="hero-title">Your Headline Here</h1>
<p class="hero-subtitle">Your tagline or summary here</p>
```

#### About Section Bio (Lines ~155-158)
```html
<p>I'm a passionate graphic designer dedicated to creating impactful visual experiences...</p>
<p>My approach combines strategic thinking with creative excellence...</p>
```

Replace with your bio.

#### About Statistics (Lines ~163-181)
```html
<div class="stat">
    <h3>50+</h3>
    <p>Projects Completed</p>
</div>
```

Update numbers to your actual statistics.

#### Portfolio Item Titles & Descriptions
Update each portfolio card's title and description to match your work:

```html
<!-- BEFORE -->
<h3>YouTube Thumbnail</h3>
<p>Engaging thumbnail design for content creators</p>

<!-- AFTER -->
<h3>Your Project Title</h3>
<p>Your project description</p>
```

#### Contact Information (Lines ~251-260)
```html
<!-- Email -->
<p><a href="mailto:hello@example.com">hello@example.com</a></p>

<!-- Location -->
<p>Your City, Country</p>

<!-- Social Media -->
<a href="https://instagram.com/yourprofile">Instagram</a>
<a href="https://behance.net/yourprofile">Behance</a>
<a href="https://linkedin.com/yourprofile">LinkedIn</a>
```

### Step 4: Customize Colors

Edit `styles.css` lines 6-17 to match your brand:

```css
:root {
    --primary-color: #2563eb;      /* Main blue - CHANGE THIS */
    --secondary-color: #1e40af;    /* Darker blue - CHANGE THIS */
    --accent-color: #f59e0b;       /* Orange - CHANGE THIS */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    --bg-light: #f9fafb;           /* Light background */
    --bg-white: #ffffff;           /* White */
    --border-color: #e5e7eb;       /* Borders */
}
```

**Popular Color Palettes:**

**Modern Blue:**
```css
--primary-color: #3b82f6;
--secondary-color: #1e40af;
--accent-color: #f59e0b;
```

**Creative Purple:**
```css
--primary-color: #a855f7;
--secondary-color: #7e22ce;
--accent-color: #06b6d4;
```

**Minimalist Black:**
```css
--primary-color: #1f2937;
--secondary-color: #111827;
--accent-color: #ec4899;
```

### Step 5: Test the Website

1. Open `index.html` in your web browser
2. Test on different devices:
   - Desktop (1920x1080)
   - Tablet (768x1024)
   - Mobile (375x667)

3. Test all features:
   - Navigation menu
   - Portfolio filters
   - Contact form
   - Smooth scrolling
   - Mobile hamburger menu

### Step 6: Deploy to Web

#### Option A: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag and drop your project folder
4. Your site is live!

#### Option B: GitHub Pages
1. Create GitHub account
2. Create new repository
3. Upload your files
4. Go to Settings > Pages > Source: main branch
5. Site is live at `yourusername.github.io/portfolio`

#### Option C: Web Hosting
1. Upload files via FTP to your hosting provider
2. Ensure all files are in correct folder structure
3. Access via your domain

## Advanced Customization

### Changing Fonts

Edit the Google Fonts import in `index.html` (line 17-18):

```html
<!-- Current fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

<!-- Browse fonts at fonts.google.com and replace -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;500&display=swap" rel="stylesheet">
```

Then update CSS:
```css
h1, h2, h3 {
    font-family: 'Playfair Display', serif;
}

body {
    font-family: 'Lato', sans-serif;
}
```

### Adding More Portfolio Items

Duplicate this block in the portfolio grid:

```html
<div class="portfolio-item" data-category="thumbnail">
    <div class="portfolio-card">
        <img src="assets/your-image.jpg" alt="Project Name" class="portfolio-image" loading="lazy">
        <div class="portfolio-overlay">
            <h3>Your Project Title</h3>
            <p>Project description</p>
        </div>
    </div>
</div>
```

The `data-category` attribute must be:
- `thumbnail` for thumbnails
- `poster` for posters
- `logo` for logos
- `creative` for ad creatives

### Setting Up Contact Form Email

Currently, the form logs to console. To send real emails, use Formspree (free):

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Get your form URL
4. Replace in `index.html` form tag (line ~232):

```html
<!-- BEFORE -->
<form class="contact-form" id="contactForm" novalidate>

<!-- AFTER -->
<form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

And remove the JavaScript form validation handler.

### Adding Google Analytics

Add this before `</body>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics ID.

### Changing Animation Speeds

Edit `styles.css` to modify animation durations:

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

Change `0.3s` to faster (e.g., `0.2s`) or slower (e.g., `0.5s`).

### Disabling Animations (for Performance)

Add to `styles.css`:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

## Common Issues & Solutions

### Images Not Showing
- ✓ Check file paths in `src` attributes
- ✓ Ensure images are in `assets/` folder
- ✓ Verify file names match exactly (case-sensitive)

### Form Not Submitting
- ✓ Check browser console for errors
- ✓ Ensure email format is valid
- ✓ All fields must be filled

### Mobile Menu Not Working
- ✓ Check if `script.js` is loaded
- ✓ Verify hamburger element exists
- ✓ Check browser console for JavaScript errors

### Animations Not Showing
- ✓ Ensure CSS file is loaded
- ✓ Check browser doesn't have reduced-motion enabled
- ✓ Try hard refresh (Ctrl+Shift+R)

### Colors Not Changing
- ✓ Clear browser cache
- ✓ Check CSS syntax is correct
- ✓ Verify hex color codes are valid

## Performance Optimization Tips

1. **Image Optimization**:
   - Compress all images
   - Use appropriate dimensions
   - Convert to WebP format (optional)

2. **Caching**:
   - Enable browser caching on server
   - Minify CSS and JavaScript (optional)

3. **Loading**:
   - Images use lazy loading automatically
   - Minimal JavaScript overhead
   - Optimized CSS selectors

4. **SEO**:
   - Update meta description in `index.html`
   - Add proper alt text to images
   - Use semantic HTML (already included)

## Security Best Practices

1. **Form Handling**:
   - Use HTTPS (enabled by Netlify/GitHub Pages)
   - Validate all inputs (already implemented)
   - Use trusted form service (Formspree)

2. **Content Security**:
   - Only load from trusted sources
   - Keep images optimized
   - No sensitive data in client code

## Mobile Optimization Checklist

- ✓ Test on multiple devices
- ✓ Check touch-friendly button sizes (min 44x44px)
- ✓ Verify hamburger menu works
- ✓ Test form on mobile
- ✓ Check images load correctly
- ✓ Verify text is readable
- ✓ Test on 4G connection

## Maintenance

### Regular Updates
1. Check for broken links quarterly
2. Test form submissions monthly
3. Update images as new work is completed
4. Monitor analytics (if enabled)

### Backups
Keep copies of:
- Original design files
- Website files (HTML, CSS, JS)
- Images (high-resolution)

---

**You're all set! Your professional portfolio is ready to impress potential clients.**
