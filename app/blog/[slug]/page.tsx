import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Section, PrimaryBtn } from "@/components/ui";
import { C, grad, headingFont, bodyFont, PAGE_PATHS } from "@/lib/brand";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { articleJsonLd, buildMetadata, JsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.intro,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.intro,
          path: `/blog/${post.slug}`,
          datePublished: post.datePublished,
        })}
      />
      <section className="pt-32 pb-16 px-6" style={{ background: C.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <Link href={PAGE_PATHS.blog} className="inline-flex items-center gap-2 text-sm font-semibold mb-8" style={{ color: C.blue, fontFamily: bodyFont }}>
            ← Back to Blog
          </Link>
          <article className="max-w-2xl">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "#EFF4FF", color: C.blue, fontFamily: bodyFont }}>
              {post.cat}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: C.nearBlack, fontFamily: headingFont, letterSpacing: "-0.5px" }}>{post.title}</h1>
            <div className="flex items-center gap-4 text-sm" style={{ color: C.slate, fontFamily: bodyFont }}>
              <time dateTime={post.datePublished}>{post.date}</time>
              <span>·</span>
              <span>{post.read}</span>
            </div>
          </article>
        </div>
      </section>
      <Section>
        <article className="max-w-2xl mx-auto px-6">
          <p className="text-lg leading-relaxed mb-6 font-medium" style={{ color: C.nearBlack, fontFamily: bodyFont }}>{post.intro}</p>
          {post.body.split("\n\n").map((para, i) => (
            <p key={i} className="text-base leading-relaxed mb-5" style={{ color: C.slate, fontFamily: bodyFont }}>{para}</p>
          ))}
        </article>
      </Section>
      <section className="py-16 px-6 mx-6 mb-16 rounded-3xl" style={{ background: grad }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: headingFont }}>See SalesVince in Action</h2>
          <p className="mb-6 text-base" style={{ color: "rgba(255,255,255,0.72)", fontFamily: bodyFont }}>Book a free demo and see exactly how SalesVince can work for your business.</p>
          <PrimaryBtn href={PAGE_PATHS.demo} size="lg">Book Free Demo <ArrowRight size={16} aria-hidden /></PrimaryBtn>
        </div>
      </section>
    </div>
  );
}
