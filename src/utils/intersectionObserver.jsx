export const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("slide-in-bottom");
            } else {
                entry.target.classList.remove("slide-in-bottom");
            }
        })
    }
)




