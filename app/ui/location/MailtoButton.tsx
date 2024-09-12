interface MailtoButtonProps {
  email: string;  // Déclare un type pour les props
}

export default function MailtoButton({ email }: MailtoButtonProps) {
  const mailtoLink = `mailto:${email}`;  // Génère le lien mailto en utilisant l'email passé en prop

  return (
    <a
      href={mailtoLink}
      className="inline-block bg-secondary-color text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 mx-auto text-base font-caveat text-center no-underline"
    >
      Contacter le refuge
    </a>
  );
}
