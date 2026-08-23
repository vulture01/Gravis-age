import Seo from "../components/ui/Seo";
import Container from "../components/ui/Container";
import DiamondMark from "../components/ui/DiamondMark";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page doesn't exist." />
      <section className="flex min-h-[60vh] items-center py-24">
        <Container className="text-center">
          <DiamondMark className="mx-auto h-9 w-9" color="#B6FF00" />
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-gray-400">
            The page you're looking for doesn't exist, or has moved.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/">Back to home</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
