Vue.component("main-additions", {
  template: `
   <section class="main-additions">
        <div class="container">
            <div class="col-md-6">
                <div class="main-additions__reviews">
                    <img class="review-image" src="./images/user.png" alt="user"/>
                    <figure  class="review">
                        <div class="review__anons">
                            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                            a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                        </div>
                        <div class="review__author">
                            <div class="author__name text-rose">Bin Burhan</div>
                            <div class="author__local">Dhaka, Bd</div>
                        </div>
                        <ul class="review--nav">
                            <li></li>
                            <li class="active"></li>
                            <li></li>
                        </ul>
                    </figure>
                </div>
            </div>
            <div class="col-md-6">
                <div class="main-additions__subscribe">
                    <div class="subscribe__name">Subscribe</div>
                    <div class="subscribe__text">FOR OUR NEWLETTER AND PROMOTION</div>
                    <form class="form-group">
                        <input type="email" required placeholder="Enter Your Email" pattern="\\S+@[a-z]+.[a-z]+" class="form-control oval-form">
                        <button type="submit" class="button button-rose button-oval">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  `
});
