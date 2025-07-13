document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section');

  // 모바일 메뉴 토글
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // 햄버거 아이콘 변경 (X 모양)
    const icon = menuToggle.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
  });

  // 네비게이션 링크 클릭 시 메뉴 닫기 (모바일)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  // 스크롤에 따른 네비게이션 활성화
  const activateNavOnScroll = () => {
    let currentSection = '';
    const headerHeight = document.querySelector('header').offsetHeight;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 50; // 약간의 오차 보정
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', activateNavOnScroll);
  activateNavOnScroll(); // 페이지 로드 시 실행

});
