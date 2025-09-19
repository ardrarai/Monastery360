// Monastery Dynamic Content Handler
// Handles loading and displaying monastery data based on URL parameters

class MonasteryApp {
    constructor() {
        this.currentMonastery = null;
        this.audioPlayer = null;
        this.isPlaying = false;
        this.monasteries = [];
        
        this.init();
    }
    
    async init() {
        try {
            // Load monastery data
            await this.loadMonasteryData();
            
            // Get monastery ID from URL
            const monasteryId = this.getMonasteryIdFromURL();
            
            // Load and display monastery
            await this.loadMonastery(monasteryId);
            
            // Setup audio controls
            this.setupAudioPlayer();
            
            // Hide loading and show content
            this.showMainContent();
            
        } catch (error) {
            console.error('Failed to initialize monastery app:', error);
            this.handleError('Failed to load monastery data. Please try refreshing the page.');
        }
    }
    
    async loadMonasteryData() {
        // Check if data is already loaded via script tag
        if (window.monasteriesData && window.monasteriesData.monasteries) {
            this.monasteries = window.monasteriesData.monasteries;
            return;
        }
        
        // Fallback: try to load via fetch (if served from a server)
        try {
            const response = await fetch('./data/monasteries.js');
            if (response.ok) {
                const text = await response.text();
                // Simple evaluation for data extraction (use with caution in production)
                const dataMatch = text.match(/const monasteries = (\[[\s\S]*?\]);/);
                if (dataMatch) {
                    this.monasteries = JSON.parse(dataMatch[2].replace(/(\w+):/g, '"$1":'));
                }
            }
        } catch (error) {
            console.warn('Could not load data via fetch, ensure monasteries.js is included via script tag');
        }
        
        if (!this.monasteries.length) {
            throw new Error('No monastery data available');
        }
    }
    
    getMonasteryIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        
        // Default to first monastery if no ID provided
        return id || this.monasteries?.id || 'rumtek';
    }
    
    async loadMonastery(monasteryId) {
        const monastery = this.monasteries.find(m => m.id === monasteryId);
        
        if (!monastery) {
            console.warn(`Monastery with ID '${monasteryId}' not found. Loading default.`);
            // Load first available monastery as fallback
            this.currentMonastery = this.monasteries;
        } else {
            this.currentMonastery = monastery;
        }
        
        // Update URL without refresh if different from current
        if (monasteryId !== this.currentMonastery.id) {
            const newUrl = `${window.location.pathname}?id=${this.currentMonastery.id}`;
            history.replaceState(null, '', newUrl);
        }
        
        // Populate all content
        this.populateMonasteryContent();
    }
    
    populateMonasteryContent() {
        const monastery = this.currentMonastery;
        
        if (!monastery) {
            this.handleError('No monastery data available');
            return;
        }
        
        try {
            // Update page title
            document.title = `${monastery.name} - Monastery360`;
            
            // Populate basic info
            this.setElementText('#monasteryTitle', monastery.name);
            this.setElementText('#monasterySubtitle', monastery.subtitle);
            this.setElementHTML('#monasteryDescription', this.formatDescription(monastery.description));
            this.setElementText('#culturalContent', monastery.culturalNotes);
            
            // Render facts
            this.renderFacts(monastery.facts);
            
            // Setup audio
            this.setupAudio(monastery.audioFile);
            
            // Setup maps embed
            this.setupMapsEmbed(monastery.mapsEmbed);
            
            // Setup hero image
            this.setupHeroImage(monastery.heroImage);
            
            // Render recommendations
            this.renderRecommendations(monastery.id);
            
        } catch (error) {
            console.error('Error populating monastery content:', error);
            this.handleError('Error displaying monastery information');
        }
    }
    
    // Helper function to safely set element text
    setElementText(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.textContent = text;
        }
    }
    
    // Helper function to safely set element HTML
    setElementHTML(selector, html) {
        const element = document.querySelector(selector);
        if (element && html) {
            element.innerHTML = html;
        }
    }
    
    formatDescription(description) {
        if (!description) return '';
        
        // Convert line breaks to paragraphs
        return description
            .split('\n\n')
            .filter(paragraph => paragraph.trim())
            .map(paragraph => `<p class="mb-4">${paragraph.trim()}</p>`)
            .join('');
    }
    
    renderFacts(facts) {
        const factsContainer = document.querySelector('#quickFacts');
        if (!factsContainer || !facts || !facts.length) return;
        
        const factsHTML = facts.map(fact => `
            <div class="flex justify-between items-center py-2 border-b border-sikkim-cream last:border-b-0">
                <span class="text-gray-600 font-heritage">${fact.label}:</span>
                <span class="font-semibold text-sikkim-primary text-right">${fact.value}</span>
            </div>
        `).join('');
        
        factsContainer.innerHTML = factsHTML;
    }
    
    setupAudio(audioFile) {
        const audioSource = document.querySelector('#audioSource');
        const audioPlayer = document.querySelector('#audioPlayer');
        
        if (!audioSource || !audioPlayer) return;
        
        if (audioFile) {
            audioSource.src = audioFile;
            audioPlayer.load();
            this.audioPlayer = audioPlayer;
            
            // Show audio controls
            const audioButton = document.querySelector('#audioButton');
            if (audioButton) {
                audioButton.style.display = 'flex';
            }
        } else {
            // Hide audio controls if no audio file
            const audioButton = document.querySelector('#audioButton');
            if (audioButton) {
                audioButton.style.display = 'none';
            }
        }
    }
    
    setupMapsEmbed(mapsEmbed) {
        const mapsIframe = document.querySelector('#mapsEmbed');
        if (mapsIframe && mapsEmbed) {
            mapsIframe.src = mapsEmbed;
        }
    }
    
    setupHeroImage(heroImage) {
        const heroSection = document.querySelector('#heroSection');
        if (heroSection && heroImage) {
            heroSection.style.backgroundImage = `url(${heroImage})`;
        }
    }
    
    renderRecommendations(currentId) {
        const recommendationsContainer = document.querySelector('#recommendationsGrid');
        if (!recommendationsContainer) return;
        
        // Get 3 random monasteries excluding current one
        const otherMonasteries = this.monasteries.filter(m => m.id !== currentId);
        const recommendations = this.shuffleArray(otherMonasteries).slice(0, 3);
        
        const recommendationsHTML = recommendations.map(monastery => `
            <div class="recommendation-card">
                <img src="${monastery.heroImage}" alt="${monastery.name}" class="w-full h-48 object-cover">
                <div class="recommendation-card-content p-6">
                    <h3 class="text-xl font-bold text-sikkim-primary mb-2 font-heritage">${monastery.name}</h3>
                    <p class="text-gray-600 mb-4 font-body text-sm">${monastery.subtitle}</p>
                    <a href="?id=${monastery.id}" class="inline-flex items-center text-sikkim-blue hover:text-sikkim-primary font-heritage font-semibold transition-colors">
                        Explore This Monastery
                        <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                        </svg>
                    </a>
                </div>
            </div>
        `).join('');
        
        recommendationsContainer.innerHTML = recommendationsHTML;
    }
    
    // Helper function to shuffle array
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    setupAudioPlayer() {
        const audioButton = document.querySelector('#audioButton');
        const audioIcon = document.querySelector('#audioIcon');
        const audioText = document.querySelector('#audioText');
        
        if (!audioButton || !audioIcon || !audioText) return;
        
        audioButton.addEventListener('click', () => this.toggleAudio());
        
        // Audio event listeners
        if (this.audioPlayer) {
            this.audioPlayer.addEventListener('ended', () => this.resetAudioButton());
            this.audioPlayer.addEventListener('pause', () => this.resetAudioButton());
            this.audioPlayer.addEventListener('error', () => this.handleAudioError());
        }
    }
    
    async toggleAudio() {
        if (!this.audioPlayer) return;
        
        try {
            if (this.isPlaying) {
                this.audioPlayer.pause();
            } else {
                await this.audioPlayer.play();
                this.setPlayingState();
            }
        } catch (error) {
            console.error('Audio playback error:', error);
            this.handleAudioError();
        }
    }
    
    setPlayingState() {
        this.isPlaying = true;
        const audioButton = document.querySelector('#audioButton');
        const audioIcon = document.querySelector('#audioIcon');
        const audioText = document.querySelector('#audioText');
        
        if (audioButton) audioButton.classList.add('playing');
        if (audioIcon) {
            audioIcon.innerHTML = `
                <path d="M18 4H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM6 12V8h2v4H6zm4 0V8h2v4h-2zm4 0V8h2v4h-2z"/>
            `;
        }
        if (audioText) audioText.textContent = 'Pause Guided Tour';
    }
    
    resetAudioButton() {
        this.isPlaying = false;
        const audioButton = document.querySelector('#audioButton');
        const audioIcon = document.querySelector('#audioIcon');
        const audioText = document.querySelector('#audioText');
        
        if (audioButton) audioButton.classList.remove('playing');
        if (audioIcon) {
            audioIcon.innerHTML = `<path d="M8 5v10l7-5-7-5z"/>`;
        }
        if (audioText) audioText.textContent = 'Play Guided Tour';
    }
    
    handleAudioError() {
        console.warn('Audio file not available for current monastery');
        const audioButton = document.querySelector('#audioButton');
        if (audioButton) {
            audioButton.disabled = true;
            audioButton.innerHTML = `
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                </svg>
                <span>Audio Not Available</span>
            `;
        }
    }
    
    showMainContent() {
        const loadingState = document.querySelector('#loadingState');
        const mainContent = document.querySelector('#mainContent');
        
        if (loadingState) loadingState.style.display = 'none';
        if (mainContent) mainContent.style.display = 'block';
    }
    
    handleError(message) {
        console.error('Monastery App Error:', message);
        
        const loadingState = document.querySelector('#loadingState');
        if (loadingState) {
            loadingState.innerHTML = `
                <div class="text-center">
                    <div class="text-5xl mb-4 text-sikkim-primary">⚠️</div>
                    <p class="text-sikkim-primary font-heritage text-lg">${message}</p>
                    <button onclick="window.location.reload()" 
                            class="mt-4 px-6 py-2 bg-sikkim-primary text-white rounded-lg hover:bg-sikkim-blue transition-colors">
                        Reload Page
                    </button>
                </div>
            `;
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MonasteryApp();
});

// Handle browser back/forward navigation
window.addEventListener('popstate', () => {
    // Reload with new URL parameters
    window.location.reload();
});
