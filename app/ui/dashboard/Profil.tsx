export default function Profil() {
  return (
    <div className="bg-background-color w-full min-h-screen p-8">
      <label
        htmlFor="my-drawer-2"
        className="btn bg-primary-color hover:bg-secondary-color drawer-button lg:hidden mb-8"
      >
        Menu
      </label>
      <h1 className="text-3xl font-bold text-text-color mb-6">Votre profil</h1>
      <form className="bg-card-bg p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-text-color text-sm font-bold mb-2">
            Prénom :
          </label>
          <input
            type="text"
            id="firstName"
            defaultValue="firstName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-text-color text-sm font-bold mb-2">
            Nom :
          </label>
          <input
            type="text"
            id="lastName"
            defaultValue="lastName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-text-color text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            defaultValue="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-text-color text-sm font-bold mb-2">
            Addresse:
          </label>
          <input
            type="text"
            id="address"
            defaultValue="address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sauvegarder les modifications
        </button>
      </form>
    </div>
  );
}
