import Button from "../components/Button";

export default function Home() {
  return (
    <section className="hero">
      <h1>Welcome to My Website</h1>

      <p>
        A modern website built with reusable
        components and persistent navigation.
      </p>

      <Button href="/about">
        Get Started
      </Button>
    </section>
  );
}