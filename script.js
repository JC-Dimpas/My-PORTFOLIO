document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const infoSections = document.querySelectorAll('.info-section');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');

            infoSections.forEach(section => {
                section.classList.remove('active');
            });

            document.getElementById(sectionId).classList.add('active');

            // Click effect
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300); // Remove clicked class after 300ms

            this.classList.toggle('flipped');
        });
    });

    if (infoSections.length > 0) {
        infoSections[0].classList.add('active');
    }
});