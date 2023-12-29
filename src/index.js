function Shadowize(options) {
    let images = document.querySelectorAll('.shadowize');

    if (options.shadow_type === 'hard') {
        options.shadow_type = '0px';
    } else {    
        options.shadow_type = '15px';
    } 
    
    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if (options.padding) {
            image.style.padding = '1em';
        }

        // if (options.border_radius) {
        //     image.style.borderRadius = '1em';
        // }

        // if (options.border) {
        //     image.style.border = '1px solid rgba(0,0,0,0.12)';
        // }

        // if (options.margin) {
        //     image.style.margin = '1em';
        // }

        // if (options.width) {
        //     image.style.width = '100%';
        // }

        // if (options.height) {
        //     image.style.height = '100%';
        // }

        // if (options.background) {
        //     image.style.background = 'rgba(0,0,0,0.12)';
        // }

    })
}

module.exports.Shadowize = Shadowize;