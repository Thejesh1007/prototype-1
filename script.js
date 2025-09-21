// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Initialize charts
    initializeCharts();
});

function initializeCharts() {
    // Ocean Temperature Chart
    const tempCtx = document.getElementById('temperatureChart');
    if (tempCtx) {
        new Chart(tempCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Surface Temperature (°C)',
                    data: [26.2, 27.1, 28.5, 29.8, 30.2, 29.9, 28.7, 28.1, 27.8, 27.2, 26.8, 26.4],
                    borderColor: '#0077BE',
                    backgroundColor: 'rgba(0, 119, 190, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Deep Water Temperature (°C)',
                    data: [24.1, 24.3, 24.8, 25.2, 25.6, 25.4, 25.1, 24.9, 24.6, 24.3, 24.0, 23.8],
                    borderColor: '#00A86B',
                    backgroundColor: 'rgba(0, 168, 107, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 20,
                        max: 32
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Fish Population Chart
    const fishCtx = document.getElementById('fishChart');
    if (fishCtx) {
        new Chart(fishCtx, {
            type: 'doughnut',
            data: {
                labels: ['Mackerel', 'Sardines', 'Tuna', 'Hilsa', 'Other'],
                datasets: [{
                    data: [35, 25, 15, 12, 13],
                    backgroundColor: [
                        '#0077BE',
                        '#00A86B',
                        '#F97316',
                        '#8B5CF6',
                        '#64748B'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Catch Data Chart
    const catchCtx = document.getElementById('catchChart');
    if (catchCtx) {
        new Chart(catchCtx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Catch Volume (Tonnes)',
                    data: [12500, 15200, 13800, 14600],
                    backgroundColor: 'rgba(0, 119, 190, 0.8)',
                    borderColor: '#0077BE',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// Simulate real-time data updates
function updateStats() {
    const statValues = document.querySelectorAll('.stat-content h3');
    statValues.forEach(stat => {
        const currentValue = parseInt(stat.textContent.replace(',', ''));
        const variation = Math.floor(Math.random() * 100) - 50;
        const newValue = currentValue + variation;
        stat.textContent = newValue.toLocaleString();
    });
}

// Update stats every 30 seconds
setInterval(updateStats, 30000);

// Interactive features
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary') || e.target.classList.contains('btn-secondary')) {
        // Simulate button actions
        const button = e.target;
        const originalText = button.textContent;
        
        button.textContent = 'Processing...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            
            // Show success message
            showNotification('Action completed successfully!', 'success');
        }, 2000);
    }
});

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#0077BE'};
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add loading states and interactions
document.querySelectorAll('.source-card').forEach(card => {
    card.addEventListener('click', function() {
        showNotification('Loading data source details...', 'info');
    });
});

// Smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});