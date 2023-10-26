document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const frontText = document.querySelector('.envelope-front-text');
    const inviteContent = document.querySelector('.invitation-content');
    const gif = document.querySelector('.gif');
    const modal = document.getElementById('rsvpModal');
    const close = document.querySelector('.close');
    const btn = document.querySelector('.rsvp-button');
    const form = document.getElementById('rsvpForm');
    const thankYou = document.getElementById('rsvpThankYou');
    
    envelope.addEventListener('click', function() {
        this.classList.toggle('unfolded');
        const envelopeIsUnfolding = this.classList.contains('unfolded');

        this.style.top = envelopeIsUnfolding ? "calc(80% - 35px)" : "50%"; 
        if (envelopeIsUnfolding) {
            frontText.style.opacity = '0';
            frontText.style.visibility = 'hidden';
            setTimeout(() => {
                inviteContent.style.opacity = '1';
                inviteContent.style.visibility = 'visible';
                gif.style.visibility = 'visible';               
            }, 1000); 
        } else {
            inviteContent.style.opacity = '0';
            inviteContent.style.visibility = 'hidden';
            gif.style.visibility = 'hidden';
            setTimeout(() => {
                frontText.style.opacity = '1';
                frontText.style.visibility = 'visible';
            }, 580); 
        }
    });

    const container = document.getElementById('balloon-container');
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = (Math.random() * 10 + 5) + 's';
        balloon.style.animationDelay = (Math.random() * 5) + 's';
        balloon.style.animationName = 'floatUp';
        balloon.style.animationTimingFunction = 'linear';
        balloon.style.animationIterationCount = 'infinite';
        container.appendChild(balloon);
    }

    btn.addEventListener('click', function() {
        envelope.style.display = 'none';
        modal.style.display = 'block';
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none';
        envelope.style.display = 'block';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            envelope.style.display = "block"; 
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('rsvpName').value;
        console.log("RSVP from:", name);
        form.style.display = 'none';
        thankYou.style.display = 'block';
    });

});
