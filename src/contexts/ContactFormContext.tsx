import { createContext, useContext, useState, ReactNode } from "react";

type ContactFormContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  openContactForm: () => void;
};

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openContactForm = () => setIsOpen(true);

  return (
    <ContactFormContext.Provider value={{ isOpen, setIsOpen, openContactForm }}>
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => {
  const ctx = useContext(ContactFormContext);
  if (!ctx) throw new Error("useContactForm must be used within ContactFormProvider");
  return ctx;
};
