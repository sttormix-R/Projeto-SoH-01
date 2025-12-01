/**
 * Application Main Script
 * @description Core application logic and initialization
 * @version 1.0.0
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
    DEBUG: false,
    API_BASE_URL: 'https://api.example.com',
    TIMEOUT: 5000,
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Logs messages based on debug configuration
 * @param {string} message - Message to log
 * @param {*} data - Optional data to log
 */
function log(message, data = null) {
    if (CONFIG.DEBUG) {
        console.log(`[LOG] ${message}`, data || '');
    }
}

/**
 * Handles errors consistently
 * @param {Error} error - Error object
 */
function handleError(error) {
    console.error('[ERROR]', error.message);
}

// ============================================================================
// MAIN APPLICATION CLASS
// ============================================================================

class Application {
    constructor() {
        this.initialized = false;
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        try {
            log('Initializing application...');
            this.setupEventListeners();
            this.initialized = true;
            log('Application ready');
        } catch (error) {
            handleError(error);
        }
    }

    /**
     * Setup DOM event listeners
     */
    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => this.onDomReady());
    }

    /**
     * Called when DOM is ready
     */
    onDomReady() {
        log('DOM is ready');
    }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

// Start application when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Application();
    });
} else {
    new Application();
}