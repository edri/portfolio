export default function Home() {
  return (
    <>
      <section className="before:bg-grey-transparent before:absolute before:inset-0 before:z-0 relative h-screen bg-white bg-miguel bg-contain bg-no-repeat bg-right-bottom font-roboto">
        <div className="relative flex flex-col justify-center text-center h-full w-9/12 text-white z-10">
          <h2 className="text-6xl font-thin mb-4">Hello, I&apos;m</h2>
          <h1 className="text-6xl font-bold mb-5">Miguel Santamaria</h1>
          <h3 className="text-4xl font-thin">and this is my resume.</h3>
        </div>
      </section>
      <section className="p-8">TODO</section>
    </>
  );
}
