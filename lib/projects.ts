// Project data with URLs and metadata
export const projectData: Record<string, {
  url: string;
  title: string;
  category: string;
  slug: string;
  featuredImage?: string;
}> = {
  'volunteering-and-help-center': {
    url: 'https://ukrainesolutions.org/our-main-focus/volontiring-and-help-center/',
    title: 'Volunteering and Help center',
    category: 'Our Main Focus',
    slug: 'volunteering-and-help-center',
  },
  'ukrainian-cultural-fundraiser-louisa-va': {
    url: 'https://ukrainesolutions.org/our-main-focus/ukrainian-cultural-fundraiser-in-louisa-va/',
    title: 'Ukrainian Cultural Fundraiser in Louisa, VA',
    category: 'Our Main Focus',
    slug: 'ukrainian-cultural-fundraiser-louisa-va',
  },
  'charity-concert-ukraines-defenders': {
    url: 'https://ukrainesolutions.org/our-main-focus/charity-concert-for-ukraines-defenders/',
    title: 'Charity Concert for Ukraine\'s Defenders',
    category: 'Our Main Focus',
    slug: 'charity-concert-ukraines-defenders',
  },
  '2024-work-in-pictures': {
    url: 'https://ukrainesolutions.org/our-main-focus/2024-ukraine-solutions-work-in-pictures/',
    title: '2024 Ukraine Solutions work in pictures',
    category: 'Our Main Focus',
    slug: '2024-work-in-pictures',
  },
  'advocacy-capitol-hill-april-2024': {
    url: 'https://ukrainesolutions.org/advocacy/advocacy-for-ukraine-on-capitol-hill-april-2024/',
    title: 'Advocacy for Ukraine on Capitol Hill – April 2024',
    category: 'Advocacy for Ukraine',
    slug: 'advocacy-capitol-hill-april-2024',
  },
  'summit-september-2024': {
    url: 'https://ukrainesolutions.org/advocacy/summit-september-2024/',
    title: 'Summit September 2024',
    category: 'Advocacy for Ukraine',
    slug: 'summit-september-2024',
  },
  'action-summit-spring-2025': {
    url: 'https://ukrainesolutions.org/advocacy/action-summit-spring-2025/',
    title: 'Action Summit – Spring 2025',
    category: 'Advocacy for Ukraine',
    slug: 'action-summit-spring-2025',
  },
  'support-ukraine-above-politics': {
    url: 'https://ukrainesolutions.org/advocacy/support-ukraine-above-politics/',
    title: 'Support Ukraine Above Politics',
    category: 'Our Main Focus',
    slug: 'support-ukraine-above-politics',
  },
  'tourniquets-save-lives': {
    url: 'https://ukrainesolutions.org/our-main-focus/ukraine-solutions-empowering-our-soldiers-with-tourniquets-to-save-lives/',
    title: 'Ukraine Solutions: Empowering Our Soldiers with Tourniquets to Save Lives!',
    category: 'Our Main Focus',
    slug: 'tourniquets-save-lives',
  },
  'water-filters-frontline': {
    url: 'https://ukrainesolutions.org/our-main-focus/ukraine-solutions-supporting-ukrainian-people-on-the-frontline-with-water-filters/',
    title: 'Ukraine Solutions: Supporting Ukrainian People on the Frontline with Water Filters!',
    category: 'Our Main Focus',
    slug: 'water-filters-frontline',
  },
  'project-spider-boots': {
    url: 'https://ukrainesolutions.org/our-main-focus/project-spider-boots/',
    title: 'Project Spider Boots',
    category: 'Advocacy for Ukraine',
    slug: 'project-spider-boots',
  },
  'standing-strong-ukraine': {
    url: 'https://ukrainesolutions.org/advocacy/standing-strong-for-ukraine/',
    title: 'Standing Strong for Ukraine',
    category: 'Our Main Focus',
    slug: 'standing-strong-ukraine',
  },
  'harnessing-innovation-adversity': {
    url: 'https://ukrainesolutions.org/our-main-focus/harnessing-innovation-amidst-adversity/',
    title: 'Harnessing Innovation Amidst Adversity',
    category: 'Our Main Focus',
    slug: 'harnessing-innovation-adversity',
  },
  'empowering-our-heroes': {
    url: 'https://ukrainesolutions.org/our-main-focus/empowering-our-heroes/',
    title: 'Empowering Our Heroes',
    category: 'Advocacy for Ukraine',
    slug: 'empowering-our-heroes',
  },
  'virginians-fear-family': {
    url: 'https://ukrainesolutions.org/advocacy/virginians-fear-for-family-back-home-in-ukraine/',
    title: 'Virginians fear for family back home in Ukraine',
    category: 'Our Main Focus',
    slug: 'virginians-fear-family',
  },
  'ready-meals': {
    url: 'https://ukrainesolutions.org/our-main-focus/ready-meals/',
    title: 'Ready meals',
    category: 'Our Main Focus',
    slug: 'ready-meals',
  },
  'starlink': {
    url: 'https://ukrainesolutions.org/our-main-focus/starlink/',
    title: 'Starlink',
    category: 'Our Main Focus',
    slug: 'starlink',
  },
  'project-army-drones': {
    url: 'https://ukrainesolutions.org/our-main-focus/project-army-of-drones/',
    title: 'Project army of drones',
    category: 'Advocacy for Ukraine',
    slug: 'project-army-drones',
  },
  'ukranian-days-dc': {
    url: 'https://ukrainesolutions.org/advocacy/ukranian-days-in-dc/',
    title: 'Ukranian Days in DC',
    category: 'Advocacy for Ukraine',
    slug: 'ukranian-days-dc',
  },
  'advocacy-september-2022': {
    url: 'https://ukrainesolutions.org/advocacy/advocacy-in-september-2022/',
    title: 'Advocacy In September 2022',
    category: 'Advocacy for Ukraine',
    slug: 'advocacy-september-2022',
  },
};

export function getProjectBySlug(slug: string) {
  return projectData[slug];
}

export function getAllProjectSlugs() {
  return Object.keys(projectData);
}

