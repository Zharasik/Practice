document.addEventListener('DOMContentLoaded', function() {
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.advantage-card, .catalog-item, .portfolio-item, .service-item, .blog-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 

    
    const form = document.querySelector('.callback-row form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            
            
            console.log('Форма отправлена:', { name, phone });
            
           
            this.reset();
            
            
            alert('Спасибо! Мы скоро с вами свяжемся.');
        });
    }

   
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.icon, .icon-large');
            if (icon) {
                icon.style.transform = 'rotate(45deg)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.icon, .icon-large');
            if (icon) {
                icon.style.transform = 'rotate(0)';
            }
        });
    });

    
    const langSwitcher = document.querySelector('.lang');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function(e) {
            e.preventDefault();
            const currentLang = this.textContent.trim();
            const newLang = currentLang.includes('kz') ? 'ru | kz' : 'kz | ru';
            this.textContent = newLang;
           
        });
    }

    
    const submitButton = document.querySelector('.button');
    if (submitButton) {
        submitButton.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.arrow');
            if (arrow) {
                arrow.style.transform = 'translateX(4px)';
            }
        });
        
        submitButton.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.arrow');
            if (arrow) {
                arrow.style.transform = 'translateX(0)';
            }
        });
    }
});


window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.advantage-card, .catalog-item, .portfolio-item');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    });
    
    ғ
    setTimeout(() => {
        const event = new Event('scroll');
        window.dispatchEvent(event);
    }, 300);
});