
        function createStar() {
            const star = document.createElement('div');
            star.classList.add('star');

            const size = Math.random() * 3 + 1;
            const x = Math.random() * window.innerWidth; 
            const y = Math.random() * window.innerHeight; 

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;


            if (Math.random() > 0.8) {
                star.style.borderRadius = '50%';
            } else {
                star.style.borderRadius = '10%';
            }
        

            document.body.appendChild(star);
        }

        function createStars(count) {
            for (let i = 0; i < count; i++) {
                createStar();
            }
        }
        createStars(400);
