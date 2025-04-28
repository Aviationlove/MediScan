document.addEventListener('DOMContentLoaded', function() {
  // Load navigation template
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    fetch('nav-template.html')
      .then(response => response.text())
      .then(data => {
        navPlaceholder.innerHTML = data;
        
        // Set active navigation link based on current page
        const currentPage = window.location.pathname.split('/').pop();
        setActiveNavLink(currentPage);
        
        // Initialize mobile menu functionality
        initializeMobileNav();
      })
      .catch(error => console.error('Error loading navigation:', error));
  }
  
  // Set the active navigation link
  function setActiveNavLink(currentPage) {
    if (!currentPage) currentPage = 'index.html'; // Default to home page
    
    // Get all navigation links (both desktop and mobile)
    const desktopLinks = document.querySelectorAll('.nav-links a');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    
    // Function to highlight the active link
    const highlightLink = (links) => {
      links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('text-blue-600');
          link.style.fontWeight = '700';
        }
      });
    };
    
    // Apply to both navigation menus
    highlightLink(desktopLinks);
    highlightLink(mobileLinks);
  }
  
  // Initialize mobile navigation functionality
  function initializeMobileNav() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuButton && mobileNav) {
      mobileMenuButton.addEventListener('click', () => {
        // Show mobile menu by transforming it back into view
        mobileNav.style.transform = 'translateY(0)';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      });
    }
    
    if (mobileNavClose && mobileNav) {
      mobileNavClose.addEventListener('click', () => {
        // Hide mobile menu
        mobileNav.style.transform = 'translateY(-100%)';
        document.body.style.overflow = ''; // Re-enable scrolling
      });
    }
    
    // Close mobile nav when clicking a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    if (mobileNavLinks.length > 0 && mobileNav) {
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          // Hide mobile menu when a link is clicked
          mobileNav.style.transform = 'translateY(-100%)';
          document.body.style.overflow = ''; // Re-enable scrolling
        });
      });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('shadow-md', 'py-2');
          header.classList.remove('py-4');
        } else {
          header.classList.remove('shadow-md', 'py-2');
          header.classList.add('py-4');
        }
      }
    });
  }
});