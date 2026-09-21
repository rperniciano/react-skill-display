/**
 * Renders one JSON-LD `<script>` tag. A plain helper component, not a page,
 * layout or route file, so living under app/ does not make it a route.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // `data` is always one of the builders in app/jsonld.ts: schema.org
      // fields sourced from portfolio-data.ts / translations.ts / a
      // schema-validated article's own metadata, never free-form user input,
      // so JSON.stringify-ing it here is safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
