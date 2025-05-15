// إنشاء العنصر إذا لم يكن موجود
if (!window.bgAudio) {
  const audio = document.createElement("audio");
  audio.src = "sound.mp3";
  audio.loop = true;
  audio.volume = 0.5;
  audio.id = "bgAudio";
  document.body.appendChild(audio);
  window.bgAudio = audio;

  // يبدأ الصوت بعد أول تفاعل
  document.addEventListener("click", () => {
    audio.play().catch(() => {});
  }, { once: true });
}
