export default function MailtoButton() {
  const mailtoLink = 'mailto:example1@exemple.com';

  return (
    <a
      href={mailtoLink}
      className="inline-block bg-secondary-color text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 mx-auto text-base font-caveat text-center no-underline"
    >
      Contacter le refuge
    </a>
  );
}
