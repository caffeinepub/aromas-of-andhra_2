# Aromas of Andhra

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full restaurant website for "Aromas of Andhra"
- Sticky navigation bar with logo, About Us, Menu, Gallery, Contact Us, Order Now links
- Hero section with biryani background image, restaurant name, tagline, and CTA
- About Us section with highlighted tagline "Where every plate tells a story of Andhra"
- Full menu section with categories: Soups, Veg Starters, Non Veg Starters, Seafood Starters, Tandoori, Veg Main Course, Non Veg Main Course, Breads, Rice, Biryani, Pulao (Veg/Non-Veg), Fried Rice, Noodles, Snack, Drinks/Beverages, Desserts - all with prices and veg/non-veg badges
- Gallery section with food and restaurant images
- Contact Us section with phone 9494260099 and Google Maps address link
- Order Now button linking to Zomato for Aromas of Andhra
- Fully mobile-responsive with viewport meta tag, flexible layouts, media queries

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Generate hero background biryani image, logo image, and food gallery images
2. Generate Motoko backend (minimal, for page visit tracking)
3. Build React frontend with:
   - Viewport meta tag in index.html
   - Sticky navbar with smooth scroll links
   - Hero section with full-screen biryani background, overlay, restaurant name
   - About Us section with highlighted quote
   - Menu section with tab/category navigation, item cards with veg/non-veg indicators and prices
   - Gallery section with food images grid
   - Contact Us section with phone number and Google Maps link
   - Order Now CTA linking to Zomato
   - All CSS using flexbox/grid with flex-wrap, max-width: 100%, media queries for mobile
