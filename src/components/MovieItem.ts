import { StarFilled, AddSkeleton, ErrorNoAvailable } from "../../images";
import { $ } from "../utils/dom";

class MovieItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.addEvent();
  }

  render() {
    const posterPath = this.getAttribute("poster-path");
    const title = this.getAttribute("title");
    const voteAverage = this.getAttribute("vote_average");

    this.innerHTML = /* html */ `
      <a href="#">
        <div class="item-card">
          <img
            class="item-thumbnail skeleton"
            src="${
              posterPath !== "null"
                ? `https://image.tmdb.org/t/p/original/${posterPath}`
                : `${AddSkeleton}`
            }"
            loading="lazy"
            alt="${title}"
          />
          <p class="item-title">${title}</p>
          <p class="item-score"><img src="${StarFilled}" class="star" alt="별점" />${voteAverage}</p>
        </div>
      </a>
    `;
  }

  addEvent() {
    $(".item-thumbnail", this)?.addEventListener("load", () =>
      this.removeSkeletonUI()
    );
    $(".item-thumbnail", this)?.addEventListener("error", () =>
      this.loadErrorImage()
    );
  }

  removeSkeletonUI() {
    $(".item-thumbnail", this)?.classList.remove("skeleton");
  }

  loadErrorImage() {
    const targetImage = this.querySelector<HTMLImageElement>(".item-thumbnail");
    if (targetImage) {
      targetImage.classList.remove("skeleton");
      targetImage.src = `${ErrorNoAvailable}`;
    }
  }
}

customElements.define("movie-item", MovieItem);