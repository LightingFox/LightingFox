document.addEventListener(
    "DOMContentLoaded",
    () => {

        const elements =
            document.querySelectorAll(
                "article, .prose > *, main section"
            );

        elements.forEach((element) => {
            element.classList.add("fx-reveal");
        });

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {
                                entry.target.classList.add(
                                    "fx-visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );
                },
                {
                    threshold: 0.08
                }
            );

        elements.forEach(
            (element) => {
                observer.observe(element);
            }
        );
    }
);