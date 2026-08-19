// Client work. Gravis is a young agency and this list is intentionally
// empty for now — the Work page is built to handle that gracefully rather
// than show fake projects.
//
// To add a real project once one is ready, push an object shaped like this:
//
// {
//   id: "client-slug",              // unique, url-safe
//   client: "Client Name",
//   category: "Social Media",       // matches a service name, or your own label
//   summary: "One or two lines on what Gravis did and the approach taken.",
//   tags: ["Instagram", "Paid Ads"],// short capability/platform tags
//   image: "/projects/client-slug.jpg", // add the image to /public/projects
//   link: "https://client-site.com",     // optional — omit if not public
// }
//
// The Work page and ProjectCard component already render this shape —
// no other code changes are needed when you add entries here.
export const projects = [];

// What Gravis is building toward, shown on the Work page while the
// portfolio above is still empty. Edit freely — this is not client work,
// just a description of the kind of projects being taken on.
export const workFocusAreas = [
  {
    title: "Local businesses",
    description:
      "Clinics, studios and neighborhood brands that need a stronger, more consistent presence where their customers already are.",
  },
  {
    title: "Established businesses",
    description:
      "Teams that already have a customer base and want sharper strategy, better creative, and clearer reporting behind their marketing.",
  },
  {
    title: "Founding partners",
    description:
      "A small number of early clients we can work closely with to build real case studies — with full attention and flexibility on scope.",
  },
];
