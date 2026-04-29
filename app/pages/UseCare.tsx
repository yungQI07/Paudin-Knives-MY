import KOLVideos from "../components/KOLVideos";

export default function UseCare() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Knife Sharpening Guide</h1>
          <p className="text-xl text-gray-600">
            Master the art of keeping your knives razor-sharp
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://paudinpro.com/cdn/shop/files/2L6A4050_2000x.jpg?v=1613680307"
                alt="Knife sharpening process"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Sharpen Your Knives?</h2>
              <p className="text-gray-700 mb-4">
                A sharp knife is safer and more efficient than a dull one. Sharp knives require less pressure to cut,
                reducing the risk of slipping and injury. They also make food preparation faster and more enjoyable.
              </p>
              <p className="text-gray-700">
                Regular sharpening maintains the blade's edge, extends the life of your knife, and ensures optimal
                performance for all your cutting tasks.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Sharpening Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Whetstone</h3>
                <p className="text-gray-600">
                  The traditional and most effective method. Whetstones provide excellent control and can achieve
                  the sharpest edge. Requires practice but gives professional results.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Honing Rod</h3>
                <p className="text-gray-600">
                  Used for regular maintenance between sharpenings. Realigns the blade edge without removing material.
                  Use before each cooking session for best results.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Electric Sharpener</h3>
                <p className="text-gray-600">
                  Fast and convenient for quick sharpening. Great for beginners but removes more material than
                  manual methods. Follow manufacturer instructions carefully.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Whetstone Sharpening Steps</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="font-bold text-xl mr-3">1.</span>
                  <p className="text-gray-700">Soak the whetstone in water for 10-15 minutes before use</p>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-xl mr-3">2.</span>
                  <p className="text-gray-700">Place the stone on a stable, non-slip surface</p>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-xl mr-3">3.</span>
                  <p className="text-gray-700">Hold the knife at a 15-20 degree angle against the stone</p>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-xl mr-3">4.</span>
                  <p className="text-gray-700">Draw the blade across the stone in smooth, consistent strokes</p>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-xl mr-3">5.</span>
                  <p className="text-gray-700">Repeat 10-15 times per side, maintaining the same angle</p>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-xl mr-3">6.</span>
                  <p className="text-gray-700">Finish with a finer grit stone for a polished edge</p>
                </li>
              </ol>
            </div>
            <div>
              <img
                src="https://paudinpro.com/cdn/shop/files/2L6A4621_1d17affd-6114-4155-a4c0-86638dae2a08_2000x.JPG?v=1615923844"
                alt="Sharpening technique"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://paudinpro.com/cdn/shop/files/2L6A4754_2000x.JPG?v=1615923844"
                alt="Knife care"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Knife Care Tips</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <p className="text-gray-700">Hand wash immediately after use and dry thoroughly</p>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <p className="text-gray-700">Store knives in a knife block or on a magnetic strip</p>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <p className="text-gray-700">Use wooden or plastic cutting boards, never glass or stone</p>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✓</span>
                  <p className="text-gray-700">Hone regularly and sharpen when the blade feels dull</p>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✗</span>
                  <p className="text-gray-700">Never put knives in the dishwasher</p>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✗</span>
                  <p className="text-gray-700">Don't leave knives soaking in water</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Professional Sharpening Service</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Not confident sharpening your knives yourself? We offer professional sharpening services to restore
              your knives to factory-sharp condition.
            </p>
            <a href="/partner-with-us" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <KOLVideos />
    </div>
  );
}
