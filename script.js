// Sample data for student council members
const councilMembers = [
    {
        name: "BPH",
        position: "Badan Pengurus Harian",
        bio: "Ketua, Wakil Ketua, Sekretaris, Bendahara",
        image: "👨🏻‍💼"
    },
    {
        name: "Komisi A",
        position: "Komisi A MPK",
        bio: "Menerima Aspirasi Siswa",
        image: "📬"
    },
    {
        name: "Komisi B",
        position: "Komisi B MPK",
        bio: "Mengevaluasi Program",
        image: "💻"
    },
    {
        name: "Komisi C",
        position: "Komisi C MPK",
        bio: "Mengawasi Kinerja OSIS",
        image: "📷"
    },
    {
        name: "Komisi D",
        position: "Komisi D MPK",
        bio: "Humas",
        image: "📣"
    },
    {
        name: "Komisi E",
        position: "Komisi E MPK",
        bio: "Kreativitas & Inovasi",
        image: "🎨"
    },
];

// Sample data for upcoming events
const upcomingEvents = [
    {
        title: "Suryastra",
        date: "2024-10-27",
        time: "7:00 AM - 11:00 AM",
        location: "Lapangan Utam SMAN 4 Cibinong",
        description: "Pemilihan Ketua Osis Periode 2024/2025"
    },
    {
        title: "Edufair 2025",
        date: "2025-01-11",
        time: "7:00 AM - 3:00 PM",
        location: "Lapangan Utama & Aula SMAN 4 Cibinong",
        description: "Pameran Perguruan Tinggi Negeri & Swasta serta Kedinasan"
    },
    {
        title: "MPLS",
        date: "2025-07-18",
        time: "6:00 AM - 3:00 PM",
        location: "SMAN 4 Cibinong",
        description: "Masa Pengenalan Lingkungan Sekolah bagi Peserta Didik Baru SMAN 4 Cibinong"
    },
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    populateCouncilMembers();
    populateEvents();
    initContactForm();
    initScrollEffects();
    initCTAFunctionality();
});

// Mobile Navigation Toggle
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Populate Council Members
function populateCouncilMembers() {
    const councilGrid = document.getElementById('council-grid');

    if (councilGrid) {
        councilMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'council-member';

            memberCard.innerHTML = `
                <div class="member-image">
                    ${member.image}
                </div>
                <div class="member-info">
                    <h3 class="member-name">${member.name}</h3>
                    <p class="member-position">${member.position}</p>
                    <p class="member-bio">${member.bio}</p>
                </div>
            `;

            councilGrid.appendChild(memberCard);
        });
    }
}

// Populate Events
function populateEvents() {
    const eventsGrid = document.getElementById('events-grid');

    if (eventsGrid) {
        upcomingEvents.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';

            const eventDate = new Date(event.date);
            const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                              'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

            eventCard.innerHTML = `
                <div class="event-date">
                    <div class="event-month">${monthNames[eventDate.getMonth()]}</div>
                    <div class="event-day">${eventDate.getDate()}</div>
                </div>
                <div class="event-content">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-time">${event.time}</p>
                    <p class="event-location">${event.location}</p>
                    <p class="event-description">${event.description}</p>
                </div>
            `;

            eventsGrid.appendChild(eventCard);
        });
    }
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            const submitButton = contactForm.querySelector('.primary-button');
            const originalText = submitButton.textContent;

            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Simulate API call
            setTimeout(() => {
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Scroll Effects
function initScrollEffects() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--background)';
            header.style.backdropFilter = 'none';
        }

        lastScrollTop = scrollTop;
    });
}

// CTA Button Functionality
function initCTAFunctionality() {
    const ctaButton = document.getElementById('cta-button');
    const viewAllEventsButton = document.getElementById('view-all-events');

    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Scroll to contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = contactSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Show notification
                showNotification('Silahkan Hubungi Kami!', 'info');
            }
        });
    }

    if (viewAllEventsButton) {
        viewAllEventsButton.addEventListener('click', function() {
            // Scroll to events section
            const eventsSection = document.querySelector('#events');
            if (eventsSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = eventsSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add notification styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: 'var(--border-radius)',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        boxShadow: 'var(--shadow-lg)'
    });

    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = 'var(--success-color)';
            break;
        case 'error':
            notification.style.background = '#ef4444';
            break;
        case 'info':
        default:
            notification.style.background = 'var(--primary-color)';
            break;
    }

    // Add to document
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Utility function to debounce events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some interactive animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.stat, .council-member, .event-card');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
