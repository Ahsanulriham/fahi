<script>
  // Scroll Progress
  window.onscroll = function() {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-bar").style.width = scrolled + "%";

    // Show top button
    document.getElementById("topBtn").style.display = winScroll > 100 ? "block" : "none";
  };

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }
</script>
// Future features (menu toggle, theme switch etc.)
