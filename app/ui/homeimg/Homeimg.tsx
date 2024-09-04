export default function Homeimg() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          className="hero h-96 mt-8 mb-8 w-11/12 align-middle"
          style={{
            backgroundImage: 'url(/chien.jpg)',
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">Hello there</h1>
              <p className="mb-5 text-3xl">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
