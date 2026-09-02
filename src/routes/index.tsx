import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import brandImg from "@/assets/coastal-business-card.png";
import installedImg from "@/assets/installed-backflow-assembly.png";
import testingImg from "@/assets/backflow-pressure-test.png";
import detailImg from "@/assets/backflow-device-detail.png";
import insulatedImg from "@/assets/insulated-backflow-installation.png";

const brandAsset = { url: brandImg };
const installedAsset = { url: installedImg };
const testingAsset = { url: testingImg };
const detailAsset = { url: detailImg };
const insulatedAsset = { url: insulatedImg };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Backflow Testing Santa Fe TX | Coastal Backflow" },
      { name: "description", content: "Professional backflow testing and prevention service for Santa Fe, Galveston County, League City, Texas City, and nearby areas." },
      { property: "og:title", content: "Coastal Backflow Prevention Service" },
      { property: "og:description", content: "Local backflow testing and prevention service based in Santa Fe, Texas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const phoneDisplay = "832-982-4865";
const phoneHref = "tel:+18329824865";
const email = "coastalbackflowps@gmail.com";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Coastal Backflow home">
            <img src={brandAsset.url} alt="Coastal Backflow Prevention Service" className="h-12 w-28 object-cover object-top sm:w-36" />
            <span className="hidden border-l border-border pl-3 text-xs font-semibold uppercase text-muted-foreground md:block">Santa Fe, Texas</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Main navigation">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#work" className="hover:text-primary">Our Work</a>
            <a href="#area" className="hover:text-primary">Service Area</a>
          </nav>
          <Button asChild variant="utility" size="lg"><a href={phoneHref}><Phone /> <span className="hidden sm:inline">{phoneDisplay}</span><span className="sm:hidden">Call</span></a></Button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
            <img src={testingAsset.url} alt="Pressure gauge in use during backflow testing" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-hero-overlay" />
          </div>
          <div className="relative mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="flex min-h-[580px] flex-col justify-center px-5 py-20 lg:px-8 lg:py-24">
              <div className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-highlight"><MapPin className="size-4" /> Local service based in Santa Fe, Texas</div>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">Professional backflow testing, done right.</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-primary-foreground/80">Straightforward local service for backflow prevention systems across Santa Fe and the surrounding Galveston County area.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg"><a href={phoneHref}><Phone /> Call to schedule</a></Button>
                <Button asChild variant="outline" size="lg"><a href={`mailto:${email}`} className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Mail /> Email us</a></Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-primary-foreground/20 pt-6 text-sm font-medium text-primary-foreground/85">
                <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-highlight" /> Owner operated</span>
                <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-highlight" /> License BP0019825</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-border bg-secondary py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="section-label">Focused local service</p>
                <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Backflow prevention is what we do.</h2>
              </div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                <article className="bg-card p-8">
                  <ShieldCheck className="size-8 text-accent" />
                  <h3 className="mt-8 text-xl font-bold">Backflow testing</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">Professional testing of backflow prevention assemblies using purpose-built testing equipment.</p>
                </article>
                <article className="bg-card p-8">
                  <Wrench className="size-8 text-accent" />
                  <h3 className="mt-8 text-xl font-bold">Prevention service</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">Focused service for backflow prevention systems, with clear communication from first call to completed work.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div><p className="section-label">From the field</p><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Real work. Real equipment.</h2></div>
              <p className="max-w-md leading-7 text-muted-foreground">A closer look at the assemblies, testing tools, and installations Coastal Backflow works with.</p>
            </div>
            <div className="mt-12 grid auto-rows-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <figure className="group relative overflow-hidden rounded-lg sm:row-span-2 lg:col-span-2"><img src={installedAsset.url} alt="Installed backflow prevention assembly beside a brick wall" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></figure>
              <figure className="group relative overflow-hidden rounded-lg lg:col-span-2"><img src={testingAsset.url} alt="Pressure gauge connected to a backflow prevention assembly" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></figure>
              <figure className="group relative overflow-hidden rounded-lg"><img src={detailAsset.url} alt="Backflow prevention valve assembly detail" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></figure>
              <figure className="group relative overflow-hidden rounded-lg"><img src={insulatedAsset.url} alt="Insulated backflow prevention installation" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></figure>
            </div>
          </div>
        </section>

        <section id="area" className="bg-utility text-utility-foreground">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="px-5 py-20 lg:px-8 lg:py-24">
              <p className="section-label text-highlight">Local coverage</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Serving the Texas Gulf Coast area.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-utility-foreground/70">Based in Santa Fe and serving customers throughout nearby communities.</p>
            </div>
            <div className="grid grid-cols-2 border-t border-utility-foreground/15 lg:border-l lg:border-t-0">
              {["Santa Fe", "Galveston County", "League City", "Texas City"].map((place) => <div key={place} className="flex min-h-32 items-center border-b border-r border-utility-foreground/15 px-6 text-lg font-bold sm:min-h-40 sm:px-8">{place}</div>)}
              <div className="col-span-2 flex items-center px-6 py-7 text-sm text-utility-foreground/65 sm:px-8">And surrounding areas</div>
            </div>
          </div>
        </section>

        <section className="bg-accent py-20 text-accent-foreground sm:py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
            <p className="section-label">Ready to schedule?</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-6xl">Talk directly with Coastal Backflow.</h2>
            <p className="mt-5 text-lg">Call or email to discuss your backflow testing needs.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg"><a href={phoneHref}><Phone /> {phoneDisplay}</a></Button>
              <Button asChild variant="outline" size="lg"><a href={`mailto:${email}`} className="border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground hover:text-accent"><Mail /> Send an email</a></Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-utility py-10 text-utility-foreground">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:flex-row sm:items-center lg:px-8">
          <div><p className="font-bold">Coastal Backflow Prevention Service LLC</p><p className="mt-1 text-sm text-utility-foreground/60">Garre Morris, Owner · License BP0019825</p></div>
          <div className="flex flex-col gap-2 text-sm sm:items-end"><a href={phoneHref} className="font-semibold hover:text-highlight">{phoneDisplay}</a><a href={`mailto:${email}`} className="hover:text-highlight">{email}</a></div>
        </div>
      </footer>

      <a href={phoneHref} className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-highlight text-highlight-foreground shadow-xl sm:hidden" aria-label="Call Coastal Backflow"><Phone /></a>
    </div>
  );
}
