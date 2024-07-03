<div class="container">
  <p class="prompt pulse">If you move you're gay!</p>
  <img src="dog.gif" alt="a staring dog" />
  <audio autoplay>
    <source src="music.mp3" type="audio/mpeg" />
  </audio>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
  }

  .prompt {
    font-size: 5rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media (max-width: 760px) {
    .prompt {
      font-size: 3rem;
    }
  }

  .pulse {
    color: var(--pulse);
    animation: pulse 2s infinite ease;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
</style>
