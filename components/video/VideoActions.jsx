"use client";

export default function VideoActions({ title, channelUrl }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <div className="flex gap-4 mb-8">
      <a
        href={channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 bg-green-600 text-white rounded"
      >
        ▶ View Channel
      </a>

      <button
        onClick={handleShare}
        className="px-5 py-2 bg-emerald-400 text-white rounded"
      >
        🔗 Share This Video
      </button>
    </div>
  );
}
