

export async function loadNavigation() {
    try {
        const response = await fetch('options.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}
