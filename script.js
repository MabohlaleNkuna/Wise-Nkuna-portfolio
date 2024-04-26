anime.timeline({loop: true})
  .add({
    targets: '.header-text .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1000,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.header-text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutCirc",
    delay: 900
  });
  const projectsContainer = document.getElementById('projects');

document.getElementById('projects-left').addEventListener('click', function() {
    projectsContainer.scrollBy({
        left: -300, // Adjust the value based on the width of your projects
        behavior: 'smooth'
    });
});

document.getElementById('projects-right').addEventListener('click', function() {
    projectsContainer.scrollBy({
        left: 300, // Adjust the value based on the width of your projects
        behavior: 'smooth'
    });
});
