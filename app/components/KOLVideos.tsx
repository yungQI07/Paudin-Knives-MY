import { Play } from "lucide-react";
import { useState } from "react";

export default function KOLVideos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "1",
      thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
      title: "Chef Marco Reviews Master Gyuto",
      chef: "Chef Marco Rodriguez",
      views: "2.5M views",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      thumbnail: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800",
      title: "Professional Kitchen Test",
      chef: "Chef Sarah Chen",
      views: "1.8M views",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "3",
      thumbnail: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800",
      title: "Damascus Steel Craftsmanship",
      chef: "Master Craftsman James Lee",
      views: "3.2M views",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "4",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      title: "Michelin Star Chef's Choice",
      chef: "Chef Isabella Moretti",
      views: "2.1M views",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured by Top Chefs</h2>
          <p className="text-xl text-gray-600">
            See what culinary influencers say about our knives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video.videoUrl)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" style={{ aspectRatio: '9/16' }}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-gray-900 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.chef}</p>
                <p className="text-gray-500 text-sm">{video.views}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative" style={{ width: '1920px', height: '1080px', maxWidth: '100%', maxHeight: '100%' }}>
              <iframe
                src={selectedVideo}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
