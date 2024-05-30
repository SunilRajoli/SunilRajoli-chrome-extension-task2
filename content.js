function scrapeProfile() {
  const name = document.querySelector('.text-heading-xlarge')?.innerText || "";
  const location = document.querySelector('.text-body-small')?.innerText || "";
  const about = document.querySelector('.pv-about__summary-text')?.innerText || "";
  const bio = document.querySelector('.pv-text-details__left-panel')?.innerText || "";
  const followerCount = document.querySelector('.pv-recent-activity-section__follower-count')?.innerText || "";
  const connectionCount = document.querySelector('.pv-top-card-v2-section__connections')?.innerText || "";

  const profileData = {
    name: name.trim(),
    location: location.trim(),
    about: about.trim(),
    bio: bio.trim(),
    followerCount: followerCount.trim(),
    connectionCount: connectionCount.trim()
  };

  console.log('Scraped profile data:', profileData); // Log the scraped data

  fetch('http://localhost:3000/api/profiles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profileData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Profile data successfully posted:', data); // Log the response from the server
  })
  .catch(error => {
    console.error('Error posting profile data:', error); // Log any error
  });
}

scrapeProfile();
