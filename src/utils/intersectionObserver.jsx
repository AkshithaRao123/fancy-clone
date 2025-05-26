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

export const processObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("movingBorder");
                // document.body.classList.add('scroll-lock');
            } else {
                entry.target.classList.remove("movingBorder");
            }
        })
    },
    {
        threshold: 1,
    }
)


