export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-[#7f1d1d] mb-10 text-center border-b-4 border-orange-500 pb-4 inline-block mx-auto flex justify-center">
        About Us
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-md mb-12 border-l-8 border-[#7f1d1d]">
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Established over three decades ago, Chitra Printers has earned a reputation as a trusted name in industrial and commercial printing. With a commitment to precision, quality, and timely delivery, we have consistently served a diverse range of industries and institutions.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Equipped with modern printing technology and supported by a skilled team, we specialize in delivering customized printing solutions that meet the highest standards of durability and design. Our long-standing relationships with clients stand as a testament to our reliability and dedication to excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-orange-100 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-orange-700 mb-4">Our Vision</h2>
          <p className="text-slate-800 italic text-lg">
            "To be a leading and most trusted industrial and commercial printing partner, recognized for quality, innovation, and dependable service while continuously evolving with modern printing technologies."
          </p>
        </div>
        <div className="bg-red-100 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-[#7f1d1d] mb-4">Our Mission</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-800 font-medium">
            <li>Deliver premium-quality printing with precision and consistency.</li>
            <li>Provide fast, reliable, and cost-effective printing services.</li>
            <li>Build long-term relationships through excellent customer service.</li>
            <li>Invest in modern technology and skilled professionals.</li>
            <li>Promote eco-friendly printing practices and responsible use of resources.</li>
            <li>Continuously improve our products, processes, and customer experience.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500">
        <h2 className="text-3xl font-bold text-center text-[#7f1d1d] mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { title: "Quality First", desc: "Excellence in every print." },
            { title: "Customer Satisfaction", desc: "Your success is our priority." },
            { title: "Innovation", desc: "Modern solutions for every printing need." },
            { title: "Integrity", desc: "Honest, transparent, and reliable service." },
            { title: "Commitment", desc: "On-time delivery with consistent quality." },
            { title: "Sustainability", desc: "Environmentally responsible printing practices." }
          ].map((val, idx) => (
            <div key={idx} className="p-4">
              <h3 className="font-bold text-xl text-orange-600">{val.title}</h3>
              <p className="text-slate-600 mt-2">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}