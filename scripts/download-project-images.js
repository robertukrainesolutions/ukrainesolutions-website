const fs = require('fs');
const https = require('https');
const path = require('path');
const { projectData } = require('../lib/projects.ts');

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filepath);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        fs.unlinkSync(filepath);
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download: ${url} - Status: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

// Function to fetch HTML and extract images
async function fetchProjectImages(projectUrl, projectSlug) {
  return new Promise((resolve, reject) => {
    https.get(projectUrl, (response) => {
      let html = '';
      response.on('data', (chunk) => {
        html += chunk;
      });
      response.on('end', () => {
        // Extract image URLs
        const imageRegex = /https:\/\/ukrainesolutions\.org\/wp-content\/uploads\/[^"'\s<>]+\.(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)/gi;
        const matches = html.match(imageRegex);
        if (matches) {
          const uniqueImages = [...new Set(matches)];
          resolve(uniqueImages.slice(0, 20)); // Limit to 20 images per project
        } else {
          resolve([]);
        }
      });
    }).on('error', reject);
  });
}

// Main function
async function downloadAllProjectImages() {
  const projectsDir = path.join(__dirname, '../public/uploads/projects/individual');
  
  // Ensure directory exists
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  const projects = Object.values(projectData);
  const allImages = [];

  for (const project of projects) {
    console.log(`\nProcessing: ${project.title}`);
    console.log(`URL: ${project.url}`);
    
    try {
      const imageUrls = await fetchProjectImages(project.url, project.slug);
      console.log(`Found ${imageUrls.length} images`);
      
      const projectImages = [];
      for (let i = 0; i < imageUrls.length; i++) {
        const imageUrl = imageUrls[i];
        const urlPath = new URL(imageUrl).pathname;
        const filename = path.basename(urlPath);
        const filepath = path.join(projectsDir, `${project.slug}-${i + 1}-${filename}`);
        
        try {
          await downloadImage(imageUrl, filepath);
          const relativePath = `/uploads/projects/individual/${path.basename(filepath)}`;
          projectImages.push(relativePath);
          console.log(`  ✓ Downloaded: ${filename}`);
        } catch (err) {
          console.log(`  ✗ Failed: ${filename} - ${err.message}`);
        }
      }
      
      allImages.push({
        slug: project.slug,
        title: project.title,
        images: projectImages
      });
      
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (err) {
      console.error(`Error processing ${project.title}:`, err.message);
    }
  }

  // Save image mapping
  const mappingPath = path.join(__dirname, '../lib/project-images.json');
  fs.writeFileSync(mappingPath, JSON.stringify(allImages, null, 2));
  console.log(`\n✓ Saved image mapping to ${mappingPath}`);
  
  return allImages;
}

// Run if called directly
if (require.main === module) {
  downloadAllProjectImages()
    .then(() => {
      console.log('\n✓ All images downloaded successfully!');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Error:', err);
      process.exit(1);
    });
}

module.exports = { downloadAllProjectImages };
