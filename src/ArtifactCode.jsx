const App = () => {
  // Helper component for Lucide icons
  const Icon = ({ name, color = "currentColor", size = 24 }) => {
    // In a real app, you'd import these dynamically or have a map
    // For this example, let's assume a few common icons
    const icons = {
      zap: (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      barChart: (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
      ),
      users: (
         <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
      ),
      settings: (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 .54 1.73L2.78 14a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-.54-1.73L21.22 10a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      )
    };
    return icons[name] || null;
  };

  const navLinks = [
    { href: "#services", label: "Nos Services" },
    { href: "#pourquoi-nous", label: "Pourquoi Nous?" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    {
      icon: "zap",
      title: "Automatisation Intelligente",
      description: "Optimisez vos processus répétitifs et gagnez un temps précieux grâce à des solutions d'automatisation sur mesure.",
    },
    {
      icon: "barChart",
      title: "Analyse de Données & IA",
      description: "Transformez vos données en informations exploitables pour prendre des décisions éclairées et stimuler votre croissance.",
    },
    {
      icon: "users",
      title: "Conseil Stratégique IA",
      description: "Nous vous aidons à identifier les opportunités IA les plus pertinentes pour votre entreprise et à élaborer une feuille de route claire.",
    },
     {
      icon: "settings",
      title: "Solutions IA Personnalisées",
      description: "Développement d'outils et d'applications IA spécifiques pour répondre à vos défis uniques et vous donner un avantage concurrentiel.",
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 lg:px-16 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-400">XenaAutomation</h1>
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-gray-300 hover:text-purple-300 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden text-gray-300 hover:text-purple-300">
            <Icon name="settings" size={28} /> {/* Placeholder for Menu icon */}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 text-center py-20 md:py-32 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Révolutionnez Votre Entreprise au Québec avec l’Intelligence Artificielle et l’Automatisation.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              XenaAutomation aide les PME, solopreneurs et individus québécois à prospérer à l'ère numérique grâce à des solutions IA et d'automatisation personnalisées.
            </p>
            <div className="space-x-4">
              <a
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
              >
                Discutons de votre projet
              </a>
              <a
                href="#services"
                className="bg-transparent hover:bg-purple-500/20 border-2 border-purple-500 text-purple-400 font-semibold py-3 px-8 rounded-lg text-lg transition-colors shadow-md"
              >
                Découvrir nos services
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-800 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-purple-400">Nos Services d'Experts</h2>
            <p className="text-center text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto">
              Nous offrons une gamme de services pour intégrer l'IA et l'automatisation au cœur de votre activité, quelle que soit sa taille.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-gray-700/50 p-6 rounded-xl shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300 flex flex-col items-center text-center">
                  <div className="p-3 mb-4 bg-purple-500/20 rounded-full">
                    <Icon name={service.icon} size={32} color="rgb(192, 132, 252)" /> {/* purple-400 */}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi Nous Section */}
        <section id="pourquoi-nous" className="py-16 md:py-24 bg-gray-900 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">Pourquoi Choisir XenaAutomation?</h2>
            <p className="text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto">
              Nous comprenons les défis uniques des entreprises québécoises et offrons une approche personnalisée, transparente et axée sur les résultats.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Expertise Locale</h3>
                <p className="text-gray-400">Basés au Québec, nous connaissons le marché et ses spécificités. Nous parlons votre langue et comprenons votre réalité.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Solutions sur Mesure</h3>
                <p className="text-gray-400">Pas de solutions toutes faites. Nous analysons vos besoins pour créer des stratégies IA qui vous conviennent parfaitement.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Partenaire de Croissance</h3>
                <p className="text-gray-400">Notre objectif est votre succès. Nous vous accompagnons à chaque étape pour maximiser votre retour sur investissement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-800 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">Prêt à Transformer Votre Entreprise?</h2>
            <p className="text-gray-400 mb-8">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment l'IA et l'automatisation peuvent propulser votre activité au niveau supérieur.
            </p>
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Votre Nom" className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <input type="email" placeholder="Votre Courriel" className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" />
              </div>
              <div>
                <textarea placeholder="Votre Message" rows="4" className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 w-full md:w-auto shadow-lg"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 border-t border-gray-700 px-4">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} XenaAutomation. Tous droits réservés.</p>
        <p className="text-gray-600 text-sm mt-1">Fièrement au service du Québec.</p>
      </footer>

      {/* Inter font import - typically in <head> but works here for playground */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};