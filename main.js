const teamMembers = [
  {
      name: 'Sandeep Soni',
      image: 'resources/ss.jpg',
      links: {
          linkedin: 'https://www.linkedin.com/in/sandeep-soni-56b58824b/',
      }
  },
  {
      name: 'Japneet Singh',
      image: 'resources/js.jpg',
      links: {
          linkedin: 'https://www.linkedin.com/in/japneet-singh-81347b28b/'
      }
  },
  {
      name: 'Atanu Kayal',
      image: 'resources/ak.jpg',
      links: {
          linkedin: 'https://www.linkedin.com/in/atanu-kayal-94433028b/',
      }
  },
  {
      name: 'Varchasva Raj Saxena',
      image: 'resources/vrs.jpg',
      links: {
          linkedin: 'https://www.linkedin.com/in/varchasva-raj-saxena-539a7528a/',
      }
  },
  {
      name: 'Vishal',
      image: 'resources/vd.jpg',
      links: {
          linkedin: 'https://www.linkedin.com/in/vishal-dhaniya-b24718282/',
      }
  }
];

// Populate team members
document.addEventListener('DOMContentLoaded', () => {
  const teamSection = document.querySelector('#team .grid');
  teamMembers.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.className = 'team-card';
      memberCard.innerHTML = `
          <div class="overflow-hidden">
              <img src="${member.image}" alt="${member.name}" class="team-image">
          </div>
          <div class="p-4 text-center">
              <h3 class="text-xl font-semibold mb-3">${member.name}</h3>
              <div class="flex justify-center gap-4">
                  ${member.links.linkedin ? `
                      <a href="${member.links.linkedin}" class="social-icon" target="_blank">
                          <i class="fab fa-linkedin"></i>
                      </a>
                  ` : ''}
              </div>
          </div>
      `;
      teamSection.appendChild(memberCard);
  });

  // Sticky navbar effect
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
          navbar.classList.add('shadow-xl');
      } else {
          navbar.classList.remove('shadow-xl');
      }
  });
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  const slides = track.children;
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateSlide() {
      const width = slides[0].clientWidth;
      track.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  document.getElementById('nextSlide').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
  });

  document.getElementById('prevSlide').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
  }, 5000);

  window.addEventListener('resize', updateSlide);
  updateSlide();
});