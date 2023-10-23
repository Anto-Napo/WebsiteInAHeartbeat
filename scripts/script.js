const headerSection = document.getElementById('header');
const newsSection = document.getElementById('news');
const socialSection = document.getElementById('social');
const contactSection = document.getElementById('contact');

function goToSection(section) {
  // window.location.href = `#${section}`;
  if (section ==='header') {
    headerSection.scrollIntoView({behavior: 'smooth'});
  } else if (section === 'news') {
    newsSection.scrollIntoView({behavior: 'smooth'});
  } else if (section === 'social') {
    socialSection.scrollIntoView({behavior: 'smooth'});
  } else if (section === 'contact') {
    contactSection.scrollIntoView({behavior: 'smooth'});
  }
}

function socialClick(social) {
  if (social === 'discord') {
    window.open('https://discord.gg/vebCs5t5Fm', '_blank');
  } else if (social === 'github') {
    window.open('https://github.com/Anto-Napo/in_a_heartbeat_website', '_blank');
  } else if (social === 'twitter') {
    window.open('https://twitter.com/support28288', '_blank');
  } 
}

function contactClick(contact) {
  if (contact === 'gmail') {
    window.open('https://mail.google.com/mail/u/0/?view=cm&to=inaheartbeathelper@gmail.com', '_blank');
  } else if (contact === 'forms') {
    window.open('https://forms.gle/vZ8Fktgt5ZrUKqmX9', '_blank');
  }
}