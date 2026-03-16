import fs from 'fs';

async function fetchWikiImage(query) {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&pithumbsize=800&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1`;
    const res = await fetch(url).then(r => r.json());
    if (res.query && res.query.pages) {
      const pages = res.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pages[pageId] && pages[pageId].thumbnail) {
        return pages[pageId].thumbnail.source;
      }
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}

async function run() {
  const chains = [
    'Apollo Hospital', 'Fortis Hospital', 'Max Hospital', 'Medanta Hospital', 
    'AIIMS Hospital', 'Civil Hospital', 'Global Hospital India', 
    'Care Hospitals', 'Sterling Hospital', 'Wockhardt Hospital',
    'Yatharth Hospital', 'Jupiter Hospital',
    'Narayana Health', 'Manipal Hospital', 'Kokilaben Hospital',
    'Lilavati Hospital', 'Breach Candy Hospital', 'Jaslok Hospital', 
    'Hinduja Hospital', 'Hiranandani Hospital', 'KIMS Hospital'
  ];

  const results = {};
  for (const chain of chains) {
    const url = await fetchWikiImage(chain);
    if (url) {
      results[chain.split(' ')[0]] = url;
      console.log(`Found ${chain}: ${url}`);
    } else {
      console.log(`Not found: ${chain}`);
    }
  }
  
  fs.writeFileSync('wiki_images.json', JSON.stringify(results, null, 2));
}

run();
