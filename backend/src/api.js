const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

export const fetchBackend = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json().catch(() => ({})); // Handle empty responses
        return data;
    } catch (error) {
        console.error('API Request Failed:', error);
        throw error;
    }
};

export const checkHealth = () => fetchBackend('/');
