// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "The lab uses mixed methods to study cognitive diversity, development, and dynamics – how thinking varies across cultures, ages, and contexts.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "in reverse chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publications/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Lab members and affiliates",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-paper-out-today-in-psychological-science",
          title: 'New paper out today in Psychological Science!',
          description: "",
          section: "News",},{id: "news-new-paper-with-dorsa-amir-in-trends-in-cognitive-science-asks-what-does-it-mean-for-culture-to-shape-cognition",
          title: 'New paper with Dorsa Amir in Trends in Cognitive Science asks “What does...',
          description: "",
          section: "News",},{id: "news-new-paper-published-in-nature-communications-on-how-kids-across-cultures-learn-by-decoding-patterns",
          title: 'New paper published in Nature Communications on how kids across cultures learn by...',
          description: "",
          section: "News",},{id: "projects-cognitive-development",
          title: 'Cognitive development',
          description: "How thinking changes over time, as children are enculturated",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Development/";
            },},{id: "projects-cognitive-diversity",
          title: 'Cognitive diversity',
          description: "How minds differ across cultures and languages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Diversity/";
            },},{id: "projects-cognitive-dynamics",
          title: 'Cognitive dynamics',
          description: "How mental representations are rapidly shaped and reshaped by experience",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Dynamics/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/benjaminpitt.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%70%69%74%74@%75%6D%61%73%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4912-5627", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rcdeLysAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://drive.google.com/file/d/18p8OvVOr71KARYvv90qTqgYQNLEB0iK7/view?usp=sharing", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
