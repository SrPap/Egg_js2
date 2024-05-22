// utils.js
export function reloadPage() {
    location.reload();
}

export function resetLocalStorage() {
    localStorage.clear();
    reloadPage();
}
