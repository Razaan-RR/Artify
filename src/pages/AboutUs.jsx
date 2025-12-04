function AboutUs() {
  return (
    <div className="bg-[#e9edf2] min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About <span className="text-indigo-600">Artify</span>
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed text-center mb-12 max-w-3xl mx-auto">
          Artify is your creative learning hub where art becomes simple, accessible, 
          and enjoyable. We're here to help anyone—beginners, hobbyists, and 
          passionate learners—grow their artistic skills through structured lessons, 
          expert guidance, and a smooth interactive experience.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to make art education easy, enjoyable, and accessible to 
            everyone worldwide. We provide high-quality lessons, trusted learning 
            paths, and a safe environment where users can explore, learn, and grow 
            at their own pace.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            What We Offer
          </h2>

          <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
            <li>Expert-curated art skills and structured learning paths</li>
            <li>Responsive, modern UI with smooth animations and sliders</li>
            <li>Secure login, signup, and profile updates using Firebase</li>
            <li>Protected routes for personalized learning experiences</li>
            <li>Skill previews and provider sections to explore various art fields</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Artify aims to become a global creative community, offering live 
            mentor-led sessions, advanced digital art courses, community 
            galleries, and AI-driven personalized learning in the future. Our 
            goal is to help every learner unlock their full artistic potential.
          </p>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Join Us on This Creative Journey
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Whether you're beginning your art journey or sharpening your skills, 
            Artify is here to inspire and guide you. Start learning today—your 
            next masterpiece begins here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
