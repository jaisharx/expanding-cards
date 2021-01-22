const panels = document.querySelectorAll('.panel');

const switchActiveClass = (panelProvided) => {
    panels.forEach((panel) => {
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
        }
    });

    // set the active class to given panel
    panelProvided.classList.add('active');
};

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        switchActiveClass(panel);
    });
});
