
export function renderNavigation(navOptions, navSelector) {
    navOptions.forEach(option => {
        const anchor = document.createElement("a");
        anchor.className = "nav-button";
        anchor.textContent = option.title;
        anchor.href = option.linkTo;
        navSelector.appendChild(anchor);
    });
}
