
/**
 * Define Global Variables
 * 
*/

const navBar = document.querySelector('nav');
const list = document.querySelector("#navbar__list");
const sections = document.querySelectorAll('section');


/**
 * End Global Variables



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// hide nav bar after 5 sec 


// build the nav


for (let i = 0; i < sections.length; i++) {
    let itemText = sections[i].getAttribute('data-nav');
    let item = document.createElement("li");
    let itemLink = document.createElement("a");
    itemLink.setAttribute("href", `#section${i+1}`);
    item.append(itemLink);
    itemLink.append(itemText);
    list.append(item)

}

navBar.append(list)



// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", () => {
    // GET WINDOW SCROLL TOP VALUE
    const windowScrollTop = window.scrollY;
    // LOOP FOR SECTIONS
    sections.forEach((sec) => {
        
        // GET EACH SECTION HEIGHT
        let secHeight = sec.offsetHeight;
        // GET EACH SECTION OFFSET FROM THE PAGE TOP
        let secOffsetTop = sec.offsetTop - 150;
        // CHECK IF WINDOW SCROLLING TOP VALUE IS GREATER THAN THE SECTION OFFSET TOP AND
        // LESS THAN THE SECTION OFFSET TOP + THIS SECTION HEIGHT
        if (windowScrollTop > secOffsetTop && windowScrollTop <= secOffsetTop + secHeight) { 
            document.querySelectorAll("nav ul a").forEach((a) => {
                // REMOVE CLASS ACTIVE FROM ALL LINKS 
                a.classList.remove("active");
                // add active link from related link
                document.querySelector(`nav ul a[href='#${sec.getAttribute("id")}']`).classList.add("active");
            })
        } else {
            document.querySelectorAll("nav ul a").forEach((a) => {
                // remove active link from related link
                document.querySelector(`nav ul a[href='#${sec.getAttribute("id")}']`).classList.remove("active");
             
            })
        }
    })
    
})  
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
document.querySelectorAll('nav ul a[href^="#"]').forEach(a => {
    a.addEventListener('click',  (e) => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// check if page is not scrolling

window.onscroll = () => {
    const windowScrollTop = window.scrollY;
    if (windowScrollTop > 300) {
        checkScrolling();
    } else {
        navBar.style.maxHeight = "500px";
    }
    
}

var isScrolling;
const checkScrolling = () => {
    window.clearTimeout(isScrolling);
    navBar.style.maxHeight = "500px";
     isScrolling = window.setTimeout(() => {
        navBar.style.maxHeight = 0;
    }, 2000);
}

navBar.addEventListener("mouseover", () => {
    window.clearTimeout(isScrolling);
    navBar.style.maxHeight = "500px";
})




