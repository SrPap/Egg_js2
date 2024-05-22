
export function buildFooter(optionsFooter) {
    const footerSelector = document.querySelector("#footer");
    
    optionsFooter.forEach(option => {
        let anchor = document.createElement("ul");
        anchor.className = "footer-ul";
        
        let li = document.createElement("li");
        li.className = "footer-main-item";
        
        let a = document.createElement("a");
        a.className = "footer-a";
        a.textContent = option.title;
        a.href = option.linkTo;
        
        li.appendChild(a);
        anchor.appendChild(li);
        
        option.opts.forEach(opt => {
            let li = document.createElement("li");
            li.className = "footer-li";
            
            let a = document.createElement("a");
            a.className = "footer-a";
            a.textContent = opt;
            
            li.appendChild(a);
            anchor.appendChild(li);
        });
        
        footerSelector.appendChild(anchor);
    });
}