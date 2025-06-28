<script>function playAndShow(region, btn) {
  const clickSound = document.getElementById("click-sound");
  clickSound.currentTime = 0;
  clickSound.play();

  // Animation visuelle sur le bouton
  btn.classList.add("button-clicked");
  setTimeout(() => btn.classList.remove("button-clicked"), 300);

  showDance(region);
}

function showDance(region) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const videoContainer = document.getElementById("modal-video");

  const videos = {
    "Centre": "O8o1-AKiIWs",
    "Littoral": "xhUIcbYBB08",
    "Nord": "OXnB2VwDZYo",
    "Sud": "j8wnFonIyuY",
    "Est": "H8pF7TNhF_U",
    "Ouest": "CEX9suowdBg",
    "sud-ouest": "xJWbD11F8Bw",
    "Nord-ouest": "jmt-eH4hPzU",
    "Adamaoua": "vETX8Yj8Ylc",
    "Extreme-nord": "yp5C2QX49c4"
  };

  title.textContent = "Danse de la région " + region;

  if (videos[region]) {
    videoContainer.innerHTML = `
      <iframe class="w-full h-full"
        src="https://www.youtube.com/embed/${videos[region]}"
        title="Danse région ${region}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  } else {
    videoContainer.innerHTML = `<p class="text-center text-gray-500">Vidéo non disponible pour cette région.</p>`;
  }

  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  document.getElementById("modal-video").innerHTML = "";
}

</script>
