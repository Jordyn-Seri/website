import { Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xl font-bold text-secondary-foreground mb-2">
              Jordyn Seri<span className="text-primary">, PMP</span>
            </p>
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-foreground text-olive">
              Currently accepting new clients
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/jordynseri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="LinkedIn">
              
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hello@jordynseri.com"
              className="w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Email">
              
              <Mail size={20} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full border border-primary/20 flex items-center justify-center text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Back to top">
              
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} Jordyn Seri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;