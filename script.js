// Playlist data
const playlists = [
    {
        title: "🎬💗🎨 Cinema for the Soul | Best Films & Short Films | Thinking Provoking, Life Changing, Meaningful & Revolution | Must Watch for Everyone",
        description: "A carefully curated collection of films and short films that provoke thought, change perspectives, and inspire personal growth. These cinematic works explore deep philosophical questions, human relationships, and societal issues through powerful storytelling and visual artistry. From award-winning international films to thought-provoking short stories, this playlist is designed to stimulate your mind and touch your soul. Each selection has been chosen for its ability to challenge conventional thinking and offer new insights into the human experience.",
        url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdEDsolXH0KRhc0GZpjMmt-b",
        channel: "@WeAreMature",
        categories: ["Film", "Philosophy", "Life"],
        impact: "Positive",
        usefulness: "Very High"
    },
    {
        title: "🇮🇳®⭐®🎬 Movies (Expose And Reality of Society)",
        description: "This playlist features films that expose the harsh realities of society and challenge conventional narratives. These movies delve into complex social issues, political corruption, economic disparities, and cultural conflicts that shape our world. Through powerful storytelling and authentic representation, these films provide critical perspectives on contemporary issues while encouraging viewers to question established norms and think independently about the structures that govern our lives.",
        url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OlB0vNkxN9r7EyKkG-4Pgw",
        channel: "@DarkSideOf-India",
        categories: ["Film", "Politics", "Society"],
        impact: "Positive",
        usefulness: "Very High"
    }
];

// All available categories
const allCategories = [
    "All Content", "Video", "Film", "Music", "World", "Guru", "Politics", 
    "Expose", "Biography", "Family", "Book", "Philosophy", "Hinduism", 
    "Religion", "Upnishad", "Sanatan Dharma"
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
                <span class="expand-icon">▼</span>
            </div>
            <div class="card-body" style="max-height: ${isExpanded ? '2000px' : '0'}">
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
        // Category filter
        const categoryMatch = currentCategory === "All Content" || 
                             playlist.categories.includes(currentCategory);
        
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
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
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
            
            // Toggle expanded state
            if (expandedCards[index]) {
                delete expandedCards[index];
                // Also collapse description when card is collapsed
                delete descriptionExpanded[index];
            } else {
                expandedCards[index] = true;
            }
            
            renderPlaylists();
        } else if (descriptionToggle) {
            const descriptionSection = descriptionToggle.parentElement;
            const card = descriptionSection.closest('.playlist-card');
            const index = parseInt(card.dataset.index);
            
            // Toggle description expanded state
            if (descriptionExpanded[index]) {
                delete descriptionExpanded[index];
            } else {
                descriptionExpanded[index] = true;
            }
            
            renderPlaylists();
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);
