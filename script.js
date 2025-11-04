// Playlist data
const playlists = [
{
title: "🎬💗🎨 Cinema for the Soul | Best Films & Short Films | Thinking Provoking",
description: "A carefully curated collection of meaningful films and short films that provoke deep thinking and inspire positive change. This playlist features life-changing content with high impact value, offering revolutionary perspectives through cinema.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdEDsolXH0KRhc0GZpjMmt-b",
channel: "@WeAreMature",
categories: ["⭐ VVIMP", "🎬 Film"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "🇮🇳®⭐®🎬 Movies | Expose And Reality of Society",
description: "Powerful films that expose societal realities and hidden truths about Indian society. These movies serve as eye-openers with very high usefulness for creating social awareness and positive change.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OlB0vNkxN9r7EyKkG-4Pgw",
channel: "@DarkSideOf-India",
categories: ["⭐ VVIMP", "🎬 Film"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "🔞®🎬💀🥵 Cinema's Dark Side | Crime & R@pe in Indian Films",
description: "This playlist exposes the problematic portrayal of crime and sexual violence in Indian cinema. While highlighting negative aspects, it serves the important purpose of creating awareness about harmful content in films.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18MVNiAyemuWB5m-98wutnOz",
channel: "@DarkSideOf-India",
categories: ["⭐ VVIMP", "🎬 Film"],
impact: "Negative",
usefulness: "Very High"
},
{
title: "Great Indian Reformers | Leaders & Peoples | Hindi",
description: "Inspirational videos about India's greatest reformers and social leaders. Learn about their remarkable contributions and legacy through this highly useful biographical collection that promotes positive values.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghllP95ZIujl9eNuJndbweX8",
channel: "@HumanityWood",
categories: ["⭐ VVIMP", "📺 Video", "👤 Biography"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "🙏 Please Save My India 🇮🇳🥹✅ | Change My India",
description: "A compelling collection of videos advocating for positive change in India. This highly impactful playlist addresses social issues and promotes constructive transformation with very high usefulness for national development.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdGKgkSbYXNBqRPQQt_CXzyr",
channel: "@WeAreMature",
categories: ["⭐ VVIMP", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "1️⃣ -🕉️🔥Kattar Bhakti Songs | Kattar Devotional Songs | Propaganda Bhakti",
description: "This playlist examines devotional music with potential propaganda elements. While categorized as having negative impact due to agenda-based content, it provides important awareness about religious messaging in music.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bJKAQStQk-Gn3tq8IPl_zt",
channel: "@YouTubePlaylistHindi",
categories: ["🎵 Music", "🕉️ Hinduism", "⭐ VVIMP"],
impact: "Negative",
usefulness: "Very High"
},
{
title: "🇮🇳®⭐®😍💖 India | Beautiful India 😍 | I Love My India",
description: "Celebrate the incredible beauty and diversity of India through this stunning visual collection. High-quality videos showcasing the country's landscapes, culture, and people with positive impact.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PBS7pmJJoVFjqjBCR6MSiz",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Positive",
usefulness: "High"
},
{
title: "⭐®⭐ VVIMP VIDEOS | VERY VERY IMPORTANT VIDEOS",
description: "A comprehensive collection of highly important videos covering crucial topics. This playlist offers very high usefulness with positive impact, featuring essential content for informed awareness.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18MtYO3TLt-hS1VzwclxDgFo",
channel: "@DarkSideOf-India",
categories: ["⭐ VVIMP", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "🇮🇳®⭐®😍🐾 World of Animals | Beauty & Emotion in the Wild",
description: "Beautiful documentation of animal life showcasing emotional bonds and natural beauty in the wild. High-impact positive content that highlights the wonderful world of animals and their family connections.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OelB5bk13m1VNgkgmEqiJx",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Positive",
usefulness: "High"
},
{
title: "🇮🇳®😢🐾World Of Animals -The Unseen Suffering | Pain & Cruelty",
description: "This important playlist exposes the hidden suffering and cruelty faced by animals. While content has negative impact, it serves crucial awareness purpose with very high usefulness for animal welfare education.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18MSscw6Vl_2ZJAm-M_-sEAA",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Negative",
usefulness: "Very High"
},
{
title: "❌®😳🤢💩 The Negative Influence | Problematic Content",
description: "A critical examination of socially damaging messages in media and problematic content. This collection serves as important awareness tool about negative influences with very high usefulness for media literacy.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18Nw2k2HUJYUB9_wHN9JnuDQ",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Negative",
usefulness: "Very High"
},
{
title: "🇮🇳⚫ Dark India | Mass Level 👥 | India's Biggest Riots",
description: "Documenting India's collective tragedies and mass-level social crimes from history. While covering negative events, this playlist provides crucial historical awareness with very high educational value.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18M-JFgBXRcaMTHQGzqIpr17",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Negative",
usefulness: "Very High"
},
{
title: "🇮🇳⚫ Dark India | Individual Level 👤 | Crimes That Shocked",
description: "Covering individual-level crimes and personal tragedies that impacted the nation. This collection serves as important case studies with very high usefulness for understanding societal issues.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PvtkBXfpJqJaiII11wXaH5",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Negative",
usefulness: "Very High"
},
{
title: "Raajneetik Neta (Political Leaders) Of INDIA",
description: "Comprehensive coverage of India's political leaders and their contributions. This positive impact playlist offers very high usefulness for understanding political history and leadership in India.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18N3xjk8ec3ovdSKRgInh-v_",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "🔞®🇮🇳🔥💦 Best India Hot Sexy Bold Adult Music Videos",
description: "Collection of adult-oriented music videos and bold content from Indian entertainment. Categorized as negative impact due to sensational content, but provides important media analysis value.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NdKY9pjvGlh2EhamxXXQri",
channel: "@DarkSideOf-India",
categories: ["⭐ VVIMP", "🎵 Music"],
impact: "Negative",
usefulness: "Very High"
},
{
title: "🇮🇳®⭐®✊🏴‍☠️ Protest Music India | Expose Govt By Music",
description: "Powerful protest music that addresses social and political issues through songs. This positive impact playlist uses music as medium for social commentary with very high awareness value.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NvWMBJLqxewyGzM7pH2jVI",
channel: "@DarkSideOf-India",
categories: ["⭐ VVIMP", "🎵 Music"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "🇮🇳®🕵️‍♂️☠️🇮🇳 The Unseen India | India's Dark Reality",
description: "Revealing the hidden realities and darker aspects of India beyond mainstream narratives. This important collection provides eye-opening insights with positive impact for social awareness.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18N-sNusYQKEqVaS-1myxL4n",
channel: "@DarkSideOf-India",
categories: ["⭐ VVIMP", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "Godman Special | Baba Bazar | Andhvishwas vs Sach",
description: "Critical examination of fake gurus, superstition, and blind faith in Indian society. This highly useful playlist exposes religious exploitation with positive impact for rational thinking.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Yrv-pCbM4W2Lhejd3Tx8PY",
channel: "@YouTubePlaylistHindi",
categories: ["⭐ VVIMP", "👨‍🏫 Guru"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "❌®💩 🤢Useless/Meaningless/Timepass Videos | Negative Massage",
description: "Analysis of meaningless and time-wasting content in digital media. This playlist serves important critical purpose by examining negative influences with very high media literacy value.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NxA59YCViCREO-9l-uVF-f",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Negative",
usefulness: "Very High"
},
{
title: "🇮🇳 Best Videos in the World | Everyone Should See",
description: "Essential video collection that everyone should watch for life lessons and social awareness. This highly useful playlist offers positive impact through meaningful content selection.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdG3Hq1Q3geCGjkX-bDDjXn9",
channel: "@WeAreMature",
categories: ["⭐ VVIMP", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "✅®😑👁️ Save Humanity | Changes Needed in World",
description: "Thought-provoking content about necessary changes in society and human thinking. This positive impact playlist offers very high usefulness for social transformation awareness.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18Nn6QDYicOqt7aZYJMliPSH",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "❌®🍟🙅💩 Digital Junk Food | Clickbait & Low-value",
description: "Critical analysis of clickbait, adult content, and low-value digital entertainment. This playlist examines negative media influences while providing high awareness value.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PSx_7GUXGINJC8o4IxgoZO",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Negative",
usefulness: "Very High"
},
{
title: "❌®💩💀📈 Most Useless Videos But Viral | Cringe Content",
description: "Examination of viral but useless content including cringe and trash material online. This critical playlist serves important purpose by analyzing negative digital trends.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18N0Ztcn4aBFdS9tZ7NrcpVi",
channel: "@DarkSideOf-India",
categories: ["📺 Video", "⭐ VVIMP"],
impact: "Negative",
usefulness: "Very High"
},
{
title: "Best Philosophy & Deep Meaning Songs | Emotional Songs",
description: "Beautiful collection of philosophical and emotionally deep Hindi songs with meaningful lyrics. This positive impact music playlist offers very high value for thoughtful listening.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdExAU3Dud9bmbZsfCHHyLZf",
channel: "@WeAreMature",
categories: ["🎵 Music", "⭐ VVIMP"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "Best Humanity Songs | Soulful Music for Humanity",
description: "Heart-touching music dedicated to humanity, peace, and kindness through soulful Hindi songs. This positive playlist offers very high emotional and inspirational value.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdEfMBMWwY2JZ2M2cBPqMkcf",
channel: "@WeAreMature",
categories: ["🎵 Music", "⭐ VVIMP"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "Great World Thinkers & Spiritual Teachers | Hindi",
description: "Learn from world's greatest thinkers and spiritual teachers through Hindi videos. This highly useful biographical collection offers positive wisdom with very high educational impact.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghkcWt_lKnqLVpBRcAM_xKph",
channel: "@HumanityWood",
categories: ["⭐ VVIMP", "👤 Biography", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "▶️5️⃣ Best Videos For Everyone | Motivation & Life Hacks",
description: "Essential videos for motivation, inspiration, and personal transformation with practical life hacks. This positive playlist offers very high usefulness for self-improvement and growth.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aCvH38Bz5UQZGzkCV1AIEs",
channel: "@YouTubePlaylistHindi",
categories: ["⭐ VVIMP", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "Great Indian Thinkers & Gurus | Hindi | Their Wisdom",
description: "Explore the wisdom and teachings of India's great thinkers and spiritual gurus. This highly useful collection offers positive impact through biographical and philosophical content.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghmjies7K7wj-97s6WY01syw",
channel: "@HumanityWood",
categories: ["⭐ VVIMP", "👤 Biography", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "▶️4️⃣ Best Videos For Everyone | Wisdom & Philosophy",
description: "Curated collection of philosophical videos about life purpose, time, and inner growth. This positive impact playlist offers very high value for meaningful life perspectives.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bnDV6C6pSha40W1VSqy_bu",
channel: "@YouTubePlaylistHindi",
categories: ["⭐ VVIMP", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "God, Religion & Spirituality as Philosophy | Hindi",
description: "Deep exploration of God, religion, and spirituality from philosophical perspective in Hindi. This positive content offers very high usefulness for understanding spiritual concepts.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghnuOokCA9XS1X8IPR1jqlqk",
channel: "@HumanityWood",
categories: ["⭐ VVIMP", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "▶️1️⃣Best Videos For Everyone | Parenting Tips",
description: "Essential parenting guide with valuable life lessons for both parents and children. This positive impact playlist offers very high usefulness for family development.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YKvO0SQVGzO5E-OCqVxwgH",
channel: "@YouTubePlaylistHindi",
categories: ["⭐ VVIMP", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "▶️2️⃣ Best Videos For Everyone | Health & Fitness",
description: "Comprehensive guide to health, fitness, nutrition, and healthy lifestyle practices. This positive playlist offers very high usefulness for physical and mental wellbeing.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bMEMebsuU2FSSa7TnXm-tv",
channel: "@YouTubePlaylistHindi",
categories: ["⭐ VVIMP", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
},
{
title: "▶️3️⃣ Best Videos For Everyone | Reality of Media",
description: "Eye-opening content about media, government, elites, and societal truths. This positive awareness playlist offers very high usefulness for critical thinking development.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZdGXiXHKmxnEDxeohkEqvS",
channel: "@YouTubePlaylistHindi",
categories: ["⭐ VVIMP", "📺 Video"],
impact: "Positive",
usefulness: "Very High"
}
];

// All available categories with emojis
const allCategories = [
"All Content", "📺 Video", "🎬 Film", "🎵 Music", "🌍 World", "👨‍🏫 Guru", "🏛️ Politics", "🔍 Expose", "👤 Biography", "👨‍👩‍👧‍👦 Family", "📚 Book", "🤯 Philosophy", "🕉️ Hinduism", "🙏 Religion", "📜 Upnishad", "☸️ Sanatan Dharma"
];

// State variables
let currentCategory = "All Content";
let impactFilters = ["Positive"];
let usefulnessFilters = ["Average", "High", "Very High"];
let expandedCards = {};
let descriptionExpanded = {};

// DOM elements
const categoryButtonsContainer = document.getElementById('category-buttons');
const playlistsContainer = document.getElementById('playlists-container');
const filteredCountElement = document.getElementById('filtered-count');
const totalCountElement = document.getElementById('total-count');
const themeToggle = document.getElementById('theme-toggle');

// Initialize the app
function init() {
renderCategoryButtons();
renderPlaylists();
setupEventListeners();
updateCounter();
setupThemeToggle();
}

// Setup theme toggle
function setupThemeToggle() {
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
const currentTheme = document.documentElement.getAttribute('data-theme');
const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
document.documentElement.setAttribute('data-theme', newTheme);
localStorage.setItem('theme', newTheme);
});
}

// Render category buttons
function renderCategoryButtons() {
categoryButtonsContainer.innerHTML = '';

allCategories.forEach(category => {
const button = document.createElement('button');
button.textContent = category;
button.dataset.category = category;
if (category === currentCategory) {
button.classList.add('active');
}
categoryButtonsContainer.appendChild(button);
});
}

// Render playlist cards
function renderPlaylists() {
playlistsContainer.innerHTML = '';

const filteredPlaylists = filterPlaylists();

filteredPlaylists.forEach((playlist, index) => {
const card = document.createElement('div');
card.className = `playlist-card ${expandedCards[index] ? 'expanded' : ''}`;
card.dataset.index = index;

const isExpanded = expandedCards[index];
const isDescriptionExpanded = descriptionExpanded[index];

card.innerHTML = `
<div class="card-header">
<div>
<h3 class="card-title">${playlist.title}</h3>
<div class="tag-chips">
${playlist.categories.map(cat => `<span class="chip category-chip">${cat}</span>`).join('')}
<span class="chip impact-chip">${playlist.impact}</span>
</div>
</div>
<div class="expand-container">
<div class="expand-icon"></div>
</div>
</div>
<div class="card-body">
<a href="${playlist.url}" target="_blank" class="watch-btn">
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
<path d="M8 5v14l11-7z"/>
</svg>
Watch Playlist On YouTube
</a>
<div class="video-container">
<iframe src="${getEmbedUrl(playlist.url)}"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen>
</iframe>
</div>
<div class="description-section">
<button class="description-toggle">
<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
<path d="${isDescriptionExpanded ? 'M7 10l5 5 5-5z' : 'M7 14l5-5 5 5z'}"/>
</svg>
Playlist Description
</button>
<div class="description ${isDescriptionExpanded ? 'expanded' : ''}">
<p>${playlist.description}</p>
</div>
</div>
<div class="details-grid">
<div class="detail-item">
<span class="detail-label">Channel</span>
<span>${playlist.channel}</span>
</div>
<div class="detail-item">
<span class="detail-label">Categories</span>
<span>${playlist.categories.join(', ')}</span>
</div>
<div class="detail-item">
<span class="detail-label">Impact</span>
<span>${playlist.impact}</span>
</div>
<div class="detail-item">
<span class="detail-label">Usefulness</span>
<span>${playlist.usefulness}</span>
</div>
</div>
</div>
`;

playlistsContainer.appendChild(card);
});
}

// Filter playlists based on current filters
function filterPlaylists() {
return playlists.filter(playlist => {
// Category filter - match text after emoji
if (currentCategory === "All Content") {
return true;
}

// Extract text part from filter category (remove emoji)
const filterCategoryText = currentCategory.replace(/^.[^\w\s]?\s?/, '').trim();

// Check if any playlist category contains the filter text
const categoryMatch = playlist.categories.some(cat => {
// Extract text part from playlist category (remove emoji)
const playlistCategoryText = cat.replace(/^.[^\w\s]?\s?/, '').trim();
return playlistCategoryText === filterCategoryText;
});

// Impact filter
const impactMatch = impactFilters.includes(playlist.impact);

// Usefulness filter
const usefulnessMatch = usefulnessFilters.includes(playlist.usefulness);

return categoryMatch && impactMatch && usefulnessMatch;
});
}

// Get YouTube embed URL from playlist URL
function getEmbedUrl(url) {
const playlistId = url.split('list=')[1];
// Add playlist parameter to show playlist in mobile
return `https://www.youtube.com/embed/videoseries?list=${playlistId}&playlist=${playlistId}`;
}

// Update counter
function updateCounter() {
const filteredPlaylists = filterPlaylists();
filteredCountElement.textContent = filteredPlaylists.length;
totalCountElement.textContent = playlists.length;
}

// Setup event listeners
function setupEventListeners() {
// Category button clicks
document.querySelectorAll('#category-buttons button').forEach(button => {
button.addEventListener('click', () => {
currentCategory = button.dataset.category;
document.querySelectorAll('#category-buttons button').forEach(btn => {
btn.classList.remove('active');
});
button.classList.add('active');
renderPlaylists();
updateCounter();
});
});

// Impact checkbox changes
document.querySelectorAll('#impact-checkboxes input').forEach(checkbox => {
checkbox.addEventListener('change', () => {
impactFilters = Array.from(document.querySelectorAll('#impact-checkboxes input:checked'))
.map(cb => cb.value);
renderPlaylists();
updateCounter();
});
});

// Usefulness checkbox changes
document.querySelectorAll('#usefulness-checkboxes input').forEach(checkbox => {
checkbox.addEventListener('change', () => {
usefulnessFilters = Array.from(document.querySelectorAll('#usefulness-checkboxes input:checked'))
.map(cb => cb.value);
renderPlaylists();
updateCounter();
});
});

// Card expansion (delegated event)
playlistsContainer.addEventListener('click', (e) => {
const cardHeader = e.target.closest('.card-header');
const descriptionToggle = e.target.closest('.description-toggle');

if (cardHeader) {
const card = cardHeader.parentElement;
const index = parseInt(card.dataset.index);

// Toggle expanded state without re-rendering
if (expandedCards[index]) {
delete expandedCards[index];
} else {
expandedCards[index] = true;
}

// Toggle class for animation
card.classList.toggle('expanded');
} else if (descriptionToggle) {
// Prevent default to avoid any page refresh
e.preventDefault();

const descriptionSection = descriptionToggle.parentElement;
const description = descriptionSection.querySelector('.description');
const card = descriptionSection.closest('.playlist-card');
const index = parseInt(card.dataset.index);

// Toggle description expanded state
if (descriptionExpanded[index]) {
delete descriptionExpanded[index];
} else {
descriptionExpanded[index] = true;
}

// Toggle class for animation without re-rendering
description.classList.toggle('expanded');

// Update the icon
const icon = descriptionToggle.querySelector('svg path');
if (descriptionExpanded[index]) {
icon.setAttribute('d', 'M7 10l5 5 5-5z');
} else {
icon.setAttribute('d', 'M7 14l5-5 5 5z');
}
}
});
}

// Initialize the application

document.addEventListener('DOMContentLoaded', init);
