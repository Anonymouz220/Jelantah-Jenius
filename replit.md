# Jelantah Jenius

## Overview

Jelantah Jenius is a static informational website for an Indonesian environmental initiative focused on used cooking oil recycling and sustainability. The project aims to raise awareness about proper cooking oil disposal, provide collection systems, and partner with industries to transform waste oil into renewable energy resources.

The website serves as a public-facing platform to educate visitors about the organization's vision, mission, programs, and team while providing contact information for community engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology**: Pure HTML, CSS, and vanilla JavaScript static website
- **No build tools or frameworks**: Simple file-based structure without bundlers, transpilers, or frontend frameworks
- **Styling approach**: Single CSS file (`style.css`) with CSS custom properties (variables) for theming
- **Design system**: Uses a consistent color palette derived from brand colors (olive green, orange accents)
- **Typography**: Google Fonts (Plus Jakarta Sans) loaded via CDN
- **Icons**: Font Awesome 6.4.0 loaded via CDN

### Page Structure
- **Multi-page static site**: Five main HTML pages (index, about, articles, programs, contact)
- **Shared navigation**: Consistent navbar component across all pages with active state indicators
- **Responsive design**: Mobile menu implementation with hamburger/cancel button toggle

### JavaScript Functionality
- **Minimal scripting**: Single `script.js` file handles:
  - Sticky navigation on scroll
  - Mobile menu open/close functionality
  - Navigation link click handlers for mobile menu closure

### Asset Management
- **Images**: Stored in `attached_assets/` directory including logo and stock images
- **External images**: Some images loaded from Unsplash CDN

## External Dependencies

### CDN Resources
| Resource | Purpose | URL |
|----------|---------|-----|
| Font Awesome 6.4.0 | Icon library | cdnjs.cloudflare.com |
| Google Fonts | Plus Jakarta Sans typography | fonts.googleapis.com |
| Unsplash | Stock photography | images.unsplash.com |

### Social Media Integrations
- Instagram: Links to @jelantahjenius.id profile
- Placeholder links for TikTok, Facebook, Twitter

### No Backend Dependencies
- This is a purely static website with no server-side processing
- No database connections
- No API integrations
- Contact form (if functional) would require external form handling service