# Assets Folder Structure

This folder contains all the static assets for the portfolio project, organized for easy maintenance and scalability.

## Folder Organization

```
src/assets/
├── images/          # All image files (PNG, JPG, SVG, etc.)
├── icons/           # Icon assets and SVG icons
├── styles/          # Global stylesheets and shared CSS
└── README.md        # This file
```

### `/images`
Contains all project images and visual assets:
- `profile.png` - Profile picture used in Home component
- `comerzio.png` - Comerzio project showcase image
- `e-commerce.png` - E-commerce store project image
- `music-app.png` - Music Academy app project image
- `nutrition .png` - Nutritionist website project image
- `portfolio design.png` - HTML/CSS portfolio project image
- `urbanloop.png` - UrbanLoop.tech website project image

### `/icons`
Reserved for icon assets (currently empty, ready for future SVG icons)

### `/styles`
Reserved for additional stylesheets (currently using global styles in `src/`)

## Usage Examples

### Importing Images in Components

```javascript
// Old way (not recommended)
import profilePic from "./profile.png";

// New way (recommended)
import profilePic from "../assets/images/profile.png";
```

### Best Practices
1. Keep images in the `/images` subfolder organized by type
2. Use meaningful filenames
3. Optimize images before adding them to the project
4. Keep the `/icons` folder for SVG icons and icon assets
5. Store any global stylesheets in `/styles`

## File Naming Conventions
- Use lowercase names
- Use hyphens for multi-word filenames: `my-image.png`
- For spaces, use hyphens instead: `portfolio-design.png` (recommended)

## Notes
- All imports in components have been updated to use the new asset paths
- The Components folder now contains only `.jsx` files
- This structure scales well as the project grows
