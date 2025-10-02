# Majelis Perwakilan Kelas (MPK) Website

A modern, responsive website for SMAN 4 Cibinong's Majelis Perwakilan Kelas (MPK), designed to showcase council members, upcoming events, and provide an easy way for students to get involved and stay informed.

## 🌟 Features

### Core Features
- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Navigation**: Mobile-friendly hamburger menu with smooth scrolling
- **Dynamic Content**: JavaScript-powered content population for council members and events
- **Contact Form**: Functional contact form with validation and user feedback
- **Scroll Effects**: Engaging scroll-based animations and header effects

### Sections
- **Hero Section**: Eye-catching landing area with call-to-action
- **About Section**: Information about the student council with statistics
- **Council Members**: Dynamic grid showcasing student council members
- **Events Section**: Upcoming events with detailed information
- **Contact Section**: Contact form and information for getting in touch
- **Footer**: Quick links, social media, and school information

## 🚀 Technologies Used

- **HTML5**: Semantic markup with modern HTML5 elements
- **CSS3**: Advanced styling with:
  - CSS Grid and Flexbox for layouts
  - CSS Variables for consistent theming
  - Smooth animations and transitions
  - Mobile-first responsive design
- **JavaScript (ES6+)**: Interactive functionality including:
  - DOM manipulation
  - Event handling
  - Form validation
  - Scroll effects
  - Dynamic content loading

## 📁 Project Structure

```
student-council-website/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # CSS file with modern styling and responsive design
├── script.js           # JavaScript file for interactivity and functionality
├── logo.svg            # MPK organization logo
└── README.md           # Project documentation (this file)
```

## 🛠️ Installation & Setup

1. **Clone or Download**: Get the project files to your local machine
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Local Server** (Optional): For development, you can serve the files using a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

## 🎯 Usage

### Navigation
- Use the top navigation bar to jump to different sections
- On mobile devices, tap the hamburger menu to access navigation
- All navigation links use smooth scrolling for better UX

### Council Members
- View information about each student council member
- Member cards include position, bio, and visual representation
- Hover effects provide interactive feedback

### Events
- Browse upcoming school events with detailed information
- Each event card shows date, time, location, and description
- "View All Events" button scrolls to the events section

### Contact
- Fill out the contact form to reach the student council
- Form includes validation for required fields and email format
- Success/error notifications provide user feedback

### Interactive Elements
- **CTA Button**: "Get Involved" button scrolls to contact section
- **Scroll Effects**: Header becomes translucent when scrolling
- **Animations**: Elements fade in as they come into view
- **Notifications**: User feedback for form submissions and interactions

## 🎨 Customization

### Colors and Styling
The website uses CSS variables for easy theming. Main colors can be modified in `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #64748b;    /* Secondary elements */
    --accent-color: #f59e0b;       /* Call-to-action elements */
    /* ... other variables */
}
```

### Content
- **Council Members**: Update the `councilMembers` array in `script.js`
- **Events**: Modify the `upcomingEvents` array in `script.js`
- **School Information**: Update contact details and school info in HTML

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any necessary JavaScript functionality in `script.js`

## 📱 Responsive Design

The website is built with a mobile-first approach and includes breakpoints for:
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

Key responsive features:
- Collapsible navigation menu on mobile
- Flexible grid layouts that adapt to screen size
- Scalable typography and spacing
- Touch-friendly interactive elements

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Features

- **Optimized Loading**: Minimal external dependencies
- **Efficient CSS**: Uses modern CSS features for better performance
- **Lazy Loading**: Content loads as needed
- **Smooth Animations**: Hardware-accelerated transitions
- **Clean Code**: Well-structured and maintainable codebase

## 📈 Future Enhancements

Potential improvements and additions:
- **Content Management**: Backend integration for dynamic content updates
- **Event Calendar**: Interactive calendar view for events
- **Image Gallery**: Photo galleries for events and activities
- **News Section**: Latest news and announcements
- **Social Media Integration**: Live feeds from social media accounts
- **Accessibility Improvements**: Enhanced ARIA labels and keyboard navigation
- **Dark Mode**: Theme toggle for user preference
- **Search Functionality**: Search through events and content

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices and browsers
5. Submit a pull request

## 📄 License

This project is created for educational purposes. Feel free to use and modify as needed.

## 📞 Support

For questions or support regarding this website:
- Email: studentcouncil@excellencehigh.edu
- Office: Room 201, Student Center
- Office Hours: Monday - Friday, 3:00 PM - 5:00 PM

---

**Built with ❤️ for MPK SMA Negeri 4 Cibinong**
